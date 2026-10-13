---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.wallpaper-and-similar-wall-coverings-window-transparencies-of-paper
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Water-based rotogravure printed cellulose-paper wallpaper

## 1. Scope and Applicability

This method covers one finished product: non-prepasted interior wallpaper on purchased wet-laid cellulose paper, printed with supplied press-ready water-based rotogravure inks, dried, optionally mechanically embossed, slit/rewound and packed. No decorative PVC layer, synthetic-fibre nonwoven backing, lamination or separate overvarnish is allowed. Sources: `jrc-sts-bref-2020`, `igi-cellulose-epd-2024`, `boras-materials`, `boras-faq`.

Exclude all-PVC and paper-backed vinyl wallpaper, cellulose/PET nonwoven wallpaper, textile, woven natural-material or glass-fibre coverings, self-adhesive/prepasted products, window transparencies, unprinted wallpaper base, paintable woodchip/ingrain paper and floor coverings. Solvent/UV/digital/screen/flexographic printing, added coatings or lamination and integrated pulping/papermaking require a separately supported method extension. A producer word such as paper does not prove absence of PET or a vinyl face layer; verify cross-section, supplier composition and printing record. Installation adhesive is a separate downstream supply and activity. The unit below represents factory delivery, not a demonstrated duration of installed-wall service.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.wallpaper-and-similar-wall-coverings-window-transparencies-of-paper |
| classification_refs | CPC 3.0 32194; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Non-prepasted cellulose-paper wallpaper, water-based rotogravure printed; declared mechanical embossing |
| excluded_products | Nonwoven/PET, vinyl/PVC, textile, laminated, overvarnished, self-adhesive, window transparency, base-paper and other print routes |
| representative_product | One accepted commercial wallpaper grade, actual colourways and specification; no average recipe |
| production_route | Purchased paper and aqueous gravure inks → web inspection/make-ready → gravure printing and inter-colour drying → conditional mechanical embossing → inspection/slitting/rewinding → packing; wet cleaning, capture and external waste handling |
| market_state | Accepted dry-to-handle factory-gate rolls, installation paste absent |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Decorative paper sheet for interior wall finishing after separately modelled installation |
| How much | 1 kg net accepted finished wallpaper |
| How well | Declared roll dimensions, measured grammage/moisture, colour/pattern registration, lightfastness/washability, dimensional stability and applicable fire/product-emission test acceptance; no universal numerical thresholds |
| How long or cycle | One factory-gate delivery; installed service life, maintenance and replacement separately evidenced for the study |
| reference_flow_link | wallpaper |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wallpaper and similar wall coverings, window transparencies of paper (`a0bbca3f-c3c2-4c24-a408-2c5889035343`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | wet-laid cellulose paper and supplier furnish; no PET/nonwoven/PVC/lamination/overvarnish; press-ready water-based gravure formulation/colour/solids/VOC/neutraliser; printing/drying/embossing route; no factory installation paste; net product mass and core/packaging tare; measured moisture/grammage and accepted area; grade/performance acceptance; energy/voltage/provider gates; external wastewater receiver; site/reporting period; installation adhesive and service-life exclusions |

The broad reference identity includes this subset with no contrary material or production constraint; it does not establish all wallcovering coverage or background compatibility. Declare all required qualifiers in dataset metadata or equivalent fields; missing evidence makes applicability incomplete. For an area comparison, use measured net product grammage G in kg/m2 and product mass S; area = S/G. Packaging is excluded from G. Do not adopt the IGI group-average grammage or conversion factor.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | wallpaper | Mass | kg | S is accepted net finished wallpaper mass excluding core and packaging; measure moisture and delivered grammage. All rows use the same S and reference quantity 1 kg. |
| material_basis | base; ink; water; pe_film; core; box; pallet | Mass | kg | Weigh each delivered exchange on its supplied wet basis; record actual solids/moisture/composition and stocks. Any active/dry-to-delivered or volume-to-mass conversion needs measured properties and compatible provider definition. |
| electricity_basis | electricity | Net calorific value | MJ | Measured kWh × 3.6 = MJ; preserve the native property and customer-side voltage/supply gate. |
| gas_basis | gas | Volume | m3 | Retain actual meter T/P, wet/dry composition and compressibility plus supplier/background volume definition; unknown reference conversion keeps linkage incomplete. |
| emission_basis | co2_fossil; co2_bio; co; nox; so2; ch4; n2o; nmvoc; pm25; pmcoarse; pmover10; vapor; formaldehyde; benzene; ammonia | Mass | kg | Require species/source/medium and actual monitoring convention. NOx quantity definition needs explicit reconciliation; particulate bins are disjoint. Carbon reporting does not remove biogenic CO2 from the LCI. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cellulose paper reels and press-ready aqueous gravure inks delivered to the converting site |
| starting_condition_role | Foreground gate, not omission of upstream pulping/papermaking |
| product_classification_scope | Authored subset of CPC32194, not all wall coverings or window transparencies |
| recursive_input_rule | Keep internal paper/ink/water transfers equal on sending and receiving sides. Purchased already printed same-category inputs require explicit upstream boundary and separate linkage; never duplicate their production. |
| upstream_dataset_requirement | Supplier-compatible pulp and paper making, supplied ink/packaging/utility production and inbound transport; external wastewater and solid-waste treatment including receiver acceptance and actual composition |
| disclosure | Foreground gate, substage map and measured stocks/returns; supplier region/year/state/property/boundaries; packaging; actual burner/cleaning/emission controls; waste receiver; capital and downstream exclusions; unresolved links |

Keep printing, drying, embossing, finishing and packaging as measured substages within one foreground converting unit. Only one final product output uses the reference identity; the unchanged physical web between substages is an internal transfer, never a second final-product exchange. Cylinder/plate manufacture and engraving are supplier processes with declared upstream links; electroplating discharges are not presumed on-site. Source: `jrc-sts-bref-2020`.

This route allows measured electrical drying and/or an on-site gas-fired indirect hot-air drying furnace. Do not duplicate internal generated heat as purchased heat. On-site boilers, purchased steam or heat, thermal off-gas oxidation, on-site wastewater treatment, varnishing, lamination, dry-solvent cleaning or other formulation additions require a separately evidenced extension with atomic supplies and emissions. Supplier-approved dilution of the purchased press-ready ink with separately metered water under water/cp_water is permitted in this route. Retain the complete supplied wet ink purchase and its supplier formulation/manufacturing burden once; its existing carrier water remains inside that ink and only actual added water is another purchase. This exception does not authorize added pigments, binders, neutralisers or other formulation ingredients. Base-paper manufacture must follow actual supplier pulping/papermaking evidence, never wood-processing surveys. Record cleaned wastewater once at external handover, with separate external treatment burden; no direct water release is attributed to this foreground. Sources: `jrc-paper-bref-2015`, `jrc-sts-bref-2020`, `epa-natural-gas-2026`.

Installation is outside the factory inventory: declare wall preparation, actual installation adhesive formulation/wet or dry quantity and water, pattern-repeat cutting loss, packaging disposal and installation energy in a distinct downstream scenario when requested. Factory-prepasted and self-adhesive products are excluded. Separately declare use-period service conditions, emissions tests, actual cleaning/repair and replacement assumptions. No universal lifetime, zero use emission or comparison of kg of different wallcoverings is authorised. The IGI group EPD is scenario evidence, not a universal service default. Sources: `igi-cellulose-epd-2024`, `boras-faq`.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| convert | Paper wallpaper conversion and packing | required | Declared aqueous gravure cellulose-paper route | One foreground unit, separately metered substages | 1 kg net accepted wallpaper |

Physical map: base-web receipt → make-ready/printing → drying → actual embossing → dry slitting/rewinding → packing → accepted net roll. Preserve a separately quantified physical mass/water/carbon balance before the allocated environmental burden ledger. Inputs include formulation water, paper moisture and actual fossil/biogenic carbon; outputs include net paper, each trim stream, ink residue, external wastewater, captured dust, actual water vapour and gaseous/particle releases; stocks and both ends of internal links remain visible.

### Process: Paper wallpaper conversion (`convert`)

#### Inputs

##### Product flows

###### base (`base`)

Purchased wet-laid cellulose paper, without synthetic nonwoven reinforcement or a decorative PVC layer. Record supplier furnish (chemical, mechanical or recovered fibre), fillers, sizing, moisture, grammage and net reel mass. Supplier pulping/papermaking boundaries require separate compatible upstream data; the existing chemical-pulp base-paper method applies only to its own narrower furnish.

- Selected flow: Wallpaper base (`df6968ae-6d39-4a15-b20e-233c83d9f785`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-paper-bref-2015`, `boras-materials`

###### ink (`ink`)

One supplied press-ready aqueous gravure ink formulation; repeat the atomic row for each separately supplied colour/formulation in a concrete dataset. Record pigment/binder, solvent and neutraliser composition, supplied mass, solids, VOC and biogenic carbon. Weigh net supply after stocks/returns; water already in purchased ink is not a second dilution input. Do not substitute garment discharge ink, solvent gravure ink or a generic density-limited ink.

- Selected flow: Water-based Gravure Ink (`39a0036c-0967-448d-97a5-e85cc218188f`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-sts-bref-2020`

###### electricity (`electricity`)

Use only actual customer-side 1–35 kV grid-average supply, with verified location/year/mix and delivery losses. Meter printing, drying auxiliaries, finishing and packaging separately and reconcile to the site invoice. Convert measured kWh to MJ using 3.6; the native property name is Net calorific value. Different voltage or dedicated generation requires another verified identity. Source location of supply is CN. Actual site geography, year, voltage, mix and provider boundary must be compatible; otherwise verify another flow/provider, without treating the generic name as global supply.

- Selected flow: Alternating current (`3d76981f-964a-4865-b588-0e067a2a1163`)
- Flow property / unit: Net calorific value (`93a60a56-a3c8-11da-a746-0800200c9a66`); unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange total / S; use cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-sts-bref-2020`

###### gas (`gas`)

Conditional purchased compressed pipeline natural gas used in an on-site indirect hot-air drying furnace. Meter delivery and each burner separately. Reference quantity is Volume/m3, not Mass; require actual temperature, absolute pressure, wet/dry convention, composition, compressibility and supplier/background m3 basis. The secondary mass coefficient is not a density. No purchased heat or steam is inferred from this fuel input.

- Selected flow: natural gas in the gaseous state (`4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total / S; use cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `epa-natural-gas-2026`

###### water (`water`)

Meter additional treated tap water for ink dilution and wet press cleaning; keep these stages separate from water already supplied in ink. The native reference is Mass/kg: convert measured m3 only with actual density/state and supplier basis. Record local source/treatment and delivery boundary; do not use the Hong Kong plant-gate record for unspecified site supply.

- Selected flow: Tap water (`d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-sts-bref-2020`

###### pe film (`pe_film`)

Conditional PE shrink-wrap only, with actual resin/film grade, thickness, composition and delivery provider. PE CAS9002-88-4 and film description establish physical identity; source CPC29220 is inconsistent and requires provider clarification. Polyolefin does not establish PE rather than PP; do not link this UUID for a PP film or laminate.

- Selected flow: Polyethylene film (`e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `igi-cellulose-epd-2024`, `boras-materials`

###### core (`core`)

Conditional actual paperboard winding core. Weigh or use traceable piece mass and counts; exclude its tare from wallpaper net mass. Record core construction, glue and supplier reference basis, and distinguish returnable cores from one-way supply.

- Selected flow: Cardboard tube or Paper core (`78bf7f6e-519e-4b3d-82f0-eda15b2fee61`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `igi-cellulose-epd-2024`

###### box (`box`)

Actual finished corrugated shipping box; measure box mass and shipped counts separately from wallpaper. Declare fibre/recycled content, board construction, box conversion and provider. The verified database box has a specific 16.6% primary/83.4% recycled fibre definition, not a universal box; no composition default or board-to-box substitution is allowed.

- Selected flow: Finished corrugated paperboard shipping box
- Flow property / unit: Mass / kg; identity unresolved
- Amount rule: Measured attributable exchange total / S; use cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `igi-cellulose-epd-2024`

###### pallet (`pallet`)

Actual wooden platform pallet only within the broad record. Record construction/species/treatment and provider. Retain physical dispatch and return counts and pallet mass; allocate reusable-pallet consumption from measured service trips, repairs, losses and stocks, without an assumed lifetime or treating a full returned pallet as consumed.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood (`4b49871e-95be-4e0c-9223-9902f9eaa763`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `igi-cellulose-epd-2024`

#### Outputs

##### Product flows

###### wallpaper (`wallpaper`)

The single accepted final reference product, water-based rotogravure printed wet-laid cellulose paper without a PVC layer, synthetic nonwoven reinforcement, lamination, overvarnish or factory-applied installation paste. Physical broad flow identity does not supply a recipe or compatible background process. Release net finished wallpaper mass after inspection; packaging/core are separate.

- Selected flow: Wallpaper and similar wall coverings, window transparencies of paper (`a0bbca3f-c3c2-4c24-a408-2c5889035343`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `igi-cellulose-epd-2024`, `jrc-sts-bref-2020`, `boras-faq`

##### Waste flows

###### trim unprinted (`trim_unprinted`)

Clean unprinted paper-base trim before printing; weigh actual moisture/filler/sizing state and identify receiving recycler. Keep separate from printed contaminated trim. Record actual internal returns at equal sending/receiving quantities; only exported net waste crosses the foreground boundary.

- Selected flow: waste paper (unspecified) (`f140a5a2-5318-4d06-956f-a87b9c6fda25`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `igi-cellulose-epd-2024`, `jrc-paper-bref-2015`

###### trim printed (`trim_printed`)

Printed paper trim and rejected wallpaper with actual retained ink and moisture; weigh and retain receiver acceptance and waste classification. Broad waste-paper identity does not prove recyclable or hazard-free material. Never include captured dust or exported ink residue in this row.

- Selected flow: waste paper (unspecified) (`f140a5a2-5318-4d06-956f-a87b9c6fda25`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `igi-cellulose-epd-2024`, `jrc-paper-bref-2015`

###### ink waste (`ink_waste`)

One separately collected liquid aqueous-gravure waste-ink residue fits the broad industrial Waste liquid family only after confirming its actual liquid state, pigment/binder/solvent/H2O composition, full as-transferred wet kg, hazard classification and receiving treatment. Retain the original measured residue quantity separately from bulk cleaning effluent, with no expert default waste fraction. Gel or dried scrap is not silently assigned this liquid identity: if present, preserve its full separately measured quantity in a distinct physically specific row with verified identity before dataset completion. A source inline Mass label cannot override a conflicting native property UUID. Measure the H2O fraction for the water ledger; never treat whole residue kg as water or infer a generic hazardous status.

- Selected flow: Waste liquid (`bdfc32cf-8028-40a8-a2e4-2d73422ece34`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-sts-bref-2020`

###### effluent (`effluent`)

One actual liquid aqueous-gravure press-cleaning effluent transferred to documented external treatment. The broad industrial-cleaning Waste liquid identity is conditional on actual liquid state, full composition and receiver acceptance; no universal treatment or hazard class follows from it. Preserve whole wet kg or actual measured V*rho(T), and measure H2O fraction independently for the water balance. Dissolved/suspended ink, COD/BOD, nitrogen/phosphorus and pH characterize the whole stream; overlapping analytical indicators are not additive constituent masses or separate foreground water emissions. Concentrated waste ink stays a separate physical row. Link a compatible external treatment process, keeping its releases outside this foreground.

- Selected flow: Waste liquid (`bdfc32cf-8028-40a8-a2e4-2d73422ece34`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-sts-bref-2020`

###### dust (`dust`)

Separately captured paper-cutting/rewinding dust exported as a waste stream. Measure fibre, actual ink/filler/size solids, moisture and receiver conditions, with stock and internal-return records. Captured or internally recycled dust is not escaped air PM; source housekeeping advice supplies no sampling frequency or default capture efficiency.

- Selected flow: Dust (`2a6c9b60-a075-45ec-b611-c3b4dd255935`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

##### Elementary flows

###### co2 fossil (`co2_fossil`)

Actual fossil CO2 from on-site gas combustion, reconcile measured fuel carbon and non-CO2 carbon without an assumed complete-oxidation factor. Purchased grid electricity has no duplicated on-site CO2.

- Selected flow: carbon dioxide (fossil) (`08a91e70-3ddc-11dd-923d-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### co2 bio (`co2_bio`)

Include actual measured biogenic CO2 if conversion releases biogenic carbon from paper or supplied ink; no biomass fuel or destruction of paper is assumed. Stored paper carbon is not an on-site release. Preserve this LCI exchange irrespective of GHG reporting conventions; justify absence, not an assumed zero.

- Selected flow: carbon dioxide (biogenic) (`08a91e70-3ddc-11dd-9c15-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `igi-cellulose-epd-2024`

###### co (`co`)

Fossil carbon monoxide from actual on-site gas combustion, CAS630-08-0; quantify as CO mass with stack testing. This fossil identity cannot represent a biogenic CO component.

- Selected flow: carbon monoxide (fossil) (`08a91e70-3ddc-11dd-924e-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### nox (`nox`)

One NO plus NO2 sum excluding N2O. Confirm monitoring and LCI/LCIA mass convention; Mass/kg does not establish NO2 equivalent. Unknown convention leaves quantity/background linkage pending; do not duplicate NO and NO2 as additional characterised exchanges.

- Selected flow: Nitrogen oxides (`f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### so2 (`so2`)

Sulfur dioxide CAS7446-09-5 from actual gas sulfur/odorant combustion, not generic SOx and not a water-compartment record. Use measured sulfur balance or species-specific stack evidence.

- Selected flow: sulfur dioxide (`fe0acd60-3ddc-11dd-ac48-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### ch4 (`ch4`)

Fossil methane CAS74-82-8: actual combustion slip plus separately assessed on-site fuel leaks. Upstream supplier methane is not duplicated here. No anaerobic treatment or biogenic methane is inferred.

- Selected flow: methane (fossil) (`08a91e70-3ddc-11dd-9610-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### n2o (`n2o`)

Nitrous oxide CAS10024-97-2 from actual gas combustion; distinct from NOx. Record source-specific monitoring/measurement uncertainty and do not import an AP42 average factor.

- Selected flow: nitrous oxide (`08a91e70-3ddc-11dd-94c3-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### nmvoc (`nmvoc`)

Actual non-methane volatile organic compounds from ink drying/cleaning and gas combustion. Water-based does not mean no organic emissions. Preserve the measured total in cp_air and inventory measured individual species separately wherever possible. This exchange is only the remaining unassigned compound mass after those species, not an additional full total. Reconcile a non-negative residual without hiding toxic species or characterising them twice; unknown speciation/convention leaves completeness pending. Confirm compound-mass versus carbon-mass basis and exclude methane.

- Selected flow: non-methane volatile organic compounds (`08a91e70-3ddc-11dd-a302-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured unassigned compound-mass residual after separately inventoried species / S; cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-sts-bref-2020`, `epa-natural-gas-2026`

###### pm25 (`pm25`)

Only actual escaped PM2.5 mass after control; distinguish paper finishing dust and gas-stack filterable/condensable fractions. This bin is not a default fraction of collected dust.

- Selected flow: particles (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`, `epa-natural-gas-2026`

###### pmcoarse (`pmcoarse`)

Only escaped particles above PM2.5 up to PM10; measure a disjoint coarse bin. Subtract nested PM2.5 from total PM10 only where the tests have matching sampling/fraction definitions; never sum total PM10 with PM2.5.

- Selected flow: particles (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### pmover10 (`pmover10`)

Only actual escaped particles above PM10 from dry slitting/rewinding, not total suspended dust or collected waste. Reconcile three disjoint particle bins and captured/internal-return dust; no emission factor or particle-size distribution is assumed.

- Selected flow: particles (> PM10) (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### vapor (`vapor`)

Actual water vapour emitted by aqueous ink drying and conditional gas combustion, reconciled with material moisture and water balance. Exclude incoming air humidity from net generated evaporation; no liquid discharge or freshwater withdrawal identity is substituted. Keep material evaporation separate from water formed by fuel combustion. Determine the latter from actual fuel composition, hydrogen input and measured incomplete-combustion species; do not assume complete methane oxidation or a default fuel water factor. Quantify incoming air humidity independently; actual moisture uptake requires its own verified resource exchange, not negative emitted vapour.

- Selected flow: water vapour (`fe0acd60-3ddc-11dd-ac04-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-sts-bref-2020`

###### formaldehyde (`formaldehyde`)

Conditional measured formaldehyde CAS50-00-0 from gas combustion or verified ink chemistry; retain separately and reconcile its inclusion in the NMVOC total. Neither trace-source mention nor product emission test implies a default factory discharge.

- Selected flow: formaldehyde (`08a91e70-3ddc-11dd-941b-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### benzene (`benzene`)

Conditional measured benzene CAS71-43-2 from actual gas combustion; no benzene-based printing solvent is allowed in this route. Reconcile the NMVOC total and retain the toxic species without duplicate characterisation.

- Selected flow: benzene (`08a91e70-3ddc-11dd-9202-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-natural-gas-2026`

###### ammonia (`ammonia`)

Conditional ammonia CAS7664-41-7 volatilised from an actual supplied aqueous ink neutraliser. Verify formulation and mass monitoring; an ammonium-salt constituent, amine or total nitrogen is not this species. No neutraliser recipe or emission is presumed.

- Selected flow: ammonia (`08a91e70-3ddc-11dd-a2a9-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / S; use cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-sts-bref-2020`

## 7. Allocation and Co-product Handling

Apply the documented multifunctionality hierarchy: first subdivision or justified system expansion to avoid allocation, then an evidenced underlying physical relationship, and only then a justified other relationship such as economic value. System expansion needs actual functions and compatible displaced supply; no automatic substitution credit. Prefer direct substage metering and product/colour campaign subdivision. Where inseparable shared drying/utilities remain, require a demonstrated causal physical basis (actual run time, web throughput/drying duty), assess sensitivity and disclose it. An alternative economic relationship requires documented rejection of the preceding steps and actual market values at the relevant stage. Never adopt an area/mass share without checking differential ink coverage, drying load and setup. Source: `eu-pef-2021` Annex I4.5; the site protocol specifies the actual observations.

Keep the original physical process map, mass/water/carbon totals and equal internal transfers independent of the allocated environmental burden account. If a genuine co-product is documented, keep its full physical output unchanged; allocate shared burdens only, not physical co-product mass mechanically multiplied by its share. Paper trim, waste ink and dust are waste by default; sale value alone does not establish a co-product or avoided virgin production. Document receiver function and treatment, exported quantities and any separate downstream benefit scenario. No universal recycling credit is specified.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | convert | wallpaper | Measured site record | accepted net mass S; roll ID; grade; dimensions/accepted area; measured net grammage G; moisture; core/packaging tare; rejected mass | Weigh accepted rolls on calibrated scales and reconcile shipments, retained stocks and quality acceptance; measure dimensions/grammage/moisture on the same grade. | kg; m2; kg/m2 | Each lot/campaign; interval meters and representative monitored operating conditions | One declared common reporting period, including setups/rejects/cleaning/stock changes | Same site, grade and supported route | per 1 kg reference flow | Calibration, actual supplier/receiver specifications, timestamps, raw records, sampling QA and reconciled stocks |
| cp_material | convert | base; ink | Measured site record | supplier; actual composition/colour/furnish; supplied mass; solids/moisture; opening/closing stock; returns; internal transfer | Calibrated net weighing and actual supplier specifications/SDS; log paper and each ink separately per grade/campaign, reconcile returned ink and dilution. | kg; count | Each lot/campaign; interval meters and representative monitored operating conditions | One declared common reporting period, including setups/rejects/cleaning/stock changes | Same site, grade and supported route | per 1 kg reference flow | Calibration, actual supplier/receiver specifications, timestamps, raw records, sampling QA and reconciled stocks |
| cp_energy | convert | electricity; gas | Measured site record | substage meters; kWh; fuel m3; T/P; humidity/composition; compressibility; voltage; supplier reference; burner/time/load; reporting period | Read calibrated interval meters per printing/drying/finishing/packing substage and invoice totals. Preserve gas standard-volume and provider conversion records, distinguish electric and indirect gas drying. | kWh; m3; MJ | Each lot/campaign; interval meters and representative monitored operating conditions | One declared common reporting period, including setups/rejects/cleaning/stock changes | Same site, grade and supported route | per 1 kg reference flow | Calibration, actual supplier/receiver specifications, timestamps, raw records, sampling QA and reconciled stocks |
| cp_pack | convert | pe_film; core; box; pallet | Measured site record | component mass/count; polymer/fibre composition; construction; stocks; dispatch/returns; service trips/repair/loss; product load | Weigh each packaging component; reconcile invoices/packout and returnable-item service records. Exclude product tare, identify actual film polymer and corrugated-box construction. For every packaging material and supplier container, reconcile opening stock plus full receipts with full dispatch/return transfers, actual discard and closing stock. Preserve full outgoing packaging outside net wallpaper, and both sides of each internal reuse transfer; allocate manufacture/service burdens separately, never divide physical transfer mass by reuse trips. Screen actual wrapping offcuts, incoming used cores, damaged packaging and repair parts as individual waste streams; do not hide them in paper trim. | kg; count | Each lot/campaign; interval meters and representative monitored operating conditions | One declared common reporting period, including setups/rejects/cleaning/stock changes | Same site, grade and supported route | per 1 kg reference flow | Calibration, actual supplier/receiver specifications, timestamps, raw records, sampling QA and reconciled stocks |
| cp_waste | convert | trim_unprinted; trim_printed; ink_waste; dust | Measured site record | stream ID; material/ink/solids/moisture; weighed export; stocks; internal-return sending/receiving quantities; hazard status; receiver | Use separate weighed containers and waste-transfer manifests for each stream. Keep captured dust separate from escaped PM and internal return from external export. | kg; count | Each lot/campaign; interval meters and representative monitored operating conditions | One declared common reporting period, including setups/rejects/cleaning/stock changes | Same site, grade and supported route | per 1 kg reference flow | Calibration, actual supplier/receiver specifications, timestamps, raw records, sampling QA and reconciled stocks |
| cp_water | convert | water; effluent; vapor | Measured site record | added water mass/volume/density; ink/paper incoming moisture; wastewater whole mass/volume; COD/BOD and actual species; water in product/wastes; evaporation; receiving plant | Meter additions and external handover, measure matched volume/density and moisture, use flow-proportional external-effluent sampling with analytical QA. Use independently measured H2O fractions of whole waste ink and wastewater, not their total wet mass. Include combustion-generated water using actual fuel hydrogen and composition separately from material evaporation and incoming air humidity. Close actual water balance with uncertainty and stock terms; do not assign treatment releases to this foreground. | kg; m3 | Each lot/campaign; interval meters and representative monitored operating conditions | One declared common reporting period, including setups/rejects/cleaning/stock changes | Same site, grade and supported route | per 1 kg reference flow | Calibration, actual supplier/receiver specifications, timestamps, raw records, sampling QA and reconciled stocks |
| cp_air | convert | co2_fossil; co2_bio; co; nox; so2; ch4; n2o; nmvoc; pm25; pmcoarse; pmover10; formaldehyde; benzene; ammonia | Measured site record | source/control; species/CAS and fossil/biogenic carbon; concentration; stack flow; dry/wet/reference T/P; operating hours/load; fugitives; filterable/condensable method; particle bin; NOx and VOC mass convention; detection limit | Use calibrated source-specific concentration/flow sampling and activity logs under actual normal/startup/cleanup conditions; validate sampling state, species and post-control exhaust. Reconcile fuel/ink carbon and fugitive records; report detection limits/uncertainty and justify route absence. | kg; count | Each lot/campaign; interval meters and representative monitored operating conditions | One declared common reporting period, including setups/rejects/cleaning/stock changes | Same site, grade and supported route | per 1 kg reference flow | Calibration, actual supplier/receiver specifications, timestamps, raw records, sampling QA and reconciled stocks |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | q = attributable measured exchange total / S; S is accepted net wallpaper mass in kg for the same period and grade. Final reference output = 1 kg. | measured exchange total; S; cp_output | Exchange per 1 kg reference flow |  |
| material_stock | base; ink; pe_film; core; box; pallet | Physical net use = opening stock + receipts - closing stock - returned/exported unused supply; distinguish internal recirculation. Allocate attributable burdens separately before dividing by S. | cp_material; cp_pack; cp_output | Measured mass per reference flow |  |
| area_conversion | wallpaper | Accepted area = S/G; G is measured net wallpaper kg/m2 excluding packaging. Area comparison needs matched performance, installation and service conditions. | S; G; cp_output | m2 | igi-cellulose-epd-2024 |
| power_conversion | electricity | Attributable measured kWh × 3.6 / S gives MJ per 1 kg reference flow; do not add internal heat to purchased supply. | cp_energy; S | MJ/kg |  |
| air_integration | co2_fossil; co2_bio; co; nox; so2; ch4; n2o; nmvoc; pm25; pmcoarse; pmover10; formaldehyde; benzene; ammonia | For matching concentration/flow state: sum concentration in mg/m3 × exhaust m3 per interval × 10^-6 / S gives kg per reference kg; retain measured fugitive contributions and chemical mass conventions. A measured m3/hour rate is integrated once over hours; already integrated interval m3 is not multiplied by time again. | cp_air; cp_energy; S | kg/kg | epa-natural-gas-2026; jrc-sts-bref-2020 |
| balance_check | base; ink; water; wallpaper; trim_unprinted; trim_printed; ink_waste; effluent; dust; vapor | Retain unallocated total solids/water/carbon balances including stocks, actual gas species and equal internal links; explain residuals and uncertainty before burden allocation. | cp_material; cp_output; cp_water; cp_waste; cp_air | Physical balance and separate allocated burden account | eu-pef-2021 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | All rows | Actual material/species/state/route, reference property/unit and environmental compartment must match; unresolved exact identity remains a named gap. Identity does not prove amount or provider compatibility. | Supplier specifications/SDS, state-compatible monitoring and native flow metadata |
| period | All protocols | Use the same declared representative reporting period, grade and output denominator, including make-ready, downtime, cleaning, rejects and stocks. Do not extrapolate a single recipe/plant into a universal factor. | Calibrated logs, acceptance and stock reconciliation |
| completeness | Dataset | Survey actual lubricants, hydraulic fluids, replacement doctor blades/rollers, filters, wipes and cleaning materials, including separate spent streams and supplier-owned container transfers; document absence or add atomic rows before dataset completion. Supplier cylinder engraving is separate from actual on-site maintenance. Verify actual route absence before omitting a conditional flow. Add each real missing supply/waste/species as an atomic row with collection and identity evidence. Unknowns are not zero. | Process walk-through, supplier/receiver records and balance closure |
| boundary | Providers and downstream scenarios | Separate foreground emissions, upstream electricity/pulp/ink and external treatment burdens; retain installation adhesive and service-period assumptions separately. | Declared provider gates and scope/scenario evidence |

## 9. Validation Rules

Require exactly one final reference output linked to wallpaper, explicitly 1 kg net finished product; every row and linked aggregation uses the same reference denominator in both languages. Verify aqueous gravure and wet-laid paper evidence and absence of excluded structures/routes. Check whole supplied-ink composition, physical mass/water/carbon balances, equal internal transfers, separate physical outputs and allocated burdens, and all supplier/receiver quantity definitions.

Missing native identity, unresolved gas volume conversion/NOx mass convention, inadequate species/particle measurements, incompatible provider or missing actual foreground quantities makes a concrete dataset incomplete. Never substitute correction flows, resource withdrawals, wrong media/species or source-specific waste routes. Reconcile NMVOC and individual toxic species without duplicate characterisation; no nested particle-bin sums, captured/returned dust double counting, unreported biogenic CO2, duplicated external treatment water releases or reused EPD recipes. Product indoor-emission testing is a performance qualifier, not factory outdoor emission mass.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground wallpaper-conversion process; title does not confer publication approval |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same physical paper/aqueous-gravure subset, verified reference basis and compatible upstream/receiver links; review-required candidate guidance |
| excluded_use | All wallcovering coverage, unqualified m2/service comparison, vinyl/nonwoven or other-route proxy, installed-wall lifetime/adhesive defaults, regulatory approval |
| required_metadata | Required qualifiers, site/year/grade, provider gates, process map and measurement protocols, actual formulation/moisture/grammage, declared capital and downstream scope |
| required_quality_disclosure | Identity gaps, provider/quantity limitations, coverage and detection limits, calibration/uncertainty, stock/balance residuals, allocation and service scenario evidence; not scientifically reviewed |
| update_trigger | Backing/material/ink or print-route change; drying/control/cleaning/receiver change; supplier quantity basis or performance/service evidence change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-sts-bref-2020 | official_guidance | JRC STS BREF 2020; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf | Ch12.2.2 printed383/PDF422 confirms aqueous wallpaper rotogravure;12.4.2.3 printed413/PDF452-453: drying, wet cleaning and residual organic/neutraliser risk. No recipe/amount/factor transferred. |
| igi-cellulose-epd-2024 | literature | IGI EPD-IGI-20230438-IBG1-EN, issued2024-01-18; https://greenwalls-igi.info/wp-content/uploads/2024/02/Wallcoverings-on-cellulose-fibre-base.pdf | Sections2.1/2.5/2.6,2.8/2.9/2.12 and3.1-3.2/3.6-3.7: paper product distinction, conversion figure, installation/packaging and declared-unit versus service scenario. Group2021 data/average, not recipe, grammage, lifetime or emission defaults. |
| boras-materials | literature | Boråstapeter, With a feel for the material; https://www.borastapeter.com/en/pages/environment-sustainability-product | Producer-specific cellulose/PET nonwoven distinction, aqueous non-PVC inks, possible surface treatment and polyolefin packaging. Such optional coating is excluded here; polyolefin needs actual PE/PP verification. |
| boras-faq | literature | Boråstapeter, Wallpapering School FAQ; https://www.borastapeter.com/en/pages/wallpapering-school-frequently-asked-questions | Paper without polyester versus EasyUp nonwoven and named Borosan Paper product; installation differences. Not a universal recipe or lifetime. |
| jrc-paper-bref-2015 | official_guidance | JRC Production of Pulp, Paper and Board BREF2015; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 7.1.10 printed670/PDF708: paper finishing trim/dust. Upstream papermaking must match supplier route; not boiler/printing emissions factors or furnish formula. |
| epa-natural-gas-2026 | official_guidance | EPA AP42 Section1.4 Natural Gas Combustion, header10/26; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | 1.4.3 PDF2-3: actual on-site gas boiler/furnace emission species and operating dependence; no average factors, heating values or complete oxidation defaults. |
| eu-pef-2021 | official_guidance | European Commission C(2021)9332 final, Annexes I-II, Annex I4.5; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf#page=63 | PDF63-64 general subdivision and allocation hierarchy; physical product output ledger remains separate. Not a claim of full PEF conformity. |
