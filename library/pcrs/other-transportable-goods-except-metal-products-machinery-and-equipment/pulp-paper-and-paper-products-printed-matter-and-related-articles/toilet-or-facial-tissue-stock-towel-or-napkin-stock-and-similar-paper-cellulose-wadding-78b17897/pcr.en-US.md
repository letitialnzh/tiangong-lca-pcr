---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-or-facial-tissue-stock-towel-or-napkin-stock-and-similar-paper-cellulose-wadding-78b17897
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Virgin-fibre creped tissue parent reels

## 1. Scope and Applicability

This PCR covers non-integrated manufacture of single-ply creped tissue parent reels from purchased virgin bleached hardwood/softwood kraft market pulp: repulping, stock cleaning/refining, wet forming, conventional pressing/vacuum dewatering, steam-heated Yankee plus hot-air hood drying, blade creping, reeling and any parent-reel rewinding/edge cutting and transport protection before mill-gate acceptance. Tissue is a substrate for later conversion, not a counted consumer roll, facial tissue or napkin. [jrc-pp-bref-2015, sofidel-parent-reels]

CPC3.0 32131 also includes cellulose wadding and fibre webs beyond this method. The scope is narrower; the canonical mapping and its ADR govern the accepted relation. Exclude dry-laid/airlaid/nonwoven webs, TAD and hybrid/uncreped routes, recovered-fibre/deinking routes, on-site pulping/bleaching from wood, coatings/lotions, ply bonding, consumer embossing/perforation/folding/log cutting and retail packaging under 32193. Actual different routes require separately reviewed methodology; no classification label establishes applicability. [jrc-pp-bref-2015]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-or-facial-tissue-stock-towel-or-napkin-stock-and-similar-paper-cellulose-wadding-78b17897 |
| classification_refs | CPC 3.0 32131; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Virgin-fibre CWP dry-creped single-ply tissue parent reels for toilet/facial/towel/napkin conversion |
| excluded_products | Finished converted paper articles; cellulose wadding/nonwoven webs; recycled/TAD/hybrid/noncreped tissue; integrated wood pulping |
| representative_product | Accepted creped tissue parent reel at measured mill-gate moisture |
| production_route | Purchased bleached kraft pulp -> wet forming/pressing -> Yankee/hood drying -> blade creping -> parent reel |
| market_state | Single-ply parent reel for a converter; measured moisture; core/wrap excluded from tissue mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide creped tissue substrate to a converting operation |
| How much | 1 kg net accepted tissue at measured factory-gate moisture |
| How well | Declared basis weight, softness, tensile and wet strength where applicable, absorbency and buyer acceptance; mass comparison requires compatible quality |
| How long or cycle | One declared manufacturing and delivery campaign; no consumer-use equivalence |
| reference_flow_link | parent_reel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Toilet or facial tissue stock, towel or napkin stock and similar paper, cellulose wadding and webs of cellulose fibres `3070a34a-8d40-426e-9299-7c367b0dca21` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Virgin hardwood/softwood furnish and measured shares; species/origin/supplier; kraft and bleaching route; delivered-pulp dry matter and background mass convention; machine/grade/campaign; conventional press/vacuum and Yankee/hood route; blade crepe and winding state; actual wet-end/coating formulation and wet-strength status; net tissue mass, gate moisture and test/sampling SOP; basis weight, ply count (one), dimensions and acceptance quality; utility voltage/gas volume/steam pressure and provider bases; core/wrap excluded; water supply, treatment, receiving medium and waste receivers |

Declare these qualifiers in the foreground package; absent required qualifiers make its reference incomplete. The adopted broad stock record includes this physical subset without prescribing another route; it is not a background process or a claim that all listed stock subtypes are interchangeable. No fixed reel weight, moisture, fibre ratio or absorption equivalence is prescribed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | P is weighed accepted net tissue at the actual mill-gate moisture, excluding all cores/spools/wrappers and rejected/internal broke; collect using cp_mass. All inventory rows use this same 1 kg denominator. |
| dry_wet_basis | mass-based pulp, tissue, chemical/formulation and residue moisture-component ledgers | Mass | kg | Record m and same-lot wet-basis moisture w; dry solids d = m*(1-w). A dry-output intensity converts to delivered-output intensity using measured dry output D/P. Do not equate pulp supplier air-dry tonnes, oven-dry tonnes and delivered tonnes. ISO source is scope-only; obtain an applicable validated sampling/test SOP. Auxiliary component mass/moisture does not replace native gas Volume/m3, steam GCV/MJ or electricity NCV/MJ references. |
| utility_basis | natural_gas, steam, electricity | Volume / Gross calorific value / Net calorific value | m3 / MJ / MJ | Match gas volume conditions, physical steam/condensate mass and enthalpy, supplied-heat provider reference MJ and grid-voltage interfaces independently. 1 kWh = 3.6 MJ is exact unit conversion, not efficiency. A GCV property does not establish net delivered heat; actual k_bg is required. |
| chemical_basis | wet_strength, retention_aid, defoamer, yankee_adhesive, yankee_pae, release_oil, wwtp_pac | Mass | kg | Distinguish as-supplied formulated mass, dry solids and active ingredient; separate carrier water and each other actual chemical component without double counting dilution water. |
| emission_basis | co2_fossil; co2_biogenic; co; nox; n2o; methane; methane_biogenic; so2; voc_ethane; pm_fine; pm_coarse; pm_large; water_vapour; effluent_water; cod; bod; tn; tp; aox; tss | Mass / Volume | kg / m3 | Match elementary species/origin/medium and quantity definition. COD/BOD use oxygen equivalent, AOX chlorine equivalent, total N/P elemental mass; these indicators are not additive physical species. NOx-to-NO2 convention remains pending until proven. Use mutually exclusive particulate intervals and retain biogenic CO2. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished bleached hardwood/softwood kraft market pulp received at tissue mill; upstream production excluded from foreground and linked once |
| starting_condition_role | foreground input gate |
| product_classification_scope | CPC:3.0:32131; narrower |
| recursive_input_rule | Purchased tissue parent reels for mere rewinding or retail conversion are outside this production PCR; internal broke/fibre returns remain physical loops, not upstream purchases |
| upstream_dataset_requirement | Compatible supplier pulp, chemicals, water, utilities, packaging and actual inbound transport datasets with geography, year, treatment and quantity definitions; unresolved links prevent complete cradle-to-gate claims |
| disclosure | Distinguish foreground gate-to-gate from linked cradle-to-gate; disclose drying/creping route, included gas boiler versus external steam, treatment and receiver, exclusions, stocks and residuals |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | tissue_mill | Include all actual stock preparation, forming/pressing/vacuum, Yankee/hood drying, blade creping, parent-reel winding/edge cutting, accepted-reel conditioning and protection, broke/white-water recovery and attributable utilities/treatment within the declared gate. Keep included combustion emissions. | jrc-pp-bref-2015 |
| boundary_conversion | tissue_mill | Stop at the accepted single-ply parent reel: downstream ply bonding, embossing, perforation, folding, log cutting and consumer packaging belong to separate conversion. An integrated plant must separate meters/records and link this upstream output once. | sofidel-parent-reels |
| boundary_water | tissue_mill | Internal white water, recovered fibres, broke and condensate returns are conserved links. Off-site untreated wastewater transfer and on-site treated direct discharge are alternative routes for the same water, not simultaneous burdens. | jrc-pp-bref-2015 |
| boundary_heat | tissue_mill | An included gas boiler records fuel and actual emissions; its steam is internal. External steam records the supplier input once and its generation burden upstream. Shared utilities need measured allocation; no duplicate fuel and purchased-steam production. | jrc-pp-bref-2015, epa-ap42-gas-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tissue_mill | Virgin-fibre creped tissue parent reels | required | Declared virgin-fibre conventional creped-parent-reel route | foreground production | 1 kg reference flow |

Physical stage map: market pulp receipt -> separate fibre stock preparation/refining -> mixing and wet forming -> press/vacuum -> Yankee/hood -> creping blade -> reeling/optional parent-reel rewind and dry edge cut -> accepted reel. White water/save-all fibre/wet and dry broke return to stock; purge goes to actual treatment or an external treatment receiver. Preserve separate stage mass, water, carbon, stock and meter records despite aggregation into one foreground unit. Internal sending and receiving links must have equal amounts, material state and period; physical product outputs are never scaled by environmental allocation shares. [jrc-pp-bref-2015]

### Process: Tissue parent-reel manufacture (`tissue_mill`)

#### Inputs

##### Product flows

###### Bleached hardwood kraft market pulp (`hardwood_pulp`)

Record the actual virgin hardwood kraft pulp grade and origin separately; accepted broad identity excludes dissolving and mechanical pulp. Use measured delivered pulp mass with same-lot dry solids and supplier mass convention; no standard air-dry assumption.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_furnish`
- Sources: `jrc-pp-bref-2015`

###### Bleached softwood kraft market pulp (`softwood_pulp`)

Record the actual virgin softwood kraft pulp separately with species, origin, bleaching route and measured wet/dry basis. The broad chemical-pulp identity does not establish a supplier background dataset or a fixed furnish ratio.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_furnish`
- Sources: `jrc-pp-bref-2015`

###### Purchased grid electricity (`electricity`)

Use the verified 1–35 kV grid-average customer interface only when the supply voltage and background loss boundary match; retain pulping, refining, vacuum, presses, fans, winder and treatment submeter readings. Do not apply this UUID to another voltage or dedicated generation route.

The source geography is CN. Actual regional mix, year and provider/loss boundary must match; another grid needs a separately verified identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
Reference unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-pp-bref-2015`

###### Pipeline natural gas for hood and included boiler (`natural_gas`)

Meter hood and on-site boiler separately then add their attributable gas once. Reference property is Volume/m3. Match supplier background m3 temperature, pressure, wet/dry composition and compressibility; secondary database mass coefficients are not density. Unmatched volume convention remains an incomplete link.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
Reference unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-gas-2026`, `jrc-pp-bref-2015`

###### External steam supplied to Yankee (`steam`)

Actual externally supplied industrial-boiler steam heat to the Yankee dryer. This physical record has no pressure constraint, but its Gross calorific value/MJ reference does not prove net delivered heat. Collect actual supply/return mass, absolute/gauge pressure, temperature, quality, enthalpy and interface losses; determine a documented provider conversion k_bg from net interface heat to the provider reference MJ. Unknown conversion leaves the dataset link unresolved. The source benchmark 1.15 MWh/t is not a consumption factor. Internal boiler steam remains an internal physical link; never add this purchased-heat background for the same onsite fuel/generation.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
Reference unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`.
- Amount rule: Q_bg / P, with Q_bg = k_bg * H_net under the documented provider convention; retain actual steam/condensate kg separately using cp_utilities and cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-pp-bref-2015`

###### Purchased treated process water (`process_water`)

Measure external make-up, chemical dilution and boiler make-up crossing the foreground boundary; do not count recirculated white water or returned condensate as fresh supply. Convert volume to the Mass/kg reference only with measured density and temperature. An own abstraction route requires its specific resource flow and treatment model.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`

###### Conditional permanent wet-strength resin (`wet_strength`)

Include only for an actual grade requiring this PAE chemistry, supported by supplier SDS and recipe. Measure as-supplied resin mass and solids/active fraction separately; record residual chlorinated species and AOX applicability. Do not apply an epoxy-resin UUID or assume all toilet grades contain wet-strength resin.

- Selected flow: Polyamidoamine-epichlorohydrin wet-strength resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: `solenis-pae-scope`

###### Conditional nonionic polyacrylamide retention aid (`retention_aid`)

Only when actual SDS confirms the nonionic polymer identity; record powder/polymer content versus carrier water, addition point and tank/invoice reconciliation. Cationic or anionic grades require their own matching identities; no fixed dosage is supplied.

- Selected flow: Polyacrylamide `f8ff6647-6bb3-4b72-9830-60a7a86203c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: `jrc-pp-bref-2015`

###### Conditional silicone defoamer (`defoamer`)

Only the actual primary-production PDMS polysiloxane polymer component, confirmed by supplier chemical specification, CAS, grade and viscosity, is represented. The broad silicone record explicitly includes polymerized siloxane fluids; no conflicting polymer identity is stated, but it supplies neither a PDMS-specific CAS nor a ready-to-use defoamer recipe. Match actual polymer mass and provider basis; retain separately measured carrier water and other formulation components without double counting a purchased complete formulation. Other silicone chemistry, recycled route or a whole mixed defoamer requires its own applicable identity/provider.

- Selected flow: Organic Silicone `4af74934-ef9f-40c1-9de6-e6223ca0b4fe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: `jrc-pp-bref-2015`

###### Conditional PVOH Yankee adhesive (`yankee_adhesive`)

Use this polymer row only for actual independently purchased PVOH added onsite, confirmed by supply/recipe records; measure supplied dry/wet reference quantity and retain solution water/additives analytically. Record actual onsite preparation water/utilities once. A bought PVOH Yankee adhesive premix instead requires one specific complete-formulation card and compatible provider covering supplier preparation/delivery before use; its polymer/water/additives are composition records, not separate purchases. Patent chemistry is a possible route, not a required blend, grade, concentration or dosage; do not substitute PVAc.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: `ep-creping-2019`

###### Conditional PAE Yankee coating (`yankee_pae`)

Measure this coating resin separately from wet-end wet-strength use; reconcile spray-boom delivery, stock change, carrier water and active solids. Apply only if actual supplier resin chemistry matches; an epoxy resin is not a substitute.

- Selected flow: Polyamidoamine-epichlorohydrin creping adhesive resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: `ep-creping-2019`

###### Conditional mineral-oil release component (`release_oil`)

Use this row only for the confirmed petroleum mineral oil actually purchased separately and added onsite to the release recipe; SDS must distinguish mineral oil from vegetable oil, wax and oil-free modifiers, and record actual grade. Separately bought emulsifier/carrier and onsite mixing/utilities are real additional exchanges. If a ready release formulation is purchased, require one specific complete-formulation input and compatible provider covering its preparation/delivery; included oil/emulsifier/carrier are analytical only. Source oil identity alone proves neither premix manufacture nor that the mill uses this chemistry.

- Selected flow: Mineral Oil `e4d87634-a041-48d6-b071-da57551c8ab5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: `jrc-pp-bref-2015`

###### Conditional parent-reel PE transport wrap (`pe_wrap`)

Weigh actual PE film issued to accepted parent reels, including attributable scrap. Exclude wrapper mass from tissue reference mass. Physical film identity is retained despite the source CPC29220 classification defect; supplier film composition and background route must be verified.

Verify actual film construction, polymer grade and additives; this row does not identify a laminated composite wrapper. If a composite is purchased as one physical exchange, identify its complete composition and provider instead of duplicating it with component inputs.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `sofidel-parent-reels`

###### Conditional paperboard parent-reel core (`reel_core`)

Record only actual paperboard cores, core reuse cycles, new cores and retired cores; weigh tare individually and exclude it from tissue output. Do not apply this paper-core identity to steel reel spools. Returned durable spools retain a separate reusable-service ledger.

Keep actual new, received, returned and discarded core/spool masses in the unallocated physical ledger. Reuse changes documented service burdens and replacement consumption only; it cannot reduce an actual returned or retired object mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `sofidel-parent-reels`

###### Conditional effluent-treatment PAC (`wwtp_pac`)

If on-site coagulation uses this actual PAC formulation, reconcile as-supplied mass, active solids, aluminium basis and carrier water; use the provider convention. This is not a default treatment recipe.

The adopted source explicitly describes a water-soluble solid; this row requires the actual solid PAC reagent and measured assay/hydration. A purchased liquid formulation must have its own matching complete-formulation identity and reference basis, replacing rather than duplicating this solid input.

- Selected flow: Polyaluminium Chloride `f1b285a5-2733-450c-af08-69e960b671ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: `jrc-pp-bref-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted creped tissue parent reel (`parent_reel`)

1 kg net tissue at measured factory-gate moisture, excluding core, spool and wrap. One final product output covers winding/conditioning/dispatch; stage quantities remain in the physical ledger. Broad stock identity is limited here to virgin-fibre CWP creped parent reels and establishes no absorption, sheet-count or retail-roll equivalence.

- Selected flow: Toilet or facial tissue stock, towel or napkin stock and similar paper, cellulose wadding and webs of cellulose fibres `3070a34a-8d40-426e-9299-7c367b0dca21`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `jrc-pp-bref-2015`, `sofidel-parent-reels`

##### Waste flows

###### External tissue trim and rejected broke (`broke_export`)

Weigh only tissue trim/rejected broke actually transferred outside the mill; disclose wet/dry state, additives and receiver. Internal wet/dry broke returned to the pulper is a loop, not a waste export or new virgin-pulp purchase. Broad waste-paper identity needs actual uncoated tissue state confirmation.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `jrc-pp-bref-2015`

###### Collected dry-cutting and creping dust leaving the mill (`collected_dust`)

Only actual separately captured tissue creping/cutting/winding dust leaving the mill is represented by the broad industrial-collector waste identity. Weigh physical wet/dry mass, fibre/coating/mineral composition, contamination, stock change and recipient route; no capture efficiency, occurrence or mass is assumed. Internal repulping is a physical return; captured waste and escaped particulate bins never overlap.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `jrc-pp-bref-2015`

###### Dewatered paper-production treatment sludge (`wwtp_sludge`)

Record actual primary/biological sludge exported, wet mass and dry solids, composition, treatment and receiver. Keep retained fibre separate from product sale and internal save-all return; no universal solids fraction.

One row represents one actual physically combined exported sludge stream. If primary and biological sludge leave separately, create separate atomic rows with their own masses/compositions/recipients even when sharing this broad UUID; do not collapse independently handled streams into a collection label.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `jrc-pp-bref-2015`

###### Alternative off-site wastewater treatment transfer (`wastewater_export`)

Actual whole untreated tissue-papermaking wastewater transferred to an external treatment provider. The broad industrial-liquid-waste identity does not prescribe composition, legal hazardous classification or treatment. Measure transferred wet mass directly, or M = V*rho_eff(T) using actual mixed-stream density and temperature; determine solids/water fraction and receiver compatibility, with no density1000 assumption. Keep whole-stream volume for concentration-load calculations. Its water component belongs to the transfer water balance, not a simultaneous direct freshwater emission; downstream treatment releases are counted through the provider once.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pp-bref-2015`

##### Elementary flows

###### Fossil combustion carbon dioxide (`co2_fossil`)

Actual included gas boiler/hood stack release to non-urban air or high stacks; verify stack setting. Use measured fuel carbon and oxidation or source tests; fossil gas carbon is separate from fibre carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-9c13-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### Biogenic carbon dioxide from fibre losses/treatment (`co2_biogenic`)

Actual release to outdoor air, unspecified submedium, from included treatment or fibre oxidation. Retain in LCI even if an LCIA GHG reporting convention excludes it; never infer emission from all input fibre carbon.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon`
- Sources: `jrc-pp-bref-2015`

###### Fossil carbon monoxide (`co`)

Actual included combustion release to outdoor air, unspecified submedium; collect species mass, oxygen correction, wet/dry gas basis and matched exhaust flow.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### Combustion nitrogen oxides excluding N2O (`nox`)

Outdoor air, unspecified submedium. Mass/kg alone does not establish NO2-equivalent basis: reconcile monitoring NO/NO2 reporting, reference flow and selected LCIA convention before use. Missing quantity convention is pending; exclude N2O and do not add separate NO/NO2 to the same total.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### Nitrous oxide from included combustion/treatment (`n2o`)

Actual release to outdoor air, unspecified submedium; measure N2O species mass separately from NOx and N as elemental nitrogen. Separate stack and treatment origins in raw records.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`, `jrc-pp-bref-2015`

###### Fossil methane from gas supply/combustion within the mill (`methane`)

Actual fugitive/unburned methane to outdoor air, unspecified submedium; supplier methane composition and site testing are required. Do not include upstream background leakage a second time.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### Conditional biogenic treatment methane (`methane_biogenic`)

Actual methane to outdoor air, unspecified submedium, only when included treatment generates/releases it. Capture, oxidation and exported gas are reconciled separately; aerobic treatment does not imply a default methane factor.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon`
- Sources: `jrc-pp-bref-2015`

###### Combustion sulfur dioxide (`so2`)

Actual SO2 species mass to outdoor air, unspecified submedium, based on measured gas sulfur and source tests; sulfur oxides is not a substitute species.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### Conditional ethane release (`voc_ethane`)

Actual ethane species in leaked/unburned pipeline gas to outdoor air, unspecified submedium, only if supplier gas analysis and site evidence confirm it. Speciate every other relevant actual VOC in separate rows; no assumed ethane fraction or NMVOC default.

- Selected flow: ethane `4d9a8790-3ddd-11dd-9219-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### Emitted particulate matter at or below 2.5 micrometres (`pm_fine`)

Outdoor air, unspecified submedium; collect escaped creping/winding/dry-cutting and included combustion particles after capture. Use the non-overlapping fine fraction, not total dust plus nested PM10.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `jrc-pp-bref-2015`, `epa-ap42-gas-2026`

###### Emitted particulate matter above 2.5 through 10 micrometres (`pm_coarse`)

Outdoor air, unspecified submedium; the 2.5–10 fraction is measured separately or derived as matched PM10 minus PM2.5 on identical sampling/control bases. Retain uncertainty and reject negative/incompatible differences.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `jrc-pp-bref-2015`

###### Emitted particulate matter above 10 micrometres (`pm_large`)

Outdoor air, unspecified submedium; include actual escaped coarse cutting/creping dust. Measure directly or derive from matched total particulate minus PM10 with a justified upper-size/sampling definition. Captured/recycled dust is excluded from air release.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: `jrc-pp-bref-2015`

###### Evaporated water released to air (`water_vapour`)

Outdoor air, unspecified submedium; reconcile drying, gas-combustion water and treatment/cooling evaporation with actual water balance and measured humidity. Do not use a liquid freshwater discharge identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`

###### Liquid treated water discharged to fresh water (`effluent_water`)

Only actual direct liquid discharge to freshwater, not withdrawal or purchased water; Volume/m3 is the reference. Identify receiver, return-water status and receiving-water compartment.

The exchange is the actual liquid water component, not pure-water treatment of the whole mixed effluent. Record outlet temperature, mixed-effluent density and water mass fraction: M_water = V_eff*rho_eff(T)*f_water; V_water = M_water/rho_water(T). Use documented actual densities, never a default1000. Whole-effluent volume remains separately available for pollutant loads; solids and indicators are not extra carrier water.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
Reference unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `eu-paper-bat-2014`

###### Freshwater chemical oxygen demand (`cod`)

Actual treated effluent to fresh water; quantity is kg oxygen equivalent, not organic carbon. Retain COD and BOD as distinct test indicators without adding them as masses of separate chemical pollutants; speciate known relevant substances to avoid hiding toxic emissions. Tiangong provides no Chinese baseName for this freshwater record; retain its canonical display with an explicit localization gap.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `eu-paper-bat-2014`

###### Freshwater biological oxygen demand (`bod`)

Actual treated effluent to fresh water; specify BOD5/BOD7 and laboratory method, kg oxygen equivalent, and receiver. Do not treat the sum indicator as one chemical species or add it to COD for a mass balance.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `eu-paper-bat-2014`

###### Freshwater total nitrogen excluding molecular nitrogen (`tn`)

Actual treated effluent to fresh water; kg N excluding N2, with method and inorganic/organic species reconciliation. Do not add the same ammonium/nitrate species burden to an already characterised total without a documented LCIA treatment.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `eu-paper-bat-2014`

###### Freshwater total phosphorus (`tp`)

Actual treated effluent to fresh water; kg P, not kg phosphate. Reconcile individual phosphorus species and avoid duplicate total/species characterisation.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `eu-paper-bat-2014`

###### Conditional freshwater adsorbable organic halogens (`aox`)

Actual treated freshwater discharge when chlorinated wet-strength/coating impurities or actual chemistry makes AOX relevant; quantity is kg Cl equivalent under the matching analytical convention. Speciate relevant organochlorines separately with total reconciliation.

- Selected flow: adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `eu-paper-bat-2014`, `solenis-pae-scope`

###### Freshwater suspended-solid discharge (`tss`)

Measure actual treated freshwater particulate solids; preserve filtration method, dry residue basis and receiver. An unspecified-water UUID cannot stand in for the known freshwater submedium; keep identity open. Do not add the same solid species to an already characterised aggregate.

- Selected flow: Total suspended solids discharged to fresh water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net tissue output P; cp_mass and the linked row protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `eu-paper-bat-2014`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | tissue_mill | Use product/line/campaign submetering to avoid allocation first. Where inseparable shared utilities/treatment remain, demonstrate a causal physical relation using measured electricity, steam enthalpy or pollutant loads; mass is justified only for compatible grades. If physical attribution cannot be supported, document an independently reviewed alternative and sensitivity rather than inventing a fixed share. | eu-pef-multifunctionality-2021 |
| allocation_physical | all inventory rows | Retain unallocated material/water/carbon balances and actual co-product/waste quantities separately from the allocated environmental-burden ledger. Internal broke recycling creates no co-product credit; external recovered-paper/sludge treatment and substitution require receiver and selected end-of-life method, never an automatic avoided-product credit. | jrc-pp-bref-2015, eu-pef-multifunctionality-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | tissue_mill | reference output | weighing and laboratory | reel/campaign/grade ID; gross mass; core/spool/wrap tare; accepted net tissue mass; gate moisture and sample/test SOP; quality acceptance; opening/closing accepted stock | Calibrated reel weighing with measured tare; matched gate sample and validated moisture/dry-matter method, test volatile-loss applicability; reconcile produced, accepted, dispatched and stock | kg; mass fraction | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_furnish | tissue_mill | pulp input | lot receipts and stock records | hardwood/softwood species; origin; supplier/grade; kraft/bleach route; delivered wet mass; actual dry solids; supplier mass definition; stock changes | Separate calibrated lot weighing/dry-matter tests and audited issue/stock balance for each pulp; no inference from forest certification alone | kg; mass fraction | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_utilities | tissue_mill | electricity/gas/steam | stage submeter and supplier records | stage/source meters; electricity voltage and kWh; gas m3 T/P wet/dry/Z composition; steam supply/return kg, pressure absolute/gauge, temperature, dryness, enthalpy; provider convention; boiler/hood operating/control history | Time-matched calibrated meters and supplier definitions; separate own boiler versus bought steam; retain pressure/enthalpy evidence and reject unsupported quantity links | kWh; MJ; m3; kg | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_water | tissue_mill | water supply/evaporation | water meters and stage balance | make-up kg/m3; density/temperature; white-water circuits; condensate; paper/pulp/chemical water; treatment discharge; humidity; stock water changes | Calibrated external and internal meters with matched material-water balances; circulation separately from net exchange; quantify evaporation with uncertainty | kg; m3 | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_chemicals | tissue_mill | each actual chemical | recipe and supply balance | specific component, CAS, supplier/SDS and grade; wet-end/coating/treatment location; as-supplied mass; active/dry solids; carrier water; issue, return and stock | Calibrated dosing-tank mass balances and invoice/inventory reconciliation. Record each actual complete purchased chemical/formulation once in compatible supplier quantity and preparation/delivery boundary; keep included polymer/oil/carrier/additives as analytical balances only. Independently bought onsite ingredients/adjustments and actual mixing water/utilities are separate exchanges. Add audited rows for actual additional supplies, not merely supplier-listed constituents. | kg; mass fraction | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_packaging | tissue_mill | film/core | weighing and use records | PE composition; film/core tare and issues; loss; core reuse; durable spool returns; supplier route | Measured component weighing and campaign stock/use balance; physical returns/discards remain complete; only service burdens and replacement use are apportioned over documented actual uses; exclude all tare from P | kg; count | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_residues | tissue_mill | each waste export | scale and receiver records | individual waste mass; moisture/solids; composition/contamination; receiver; treatment; internal return; collector stock | Calibrated weighing of actual external loads with representative solids tests and receiver manifests; record captured versus emitted dust separately | kg; mass fraction | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_air | tissue_mill | each atmospheric species | source test and operating history | species/CAS; fossil/biogenic; source/stack; flow, concentration, time; oxygen correction; dry/wet gas T/P; method/detection/uncertainty; controls; gas composition; NOx convention | Use actual matched source-test or continuous records and operating periods; fuel-carbon/sulfur calculation needs measured composition and residual reconciliation. Missing measurement is pending, not zero; AP42 boiler factors need separate applicability if later used | kg; concentration; flow | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_dust | tissue_mill | three particulate intervals | stack/fugitive size measurement | cutting/creping/winding source; sampler size definition; total/PM10/PM2.5; control efficiency; captured collector mass; wet/dry basis; period and uncertainty | Measure actual outlet and relevant fugitive escaped dust with compatible size-resolved sampling; matched differences only; plant cutting/rewinding dust has no boiler or sawmill default factor | kg; particle size | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_effluent | tissue_mill | each water-discharge indicator | flow and laboratory sampling | receiver/route; measured whole-effluent m3; actual temperature, density and water fraction; time-matched concentration mg/L; COD/BOD test; TN/N2 exclusion; TP elemental basis; TSS filtration; AOX chlorine-equivalent basis; actual toxic species; raw versus treated points | Flow-weighted representative treated-outlet sampling and accredited methods; COD/TSS daily, BOD and N/P weekly as BAT reference with relevant footnotes/site conditions; AOX and relevant metals/chelants assessed by actual chemistry. Include bypass/upset intervals; no concentration-limit-to-emission shortcut | m3; mg/L; kg | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |
| cp_carbon | tissue_mill | biogenic carbon fate | carbon balance and treatment evidence | measured fibre/chemical carbon; product carbon; exports; stocks; treatment carbon gases; captured gas oxidation; fossil segregation | Retain physical carbon inputs/outputs and stock changes; quantify measured/model-supported biogenic CO2/CH4 pathways separately, disclose residual; do not infer carbon from COD without supported conversion | kg C; kg species | Each lot and stage interval; emissions per monitoring plan | Full declared campaign including starts, breaks, grade changes and stock changes | Declared mill/line and attributable shared units | per 1 kg reference flow | Calibration, laboratory SOP, supplier definitions and complete raw records |

Conditional rows require proven actual use or documented absence; missing quantities are pending. Extend the inventory for each actual chemical, carrier, packaging waste, treatment nutrient or emitted species absent here. A missing identity is not a licence to bundle flows or substitute a neighbouring product. No empirical/default ranges are provided; compatible foreground collection supplies values. [jrc-pp-bref-2015]

Also screen actual forming fabrics, press felts, creping blades, hydraulic/lubricant replacements and cleaning agents by item and material. Add each actual replenishment and separately handled spent stream as an atomic exchange with its own identity, stock/service-life evidence, physical discarded mass and receiver. Do not assume a consumable recipe, zero wear or a universal service life; actual replacements and burdens cannot be inferred from installed equipment mass.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_mass | parent_reel | P = sum(gross accepted reel mass - measured core/spool tare - measured wrap tare); reconcile production, delivery and stock; no rejected or returned internal broke in P. | cp_mass | P | iso-solid-dry-matter-scope-2022 |
| same_reference_normalization | all inventory rows | x = X / P, where X is the actual attributable campaign exchange in its row unit and P is accepted net tissue kg at measured gate moisture; retain raw physical ledger and allocated burden ledger separately. | cp_mass; each linked row protocol | x | jrc-pp-bref-2015 |
| dry_conversion | mass-based pulp, tissue, chemical/formulation and residue moisture-component ledgers | d = m*(1-w); D = sum(d for accepted tissue); dry-output intensity I_d becomes delivered-output intensity I_d*D/P. Measured total dry solids is not automatically pure cellulose mass. Auxiliary component mass/moisture does not replace native gas Volume/m3, steam GCV/MJ or electricity NCV/MJ references. | cp_mass; cp_furnish; cp_chemicals; cp_residues | measured dry/wet basis | iso-solid-dry-matter-scope-2022 |
| electricity_conversion | electricity | MJ = 3.6 * kWh; x = MJ/P. | cp_utilities; cp_mass | MJ/kg | jrc-pp-bref-2015 |
| steam_reconciliation | steam | H_net = sum(m_supply*h_supply - m_return*h_return) at the declared interface; match enthalpy datum, state, storage and actual boundary losses once. Q_bg = k_bg*H_net under the verified provider MJ definition; x = Q_bg/P. Never subtract already included losses twice or set k_bg=1 by assumption. Preserve physical steam/condensate kg separately. | cp_utilities; cp_mass | provider-reference MJ/kg tissue and separate physical heat/mass reconciliation | jrc-pp-bref-2015 |
| water_pollutant_load | cod, bod, tn, tp, tss, aox | L = sum(c_k * V_k * 0.001), with c_k in mg/L and matched discharge V_k in m3; x = L/P. COD/BOD as O2, N as N, P as P, AOX as Cl; keep indicators out of physical mass sums. | cp_effluent; cp_mass | kg indicator/kg | eu-paper-bat-2014 |
| particle_partition | pm_fine, pm_coarse, pm_large | Fine = measured PM2.5; coarse = matched PM10 - PM2.5; large = matched total - PM10 only with identical sampling definitions; x = fraction/P. Do not add total or PM10 to the three fractions; unknown partition remains pending. | cp_dust; cp_mass | kg fraction/kg | jrc-pp-bref-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Inspect complete name, CAS, classification, route, comment, reference property/unit and exact species/medium. Verify supplier quantity compatibility separately from identity; disclose metadata conflicts. | supplier/SDS; verified identities |
| balances | tissue_mill | Close wet mass, dry solids, water and carbon physically with stocks and uncertainty; retain internal-link equality and dust capture/export/air partition. Environmental attribution cannot repair a physical imbalance. | stage ledger and laboratory |
| route_scope | tissue_mill | No inherited wood-processing data or historic single-mill recipe becomes a tissue default. This route requires verified actual drying, creping, furnish, chemistry and gate moisture. | BREF and actual collection |
| coverage | tissue_mill | Full campaign includes start-ups, downtime, breaks, cleaning, rejected reels, relevant waste/air/water pathways and background transport links; reveal unsupported methods and unresolved values without setting them to zero. | complete campaign records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | parent_reel | Require exactly one accepted final product output linked by parent_reel and reference UUID, at 1 kg net tissue; EN/ZH amount, denominator, aggregation and formulas agree. Do not introduce a second reference output for winding-to-wrapping transfer. | jrc-pp-bref-2015 |
| validate_applicability | tissue_mill | Confirm virgin purchased bleached kraft pulp, CWP press/Yankee/hood/blade-creping route and single-ply parent-reel state; reject retail converted products, airlaid/nonwoven, TAD/hybrid and recovered-fibre/integrated-pulping claims under this PCR. | jrc-pp-bref-2015, sofidel-parent-reels |
| validate_inventory | all inventory rows | Require each exchange to be atomic with matching actual substance, medium/submedium, origin, property/unit and supplier quantity convention. Missing identity, steam pressure/enthalpy, gas m3 definition or NOx basis remains unresolved; do not advertise a complete dataset. | jrc-pp-bref-2015 |
| validate_conservation | tissue_mill | Reconcile physical mass/water/carbon and equal internal links before environmental allocation. Capture/return/export/emission dust quantities do not overlap; three airborne size fractions do not include nested totals. Preserve actual biogenic CO2 and distinct fossil/biogenic methane. | jrc-pp-bref-2015, eu-pef-multifunctionality-2021 |
| validate_discharge | tissue_mill | Require actual receiving medium and treatment boundary; direct freshwater discharge and off-site wastewater transfer cannot duplicate the same load. Known toxic organochlorine/metals and other actual emissions require individual species rows and reconciliation with COD/BOD/TN/TP/AOX indicators. Missing measurements are not non-detects or zero emissions. | eu-paper-bat-2014 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Reviewed supplier/line-specific upstream inventory of creped parent reels for a converter, with actual quality/state and compatible reference quantity |
| excluded_use | Complete CPC32131 coverage; consumer roll/sheet functional comparison; paper-wadding/nonwoven or TAD/hybrid/recycled routes; scientific/publication approval or full cradle-to-gate claim from UUID identity alone |
| required_metadata | Site/year/campaign; fibre origin and grade; machine/press/dryer/creping/rewind state; recipe and supply conventions; gate moisture/net mass and quality; upstream links; treatment/receiver; allocation/balance ledgers |
| required_quality_disclosure | Actual monitoring coverage, unresolved identities/bases/providers, measured uncertainty, sample/SOP limitations, source metadata defects and exclusions; no generic numerical defaults |
| update_trigger | Change of fibre/chemistry/drying/creping or delivery state, utility provider/basis, wastewater route, dust controls or acceptance quality; new evidence resolving gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015); https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Sections 7.1.1–7.1.4, 7.1.10, 7.1.11.3; printed pp. 660, 664–665, 670, 672–674. Technical routes, broke/white-water recovery and cutting dust; EU context, not universal amounts; conventional virgin-pulp branch selected. |
| sofidel-parent-reels | handbook | Sofidel, Parent Reels and Production Cycle; https://www.sofidel.com/en/business-lines/parent-reels/ | Parent Reels and Production Cycle steps 1–4 and 7: producer evidence for pulp preparation, parent-reel acceptance and separate downstream conversion. Producer example only, no fixed furnish, moisture or energy value; cycle URL https://www.sofidel.com/en/about-us/production-cycle/. |
| solenis-pae-scope | handbook | Solenis, Kymene Wet Strength Additives; https://www.solenis.com/en/the-solenis-way/innovation-solenis/our-product-innovations/kymene-wet-strength-additives/ | Technology Overview: PAE for tissue/towel wet strength and chlorinated by-products. Supplier scope, not dosage, solids content or universal additive requirement. |
| ep-creping-2019 | literature | EP 2661285 B1, Creping adhesive compositions and methods of using those compositions; granted 27 March 2019; https://patentimages.storage.googleapis.com/98/9c/f7/a97cf4334331c9/EP2661285B1.pdf | PDF p.2, paragraphs 0001–0004: PAE/PVOH coating chemistry and Yankee creping mechanism; patent route example only, no trial formulation/quantity adopted. |
| iso-solid-dry-matter-scope-2022 | standard | ISO 638-1:2022, official solid-material dry-matter scope and notes; https://committee.iso.org/standard/83614.html?browse=ics | Official abstract only: solid pulp/paper samples, non-water volatile-loss restriction; total dry matter includes dissolved solids. Not slush pulp or saleable lot mass. Full sampling/test compliance requires actual validated SOP; no claimed access to full standard. |
| epa-ap42-gas-2026 | official_guidance | US EPA AP-42 Section 1.4 Natural Gas Combustion, corrected October 2026; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Sections 1.4.1–1.4.3 and disclaimer, pp.1.4-1–1.4-3: combustion sources/species and preference for source testing. Boiler source does not establish paper-cutting dust or a hood-specific factor; no published factor used as a default. |
| eu-paper-bat-2014 | official_guidance | Commission Implementing Decision 2014/687/EU; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014D0687 | BAT 10 monitoring table and applicability footnotes: water COD/BOD/TSS/N/P, conditional AOX, chelants/metals. Official web scope/table excerpt only. Monitoring context only; no regulatory limit or BAT-AEL becomes a universal inventory quantity. |
| eu-pef-multifunctionality-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | PDF p.63: subdivision/system expansion and justified underlying physical allocation hierarchy; general method only, no fixed tissue share or complete PEF-conformance claim. |
