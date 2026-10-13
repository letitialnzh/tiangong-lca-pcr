---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-uncoated-graphic-paper-and-paperboard-wood-free
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Uncoated virgin chemical-pulp printing and writing paper from non-integrated mills

## 1. Scope and Applicability

This method covers non-integrated mills making, accepting and delivering unprinted uncoated printing/writing paper from purchased bleached virgin non-dissolving chemical wood pulp, in reels or cut sheets. Wet-end filling, actual internal sizing, non-pigmented starch surface sizing, after-drying, calendering, mill cutting and packaging are included. The representative product is ordinary non-laminated Munken Pure printing paper made at Munkedal; footnoted laminated catalogue variants are excluded. The originals establish an uncoated woodfree product in reels/sheets and an external-pulp mill route. [arctic-munken-pure-specification; arctic-munkedal-emas-2024]

Wood-free is a papermaking term, not an absence of wood fibres. The JRC glossary allows a small non-chemical-pulp share in the wider woodfree class. This method deliberately covers the narrower virgin chemical-pulp route with no intentional mechanical, semi-chemical, CTMP or post-consumer recovered-pulp input, apart from same-grade internal broke return. Each lot must establish kraft (sulphate) or sulphite pulping, hardwood/softwood and actual species, and bleaching route. Woodfree alone proves neither a kraft furnish nor an absence of wood. Public producer originals do not disclose the specific Munken Pure furnish recipe; no proportions are assumed. [jrc-pulp-paper-bref-2015]

Exclude pigmented coated printing paper, newsprint, photosensitive/thermal/electrosensitive base paper, wallpaper base, dedicated kraft packaging paper, paperboard, laminated board, integrated pulp manufacture, and finished printing, ink, binding or book content. Suitability for offset printing does not put printing inside paper manufacture. Collect grades, pulp routes, surface treatments and delivery forms separately; a classification label cannot substitute for applicability.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-uncoated-graphic-paper-and-paperboard-wood-free |
| classification_refs | CPC 3.0 32129; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Bleached virgin chemical wood-pulp uncoated printing/writing paper; non-pigmented surface sizing; reels or cut sheets; non-integrated mill |
| excluded_products | Mechanical/recovered-furnish grades; pigmented coated/special functional papers; packaging grades; paperboard; laminated/printed products; integrated pulp making |
| representative_product | Munken Pure ordinary non-laminated uncoated offset-printing paper, Arctic Paper Munkedal; product identity example, no plant-average recipe |
| production_route | Purchased certified chemical pulp → slushing/refining/blending → sheet formation/pressing → drying → actual sizing/after-drying → calendering → reeling or sheeting → packaging/acceptance; water treatment and utilities included |
| market_state | Unprinted accepted paper at mill gate at measured delivery moisture; reel or sheet dimensions and surface specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide unprinted paper substrate for printing/writing |
| How much | 1 kg net accepted unprinted paper |
| How well | Declared grade, grammage, moisture, surface sizing, calender finish, dimensions and customer acceptance tests; no common print-run equivalence |
| How long or cycle | One manufacture-and-delivery cycle at mill gate; no service-life or printed-content credit |
| reference_flow_link | `reference_out` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | mill/site; reporting period; non-integrated boundary; grade and intended writing/printing use; virgin chemical pulp species and kraft/sulphite lots; bleaching; no intentional mechanical/recovered fibre; filler and sizing recipe; non-pigmented surface; grammage; measured moisture; reel/sheet dimensions; calender finish; net paper versus packaging/core mass; utility/treatment suppliers; quantity/background compatibility; allocation and cut-offs |

Declare all required qualifiers in dataset metadata or equivalent product fields. The product UUID is a broad physical identity used only for this explicitly restricted printing/writing subset; it does not select a packaging-paper or incompatible pulp-route background process.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is reporting-period net accepted paper at mill gate, including actual moisture, filler and retained size, excluding packaging, cores and rejects; all inventory amounts are per 1 kg reference flow, using cp_output. |
| `dry_basis` | pulp, chemicals, sludge and paper | Mass | kg | Keep delivered mass, dry solids and active-ingredient bases separately and convert from measured moisture/solids; no universal air-dry-pulp factor or paper moisture. |
| `energy_basis` | grid_electricity; purchased_heat; gas_pipeline; lng | actual row property | MJ; m3; kg | The electricity NCV/MJ unit group permits kWh × 3.6 conversion; steam heat GCV/MJ must match supplier definition and delivered enthalpy balance; gaseous fuel volume requires compatible supplier T/P and wet/dry composition. |
| `emission_basis` | all elementary outputs | row species, indicator or volume property | kg; m3 | Preserve oxygen equivalents for COD/BOD, elemental TN/TP, and chlorine-equivalent AOX with compatibility verification; separately establish NOx NO2-equivalent definition; particle bins do not overlap; unknown quantity definitions are unavailable for dataset linking. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | External pulp/additives/packaging received at mill, external electricity/heat delivered, or river water abstracted onsite; end at accepted unprinted paper dispatch |
| starting_condition_role | Physical foreground interface, not an upstream cut-off or zero-burden claim |
| product_classification_scope | Narrower subset of CPC 3.0 32129: non-integrated virgin chemical-pulp printing/writing paper only |
| recursive_input_rule | Same-grade internal broke remains a measured matched loop inside the mill; an external same-category paper input must be recorded and linked upstream, with a separate applicable method if its furnish/route changes category |
| upstream_dataset_requirement | Named supplier-compatible pulp, filler, chemical, packaging, utility and external-treatment datasets; identity UUID is not a complete supplier dataset |
| disclosure | Report onsite/offsite ownership and utility/treatment boundaries, actual steam reference state, internal loops, grade change, rejected output, transport boundary and missing foreground/background data |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_mill` | mill production | Include reception, stock preparation, forming/pressing, drying, actual sizing/after-drying, calendering, rewinding/cutting, packaging and mill acceptance; stage meters remain distinct within one aggregate foreground unit. | arctic-munkedal-emas-2024; jrc-pulp-paper-bref-2015 |
| `boundary_upstream` | supplier interfaces | Do not move chemical-pulp cooking, bleaching or recovery into a non-integrated paper mill. Link the actual upstream chemical-pulp route and all external deliveries; inbound transport is linked separately if not in supplier delivery datasets. | jrc-pulp-paper-bref-2015 |
| `boundary_utilities` | utility and treatment ownership | Include actual onsite production/treatment operations and direct emissions once, or use supplier datasets for external operations. A contracted boiler on the premises still needs explicit ownership/boundary; no imported heat plus duplicated provider exhaust. If using self-generated electricity, identify its generator and emissions instead of relabelling it grid power. | arctic-munkedal-emas-2024 |
| `boundary_water` | water circuits | Record actual abstraction/purchased make-up, final discharge, product/sludge water, evaporation, return/export and storage change. White-water recirculation, broke return and condensate have equal physical quantities at both ends and no repeated environmental exchange. | jrc-pulp-paper-bref-2015 |
| `boundary_dust` | dry finishing and exhaust | Inspect cutting and rewinding dust sources and final outlets/fugitive releases; distinguish released particle fractions from captured dust and internally recycled material. Combustion dust uses actual included boiler evidence, not woodworking or sawmill factors. | jrc-pulp-paper-bref-2015 |
| `boundary_exclusions` | downstream operations | Stop at accepted unprinted reels/sheets at mill gate. Printing images/text, ink, binding, books, use, offsite delivery and end-of-life are downstream modules, never paper-mill manufacturing inventory. | arctic-munken-pure-specification |
| `boundary_extensions` | actual recipe and equipment | The listed conditional flows are specific candidates, not a universal recipe. Every additional actual chemical, filler, packaging component, fuel, water source, refrigerant leak, waste and emission needs a separate atomic exchange and collection evidence; no bundled residual row or silent omission. | jrc-pulp-paper-bref-2015 |
| procurement_preparations | bought complete slurry, sizing and treatment preparations | Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `paper_mill` | Paper-mill manufacture and delivery (aggregate of stage measurements) | required | When method applies | Foreground production and actual support operations | 1 kg reference flow |

Physical stage map: purchased pulps prepared separately → formation/pressing → drying → actual sizing/after-drying → calendering → rewinding/cutting → packaging/acceptance; wet/dry broke, white water and condensate have matched return loops. Retain stage meters and wet/dry balances; internal transfers of the same material are not second product outputs. Only reference_out is the reference product output. All amounts are per 1 kg reference flow; protocols preserve the unallocated physical ledger before the attributable burden ledger.

### Process: Paper-mill manufacture and delivery (`paper_mill`)

#### Inputs

##### Product flows

###### Purchased bleached hardwood kraft papermaking pulp (`pulp_hw_kraft`)

Only supplier-confirmed bleached virgin hardwood kraft pulp, other than dissolving grade. Record each supplier lot separately; the broad UUID is not a species, bleaching sequence or pulp-recipe claim. Do not infer kraft from woodfree. Report net purchased pulp mass and measured dry solids; no default air-dry factor.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_furnish`
- Sources: `jrc-pulp-paper-bref-2015`; `arctic-munkedal-emas-2024`

###### Purchased bleached hardwood sulfite papermaking pulp (`pulp_hw_sulfite`)

Only supplier-confirmed bleached virgin hardwood sulfite pulp, other than dissolving grade. Record each supplier lot separately; the broad UUID is not a species, bleaching sequence or pulp-recipe claim. Do not infer sulfite from woodfree. Report net purchased pulp mass and measured dry solids; no default air-dry factor.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_furnish`
- Sources: `jrc-pulp-paper-bref-2015`; `arctic-munkedal-emas-2024`

###### Purchased bleached softwood kraft papermaking pulp (`pulp_sw_kraft`)

Only supplier-confirmed bleached virgin softwood kraft pulp, other than dissolving grade. Record each supplier lot separately; the broad UUID is not a species, bleaching sequence or pulp-recipe claim. Do not infer kraft from woodfree. Report net purchased pulp mass and measured dry solids; no default air-dry factor.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_furnish`
- Sources: `jrc-pulp-paper-bref-2015`; `arctic-munkedal-emas-2024`

###### Purchased bleached softwood sulfite papermaking pulp (`pulp_sw_sulfite`)

Only supplier-confirmed bleached virgin softwood sulfite pulp, other than dissolving grade. Record each supplier lot separately; the broad UUID is not a species, bleaching sequence or pulp-recipe claim. Do not infer sulfite from woodfree. Report net purchased pulp mass and measured dry solids; no default air-dry factor.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_furnish`
- Sources: `jrc-pulp-paper-bref-2015`; `arctic-munkedal-emas-2024`

###### Ground calcium carbonate filler (`filler_gcc`)

Only ground calcium carbonate actually delivered for wet-end filling; verify particle size, solids, treatment and supplier background. Record slurry carrier water separately when modelling dry CaCO3; reconcile complete supplied formulation versus dry-active basis once, with supplier gate/region/year and actual native Mass reference agreement. Source CAS is absent and mineral-family CPC15200 does not verify ground-filler grade or processing; actual chemistry and route require supplier proof. Purchased filler manufacture is upstream; no onsite PCC reactor is assumed. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.

- Selected flow: Calcium carbonate `699cf1be-0ca2-4c34-af60-fd58a8e9d549`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### Precipitated calcium carbonate filler (`filler_pcc`)

Only precipitated calcium carbonate actually delivered for wet-end filling; verify particle size, solids, treatment and supplier background. Record slurry carrier water separately when modelling dry CaCO3; reconcile complete supplied formulation versus dry-active basis once, with supplier gate/region/year and actual native Mass reference agreement. Source CAS is absent and mineral-family CPC15200 does not verify PCC manufacture; actual chemistry and route require supplier proof. Purchased filler manufacture is upstream; no onsite PCC reactor is assumed. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.

- Selected flow: Calcium carbonate `699cf1be-0ca2-4c34-af60-fd58a8e9d549`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### Cationic starch for wet-end strength (`starch_wet`)

Conditional on the actual wet-end recipe. Verify modification, substitution, delivered solids and dry-active basis; generic native starch is not proof of a cationic derivative.

- Selected flow: Cationic starch for papermaking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### Native starch for surface sizing (`starch_surface`)

Use only when the surface-size batch contains native starch; identify crop source and batch, cooking and water addition. Treat oxidized or cationic starch as separate exchanges.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### Oxidized starch for surface sizing (`starch_oxidized`)

Conditional on supplier-confirmed hypochlorite-oxidized starch matching the record; do not assume all mill starch is this derivative. Measure delivered product and active solids.

- Selected flow: Oxidized starch `539d5015-900f-4778-89d1-499f7855edf9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### AKD internal sizing emulsion (`akd_size`)

Conditional on actual AKD emulsion use; confirm emulsification route, active fraction, stabilizer and water accounting. No row metadata concentration becomes a default recipe. Obtain complete as-supplied emulsion composition and native product/reference correspondence; do not assign all emulsion mass to pure AKD or double-count its carrier/additives. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.

- Selected flow: Alkyl Ketene Dimer `095d668d-6196-43d7-82b2-655ac9d26693`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### CPAM retention aid (`retention_aid`)

Only actual cationic polyacrylamide retention aid; verify charge, complete supplied formulation, active solids/carrier and supplier native-product reference correspondence; count supplied product or constituents once. Other polymers require their own atomic rows. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### Purchased medium-voltage electricity (`grid_electricity`)

Consumer-side grid-average 1–35 kV alternating current only. Meter stock preparation, vacuum, dryers, calender, cutting, packaging and treatment separately, then aggregate attributable purchases once. Raw source geography is CN; actual supplier region/year, voltage/user gate, losses and native MJ reference must match before background linkage. Do not use this grid-mix identity for self-generated hydroelectricity; separately identify that supply and its upstream generator if present.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-pulp-paper-bref-2015`

###### Purchased steam heat for drying (`purchased_heat`)

Industrial-boiler steam heat only. Its reference property is Gross calorific value, not proof of useful delivered heat. Supplier background quantity definition must be reconciled to metered steam/condensate enthalpy, pressure, temperature, dryness, return and losses before linking. The record benchmark is not adopted. Pressure-specific steam mass flows cannot be substituted without matching actual pressure. Deduct only boundary losses not already reflected in the delivery meter; retain actual supplier region/year/gate and industrial-boiler production correspondence, rather than treating a GCV label or record benchmark as measured net enthalpy.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `jrc-pulp-paper-bref-2015`

###### Pipeline natural gas for onsite heat (`gas_pipeline`)

Conditional on actual pipeline gas supply, not LNG tanker delivery. Reference quantity is Volume/m3. Preserve supplier reference T/P, dry/wet composition and compressibility; verify background m3 convention. Secondary mass coefficient is not a density. Onsite boiler exhaust is foreground; do not also purchase its generated heat.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources: `jrc-pulp-paper-bref-2015`

###### Delivered liquefied natural gas for onsite heat (`lng`)

Conditional on actual tanker-delivered liquefied natural gas, not pipeline gas. Official liquified natural gas has liquefaction/impurity-removal routes at the liquefaction plant; its quantitative reference points to Mass/kg. The source reference Mass coefficient 0.45 is a quantity-metadata anomaly, not density, liquid volume or a factory conversion/default. Obtain supplier agreement on native mass/reference quantity and actual liquefaction route, composition, cryogenic state, delivered gate, region/year and intervening transport; identity does not make that factory-gate background a delivered-mill supply. Calibrated tank/weighing receipts, stock changes, withdrawals, vaporization, returned material and measured boil-off/vented methane require a reconciled physical mass ledger. Do not multiply measured kg by source secondary coefficients or count regasified internal gas as another purchased input; unknown provider correspondence remains unresolved.

- Selected flow: Delivered liquefied natural gas for on-site heat `e874538a-945d-47ba-92f1-efb610a30277`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources: `jrc-pulp-paper-bref-2015`

###### Purchased treated process make-up water (`purchased_water`)

Use only for treated water crossing the mill gate as a purchased product; if water is abstracted and treated onsite, use river_abstraction instead. Internal white water, dilution, starch cooking and condensate circulation are stage records, not additional external make-up water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### Unbleached kraft-paper reel wrapper (`wrapper_paper`)

Only one actual unbleached uncoated kraft-paper reel wrapper confirmed by the packing bill. Official Uncoated printing, writing and packaging paper is a broad paper family with empty treatment route; its packaging-paper name can locate this actual material, not a paper bag or wet/internal web. Verify kraft pulping, unbleached state, actual fibre/species and recycled content, sheet construction, grammage/moisture, absence of pigment/polymer coating and supplier region/year/gate/native Mass quantity. Record any separately supplied liner/polymer layer as its own exchange; do not invent a furnish recipe or assume the wrapper is the reference printing paper. Raw CPC32129 graphic-paper classification does not verify this packaging subset: preserve source-classification clarification and provider compatibility debt. Weigh actual transferred wrapper mass separately from Q.

- Selected flow: Unbleached uncoated kraft-paper reel wrapper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `arctic-munkedal-emas-2024`

###### Delivered paperboard reel core (`paper_core`)

Only disposable or transferred reel cores crossing the gate; exclude returned reusable machine tambours. Measure core mass, construction and actual reuse count.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `arctic-munkedal-emas-2024`

###### Transferred wooden shipping pallet (`pallet`)

Only actual wooden load boards; record mass and pooled/returnable ownership and use allocation, without imposing EURO dimensions.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `arctic-munkedal-emas-2024`

###### Polyethylene protective film (`pe_film`)

Only if the shrink/stretch wrap is confirmed polyethylene; verify actual formulation and supplier. CAS and physical film description support identity; the unrelated source CPC field requires disclosure and clarification.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `arctic-munkedal-emas-2024`

###### Recycled-paperboard protective pallet lid (`cover_board`)

Only the actual protective lid, with board construction, fibre route and coating specified; do not assume corrugated construction from cardboard wording.

- Selected flow: Recycled paperboard protective lid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `arctic-munkedal-emas-2024`

###### Sodium hydroxide cleaning input (`clean_caustic`)

Conditional only on actual industrial sodium hydroxide delivered at the record purity 95%–98%. Verify supplied solid/product state and batch assay; a dilute cleaning solution or a different purity needs a separate matching exchange and actual carrier-water accounting. No pulp cooking is implied.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### Urea nutrient for biological treatment (`ww_urea`)

Conditional on the actual biological-treatment recipe using one supplier-confirmed urea product, CAS57-13-6. Official Urea explicitly covers virgin industrial ammonia/CO2 synthesis meeting agricultural-urea standards and industrial applications; verify the actual route/grade, assay, solid supplied form, impurities/coating, complete supplied-product versus active/N basis and supplier gate/region/year/native Mass quantity. Keep dissolution/carrier water separate under one consistent formulation accounting scheme. Unspecified nitrogen nutrient, nitrogen-equivalent fertilizer, urea resin or a blended nutrient is not automatically urea. The mill source establishes N nutrients, not this species, its purity or a positive dose.

- Selected flow: Urea nutrient for biological treatment `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### Phosphoric acid nutrient for biological treatment (`ww_acid`)

Conditional on one actual supplier-confirmed orthophosphoric-acid biological-treatment nutrient. Official Phosphoric acid is finished manufactured Product Mass/kg without a concentration or specific manufacturing-route descriptor; the raw record has no CAS or formulation assay. Actual supplier/SDS must establish H3PO4, actual CAS7664-38-2, grade/manufacture, supplied solid/solution state, concentration, water/impurities and native supplied-product versus active-acid reference agreement, including gate/region/year. Actual supplier CAS is not a CAS verified in this raw source. Measure actual delivery/dose and reconcile stocks; carrier/dilution water and additional formulation components must be counted once under the chosen supplied-product or constituent scheme. Do not assume 85%, a wet-process weak-acid route, manufacture or dosage. Unspecified phosphorus nutrients do not prove phosphoric acid. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.

- Selected flow: Orthophosphoric acid nutrient for biological treatment `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

###### CPAM wastewater flocculant (`ww_cpam`)

Separate from wet-end retention use. Include only actual cationic polyacrylamide in the treatment recipe; different charge/polymer/coagulant must be separate verified exchanges. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### Direct river-water abstraction (`river_abstraction`)

Resource from water, renewable water, only actual river abstraction. Include intake treatment and its actual chemicals, electricity, residues and discharge in the mill foreground. Keep purchased treated water separate; do not count an internally treated transfer a second time.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Product flows

###### Accepted unprinted paper at the mill gate (`reference_out`)

Exactly 1 kg net accepted unprinted paper at measured dispatch moisture; fillers and retained sizing are part of paper, transport packaging and reel cores are excluded from net paper mass. Limit the broad flow to this PCR chemical-pulp printing/writing grade, reels or cut sheets; no packaging-paper or printed-content burden.

- Selected flow: Accepted unprinted uncoated virgin-chemical-pulp printing and writing paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `arctic-munken-pure-specification`

##### Waste flows

###### Externally dispatched uncoated paper trim and rejects (`external_broke`)

Only actual external waste paper, with moisture, filler/sizing contamination, destination and recovery status. Internal wet/dry broke is a matched return loop, not external waste or an avoided-product credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `jrc-pulp-paper-bref-2015`

###### Externally dispatched collected paper-cutting dust (`collected_dust`)

One actual separately captured nonmetal paper-cutting/rewinding dust stream externally dispatched, conditional on documented equipment and occurrence. Official Dust is a broad industrial-collector Waste Mass/kg identity without a specified treatment route, not an air elementary flow or clean wood dust. Weigh collection containers with tare and stock changes; assay actual fibre, mineral filler, retained sizing/chemical contamination, moisture, biogenic/fossil/carbonate carbon and hazard; verify the lawful accepting receiver/provider treatment, region/year/gate and native as-collected mass compatibility. Track total capture, internal recovered return and external consignments separately; internal returned dust is a matched stage link, never an exported waste or avoided-pulp credit. Split distinct physical collectors/destinations. No default positive dust amount or collection percentage is inferred from a cutting source.

- Selected flow: Externally dispatched collected paper-cutting dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `jrc-pulp-paper-bref-2015`

###### Primary fibre/filler treatment sludge (`sludge_primary`)

Separate actual sludge stream, measured wet mass and dry solids, contaminants, dewatering and treatment destination. Never duplicate a mixed sludge total across primary and biological rows; soil use is a downstream route, not a credit assumed here.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `arctic-munkedal-emas-2024`; `jrc-pulp-paper-bref-2015`

###### Biological wastewater-treatment sludge (`sludge_bio`)

Separate actual sludge stream, measured wet mass and dry solids, contaminants, dewatering and treatment destination. Never duplicate a mixed sludge total across primary and biological rows; soil use is a downstream route, not a credit assumed here.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `arctic-munkedal-emas-2024`; `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### Liquid water to receiving fresh water (`discharged_water`)

Only the actual final liquid-water component emitted to the named receiving fresh-water body after included on-site treatment, with measured bypass/split streams separately identified. Official Water, CAS7732-18-5, is an Elementary freshwater emission, native Volume/m3, not abstraction or vapour. Measure bulk effluent volume/mass, representative actual composition/temperature-dependent bulk density and independently validated water mass fraction; obtain actual water-component mass, then corresponding compatible water-component volume using a verified density/state/reference convention. Total mixed effluent volume/mass and COD are not automatically pure water. Retain bulk outfall volume for COD/BOD/TSS/N/P/AOX loads; all indicator media/location/timing must match this freshwater boundary, with no internal-loop or external-treatment emission duplication. Unknown fraction/density/reference compatibility remains a dataset gap; no pure-water density or water fraction is a default.

- Selected flow: Final liquid-water component discharged to receiving fresh water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_effluent measured final water-component mass and compatible density to calculate native water m3; normalize once by Q. Keep bulk effluent volume for pollutant loads and reconcile freshwater boundaries and actual splits.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Evaporated water to outdoor air (`vapor`)

Outdoor air unspecified, gaseous water, including measured dryer/after-dryer loss. Use a water balance or verified exhaust flow/humidity, not a fixed drying-loss coefficient.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### COD to receiving fresh water (`cod`)

Fresh-water emission of oxygen-demand indicator, kg O2 equivalent. Measure final discharge flow and COD concentration with aligned intervals; no conversion to a chemical species or carbon mass.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### BOD to receiving fresh water (`bod`)

Fresh-water oxygen-demand indicator; retain BOD5/BOD7 analytical duration and method. Do not combine their results or infer BOD from COD. COD/BOD are overlapping diagnostics, not additive physical organic masses.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Suspended solids to receiving fresh water (`tss`)

Only actual final-discharge suspended solids, with filtration method and dry-solids basis. A water-unspecified record or dissolved-solids record does not establish this freshwater suspended-solids identity.

- Selected flow: Total suspended solids, to fresh water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Total nitrogen to receiving fresh water (`nitrogen`)

Fresh water, total nitrogen excluding N2, measured as elemental N mass. Do not add ammonia/nitrate species on top of the same total; identify overlap if species are also reported.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Total phosphorus to receiving fresh water (`phosphorus`)

Fresh water, total P as elemental phosphorus, not phosphate compound mass. Prevent duplicate total/speciated discharge.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### AOX to receiving fresh water (`aox`)

Fresh-water AOX aggregate indicator; preserve laboratory reporting as chlorine-equivalent and confirm compatibility with the aggregate flow/LCIA definition. No default positive discharge; prove absence if not applicable. Do not add identified halogen species to the same aggregate.

- Selected flow: adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Fossil carbon dioxide (`co2_fossil`)

Only direct mill fossil-carbon emissions, excluding purchased electricity/heat provider emissions already in upstream datasets. Measure combustion and process carbonate carbon separately; no tonne-of-paper factor. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Biogenic carbon dioxide (`co2_bio`)

Include actual direct biological-treatment and any included biogenic-fuel carbon release separately from fossil CO2; a GHG reporting convention excluding biogenic CO2 does not remove it from the LCI. Do not treat stored fibre carbon as a negative mill emission. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Direct nitrogen oxides (`nox`)

NOx aggregate excludes N2O. Mass/kg does not prove an NO2-equivalent basis; reconcile monitor, LCI and LCIA quantity definitions before use. Do not duplicate NO/NO2 species with an aggregate. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Direct sulfur dioxide (`so2`)

Record SO2 species only, not SOx or elemental S totals without an evidenced conversion. Include only direct mill exhaust, not supplier boiler emissions counted in purchased heat. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Released particles below 2.5 micrometres (`pm25`)

Measure actual released fine particles from dry cutting, rewinding and included combustion/handling, after collection controls and including fugitive loss. Use the same measured size definition and boundary as the selected PM2.5 flow. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Released particles 2.5–10 micrometres (`pm_coarse`)

Only the non-overlapping 2.5–10 micrometre fraction. If reported PM10 is cumulative, subtract compatible PM2.5 measurements; never add cumulative PM10 to this fraction. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Released particles above 10 micrometres (`pm_large`)

Only the >10 micrometre fraction released outside collection equipment/building boundary; reject PM10 cumulative substitutes. Reconcile measured total emitted particulate and captured dust separately. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Alternative unsized released particulate (`pm_unspecified`)

Use only for a measured emission whose size distribution is unknown; mutually exclusive with size-resolved rows for the same source/time. Do not invent a size split or silently omit dry-cut dust. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Fossil methane leakage and incomplete combustion (`ch4_fossil`)

Only direct fossil CH4 at the mill, including any actual gas-system losses; distinguish unburned gas methane from upstream leakage. Species mass, not CO2e. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Biogenic methane from treatment (`ch4_bio`)

Only actual direct biogenic methane from included treatment, with a measured or defensible site-specific carbon balance. Reject correction/delayed-emission records. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Direct nitrous oxide (`n2o`)

Species N2O mass from actual included combustion or nitrogen treatment; separate from NOx, with actual monitoring or site-specific validated estimation. No generic factor. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### Fossil carbon monoxide (`co_fossil`)

Direct fossil CO only, species mass, verified carbon origin and included source. A monitor total cannot be assigned fossil origin without fuel/carbon evidence. Outdoor air, unspecified, short-term actual release; if a more specific subcompartment is known, verify and use its corresponding UUID.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the attributable reporting-period exchange under this row protocol and divide by same-period Q (kg accepted net paper); declare not applicable only with evidence of absence, never zero for unknown data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared mill burdens | First subdivide grades/lines and support operations using actual meters and campaign records. Dedicated quantities go to their grade; shared residuals use documented causal drivers (dry fibre throughput, measured heat, machine hours or treatment pollution load as physically appropriate), not one assumed mass ratio for every burden. |  |
| `allocation_physical_ledger` | physical balances and links | Preserve the complete unallocated physical process map, dry-solids/water/carbon balances and equal internal-link quantities. Allocation applies only to attributable environmental burdens after physical reconciliation; never multiply the physical paper, co-product, waste or internal-transfer output by a burden share. |  |
| `allocation_residues` | broke, dust and sludge | Internal recovery is a real loop with its energy and losses included, without avoided virgin-pulp credit. External material recovery/treatment is recorded gross with ownership and destination; if a stream is demonstrably a saleable co-product, require real receiver-accepted specification/function and lawful product/use status rather than payment alone, then establish the physical function and governing allocation method separately, with sensitivity where a causal relation is unavailable. | jrc-pulp-paper-bref-2015 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The following is this PCR foreground collection design, not a producer recipe or universal regulatory emission limit. Retain batch/shift originals and monthly totals over the same complete representative period; normally collect twelve consecutive months, explaining a shorter complete production campaign and its representativeness limits. Every conditional flow retains actual use, proven absence or missing-data status.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `paper_mill` | Accepted net paper | dispatch/scale/test records | grade; order; gross paper lot; packaging/core tare; rejects; reel/sheet area/count; moisture; grammage; surface/acceptance results | Calibrated net weighing after all finishing; product tests and traceable measured moisture; reconcile production/dispatch and stock change Aggregation and reconciliation requirements: Sum accepted net paper Q; express accepted reference output as 1 kg; do not divide by machine reels before cutting losses | kg; g/m2; mass fraction | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | scale calibration; tare/quality tests |
| `cp_furnish` | `paper_mill` | Pulp species and process lots | supplier/receipt/issue/stock records | supplier; pulp grade; species; hardwood/softwood; kraft/sulphite process; bleaching; virgin/recovered claim; net lot mass; measured solids; stock movement; background reference quantity | Weigh and reconcile opening stock plus receipts minus closing stock and transfers; retain supplier certificates and solids sampling for each incompatible lot Aggregation and reconciliation requirements: Preserve wet/dry physical balances; attribute grade consumption, divide by Q kg net accepted paper for per 1 kg reference flow | kg; dry-solids fraction | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | supplier certificates; calibrated weights; solids tests |
| `cp_materials` | `paper_mill` | Each filler, sizing and treatment chemical | batch/SDS/issue/stock records | chemical identity; CAS where relevant; modification/charge; delivered concentration; active solids; carrier water; batch dose; return/loss; process stage; supplier route; actual whole-product or supplier-expanded inventory choice; supplier preparation/emulsification utilities and losses; supplied packaging/delivery gate; independently bought onsite additions | Weigh batches and reconcile tanks/stock; resolve formulated-product versus constituents accounting once, keeping each physical exchange atomic Aggregation and reconciliation requirements: Grade-attributed amount / Q kg net accepted paper, per 1 kg reference flow; retain full physical water/chemical totals separately. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors. | kg; active-solids fraction | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | SDS; supplier specs; scales; dose logs |
| `cp_energy` | `paper_mill` | Electricity by production stage | meter/invoice/allocation records | supply/generator; voltage; grid versus own generation; meter/stage; kWh; shutdowns; shared loads; causal driver | Calibrated stage meters reconciled to site purchase/generation records; identify generator background rather than assuming zero burden for own power Aggregation and reconciliation requirements: 3.6 × attributable kWh / Q kg net accepted paper, per 1 kg reference flow; no duplicate purchased/self-generated amount | kWh; MJ | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | meter calibration; invoices; voltage; allocation workbook |
| `cp_heat` | `paper_mill` | Imported heat definition and enthalpy | supplier/steam/condensate/heat-meter records | supplier reference energy definition; steam kg; actual absolute/gauge pressure; temperature; quality; condensate mass/enthalpy; losses; imported/exported energy; site allocation | Calibrated heat or mass/condition meters plus verified thermodynamic property method; reconcile supply and returned condensate enthalpy to supplier background basis. Retain pending when definition differs/unknown Aggregation and reconciliation requirements: Compatible attributable delivered energy / Q kg net accepted paper, per 1 kg reference flow; no direct provider emissions duplicated | MJ; kg; pressure; temperature | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | supplier reference definition; calibrated meters; enthalpy reconciliation |
| `cp_fuel` | `paper_mill` | Each actual onsite fuel | receipts/tank/gas-meter analysis | fuel route; liquid/gas state; mass/volume; T/P; dry/wet gas; composition; Z; calorific basis; stock change; vaporization; boil-off; background unit definition | Calibrated receipt mass or state-defined gas volume, supplier analysis and tank reconciliation; reference-state conversion only from actual compatible conditions Aggregation and reconciliation requirements: Fuel consumed after stock reconciliation and grade attribution / Q kg net accepted paper, per 1 kg reference flow; report real gas losses separately | kg; m3; MJ | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | calibration; supplier T/P/composition and reference-state statement |
| `cp_water` | `paper_mill` | Abstraction, make-up and internal water | flow meters/levels/moisture/balance | intake source; purchased water; treatment; flow; density/temperature for kg conversion; returns; circuits; product/sludge water; evaporation; stocks | Meter external intakes/returns; reconcile stage loops and measured product/residue moisture; estimate evaporation only by verified water/exhaust balance and retain residual uncertainty Aggregation and reconciliation requirements: Each compatible external water exchange / Q kg net accepted paper, per 1 kg reference flow; internal loops reported in physical ledger only | m3; kg | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | meters; measured density/moisture; balance closure |
| `cp_packaging` | `paper_mill` | Each delivered package component | packing bill/weight/ownership | component; polymer/paper construction; supplier; transferred mass; cores; pallets; return system; reuse count; rejects | Weigh each component and reconcile packing bills and return records; identify actual film polymer and protective-board construction Aggregation and reconciliation requirements: Actual attributable component use / Q kg net accepted paper, per 1 kg reference flow; packaging excluded from Q | kg; use count | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | packing specification; scales; return ledger |
| `cp_residues` | `paper_mill` | Each external solid residue and internal return | weighing/collector/treatment manifests | stream; source; wet/dry mass; solids; filler/chemical contamination; recovered dust; internal return; external destination; ownership | Separate weighing/tickets and solids samples for paper trim, collector dust, primary and biological sludge; reconcile mixed-stream totals without duplication Aggregation and reconciliation requirements: External grade-attributed residue / Q kg net accepted paper, per 1 kg reference flow; equal internal returns retained before burden allocation | kg; solids fraction | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | weighbridge; collector logs; solids tests; receiver records |
| `cp_effluent` | `paper_mill` | Final freshwater discharge and each indicator | flow/lab/composite sampling | outlet; named freshwater recipient; time interval; bulk effluent volume/mass; measured bulk/water-component densities and actual water fraction/reference state; COD/BOD duration; TSS method; TN as N; TP as P; AOX as Cl; detection limits; bypasses; background concentration | Flow-weighted final-discharge sampling and calibrated discharge meters; use applicable validated EN/ISO/national-equivalent methods. BREF BAT10 monitoring frequencies/footnotes guide coverage, not default annual masses. Establish source-specific COD–TOC correlation if substituting TOC Aggregation and reconciliation requirements: Interval pollutant loads and external discharge attributed to grade / Q kg net accepted paper, per 1 kg reference flow; retain non-overlapping intervals | m3; mg/L; kg indicator | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | accredited lab; standards; flowmeter; detection-limit and timing audit |
| `cp_air` | `paper_mill` | Each direct species/particle release | stack/fugitive/collector/carbon records | source; included boiler or cutting line; outlet/control; airflow; T/P; moisture/O2 basis; concentration; interval; size-bin convention; fossil/biogenic carbon; NOx quantity convention; collector mass; leaks | Measure actual exhaust and relevant fugitives after controls with compatible volume/concentration state; retain particulate-size and gas-specific method. Use validated site carbon balances for CO2 when direct measurement is unavailable; no sawmill factor or generic paper factor Aggregation and reconciliation requirements: Sum source/time loads once and attribute burdens / Q kg net accepted paper, per 1 kg reference flow; particle bins or unsized total mutually exclusive | kg; mg/m3; m3; carbon kg | Batch/shift continuous records; monthly reconciliation; applicable emission sampling plan | Same complete representative period, normally twelve consecutive months | All represented grades, lines and included support operations | per 1 kg reference flow | monitor calibration; state/O2 basis; source list; carbon/collector balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | Normalized exchange = attributable reporting-period exchange / Q; Q = kg net accepted paper from cp_output. Keep the unallocated physical exchange separately; reference output equals 1 kg. | linked collection protocols and raw records | normalized exchanges and separate physical balances |  |
| `calc_stock` | pulp, chemicals, fuel, packaging | Physical consumption = opening stock + receipts - closing stock - external transfers, with return/loss reconciliation. Dry solids = measured delivered mass × measured dry fraction; no default air-dry convention. | linked collection protocols and raw records | normalized exchanges and separate physical balances |  |
| `calc_balance` | dry solids, water and carbon | Reconcile separate dry-solids, water and fossil/biogenic/carbonate carbon ledgers before allocation, including every physical product, internal loop, residue, discharge, evaporation and stock change; preserve unexplained residuals and do not force them to zero. COD/BOD/AOX diagnostics are not additional physical mass outputs. | linked collection protocols and raw records | normalized exchanges and separate physical balances | jrc-pulp-paper-bref-2015 |
| `calc_heat` | purchased_heat | Delivered heat = incoming steam enthalpy flow - returned condensate enthalpy flow - documented boundary losses not already included in the delivery measurement, using actual states and a verified thermodynamic property method; link only after matching supplier GCV/MJ quantity definition. Calorific-value labels alone are insufficient. | linked collection protocols and raw records | normalized exchanges and separate physical balances |  |
| `calc_effluent` | water pollutant indicators | Interval kg load = concentration (mg/L) × interval discharge (m3) × 0.001; integrate matching intervals, retaining O2/N/P/Cl definition and detection-limit treatment; divide attributable total by Q. Do not infer a pollutant quantity from a BAT limit. | linked collection protocols and raw records | normalized exchanges and separate physical balances | jrc-pulp-paper-bref-2015 |
| `calc_air` | direct gases and particles | Integrate concentration × compatible exhaust/fugitive volume, converting mg to kg with 0.000001. Match dry/wet, T/P and O2 normalization; particle total = measured disjoint bins, or one unsized total, never both. Carbon-balance CO2 = oxidized carbon mass × 44/12, using separate evidenced origins and subtracting carbon leaving in other measured forms. | linked collection protocols and raw records | normalized exchanges and separate physical balances |  |
| `calc_water_component` | discharged_water | M_liquid = measured final mixed-liquid mass or sum(V_liquid_i × measured rho_liquid_i); M_water = sum(M_liquid_i × measured water fraction_i); V_water = sum(M_water_i / compatible rho_water_i). Validate actual density/state/reference and water-content method; native water V_water/Q once. Bulk V_liquid remains the matched pollutant-load volume, not automatically pure water. | cp_effluent; cp_water; actual fraction/density/reference; Q | Actual freshwater water-component m3 per 1 kg accepted paper; unknown compatibility stays unresolved | jrc-pulp-paper-bref-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | pulp and product | Verify kraft/sulphite, species, bleaching and non-dissolving identity per supplier lot; public product descriptions do not prove the actual recipe. | Supplier certificates, issue records and product tests |
| `dq_completeness` | all exchanges | Prove occurrence or absence; distinguish missing from zero and include every actual additive, utility, residue and emission extension. Inventory identified high-impact substances separately where possible; COD/BOD/N/P/AOX indicators cannot hide them or replace their chemical identities, and overlapping diagnostics are not extra physical mass. | Source list, balances and meter coverage |
| `dq_compatibility` | UUID and quantity/background | Assess physical identity separately from reference quantity and supplier-background compatibility; do not substitute neighbouring products, species or media for gaps. | Direct identity, supplier quantity definitions and reconciliation |
| `dq_period` | all foreground records | Use one period, grade and boundary; report shutdown, grade changes, abnormal operation, measurement error and allocation sensitivity. | Period originals and uncertainty ledger |
| `dq_sources` | sources and quantity ranges | Single-mill/BREF historical data do not provide universal recipes, amounts, emission factors or empirical bounds; a GHG summary cannot replace species LCI. | Source applicability, measurements and gap disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | product and furnish | Confirm non-integrated unprinted uncoated chemical-pulp printing/writing paper and all exclusions; require real supplier process/species evidence, not woodfree shorthand or classification label alone. |  |
| `validation_reference` | reference_out | Require exactly one accepted reference output of 1 kg with mass reference property/unit group, net paper basis and complete qualifiers; no internal transfer repeats the reference output. |  |
| `validation_measurement` | all rows | Require the same Q denominator in EN/ZH inventory, collection aggregation and calculations, with calibrated measurements and explicit moisture/solids conversions; unknown compatibility remains pending, not passing. |  |
| `validation_balances` | physical and allocated ledgers | Check dry solids, water and carbon before allocation; verify both ends of internal links, output before/after cutting and acceptance, residue destinations and separately allocated burdens; do not scale physical outputs by a burden share. |  |
| `validation_utilities` | energy supply | Verify source/route, exact reference property, supplier quantity definition and steam/gas states; external heat generation and onsite fuel combustion are mutually exclusive for the same delivered heat. Require distinct evidence for own electricity generation. |  |
| `validation_emissions` | air and final fresh water | Require exact medium/submedium/species/origin and quantity compatibility; do not use correction flows, duplicate NOx with NO/NO2, or drop biogenic CO2. Include dry-cutting/rewinding exhaust, fugitives and collected dust. Use disjoint particle bins or an alternative measured unsized total without overlap. | jrc-pulp-paper-bref-2015 |
| `validation_release` | foreground dataset handoff | An unresolved UUID, supplier-background basis, actual recipe, quantity, measurement gap or unsupported calculation prevents claiming a complete dataset. Declare checks performed/skipped, gaps and uncertainty; authored method is not scientific approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/grade-specific gate-to-gate non-integrated paper manufacture |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Paper-manufacturing foreground and compatible upstream-linked supply-chain models for the explicitly restricted grade, with complete evidence and quantities |
| excluded_use | Integrated pulp manufacture; printed books/content; universal woodfree/CPC coverage; incompatible fibre/surface routes; claims based on unresolved quantities or identities |
| required_metadata | All reference qualifiers; actual stage map; Q; physical/allocated ledgers; suppliers/background units; atomic exchange identities and units; source conditions; allocation/cut-offs; receiving media and waste destinations |
| required_quality_disclosure | Meter/laboratory coverage and methods, representative period, missing identity or unit compatibility, proxy/background gaps, uncertainty, balance residuals, exact source applicability and review state |
| update_trigger | Changed pulp species/process/bleaching, surface recipe, mill boundary, grade/delivery form, utility/treatment supplier, measured performance, allocation or source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `jrc-pulp-paper-bref-2015` | Official guidance (`official_guidance`) | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Chapter 7 §§7.1.1–7.1.10 (printed pp660–670), §7.2.2.3 introduction (p687) and Table7.7 (p688), BAT10 (p788), BAT50 Table8.20 (p811), wood-free glossary (p850). Process/method scope for stock, forming, drying, recycling, sizing, cutting dust and water monitoring; historical numbers are not recipes or emission quantities, and coating/integrated sections are not imported into this boundary. |
| `arctic-munkedal-emas-2024` | Technical literature (`literature`) | Arctic Paper Munkedals AB, Environmental Report 2024, https://production.arcticpaper.com/globalassets/arcticpaper.com/09-support/certificates--statements/certificates/emas/emas2024_apm_eng.pdf | Reporting year2024; original verifier dated2025-06-25. Printed pp3,5–7,12–15,18–20: real purchased-pulp mill manufacture, sizing/finishing and treatment. Public descriptions do not establish grade-specific recipes. Annual averages are single-site cases; air figures include external purchased-steam emissions and cannot be copied as direct mill emissions. No amounts/defaults adopted. |
| `arctic-munken-pure-specification` | Technical literature (`literature`) | Arctic Paper, Munken Pure product specification, https://production.arcticpaper.com/brands/munken/munken-design-range/munken-pure/ | Basic information, Surface, Woodfree declaration and laminated-paper footnote: real uncoated offset-printing product, reel/sheet delivery and laminated exclusions. Producer targets do not define a universal functional or recipe guarantee; printability does not include the printing process. |
