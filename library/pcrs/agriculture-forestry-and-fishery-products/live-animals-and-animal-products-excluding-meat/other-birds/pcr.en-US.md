---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-birds
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other birds, live

## 1. Scope and Applicability

Cover living, species-qualified birds in residual CPC 02194, including pigeons, quail, partridges and pheasants at a documented breeder or lawful capture gate. Birds of prey and psittacines qualify only with species-specific authorization and legitimate provenance. Exclude chickens, turkeys, geese, ducks and guinea fowl; ostriches, emus and rheas; eggs, dead birds, meat and buyer transport. Classification does not grant a protected-species trade permit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-birds` |
| classification_refs | CPC 3.0 `02194` |
| covered_products | Living eligible other birds with identified species and documented source |
| excluded_products | Separately classified poultry and ratites including rhea; eggs, meat, dead birds and downstream transport |
| representative_product | One kg measured live mass of one declared eligible species at source gate |
| production_route | Managed breeder/aviary rearing or independently lawful live capture, mutually exclusive per lot |
| market_state | Alive, unprocessed and accepted at the actual source gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Species-qualified living other birds |
| How much | 1 kg measured live mass, with head count |
| How well | Declared species, age/sex class, health, live condition and lawful source |
| How long or cycle | Declared rearing cohort or capture campaign and shared-service periods |
| reference_flow_link | `live_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-qualified live other birds |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species/taxon; residual classification; source route; jurisdiction and lawful provenance; count; mass; sex/age class; health; cohort/campaign; handover gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live` | Live reference and transfers | Mass | kg | Weigh each actual live lot by species and class, and reconcile count; no universal kg/bird factor. |
| `m_period` | Cohorts, campaigns and shared assets | Time | declared period | Link stock, input, mortality, output and shared service to actual period and phase. |
| `m_energy` | Fuel and electricity cards | Energy or mass | kWh or kg | Keep each actual carrier in its native unit; convert fuel to kWh-equivalent only for the provisional QA screen using a disclosed supplier calorific value, never as an invented fixed exchange. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed route: opening/purchased breeding or young birds and prior burden. Capture route: authorized source campaign, without fictional breeder stock. |
| starting_condition_role | Managed biological stock/upstream Product, or documented lawful capture context. |
| product_classification_scope | CPC 3.0 `02194`, after exclusion of other live-bird classes. |
| recursive_input_rule | Link purchased same-category birds to one upstream dataset; internal transfers are not second sales. |
| upstream_dataset_requirement | Match purchased birds, feed and energy by supplier, identity, geography and gate; retain capture authorization. |
| disclosure | Species, legal origin, route, count/mass, cohort/campaign, mortality, co-products, gate and shared-service periods. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_scope` | Every lot | Verify species, residual classification and lawful source. No protected-species commerce follows from a CPC example. | `un-cpc-2025`; `woah-wildlife-2021` |
| `b_route` | Production source | Managed rearing includes real stock, care and losses; lawful capture includes actual capture, short holding and losses, but no invented breeding. Stop at accepted live source handover. | `un-cpc-2025`; `woah-wildlife-2021` |
| `b_shared` | Shared assets | Attribute aviary, enclosure, water and handling services to actual consuming nodes and periods once; exclude slaughter and buyer transport. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `rear` | Breed and rear eligible birds | conditional | documented managed source | managed biological production | per kg live-bird handover |
| `capture` | Lawfully capture and briefly hold wild birds | conditional | documented lawful wild source; alternative to rearing | independent live capture | per kg live-bird handover |
| `handover` | Select, weigh and hand over live birds | required | actual source gate | final live acceptance | per kg live-bird handover |

Managed rearing follows breeder stock, feed and period-specific care through live selection; independently sold eggs or feathers are distinct products only at evidenced gates. Lawful capture begins with a documented campaign and live containment, independent of rearing. The final gate checks species, live condition, count and mass. Assign shared aviary or handling infrastructure once by actual node and period.

### Process: Breed and rear eligible birds (`rear`)

#### Inputs

##### Product flows

###### Introduced live breeding or young birds (`rear_stock`)

Record introduced live breeding or young birds for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Species-qualified purchased or opening live birds
- Flow property / unit: Mass / kg
- Amount rule: Weigh introduced birds by species, class and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed for the managed bird cohort (`rear_feed`)

Record feed for the managed bird cohort for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Actual species- and stage-specific feed
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied bird drinking and cleaning water (`rear_water`)

Record supplied bird drinking and cleaning water for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Supplied husbandry water
- Flow property / unit: Mass / kg
- Amount rule: Meter water attributable to this node
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at the equipment supply point (`rear_energy_electricity`)

**Collection scope and applicability for rear_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record aviary energy supply for the actual species, state and gate.
Denominator and scope requirements：per kg final live-bird handover

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_rear` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Sources: `fao-agricultural-energy`

###### Diesel fuel supplied to equipment (`rear_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel supplied to equipment
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_rear` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Sources: `fao-agricultural-energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reared live birds entering handover (`rear_live`)

Record reared live birds entering handover for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Species-qualified reared live birds
- Flow property / unit: Mass / kg
- Amount rule: Weigh live internal transfer once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold eggs (`rear_eggs`)

Record independently sold eggs only when actually present for the specified species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Species-qualified eggs actually sold
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately sold eggs at their own egg gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold feathers (`rear_feathers`)

Record independently sold feathers only when actually present for the specified species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Species-qualified feathers actually sold
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately sold feathers at their own feather gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rear`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead birds from rearing (`rear_deaths`)

Record dead birds from rearing only when actually present for the specified species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Dead birds from managed cohort
- Flow property / unit: Mass / kg
- Amount rule: Count and weigh deaths by period and disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent litter from rearing (`rear_litter_waste`)

Record spent litter from rearing only when actually present for the specified species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Spent bird-housing litter for actual waste route
- Flow property / unit: Mass / kg
- Amount rule: Weigh spent litter leaving the managed node
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Manure biogenic methane to air (`review_rear_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `rear` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Direct manure nitrous oxide to air (`review_rear_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `rear` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_rear_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `rear` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Manure ammonia to air (`review_rear_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `rear` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

### Process: Lawfully capture and briefly hold wild birds (`capture`)

#### Inputs

##### Product flows

###### Water supplied during actual short holding (`capture_water`)

Record water supplied during actual short holding only when actually present for the specified species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Actual supplied holding water
- Flow property / unit: Mass / kg
- Amount rule: Meter water if short holding is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Single-use capture and holding consumables (`capture_consumables`)

Record single-use capture and holding consumables only when actually present for the specified species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Actual used liners or gloves
- Flow property / unit: Mass / kg
- Amount rule: Count or weigh consumed material, excluding reusable gear
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Electricity at the equipment supply point (`capture_energy_electricity`)

**Collection scope and applicability for capture_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record capture and holding energy for the actual species, state and gate.
Denominator and scope requirements：per kg final live-bird handover

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

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Captured live birds entering handover (`capture_live`)

Record captured live birds entering handover for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Species-qualified lawfully captured live birds
- Flow property / unit: Mass / kg
- Amount rule: Count and weigh retained live birds at short-holding exit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Capture or holding mortality (`capture_deaths`)

Record capture or holding mortality for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Dead birds from lawful capture campaign
- Flow property / unit: Mass / kg
- Amount rule: Record death event, species, count and mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Select, weigh and hand over live birds (`handover`)

#### Inputs

##### Product flows

###### Live birds received for acceptance (`handover_in`)

Record live birds received for acceptance for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Actual live bird transfer from one source node
- Flow property / unit: Mass / kg
- Amount rule: Match one rearing or capture lot to acceptance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live other birds (`live_handover`)

Record accepted live other birds for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

Raw reference-output records: Weigh living accepted lot; reference is one kg Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Species-qualified live other birds
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Reference mass consistency
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Birds dead before acceptance (`handover_deaths`)

Record birds dead before acceptance for the actual species, state and gate.

Denominator and scope requirements：per kg final live-bird handover

- Selected flow: Dead rejected bird material
- Flow property / unit: Mass / kg
- Amount rule: Record mass and disposal; do not count as live output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional non-negative QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live-bird handover
  - Basis: per kg final live-bird handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | Independent product sales | Distinguish live birds from independently sold eggs or feathers at their own gate. Prefer process separation and causal attribution; if inseparable, allocate shared burdens by measured same-period economic value with price evidence. Unsold residues and deaths are waste, not co-products. | `iso-14044-2006` |
| `a_period` | Cohorts and campaigns | Attribute stock, replacement, input and output to observed cohort/campaign and service period; reconcile opening/closing stock and never charge replacement twice. | `iso-14044-2006` |
| `a_shared` | Shared assets and services | Allocate common aviary, water or handling service by metered consumption or measured use time for each node and period; disclose any proxy and prevent a second charge. | `iso-14044-2006` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rear` | `rear` | stock, feed, utilities and outputs | cohort ledger, invoices, meters and scale | species, class, source, count, mass, feed, water, energy, period, independent sales | reconcile each event and opening/closing stock; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg; bird; kWh | event and period | full cohort | breeder site | per reference flow | invoice, calibrated scale, meter, sale record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_capture` | `capture` | lawful capture, energy and live transfer | permit and campaign log | permit, species, site, dates, count captured/released/dead, mass, energy | authorized event record and weighing; Raw aggregation requirements: sum only retained live birds. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; bird; kWh | each campaign | full campaign | capture site | per reference flow | permission and custody chain; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_handover` | `handover` | live acceptance | acceptance and scale log | species, source lot, count, mass, condition, gate, date | weigh and inspect actual living lot; Raw aggregation requirements: sum accepted live mass by species. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; bird | each lot | source-gate period | each source gate | per reference flow | scale, health and provenance record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_losses` | `rear`; `capture`; `handover` | mortality | death and disposition log | species, count, mass, stage, date, route | record death at occurrence; Raw aggregation requirements: exclude from live acceptance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; bird | each event | full cohort/campaign | actual node | per reference flow | loss and disposal record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pathway_emissions` | `rear` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `rear` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `rear` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_balance` | Source and handover | Reconcile opening + born/purchased/captured - released - dead - closing = transferred count, by species and period; reconcile measured mass separately. | dated cohort/campaign and scale records | count and mass balance | `woah-transport` |
| `c_normalize` | Each inventory | Divide attributed input or output by accepted live kg; never use a species-free kg/bird conversion. | attributed amount and accepted mass | per kg live output | `iso-14044-2006` |
| `c_shared` | Shared service | Sum node/period shares to the one measured total; no duplicate service attribution. | meter and use ledger | attributed service | `iso-14044-2006` |
| `calc_pathway_emissions` | `rear` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `rear_feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_rear_direct_n2o`; `review_rear_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_species` | Each lot | Identify species, residual code and legitimate source before inventory assembly. | species and custody/permit record |
| `q_live` | Reference | Accepted output must be alive and have reconciled count and measured mass. | scale, health and mortality logs |
| `q_period` | Multi-period and shared service | Explain stock changes, phase boundaries and shared-use fractions. | cohort/campaign and service ledgers |
| `q_identity` | Concrete exchange | Resolve each unbound card or unresolved input to compatible, verified flow/property/unit identity before release. | candidate/detail/support verification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | Every lot | Reject separated poultry/ratites, dead output, missing species or source, and unauthorized protected-species trade. | `un-cpc-2025`; `woah-wildlife-2021` |
| `v_balance` | Source and gate | Reconcile birds born, purchased, captured, released, transferred, dead and closing by species and period; no internal transfer as second sale. | `woah-transport` |
| `v_outputs` | Multi-output cohort | Check independent product gates, allocation method, period alignment and no allocation to waste. | `iso-14044-2006` |
| `v_shared` | Shared service | Check actual consumers, periods and fraction sum against one measured burden. | `iso-14044-2006` |
| `v_binding` | Concrete exchange | No unresolved UUID or conditional flow identities alone is a final flow identity; verify type, species/state, property/unit and gate. | `un-cpc-2025` |
| `v_pathway_emission_coverage` | `rear` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species- and source-qualified live-bird foreground dataset |
| downstream_use | Reviewed secondary/background dataset, process and lifecycle-model projection after concrete identity resolution |
| allowed_use | Matching species, lawful source, route, condition and source gate |
| excluded_use | Other poultry, ratites, dead birds, slaughter, buyer transport or cross-species averages |
| required_metadata | Species, provenance, jurisdiction, route, count, mass, health, cohort/campaign, gate, co-product and allocation record |
| required_quality_disclosure | Mortality, provisional QA Ranges, shared-service proxies, missing measurement and unresolved identities |
| update_trigger | Species, gate, law, husbandry, UUID verification or material evidence change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Bird boundary and exclusions |
| `woah-wildlife-2021` | official_guidance | [WOAH wildlife trade review](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | Lawful provenance and wildlife-source caution |
| `woah-transport` | official_guidance | [WOAH land animal transport chapter](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm) | Live fitness and handling questions where applicable |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Allocation consistency |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Species and pathway applicability; CH4 and N2O method selection, not universal emission factors |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
