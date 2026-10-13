---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-d3228e5f
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Untreated solid coniferous wood continuously shaped by machining

## 1. Scope and Applicability

This PCR covers unassembled, untreated, unglued and uncoated solid coniferous wood mechanically formed with a continuous longitudinal profile on at least one edge or face. Products include individual tongued-and-grooved or rebated strips, unassembled parquet strips/friezes, beadings and mouldings made from kiln-dried sawn stock. The profile drawing must show the continuous worked shape; simple rectangular sawn stock, plain surfacing or sanding alone does not establish this category. Full botanical species, actual profile geometry, grade, dimensions and dispatch moisture distinguish datasets. This supported manufacturing route is narrower than CPC 3.0 31211.

Exclude non-coniferous wood/bamboo, laminated or finger-jointed/glued wood, engineered panels, impregnated or coated profiles, assembled flooring/panels, finished doors/windows and installed construction components. A moulding sold for later joinery remains a profile; an assembled door/window does not. Green/air-dried stock routes and non-steam direct-fired conditioning require a reviewed extension. The reference is a declared quantity of profiled wood at the manufacturing gate, with no floor-area functionality, structural-strength certification, building-service-life or universal moisture target. [usda-wood-handbook-2021, Ch.6 Patterns; author scope selection.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-d3228e5f |
| classification_refs | CPC 3.0 31211; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Solid untreated coniferous continuously profiled strips/friezes/beadings/mouldings, unassembled, made from kiln-dried sawn stock |
| excluded_products | Plain sawn/surfaced stock; non-coniferous/bamboo; glued/laminated/finger-jointed products; panels; coating/preservation; assembled floors or doors/windows |
| representative_product | Net accepted uncoated solid coniferous longitudinal profile at declared dispatch moisture |
| production_route | Kiln-dried sawn stock → conditional reconditioning → cutting/profiling and dust separation → grading → packing; on-site steam heat conditional |
| market_state | Unassembled dry solid profile, geometry/grade/moisture specified; packaging excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unassembled continuously profiled untreated solid coniferous wood for further manufacture or installation |
| How much | 1 kg net accepted finished profile at manufacturing gate excluding packaging |
| How well | Declared species, continuous edge/face geometry, actual section/length, grade and dry-basis dispatch moisture; no assumed certified construction performance |
| How long or cycle | One production-and-release accounting period; no use-stage service life |
| reference_flow_link | `finished_profile` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood, continuously shaped along any of its edges or faces (including strips and friezes for parquet flooring, not assembled, and beadings and mouldings) of coniferous wood `ff81f231-e5cb-4744-8c0f-a7cb5ec4f8bd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical species/mix; continuous profile drawing and edge/face machining; measured net cross-section, length and tolerances; grade/reject criteria; kiln-dried untreated unglued uncoated stock; dispatch dry-basis moisture and method; net accepted wet wood mass excluding packaging; actual solid volume/density basis if converted; upstream starting gate and included drying; conditional reconditioning/steam route; site and period |

The database reference names the broader classification product. It supplies identity only; the required qualifiers constrain this narrower method. Declare every qualifier in dataset metadata, process notes or reference-product description; missing qualifiers leave the reference definition incomplete. No default moisture/density/energy value is supplied.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net accepted finished wet wood mass at measured dispatch moisture from cp_reference; Q excludes packaging, rejects and upstream residues. |
| `moisture_basis` | wood and residue | Dry-basis moisture fraction | dimensionless; % explicitly converted | Apply calc_moisture with paired wet/oven-dry measurements. Dispatch wet kg and oven-dry balance kg are distinct. No generic target moisture. [usda-wood-handbook-2021 Ch.4/13.] |
| `volume_basis` | volume-reported stock/profile/residue | Measured solid volume and matched density | m3; kg/m3 | Apply calc_volume using net actual section and measured density at the same species/moisture state. Basic density, dry density, wet density and loose bulk density are different; no universal density. |
| `carrier_basis` | electricity, steam and individual fuel | Verified carrier reference property | MJ; kg; m3 | Use calc_energy. Retain the verified electricity energy property. Fuel HHV, boiler total generated heat and receiver-net steam heat are different quantities; a Gross calorific value property or a common MJ unit does not establish a conversion. For receiver-net steam heat, require the declared control volume, condensate return/reference enthalpy and distribution-loss boundary to match the supplier and background heat dataset. Follow steam_heat_basis; leave steam heat identity unresolved while compatibility is unproved. Gaseous natural gas has Volume/m3 reference: preserve metered reference conditions and measured density for mass/carbon conversion, without using the database secondary mass coefficient as a universal gas density. |
| `steam_heat_basis` | purchased_steam; internal_steam_in; internal_steam_out | Net useful steam heat at the declared profiling receiver | MJ | Define the receiver control volume, steam state, enthalpy datum, returned condensate state/routing and reference enthalpy for any nonreturned mass. Retain supplier delivery/meter specifications, the matched background dataset reference-exchange documentation and the measured receiver steam/condensate balance. Confirm identical quantity boundaries and condensate references, or derive a documented mass/enthalpy/loss conversion with actual measurements and source conditions. Internal steam ends use the same validated receiver quantity. If any reference or conversion is unknown, keep the precise row with no selected UUID and report an unresolved heat-basis condition; no same-MJ or property-label assumption resolves it. |
| nox_quantity_basis | handling_nox; boiler_nox | Mass; verified quantity convention | kg | Before calculation, document the actual measured or factor-derived NOx quantity convention, chemical/species scope, concentration and gas-state basis and its independently verified relation to the selected LCI flow and assessment method. Native Mass/kg does not establish an NO2-equivalent convention. Keep actual NO/NO2 species quantities and documented conversion/speciation evidence when an equivalent basis is used; no universal conversion or assumed split. Reconcile any aggregate with separately modelled NO/NO2 and keep N2O separately, without counting the same release twice. Missing convention/speciation or LCI/assessment compatibility leaves the raw result and its normalized exchange pending review; never silently label a mass as NO2-equivalent or invent zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered kiln-dried untreated unglued uncoated coniferous sawn stock, rough or straight-planed; actual species/moisture declared |
| starting_condition_role | Foreground profiling gate-to-gate with stock production upstream |
| product_classification_scope | Continuous edge/face profile of solid coniferous wood, unassembled; CPC31211 context narrower |
| recursive_input_rule | Purchased same-category pre-profiled wood cannot silently substitute for sawn stock; any remanufacturing route requires explicit boundary adaptation, supplier gate and inherited burdens once |
| upstream_dataset_requirement | Compatible forestry/harvest, sawing/primary drying and stock delivery; electricity, external steam heat, fuels, auxiliaries and treatment providers. Verify species/moisture, geography/period, allocation/carbon conventions and stage inclusions |
| disclosure | Starting gate, integrated versus purchased stock, drying already included versus later reconditioning, heat route, internal links, product state, stage exclusions and unresolved data/identity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | profile production | Include receiving/stock handling, conditional reconditioning, rip/crosscut operations, continuous profiling, dust extraction/conveyance, grading and separate dispatch packaging. This PCR starts with already kiln-dried sawn stock; no sawing-log yield or upstream drying energy is inferred here. | `usda-wood-handbook-2021`; `corrim-northern-lumber-2025` |
| `boundary_upstream` | supplier and integrated route | Purchased stock carries compatible upstream forestry, sawing, primary drying and delivery burdens once. In an integrated mill, use a separately evidenced upstream sawn-stock module with an identical kiln-dried handoff quantity/state; remove any purchased-stock dataset burden for that same internal flow. Shared drying, heat and handling meters are assigned once to their actual stage. A supplier dataset including profiling is not untreated sawn-stock input. | `corrim-northern-lumber-2025` |
| `boundary_heat` | thermal routes | External steam heat uses a provider dataset only after its heat-quantity boundary, distribution-loss inclusions and condensate reference have been verified against steam_heat_basis; provider combustion is upstream. On-site steam generation records actual individual fuels, ash, water and direct emissions in heat. Match internal heat at the same receiver, and do not add a purchased-heat production dataset to internal_steam_in. Hot-air firing, non-steam heat, purchased green stock and preservative/glue/coating routes require a separately evidenced extension before use. | `epa-wood-boiler-2022`; `usda-wood-handbook-2021` |
| `boundary_emissions` | air and waste | Screen all actual discharge points and control devices. Captured dust and separated shavings/sawdust are physical material streams; only escaping matter is an elementary air emission. PM rows are outdoor-air unspecified identity, not a claim that all exhaust has that site subcompartment. Where a different receiving compartment is required, verify another identity. Add other actual chemicals, packaging, water inputs, wastes and emissions as separate atomic rows before dataset release; absence requires evidence, not omission. | `epa-sawmill-pte-2014`; `epa-wood-boiler-2022`; `corrim-northern-lumber-2025` |
| `boundary_carbon` | wood carbon | Retain biogenic CO2, CO and CH4 in LCI, with fossil fuel carbon separate. Product, sold residue, internal fuel, waste, ash carbon and stock changes form a carbon ledger; the same carbon is never sold, discarded and combusted simultaneously. Forestry uptake belongs upstream once, not a negative profiling emission. Product carbon at the gate is a material content disclosure, not a substitution or permanent-storage credit. Statistical omission of short-cycle CO2 does not delete the physical LCI flow. | `epa-wood-boiler-2022`; `corrim-northern-lumber-2025` |
| `boundary_excluded` | downstream and infrastructure | Exclude flooring assembly, joinery assembly, installation, building use, maintenance, end-of-life and substitution credits from this manufacturing gate. Declare infrastructure/capital and worker-activity treatment with a significance assessment; omitted stages are not proven zero. Gate-to-gate foreground alone is not a cradle-to-gate result. | `corrim-northern-lumber-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `profiling` | Stock reconditioning, continuous profiling and dispatch with stage metering | required | Kiln-dried stock; reconditioning only when actual | Continuous cross-section formation and residue/dust separation | `finished_profile` |
| `heat` | On-site wood-residue steam heat | conditional | Only on-site steam boiler; external heat excludes provider from foreground | Internal useful heat; individual fuels and emissions | `internal_steam_out` |

The cards describe the unallocated physical graph, all per 1 kg reference flow using same-cohort net final wood Q kg. Retain raw cohort totals, stock changes, moisture, solid geometry, water and carbon before a separate allocation of environmental burdens. The two ends of each internal residue-fuel and steam link are equal in amount/state/period. Internal exchanges carry no duplicate purchased production burden. The terminal output remains 1 kg, and coproduct physical outputs are not multiplied by burden shares. Profiling, grading and packing are one foreground unit with separate stage energy and material records; no redundant internal final-product exchange is created. Actual rejected wood is classified with its physically matching residue row; other packaging scrap or rework flows require explicit additional atomic rows before release. No measured factory quantity or empirical range is asserted here. Each conditional row is measured if present; demonstrated absence may be recorded as not_applicable in the concrete dataset, while unknown remains a gap.

### Process: Stock reconditioning, continuous profiling and dispatch with stage metering(`profiling`)

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill(`sawn_stock`)

Required kiln-dried, untreated, unglued rough or straight-planed stock. Supplier gate includes drying; record any later reconditioning separately.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted stock wet mass, corrected for opening/closing inventory and returns, divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`

###### Alternating current(`profile_electricity`)

Include profiling cutters, crosscutting, dust extraction, compressed-air system, conveyors and conditional reconditioning fans, each separately metered or reconciled.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity in MJ divided by Q; sum unique meter intervals once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `corrim-northern-lumber-2025`

###### Purchased process heat from steam(`purchased_steam`)

Only steam heat delivered from an external provider for actual reconditioning.

Apply only after steam_heat_basis confirms the receiver quantity, condensate reference and matched supplier/background heat basis. If that confirmation is unavailable, retain this atomic row without a UUID and report the unresolved measurement/identity condition.

- Selected flow: Net useful process heat delivered as steam at the profiling receiver
- Flow property / unit: Energy / MJ
- Amount rule: Receiver-net useful steam heat on the documented steam_heat_basis, in MJ, divided by Q; quantity/baseline compatibility must be established before any heat identity or supplier burden is linked.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `usda-wood-handbook-2021`; `epa-wood-boiler-2022`

###### Internal process heat from steam(`internal_steam_in`)

Only steam heat from the heat unit. Match internal_steam_out at the same handoff; exclude from purchased heat.

Apply only after steam_heat_basis confirms the receiver quantity, condensate reference and matched supplier/background heat basis. If that confirmation is unavailable, retain this atomic row without a UUID and report the unresolved measurement/identity condition.

- Selected flow: Net useful process heat delivered as steam at the profiling receiver
- Flow property / unit: Energy / MJ
- Amount rule: Receiver-net useful steam heat on the documented steam_heat_basis, in MJ, divided by Q; quantity/baseline compatibility must be established before any heat identity or supplier burden is linked.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `usda-wood-handbook-2021`; `epa-wood-boiler-2022`

###### Diesel fuel(`handling_diesel`)

Only diesel handling equipment; electric handling belongs to electricity.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured consumed fuel mass divided by Q; subtract stock movements and refuelling transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources: `corrim-northern-lumber-2025`

###### Mineral lubricating oil for profiling machinery(`machine_oil`)

Only mineral lubricating oil actually consumed by profiling and dust-extraction machinery, not an oil treatment of wood. Record the actual supplied grade, mineral-base and additive composition, delivered mass/reference basis and compatible supplier manufacture. A fully synthetic PAO-only identity does not identify mineral-base oil. Retain this specific mineral-lubricant exchange with UUID absent until the actual supplied-product identity and provider basis are verified.

- Selected flow: Mineral lubricating oil for profiling machinery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net measured oil consumption divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aux`
- Sources: `corrim-northern-lumber-2025`

###### Polyethylene film(`packing_film`)

Only actual polyethylene dispatch film; declare polymer grade/recycled content and supplier scope.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net film consumption divided by Q, excluding usable returned film.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aux`
- Sources: `corrim-northern-lumber-2025`

###### Polypropylene packaging strap(`packing_strap`)

Only actual polypropylene packaging strap.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Measured strap mass divided by Q; count-to-mass needs actual sampled strap weight.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aux`
- Sources: `corrim-northern-lumber-2025`

###### Alternating current(`packing_electricity`)

Only packing line and handling electricity; exclude meter overlap with profiling.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered MJ divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `corrim-northern-lumber-2025`

#### Outputs

##### Product flows

###### Clean coniferous wood planer shavings(`shavings_sold`)

Only physically segregated material actually sold as a coproduct, with its own moisture and recipient.

- Selected flow: Clean coniferous wood planer shavings
- Flow property / unit: Mass / kg
- Amount rule: Unallocated dispatched wet mass divided by Q; separately retain oven-dry mass for balance and allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`

###### Clean coniferous wood sawing dust(`sawdust_sold`)

Only physically segregated material actually sold as a coproduct, with its own moisture and recipient.

- Selected flow: Clean coniferous wood sawing dust
- Flow property / unit: Mass / kg
- Amount rule: Unallocated dispatched wet mass divided by Q; separately retain oven-dry mass for balance and allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`

###### Clean coniferous solid wood offcuts(`offcuts_sold`)

Only physically segregated material actually sold as a coproduct, with its own moisture and recipient.

- Selected flow: Clean coniferous solid wood offcuts
- Flow property / unit: Mass / kg
- Amount rule: Unallocated dispatched wet mass divided by Q; separately retain oven-dry mass for balance and allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`

###### Clean coniferous wood planer shavings(`shavings_fuel_out`)

Only own residue routed internally to heat; not simultaneously sold or discarded.

- Selected flow: Clean coniferous wood planer shavings
- Flow property / unit: Mass / kg
- Amount rule: Transferred wet mass divided by Q; match shavings_fuel_in at identical moisture and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`; `epa-wood-boiler-2022`

###### Clean coniferous wood sawing dust(`sawdust_fuel_out`)

Only own residue routed internally to heat; not simultaneously sold or discarded.

- Selected flow: Clean coniferous wood sawing dust
- Flow property / unit: Mass / kg
- Amount rule: Transferred wet mass divided by Q; match sawdust_fuel_in at identical moisture and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`; `epa-wood-boiler-2022`

###### Continuously shaped coniferous wood(`finished_profile`)

Required accepted final net wood; unglued, uncoated, unimpregnated, unassembled and kiln-dried stock route.

- Selected flow: Wood, continuously shaped along any of its edges or faces (including strips and friezes for parquet flooring, not assembled, and beadings and mouldings) of coniferous wood `ff81f231-e5cb-4744-8c0f-a7cb5ec4f8bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Sources: `usda-wood-handbook-2021`

##### Waste flows

###### Sawdust waste(`captured_dust`)

Only residue transferred for waste treatment; captured dust is not an air emission or automatically a saleable coproduct.

This selected untreated sawdust-waste identity is restricted to a documented compatible external combustion or material-recovery receiver and matching untreated waste state. Retain whole measured waste mass, moisture/composition, actual receiver and treatment/provider boundary. Other or unverified routes and treated/contaminated material require a separately verified compatible identity or a precise UUID gap; preserve every actual physical waste exchange without assumed treatment, internal-fuel substitution or recovery credit.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured dispatched waste wet mass divided by Q; record destination and moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`; `epa-sawmill-pte-2014`

###### Discarded coniferous wood planer shavings(`waste_shavings`)

Only residue transferred for waste treatment; captured dust is not an air emission or automatically a saleable coproduct.

- Selected flow: Discarded coniferous wood planer shavings
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched waste wet mass divided by Q; record destination and moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`; `epa-sawmill-pte-2014`

###### Wood offcut waste(`waste_offcut`)

Only residue transferred for waste treatment; captured dust is not an air emission or automatically a saleable coproduct.

Only actual non-agglomerated, untreated and unglued coarse wood offcuts belong to this row; keep moisture and recipient records, and verify their physical state and receiver/provider compatibility before treatment linkage. Do not substitute agglomerated fuel or captured powder.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured dispatched waste wet mass divided by Q; record destination and moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`; `epa-sawmill-pte-2014`

###### Used lubricating oil(`used_oil`)

Only collected spent mineral machine oil sent for treatment.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste oil mass divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aux`
- Sources: `corrim-northern-lumber-2025`

##### Elementary flows

###### particles (PM2.5)(`profile_pm25`)

Screen profiling, crosscutting, dust conveying and handling discharge; use mutually exclusive filterable size bins. Compartment: outdoor air, unspecified.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (PM2.5 - PM10)(`profile_pmcoarse`)

Screen profiling, crosscutting, dust conveying and handling discharge; use mutually exclusive filterable size bins. Compartment: outdoor air, unspecified.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### particles (> PM10)(`profile_pmover10`)

Screen profiling, crosscutting, dust conveying and handling discharge; use mutually exclusive filterable size bins. Compartment: outdoor air, unspecified.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `epa-sawmill-pte-2014`; `corrim-northern-lumber-2025`

###### water vapour(`drying_water_vapour`)

Only actual moisture loss during reconditioning; close water balance including humidification. Compartment: outdoor air, unspecified.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### formaldehyde(`profile_formaldehyde`)

Screen wood reconditioning and profiling; retain only site-identified substance-specific emissions. VOC totals must not also count these same species. Compartment: outdoor air, unspecified.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### methanol(`profile_methanol`)

Screen wood reconditioning and profiling; retain only site-identified substance-specific emissions. VOC totals must not also count these same species. Compartment: outdoor air, unspecified.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### acetaldehyde(`profile_acetaldehyde`)

Screen wood reconditioning and profiling; retain only site-identified substance-specific emissions. VOC totals must not also count these same species. Compartment: outdoor air, unspecified.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### phenol(`profile_phenol`)

Screen wood reconditioning and profiling; retain only site-identified substance-specific emissions. VOC totals must not also count these same species. Compartment: outdoor air, unspecified.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### propanal(`profile_propanal`)

Screen wood reconditioning and profiling; retain only site-identified substance-specific emissions. VOC totals must not also count these same species. Compartment: outdoor air, unspecified.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### acrolein(`profile_acrolein`)

Screen wood reconditioning and profiling; retain only site-identified substance-specific emissions. VOC totals must not also count these same species. Compartment: outdoor air, unspecified.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### pin-2(3)-ene(`profile_alpha_pinene`)

Screen wood reconditioning and profiling; retain only site-identified substance-specific emissions. VOC totals must not also count these same species. Compartment: outdoor air, unspecified.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### carbon dioxide (fossil)(`handling_co2_fossil`)

Only fossil diesel combustion in foreground handling; verify equipment, fuel and exhaust evidence, with a source-specific method before values are released. Compartment: outdoor air, unspecified.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### carbon monoxide (fossil)(`handling_co_fossil`)

Only fossil diesel combustion in foreground handling; verify equipment, fuel and exhaust evidence, with a source-specific method before values are released. Compartment: outdoor air, unspecified.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### methane (fossil)(`handling_ch4_fossil`)

Only fossil diesel combustion in foreground handling; verify equipment, fuel and exhaust evidence, with a source-specific method before values are released. Compartment: outdoor air, unspecified.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### nitrous oxide(`handling_n2o`)

Only fossil diesel combustion in foreground handling; verify equipment, fuel and exhaust evidence, with a source-specific method before values are released. Compartment: outdoor air, unspecified.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### Nitrogen oxides(`handling_nox`)

Only fossil diesel combustion in foreground handling; verify equipment, fuel and exhaust evidence, with a source-specific method before values are released. Compartment: outdoor air, unspecified.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

###### sulfur dioxide(`handling_so2`)

Only fossil diesel combustion in foreground handling; verify equipment, fuel and exhaust evidence, with a source-specific method before values are released. Compartment: outdoor air, unspecified.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `corrim-northern-lumber-2025`

### Process: On-site wood-residue steam heat(`heat`)

#### Inputs

##### Product flows

###### Clean coniferous wood planer shavings(`shavings_fuel_in`)

Only wood-residue steam boiler route; internal supply matched to shavings_fuel_out; purchased residue separately identified.

- Selected flow: Clean coniferous wood planer shavings
- Flow property / unit: Mass / kg
- Amount rule: Actual consumed wet mass divided by Q, with moisture, dry mass and measured heating value; internal two ends identical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_heat`
- Sources: `usda-wood-handbook-2021`; `epa-wood-boiler-2022`

###### Clean coniferous wood sawing dust(`sawdust_fuel_in`)

Only wood-residue steam boiler route; internal supply matched to sawdust_fuel_out; purchased residue separately identified.

- Selected flow: Clean coniferous wood sawing dust
- Flow property / unit: Mass / kg
- Amount rule: Actual consumed wet mass divided by Q, with moisture, dry mass and measured heating value; internal two ends identical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_heat`
- Sources: `usda-wood-handbook-2021`; `epa-wood-boiler-2022`

###### Natural gas in the gaseous state(`boiler_gas`)

Only fossil gaseous natural gas used for boiler ignition/cofiring; no liquefied or biogenic substitution. Record pipeline delivery at consumption gate, reference temperature/pressure and actual composition; upstream gas production is a separate compatible provider dataset.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual metered m3 at declared reference conditions divided by Q; for mass/carbon calculations use measured density and fuel composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_heat`
- Sources: `epa-wood-boiler-2022`

###### Water, tap(`boiler_water`)

Only tap-water boiler makeup; recovered condensate is separately reconciled internal water, not new withdrawal.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net tap-water mass divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_heat`
- Sources: `epa-wood-boiler-2022`

###### Alternating current(`boiler_electricity`)

Only boiler pumps, fans and controls, separately metered.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered MJ divided by Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_heat`
- Sources: `epa-wood-boiler-2022`

#### Outputs

##### Product flows

###### Internal process heat from steam(`internal_steam_out`)

Only useful steam heat at the same profiling receiver; no steam sold externally in this declared route.

Apply only after steam_heat_basis confirms the receiver quantity, condensate reference and matched supplier/background heat basis. If that confirmation is unavailable, retain this atomic row without a UUID and report the unresolved measurement/identity condition.

- Selected flow: Net useful process heat delivered as steam at the profiling receiver
- Flow property / unit: Energy / MJ
- Amount rule: Receiver-net useful MJ on the documented steam_heat_basis divided by Q, identical to internal_steam_in; separately reconcile generated heat, distribution losses and condensate. Identity/baseline compatibility remains unresolved until verified.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_heat`
- Sources: `epa-wood-boiler-2022`

##### Waste flows

###### Wood-residue boiler bottom ash(`bottom_ash`)

Only the identified boiler residue transferred for treatment; no coal ash or generic effluent substitution.

- Selected flow: Wood-residue boiler bottom ash
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched mass divided by Q; identify residual carbon or effluent composition and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_heat`
- Sources: `epa-wood-boiler-2022`

###### Captured wood-residue boiler fly ash(`fly_ash`)

Only the identified boiler residue transferred for treatment; no coal ash or generic effluent substitution.

- Selected flow: Captured wood-residue boiler fly ash
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched mass divided by Q; identify residual carbon or effluent composition and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_heat`
- Sources: `epa-wood-boiler-2022`

###### Wood-residue steam-boiler blowdown wastewater(`blowdown`)

Only the identified boiler residue transferred for treatment; no coal ash or generic effluent substitution.

- Selected flow: Wood-residue steam-boiler blowdown wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched mass divided by Q; identify residual carbon or effluent composition and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_heat`
- Sources: `epa-wood-boiler-2022`

##### Elementary flows

###### carbon dioxide (biogenic)(`boiler_co2_bio`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### carbon monoxide (biogenic)(`boiler_co_bio`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### methane (biogenic)(`boiler_ch4_bio`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### carbon dioxide (fossil)(`boiler_co2_fossil`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### carbon monoxide (fossil)(`boiler_co_fossil`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### methane (fossil)(`boiler_ch4_fossil`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### nitrous oxide(`boiler_n2o`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### Nitrogen oxides(`boiler_nox`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### sulfur dioxide(`boiler_so2`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### particles (PM2.5)(`boiler_pm25`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### particles (PM2.5 - PM10)(`boiler_pm_between`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### particles (> PM10)(`boiler_pm_coarse`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### formaldehyde(`boiler_formaldehyde`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

###### methanol(`boiler_methanol`)

Only the actual boiler route; distinguish wood carbon from fossil ignition fuel, screen species, and use size-resolved filterable PM after controls. Compartment: outdoor air, unspecified.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted mass after controls, measured or calculated with separately justified source-specific method, divided by Q; retain size-bin and origin-specific carbon reconciliation as required in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_heat`
- Sources: `epa-wood-boiler-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_ledger` | physical graph and burden account | First close unallocated dry-wood, water and carbon balances and equal internal links. Every physical row below is cohort amount divided by Q kg of net accepted final wood, without burden allocation. Keep a separate product-specific environmental-burden ledger; do not multiply sold-residue physical outputs, terminal 1 kg output or internal links by an allocation share. | `corrim-northern-lumber-2025`; `usda-wood-handbook-2021` |
| `allocation_separation` | joint wood outputs | Prefer measured process subdivision. Assign dedicated profiling/reconditioning energy to its actual process/product cohort; isolate upstream sawing allocation. Uncontaminated shavings, sawing dust or offcuts actually sold with recipient/specification evidence may be coproducts; non-saleable collected residue is waste, and internally burned residue remains an internal fuel stream. Record origin, status and destination separately; no substitution credit within this dataset. | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |
| `allocation_shared` | remaining joint burdens | Where subdivision cannot separate actual joint wood-processing burdens, use measured oven-dry mass shares only for comparable solid-wood coproducts at the actual split with a documented physical causal relationship between dry wood mass and the shared process burdens: a_j=m_dry,j/sum(m_dry,j) over eligible reference wood and actual sold wood coproducts, not wet mass, discarded waste, internal fuel or water. Document joint-step boundaries and an economic sensitivity using same-period net prices if the ranking changes. Dedicated residue handling/disposal and on-site boiler burdens are assigned to their actual recipient/service; internally generated fuel is not added as a coproduct denominator and again charged with a duplicate purchased production burden. Do not apply dry-mass allocation when output composition, product state or processing function makes the wood outputs physically incomparable, or when the causal relationship is unsubstantiated; retain the unresolved allocation need and establish a justified method before dataset release. | `corrim-northern-lumber-2025` |
| `allocation_shared_heat` | shared boiler or site service | Assign heat-service burdens using measured useful MJ delivered to each receiver, including a justified assignment of generation/distribution losses. Retain physical fuel and steam totals and receiver shares separately. A boiler supplying other products needs all recipients and meters; no unexplained whole-boiler charge to this product. Electricity, compressed air and shared handling use measured causal service drivers with reconciliation, not an arbitrary fraction. | `epa-wood-boiler-2022`; `corrim-northern-lumber-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | profiling | accepted net reference | weighing and specification record | cohort; species; lot; profile drawing; actual section/length; grade; moisture samples; accepted net wood kg Q; opening/closing/returned profile inventory; packaging tare | Calibrated net weighing and acceptance inspection; oven-dry moisture checks or species/temperature calibrated moisture meter with oven-dry validation; profile dimensions from actual section drawing and measurements; Preparation before aggregation: Q=sum accepted final net wood kg; exclude packaging and rejected wood; inventory-adjust accepted final totals before division by Q | kg; m; m2; moisture fraction | each lot and release | Complete declared accounting period and representative lots for the same profile/species cohort | Selected site and profile cohort; separate moisture/grade states | per 1 kg reference flow | scale calibration; drawings; grade acceptance; sampling/oven log; inventory bridge |
| `cp_stock` | profiling | sawn stock | receipt and inventory record | supplier gate; species; untreated/kiln-dried state; stock kg; moisture; solid volume/density if converted; opening/closing inventory; returns; supplier upstream dataset | Weigh receipts and stocks; sample moisture by lot; document supplier stages and integrated-mill handoff rather than assume upstream processing; Preparation before aggregation: q_stock=receipts+opening-closing-returns, trace attribution to cohort; x_stock=q_stock/Q; keep absolute dry stock mass | kg; moisture fraction; m3 | each delivery and period endpoints | Same accounting period and production cohort as cp_reference | Supplier gates and selected foreground site | per 1 kg reference flow | weigh tickets; supplier declaration; moisture sampling; module boundary audit |
| `cp_energy` | profiling | electricity | meter and service record | meter id; start/end reading; kWh; time; equipment/stage; compressed air driver; production cohort; shared-service recipient totals; actual owner profiling; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Submeter actual stage equipment; reconcile site meter, load logs and measured shared-service drivers; no duplicated meter intervals; Preparation before aggregation: q_energy=unique metered kWh×3.6, attribute by measured service; x_energy=q_energy/Q Collect only actual profiling stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kWh; MJ | meter intervals and cohort shifts | Complete same production accounting period | Stage equipment and all shared-service recipients | per 1 kg reference flow | meter calibration; reconciliation; service allocation record |
| `cp_energy_heat` | heat | electricity | meter and service record | meter id; start/end reading; kWh; time; equipment/stage; compressed air driver; production cohort; shared-service recipient totals; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Submeter actual stage equipment; reconcile site meter, load logs and measured shared-service drivers; no duplicated meter intervals; Preparation before aggregation: q_energy=unique metered kWh×3.6, attribute by measured service; x_energy=q_energy/Q Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kWh; MJ | meter intervals and cohort shifts | Complete same production accounting period | Stage equipment and all shared-service recipients | per 1 kg reference flow | meter calibration; reconciliation; service allocation record |
| `cp_residue` | profiling | segregated wood residue | weighing and destination record | shavings/dust/offcut form; point of generation; wet kg; moisture; dry kg; sold/waste/internal status; receiver; invoice; opening/closing stock; internal transfer id | Separate and weigh each form at collection/dispatch; sample moisture and record dust-control capture versus emissions, with recipient/treatment documentation; Preparation before aggregation: Sum unique amounts by form and status, adjust stocks, x_i=q_i/Q; compute dry kg separately; internal fuel handoff equals cp_fuel_heat receipt | kg; moisture fraction | each batch dispatch and stocktake | Same accounting period as Q, including inventory change | Each residue point and destination at the selected site | per 1 kg reference flow | segregation plan; weighing; moisture; sales/treatment documents; internal link audit |
| `cp_fuel` | profiling | diesel, wood fuel and gas as separate fields | fuel consumption record | individual fuel; origin; consumed kg or m3; temperature/pressure; moisture; density; LHV/HHV; C/S composition; internal residue id; start/end stock; equipment; period; actual owner profiling; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh wood/diesel consumption or reconcile tank records; meter gaseous natural gas at stated conditions; use actual supplier/test density, calorific value and composition; reconcile internal residue without a purchased upstream burden; Preparation before aggregation: q_fuel=net consumed quantity by fuel and source; x_fuel=q_fuel/Q in its declared unit; internal wood fuel equals cp_residue transfer; measured conversions only Collect only actual profiling stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3; MJ/kg; moisture fraction | each fuel delivery, operating interval and stocktake | Complete same-period production, including ignition/startup/shutdown | Each actual diesel equipment and steam boiler separately | per 1 kg reference flow | fuel meter/tank/scale calibration; supplier assay; heating-value/moisture test; stock bridge |
| `cp_fuel_heat` | heat | diesel, wood fuel and gas as separate fields | fuel consumption record | individual fuel; origin; consumed kg or m3; temperature/pressure; moisture; density; LHV/HHV; C/S composition; internal residue id; start/end stock; equipment; period; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Weigh wood/diesel consumption or reconcile tank records; meter gaseous natural gas at stated conditions; use actual supplier/test density, calorific value and composition; reconcile internal residue without a purchased upstream burden; Preparation before aggregation: q_fuel=net consumed quantity by fuel and source; x_fuel=q_fuel/Q in its declared unit; internal wood fuel equals cp_residue transfer; measured conversions only Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; m3; MJ/kg; moisture fraction | each fuel delivery, operating interval and stocktake | Complete same-period production, including ignition/startup/shutdown | Each actual diesel equipment and steam boiler separately | per 1 kg reference flow | fuel meter/tank/scale calibration; supplier assay; heating-value/moisture test; stock bridge |
| `cp_heat` | profiling | steam heat, makeup water and boiler wastes | heat and boiler balance record | purchased/internal status; steam mass; pressure/temperature/enthalpy; returned condensate mass/enthalpy; receiver MJ; generated MJ; losses; tap-water kg; water vapor; bottom/fly ash kg and carbon; blowdown kg/composition; receiver totals; actual owner profiling; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Meter steam and condensate at the same receiver; document steam_heat_basis and supplier/background heat reference-exchange compatibility, including loss inclusions, enthalpy datum and nonreturned-condensate reference; calculate useful heat only from a verified receiver enthalpy balance; weigh water and wastes or meter with verified density; identify all boiler recipients, controls and treatment destinations; Preparation before aggregation: q_steam=useful receiver MJ; x_steam=q_steam/Q; both internal ends equal; water/wastes separately sum physical kg/Q and preserve complete mass-water-carbon ledger Collect only actual profiling stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ; kg; kJ/kg | operating interval, batch waste dispatch and stocktake | Same full period as Q, including heat losses | Steam receiver and on-site heat unit; external provider gate disclosed | per 1 kg reference flow | steam/condensate meter calibration; supplier meter/delivery definition; background heat reference-exchange definition; enthalpy-datum and condensate/loss compatibility record or explicit unresolved finding; water balance; ash analysis; treatment receipts |
| `cp_heat_heat` | heat | steam heat, makeup water and boiler wastes | heat and boiler balance record | purchased/internal status; steam mass; pressure/temperature/enthalpy; returned condensate mass/enthalpy; receiver MJ; generated MJ; losses; tap-water kg; water vapor; bottom/fly ash kg and carbon; blowdown kg/composition; receiver totals; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Meter steam and condensate at the same receiver; document steam_heat_basis and supplier/background heat reference-exchange compatibility, including loss inclusions, enthalpy datum and nonreturned-condensate reference; calculate useful heat only from a verified receiver enthalpy balance; weigh water and wastes or meter with verified density; identify all boiler recipients, controls and treatment destinations; Preparation before aggregation: q_steam=useful receiver MJ; x_steam=q_steam/Q; both internal ends equal; water/wastes separately sum physical kg/Q and preserve complete mass-water-carbon ledger Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | MJ; kg; kJ/kg | operating interval, batch waste dispatch and stocktake | Same full period as Q, including heat losses | Steam receiver and on-site heat unit; external provider gate disclosed | per 1 kg reference flow | steam/condensate meter calibration; supplier meter/delivery definition; background heat reference-exchange definition; enthalpy-datum and condensate/loss compatibility record or explicit unresolved finding; water balance; ash analysis; treatment receipts |
| `cp_aux` | profiling | oil, spent oil, film and strap in separate fields | consumable and waste record | material/formulation; consumed kg; opening/closing inventory; returned material; oil spent kg; film/strap specification; counted units and sampled mass if converted; recipient; supplier scope | Weigh each material and waste independently, reconcile inventories/invoices; sample mass for any count conversion; record actual composition, grade, recycled content and destination; Preparation before aggregation: q_i=consumed material or independently dispatched waste adjusted for stock; x_i=q_i/Q; do not infer oil waste equals oil consumption | kg | each lot, dispatch and stocktake | Same accounting period as accepted Q | Selected profiling/packing equipment and suppliers | per 1 kg reference flow | weighing; material specification/SDS; supplier and treatment records |
| `cp_emission` | profiling | each individual substance and exclusive size bin | measurement and calculation record | source point; operating hours; species; medium; fuel origin; sampling method; concentration; dry/standard gas flow; control capture; filterable/condensable status; PM/PM10/PM2.5 observations; raw factor basis if justified; carbon test; uncertainty; detection limit; actual owner profiling; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Measure actual post-control stacks/fugitive emissions over representative operation including starts/stops; otherwise document a source-specific validated calculation with original factor conditions, units, applicability and control basis. Distinguish captured material, individual VOC species and nested particle measurements; Preparation before aggregation: q_species=sum compatible concentration×gas-volume intervals plus justified fugitive estimates; apply particle differences and carbon reconciliation; x_i=q_i/Q; unknown is a gap, not zero Collect only actual profiling stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; mg/m3; m3/h; h | representative testing plus continuous activity logs | Same accounting period as Q with justified test coverage | Every actual emitting source at selected site, kept separate by process | per 1 kg reference flow | original test reports; factor originals if used; control/fuel logs; uncertainty/detection limits; compartment and double-count audit |
| `cp_emission_heat` | heat | each individual substance and exclusive size bin | measurement and calculation record | source point; operating hours; species; medium; fuel origin; sampling method; concentration; dry/standard gas flow; control capture; filterable/condensable status; PM/PM10/PM2.5 observations; raw factor basis if justified; carbon test; uncertainty; detection limit; actual owner heat; raw_record_id; shared_meter_id; boundary/internal status; matched transfer id | Measure actual post-control stacks/fugitive emissions over representative operation including starts/stops; otherwise document a source-specific validated calculation with original factor conditions, units, applicability and control basis. Distinguish captured material, individual VOC species and nested particle measurements; Preparation before aggregation: q_species=sum compatible concentration×gas-volume intervals plus justified fugitive estimates; apply particle differences and carbon reconciliation; x_i=q_i/Q; unknown is a gap, not zero Collect only actual heat stage records; retain the original fields and QA only where physically applicable to that stage. A shared master meter or source record is a reconciliation witness, not an extra exchange: retain each attributable external raw record once across companion protocols using measured stage/service attribution, with fractions reconciled to the master total. Keep internal sending/receiving records separately with equal state, period and quantity; do not add either endpoint as another external purchase or emission. All companions use the same complete accepted-output reporting pool, retaining failed/rework activity and raw native units. | kg; mg/m3; m3/h; h | representative testing plus continuous activity logs | Same accounting period as Q with justified test coverage | Every actual emitting source at selected site, kept separate by process | per 1 kg reference flow | original test reports; factor originals if used; control/fuel logs; uncertainty/detection limits; compartment and double-count audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference` | all physical exchanges | x_i=q_i/Q; Q is accepted final net wood kg excluding packaging for one common accounting cohort. Reference output Q/Q=1 kg. Sum and inventory-adjust q_i before dividing; normalization is not allocation. | q_i; Q; cp_reference; linked row protocol | x_i per 1 kg reference flow |  |
| `calc_moisture` | wood at each measured state | u=(m_wet-m_dry)/m_dry; w=u/(1+u); m_dry=m_wet/(1+u); m_water=m_wet-m_dry. u and w are fractions; divide percentages by 100. Require m_dry>0, u≥0, 0≤w<1. | cp_reference; cp_stock; cp_residue; cp_fuel; cp_fuel_heat | dry mass and water kg, distinct from wet reference kg | `usda-wood-handbook-2021` |
| `calc_volume` | actual profile and wood volume | V_u=sum(A_net,k×L_k) from actual continuous solid cross-sections excluding voids; m_wet=rho_u×V_u with measured species/moisture-specific density at the same state. Variable sections need a measured integration. Do not use rectangular envelope, nominal size, installed floor area or loose shavings volume as solid V_u. | actual A_net and L; measured rho_u; cp_reference; cp_stock | V_u m3; compatible m_wet kg | `usda-wood-handbook-2021` |
| `calc_energy` | individual carriers | E_MJ=E_kWh×3.6. For a verified equal-mass steam/returned-condensate circuit at the declared receiver, H=M_steam×(h_supply-h_condensate)/1000 MJ with kg and kJ/kg on the same enthalpy datum. This receiver-boundary heat is useful only to the extent confirmed by the receiver heat balance. For nonreturned condensate, unequal masses, accumulated energy or other receiver energy outlets/losses, establish the full measured enthalpy balance and declared condensate reference before deriving net useful heat. Align the supplier/background reference heat and distribution-loss boundary by an evidence-backed conversion; unknown baselines remain unresolved, not assumed equal. Fuel heat=m_fuel×measured LHV or HHV on matching moisture basis, with the choice explicit; heat delivered is not fuel heat input. Gaseous fuel mass=V_ref×rho_ref with actual reference temperature/pressure and composition. | cp_energy; cp_energy_heat; cp_heat; cp_heat_heat; cp_fuel; cp_fuel_heat | individual energy/volume/mass quantities divided by Q | `epa-wood-boiler-2022` |
| `calc_pm` | compatible filterable nested measurements | q_≤2.5=q_PM2.5; q_2.5–10=q_PM10-q_PM2.5; q_>10=q_PMtotal-q_PM10. Require same method, source, interval and control basis with 0≤q_PM2.5≤q_PM10≤q_PMtotal; investigate violations rather than clip. Normalize each exclusive bin by Q. Condensable PM is not included without separate evidence/identity. | cp_emission; cp_emission_heat; compatible filterable PM observations | three exclusive filterable kg/Q exchanges | `epa-sawmill-pte-2014`; `epa-wood-boiler-2022` |
| `calc_balances` | unallocated cohort ledgers | For profiling only: oven-dry wood input+opening stock=accepted dry wood+sold dry residue+dry residue transferred to heat+waste dry wood+verified wood-origin dry material loss+closing stock. Retain the origin-specific wood loss method. The boiler has a separate consumed-fuel carbon/ash/emissions ledger; do not also count its gaseous combustion products as profiling dry-wood outputs. Water input+opening water=product/residue water+water vapor+effluent+closing water, explicitly including humidification and steam condensate transfers when present. Carbon uses measured dry carbon fractions, fuel composition, product/residue/ash/stock carbon and gaseous carbon. Internal links cancel only after both equal ends are retained. | cp_stock; cp_reference; cp_residue; cp_fuel; cp_fuel_heat; cp_heat; cp_heat_heat; cp_emission; cp_emission_heat | physical residuals with measurement uncertainty; no invented acceptance threshold | `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |
| `calc_carbon` | separate biogenic and fossil combustion | Within each origin, carbon in CO2=mass_CO2×12/44, in CO=mass_CO×12/28, and in CH4=mass_CH4×12/16. Reconcile measured consumed fuel carbon with these species, other measured organic carbon, ash/unburned carbon and stock changes. If CO2 is derived by residual carbon, use the validated balance and multiply remaining CO2-carbon by 44/12; do not assume 100% or copy a survey conversion percentage. | cp_fuel; cp_fuel_heat; cp_heat; cp_heat_heat; cp_emission; cp_emission_heat; actual fuel carbon and species | biogenic/fossil carbon balance and individual kg/Q | `epa-wood-boiler-2022` |
| `calc_allocation` | environmental burdens only | a_j=m_dry,j/sum(m_dry,j); B_j=a_j×B_joint+B_dedicated,j. Eligible outputs and joint step follow allocation_shared. Sensitivity a_value,j=(m_j×p_j)/sum(m_j×p_j) requires consistent same-period sale quantity and net prices. Shared heat burdens use useful measured MJ receiver shares. Physical wood/fuel/heat rows remain q_i/Q unallocated. | cp_residue; cp_reference; cp_energy; cp_energy_heat; cp_heat; cp_heat_heat; joint burdens; actual net prices | separate allocated product burden account | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_scope` | product and stock | Keep botanical species, actual continuous geometry, grade, untreated/unglued/uncoated status, lot moisture and starting-gate stage disclosures; mixed specifications are separate strata | cp_reference; cp_stock |
| `quality_coverage` | all rows | Cover complete declared production period and representative seasons/batches; disclose exclusions, shared equipment, sampling frequency, metering coverage and unmeasured rows. No actual supplier/factory records obtained by this methodology itself | cp_energy; cp_energy_heat; cp_fuel; cp_fuel_heat; cp_heat; cp_heat_heat; cp_aux; cp_reference |
| `quality_sources` | numerical values and gaps | Use actual foreground collection or validated route-specific original factors; no CORRIM regional or EPA PTE value adopted as profiling industry parameter. Identify additional species and missing identities before data release; preserve detection-limit and uncertainty statements | cp_emission; cp_emission_heat; original factor and test records |
| `quality_allocation` | physical and burden ledgers | Keep complete unallocated balances, coproduct status, period-matched allocation drivers/prices, useful heat receiver shares, integrated-stock upstream boundary and allocated result traceability separate | cp_residue; cp_stock; cp_heat; cp_heat_heat; allocation_ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference and applicability | Verify coniferous botanical species, continuous longitudinal edge/face profile drawing, actual net section/length, kiln-dried untreated sawn-stock starting state, no glue/coating/preservative, no assembly, declared dispatch moisture/grade and Q>0. A CPC label or planar smooth face alone is insufficient. Missing qualifiers block a complete reference definition. | `usda-wood-handbook-2021` |
| `validate_identity` | individual exchange | Each row is atomic. Verify public identity, selected reference property/unit and receiving compartment against the actual flow. Unresolved UUID requires identity review; no generic biomass, correction emission, coal fly ash, paper effluent or cable tie substitutes for a specific unresolved row. Identity lookup supplies no numerical inventory. | `usda-wood-handbook-2021`; `epa-wood-boiler-2022` |
| `validate_basis` | all physical rows | Use one same-cohort Q kg net final wood excluding packaging for every row, inventory adjustment and collection aggregation, in both languages. Distinguish total q_i from normalized x_i=q_i/Q. Net solid volume, density, moisture and energy conversions require actual consistent measurements; board-foot nominal volume and loose residue volume do not establish solid profile kg. | `usda-wood-handbook-2021` |
| `validate_balance` | dry wood, water, carbon and heat | Reconcile internal shavings/sawdust fuel and useful steam links at identical handoff conditions. Keep measured stock change, residues, vapor, steam condensate and ash carbon; document balance residuals against measurement uncertainty and investigate discrepancies, without an invented tolerance. Verify upstream stock and heat counted once. Physical coproduct quantities remain unallocated. | `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`; `epa-wood-boiler-2022` |
| `validate_particles` | air sources | Use filterable PM2.5, PM2.5–PM10 and >PM10 as exclusive bins only when the actual measurements have compatible methods. Nested PM totals are retained as supporting observations, not additional exchanges. Condensable aerosol and unidentified organic totals are separate evidence gaps; do not force them into filterable size bins. The EPA sawmill PTE memo excludes boilers and supplies no profiling default factor. | `epa-sawmill-pte-2014`; `epa-wood-boiler-2022` |
| `validate_completeness` | dataset release | An absent conditional row needs route and measurement evidence; lack of measurement is an open gap, not zero. Extend the inventory for actual packaging scrap, rejected profiles, humidification water, treatment chemicals, leaks and additional identified species before release. Check site-period quality, controls, treatment destinations, allocation sensitivity, upstream compatibility and uncertainty. Candidate methodology, translation alignment and mechanical checks are not scientific approval. | `corrim-northern-lumber-2025`; `epa-wood-boiler-2022`; `epa-sawmill-pte-2014` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing process inventory |
| downstream_use | secondary_dataset; background_dataset, only after actual data completion and independent review |
| allowed_use | Matching untreated kiln-stock-route coniferous solid continuous profiles with declared geometry/moisture and compatible upstream modules |
| excluded_use | Ordinary sawn stock; assembled flooring/doors/windows; treated, coated, glued, engineered/non-coniferous products; functional floor-area comparison; storage/substitution credit; universal sector parameter |
| required_metadata | PCR id/version; site/period; species/grade/profile dimensions; dispatch moisture/method; Q kg; supplier starting gate and primary-drying inclusions; reconditioning and heat route; allocation drivers; flow/property/compartment identities; linked upstream providers |
| required_quality_disclosure | Metering/sampling and original factors; physical/burden ledger distinction; balance residuals and uncertainty; coproduct/waste/fuel destinations; pollutant/size-bin coverage; missing UUIDs or upstream evidence; omitted stages; methodological review status |
| update_trigger | Change of species/profile/grade/moisture, drying/heat route, stock supplier scope, control devices, coproduct destination, packaging or significant metered operating conditions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory (2021), Wood handbook—wood as an engineering material, FPL-GTR-282, Ch.4 pp.4–1/4–11; Ch.6 p.6–12 Fig.6–3; Ch.13 pp.13–2/13–5–13–6. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Worked-softwood identity and moisture/density measurement principles only; no universal product specification or numerical factory factor |
| `corrim-northern-lumber-2025` | literature | CORRIM (2025-07-22 revision), Life Cycle Assessment of Softwood Lumber Production – Northern Region, §§3.2.4, 3.2.6, 3.3, 4.6–4.7, pp.14,16,18,21–22. https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf | Northern-US softwood lumber case: upstream step context, dry-mass bookkeeping and source screening; this lumber survey does not directly establish allocation applicability for continuously profiled wood. No profile yield, regional moisture/density, energy/emission factor or universal no-hazardous-substance claim reused |
| `epa-sawmill-pte-2014` | official_guidance | US EPA Region 10 (2014-05-08), Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country, memorandum p.1 and attachment table/footnotes. https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf | Sawmill PTE scope and compatible nested filterable particle definitions; no boiler or profiling default factor, measured LCI or generic indoor-zero assumption |
| `epa-wood-boiler-2022` | official_guidance | US EPA (March 2022), AP-42 §1.6 Wood Residue Combustion in Boilers, §§1.6.1–1.6.4 and Table1.6–1 footnotes. https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | Conditional wood-residue boiler pollutant/fuel/control screening and factor-basis caution; no numerical factor transplanted; retain biogenic CO2 LCI despite greenhouse statistical convention |
