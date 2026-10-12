---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-mushrooms
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Wild edible mushrooms

## 1. Scope and Applicability

This PCR covers one qualified actual species lot of fresh or chilled edible mushroom fruiting bodies gathered from an untended natural source and dispatched by the declared gatherer or primary producer. Wild origin is established by source and collection records, not inferred from species, a forest address or a commodity name. Untended gathering is distinct from managed enhancement or intentional production [unsd-wild-mushrooms]. Truffles, cultivated mushrooms, substrate/spawn/inoculation operations and habitat interventions intended to raise mushroom production are excluded. This PCR does not instruct identification for consumption or certify food safety; unqualified or unidentified fungi cannot be asserted to be the edible reference.

Simple cleaning, trimming, grading, actual fresh-preservation storage and producer packaging are included only when performed before the declared dispatch. Dried, dehydrated, frozen, cooked, salted, canned, chemically preserved and other processed products, downstream distribution, retail, consumer storage and use are excluded. Fresh/dried trade states and gathered/cultivated origin are distinct [fao-fungi-use]. No universal collection yield, cold-chain recipe or fresh-to-dry ratio is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-mushrooms |
| classification_refs | cpc:3.0:03232; proposed narrower fresh/chilled primary scope |
| covered_products | Actual qualified fresh/chilled untended gathered edible mushroom fruiting bodies, excluding truffles |
| excluded_products | Cultivated or intentionally managed-production mushrooms; truffles; substrate or spawn; dried/frozen/processed goods; unidentified or unqualified fungi |
| representative_product | One actual qualified species/grade gathered fresh mushroom lot at declared producer dispatch |
| production_route | Untended collection and actual transfer; conditional primary cleaning/trimming/grading; conditional fresh preservation; final acceptance and actual packaging |
| market_state | Net fresh/chilled fruiting-body lot, with actual grade, moisture, handling state and gate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One actual fresh/chilled wild edible mushroom lot at declared gatherer or primary-producer dispatch |
| How much | 1 kg net as-received accepted fruiting-body product, excluding packaging and separately rejected soil/trim |
| How well | Actual species and documented edible qualification, wild source, grade, trim/foreign-matter and moisture basis |
| How long or cycle | Actual collection trip/season, handling batch, pre-gate storage interval and dispatch time; reusable-asset attribution periods stated |
| reference_flow_link | `wild_mushroom_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh or chilled wild edible mushrooms at declared gatherer or primary-producer dispatch |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual species and edible qualification record; untended wild source/site; collection trip and season; fresh/chilled state; maturity/grade; soil/foreign matter and trimming boundary; moisture basis; temperature/time records; actual dispatch gate; net mass and packaging exclusion |

All qualifiers must be present in the foreground package. The reference describes a single actual qualified lot, not interchangeable species or a mixed commodity average without compositional evidence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net as-received mass on a calibrated scale; exclude packaging and separately rejected matter. Only the linked accepted final output is 1 kg. |
| `fresh_mass_bridge` | mushroom and residue mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure incoming fresh lot, attached soil, trim, added/retained water, stock change and outputs on matched lot/time boundaries; moisture changes do not justify a universal dry-matter or fresh-to-dry factor. |
| `energy_basis` | energy umbrellas | Energy | MJ | Preserve recorded fuel mass/volume and electricity kWh; convert only using documented matching net calorific value/density or exact 3.6 MJ per kWh. Record actual fuel identity and conversion evidence; no service hours inside an MJ card. |
| `service_basis` | service umbrellas | Service duration | h | Use actual measured service/asset hours and documented consumer shares; no invented conversion from payment, walking, distance or labour to energy. |
| `water_basis` | water inputs and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass, or actual compatible volume-density evidence; supplied product water and direct withdrawal are exclusive for each quantity. Distinguish liquid discharge, evaporation, retained water and dissolved matter. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual untended source with owned gathering, or verified already gathered wild fresh input at the actual entry node; no fictional cultivation phase |
| starting_condition_role | Documented collection/source responsibility or upstream gathered-product handoff |
| product_classification_scope | Fresh/chilled primary untended mushroom lot only; CPC 03232 narrower partial coverage, not whole-leaf fresh-state proof |
| recursive_input_rule | An already gathered same-category input carries its measured state and matching upstream burden once; never add the same natural removal or collection again |
| upstream_dataset_requirement | Traceable wild origin, lot/state/gate, quality qualification and compatible upstream method; missing prior burden is disclosed as a gap, not assumed zero |
| disclosure | Source sites, actual owned nodes, collection and storage periods, entry and dispatch gates, packaging/reuse boundary, rejected-material fates and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `wild_origin` | source and reference | Require records demonstrating untended gathering; cultivated or intentional enhancement routes are outside scope. Habitat association is not proof of wild origin. | `unsd-wild-mushrooms` |
| `actual_route` | all nodes | Select actual collection, first conditioning and fresh preservation responsibilities from records; bypass absent nodes, connect the last actual upstream state to final acceptance, and assign each material portion and burden once. | `fao-fungi-collection` |
| `source_removal` | collection | Collection owns resource removal and harvest together: source interface, removed fresh bodies and measured downstream collected state. Do not create a second removal node or invent managed production. Record attached mineral matter and on-site retained residuals separately. | `fao-fungi-collection` |
| `producer_gate` | handover | End at actual gatherer/primary-producer dispatch. Include actual pre-gate presentation; exclude downstream distribution and manufacture. Raw/fresh and preserved/dried states are not assumed equivalent. | `fao-fungi-use` |
| `state_destinations` | conditioning and preservation | Separate intended selected grade, other qualified goods, off-spec/reinspection lots, trim, wastewater and spoilage. Every material exit has an actual state and destination; unknown off-spec fate cannot be counted as accepted goods. | |
| `shared_period_sites` | all nodes | Enumerate contributing sites, trips, handling runs and storage periods, shared asset consumers and service boundaries. Log cleaning/changeover, replacement, repair and end-of-use once in the correct run/period; disclose physical access impacts and do not invent habitat-area occupation from collection duration. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection` | Untended collection and resource removal | conditional | Actual gathering responsibility is inside the declared system, not already owned by an upstream gathered product | foreground capture | Measured collected fresh lot, source/removal ledger and actual trip |
| `conditioning` | Primary conditioning and grading | conditional | Actual pre-dispatch cleaning/trimming/grading is performed | foreground first preparation | Measured fresh input and every accepted grade/reject handoff |
| `preservation` | Pre-gate fresh preservation and storage | conditional | Actual fresh/chilled preservation or storage is performed before dispatch | bounded preservation | Measured usable fresh input/output and actual time/temperature |
| `handover` | Final acceptance packaging and producer handover | required | Every accepted final lot | foreground acceptance and presentation | 1 kg net accepted reference output |

Trips and handling/storage runs are batch-indexed. Actual movement is owned by the responsible node or a documented supplier, not a fabricated process. All measured intermediate feeds may differ from final mass. Conditional umbrella cards expand only into actual zero/one/multiple identified exchanges with their own property/unit/UUID evidence; no unused input is imposed.
### Process: Untended collection and resource removal (`collection`)

#### Inputs

##### Product flows

###### Collection fuel and electricity (`collection_energy`)

Conditional umbrella for recorded purchased fuel or electricity used by equipment or actual access travel owned here. Human walking and labour do not imply fuel or metabolic exchanges. A fully inclusive transport service and its included fuel cannot both be counted.

- Selected flow: Collection fuel and electricity
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Collection consumables (`collection_materials`)

Actual consumable tools and carrying-container replacements are recorded by material and use share, not a universal equipment recipe. Reusable assets accounted as service below are excluded from this consumption quantity.

- Selected flow: Collection consumables
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Shared collection asset and access services (`collection_services`)

Conditional umbrella measured by attributable asset or service hours, with named actual service, consuming trips, periods and total-user denominator. Payments or permits alone are not physical service quantities; inclusive supplier services retain their actual inventory boundary.

- Selected flow: Shared collection asset and access services
- Flow property / unit: Service duration / h
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No crossing flow is prescribed; document actual absent roles.

##### Elementary flows

###### Untended wild mushroom fruiting bodies removed from natural source (`wild_resource`)

The removal ledger records only fresh fruiting bodies actually gathered from the declared untended habitat; not soil, litter, host-tree biomass or fungal substrate. Natural resource removal and an upstream gathered-product input never represent the same quantity twice.

- Selected flow: Untended wild mushroom fruiting bodies removed from natural source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Incidental soil and mineral matter removed with gathered lot (`collection_incidental_soil`)

Conditional only for actual attached soil/mineral material physically removed with the lot; record separately from edible fruiting-body resource mass. Material brushed off and left in situ is a disclosed retained source fate, not an exported quantity.

- Selected flow: Incidental soil and mineral matter removed with gathered lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Gathered fresh mushrooms at collection handoff (`gathered_raw`)

Collected raw lot handed to actual transfer, conditioning or dispatch, with species, source, collection time and incidental soil/foreign matter measured separately. This intermediate quantity is measured, not fixed to final one kilogram.

- Selected flow: Gathered fresh mushrooms at collection handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Collection rejects crossing to treatment (`collection_reject`)

Only actual removed rejects sent to a declared treatment destination cross this waste boundary. Uncollected fruiting bodies remain in the source; on-site retained trim is a disclosed residue fate, not both a waste export and an elementary emission.

- Selected flow: Collection rejects crossing to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual named direct collection emissions (`collection_direct_emissions`)

Conditional umbrella for identified direct substances from actual owned combustion or equipment operation, with amount, method and receiving compartment stated per substance. Inclusive supplier services own their emissions; no universal factor, guessed pollutant or human metabolic emissions are imposed.

- Selected flow: Actual named direct collection emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Primary conditioning and grading (`conditioning`)

#### Inputs

##### Product flows

###### Fresh gathered mushroom lot entering primary conditioning (`conditioning_feed`)

Input is a measured upstream collection handoff or purchased already gathered wild lot, with predecessor burdens retained once. Source evidence must exclude cultivated lots; raw soil, trim and water are not silently accepted edible-product mass.

- Selected flow: Fresh gathered mushroom lot entering primary conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Primary conditioning fuel and electricity (`conditioning_energy`)

One conditional umbrella for actual purchased fuel or electricity in cleaning, trimming, sorting and pre-gate movement; no assumed powered washing equipment or mandatory thermal treatment.

- Selected flow: Primary conditioning fuel and electricity
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Supplied primary conditioning water (`conditioning_water`)

Record only water supplied as a product for actual washing or equipment cleaning; brushing without washing has no water input. Direct abstraction of the same quantity belongs exclusively to the elementary water card.

- Selected flow: Supplied primary conditioning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Primary conditioning consumables (`conditioning_materials`)

One conditional umbrella for actual cleaning agents and disposable handling materials, preserving named formulation and its use; no chemicals are prescribed to qualify wild mushrooms.

- Selected flow: Primary conditioning consumables
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Shared primary conditioning services (`conditioning_services`)

Actual shared worktables, handling equipment and contracted services are attributed by measured service hours across consumers and periods; dedicated energy and materials outside the service boundary remain separate.

- Selected flow: Shared primary conditioning services
- Flow property / unit: Service duration / h
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No crossing flow is prescribed; document actual absent roles.

##### Elementary flows

###### Direct water abstraction for primary conditioning (`conditioning_direct_water`)

Conditional direct environmental withdrawal from a recorded source, actual freshwater type and location. Resolve the source-specific elementary identity; never also enter the same supply as product water. Convert volume only using evidenced compatible density.

- Selected flow: Direct water abstraction for primary conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Cleaned graded fresh mushrooms at conditioning handoff (`conditioned_fresh`)

Prepared still-fresh selected lot is handed to actual preservation or final acceptance. Retain species/grade, trimming and foreign-matter decisions; no drying, cooking or shelf-life equivalence is implied.

- Selected flow: Cleaned graded fresh mushrooms at conditioning handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other accepted grade goods at separate handoff (`other_grade_goods`)

Enumerate each actually accepted edible lower-grade or other intended goods lot with its own species, grade and buyer gate. It is a co-output only with evidenced intended use and handoff; unidentified or unqualified mushrooms are not edible goods.

- Selected flow: Other accepted grade goods at separate handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Trim soil and rejected mushrooms sent to treatment (`conditioning_reject`)

One waste umbrella resolved by actual composition and destination. Record edible trim, soil/foreign matter and spoiled or unqualified fruiting bodies separately in the raw ledger; reinspection loops retain their originating burden and do not create new accepted mass.

- Selected flow: Trim soil and rejected mushrooms sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Primary conditioning wastewater to treatment (`conditioning_wastewater`)

Measured discharged wash or cleaning effluent enters its actual wastewater-treatment boundary. Dissolved solids and retained water are recorded; wastewater is not evaporated water or an unmeasured direct discharge.

- Selected flow: Primary conditioning wastewater to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual named direct conditioning emissions (`conditioning_direct_emissions`)

Conditional umbrella for identified direct substances from actual owned combustion or equipment operation, with amount, method and receiving compartment stated per substance. Inclusive supplier services own their emissions; no universal factor, guessed pollutant or human metabolic emissions are imposed.

- Selected flow: Actual named direct conditioning emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Pre-gate fresh preservation and storage (`preservation`)

#### Inputs

##### Product flows

###### Usable fresh mushrooms entering pre-gate preservation (`preservation_feed`)

Measured usable lot received from whichever actual prior node or verified upstream gathered source exists. It remains fresh; no frozen, dried or chemically preserved output is included.

- Selected flow: Usable fresh mushrooms entering pre-gate preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fresh preservation fuel and electricity (`preservation_energy`)

Conditional single umbrella for actual chilling, ventilation and cold-storage fuel or electricity within the declared pre-gate time. No universal temperature, duration or energy recipe; inclusive purchased cooling services exclude duplicate power.

- Selected flow: Fresh preservation fuel and electricity
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fresh preservation materials including refrigerant make-up (`preservation_materials`)

Resolve actual refrigerant, ice or other preservation material by named identity and function; measure make-up, recovered amount and stock changes. Filling a circuit is not automatically an emission; do not count ice as both water supply and cooling material.

- Selected flow: Fresh preservation materials including refrigerant make-up
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Shared fresh preservation asset services (`preservation_services`)

Attribute actual shared cold-room or contracted cooling service hours to species lots and storage periods, using occupancy and metering evidence. Neither idle capacity nor an assumed useful life supplies a universal per-kilogram burden.

- Selected flow: Shared fresh preservation asset services
- Flow property / unit: Service duration / h
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No crossing flow is prescribed; document actual absent roles.

##### Elementary flows

No crossing flow is prescribed; document actual absent roles.

#### Outputs

##### Product flows

###### Fresh or chilled mushrooms at preservation handoff (`preserved_fresh`)

Measured still-usable fresh/chilled lot handed to final producer acceptance, recording actual temperatures, duration and quality state. Stabilization claims require lot evidence, not a guaranteed shelf life.

- Selected flow: Fresh or chilled mushrooms at preservation handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Preservation spoiled lot and material waste (`preservation_spoilage`)

Actual spoiled mushrooms, spent materials or recovered refrigerant transferred as waste are resolved by distinct composition and treatment destinations. Return/reinspection quantities are linked to the original lot and measured once.

- Selected flow: Preservation spoiled lot and material waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water vapour from fresh preservation to air unspecified (`preservation_water_vapour`)

Conditional measured or balance-derived water actually evaporated from the fresh lot to air unspecified; not all mass loss, liquid drainage, respiration carbon or unknown volatiles. A known specific air compartment requires its own verified identity.

- Selected flow: Water vapour from fresh preservation to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual named direct fresh preservation emissions (`preservation_direct_emissions`)

Conditional umbrella for separately measured named refrigerant leakage or other identified direct substance and receiving medium. Unknown refrigerant, combustion species or respiratory gas composition is an identity/data gap, never a forced single UUID. Water vapour above is excluded.

- Selected flow: Actual named direct fresh preservation emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Final acceptance packaging and producer handover (`handover`)

#### Inputs

##### Product flows

###### Actual fresh mushroom lot entering final producer acceptance (`handover_feed`)

Measured lot from the last actual upstream state, including direct gathered dispatch where conditioning and cold preservation are absent. Exactly one input representation owns each portion, with linked predecessor burden once.

- Selected flow: Actual fresh mushroom lot entering final producer acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Final producer handling fuel and electricity (`handover_energy`)

Single conditional umbrella for measured energy in final weighing, pre-gate handling and packaging equipment; retail delivery, cooking and consumer storage are outside this gate.

- Selected flow: Final producer handling fuel and electricity
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Producer handover packaging materials (`handover_packaging`)

Actual crates, liners or other protective materials by composition, mass and reused or single-use status. Net mushroom mass excludes packaging. Reusable container allocation includes actual reuse, repair, return and end-of-use records once.

- Selected flow: Producer handover packaging materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Shared final weighing and presentation services (`handover_services`)

Record actual attributable weighing, sorting and packaging-asset hours; enumerate all consuming lots and reporting periods. Pre-gate logistics are assigned to their actual owner, not silently included as distribution.

- Selected flow: Shared final weighing and presentation services
- Flow property / unit: Service duration / h
- Amount rule: Measured attributable quantity from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No crossing flow is prescribed; document actual absent roles.

##### Elementary flows

No crossing flow is prescribed; document actual absent roles.

#### Outputs

##### Product flows

###### Fresh or chilled wild edible mushrooms at declared gatherer or primary-producer dispatch (`wild_mushroom_dispatch`)

Exactly the accepted reference lot at the declared final producer dispatch gate. Document untended wild origin, qualified actual species, fresh/chilled state, net mass, trim/foreign matter, moisture/grade and temperature/time. Only this accepted output is fixed to the reference; packaging and earlier feeds are measured separately.

- Selected flow: Fresh or chilled wild edible mushrooms at declared gatherer or primary-producer dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Declared reference normalization identity
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `collected_record`

###### Other qualified fresh goods at final producer handoff (`handover_other_goods`)

Conditional other actually qualified fresh species/grade lots dispatched separately at the producer gate, with their own acceptance, net mass and destination. A grade transferred internally from conditioning is not also a sold co-product at that earlier handoff; inventory labels distinguish internal transfer from independent boundary exit. Unknown or unqualified fungi remain excluded from edible goods.

- Selected flow: Other qualified fresh goods at final producer handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Final acceptance rejects and package waste (`handover_reject`)

Actual off-spec mushrooms and damaged packages to named treatment exits; salvage or lower-grade sale needs an evidenced separate intended goods role rather than disposal credit. Retain rejection burdens and exclude rejects from accepted net mass.

- Selected flow: Final acceptance rejects and package waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual named direct handover emissions (`handover_direct_emissions`)

Conditional umbrella for identified direct substances from actual owned combustion or equipment operation, with amount, method and receiving compartment stated per substance. Inclusive supplier services own their emissions; no universal factor, guessed pollutant or human metabolic emissions are imposed.

- Selected flow: Actual named direct handover emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable quantity from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Broad provisional reasoned QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_ownership` | collected/prepared/accepted goods | Enumerate every actual intended species/grade output and its handoff. Internal transfers carry burden forward and are not independent final products. Retained source material, waste, unidentified fungi and spoiled lots are not co-products by default. | |
| `attribution_order` | multiple intended goods | First subdivide independently metered collection/handling lots and processes. For genuinely shared remaining operations, use evidenced physical causation such as actual trip/container use or service occupancy. Where no defensible physical driver remains, use recorded same-period net producer values with sensitivity analysis and a documented decision. Do not apply a universal mass/value share or substitution credit. | |
| `loss_and_return` | reject and reinspection paths | Keep burdens on the originating lot through repeat cleaning/reinspection; record every return to its originating conditioning or acceptance node. Count recirculated material once in overall mass balance, not as new collection. Only newly qualified accepted mass enters the final denominator; treatment retains attributable burden without an automatic negative credit. | |
| `shared_asset_period` | shared services and packaging | Index each vehicle, tool, cold-room or reusable-container asset, all consuming nodes/lots/periods and total users. Attribute measured use/occupancy with compatible total-use records, log idle/replacement/repair/end-of-use decisions and avoid both purchase and inclusive service burdens for the same use. No assumed lifetime or perpetual reuse. | |
| `site_period_aggregation` | site and temporal aggregation | Sum attributable exchanges and accepted output mass on compatible actual species/state/gate boundaries; divide their totals rather than averaging site ratios. Retain per-site/trip/season coverage, missing contributors, weighting and representativeness decisions. Opening/closing inventories prevent a lot being counted in collection and later dispatch periods twice. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_collection` | collection | source and collected lot; energy/material/service; incidental/reject/emission | source-trip ledger | actual species; edible qualification record; untended source/site; access/trip; collection time; fruiting-body mass; attached soil; raw output; retained or exported residue; fuel/electricity; consumables; service hours/users; named emissions/compartments; destination | Verify source records and traceable calibrated weighing; logs/meter/supplier records for actual owned operation; retain substance-specific emission measurement or actual-fuel factor evidence | kg; MJ; h in separate raw fields | each actual trip and material handoff | actual trip and collection season | enumerated source sites and owners | per 1 kg reference flow | source proof; identity qualification; calibrated scales; original logs; boundary and factor evidence |
| `cp_conditioning` | conditioning | fresh feed, water, grades, trim, wastewater and owned operation | handling-batch ledger | lot/species/source; incoming fresh/soil mass; trim; all grades; reinspection links; supplied or direct water/source; retained water; wastewater solids/destination; energy/material/service; named emissions/compartments; opening/closing stock | Calibrated matched-lot weighing, actual water metering, records of state/destination and service boundary; document each factor or inferred emission separately | kg; MJ; h in separate raw fields | each batch/changeover and handoff | actual handling run and cleaning events | declared preparation sites and source lots | per 1 kg reference flow | scale/meter checks; batch/state ledger; source exclusions; treatment records |
| `cp_preservation` | preservation | fresh stock, energy/material/service, spoilage/water and named emissions | fresh storage ledger | lot/species; opening/input/output/closing mass; time/temperature; moisture; condensate/drainage; water loss; respiratory loss evidence; energy; ice/refrigerant material and stock; leakage/recovery/compartment; service occupancy/users; spoilage destination | Match calibrated stock weights and actual temperature/period/meter logs; reconcile water/material balances and independently identified emission measurements or justified substance-specific factors | kg; MJ; h in separate raw fields | each storage run, event and exit | actual pre-gate storage interval | each owned cold/storage site and service boundary | per 1 kg reference flow | calibrated records; lot quality; metering; leakage/stock reconciliation; missing-loss disclosure |
| `cp_handover` | handover | accepted net reference, packaging, rejection and final operation | dispatch acceptance ledger | actual species/source qualification; previous state; net/gross/tare masses; trim/soil boundary; moisture/grade; gate/time/temperature; package mass/reuse/returns; rejected/other-goods destinations; energy/service/users; named emissions; stock | Weigh on calibrated scale excluding packaging; reconcile acceptance, upstream lot and dispatch records; inspect documented product qualification, not AI edibility inference | kg; MJ; h in separate raw fields | each accepted dispatch and reject event | actual dispatch time and asset-use period | declared gatherer or primary-producer gate | per 1 kg reference flow | net/tare checks; acceptance and source traceability; reuse ledger; recorded quality qualification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | all inventory rows | Divide each actually attributable exchange total by matched accepted net dispatch kilograms; retain its numerator unit. The linked final product is 1 kg, not a harvest yield. | attributable exchange; accepted net dispatch mass; cp_handover | exchange per 1 kg reference flow | |
| `lot_mass_reconcile` | material and stock ledgers | Reconcile opening stock plus actual inputs against closing stock, all intended outputs, exported waste, retained source residues and substantiated environmental losses. Track attached soil separately. Report nonclosure, measurement uncertainty and unknown loss; never label unexplained fresh mass loss as water evaporation. | matched source/lot/period weights; water and soil records; all destinations | closed lot ledger or explicit gap | |
| `energy_conversion` | energy umbrellas | Preserve carrier quantities; use documented actual-carrier net calorific value/density where conversion is necessary, or 3.6 MJ per measured electricity kWh; verify inclusive-service exclusions. | actual carrier quantity; compatible factor evidence | carrier-specific energy amount | |
| `shared_use` | shared assets and periods | Attribute documented total service burden according to compatible measured consumer usage divided by all-user usage within the same service period, retaining idle/repair/replacement decisions and actual multi-output rule. | consuming-node/period service use; total-use ledger; burden boundary | singly attributed service share | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | reference and input lots | Preserve actual species, edible qualification record, untended-source proof and state; reject cultivated or intentionally enhanced lots. This methodology gives no identification or consumption recommendation. | source and qualified acceptance records |
| `physical_quality` | material/stock/water balances | Record raw fresh input, mineral matter, trim, accepted grades, spoilage, water uptake/loss and stock on common boundaries. Do not transplant dry-weight trade data or historical species yields. | matched calibrated lot ledger and uncertainty |
| `operational_quality` | process selection and preservation | Actual route, owners, temperature/time, service boundary and ingredient/refrigerant identity are mandatory where used; absent refrigeration is not presumed active and unknown activity is not zero. | trip/run/storage logs and supplier evidence |
| `coverage_quality` | aggregation | List all contributing sites, species lots, trips, seasons and periods, exclusions and output weights; justify aggregation only for compatible reference products; incomplete site coverage is disclosed rather than scaled by a guessed habitat yield. | site-period coverage and representativeness record |
| `range_quality` | every card | All non-reference Ranges are broad provisional reasoned QA screens, not collected facts, empirical typical values, recipes or mandatory ceilings. A 10 kg/kg screen spans order-of-magnitude variable feed/loss/material ratios; 20 kg/kg spans conditional cleaning-water throughput; 100 MJ/kg spans manual zero-energy to powered handling/cold storage; 10 h/kg spans shared service intensity. The reference 1..1 expresses only the declared normalization. Foreground amounts require the linked protocol regardless of screen. Review outliers and replace screens with actual evidence; never clip, reject or fill missing values by these estimates. | actual protocols and reviewer judgement; no quantitative FAO source adopted |
| `identity_resolution` | all exchanges | Each actual exchange must resolve to a verified concrete flow/property/unit identity matching substance/source/state/gate/compartment. A conditional umbrella is not itself a universal exchange. | detailed identity and support evidence retained with production package |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `check_scope` | reference and source | Verify actual untended gathered species, documented edible qualification, fresh/chilled state and producer gate; reject truffles, intentional production and excluded processed states. | `unsd-wild-mushrooms` |
| `check_reference` | wild_mushroom_dispatch | Verify 1 kg accepted net output, linked card, actual qualifiers, calibrated net mass and same reference denominator across all rows; inputs and intermediate outputs remain measured. | |
| `check_balance` | all actual nodes | Reconcile lot, mineral/foreign matter, water, trim, spoilage and stock; supplied/direct water and predecessor/natural removal are exclusive per portion. Unexplained losses or negative stocks remain gaps. | |
| `check_conditional_paths` | process map | Select actual owned gathering/conditioning/preservation, connect feeds and output states, retain predecessor burdens once. Trace every reinspection loop or rejection exit to origin; rejected mass is not an accepted output. | |
| `check_attribution` | sites periods and output set | Confirm every intended goods handoff and attribution hierarchy, batch/changeover linkage, all sites and periods, and shared-asset/service/reuse consumers. No omitted contributor, repeated final product or duplicate period/service burden. | |
| `check_identity` | concrete exchanges | Verify flow type/direction, actual material/pollutant identity, gate/source or receiving compartment, property/unit and each support reference; no near-match, unknown refrigerant or general dust identity is accepted automatically. | |
| `check_evidence` | quantities and ranges | Require raw linked protocols, compatible conversion factors and traceable actual operations. Provisional QA screens cannot provide missing values or prove valid cold-chain conditions; outliers trigger review, not clipping. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground collection/primary-handling dataset for one qualified actual fresh/chilled wild species lot |
| downstream_use | secondary_dataset or background_dataset only for a compatible declared fresh/chilled producer-gate state |
| allowed_use | Traceable modelling of untended gathering and actual pre-gate handling with complete flow identities and quality disclosure |
| excluded_use | Cultivation, habitat enhancement, truffles, dried/frozen/processed output, unknown-edibility assurance, consumer nutrition or avoided-production credit |
| required_metadata | Actual species/qualification, source and sites, trip/season, node owners, state/gate, grade/moisture/soil/trim, time/temperature, net mass, packages/reuse, output destinations and attribution decisions |
| required_quality_disclosure | Measured coverage, missing upstream/identity/loss evidence, nonclosure and uncertainty, provisional screens, site-period weighting, factor compatibility and actual service boundaries |
| update_trigger | Source/species/state/gate or handling change; temperature/period change; material or refrigerant identity change; new evidence, supplier/asset/reuse change or altered output destinations |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-wild-mushrooms` | official_guidance | UNSD CPC 3.0 03232, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03232 ; retrieved 2026-10-08 | Untended gathered versus intentionally managed/cultivated scope; not proof of whole-leaf fresh-only coverage |
| `fao-fungi-collection` | official_guidance | FAO, Wild edible fungi, chapter 3, https://www.fao.org/4/y5489e/y5489e07.htm ; retrieved 2026-10-08 | Collection/source/access responsibilities and distinction from management; examples and historical yields are not defaults |
| `fao-fungi-use` | official_guidance | FAO, Wild edible fungi, chapter 4, https://www.fao.org/4/y5489e/y5489e08.htm ; retrieved 2026-10-08 | Distinct gathered/cultivated and fresh/dried market states; not current universal cultivation limits or quantitative factors |
