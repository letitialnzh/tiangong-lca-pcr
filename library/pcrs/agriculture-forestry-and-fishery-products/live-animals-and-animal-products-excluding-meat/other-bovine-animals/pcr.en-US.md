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
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

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
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
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

###### Electricity at the equipment supply point (`managed_energy_electricity`)

**Collection scope and applicability for managed_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record actual electricity or fuel for enclosure, water and handling; allocate shared services by period.
Denominator and scope requirements：per kg accepted live output

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `fao-agricultural-energy`

###### Diesel fuel supplied to equipment (`managed_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel supplied to equipment
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `fao-agricultural-energy`

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

###### Enteric biogenic methane to air (`review_managed_enteric_ch4`)

Only for an applicable digestive pathway of the actual managed species and class; derive emissions from documented animal activity/intake and a justified method. Do not substitute a cattle factor for an uncharacterised species. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Manure biogenic methane to air (`review_managed_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Direct manure nitrous oxide to air (`review_managed_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_managed_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Manure ammonia to air (`review_managed_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

### Process: Independently capture and briefly hold eligible residual bovines (`capture`)

#### Inputs

##### Product flows

###### Electricity at the equipment supply point (`capture_energy_electricity`)

**Collection scope and applicability for capture_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Only fuel or electricity actually consumed by the authorized capture/holding campaign.
Denominator and scope requirements：per kg accepted live output

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_capture` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Sources: `fao-agricultural-energy`

###### Diesel fuel supplied to equipment (`capture_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel supplied to equipment
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_capture` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Sources: `fao-agricultural-energy`

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

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | `managed`; `gate` | live stock, transfers and reference | herd register; weigh ticket; custody record | species; taxon; origin; class; head count; live kg; event time; gate; recipient; authorization | identify and weigh actual animals; reconcile by cohort and lot; Raw aggregation requirements: sum accepted kg once; preserve returns separately. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each movement and period close | full cohort and gate period | one operation and actual handover | per reference flow | calibrated scale; identity register; signed receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inputs` | `managed`; `gate` | feed, water, energy, containment | invoice; meter; inventory issue | material; quantity; unit; supplier; node; service period | meter or reconcile actual supplied amounts; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg; kWh | each supply and period close | full service period | actual consuming nodes | per reference flow | invoices; meters; stock ledger; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_capture` | `capture` | campaign and living capture | permit; campaign log; weigh ticket | authority; site; species; count; live mass; fuel; water; materials; release/death/transfer; destination | document authorized operations and live handover; Raw aggregation requirements: only viable transferred animals become live output. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg; kWh | each campaign event | actual campaign and holding | authorized source and gate | per reference flow | permits; logs; signed transfer; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_losses` | `managed`; `capture`; `gate` | mortality and discarded manure | veterinary; disposal; manure ledger | species; mass; count; cause; destination; period | weigh or reconcile actual loss separately by substance; Raw aggregation requirements: sum each waste once, excluding live returns. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event and period close | full source and gate periods | actual node | per reference flow | veterinary note; disposal receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pathway_emissions` | `managed` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `managed` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `managed` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference` | Final live gate | Sum measured accepted live kg at one gate, divide each in-boundary amount by that sum, and verify count/mass ledger closure. | `cp_animals`; `cp_capture`; `cp_losses` | amount per kg accepted living output | `tahc-exotics-movement` |
| `c_shared` | Shared services | Assign recorded service to actual consuming node and period once, then normalize; retain the evidence for denominator and period. | `cp_inputs`; `cp_animals` | attributed service per kg live output | |
| `calc_pathway_emissions` | `managed` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `managed_feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_managed_direct_n2o`; `review_managed_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

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
| `v_pathway_emission_coverage` | `managed` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

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
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Species and pathway applicability; CH4 and N2O method selection, not universal emission factors |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
