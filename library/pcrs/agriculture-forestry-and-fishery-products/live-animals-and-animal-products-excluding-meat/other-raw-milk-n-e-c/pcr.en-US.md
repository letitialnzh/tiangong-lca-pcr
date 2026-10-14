---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-raw-milk-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other raw whole milk from specified animals n.e.c.

## 1. Scope and Applicability

This PCR covers one declared animal species' raw, whole, unstandardized milk at its actual farm or first-collection handover, only when the species is outside cattle, buffalo, sheep, goats and camels in CPC 3.0. Mare or donkey milk may qualify only when the individual lot demonstrably meets the fat threshold; their usually low-fat milk is not a representative 02299 product. Yak is cattle and yak milk is excluded. Also exclude skimmed, partly skimmed and milk below the CPC 3.0 3.5%-fat exclusion threshold, as well as pasteurized, fermented or manufactured dairy. That threshold is a classification gate, never an instruction to alter natural milk fat. Do not blend species into a fictional average.

Follow managed lactation and replacements, independent milking capture, first straining/acceptance, actual cooling if performed, and hygienic gate presentation. Record offspring-suckled, rejected and saleable milk separately. A first-collection centre enters only if it is the declared gate and all intervening transport/cooling is recorded; otherwise stop at the producing farm. Purchased milk carries its own upstream dataset and cannot be renamed on-farm production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-raw-milk-n-e-c` |
| classification_refs | CPC 3.0 `02299` after exact species and raw-whole check |
| covered_products | One declared non-excluded species' warm or cooled raw whole milk |
| excluded_products | Cattle including yak, buffalo, sheep, goat and camel milk; milk under 3.5% fat or skimmed/partly skimmed; processed milk |
| representative_product | Raw whole reindeer milk only when the actual lot measures at least 3.5% fat and its classification is confirmed; not a multi-species default |
| production_route | Managed species-specific lactation → physical milking → first acceptance → optional cooling → hygienic handover |
| market_state | Net accepted raw whole liquid milk at declared initial gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted raw whole milk from exactly one declared qualifying species |
| How much | 1 kg net milk excluding container tare |
| How well | Species, sampled fat/solids, raw state, temperature, lot, acceptance and provenance documented |
| How long or cycle | Defined lactation/reporting period with replacement, dry and culling phases attributed once |
| reference_flow_link | `gate_milk` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Declared species' raw whole milk at actual initial gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact species; classification decision; raw whole status; measured fat/solids; gate; temperature; period; offspring consumption; net accepted/rejected mass; tare |

No exact species-, state- and gate-compatible reference UUID has been verified; candidate status does not authorize a concrete exchange.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference milk | Mass | kg | Normalize to weighed accepted milk net of tare and all rejects; never infer mass from litres with a universal density. |
| `composition` | each lot | measured fat and solids | reported mass-fraction basis | Keep sampling basis and temperature; apply the CPC exclusion to the actual lot without standardizing it. |
| `phase_link` | herd | mass and time | kg, animal-days | Link breeding, replacement, lactation, dry and cull records to each reporting period; separate suckled from captured milk. |
| `volume_to_mass` | volumetric records | measured lot-compatible density | kg/L | Convert at measured temperature or obtain direct mass; disclose uncertainty. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified eligible-species managed herd, purchased replacements and feed origins entering recorded phases |
| starting_condition_role | Upstream purchased animal/feed burdens enter once; foreground begins at documented herd management |
| product_classification_scope | Species-qualified raw whole milk only; transferred animals, fibre or sold manure retain separate product identities |
| recursive_input_rule | Same-category purchased milk requires a separate upstream dataset and mass ledger; it is not relabelled as this herd's milk. |
| upstream_dataset_requirement | Compatible datasets for purchased replacements, feed, utilities and packaging, without double counting on-farm feed. |
| disclosure | Species and CPC gate, herd mode, phases, actual cooling, milk balances, handover site, co-product allocation and shared services |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `species_gate` | all | Verify non-cattle (including non-yak), non-buffalo, non-sheep, non-goat, non-camel origin and raw whole state; otherwise this PCR does not apply. | `un-cpc-3-2025` |
| `capture_once` | herd/milking | Herd lactation is distinct from physical removal; gross captured milk appears only at milking, offspring-consumed milk only in the herd ledger. | `fao-other-dairy-animals` |
| `first_acceptance` | conditioning | Perform and record only actual first straining, testing and rejection; no invented standardization or pasteurization. | `fao-dairy-hygiene` |
| `cooling_gate` | cooling | Cooling preserves raw status and is conditional on performed work; exclude later cold-chain services. | `fao-milk-preservation` |
| `handover_gate` | presentation | Account for actual hygienic container and reuse before handover; exclude post-gate distribution and consumer packing. | `fao-dairy-hygiene` |
| `shared_services` | all | Attribute shared milking room, tank, cleaning and meters to actual consumers and periods once. | `fao-dairy-hygiene` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | Managed eligible-species herd | required | Lactating and replacement animals | Biological management and co-product/period ledger, not physical milk removal | animal-days |
| `milking` | Physical milk capture | required | Every milking event | Measure gross milk and capture loss independent of herd management | kg gross captured |
| `conditioning` | First raw-milk acceptance | required | Actual straining, sampling and rejection | Transfer captured to accepted raw state | kg accepted |
| `cooling` | Raw-milk cooling | conditional | Performed before declared gate | Stabilize accepted raw milk without heat treatment | kg cooled |
| `presentation` | Hygienic gate handover | required | Actual container and net sale | Transfer the sole reference output | kg net saleable |

Warm milk bypasses `cooling`; no fictitious energy is assigned. Intermediate milk moves through nodes but is not a second final Product sale.

### Process: Managed eligible-species herd (`herd`)

#### Inputs

##### Product flows

###### Species-appropriate feed and forage (`feed`)

Distinguish bought feed from farm-grown or grazed biomass; use measured dry matter, not a cattle ration.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: reference_flow.

- Selected flow: Feed and forage for declared species
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter
  - Basis: per kg accepted milk; replace with ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied herd water (`herd_water`)

Count metered drinking and managed-service water, not rainfall or water in feed. The actual water function and concrete exchange are determined from herd records; this collection requirement therefore defers group selection.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Meter or delivery record assigned to herd only. Original collection denominator kind: reference_flow.

- Selected flow: Water supplied to managed herd
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per kg accepted milk; replace with meter
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased replacement animals (`replacements`)

Record only externally acquired animals with their own upstream dataset; home-reared young stay internal.

Denominator and scope requirements：per kg accepted milk, with herd reporting period retained for event tracing

Raw quantity and calculation requirements: Count entry events by age and period. Original collection denominator kind: reference_flow.

- Selected flow: Purchased replacement animals of declared species
- Flow property / unit: Number / head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional replacement-event check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: head
  - Basis: per kg accepted milk, with herd-period events as source
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketed young or cull animals (`animals_sold`)

Include only animals actually transferred as independent products, never retained replacements.

Denominator and scope requirements：per kg accepted milk, with herd reporting period retained for event tracing

Raw quantity and calculation requirements: Sale ledger and handover destination by phase. Original collection denominator kind: reference_flow.

- Selected flow: Marketed live animals of declared species
- Flow property / unit: Number / head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional sale-event check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: head
  - Basis: per kg accepted milk, with herd-period events as source
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently marketed manure (`manure_sold`)

Use this Product role only when measured manure is actually sold as a distinct material at a documented handoff; otherwise it remains internal or Waste. Never count the same mass in `manure_waste`.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Weigh separately transferred manure and retain buyer/use evidence. Original collection denominator kind: reference_flow.

- Selected flow: Marketed manure of declared-species herd
- Flow property / unit: Mass / kg wet
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional marketed-manure QA screen, not a yield factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet
  - Basis: per kg accepted milk; actual sold mass controls
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collected unmarketed manure (`manure_waste`)

Record collected waste destination; grazed deposition and separately sold manure are not this waste card.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Weigh exported waste manure by destination. Original collection denominator kind: reference_flow.

- Selected flow: Collected manure requiring waste handling
- Flow property / unit: Mass / kg wet
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet
  - Basis: per kg accepted milk; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_ch4`)

Use measured or species- and diet-supported factor; never automatically borrow cattle methane.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Verified factor times animal-days or direct site measurement. Original collection denominator kind: reference_flow.

- Selected flow: Methane to air from declared-species enteric fermentation
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional emission screen, not a transferable factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg CH4
  - Basis: per kg accepted milk; replace with supported estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure biogenic methane to air (`review_herd_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `herd` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Direct manure nitrous oxide to air (`review_herd_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `herd` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_herd_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `herd` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Manure ammonia to air (`review_herd_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `herd` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Ammonia to air (UUID unresolved)
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-eea-manure-2023`

### Process: Physical milk capture (`milking`)

#### Inputs

##### Product flows

###### Electricity at the equipment supply point (`milking_energy_electricity`)

**Collection scope and applicability for milking_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Count physical capture energy, separate from cooling and shared-room service.
Denominator and scope requirements：per kg gross captured milk
Raw quantity and calculation requirements: Metered duty assigned to actual milking period. Original collection denominator kind: process_output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_milking` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milking`
- Sources: `fao-agricultural-energy`

#### Outputs

##### Product flows

###### Gross captured raw milk (`gross_milk`)

Physically measured milk removed from the animal before acceptance, excluding offspring-suckled milk.

Denominator and scope requirements：per kg gross captured milk

Raw quantity and calculation requirements: Weigh each capture lot once. Original collection denominator kind: process_output.

- Selected flow: Gross captured raw whole milk of declared species
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Range: Captured-lot identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per kg gross captured milk
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

### Process: First raw-milk acceptance (`conditioning`)

#### Inputs

##### Product flows

###### Collected milk entering first conditioning (`condition_input`)

Transfer the gross captured lot once; any separate capture spillage is measured in the lot balance.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Weigh incoming lot net of capture spillage. Original collection denominator kind: reference_flow.

- Selected flow: Collected raw whole milk before acceptance
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional input-to-acceptance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per kg accepted milk; actual reject determines ratio
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### First-conditioning water (`condition_water`)

Record water for actual straining equipment or hygiene, not as a milk ingredient.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Metered conditioning water excluding milking uses. Original collection denominator kind: reference_flow.

- Selected flow: Process water for milk conditioning
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional conditioning-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per kg accepted milk; use actual meter
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted warm raw milk (`accepted_warm`)

This prepared state is transferred to cooling or directly to presentation, not sold a second time.

Denominator and scope requirements：per kg accepted warm milk

Raw quantity and calculation requirements: Incoming collected milk minus documented rejects and sampling loss. Original collection denominator kind: process_output.

- Selected flow: Accepted warm raw whole milk of declared species
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Accepted-warm identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted warm milk
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Rejected milk after first checks (`condition_reject`)

Record failed quality lots and destination once; never mix these into accepted whole milk.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Weigh rejected mass by reason and destination. Original collection denominator kind: reference_flow.

- Selected flow: Rejected raw milk from first conditioning
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional rejection QA screen, not a default loss factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per kg accepted milk; actual rejection measured
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Raw-milk cooling (`cooling`)

#### Inputs

##### Product flows

###### Warm accepted milk assigned to cooling (`cool_input`)

Only the actually cooled share enters; warm direct transfers bypass this node.

Denominator and scope requirements：per kg cooled milk

Raw quantity and calculation requirements: Weigh cooling-tank intake by lot. Original collection denominator kind: process_output.

- Selected flow: Accepted warm raw whole milk of declared species
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Provisional cooling-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per kg cooled output; actual loss measured
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at the equipment supply point (`cool_energy_electricity`)

**Collection scope and applicability for cool_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Meter tank refrigeration for the performed cooling period, not post-gate distribution.
Denominator and scope requirements：per kg cooled milk
Raw quantity and calculation requirements: Metered or allocated energy by actual lot and time. Original collection denominator kind: process_output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_cooling` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling`
- Sources: `fao-agricultural-energy`

#### Outputs

##### Product flows

###### Cooled raw whole milk (`cooled_milk`)

This remains raw, and transfers internally to presentation without becoming a second sale.

Denominator and scope requirements：per kg cooled milk

Raw quantity and calculation requirements: Weigh tank output and measure any loss. Original collection denominator kind: process_output.

- Selected flow: Cooled raw whole milk of declared species
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Cooled-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per kg cooled output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

### Process: Hygienic gate handover (`presentation`)

#### Inputs

##### Product flows

###### Accepted warm or cooled milk for handover (`gate_input`)

Consolidate the actual warm direct and cooled paths per lot, without blending species or double-booking internal states.

Denominator and scope requirements：per kg net saleable milk

Raw quantity and calculation requirements: Sum mutually exclusive warm-direct and cooled transfer masses. Original collection denominator kind: reference_flow.

- Selected flow: Accepted raw whole milk of declared species before handover
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Provisional gate balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per kg net saleable milk; actual reject measured
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Handover container or liner (`container`)

Document material and reuse cycles of container, liner or seal used before the declared gate.

Denominator and scope requirements：per kg net saleable milk

Raw quantity and calculation requirements: Weigh single-use packaging or attribute one documented reusable-container service. Original collection denominator kind: reference_flow.

- Selected flow: Hygienic milk container or liner
- Flow property / unit: Mass / kg material or documented service
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg material
  - Basis: per kg net saleable milk; reusable service separately converted
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Net accepted milk at actual gate (`gate_milk`)

The sole reference sale is one declared species' net raw whole milk, excluding packaging tare.

Raw reference-output records: Weigh saleable net product with species, fat, temperature and gate evidence. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Declared species' raw whole milk at actual initial gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Reference identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per kg net reference milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `actual_outputs` | herd and milk | Declare milk and every actually marketed live animal, fibre, manure or other species-specific co-product at its handoff; separate residues and waste. Do not invent a co-product merely because it is biologically possible. | `fao-other-dairy-animals` |
| `joint_herd` | inseparable biological activity | First split metered services by causal use. For irreducibly joint herd burdens, use a locally justified physical causal allocation if supported; otherwise disclose period-consistent economic allocation and sensitivity. Never assign all burden to milk or zero to culls by default. | `review-fao-pig-lca-2018` |
| `offspring_milk` | suckling | Offspring-consumed milk remains in the herd/young-animal ledger; it is not saleable captured milk or an extra Product output. | `fao-other-dairy-animals` |
| `phase_once` | replacement/dry/lactation/cull | Link inputs, outputs and assets to phase-specific periods and attribute replacement once, with no later duplicate entry. | `review-fao-pig-lca-2018` |
| `asset_once` | room/tank/meter/cleaning | Assign each common service burden once to actual consuming nodes and periods by meter, use-time or disclosed throughput share. | `review-fao-pig-lca-2018` |
| `allocation_method_basis` | Residual joint burdens and shared service | Apply the general LCA hierarchy: examine subdivision or an appropriately justified system expansion before residual allocation; then prefer a supported physical causal relationship, and justify an economic basis when physical attribution is not established. The donor-day, occupancy or throughput driver is a PCR modelling choice requiring case-specific evidence and sensitivity, not a requirement of sanitary guidance. Include failed attempts and losses in the service period; do not select only successful outputs or introduce hypothetical substitution credits. | `review-fao-pig-lca-2018` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | feed, water, animals, manure, methane | herd and supplier ledger | species, animal ids, phase dates, animal-days, feed dry mass, water, bought replacements, suckled milk, sold animals, manure, supported CH4 factor | reconcile herd book, invoices and meters; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | head, days, kg | event and monthly | full lactation/replacement linkage | producing herd | per reference flow | source invoices, calibration and factor provenance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_milking` | `milking` | captured milk and energy | milking lot | lot id, gross mass, spillage, offspring consumption basis, milking energy | weigh lot and read allocated meter; Raw aggregation requirements: reconcile gross and transfer. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, kWh | each lot | all capture events | producing milking stations | per reference flow | scale calibration and lot log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_conditioning` | `conditioning` | raw input, accepted and rejected milk, water | lot acceptance | input, sample loss, rejected, accepted, fat/solids, raw status, water | weigh and sample; Raw aggregation requirements: reconcile by lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, mass fraction | each lot | all accepted/rejected lots | first conditioning station | per reference flow | lab, scale and rejection records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_cooling` | `cooling` | warm input, cool output, energy | tank meter | lot, before/after mass, time, temperature, energy | weigh and read meter; Raw aggregation requirements: input minus loss equals output. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, °C, kWh | cooled lot | only performed events | declared tank | per reference flow | meter/thermometer calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_gate` | `presentation` | net milk and container | handover record | lot, species, net milk, tare, fat, temperature, gate, package mass/reuse, loss | weigh net sale and inspect container; Raw aggregation requirements: sum only net accepted mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, °C | each sale | all reference sales | farm/first-collection gate | per reference flow | signed handover and lab record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pathway_emissions` | `herd` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `herd` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `herd` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_balance` | milk route | Captured = spillage + conditioning input; conditioning input = accepted + reject + sampling loss; warm-direct plus cooled transfer = gate input; gate input = net sale + documented gate loss. | calibrated lot masses | reconciled net kg | `fao-dairy-hygiene` |
| `feed_dry` | feed | Convert recorded wet feed only with measured dry-matter fraction; do not import a universal ration or yield. | feed mass and sample | dry kg per net kg milk | `fao-other-dairy-animals` |
| `shared_split` | facilities | One asset/meter burden times use shares summing to one across actual nodes and periods. | meter/service ledger | node burden without duplication | `fao-dairy-hygiene` |
| `volume_mass` | litre meters | Milk kg = litres × measured lot- and temperature-compatible density; otherwise weigh. | L, density, temperature | kg milk | `fao-dairy-hygiene` |
| `calc_pathway_emissions` | `herd` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `review-fao-pig-lca-2018` |
| `calc_manure_n2o_coverage` | `review_herd_direct_n2o`; `review_herd_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_identity` | reference | Exact animal species, raw whole state and fat exclusion check required. | taxonomy/lot and laboratory record |
| `milk_reconciliation` | every node | Keep lot transfer, rejects, offspring suckling and tare distinct. | scales, lot and handover records |
| `period_completeness` | herd | Animal-days and replacement/dry/lactation/cull events cover declared reporting period. | complete herd register |
| `shared_trace` | infrastructure | List consumers, period, share and a single entry for each common burden. | meter/service records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `verify_species` | reference | Reject cattle including yak, buffalo, sheep, goat, camel and unidentified-species milk. | `un-cpc-3-2025` |
| `verify_state` | reference | Reject under-3.5%-fat, skimmed/partly skimmed, pasteurized, fermented or manufactured milk; cooling alone is allowed. | `un-cpc-3-2025` |
| `verify_mass` | all milk nodes | Reconcile one physical capture with internal transfers and one final net sale; exclude suckled milk, rejects and tare. | `fao-dairy-hygiene` |
| `verify_attribution` | herd/facilities | Check every real co-product handoff, replacement period and shared-meter allocation exactly once. | `fao-other-dairy-animals` |
| `verify_binding` | exchange generation | No unverified UUID can become a final TIDAS exchange; confirm type, species/state/gate, property/unit and support rows. |  |
| `v_pathway_emission_coverage` | `herd` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `review-fao-pig-lca-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species-specific foreground raw-whole-milk data package; candidate until primary records and identities are verified |
| downstream_use | `secondary_dataset`; `background_dataset` only after source/representativeness review |
| allowed_use | One qualifying species' raw whole milk at declared initial handover |
| excluded_use | Species-average, excluded species, processed or low-fat milk, undocumented collection chain |
| required_metadata | Species/CPC check, sites and periods, fat/sample/temperature, actual gate, net/reject/suckled mass, density if used, co-products, allocations and supplier origins |
| required_quality_disclosure | Measured versus estimated fields, sampling and calibration coverage, unresolved flow UUIDs and shared-service uncertainty |
| update_trigger | Species classification, product state, gate, route, verified UUID or material primary data changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) and [02299 detail](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/02299) | species and raw-milk identity/exclusions |
| `fao-other-dairy-animals` | official_guidance | [FAO other dairy animals](https://www.fao.org/dairy-production-products/dairy/other-animals/en) | species-dependent husbandry and lactation context, not CPC taxonomy |
| `fao-milk-preservation` | official_guidance | [FAO milk preservation](https://www.fao.org/dairy-production-products/processing/milk-preservation/en) | cooling and raw-state route distinction |
| `fao-dairy-hygiene` | official_guidance | [FAO/Codex dairy hygiene](https://www.fao.org/4/j2308e/j2308e02.htm) | collection, handling and lot traceability |
| `fao-milk-composition-2013` | official_guidance | [FAO, Milk and dairy products in human nutrition (2013), ch. 3](https://www.fao.org/4/i3396e/i3396e.pdf) | reindeer high-fat example and low-fat mare/donkey caution; actual lots still require measurement |
| `review-fao-pig-lca-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains: Guidelines for assessment, section 11.2.2 and Appendix 2.13](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed-loss accounting and general LCA allocation hierarchy; extension to other taxa or reproductive products is this PCR's explicit methodological choice, not a pig parameter transfer |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Species and pathway applicability; CH4 and N2O method selection, not universal emission factors |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
