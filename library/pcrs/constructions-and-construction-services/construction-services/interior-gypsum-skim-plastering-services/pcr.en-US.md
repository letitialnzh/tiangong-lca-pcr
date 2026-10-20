---
pcr_id: pcr.constructions-and-construction-services.construction-services.interior-gypsum-skim-plastering-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Interior gypsum skim plastering services

## 1. Scope and Applicability

This methodology covers hand-applied interior gypsum finish plaster over an already suitable accepted plasterboard or undercoat surface, including local joints and edges, powder/water mixing, skim application, setting, trowelling and monitored drying to a declared decorative-readiness acceptance gate. Upstream substrate work, board manufacture and installation, basecoat construction, cement render, paint, demolition and hazardous removal are excluded. The route is a site work-lot and mixing-batch service. It does not establish a universal thickness, formulation, coverage rate or drying duration.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.interior-gypsum-skim-plastering-services |
| classification_refs | CPC 3.0 54720 Plastering services; proposed narrower relation |
| covered_products | Interior gypsum skim finish service over suitable accepted existing substrate |
| excluded_products | Substrate construction; plasterboard installation; cement render; paint; hazardous removal; exterior plastering |
| representative_product | Hand-applied gypsum finish skim on accepted interior plasterboard |
| production_route | Local interface preparation; powder/water mixing; hand application and setting/trowelling; drying and final acceptance |
| market_state | Completed interior surface at declared dry-to-decorate handover; substrate and next decoration remain separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted dry-to-decorate interior gypsum skim service |
| How much | 1 m2 net accepted skim area |
| How well | Declared substrate, finish system, actual thickness, surface quality and decorative-readiness acceptance evidence |
| How long or cycle | One identified work lot from accepted starting surface through actual dryness acceptance; no assumed service-life equivalence |
| reference_flow_link | `accepted_skim` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted dry-to-decorate gypsum skim service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | site and period; accepted substrate and local preparation; finish plaster grade; actual thickness and coat sequence; net-area measurement and openings; zone/batch links; quality gate; actual dryness criterion and observation; climate/ventilation/heating; rework and waste destinations; upstream and downstream boundary ownership |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_area | reference product | Area | m2 | Measure net accepted surface; subtract openings and unaccepted zones; report treatment of reveals and returns, without counting the same physical face twice. |
| wet_dry_water | gypsum_powder; mixed_paste; finish_paste; evaporated_water | Mass | kg | Keep dry delivered powder, wet paste, chemically retained water, residual free water, collected liquid and vapour distinct; document stock and transfer changes. |
| retain_energy | prep_electricity; mix_electricity; finish_electricity; dry_electricity; dry_heat | Energy | kWh; MJ | Preserve metered electricity and delivered heat separately; declare conversion and device boundaries rather than treating kWh as a fuel mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing substrate accepted suitable for the selected gypsum finish, with substrate construction complete and local joints/edges identified |
| starting_condition_role | Upstream handover prerequisite, followed by included local interface preparation |
| product_classification_scope | A narrower interior gypsum skim route within plastering services |
| recursive_input_rule | Purchased same-category service enters once as identified upstream activity; remove overlapping foreground operations and disclose any recursive truncation. |
| upstream_dataset_requirement | Link powder, supplied water, preparation materials, energy, equipment and transport services to compatible upstream datasets; substrate is an explicit upstream prerequisite with separate ownership, never silently assumed zero. |
| disclosure | Record excluded substrate production/repair and downstream decoration; construction-site location, period, starting acceptance, actual system, utility and waste responsibilities; report unavailable upstream coverage. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | substrate; finish | Verify selected plaster suitability for the actual background and include local preparation; major substrate correction remains an upstream prerequisite. | british-gypsum-multifinish-installation |
| reaction_gate | mix; finish; dry_accept | Powder and water form paste in mix; gypsum setting within finish changes retained composition. Report actual product and water states at handoffs, unreacted surplus and residues; do not invent a stoichiometric yield, gas by-product or complete reaction. | |
| dryness_gate | dry_accept | Trowelling/setting does not prove dry-to-decorate readiness. Continue actual relevant ventilation/heating and monitoring until the declared criterion is met; the manufacturer's staged application timings are product-specific and provide no universal drying endpoint. | british-gypsum-multifinish-installation |
| utility_owner | prep; mix; finish; dry_accept | Identify shared lighting, access platforms and equipment, every consuming node and service period; attribute measured service demand once and disclose mobilization, rental/capital and upstream coverage. Keep the full work lot through actual multi-day drying: record unaccepted surface and water at any reporting cutoff and carry its existing burdens into the same final accepted lot without resetting, truncating or counting them twice. | |
| water_destination | mix; finish; dry_accept | Keep supplied mixing/finishing/cleaning water, retained water, collected slurry/condensate and actual vapour or direct discharge distinct. No wastewater or dust category may be assumed an elementary emission without substance and receiving-medium evidence. | |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Joint and edge preparation materials (`prep_materials`)

Process / prospective direction / type: `prep` / `inputs` / `product`.

Conditional materials for local joint and edge treatment of the accepted substrate; expand the umbrella into actual identified products.

- Collection subject: Joint and edge preparation materials
- Flow property / unit: Mass / kg
- Amount rule: prep_material_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep`
- Unverified optional screening aid: Provisional screen. Provisional wide screen for local tape, beads and compatible joint treatment; chemistry is system-specific. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Preparation access and equipment service (`prep_access`)

Process / prospective direction / type: `prep` / `inputs` / `product`.

Include actual access provision and mobilization when attributable to local preparation; preserve asset and service units in downstream concrete exchanges.

- Collection subject: Preparation access and equipment service
- Flow property / unit: Duration / h
- Amount rule: prep_service_hours / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep`
- Unverified optional screening aid: Provisional screen. Provisional screen for attributed platform and equipment hours; no lifetime or service factor is prescribed. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Prepared suitable substrate interface (`prepared_area`)

Process / prospective direction / type: `prep` / `outputs` / `product`.

Internal area handoff after local preparation, with substrate acceptance and zone transfer id; existing substrate manufacture is upstream background.

- Collection subject: Prepared suitable substrate interface
- Flow property / unit: Area / m2
- Amount rule: prepared_area / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep`
- Unverified optional screening aid: Provisional screen. Provisional screen permits prepared areas awaiting acceptance and rework; not an identity quantity. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Preparation residues to collection (`prep_waste`)

Process / prospective direction / type: `prep` / `outputs` / `waste`.

Record collected scraps by composition and custodian; do not call collected residue an air emission.

- Collection subject: Preparation residues to collection
- Flow property / unit: Mass / kg
- Amount rule: prep_waste_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep`
- Unverified optional screening aid: Provisional screen. Provisional broad local-preparation residue screen; hazardous removal remains excluded. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Off-spec paste and powder to collection (`mix_reject`)

Process / prospective direction / type: `mix` / `outputs` / `waste`.

Keep stale or contaminated paste out of accepted production; record authorised rework only when supplier instructions permit it.

- Collection subject: Off-spec paste and powder to collection
- Flow property / unit: Mass / kg
- Amount rule: mix_reject_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Unverified optional screening aid: Provisional screen. Provisional reject screen includes stale paste and spill recovery, with actual destination required. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Plaster packaging to collection (`mix_packaging`)

Process / prospective direction / type: `mix` / `outputs` / `waste`.

Separate packaging by material and recycling or disposal custodian.

- Collection subject: Plaster packaging to collection
- Flow property / unit: Mass / kg
- Amount rule: mix_packaging_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Unverified optional screening aid: Provisional screen. Provisional packaging screen pending actual bag composition and packaging mass. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Measured mixing air emissions (`mix_air`)

Process / prospective direction / type: `mix` / `outputs` / `elementary`.

Conditional measured particulate, water vapour or other named species only; mixing-stage vapour, when evidenced, belongs here and never at dry_accept; expand species and size fractions rather than assuming one generic dust UUID.

- Collection subject: Measured mixing air emissions
- Flow property / unit: Mass / kg
- Amount rule: mix_emission_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Unverified optional screening aid: Provisional screen. Provisional screening envelope only; pollutant identity and receiving air compartment need measured evidence. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Prepared suitable substrate feed (`finish_substrate`)

Process / prospective direction / type: `finish` / `inputs` / `product`.

Internal interface from prep, with the same transfer id and accepted substrate state.

- Collection subject: Prepared suitable substrate feed
- Flow property / unit: Area / m2
- Amount rule: finish_substrate_area / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Unverified optional screening aid: Provisional screen. Provisional area screen reconciled by zone with prep output; no production of substrate in this node. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Application access and equipment service (`finish_access`)

Process / prospective direction / type: `finish` / `inputs` / `product`.

Record actual access service share, equipment identity and delivery mobilization; avoid duplicated preparation charges.

- Collection subject: Application access and equipment service
- Flow property / unit: Duration / h
- Amount rule: finish_service_hours / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Unverified optional screening aid: Provisional screen. Provisional attributed equipment-hour screen without assumed asset lifetime. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Set and trowelled skim surface transfer (`trowelled_area`)

Process / prospective direction / type: `finish` / `outputs` / `product`.

Applied gypsum sets within this responsibility; identify reacted retained material, surplus paste and wet residues, without presuming complete reaction or a gas by-product.

- Collection subject: Set and trowelled skim surface transfer
- Flow property / unit: Area / m2
- Amount rule: trowelled_area / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Unverified optional screening aid: Provisional screen. Provisional intermediate area screen; setting is not evidence of dry-to-decorate readiness. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Application and rework residues to collection (`finish_waste`)

Process / prospective direction / type: `finish` / `outputs` / `waste`.

Rejected zones return for correction to finish with repeat labour and material retained; removed plaster exits as measured waste and rejected area is excluded from accepted_area.

- Collection subject: Application and rework residues to collection
- Flow property / unit: Mass / kg
- Amount rule: finish_waste_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Unverified optional screening aid: Provisional screen. Provisional residue screen for dropped plaster and removed defects; no assumed waste percentage. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Set and trowelled skim surface feed (`dry_surface`)

Process / prospective direction / type: `dry_accept` / `inputs` / `product`.

Receive set surface into monitored drying and inspection; actual retained water state remains a recorded uncertainty.

- Collection subject: Set and trowelled skim surface feed
- Flow property / unit: Area / m2
- Amount rule: dry_surface_area / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Unverified optional screening aid: Provisional screen. Provisional handoff area screen reconciled by zone to finish output. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prep | Local substrate interface preparation | required | Accepted suitable existing background | Local joints/edges and preparation interface | Measured prepared area by zone |
| mix | Finish plaster powder/water mixing | required | Actual selected gypsum finish system | Batch formulation, powder/water reconciliation and fresh paste handoff | Measured fresh paste mass by batch |
| finish | Hand application, setting and trowelling | required | Prepared interface and usable fresh paste available | Surface finish and gypsum setting responsibility; correction loops return here | Measured set/trowelled area by zone |
| dry_accept | Drying, inspection and decorative readiness | required | Set/trowelled area awaiting actual final acceptance | Dryness monitoring, attributable utilities and final net accepted service | 1 m2 accepted_skim |

Work lots link zones and mixing batches to labour, stock changes, cleaning, changeovers and acceptance. Prepared area, paste and set-surface transfers are measured independently; they need not equal the final reference amount. Rejected paste stays owned by mix; rejected surface returns to finish and its removed material exits there. No reject or unresolved zone enters accepted area.

### Process: Local substrate interface preparation (`prep`)

#### Inputs

##### Product flows

###### Preparation electricity (`prep_electricity`)

Record directly metered tools and the allocated share of shared lighting at this node.

- Selected flow: Preparation electricity
- Flow property / unit: Energy / kWh
- Amount rule: prep_kwh / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prep`
- Range: Provisional screen. Provisional screen allows manual preparation with zero powered demand and attributable work lighting. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

### Process: Finish plaster powder/water mixing (`mix`)

#### Inputs

##### Product flows

###### Gypsum finish plaster powder (`gypsum_powder`)

Record actual finish-plaster grade and supplier dry powder, excluding packaging and stock remaining unused.

- Selected flow: Gypsum finish plaster powder
- Flow property / unit: Mass / kg
- Amount rule: powder_net_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Range: Provisional screen. Provisional broad screen covers declared thickness, formulation and losses; no universal coverage rate. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied for plaster mixing (`mix_water`)

Water crosses as supplied technosphere product, not assumed abstraction from nature.

- Selected flow: Water supplied for plaster mixing
- Flow property / unit: Mass / kg
- Amount rule: mix_water_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Range: Provisional screen. Provisional broad water screen; actual selected-product mixing instruction governs recipe and measured site dose governs inventory. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mixing electricity (`mix_electricity`)

Meter mixer energy and allocate shared lighting once to this consuming node.

- Selected flow: Mixing electricity
- Flow property / unit: Energy / kWh
- Amount rule: mix_kwh / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Range: Provisional screen. Provisional screen includes manual zero demand and actual mixer duty. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mixing equipment cleaning water (`mix_clean_water`)

Separate cleaning water from recipe water and link each wash to mixing batches.

- Selected flow: Mixing equipment cleaning water
- Flow property / unit: Mass / kg
- Amount rule: mix_clean_water_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Range: Provisional screen. Provisional cleaning screen accommodates batch and end-of-shift wash events. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Fresh gypsum plaster paste transfer (`mixed_paste`)

Measured fresh paste handoff with batch id to finish; identify constituents without inventing hydration yield.

- Selected flow: Fresh gypsum plaster paste transfer
- Flow property / unit: Mass / kg
- Amount rule: paste_transfer_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Range: Provisional screen. Provisional paste screen reconciled with measured powder and water; internal feed is never fixed to 1. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 40
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mixing wash slurry to collection (`mix_slurry`)

Record collected wash slurry solids and liquid mass and the receiving waste handler.

- Selected flow: Mixing wash slurry to collection
- Flow property / unit: Mass / kg
- Amount rule: mix_slurry_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix`
- Range: Provisional screen. Provisional wash-slurry screen; includes water and solids, not a direct water emission. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Hand application, setting and trowelling (`finish`)

#### Inputs

##### Product flows

###### Fresh gypsum plaster paste feed (`finish_paste`)

Actual received paste from mix; retain batch-to-zone allocation and wet mass.

- Selected flow: Fresh gypsum plaster paste feed
- Flow property / unit: Mass / kg
- Amount rule: finish_paste_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Provisional screen. Provisional screen matched to mixing transfer plus identified handling losses, never a fixed reference amount. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 40
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and tool-cleaning water (`finish_water`)

Separate trowelling water retained or evaporated from collected tool-cleaning liquid.

- Selected flow: Finishing and tool-cleaning water
- Flow property / unit: Mass / kg
- Amount rule: finish_water_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Provisional screen. Provisional screen pending separate trowelling and cleaning records; no fixed finishing-water dose. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Application electricity (`finish_electricity`)

Include recorded consuming-node energy; human labour hours are metadata and do not create metabolic emissions.

- Selected flow: Application electricity
- Flow property / unit: Energy / kWh
- Amount rule: finish_kwh / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Provisional screen. Provisional screen for actual tools and allocated lighting; manual plastering can have zero tool electricity. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

###### Application wash slurry to collection (`finish_slurry`)

Captured cleanup liquid is a waste transfer; direct discharges require individually identified substances and medium in additional concrete exchanges.

- Selected flow: Application wash slurry to collection
- Flow property / unit: Mass / kg
- Amount rule: finish_slurry_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Provisional screen. Provisional slurry screen requires water/solids reconciliation and actual custodian. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water vapour released during application and setting (`finish_vapour`)

Conditional water vapour to unspecified air, only when directly measured or supported by the complete finish-node water balance. It excludes later drying-stage vapour and is not assumed to occur at a default amount.

- Selected flow: Water vapour released during application and setting `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: finish_vapour_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Provisional broad application-stage evaporation screen; actual finish moisture handoffs determine the amount. This is neither an observed fact, allowed limit nor default quantity.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Drying, inspection and decorative readiness (`dry_accept`)

#### Inputs

##### Product flows

###### Drying and inspection electricity (`dry_electricity`)

Meter or attribute fans, dehumidifiers and inspection lighting through actual dryness acceptance.

- Selected flow: Drying and inspection electricity
- Flow property / unit: Energy / kWh
- Amount rule: dry_kwh / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Provisional screen. Provisional broad screen allows passive drying or long monitored ventilation periods; not a default consumption. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased heat for drying (`dry_heat`)

Include only purchased heat actually supplied; for onsite fuel heating replace with concrete fuel, combustion and exhaust exchanges and do not also count purchased heat.

- Selected flow: Purchased heat for drying
- Flow property / unit: Energy / MJ
- Amount rule: dry_heat_mj / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Provisional screen. Provisional broad screen for conditional purchased heat; actual system and duration determine quantity. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted dry-to-decorate gypsum skim service (`accepted_skim`)

Only net area satisfying the declared decorative readiness and finish acceptance gate enters the denominator; this service is not manufactured gypsum powder.

- Selected flow: Accepted dry-to-decorate gypsum skim service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Exact reference normalization identity only; not an empirical yield, a provisional screen or a prescribed layer thickness.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Collected drying condensate (`dry_condensate`)

Conditional collected condensate routed to named custodian; distinguish from vapour and support any direct discharge with its actual destination.

- Selected flow: Collected drying condensate
- Flow property / unit: Mass / kg
- Amount rule: condensate_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Provisional screen. Provisional condensate screen for actual dehumidifier collection; discharge medium may not be assumed. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water vapour released to air during drying (`evaporated_water`)

Quantify by defensible water balance or measurement, including hydrate-bound and residual moisture and collected dehumidifier condensate; report uncertainty.

- Selected flow: Water vapour released to air during drying `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: evaporated_water_mass / accepted_area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Provisional screen. Provisional evaporation screen depends on supplied, retained and collected water; do not assume all added water evaporates. All provisional screens prompt investigation; they are neither observed facts, allowed limits nor default inventory amounts.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivision | work_lots | Subdivide measured zones, batches and utility events before allocation; this route has no intended co-product. Unexpected saleable recovered outputs require their actual status and a separately justified burden decision. | |
| batch_owner | mix; finish | Index all ingredients, paste transfers, cleaning and changeovers by batch and zone. Assign end-of-shift cleaning once using documented consumed batch mass or measured work time when direct metering is unavailable; preserve the denominator and uncertainty. | |
| shared_owner | prep; mix; finish; dry_accept | Identify each shared asset, invoice/meter total and period; prefer direct metering, otherwise measured runtime/load or attributable service hours. Sum shares across all consumers to the measured total, including other trades, without duplicating rental/capital, lighting or mobilization. | |
| reject_owner | mix; finish; dry_accept | Retain all failed-batch and rework burdens in the producing lot. Authorised return material keeps transfer ids and prior burden ownership; rework is additional actual activity, never negative avoided burden or accepted area. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep | prep | preparation input, interface, utility and residue | zone records and meter/service logs | lot_id; zone_id; substrate_acceptance; prep_material_mass; prep_metered_kwh; prep_shared_total_kwh; prep_shared_node_share; prep_direct_service_hours; prep_shared_service_hours; prep_service_share; prepared_area; prep_waste_mass; transfer_id; accepted_area | Survey net surface, weigh materials/residues, read attributable meters and equipment logs; link final area by zone and custody receipt. Sum attributable preparation raw or linked derived quantities after unique-event reconciliation, then divide by positive same-lot accepted_area. | kg; kWh; h; m2 | Every zone and utility/service event | Full work lot including rework and changeovers | Named project and preparation zone | per reference flow | Survey/opening schedule; supplier identity; calibrated instruments; shared-share reconciliation |
| cp_mix | mix | formulation ingredients, paste, utilities, rejects and emissions | batch weighing and custody records | lot_id; batch_id; zone_id; opening_powder_mass; received_powder_mass; closing_powder_mass; returned_powder_mass; external_transfer_powder_mass; mix_water_mass; mix_metered_kwh; mix_shared_total_kwh; mix_shared_node_share; mix_clean_water_mass; paste_transfer_mass; mix_reject_mass; mix_packaging_mass; mix_slurry_mass; mix_emission_mass; opening_paste_mass; closing_paste_mass; supplied_process_water; paste_transfer_water; collected_slurry_water; rejected_water_mass; emitted_water_mass; bound_water_change; free_water_change; water_balance_uncertainty; transfer_id; accepted_area | Weigh opening, received, closing, returned and externally transferred powder separately; returns and external transfers are disjoint exits, neither includes closing stock. Derive powder_net_mass by calc_powder_stock. Weigh delivered/returned stock, meter recipe/cleaning water, weigh wet paste and residues; obtain named-species air evidence if applicable; separate captured dust and wash slurry. Reconcile powder and process water against wet paste, separately recorded waste/emissions and stock changes; divide each attributable node numerator by positive same-lot accepted_area without deducting recorded waste twice. | kg; kWh; m2 | Every batch, wash and transfer | Whole lot, including off-spec batches and final wash | Actual mixing station feeding named zones | per reference flow | Scale/water-meter calibration; bag specifications; batch/zone links; waste custody; species/medium evidence |
| cp_finish | finish | parent/paste feed, surface output, utilities and rejects | zone application and correction records | lot_id; batch_id; zone_id; finish_substrate_area; finish_paste_mass; finish_water_mass; trowel_water_mass; cleanup_water_mass; finish_metered_kwh; finish_shared_total_kwh; finish_shared_node_share; finish_direct_service_hours; finish_shared_service_hours; finish_service_share; trowelled_area; finish_waste_mass; finish_slurry_mass; thickness; transfer_id; reject_route; received_paste_water; received_finish_water; transferred_surface_water; residue_water; slurry_water; finish_evaporation_method; directly_measured_finish_vapour_mass; opening_finish_water_stock; closing_finish_water_stock; bound_water_change; free_water_change; water_balance_uncertainty; accepted_area | Survey zone feed/output; weigh received paste and collected residues; split trowelling/cleaning water; measure received/handed-off water states and direct vapour or full water-balance evidence with uncertainty; log setting observations and defects with return-to-finish links. Sum each unique physical event once while retaining all distinct repeated correction and rework events and their burdens; divide each attributable numerator by positive same-lot accepted_area. | kg; kWh; h; m2; mm | Each zone, paste batch and correction | Application through set/trowelled handoff including corrections | Named work zone and application team | per reference flow | Thickness/finish inspection; transfer reconciliation; calibrated measurements; rejected-zone register |
| cp_dry_accept | dry_accept | surface feed, drying utilities, vapour, condensate and final service | monitoring and final acceptance records | lot_id; zone_id; dry_surface_area; dry_metered_kwh; dry_shared_total_kwh; dry_shared_node_share; dry_heat_mj; evaporation_method; directly_measured_vapour_mass; received_surface_water; added_drying_water; opening_water_stock; closing_water_stock; condensate_mass; collected_drying_slurry_water; other_evidenced_water_out; retained_bound_water; residual_free_water; water_balance_uncertainty; dry_start; dry_end; climate; dryness_criterion; dryness_observation; rejected_area; accepted_area | Survey accepted net area; retain actual dryness inspection evidence; meter fans/dehumidifiers/heat across real duration; record incoming surface water by paired moisture-state handoff, actual retained bound/free water and all collected or otherwise evidenced outlets. Calculate vapour by calc_evaporation or directly measure a defensible air-volume/humidity difference with calibrated instruments and uncertainty; a balance residual with missing fates is unquantified, not automatically vapour. Sum complete-lot attributable drying-node quantities across the actual monitoring duration and divide by positive same-lot accepted_area; final accepted service = accepted_area / accepted_area = 1 m2. | m2; kg; kWh; MJ | Each monitoring interval and final zone acceptance | Actual set-surface receipt through decorative-readiness acceptance, spanning all needed days | Named zone and allocated shared heating/ventilation system | per reference flow | Acceptance signatures and criterion; dated observations; climate log; utility attribution; water-balance uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_prep | prep_materials; prep_electricity; prep_access; prepared_area; prep_waste | Each prep card numerator is its declared raw or linked derived cp_prep numerator after unique-event stock/share reconciliation, divided by positive same-lot accepted_area. | cp_prep; prep_material_mass; prep_kwh; prep_service_hours; prepared_area; prep_waste_mass; accepted_area | Per-reference prep exchange amounts | |
| calc_mix | gypsum_powder; mix_water; mix_electricity; mix_clean_water; mixed_paste; mix_reject; mix_packaging; mix_slurry; mix_air | Each mix card numerator is its declared raw or linked derived cp_mix numerator, divided by positive same-lot accepted_area; wet paste balance retains measured losses and stock changes. | cp_mix; powder_net_mass; mix_water_mass; mix_kwh; mix_clean_water_mass; paste_transfer_mass; mix_reject_mass; mix_packaging_mass; mix_slurry_mass; mix_emission_mass; accepted_area | Per-reference mix exchange amounts | |
| calc_finish | finish_vapour; finish_substrate; finish_paste; finish_water; finish_electricity; finish_access; trowelled_area; finish_waste; finish_slurry | Each finish card numerator sums its declared raw or linked derived cp_finish numerator across unique physical events, counting each event once and retaining every distinct correction or rework event and its burdens, divided by positive same-lot accepted_area; do not fix intermediate paste or surface feeds to reference output. | cp_finish; finish_substrate_area; finish_paste_mass; finish_water_mass; finish_kwh; finish_service_hours; trowelled_area; finish_waste_mass; finish_slurry_mass; finish_vapour_mass; accepted_area | Per-reference finish exchange amounts | |
| calc_dry_accept | dry_surface; dry_electricity; dry_heat; accepted_skim; evaporated_water; dry_condensate | Each dry_accept numerator is its declared raw or linked derived cp_dry_accept numerator divided by positive accepted_area; accepted service = accepted_area / accepted_area = 1 m2. Quantify vapour only after measured collected liquid, chemically bound water, residual moisture and other evidenced fates are reconciled. | cp_dry_accept; dry_surface_area; dry_kwh; dry_heat_mj; evaporated_water_mass; condensate_mass; retained_bound_water; residual_free_water; accepted_area | Per-reference drying amounts and normalized accepted service | |
| calc_powder_stock | gypsum_powder | powder_net_mass = opening_powder_mass + received_powder_mass - closing_powder_mass - returned_powder_mass - external_transfer_powder_mass. Returns and external transfers are mutually exclusive measured boundary exits and exclude closing stock; consumed powder includes batch losses, which are recorded as outputs and never subtracted twice. | cp_mix; opening_powder_mass; received_powder_mass; closing_powder_mass; returned_powder_mass; external_transfer_powder_mass | powder_net_mass | |
| calc_node_energy | prep_electricity; mix_electricity; finish_electricity; dry_electricity | prep_kwh = prep_metered_kwh + prep_shared_total_kwh * prep_shared_node_share; mix_kwh = mix_metered_kwh + mix_shared_total_kwh * mix_shared_node_share; finish_kwh = finish_metered_kwh + finish_shared_total_kwh * finish_shared_node_share; dry_kwh = dry_metered_kwh + dry_shared_total_kwh * dry_shared_node_share. Shared totals exclude directly metered demand; shares derive from recorded runtime/load and reconcile across all consumers. Each result is normalized by its node rule. | cp_prep; cp_mix; cp_finish; cp_dry_accept; prep_metered_kwh; prep_shared_total_kwh; prep_shared_node_share; mix_metered_kwh; mix_shared_total_kwh; mix_shared_node_share; finish_metered_kwh; finish_shared_total_kwh; finish_shared_node_share; dry_metered_kwh; dry_shared_total_kwh; dry_shared_node_share | Attributable node electricity numerators | |
| calc_node_service | prep_access; finish_access | prep_service_hours = prep_direct_service_hours + prep_shared_service_hours * prep_service_share; finish_service_hours = finish_direct_service_hours + finish_shared_service_hours * finish_service_share. Shared service pools exclude direct service and reconcile to invoice/log periods across all consumers; normalize each result by its node rule. | cp_prep; cp_finish; prep_direct_service_hours; prep_shared_service_hours; prep_service_share; finish_direct_service_hours; finish_shared_service_hours; finish_service_share | Attributable access/service numerators | |
| calc_evaporation | evaporated_water | For declared balance method: evaporated_water_mass = received_surface_water + added_drying_water + opening_water_stock - closing_water_stock - retained_bound_water - residual_free_water - condensate_mass - collected_drying_slurry_water - other_evidenced_water_out. All terms use mutually exclusive same-period water ownership: closing_water_stock covers only other unaccepted end-period water stock and excludes accepted-surface retained_bound_water/residual_free_water; opening_water_stock excludes received_surface_water counted at the period entry. No retained surface water is counted again in other outlets. Water is the same measured process-water pool at all terms; exclude inherited dry-powder crystal water consistently, retain paired batch/zone moisture handoffs, and keep pre-drying losses at their producing nodes. For direct method: evaporated_water_mass = directly_measured_vapour_mass, with calibrated ventilation flow/humidity evidence. Declare method and water_balance_uncertainty; missing fates or negative unexplained balance require investigation, never clamping to zero. | cp_dry_accept; cp_mix; cp_finish; evaporation_method; directly_measured_vapour_mass; received_surface_water; added_drying_water; opening_water_stock; closing_water_stock; retained_bound_water; residual_free_water; condensate_mass; collected_drying_slurry_water; other_evidenced_water_out; water_balance_uncertainty | evaporated_water_mass before calc_dry_accept normalization | |
| calc_finish_evaporation | finish_vapour | Balance method: finish_vapour_mass = received_paste_water + received_finish_water + opening_finish_water_stock - transferred_surface_water - residue_water - slurry_water - closing_finish_water_stock. All terms are the same process-water pool and exclude inherited dry-powder crystal water; surface handoff includes bound and free water and is paired with dry_accept received_surface_water. The dry node receives only actual transferred_surface_water remaining after finish-stage vapour, slurry and residue removal, never original paste-plus-water dosing; dry_accept cannot count those prior losses again. Opening stock excludes received inputs; closing stock excludes transferred surface and other recorded outlets. Direct method: finish_vapour_mass = directly_measured_finish_vapour_mass using calibrated ventilation-flow/humidity observations. Record finish_evaporation_method and water_balance_uncertainty; missing fates or unexplained negative residuals remain data gaps. | cp_finish; finish_evaporation_method; directly_measured_finish_vapour_mass; received_paste_water; received_finish_water; opening_finish_water_stock; transferred_surface_water; residue_water; slurry_water; closing_finish_water_stock; water_balance_uncertainty | finish_vapour_mass before calc_finish normalization | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_gate | accepted_skim | Actual system, thickness, substrate and finish-quality observations plus declared dryness criterion are mandatory; no fixed manufacturer timing proves dryness. | Supplier system sheet; signed zone acceptance and moisture/visual criterion |
| dq_balance | all nodes | Reconcile batches, transfers, stock and water destinations with measurement uncertainty; never back-calculate unmeasured internal quantities merely to close a balance. | Node records, paired transfer ids and documented residuals |
| dq_identity | all cards | Concrete downstream exchanges require verified product/substance, property/unit and destination identities; expand conditional umbrellas using actual foreground records. | Supplier/waste/emission records and identity verification |
| dq_period | all nodes | Represent the actual site work lot, weather and duration; document missing readings, estimation and temporal/geographic coverage. | Full-period event log and coverage statement |
| dq_ranges | all cards | Provisional ranges are investigation screens only; investigate values outside them and replace with independently reviewed comparable evidence before stronger reuse. | Raw data, explicit uncertainty and independent comparator set |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_skim | Require positive accepted net area with openings/reveals policy, declared actual system/thickness and final dryness evidence; exclude all unresolved rejects. | |
| validate_transfers | prep; mix; finish; dry_accept | Match paired interface, paste and set-surface transfer ids and measured quantities; explain handling losses and state changes without forcing equality to final accepted area. | |
| validate_batch | mix; finish | Require batch/zone links, off-spec paths, wash/changeover ownership and complete attribution; no batch cleaning or failed material may disappear. | |
| validate_shared | all nodes | Reconcile shared utilities/equipment/mobilization across every consumer and relevant period; identify one owner for every burden and prevent duplicated upstream equipment service. | |
| validate_rework | finish; dry_accept | Require rejected-zone records and actual correction/discard paths linked to producing node; retain rework burdens while accepted area counts each accepted face once. | |
| validate_water | mix; finish; dry_accept | Reconcile powder/water/paste and water retention, slurry, condensate and vapour with uncertainty; captured solids/liquid are waste, not invented direct emissions. | |
| validate_binding | all cards | Verify concrete downstream UUID/support and actual qualifiers; ambiguous preparation, service, waste or pollutant umbrellas require foreground disaggregation and cannot inherit a generic UUID. | |
| validate_range | all cards | Treat provisional reasoned screens as prompts for investigation, not universal acceptable limits, measured values or substitute inventory. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction-service data package with process and lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared interior gypsum skim service with equivalent starting surface, finish system, thickness, acceptance gate and site conditions |
| excluded_use | Manufacturing gypsum powder; whole wall construction; exterior/cement rendering; paint; hazardous removal; asserted universal service life or whole-building performance |
| required_metadata | Reference area/gate; substrate/system/thickness; site/period; zone/batch links; starting and downstream ownership; utility and waste scope; geographic/technology compatibility |
| required_quality_disclosure | Measured versus estimated quantities; provisional ranges; missing upstream datasets; water balance and drying uncertainty; shared/rework attribution; unresolved identities and concrete-exchange resolution |
| update_trigger | Change to plaster formulation, thickness, substrate, acceptance criteria, equipment, drying conditions, utility supply, waste routing or representative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| british-gypsum-multifinish-installation | handbook | British Gypsum, Thistle MultiFinish installation instructions, https://www.british-gypsum.com/installation/installation-guidance-and-support/installation-guides/thistle-multifinish-installation-instructions | Selected-product route illustration: background suitability, mixing, staged skim/trowelling and variable application timings. Product-specific quantities/times are not generic PCR defaults or proof of decorative dryness. |
