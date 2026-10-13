---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.other-particle-boards-of-wood-e-g-waferboard
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated randomly laid PF-bonded wood waferboard

## 1. Scope and Applicability

Applies to finished uncoated, unpreserved wood waferboard made from broad thin flakes with declared geometry and randomly falling layup, bonded with powdered uncured PF resole under heat and pressure. No deliberately oriented face or cross-oriented layer architecture is allowed; incidental alignment from gravity is disclosed and measured. The supported pilot uses externally supplied steam for indirect drying/press heating, electric handling and dry dust collection. Onsite combustion, direct-fired drying, thermal oxidation, wet scrubbers, sanding, coatings/overlays, fire retardants, preservatives, other binders and wax emulsions require separate applicability and inventory review. [epa-waferboard-2002; usda-waferboard-types-1986]

Wafer width, length, thickness and orientation distribution distinguish the product from fine-particle UF particleboard and long narrow deliberately layered OSB. Broad use of the word particleboard in historical technical literature includes waferboard; that linguistic overlap does not make these production methods interchangeable. Oriented waferboard and an Aspenite trade name are insufficient to establish this random architecture. [usda-waferboard-types-1986; epa-waferboard-2002]

Real product anchors are the photographed wide-wafer board in FPL-GTR-53, Figure 2, printed p.5, and commercial Canadian powder-resin waferboards W1–W7 in FPL-RP-574, Table 1, printed p.2 (1985 samples, reported 1999). The latter report calls these minimally aligned waferboards and includes W4 from Ontario. These are product-existence evidence, not a claim that W4 has this PF chemistry, species, fully random manufacturing settings or steam route. Those facts must be established for the actual site. Historical grades, test dimensions and strengths are not present-day defaults or legal acceptance criteria. No universal wafer dimension, moisture, recipe, density, service life or energy/emission factor is assigned. [usda-commercial-panels-1999; usda-waferboard-types-1986]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.other-particle-boards-of-wood-e-g-waferboard |
| classification_refs | CPC 3.0 31439; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Random broad-thin wood waferboard, powdered PF route and the declared indirect steam/dry-control pilot |
| excluded_products | Fine-particle UF board; deliberately oriented OSB/waferboard; fibreboard; veneer panels; nonwood panels; coated/overlaid/treated panels; other binder and heat/control routes |
| representative_product | Net accepted finished random wide-wafer PF panel at factory gate; historical Figure 2/W-series anchors are not supplier inventory data |
| production_route | Delivered logs → debarking/optional thawing/crosscutting/waferizing → indirect drying/screening → powdered PF and optional neat wax blending → random layup → hot pressing → cooling/trimming → grading/packing |
| market_state | Finished uncoated unpreserved board at actual dispatch moisture; declared grade and suitability without automatic building approval |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an accepted random-wafer wood board material; no assumed equal structural service to OSB or UF board |
| How much | 1 kg net accepted finished waferboard at factory gate, excluding packaging |
| How well | Actual broad wafer geometry/orientation, powdered PF formulation, declared grade, thickness, density and dispatch moisture with method |
| How long or cycle | One production accounting period; no use-stage service life assigned |
| reference_flow_link | `finished_waferboard` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other particle boards of wood (e.g. waferboard) `dc4d3259-45c1-4d98-8264-35a90058e65c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Site/period and gate; botanical species mix and log/bark state; wafer length/width/thickness distribution and random orientation evidence; actual PF supplier/formulation/solids/cure suitability; neat wax grade if used; board grade and actual acceptance standard/tests; panel dimensions/net mass/density; moisture basis/method; uncoated/unpreserved state; indirect steam definition, electricity voltage, dust controls, packaging and residue destinations |

Declare all required qualifiers in the concrete data package. The finished-class UUID includes this physical subset and identifies a mass exchange; it does not establish a grade, wafer architecture, supplier inventory or compatibility of an unrelated background dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Calibrated net accepted dispatch board mass in cp_reference, excluding packaging and rejects. |
| same_denominator | all inventory rows | Reference product mass | kg | Every row uses per 1 kg reference flow; sum actual attributable period totals and divide by Q, the net accepted finished-board mass from cp_reference. |
| moisture_basis | wood and board | Mass | kg | For untreated wood collect wet and ovendry mass: u=(wet-dry)/dry, dry=wet/(1+u). Distinguish percent from fractions and wet-basis moisture. For bonded panels use a validated moisture method distinguishing water loss from volatile/cure losses; wood dry mass excludes binder/wax solids. [usda-wood-moisture-2021] |
| energy_basis | electricity, steam, condensate | Energy and mass | MJ; kg | Meter electricity at the declared voltage; 1 kWh = 3.6 MJ. Steam inventory uses measured kg and a separate net enthalpy account from inlet/return/loss states. Match supplier background delivery and return credit definitions before linkage. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receiving gate for untreated coniferous/non-coniferous panel logs with recorded bark and moisture; electric in-yard handling |
| starting_condition_role | foreground_entry |
| product_classification_scope | Physical random-wafer PF pilot subset of CPC 3.0 31439 |
| recursive_input_rule | Purchased finished waferboard is not raw log furnish. Internal wafers, mats, rework and dust returns stay in stage transfer/stock records; one final finished reference output only. |
| upstream_dataset_requirement | Matching log forestry/preparation and receiving freight; powdered PF/wax, electricity at stated voltage, delivered steam with agreed return convention, water and packaging supply; each external waste treatment. All upstream combustion emissions remain in linked inventories. |
| disclosure | Gate-to-gate foreground plus explicit upstream links for cradle-to-gate use. Installation, use and end of life are separately modelled. Disclose capital equipment/cut-offs and any missing supply activity. |

Use one integrated foreground unit p_wafer through packing. Preserve independent stage records s_receive (yard/thaw/debark/crosscut), s_wafer (waferizing), s_dry (indirect drying and screening), s_blend (powder PF/neat wax), s_form (gravity random forming), s_press, s_finish (cooling/trim), s_pack and s_control (dry collection/cleaning). Internal transfer pairs must agree in actual quantity and state; no intermediate board shares the final reference UUID. [epa-waferboard-2002]

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | p_wafer | Verify the full declared route. Direct-fired dryers, onsite fuel-burning boilers/RTOs, wet controls, sanding and surface treatments are outside this pilot and cannot disappear behind purchased-heat wording; review and add their exact inventories before applying an expanded method. | epa-waferboard-2002 |
| b_stack | p_wafer | Record outlet emissions after actual dry controls once per stack/source. Capture is a solid residue, not an atmospheric release. Dryer, press/cooling and trim sources remain separately traceable. | epa-waferboard-2002 |
| b_heat | steam, condensate | External steam generation is upstream. Include physical incoming steam, returned condensate, actual losses and net enthalpy reconciliation; do not additionally book provider fuel as onsite fuel or create an unmetered heat export. | epa-waferboard-2002 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_wafer | Random PF waferboard manufacturing and dispatch | required | Declared pilot receiving gate through packing | foreground | 1 kg reference flow |

### Process: Random waferboard manufacturing (`p_wafer`)

#### Inputs

##### Product flows

###### Untreated coniferous panel logs with bark (`conifer_logs`)

Only the separately weighed coniferous log stream; record species, bark, supply grade and actual moisture. Do not count the same log in hardwood input.

- Selected flow: Untreated coniferous panel logs with bark
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-waferboard-2002`

###### Untreated non-coniferous panel logs with bark (`hardwood_logs`)

Only the separately weighed non-coniferous log stream; record botanical mix, bark, supply grade and moisture.

- Selected flow: Untreated non-coniferous panel logs with bark
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-waferboard-2002`

###### Powdered uncured PF resole resin (`pf_powder`)

Uncured powdered PF resole for wafer bonding; record actual formulation, solids, free phenol/formaldehyde and cure suitability. Generic resin identity does not establish the supplier background state or a loading. Other binder chemistry or liquid/emulsified supply is outside this route.

- Selected flow: Phenolic resin `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-waferboard-2002`

###### Petroleum paraffin wax (`wax`)

Conditional neat or molten petroleum paraffin sizing, weighed as supplied; this identity excludes wax emulsion and recycled-plastic wax. Catalog calorific metadata is not a dosing or energy default.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-waferboard-2002`

###### Low-voltage grid alternating current (`electricity`)

Equipment-use grid alternating current below 1 kV, including electric yard handling, fans and dry collectors. Reconcile supply voltage, transformer losses and meter boundary with the linked background; higher-voltage supply is not interchangeable.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered kWh × 3.6 MJ/kWh / Q; cp_utility retains declared voltage, attributable metering and losses.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `epa-waferboard-2002`

###### Purchased heating steam (`steam`)

Incoming purchased steam for indirect drying, optional log thawing and press heating. Record inlet mass separately from returned condensate; measure pressure, temperature, steam quality and supply definition. No fixed enthalpy, gross heating value or 0.45 MPaG assumption.

- Selected flow: Purchased heating steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`
- Sources: `epa-waferboard-2002`

###### Tap water (`water`)

Purchased tap water used for thawing/cleaning when present; exclude supplier boiler water and closed-loop recirculation. Other water sources require their own exact rows.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `epa-waferboard-2002`

###### Petroleum lubricating oil for waferboard machinery (`oil`)

Conditional petroleum machinery lubricating oil; reconcile purchases, stock and measured use. Identify grade and additives; no database calorific coefficient substitutes actual formulation.

- Selected flow: Petroleum lubricating oil for waferboard machinery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-waferboard-2002`

###### Polyethylene dispatch film (`film`)

Conditional finished polyethylene film for dispatch, separately weighed; exclude packaging from the board reference mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-waferboard-2002`

###### Polypropylene packaging strap (`strap`)

Conditional finished polypropylene flat strap, measured by mass or verified count/length-to-mass conversion. Polymer resin and twine are not this exchange.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-waferboard-2002`

#### Outputs

##### Product flows

###### Finished random wood waferboard (`finished_waferboard`)

One net accepted finished random-wafer PF board output after cooling, trimming, grading and packing. The broad class UUID is used only within this physical subset; its official Chinese display is retained, with geometry specified separately.

- Selected flow: Other particle boards of wood (e.g. waferboard) `dc4d3259-45c1-4d98-8264-35a90058e65c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `epa-waferboard-2002`

###### Untreated bark fuel coproduct (`bark`)

Only separately collected untreated bark actually sold as a fuel coproduct; record sale evidence and dry/wet mass. The same physical bark cannot also be bark waste.

- Selected flow: Untreated bark fuel coproduct
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Unresinated dry wood wafer fines fuel coproduct (`fines`)

Only dry unresinated wafer-screen fines actually sold as a fuel coproduct. Keep separate from bark and resin-bound material; unused fines return internally or enter fines_waste, without duplicate booking.

- Selected flow: Unresinated dry wood wafer fines fuel coproduct
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Steam condensate returned to supplier (`condensate`)

Actual condensate crossing the gate back to the steam supplier, measured mass and return temperature/pressure. The supplier agreement determines any separate return credit; no assumed equal incoming/return quantity.

- Selected flow: Steam condensate returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`
- Sources: `epa-waferboard-2002`

##### Waste flows

###### Cured PF waferboard offcut waste (`trim_waste`)

Only solid cured PF board offcuts/rejects leaving as waste; keep captured saw dust in bonded_dust and internal rework in transfer records.

- Selected flow: Cured PF waferboard offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Collected cured PF waferboard sawing dust waste (`bonded_dust`)

Only collected cured PF board sawing dust sent offsite; separate from solid offcuts, airborne dust and unresinated sawdust.

- Selected flow: Collected cured PF waferboard sawing dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Untreated wood crosscutting sawdust waste (`dust_waste`)

Only collected unresinated log crosscutting sawdust sent offsite for combustion/recovery. Resin-bound board dust is bonded_dust; screened wafer fines are separate.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Unresinated wood wafer screening fines waste (`fines_waste`)

Only unresinated screened wafer fines disposed of offsite; keep sold fines and internal returns exclusive.

- Selected flow: Unresinated wood wafer screening fines waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Debarking bark waste (`bark_waste`)

Only debarking bark actually leaving as waste, with documented destination. Product bark is booked exclusively in bark; do not invent coproduct revenue.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Waferboard cleaning wastewater sent to external treatment (`wastewater`)

Only cleaning/thawing effluent actually sent to external treatment; measure mass, composition and destination. Not a direct environmental water release.

- Selected flow: Waferboard cleaning wastewater sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Used lubricating oil (`oil_waste`)

Only drained used lubricating oil sent to treatment; retain actual composition, hazardous status and destination without assuming the database treatment route.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

###### Uncured PF resin powder waste (`pf_waste`)

Uncured PF powder lost in handling or rejected and sent offsite, separately from cured resin-bearing board waste. Reconcile free constituents and retained resin solids.

- Selected flow: Uncured PF resin powder waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-waferboard-2002`

##### Elementary flows

###### Filterable particles ≤2.5 micrometres (`pm25`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Filterable particles >2.5 to ≤10 micrometres (`pmcoarse`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Filterable particles >10 micrometres (`pmover10`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Condensable organic particulate matter (`condensable_pm`)

Separately sample condensable organic particulate matter after indirect wafer drying; disclose sampling conditions. Do not add it to size fractions/VOC mass already containing the same material. No generic PM identity is substituted. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: Condensable organic particulate matter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Formaldehyde (`formaldehyde`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Phenol (`phenol`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Methanol (`methanol`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Alpha-pinene without enantiomer selection (`alpha_pinene`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Acetaldehyde (`acetaldehyde`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Acrolein (`acrolein`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Propanal (`propionaldehyde`)

Outdoor-air discharge only, unspecified subcompartment; measure the named species/size at actual outlets. Retain source, sampling method, uncertainty and phase. No indoor, long-term, soil/water, correction or enantiomer substitution. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical period exchange / Q; retain stage and stream breakdown with the linked protocol. Allocation applies separately to environmental burdens, not to physical outputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-waferboard-2002`

###### Water vapour (`water_vapour`)

Evaporated wood moisture and any steam vent reaching outdoor air; use measured water balance, excluding returned condensate and background steam-generation water. This is a conditional species/phase screening card, not presumed presence or a default emission. Prove absence or measure actual release; unknown measurement is not zero. OSB direct-fired dryer tables only supply candidate species/CAS labels and do not supply indirect-waferboard quantities.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured evaporation and actual vent-water mass / Q; cp_water reconciles all incoming, retained, discharged and returned water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `epa-waferboard-2002`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_separate | p_wafer | Keep the unallocated physical mass/water/carbon/energy account and internal transfers separately from the product-attributed environmental-burden account. Coproduct physical mass remains actual mass. | ghg-allocation-2011 |
| a_hierarchy | p_wafer | Use stage/source metering to avoid allocation. For remaining common burdens demonstrate a causal physical relationship; dry mass is admissible only when justified. Otherwise document consistent period-specific economic relationships and sensitivity; disclose prices and markets, with no automatic zero value or avoided-fuel credit. | ghg-allocation-2011 |
| a_residue | bark, fines, bark_waste, fines_waste | Classify each actual residue lot as sold coproduct, internal return or waste using destination evidence. These quantities are exclusive. Resin-bound residues stay distinct from unresinated wood and require their own treatment datasets. | epa-waferboard-2002 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | p_wafer | finished board and denominator | weighing_acceptance | site; period; lot; accepted net mass Q; moisture; grade/tests; actual dimensions/density; wafer geometry/orientation; PF recipe | Calibrated weighing excluding packaging/rejects; traceable acceptance and validated board moisture tests; sample wafer geometry and direction with forming-machine records; Aggregation calculation: Sum accepted net board mass Q; board output per 1 kg reference flow | kg | each dispatch lot | complete declared period | same site and route | per 1 kg reference flow | scale calibration; tickets; recipe; photographs; tests |
| cp_material | p_wafer | each input material and packaging | stock_batch | row_id; lot; stage; supplier; composition and measured biogenic/fossil carbon fractions; uncured/cured state; wet/dry mass; moisture; opening/purchases/closing stock; returns | Calibrated separate weighing, stock reconciliation, supplier certificates, untreated-wood oven-dry sampling and laboratory/supplier component carbon records; verify PF solids/cure suitability and petroleum wax grade; Aggregation calculation: Separate physical attributable totals / Q; per 1 kg reference flow | kg | each batch and stock close | complete declared period | same site and route | per 1 kg reference flow | weighing/calibration; stock closure; formulation |
| cp_utility | p_wafer | electricity and tap water separately | submeter | row_id; stage; meter; voltage; kWh; tap-water kg; density if volume measured; stock/losses; shared-use drivers | Calibrated stage meters reconciled to supplier bills; electricity transformation/loss boundary and water supply identity verified; Aggregation calculation: Each attributable total / Q; electricity converted to MJ; per 1 kg reference flow | kWh; kg | continuous meters and monthly reconciliation | complete declared period | same site/voltage/source | per 1 kg reference flow | meter calibration; bills; loss reconciliation |
| cp_steam | p_wafer | steam inlet and condensate return separately | enthalpy_balance | stage; inlet/return mass; pressure; temperature; steam quality; vent/leak mass; stock; supplier enthalpy convention and return credit | Calibrated mass meters and state sensors; validated steam-property method; signed supply/background definition; reconcile each stage and whole delivery system; Aggregation calculation: Incoming steam kg / Q and outgoing condensate kg / Q separately; net enthalpy separately reconciled; per 1 kg reference flow | kg; MJ | continuous with each supply-state change | complete declared period | same supplier and site delivery/return gate | per 1 kg reference flow | calibration; states; supplier boundary; uncertainty |
| cp_residue | p_wafer | each coproduct and waste | weighing_destination | row_id; stage; lot; wet/dry mass; resin contamination; sale value; destination; waste status; stock; internal-return id | Separate calibrated weighing and destination tickets; sample composition/moisture; audit that sold/waste/internal lots are exclusive; Aggregation calculation: Each actual external stream total / Q; physical outputs are not allocation-weighted; per 1 kg reference flow | kg | each residue lot | complete declared period | same site and identified destination | per 1 kg reference flow | tickets; classification; stock/transfer closure |
| cp_emission | p_wafer | each species and particle fraction | outlet_sampling | row_id; source/stage; control; species/CAS; phase; outlet gas flow; concentration; wet/dry/standard conditions; time; detection limit; filterable/condensable basis | Representative controlled-outlet tests plus run-hour/flow records, with fugitive estimates separately justified; verify three nonoverlapping filterable PM fractions and VOC/condensable overlap; Aggregation calculation: Each species/fraction integrated physical mass / Q; per 1 kg reference flow; no second shared-stack count | kg | representative campaigns and each recipe/control change | all declared operating regimes and seasonality | same site and controlled outlet | per 1 kg reference flow | test method; detection/uncertainty; control/run logs |
| cp_water | p_wafer | evaporation and water closure | water_balance | wood/carrier water; steam; tap water; board/residue water; wastewater; condensate; vents; opening/closing water stock | Traceable moisture and flow measurements; reconcile all water paths with cp_material, cp_reference, cp_steam and cp_residue; Aggregation calculation: Actual emitted water mass / Q; per 1 kg reference flow; retain closure error and uncertainty | kg | each campaign and period close | complete declared period | same integrated site boundary | per 1 kg reference flow | paired water paths; moisture method; closure |
| cp_allocation | p_wafer | burden attribution separately from physical inventory | attribution_account | direct stage burdens; common burdens; causal driver; measured product dry masses; sales/prices; boundary; sensitivity | Audit metered subdivision first, then documented physical/economic relationships; retain separate allocation matrix and immutable physical stream account; Aggregation calculation: Attributed environmental burden / Q; physical stream totals unchanged; per 1 kg reference flow | kg; MJ; currency | each declared period and allocation change | same period as inventory | same site and common process | per 1 kg reference flow | driver justification; prices; reconciliation; sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | For each actual physical exchange use its attributable period total divided by Q; the finished output is exactly 1 kg. Q is positive net accepted wet dispatch mass. | Q; period totals; cp_reference | each exchange per 1 kg reference flow | epa-waferboard-2002 |
| dry_wood_account | conifer_logs, hardwood_logs | For each untreated wood batch dry wood = wet wood/(1+u); water = wet wood-dry wood. Retain separate binder/wax solids and carbon origins in the board and wastes; do not equate oven-dry board with dry wood. | wet mass; dry-basis u; cp_material | physical dry matter and water ledgers | usda-wood-moisture-2021 |
| steam_enthalpy | steam, condensate | Net delivery enthalpy = incoming mass × inlet enthalpy minus returned mass × return enthalpy minus other outgoing stream enthalpies minus increase in stored energy, with explicit common datum. Resolve heat loss, vents and useful stage heat separately. Supplier return credits require its background convention; neither incoming steam mass nor catalog energy unit alone is net useful heat. | inlet/return/outgoing states; mass; stock; cp_steam | reconciled energy account and compatible steam linkage | epa-waferboard-2002 |
| pm_partition | pm25, pmcoarse, pmover10, condensable_pm | For paired compatible filterable measurements: fine=PM2.5; coarse=PM10-PM2.5; large=total filterable PM-PM10. All are nonnegative; uncertainty and matching sampling conditions are mandatory. Do not add cumulative PM10/total again. Condensable measurements and molecular VOC mass remain phase-resolved without duplication. | paired outlet tests; cp_emission | disjoint physical particulate and molecular species inventory | epa-waferboard-2002 |
| physical_closure | p_wafer | Reconcile opening stock + external inputs with finished board + actual coproducts + waste + elemental releases + closing stock in separate dry-matter, water and biogenic/fossil carbon accounts. Include binder/wax solids and volatile losses. Internal transfer ends agree in quantity/state and cancel at plant level. Report residual errors with measured uncertainty. | all stream totals; stock; material carbon composition; cp_material; cp_water; cp_residue; cp_emission | unallocated balance accounts | epa-waferboard-2002 |
| burden_attribution | p_wafer | Attribute direct burdens first. Apply justified allocation shares only to remaining common environmental burdens, with shares summing to one for the same scope. Preserve all physical product quantities; product-attributed burden divided by Q forms the downstream dataset. | direct/common burdens; allocation drivers; cp_allocation; Q | separate product-attributed burden account | ghg-allocation-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | p_wafer | Verify actual wood-wafer geometry/random architecture, uncured PF recipe, product acceptance and exclusions. A trade name or class label is insufficient. | forming logs; geometry photos/tests; supplier certificates |
| dq_coverage | all inventory rows | Cover a complete representative operating period and all measured regimes; distinguish measured zero, below detection, absence and missing measurement. Missing UUID or supplier quantity/background compatibility remains explicit; complete datasets cannot silently substitute. | row coverage; calibration; uncertainty; supplier definitions |
| dq_limits | p_wafer | Historical EPA/FPL sources supply method context only. Do not transfer softwood-sawmill CORRIM quantities, sawmill dust factors or boiler factors to waferboard indirect drying/pressing. Add individual rows for additional actual exchanges and retain phase-specific emissions. | scope/route comparison; site screening; original methods |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_waferboard | Exactly one finished reference output has 1 kg net accepted board; Q is positive and every row/protocol uses the same denominator. Reject duplicate reference intermediates, packaged-mass denominators and mismatched EN/ZH definitions. | epa-waferboard-2002 |
| v_architecture | p_wafer | Require broad-thin wafer geometry and nondeliberate random forming proof, actual PF chemistry/grade and declared heat/control route. Reject long-strand oriented OSB, fine UF particleboard and excluded variants. | usda-waferboard-types-1986 |
| v_balance | p_wafer | Audit dry matter/water/energy and origin-separated carbon closure before burden allocation; transfer pairs agree. Supplier steam conventions, voltage, PF/wax state and missing identities must be resolved before a complete linked dataset is claimed. | usda-wood-moisture-2021 |
| v_emission | p_wafer | Use controlled-outlet species/phase quantities once, with nonoverlapping PM bins. Retain actual biogenic and fossil CO2 in upstream LCI and any separately reviewed onsite-combustion expansion; a GHG reporting convention cannot remove biogenic CO2 from the physical inventory. Disclose unmeasured species and do not claim complete coverage. | epa-waferboard-2002 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Verified site/period random-wafer PF board production burden per 1 kg net accepted finished material |
| allowed_use | Matching physical architecture, formulation and pilot route; link actual upstream supply and destination processes with disclosed allocation |
| excluded_use | Generic other-board or OSB/UF proxy; structural-service equivalence; current legal/grade certification; incomplete UUID/steam/PF/wax background links |
| required_metadata | Required qualifiers; site/period; upstream gates; methods; all flow quantities and identities; physical balance and allocation accounts; original source locators |
| required_quality_disclosure | Missing/conditional rows, detection/uncertainty, identity versus quantity/background compatibility, exclusions, representativeness and historical-source limits |
| update_trigger | Species/wafer architecture, PF/wax supply, product grade, steam/electricity boundary, controls, destination, missing identity or site-period changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-waferboard-2002 | official_guidance | US EPA. AP-42 §10.6.1 Waferboard/Oriented Strandboard Manufacturing, March 2002. https://www.epa.gov/sites/default/files/2020-10/documents/c10s06-1.pdf | §10.6.1.1–.3, printed pp.10.6.1-1–4 and Figure 10.6.1-1: historical route/random layup/pressing/finish. Table 10.6.1-3 p.12 describes direct wood-fired softwood OSB drying; only candidate species/CAS labels used for site screening, no transfer of presence, rates or control performance to this indirect route. |
| usda-waferboard-types-1986 | handbook | Carll, C.G. Wood particleboard and flakeboard: types, grades, and uses. FPL-GTR-53, November 1986. https://research.fs.usda.gov/download/treesearch/5677.pdf | Printed pp.1,5 and Figure 2: broad terminology, typical PF type-2 context, real broad-wafer specimen, narrower oriented OSB; no current grade/strength defaults. |
| usda-commercial-panels-1999 | literature | Laufenberg, T.L.; Palka, L.C.; McNatt, J.D. Creep and creep-rupture behavior of wood-based structural panels. FPL-RP-574, June 1999. https://research.fs.usda.gov/download/treesearch/5817.pdf | Abstract, printed pp.1–2 and Table 1: real 1985 commercial minimally aligned waferboard W1–W7 and sampling limitations. Not evidence for W4 species, PF chemistry, heat route, modern recipes, service life or emissions. |
| usda-wood-moisture-2021 | handbook | USDA Forest Products Laboratory. Wood handbook—wood as an engineering material. FPL-GTR-282, 2021. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Chapter 4, printed p.4-1, equations 4-1/4-2: dry-basis wood moisture definition, not an assumed species moisture/density or a resin-panel oven-loss rule. |
| ghg-allocation-2011 | standard | WRI/WBCSD. Product Life Cycle Accounting and Reporting Standard, 2011, Chapter 9 p.63 Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation avoidance and documented physical/economic relationships only. No GHG-only exclusion of physical LCI emissions or predefined residue prices/shares. |

