---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.particle-board-of-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncoated UF-bonded wood particleboard with audited resin preparation

## 1. Scope and Applicability

This PCR covers flat, non-oriented, uncoated wood-particle panels consolidated by dry mat forming and hot pressing with unmodified UF binder. One dataset declares one wood-species/source blend, face/core particle specification, resin recipe, target density and thickness, release moisture and pressing route. Treat different formulations, density/thickness classes and continuous versus batch pressing as separate measured cohorts; no universal operating range or industry recipe is prescribed. [usda-handbook-2021; epa-pb-2002]

The UF preparation is an explicit foreground stage, either on the board site or at an identified supplier whose actual ingredient, energy, yield and emission records expand the foreground. Purchased aqueous formaldehyde supply begins upstream of the resin reactor; formaldehyde generation from methanol remains in its background supply dataset. A purchased adhesive identified only as a UF/MUF/PF/pMDI family is insufficient for this route. The actual resin recipe and every added chemical must be known; a supplier-specific verified formulation may support a later reviewed route, but is not silently substituted here. No supplier-average recipe is adopted. [wilson-resins-2010]

Exclude OSB/waferboard with oriented or distinct wafer architecture; bamboo, flax, bagasse or other non-wood furnish; MDF/hardboard based on fibers; veneer/laminated or paper-faced/painted panels; molded articles; preservative-treated recovered wood; MUF, PF, pMDI and other binders; unidentified wax emulsions. Declare untreated dedicated chips, sawmill co-products and recovered clean solid wood separately. CPC 3.0:31431 is scope context; this limited route is a narrower candidate, not complete classification coverage. [usda-handbook-2021; corrim-pb-2024]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.particle-board-of-wood |
| classification_refs | CPC 3.0 31431; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated flat hot-pressed wood particleboard with ingredient-audited unmodified UF binder |
| excluded_products | OSB; waferboard; non-wood panels; fiberboard; faced/coated panels; molded products; unidentified or other binder recipes |
| representative_product | One accepted wood species/source, particle geometry, UF recipe, density, thickness and moisture cohort |
| production_route | Wood sorting/refining → drying → audited UF synthesis/blending → mat forming → hot pressing → cooling → sanding/dimensioning → stacking/packaging |
| market_state | Accepted uncoated panel at board factory gate; transport packaging separately counted |

## 3. Reference Flow

A mass declared unit supports supply-chain LCI; it does not establish equal installed building service or a reference service life.

| Field | Value |
| --- | --- |
| What | Supply the declared uncoated wood particleboard grade |
| How much | 1 kg accepted net panel |
| How well | Declared density, thickness, moisture basis, mechanical grade and formaldehyde test method/class; no unsupported class claim |
| How long or cycle | One factory-gate delivery; service life outside this unit |
| reference_flow_link | `finished_panel` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | particle board `4f19ca17-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and source shares; dedicated/co-product/recovered status; contaminant acceptance; wet/dry mass convention; particle architecture; actual UF recipe and batch assays; resin solids/free formaldehyde; wax/catalyst identities; density at measured moisture; actual thickness/dimensions; layer count; dry mat forming; press type, temperature, pressure, dwell/speed; drying direct/indirect heat and fuel origin; cooled/sanded/uncoated status; mechanical and formaldehyde test method/grade; region and period; supplier-expanded resin boundary; allocation and packaging |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Use accepted net panel mass at declared release moisture, excluding packaging; collect Q using cp_reference. Every inventory denominator is per 1 kg reference flow. |
| `moisture_basis` | wood and panel physical ledgers | Mass | kg | Dry-basis u = water mass / oven-dry mass; wet mass = dry mass × (1+u). Wet-basis w = u/(1+u). Use same-sample oven-dry or validated meter records, and separate wood water from resin reaction/dilution water. [usda-handbook-2021] |
| `volume_conversion` | volume-based chips, gas and panel metadata | Volume and measured Mass | m3; kg | Panel volume = sum(actual length × width × thickness); panel density uses matching net mass and moisture. Wood-chip UUID 3fa2a6a7-224c-4d99-bd55-a214f0a83161 confirms material identity and Volume/m3 only, not bulk volume. Separate measured wet kg, loose bulk volume Vb, the fixed supplier/background reference amount A_provider with its unit and solid/bulk convention, and measured period demand volume V_provider expressed in that convention. Obtain the supplier/background solid-versus-bulk definition, moisture/state and packing convention; measure same-lot solid volume Vs, wet bulk density rho_b, solid density rho_s and packing k = Vs/Vb on compatible definitions. Obtain V_provider only through a validated matched-state conversion; provider-process scaling is n_provider = V_provider/A_provider and the native Volume exchange is V_provider/Q in m3/kg, each scaled/normalized once. A_provider remains the fixed provider reference amount, not measured demand or a per-kg quantity; database secondary mass/volume coefficients are not measured density or packing. Unknown A_provider/definition/conversion means an incomplete quantity link, even with a correct UUID. Gas volume likewise requires supplier/background reference conditions and matched state. [fao-ubet-volume; usda-handbook-2021] |
| `recipe_basis` | resin and additives | Mass | kg | Record each actual purchased ingredient/formulation; disclose product and active/solids kg separately. Do not count solution water or internal UF resin transfer twice. Never infer UF dosage from an industry-average percentage. [wilson-resins-2010] |
| `energy_basis` | energy and useful heat | Energy with declared physical basis | MJ | Electricity MJ = metered kWh × 3.6. Keep fuel LHV input and measured net delivered heat separate; no assumed boiler efficiency. Steam or hot-water useful heat requires supply and return flow/enthalpy, pressure, temperature and condensate/loss records plus matching background definition. A steam MJ property alone is insufficient. [epa-pb-2002; epa-boiler-2022] |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified purchased wood feed at board mill and batch-assayed aqueous formaldehyde/urea at identified UF reactor; supply chains before these gates are linked backgrounds |
| starting_condition_role | Collected gate conditions, not burden-free origin |
| product_classification_scope | CPC 3.0:31431; narrower |
| recursive_input_rule | Same-category external board is not an allowed raw-wood shortcut; this route excludes resin-bonded recovered panel. Internal trim return is an internal ledger, not a new purchased reference flow |
| upstream_dataset_requirement | Source-specific wood forestry/chipping and co-product allocation; chemical manufacture; fuel and electricity supply; recovery operations; transport; waste treatment. No simultaneous purchased UF background when synthesis is expanded in foreground |
| disclosure | Board and resin sites, all gates and ownership, source species, prior material status, included heat/abatement, upstream stages, stock changes, excluded stages, allocation and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all datasets | Only declared flat UF-bonded uncoated wood panels conform. Audit each ingredient and preparation stage; raw dedicated chips carry forestry and preparation; co-products carry justified source-stage burdens. Supplier resin expansion must retain its actual yield and transfer quantity. | `usda-handbook-2021`; `wilson-resins-2010`; `corrim-pb-2024` |
| `boundary_heat` | heat and emissions | Include actual dryer fuel/direct combustion, separate owned boiler, press heating, oxidizer fuel, wet controls and auxiliary electricity. One meter interval or emission stream is counted once. AP42 boiler evidence does not turn boiler emissions into dryer factors. Imported heat is outside the present enumerated fuel-owned route and needs separately verified supply and net heat basis. | `epa-pb-2002`; `epa-boiler-2022` |
| `boundary_recovery` | recovered wood | Require prior use/treatment, contamination testing, legal waste/product status, collection/sorting/cleaning/transport and loss records. Recycled is not evidence for zero burden; declare the recycling convention and sensitivity, and retain actual recovery burdens. | `corrim-pb-2024` |
| `boundary_downstream` | all datasets | Stop at accepted packaged board factory gate, with packaging exchanges separate from panel mass. Construction, use-phase formaldehyde exposure, service life, disposal and Module D credits require separate scenarios; no 75-year assumption or report end-of-life average is imported. | `corrim-pb-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `uf_board` | Audited UF preparation and wood particleboard manufacture | required | One declared recipe and panel cohort, source-resolved UF reactor and wood mill | aggregated_foreground | 1 kg accepted net panel |

Physical stages remain separately metered: wood receiving/sorting → refining/screening → drying → blending with batch-prepared UF → dry mat forming → hot pressing → cooling → sanding/trimming → stack/pack. UF reactor → blending is a measured wet-resin/solids transfer; dryer/boiler → press is a measured heat transfer. Supplier resin shipment, face/core splits, recovered wood yield, recycled trim and clean-fines-to-fuel links retain equal quantities at both ends. These are internal physical links within the aggregated unit; they do not create another finished-panel output. Exported sale/waste/emissions remain external inventory rows. [corrim-pb-2024, Table 9; epa-pb-2002, Figure 10.6.2-1]

### Process: Audited UF preparation and board manufacture (`uf_board`)

#### Inputs

##### Product flows

###### Dedicated Chips (`dedicated_chips`)
Quantity-basis condition for every wood-chip exchange: the Volume identity is retained, but measured bulk Vb, wet mass and the fixed supplier/background reference amount A_provider and converted period volume V_provider are distinct. Record the actual upstream dataset solid/bulk convention, same-batch species, moisture/state and measured packing k = Vs/Vb. Convert measured demand to V_provider only after definition/state matching, then scale the provider process by V_provider/A_provider; the native exchange is V_provider/Q. A_provider does not change with demand; unknown conversion leaves quantity linkage unresolved. Do not treat a database secondary mass coefficient as density. [fao-ubet-volume]


Purchased untreated wood chips deliberately produced from timber for this board; retain tree species, source forestry and full chipping burden. Measure loose volume and same-lot wet bulk density and moisture; no zero-burden residue assumption.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: After cohort attribution and matched solid/bulk and moisture/state conversion, obtain same-period V_provider; the native exchange is V_provider/Q (m3/kg), normalized once. Provider-process scaling is separately V_provider/A_provider; A_provider is the fixed provider reference amount/convention, not demand volume. Physical bulk volume alone does not prove the provider convention; missing conversion evidence leaves the link unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `corrim-pb-2024`

###### Coproduct Chips (`coproduct_chips`)
Quantity-basis condition for every wood-chip exchange: the Volume identity is retained, but measured bulk Vb, wet mass and the fixed supplier/background reference amount A_provider and converted period volume V_provider are distinct. Record the actual upstream dataset solid/bulk convention, same-batch species, moisture/state and measured packing k = Vs/Vb. Convert measured demand to V_provider only after definition/state matching, then scale the provider process by V_provider/A_provider; the native exchange is V_provider/Q. A_provider does not change with demand; unknown conversion leaves quantity linkage unresolved. Do not treat a database secondary mass coefficient as density. [fao-ubet-volume]


Purchased untreated chips sold by a multi-output sawmill or veneer mill. Keep this origin separate from dedicated chips even with the same physical flow UUID; obtain documented source-stage allocation.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: After cohort attribution and matched solid/bulk and moisture/state conversion, obtain same-period V_provider; the native exchange is V_provider/Q (m3/kg), normalized once. Provider-process scaling is separately V_provider/A_provider; A_provider is the fixed provider reference amount/convention, not demand volume. Physical bulk volume alone does not prove the provider convention; missing conversion evidence leaves the link unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `corrim-pb-2024`

###### Coproduct Sawdust (`coproduct_sawdust`)

Unresinated wood sawdust feed, not hog fuel or airborne dust; weigh wet mass, moisture and source burden.

- Selected flow: Untreated sawmill sawdust sold as co-product
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `corrim-pb-2024`

###### Coproduct Shavings (`coproduct_shavings`)

Unresinated planer shavings; record whether supplier drying occurred before this co-product arose and assign applicable upstream drying burden.

- Selected flow: Untreated planer shavings sold as co-product
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `corrim-pb-2024`

###### Urea (`urea`)

Separate actual urea used in resin reaction from any later free-urea scavenger dose in raw records; combine only this same chemical exchange. Use product kg, never kg nitrogen.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `wilson-resins-2010`

###### Formaldehyde Solution (`formaldehyde_solution`)

One actual supplied solution product; require batch formaldehyde, methanol stabilizer and water mass fractions and supplier upstream definition. Do not assume laboratory formalin composition. Account its constituents in the physical chemical/water ledger without also counting them as purchased inputs.

- Selected flow: Aqueous formaldehyde feed solution, batch-assayed for resin synthesis
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `wilson-resins-2010`

###### Naoh (`naoh`)

Only industrial solid NaOH of the verified grade; record assay and actual dry product mass. If a different aqueous supply is used, resolve that formulation separately; added dilution water is separate.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `wilson-resins-2010`

###### Formic Acid (`formic_acid`)

Individual pH-adjusting formic acid if present in the actual UF batch recipe; record commercial concentration and active fraction, no assumed dose.

- Selected flow: Formic acid `b2fe4c3e-d4e6-40be-93ee-e47d512b8309`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `wilson-resins-2010`

###### Ammonium Sulfate (`ammonium_sulfate`)

Individual ammonium sulfate when used for pH adjustment or cure; distinguish synthesis and board blending doses.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `wilson-resins-2010`

###### Ammonium Chloride (`ammonium_chloride`)
The delivered catalyst identity remains unresolved; reactor/absorption-tower states and volume-basis candidates are not interchangeable with a weighed solid delivery. Resolve actual supplier grade/state before use.


Individual ammonium chloride cure catalyst only when actual dosing records identify it; no generic hardener row. A different catalyst requires its own atomic row before dataset completion.

- Selected flow: Ammonium chloride, delivered solid cure catalyst
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `epa-pb-2002`

###### Paraffin (`paraffin`)

Petroleum-fraction paraffin wax added neat or melted, weighed as wax. Wax emulsion with unidentified emulsifier is outside this recipe; do not substitute waste-plastic regenerated wax.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `usda-handbook-2021`; `epa-pb-2002`

###### Process Water (`process_water`)

Purchased treated process water for resin dilution, blending, cleaning, wet abatement or cooling makeup. Record use by stage; internal recycled water and water already in chemical solutions are not new purchases.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `corrim-pb-2024`

###### Electricity (`electricity`)

Grid-average delivered AC in the verified voltage class; include preparation, resin reactor, drying fans, forming, press, cooling, sanding, packaging, boiler auxiliaries and abatement. Other supply or voltage requires its own verified flow.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `corrim-pb-2024`

###### Natural Gas (`natural_gas`)
Gas quantity-basis condition: preserve the gaseous natural-gas identity, but distinguish meter volume Vm, fixed supplier/background reference amount A_provider and converted period demand volume V_provider. Obtain absolute T and P, dry/wet convention, water content, gas composition and compressibility Z for both states; use calibrated matched-state conversion and the actual background m3 definition. Conversion determines V_provider only; provider scaling is V_provider/A_provider and the native exchange is V_provider/Q, with A_provider fixed. Unknown composition, Z or reference condition keeps the quantity link unresolved, not zero.


Pipeline gaseous natural gas for direct dryer, owned boiler or oxidizer, when present. Keep separate stage meters; record pressure, temperature, compressibility, volume reference conditions and supplier energy basis.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Convert the attributable same-period meter amount to V_provider on matched T/P, composition, wet/dry and Z conditions; the native exchange is V_provider/Q (m3/kg), normalized once. Provider-process scaling is separately V_provider/A_provider; A_provider is the fixed provider reference amount/convention, not demand volume. Unknown state/definition leaves the quantity link unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources: `corrim-pb-2024`

###### Wood Fuel (`wood_fuel`)
Quantity-basis condition for every wood-chip exchange: the Volume identity is retained, but measured bulk Vb, wet mass and the fixed supplier/background reference amount A_provider and converted period volume V_provider are distinct. Record the actual upstream dataset solid/bulk convention, same-batch species, moisture/state and measured packing k = Vs/Vb. Convert measured demand to V_provider only after definition/state matching, then scale the provider process by V_provider/A_provider; the native exchange is V_provider/Q. A_provider does not change with demand; unknown conversion leaves quantity linkage unresolved. Do not treat a database secondary mass coefficient as density. [fao-ubet-volume]


Externally purchased clean unresinated wood-chip fuel only. Record species, origin and upstream burden, wet bulk density, moisture and actual LHV. Internal fines already in incoming feed are tracked in the internal fuel ledger, not purchased again.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: After cohort attribution and matched solid/bulk and moisture/state conversion, obtain same-period V_provider; the native exchange is V_provider/Q (m3/kg), normalized once. Provider-process scaling is separately V_provider/A_provider; A_provider is the fixed provider reference amount/convention, not demand volume. Physical bulk volume alone does not prove the provider convention; missing conversion evidence leaves the link unresolved.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources: `epa-boiler-2022`; `epa-pb-2002`

###### Diesel (`diesel`)

Actual diesel fuel for owned yard mobile equipment; require fuel grade, fossil/biogenic blend and source dataset, no stationary-engine proxy. External freight fuel belongs in its service dataset.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources: `corrim-pb-2024`

###### Pe Film (`pe_film`)

Actual polyethylene wrapping film mass excluding reusable packs; distinguish purchased virgin/recycled share in background, no extrusion service substituted for material.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `corrim-pb-2024`

###### Steel Strap (`steel_strap`)

Only recycled/reprocessed uncoated steel baling band with 99% Fe and 1% C by mass, matching the verified composition/route; if absent mark absent, and add a separately verified row for a different actual strap.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `corrim-pb-2024`

###### Wood Sticker (`wood_sticker`)

Individual wooden spacer separating stacked panels; net material mass and reuse turns from packaging records, not paper labels.

- Selected flow: Untreated solid-wood packaging spacer
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `corrim-pb-2024`

###### Inbound Road Freight (`inbound_road_freight`)

Vehicle-class and load-defined external road service for wood and chemical supplies including supplier-expanded resin transfer. Do not include internal yard equipment again. Other modes are separate flows.

- Selected flow: Road freight transport of foreground supplies
- Flow property / unit: Transport service / t.km
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `corrim-pb-2024`

##### Waste flows

###### Recovered Clean Wood (`recovered_clean_wood`)

Only source-traceable clean solid wood accepted after metal removal and contaminant testing. Exclude preservative-treated, painted and resin-bonded board; record collection, sorting, cleaning, losses and prior burden convention explicitly.

- Selected flow: Recovered untreated solid wood, unresinated, for particle preparation
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`
- Sources: `corrim-pb-2024`

##### Elementary flows

#### Outputs

##### Product flows

###### Finished Panel (`finished_panel`)

Accepted cooled, sanded, dimensioned uncoated flat UF-bonded wood particleboard at factory gate, excluding packaging. Resin manufacture and finished-board stacking remain in one aggregated foreground to avoid duplicate product references.

- Selected flow: particle board `4f19ca17-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `corrim-pb-2024`

###### Sold Clean Fines (`sold_clean_fines`)

Only material sold outside the aggregate, with actual sale and downstream use evidence. Internal return or burning is not an external co-product.

- Selected flow: Clean unresinated wood fines sold as co-product
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `corrim-pb-2024`

##### Waste flows

###### Rejected Panel (`rejected_panel`)

Resin-bonded rejects exported to treatment; keep dry wood, resin, moisture and contaminant content.

- Selected flow: UF-bonded rejected wood particleboard
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `corrim-pb-2024`; `epa-pb-2002`

###### Captured Sanding Dust (`captured_sanding_dust`)

Captured solid dust leaving to treatment only; distinguish internal reuse and fuel from atmospheric PM. Resin-containing dust is not clean wood fuel.

- Selected flow: UF-bonded particleboard sanding dust sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `corrim-pb-2024`; `epa-pb-2002`

###### Sorted Steel Reject (`sorted_steel_reject`)

Recovered-feed separation output; metal mass belongs to recovery yield and receiving recycler, not wood panel mass.

- Selected flow: Steel scrap removed from recovered solid wood
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `corrim-pb-2024`; `epa-pb-2002`

###### Bottom Ash (`bottom_ash`)

Owned boiler bottom ash only, with ash carbon and mineral assay, treatment manifest and distinct fly ash.

- Selected flow: Bottom ash from clean wood-residue boiler
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `epa-boiler-2022`

###### Fly Ash (`fly_ash`)

Collected boiler fly ash, separate from bottom ash and discharged stack PM; verify fuel and control device.

- Selected flow: Fly ash from clean wood-residue boiler
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `epa-boiler-2022`

###### Resin Purge (`resin_purge`)

Actual off-spec liquid purge routed to treatment; record water, free formaldehyde, methanol, urea and cured/uncured solids assays.

- Selected flow: Aqueous UF resin reactor purge
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `wilson-resins-2010`

###### Process Effluent (`process_effluent`)

Wet abatement or equipment-cleaning effluent crossing to offsite treatment. Record destination and separate suspended solids/aqueous analytes; do not also emit them directly to nature.

- Selected flow: Particleboard wet-abatement wastewater
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `corrim-pb-2024`; `epa-pb-2002`

##### Elementary flows

###### Co2 Bio (`co2_bio`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange. Biogenic CO2 remains in LCI even where a GWP reporting convention excludes it.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Co2 Fossil (`co2_fossil`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Co Bio (`co_bio`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Co Fossil (`co_fossil`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Methane Bio (`methane_bio`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Methane Fossil (`methane_fossil`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Nitrous Oxide (`nitrous_oxide`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Nitric Oxide (`nitric_oxide`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Nitrogen Dioxide (`nitrogen_dioxide`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Sulfur Dioxide (`sulfur_dioxide`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Formaldehyde Air (`formaldehyde_air`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Methanol Air (`methanol_air`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Acetaldehyde Air (`acetaldehyde_air`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Phenol Air (`phenol_air`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Ethanol Air (`ethanol_air`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Propanal Air (`propanal_air`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Alpha Pinene Air (`alpha_pinene_air`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange. Resolve stereochemistry if the test does; do not substitute a single enantiomer without evidence.

- Selected flow: Alpha-pinene, stereochemistry unspecified
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Pm25 (`pm25`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange. Apply the mutually exclusive size reconciliation in calc_pm; do not add nested cumulative PM10 and PM2.5 totals.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Pmcoarse (`pmcoarse`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange. Apply the mutually exclusive size reconciliation in calc_pm; do not add nested cumulative PM10 and PM2.5 totals.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Pmover10 (`pmover10`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange. Apply the mutually exclusive size reconciliation in calc_pm; do not add nested cumulative PM10 and PM2.5 totals.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

###### Water Vapour (`water_vapour`)

Net release of this single species to outdoor air, unspecified subcompartment; keep resin storage/reactor, dryer, press, cooling, finishing, boiler and abatement outlet source records separate. Use species-specific mass tests or a validated site balance; total VOC, NOx or a correction flow cannot replace this exchange.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded exchange per 1 kg reference flow after inventory adjustment and cohort attribution; collection protocol retains absolute total and denominator Q from cp_reference.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-pb-2002`; `epa-boiler-2022`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separation` | wood inputs and outputs | First subdivide or use measured causal drivers to separate dedicated wood, resin, heat and abatement burdens. Purchased sawmill co-products require documented supplier allocation; dry-mass allocation of joint source burdens is a declared baseline consistent with the cited study, not proof of zero price or zero burden. Retain a price/alternative-allocation sensitivity when economically different outputs make mass attribution uncertain. | `corrim-pb-2024` |
| `allocation_physical` | all physical exchanges | Preserve unallocated mass, water, carbon and internal heat/wood/resin transfers. Allocation shares apply to the separate environmental-burden account, not to physical co-product output, stock or internal-link quantity. Returned trim/fines are not independent sold products. Packaging and dedicated treatment remain attributable to the appropriate product. | `corrim-pb-2024` |
| `allocation_heat` | shared heat equipment | Use measured net useful heat delivered to each receiver to allocate shared boiler/resin heat burden; no fuel-only guessed efficiency or steam mass-only share. Disclose exports and losses. Exclude CHP from this route unless separately reviewed allocation and electricity exchanges are added. | `epa-boiler-2022`; `wilson-resins-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | uf_board | accepted net panel | measurement and traceable records | cohort; species/source; grade; thickness/length/width; net mass Q; release moisture; packaging tare; reject/return/opening/closing stocks | Calibrated net weighing; acceptance and thickness measurements; moisture sampling by oven-dry method or oven-validated calibrated meter. Preparation: Q is same-period inventory-adjusted accepted panel mass, excluding rejects and packaging. | kg; m; moisture fraction | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_feed` | uf_board | each wood origin and geometry | measurement and traceable records | delivery; supplier process/gate; species; dedicated/co-product/recovered status; wet mass; loose bulk Vb; independently measured solid Vs on supplier definition; wet bulk rho_b; solid rho_s; packing k = Vs/Vb; supplier/background reference quantity A_provider and unit/solid/bulk convention; converted period demand V_provider; provider scaling n_provider; source and reference moisture/state; contaminants; stocks; source allocation; recovery yield; loss destination | Weigh/sample each segregated lot; supplier forestry/chipping/sawmill stage records; recovered-wood contaminant acceptance and sorting mass balance. Inventory-adjust each source and preserve face/core and recycle links. Obtain the actual supplier/background reference A_provider and definition before volume linkage; measure same-lot densities/packing and matched moisture/state, using calibrated volume and mass methods. No database coefficient is a density; derive V_provider from matched measurements, scale the provider by V_provider/A_provider and normalize the native exchange V_provider/Q once. A_provider remains fixed; unknown conversion remains unresolved. | kg; m3; moisture fraction | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_recipe` | uf_board | each UF ingredient and additive | measurement and traceable records | actual batch id; supplier/site; full chemical recipe; delivery grade/concentration; formaldehyde/methanol/water assay; ingredient kg; solids/free urea/free formaldehyde; molar ratio; pH; reaction time/temperature; batch yields; delivered resin; press catalyst/wax doses | Calibrated ingredient dosing, delivery certificates and batch solids/free-formaldehyde tests; reconcile reactor feed, water, resin, purge and emissions. Supplier-expanded records use actual resin batches delivered to the board cohort; no guessed average chemical split. | kg; mass fraction; temperature; time; pH | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_water` | uf_board | purchased process water | measurement and traceable records | meter; use/stage; withdrawals; added dilution water; cooling makeup; wet-control water; recycled water; effluent; evaporation; stocks | Meter purchased treated water; reconcile solution-contained water and resin condensation water independently of purchases; distinguish internally circulating water. | kg; m3 | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_energy` | uf_board | delivered electricity | measurement and traceable records | meter; voltage; supplier/grid/location/year; kWh; equipment/stage; load hours; batch/cohort; shared recipients | Submeter resin, preparation, dryer fans, presses, finish, heat auxiliaries and controls; reconcile unique intervals to site meters and actual shared-service drivers. Convert metered kWh to MJ. | kWh; MJ | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_fuel` | uf_board | each external and internal fuel | measurement and traceable records | fuel id/species/origin; grade/blend; supplier; meter; wet mass; volume; density; moisture; carbon; LHV; absolute T/P; dry/wet convention; water content; gas composition; Z; meter Vm; background reference A_provider and unit/m3 definition; converted period demand V_provider; provider scaling n_provider; chip Vs/Vb/rho_b/rho_s/k and supplier definition; dryer/boiler/oxidizer/mobile equipment; stocks; internal clean-fines diversion | Meter/weigh separately by combustion equipment; supplier/background gas T/P, composition, dry/wet and Z definitions with actual reference A_provider; site wood volume/mass/moisture/LHV assays and matching solid/bulk A_provider definition. Keep physical measurements separate from resolved supply quantities; A_provider remains fixed; matched conversion yields V_provider, provider scaling is V_provider/A_provider and the native exchange is V_provider/Q once. Unknown definition/conversion remains unresolved. Reconcile external wood feed, internally diverted clean fuel and ash. Never use resin-bonded residues as clean untreated fuel. | kg; m3; MJ | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_heat` | uf_board | internal useful heat | measurement and traceable records | receiver; supply/return mass and enthalpy; temperature/pressure; condensate; steam quality; meter interval; losses; fuel input; resin/dryer/press demand; exported heat | Calibrated heat metering or supply-minus-return enthalpy balance with actual water/steam state; verify net delivered heat and match both link ends. Reconcile all receivers/losses to fuel and boiler balances; unknown heat basis remains unresolved. | kg; MJ; temperature; pressure | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_pack` | uf_board | each packing component | measurement and traceable records | film polymer; strap grade/route; wood spacer species; delivered/used/returned mass; reuse turns; cohort; pack tare | Weigh individual components and reconcile purchases, stocks, returns/reuse; exclude packaging from Q. Include other actual packing components as separate rows before claiming complete inventory. | kg | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_residue` | uf_board | each co-product/waste | measurement and traceable records | row/material; origin/stage; wet/dry kg; moisture; resin/contaminants; internal return/burning; sold quantity/prices; ash carbon; liquid assays; treatment destination; stocks | Segregated calibrated weighing and destination manifests. Keep internal residues in link ledger; distinguish clean versus resin-bonded, bottom/fly ash and liquid streams. Analyse treatment-relevant components; retain full physical amounts before burden allocation. | kg; mass fraction | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_air` | uf_board | each net outdoor-air species | measurement and traceable records | species/CAS; source vent/fugitive id; stage; control train; sampled mass concentration; actual/standard dry gas flow; oxygen/moisture correction; operating hours; start/stop; fossil/biogenic origin; PM cut size/filterable/condensable; detection limits | Species-specific accredited stack/source tests and flow monitoring, representative batch/season/operating loads; separate net control outlet from captured material and untreated inlet. Test NO and NO2 separately or retain unresolved speciation; no invented split of NOx. Resolve carbon origin and detection limits; preserve unspeciated VOC/PM as unquantified coverage gaps, not a fabricated species. | kg; mass/volume; gas volume/time | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |
| `cp_transport` | uf_board | inbound road service | measurement and traceable records | shipment; origin/destination; actual wet transported mass; distance; vehicle/payload; empty returns; transport mode; resin supplier transfer; carrier dataset | Use weigh tickets and carrier route/load records; calculate actual shipment tonne-km by mode. Exclude yard diesel already in own fuel account and avoid duplicate upstream transport. | t.km | each batch/lot and meter interval; period endpoints | complete declared accounting period including seasonal and start/stop variation | same product cohort; named resin supplier and board site; all shared recipients disclosed | per 1 kg reference flow | calibration; certificates; raw logs; reconciliation; uncertainty and gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | x_i = attributable inventory-adjusted exchange total / Q; Q is accepted net finished-panel kg from cp_reference. Reference output is 1 kg. Preserve absolute physical totals and attribution record separately. | cp_reference; all row collection protocols | normalized inventory | `corrim-pb-2024` |
| `calc_chip_supply_volume` | dedicated_chips; coproduct_chips; wood_fuel | At the same batch/state and matched solid/bulk definitions, k = Vs/Vb, m_wet = rho_b × Vb = rho_s × Vs. If the reference convention of A_provider is that same bulk basis, V_provider = Vb; if it is the compatible solid basis, V_provider = Vs = k × Vb. When reference moisture/state differs, first bridge conserved dry wood mass to the supplier reference moisture and measured corresponding density/packing; do not reuse source k or density across states. Declare fixed A_provider, unit, definition and evidence explicitly and retain converted period V_provider. Provider scaling is n_provider = V_provider/A_provider; normalize the native exchange V_provider/Q once without changing A_provider. Unknown A_provider/k/state leaves linkage incomplete; no FAO typical factor or database secondary property coefficient is a measured conversion. | cp_feed; cp_fuel; fixed supplier/background A_provider and definition; matched measurements; Q | fixed provider reference, raw/matched period volumes, process scaling and native per-kg exchange separately | `fao-ubet-volume`; `usda-handbook-2021` |
| `calc_gas_supply_volume` | natural_gas | For conserved gas amount with identical dry composition, V_provider = Vm × (Pm/Pb) × (Tb/Tm) × (Zb/Zm), using absolute temperatures/pressures and background reference b. The wet meter volume Vm requires measured water-vapour fraction and a validated dry/wet correction before this expression; differing composition or unsupported Z/reference conditions requires further supplier verification, not an assumed ideal-gas conversion. Keep actual Vm, converted period V_provider and fixed A_provider separately; n_provider = V_provider/A_provider and the native exchange V_provider/Q is normalized once. | cp_fuel; fixed supplier/background A_provider and T/P/composition/wet-dry/Z; Q | matched period V_provider, fixed A_provider, process scaling and native m3/kg separately | `epa-pb-2002` |
| `calc_wood_water` | wood and panel ledgers | m_dry = m_wet/(1+u); u = (m_wet-m_dry)/m_dry; w = u/(1+u). Reconcile dry wood, retained resin/additives, water carried in/added/generated, finished panel, external waste/emissions and stock changes; internal returns cancel only in aggregate and retain matched stage transfers. | cp_reference; cp_feed; cp_recipe; cp_water; cp_residue; cp_air | dry wood and water balances | `usda-handbook-2021` |
| `calc_recipe` | UF recipe and retained resin | Ingredient/formulation constituent mass = actual dosed product kg × batch-assayed mass fraction. Attribute supplier batch inputs/losses by actual resin quantity transferred to the board cohort; retain reaction yield, condensation water and loss balance. Do not add internal liquid UF resin as a second external input, and do not equate urea plus formaldehyde input mass with cured dry polymer mass. | cp_recipe; cp_water; cp_air; cp_residue | component and retained-solids ledger | `wilson-resins-2010` |
| `calc_heat` | heat receivers and fuel | Electricity MJ = kWh × 3.6. Fuel energy = measured fuel quantity on declared basis × matching measured LHV. Useful heat = supplied mass × supplied enthalpy minus returned mass × return enthalpy, corrected for documented losses/condensate. Reconcile receiver totals; unknown enthalpy/reference conditions prohibit a usable heat quantity. | cp_energy; cp_fuel; cp_heat | input energy and net useful heat separately | `epa-boiler-2022` |
| `calc_air` | species emissions | Integrate same-basis measured species concentration × dry gas volume over actual operating time; add separately measured fugitive sources once. Use consistent moisture/oxygen/temperature corrections and uncertainty. Do not infer site kg from a product chamber-test concentration, LCIA CO2-equivalent or VOC-as-carbon total. | cp_air | single-species net outdoor-air mass | `epa-pb-2002` |
| `calc_pm` | pm25; pmcoarse; pmover10 | On one common source, period and filterable/condensable definition: PM2.5 fraction = cumulative PM2.5; PM2.5–PM10 fraction = cumulative PM10 minus cumulative PM2.5; >PM10 fraction = total PM minus cumulative PM10. Require nonnegative results and measured compatible totals. Condensable PM must be assigned with documented size evidence or remain a separate unresolved exchange; no zero or guessed PM split. | cp_air | three non-overlapping fractions | `epa-pb-2002`; `epa-boiler-2022` |
| `calc_carbon` | wood/fuel/resin physical balances | Use measured dry material carbon and fossil/biogenic provenance. Reconcile carbon in panel, sold material, residues/ash, stocks, CO2, CO, methane and each measured organic species. Derive CO2 only from a validated residual carbon balance with 44/12, separately by origin; retain biogenic CO2 in LCI and disclose stored biogenic carbon separately from LCIA. No automatic negative CO2 at the factory for wood growth already in upstream datasets. | cp_feed; cp_recipe; cp_fuel; cp_residue; cp_air; cp_reference | separate fossil/biogenic carbon balances | `corrim-pb-2024`; `epa-boiler-2022` |
| `calc_allocation` | environmental burden ledger only | For eligible joint source outputs a_j = dry output mass j / total eligible dry output mass; B_j = a_j × joint burden + dedicated burden j. Use period-matched sale values for economic sensitivity and measured useful-heat shares for shared heat. Physical output and internal links retain full measured quantities. | cp_feed; cp_residue; cp_heat; actual joint burdens and prices | allocated environmental burden account | `corrim-pb-2024` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_cohort` | all rows | Same recipe/specification/period Q; retain source and supplier scope, sampling representativeness and opening/closing stocks. No factory records have been obtained by this methodology itself. | cp_reference; cp_feed; cp_recipe |
| `quality_complete` | all flows | Assess every actual chemical, fuel, packing component, waste and species. Unmeasured, unavailable, below-detection and physically absent are distinct states. Extra actual ingredients or fuel routes require additional atomic rows and verified identities before dataset completeness; no aggregate adhesive family or VOC-total row. | cp_recipe; cp_fuel; cp_pack; cp_air |
| `quality_evidence` | numeric parameters | Use primary site/supplier measurements or independently justified exact-route factors with source location, units, control/device/species/fuel applicability and uncertainty. CORRIM 2021/2022 board and Wilson 2005 resin averages are not generic site quantities; no numerical range is prescribed here. | original records and source applicability |
| `quality_identity` | all UUIDs and gaps | Flow UUID is identity only; verify type, media, formulation, delivery state/route, reference property and unit against actual exchange. Verified Volume/m3 does not establish the actual supplier/background reference quantity A_provider; solid/bulk chip definitions, same-lot packing/moisture and gas T/P/composition/wet-dry/Z must support the linkage. Blank UUID is unresolved, not proof of zero or database absence. No correction flow or unrelated stereoisomer/species is a substitute. | identity and support evidence |

Each protocol prepares unique attributable, inventory-adjusted period totals before aggregation; divide each exchange total by the same Q kg accepted net panel from cp_reference. A supplier resin batch is first attributed by the measured quantity transferred to the board cohort. Retain both absolute quantities and the resulting per 1 kg reference-flow values. No per-machine collection basis is used.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Declare all qualifiers and one same-cohort reference output. Uncoated wood particleboard identity cannot be established by CPC label alone; supplier recipe expansion and finished state must agree. | `usda-handbook-2021` |
| `validate_balance` | all physical exchanges | Use Q excluding packaging/rejects. Reconcile physical mass/water/carbon, actual wood losses, UF reaction/transfer yield and full internal-link equality; keep environmental allocation separate. Missing measurements or negative PM residuals remain unresolved. | `corrim-pb-2024`; `wilson-resins-2010` |
| `validate_emissions` | air and heat | Identify species, outdoor-air subcompartment, origin and units; no nested PM addition, total VOC proxy, guessed NOx split or suppressed biogenic CO2. Owned boiler and dryer boundaries remain separate in raw logs. Steam MJ without verified net supply/return basis is unresolved. | `epa-pb-2002`; `epa-boiler-2022` |
| `validate_release` | data package | Before a usable dataset claim, resolve all applicable UUID/unit, supplier/background reference-quantity A_provider and chip/gas conversion, recipe, heat and emissions gaps, justify absent rows, add missing atomic exchanges and provide original records plus allocation sensitivity. Candidate methodology and software checks are not independent scientific approval. | `corrim-pb-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to declared wood-panel product supply models with verified applicability |
| allowed_use | Cradle-to-factory-gate LCI after linking exact upstream supply and waste treatment; distinguish expanded resin foreground from board-mill-only activity |
| excluded_use | OSB, non-wood/fiber/faced/molded products; other/unknown resin routes; use-phase exposure, service equivalence, end-of-life credits; publication without completed data |
| required_metadata | All reference qualifiers; board/resin sites and gates; reference UUID/property/unit; Q; supplier/formulation/wood-source provenance; heat and emission methods; packaging and allocation |
| required_quality_disclosure | Temporal/geographical/cohort coverage, measurements and gaps, detection limits, unresolved identities, allocation convention/sensitivity, separate physical carbon and environmental account |
| update_trigger | Recipe/wood origin/contamination/grade/density/thickness/moisture/press/heat/control changes; supplier data revisions or flow-identity correction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-handbook-2021` | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), chapters 4 (moisture), 10 (adhesives), 11 pp. 11–11 to 11–12 (particleboard). https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Particle versus OSB/fiber architecture, dry forming and moisture definition; qualitative scope only, no generic recipe/density adoption |
| `corrim-pb-2024` | literature | Puettmann, CORRIM, Cradle-to-grave Life Cycle Assessment of North American Particleboard, November 2023; revised April 3, 2024 (after March 22 ASTM verification). Sections 3.2.4–3.2.8 pp.18–19; 6.1 pp.26–27; 6.3/Table 9 pp.27–29. https://corrim.org/wp-content/uploads/2024/07/PB-Cradle-to-grave-LCA-Final.pdf | 2021/2022 survey, twelve facilities (9 US/3 Canada), source and process anatomy, co-product allocation; no transfer of region-weighted recipe/energy/density, downstream life or disposal scenarios |
| `epa-pb-2002` | official_guidance | US EPA AP-42 Section 10.6.2 Particleboard Manufacturing, June 2002, pp.10.6.2-1–5, Figure 10.6.2-1, emissions tables with original device/fuel/control footnotes. https://www.epa.gov/sites/default/files/2020-10/documents/c10s06-2.pdf | Manufacturing stages, distinct board architecture, dryer/press/finishing species and controls; old average factors are not site defaults |
| `epa-boiler-2022` | official_guidance | US EPA AP-42 Section 1.6 Wood Residue Combustion In Boilers, March 2022, sections 1.6.1–1.6.3 and Tables 1.6-1/1.6-2 footnotes. https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | Separate boiler fuel, firing/controls and particulate/species scope; no factor transfer to resin-bonded fuel or dryer |
| `wilson-resins-2010` | literature | Wilson, Life-cycle inventory of formaldehyde-based resins used in wood composites in terms of resources, emissions, energy and carbon, Wood and Fiber Science 42 (2010), 125–143, manufacturing process pp.127–128 and UF material inventory. https://corrim.org/wp-content/uploads/2017/12/WFS_SI_LCI_Formaldehyde-based_Resins_in_Wood_Composites-Resources_Emissions_Energy_Carbon.pdf | US 2005 resin survey, ingredient/reactor/pH/solids anatomy only; original largely starts from methanol-to-formaldehyde, unlike this purchased aqueous feed; no surveyed recipe amounts adopted |
| `fao-ubet-volume` | official_guidance | FAO, Unified Bioenergy Terminology (UBET), Section 5.1.3 Mass, Volume and Density. https://www.fao.org/4/j4504e/j4504e08.htm | Distinguish solid/bulk volume and moisture-dependent density; definitions only, actual supplier/background A_provider and same-batch measured conversion required; no typical tabulated factor/density adopted |
