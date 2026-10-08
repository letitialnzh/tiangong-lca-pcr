---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-goats-or-kids
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw hides and skins of goats or kids

## 1. Scope and Applicability

This rule covers separately recovered, fresh or first-stage preserved, untanned goat and kid raw skins. It applies to slaughter and lawful, quality-acceptable fallen-animal recovery. It does not treat a skin retained on a carcass as a separate product. Declare species, provenance, state, grade, actual removal/recovery/curing gate and reporting period. Exclude sheep skins, furrier-class raw furskins, detached hair, chromium-tanned wet blue, other leather and post-gate transport. Upstream goat husbandry may serve meat, milk, fibre or breeding across periods; its burdens must be linked, never silently discarded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-goats-or-kids |
| classification_refs | CPC 3.0 `02954` |
| covered_products | Separately recovered fresh, chilled, dried, salted or brined goat/kid raw skins, not further prepared |
| excluded_products | Sheep/lamb and other-species hides, furrier furskins, detached hair, tanned wet blue and finished leather |
| representative_product | 1 kg net as-sold recovered raw goat/kid skin |
| production_route | route-compatible upstream animal production → actual slaughter or lawful fallen recovery and independent flaying → first cleaning/trimming → grade sorting → optional preservation → protective actual-gate handover |
| market_state | Fresh or first-stage preserved; species, moisture, retained salt, grade and gate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One separately marketed raw goat or kid skin lot at its actual handover |
| How much | 1 kg net as-sold skin; exclude detachable packaging and free brine |
| How well | goat/kid species, legal source, route, grade, fresh/chilled/dried/salted/brined state, moisture and retained salt |
| How long or cycle | measured terminal-event-to-handover lot, linked to actual animal-production and shared-service periods |
| reference_flow_link | `raw_goat_skin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw goat or kid skin at actual handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | goat or kid; actual recovery; legal source; grade; fresh/preserved route; moisture; retained salt; net package exclusion; gate; animal and facility periods |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_sale_mass` | reference and marketable intermediate skins | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net skin at each actual state and gate; exclude removable package and free brine. |
| `state_mass` | fresh to preserved comparison | Mass | kg | Measure before/after skin mass, water loss and retained salt; never apply a universal fresh-to-cured factor. |
| `period_meter` | shared energy and upstream animal service | Energy and time | kWh, h | Keep carrier meters and service hours by actual reporting period before per-kg normalization. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified live goat/kid delivered for slaughter, or legally recoverable fallen body; link the route-compatible animal-production dataset without duplicating its exchanges. |
| starting_condition_role | Product for live slaughter; Waste for fallen body only where that is its actual legal flow role. Product-status fallen recovery requires a separately verified Product exchange. |
| product_classification_scope | CPC 3.0 `02954` raw goat/kid skin, not CPC furskin or processed leather. |
| recursive_input_rule | Purchased same-category raw skin entering conditioning carries its own upstream dataset; do not treat it as newly removed skin or reallocate the originating animal. |
| upstream_dataset_requirement | Species, meat/milk/fibre/breeding history and periods, terminal route, real co-products, salt, utility and package datasets compatible with actual state and gate. |
| disclosure | animal ID/lot, upstream boundary, legal recovery, skin removal, output set, allocation, periods, shared assets, grade, state and handover. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `animal_link` | upstream and terminal | Husbandry remains in a route-compatible upstream dataset, including meat/milk/fibre/breeding history. If upstream already includes slaughter, do not repeat its burden in the foreground terminal node; record a handover ledger instead. | `fao-small-ruminant` |
| `independent_skin` | terminal removal | Flaying or lawful recovery is distinct from husbandry and first conditioning. Only an actually separated marketable skin enters this PCR; skin-on carcass does not create an invented hide. | `fao-small-ruminant` |
| `actual_gate` | all routes | Stop at actual removal, slaughterhouse, lawful recovery or curing handover before tanning; exclude later distribution and leather manufacture. Omit unperformed downstream nodes for an early fresh-skin gate. | `un-cpc-3`; `fao-hides` |
| `state_destinations` | conditioning to presentation | Identify wet/prepared, accepted/downgraded/rejected and fresh/preserved states and their handoffs. Fresh skin bypasses preservation; package protects but does not add net skin mass. | `fao-hides`; `fao-small-ruminant` |
| `shared_asset_scope` | removal, conditioning, grading, preservation, presentation | Identify shared rooms, meters, curing frames and reusable containers; enumerate consuming nodes and periods, then attribute each burden once. | `fao-hides` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `removal` | Terminal event and independent skin removal | required | recorded route | Record actual slaughter or lawful fallen recovery; remove skin separately from conditioning. | measured lot |
| `conditioning` | First raw-skin conditioning | conditional | actual first preparation before handover | Clean, flesh or trim only as actually performed, preserving a prepared-state handoff. | measured lot |
| `grading` | Grade and destination sorting | conditional | actual sorting before handover | Separate accepted, downgraded saleable and rejected destinations. | measured lot |
| `preservation` | Conditional raw-skin preservation | conditional | actual preservation only | Treat only actual chilling, drying, salting or brining; fresh sale bypasses. | measured lot |
| `gate` | Protective presentation and actual handover | required | recorded route | Protect and transfer one raw skin product at the declared gate. | measured lot |

### Process: Terminal event and independent skin removal (`removal`)

#### Inputs

##### Product flows

###### Live goat or kid for documented slaughter (`live_goat`)

Live goat or kid entering actual slaughter.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Live goat or kid entering actual slaughter (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Match live animal ID and mass to a compatible upstream husbandry dataset; include the terminal event once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Lawfully recoverable fallen goat body (`fallen_body`)

Fallen goat or kid body legally managed as waste.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Fallen goat or kid body legally managed as waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Use only when actual legal role is Waste, quality permits recovery and no meat product is invented.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Separately removed wet raw goat skin (`wet_skin`)

Fresh untanned goat or kid skin after independent flaying.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Fresh untanned goat or kid skin after independent flaying (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately only if skin is actually recovered; skin retained on carcass is not a separate product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual saleable meat or carcass co-product (`actual_meat`)

Real saleable meat or carcass from slaughter.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Real saleable meat or carcass from slaughter (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record actual independent sale handovers only; none is presumed for fallen recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other real terminal co-products (`other_terminal`)

Other actually marketed terminal products, if any.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Other actually marketed terminal products, if any (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Disaggregate material identity and handover; do not combine milk, fibre or breeding service with slaughter outputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unmarketable terminal residues (`terminal_waste`)

Unmarketable slaughter or fallen-body residues for documented treatment.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Unmarketable slaughter or fallen-body residues for documented treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh residues and record legal treatment; never count them as saleable skin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: First raw-skin conditioning (`conditioning`)

#### Inputs

##### Product flows

###### Wet skin entering first conditioning (`raw_input`)

Wet raw goat or kid skin from removal.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Wet raw goat or kid skin from removal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Match lot and mass once to removal output; purchased hide needs compatible upstream dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for actual first cleaning (`wash_water`)

Process water for first cleaning, only when applied.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Process water for first cleaning, only when applied (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Meter actual water use; absent washing means zero exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-conditioned raw skin (`prepared_skin`)

Untanned cleaned and trimmed goat or kid raw skin.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Untanned cleaned and trimmed goat or kid raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh prepared skin before grade sorting; record retained moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fleshing and trim rejects (`conditioning_waste`)

Non-saleable flesh, trimmings and wash solids.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Non-saleable flesh, trimmings and wash solids (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record mass and actual treatment destination separately from prepared skin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Grade and destination sorting (`grading`)

#### Inputs

##### Product flows

###### Prepared skin entering grading (`grading_input`)

First-conditioned goat or kid skin entering sort.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: First-conditioned goat or kid skin entering sort (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Trace incoming lot and mass once from conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted grade raw skin (`accepted_skin`)

Accepted saleable goat or kid raw skin.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Accepted saleable goat or kid raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record each declared grade and onward preservation or direct handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded but marketable raw skin (`downgraded_skin`)

Lower-grade but independently saleable goat or kid raw skin.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Lower-grade but independently saleable goat or kid raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Use only when sold as raw skin; state buyer and gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unmarketable graded rejects (`grading_reject`)

Rejected skin portions not sold as raw skin.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Rejected skin portions not sold as raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record rejection reason, mass and treatment; no automatic recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Conditional raw-skin preservation (`preservation`)

#### Inputs

##### Product flows

###### Usable raw skin before preservation (`preservation_input`)

Accepted or downgraded raw skin entering actual preservation.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Accepted or downgraded raw skin entering actual preservation (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Omit this process for fresh direct handover; trace state and mass on entry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Measured curing salt or other permitted preservation medium (`preservative`)

Actually used salt, brine constituent or other permitted medium.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Actually used salt, brine constituent or other permitted medium (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Identify substance and measure input; no universal salt dose or fixed flow identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy utility for actual chilling or drying (`preservation_energy`)

Actual electricity, fuel or other energy carrier for preservation.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Actual electricity, fuel or other energy carrier for preservation (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Meter by carrier and period; omit when no energy intervention occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kWh per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved untanned raw skin (`preserved_skin`)

Chilled, dried, salted or brined raw goat or kid skin, not tanned.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Chilled, dried, salted or brined raw goat or kid skin, not tanned (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure as-sold state mass and retained salt and moisture before presentation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent preservation residues (`preservation_waste`)

Spent brine, rejected skin and other actual preservation residues.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Spent brine, rejected skin and other actual preservation residues (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Separate liquid and solid treatment and record mass without hiding moisture loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Protective presentation and actual handover (`gate`)

#### Inputs

##### Product flows

###### Saleable raw skin entering presentation (`saleable_skin_input`)

Actually saleable raw goat/kid skin from removal, grading or preservation, at the declared gate.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Actually saleable raw goat/kid skin from removal, grading or preservation at the declared gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Take one route-specific recovered, graded or preserved output per lot; never count alternatives together.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective presentation material (`protective_material`)

Actually used reusable or single-use protective packaging.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Actually used reusable or single-use protective packaging (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record material and reuse count; package mass is excluded from net skin reference.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw goat or kid skin at actual handover (`raw_goat_skin`)

Net as-sold fresh or preserved untanned raw goat or kid skin.

Raw reference-output records: Exactly one final output per sold lot at its actual removal, slaughterhouse, recovery or curing gate; branch-specific upstream steps may be omitted. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Raw goat or kid skin at actual handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Normalized reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg per functional unit
  - Basis: per 1 kg net as-sold raw skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Rejected package and presentation residues (`packaging_reject`)

Non-reused protective material and presentation rejects.

Denominator and scope requirements：per actual recorded lot; final result normalized to 1 kg net as-sold raw skin

- Selected flow: Non-reused protective material and presentation rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record actual disposal separately from the skin product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Range: Provisional completeness screen, not a default yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: actual measured lot flow or service, initial screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `animal_phase` | meat/milk/fibre/breeding history | Link upstream inputs, animal services, replacement and termination to actual periods and products. Apply documented physical causality where defensible; otherwise use disclosed economic relation with sensitivity. Do not assign zero or all lifetime burden to the hide by default. | `fao-small-ruminant` |
| `terminal_output_set` | slaughter versus fallen recovery | List every actual independently marketed skin, meat/carcass and other terminal output and its handover; allocate joint burdens only among real intended products, with shares summing to one. Fallen recovery creates no assumed meat product. Residue and Waste are not automatically co-products. | `fao-small-ruminant` |
| `grade_and_state` | sorting and preservation | Saleable accepted and downgraded grades are distinct products only where actual independent sales occur; rejected skin, spent brine and trims follow measured treatment. Do not credit loss as saleable output. | `fao-hides` |
| `shared_period` | shared sites and containers | Allocate room, frame, meter and reusable-container burdens among actual consuming nodes/lots and periods by measured hours or throughput; count each service once and disclose choice. | `fao-hides` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_removal` | `removal` | actual terminal event and independent skin | animal-event ticket | animal and lot ID, species, source route, legal status, live/body mass, skin removal, skin/meat/other products, Waste, gate, period | slaughter/recovery tickets, calibrated scales, upstream dataset linkage; Raw aggregation requirements: match one body input to real outputs and recorded loss. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, event | each event | animal service and terminal periods | actual source and removal site | per reference flow | tickets, scales, legal records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_conditioning` | `conditioning` | first prepared-skin state | processing batch | incoming skin, water, prepared skin, trims, moisture, lot, time | batch sheet, water meter and calibrated scale; Raw aggregation requirements: reconcile mass by state and treatment. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, h | each batch | reference production period | actual conditioning site | per reference flow | meter and scale calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grading` | `grading` | accepted/downgraded/rejected destinations | grade ledger | incoming lot, grade, accepted, downgraded, rejected masses and destinations | scale and sale/dispatch documents; Raw aggregation requirements: partition actual grade and reject destinations. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | reference production period | grading site | per reference flow | grade and dispatch evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_preservation` | `preservation` | actual curing or chilling | preservation batch | inlet state and mass, salt/medium, utility carrier, output state/mass, moisture, retained salt, spent liquor, time | batch sheet, meter and laboratory/scale records; Raw aggregation requirements: separate fresh bypass and each intervention. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, kWh, h | each preserved batch | actual preservation periods | curing site | per reference flow | batch, calibration and sample record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_gate` | `gate` | net saleable skin and package | dispatch lot | incoming state, grade, gross mass, free brine, package tare/reuse, net skin mass, gate, destination | dispatch scale, container ledger and invoice; Raw aggregation requirements: one final net-skin output per sold lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, event | each dispatch | reference handover period | actual handover site | per reference flow | dispatch and tare tickets; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_reference` | handover | Net skin mass = gross weighed dispatch minus detachable package and free brine; divide attributable inventories by measured net kg. | gross, package tare, free brine, lot ID | inventory per 1 kg as-sold raw skin | `un-cpc-3` |
| `state_balance` | each preparation node | Reconcile state-specific inlet mass plus actual added water/salt with outgoing skin, residues, drained liquor and measured moisture change; no universal conversion. | lot masses, moisture, salt, water, losses | documented state transition | `fao-small-ruminant` |
| `attribution_check` | animal and shared assets | Sum attributable shares to one per real joint-output node and service period; never count same animal phase, room, meter or container twice. | product sales, physical drivers, periods, service records | attributable burden per final kg | `fao-hides` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `legal_trace` | each recovered skin | Verify goat/kid identity, terminal route, lawful and quality-acceptable recovery, actual separate skin sale and gate. | animal ticket, legal and dispatch record |
| `state_trace` | all mass transitions | Distinguish wet, prepared, graded, fresh and preserved skin; document moisture, retained salt and package tare. | calibrated scales, tests, batch ledger |
| `period_complete` | upstream and shared service | Link meat/milk/fibre/breeding periods, terminal event, assets and every consuming node; record exclusions and branch bypass. | upstream dataset, meter and period ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `category_gate` | reference | Reject sheep, furrier furskin, tanning-stage wet blue or non-raw leather; require species, state and actual pre-tannery gate. | `un-cpc-3` |
| `separation` | terminal | Check a skin is physically recovered and sold separately; no invented output from skin-on carcass. Match live Product or fallen Waste to the actual route and legal role. | `fao-small-ruminant` |
| `route_balance` | all nodes | Match lot IDs and measured masses from removal to final single handover; reconcile accepted, downgraded, rejected, retained salt, free brine and explained moisture change. | `fao-small-ruminant` |
| `outputs_periods` | allocation | Confirm actual meat/milk/fibre/breeding output sets, periods, shared consumers and attribution shares; prevent zero/whole-hide burden defaults and double count. | `fao-hides` |
| `identity_resolution` | concrete dataset exchange | Resolve each unresolved product/waste/elementary identity to a detail-verified compatible flow before generating a final exchange; conditional flow scope is provisional, not a UUID. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground raw goat/kid skin production package, candidate methodology |
| downstream_use | `secondary_dataset`; `background_dataset` when gate, period, route and identity match |
| allowed_use | Separately sold, raw untanned goat/kid skins with actual legal source, state and gate |
| excluded_use | Sheep/furskin/leather, fictitious skin-on-carcass output, undisclosed recovery or unverified fixed exchange |
| required_metadata | species, legal origin, terminal event, grade, state, moisture, retained salt, period, gate, allocation, package |
| required_quality_disclosure | measured versus estimated amounts, upstream compatibility, shared-asset allocation, unresolved UUIDs and QA Range limits |
| update_trigger | changed route, classification, hide state, flow identity, quantitative evidence or gate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | raw-category and processed-goods boundary |
| `fao-small-ruminant` | `official_guidance` | [FAO, Manual for slaughter of small ruminants, chapter 10](https://www.fao.org/4/X6552E/X6552E10.htm) | actual skin separation, first curing and residues |
| `fao-hides` | `official_guidance` | [FAO, Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | hide collection, quality, grading and preservation |
