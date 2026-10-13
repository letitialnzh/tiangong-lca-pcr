---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.oriented-strand-board-osb
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Oriented strand board (OSB)

## 1. Scope and Applicability

Applies to unoverlaid, resin-bonded wood OSB manufactured from long narrow strands with deliberately oriented face layers and a documented layer architecture. Face/core orientation, including a counteraligned or explicitly random core, must be declared; complete random layup is not OSB under this method. Three- and five-layer descriptions are evidence examples, not fixed requirements. The geometry, orientation distribution and grade documentation establish applicability, not a classification label alone. [usda-wood-handbook-2021; epa-osb-2002]

PF and pMDI routes, including layer-specific combinations and actual edge sealing, are covered. Excludes random particleboard, waferboard without the long-strand OSB architecture, MDF/HDF, veneer plywood, laminated strand lumber, nonwood panels, preservative-treated/fire-retardant formulations, face-overlaid products and different binder chemistry unless separately reviewed. Ordered wide wafers marketed as oriented waferboard are not automatically accepted as long-strand OSB. No fixed strength class, exposure class or building service life is assigned. [usda-wood-handbook-2021; epa-osb-2002]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.oriented-strand-board-osb |
| classification_refs | CPC 3.0 31432; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unoverlaid wood OSB with PF/pMDI binder and declared long-strand layered orientation |
| excluded_products | Random particleboard/waferboard; fibre/veneer panels; treated, overlaid or other-binder variants |
| representative_product | Accepted finished OSB at factory gate, actual dispatch wet mass, excluding packaging |
| production_route | Delivered panel logs or externally supplied unresinated strands → actual drying/screening → face/core resin and wax blending → oriented layer forming → hot pressing → cooling, trimming, conditional sanding/edge sealing → grading/packing |
| market_state | Finished factory-gate panel for further construction/manufacture; actual grade and moisture, no fixed end-use scenario |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an accepted OSB panel material, without claiming an equal building service across grades |
| How much | 1 kg net finished OSB at declared dispatch moisture, excluding packaging |
| How well | Actual grade/standard, layer count/orientation, strand geometry, thickness, board density at defined moisture, layer binder recipe and surface state |
| How long or cycle | One production accounting period; no use-stage service life assigned |
| reference_flow_link | `finished_osb` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Oriented strand board (OSB) `3291d1cf-a318-4271-9435-39534fa45e67` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Site/period and receiving gate; botanical species mix; strand dimensions and aspect-ratio distribution; layer count, face/core orientation and layup sequence; actual thickness, width/length and density at stated moisture; dry-/wet-basis moisture and method; net mass and rejected boards; exact commercial PF/pMDI formulations, solids and per-layer loading; wax/carrier water; grade, standard, exposure/performance class and actual acceptance tests; sanding/edge coating; supply and combustion/abatement route; no presumed service life |

Declare every required qualifier in the data package. This is a mass-based production reference, not a service functional unit for a building comparison. Geometry and moisture conversions must use the actual product, not an industry average.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use calibrated net accepted finished-board dispatch mass in cp_reference; exclude packaging. |
| same_denominator | all inventory rows | Reference product mass | kg | Every exchange uses per 1 kg reference flow; sum attributable period totals and divide by net accepted finished OSB mass from cp_reference. |
| moisture_basis | wood and board measurements | Mass | kg | Collect actual wet and dry mass with cp_material/cp_reference. Dry-basis moisture u=(wet-dry)/dry; wet-basis w=(wet-dry)/wet; dry=wet/(1+u). Record denominator and method; adhesive/wax solids are not dry wood. [usda-wood-handbook-2021] |
| energy_boundary | in_electricity, in_purchased_steam | Energy | MJ | Convert measured kWh to MJ using 3.6 MJ/kWh. For steam use measured delivered-minus-return enthalpy including condensate reference. A database MJ unit alone does not establish that boundary. |
| nox_quantity_basis | air_nox | Mass; verified quantity convention | kg | Before calculation, document the actual measured or factor-derived NOx quantity convention, chemical/species scope, concentration and gas-state basis and its independently verified relation to the selected LCI flow and assessment method. Native Mass/kg does not establish an NO2-equivalent convention. Keep actual NO/NO2 species quantities and documented conversion/speciation evidence when an equivalent basis is used; no universal conversion or assumed split. Reconcile any aggregate with separately modelled NO/NO2 and keep N2O separately, without counting the same release twice. Missing convention/speciation or LCI/assessment compatibility leaves the raw result and its normalized exchange pending review; never silently label a mass as NO2-equivalent or invent zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receiving gate for logs with explicit bark status, or receiving gate for externally supplied green/dried unresinated strands; disclose transport already included |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 31432 OSB subset stated in section 1; classification does not define grade |
| recursive_input_rule | Purchased OSB is not a raw strand input and cannot be recursively substituted. Rework stays in physical stock/transfer records; no duplicate finished reference output. |
| upstream_dataset_requirement | Matching forestry/log preparation, externally supplied strand production, each resin/wax/coating, fuel, electricity, water and packaging background; receiving-gate freight separately if absent upstream. External waste treatment must be linked. |
| disclosure | Foreground gate-to-gate, including onsite heat and controls; cradle-to-gate requires explicit upstream connections. Excludes installation, use and end of life unless separately modelled. |

Use one integrated foreground inventory p_osb through grading/packing. Preserve the following collection stages independently: s_receive (yard/conditioning/debarking/stranding only if inside the gate); s_dry (drying and screening, per face/core furnish); s_blend (separate layer recipe); s_form (orientation and layup); s_press (press cycle and cure); s_finish (cooling, trimming, optional sanding and edge sealing); s_pack; s_heat (boiler/thermal heater and actual internal heat recovery); s_control (dust collection/WESP/RTO/water treatment). [corrim-osb-us-2025; epa-osb-2002]

Assign direct-fired dryer fuel and the combined drying/combustion exhaust to s_dry; separate boiler fuel, ash and its stack to s_heat. Put RTO auxiliary fuel and final emissions at s_control. Shared dryer/press/RTO stacks are measured once after controls, with documented originating stages. Boiler AP-42 guidance does not supply direct-fired dryer factors. Recovered RTO heat lowers measured purchased fuel/heat; an internal loop is not a negative external heat export. Do not book useful onsite heat and its fuel as two purchased supplies. If heat leaves the plant, define one exact export flow and metered delivery boundary separately. [epa-osb-2002; epa-wood-boiler-2022]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_osb | OSB conversion, onsite utilities and dispatch with stage metering | required | Actual receiving gate to packaged dispatch | foreground | 1 kg reference flow |

### Process: OSB manufacturing and dispatch (`p_osb`)

#### Inputs

##### Product flows

###### Coniferous roundwood for wood-based panels, delivered (`in_softwood_logs`)

Coniferous panel logs at the declared receiving gate, only for the log route; collect botanical mix, bark status, wet mass and dry-basis moisture.

- Selected flow: Coniferous roundwood for wood-based panels, delivered
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Non-coniferous roundwood for wood-based panels, delivered (`in_hardwood_logs`)

Non-coniferous panel logs at the declared receiving gate, only for the log route; keep separate from coniferous input.

- Selected flow: Non-coniferous roundwood for wood-based panels, delivered
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Green unresinated wood strands for OSB (`in_green_strands`)

Only externally supplied unresinated green long strands. Start at their receiving gate, include drying and screening actually performed, and link the supplier stranding inventory.

- Selected flow: Green unresinated wood strands for OSB
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### dried screened wood strands (`in_dry_strands`)

Only externally supplied dried and screened unresinated OSB strands; verify receipt moisture and geometry. Supplier preparation is upstream; do not also book the logs used to make these strands as foreground input.

- Selected flow: dried screened wood strands `7c588d40-4cd1-495f-803c-8ff4a1582f3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Polymeric diphenylmethane diisocyanate resin (`in_pmdi`)

pMDI resin actually consumed, separately metered for each face/core layer. Record supplied formulation, solids, water and free monomer. No assumed three-percent loading from identity comments.

- Selected flow: Polymeric diphenylmethane diisocyanate resin `6c4c13f5-d9aa-4c0d-b0bb-0b6d87c6dfa2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Phenolic resin (`in_pf`)

Use this phenolic-resin row only for an actual independently supplied PF prepolymer/powder state matching the selected identity and provider reference; record its supplied mass, measured resin solids, moisture and additives. If the actual purchase is a prepared aqueous PF formulation, require one specific complete-formulation supply row and compatible provider covering preparation/delivery before use; its resin, carrier water and included additives are analytical composition, not new onsite purchases. Actual independently bought additions and onsite mixing water/utilities remain separate. Never equate wet formulation kg to dry polymer kg.

- Selected flow: Phenolic resin `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Petroleum paraffin wax for OSB blending (`in_paraffin`)

Use this row for petroleum paraffin wax actually supplied separately for water resistance, with measured supplied wax mass/state and provider basis. A bought wax emulsion is one complete formulation and requires its own specific compatible supply row/provider including preparation/delivery; its wax, carrier water and additives remain analytical subledgers only. Separately purchased constituents and actual onsite emulsification/mixing water/utilities are real separate exchanges. No universal wax loading or emulsion concentration.

- Selected flow: Petroleum paraffin wax for OSB blending
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Purchased electricity at OSB mill consumer meter (`in_electricity`)

Purchased electricity measured by submeter at the consumer boundary; record voltage, supplier, grid mix and losses included. Sum stage-meter quantities without adding the main meter again.

- Selected flow: Purchased electricity at OSB mill consumer meter
- Flow property / unit: Energy / MJ
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### natural gas in the gaseous state (`in_gas`)

Gaseous fossil natural gas delivered by pipeline, actual metered m3 use split among direct dryer, boiler/heater and thermal oxidizer. Declare meter absolute pressure, temperature, dry/wet basis, composition and compressibility. Match the supplier background m3 state using cp_gas and gas_volume_state; an unknown supplier/meter basis prevents completion of the background link. The database secondary mass coefficient is not gas density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `oiml-gas-volume-2007`

###### Diesel fuel (`in_diesel`)

Diesel fuel consumed by onsite yard/handling equipment, only if used; record density for any litre-to-kg conversion. Contracted upstream freight fuel is excluded here.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Liquefied petroleum gas (`in_lpg`)

Actual petroleum-refinery LPG consumed by forklifts or backup combustion, if used; do not substitute natural gas or assume propane-only composition. Use measured or batch-specific supplier heating value; an ancillary calorific value attached to database identity is not a method default.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Purchased untreated bark fuel (`in_bark_fuel`)

Only purchased bark fuel crossing the plant gate. Internally generated bark goes in the physical transfer ledger, not another external purchase row. Identify dryer versus boiler destination.

- Selected flow: Purchased untreated bark fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Purchased untreated wood screening fines fuel (`in_wood_fines_fuel`)

Only purchased untreated wood screening fines used as fuel; distinguish them from resin-bearing sanding dust. Record moisture, ash and actual heating value.

- Selected flow: Purchased untreated wood screening fines fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Tap water (`in_tap_water`)

Only delivered treated tap water; split conditioning, process, cooling and abatement use. Recirculating water is a physical loop, not repeated new water. Direct well/surface abstraction requires its own exact elementary-resource rows and upstream ownership.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Purchased net process heat delivered by steam (`in_purchased_steam`)

Only externally supplied process heat carried by steam when the supply contract defines net delivered heat. Collect steam/condensate enthalpy and supply-return mass balance; identity remains unresolved until that definition matches. Onsite steam is an internal energy handoff.

- Selected flow: Purchased net process heat delivered by steam
- Flow property / unit: Energy / MJ
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Polyethylene film (`in_pe_film`)

Only polyethylene shipping film actually used; weigh consumed material and disclose virgin/recycled content. Exclude product mass from film and do not multiply by co-product allocation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Steel baling band (`in_steel_strap`)

Only steel baling band with actual supplier-certified 99% Fe / 1% C composition and the verified recycling/reprocessing route (mechanical decomposition and melting). Both qualifiers must match the actual supplied band; the UUID does not prove them for a supplier. Other composition or production requires its own exact identity. Count actual band, not iron wire.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Polypropylene flat packaging strap (`in_pp_strap`)

Only polypropylene flat strapping actually used, not PP granulate, fibre, twine or a cable tie.

- Selected flow: Polypropylene flat packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Cardboard corner protector (`in_cardboard_guard`)

Only cardboard corner protectors actually used; distinguish finished protectors from generic cardboard, optical assembly material or cartons.

- Selected flow: Cardboard corner protector
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Wooden shipping batten (`in_wood_dunnage`)

Only the actual wooden shipping batten dispatched with the board bundle; one finished packaging component, not a collection of wooden packaging. Reuse requires measured loss/replacement accounting.

- Selected flow: Wooden shipping batten
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Water-based OSB edge-sealing coating, identified formulation (`in_edge_coating`)

Only an identified water-based edge-sealing coating formulation, if applied; record formulation and solids. Different commercial coatings require separate atomic formulation rows and exact identities.

- Selected flow: Water-based OSB edge-sealing coating, identified formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

#### Outputs

##### Product flows

###### Oriented strand board (OSB) (`finished_osb`)

One accepted finished factory-gate OSB reference output, at declared dispatch moisture, excluding packaging mass; packing activities and packaging inputs remain included.

- Selected flow: Oriented strand board (OSB) `3291d1cf-a318-4271-9435-39534fa45e67`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_reference`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Marketable untreated bark (`out_bark_sale`)

Only marketable untreated bark sold outside the plant, measured at its actual gate. Internal fuel transfers and discarded bark are different destinations, never the same quantity twice.

- Selected flow: Marketable untreated bark
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

###### Marketable untreated wood screening fines (`out_clean_fines_sale`)

Only untreated screening fines marketed externally; record actual dry mass, moisture and buyer specification. Exclude internally burned fines and resin-bearing sanding dust.

- Selected flow: Marketable untreated wood screening fines
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`

##### Waste flows

###### Discarded untreated bark (`waste_bark`)

Untreated bark discarded externally; do not also count it as sold bark or internal boiler fuel.

- Selected flow: Discarded untreated bark
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### Discarded untreated wood screening fines (`waste_clean_fines`)

Untreated screening fines discarded externally, separately weighed from sanding dust.

- Selected flow: Discarded untreated wood screening fines
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### Cured resin-bearing OSB trim waste (`waste_resin_trim`)

Cured resin-bearing OSB edge/cut trim transferred externally for treatment, not virgin wood offcuts.

- Selected flow: Cured resin-bearing OSB trim waste
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### Resin-bearing OSB sanding dust waste (`waste_sanding_dust`)

Resin-bearing OSB sanding dust sent externally; collected dust is waste only at its waste exit, not an air emission.

- Selected flow: Resin-bearing OSB sanding dust waste
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### OSB wet-abatement sludge (`waste_wet_sludge`)

Wet scrubber/WESP sludge leaving for external treatment; collect water content and solids, distinct from wastewater.

- Selected flow: OSB wet-abatement sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### OSB process wastewater to treatment (`waste_wastewater`)

Collected OSB process/abatement wastewater sent to external treatment; record actual stream composition and wet mass. Do not treat it as a direct waterbody emission.

- Selected flow: OSB process wastewater to treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### Wood-combustion bottom ash (`waste_bottom_ash`)

Bottom ash from the identified onsite wood combustor, separately from fly ash and never as wastewater/alkaline liquor.

- Selected flow: Wood-combustion bottom ash
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### Collected wood-combustion fly ash (`waste_fly_ash`)

Collected wood-combustion fly ash at the control device, separately from bottom ash; not emitted PM and not coal fly ash.

- Selected flow: Collected wood-combustion fly ash
- Flow property / unit: Mass / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

##### Elementary flows

###### carbon dioxide (biogenic) (`air_co2_bio`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor. Retain biogenic CO2 in LCI irrespective of an LCIA convention excluding it from fossil GWP.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### carbon dioxide (fossil) (`air_co2_fossil`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### carbon monoxide (biogenic) (`air_co_bio`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### carbon monoxide (fossil) (`air_co_fossil`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### methane (biogenic) (`air_ch4_bio`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### methane (fossil) (`air_ch4_fossil`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### nitrous oxide (`air_n2o`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### Nitrogen oxides (`air_nox`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor. Use the verified NOx mixture identity and declare the measurement reporting basis; do not substitute NO.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### sulfur dioxide (`air_so2`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### particles (PM2.5) (`air_pm25`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### particles (PM2.5 - PM10) (`air_pmcoarse`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### particles (> PM10) (`air_pmover10`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### methanol (`air_methanol`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### formaldehyde (`air_formaldehyde`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### phenol (`air_phenol`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### acetaldehyde (`air_acetaldehyde`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### propanal (`air_propionaldehyde`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### acrolein (`air_acrolein`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### methylene diphenyl diisocyanate (`air_mdi_emission`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor. This row covers monomeric 4,4′-MDI only; polymeric pMDI input is a different material. Other isomers require separate exact rows.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: methylene diphenyl diisocyanate `fe0acd60-3ddc-11dd-a625-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

###### water vapour (`air_water_vapour`)

Only the named species or defined size fraction actually released to outdoor air after controls. Retain stage and stack attribution; add each shared stack once. Use actual measurement or a documented equipment/fuel/control-specific method, not a global factor.

Compartment: emissions to outdoor air, unspecified subcompartment; this does not authorize selecting water/soil, delayed-emission correction or occupational-air records.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured unallocated physical period exchange divided by net accepted finished OSB mass; retain stage/stream breakdown and use the linked collection protocol. Keep allocated environmental burdens in the separate burden account.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `corrim-osb-us-2025`; `epa-osb-2002`; `epa-wood-boiler-2022`

## 7. Allocation and Co-product Handling

Maintain the unallocated physical wood/water/carbon ledger first. Internal bark, untreated fines, resin-bearing trims and sanding dust have separate transfer records with source/destination, moisture, composition and equal handoff quantities at both ends. Internal reuse cancels at the aggregate plant boundary but remains visible in stage balances. Sold co-products, internal fuels and externally discarded wastes are mutually exclusive destinations for each portion. Never multiply physical co-product output or an internal link by an allocation fraction. [corrim-osb-us-2025]

Assign directly attributable resin, pressing, grade/finishing and packaging burdens to OSB. Subdivide joint stages before allocating residual shared burdens to marketed outputs; document a physically justified dry-material basis and test an economic alternative when the physical relationship is inadequate. The separate burden account may use a_j = d_j / sum(d_k), where d_j is measured eligible exported dry material of each joint output under one declared basis. Finished board dry solids include binder/wax and must not be called dry wood; disclose whether the causal allocation basis uses measured wood fraction or total dry solids. Internal fuel is not a marketed output in this export denominator: trace its processing and combustion to the heat consumer; shared exported energy requires a separate causal allocation. No automatic substitution credit. [corrim-osb-us-2025]

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | p_osb | finished OSB denominator | collected_record | batch grade, accepted/rejected count, net wet mass, packaging mass, dimensions, actual density, moisture basis and test | Calibrated dispatch weighing excluding packaging; lot sampling for moisture and actual thickness/volume/density; reconcile production, stocks, grade test and dispatch. Sum net accepted finished mass; denominator for every per 1 kg reference flow quantity | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_material | p_osb | each wood raw input | collected_record | lot/species, gate, bark status, wet/dry mass, moisture, strand dimensions, supplier steps, start/end stocks | Weigh receipts and stocks; representative oven-dry sampling and strand geometry checks; distinguish raw logs, green strands and dry screened strands; verify supplier evidence. Receipts + opening stock - closing stock, adjusted for returns; divide actual consumed mass by net accepted finished OSB mass | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_recipe | p_osb | each resin/wax/coating by layer | collected_record | commercial formulation, resin chemistry, solids, carrier water, free monomer, face/core layer ID, dosing mass, layup orientation, cure settings | Calibrated dosing/load-cell and supplier certificate reconciliation by layer. Record each actual complete resin/wax/coating supply once in its verified wet/dry provider basis; retain PF/pMDI/wax/active/carrier/additive analytical subledgers without extra purchases. Require supplier formulation preparation/delivery once; real independently purchased additions and onsite mixing/utilities stay separate. Sum actual external consumption by supply and layer, divide by accepted net OSB mass, and preserve raw stock/loss/internal-transfer ledgers. No assumed recipe. | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_energy | p_osb | electricity, purchased heat, internal heat | collected_record | meter/stage, supply voltage/mix, kWh, steam mass/pressure/temperature, condensate return, reference enthalpy, useful heat, recovery routing | Calibrated stage meters; steam supply-return enthalpy balance and thermal-oil/hot-water circuit measurements; separate boiler, dryer, press and RTO ownership. Sum attributable external energy once by carrier; divide by net accepted finished OSB mass; internal heat stays in stage ledger | MJ | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_fuel | p_osb | each mass-based fuel by combustor; natural gas uses cp_gas | collected_record | fuel identity/route, receipts/stocks, wet mass, dry moisture, measured LHV, ash, carbon origin, boiler/dryer/RTO ID | Calibrated fuel meters/weighing and stock balance with fuel analysis. Separate internal untreated bark/fines from resin-bearing trim fuel; fossil binder carbon remains fossil. Sum each externally consumed fuel separately by stage; divide by net accepted finished OSB mass; equal internal handoffs retained outside external totals | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_water | p_osb | tap water and each water circuit | collected_record | source, makeup/return meter, stock, cooling, abatement, resin carrier, evaporation, discharge, water density | Meter fresh supplied water and actual density; record circulation separately; reconcile wet wood/resin water with evaporation and liquid/wet-residue exits. Sum new externally supplied water once; divide by net accepted finished OSB mass; no repeated circulation | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_packaging | p_osb | each packaging material | collected_record | material/route, stock, tare mass, packs dispatched, reuse/returns and replacements | Weigh actual consumed individual material, reconcile dispatch and replacements; keep separate from net board mass. Sum consumed dispatch material separately by identity; divide by net accepted finished OSB mass | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_residue | p_osb | each co-product, waste and internal transfer | collected_record | stream, source/destination stage, chemistry/resin, moisture/dry mass, sales/treatment route, stock, same handoff ID | Separate calibrated weighing and moisture/chemistry testing; internal links use equal quantities and state at both ends; reconcile physical ledger before allocating burdens. Sum actual external exits by atomic stream; divide by net accepted finished OSB mass; internal transfers excluded from plant external totals | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_emission | p_osb | each species/size fraction and stack | collected_record | stage/stack/control, measured species/CAS, carbon origin, concentration, dry/wet gas basis, actual gas flow/time, PM method/filterable/condensable definition, detection limits | Post-control stack tests/CEMS or documented site-equipment-specific calculation; include mobile equipment separately. Record missing versus zero, shared stack once, emission speciation and disjoint PM. Sum actual post-control emission mass separately by species/origin or disjoint size fraction; divide by net accepted finished OSB mass | kg | per lot and monthly reconciliation | One representative production period with seasonal/grade coverage | Same site, grade/recipe and gate definition | per 1 kg reference flow | Calibration, source records, samples, supplier/test records and stock closure |
| cp_gas | p_osb | gaseous natural gas by combustor | collected_record | meter/stage; actual m3; absolute P in Pa; T in K; dry/wet basis; water mole fraction; composition; Z; supply volume definition; supplier background m3 state; calibration | Calibrated gas meter and supplier billing/state records; collect matched pressure, temperature, water, composition and Z. Keep direct dryer, boiler/heater and RTO subtotals. Record quantity on its actual measured state first, then apply gas_volume_state only when both volume definitions are known. Sum consumed volume by stage in the same defined state and divide by net accepted finished OSB mass. Unknown basis leaves background linkage unresolved; no database secondary mass coefficient as density. | m3 | continuous metering with monthly reconciliation | same representative period as cp_reference | same site and gas supplier | per 1 kg reference flow | Meter calibration, gas analysis, supplier volume-basis declaration and exact background-unit correspondence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| gas_volume_state | in_gas | For the same gas amount, V_supplier = V_meter × (P_meter/P_supplier) × (T_supplier/T_meter) × (Z_supplier/Z_meter) × f_water; P is absolute Pa, T is K and Z is composition-specific compressibility. When converting wet meter volume to dry supplier volume, f_water = 1 - measured water mole fraction; f_water = 1 only if both definitions have the same moisture basis. This relationship requires consistent composition, no gas loss and documented meter/supplier state. Do not assume standard conditions, dry gas or Z=1. Unknown state/composition or an incompatible supplier definition leaves the background link unresolved. Divide the verified matched-state period volume by cp_reference net accepted OSB mass. | cp_gas; cp_reference; supplier state definition | supplier-matched m3 per 1 kg reference flow | oiml-gas-volume-2007 |
| period_normalization | all inventory rows | For each atomic exchange, divide the attributable period total by net accepted finished OSB mass in the same period; finished_osb = 1 kg. Aggregate sites by summed amounts / summed reference masses only for comparable grades/routes and disclosed weighting. | cp_reference; linked collection protocol | amount per 1 kg reference flow | corrim-osb-us-2025 |
| volume_density | reference product | Actual volume = sum(accepted panel length × width × thickness); actual wet density = corresponding net wet mass / actual volume. Convert area declarations using actual thickness and matched density/moisture, never nominal density or survey defaults. | cp_reference | Matched product volume/density and mass conversion | usda-wood-handbook-2021 |
| wood_water_carbon | p_osb stage ledger | Reconcile dry wood separately from dry resin/wax/coating solids and water: incoming plus opening stocks equals products, co-products, waste, combustion/emission exits plus closing stocks, with explicit unresolved residuals. Carbon inputs and stocks reconcile stored board/co-product carbon and measured gas/ash/waste carbon; separate biogenic wood and fossil resin/fuel carbon. Do not force balance by altering logs or dropping biogenic CO2. | cp_material; cp_recipe; cp_reference; cp_residue; cp_emission | Unallocated physical mass/water/carbon ledgers | usda-wood-handbook-2021; corrim-osb-us-2025 |
| pm_partition | air_pm25, air_pmcoarse, air_pmover10 | For one compatible post-control sampling method, disjoint PM2.5–10 = cumulative PM10 - cumulative PM2.5; PM>10 = compatible total PM - cumulative PM10. Use only nonnegative supported differences; otherwise keep missing fractions unresolved. Do not sum PM10 with its PM2.5 subset or add condensable PM twice. | cp_emission | Disjoint outdoor-air fractions | epa-osb-2002; epa-wood-boiler-2022 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | p_osb | Verify actual long-strand architecture and layer-specific recipe, receipt gate and grade. Do not generalize regional species or survey recipes to this product. | usda-wood-handbook-2021; corrim-osb-us-2025; epa-osb-2002 |
| dq_data | all inventory rows | Retain meter/test calibration, representative periods, stocks and missing-versus-zero treatment. A conditional absent flow requires evidence of absence; missing measurement is not zero. | collection protocols |
| dq_identity | all inventory rows | Exact physical/chemical flow, route, property and unit. Unresolved identities cannot be substituted by neighbouring products, mixed packaging, correction flows, generic VOC totals or mismatched medium. | flow identity and supplier records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_osb | Exactly one finished reference output; net mass excludes packaging; all qualifiers and the actual layer architecture/grade must be provided. | corrim-osb-us-2025 |
| v_basis | all inventory rows | Reference amount, normalization basis and collection denominator agree in both languages; physical, water, carbon and energy ledgers reconcile before burden allocation. | usda-wood-handbook-2021 |
| v_emissions | p_osb | Include biogenic CO2 and fossil binder/fuel carbon separately. Verify each emission species and medium; never replace sulfur dioxide with sulfur oxides, propanal with propanol, or MDI monomer with polymeric resin. Speciate remaining identified organics as additional atomic rows; a VOC total is a closure diagnostic, not added to its species. | epa-osb-2002; corrim-osb-us-2025 |
| v_scope_extension | p_osb | Add each actual unlisted fuel, chemical, refrigerant, packaging component, wastewater outlet pollutant or exported heat as a separate exact exchange with a collection protocol. Different binder/treatment/overlay variants require applicability review. No unexamined cut-off based on small mass. | epa-osb-2002 |
| v_case_limits | p_osb | CORRIM is a 23-facility US 2022/2023 survey (report submitted 2025-03-21, edited 2025-07-22). Its numeric density, moisture, fuel mix, adhesive rates, yields and allocation percentages are not defaults. Resolve its repeated PM labels and conflicting by-product percentage/species labels against primary records before numerical use. | corrim-osb-us-2025 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching OSB material supply with declared grade, recipe, orientation, moisture and boundary; explicit upstream links for cradle-to-gate |
| excluded_use | Direct comparison of building service without scenario/function; fixed industry life/performance; random waferboard/particleboard; unreviewed treatment/overlay/binder variants |
| required_metadata | All reference qualifiers, linked foreground protocols, stage ownership, supplier background scope, physical and burden ledgers, allocation and uncertainty |
| required_quality_disclosure | Actual temporal/geographic/grade coverage, identity/measurement gaps, emission method and limits; no publication or scientific-review claim |
| update_trigger | Changed product grade/recipe, strand geometry/orientation, moisture/thickness/density, gate, supplier, energy/abatement route or new primary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| corrim-osb-us-2025 | literature | Maureen Puettmann, Life Cycle Assessment of Oriented Strand Board Production – United States; submitted 2025-03-21, revisions 2025-04-02/05-06, edited 2025-07-22. https://corrim.org/wp-content/uploads/2025/07/LCA-Report-OSB-07222025.pdf | Sections 3.2.3–3.2.6, 4.3–4.8, 5.2–5.4.5; Tables 7, 9–12 and Figure 4. US 23 mills, 2022/2023; route and collection evidence only, not universal numeric defaults; table-label conflicts require primary-data resolution. |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021). https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Chapter 11 pp.11–10–11–11, OSB/particleboard distinction and layer-specific resin; Chapters 4/13 moisture methods. Historical species/processing examples do not fix current grade, recipe, density or lifetime. |
| epa-osb-2002 | official_guidance | US EPA, AP-42 10.6.1 Waferboard/Oriented Strandboard Manufacturing (March 2002). https://www.epa.gov/sites/default/files/2020-10/documents/c10s06-1.pdf | Sections 10.6.1.1–10.6.1.3, Figure 10.6.1-1, pp.1–4: identity, route and emissions/control ownership. Historical US guidance combines WB/OSB; applicability and species/technology/fuel/control must be verified, no universal factors. |
| epa-wood-boiler-2022 | official_guidance | US EPA, AP-42 1.6 Wood Residue Combustion In Boilers (March 2022). https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | Sections 1.6.1–1.6.3 and Table 1.6-1 notes: separate boiler combustion, fuel/control dependence and filterable/condensable PM. Not a direct-fired OSB dryer factor or proof of contaminated-trim applicability. |
| oiml-gas-volume-2007 | standard | OIML R 140, Measuring systems for gaseous fuel (2007 E), sections 7.3.1–7.3.3, pp.30–32. https://www.oiml.org/en/files/pdf_r/r140-e07.pdf | Metering/reference conditions, pressure-temperature-compressibility volume conversion and associated measurements. Used for engineering state correspondence only, not current legal-compliance certification or fixed standard P/T. Wet-to-dry mole correction and OSB normalization are declared method derivations requiring actual composition and measured state. |
