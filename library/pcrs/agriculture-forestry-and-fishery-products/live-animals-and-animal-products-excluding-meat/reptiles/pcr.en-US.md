---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.reptiles
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Live reptiles

## 1. Scope and Applicability

This PCR covers living, identified reptiles, including eligible snakes, lizards, crocodilians and turtles, delivered alive at the actual captive-breeder or authorized live-capture source gate. Species-level legal provenance and a documented route are mandatory; CPC classification is not permission to trade protected animals. Captive husbandry and lawful collection have different burdens and must not be averaged as though every reptile were farmed. Amphibians, dead reptiles, skins, meat, detached eggs, slaughter and post-gate buyer transport are excluded from the live reference. Species-specific temperature, lighting, feeding, aquatic/terrestrial holding and welfare practices are actual route facts, not universal defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.reptiles` |
| classification_refs | CPC 3.0 `02195` |
| covered_products | Living reptiles of an identified eligible species, with documented captive-bred or lawful wild origin |
| excluded_products | Amphibians; dead animals, skins, meat, detached eggs; unverified or prohibited trade; downstream transport and use |
| representative_product | 1 kg directly measured live mass of one declared eligible reptile species at source handover |
| production_route | Captive breeding/rearing or legally documented live collection, mutually exclusive for each lot |
| market_state | Living, unprocessed, condition and source documented |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared reptile species alive at source handover |
| How much | 1 kg directly measured live mass with individual count and size class |
| How well | Alive and fit for actual handover; taxon, health, source and legal status verified |
| How long or cycle | Declare breeding cohort, rearing phase or capture campaign and all shared-service periods |
| reference_flow_link | `live_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-qualified live reptile |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species/taxon; count; size/age class; mass; captive or wild source and permit; jurisdiction; health/condition; cohort or campaign; actual handover gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live_mass` | Reference and live transfers | Mass | kg | Weigh live animals at actual handover; preserve count and size class. Do not use a universal kg/animal conversion across taxa. |
| `m_input_mass` | Feed, stock and waste | Mass | kg | Use measured wet/as-purchased state and disclose any dry-matter conversion separately. |
| `m_time` | Cohorts, capture campaigns and shared facilities | Time | day or declared period | Assign inputs, mortality, output and assets to actual periods; no default lifetime is assumed. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Captive route: opening breeding/juvenile stock with count, mass and carried burden, or purchased stock with supplier burden. Capture route: licensed source population/access and actual campaign; no fictitious breeder stock. |
| starting_condition_role | Breeding/juvenile stock is biological Product input or disclosed opening asset; wild population is capture context, not a zero-burden purchased animal. |
| product_classification_scope | CPC 3.0 `02195` living reptiles only, after species and legal-status check. |
| recursive_input_rule | Link purchased same-category live reptiles once to upstream source dataset; internal rearing-to-handover transfer is not a second final sale. |
| upstream_dataset_requirement | Supplier species, source, gate, geography and burden for purchased animals, feed and services; permits for regulated wild or captive source. |
| disclosure | Taxon, source code/permit, provenance, count/mass, condition, cohort/campaign, mortality, real co-products, shared assets, route and handover gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_legal` | Every lot | Verify species and legal source before modelling marketable live output. CITES or domestic source codes require checking; they are not blanket authorization. | `un-cpc-2025`; `woah-reptiles-2024`; `cites-guide-2022` |
| `b_routes` | Captive or wild source | Captive production includes real breeding/rearing, stock, feed, water and environmental control; collection includes authorized live capture and actual holding but no invented captive lifetime. Stop at actual source handover. | `woah-reptiles-2024` |
| `b_shared` | Shared rooms, thermal plant, pools, equipment | Assign measured service to consuming cohorts, capture/holding nodes and periods once. Separate buyer transport, slaughter and destination use. | `woah-reptiles-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `captive` | Breed and rear living reptiles | conditional | evidenced captive-bred/reared source | managed biological production | per kg accepted live output |
| `capture` | Lawful live collection and short holding | conditional | valid wild-collection authority; excludes captive route for same lot | independent live capture | per kg accepted live output |
| `handover` | Verify and hand over living reptiles | required | actual source gate for either route | final live acceptance | per kg accepted live output |

The captive node manages named stock through real feeding, water, species-specific environmental control and health checks. Capture independently removes authorized living animals from a documented source and records actual holding, losses and handover; it does not borrow captive-production inputs. Handover is a distinct condition/count/mass and legal-documentation gate. Eggs, shed material or another product count only when independently sold at their own gate; routine residue and dead animals are not live products. Shared rooms, heated water and equipment are allocated by observed service to nodes and periods.

### Process: Breed and rear living reptiles (`captive`)

#### Inputs

##### Product flows

###### Purchased breeding or juvenile animals (`captive_stock`)

Record species, source, count, mass and upstream burden; no double booking of opening stock.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living reptile stock
- Flow property / unit: Mass / kg
- Amount rule: measured stock received or opening inventory apportioned to cohort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Range: Provisional non-negative stock screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; not an allowed cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate feed (`captive_feed`)

Record actual feed identity, including procured prey only where genuinely used; no universal reptile diet is assumed.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual feed or prey supplied to named cohort
- Flow property / unit: Mass / kg
- Amount rule: measured supplies net of closing inventory and separately recorded loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Range: Provisional non-negative feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; replace with species records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied drinking, pool or cleaning water (`captive_water`)

Record water actually supplied, separating functions where records allow.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Water supplied to reptile facility
- Flow property / unit: Mass / kg
- Amount rule: meter or reconcile supplied water by cohort and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Range: Provisional non-negative water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; investigate by husbandry mode
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Environmental-control energy (`captive_energy`)

Record actual carrier for heating, lighting, filtration or humidity control where required by selected species and site.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Energy carrier supplied to reptile facility
- Flow property / unit: Energy / MJ
- Amount rule: metered carrier energy attributed to cohort and service period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Range: Provisional non-negative facility-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ/kg live output
  - Basis: per kg accepted live output; no generic reptile default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is assumed.

##### Elementary flows

No routine elementary input is assumed; distinguish direct extraction from supplied water if present.

#### Outputs

##### Product flows

###### Live animals transferred to acceptance (`captive_live`)

Internal cohort transfer is measured once and is not an additional final sale.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified live reptiles leaving rearing
- Flow property / unit: Mass / kg
- Amount rule: measured live mass and count at transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Live-transfer reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg final live output
  - Basis: per kg accepted live output; reject missing mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold reptile eggs (`captive_eggs`)

Only record real separately marketed reptile eggs with their own identity and gate. They are not part of the live reference.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified reptile eggs sold separately
- Flow property / unit: Mass / kg
- Amount rule: separately measured sale quantity and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional co-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; zero without independent handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold shed material (`captive_shed_product`)

Only record real separately marketed shed material at its own documented product gate, separate from reptile eggs.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified reptile shed material sold separately
- Flow property / unit: Mass / kg
- Amount rule: separately weighed and invoiced shed material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional separately sold shed-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; zero without separate sale
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Captive-rearing mortalities (`captive_mortality`)

Record dead animals by species and disposal route, never as accepted live output.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Dead reptile bodies from captive rearing
- Flow property / unit: Mass / kg
- Amount rule: weigh or reconcile each disposal event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional biological-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; investigate mortality
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unsold reptile eggs for treatment (`captive_unsold_eggs`)

Record discarded reptile eggs separately from bodies and shed material; split actual exchanges further by treatment destination.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Unsold reptile eggs for documented treatment
- Flow property / unit: Mass / kg
- Amount rule: measured discarded material by state and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional unsold biological-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; disclose treatment destination
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unsold shed material for treatment (`captive_unsold_shed`)

Record discarded shed material separately from reptile bodies and eggs, with its actual treatment destination.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Unsold reptile shed material for documented treatment
- Flow property / unit: Mass / kg
- Amount rule: measured discarded shed mass by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional discarded-shed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; disclose treatment destination
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent pool or cleaning water (`captive_wastewater`)

Record wastewater crossing facility boundary to treatment or sewer; direct release to the environment is elementary instead.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Reptile-facility wastewater to treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or water-balance-derived discharged mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resources`
- Range: Provisional wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; reconcile with supplied water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct site emission, if measured (`captive_emission`)

Only record a named substance and receiving medium actually measured or source-modelled; no generic emission UUID.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Named direct pollutant to specified environmental medium
- Flow property / unit: Mass / kg
- Amount rule: substance-specific measurement or documented calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Range: Provisional non-negative emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; substance-specific evidence required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Lawful live collection and short holding (`capture`)

#### Inputs

##### Product flows

###### Capture and holding consumables (`capture_supplies`)

Record actual nets, traps, safe containers or purchased consumables; reusable equipment is attributed by use period.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual capture and holding materials
- Flow property / unit: Mass / kg
- Amount rule: issue records and shared-equipment attribution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Range: Provisional capture-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; includes attributed reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied holding water (`capture_water`)

Count actual short-holding water if supplied; no assumed common water need for all reptiles.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Water supplied during live collection/holding
- Flow property / unit: Mass / kg
- Amount rule: metered or recorded supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Range: Provisional capture-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; only actual supplied water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is assumed.

##### Elementary flows

No generic wild-population depletion exchange is assigned; document legal extraction separately from environmental exchange modelling.

#### Outputs

##### Product flows

###### Legally captured live reptiles (`capture_live`)

Count living animals leaving capture/holding by species, condition and permit; internal transfer, not second final sale.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified lawfully captured living reptiles
- Flow property / unit: Mass / kg
- Amount rule: measured live mass and count leaving holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Capture-transfer reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; compare capture and acceptance logs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortality during live capture (`capture_mortality`)

Record actual deaths and disposition; dead animals never become live output.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Dead reptile bodies from capture
- Flow property / unit: Mass / kg
- Amount rule: event count and mass by disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional capture-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; investigate incidents
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded capture consumables (`capture_discarded_supplies`)

Record spent nets, traps or containment materials only if actually discarded at this node, separate from animal mortality.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Spent capture and holding supplies for documented treatment
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled discarded consumables by material and treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional capture-consumable waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; only actual discard
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No unmeasured release is assumed.

### Process: Verify and hand over living reptiles (`handover`)

#### Inputs

##### Product flows

###### Live animals entering source-gate check (`handover_live_input`)

Record exactly one internal transfer from chosen route; never count captive and capture output for same lot.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living reptiles from source node
- Flow property / unit: Mass / kg
- Amount rule: measured arrivals and count reconciled to source-node departures
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Live-input reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg accepted live output
  - Basis: per kg accepted live output; compare route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate containment for handover (`handover_containment`)

Include disposable enclosure material handed with lot or consumed before gate; reusable cages are shared assets.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual live-animal containment material
- Flow property / unit: Mass / kg
- Amount rule: measured material issued and attributed reuse if applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Range: Provisional containment-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output; disclose cage reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is assumed.

##### Elementary flows

No routine elementary input is assumed.

#### Outputs

##### Product flows

###### Accepted living reptiles at source gate (`live_handover`)

One declared eligible species, alive and legally documented. Record count and measured mass; never substitute species-free UUID.

Denominator and scope requirements：per 1 kg accepted live reptile

Raw reference-output records: 1 kg reference from measured accepted live mass Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Species-qualified live reptile
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live`
- Range: Exact reference normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: per 1 kg accepted live reptile
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Rejected animals returned alive to source (`handover_live_return`)

Only record a real live return to captive or capture holding, not a sale, death or waste; reconcile against arrivals and accepted output. Returning through the same gate must not count the animal or burden twice. If further production occurs after return, document that separate responsibility rather than silently treating it as another acceptance pass.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living reptile returned to source
- Flow property / unit: Mass / kg
- Amount rule: measured live returned mass and count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Provisional live-return reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg accepted live output
  - Basis: per kg accepted live output; internal return, not second sale
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortality at live handover (`handover_mortality`)

Only dead animals at handover are Waste; living rejects returned to source are the separate Product transfer above.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Dead reptile bodies at source gate for documented treatment
- Flow property / unit: Mass / kg
- Amount rule: actual rejected count/mass and disposition by category
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional live-gate reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg accepted live output
  - Basis: per kg accepted live output; do not include living returns
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No generic direct emission is assumed at handover.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_output` | Captive node | List all intended independent live and non-live outputs and their actual gates. First partition physically separable activities; if joint burdens remain, use evidenced mass or another documented causal driver and disclose sensitivity. Unsold eggs/shed and dead animals are residue/waste. | `mass-balance-identity`; `woah-reptiles-2024` |
| `a_period` | Captive cohort or capture campaign | Link stock, facilities, feed, losses and live animals to actual periods. Allocate opening stock and shared assets once across realized outputs and service periods; no default reptile lifetime or double counting at internal transfers. | `mass-balance-identity` |
| `a_shared` | Heated rooms, pools, cages and handling services | Record every consuming node/cohort and period; allocate by measured service time, metered energy/water or justified capacity driver, not again at final handover. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock` | `captive` | opening/purchased reptiles | animal inventory and provenance | species, source, permit, count, mass, class, date, supplier, carried burden | reconcile intake and opening ledger; Raw aggregation requirements: attribute stock once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, head | receipt and period opening | full cohort | breeder site | per reference flow | permits, supplier and scale records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_resources` | `captive`, `capture`, `handover` | feed, water, energy, consumables, shared cages | meter, invoice, issue/service logs | input identity, amount, unit, node, cohort, period, reuse, water discharge | meter or reconcile invoices and stock; Raw aggregation requirements: attribute actual consumption once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, MJ, day | each issue and monthly | full cohort/campaign | foreground nodes | per reference flow | logs, invoices, meters, allocation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_live` | `captive`, `capture`, `handover` | live transfers and accepted output | count, weighing, acceptance | species, source, authorization, animal ID, count, size, mass, health, date, gate | weigh and inspect living animals; Raw aggregation requirements: normalize accepted mass to 1 kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, head | each handover | all cohorts/campaigns | source site | per reference flow | scale, identity and health records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs` | `captive`, `capture`, `handover` | co-product, mortality and rejects | sale, incident and disposal | species, event, mass, count, fate, date, gate | measure or reconcile event logs; Raw aggregation requirements: distinguish product, waste, internal return. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, head | each event | all periods | site/campaign | per reference flow | receipts and incident logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_emission` | `captive` | direct releases | monitoring or method | named substance, receiving medium, mass, period, method | direct monitoring or source-backed calculation; Raw aggregation requirements: normalize by output. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | monitored interval | full cohort | facility | per reference flow | test report and calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference` | accepted live output | Sum measured mass of accepted living animals of one species; normalize allocated inventory to 1 kg. Reconcile count, source transfer and rejected/dead disposition. | `cp_live`, `cp_outputs` | kg accepted live species | `mass-balance-identity` |
| `c_water` | captive wastewater | Supplied water minus measured retained, evaporated and separately discharged quantities; direct measurement takes precedence. | `cp_resources` | kg wastewater | `mass-balance-identity` |
| `c_period` | stock and shared service | Assign consumption to cohort/campaign and period, divide joint service by metered use or documented time and sum shares once. | `cp_stock`, `cp_resources`, `cp_outputs` | allocated input/kg accepted output | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | every lot | Verify scientific taxon, legal source and jurisdiction; reject unknown/prohibited provenance. | source/permit and legal check |
| `q_mass` | reference and loss | Calibrated live mass, count, size class and condition by gate; no cross-species average kg/head. | weighing and acceptance logs |
| `q_period` | cohorts, campaigns, shared assets | Complete inputs, outputs, mortality and periods with documented attribution, opening and closing stock. | ledgers and reconciliation worksheet |
| `q_flow` | UUID-backed exchanges | Confirm exact flow, property, unit group, type and gate before binding; unresolved IDs stay unbound. | platform detail/support-row evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_legal` | live output | Fail if species, authorized origin, condition or actual source gate is absent; classification does not prove legality. | `un-cpc-2025`; `woah-reptiles-2024`; `cites-guide-2022` |
| `v_routes` | source process | Exactly one evidenced source route supplies each lot. Captive needs stock/cohort records; capture needs permits/campaign and cannot inherit imagined breeding inputs. | `woah-reptiles-2024` |
| `v_balance` | mass and outputs | Reconcile opening/purchased or captured mass, stock changes, accepted live animals, mortality and real co-products; internal transfers and same-gate live returns only once. A later production activity requires its own responsibility and records. | `mass-balance-identity` |
| `v_shared` | multi-period/shared assets | Each input, asset, output and loss has node/period attribution; shares sum to observed service without double charge at two gates. | `mass-balance-identity` |
| `v_identity` | all cards | conditional flow cards need concrete selection; final exchanges need verified species/state/direction/property/unit and gate before publication. | `un-cpc-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Source-specific foreground package for one lawful living reptile species and route |
| downstream_use | Candidate `secondary_dataset` or `background_dataset` after concrete identity and quality review |
| allowed_use | Species, provenance, technology, geography and gate matching declared package |
| excluded_use | Generic all-reptile factor; amphibians or dead products; unauthorized trade; slaughter or buyer transport |
| required_metadata | Species, legal source/permit, route, site, cohort/campaign, count, live mass, size/condition, gate, period and actual flow selections evidence |
| required_quality_disclosure | Coverage, stock/mortality balance, measurements, provisional Ranges, allocation and unresolved UUIDs |
| update_trigger | New species, source law, captive mode, capture authorization, husbandry regime, gate or flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | living-reptile classification boundary |
| `woah-reptiles-2024` | official_guidance | [WOAH Terrestrial Code chapter 7.14](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_aw_reptiles.htm) | species-specific handling, welfare and source documentation |
| `cites-guide-2022` | official_guidance | [CITES Trade Database guide](https://trade.cites.org/cites_trade_guidelines/en-CITES_Trade_Database_Guide.pdf) | distinguish reported wild, captive and ranched source codes; not permit evidence alone |
| `mass-balance-identity` | method_factor | Mass conservation and measured foreground input/output reconciliation | normalization, stock, water and shared-service reconciliation |
