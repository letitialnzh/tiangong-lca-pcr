---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-fish-for-aquaculture-seed-broodstock-or-feed
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Farmed live fish for aquaculture seed, broodstock or feed

## 1. Scope and Applicability

Apply to viable live fish with documented managed-production origin handed over at the first producer gate for aquaculture seed, broodstock or live-fish feed. Each data package declares one purpose and its actual species, cohort and stage. Hatched larvae or fry may be final seed without reaching food market size. Eggs/gametes can be upstream inputs but are not the final reference fish.

Exclude ornamental fish, directly human-food fish, wild fish merely held temporarily without managed production, research-only or recreational-bait purposes, dead feed, fishmeal/oil, non-fish seed/feed organisms, frozen or other processed fish. This semantic boundary is narrower than all nonfood farmed live fish under CPC 04192. The UN classification supports the purpose/origin distinction; the measurement, ledger and boundary details here are this PCR's internal method, not universal historical husbandry or medicine prescriptions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-fish-for-aquaculture-seed-broodstock-or-feed |
| classification_refs | cpc:3.0:04192 (narrower) |
| covered_products | Managed-production live fish; one declared aquaculture seed, broodstock or live-fish-feed purpose |
| excluded_products | Ornamental, direct-food, research-only or recreational-bait fish; merely held wild fish; dead feed, meal/oil; final eggs/gametes; nonfish organisms |
| representative_product | Qualified viable cohort of actual specified species and life stage at producer handover |
| production_route | Owned reproduction/hatchery or actual purchased upstream stage → post-hatch managed rearing only when performed → independent collection from the last actual owned production node → actual bounded live holding → live presentation and handover; suitable seed may pass directly from hatchery to collection without fictitious rearing; spawning parent broodstock_hatch; water-system parent managed_rearing |
| market_state | Viable live at handover, net wet biomass excluding carrier water, oxygen, packaging and nonqualifying dead fish |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Farmed viable live fish of declared aquaculture purpose, species and stage at producer handover |
| How much | 1 kg net viable wet fish biomass; actual count and representative individual mass accompany it |
| How well | Seed: declared stocking stage and health/fitness; broodstock: actual sex, maturity and reproductive fitness; live-fish feed: actual recipient cultured organism and feed suitability; kilograms alone do not establish equivalence |
| How long or cycle | Complete actual cohort cycle and handover period, including applicable parent establishment, repeated spawning cycles, replacement/retirement and opening/closing burden carryover |
| reference_flow_link | `aquaculture_live_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed live fish for declared aquaculture purpose at producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cohort; farmed origin and owned/purchased stages; one seed/broodstock/live-fish-feed purpose; life stage and individual size; viability and health/fitness; parent sex/maturity or feed recipient suitability; net wet mass and actual count/sampling; actual water system and salinity/temperature; cycle/period and parent carryover; actual first producer gate and holding/packing route |

Declare these qualifiers in foreground metadata or the corresponding product, reference-flow and process descriptions; missing qualifiers make the reference definition incomplete. Carrier-water volume, egg count or a universal fish-per-kilogram factor cannot substitute for actual cohort wet-mass measurement.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated qualified viable net wet fish mass per 1 kg reference flow, excluding water, gas, packaging, dead and rejected fish; collect with cp_handover. |
| `actual_count_mass` | all fish transfers | Mass | kg | Count-to-mass requires actual representative sample mass/count for the same species, stage and period with sampling uncertainty; no generic fish-count or egg-count factor. |
| `water_feed_gas_basis` | water; feeds; oxygen | Mass | kg | Volume-to-mass needs actual density and temperature/salinity or gas pressure/temperature/purity; wet/dry feed conversion needs measured moisture; circulation and internal fish transfers retain actual quantities. |
| `energy_units` | electricity; heat | Net calorific value | MJ | 1 kWh = 3.6 MJ; retain original measured units and conversion, do not treat electricity/heat as fuel mass or services as kilograms. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual parent establishment or purchased eggs, larvae, fry or other upstream fish stage, with real origin and corresponding upstream-data interface |
| starting_condition_role | Evidenced stage boundary, never a zero-burden starting point |
| product_classification_scope | Narrower aquaculture seed, broodstock or live-fish-feed subset of CPC 04192; final fish must be hatched and viable |
| recursive_input_rule | For same-category purchased fish record actual stage, origin, quantity and supplier dataset reference; model upstream separately to avoid infinite recursion and duplicate owned stages without deleting real upstream burden |
| upstream_dataset_requirement | Supplier data must match species, stage, purpose, site/geography, period, technology and attribution; disclose and remedy gaps, never default to free input |
| disclosure | All owned/purchased stages, actual life stage, spawning/water-system parent deltas, cohort periods/carryover, shared consumers, viable holding/packing and first producer handover |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_origin` | product_scope | Require documented managed production and one aquaculture purpose/life-stage cohort; mere live holding of wild fish remains outside this farmed PCR. | `un-cpc-3-2025`; `pcr-live-aquaculture-method` |
| `b_owned_purchased` | broodstock_hatch; managed_rearing | Identify every owned/purchased stage and upstream origin. A purchased stage replaces its actual upstream activities with a compatible supplier dataset; it never removes their burdens or duplicates owned reproduction. | `fao-seed-production`; `pcr-live-aquaculture-method` |
| `b_phase_end` | broodstock_hatch; managed_rearing | End actual managed production at the declared suitable live stage. When no separate post-hatch rearing occurs and seed stage/fitness is evidenced, larvae/fry pass directly from hatchery to collection without mandatory rearing, nursery or growout. Require actual owned hatchery or rearing production; merely purchasing finished fish for trading or holding is not this production route. Retain all hatchery burdens; broodstock requires actual maturity/fitness and feed fish actual recipient/use suitability. | `pcr-live-aquaculture-method` |
| `b_deltas` | broodstock_hatch; managed_rearing | Spawning alternatives attach to broodstock_hatch; water-system alternatives attach to managed_rearing. Current event records and site topology must demonstrate changed resource, calculation and verification categories. Do not add duplicate biological outputs for alternative labels. | `fao-seed-production`; `ifas-ras-health`; `pcr-live-aquaculture-method` |
| `b_responsibility` | harvest; holding; presentation | Collection independently removes the selected cohort from production. Any bounded holding maintains the actual usable live state; presentation protects and hands over that same live fish. Preserve each internal mass/count and source cohort; omit a conditional node only with actual non-use evidence. | `fao-live-fish-handling`; `pcr-live-aquaculture-method` |
| `b_complete` | all selected nodes | Include actual feed, fertilisation, reproduction/health materials, water, pumping/aeration/light electricity, heat, fuel, oxygen, chemicals, packaging and losses. Central utilities/residuals records retain originating stage, run and period; no selected stage becomes resource-free. | `pcr-live-aquaculture-method` |
| `b_period_assets` | broodstock_hatch; utilities | Enumerate parent establishment, each spawning cycle, replacement/retirement, fish cohort phases, opening/closing stock, asset service periods and consumers. Carry attributable burdens forward with standing stock and reconcile terminal fates; disclose any asset cut-off and sensitivity. | `pcr-live-aquaculture-method` |
| `b_gate` | presentation | Include actual owned packing/loading and own transport only to the explicitly declared first producer handover. Exclude subsequent recipient transport, stocking, growout, feeding/use and downstream packaging fate; disclose supplier and treatment boundary interfaces. | `pcr-live-aquaculture-method` |
| `b_streams` | residuals | Classify each source-stage mortality, escaped fish, nonviable egg, culture waste, solids, treatment sludge, effluent, chemical and refrigerant event. Separate external treatment handoff from direct environmental release and retain upstream loss burdens; no unobserved zero or automatic avoided credit. | `pcr-live-aquaculture-method` |

## 6. Process Inventory Structure

Declare batch, campaign or continuous mode, run/period, cleaning/changeover and actual outputs for every selected node. Central utility/residual ledgers attribute each resource/event once by source stage; node prose/material cards must not add the same exchange twice. External services and shared asset activity retain true units in cp_service_utilities; cp_service_presentation/cp_shared_utilities and become concrete service exchanges only after verification.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `broodstock_hatch` | Owned broodstock and hatchery | `conditional` | Owned broodstock maintenance, spawning or egg incubation is performed | managed biological production | actual eggs or hatched fish and retained broodstock |
| `live_feed` | Owned live-food cultivation | `conditional` | Algae, rotifers, Artemia or other live-food organisms are cultivated on site | supporting biological production | actual edible live-food biomass transferred to fish stages |
| `managed_rearing` | Selected managed fish rearing | `conditional` | Separate post-hatch larval, fry, nursery or later rearing actually occurs; missing records do not justify omission, and actual hatchery-only seed does not create this phase | managed biological production | actual live cohort ready for harvest at the declared life stage |
| `harvest` | Live cohort collection | `required` | Collection from the last actual owned production node: managed_rearing when performed, or directly broodstock_hatch for actual hatchery-only seed | independent harvest | actual collected viable fish handed to holding or presentation |
| `holding` | Bounded live holding and acclimation | `conditional` | Collected fish undergo an actual pre-handover viability-maintenance intervention | preservation stabilization | actual viable fish after bounded holding |
| `presentation` | Live presentation and producer handover | `required` | First producer handover, including packaging/loading only when performed | packaging and presentation | qualifying live fish at producer handover |
| `utilities` | Stage-linked utilities and direct releases | `required` | Record actual resources for every selected foreground node | shared utility ledger | resources attributed once to each actual consuming node |
| `residuals` | Stage-linked effluent and residual management | `conditional` | Any actual effluent, mortality, solids, escape, leakage or treatment event occurs | residual fate and treatment | actual treatment handoffs or direct environmental releases |

### Process: Owned broodstock and hatchery (`broodstock_hatch`)

Broodstock identity, sex and maturity, each spawning event, incubation and hatching are linked to the offspring cohort. Natural spawning, environmentally induced spawning and assisted/artificial fertilization are alternatives under this managed-production parent; actual treatment, handling, water/thermal/light changes and gamete collection define the delta. Use one method per event; different documented events may coexist. Purchased fertilized eggs bypass owned spawning, while purchased fry bypass the corresponding owned hatchery stages. Eggs and gametes are counted and measured at transfer and never become the final live-fish reference. Retained parent stock is standing stock, not an extra sale.

#### Inputs

##### Product flows

###### Purchased broodstock replacements (`hatchery_parent_stock`)

Actual species, sex, maturity and upstream producer burdens of parent replacements; track retained breeders separately.

- Selected flow: Purchased broodstock replacements
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_broodstock_hatch divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_broodstock_hatch`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

#### Outputs

##### Product flows

###### Hatched live fish to rearing or direct collection (`hatched_fish_transfer`)

Record actual surviving hatched larval/fry mass and count; link by event to actual rearing intake, or harvest_stock_input for actual hatchery-only seed. Retain preceding failed-egg and hatch-loss burdens; the same fish do not enter both paths.

- Selected flow: Hatched live fish to rearing or direct collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_broodstock_hatch divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_broodstock_hatch`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

### Process: Owned live-food cultivation (`live_feed`)

This is the food-organism culture boundary, separate from the fish sold as live feed. Identify each culture species, inoculum/cysts, food and enrichment, fertiliser, salinity media, cleaning, aeration, heating and lighting. Utilities and water cross the utility ledger once with live_feed as consumer. Harvested feed transfer has actual wet/dry matter and count/concentration as applicable; discarded cultures, cyst shells and culture water have recorded fates. Purchased live food replaces the corresponding owned culture with supplier burden, never a free culture output.

#### Inputs

##### Product flows

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

#### Outputs

##### Product flows

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

### Process: Selected managed fish rearing (`managed_rearing`)

Include this node only for actual separate post-hatch rearing; qualified hatchery-only seed may go directly to collection, but missing records do not establish phase absence. Declare each actual phase; a larval/fry seed gate can end before nursery or growout. The parent is managed_rearing: pond culture changes fertilisation, sediment and drainage records; flow-through changes abstraction/discharge throughput; tank/RAS changes recirculation, make-up, filtration, backwash, aeration and energy records. Choose actual topology per phase and system; phases with different verified systems can coexist, mutually exclusive labels cannot describe the same water loop. Current site diagrams and meters establish these deltas, not a species-wide technology assumption. Record natural pond food as an ecological contribution, with actual fertilisation burdens; do not invent purchased feed for it. Wild-derived inputs qualify for farmed final origin only after documented managed production, not temporary holding.

#### Inputs

##### Product flows

###### Purchased fish at declared upstream life stage (`purchased_fish_stage`)

Stage-specific supplier burden, species, count, viable wet mass and managed-origin history replace only genuinely purchased stages.

- Selected flow: Purchased fish at declared upstream life stage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_managed_rearing`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Own hatched fish entering rearing (`owned_hatched_input`)

Match hatched_fish_transfer and recipient cohort; internal transfer carries prior burden without duplicate upstream supplier production.

- Selected flow: Own hatched fish entering rearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_managed_rearing`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

#### Outputs

##### Product flows

###### Reared live fish ready for collection (`reared_live_transfer`)

Actual viable mass/count at declared end stage; do not force larvae/fry to market-size growout or set internal mass to one kilogram.

- Selected flow: Reared live fish ready for collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_managed_rearing`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

### Process: Live cohort collection (`harvest`)

Collection ends the last actual owned production phase: receive reared_live_transfer when rearing occurs, or directly hatched_fish_transfer for actual hatchery-only seed. It establishes recoverable fish, returned standing stock, mortality and incidental material. This independent responsibility records netting, pumping, crowding and transfer losses separately from biological growth and later acclimation; it creates no additional growth. Source pond/tank, cohort and collection time persist through pooling. Actual harvested mass is an internal transfer, not the fixed final kilogram.

#### Inputs

##### Product flows

###### Managed fish entering live collection (`harvest_stock_input`)

Match actual reared_live_transfer when rearing occurs, or hatched_fish_transfer for actual hatchery-only seed. Uniquely link source node/unit, cohort, event and mass/count, carrying all prior burdens; do not enter the same fish through both paths.

- Selected flow: Managed fish entering live collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_harvest divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_harvest`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

#### Outputs

##### Product flows

###### Collected viable fish to holding or presentation (`collected_live_transfer`)

Actual wet mass/count after collection loss; distinguish fish returned to standing stock, intended transfers and dead fish.

- Selected flow: Collected viable fish to holding or presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_harvest divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_harvest`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

### Process: Bounded live holding and acclimation (`holding`)

Define start/end times and before/after viable state, actual water, oxygen, salinity, temperature, fasting or feed and health intervention. Holding preserves the declared usable live stage; substantial production belongs in managed_rearing. Include measured mortality, rejection, maintenance feed, water replacement and thermal-control releases. No killing or chilling-to-death is a live preservation option. Provider health/holding activity is retained in its true service unit in the auxiliary service ledger.

#### Inputs

##### Product flows

###### Collected live fish entering bounded holding (`holding_live_input`)

Use collected_live_transfer and actual holding start, purpose and viability.

- Selected flow: Collected live fish entering bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_holding divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_holding`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

#### Outputs

##### Product flows

###### Viable fish after bounded acclimation (`held_live_transfer`)

Actual wet mass/count accepted into presentation after all holding losses; elapsed period and viability are measured.

- Selected flow: Viable fish after bounded acclimation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_holding divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_holding`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

### Process: Live presentation and producer handover (`presentation`)

Receive actual live fish from harvest or holding; declare unpackaged tank handover or actual bag/container packing. Record containment, liners, boxes, labels, loading and reusable-container allocation, with separate packaging/water/gas quantities. Maintain viability and intended aquaculture purpose through acceptance. Packaging protects the same live fish and never adds to reference biomass. Own transport occurs here only when the declared first producer gate actually includes it, with route and responsibility documented; recipient transport, stocking and use after that gate are outside.

#### Inputs

##### Product flows

###### Actual live fish entering presentation (`presentation_live_input`)

Match collected_live_transfer or held_live_transfer according to actual route; do not count both for one fish.

- Selected flow: Actual live fish entering presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_stock_presentation divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_presentation`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

#### Outputs

##### Product flows

###### Farmed live fish for declared aquaculture purpose at producer handover (`aquaculture_live_handover`)

Exactly one declared seed, broodstock or live-fish-feed purpose, species and life-stage cohort; viable net wet fish only, after pre-gate rejection and mortality.

- Selected flow: Farmed live fish for declared aquaculture purpose at producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_handover`
- Sources: `pcr-live-aquaculture-method`
- Range: Internal one-kilogram normalization definition
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `pcr-live-aquaculture-method`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

### Process: Stage-linked utilities and direct releases (`utilities`)

This ledger owns supplied water, own abstraction, electricity, fuels, oxygen, heat and direct utility emissions for all selected processes. Record source-stage, water loop, meter, run and period for every quantity, including broodstock, hatchery, live-food culture, rearing, harvest, holding, presentation and own treatment. Shared pumps, blower, filters, UV, chiller, heating and backup generator have a consumer/period matrix. Internal recirculation is measured auxiliary activity, not another external water input. Same source material at different stages is metered or attributed once and never silently duplicated.

#### Inputs

##### Product flows

###### Externally supplied treated process water suitable for actual fish use (`supplied_treated_water`)

Only documented externally supplied treated industrial process water, with fish-contact/use suitability. No seawater, own abstraction, internal circulation or effluent; supplier treatment included upstream is not repeated.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Externally supplied treated process water suitable for actual fish use
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: unresolved
- Amount rule: Actual attributable quantity from cp_water_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_utilities`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average AC below 1 kV consumption mix to user (`cn_low_voltage_electricity`)

Use only documented compatible CN grid-average low-voltage consumption; allocate metered electricity once to actual stage, run and period.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average AC below 1 kV consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: fixed
- Amount rule: Actual attributable quantity from cp_energy_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_utilities`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual electricity supply (`other_electricity`)

Other actual purchased country, voltage, provider or supply technology stays separately specified; exclude electricity already in cn_low_voltage_electricity. Own generation is internal auxiliary activity in cp_energy_utilities, with its fuel/direct releases counted once and no second purchased-electricity exchange.

- Selected flow: Other actual electricity supply
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable quantity from cp_energy_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_utilities`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual supplied oxygen for live-fish or culture use (`supplied_oxygen`)

Actual gas purity, phase, compression and delivery specification; weigh supply/use or use measured gas conditions with verified density, never an unqualified volume-to-kg assumption.

- Selected flow: Actual supplied oxygen for live-fish or culture use
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_material_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_utilities`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased thermal energy (`purchased_heat`)

Actual delivered heat for incubation, rearing, culture or holding; purchased thermal energy differs from own heater fuel and useful cooling activity.

- Selected flow: Actual purchased thermal energy
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable quantity from cp_energy_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_utilities`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

#### Outputs

##### Product flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

###### Carbon dioxide fossil to unspecified air from actual combustion (`direct_fossil_co2`)

Actual direct fossil-fuel carbon release only; independent measured fuel-carbon/factor evidence, oxidation and equipment allocation. Not biogenic respiration, supplied CO2 or CO2 equivalents.

- Selected flow: Carbon dioxide fossil to unspecified air from actual combustion `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: fixed
- Amount rule: Actual attributable quantity from cp_release_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release_utilities`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Stage-linked effluent and residual management (`residuals`)

Keep source-stage event records for every selected node even when treatment is centralized. Each discharge is either a waste handoff to a named external treatment or an actual release to a declared environment after any owned treatment; never both for the same stream. Own treatment inputs, sludge, reject/backwash and measured final releases are included, with utilities assigned here once. Record mortalities, nonviable eggs, retired broodstock fate, escapes and leaks without default zero. Classify intentional saleable outputs separately; disposal and an alleged avoided-burden credit cannot erase their upstream burdens.

#### Inputs

##### Product flows

##### Waste flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Elementary flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

#### Outputs

##### Product flows

No separate exchange in this group; actual events follow the stated responsibility and source-stage ledgers.

##### Waste flows

###### Actual wastewater handed to external treatment (`external_effluent_treatment`)

Actual measured wastewater mass, chemistry, provider and boundary, excluding streams whose final environmental releases are already modelled here.

- Selected flow: Actual wastewater handed to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_water_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_residuals`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual water released to declared receiving environment (`direct_water_discharge`)

Measured final water release after own treatment or actual untreated release, source-stage reconciled; exclude water handed to external treatment and recirculated water.

- Selected flow: Actual water released to declared receiving environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_water_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_residuals`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual fish escapes to declared natural environment (`fish_escapes`)

Actual species, wet mass/count, source-stage, event and destination; population consequence disclosure accompanies elementary removal/release classification, no blanket zero.

- Selected flow: Actual fish escapes to declared natural environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable quantity from cp_residual_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual_residuals`
- Sources: `pcr-live-aquaculture-method`
- Range: Replaceable broad provisional QA screen; actual records take precedence
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
| `a_precedence` | common production burdens | Subdivide independently measured activities first, then apply an evidenced causal physical relationship to remaining common burdens. Document economic allocation at the common handover only if physical causality cannot be established, with price period, all output values and sensitivity. Wet mass alone is not presumed causal across seeds, broodstock and feed fish. | `ghg-product-standard-2011`; `pcr-live-aquaculture-method` |
| `a_output_set` | hatchery_other_products; rearing_other_products | Enumerate every intended saleable species/cohort/life stage/purpose, its measured quantity and own handover. Classify unsold residue, mortality, waste and retained stock separately. Assign each common burden once; an internal transfer is never another sale. | `pcr-live-aquaculture-method` |
| `a_modes` | all selected nodes | Declare cohort batch, repeated spawning campaign or continuous/overlapping flow mode with run/period start and end. Link feed, utilities, outputs, cleaning and changeover events to the applicable run; allocate common idle/changeover burdens across actual beneficiaries with documented causal activity. | `pcr-live-aquaculture-method` |
| `a_parents_periods` | broodstock_hatch | Track parent acquisition/establishment and maintenance across spawning cycles; allocate actual parent-service burden to offspring events using evidenced reproductive contribution or another justified causal relation. Reconcile opening/closing parent stock, replacements, mortality and terminal sale/disposal, including residual unassigned burden on retirement. Do not charge full parent establishment anew to every spawn. | `pcr-live-aquaculture-method` |
| `a_cohort_carryover` | managed_rearing; holding | Keep opening burden plus actual current inputs attached to the cohort. Reconcile surviving closing stock, qualified handovers, internal transfers, mortality/rejection and escapes by phase. Carry closing stock and its burden into the next period; retain losses in surviving product burdens without crediting dead fish as equivalent live output. | `pcr-live-aquaculture-method` |
| `a_shared` | utilities; residuals; presentation | For each shared water loop, pump, blower, thermal system, filter, hatchery room or reusable container, enumerate actual consuming nodes/cohorts and periods. Use submeters first, then measured power-time, treated throughput, occupancy-time or another evidenced driver matched to the asset. Reconcile total shares to the asset ledger and account for maintenance/replacement and realized reuse once. | `pcr-live-aquaculture-method` |
| `a_services` | cp_service_utilities; cp_service_presentation; cp_shared_utilities | Retain diagnostic tests, holding services and within-gate transport in actual test, fish-day, tonne-kilometre or provider activity units with property/unit verification before exchange binding. Unknown service identities stay auxiliary evidence and unresolved metadata; never invent kg of generic service. | `pcr-live-aquaculture-method` |
| `a_fates` | residuals | Keep treatment and collection burdens of mortality, failed eggs, waste and effluent within the product system. Report any distinct substitution scenario separately with evidence; do not deduct an unverified avoided product or dilute losses with transport water/packaging mass. | `pcr-live-aquaculture-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_handover` | presentation | qualified reference fish | weighing and acceptance | species; cohort; purpose; life_stage; gate; dispatch_time; net_viable_fish_mass; count; sample_count; sample_mass; scale_id; mortality; fitness; maturity_or_feed_suitability | Drain/tare consistently without harming fish; calibrated net weighing or representative cohort sampling paired with actual counts; reconcile receiver acceptance; per 1 kg reference flow; normalize actual attributable quantity by qualified net viable fish mass; protocol owning process: presentation; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; count | each handover | complete cohort plus dispatch period | producer gate | per 1 kg reference flow | calibration; sampling uncertainty; species/purpose and acceptance evidence |
| `cp_stock_broodstock_hatch` | broodstock_hatch | cohort and parent stock transfers | cohort ledger | cohort; parent_id; species; origin; stage; run; period; count; wet_mass; eggs; hatch; growth; mortality; escapes; transfer; opening; closing; retirement_fate; burden_carryover | Event-linked counts and representative mass measurements; independently document parent spawning and managed-production history; per 1 kg reference flow; retain internal actual quantities and attributed opening/closing burdens; protocol owning process: broodstock_hatch; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; count; time | each transfer/event and period close | parent establishment through retirement and cohort handover | actual source and recipient nodes | per 1 kg reference flow | batch linkage; count reconciliation; origin and retirement evidence |
| `cp_stock_managed_rearing` | managed_rearing | cohort and parent stock transfers | cohort ledger | cohort; parent_id; species; origin; stage; run; period; count; wet_mass; eggs; hatch; growth; mortality; escapes; transfer; opening; closing; retirement_fate; burden_carryover | Event-linked counts and representative mass measurements; independently document parent spawning and managed-production history; per 1 kg reference flow; retain internal actual quantities and attributed opening/closing burdens; protocol owning process: managed_rearing; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; count; time | each transfer/event and period close | parent establishment through retirement and cohort handover | actual source and recipient nodes | per 1 kg reference flow | batch linkage; count reconciliation; origin and retirement evidence |
| `cp_stock_harvest` | harvest | cohort and parent stock transfers | cohort ledger | cohort; parent_id; species; origin; stage; run; period; count; wet_mass; eggs; hatch; growth; mortality; escapes; transfer; opening; closing; retirement_fate; burden_carryover | Event-linked counts and representative mass measurements; independently document parent spawning and managed-production history; per 1 kg reference flow; retain internal actual quantities and attributed opening/closing burdens; protocol owning process: harvest; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; count; time | each transfer/event and period close | parent establishment through retirement and cohort handover | actual source and recipient nodes | per 1 kg reference flow | batch linkage; count reconciliation; origin and retirement evidence |
| `cp_stock_holding` | holding | cohort and parent stock transfers | cohort ledger | cohort; parent_id; species; origin; stage; run; period; count; wet_mass; eggs; hatch; growth; mortality; escapes; transfer; opening; closing; retirement_fate; burden_carryover | Event-linked counts and representative mass measurements; independently document parent spawning and managed-production history; per 1 kg reference flow; retain internal actual quantities and attributed opening/closing burdens; protocol owning process: holding; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; count; time | each transfer/event and period close | parent establishment through retirement and cohort handover | actual source and recipient nodes | per 1 kg reference flow | batch linkage; count reconciliation; origin and retirement evidence |
| `cp_stock_presentation` | presentation | cohort and parent stock transfers | cohort ledger | cohort; parent_id; species; origin; stage; run; period; count; wet_mass; eggs; hatch; growth; mortality; escapes; transfer; opening; closing; retirement_fate; burden_carryover | Event-linked counts and representative mass measurements; independently document parent spawning and managed-production history; per 1 kg reference flow; retain internal actual quantities and attributed opening/closing burdens; protocol owning process: presentation; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; count; time | each transfer/event and period close | parent establishment through retirement and cohort handover | actual source and recipient nodes | per 1 kg reference flow | batch linkage; count reconciliation; origin and retirement evidence |
| `cp_material_broodstock_hatch` | broodstock_hatch | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: broodstock_hatch; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_material_live_feed` | live_feed | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: live_feed; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_material_managed_rearing` | managed_rearing | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: managed_rearing; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_material_harvest` | harvest | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: harvest; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_material_holding` | holding | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: holding; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_material_presentation` | presentation | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: presentation; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_material_utilities` | utilities | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: utilities; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_material_residuals` | residuals | physical feeds and materials | receipts and use ledger | material; composition; formulation; active_substance; wet_mass; dry_matter; density; gas_conditions; stage; run; period; opening; receipts; closing; return; destination | Weigh/meter actual use; reconcile stocks and supplier primary upstream records; distinguish feed offered, consumed and left over; per 1 kg reference flow; attribute actual physical quantities once by source stage and qualified net viable fish mass; protocol owning process: residuals; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg | each use/batch with period reconciliation | complete actual phases and cleaning/changeovers | selected foreground plus actual supplier | per 1 kg reference flow | supplier specification; moisture/density evidence; authorisation where relevant |
| `cp_water_utilities` | utilities | water inputs and stream fates | meter and discharge ledger | source; basin; loop; supplied_or_abstracted; volume; density; start; end; flow; stage; treatment; discharge_destination; recirculation | Calibrated meters and actual density/conditions; distinguish intake, circulation, make-up, evaporation, backwash and final discharge; pair sampling with flow time; per 1 kg reference flow; allocate measured actual external water once; no repeated circulation; protocol owning process: utilities; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; m3; time | each loop and event with periodic totals | complete selected phases and treatment periods | actual sources, consumers and receiving environments | per 1 kg reference flow | meter calibration; water balance; source and treatment boundary records |
| `cp_water_residuals` | residuals | water inputs and stream fates | meter and discharge ledger | source; basin; loop; supplied_or_abstracted; volume; density; start; end; flow; stage; treatment; discharge_destination; recirculation | Calibrated meters and actual density/conditions; distinguish intake, circulation, make-up, evaporation, backwash and final discharge; pair sampling with flow time; per 1 kg reference flow; allocate measured actual external water once; no repeated circulation; protocol owning process: residuals; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; m3; time | each loop and event with periodic totals | complete selected phases and treatment periods | actual sources, consumers and receiving environments | per 1 kg reference flow | meter calibration; water balance; source and treatment boundary records |
| `cp_energy_utilities` | utilities | actual electricity heat and fuel | meters and equipment logs | carrier; supply_country; voltage; provider; equipment; stage; run; period; kWh; MJ; fuel_mass; density; operating_time; own_generation | Read calibrated meters and reconcile fuels to equipment use, stock and generator output; verify supply qualifiers; per 1 kg reference flow; actual energy/fuel attributed once; 1 kWh = 3.6 MJ; protocol owning process: utilities; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | MJ; kWh; kg; time | meter interval and each fuel event | complete operating, idle and changeover periods | all actual consuming nodes | per 1 kg reference flow | meter calibration; invoices; generator and supply reconciliation |
| `cp_release_utilities` | utilities | substance and gas releases | sampling and mass balance |substance; species_basis; medium; source_stage_event_id; loop; final_outfall_id; sample_time; raw_concentration_unit; concentration; background; raw_flow_unit; flow; duration; lab_method; detection_limit; quantification_limit; fuel_carbon; factor; oxidation; refrigerant_stocks; inlet_id; inlet_volume; inlet_concentration; outlet_volume; outlet_concentration; volume_unit; gross_outlet_load; inlet_load; stock_and_other_water_fates; background_attribution_method; attributed_background_load; uncertainty | Match inlet and outlet concentration/volume/time independently, retain gross and inlet substance loads with their own units, background origin, stocks/other fates and QA, and apply integrated_release for inventory-basis selection and any justified attribution; use actual carbon balance or sourced equipment factors for combustion and named refrigerant balance; per 1 kg reference flow, attribute each actual event once and disclose uncertainty/nondetects; protocol owning process: utilities; retain source-stage, event, consumer and period links. | kg substance; concentration; flow; time | representative actual events and periods | complete selected phases and treatment | source stages and actual receiving media | per 1 kg reference flow | laboratory QA; representative sampling; factor applicability and stock reconciliation |
| `cp_release_residuals` | residuals | substance and gas releases | sampling and mass balance |substance; species_basis; medium; source_stage_event_id; loop; final_outfall_id; sample_time; raw_concentration_unit; concentration; background; raw_flow_unit; flow; duration; lab_method; detection_limit; quantification_limit; fuel_carbon; factor; oxidation; refrigerant_stocks; inlet_id; inlet_volume; inlet_concentration; outlet_volume; outlet_concentration; volume_unit; gross_outlet_load; inlet_load; stock_and_other_water_fates; background_attribution_method; attributed_background_load; uncertainty | Match inlet and outlet concentration/volume/time independently, retain gross and inlet substance loads with their own units, background origin, stocks/other fates and QA, and apply integrated_release for inventory-basis selection and any justified attribution; use actual carbon balance or sourced equipment factors for combustion and named refrigerant balance; per 1 kg reference flow, attribute each actual event once and disclose uncertainty/nondetects; protocol owning process: residuals; retain source-stage, event, consumer and period links. | kg substance; concentration; flow; time | representative actual events and periods | complete selected phases and treatment | source stages and actual receiving media | per 1 kg reference flow | laboratory QA; representative sampling; factor applicability and stock reconciliation |
| `cp_residual_residuals` | residuals | mortality solids waste and escapes | fate ledger | source_stage; event; species_or_material; count; wet_mass; moisture; collection; storage; reuse; retirement; escape_destination; treatment_provider; fate | Weigh/count each actual residual and event; reconcile source-stage ledger to centralized treatment or final receiving environment; per 1 kg reference flow; retain loss burdens and reconcile once to actual fate; protocol owning process: residuals; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | kg; count; time | each loss/treatment event and period close | all selected stages including broodstock retirement | actual source and receiving treatment | per 1 kg reference flow | weighing; waste handoff receipt; source-to-fate trace |
| `cp_shared_utilities` | utilities | shared infrastructure and reusable assets | consumer period matrix | asset; service_period; consuming_node; cohort; maintenance; replacement; lifetime_evidence; power_time; throughput; occupancy_time; realized_reuse; total_burden; assigned_shares | Collect actual asset records and submetered or causal activity per consumer/period; reconcile total service and burden without repeated full asset charge; per 1 kg reference flow; retain activity in its true unit and allocate burden once; protocol owning process: utilities; retain actual source-stage, event, consumer and period links; records owned here are attributed once. | asset-specific activity; time; kg replacement | each service period and replacement | actual asset service periods including carryover | all actual consumers of each shared asset | per 1 kg reference flow | asset evidence; driver suitability; shares reconciliation |
| `cp_service_utilities` | utilities | contracted services and own pre-gate logistics | provider activity ledger | provider; activity; actual_unit; property; quantity; stage; period; load; distance; responsibility; gate; upstream_boundary | Use actual tests, fish-days, tonne-kilometres or provider activity; verify compatible property/unit before concrete exchange; document own vehicle fuel separately; per 1 kg reference flow; normalize attributable service without converting a generic service to kg; protocol owning process: utilities; retain actual source-stage, event, consumer and period links; records owned here are attributed once. This protocol owns actual diagnostic, health or holding-service activity linked to each actual consuming stage. | test; fish-day; tkm; provider activity | each service event | actual declared pre-gate period | actual provider and consumers | per 1 kg reference flow | contract; provider method and boundary; actual route/gate evidence |
| `cp_service_presentation` | presentation | contracted services and own pre-gate logistics | provider activity ledger | provider; activity; actual_unit; property; quantity; stage; period; load; distance; responsibility; gate; upstream_boundary | Use actual tests, fish-days, tonne-kilometres or provider activity; verify compatible property/unit before concrete exchange; document own vehicle fuel separately; per 1 kg reference flow; normalize attributable service without converting a generic service to kg; protocol owning process: presentation; retain actual source-stage, event, consumer and period links; records owned here are attributed once. This protocol owns actual loading or within-gate logistics activity with evidenced gate and consumers. | test; fish-day; tkm; provider activity | each service event | actual declared pre-gate period | actual provider and consumers | per 1 kg reference flow | contract; provider method and boundary; actual route/gate evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cohort_inventory` | all inventory rows | Divide actual attributable quantity by net viable wet mass of the same qualifying handover cohort; final reference fish is fixed at 1 kg, internal transfers retain measured amounts; carry undelivered closing stock/burden forward and do not repeat it across handovers. | cp_handover; cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation; actual stage ledgers | actual inventory per 1 kg reference flow | `pcr-live-aquaculture-method` |
| `sample_biomass` | actual fish count records | Divide actual representative sample wet mass by sampled count and multiply actual qualifying count of the same cohort; document stratification, stage and uncertainty, preferring available direct net weighing. | cp_handover; cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation | actual cohort wet mass and uncertainty | `pcr-live-aquaculture-method` |
| `integrated_release` | direct substance releases | For each actual waterborne substance and receiving medium, first retain gross outlet load L_out = sum(C_out,k * V_out,k), using concentration and discharged volume matched to each representative interval, with explicit unit and elemental/species conversions. Independently retain inlet load L_in = sum(C_in,j * V_in,j) for the same period/basis, other water fates, stocks and uncertainty. Gross outlet load is the default direct-release inventory; an out-minus-in balance is a separate diagnostic, not automatically an emission or removal credit. A foreground-attributable release may replace the gross inventory only under a documented, independently justified source/fate method that identifies the inlet/background share actually reaching that outlet and accounts for other outputs, retention, transformation and stock changes; retain both load records, the explicit attribution formula and applicability evidence, and use only one inventory representation. Never assume equal inlet/outlet volumes or substitute (C_out - C_background) * V_out without that evidence. Negative or uncertain differences remain review findings, not automatic negative emissions, uptake credits or zero. Retain nondetect handling and laboratory QA; missing volume, matching or attribution evidence blocks the affected result, and treatment-service expenditure cannot determine release mass. | cp_water_utilities; cp_water_residuals; cp_release_utilities; cp_release_residuals | gross outlet and inlet load records, separate diagnostic balance and one justified release inventory per substance/medium | `pcr-live-aquaculture-method` |
| `attribution_ledger` | shared outputs periods and assets | Measure independently first, then attribute common burden by demonstrated causal activity; shares sum to actual common total. Opening burden plus current inputs reconcile to actual handovers, closing stock and declared retirement fate without repeated attribution. | cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation; cp_shared_utilities; cp_service_utilities; cp_service_presentation | evidenced attributed-burden ledger | `pcr-live-aquaculture-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_trace` | all nodes | Cover each actual source stage and parent spawning event; match origin, count, mass, period, purpose and handovers, retaining source shares through pooling. | cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation event chain and supplier primary records |
| `dq_quantity` | all amounts | Actual collected quantities take precedence; broad provisional ranges only screen outliers, never replace measurement, cap, clip or infer zero. Disclose sampling, factor and allocation uncertainty. For nondetects retain detection/quantification limits, censored-result method and bounds; never treat a nondetect as exact zero. Link final-outfall samples to source-stage events, measured flow/duration and original units. | calibration, sampling and outlier review |
| `dq_sources` | all supplier and release records | Check period, site, technology, species/stage and unit match; historical FAO examples support qualitative process understanding only, not current dosage, survival, stocking or feed-factor defaults. | evidence applicability assessment; method and supplier boundaries |
| `dq_complete` | all selected nodes | Distinguish actual non-use, measured zero and missing data; identify release media, treatment fate and shared consumers; missing data never auto-fill zero. | cp_water_utilities; cp_water_residuals, cp_release_utilities; cp_release_residuals, cp_residual_residuals and shared matrix |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_hatchery_eggs_gametes` | `broodstock_hatch`; inputs; product | Identify and separately collect every actual exchange covered by “Purchased eggs or gametes for incubation”; retain all following collection, quantity and normalization obligations: Measure actual wet material and egg/gamete count with fertilization and viability; this material is not final fish. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_stock_broodstock_hatch divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_stock_broodstock_hatch` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_broodstock_feed` | `broodstock_hatch`; inputs; product | Identify and separately collect every actual exchange covered by “Broodstock feed”; retain all following collection, quantity and normalization obligations: Actual diet by wet/dry matter, supplier and spawning period; include maintenance between spawning events. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_broodstock_hatch divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_broodstock_hatch` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_reproduction_health_materials` | `broodstock_hatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual reproduction and hatchery health materials”; retain all following collection, quantity and normalization obligations: Conditional individual chemicals, hormones, disinfectants and consumables; actual formulation and active substance, authorisation and spent fate are required, with no prescribed dose. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_broodstock_hatch divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_broodstock_hatch` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_other_products` | `broodstock_hatch`; outputs; product | Identify and separately collect every actual exchange covered by “Other intended hatchery outputs at their own handover”; retain all following collection, quantity and normalization obligations: Enumerate actual sold eggs, other cohorts or retired saleable parent stock separately with own state, purpose, destination and attribution; retained parent biomass is not sold output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_stock_broodstock_hatch divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_stock_broodstock_hatch` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_feed_culture_inoculum` | `live_feed`; inputs; product | Identify and separately collect every actual exchange covered by “Live-food inoculum or cysts”; retain all following collection, quantity and normalization obligations: Actual culture species and purchased seed/cyst quantities with upstream burdens. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_live_feed divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_live_feed` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_feed_culture_nutrients` | `live_feed`; inputs; product | Identify and separately collect every actual exchange covered by “Culture food, nutrients and enrichment materials”; retain all following collection, quantity and normalization obligations: Split actual food, nutrients, enrichment and fertiliser by composition and dry matter; include all resources used to produce the transferred food. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_live_feed divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_live_feed` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_feed_culture_media` | `live_feed`; inputs; product | Identify and separately collect every actual exchange covered by “Culture salts, media and cleaning materials”; retain all following collection, quantity and normalization obligations: Actual salinity salts, substrate and disinfectant inputs; record spent medium and residue fates. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_live_feed divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_live_feed` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_cultured_food_transfer` | `live_feed`; outputs; product | Identify and separately collect every actual exchange covered by “Cultured live food transferred to fish”; retain all following collection, quantity and normalization obligations: Actual edible biomass and concentration/count, moisture and recipient stage; wet and dry food cannot be interchanged without measured moisture. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_live_feed divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_live_feed` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_feed` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Purchased fish diets or live food”; retain all following collection, quantity and normalization obligations: Record larval, nursery and any later diet separately, actual wet/dry matter, supplier, composition, offered quantity and leftovers; purchased fish feed organism is an input, not this reference product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_managed_rearing` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_own_cultured_food_input` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Own cultured food consumed in rearing”; retain all following collection, quantity and normalization obligations: Match cultured_food_transfer by actual quantity, culture batch and recipient fish stage; no free intermediate. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_managed_rearing` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_pond_fertilisation` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Actual pond fertilisers and liming materials”; retain all following collection, quantity and normalization obligations: Only actual pond management: record product mass, nutrient composition and timing; distinguish fertilisation supporting natural food from feed offered directly. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_managed_rearing` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_health_materials` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Actual rearing health and water-treatment materials”; retain all following collection, quantity and normalization obligations: Conditional formulation-specific health, buffering, disinfection and filter-media inputs by phase; chemical residues are tracked at source stage. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_managed_rearing` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_other_products` | `managed_rearing`; outputs; product | Identify and separately collect every actual exchange covered by “Other intended fish products at own handover”; retain all following collection, quantity and normalization obligations: Actual other species, cohorts, life stages or purposes sold from common systems require an output and handover ledger and justified attribution. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_stock_managed_rearing divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_stock_managed_rearing` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_consumables` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual collection gear and consumables”; retain all following collection, quantity and normalization obligations: Net/pump-hose replacement material or measured use share only when actual; shared durable equipment activity belongs in cp_shared_utilities. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_harvest divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_harvest` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_feed_health` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual holding feed and health materials”; retain all following collection, quantity and normalization obligations: Only actual maintenance diet, salts, buffers or health formulation, with composition, duration and spent fate; missing records are not non-use. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_holding divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_holding` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_packaging_materials` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual live-fish packaging materials”; retain all following collection, quantity and normalization obligations: Separate actual bag, liner, box and label material. Reusable tanks record replacement mass share, cleaning and realized reuse; do not assign the whole tank to every lot. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_presentation divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_presentation` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_thermal_materials` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual live-fish thermal-control materials”; retain all following collection, quantity and normalization obligations: Conditional cooling packs or other actual material and fish-contact suitability; no capture-ice identity or killing/chilling substitution. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_presentation divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_presentation` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_supplied_water` | `utilities`; inputs; product | Identify and separately collect every actual exchange covered by “Other actually supplied source-specific water”; retain all following collection, quantity and normalization obligations: Actual supplied seawater, freshwater or another water whose specification differs from supplied_treated_water; choose a concrete supplier-specific exchange without overlap. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_water_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_water_utilities` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_actual_farm_fuels` | `utilities`; inputs; product | Identify and separately collect every actual exchange covered by “Actual farm, generator or pre-gate vehicle fuels”; retain all following collection, quantity and normalization obligations: Individual actual fuel product/grade by combustion equipment and stage; litres require measured supplier density and temperature. Fishing-vessel fuel is not farm fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_energy_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_energy_utilities` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_utility_treatment_materials` | `utilities`; inputs; product | Identify and separately collect every actual exchange covered by “Actual utility and loop-treatment materials”; retain all following collection, quantity and normalization obligations: Stage-identified filter media, salt, buffers, lubricants and refrigerant top-ups as separate physical products when used; distinguish material purchase from direct release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_utilities` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_own_water_abstraction` | `utilities`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Individual freshwater, groundwater, brackish or seawater environment source; measured abstraction excludes supplied water and recirculation. Keep basin/source and actual density. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_water_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_water_utilities` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_combustion_air` | `utilities`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual combustion substances to air”; retain all following collection, quantity and normalization obligations: Individual measured/modelled NOx species basis, sulfur oxides, particle size and other substances by equipment and receiving air; no undifferentiated fixed pollutant UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_release_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_release_utilities` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_refrigerant_leakage` | `utilities`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant species released to air”; retain all following collection, quantity and normalization obligations: Conditional mass balance of named refrigerant, recharge, recovery and stock by actual chiller/heat pump and source stage; zero needs leak/non-use evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_release_utilities divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_release_utilities` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_owned_treatment_materials` | `residuals`; inputs; product | Identify and separately collect every actual exchange covered by “Actual owned effluent-treatment materials”; retain all following collection, quantity and normalization obligations: Only actual coagulants, disinfectants, substrates or other physical treatment input, per stream; utility resources are in utilities with residuals as consumer. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_material_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_material_residuals` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dead_fish_eggs` | `residuals`; outputs; waste | Identify and separately collect every actual exchange covered by “Nonviable fish, eggs and retired broodstock for treatment”; retain all following collection, quantity and normalization obligations: Separate source-stage mortality, culled/retired parent stock and failed eggs with wet mass/count, collection time, destination and treatment; saleable retirement is a different intended output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_residual_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_residual_residuals` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_solids_culture_waste` | `residuals`; outputs; waste | Identify and separately collect every actual exchange covered by “Sludge, uneaten feed and rejected cultures for treatment”; retain all following collection, quantity and normalization obligations: Actual solids/backwash separation, moisture, feed leftovers, cyst shells and spent culture matter by originating stage; internal reuse is a transfer, not disposal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_residual_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_residual_residuals` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spent_packaging_materials` | `residuals`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent packaging and health/utility materials for treatment”; retain all following collection, quantity and normalization obligations: Separate actual material, source-stage, hazardous designation if applicable, reuse/recovery and final destination; no automatic recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_residual_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_residual_residuals` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nutrient_substance_releases` | `residuals`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nutrient and chemical substances to water”; retain all following collection, quantity and normalization obligations: Individual nitrogen/phosphorus species and actual health/cleaning substances with receiving medium; apply integrated_release: retain matched gross outlet and inlet loads, unit and elemental/species conversion evidence; any background attribution requires the documented source/fate method and applicability evidence, with no automatic negative credit or duplicate gross/net inventory. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_release_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_release_residuals` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_biological_air_releases` | `residuals`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual biological greenhouse gas species to air”; retain all following collection, quantity and normalization obligations: Where actual pond, culture or treatment conditions generate methane or nitrous oxide, use current site measurement or justified stage-specific model, separately from fossil CO2; absence is documented, not assumed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable quantity from cp_release_residuals divided by qualified net viable fish mass at handover; include only when actually used or occurring. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_release_residuals` Sources: `pcr-live-aquaculture-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | aquaculture_live_handover | Require one species/cohort, actual farmed origin, declared seed/broodstock/live-fish-feed purpose, life stage and producer gate, net viable wet mass plus count, weighing and health/fitness evidence. Eggs/gametes, dead/rejected fish and nonfish organisms cannot satisfy the reference. | `un-cpc-3-2025`; `pcr-live-aquaculture-method` |
| `v_measurement` | all inventory rows | Check same-reference normalization, actual representative count-to-mass measurements, calibrated net weighing, moisture/density/gas conditions and energy units. Range outliers trigger reviewed evidence and uncertainty, never clipping or automatic invalidation; missing actual quantities remain gaps. | `pcr-live-aquaculture-method` |
| `v_routes` | broodstock_hatch; managed_rearing; harvest | Verify owned/purchased phase matrix and supplier burdens; spawning deltas reference broodstock_hatch and water deltas actual managed_rearing. With rearing check reared_live_transfer → harvest_stock_input; for actual hatchery-only seed check hatched_fish_transfer → harvest_stock_input, seed-stage fitness and evidence of phase absence. Require actual owned hatchery or rearing production; retain all hatchery/live-food resources, without fictitious stages or duplicate transfers. | `fao-seed-production`; `ifas-ras-health`; `pcr-live-aquaculture-method` |
| `v_balance` | all selected nodes | Reconcile fish counts and measured biomass with growth, opening/closing stocks, transfers, handovers, mortalities, rejection and escapes; growth means input/output wet mass need not be equal. Reconcile feed dry matter, nutrient intake and measured species releases with stated retention and solids, not a universal emission factor. | `pcr-live-aquaculture-method` |
| `v_completeness` | utilities; residuals | For each selected source-stage inspect actual resource categories, treatment and direct release records. Supplied water, own abstraction, circulation, waste handoff and direct discharge are distinct. Substance releases require species/basis, receiving medium, flow-duration, concentration/background and laboratory QA. | `pcr-live-aquaculture-method` |
| `v_attribution` | broodstock_hatch; managed_rearing; utilities | Check every intended output/handover, run/changeover, parent spawning cycle, period carryover, retirement fate and shared consumer matrix. Sum attributed shares to actual totals and ensure no repeated upstream, parent, asset, service or internal-transfer burden. | `pcr-live-aquaculture-method` |
| `v_binding` | all inventory rows | Each final dataset exchange needs a concrete verified identity matching substance/product, state, purpose, supply geography/technology/provider, flow type, direction and unit. Conditional umbrellas split into actual exchanges at data production. Candidate unresolved registrations and a structural check pass do not verify final identities. | `pcr-live-aquaculture-method` |
| `v_zero_gate` | conditional processes; presentation | Zero is accepted only with documented non-use or observed absence over the applicable stage/period. Unknown viability, purpose, route, handover state, quantity or release fate prevents a complete qualifying dataset; report performed and skipped validation coverage. | `pcr-live-aquaculture-method` |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Foreground aquaculture-purpose live-fish data package first; verified downstream process or lifecyclemodel projection |
| allowed_use | Upstream seed, broodstock or live-fish-feed input matching declared purpose, species, life stage, viability/fitness, gates and technology/period |
| excluded_use | No food, ornamental, wild-origin, final-egg or nonfish-feed substitution; no cross-purpose/stage equivalence from kilograms alone; no final use of unverified exchanges |
| required_metadata | PCR/version; species/cohort and one purpose; life stage; count/net mass; origin-stage matrix; spawning/water system; site/period; gate/holding route; upstream references and attribution |
| required_quality_disclosure | Measurement/sampling uncertainty; all source stages and parent carryover; shared asset/service attribution; mortality/escape/emission fate; identity verification/gaps; range evidence and skipped checks |
| update_trigger | Changes in purpose/species/stage, spawning/water system, supplier/gate, resource/health/treatment, parent retirement or attribution; new measurement/identity evidence; material loss/release events |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | United Nations CPC Version 3.0 explanatory notes (30 June 2025), printed pp. 40–41; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-10-09 | Official origin/nonfood live-fish boundary; this PCR narrows to aquaculture purposes |
| fao-seed-production | official_guidance | FAO, Seed production, sections 1.3–1.5; https://www.fao.org/4/AC182E/AC182E01.htm; retrieved 2026-10-09 | Qualitative reproduction, hatchery, stage and natural/supplied food distinctions; no historical quantitative or medicine prescriptions |
| fao-live-fish-handling | official_guidance | FAO, Selected aspects of warmwater fish culture, chapter 6; https://www.fao.org/4/T8389E/T8389E06.htm; retrieved 2026-10-09 | Qualitative live collection/bounded viability, size and water/oxygen/handling roles; no historical capacities/doses |
| ifas-ras-health | extension_guidance | UF/IFAS, Fish Health Management Considerations in Recirculating Aquaculture Systems—Part 1, FA099; https://ask.ifas.ufl.edu/publication/FA099; retrieved 2026-10-09 | Qualitative water-system purpose, water quality and actual RAS management; no species-specific husbandry prescription |
| ghg-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-10-09 | Subdivision/physical-causality precedence and justified fallback disclosure; no assertion of full-standard conformity |
| pcr-live-aquaculture-method | method_factor | This PCR v0.1.0 internal method, sections 3–9; 1 kg normalization, cohort collection ledgers and period/asset attribution definitions | Self-defined method, not external observation; fixed 1–1 kg is only normalization; other ranges are replaceable reasoned screens without empirical claims |
