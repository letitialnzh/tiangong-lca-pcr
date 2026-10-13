---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.fluting-paper-including-straw-and-semi-chemical
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unbleached hardwood NSSC fluting paper from supplied pulp

## 1. Scope and Applicability

This PCR covers a bounded supplied-pulp papermaking route for unbleached single-ply fluting reels before corrugation. All supplied fibre is virgin hardwood sodium-NSSC pulp, with actual species, cooking/recovery route and moisture disclosed. Same-grade in-house broke may circulate internally. The mill supplies its own measured recipe and emissions; different fibres or pulping methods do not share quantities by assumption. [jrc-pulp-paper-bref-2015; valmet-nssc; fefco-paper-production]

Pulping is supplied through qualified upstream data, not erased from cradle-to-gate accounting. This route uses external steam, grid electricity and treated network water. BREF Figure 4.2 and Heinola describe an integrated mill, including an additional carton-clipping stream; that historical case supports process understanding only and is not a recipe for this virgin-only supplied-pulp foreground. All actual wet-end formulations and treatment conditions must be disclosed. No default moisture, yield, chemical dose, emission factor or CMT/SCT threshold is specified.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.fluting-paper-including-straw-and-semi-chemical |
| classification_refs | CPC 3.0 32134; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Single-ply unbleached hardwood NSSC fluting paper reels from externally supplied pulp; same-grade internal broke permitted |
| excluded_products | Straw/non-wood fluting; recovered-fibre fluting; CTMP/TMP/kraft furnish; coated or surface-sized medium; linerboard; corrugated paperboard and boxes; integrated pulping foreground |
| representative_product | One accepted net uncoated NSSC reel before corrugation; no mandated mill recipe or producer average |
| production_route | Supplied sodium-sulphite/carbonate hardwood NSSC pulp → slushing, screening, refining and stock blending → conditional actual wet-end dry-strength/retention/antifoam dosing → approach flow, forming, pressing, steam-cylinder drying → slitting, rewinding and dispatch; water/fibre recovery and actual effluent treatment |
| market_state | Unconverted, unpacked net saleable reel at mill gate, before the corrugator; cores and packaging inventoried separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net accepted fluting paper for the corrugated-board medium, before the corrugator |
| How much | 1 kg |
| How well | Unbleached single-ply hardwood NSSC reel with actual grammage, thickness, moisture, furnish/chemical state and purchaser compression test requirements declared |
| How long or cycle | One common reporting-period production normalized to the reference flow; no box service-life claim |
| reference_flow_link | `fluting_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fluting paper, including straw and semi-chemical `823c2026-8c74-4f63-b775-88abe4098204` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | virgin hardwood species/origin; sodium-NSSC route and recovery system; upstream supplier; pulp delivered solids and reference basis; single-ply uncoated/no surface or hydrophobic sizing; actual chemical formulation; grammage; thickness; moisture/test basis; reel form; CMT/SCT method and purchaser target; net core/wrap exclusions; site; period; utility and effluent routes |

Required qualifiers must be present in dataset metadata or equivalent product/process notes; missing qualifiers make applicability incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | fluting_output | Mass | kg | Use net accepted paper mass at measured declared moisture after final slitting/rewinding. Exclude core, wrapping, off-spec and internal broke. |
| reference_denominator | all inventory rows | Mass | kg | Use per 1 kg reference flow for every row and linked protocol, based on the same reporting period; maintain wet/dry balance separately. |
| pulp_basis | nssc_pulp | Mass | kg | Reconcile received wet pulp, oven-dry solids and supplier AD/other basis from measured solids and declared upstream reference dryness; the pulp record specifies no universal dryness. |
| steam_quantity | drying_steam | Gross calorific value | MJ | Retain measured steam/return mass, pressure, temperature and enthalpy in the physical ledger; convert to provider-reference MJ only with documented k_bg linking net heat to its reference, never default k_bg=1. |
| emission_bases | cod_water, bod_water, tn_water, tp_water, ww_n2o, ww_ammonia | Mass | kg | Preserve kg oxygen-equivalent COD/BOD, kg N for TN and kg P for TP, and molecule mass for N2O/NH3; document any conversion from element-based laboratory reports. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Virgin hardwood sodium-NSSC pulp delivered to the papermaking input boundary, with wet/dry basis and supplier chain documented |
| starting_condition_role | Upstream intermediate supplied pulp; not an exemption for pulping burdens |
| product_classification_scope | Only the specified NSSC subset of CPC 32134, before corrugation; no full-leaf equivalence |
| recursive_input_rule | Own wet/dry broke and recovered white-water fibres remain internal; no credit or saleable-output count for recirculation. Purchased finished fluting or externally recovered paper is outside this route. |
| upstream_dataset_requirement | Require route-specific pulp including hardwood sourcing, NSSC chemicals/defibration, actual spent-liquor recovery, emissions and delivery; actual grid, steam, water, chemicals, packaging and waste-treatment providers with compatible quantities |
| disclosure | Site, period, grade, pulp origin/route, moisture, papermaking and treatment scope, utility delivery/return definitions, internal loops, cutoffs, allocation and gaps; an integrated mill must separately qualify its upstream pulp module before reuse |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | papermaking | Include receipt/slushing, screening, refining, stock/chemical preparation, forming, pressing, drying, ventilation, water/fibre recovery, slitting/rewinding and dispatch. One aggregate papermaking unit avoids duplicate product outputs; retain independent stage meters and unallocated physical links. | jrc-pulp-paper-bref-2015; fefco-paper-production |
| boundary_upstream | pulp supply | This is supplied-pulp papermaking, not an inventory of an integrated NSSC mill. Do not transfer Heinola quantities or imply its integrated site is non-integrated. A linked, qualified upstream pulp module covers cooking, defibration, washing and the actual recovery route; missing burdens are disclosed and block complete cradle-to-gate use. | jrc-pulp-paper-bref-2015; valmet-nssc |
| boundary_utilities | utility supply | This route purchases grid electricity, treated network water and drying steam. Onsite fuel-fired boilers, CHP and own abstraction need additional qualified processes and atomic flows; do not omit them while calling this route complete. Match steam pressure and supplier heat/return basis; record no automatic condensate credit. | jrc-pulp-paper-bref-2015 |
| boundary_treatment | effluent treatment | Include onsite treatment when present; raw_effluent_out and raw_effluent_in are an equal internal link. For external treatment, remove the onsite module from the instantiated model and require a receiver-specific treatment dataset; final emissions belong to the treating unit, never to both. | jrc-pulp-paper-bref-2015 |
| boundary_exclusions | downstream conversion | End at saleable unconverted fluting reels. Corrugator conditioning/fluting, adhesive bonding to liners, board cutting and box conversion are separate downstream product systems. Capital and maintenance coverage must follow declared study requirements; any actual recurrent material or emission missing here requires a separately documented atomic row before completeness is claimed. | fefco-paper-production; jrc-pulp-paper-bref-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| nssc_papermaking | Supplied NSSC pulp to finished fluting reels | required | Within the declared supply route | foreground; independent stage metering within one unit | per 1 kg reference flow |
| effluent_treatment | Actual onsite effluent treatment | conditional | Onsite clarification/biological treatment exists; otherwise require external receiver data | foreground treatment; matched internal transfer | per 1 kg reference flow |

The papermaking stage ledger retains receipt/slushing → refining/approach flow → forming/pressing → drying → slitting/rewinding/packaging, with internal white-water, same-grade broke, fibre and condensate links recorded at equal quantity on both ends. These are physical balances inside nssc_papermaking, not extra saleable reference-product outputs. Chemical rows apply only when their named formulation is actually used; absence needs evidence. Other actual formulations, maintenance materials or emissions require separate atomic additions before an instantiated dataset is called complete.

### Process: NSSC papermaking and reel dispatch (`nssc_papermaking`)

#### Inputs

##### Product flows

###### Paper Pulp (`nssc_pulp`)

External virgin hardwood pulp made by sodium-sulphite/carbonate NSSC cooking followed by mechanical defibration, washing and refining. The broad wood-based virgin-pulp identity is used only with this narrower route. Measure receipt wet mass, solids and supplier reference basis; no kraft, CTMP, straw or recovered pulp substitution.

- Selected flow: Paper Pulp `6752b268-93a1-4dca-b098-3f3afa7eaddf`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`; `fefco-paper-production`

###### Alternating current (`paper_electricity`)

Purchased grid-average alternating current at a verified 1–35 kV site supply connection. Submeter papermaking demand and retain attributable internal transformation losses; use the actual country/year background, not a generic emission factor. The source flow declares CN; physical voltage identification does not establish geographic/temporal supply compatibility. Reassess the identity and provider if the actual site differs.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-pulp-paper-bref-2015`

###### Heat from steam (`drying_steam`)

Purchased industrial-boiler steam heat for paper drying and actual starch cooking. This physical heat identity has no specified pressure; require measured supply pressure, temperature, quality, steam mass, condensate return and supplier quantity basis. Its Gross calorific value label does not prove delivered net enthalpy or a universal kg-to-MJ conversion. Keep the physical steam/return mass ledger and qualify k_bg before using provider-reference MJ; do not adopt the source benchmark demand.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value / MJ
- Flow property UUID: `93a60a56-a3c8-14da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Provider-reference Gross calorific value MJ divided by same-period net accepted paper kg; retain actual k_bg, net-enthalpy conversion and physical supply/return mass separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-pulp-paper-bref-2015`

###### Tap water (`makeup_water`)

Treated network tap water only. Meter fresh papermaking makeup separately from internally circulating white water and ww_makeup_water. Own raw-water abstraction requires a separate verified resource flow and treatment inventory before this method can be applied. The full source name locates production at a Hong Kong water-treatment plant; require actual provider/geographic compatibility or reassess the flow. Its secondary screening density is not a mill measurement.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Flow property UUID: `93a60a56-a3c8-22da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### corn starch (`dry_strength_starch`)

Conditional: unmodified corn starch used at the wet end for dry strength. Record actual received powder mass, moisture and cooking losses. No transfer of a database preparation concentration into the mill recipe; chemically modified starch or surface sizing needs a separately assessed exchange and scope.

- Selected flow: corn starch `982918a4-54b1-4792-9ee5-2f3155d4e929`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### cationic polyacrylamide (CPAM) (`retention_pam`)

Conditional: cationic polyacrylamide retention aid. Record supplier grade, ionic character, dry polymer fraction and carrier; preserve received formulation mass and dry-polymer mass separately, and do not link a solution quantity to a dry-polymer background; never substitute anionic PAM or polyamine. Include the entire supplied formulation through compatible background data, with no uncounted carrier.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### Polydimethylsiloxane-based aqueous antifoam emulsion (`defoamer_pdms`)

Conditional: an actually used PDMS aqueous antifoam emulsion, with composition, delivered mass and solids measured. Neat silicone, silica and silicone adhesive are not the emulsion; no precise UUID is established. Other antifoam chemistries need separate rows.

- Selected flow: Polydimethylsiloxane-based aqueous antifoam emulsion
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### Cardboard tube or Paper core (`reel_core`)

Conditional: the paperboard reel core actually leaves with the accepted reel. Weigh core mass separately and exclude it from net paper output; supplier construction and end-of-life are declared. Record actual paperboard furnish and manufacture. Reuse-related burden allocation cannot reduce the physical core mass delivered, returned or discarded.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### Uncoated printing, writing and packaging paper (`kraft_wrapping`)

Conditional actual unbleached uncoated kraft reel wrapper, excluding coated, laminated or converted bags/boxes. The complete name includes packaging paper, while the source graphic-paper classification is inconsistent metadata requiring clarification. Retain this broad physical locator only for the documented kraft sheet grade, furnish, coating state, mass and supplier background; the UUID does not establish kraft production burdens.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### Polyethylene film (`pe_wrapping`)

Conditional: actual polyethylene film, CAS 9002-88-4, leaving with the reel. Check PE resin subtype, film grade and supplier; the source classification has an erroneous luggage code, so physical identity is retained with metadata clarification outstanding. The complete purchased packaging formulation includes actual additives; a resin-component background alone cannot represent the entire film. The comment mentions PET as a comparison, not as the selected PE polymer.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Product flows

###### Fluting paper, including straw and semi-chemical (`fluting_output`)

The only reference-product output: accepted single-ply unbleached hardwood NSSC fluting reels, uncoated and without a surface-size press or hydrophobic wet-end sizing. The broad fluting flow contains this subset; it does not authorize straw or recycled recipes. Weigh after final slitter-winder, excluding cores and transport wrapping.

- Selected flow: Fluting paper, including straw and semi-chemical `823c2026-8c74-4f63-b775-88abe4098204`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `jrc-pulp-paper-bref-2015`; `fefco-paper-production`

###### Condensate returned to steam supplier (`condensate_return`)

Conditional: measured liquid condensate returned across the boundary to the steam supplier. Record mass, temperature and return pressure; match the supplier return convention. Internal condensate circulation is an internal link, not a second external utility purchase or credit.

- Selected flow: Condensate returned to steam supplier
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-pulp-paper-bref-2015`

##### Waste flows

###### Waste solid (`screen_reject`)

Actual separately exported wet NSSC fibre/shive screening solids. The broad solid-waste identity includes wet residues but determines neither composition, hazard status nor treatment. Measure whole wet mass, water/dry solids, fibre and contaminants and verify the recipient. Internally re-refined material remains an internal physical loop, not exported waste.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources: `jrc-pulp-paper-bref-2015`

###### waste paper (unspecified) (`discarded_broke`)

Only uncoated same-grade broke actually exported or discarded. Internal wet/dry broke returns remain in the physical fibre account and do not cross the aggregated foreground boundary; record composition, moisture and recipient for exports.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources: `jrc-pulp-paper-bref-2015`

###### Dust (`collected_dust`)

Paper-fibre dust actually collected and sent out as solid waste. Document additive contamination, moisture and recipient; dust internally repulped is an internal loop. Do not also count collected dust as a release to air.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources: `jrc-pulp-paper-bref-2015`

###### Waste liquid (`raw_effluent_out`)

Actual NSSC papermaking wastewater mixture from process purge, cleaning and stock preparation, kept as one physical liquid stream. Use whole-mixture Mass / kg from measured V and rho_eff(T,composition), retaining volume for pollutant loads and measured water fraction. With onsite treatment, this is an internal link equal to raw_effluent_in in mass, volume, composition and period, with no disposal burden on the link. External treatment requires receiver-specific treatment and excludes onsite discharge rows. The source broad waste-liquid classification is not a legal hazard determination.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured whole wastewater mass V times rho_eff(T,composition) divided by same-period net accepted paper kg; equal at both transfer ends.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### particles (PM2.5) (`cutting_pm25`)

Actual PM2.5 paper dust reaching outdoor air after collection/control, including verified fugitive loss from slitting/rewinding. Use measured disjoint size fractions; do not repeat nested PM10, total dust, collected solid dust or internal dust recirculation. No default cutting emission factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (PM2.5 - PM10) (`cutting_pm25_10`)

Actual PM2.5–10 paper dust reaching outdoor air after collection/control, including verified fugitive loss from slitting/rewinding. Use measured disjoint size fractions; do not repeat nested PM10, total dust, collected solid dust or internal dust recirculation. No default cutting emission factor.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (> PM10) (`cutting_pm_over10`)

Actual PM>10 paper dust reaching outdoor air after collection/control, including verified fugitive loss from slitting/rewinding. Use measured disjoint size fractions; do not repeat nested PM10, total dust, collected solid dust or internal dust recirculation. No default cutting emission factor.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### water vapour (`drying_water_vapour`)

Actual drying exhaust water vapour to outdoor air. Derive from measured pulp/paper moisture and water balance with exhaust verification; distinguish it from steam supply/return and liquid effluent.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

### Process: Onsite effluent treatment (`effluent_treatment`)

#### Inputs

##### Product flows

###### Alternating current (`ww_electricity`)

Treatment and sludge-dewatering share of the same verified 1–35 kV grid supply. Reconcile treatment submeter and internal losses with site meter; paper_electricity excludes this quantity. The source flow declares CN; treatment uses the same actual supply qualification, with separate metering and no duplicated site losses.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### Tap water (`ww_makeup_water`)

Conditional: treated network tap water used separately for onsite treatment reagent preparation and cleaning. Meter it independently from makeup_water; exclude wastewater transfers, recycled process water and already counted papermaking supply. The full source name locates production at a Hong Kong water-treatment plant; require actual provider/geographic compatibility or reassess the flow. Keep treatment makeup and carried formulation water separate.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Flow property UUID: `93a60a56-a3c8-22da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### hydrated lime (`ww_lime`)

Conditional: actual industrial hydrated lime for pH adjustment, CAS 1305-62-0, on received dry-powder basis. Confirm hydration production route, purity and moisture; do not use quicklime mass or milk-of-lime solution mass without a separately reconciled formulation.

- Selected flow: hydrated lime `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### ferric chloride (`ww_ferric_chloride`)

Conditional actual FeCl3 coagulant, CAS7705-08-0; FeCl2/polymeric ferric chloride are different identities. This selected source is anhydrous crystalline FeCl3 and applies as a converter input only to actual compatible separately supplied solid. Record received mass, assay, moisture and actual onsite dissolution water/utilities once. A purchased aqueous solution is one complete supply: require a compatible specific solution card/provider covering actual supplier manufacture, dilution/preparation, additives, water and delivery before use, or a documented complete supplier-process reconstruction. In reconstruction, FeCl3 and water are constituent demands within the supplier process and analytical ledgers, not extra mill purchases; preserve whole wet solution mass and stocks, actual concentration and provider reference conversion. Active-solid conversion alone does not cover prepared solution manufacture. Source organic-chemical classification conflict remains metadata debt.

- Selected flow: ferric chloride `d29463c7-fbbf-4811-b122-a651f205d603`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

###### cationic polyacrylamide (CPAM) (`ww_pam`)

Conditional actually supplied cationic polyacrylamide for clarification/dewatering, with SDS/grade, complete supplied mass/state, active solids, additives/water and provider wet/dry reference verified separately from retention_pam. One prepared bought solution/formulation is one external supply including actual supplier preparation/manufacture/delivery; its constituents are analytical only. If a pure-polymer background is used in documented supplier-process reconstruction, include all actual carrier/additive/preparation/utility/loss/delivery burdens once, not component-only production. Actual independently purchased chemicals/water for onsite mixing remain separate inputs. Sharing a UUID never duplicates one supply or makes the two doses equal.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_inputs`
- Sources: `jrc-pulp-paper-bref-2015`

##### Waste flows

###### Waste liquid (`raw_effluent_in`)

The actual whole wastewater mixture received by onsite treatment, with exactly the same measured mass, volume, density, water fraction, composition and reporting period as raw_effluent_out. Compute kg from V times rho_eff(T,composition); retain equal unallocated physical transfer and assign no duplicate treatment burden to the connection. Do not replace the mixture by pure water or a direct environmental discharge. Omit this onsite module when treatment is external.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured whole wastewater mass V times rho_eff(T,composition) divided by same-period net accepted paper kg; equal at both transfer ends.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Waste flows

###### sludge (paper production) (`primary_sludge`)

Primary paper-production sludge actually exported: fibre/fines, coagulant-derived solids and water with measured composition and dry matter. The broad paper-sludge identity is conditional on this composition and recipient acceptance; no generic treatment route is implied.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sludge`
- Sources: `jrc-pulp-paper-bref-2015`

###### sludge (paper production) (`biological_sludge`)

Excess biological paper-mill sludge exported after dewatering, with biomass, additives, moisture and hazard status recorded. Keep separate from primary sludge; the shared broad identity never establishes an identical treatment burden.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sludge`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### Water (`water_discharge`)

Only the water component of actual treated effluent entering a verified freshwater receiver, not the whole mixture or water abstraction. Determine water mass from V_eff times rho_eff(T,composition) times measured water mass fraction, then divide by rho_water(T) for this Volume reference. Retain V_eff independently for coincident pollutant-load calculations. Do not assume 1000 kg/m3, pure water or automatic equivalence to whole effluent volume; document any negligible-solids approximation and uncertainty. Other receivers require different identities.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Flow property UUID: `93a60a56-a3c8-22da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### chemical oxygen demand (`cod_water`)

COD mass as oxygen-equivalent demand discharged to fresh water, using declared test method and flow-weighted concentrations. The direct record has no Chinese baseName; its English name is retained. This sum indicator cannot hide known high-impact individual chemicals.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### biological oxygen demand (`bod_water`)

Measured oxygen-demand mass to fresh water; declare the test duration, temperature and nitrification inhibition. COD and BOD are overlapping analytical indicators, never additive physical pollutant masses or two impact charges for the same oxygen-demand load.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Suspended solids to fresh water (`tss_water`)

Freshwater suspended-solids load based on the actual laboratory method, sample and concurrent effluent flow. The available water-unspecified identity is not adopted as a freshwater proxy. Particulate constituents already represented individually must not be counted twice.

- Selected flow: Suspended solids to fresh water
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### nitrogen, total (excluding N2) (`tn_water`)

Total bound nitrogen to fresh water, excluding N2 and expressed as kg N, including organic nitrogen when the analytical method measures it. Inorganic-N-only results cannot be labelled total N. If individual nitrogen species are available, represent their loads separately and reconcile the remainder; do not add total N to the same species.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### phosphorus, total (`tp_water`)

Total phosphorus to fresh water expressed as kg P, not phosphate or ammonium-phosphate mass. Known individual phosphorus species require separate identity and reconciliation without double counting the total indicator.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### carbon dioxide (biogenic) (`ww_co2_bio`)

Biogenic CO2 actually released to outdoor air from onsite effluent treatment; establish fibre/starch carbon origin and measured or traceable treatment carbon balance. Keep this LCI exchange even if a climate indicator excludes it; do not assign all removed COD to CO2.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_gases`
- Sources: `jrc-pulp-paper-bref-2015`

###### carbon dioxide (fossil) (`ww_co2_fossil`)

Conditional fossil CO2 to outdoor air from verified fossil-carbon constituents in treatment. Split from biogenic carbon using composition and carbon evidence; fossil carbon is not presumed absent or equal to the full additive dose.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_gases`
- Sources: `jrc-pulp-paper-bref-2015`

###### methane (biogenic) (`ww_ch4`)

Conditional biogenic methane emitted to outdoor air from actual anaerobic treatment/storage zones. Measure captured, oxidised and uncaptured gas separately; no universal COD-to-methane conversion or default emission.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_gases`
- Sources: `jrc-pulp-paper-bref-2015`

###### methane (fossil) (`ww_ch4_fossil`)

Conditional methane from verified fossil-carbon constituents released to outdoor air; source-separate from biogenic methane using treatment gas and carbon evidence. Unknown carbon split remains unresolved, not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_gases`
- Sources: `jrc-pulp-paper-bref-2015`

###### nitrous oxide (`ww_n2o`)

Conditional N2O molecule mass to outdoor air from actual nitrogen transformations. Use monitoring or a documented site model with uncertainty and nitrogen balance; no N2O-N/molecular-mass confusion and no NOx inclusion.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_gases`
- Sources: `jrc-pulp-paper-bref-2015`

###### ammonia (`ww_ammonia`)

Conditional ammonia molecule mass emitted to outdoor air from the actual treatment process. Determine from monitoring at the release boundary; NH3-N must be converted with documented molecular weights and must not be confused with dissolved total nitrogen.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange quantity per reference flow; use the linked protocol and same-period net accepted paper denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ww_gases`
- Sources: `jrc-pulp-paper-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared production burdens | First isolate measured papermaking, utilities and treatment; examine subdivision or system expansion before allocation. Then use a causally justified physical relation; economic allocation is a disclosed fallback with reasons, same-period prices and sensitivity. No fixed allocation fraction is prescribed. | ec-pef-2021-multifunctionality |
| allocation_physical | physical and burden accounts | Keep unallocated fibre, water, carbon and energy balances separate from the attributed environmental-burden account. Preserve measured physical co-product outputs and equal internal links; do not multiply physical output by an allocation fraction. Assign attributable burdens once, with residual allocation sums and uncertainty reconciled. | ec-pef-2021-multifunctionality; jrc-pulp-paper-bref-2015 |
| allocation_residuals | broke and sludge | Internal broke/white-water recovery is not a co-product. Determine waste versus co-product status from actual quality, legal/receiver acceptance and destination; a sale price does not establish displacement. No recycling or steam-return credit without the selected system model and compatible receiver evidence. | ec-pef-2021-multifunctionality |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | nssc_papermaking | fluting_output | weighing | grade; reel id; net paper kg; core/wrap tare; moisture; grammage; thickness; CMT/SCT test method; reporting period | Calibrated reel weighing after the final slitter-winder; traceable tare and accepted/rejected lot records; sample moisture and purchaser quality by actual test protocol. | kg | each reel and representative grade/moisture lot | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_inputs | nssc_papermaking | pulp and each actual chemical/water/packaging input | receipt and meter | supplier; input grade/route; mass or volume; solids/moisture; formulation/carrier; tank/inventory change; period; meter id; background reference basis | Weigh deliveries, reconcile opening/closing stocks and stage dose records, meter fresh network water; preserve each chemical as a separate exchange. Inspect pulp supplier NSSC/recovery chain. | kg; m3 | continuous meters; each delivery and batch | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_utilities | nssc_papermaking | steam and electricity | utility metering | stage kWh; site kWh; voltage; losses; steam kg; delivery pressure/temperature; steam quality; condensate kg/temperature/pressure; supplier net heat definition; period; supplier k_bg; paired enthalpy reference and thermal losses; provider-reference MJ | Reconcile calibrated site and stage meters including preparation, drying and finishing; measure paired steam delivery and return conditions; obtain supply definitions before thermal-background linking. | kWh; kg; MJ; pressure; temperature | continuous with campaign checks | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_residuals | nssc_papermaking | screen rejects; exported broke; collected dust | weighing and receipt | separate stream id; wet mass; dry solids; fibre; additives/contamination; recovery or export; receiver; treatment; period | Weigh each exported stream and sample its composition; separately log internal wet/dry broke and dust rework. Do not combine screening rejects, paper waste and dust. | kg | each dispatch and representative lot | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_air | nssc_papermaking | cutting dust; drying vapour | release monitoring | source; operating hours; exhaust flow; temperature/pressure; wet/dry basis; size-resolved concentration; collector solids; fugitive estimate method; humidity; period | Test actual slitting/rewinding exhaust and fugitive releases after controls; use disjoint aerodynamic particle-size data, paired exhaust conditions and drying-water balance. Document non-occurrence rather than assume zero. | kg; gas volume; concentration | representative stable runs; startup and changes included | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_effluent | effluent_treatment | internal transfer and final water/pollutants | flow and laboratory sampling | inlet/outlet volume; coincident sample concentration; COD method; BOD duration; TSS method; TN organic/inorganic scope; TP as P; receiver; uncertainty; period; rho_eff(T,composition); water mass fraction; rho_water(T); whole-mixture kg; component water volume | Calibrated flow meters and flow-weighted representative samples at matched times; retain analytical methods, detection limits and receiving-water evidence. Preserve identical raw-effluent transfer records on both process ends; offsite transfers use receiver records. | m3; mg/L; kg | continuous flow; representative daily composite and event samples | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_ww_inputs | effluent_treatment | treatment power and each reagent | meter and dose ledger | treatment kWh; separate tap-water m3; reagent identity; grade; wet dose; solids/purity; stocks; carrier; period; upstream reference basis | Separate treatment power/fresh water from papermaking. Meter dosing and reconcile each real complete chemical/formulation purchase, stock and dose in compatible wet/dry reference units, with actual supplier manufacture/preparation/delivery once; included constituents are analytical balances only. Real separate ingredients and onsite mixing/dilution utilities are independently recorded. A documented supplier-process reconstruction preserves whole supplied quantities and all constituent/preparation/utility/loss burdens without duplicating mill inputs. | kWh; m3; kg | continuous power; each dose/batch | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_sludge | effluent_treatment | primary and excess biological sludge | weighing and analysis | stream; wet kg; solids; biomass/fibre; coagulant; contamination/hazard; recipient; treatment; period | Weigh separately at dispatch and analyse representative composition/dry matter; reconcile primary clarification and biological excess sludge against treatment records. | kg | each export and representative sample | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |
| cp_ww_gases | effluent_treatment | each treatment gas emission | monitoring or site carbon/nitrogen balance | gas species; gas volume; concentration; wet/dry T/P; captured/oxidised/fugitive quantity; fossil/biogenic carbon; dissolved/sludge carbon; nitrogen transformation; molecular basis; uncertainty; period | Measure relevant actual treatment/storage gas releases or use a traceable site-specific carbon/nitrogen model with measured inputs, documented conversion and uncertainty. Preserve origin split and identify unknown speciation; no generic positive factor. | kg | representative process cycle, including upset/storage events | same reporting period, covering actual grade production and operating changes | declared mill and route; treatment receiver separately identified | per 1 kg reference flow | calibration; traceable receipts; methods; representative sampling; balances; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | For each stream, divide the attributable reporting-period exchange quantity by the net accepted paper output in kg from the same period; express the result per 1 kg reference flow. Do not divide by design capacity or average daily intensities. | period exchange quantity; same-period net paper kg | exchange per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| dry_matter_reconciliation | nssc_pulp, fluting_output, screen_reject, primary_sludge, biological_sludge | Dry solids equal measured wet mass multiplied by measured solids fraction. Supplier AD/oven-dry basis conversion requires its documented reference dryness; separately account carried water. Net reference output remains actual accepted paper mass at declared moisture. | wet mass; measured solids; supplier basis | separate wet/dry and carried-water records | jrc-pulp-paper-bref-2015 |
| electricity_conversion | paper_electricity, ww_electricity | Convert measured kWh to MJ by multiplying by 3.6; retain the selected Net calorific value platform property label without treating electricity as a fuel. Reconcile attributable losses once against the site supply meter. | meter kWh; site loss reconciliation | MJ |  |
| water_pollutant_load | cod_water, bod_water, tss_water, tn_water, tp_water | For matching sampling intervals, multiply measured concentration in mg/L by corresponding flow in m3 and divide by 1000 to obtain kg; sum interval loads before dividing by same-period net accepted paper kg. Preserve oxygen/N/P/solids analytical bases and detection limits. | matching concentration; effluent volume; net paper kg | kg per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| steam_basis_reconciliation | drying_steam, condensate_return | Using one common reference state, derive H_net from actual supplied steam enthalpy flow minus returned enthalpy flow and undelivered thermal losses within the supplier boundary, counting each loss once. q_heat=H_net*k_bg/P, with P net accepted paper kg and k_bg documented provider-reference GCV MJ per net delivered MJ. Unknown k_bg leaves background linking incomplete; no fuel calorific ratio, default one or source benchmark substitutes for it. Preserve steam/condensate kg separately and do not credit return heat again after subtracting it. | steam and condensate records; supplier basis; k_bg; P | provider-reference MJ per 1 kg reference flow; separate physical mass ledger | jrc-pulp-paper-bref-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | nssc_pulp | Confirm actual fibre species, virgin status, sodium-NSSC and recovery system; similar strength or CPC label is insufficient. | supplier records and route-specific upstream data |
| quality_balance | all inventory rows | Use complete campaign totals, stock changes and stage records, matched wet/dry quantity definitions, measured uncertainty and residual reconciliation; no invented balancing stream. | cp_output and all applicable protocols; jrc-pulp-paper-bref-2015 |
| quality_gap | all inventory rows | Disclose exact identity and background gaps independently, all additional actual chemicals/species and sampling omissions; unknown is not absence. | supplier/laboratory records, process map and completeness ledger |

For raw_effluent_out/in, retain identical V, rho_eff(T,composition), water fraction and kg=V*rho_eff at both ends. The water_discharge component volume equals V_eff*rho_eff*x_water/rho_water(T); full effluent V_eff remains the pollutant concentration multiplier. Collect the actual density, temperature, sample basis and uncertainty; no default density or pure-water approximation.

Screen forming fabrics, press felts, slitter blades, lubrication, cleaning and maintenance consumables against actual purchase/use/discard records. Each material present requires a distinct atomic exchange and receiver/supplier qualification; do not invent lifetime masses or combine real streams.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset applicability | Verify virgin hardwood sodium-NSSC fibre and stated finishing/utility route. Different fibre/pulping methods require independent recipes, emission coverage and upstream data; no grade label proves equivalence. | jrc-pulp-paper-bref-2015; valmet-nssc |
| validate_denominator | all inventory rows | Exactly one reference output is 1 kg net accepted paper. All exchange quantities and protocol aggregation use this same reference; gross reel/core mass, installed capacity, internal broke and wet-pulp tonnes cannot replace net accepted paper mass. | jrc-pulp-paper-bref-2015 |
| validate_utilities | background linking | Confirm grid supply voltage/loss boundary, water supply route and steam pressure, saturation, return and quantity basis. Identity UUIDs and reference properties alone do not establish background compatibility; unresolved supply definitions block complete dataset linking. | jrc-pulp-paper-bref-2015 |
| validate_balance | physical links and accounts | Reconcile wet/dry fibre, chemicals, product moisture, water, sludge, air losses, carbon and energy. raw_effluent transfer is equal at both ends; internal recovery is not an external purchase or release. Show balance residuals against measured uncertainty; do not impose an invented universal tolerance. | jrc-pulp-paper-bref-2015 |
| validate_emissions | elementary exchanges | Check receiving medium, species, fossil/biogenic origin and molecular/element/oxygen basis. Use disjoint PM fractions and retain collected solid dust separately. COD/BOD and nutrient totals are analytical indicators, not sums of additive pollutant masses; known specific species cannot be hidden or charged twice. Retain biogenic CO2 in LCI. | jrc-pulp-paper-bref-2015 |
| validate_gaps | completeness | Blank UUIDs, unmeasured exchanges, unknown speciation, missing providers and unsupported conversions remain explicit. Zero needs a measured or justified non-occurrence record; missing is not zero. An authored PCR is guidance for collection, not proof of a completed plant LCI or scientific approval. | jrc-pulp-paper-bref-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Route- and grade-matched fluting input to a corrugated-board model after complete evidence-based foreground production |
| allowed_use | Declared uncoated virgin-hardwood NSSC reels with verified upstream and utility/treatment links |
| excluded_use | Full CPC 32134 average; straw/recycled/CTMP/kraft substitution; finished board/box output; universal recipe; incomplete cradle-to-gate LCI |
| required_metadata | Qualifiers, reporting/site/technology scope, unallocated physical map and attributed burden account, suppliers, quantity bases, methods, boundary, allocation and update date |
| required_quality_disclosure | Uncertainty, temporal representativeness, all UUID/provider/speciation gaps, substitutions, omitted scopes, balances and measured versus modelled quantities; no methodology-review claim |
| update_trigger | Fibre/pulping/recovery change; formulation or sizing change; utility supplier/pressure change; treatment/receiver change; product specification or material measurement change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pulp-paper-bref-2015 | official_guidance | JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015). https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Sections 2.2.2.1.4–1.5 (net production and water-load monitoring, PDF pp86–88); 4.1.1.5 and Figure 4.2 (NSSC, PDF pp413–414); 7.1.1–4, 7.1.10–11 and containerboard description (PDF pp698, 700, 702–704, 708, 715). Qualitative process and measurement support; no historical quantities or BAT-AEL defaults. |
| fefco-paper-production | official_guidance | FEFCO, Paper production process. https://www.fefco.org/lca/dscription-of-production-system/paper-production | Primary versus recovered fluting, NSSC/papermaking sequence, single-ply medium, winder and shipment before corrugation. Typical integrated-mill description is not evidence that this foreground contains pulping or that purchased-pulp mills are typical. Retrieved 2026-10-12. |
| valmet-nssc | literature | Valmet, NSSC pulping. https://www.valmet.com/pulp/mechanical-pulping/nssc-pulping/ | Manufacturer process description supports hardwood sulphite/carbonate impregnation, cooking, refining/washing and fluting applicability. Supplier operating times, temperatures and energy figures are not adopted as generic recipe or factors. Retrieved 2026-10-12. |
| ec-pef-2021-multifunctionality | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I section 4.5, PDF pp63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General allocation hierarchy only; no claim of full PEF conformity or default fraction. |
