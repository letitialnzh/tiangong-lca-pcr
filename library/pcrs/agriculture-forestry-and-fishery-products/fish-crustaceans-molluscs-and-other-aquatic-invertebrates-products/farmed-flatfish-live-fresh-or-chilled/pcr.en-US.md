---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-flatfish-live-fresh-or-chilled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Farmed whole flatfish, live, fresh or chilled

## 1. Scope and Applicability

This methodology covers actual aquaculture-origin whole food flatfish at the first producer handover. Confirm the actual species independently within the flatfish classification scope rather than deriving taxonomy from an old species manual. Whole means unheaded and ungutted. Final state is evidenced live or fresh/chilled; species, production phases and water conditions remain actual dataset facts. Use the CPC explanatory notes for classification scope and the explicitly defined foreground method for this narrower gate and form.

Historical FAO turbot and flounder descriptions support qualitative phase questions only. Their old performance, temperature, density, FCR, drug, price, taxonomy and embryo-duration statements are not current quantitative defaults or prescriptions. Current site records determine actual reproduction, health materials, salinity, water technology and conditions. The general UF/IFAS RAS source supports treatment and water-quality questions, not a flatfish production recipe. Sources: `un-cpc3-2025`, `fao-turbot-2009`, `fao-flounder-culture`, `uf-ifas-ras-fa099`, `flatfish-foreground-method`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-flatfish-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04232; narrower relation |
| covered_products | Aquaculture-origin food flatfish, whole unheaded ungutted, delivered live, fresh or chilled at first producer handover |
| excluded_products | Wild fish; ornamental/nonfood seed or feed fish; eggs/gametes as final product; headed/gutted fish, fillets/meat, roe/liver, frozen or further processed products |
| representative_product | An identified farmed whole-food-flatfish cohort; actual species is mandatory, turbot is only a qualitative example |
| production_route | Owned hatchery/larval settlement and nursery OR documented purchased stage, then bottom-dwelling growout, independent harvest and actual live_gate OR whole_chill state. Biological parent hatchery/nursery/growout; water technology deltas attach to those parents. |
| market_state | Exactly one actual state per delivered lot: live OR whole fresh/chilled. Species, site salinity and water topology are declared; no all-flatfish marine restriction. |

## 3. Reference Flow

### Functional Unit

| Field | Value |
| --- | --- |
| What | Actual qualifying whole farmed food flatfish at first producer handover |
| How much | 1 kg net wet fish biomass excluding water, ice, oxygen, packages and nonqualifying rejects |
| How well | Actual species, whole unheaded ungutted form, aquaculture provenance and food suitability; exactly one evidenced live or fresh/chilled state |
| How long or cycle | Record actual broodstock cycles, hatch/larval/settlement/nursery/growout periods, harvest, holding and dispatch dates; include carryover biomass, asset service periods, replacement and terminal events |
| reference_flow_link | `flatfish_gate_release` |

### Reference Flow Object

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole farmed food flatfish in its declared actual state at first producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/taxon evidence; aquaculture origin; food purpose and suitability; unheaded ungutted whole form; actual live/fresh/chilled state; ownership/purchased starting stage; water source/salinity and topology per unit; cohort/site/period; net mass and tare; bottom area/occupancy; metamorphosis/settlement if owned; harvest/handling/dispatch records; actual first producer gate; upstream burden coverage; treatment/outfall fate; allocation and uncertainty |

Exactly one actual state branch delivers to declared_gate_release: live_gate for evidenced live fish, or whole_chill for evidenced fresh/chilled fish. The final acceptance/release node owns the sole reference output and measured positive accepted net-mass denominator. Its input is the independently measured selected-branch transfer, not fixed to 1 kg. Do not combine branches or infer unknown state. Rejects and losses remain separately measured; split mixed-state lots and retain all qualifiers and shared burdens.


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh actual qualifying net whole fish on calibrated scales; subtract tare, water, oxygen and ice. Exclude nonqualifying death/rejects from denominator but retain their burdens. Sources: flatfish-foreground-method. |
| `cohort_count_mass` | stock and fish transfers | Mass | kg | Count-to-mass requires actual representative species/stage/cohort sample weights and sampling uncertainty, or direct weighing; no universal fish-per-kg or egg-to-fish conversion. Sources: flatfish-foreground-method. |
| `water_mass` | water cards | Mass | kg | Record volume and actual density/salinity/temperature when converting to kg; source abstraction, supply, circulation and final discharge remain separately identified. Sources: flatfish-foreground-method. |
| `energy_units` | energy cards | Net calorific value | MJ | Preserve original meter/invoice units; convert kWh to MJ by 3.6, distinguish purchased thermal energy from fuel and electricity that generates it. Sources: flatfish-foreground-method. |
| `substance_basis` | feed; chemicals; emissions | Mass | kg | Retain feed wet/dry mass and moisture; formulated material vs active ingredient; N/P elemental vs actual substance basis. Convert only with declared composition, molar relation or measured density. Sources: flatfish-foreground-method. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual owned broodstock/egg/larval phase, or documented purchased eggs, larvae or juveniles; continue remaining owned production at the actual stage and retain upstream burdens |
| starting_condition_role | Physical foreground starting stage plus explicit upstream dataset interface |
| product_classification_scope | Aquaculture-origin whole food flatfish subset of CPC 3.0 04232; origin, form, use and gate are independently evidenced |
| recursive_input_rule | Record purchased same-category fish as actual stage-qualified input with upstream dataset boundary; stop recursive authoring at documented supplier gate, never erase upstream production or count it twice |
| upstream_dataset_requirement | Require actual stage/species/origin, supplier gate, geography/time, feed/water/energy coverage, survival/loss and attribution compatibility; missing burdens are explicit data gaps |
| disclosure | Declare owned and purchased phases, all selected water routes, resource/treatment ownership, actual final state, first handover, temporal carryover and excluded post-gate operations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | all processes | Include actual owned pre-gate phases and upstream purchased inputs, harvest and selected handling; stop at first producer handover. Exclude post-gate transport, culture, retail, cooking and consumption. | `flatfish-foreground-method` |
| `boundary_parent` | hatchery; nursery; growout | Attach owned-vs-purchased biological alternatives to their managed-production parent. Actual stage purchase replaces only omitted owned phases; no duplicate nodes or zero-burden seed. | `flatfish-foreground-method` |
| `boundary_biological_delta` | hatchery; nursery; growout | For each actual phase declare one owned or purchased-stage option; different phases may coexist, but the same phase/cohort cannot include both supplier production and owned duplicate production. The delta changes upstream dataset coverage versus owned feed/water/energy/health and emission inventories, phase count/mass and survival calculations, and reproduction/metamorphosis evidence. Select actual natural/induced/artificial reproduction only for an owned reproductive phase and evidence the corresponding handling/material inventory. | `flatfish-foreground-method` |
| `boundary_water` | all water-using processes | Resolve actual flow-through, cage or RAS topology per unit-period; retain source-stage treatment/backwash/disinfection and energy links. Environmental abstraction, supplied water, internal circulation and final discharge are distinct. | `flatfish-foreground-method` |
| `boundary_state` | growout; harvest; live_gate; whole_chill | Activate whole_chill only from actual fresh/chilled dispatch records; inactive requires evidenced live delivery. Preserve state and suitability by event: live fish enter the selected route; naturally dead fish enter whole_chill only with independent evidence that they still qualify as fresh food, otherwise mortality waste; unknown suitability never qualifies as product. The same fish cannot be both product and mortality waste. whole_chill owns actual bounded pre-killing holding and its resources/losses for the fresh/chilled route, with live_gate inactive. Exactly one final output per lot; internal transfers retain measured quantities, not fixed 1 kg. | `flatfish-foreground-method` |
| `boundary_shared` | all processes | Meter or allocate shared pumps, oxygenation, heating/cooling, biofilters, discharge treatment, broodstock and tanks/cages across every actual consumer, cohort and period once; retain service-life, replacement, termination and residual capacity records. | `flatfish-foreground-method` |
| `boundary_fate` | all processes | Record mortalities, rejects, escapes, spent feed/cultures, wastewater/sludge, combustion and refrigerant/substance releases at source stages. Link internal treatment transfers to final fate once; no unobserved absence becomes zero. | `flatfish-foreground-method` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hatchery` | Broodstock, incubation and larval flatfish production | conditional | Owned broodstock, egg incubation or larval production actually occurs | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `livefood` | Owned larval live-food cultivation | conditional | Actual in-house algae, rotifer, Artemia or other identified live-food production | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `nursery` | Settled juvenile nursing | conditional | Actual nursery phase is owned before growout | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `growout` | Bottom-dwelling flatfish growout | required | Actual selected production | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `harvest` | Independent flatfish harvest | required | Actual selected production | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `live_gate` | Bounded live holding and packing before final gate acceptance | conditional | Dispatch records establish live whole-food-fish handover and whole_chill is inactive | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `whole_chill` | Bounded pre-killing holding and whole-fish fresh/chilled preparation before final gate acceptance | conditional | Actual killing or fresh/chilled whole-fish dispatch occurs; live_gate node inactive for this lot | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `treatment` | Owned effluent and solids treatment | conditional | Actual onsite treatment receives source-stage discharges | Foreground responsibility; actual batch or continuous unit-period | per 1 kg reference flow |
| `declared_gate_release` | Final actual-state acceptance and producer handover | required | Every qualifying delivered lot; receive exactly one evidenced state branch | Sole final gate, reference quantity and acceptance rejects; no invented duplicate packing or chilling activity | 1 kg final accepted net fish |

Each process below is indexed by actual cohort, unit, batch/campaign or continuous reporting period. Its resource/emission cards are conditional on actual use/release within an included process; they do not prescribe universal materials. Shared meters and onsite utility/treatment transfers are attributed once, with every source-stage demand retained in the ledger. No optional zero stands for missing evidence. Auxiliary asset/provider-service records retain actual provider units, service period, activity and consumer allocation; unresolved services are not represented by fictional kg exchanges.

### Process: Broodstock, incubation and larval flatfish production (`hatchery`)

Managed production parent: hatchery. Select actual natural, induced or artificial reproduction; no universal hormone practice. Trace broodstock acquisition, maintenance, replacement and retirement across spawning cycles, incubation, yolk reserves, first feeding, metamorphosis, bottom settlement and weaning; purchased eggs/larvae replace only prior owned phases and retain upstream burdens. Record egg and larval counts separately from measured wet fish biomass. Transfer living settled juveniles to nursery or growout. Actual phase resources and discharges below include cleaning, health events, temperature/light control and start-up.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`hatchery_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`hatchery_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`hatchery_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`hatchery_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Internally recovered water received from owned treatment (`hatchery_recovered_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internally recovered water received from owned treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Only actual internal recovered-water intake from treatment_reused_water, linked by matching source/recipient stage, transfer-event id, mass, period and water-quality evidence. Exclude from externally supplied water and abstraction; not gross circulation or avoided-burden credit. Match internal output/input quantities once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

###### Living settled flatfish juveniles (`hatchery_juveniles`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Living settled flatfish juveniles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual transferred wet fish biomass and count after documented metamorphosis/settlement, excluding water and failed/dead larvae; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Nonqualifying mortality or rejected whole fish (`hatchery_mortality`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Nonqualifying mortality or rejected whole fish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual fish and record count, cause, stage, food eligibility and disposal; losses retain production burdens; qualifying fresh product routed only with food suitability evidence; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`hatchery_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`hatchery_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual escaped flatfish biomass (`hatchery_escape`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual escaped flatfish biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record actual escapes by species, count, mass estimate from representative cohort weighing, source unit and receiving habitat; do not imply death or count as delivered product; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hatchery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Owned larval live-food cultivation (`livefood`)

Separate live-food batches supply hatchery only when cultivated in-house. Include starter cultures or cysts, nutrients, enrichment media, actual source water, light/heat/aeration energy, chemicals, culture failures, harvesting losses, spent media and releases. Purchased live food is instead an upstream hatchery input; never count both purchased production and owned production for the same batch. Live-food wet biomass excludes culture water; counts/cell densities remain auxiliary unless representative mass measurement supports conversion.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`livefood_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_livefood`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`livefood_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_livefood`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`livefood_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_livefood`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`livefood_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_livefood`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Internally recovered water received from owned treatment (`livefood_recovered_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internally recovered water received from owned treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Only actual internal recovered-water intake from treatment_reused_water, linked by matching source/recipient stage, transfer-event id, mass, period and water-quality evidence. Exclude from externally supplied water and abstraction; not gross circulation or avoided-burden credit. Match internal output/input quantities once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_livefood`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`livefood_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_livefood`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`livefood_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_livefood`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Settled juvenile nursing (`nursery`)

Managed production parent: nursery. Receive settled juveniles from owned hatchery or a documented purchased stage, with actual metamorphosis/settlement and feed transition evidence. Record bottom-contact usable surface, occupancy dates, biomass/counts and grading/cannibalism loss where relevant; no area stocking default. Transfer actual juvenile wet mass and count to growout. Purchased growout-ready juveniles omit this owned node and carry their upstream production burden.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`nursery_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`nursery_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`nursery_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`nursery_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual living flatfish cohort entering this phase (`nursery_stock`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual living flatfish cohort entering this phase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual received wet fish biomass and count from the identified owned upstream node or purchased documented juvenile stage; upstream burdens counted once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Internally recovered water received from owned treatment (`nursery_recovered_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internally recovered water received from owned treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Only actual internal recovered-water intake from treatment_reused_water, linked by matching source/recipient stage, transfer-event id, mass, period and water-quality evidence. Exclude from externally supplied water and abstraction; not gross circulation or avoided-burden credit. Match internal output/input quantities once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

###### Actual living fish transferred to next phase (`nursery_fish`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual living fish transferred to next phase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured net wet biomass and count linked to next phase and source cohort, survival and settlement/bottom occupancy records; not fixed to 1 kg when internal; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Nonqualifying mortality or rejected whole fish (`nursery_mortality`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Nonqualifying mortality or rejected whole fish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual fish and record count, cause, stage, food eligibility and disposal; losses retain production burdens; qualifying fresh product routed only with food suitability evidence; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`nursery_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`nursery_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual escaped flatfish biomass (`nursery_escape`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual escaped flatfish biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record actual escapes by species, count, mass estimate from representative cohort weighing, source unit and receiving habitat; do not imply death or count as delivered product; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nursery`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Bottom-dwelling flatfish growout (`growout`)

Managed production parent: growout. Feed and manage the identified food-flatfish cohort until actual harvest-ready state. Measure usable bottom area and time occupancy without assuming all fish occupy water volume like round fish. Technology delta attaches to hatchery/nursery/growout as applicable: actual flow-through pumped water, evidenced flat-bottom cage, or site-demonstrated RAS changes abstraction, electricity, filtration, biofilter, disinfection, sludge/backwash and release requirements. Different units may coexist, but one unit-period has one resolved topology; circulated water is an internal activity, not repeated abstraction.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`growout_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`growout_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`growout_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`growout_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual living flatfish cohort entering this phase (`growout_stock`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual living flatfish cohort entering this phase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual received wet fish biomass and count from the identified owned upstream node or purchased documented juvenile stage; upstream burdens counted once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Internally recovered water received from owned treatment (`growout_recovered_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internally recovered water received from owned treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Only actual internal recovered-water intake from treatment_reused_water, linked by matching source/recipient stage, transfer-event id, mass, period and water-quality evidence. Exclude from externally supplied water and abstraction; not gross circulation or avoided-burden credit. Match internal output/input quantities once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

###### Actual whole farmed flatfish transferred to harvest (`growout_fish`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual whole farmed flatfish transferred to harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Match measured net wet mass/count to harvest_ready_fish, source cohort and removal/recovery events, separately recording live and naturally dead states. Naturally dead fish transfer as product only with independent fresh-food-suitability evidence and actual whole_chill routing; other deaths are waste, unknown suitability is not product, and the same fish cannot enter both fates. Retain all prior burdens, survival and bottom-occupancy records; internal quantities are not fixed to 1 kg; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Nonqualifying mortality or rejected whole fish (`growout_mortality`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Nonqualifying mortality or rejected whole fish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual fish and record count, cause, stage, food eligibility and disposal; losses retain production burdens; qualifying fresh product routed only with food suitability evidence; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`growout_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`growout_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual escaped flatfish biomass (`growout_escape`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual escaped flatfish biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record actual escapes by species, count, mass estimate from representative cohort weighing, source unit and receiving habitat; do not imply death or count as delivered product; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_growout`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Independent flatfish harvest (`harvest`)

Remove fish from their actual tank, raceway or cage, or recover whole fish already independently evidenced as suitable fresh food, into state-separated measured harvest lots. This node owns removal/recovery, crowding, nets/pumps and sorting losses independently of growth and subsequent killing/preservation. Trace live fish, qualifying fresh fish, rejects, escapes and nonqualifying mortalities by source cohort/event; the same fish cannot be both product and mortality waste. Live whole fish enter selected live_gate or whole_chill; qualifying fresh whole fish enter only whole_chill, and unknown food suitability is not product. Internal inputs/outputs retain measured quantities and prior burdens. Farm harvest does not imply wild capture origin.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`harvest_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`harvest_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`harvest_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`harvest_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual farmed flatfish entering harvest or recovery (`harvest_ready_fish`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual farmed flatfish entering harvest or recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Match growout_fish by actual source unit/cohort, state, net wet mass/count and removal/recovery event. Separate live fish from independently evidenced food-suitable fresh whole fish, the latter only for whole_chill. Nonqualifying or unknown-suitability dead fish are not product; product and waste fates are exclusive. Retain prior burdens, with no fixed 1 kg input; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Internally recovered water received from owned treatment (`harvest_recovered_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internally recovered water received from owned treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Only actual internal recovered-water intake from treatment_reused_water, linked by matching source/recipient stage, transfer-event id, mass, period and water-quality evidence. Exclude from externally supplied water and abstraction; not gross circulation or avoided-burden credit. Match internal output/input quantities once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

###### Whole harvested flatfish before state selection (`harvest_collected_fish`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Whole harvested flatfish before state selection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record actual net whole-fish wet mass/count and state after harvest losses/rejects by event; live fish enter selected live_gate or whole_chill, independently evidenced qualifying fresh whole fish only whole_chill. Do not also count the same fish as mortality waste; match downstream intake by lot and carry all prior burdens, not a fixed final 1 kg; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Nonqualifying mortality or rejected whole fish (`harvest_mortality`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Nonqualifying mortality or rejected whole fish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual fish and record count, cause, stage, food eligibility and disposal; losses retain production burdens; qualifying fresh product routed only with food suitability evidence; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`harvest_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`harvest_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual escaped flatfish biomass (`harvest_escape`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual escaped flatfish biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record actual escapes by species, count, mass estimate from representative cohort weighing, source unit and receiving habitat; do not imply death or count as delivered product; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Bounded live holding, packing and producer handover (`live_gate`)

Preserve living whole harvested fish through actual bounded recovery/holding, oxygen/water/thermal control and actual packing/loading at the first producer gate. Record holding duration, fitness, transport water, oxygen, package reuse/washing and loss before the gate. No further managed growout is hidden here. Loaded live product excludes water, oxygen and packaging from net biomass. Post-gate distribution is outside.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`live_gate_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`live_gate_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`live_gate_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`live_gate_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual harvested live whole flatfish for live handover (`live_gate_fish`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual harvested live whole flatfish for live handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Receive only actually viable live whole fish suitable for live handover from harvest_collected_fish, matching lot/state/event, measured net wet mass/count and prior burdens; never fresh/dead fish. Final output follows actual within-boundary holding losses; internal input is not final 1 kg; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Internally recovered water received from owned treatment (`live_gate_recovered_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internally recovered water received from owned treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Only actual internal recovered-water intake from treatment_reused_water, linked by matching source/recipient stage, transfer-event id, mass, period and water-quality evidence. Exclude from externally supplied water and abstraction; not gross circulation or avoided-burden credit. Match internal output/input quantities once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

###### Live whole farmed food flatfish at transfer to final producer-gate acceptance (`live_gate_final`)

This card is the actual fish transfer from the selected state preparation stage, not the final reference output; state, lot and transfer ID must match the sole final acceptance node.

- Selected flow: Live whole farmed food flatfish at transfer to final producer-gate acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure net fish transferred by this selected actual-state branch to declared_gate_release, normalized by final accepted net delivered mass; never fix the transfer to 1 kg. Pair cp_live_gate with cp_gate_release transfer, rejection and loss records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow; actual ordinary quantity, never fixed for an internal transfer
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

###### Nonqualifying mortality or rejected whole fish (`live_gate_mortality`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Nonqualifying mortality or rejected whole fish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual fish and record count, cause, stage, food eligibility and disposal; losses retain production burdens; qualifying fresh product routed only with food suitability evidence; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`live_gate_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`live_gate_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual escaped flatfish biomass (`live_gate_escape`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual escaped flatfish biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record actual escapes by species, count, mass estimate from representative cohort weighing, source unit and receiving habitat; do not imply death or count as delivered product; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_gate`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Whole-fish fresh or chilled preservation and handover (`whole_chill`)

Receive live whole harvested fish for actual killing and fresh/chilled handling, or naturally dead fresh whole fish only with prior independent food-suitability evidence; natural death alone never establishes food safety. This node owns all actual bounded pre-killing holding for a fresh/chilled lot: record start/end, viability, maintenance feed, water, oxygen, heat/electricity and losses. Do not activate live_gate or use its final card as internal input; do not hide managed growout. Preserve unheaded ungutted form and record killing/death and handling times, temperatures, ice, washing, cooling, leakage, rejects and effluent. No gutting, heading, filleting or freezing is included. Actual farm ice is separate and cannot reuse capture-vessel ice identity. Packing/loading stops at first producer handover; fish mass excludes ice/water/package.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`whole_chill_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`whole_chill_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`whole_chill_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`whole_chill_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual harvested whole flatfish for fresh or chilled handover (`whole_chill_fish`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual harvested whole flatfish for fresh or chilled handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Match harvest_collected_fish measured net wet mass/count, source lot/event and prior burdens; separate live fish entering pre-killing holding/killing from fresh whole fish with independent food-suitability evidence. Unknown/nonqualifying dead fish are not product intake and cannot duplicate mortality waste. Retain holding, killing and chilling losses here; internal input is not fixed final 1 kg; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual farm whole-fish preservation ice (`whole_chill_ice`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual farm whole-fish preservation ice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure ice supplied for actual fresh/chilled lot and provenance, purchased or produced in-house with resources once; exclude melted ice from fish mass; no capture-vessel ice substitution; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Internally recovered water received from owned treatment (`whole_chill_recovered_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internally recovered water received from owned treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Only actual internal recovered-water intake from treatment_reused_water, linked by matching source/recipient stage, transfer-event id, mass, period and water-quality evidence. Exclude from externally supplied water and abstraction; not gross circulation or avoided-burden credit. Match internal output/input quantities once; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh or chilled whole farmed food flatfish at transfer to final producer-gate acceptance (`whole_chill_final`)

This card is the actual fish transfer from the selected state preparation stage, not the final reference output; state, lot and transfer ID must match the sole final acceptance node.

- Selected flow: Fresh or chilled whole farmed food flatfish at transfer to final producer-gate acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure net fish transferred by this selected actual-state branch to declared_gate_release, normalized by final accepted net delivered mass; never fix the transfer to 1 kg. Pair cp_whole_chill with cp_gate_release transfer, rejection and loss records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow; actual ordinary quantity, never fixed for an internal transfer
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
##### Waste flows

###### Nonqualifying mortality or rejected whole fish (`whole_chill_mortality`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Nonqualifying mortality or rejected whole fish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual fish and record count, cause, stage, food eligibility and disposal; losses retain production burdens; qualifying fresh product routed only with food suitability evidence; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`whole_chill_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`whole_chill_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual escaped flatfish biomass (`whole_chill_escape`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual escaped flatfish biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record only actual live-fish escapes during pre-killing bounded holding of the fresh/chilled lot, by species/count, representative same-cohort wet-mass estimate, source unit/event and receiving habitat. Do not infer death or count as delivered product or mortality waste. Match stock/transfer ledgers by event; zero only for evidenced absence; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_whole_chill`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Owned effluent and solids treatment (`treatment`)

Receive source-stage wastewater, backwash, spent cultures and solids by unique transfer/event id, process using actual separation/treatment equipment, and record final waste handoff and environmental outfalls once. Identify hatchery/livefood/nursery/growout/harvest/live_gate/whole_chill contributors, treatment period and consuming unit. Direct source-stage discharge is reported at that source instead; an internal treatment transfer must not also be reported as a direct environmental emission. Reused water remains internal; verify final nitrogen/phosphorus and actual health substance species.

#### Inputs

##### Product flows

###### Externally supplied treated industrial process water (`treatment_treated_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Only actual supplied treated industrial water of documented fish-contact/use suitability; exclude own abstraction/internal circulation and supplier treatment duplication; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN grid-average low-voltage AC consumption mix to user (`treatment_cn_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average low-voltage AC consumption mix to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Only purchased CN grid-average AC below 1 kV at user; meter applicable actual equipment; other power on separate card; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actual purchased electricity (`treatment_other_power`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Other actual purchased electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual geography, supplier, voltage and mix incompatible with the CN card; separately identify each supply; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actually supplied oxygen of declared delivery state (`treatment_oxygen`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actually supplied oxygen of declared delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual oxygen mass and identify purity, pressure, delivery state and provider; onsite air/aeration accounted through equipment energy, not purchased oxygen; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Internal source-stage wastewater and treatment returns (`treatment_return_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Internal source-stage wastewater and treatment returns
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual measured incoming water mass by unique source transfer id; internal matching to source waste outputs, no second external burden; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

#### Outputs

##### Product flows

###### Actual recovered water for internal reuse (`treatment_reused_water`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual recovered water for internal reuse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual measured recovered water to named stage, with quality/treatment evidence; internal loop only, not avoided supplied-water credit; per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Actual direct water discharge to declared receiving water (`treatment_water_release`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Actual direct water discharge to declared receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Report actual environmental outfall water mass once with flow/duration/location; treatment transfers belong to effluent card; nutrient/substance loads separate; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide to unspecified air (`treatment_fossil_co2`)

Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Actual direct fossil combustion only; derive from measured fuel and independently evidenced factor or measured emission; never biogenic CO2, CO2eq or purchased gas; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment`
- Sources: `flatfish-foreground-method`
- Range: Provisional replaceable screening guardrail for actual amount
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Final actual-state acceptance and producer handover (`declared_gate_release`)

This node records actual producer-gate acceptance and release. Receive exactly one of live_gate_final or whole_chill_final with that lot’s actual state; never combine branches or assert equivalent service. Actual operating resources are owned once at the responsible node; this acceptance record does not automatically add another chilling, packing or transport operation.

#### Inputs

##### Product flows

###### Whole farmed food flatfish received in its evidenced actual state for final acceptance (`flatfish_gate_receipt`)

Record actual species, whole unheaded/ungutted state, farmed food eligibility and paired lot/transfer evidence; unknown state blocks release and no other branch UUID is inherited.

- Selected flow: Whole farmed food flatfish received in its evidenced actual state for final acceptance
- Flow property / unit: Mass / kg
- Amount rule: Measured net fish received from the selected branch, retaining independent acceptance rejects and losses; normalize to final accepted net delivered mass and never fix input to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_release`

#### Outputs

##### Product flows

###### Whole farmed food flatfish in its declared actual state at first producer handover (`flatfish_gate_release`)

Record actual species, whole unheaded/ungutted state, farmed food eligibility and paired lot/transfer evidence; unknown state blocks release and no other branch UUID is inherited.

- Selected flow: Whole farmed food flatfish in its declared actual state at first producer handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_release`

##### Waste flows

###### Whole farmed flatfish rejected at final acceptance and sent to disposal (`flatfish_gate_rejects`)

Record actual species, whole unheaded/ungutted state, farmed food eligibility and paired lot/transfer evidence; unknown state blocks release and no other branch UUID is inherited.

- Selected flow: Whole farmed flatfish rejected at final acceptance and sent to disposal
- Flow property / unit: Mass / kg
- Amount rule: Measured net fish actually rejected to its evidenced disposal destination, retaining upstream burdens and normalized to final accepted net delivered mass; zero only for evidenced absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_release`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_precedence` | common burdens | Subdivide independently measured stages first. For remaining shared burdens use evidenced causal activity: pump/thermal/oxygen demand, measured treatment load, or bottom-area-time where it represents actual occupation. Document driver and denominator; wet fish mass alone is not assumed causal. | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_outputs` | intended products | Enumerate all intended sale outputs at their actual handoffs, including food-size grades, independently sold seed/eggs or qualifying retired broodstock if present. Internal transfers are not extra products. Retain mortality/waste burdens with production; no automatic avoided-burden credits. | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_fallback` | remaining common burdens | If a causal physical relationship cannot be established, justify common-gate economic shares using actual matched-period prices and quantities; disclose sensitivity to plausible alternatives. Use the same method for comparable outputs and no unexplained mixing. | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_period` | cohorts; assets; broodstock | Index actual batch/continuous unit-periods, cleaning/changeover, opening/closing live stocks and transfer burdens. Carry unfinished-cohort burdens forward once; share broodstock maintenance over evidenced spawning outputs/cycles, not an invented lifetime. Record replacement, retirement and terminal fates. | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_assets` | shared assets and contracted services | Enumerate all consuming nodes and periods for pumps, tanks, cages, cold rooms, transport/loading or contracted services. Deduplicate common meter/invoice/event ids. Unknown service identities remain in an auxiliary provider activity ledger with actual provider units; never create a generic kg service. | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_internal_extension` | all exchanges | The flatfish foreground method applies this allocation precedence to resource and non-GHG exchanges as well as emissions. This is an explicit internal extension, not a claim of full Product Standard compliance. | `ghg-product-allocation-2011`; `flatfish-foreground-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hatchery` | `hatchery` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_livefood` | `livefood` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_nursery` | `nursery` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_growout` | `growout` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_harvest` | `harvest` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_live_gate` | `live_gate` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_whole_chill` | `whole_chill` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | fish state and independent food-suitability evidence; killing/death times; pre-killing holding start/end, viability, maintenance feed and fates; cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_treatment` | `treatment` | All actual stage inputs, transfers and fates | Primary meters, cohort, health, invoice and laboratory records | cohort/unit/source-stage/event/transfer ids; species/stage/count; representative net wet sample weights and tare; opening/closing stock; phase feed moisture; actual material/substance/provider/state; raw quantity/unit; water source/salinity/temperature/density/flow/duration/background; N/P species and chemistry; bottom area and occupancy dates; meters/fuel/heat/oxygen; cleaning/health dose; refrigeration charge/refill/recovery; effluent/sludge/reject/mortality/escape and destination; final state/gate; asset/service periods and allocation drivers | Calibrated weighing/meters, actual invoice and stock checks, representative cohort sampling with uncertainty; time-matched inlet/outlet labs and validated composition/factors for actual release; retain unmetered gaps explicitly | kg; MJ; count; m2; day; source volume/density/concentration units | Each transfer, feed/health/cleaning/harvest/dispatch event; meters and outfall samples at adequate operating intervals | Full relevant biological cycle and matching reporting period, including start-up and carryover | Actual selected unit and connected shared services only | per 1 kg reference flow | Calibration, chain of custody, sample plan, lab QA/limits, invoices, reconciled stock/fate and allocation ledger; site route evidence |
| `cp_gate_release` | `declared_gate_release` | Final fish receipt, rejection and sole reference release | Calibrated weighing, lot and acceptance ledger | lot; selected branch and paired transfer ID; actual species/state; incoming net fish; gross/tare; water/ice/packaging; rejects and disposal; loss; final accepted net delivered mass; buyer/gate/time; operating-resource owner | Reconcile calibrated incoming, rejected and final accepted net fish for the same lot; exclude water/ice/packaging, verify actual state and eligibility, retain losses, fates and resource ownership; unknown is not zero | kg | every lot and final handover | same selected-state lot and reporting period | sole declared producer handover gate | per 1 kg reference flow | calibration, weighing, actual-state, paired transfer, acceptance and disposal evidence |

### Calculation Rules

| rule_id | Applies to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | Sum actual attributable stage quantities over matched cohort/period; divide each by delivered qualifying net wet fish mass in kg to report per 1 kg reference flow. Count only the actually selected final state; retain actual internal transfer yields. | primary quantity; allocation share; actual net delivered fish mass; cp_harvest; cp_live_gate; cp_whole_chill; cp_gate_release | normalized exchange in original compatible property/unit | `flatfish-foreground-method` |
| `count_mass` | fish and live-food transfers | Use actual cohort count times representative measured individual wet biomass only when sampling is defensible; retain water/tare exclusion, stratification and uncertainty. Egg/cell counts have no universal fish-mass equivalence. | actual count; measured sample weight; sample count; tare; stage | actual stage-qualified wet biomass | `flatfish-foreground-method` |
| `outfall_load` | direct substance release | Integrate matched flow times duration times concentration after explicit background, species/elemental and unit conversions; retain net/gross choice and uncertainty. Feed-input balance estimates require composition, retained growth and all removal fates; never equate feed nutrient input to direct emission. | flow; duration; inlet/outlet concentration; substance basis; lab QA | kg actual substance to identified medium | `flatfish-foreground-method` |
| `combustion_leak` | fuel emissions and fugitive releases | Use actual fuel quantity with independently supported fuel composition/emission factor, or direct measurement; distinguish fossil/biogenic carbon. For refrigerants reconcile opening charge, refill, recovered and closing charge by actual substance and event; no default factor is prescribed. | actual fuel/charge; verified factor or monitoring; event and equipment records | kg actual substance by source stage and receiving air | `flatfish-foreground-method` |

### Data Quality Requirements

| requirement_id | Applies to | requirement | evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference and routes | Independently identify actual species, aquaculture/food purpose, whole state, gate and each owned/purchased phase; evidence current topology without importing a turbot recipe. | taxon record; supplier/site/dispatch evidence |
| `quality_closure` | cohort and environment | Reconcile all stock phases and transfer ids, growth, feed moisture, mortality/escape/rejects; preserve all stage fates and outfall lab QA; disclose residual balances and detection limits. | primary ledger, calibration and lab QA |
| `quality_coverage` | all quantities | No omitted owned phase, resource, emission or supplier burden may be replaced by silent zero. State measured, calculated or estimated coverage and uncertainty; provisional QA ranges never supply missing observations. | coverage and uncertainty register; flatfish-foreground-method |
| `quality_attribution` | shared periods/products/assets | One driver/period ledger must enumerate all consumers and outputs and reconcile meter/invoice totals once, including broodstock, unfinished cohort, replacements and service activity. | allocation ledger and sensitivity; ghg-product-allocation-2011 |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_hatchery_other_water` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_fuel` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_heat` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_chemicals` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_brood` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual upstream broodstock, eggs or larvae”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Instantiate purchased broodstock, eggs or larvae separately by actual species/material/life stage; record origin, supplier gate, upstream burdens and remaining owned stages; distinguish parent replacement from carryover. Record actual wet mass and auxiliary egg/fish counts, with representative same-stage larval weighing; no generic egg-count-to-fish-mass factor; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_feed` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Broodstock and larval feed by phase”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each purchased feed, live food or owned livefood transfer; record wet/dry mass, moisture and phase, leftovers separately; no free live-food production; attributable feed per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_refrigerant` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_abstraction` | `hatchery`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_co_products` | `hatchery`; outputs; product | Identify and separately collect every actual exchange covered by “Actual independently sold hatchery outputs”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Enumerate each actual sold egg, seed or retired qualifying broodstock, purpose/state and handoff; not final food-flatfish reference; attribute common burdens explicitly; actual wet mass per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_effluent` | `hatchery`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_solids` | `hatchery`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_nutrients` | `hatchery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_substances` | `hatchery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_leak` | `hatchery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_hatchery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_other_water` | `livefood`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_fuel` | `livefood`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_heat` | `livefood`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_chemicals` | `livefood`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_culture` | `livefood`; inputs; product | Identify and separately collect every actual exchange covered by “Live-food starter, cysts, nutrients and enrichments”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each actual supplied culture material and wet/dry composition; record batch feed/nutrients rather than assume free algae/rotifers/Artemia; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_refrigerant` | `livefood`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_abstraction` | `livefood`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_food` | `livefood`; outputs; product | Identify and separately collect every actual exchange covered by “Actually cultivated larval live food”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual drained wet live-food biomass to identified larval feed events; auxiliary organism/cell counts and verified sampling mass conversion; failed cultures to waste; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_effluent` | `livefood`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_solids` | `livefood`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_nutrients` | `livefood`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_substances` | `livefood`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_livefood_leak` | `livefood`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_livefood` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_other_water` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_fuel` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_heat` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_chemicals` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_feed` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual phase-specific flatfish feed”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each feed and ingredient provenance, wet/dry basis and moisture; measured issue/return and leftovers by cohort and dates; no universal FCR; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_refrigerant` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_abstraction` | `nursery`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_co_products` | `nursery`; outputs; product | Identify and separately collect every actual exchange covered by “Other actual independently sold fish”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List actual species, size, intended use and market state at its handoff and attribution decision; internal grade transfers excluded from sale totals; actual mass per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_effluent` | `nursery`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_solids` | `nursery`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_nutrients` | `nursery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_substances` | `nursery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_leak` | `nursery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_nursery` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_other_water` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_fuel` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_heat` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_chemicals` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_feed` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual phase-specific flatfish feed”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each feed and ingredient provenance, wet/dry basis and moisture; measured issue/return and leftovers by cohort and dates; no universal FCR; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_refrigerant` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_abstraction` | `growout`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_co_products` | `growout`; outputs; product | Identify and separately collect every actual exchange covered by “Other actual independently sold fish”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List actual species, size, intended use and market state at its handoff and attribution decision; internal grade transfers excluded from sale totals; actual mass per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_effluent` | `growout`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_solids` | `growout`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_nutrients` | `growout`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_substances` | `growout`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_leak` | `growout`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_growout` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_other_water` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_fuel` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_heat` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_chemicals` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_gear` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual harvest materials and equipment replacements”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure nets, baskets and consumables or replacement materials by actual use and losses, with reusable asset service life in auxiliary ledger; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_refrigerant` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_abstraction` | `harvest`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_effluent` | `harvest`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_solids` | `harvest`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_nutrients` | `harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_substances` | `harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_leak` | `harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_harvest` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_other_water` | `live_gate`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_fuel` | `live_gate`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_heat` | `live_gate`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_chemicals` | `live_gate`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_maintenance_feed` | `live_gate`; inputs; product | Identify and separately collect every actual exchange covered by “Actual maintenance feed during bounded live-handover holding”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Include only actual maintenance feed in bounded pre-gate holding of the live-handover lot; identify each material/origin, wet/dry mass, moisture, feeding event, holding interval and leftover fate. Zero requires evidenced non-use. No invented recipe, duplicate growout or whole_chill feed, or managed growout hidden as holding; normalize to actual live-delivered reference biomass per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_packing` | `live_gate`; inputs; product | Identify and separately collect every actual exchange covered by “Actual whole-fish packaging and reusable containers”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual package material, count, measured tare mass, reuse cycles, washing and replacement; packaging/transport water not edible biomass; only pre-gate loading; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_refrigerant` | `live_gate`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_abstraction` | `live_gate`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_effluent` | `live_gate`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_solids` | `live_gate`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_nutrients` | `live_gate`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_substances` | `live_gate`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_gate_leak` | `live_gate`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_gate` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_other_water` | `whole_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_fuel` | `whole_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_heat` | `whole_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_chemicals` | `whole_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_maintenance_feed` | `whole_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual maintenance feed during bounded pre-killing holding”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Include only actual maintenance feed in bounded pre-killing holding of the fresh/chilled lot; identify each material/origin, wet/dry mass, moisture, feeding event, holding interval and leftover fate. Zero requires evidenced non-use. No invented recipe, duplicate growout feed or managed growout hidden as holding; normalize to actual delivered reference biomass per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_packing` | `whole_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual whole-fish packaging and reusable containers”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual package material, count, measured tare mass, reuse cycles, washing and replacement; packaging/transport water not edible biomass; only pre-gate loading; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_refrigerant` | `whole_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_abstraction` | `whole_chill`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_effluent` | `whole_chill`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_solids` | `whole_chill`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_nutrients` | `whole_chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_substances` | `whole_chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_whole_chill_leak` | `whole_chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_whole_chill` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_other_water` | `treatment`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual externally supplied water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Specify potable, freshwater or supplied seawater identity, supplier and treatment; keep distinct from industrial process water; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_fuel` | `treatment`; inputs; product | Identify and separately collect every actual exchange covered by “Actual equipment or backup-generator fuel”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Identify each actual fuel and net mass, density if measured by volume, equipment and combustion fate; no fishing-vessel fuel substitution; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_heat` | `treatment`; inputs; product | Identify and separately collect every actual exchange covered by “Externally supplied heating or cooling energy”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Meter actual purchased thermal energy and provider; avoid double counting own fuel or electricity used to produce the same heat/cooling; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_chemicals` | `treatment`; inputs; product | Identify and separately collect every actual exchange covered by “Actual health, cleaning or water-treatment materials”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: List each actual material, formulation/active ingredient, dose/event, authority/site records and fate; no mandatory medication recipe; include buffers, salts or treatment media only if used; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_refrigerant` | `treatment`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant supplied for stage equipment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Only actual refrigerant procurement/charging for identified equipment and substance; link opening/new/refill/recovered/closing charge and service period, not automatically equal to leakage; allocate shared equipment once; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_incoming_solids` | `treatment`; inputs; waste | Identify and separately collect every actual exchange covered by “Internal source-stage solids and sludge for owned treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual source-stage solids, sludge and spent cultures received under unique transfer ids, wet/dry mass and contamination basis; match source waste outputs once and retain treatment destination; per 1 kg reference flow. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_abstraction` | `treatment`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual source-specific water abstraction”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Own environmental abstraction only, specify freshwater/brackish/seawater source; measured mass or volume with actual density; no external supplied water or repeated recirculation; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_effluent` | `treatment`; outputs; waste | Identify and separately collect every actual exchange covered by “Wastewater or spent media transferred for treatment”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measure actual water plus load/chemicals sent to owned treatment or external provider with transfer id and destination; not direct environmental release; onsite transfer is internal; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_solids` | `treatment`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual solids, sludge, spent materials and packaging rejects”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Separate each waste identity, wet/dry basis, contamination, leftover feed or failed cultures, collection location and destination; no automatic coproduct credit; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_nutrients` | `treatment`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen and phosphorus species released to water”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each measured/modelled actual N/P species and receiving medium; retain elemental/species basis, concentration, background, flow, duration and lab QA; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_substances` | `treatment`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct substance emissions”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Conditional umbrella: instantiate each actual health substance, disinfectant, combustion pollutant or treatment gas by substance, air/water/soil medium and evidence; no unsupported zero or generic pollutant UUID; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_treatment_leak` | `treatment`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant or other fugitive substance leakage”; retain all following collection, quantity and normalization obligations: Use the actual material, supply or receiving-medium evidence for this stage; instantiate separate concrete exchanges when several materials or substances occur. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual substance-specific charge, refill, recovery and leak event balance with receiving air; identify refrigeration used at this stage; no assumed universal refrigerant; record actual source-stage, unit, cohort, event and period, including cleaning/start-up where used. Normalize attributable total to actual delivered reference biomass; zero only for evidenced non-use. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_treatment` Sources: `flatfish-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference lot | Verify actual species with independent taxon evidence, aquaculture origin, human-food use, whole unheaded ungutted form and first producer gate. Neither a CPC label nor turbot example proves these facts. | `flatfish-foreground-method` |
| `validate_branch` | live_gate_final; whole_chill_final; flatfish_gate_release | Verify exactly one evidenced live or fresh/chilled preparation branch supplies the final gate; independently measured branch transfer and acceptance losses reconcile to the sole 1 kg final reference output. Never fix a branch transfer to 1 kg or combine states. Unknown state or food suitability fails completeness. | `flatfish-foreground-method` |
| `validate_phases` | hatchery; livefood; nursery; growout | Owned larval records must evidence first feeding, metamorphosis, settlement and feed transition; purchased stage must identify upstream coverage. Check phase-specific feed wet/dry basis, count/representative weight, bottom-contact area/occupancy and survival without universal stocking/FCR/temperature values. | `flatfish-foreground-method` |
| `validate_topology` | water; energy; treatment | Require actual unit-period water diagram, sources and meters; RAS requires actual circulation, filtration/biofilter, solids/backwash and treatment evidence. Confirm abstraction/supply/recirculation distinction, current energy provider and treatment ownership. | `flatfish-foreground-method` |
| `validate_closure` | all processes | Reconcile phase counts/wet biomass, transfers, growth, mortality, escapes, rejects and final handoff with uncertainty. Check growout_fish → harvest_ready_fish → harvest_collected_fish → selected state intake by event: fresh whole fish require independent suitability evidence and only whole_chill; live_gate receives live fish only; product and mortality waste are exclusive. whole_chill alone owns fresh/chilled-lot pre-killing holding resources/losses, including actual maintenance feed and escape fates. Link all actual stage resources, cleaning/health events, direct releases and waste transfers to unique source unit/cohort/period and final fate; check feed nutrient/material and treatment balances with substance, concentration, background, flow, duration and lab QA. | `flatfish-foreground-method` |
| `validate_detection` | direct release and concentration records | Retain raw results, detection/quantification limits, sampling background and analytical uncertainty. Non-detect is not an automatic zero: disclose a justified bounded estimate or gap. A negative inlet-adjusted concentration/load triggers sampling/background review; preserve raw data, do not clip to zero or claim environmental removal without independently supported physical uptake and boundary evidence. | `flatfish-foreground-method` |
| `validate_attribution` | common resources; periods; products | Check complete output and consumer lists, phase/run/period boundaries, carryover and replacement/terminal events, drivers and denominator totals, shared invoices/meters and no duplicate internal flows or upstream burdens. | `flatfish-foreground-method` |
| `validate_ranges` | all cards | Use foreground measurements first. All provisional reasoned_estimate ranges are replaceable QA screens, not design/operation limits or substitute values; review outliers and expand with evidence, never clip. Zero requires documented non-use, not missing records. | `flatfish-foreground-method` |
| `validate_identity` | all exchanges | Resolve each actual concrete product/waste/elementary exchange and compatible property/unit before final TIDAS use. Conditional umbrella cards require actual distinct substances/materials and destinations. Fixed identity evidence does not prove quantity, emission factor or publication readiness. | `flatfish-foreground-method` |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |
| `validate_final_gate` | declared_gate_release | Exactly one evidenced actual-state branch feeds the final gate; reference definition, actual fish state and release record agree. Use final accepted net mass at this gate as the sole denominator throughout; reconcile receipt, acceptance rejects, losses and output without fixing internal transfers to 1 kg. Own operating resources once at the actual responsible node. Unknown state, denominator or fate makes the dataset incomplete and fails validation. | `flatfish-foreground-method` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package; completed secondary_dataset or background_dataset with disclosed coverage |
| downstream_use | Source-grounded process and lifecyclemodel projections using resolved concrete exchange identities |
| allowed_use | Same declared species/stage, origin, whole state, water topology, geography/time and first farmgate or justified adaptation with sensitivity |
| excluded_use | Universal flatfish recipe; automatic live/chilled equivalence; frozen/gutted/fillet guidance; final TIDAS exchange with unresolved identity; unqualified whole-sector mean |
| required_metadata | PCR version; species/origin/purpose; declared phases, units/cohorts and period; whole form/state; gate; output mass/count; water and feed route; area occupancy; upstream coverage; allocations; source references |
| required_quality_disclosure | Measurement/sampling quality, loss closure, treatment/emission method and substance basis, unresolved identities/activities, provisional QA ranges and uncertainty |
| update_trigger | Change in species, source stage, feed, water topology, site/energy provider, health regime, delivered state, losses, allocation or new reviewed evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | UN Statistics Division, CPC 3.0 explanatory notes (2025), pp. 40–43. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope; retrieved 2026-10-09 |
| `fao-turbot-2009` | official_guidance | FAO (2009), Cultured aquatic species fact sheet, Psetta maxima. https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_turbot.htm | Qualitative hatchery/weaning/growout, harvest and whole presentation examples only; retrieved 2026-10-09 |
| `fao-flounder-culture` | official_guidance | FAO, Biology and culture of selected species, section 2.5. https://www.fao.org/4/Y2257E/y2257e05.htm | Qualitative metamorphosis/settlement, feed transition and bottom occupancy questions only; no historical taxonomy/numerical prescription; retrieved 2026-10-09 |
| `uf-ifas-ras-fa099` | extension_guidance | UF/IFAS, Fish Health Management Considerations in Recirculating Aquaculture Systems—Part 1, FA099. https://ask.ifas.ufl.edu/publication/FA099 | Generic actual RAS water-quality, filtration and biosecurity categories only; retrieved 2026-10-09 |
| `ghg-product-allocation-2011` | standard | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, chapter 9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation precedence and sensitivity; no full-compliance claim; retrieved 2026-10-09 |
| `flatfish-foreground-method` | method_factor | Self-defined internal methodology in this PCR, sections 3–9; no external observational dataset. | Gate/form boundary, measurement and collection/calculation rules, stage/fate ledgers, cross-period attribution, unit conversions and 1–1 kg internal reference identity. Broad non-reference screening ranges are separately labelled reasoned_estimate and are not empirical factors. |
