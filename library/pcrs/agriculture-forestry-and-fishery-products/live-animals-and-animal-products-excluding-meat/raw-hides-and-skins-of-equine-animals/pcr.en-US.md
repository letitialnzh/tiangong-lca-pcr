---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-equine-animals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw hides and skins of equine animals

## 1. Scope and Applicability

Covers equine hides fresh or preserved but not further prepared. Declare species, working/breeding/meat history, terminal event, slaughter or lawful fallen-animal recovery, grade, preservation and actual gate. Do not assume every skin comes from food slaughter or treat hide as burden-free waste. Exclude other species, isolated hair, tanned leather, liming/dehairing and post-gate distribution.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-equine-animals |
| classification_refs | CPC 3.0 `02952` |
| covered_products | Fresh or preserved but not further prepared equine raw hides and skins |
| excluded_products | Other species, isolated hair, tanned leather and leather-processing services |
| representative_product | 1 kg net as-sold equine raw hide at actual pre-tannery handover |
| production_route | animal service and terminal event → removal/recovery → first conditioning → grading → optional preservation → protective handover |
| market_state | Fresh, chilled, dried, salted or brined; disclose moisture, salt and grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted as-sold equine raw hide at actual gate |
| How much | 1 kg net; excludes detachable package and free brine |
| How well | species, provenance, grade, moisture/salt condition, preservation route, legality |
| How long or cycle | one terminal-event-to-handover lot; attribute animal service and shared assets across actual periods |
| reference_flow_link | `handover:equine_raw_hide` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Equine raw hide at actual pre-tannery handover (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; use history; terminal event; legal source; recovery route; grade; state; moisture/salt; package; actual gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference and intermediate hides | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net by state; exclude detachable package and free brine |
| `state_conversion` | fresh versus preserved | Mass | kg | No cross-state kg conversion without measured masses, moisture and retained salt |
| `period_link` | animal and shared service | Time and mass | year, kg | Link inputs, terminal event and assets to actual periods before normalization |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified equine service-history start or compatible upstream animal dataset, followed by actual slaughter or lawful fallen-animal recovery |
| starting_condition_role | Disclose working, breeding, meat or mixed role and terminal event; no assumed meat route |
| product_classification_scope | CPC 3.0 `02952` |
| recursive_input_rule | Purchased same-category hide entering curing retains upstream dataset and is not counted as newly produced animal output |
| upstream_dataset_requirement | Route/period-compatible animal service, slaughter/recovery, salt, energy and packaging data |
| disclosure | species, provenance, service periods, terminal event, actual output set, attribution, state, grade, gate and coverage |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_gate` | all routes | End at actual farm-slaughter, slaughterhouse, recovery or curing handover; include actual conditioning, grading, optional preservation and protection; exclude tanning and later transport | `un-cpc-3`; `fao-hides-2009` |
| `separate_removal` | terminal event | Removal or lawful recovery is a distinct node with wet skin, incidental residues and losses | `fao-hides-statistics` |
| `source_interface` | animal to removal | The provenance node is a linked-upstream source interface, not a duplicate husbandry process. Exactly one route-specific body handoff enters removal with the same animal ID and measured mass: live Product for slaughter, or fallen-body Waste only where that is its actual legal flow role. Product-status fallen recovery requires a separate verified Product identity before exchange generation. | `fao-hides-statistics` |
| `grades_states` | conditioning to grading | Separate raw/prepared and accepted/downgraded/rejected destinations; do not mix waste with product | `fao-hides-2009` |
| `preserve_pack` | optional stabilization | Fresh bypasses preservation; chilled/dried/salted routes record actual inputs, residues, losses and package reuse | `fao-hides-2009`; `unido-leather-2015` |
| `shared_period` | animal and site | Assign animal service and shared removal/curing/packing assets to actual users and periods once | `fao-hides-statistics` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `animal` | Equine provenance and supply handoff | required | required | Link upstream animal-service dataset and record actual terminal output set, without duplicating husbandry exchanges | measured terminal lot |
| `removal` | Terminal handling, hide removal or recovery | required | required | Independent collection of wet raw hide | measured lot |
| `conditioning` | First raw-hide conditioning | required | required | First cleaning, fleshing and trimming | measured lot |
| `grading` | Raw-hide grading | required | required | Accepted, downgraded and rejected destinations | measured lot |
| `preservation` | Raw-hide preservation | conditional | conditional | Fresh bypass; chilled, dried, salted or brined when actual | measured lot |
| `handover` | Protective presentation and handover | required | required | Final as-sold hide at declared gate | measured lot |

### Process: Equine provenance and supply handoff (`animal`)

#### Inputs

##### Product flows

This node links a compatible upstream animal-service dataset to one traced body handoff; it does not manufacture animal mass. Animal feed, water and other husbandry inputs belong in that linked dataset unless the foreground boundary is explicitly extended and independently inventoried; they are not one composite Product flow. Each terminal event selects one of the two mutually exclusive handoff cards below, and its measured body mass must equal the matched removal input.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live equine animal to terminal handling (`live_equine_handoff`)

Traceable live equine animal entering actual slaughter and hide removal.

- Selected flow: Traceable live equine animal entering actual slaughter and hide removal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record live mass and animal ID for actual slaughter route only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per terminal event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal`
- Range: Provisional handoff mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured handoff mass; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fallen equine body to lawful recovery (`fallen_body_handoff`)

Fallen equine body lawfully routed to hide recovery only where its actual legal role is Waste, not a meat product.

- Selected flow: Fallen equine body lawfully routed to hide recovery, not a meat product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record body mass, death event and lawful recovery destination for fallen route only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per terminal event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal`
- Range: Provisional handoff mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured handoff mass; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Terminal handling, hide removal or recovery (`removal`)

#### Inputs

##### Product flows

###### Live equine animal entering terminal handling (`live_equine_input`)

Live equine animal from the matched provenance handoff.

- Selected flow: Live equine animal from the matched provenance handoff (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Match animal ID, live mass and slaughter event one-to-one with upstream handoff.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per terminal event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional handoff mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured handoff mass; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fallen equine body entering recovery (`fallen_body_input`)

Fallen equine body from the matched lawful recovery handoff only where its actual legal role is Waste.

- Selected flow: Fallen equine body from the matched lawful recovery handoff (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Match death event, mass and lawful recovery handoff one-to-one.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per terminal event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional handoff mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured handoff mass; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Actual non-hide terminal products (`other_terminal_products`)

Actual carcass, meat or other independently sold output.

- Selected flow: Actual carcass, meat or other independently sold output (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record only real saleable outputs and handovers; do not invent meat for fallen animals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected wet raw equine skin (`collected_skin`)

Wet ungraded equine skin before first conditioning.

- Selected flow: Wet ungraded equine skin before first conditioning (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh at independent removal or recovery handoff.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Terminal-event residues (`terminal_residues`)

Non-product carcass residue sent to actual treatment.

- Selected flow: Non-product carcass residue sent to actual treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately from intended products and record legal treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removal residues (`removal_residues`)

Non-product flesh and damaged skin to treatment.

- Selected flow: Non-product flesh and damaged skin to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record each residue and destination without subtracting it invisibly from hide yield.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removal`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per event
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: First raw-hide conditioning (`conditioning`)

#### Inputs

##### Product flows

###### First-conditioning water (`conditioning_water`)

Water supplied for actual first washing or rinsing.

- Selected flow: Water supplied for actual first washing or rinsing (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Meter the water used; omit when no washing occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per kg prepared hide
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-conditioned raw hide (`prepared_hide`)

Cleaned, fleshed or trimmed equine hide before grading.

- Selected flow: Cleaned, fleshed or trimmed equine hide before grading (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh prepared raw hide; no liming, dehairing or tanning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning trims and wash residues (`conditioning_residues`)

Nonmarketable trim and spent wash to actual treatment.

- Selected flow: Nonmarketable trim and spent wash to actual treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure material and wastewater separately by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Raw-hide grading (`grading`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted raw-hide grades (`accepted_grade`)

Accepted equine raw hide to fresh handover or preservation.

- Selected flow: Accepted equine raw hide to fresh handover or preservation (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh each accepted grade and handover separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded but saleable hide (`downgraded_grade`)

Independently marketable lower-grade equine raw hide.

- Selected flow: Independently marketable lower-grade equine raw hide (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Retain as product only with actual independent buyer or handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected unsaleable hide (`rejected_hide`)

Rejected equine hide sent to actual treatment.

- Selected flow: Rejected equine hide sent to actual treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh and record treatment destination, not reference-product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Raw-hide preservation (`preservation`)

#### Inputs

##### Product flows

###### Preservation salt or brine (`preservation_salt`)

Actually purchased salt or brine for salted route.

- Selected flow: Actually purchased salt or brine for salted route (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure added, retained and spent salt separately; omit for nonsalted route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per kg preserved hide
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy supply (`preservation_energy`)

Energy carrier for actual refrigeration or drying.

- Selected flow: Energy carrier for actual refrigeration or drying (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Meter bounded preservation energy and determine carrier from records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kWh per kg preserved hide
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved usable raw hide (`preserved_hide`)

Chilled, dried, salted or brined equine raw hide.

- Selected flow: Chilled, dried, salted or brined equine raw hide (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh output with moisture and retained-salt condition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation residues (`preservation_residues`)

Spent salt, brine or spoiled raw hide to treatment.

- Selected flow: Spent salt, brine or spoiled raw hide to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record separate residue identities and destinations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Protective presentation and handover (`handover`)

#### Inputs

##### Product flows

###### Protective packaging material (`protective_packaging`)

Package function for final raw-hide protection.

- Selected flow: Package function for final raw-hide protection (UUID unresolved)
- Flow property / unit: Mass or count / kg or item
- Amount rule: Record new material versus reusable container service; no post-gate logistics.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per kg net hide
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Equine raw hide at declared handover (`equine_raw_hide`)

Accepted as-sold equine raw hide at pre-tannery gate.

- Selected flow: Accepted as-sold equine raw hide at pre-tannery gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh net hide excluding detachable packaging and free brine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg per kg reference
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Packaging rejects at gate (`packaging_rejects`)

Damaged or retired packaging to actual treatment.

- Selected flow: Damaged or retired packaging to actual treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record only when end-of-use occurs before handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recorded lot or reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per lot
  - Basis: measured relevant lot flow; not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `animal_history` | animal service | Link actual working, breeding, meat or mixed-use periods and terminal event; use defensible physical causality, otherwise documented economic relation and sensitivity; neither assign all animal burden to one hide nor default to zero | `fao-hides-statistics` |
| `terminal_outputs` | slaughter or recovery | Enumerate only actual independent hide, carcass/meat and other product handovers; invent no meat for fallen recovery; separate residues and waste; allocation shares sum to one | `fao-hides-statistics` |
| `facility_shared` | removal to handover | Assign shared room, equipment, meter and reusable container once by consuming node, lot and period using recorded hours or throughput | `fao-hides-2009` |
| `grade_products` | grading | Accepted and independently saleable downgraded grades are intended products; rejects, spent brine, trims and package waste follow actual destinations; no duplicate handover | `fao-hides-2009` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal` | `animal` | Animal history and actual output set | lot/event record | animal/lot ID, before/after mass, state, inputs, outputs, destinations, time, gate | meters, scale tickets, transaction and operator records | kg, h | per lot/event | all reference periods | actual site | sum and reconcile by state, grade, period and destination | calibration, tickets, invoices |
| `cp_removal` | `removal` | Independent collection of wet raw hide | lot/event record | animal/lot ID, before/after mass, state, inputs, outputs, destinations, time, gate | meters, scale tickets, transaction and operator records | kg, h | per lot/event | all reference periods | actual site | sum and reconcile by state, grade, period and destination | calibration, tickets, invoices |
| `cp_conditioning` | `conditioning` | First cleaning, fleshing and trimming | lot/event record | animal/lot ID, before/after mass, state, inputs, outputs, destinations, time, gate | meters, scale tickets, transaction and operator records | kg, h | per lot/event | all reference periods | actual site | sum and reconcile by state, grade, period and destination | calibration, tickets, invoices |
| `cp_grading` | `grading` | Accepted, downgraded and rejected destinations | lot/event record | animal/lot ID, before/after mass, state, inputs, outputs, destinations, time, gate | meters, scale tickets, transaction and operator records | kg, h | per lot/event | all reference periods | actual site | sum and reconcile by state, grade, period and destination | calibration, tickets, invoices |
| `cp_preservation` | `preservation` | Fresh bypass; chilled, dried, salted or brined when actual | lot/event record | animal/lot ID, before/after mass, state, inputs, outputs, destinations, time, gate | meters, scale tickets, transaction and operator records | kg, h | per lot/event | all reference periods | actual site | sum and reconcile by state, grade, period and destination | calibration, tickets, invoices |
| `cp_handover` | `handover` | Final as-sold hide at declared gate | lot/event record | animal/lot ID, before/after mass, state, inputs, outputs, destinations, time, gate | meters, scale tickets, transaction and operator records | kg, h | per lot/event | all reference periods | actual site | sum and reconcile by state, grade, period and destination | calibration, tickets, invoices |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_reference` | handover | Net hide kg = gross weighed lot minus detachable package and free brine; divide attributable inventory by net mass | gross, package, brine | exchanges per kg | `un-cpc-3` |
| `state_balance` | all nodes | Before mass plus measured water/salt = after mass plus measured residues and explained moisture change; no universal conversion | masses, salt, water, residues | lot balance | `fao-hides-2009` |
| `allocation_sum` | shared outputs | Shares sum to one per node; animal and shared-asset periods not counted twice | actual outputs, drivers, periods | attributable burdens | `fao-hides-statistics` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | reference lot | Trace species, history, terminal event, lawful origin, state, grade and gate | animal ID, dispatch |
| `completeness` | all nodes | Include downgraded/rejected, spent salt, package rejects and shared services; mark unused branches zero | balance, batch log |
| `state_quality` | conversion | Retain measured moisture and retained salt; distinguish as-sold, fresh and dry mass | tests, calibrated scale |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `classification` | reference | Reject non-equine, tanned/dehaired/limed or gate/state-undocumented products | `un-cpc-3` |
| `mass_balance` | nodes | Reconcile removal-to-handover masses, accepted/downgraded/rejected destinations, moisture and retained salt | `fao-hides-2009` |
| `output_set` | terminal and grading | Verify real intended outputs and handovers; no fictional meat co-product for fallen recovery | `fao-hides-statistics` |
| `source_match` | animal and removal | Match each live-Product or fallen-body-Waste handoff once by animal ID, route and measured mass; reconcile the removal outputs and documented losses without double-counting the body as another co-product. | `fao-hides-statistics` |
| `period_shared` | animal and facility | Check animal and shared-asset periods counted once and allocation shares sum to one | `fao-hides-statistics` |
| `uuid_gate` | concrete exchanges | Concrete exchange needs actual state and gate; farm-gate mix is not a curing-site substitute |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground equine raw-hide dataset at actual pre-tannery gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Raw-hide and downstream leather models with matching species, grade, state and gate |
| excluded_use | Other species, leather, unverified farm-gate mix and undisclosed state |
| required_metadata | species, use history, terminal event, lawful source, allocation, net mass, grade, state and gate |
| required_quality_disclosure | upstream coverage, state/mass/salt balance, shared drivers and unresolved UUIDs |
| update_trigger | route, legal recovery, species scope, treatment state, gate, allocation or identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | classification boundary |
| `fao-hides-2009` | `official_guidance` | [FAO, Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | collection, conditioning and preservation |
| `fao-hides-statistics` | `official_guidance` | [FAO, hides and skins production definitions](https://www.fao.org/4/x9892e/X9892e06.htm) | slaughter and fallen-animal source |
| `unido-leather-2015` | `official_guidance` | [UNIDO, sustainable leather framework](https://downloads.unido.org/ot/46/70/4670793/KRAL_AGR_AIT_URT_2015_100228_001.pdf) | raw-hide/later-leather boundary |
