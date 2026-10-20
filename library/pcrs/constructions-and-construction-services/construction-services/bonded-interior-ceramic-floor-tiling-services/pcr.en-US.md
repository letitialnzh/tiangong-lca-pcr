---
pcr_id: pcr.constructions-and-construction-services.construction-services.bonded-interior-ceramic-floor-tiling-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bonded interior ceramic floor tiling services

## 1. Scope and Applicability

This category measures an installation service on a previously accepted, stable, dry, clean and suitably flat interior substrate. Work covers layout, cutting ceramic floor tile, water-mixed cementitious thinset, bonding and setting, cementitious grouting, specified movement-joint treatment and final cleanup. Wall, stone, epoxy, thick-bed, exterior and submerged systems are excluded. Substrate manufacture, major levelling or repair, waterproofing membranes, demolition and later building use are separate responsibilities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.bonded-interior-ceramic-floor-tiling-services |
| classification_refs | cpc:3.0:54740; narrower |
| covered_products | Interior ceramic floor tile thinset installation on ready substrate |
| excluded_products | Wall/stone/epoxy tiling; substrate construction; membranes; demolition |
| representative_product | Clean accepted ceramic tiled interior floor |
| production_route | Cut → mix thinset → bond and set → mix grout → grout, treat joints and clean |
| market_state | Completed contractor service at acceptance, before building use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted ceramic tiled interior floor installation |
| How much | 1 m2 |
| How well | Declared installation design, bond/grout quality and acceptance inspection; no universal performance value is invented |
| How long or cycle | One work lot through completed cure/acceptance; no service-life claim |
| reference_flow_link | `accepted_tiled_floor` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted bonded interior ceramic tiled floor service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Interior location; substrate readiness record; tile body/finish/dimensions/thickness; thinset and grout product/grade; applied mortar thickness; joint width/depth; movement-joint design and actual sealant chemistry; acceptance criteria; work-lot dates and net-area method |

Required qualifiers must be declared in the foreground data package. The reference measures area of completed work and does not stand for tile material mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_area | accepted_tiled_floor | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A = accepted net installed floor area of the work lot; measure plan geometry and deduct openings, unfinished and rejected areas using cp_grout_finish. |
| wet_dry_basis | mortar_feed; grout_feed | Mass | kg | Keep dry powder, mixing water, wet paste, wet waste and solids separately; wet paste mass is not dry binder mass. |
| tile_conversion | whole_tiles | Mass | kg | Convert counted tiles only with measured same-product unit mass; do not infer kg from m2 without actual area density and thickness. |
| energy_unit | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | Energy | MJ | Preserve meter units; electricity_MJ = electricity_kWh * 3.6; retain original readings. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted ready existing interior substrate; no major correction or membrane work remains |
| starting_condition_role | Supplied prerequisite outside installation service foreground |
| product_classification_scope | Narrower interior ceramic floor subset of cpc:3.0:54740 |
| recursive_input_rule | Do not recurse from intermediate floor-area handoffs into another full tiling service. External same-category subcontract work needs a separate, non-overlapping location and boundary record. |
| upstream_dataset_requirement | Link purchased tile, formulated thinset/grout, water, electricity and actual consumables to compatible upstream datasets; disclose excluded substrate/membrane burdens. |
| disclosure | Declare the ready-substrate supplier gate, omitted work, internal transfers, joint design, shared-resource ownership and waste custody gates. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| ready_substrate | foreground_boundary | Require a signed readiness inspection; if major repair, levelling or membrane work is needed, stop this scope and assign a separate dataset. | laticrete-thinsets |
| service_gate | all_processes | Finish at accepted net floor area after specified joint treatment and cleanup. Measure actual water, powder, paste and cut-tile transfers; no assumed hydration yield or reaction emission. | mapei-floor-installation |
| burden_ownership | shared_service | Own shared asset service once in grout_finish with all consuming nodes and dates; meter operational energy at consuming nodes and remove that energy from the shared service. |  |
| waste_gate | all_processes | Captured slurry, dust and residues leave as custodial waste. Actual elementary releases require reported substance, size where relevant, receiving medium and quantity; a blank observation is not zero. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Measured cut and whole tiles ready for bonding (`prepared_tiles`)

Process / prospective direction / type: `layout_cut` / `outputs` / `product`.

Internal transfer to bond_cure uses transfer id and measured mass; it is not the final reference.

- Collection subject: Measured cut and whole tiles ready for bonding
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 5
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

#### Collection requirement: Unused ceramic tiles transferred outside the job (`tile_return`)

Process / prospective direction / type: `layout_cut` / `outputs` / `product`.

Only external usable returns; closing stock is separate and never recorded again as a return.

- Collection subject: Unused ceramic tiles transferred outside the job
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

#### Collection requirement: Tile packaging segregated by actual material (`tile_packaging`)

Process / prospective direction / type: `layout_cut` / `outputs` / `waste`.

Resolve each cardboard, plastic or pallet exchange from records; avoid a generic packaging UUID.

- Collection subject: Tile packaging segregated by actual material
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

#### Collection requirement: Measured cutting emissions by substance and particle size to air (`cut_air_release`)

Process / prospective direction / type: `layout_cut` / `outputs` / `elementary`.

Conditional actual release only; record substance, particle size, air compartment and control system. Captured dust belongs to waste.

- Collection subject: Measured cutting emissions by substance and particle size to air
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence.

#### Collection requirement: Manufacturer-required liquid additives by actual formulation (`mortar_additives`)

Process / prospective direction / type: `mortar_mix` / `inputs` / `product`.

Conditional zero, one or multiple products; collect chemistry and total formulated product mass without assuming an active fraction.

- Collection subject: Manufacturer-required liquid additives by actual formulation
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

#### Collection requirement: Dry-mix and additive packaging by material (`mortar_packaging`)

Process / prospective direction / type: `mortar_mix` / `outputs` / `waste`.

Segregate actual bag, container and pallet materials and retained/reused packaging.

- Collection subject: Dry-mix and additive packaging by material
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

#### Collection requirement: Measured thinset mixing releases by substance and medium (`mortar_mix_release`)

Process / prospective direction / type: `mortar_mix` / `outputs` / `elementary`.

Conditional actual releases only; measure and declare substance, particle size where relevant, receiving medium and event. Captured material remains waste; no hydration gas or evaporation yield is assumed.

- Collection subject: Measured thinset mixing releases by substance and medium
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence.

#### Collection requirement: Bonding consumables and temporary aids by actual material (`bond_consumables`)

Process / prospective direction / type: `bond_cure` / `inputs` / `product`.

Record spacers, levelling aids and protective consumables; distinguish reusable assets from consumed materials.

- Collection subject: Bonding consumables and temporary aids by actual material
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

#### Collection requirement: Measured bonded and set floor awaiting grout (`ungrouted_floor`)

Process / prospective direction / type: `bond_cure` / `outputs` / `product`.

Record area released to finishing after adhesive setting under the actual product instructions; internal area is measured.

- Collection subject: Measured bonded and set floor awaiting grout
- Flow property / unit: Area / m2
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The internal-area screen allows measured work-in-progress and rework relative to accepted area; it never fixes the transfer quantity.

#### Collection requirement: Bonding residues and removed defective work by composition (`bond_reject`)

Process / prospective direction / type: `bond_cure` / `outputs` / `waste`.

Link each defect to its producing batch and rework route; embedded tile/adhesive rejects are not accepted area.

- Collection subject: Bonding residues and removed defective work by composition
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

#### Collection requirement: Measured bonding and setting releases by substance and medium (`bond_release`)

Process / prospective direction / type: `bond_cure` / `outputs` / `elementary`.

Conditional actual releases only; measure and declare substance, particle size where relevant, receiving medium and event. Captured material remains waste; no hydration gas or evaporation yield is assumed.

- Collection subject: Measured bonding and setting releases by substance and medium
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence.

#### Collection requirement: Manufacturer-required liquid additives by actual formulation (`grout_additives`)

Process / prospective direction / type: `grout_mix` / `inputs` / `product`.

Conditional zero, one or multiple products; collect chemistry and total formulated product mass without assuming an active fraction.

- Collection subject: Manufacturer-required liquid additives by actual formulation
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

#### Collection requirement: Dry-mix and additive packaging by material (`grout_packaging`)

Process / prospective direction / type: `grout_mix` / `outputs` / `waste`.

Segregate actual bag, container and pallet materials and retained/reused packaging.

- Collection subject: Dry-mix and additive packaging by material
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

#### Collection requirement: Measured grout mixing releases by substance and medium (`grout_mix_release`)

Process / prospective direction / type: `grout_mix` / `outputs` / `elementary`.

Conditional actual releases only; measure and declare substance, particle size where relevant, receiving medium and event. Captured material remains waste; no hydration gas or evaporation yield is assumed.

- Collection subject: Measured grout mixing releases by substance and medium
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence.

#### Collection requirement: Movement-joint sealant and accessories by actual chemistry (`movement_joint_materials`)

Process / prospective direction / type: `grout_finish` / `inputs` / `product`.

Apply when required by the actual joint design; record sealant chemistry, backing, length, cross-section and cure requirement.

- Collection subject: Movement-joint sealant and accessories by actual chemistry
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

#### Collection requirement: Finishing and protection consumables by actual material (`finish_consumables`)

Process / prospective direction / type: `grout_finish` / `inputs` / `product`.

Record cleaning products only when used, with formulation and safety information; split reusable equipment.

- Collection subject: Finishing and protection consumables by actual material
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

#### Collection requirement: Attributed shared access and equipment service (`shared_service`)

Process / prospective direction / type: `grout_finish` / `inputs` / `product`.

Conditional shared asset service for all five nodes; enter once here with consumer/event ledger, excluding already metered energy.

- Collection subject: Attributed shared access and equipment service
- Flow property / unit: Time / h
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Service hours vary with job size, shared assets and attendance; the broad screen does not establish an asset lifetime or default allocation.

#### Collection requirement: Grout, sealant and removed defective finish waste by material (`finish_residue`)

Process / prospective direction / type: `grout_finish` / `outputs` / `waste`.

Separate cured residue, unused paste and removed assemblies; link internal rework without crediting avoided materials.

- Collection subject: Grout, sealant and removed defective finish waste by material
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

#### Collection requirement: Finishing material packaging by actual material (`finish_packaging`)

Process / prospective direction / type: `grout_finish` / `outputs` / `waste`.

Separate packaging by composition and destination; retained items remain stock.

- Collection subject: Finishing material packaging by actual material
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

#### Collection requirement: Measured finishing releases by substance and receiving medium (`finish_release`)

Process / prospective direction / type: `grout_finish` / `outputs` / `elementary`.

Conditional emissions from actual products and operations; collect species and compartment before selecting any identity.

- Collection subject: Measured finishing releases by substance and receiving medium
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Unverified optional screening aid: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence.

## 6. Process Inventory Structure

Production is indexed by work lot, room, mixing batch and cleanup event. Cutting supplies prepared tiles; mortar mixing supplies wet paste. Bonding joins both onto the supplied substrate, and hydration changes the adhesive to its set state before the measured ungrouted area is released. Grout mixing supplies a separate paste; finishing fills joints, allows actual cementitious setting, treats required movement joints and cleans before acceptance. No pathway, hydration ratio, strength or generic elapsed time is imposed. Defective work returns to its producing operation with burdens retained; removed material is waste, never accepted output.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| layout_cut | Layout and tile cutting | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| mortar_mix | Thinset formulation and mixing | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| bond_cure | Tile bonding and adhesive setting | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| grout_mix | Grout formulation and mixing | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| grout_finish | Grouting, joint treatment, cleanup and acceptance | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |

### Process: Layout and tile cutting (`layout_cut`)

#### Inputs

##### Product flows

###### Manufactured ceramic floor tiles (`whole_tiles`)

Record declared ceramic body, finish, dimensions and gross mass crossing layout_cut material custody, including later usable returns; record actual cutting issue separately and retain every rework replacement.

- Selected flow: Manufactured ceramic floor tiles
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 5
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied water for cutting and cleanup (`cut_water`)

Conditional on wet cutting or water cleaning; record fresh additions separately from circulating water.

- Selected flow: Supplied water for cutting and cleanup
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.


###### Supplied electricity for cutting and extraction (`cut_electricity`)

Meter tools and extraction; include an attributed share of lighting only when this node consumes it.

- Selected flow: Supplied electricity for cutting and extraction
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Ceramic tile offcuts and broken tiles to waste custodian (`tile_offcuts`)

Weigh dry pieces separately from water-bearing cutting slurry; retained reusable pieces remain stock.

- Selected flow: Ceramic tile offcuts and broken tiles to waste custodian
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Captured cutting slurry and contaminated cleanup water (`cut_slurry`)

Record wet mass, solids evidence and destination; this is custodial waste, not an elementary discharge.

- Selected flow: Captured cutting slurry and contaminated cleanup water
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


##### Elementary flows

### Process: Thinset formulation and mixing (`mortar_mix`)

#### Inputs

##### Product flows

###### Cementitious thinset dry mix (`mortar_powder`)

Collect product grade, formulation, dry mass and actual supplier instructions; do not substitute pure cement.

- Selected flow: Cementitious thinset dry mix
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied mixing and equipment wash water (`mortar_water`)

Separate mixing water, fresh wash water and recirculation by batch.

- Selected flow: Supplied mixing and equipment wash water
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.


###### Supplied electricity for mixing (`mortar_electricity`)

Meter the mixer for the batch, including attributed cleaning events.

- Selected flow: Supplied electricity for mixing
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cementitious thinset paste (`fresh_mortar`)

Weigh usable wet paste at handoff with transfer and batch ids; exclude off-spec paste and retained stock.

- Selected flow: Fresh cementitious thinset paste
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


##### Waste flows

###### Off-spec and residual thinset mixture (`mortar_mix_residue`)

Keep wet/dry basis, setting state and actual destination; separate from equipment wash effluent.

- Selected flow: Off-spec and residual thinset mixture
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Collected mixer wash effluent (`mortar_wash_effluent`)

Record wet mass and composition where known; no unmeasured drain or air release is inferred.

- Selected flow: Collected mixer wash effluent
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


##### Elementary flows

### Process: Tile bonding and adhesive setting (`bond_cure`)

#### Inputs

##### Product flows

###### Measured tiles received for bonding (`tiles_feed`)

Pair prepared_tiles transfer id and quantity; count upstream tile burdens once.

- Selected flow: Measured tiles received for bonding
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 5
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Measured fresh thinset received for bonding (`mortar_feed`)

Pair fresh_mortar transfer with the measured wet paste mass; never force this feed to 1.

- Selected flow: Measured fresh thinset received for bonding
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied electricity during bonding and setting (`bond_electricity`)

Conditional tool, lighting and ventilation use; elapsed setting time alone does not imply energy.

- Selected flow: Supplied electricity during bonding and setting
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Grout formulation and mixing (`grout_mix`)

#### Inputs

##### Product flows

###### Cementitious grout dry mix (`grout_powder`)

Collect product grade, formulation, dry mass and actual supplier instructions; do not substitute pure cement.

- Selected flow: Cementitious grout dry mix
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied mixing and equipment wash water (`grout_water`)

Separate mixing water, fresh wash water and recirculation by batch.

- Selected flow: Supplied mixing and equipment wash water
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.


###### Supplied electricity for mixing (`grout_electricity`)

Meter the mixer for the batch, including attributed cleaning events.

- Selected flow: Supplied electricity for mixing
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cementitious grout paste (`fresh_grout`)

Weigh usable wet paste at handoff with transfer and batch ids; exclude off-spec paste and retained stock.

- Selected flow: Fresh cementitious grout paste
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


##### Waste flows

###### Off-spec and residual grout mixture (`grout_mix_residue`)

Keep wet/dry basis, setting state and actual destination; separate from equipment wash effluent.

- Selected flow: Off-spec and residual grout mixture
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Collected mixer wash effluent (`grout_wash_effluent`)

Record wet mass and composition where known; no unmeasured drain or air release is inferred.

- Selected flow: Collected mixer wash effluent
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


##### Elementary flows

### Process: Grouting, joint treatment, cleanup and acceptance (`grout_finish`)

#### Inputs

##### Product flows

###### Measured set ungrouted floor received for finishing (`floor_feed`)

Pair ungrouted_floor by location and transfer id; there is no second upstream construction input.

- Selected flow: Measured set ungrouted floor received for finishing
- Flow property / unit: Area / m2
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The internal-area screen allows measured work-in-progress and rework relative to accepted area; it never fixes the transfer quantity.


###### Measured fresh cementitious grout received (`grout_feed`)

Pair fresh_grout batch and wet mass; actual joint geometry governs consumption.

- Selected flow: Measured fresh cementitious grout received
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied water for finishing and cleanup (`finish_water`)

Record fresh water by cleanup event and distinguish captured wastewater from recirculation.

- Selected flow: Supplied water for finishing and cleanup
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.


###### Supplied electricity for finishing and cleanup (`finish_electricity`)

Meter or attribute actual tools, cleanup and lighting without duplicating shared_service energy.

- Selected flow: Supplied electricity for finishing and cleanup
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted bonded interior ceramic tiled floor service (`accepted_tiled_floor`)

The accepted net floor area includes completed joints, specified sealant where applicable and cleanup; exclude rejected and unfinished areas.

- Selected flow: Accepted bonded interior ceramic tiled floor service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Normalization identity only; not yield evidence
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`

##### Waste flows

###### Collected finishing wash effluent (`finish_effluent`)

Record wet mass, solids and destination with custody evidence; direct discharge requires its own concrete elementary exchange.

- Selected flow: Collected finishing wash effluent
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | all_processes | First subdivide by room, lot, batch and measured event. For shared meters allocate by logged operating time and power or actual submeter evidence, documenting residual uncertainty; sum shares to the measured total. |  |
| single_owner | shared_service | Keep one event owner for common access/equipment service; record all five consumers and period. Exclude metered energy and duplicated contractor invoices from this service. |  |
| rework | all_processes | Charge rework inputs, cleanup and rejected material to the same accepted work lot. Link replacement operations and exits by defect id. Do not count an intermediate area or a failed area as final output. |  |
| stock | whole_tiles | Gross tile issue = opening stock + receipts - closing stock; use gross issue as whole_tiles input and record external usable returns once as tile_return output. Net consumption = gross issue - external returns is a separate upstream burden attribution quantity, not another physical exchange or negative credit. Only original upstream burdens of the actual unused returned material may follow the return; installation and rework burdens stay with the accepted service, with no automatic avoided-production credit. Closing stock and external returns are mutually exclusive; waste is already inside consumption and is never deducted again. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each protocol owns one node. Use transfer ids to pair sending and receiving records, separate fresh water from recirculation and identify cleanup/changeover ownership. Record all materials as dry/wet state and product/lot. Actual supplier instructions govern water dose, trowel selection, cure and cleaning conditions. Do not borrow numeric defaults from a different product. Provisional ranges are deliberately broad prompts for checking missing records; they are neither observed facts nor defaults, conformity limits or evidence of zero when inactive. Investigate an outlier and retain its evidence rather than clipping it.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_layout_cut | layout_cut | whole_tiles; cut_water; cut_electricity; prepared_tiles; tile_return; tile_offcuts; cut_slurry; tile_packaging; cut_air_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; opening_stock; receipts; closing_stock; external_return; stock_event_id; actual_processing_draw; cut_layout; cutting_method; reuse_piece_id | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Count or weigh actual tiles issued to cutting separately from purchasing receipts and mutually exclusive closing stock/returns; preserve layout and reusable-piece records. | kg; MJ | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_mortar_mix | mortar_mix | mortar_powder; mortar_water; mortar_additives; mortar_electricity; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_packaging; mortar_mix_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; powder_issued; mixing_water; additive_issued; opening_wetstock; closing_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; unexplained_balance; wash_addition; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; wetstock_moisture; residue_solids; wash_solids; crystallization_water_basis; mix_recipe_version; water_grade; batch_grade; formulation_record; batch_times | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Record actual powder_issued, mixing_water and additive_issued with batch grade/recipe, opening/closing wetstock and paste handoff mass. Keep the mixing pool and wash-water pool separately, measure slurry solids/moisture and actual material carried into washing; retain crystallization-water basis and unknown fate as a balance gap rather than an assumed emission. | kg; MJ | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_bond_cure | bond_cure | tiles_feed; mortar_feed; bond_consumables; bond_electricity; ungrouted_floor; bond_reject; bond_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; length; width; area; internal_area; substrate_acceptance_record; mortar_batch_id; trowel_geometry; bed_thickness; tile_back_coverage; set_condition; cure_start; cure_end; cure_temperature; cure_humidity; supplier_gate_instruction; set_acceptance_record | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Measure its own set-floor transfer geometry and record actual substrate release, mortar batch, bed/trowel evidence, cure start/end and conditions, supplier gate instructions and signed set acceptance before handoff. Link A to final acceptance; do not remeasure final A here. | kg; MJ; m2 | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_grout_mix | grout_mix | grout_powder; grout_water; grout_additives; grout_electricity; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_packaging; grout_mix_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; powder_issued; mixing_water; additive_issued; opening_wetstock; closing_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; unexplained_balance; wash_addition; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; wetstock_moisture; residue_solids; wash_solids; crystallization_water_basis; mix_recipe_version; water_grade; batch_grade; formulation_record; batch_times | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Record actual powder_issued, mixing_water and additive_issued with batch grade/recipe, opening/closing wetstock and paste handoff mass. Keep the mixing pool and wash-water pool separately, measure slurry solids/moisture and actual material carried into washing; retain crystallization-water basis and unknown fate as a balance gap rather than an assumed emission. | kg; MJ | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_grout_finish | grout_finish | floor_feed; grout_feed; finish_water; movement_joint_materials; finish_consumables; shared_service; finish_electricity; accepted_tiled_floor; finish_residue; finish_effluent; finish_packaging; finish_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; length; width; area; internal_area; plan_dimensions; gross_plan_parts; openings; unfinished_area; rejected_area; accepted_area; deduction_region_ids; joint_width; joint_depth; joint_length; sealant_chemistry; cure_record; acceptance_date; service_start; service_end; shared_asset; shared_period; allocation_driver | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Survey gross plan parts and deduct each mutually exclusive opening/incomplete/failed region once; inspect grout, movement-joint treatment and cleanup. Retain service_start/end in hours; link shared-service invoices and all actual consumers once. | kg; MJ; m2; h | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_mass | whole_tiles; cut_water; prepared_tiles; tile_return; tile_offcuts; cut_slurry; tile_packaging; mortar_powder; mortar_water; mortar_additives; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_packaging; grout_powder; grout_water; grout_additives; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_packaging; tiles_feed; mortar_feed; bond_consumables; bond_reject; grout_feed; finish_water; movement_joint_materials; finish_consumables; finish_residue; finish_effluent; finish_packaging | event_quantity = gross - tare for weighing; alternatively event_quantity = count * unit_mass or volume * density using the selected measurement_route and consistent units; select exactly one route per event and retain the measured product/wet-dry identity. | gross; tare; count; unit_mass; volume; density; measurement_route | event_quantity |  |
| event_energy | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | meter_delta = meter_end - meter_start; share = driver_node / drivers_total; event_quantity = meter_delta * share; drivers_total must be positive and sum of consuming shares must equal 1; dedicated meter uses share = 1; convert kWh by electricity_convert after attribution and retain MJ readings unchanged. | meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers | event_quantity |  |
| event_area | ungrouted_floor; floor_feed; accepted_tiled_floor | survey_area = length * width for each measured rectangular part; use surveyed area for other geometry; A = sum of gross surveyed plan parts - openings - unfinished_area - rejected_area; these deduction regions are mutually exclusive and each is deducted exactly once; for ungrouted_floor and floor_feed, event_quantity = internal_area at the respective actual transfer; for accepted_tiled_floor, event_quantity = A; never assign A to an internal handoff by default. | length; width; area; internal_area; plan_dimensions; gross_plan_parts; openings; unfinished_area; rejected_area; cp_bond_cure; cp_grout_finish | A; event_quantity |  |
| event_service | shared_service | service_hours = service_end - service_start in hours; share = driver_node / drivers_total; event_quantity = service_hours * share; enumerate every consumer and exclude already recorded operational energy; retain supplied service quantity when billed on a documented equivalent hour basis. | service_start; service_end; driver_node; drivers_total; shared_consumers; shared_asset; shared_period | event_quantity |  |
| event_release | cut_air_release; mortar_mix_release; grout_mix_release; bond_release; finish_release | event_quantity = concentration * exhaust_volume * unit_conversion for a measured substance/size and receiving medium; alternatively use directly measured net mass; select one documented method and do not infer zero from missing samples. | concentration; exhaust_volume; unit_conversion; gross; tare; species; particle_size; receiving_medium | event_quantity |  |
| card_quantity | all inventory rows | q_lot = sum of event_quantity for the same row_id and lot_id after same-node event ownership and unit checks; remove only duplicate records of the same physical event, retaining every actual repeated rework operation with its iteration; whole_tiles and tile_return use stock_draw, and mixing-material/paste/waste/release cards use their node card bridge, instead of a second event sum; measured transfers remain unforced; avoid adding recirculated water as fresh supply. | event_quantity; row_id; lot_id; cp_layout_cut; cp_mortar_mix; cp_bond_cure; cp_grout_mix; cp_grout_finish | q_lot |  |
| mortar_card_bridge | mortar_powder; mortar_water; mortar_additives; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_mix_release | mortar_powder_lot = powder_issued; mortar_water_lot = mixing_water + wash_addition; mortar_additives_lot = additive_issued; fresh_mortar_lot = transferred_wetpaste; mortar_mix_residue_lot = captured_mix_residue + retained_captured_wash_residue; mortar_wash_effluent_lot = effluent_transferred; mortar_mix_release_lot = measured_mix_releases + measured_wash_release; water totals are fresh additions only, excluding recirculation; residues assigned to the mix-residue card are disjoint from transferred wash effluent; tag each concrete actual species release by its owned pool/event and count it once; these row-specific lot totals become q_lot for area division. | powder_issued; mixing_water; wash_addition; additive_issued; transferred_wetpaste; captured_mix_residue; retained_captured_wash_residue; effluent_transferred; measured_mix_releases; measured_wash_release; cp_mortar_mix | q_lot |  |
| grout_card_bridge | grout_powder; grout_water; grout_additives; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_mix_release | grout_powder_lot = powder_issued; grout_water_lot = mixing_water + wash_addition; grout_additives_lot = additive_issued; fresh_grout_lot = transferred_wetpaste; grout_mix_residue_lot = captured_mix_residue + retained_captured_wash_residue; grout_wash_effluent_lot = effluent_transferred; grout_mix_release_lot = measured_mix_releases + measured_wash_release; water totals are fresh additions only, excluding recirculation; residues assigned to the mix-residue card are disjoint from transferred wash effluent; tag each concrete actual species release by its owned pool/event and count it once; these row-specific lot totals become q_lot for area division. | powder_issued; mixing_water; wash_addition; additive_issued; transferred_wetpaste; captured_mix_residue; retained_captured_wash_residue; effluent_transferred; measured_mix_releases; measured_wash_release; cp_grout_mix | q_lot |  |
| mix_state_balance | mortar_mix; grout_mix | powder_issued + mixing_water + additive_issued + opening_wetstock = transferred_wetpaste + captured_mix_residue + mix_material_in_wash + measured_mix_releases + closing_wetstock + unexplained_balance; compare compatible measured wet masses, with original powder crystallization water included in its issued mass and retained hydration water remaining in paste/residue; unknown fate is unexplained_balance, not an emission or a forced yield. | powder_issued; mixing_water; additive_issued; opening_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; closing_wetstock; unexplained_balance; cp_mortar_mix; cp_grout_mix | mix_balance |  |
| wash_state_balance | mortar_mix; grout_mix | wash_addition + mix_material_in_wash + opening_washstock = effluent_transferred + retained_captured_wash_residue + measured_wash_release + closing_washstock + unexplained_wash_balance; exclude wash_addition from mixing_water and exclude material sent to washing from captured_mix_residue; retain measured wet mass/solids basis and each custody event once, without inventing a direct discharge. | wash_addition; mix_material_in_wash; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; cp_mortar_mix; cp_grout_mix | wash_balance |  |
| lot_to_area | all inventory rows | q_norm = q_lot / A; q_lot is the measured or attributed exchange of the declared node in its recorded unit; A is the same lot accepted net floor area in m2 and must be positive. | q_lot; A; cp_layout_cut; cp_mortar_mix; cp_bond_cure; cp_grout_mix; cp_grout_finish | q_norm |  |
| stock_draw | whole_tiles; tile_return | gross_issue = opening_stock + receipts - closing_stock; whole_tiles_lot = gross_issue; tile_return_lot = external_return; net_consumed = gross_issue - external_return; reconcile net_consumed to independently measured actual_processing_draw, meaning actual processing withdrawals excluding unused external returns, including cutting losses and new materials for rework but excluding repeated internal recutting of the same piece, never purchasing receipts; keep physical gross input and return output distinct from net burden attribution; stock and return event ids are disjoint, and waste is not deducted again. | opening_stock; receipts; closing_stock; external_return; actual_processing_draw; cp_layout_cut | gross_issue; tile_return_lot; net_consumed |  |
| electricity_convert | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | electricity_MJ = electricity_kWh * 3.6 | electricity_kWh | electricity_MJ |  |
| transfer_reconcile | all inventory rows | sending_quantity = receiving_quantity + documented_transfer_loss; compare same transfer id, unit and wet/dry state; charge loss once to the sending node, using kg for material and m2 for floor transfers. | sending_quantity; receiving_quantity; documented_transfer_loss | transfer_balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Resolve every actual exchange to a compatible concrete flow before TIDAS publication; umbrella cards may expand to multiple exchanges without changing service scope. | Flow detail and support property/unit evidence |
| completeness | all_processes | Cover full batch, cleanup, changeover, stock, rejected and shared events; record conditional absence with evidence, never blank=zero. | Event ledger and reconciliations |
| qualifiers | accepted_tiled_floor | Preserve ready-substrate, product, geometry, joint, cure and acceptance qualifiers; no unverified durability or bond-strength claim. | Design, product sheet and signed inspection |
| screening | all inventory rows | Replace provisional ranges using independent reviewed sites/lots; the same lot maximum cannot validate itself. Report uncertainty and outliers. | Independent range review and data-quality statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| area_gate | accepted_tiled_floor | Require A > 0 and one accepted output. Rejected, unfinished and intermediate areas are excluded from A and final sales output. |  |
| transfer_gate | all_processes | Pair all tile, paste and floor transfers; reconcile stock and wet/dry balance without demanding water-losing hydrated paste equal dry powder. |  |
| event_gate | all_processes | Check run/batch linkage, rework paths, waste custody, shared consumer shares and single event ownership. Missing evidence fails completeness. |  |
| identity_gate | all inventory rows | Verify actual formulation, service gate, flow type, property/unit and emission compartment; do not relabel manufactured tile as service or guess sealant/dust identity. |  |
| range_gate | all inventory rows | Investigate broad-screen outliers using measurement evidence. Provisional screening bounds do not establish conformity, publication readiness or missing-flow zeros. |  |
| validate_physical_slurry_stream | all collected wastewater/slurry | A wastewater/slurry card denotes one actual physically unseparated liquid/solid mixture at one receiver gate. Independently collected liquids, separated solids or different treatment destinations require distinct actual exchanges; do not recombine them to fit this card. Mixture mass and constituent water/solids are nonadditive views. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package; secondary_dataset |
| downstream_use | Compatible process and lifecyclemodel projections; may become a background_dataset for the same declared installation gate after review |
| allowed_use | Area-based interior ceramic floor thinset service with matching substrate, product, joint and acceptance qualifiers |
| excluded_use | Manufactured tile production, wall/stone/epoxy routes, substrate/membrane work, building use and universal lifetime comparisons |
| required_metadata | Geography/site; lot/date; accepted A; substrate supply gate; tile/mortar/grout grades; joint/sealant design; process mode; transfers; supplier/upstream links; shared resource ownership |
| required_quality_disclosure | Measured/calculated coverage; absent/unknown exchanges; unresolved identities; provisional range status; allocation/stock/rework evidence; uncertainty; excluded upstream work |
| update_trigger | Change in tile system, substrate gate, chemistry, joint design, technology, supplier instructions, site practice or material measurement evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| mapei-floor-installation | handbook | MAPEI Home, Floors (accessed 2026-10-12): https://mapeihome.com/flooranddecor/projects/floors/ | Route stages, actual-product instructions and joint/cleanup responsibilities; not universal amounts or times |
| laticrete-thinsets | handbook | LATICRETE, Thinsets FAQ (accessed 2026-10-12): https://www.laticrete.com/support-and-training/downloads-and-faq/faqs/planning-a-job/thinsets | Ready-substrate prerequisite and separate correction responsibility |
