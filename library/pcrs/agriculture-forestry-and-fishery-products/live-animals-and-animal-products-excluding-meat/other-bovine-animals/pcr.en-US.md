---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-bovine-animals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other bovine animals, live

## 1. Scope and Applicability

This PCR covers a living, species-qualified member of Bovinae that remains outside the separately named cattle (*Bos*) and buffalo/bison (*Bubalus*, *Syncerus*, *Bison*) categories, and is accepted into the residual bovine class only after a documented classification decision. Nilgai (*Boselaphus tragocamelus*) is a conditional example: ITIS places it in Bovinae, while the UN does not expressly list it under CPC 02119 and also mentions antelopes under residual ruminants 02129. A concrete lot must document the taxon, CPC/HS reasoning, legal source, condition and actual live handover; it must not be counted in both 02119 and 02129. Taxonomy or a movement rule alone is not a permit. Exclude dead animals, meat, hides, research capture followed by release, and buyer transport after the declared gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-bovine-animals` |
| classification_refs | CPC 3.0 `02119`, subject to species-level residual decision |
| covered_products | Living residual Bovinae with proven source and a real producer or authorized capture handover; nilgai only when the residual classification argument is accepted |
| excluded_products | *Bos* cattle including yak/gaur/gayal/banteng; *Bubalus*/*Syncerus*/*Bison* buffalo/bison; animals assigned to 02129; dead animals and post-gate goods |
| representative_product | 1 kg measured live mass of one eligible declared species at one actual gate |
| production_route | Documented managed breeding/rearing, or separately authorized capture and live transfer; never both as source history for one lot |
| market_state | Alive, unprocessed, identified by species/class, condition and lawful source |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living residual bovine of one declared species and source route |
| How much | 1 kg measured live body mass plus head count and individual or lot mass record |
| How well | Species/taxon, age/sex class, viability, health, ownership/custody and legal source verified |
| How long or cycle | Actual cohort and service periods for managed stock, or actual authorized capture campaign |
| reference_flow_link | `live_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-, source- and gate-qualified living other bovine |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | scientific species and Bovinae evidence; 02119-versus-02129 decision; jurisdiction and authorization; managed/capture route; head count; sex/age class; measured mass; live condition; cohort/campaign; actual gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live_mass` | Every live transfer and reference | Mass | kg | Record measured live mass and count at each real handover; never use a universal kg/head factor. |
| `m_period` | Cohorts, capture and shared assets | Time | declared day or period | Link actual inputs, mortality, movements and output to unique cohort/campaign and service periods. |
| `m_balance` | Live-animal ledger | Count and Mass | head and kg | Reconcile opening/purchased animals, births or captures, deaths, live transfers and closing stock without double counting. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed route: documented opening herd or purchased breeding/young stock with prior burden. Capture route: specific authorized free-ranging source and campaign, without fictional lifetime husbandry. |
| starting_condition_role | Managed biological stock or lawful capture context; purchased animals are Product inputs with upstream burden. |
| product_classification_scope | Species-qualified live residual Bovinae after exclusions and explicit resolution of nilgai/other antelope overlap with 02129. |
| recursive_input_rule | Link purchased same-category live animals once to their preceding-gate dataset; internal live transfers are not another final product. |
| upstream_dataset_requirement | Match purchased stock, feed, supplied water, energy and services to supplier, material identity, geography, unit and gate; retain source/custody and movement permissions. |
| disclosure | Taxon and CPC decision, legal source, route, cohort/campaign, measured count/mass, losses, service periods, actual handover and unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_class` | Every lot | Establish Bovinae membership and exclusion from named cattle/buffalo genera; document why an antelope-labelled species is not assigned to 02129. A nilgai example is an inference, not explicit UN placement. | `un-cpc3-2025`; `itis-nilgai`; `un-cpc21-2015` |
| `b_managed` | Managed source | Record real breeding/rearing, purchased-stock burden, husbandry and herd-period changes through the live transfer to gate. | `fws-nilgai-zoo-2019` |
| `b_capture` | Authorized capture source | A separate capture node requires actual legal authority, campaign, viable captured animals and destination handover; research tagging followed by release is outside the marketed reference. | `usda-nilgai-capture-2023`; `tahc-exotics-movement` |
| `b_gate` | Both routes | Stop at one real live source handover; exclude slaughter, carcass products and downstream buyer transport. | `un-cpc3-2025`; `nandankanan-nilgai-exchange`; `tahc-exotics-movement` |
| `b_shared` | Facilities and equipment | Assign shared enclosure, water or handling service only to actual consuming nodes and periods, once. | `fws-nilgai-zoo-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | Breed and rear eligible residual bovines | conditional | Documented managed stock and actual husbandry | Biological production and live stock handoff | per kg accepted live output |
| `capture` | Independently capture and briefly hold eligible residual bovines | conditional | Actual authorized campaign with live transfer; exclusive of managed source | Capture, welfare and loss handoff | per kg accepted live output |
| `gate` | Select, weigh and hand over living bovines | required | One actual producer/capture source gate | Live acceptance and reference output | per kg accepted live output |

Managed breeding is evidenced by captive nilgai births; capture is independently evidenced for nilgai research, but a research capture-and-release is **not** a product route. The capture process below is available only for an authorized actual live transfer. Each lot uses one source route. Unperformed inputs are zero only with documented non-use. A separate independently transferred by-product is not presumed; if one exists, identify its own flow and attribution before instantiating a dataset. Mortalities and manure are not live product.

### Process: Breed and rear eligible residual bovines (`managed`)

#### Inputs

##### Product flows

###### Purchased living breeding or young stock (`managed_stock`)

Carry supplier burden and record opening stock separately from new purchases.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living other-bovine stock; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh purchased and opening animals by class and entry event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Provisional non-negative stock screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied feed for managed stock (`managed_feed`)

Count purchased or externally supplied feed; in-situ grazing is reported as land/management context, not a fictional purchased flow.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual supplied feed by material identity; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Invoice or weigh supplied dry/as-fed mass by cohort and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional non-negative supplied-feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied drinking and husbandry water (`managed_water`)

Record metered or allocated supplied water, not rainfall.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual supplied water
- Flow property / unit: Mass / kg
- Amount rule: Meter or reconcile delivery to actual animals and facility period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional non-negative supplied-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Managed-facility energy (`managed_energy`)

Record actual electricity or fuel for enclosure, water and handling; allocate shared services by period.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual energy carrier
- Flow property / unit: Energy or mass / kWh or kg
- Amount rule: Meter or reconcile actual energy by carrier, node and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional non-negative facility-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kWh-equivalent/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living managed animals to acceptance (`managed_live`)

Internal transfer of viable animals, not a second sale.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living other bovine at managed-source exit; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh and count transferred live animals by class and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Provisional live-transfer reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Managed-stock mortality carcasses (`managed_deaths`)

Dead animals are tracked by cause and lawful disposal destination, not counted as live output.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual dead residual-bovine carcass at disposal gate; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure dead mass and count by cohort, event and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative mortality screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded manure from managed stock (`managed_manure`)

Only manure crossing as waste belongs here; separately sold manure, if any, needs its own evidenced Product row.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual discarded manure by destination; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile collected discarded manure, excluding pasture deposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Independently capture and briefly hold eligible residual bovines (`capture`)

#### Inputs

##### Product flows

###### Campaign energy carrier (`capture_energy`)

Only fuel or electricity actually consumed by the authorized capture/holding campaign.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual campaign energy carrier
- Flow property / unit: Energy or mass / kWh or kg
- Amount rule: Meter or allocate actual carrier to campaign and live transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative capture-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kWh-equivalent/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied temporary-holding water (`capture_water`)

Record actual holding water; zero needs a documented no-use event.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual supplied holding water
- Flow property / unit: Mass / kg
- Amount rule: Meter or reconcile delivered water by captured lot and holding period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative holding-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Single-use capture and welfare materials (`capture_materials`)

Retain actual material identity; reusable gear is an asset service allocated across campaigns, not consumed again.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual single-use capture/holding material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Count or weigh material issued and consumed in campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Viable captured animals to acceptance (`captured_live`)

Record only animals actually handed onward alive; capture-and-release is excluded from this product route.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living other bovine at authorized capture exit; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh and count viable transfer by campaign, class and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional live-capture transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Capture and holding mortality (`capture_deaths`)

Record dead animals separately from viable capture and lawful releases.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual dead residual-bovine carcass from capture; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure death count/mass and disposal destination by campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative capture-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Select, weigh and hand over living bovines (`gate`)

#### Inputs

##### Product flows

###### Living animals from exactly one source (`gate_in`)

Link once to managed or capture transfer for the lot; a purchased live lot enters with its supplier burden.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living other bovine at source-to-gate transfer; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh and reconcile incoming count, class and route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Provisional incoming-live reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate live containment (`gate_containment`)

Use only actual single-use containment; reusable crates or facilities are shared asset services.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual protective containment material
- Flow property / unit: Mass / kg
- Amount rule: Count or weigh actual material used for accepted live handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional non-negative containment screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted living other bovine at actual gate (`live_output`)

This is the single reference output, not a universal species-free average.

Denominator and scope requirements：per kg accepted live output

Raw reference-output records: Sum measured accepted live mass and normalize to 1 kg. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Species-, source- and gate-qualified living other bovine
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Exact reference normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Live animals returned before acceptance (`gate_return`)

Only actual live return to source is a Product transfer, never a second final sale or waste.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Species-qualified living returned bovine; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh and count returned animals; link any later rearing to its actual new responsibility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Provisional non-negative live-return screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Deaths before live handover (`gate_deaths`)

Dead animals have a separate disposal destination and cannot enter the live reference.

Denominator and scope requirements：per kg accepted live output

- Selected flow: Actual dead residual-bovine carcass at gate; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure count/mass and destination of pre-handover death.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative gate-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg accepted live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_live_only` | Source and gate | The declared baseline has one intended live product; do not allocate mortality, discarded manure or research releases as co-products. An independently sold additional product requires its own measured exchange and explicit new attribution decision. | `fws-nilgai-zoo-2019` |
| `a_period` | Managed cohorts and capture campaigns | Attribute opening stock, inputs, losses, replacements and accepted animals to the actual cohort/campaign and reporting period; do not amortize by an assumed universal lifetime. | `fws-nilgai-zoo-2019`; `usda-nilgai-capture-2023` |
| `a_shared` | Enclosure, water and handling assets | Attribute each shared facility/service across actual consuming source and gate nodes and service periods using recorded use; charge once. | `fws-nilgai-zoo-2019` |
| `a_transfer` | Live movements | Internal source-to-gate transfer and any return are balance entries, never an additional final output. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | `managed`; `gate` | live stock, transfers and reference | herd register; weigh ticket; custody record | species; taxon; origin; class; head count; live kg; event time; gate; recipient; authorization | identify and weigh actual animals; reconcile by cohort and lot; Raw aggregation requirements: sum accepted kg once; preserve returns separately. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each movement and period close | full cohort and gate period | one operation and actual handover | per reference flow | calibrated scale; identity register; signed receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inputs` | `managed`; `gate` | feed, water, energy, containment | invoice; meter; inventory issue | material; quantity; unit; supplier; node; service period | meter or reconcile actual supplied amounts; Raw aggregation requirements: sum by carrier/material, allocate shared use once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kWh | each supply and period close | full service period | actual consuming nodes | per reference flow | invoices; meters; stock ledger; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_capture` | `capture` | campaign and living capture | permit; campaign log; weigh ticket | authority; site; species; count; live mass; fuel; water; materials; release/death/transfer; destination | document authorized operations and live handover; Raw aggregation requirements: only viable transferred animals become live output. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg; kWh | each campaign event | actual campaign and holding | authorized source and gate | per reference flow | permits; logs; signed transfer; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_losses` | `managed`; `capture`; `gate` | mortality and discarded manure | veterinary; disposal; manure ledger | species; mass; count; cause; destination; period | weigh or reconcile actual loss separately by substance; Raw aggregation requirements: sum each waste once, excluding live returns. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event and period close | full source and gate periods | actual node | per reference flow | veterinary note; disposal receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference` | Final live gate | Sum measured accepted live kg at one gate, divide each in-boundary amount by that sum, and verify count/mass ledger closure. | `cp_animals`; `cp_capture`; `cp_losses` | amount per kg accepted living output | `tahc-exotics-movement` |
| `c_shared` | Shared services | Assign recorded service to actual consuming node and period once, then normalize; retain the evidence for denominator and period. | `cp_inputs`; `cp_animals` | attributed service per kg live output | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_class` | Every lot | Prove taxon and residual 02119 classification against 02111/02112/02129; do not rely on common name alone. | taxonomic record; classification decision |
| `dq_legal` | Every lot | Prove source, custody, movement/capture authority and recipient; research release is not a marketed output. | permits; source and handover records |
| `dq_mass` | Reference and transfers | Measure live mass and count, reconcile returns and deaths, do not assume kg/head. | weigh tickets; animal register |
| `dq_period` | Cohort/campaign and assets | Cover full reporting period and assign shared burden once. | service and event ledger |
| `dq_uuid` | Final exchange | Verify exact flow, property and unit group before downstream TIDAS exchange publication. | platform detail and support-row evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_class` | Every dataset | Reject missing species, unreasoned overlap with 02129, or an animal already covered as cattle/buffalo/bison. | `un-cpc3-2025`; `itis-nilgai`; `un-cpc21-2015` |
| `v_route` | Every lot | Require exactly one source route with actual legal authority and living transfer; exclude capture-and-release from product output. | `usda-nilgai-capture-2023`; `tahc-exotics-movement` |
| `v_balance` | Stock and outputs | Reconcile head count and mass from opening/purchased/captured stock through births, transfers, returns, deaths and closing stock; only accepted live output is reference. | |
| `v_period` | Assets and cohorts | Require real service periods, consumers and once-only shared attribution; no assumed universal lifetime or capture yield. | |
| `v_identity` | Unbound cards | Leave unconfirmed UUIDs blank; final concrete exchange needs exact flow, property and unit-group evidence. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground species-qualified live residual-bovine dataset |
| downstream_use | `secondary_dataset`; `background_dataset` only after species/gate-specific review |
| allowed_use | One eligible species, documented residual classification, lawful source and actual live handover |
| excluded_use | Species-free average; undocumented capture or transfer; research release; dead animals; post-gate transport |
| required_metadata | Taxon and classification rationale; permits; route; count/mass; class; cohort/campaign; gate; periods; losses; identity evidence |
| required_quality_disclosure | Legal and taxonomic uncertainty, mass measurement, incomplete inventories, provisional Ranges and unresolved UUIDs |
| update_trigger | New official CPC/HS assignment, species/route change, movement restriction, gate change or verified flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [UN CPC Version 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Named cattle/buffalo exclusions and residual classes |
| `un-cpc21-2015` | official_guidance | [UN CPC Version 2.1 and HS 0102.90 correspondence](https://unstats.un.org/unsd/classifications/unsdclassifications/cpcv21.pdf) | Residual-bovine classification interpretation |
| `itis-nilgai` | dataset | [ITIS taxonomy for *Boselaphus tragocamelus*](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=552477) | Bovinae membership, not trade permission |
| `fws-nilgai-zoo-2019` | official_guidance | [USFWS permit-file exhibit recording captive nilgai births](https://downloads.regulations.gov/FWS-HQ-IA-2019-0102-0003/content.pdf) | Managed-breeding route evidence, not a lot-specific authorization |
| `nandankanan-nilgai-exchange` | dataset | [Nandankanan Zoological Park nilgai exchange record](https://nandankanan.org/mobile/exchange-of-animals.php) | Actual institutional live transfer evidence, not general sale or universal permission |
| `usda-nilgai-capture-2023` | literature | [USDA ARS summary of nilgai live-capture study](https://www.ars.usda.gov/research/publications/publication/?seqNo115=393616) | Independent capture responsibility and welfare questions, not product sale |
| `tahc-exotics-movement` | official_guidance | [Texas Animal Health Commission exotic-livestock movement requirements](https://www.tahc.texas.gov/regs/pdf/MovementRequirements_Exotics-Ratites.pdf) | Nilgai live-movement control questions, not universal legal permission |
