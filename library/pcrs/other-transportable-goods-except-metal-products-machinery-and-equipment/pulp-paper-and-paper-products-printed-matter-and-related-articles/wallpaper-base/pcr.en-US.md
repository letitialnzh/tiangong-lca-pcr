---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.wallpaper-base
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wallpaper base paper from purchased chemical wood pulp

## 1. Scope and Applicability

This method covers wet-laid wallpaper base paper made at a non-integrated mill from purchased non-dissolving, bleached softwood and/or hardwood kraft pulp, delivered as unprinted reels for subsequent wallpaper conversion. Fillers and non-pigmented wet-end or surface sizing are included only as actually used. The substrate must be accepted against declared purchaser specifications; there is no universal furnish, filler percentage, grammage, delivery moisture or drying-energy default. Sources: `jrc-paper-bref-2015`, `domtar-base-sheet-2002`, `bopaper-muralle`.

Exclude printed wallpaper, PVC or other decorative polymer layers, pigment-coated/latex-saturated or impregnated base sheets, pre-pasted finished wallpaper, synthetic-fibre nonwoven backings, laminated duplex nonwoven products and bookbinding delivery claims. Purchased mechanical/chemi-mechanical pulp and recovered-fibre routes require separately supported method extensions and are outside this authored route. The Domtar patent also discusses coated products: only its substrate evidence is used here, without importing coating formulas or historical case quantities. Producer descriptions establish the distinction between base paper and subsequent conversion, not a complete industry recipe.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.wallpaper-base |
| classification_refs | CPC 3.0 32124; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Wet-laid uncoated, unsaturated wallpaper base from purchased bleached kraft wood pulp; actual filler and non-pigmented sizing |
| excluded_products | Printed, pigment-coated, decorative-layer, latex-saturated, nonwoven, mechanical-pulp and recovered-fibre routes |
| representative_product | One accepted net delivered base-paper reel to purchaser specifications; no representative recipe |
| production_route | Purchased pulp → slushing, screening, refining and blending → actual wet-end dosing → forming, pressing and drying → conditional non-pigmented sizing and redrying → calendering, slitting, reeling and wrapping; actual utilities, recirculation and effluent treatment |
| market_state | Unprinted mill-gate reels for downstream wallpaper conversion; no decorative layer |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Paper substrate for downstream wallpaper conversion; no installed-wall service claim |
| How much | 1 kg net delivered accepted base paper |
| How well | Meet declared grammage, smoothness, liquid uptake/sizing, dry/wet strength and dimensional-stability acceptance specifications; no universal numerical thresholds |
| How long or cycle | One mill-gate delivery; subsequent wallpaper service life is outside this reference unit |
| reference_flow_link | wallpaper_base |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wallpaper base (`df6968ae-6d39-4a15-b20e-233c83d9f785`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | pulp supplier and species; non-dissolving bleached kraft grade; measured pulp solids; actual softwood/hardwood dry blend; each filler mineral and ground/precipitated route; each wet-end and surface-size chemical and supplied/active basis; uncoated and not latex-saturated; grammage and test conditioning; measured wet-basis delivery moisture; reel net mass, core and packaging tare; grade acceptance criteria; energy supply and receiving-water route; site and reporting period |

The broad reference identity includes paper used as wallpaper base and does not contradict this uncoated substrate route. Its physical identity is separate from supplier dataset quantity/boundary compatibility. Declare every qualifier in dataset metadata or equivalent fields; a missing qualifier leaves applicability incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | wallpaper_base | Mass | kg | Net delivered mass excludes wrapping and core; measure wet-basis moisture w = water mass/net wet paper mass and D = S × (1-w). No assumed oven-dry or standard-conditioned mass. |
| material_basis | pulp_soft; pulp_hard; gcc; pcc; kaolin; starch_ox; akd; pae; pam | Mass | kg | Record supplied mass and solids for each material; distinguish active/dry quantity from supply basis. Convert to actual supplier reference quantity without transferring database recipes or concentrations. |
| energy_basis | electricity; gas; steam | Declared reference property | MJ; m3; kg | Measured electricity kWh × 3.6 gives MJ; gas uses a supplier-compatible volume basis. Preserve purchased-steam mass/state and verify net heat from delivery/return enthalpy, not an MJ label. |
| liquid_discharge | liquid_water | Volume | m3 | Record only final liquid-water volume discharged to fresh water, not withdrawal; reconcile water mass using measured density and do not duplicate carrier volume for each pollutant. |
| elementary_basis | co2_fossil; co2_bio; co; nmvoc; nox; so2; ch4; n2o; bio_ch4; pm25; pmcoarse; pmover10; cod; bod; tss; n_water; p_water; water_vapor | Mass | kg | Distinguish species, fossil/biogenic source and compartment. COD/BOD are O2 demand, total N is N, total P is P; unknown NOx mass convention keeps linkage pending. Three particle bins are disjoint. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered purchased non-dissolving bleached kraft pulp and individual supplies |
| starting_condition_role | Foreground starting condition, not a full-life-cycle cut-off |
| product_classification_scope | The declared subset of CPC 32124; label does not establish full coverage |
| recursive_input_rule | Record internal broke/white-water transfers at identical amounts on both ends and count only new net-boundary input; purchased same-category base paper requires declared upstream boundaries and compatible datasets, not infinite recursion. |
| upstream_dataset_requirement | Compatible upstream pulping/bleaching, supply production, electricity/gas and external-steam generation/delivery datasets are required; external effluent and solid-waste treatment need receiver data. |
| disclosure | Declare foreground gate and upstream links, transport already included or added, energy and effluent routes, gaps and capital-equipment treatment. Exclusions are never assumed zero. |

Within the foreground, include stock preparation, machine wet end, pressing/drying, actual sizing and redrying, calendering/slitting/reeling, wrapping, actual on-site gas utilities, water loops and actual on-site effluent treatment. Retain independently metered stages in one aggregated mill unit so the same physical sheet is not duplicated as intermediate and final reference outputs. Upstream pulping is supplied by background or separately evidenced linked processes, not inferred from sawmill/plywood surveys. Sources: `jrc-paper-bref-2015`.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| paper_mill | Aggregated mill from stock preparation to net delivered base paper | required | Declared purchased chemical-pulp route; actual stages separately metered | foreground production | 1 kg net delivered accepted base paper |

### Process: Base-paper manufacture and delivery (`paper_mill`)

#### Inputs

##### Product flows

###### Chemical wood pulp, other than dissolving grades (`pulp_soft`)

Use only non-dissolving papermaking-grade bleached softwood kraft pulp. This broad identity does not specify species, bleaching or delivery moisture: supplier evidence must establish all three. Record incoming wet mass and separately measured solids; never treat air-dry tonnes as oven-dry tonnes.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_materials and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-paper-bref-2015`, `domtar-base-sheet-2002`

###### Chemical wood pulp, other than dissolving grades (`pulp_hard`)

Keep hardwood kraft pulp separate from softwood even when the same broad product identity is used. Record supplier, species mix, bleaching, measured delivery solids and actual blend; no default ratio is specified.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_materials and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-paper-bref-2015`, `domtar-base-sheet-2002`

###### Ground calcium carbonate, papermaking filler (`gcc`)

Conditional actual ground papermaking calcium-carbonate filler. The exact broad Calcium carbonate name has no opposed species, processing or state field; native source CPC15200 calcareous stone and preserved source399 taxonomy do not prove the actual filler production route. Retain source/provider classification clarification and absent-CAS/grade metadata debt, without claiming an exact processed filler background. Require supplier chemical identity, assay, crystal/particle grade and actual ground route. Record delivered powder/slurry mass, measured solids, CaCO3 and remaining mineral/additive/water fractions and stocks separately; convert to provider-compatible native Mass/kg reference demand only with its verified wet/dry basis. Missing conversion leaves quantity linkage pending. Keep GCC and PCC rows distinct despite a shared broad locator; do not substitute coarse calcite, limestone with contradictory CAS, or infer default purity/slurry recipe. Retention and white-water loss remain separate, no decorative surface coat.

- Selected flow: Calcium carbonate `699cf1be-0ca2-4c34-af60-fd58a8e9d549`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual supplier-compatible Mass/kg reference demand derived from measured delivery, solids, composition and its verified wet/dry basis, divided by accepted net paper S. Supplied mixture and dry CaCO3 balances remain separate; missing conversion is pending, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `domtar-base-sheet-2002`

###### Precipitated calcium carbonate, papermaking filler (`pcc`)

Conditional actual precipitated papermaking calcium-carbonate filler. The exact broad Calcium carbonate name has no opposed species, processing or state field; native source CPC15200 calcareous stone and preserved source399 taxonomy do not prove the actual filler production route. Retain source/provider classification clarification and absent-CAS/grade metadata debt, without claiming an exact processed filler background. Require supplier chemical identity, assay, crystal/particle grade and actual precipitated route. Record delivered powder/slurry mass, measured solids, CaCO3 and remaining mineral/additive/water fractions and stocks separately; convert to provider-compatible native Mass/kg reference demand only with its verified wet/dry basis. Missing conversion leaves quantity linkage pending. Keep GCC and PCC rows distinct despite a shared broad locator; do not substitute coarse calcite, limestone with contradictory CAS, or infer default purity/slurry recipe. Retention and white-water loss remain separate, no decorative surface coat.

- Selected flow: Calcium carbonate `699cf1be-0ca2-4c34-af60-fd58a8e9d549`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual supplier-compatible Mass/kg reference demand derived from measured delivery, solids, composition and its verified wet/dry basis, divided by accepted net paper S. Supplied mixture and dry CaCO3 balances remain separate; missing conversion is pending, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `domtar-base-sheet-2002`

###### Kaolin clay, papermaking filler (`kaolin`)

Include only actual wet-end kaolin filler with mineral purity, particle size and moisture; clay used in a later pigment coat is outside this reference product.

- Selected flow: Kaolin clay, papermaking filler
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_materials and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-paper-bref-2015`

###### Oxidized starch (`starch_ox`)

Conditional actual oxidized starch for wet-end or non-pigmented surface sizing. Source comment specifies hypochlorite modification of food starch/GMP and permits papermaking: verify actual oxidation chemistry, grade, impurities and supplier production/reference basis rather than assume any starch matches. Record supplied whole mass, solids, actual recipe/additives/carrier water, dose, application and retained dry solids. A purchased formulation is counted once; internal cooking water and cooking/redrying utilities are separately metered without a second purchase of its components. Native or cationic starch needs its own identity.

- Selected flow: Oxidized starch `539d5015-900f-4778-89d1-499f7855edf9`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_materials and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-paper-bref-2015`

###### Alkyl Ketene Dimer (`akd`)

Conditional actual as-supplied aqueous AKD wet-end sizing emulsion, compatible with source synthesis/emulsification route and CAS144245-85-2. Collect actual solids, active AKD, emulsifier/stabilizer/remaining additives and water, grade, carbon origin and provider wet/dry reference convention. Count purchased mixture once; component fields support retention, solids/water/carbon balances, not extra pure-AKD or carrier-water purchases. No default formulation or neat-active-mass substitution.

- Selected flow: Alkyl Ketene Dimer `095d668d-6196-43d7-82b2-655ac9d26693`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_materials and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `domtar-base-sheet-2002`

###### Polyamide-epichlorohydrin wet-strength resin solution (`pae`)

Conditional wet-strength resin; declare PAE chemistry, supplied solution concentration, polymer solids and retention. It is not bisphenol-A epoxy resin or a latex impregnation layer.

- Selected flow: Polyamide-epichlorohydrin wet-strength resin solution
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_materials and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `domtar-base-sheet-2002`

###### cationic polyacrylamide (CPAM) (`pam`)

Conditional actual cationic polyacrylamide retention-aid supply. Verify ionic and molecular grade, dry/solution/emulsion delivery state, active solids, remaining formulation components/water and provider reference convention. Purchased whole formulation and its constituent balance fields remain distinct, with no duplicate component input. This identity cannot represent anionic PAM, PAE, or all retention chemicals.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_materials and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-paper-bref-2015`

###### Alternating current (`electricity`)

Use only 1–35 kV consumer-side grid-average supply. Source geography is CN: actual site/provider region, year, consumption mix, voltage and delivery/loss boundary must be compatible before background linkage. Meter each actual stock preparation, machine, sizing, finishing, boiler auxiliary and effluent-treatment stage, reconcile purchased total and use measured kWh × 3.6 MJ. Native Net calorific value is the electrical-energy reference property, not combustible fuel.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value (`93a60a56-a3c8-11da-a746-0800200c9a66`); unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual raw records using cp_energy and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-paper-bref-2015`

###### natural gas in the gaseous state (`gas`)

Conditional on-site gas-fired steam generation or direct heating. Use measured delivered gas volume, pressure, temperature, wet/dry basis, composition and compressibility matched to supplier/background m3 convention. Secondary database mass coefficients are not gas density. No generic calorific value or boiler efficiency is prescribed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect actual raw records using cp_energy and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-natural-gas-combustion`

###### Purchased saturated process steam (`steam`)

Conditional actual purchased industrial-boiler steam heat delivered through saturated process steam. The broad source has no pressure/temperature field and native Gross calorific value/MJ; it does not establish a specific saturated state or net heat. Collect actual steam mass, P/T/dryness, delivery/return and other outgoing enthalpy, condensate, losses and provider generation/gate; verify the provider conversion to its GCV reference quantity separately. Never equate net delivered enthalpy to GCV or use mass directly as MJ. The 11.0 MPaG and recovered-fibre-fluting records are not substituted. A different actual supply route needs a compatible identity; internal boiler steam is an internal transfer, not another external purchase.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Supplier-compatible GCV reference quantity, derived only from its documented conversion of measured delivery/return/state records, divided by net delivered accepted paper S. Actual steam mass and net enthalpy remain separate ledger fields; missing provider conversion remains pending.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-paper-bref-2015`

###### Tap water (`water_input`)

Only actual treated purchased tap water uses this broad identity. Source geography is Hong Kong and its gate is at the water-treatment plant; verify actual supplier geography, treatment, distribution/loss gate and reference-volume basis, adding supported distribution where outside that gate. Meter make-up, boiler feed and cleaning water and reconcile water components, product moisture, evaporation, condensate and discharge. White water recirculation is internal, not fresh withdrawal.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect actual raw records using cp_water and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`

###### Polyethylene film (`pefilm`)

Conditional actual polyethylene reel-wrapping film, separate from net paper mass. Verify PE resin grade, thickness, additives, backing/adhesive/lamination state and supplied mass against the provider; other actual composite materials need separately compatible identities. Concordant film name, CAS9002-88-4 and comment support the physical film, while CPC29220 luggage/handbags is a source classification defect pending source/provider clarification. No universal film recipe, delivery gate or wallpaper PVC-layer claim.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_packaging and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-paper-bref-2015`

###### Cardboard tube or Paper core (`core`)

Conditional shipped paperboard core; measure tare and allocate actual consumption or documented reuse cycles. Exclude core from net reference mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_packaging and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-paper-bref-2015`

#### Outputs

##### Product flows

###### Wallpaper base (`wallpaper_base`)

One accepted external product output only. Net delivered uncoated, unsaturated base-paper mass includes actual retained pulp, filler, size/wet-strength solids and measured delivery moisture; excludes core and wrapping. Weigh rejected and retained intermediate reels separately and never count them as another reference output.

- Selected flow: Wallpaper base `df6968ae-6d39-4a15-b20e-233c83d9f785`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_production`
- Sources: `jrc-paper-bref-2015`, `bopaper-muralle`

##### Waste flows

###### waste paper (unspecified) (`broke`)

Only unrecovered uncoated base-paper trim or rejects leaving the mill for an identified waste-paper receiver. Internal wet/dry broke is recorded in the stage ledger on both ends at the same solids/water basis; it is not a purchased input or exported waste. Declare chemical contamination and receiver.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_residues and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `jrc-paper-bref-2015`

###### Dewatered papermaking wastewater sludge (`sludge`)

Conditional actual dewatered wastewater sludge from this paper-production mill. The broad paper-production sludge source has no hard treatment or composition limit. Keep primary fibre/filler sludge and excess biological sludge as distinct actual dataset rows even when using the same locator; do not invent a blended cake. Record each wet cake, dry solids, moisture, fibre/biomass/mineral/chemical fractions, carbon origin, dewatering, stocks and recipient/provider wet/dry basis. Internal returned sludge is not external waste; no assumed disposal, recycled content or energy credit.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_residues and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `jrc-paper-bref-2015`

###### Untreated chemical-pulp papermaking wastewater to external treatment (`effluent`)

Only actual untreated chemical-pulp papermaking wastewater handed to an external treatment operator uses this broad industrial Waste liquid locator, which explicitly includes wastewater without an opposing origin/treatment route. Native Mass/kg is complete wet handover mass measured directly or measured volume times actual effluent density at the same temperature/state; retain volume, H2O, suspended/dissolved solids, COD/BOD/N/P, chemicals, stocks and receiver/provider basis separately. Pollutant indicators are composition evidence, not complete liquid mass. Do not duplicate the same externally treated branch as foreground liquid-water or pollutant releases; separately document real split branches.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual complete wet wastewater handover mass, weighed or matched measured V_m3 × rho_effluent_kg/m3, divided by accepted net paper S. No default density or pollutant-load substitution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`

###### Collected uncoated base-paper dry-cutting dust to external receiver (`cutting_dust`)

Actual captured and separately exported uncoated base-paper dry-slitting/reeling dust: fibres plus actual retained filler/sizing solids and moisture, with no assumed purity or particle share. Broad industrial collector Dust has compatible Waste/Mass identity and no opposing material/treatment route; actual composition, hazardous/status assessment, physical collected state and receiver/provider requirements remain to be verified. Weigh captured, internally returned and exported quantities separately with stocks. Internal returns have equal sending/receiving amounts; captured waste is not escaped atmospheric PM. Record actual post-control releases in the three disjoint bins, with no default capture factor or credit. Source general housekeeping advice is not a sampling/frequency rule.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_residues and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `jrc-paper-bref-2015`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil`)

Measure or calculate fossil CO2 from on-site gas combustion and other actual fossil carbon oxidation, with fuel carbon, oxidation and controls disclosed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-combustion`

###### carbon dioxide (biogenic) (`co2_bio`)

Keep actual biogenic CO2 from organic effluent treatment or other in-boundary biogenic oxidation in LCI, even if a selected GHG report treats it separately. Track retained paper biogenic carbon without an invented uptake credit.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### carbon monoxide (fossil) (`co`)

Include actual fossil CO from on-site combustion; preserve chemical mass and matching gas-flow concentration basis.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-combustion`

###### non-methane volatile organic compounds (`nmvoc`)

Conditional actual non-methane organic emissions from the declared on-site gas combustion or gas leakage, supported by the original EPA gas-combustion species discussion. Native Mass/kg does not prove a mass-as-carbon, propane-equivalent or total-hydrocarbon monitoring convention. Collect source-specific speciation/definition, gas flow, actual release and controls; derive compatible non-methane chemical mass only with documented evidence, excluding fossil/biogenic methane. Keep species and aggregate accounts visibly overlapping and choose a consistent LCI/LCIA representation without characterizing the same constituents twice. Track actual carbon composition separately; no universal carbon fraction, emission factor, dose or assumed zero when unmeasured. Other actual significant volatile species need separately verified atomic extensions.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-combustion`

###### Nitrogen oxides (`nox`)

Use only a NO plus NO2 sum with monitoring and LCI/LCIA mass definition proven compatible. A kg property alone does not establish NO2 equivalents. If that definition is unknown, the exchange and dataset linkage remain pending; exclude N2O and do not duplicate NO or NO2.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-combustion`

###### sulfur dioxide (`so2`)

Include only actual SO2 mass from declared gas sulphur and operating controls, not unspecified sulphur oxides.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-combustion`

###### methane (fossil) (`ch4`)

Record actual fossil methane leakage or incomplete combustion crossing the foreground boundary. Do not repeat upstream gas-supply leakage included in a background dataset.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-combustion`

###### nitrous oxide (`n2o`)

Record actual N2O from on-site combustion or biological wastewater treatment as its own species, never as NOx.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-combustion`, `jrc-paper-bref-2015`

###### methane (biogenic) (`bio_ch4`)

Conditional biological effluent-treatment gas. Measure methane generation, capture, oxidation and fugitive release; fossil gas leakage is separate. No default methane correction factor is prescribed.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (PM2.5) (`pm25`)

Actual released PM2.5 mass after control from boiler, handling or cutting. Establish size method and filterable/condensable basis; do not also add inclusive PM10 or total dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`, `epa-natural-gas-combustion`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Record only disjoint PM2.5-PM10 mass. Derive from matched PM10 minus PM2.5 measurements only when sample, control and condensable basis agree and the result is nonnegative.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`, `epa-natural-gas-combustion`

###### particles (> PM10) (`pmover10`)

Only measured >PM10 after control, kept disjoint from the other two bins. Unknown size distribution remains unknown; never divide a total dust value into invented shares.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_air and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### chemical oxygen demand (`cod`)

Only final environmental effluent load expressed as kg O2 demand, with test method declared. It is a sum indicator, not kg carbon or a chemical species; retain significant individual substances separately without overlapping characterization. The selected raw medium is unspecified water. Collect the actual receiver/subcompartment and obtain a compatible elementary identity before linking any known freshwater, seawater or other specific receiver; this record is not promoted to freshwater by the adjacent liquid-water row.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ef-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_effluent and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### biological oxygen demand (`bod`)

Final effluent BOD oxygen-demand load with actual BOD5 or BOD7 test, temperature and analytical definition. Do not substitute COD or add BOD and COD as independent organic matter. The selected raw medium is unspecified water. Collect the actual receiver/subcompartment and obtain a compatible elementary identity before linking any known freshwater, seawater or other specific receiver; this record is not promoted to freshwater by the adjacent liquid-water row.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97e0-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_effluent and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### Suspended solids, unspecified (`tss`)

Final effluent suspended-solids mass from matched samples and flow. Do not add dry sludge sent for treatment as another aquatic TSS release. The selected raw medium is unspecified water. Collect the actual receiver/subcompartment and obtain a compatible elementary identity before linking any known freshwater, seawater or other specific receiver; this record is not promoted to freshwater by the adjacent liquid-water row.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_effluent and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### nitrogen, total (excluding N2) (`n_water`)

Final effluent total nitrogen excluding molecular N2, expressed as kg N and including organic N where measured. Inorganic nitrogen alone cannot stand for total N; species and total must not be double characterized. The selected raw medium is unspecified water. Collect the actual receiver/subcompartment and obtain a compatible elementary identity before linking any known freshwater, seawater or other specific receiver; this record is not promoted to freshwater by the adjacent liquid-water row.

- Selected flow: nitrogen, total (excluding N2) `3624d70d-4e4b-4927-9b84-b40e26c58e6d`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_effluent and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### phosphorus, total (`p_water`)

Final effluent total phosphorus as kg P, not phosphate molecular mass. Receiving-water subcompartment must be disclosed; this unspecified-water identity cannot establish a freshwater receiver by itself. The selected raw medium is unspecified water. Collect the actual receiver/subcompartment and obtain a compatible elementary identity before linking any known freshwater, seawater or other specific receiver; this record is not promoted to freshwater by the adjacent liquid-water row.

- Selected flow: phosphorus, total `46854df3-e13d-4a5a-9e11-6319f1f8347e`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_effluent and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### water vapour (`water_vapor`)

Measure actual evaporation from web drying and other atmospheric releases using matched water balance or exhaust humidity/flow. Steam supply mass is not automatically evaporated web water; retain combustion water separately in the balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual raw records using cp_water and normalize by accepted net delivered base-paper mass in the same cp_production period. Unproven quantities or incompatible background links remain gaps; non-use requires documented evidence, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`

###### Water (`liquid_water`)

Conditional actual final liquid H2O carrier emitted to a documented freshwater receiver, CAS7732-18-5, native Volume/m3. Measure final mixed-effluent wet mass and water-component fraction, or an equivalent verified water account, then divide actual H2O mass by documented water density at discharge temperature. Do not silently equate the whole mixed-effluent volume to pure water. COD/BOD/TSS/N/P/species remain distinct overlapping constituent load ledgers, not extra water masses/volumes. Purchased water, resource uptake and air vapour are separate. For the same external wastewater-treatment branch omit this direct foreground output and provider downstream emissions; record real split branches separately.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Actual final H2O component mass / documented water density at discharge temperature / accepted net delivered paper S; matched cp_water and cp_effluent records and real discharge branch. Do not substitute whole mixed-effluent volume.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`

## 7. Allocation and Co-product Handling

Keep the physical process/solids/water/carbon ledger separate from the allocated environmental-burden ledger. Internal sheet/broke/water links have equal amounts at both ends on the same basis, with measured storage changes and losses explicitly reconciled. Do not mechanically multiply a co-product physical output by an allocation share. Attribute grade-specific pulp, chemicals and metered utilities directly; subdivide shared utilities where feasible. If inseparable co-products remain, investigate subdivision/system expansion first, then a demonstrated relevant physical relation, then another justified relation such as economic allocation; disclose method, denominator, coefficients and sensitivity. No automatic waste-paper credit or default mass allocation is prescribed. Internal broke is not a co-product; external trim/sludge status and treatment must be evidenced. Source: `eu-pef-allocation-2021`, with the recycling-specific requirements of the adopted study method kept explicit.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_production | paper_mill | reference mass and solids | Measured raw record | reel id; grade; gross mass; core/wrapping tare; accepted net mass S; wet-basis moisture w; rejection; opening/closing stocks | Calibrated net weighing, acceptance records and representative delivery-state gravimetric moisture samples; retain drying endpoint, test method, conditioning and replicate uncertainty. | kg; mass fraction | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |
| cp_materials | paper_mill | each pulp, filler and chemical | Measured raw record | supplier; lot; species/grade; incoming whole-formulation mass; each actual component/additive/carrier water; measured moisture/solids; purity; active concentration; each dose; stock change; retained solids | Calibrated receiving scales/flowmeters, lot COA and independently checked solids samples; reconcile delivered and consumed material, dry blend and background reference basis per material. | kg; mass fraction | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |
| cp_energy | paper_mill | electricity, gas and external steam | Measured raw record | stage meter kWh; gas volume T/P wet/dry composition Z; steam mass P/T dryness and return enthalpy; supplier background reference; operating time | Calibrated meters and invoices, supplier reference-state declaration, steam/condensate measurements and heat balance; segregate purchased and internal transfers. | MJ; m3; kg | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |
| cp_water | paper_mill | fresh water, vapour and external effluent | Measured raw record | make-up volume; source; complete wet effluent mass and matched density/temperature; H2O component fraction/mass and water density; receiver and external/direct branch; white-water and condensate links; web moisture; evaporation; discharge; boiler blowdown; stocks | Calibrated flowmeters and moisture/exhaust measurements; reconcile fresh input, material-carried water, product water, evaporation, outgoing waste water and stock change. | m3; kg | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |
| cp_air | paper_mill | each named air emission | Measured raw record | point/source; species; source carbon; size bin; measured concentration; gas flow; duration; T/P; oxygen; wet/dry and condensable basis; method; capture/oxidation | Representative stack or fugitive measurement and source-specific carbon/gas balance; pair flow and concentration at matching reference conditions. Any factor needs an actual source, technology and control match. | kg | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |
| cp_effluent | paper_mill | each named environmental water load | Measured raw record | final discharge point/receiver; volume; matched concentration; analyte definition; COD/BOD test; total N/P versus species; date; treatment state; QA | Flow-proportional composite sampling with paired discharge flow and laboratory analysis; final release only after actual on-site treatment. Record analytical coverage, detection limits and actual BOD period. | kg | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |
| cp_residues | paper_mill | external paper trim and sludge | Measured raw record | stream identity; wet/dry mass; solids; ash; contaminants; sender/receiver; treatment; recovered internal broke; captured cutting dust, internal dust return and exported dust; stock change | Calibrated weighbridge/scale, solids tests and receiver tickets; separate actual atomic waste types and internal returns. | kg | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |
| cp_packaging | paper_mill | PE film and paperboard core | Measured raw record | material identity; lot; consumption; tare; shipped mass; documented core reuse; scrap destination | Weigh materials separately and reconcile purchases, stock and shipments; retain supplier grade and reuse records; packaging excluded from S. | kg | Each lot or continuous metering; emissions by representative operating state and actual monitoring plan | Same period as delivered product; disclose missing records | Same mill and grade, relevant points; retain stage ids | per 1 kg reference flow | Calibration, chain of custody, sample/lab QA, supplier basis and balance residual |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Q_ref = Q_period / S; S is accepted net delivered base paper in kg for the same period; Q_ref is the exchange per 1 kg reference flow. | Q_period; S; cp_production | Q_ref | jrc-paper-bref-2015 |
| solids_balance | pulp_soft; pulp_hard; gcc; pcc; kaolin; starch_ox; akd; pae; pam; wallpaper_base; broke; sludge; cutting_dust | m_dry = m_delivered × measured_solids_fraction; D = S × (1-w); reconcile each incoming solid to product retention, dry exported waste, released solids and stock change. Internal returns cancel across matching boundary ends; packaging stays separate. | cp_materials; cp_production; cp_residues | Physical solids ledger and residual | jrc-paper-bref-2015 |
| utility_reconciliation | electricity; gas; steam | Meter kWh × 3.6 = MJ; reconcile same-state stage meters to main meter. Gas volume conversion requires declared T/P, wet/dry and Z. Physical net steam heat = sum(m_in × h_in) - sum(m_return × h_return) - other documented outgoing enthalpy at the declared boundary, with losses separately recorded. Supplier GCV reference demand requires its independently documented conversion; no net/GCV equivalence, default constants or extra internal-steam input. | cp_energy | Compatible utility amounts and internal heat ledger | jrc-paper-bref-2015 |
| water_balance | water_input; water_vapor; liquid_water; effluent; wallpaper_base; sludge; cutting_dust | Fresh input + material-carried water + actual combustion water = product water + evaporation + outgoing effluent/waste-carried water + stock change; use measured density for volumes and match internal white-water/condensate amounts on both ends. | cp_water; cp_materials; cp_production; cp_residues | Physical water ledger and residual | jrc-paper-bref-2015 |
| effluent_load | cod; bod; tss; n_water; p_water | Load_kg = sum(V_i_m3 × c_i_mg_per_L × 0.001) using time-matched flow/concentration and the same analytical definition; divide by S for normalization. Loads sent to external treatment are not duplicate environmental releases. | cp_effluent; cp_production | Individual aquatic loads | jrc-paper-bref-2015 |
| air_load | co2_fossil; co2_bio; co; nmvoc; nox; so2; ch4; n2o; bio_ch4; pm25; pmcoarse; pmover10 | Integrate same-state concentration × gas flow × time per point and species, then divide by S; otherwise use measured activity and an actually cited compatible source-specific factor with uncertainty, not a generic default. | cp_air; cp_production | Individual air loads | jrc-paper-bref-2015, epa-natural-gas-combustion |
| wastewater_native_quantity | effluent | X_wet = measured whole handover mass or sum(V_handover × rho_effluent at matched T/state); exchange = X_wet/S. Retain water/dry constituents, stocks and receiver; pollutant loads are not whole-liquid mass. Exclude duplicate direct outputs for the same external-treatment branch. | cp_water; cp_effluent; cp_production | kg wet wastewater per kg accepted net paper | |
| freshwater_carrier_quantity | liquid_water | m_H2O = sum(m_final_effluent × measured water_fraction), or equivalent verified water account; V_H2O = sum(m_H2O/rho_H2O(T)); exchange = V_H2O/S. No automatic pure-water density or whole-effluent substitution; actual branch and freshwater receiver required. | cp_water; cp_effluent; cp_production | m3 liquid H2O per kg accepted net paper | |
| cutting_dust_ledger | cutting_dust; pm25; pmcoarse; pmover10 | Actual generated cutting dust plus opening stock = measured post-capture internal return/export, escaped cutting-source disjoint PM and closing stock, with composition/moisture and residual recorded on matched bases. Other boiler/handling PM source masses remain separate. Captured dust is not emitted PM; inclusive PM10/total dust are not added to the three bins. No assumed capture share. | cp_residues; cp_air; cp_materials | Separate physical dust mass and escaped particle ledger | |
| nonmethane_voc_quantity | nmvoc | Use compatible measured sum of non-methane constituent chemical masses or a documented monitoring conversion, divided by S. Total hydrocarbons minus methane only when definitions and periods match. Mass-as-C or propane equivalents require actual speciation/basis; unknown conversion remains pending. Do not double characterize aggregate and constituents. | cp_air; cp_energy; cp_production | kg compatible NMVOC per kg accepted paper | epa-natural-gas-combustion |
| burden_allocation | all inventory rows | Assign attributable burdens directly; distribute remaining shared burdens with evidenced coefficients summing to 1. Retain burden and complete physical ledgers separately without scaling physical co-product deliveries. | Physical ledger; submetering; evidenced allocation coefficients | Allocated burden ledger | eu-pef-allocation-2021 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_basis | all inventory rows | Verify each identity and supplier/receiver background basis separately; UUID is not a completed dataset. Missing identity cannot be replaced by adjacent products. | Supplier COA, route and background definition |
| coverage | all inventory rows | Keep applicability, measured positive value, confirmed non-use, missing record and below-detection states distinct. Declare actual furnish and every used chemical, packaging component and emitted species as individually verified atomic rows. Conditional rows imply no default quantity. | Material ledger, operating records, monitoring and explicit gaps |
| balances | paper_mill | Report stage and whole-boundary solids/water/carbon balances; match internal ends and explain residuals/uncertainty. Retained paper biogenic carbon is not an automatic negative-emission credit. | Physical ledger and separate burden ledger |
| comparability | wallpaper_base | Different furnish, filler, sizing, moisture, grammage or surface states cannot claim functional equivalence solely by kg. | Purchaser specifications and acceptance tests |
| ranges | all inventory rows | Do not convert historic patent or single-producer quantities into generic ranges; collect actual site data and retain unknowns as gaps. | Actual measurements and scoped originals |

## 9. Validation Rules

Require exactly one accepted reference output linked to wallpaper_base; 1 kg and the same net-delivery denominator in both languages, every row and every protocol. Check qualifiers, chemistry/species, reference property, unit group, environmental medium and quantity/background basis separately. All actual inputs and emissions must be atomic and traced to collection; any missing foreground measurement, unsupported NOx convention, unresolved steam delivery basis or incompatible background keeps dataset validation incomplete. Verify absence of decorative/impregnated/nonwoven product claims, no nested PM double counting, no duplicated raw-effluent/final-release burdens, no double counting of captured/reused dry-cutting dust and escaped PM, no dropped biogenic CO2, and separate physical versus allocated ledgers. A method inspection does not establish a factory measurement or scientific approval.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground base-paper manufacturing dataset for downstream use after data quality checks |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared compatible base-paper supply; upstream link for wallpaper conversion |
| excluded_use | Complete decorative wallpaper, installation/service life, nonwoven substrates, other furnish routes and generic pulping |
| required_metadata | pulp supplier and species; non-dissolving bleached kraft grade; measured pulp solids; actual softwood/hardwood dry blend; each filler mineral and ground/precipitated route; each wet-end and surface-size chemical and supplied/active basis; uncoated and not latex-saturated; grammage and test conditioning; measured wet-basis delivery moisture; reel net mass, core and packaging tare; grade acceptance criteria; energy supply and receiving-water route; site and reporting period |
| required_quality_disclosure | Boundary, source year/geography, sample coverage, raw bases, unresolved identity/background, allocation and balance uncertainty |
| update_trigger | Changes in recipe, pulp, supplier, sizing, surface, delivery moisture, energy/treatment route, measurement or specification |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board, 2015; DOI 10.2791/370629; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf; read 2026-10-12; §§2.2.2, 7.1.1-7.1.10, printed pp.43-50,659-670. | Papermaking stages, sizing/coating distinction, recirculation and emission measurement; no numerical defaults or universal national sampling frequency. |
| domtar-base-sheet-2002 | literature | Domtar, US6440269B1, Base sheet for wallcoverings, 2002-08-27; https://patents.google.com/patent/US6440269B1/en; read 2026-10-12; substrate discussion cols.3-4 and substrate portions of Examples A-C. | Historical original patent; substrate route and candidate filler/wet-end chemicals only; coated portions and case recipes excluded. |
| bopaper-muralle | literature | BO PAPER, MURALLE official product page; https://www.bopaper.com.br/muralle?lang=en; accessed 2026-10-12; product description/application and coil finishing. | Producer reel delivery and later printing/plastic-coating boundary; no inferred recipe, energy route or generic grammage. |
| epa-natural-gas-combustion | official_guidance | US EPA, AP-42 §1.4 Natural Gas Combustion, retained official PDF header 10/26; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf; read 2026-10-12; §§1.4.1-1.4.3, pp.1.4-1 to1.4-3. | Gas external-combustion species and site-test priority only; no default factor, composition, heat value or permit limits. |
| eu-pef-allocation-2021 | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I §4.5, pp.63-64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf; read 2026-10-12. | Multifunctionality hierarchy and disclosure; no claim of full PEF compliance or default recycling credit. |
