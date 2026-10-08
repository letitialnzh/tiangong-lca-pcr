---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.hen-eggs-in-shell-fresh-for-hatching
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh hen eggs in shell for hatching

## 1. Scope and Applicability

This PCR governs fresh, shell-on chicken eggs selected for hatching at the producing breeder-farm gate. Include managed breeder production, collection, first conditioning, grading, farm-controlled storage and presentation when performed before handover. Selection for hatching is an intended use, not proof of fertilization, viability or hatchability. Exclude incubation, hatchery operations, chicks, other-bird eggs, consumption eggs as the reference, processing and post-gate carriage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.hen-eggs-in-shell-fresh-for-hatching` |
| classification_refs | `cpc:3.0:02311` |
| covered_products | Fresh hen eggs in shell selected and transferred for hatching at breeder farm gate |
| excluded_products | Consumption eggs as reference; other-bird eggs; incubated eggs; chicks; processed eggs |
| representative_product | Farm-gate saleable hatching egg, shell-on and mass-measured |
| production_route | Managed breeder flock is the parent activity. Floor-nest, cage or other evidenced collection regimes are separate routes only where collection topology, litter/manure, energy, damage or validation changes. Routes are mutually exclusive for one cohort; separately measured cohorts may coexist. |
| market_state | Fresh, shell-on, selected for hatching; farm storage and protective presentation declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable fresh hen eggs in shell selected for hatching at breeder-farm handover |
| How much | 1 kg shell-on egg mass; retain count and measured average mass |
| How well | Declare breeder flock age and mating management, collection and selection, shell condition, storage time/temperature, measured quality tests if available; do not infer fertility or hatchability |
| How long or cycle | Declared flock productive period with replacement and storage periods linked |
| reference_flow_link | `farm_gate_hatching_eggs` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hen eggs in shell, fresh, for hatching `e5791c05-2fe6-4cb4-aec8-30adb5e85b0b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | hen species; farm and gate; flock and breeder age; cohort and period; mating evidence; count and kg; shell grade; collection date; storage time and temperature; tested viability if available; rejects; tray/package reuse |
| Binding | Fixed (`fixed`) |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `egg_mass_count` | reference and internal egg states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure shell-on mass and retain count; convert count by sampled lot mean mass, not an assumed universal egg weight. |
| `period_carrier` | flock and shared inputs | Mass or carrier property | kg, MJ or kWh | Index incoming stock, shared services and outputs to flock period before reference normalization; inventory crossing periods is counted once. |
| `emission_mass` | manure gases | Mass | kg substance | CH4, N2O and NH3 are separate named substances; convert N2O-N and NH3-N factor bases before reporting molecular mass. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased replacement breeders/pullets, feed, water, energy and package materials enter at recorded farm receipt; internally produced replacements or feed require separately traced foreground. |
| starting_condition_role | Breeder-farm incoming stock before the declared productive flock period. |
| product_classification_scope | CPC 3.0 02311 applies to final fresh shell-on hatching eggs, not internal states or table-egg co-products. |
| recursive_input_rule | Purchased hatching eggs used upstream of this flock carry one upstream dataset at receipt; do not recursively credit the resulting eggs or include hatchery incubation twice. |
| upstream_dataset_requirement | Trace purchased birds, feed, energy and packaging to upstream datasets; farm-only inventory must not be represented as cradle-to-gate. |
| disclosure | Gate, cohort and period, breeding/collection route, egg grade and quality evidence, conditioning, storage, package reuse, losses and co-product allocation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate_cut` | all routes | Include breeder-farm laying, independent collection, first conditioning, grading, on-farm stabilization and presentation; exclude hatchery incubation, chicks and post-gate transport. | `fao-egg-production`; `aviagen-egg-handling-2015` |
| `quality_not_fertility` | final product | Hatching use is not a measured fertility or hatchability claim; record tests and rejected destinations rather than assuming quality. | `aviagen-egg-handling-2015` |
| `route_delta` | breeder route | Declare managed biological parent and actual route changes to topology, inventory categories, measurement or validation; a route label alone is insufficient. | `fao-leap-poultry-2016` |
| `handoff_once` | internal eggs | Capture, prepared, graded and stored states reconcile one cohort; a mass transfer between nodes does not create another independently saleable final product. | `mass-balance-identity` |
| `shared_asset_boundary` | house, nests, store and reusable trays | Identify consumers and service periods; record each shared burden only once at actual service handover. | `fao-leap-poultry-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder_flock` | Managed breeder flock and laying | `required` | All breeder-farm routes | Managed biological production and laid-egg handoff | flock period and gross egg mass |
| `egg_collection` | Independent egg collection | `required` | All breeder-farm routes | Capture from nests; measure collection loss | gross laid mass |
| `first_conditioning` | First farm conditioning | `required` | Inspection and dry preparation; no treatment may be recorded | Raw collected to prepared state | collected mass |
| `hatching_grade` | Hatching selection and grading | `required` | All breeder-farm routes | Separate hatching, marketed downgrade and rejection | prepared mass |
| `egg_storage` | Farm stabilization and storage | `conditional` | Farm-controlled storage or cooling before handover | Selected usable to stabilized state | selected mass and storage duration |
| `egg_presentation` | Farm presentation and handover | `required` | One direct or stored input route; materials only if farm-supplied | Protect and hand over final farm-gate reference | saleable shell-on kg |

### Process: Managed breeder flock and laying (`breeder_flock`)

#### Inputs

##### Product flows

###### Replacement breeder birds (`replacement_birds`)

Record received birds and period; link upstream burden once.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Replacement breeder birds (UUID unresolved)
- Flow property / unit: Mass / kg liveweight
- Amount rule: Record received birds and period; link upstream burden once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flock`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg liveweight/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder feed (`breeder_feed`)

Record purchased and separately produced feed net of stock changes.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Breeder feed (UUID unresolved)
- Flow property / unit: Mass / kg as-fed
- Amount rule: Record purchased and separately produced feed net of stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg as-fed/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied flock water (`flock_water`)

Meter drinking and cleaning water by use.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Supplied farm water
- Flow property / unit: Mass / L
- Amount rule: Meter drinking and cleaning water by use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100
  - Unit: L/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder-house energy (`house_energy`)

Record electricity, heat and fuels by actual carrier.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Energy carriers and utilities
- Flow property / unit: Mass / MJ
- Amount rule: Record electricity, heat and fuels by actual carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 60
  - Unit: MJ/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; add only with observed and verified identity.

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

#### Outputs

##### Product flows

###### Newly laid shell eggs (`laid_eggs`)

Reconcile gross laid eggs to collection and loss; internal state, not final product.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Newly laid hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Reconcile gross laid eggs to collection and loss; internal state, not final product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Marketed spent breeders (`cull_birds`)

Record only independently sold culls; mortality is waste.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Spent breeder birds (UUID unresolved)
- Flow property / unit: Mass / kg liveweight
- Amount rule: Record only independently sold culls; mortality is waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flock`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg liveweight/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently exported manure (`exported_manure`)

Use this conditional product output only when manure is independently transferred for value; exclude the same material from `manure_waste`.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Marketed breeder manure (UUID unresolved)
- Flow property / unit: Mass / kg wet and dry
- Amount rule: Record measured sold mass, composition, gate and buyer by flock period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet/kg reference
  - Basis: broad replaceable flock-period screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Managed manure and litter (`manure_waste`)

Record one actual manure-management handoff; separately sold manure is a co-product.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Breeder manure and litter (UUID unresolved)
- Flow property / unit: Mass / kg wet
- Amount rule: Record one actual manure-management handoff; separately sold manure is a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Biogenic methane from manure (`manure_ch4_air`)

Model documented manure CH4 pathway from records.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Model documented manure CH4 pathway from records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg CH4/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from manure (`manure_n2o_air`)

Model documented manure N2O; convert N2O-N to N2O.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: Model documented manure N2O; convert N2O-N to N2O.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg N2O/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from manure (`manure_nh3_air`)

Record only a documented NH3 volatilization pathway.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: Record only a documented NH3 volatilization pathway.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg NH3/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Independent egg collection (`egg_collection`)

#### Inputs

##### Product flows

###### Eggs at nests (`nest_eggs_in`)

Link to the same flock-period laid-egg output.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Newly laid hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Link to the same flock-period laid-egg output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; add only with observed and verified identity.

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

#### Outputs

##### Product flows

###### Collected raw shell eggs (`collected_eggs`)

Weigh batches before conditioning.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Collected raw hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Weigh batches before conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collection breakage and loss (`collection_loss`)

Record broken/uncollected eggs and destination.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Collection egg loss (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record broken/uncollected eggs and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

### Process: First farm conditioning (`first_conditioning`)

#### Inputs

##### Product flows

###### Collected eggs entering conditioning (`raw_eggs_in`)

Link one incoming batch to collection; do not assume washing.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Collected raw hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Link one incoming batch to collection; do not assume washing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; add only with observed and verified identity.

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

#### Outputs

##### Product flows

###### Prepared eggs for grading (`prepared_eggs`)

Record shell-intact prepared mass and hand off to grading.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Prepared hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Record shell-intact prepared mass and hand off to grading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning rejects (`conditioning_reject`)

Record damaged/contaminated mass and disposal.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Conditioning egg rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record damaged/contaminated mass and disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

### Process: Hatching selection and grading (`hatching_grade`)

#### Inputs

##### Product flows

###### Prepared eggs entering grading (`prepared_eggs_in`)

Link to first conditioning; candling only if actually performed.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Prepared hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Link to first conditioning; candling only if actually performed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; add only with observed and verified identity.

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

#### Outputs

##### Product flows

###### Selected hatching-grade eggs (`selected_hatching_eggs`)

Weigh accepted eggs; designation alone does not prove fertility.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Selected hatching hen eggs (UUID unresolved internal state)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Weigh accepted eggs; designation alone does not prove fertility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently marketed table eggs (`table_egg_coproduct`)

Include only if actually sold as a separate co-product.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Fresh non-hatching hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Include only if actually sold as a separate co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading reject (`grading_reject`)

Record unsafe/broken eggs and destination; not a co-product.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Rejected eggs (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record unsafe/broken eggs and destination; not a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

### Process: Farm stabilization and storage (`egg_storage`)

#### Inputs

##### Product flows

###### Selected eggs entering storage (`selected_eggs_in`)

Record lot, time and temperature; omit node when no storage intervention occurs.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Selected hatching eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Record lot, time and temperature; omit node when no storage intervention occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage energy (`storage_energy`)

Measure actual cooling/ventilation use by lot or shared room.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Energy carriers and utilities
- Flow property / unit: Mass / MJ
- Amount rule: Measure actual cooling/ventilation use by lot or shared room.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; add only with observed and verified identity.

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

#### Outputs

##### Product flows

###### Stabilized eggs for presentation (`stabilized_eggs`)

Record outgoing mass and full storage history.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Farm-stored hatching eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Record outgoing mass and full storage history.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Storage loss and rejects (`storage_reject`)

Reconcile accepted, rejected and inventory change.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Storage egg rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Reconcile accepted, rejected and inventory change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

### Process: Farm presentation and handover (`egg_presentation`)

#### Inputs

##### Product flows

###### Selected or stored eggs entering presentation (`eggs_for_handover`)

Take one direct-from-grade or stored route, never both.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Selected hatching eggs (UUID unresolved internal state)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Take one direct-from-grade or stored route, never both.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Farm-supplied protective trays (`farm_packaging`)

Record new and reusable materials, owner and evidenced use cycles.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Protective trays/packaging by actual material
- Flow property / unit: Mass / kg
- Amount rule: Record new and reusable materials, owner and evidenced use cycles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; add only with observed and verified identity.

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.

#### Outputs

##### Product flows

###### Saleable farm-gate hatching eggs (`farm_gate_hatching_eggs`)

Weigh final accepted shell-on mass at actual breeder-farm handover.

Raw reference-output records: Weigh final accepted shell-on mass at actual breeder-farm handover. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Hen eggs in shell, fresh, for hatching `e5791c05-2fe6-4cb4-aec8-30adb5e85b0b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: reference shell-on mass normalized to itself
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Presentation breakage and discarded packaging (`presentation_waste`)

Record breakage and non-reused package discard by actual destination.

Denominator and scope requirements：per kg saleable shell-on hatching eggs at breeder-farm gate

- Selected flow: Breakage and discarded packaging by material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record breakage and non-reused package discard by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional replaceable QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: broad first-pass reference-mass screen; replace with reviewed data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; add only with observed and verified identity.


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_priority` | hatching eggs, marketed table eggs, cull birds, exported manure | Enumerate intended outputs at their actual gates. Attribute separable activities directly. For inseparable flock-period burdens use documented physical causality if supportable, otherwise period-matched farm-gate economic allocation with prices, masses and sensitivity. Waste and mortality receive no product share. | `fao-leap-poultry-2016` |
| `period_shared` | flock, house, nest equipment, store, trays | Index replacement, productive, storage and reuse periods; link input events and outputs to period. Attribute shared assets to measured users or justified service duration/capacity once, avoiding duplicate burden. | `fao-leap-poultry-2016`; `aviagen-egg-handling-2015` |
| `internal_states` | laid through stored eggs | Internal transfers are mass reconciliation, not co-products; allocate only when a separate product exits the declared boundary. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `breeder_flock` | replacement, culls, age, route | flock register | cohort, species, age, head, mass, entry/exit, mortality, mating, housing/collection route | register and calibrated sample weighing; Raw aggregation requirements: cohort-period ledger. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | event/monthly | full productive/replacement phases | all houses | per reference flow | invoice, scale and mortality logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inputs` | `breeder_flock` | feed, water, energy | invoices, stock, meters | supplier, feed, dry matter, stock, water, carrier, meter, period, shared use | invoice, meter and stock reconciliation; Raw aggregation requirements: net measured use by cohort. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; L; kWh; MJ | monthly/close | full flock period | all houses | per reference flow | invoice, meter check, stock sheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_eggs` | `breeder_flock`; `egg_collection`; `first_conditioning` | laid, collected, prepared, loss | batch register | collection time, count, sampled mass, shell condition, accepted/rejected mass, destination | count and calibrated weighing; Raw aggregation requirements: state mass balance by batch. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | count; kg | each batch | full period | all lines | per reference flow | batch sheet, calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grading` | `hatching_grade` | hatching, table, reject grades | grade log | grade rules, candling if done, count, kg, tests, destination | grading and weighing; Raw aggregation requirements: mutually exclusive destinations. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | count; kg | each batch | full period | all grading lines | per reference flow | grade/test sheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `breeder_flock` | manure and air pathways | management log | bedding, moisture, nitrogen, pathway, dates, factors | observation, assay, method worksheet; Raw aggregation requirements: one ledger per material batch. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kg N | monthly/event | flock/manure period | all pathways | per reference flow | log, lab and factor citation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_storage` | `egg_storage` | stored eggs and energy | lot/room log | kg in/out, timestamps, temperature, humidity, meter, rejects | room logger, meter, weighing; Raw aggregation requirements: batch inventory and shared energy. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; h; C; kWh | each lot/daily | actual farm storage | all rooms | per reference flow | logger, meter, scale; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_packaging` | `egg_presentation` | trays and discard | package/reuse log | material, new/reused item, mass, owner, cycles, disposal | count/sample weighing; Raw aggregation requirements: net material by evidenced reuse. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | item; kg | each dispatch | full period | farm packing points | per reference flow | purchase/return log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_handover` | `egg_presentation` | final reference | dispatch register | lot, count, kg, grade, gate, buyer, collection/storage history, tests | calibrated dispatch weighing; Raw aggregation requirements: accepted kg once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count | each handover | full period | farm gates | per reference flow | dispatch and calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `egg_balance` | egg states | Gross laid = collected + collection loss; collected = prepared + conditioning reject; prepared = selected + marketed table grade + grading reject; selected adjusted for stock change = final + storage/presentation rejects. Document timing differences. | `cp_eggs`; `cp_grading`; `cp_storage`; `cp_handover` | stage yields | `mass-balance-identity` |
| `normalize_kg` | all rows | Divide period-attributed amounts by measured final saleable shell-on kg, never laid count. | all protocols | amount per kg reference | `mass-balance-identity` |
| `manure_gases` | CH4, N2O, NH3 | Use pathway-specific recorded manure/N and documented method; convert N-basis species to molecular mass. | `cp_manure` | kg substance/kg reference | `ipcc-2019-livestock-manure` |
| `tray_reuse` | reusable trays | Allocate purchased/produced tray burden over evidenced reuse cycles; a returned tray is not a new purchase. | `cp_packaging` | kg material/kg reference | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | final egg | Retain hen species, shell-on state, hatching designation, farm gate, lot, grade and measured mass; report fertility/viability only if tested. | dispatch, grade and test records |
| `dq_period` | flock/outputs | Cover replacement and productive periods, culls, mortality, inputs, gross eggs, rejects and co-products without gaps or double count. | cohort ledger and mass balance |
| `dq_route` | collection, conditioning, storage | Record actual route, whether candling occurred, storage time/temperature, and package reuse. | batch, room and package log |
| `dq_flow_identity` | all final exchanges | unresolved inputs need flow identity verification evidence and verified concrete UUID at dataset construction; unresolved cards need verified identity before process publication. | identity and provider records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_gate` | reference | Reject table, incubated, chick or hatchery-gate substitution; confirm fresh shell-on farm-gate mass and lot. | `cpc-3-2025`; `fao-egg-production` |
| `validate_quality` | hatching grade | Require recorded selection criteria and rejects; never infer fertility or hatchability from intended use alone. | `aviagen-egg-handling-2015` |
| `validate_route` | breeder and storage | Route delta requires evidence of topology/inventory/measurement change. Storage is conditional; final receives direct or stored route, never both. | `fao-leap-poultry-2016`; `aviagen-egg-handling-2015` |
| `validate_balance` | egg stages and co-products | Reconcile all internal mass states; distinguish marketed table eggs/culls from waste and document allocation precedence. | `mass-balance-identity` |
| `validate_shared` | periods/assets | Attribute breeder replacements, house, nests, storage and reusable trays by evidenced consumer and period once. | `fao-leap-poultry-2016` |
| `validate_bindings` | inventory | QA Ranges are provisional unless reviewed. Resolve every final TIDAS exchange to a verified concrete UUID with compatible type, property, medium and gate. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Breeder-farm foreground production dataset for fresh shell-on hatching eggs |
| downstream_use | `secondary_dataset`; `background_dataset` after quality review for process and lifecyclemodel |
| allowed_use | Matching farm-gate hatching egg supply by species, route, grade, period and packaging |
| excluded_use | Table-egg supply, guaranteed fertility, incubation, chick production, hatchery gate, post-farm transport |
| required_metadata | Farm/gate, flock/age, period, route, counts/kg, grade and quality, storage time/temperature, package reuse, rejects and co-products |
| required_quality_disclosure | Data gaps, sample mass, modelled emissions, actual flow selections, unresolved identities, replacement of reasoned Ranges, allocation sensitivity |
| update_trigger | Route, grade/quality protocol, storage, packaging, identity, allocation or flock-period change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-3-2025` | `official_guidance` | UN Statistics Division, CPC Version 3.0 Explanatory Notes (2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | boundary, processes and method rules |
| `fao-leap-poultry-2016` | `official_guidance` | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | boundary, processes and method rules |
| `ipcc-2019-livestock-manure` | `method_factor` | IPCC 2019 Refinement, Vol 4 Ch 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | boundary, processes and method rules |
| `fao-egg-production` | `official_guidance` | FAO, Chapter 1 Egg production, https://www.fao.org/4/y4628e/y4628e03.htm | boundary, processes and method rules |
| `aviagen-egg-handling-2015` | `handbook` | Aviagen, Egg Handling from Nest to Setter (2015), https://en.aviagen.com/assets/Tech_Center/BB_Resources_Tools/Egg-Hatching-Poster-EN-2015.pdf | boundary, processes and method rules |
| `mass-balance-identity` | `method_factor` | Conservation of measured shell-on egg mass by mutually exclusive inventory state | state reconciliation and normalization |
