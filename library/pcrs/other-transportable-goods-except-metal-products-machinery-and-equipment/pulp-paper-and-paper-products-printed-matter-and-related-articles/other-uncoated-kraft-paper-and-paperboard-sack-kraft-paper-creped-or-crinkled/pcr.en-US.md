---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-uncoated-kraft-paper-and-paperboard-sack-kraft-paper-creped-or-crinkled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unbleached extensible sack kraft paper from purchased softwood kraft pulp

## 1. Scope and Applicability

This method covers non-integrated manufacture of uncoated, unsized, non-wet-strength, virgin unbleached softwood kraft sack paper, mechanically compacted in a Clupak rubber-blanket unit within the drying section and delivered as accepted reels before sack conversion. The declared route purchases non-dissolving pulp, grid electricity, supplied water and drying steam; it has primary and aerobic effluent treatment with final fresh-water discharge, without foreground combustion or intentional anaerobic treatment. It is a modelling restriction, not a statement that the cited producers all use purchased pulp. Sources: `jrc-paper-bref-2015`, `billerud-sack-handbook-2025`, `lahti-clupak-2015`.

Sack-paper performance requires declared MD/CD stretch, tensile strength and tensile energy absorption (TEA), air resistance/permeance, grammage and delivery moisture. Clupak mechanically compresses the moist web in MD; its structure differs from flat kraft paper. Distinguish this microcompaction from conspicuous doctor-blade creping, and record actual CD shrinkage/refining rather than assuming a Clupak setting proves all properties. Porosity is measured independently; it is not inferred from extensibility. Neither wet strength nor sizing is a consequence of the word “kraft”. No universal furnish ratio, additive dose, operating setpoint, quality threshold or emission factor is supplied.

Exclude kraftliner for corrugated-board faces, fluting for the corrugated middle layer, recovered-fibre furnish, hardwood/bamboo/nonwood or semi-chemical pulp, bleached grades, intentionally sized or wet-strength grades, pigment/functional coatings, laminate barriers, macro-creped papers, finished sacks and their printing, filling, use or end of life. A different route needs applicable evidence and separate review, not reuse of a classification label. The method covers a subset of CPC 3.0 32133; it does not cover every “other uncoated kraft” product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.other-uncoated-kraft-paper-and-paperboard-sack-kraft-paper-creped-or-crinkled |
| classification_refs | CPC 3.0 32133; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Virgin unbleached softwood Clupak extensible sack kraft paper; unsized, non-wet-strength, uncoated |
| excluded_products | Kraftliner; fluting; finished sacks; recovered-fibre/bleached/sized/wet-strength/coated/macro-creped variants and other routes in section 1 |
| representative_product | Unprinted brown extensible paper reel for industrial multiwall sack conversion |
| production_route | Purchased softwood kraft pulp → repulp/refine → form/press → partly dry/Clupak compact/final dry → rewind/trim/wrap; primary/aerobic water treatment |
| market_state | Accepted reels at mill gate; net as-delivered paper mass, core and wrap separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Paper substrate for conversion into industrial sacks requiring declared stretch, TEA and air resistance |
| How much | 1 kg net accepted as-delivered paper |
| How well | Conforms to the declared purchaser grade; record MD/CD tensile strength, stretch and TEA, grammage, moisture and air resistance with methods/conditioning; no universal grade limit |
| How long or cycle | One manufacture-to-mill-gate delivery cycle; no sack lifetime or filling capacity asserted |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Non-dissolving virgin softwood kraft pulp and supplier species mix; unbleached; purchased-pulp boundary; Clupak compaction and drying route; no intentional sizing; no wet-strength agent; no coating; actual MD/CD acceptance and test methods; grammage, delivery wet-basis moisture and net paper mass; core/wrap tare; site/year; utility interface and supplier bases; primary/aerobic treatment and receiving fresh water |

Declare these qualifiers in the data package. The broad uncoated packaging-paper physical identity includes this restricted subset without a contrary manufacturing route, but does not establish the supplier/background quantity basis. A kilogram declared unit is not proof of equivalent sack service; sack-design comparisons require a separate functional equivalence assessment.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished | Mass | kg | Use cp_production to measure net accepted as-delivered paper, excluding cores/wraps and internal broke. Measure wet-basis moisture; oven-dry and air-dry pulp bases are not the delivery basis. |
| material_quantity | pulp; cpam; pdms; naoh | Mass | kg | Preserve supplied and dry/active masses, product composition and the supplier reference basis. Resolve the conversion from measurements, never from a database recipe. |
| utility_quantity | electricity; steam; condensate | Supplier reference property | MJ; kg | Electricity uses the verified Net calorific value property: kWh × 3.6 = MJ. Keep gross steam and external condensate mass/state in the physical ledger; selected steam heat uses native GCV/MJ only after actual net enthalpy and supplier delivery/return reference quantity match, without automatic calorific conversion. |
| liquid_quantity | water; water_return | Volume | m3 | Keep new supplied water and liquid-water emission separate. Use measured density for physical mass balances; no generic mass/volume coefficient or recirculation quantity becomes new supply. |
| elementary_quantity | cod; bod; tss; nitrogen; phosphorus; water_air; co2_bio; co2_fossil; methane_bio; n2o; pm25; pm2510; pm10plus | Mass | kg | Match chemical species/indicator, carbon origin, receiving medium and quantity definition. COD/BOD use kg O2 demand, N uses kg N, P uses kg P, gases use species mass. The three particle bins are disjoint. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered purchased unbleached non-dissolving softwood kraft pulp and individual supplies |
| starting_condition_role | Foreground gate; not permission to omit upstream pulping |
| product_classification_scope | Restricted sack-paper subset of CPC 3.0 32133 |
| recursive_input_rule | Internal paper/broke/white-water/condensate links retain the same amount on both ends, never a new net input or avoided-product credit. Purchased same-category paper requires explicit upstream coverage and separate applicability; it is outside this pulp-to-paper route. |
| upstream_dataset_requirement | Link supplier-compatible pulp production including kraft recovery, utility generation/delivery, chemicals, core/film and replacement blanket; include inbound transport once in delivered datasets or separately. Link off-site waste/recovery receivers without unproven credits. |
| disclosure | Declare gate, upstream coverage, utility pressure/voltage, water/effluent route, exclusions, infrastructure treatment and unresolved links. Excluded foreground pulping/combustion remains upstream, not zero. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_complete | Include stock preparation/refining, forming/pressing, partial drying, Clupak compaction/final drying, trim/wind/wrap, measured utility losses, white-water/broke recovery, dust collection and primary/aerobic treatment. Record stage meters in a single foreground unit to avoid duplicate reference outputs. | jrc-paper-bref-2015; lahti-clupak-2015 |
| boundary_route | No in-place extension to integrated pulping, recovery boilers, lime kilns, other fuels, anaerobic wastewater reactors or sludge incineration. Establish their own complete process/emission evidence before adapting the boundary. | jrc-paper-bref-2015 |
| boundary_losses | Capture startup, grade-change, rejected lots, cleaning, bypass and abnormal release periods in the campaign. Missing measurements are gaps, not zero. Add every identified additional input, waste and pollutant as a distinct physical flow with applicable evidence. | jrc-paper-bref-2015 |
| procurement_preparations | Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sack_paper | Purchased-pulp Clupak sack-paper manufacture, finishing and treatment | required | Selected route in section 1 | Aggregated foreground with independently metered stages | 1 kg net accepted as-delivered paper |

Physical route: received pulp → repulping/screening/refining → headbox/forming → pressing → partial drying → Clupak compaction → final drying → trim/rewind/wrap → accepted reels. White-water/save-all fibre and wet/dry broke loop back to stock preparation; excess water → primary separation → aerobic treatment → final fresh-water effluent. Dry dust → actual capture/reuse/receiver or outdoor release. Steam → heat-transfer stages → internal recovery or external condensate return. Keep the physical mass/water/carbon diagram with equal internal links separately from the allocated environmental-burden ledger. Sources: `jrc-paper-bref-2015`, `lahti-clupak-2015`.

### Process: Clupak sack-paper manufacture (`sack_paper`)

#### Inputs

##### Product flows

###### Purchased unbleached softwood kraft pulp (`pulp`)

Use only non-dissolving virgin softwood kraft pulp. Declare species mix, unbleached state, delivery solids and supplier process. The broad identity also contains other chemical pulp grades; it does not prescribe a blend, moisture or pulp yield.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_inputs and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `jrc-paper-bref-2015`, `billerud-sack-handbook-2025`

###### Purchased medium-voltage electricity (`electricity`)

The UUID represents user-side 1–35 kV grid-average supply. Include separately metered repulping, refining, pumps, pressing, Clupak drives, winding, dust collection and aerobic treatment without double counting the site bill. Raw geography is CN; actual supplier region/year, user gate/losses and native MJ correspondence require separate compatibility proof; physical AC identity is not a global background.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value (`93a60a56-a3c8-11da-a746-0800200c9a66`); unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual attributable records using cp_utilities and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-paper-bref-2015`

###### Purchased drying steam at mill supply header (`steam`)

One actual purchased industrial-boiler steam-heat supply for drying. Official Heat from steam has no pressure descriptor and native Gross calorific value/MJ; its paper-dryer benchmark is not an amount/default. Preserve measured gross supplied steam mass, external return mass, pressure convention, temperature, dryness and common-reference enthalpy in the physical ledger. Derive delivery/return net heat with only losses outside the meter, then establish the supplier-documented correspondence to native GCV/MJ, including boiler route/gate/region/year. GCV is not automatically net enthalpy, fuel input or a mass conversion. Missing correspondence remains a dataset gap; do not prescribe 0.45/11MPaG or the source-specific recovered-fluting steam route, and do not invent foreground combustion.
- Selected flow: Purchased industrial-boiler steam heat `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use cp_utilities measured supply/return mass and state/enthalpy balance with documented supplier correspondence to native GCV/MJ; divide that compatible energy by same-period net accepted paper mass P once. Unknown correspondence remains pending.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `jrc-paper-bref-2015`

###### Purchased tap water (`water`)

Meter new supplied water for stock preparation, showers, Clupak lubrication and cleaning. Internal white water and recovered condensate are recirculation, not new supply. If the mill abstracts raw water, this supplied-water route is inapplicable and resource flows require separate review.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable records using cp_utilities and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-paper-bref-2015`

###### Conditional cationic polyacrylamide retention aid (`cpam`)

Include only if the recipe/SDS identifies this polymer. Record complete supplied formulation/carrier/additives, product form, charge/grade, active solids and supplier-native supplied versus active mass; choose a consistent whole-product or constituents scheme without duplicate carrier/components. It is not a wet-strength resin and its UUID does not establish a dose. Other polymers need separate atomic rows. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_inputs and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `jrc-paper-bref-2015`

###### Conditional polydimethylsiloxane antifoam (`pdms`)

Conditional on one actual supplier-confirmed primary polydimethylsiloxane polymer used as antifoam. Official Organic Silicone explicitly covers polymerized polysiloxane fluids/resins/elastomers without a contrary route; it does not establish PDMS CAS, molecular grade, viscosity or a finished antifoam formulation. Obtain actual supplier/SDS polymer identity/CAS, grade/form, primary route, active fraction, complete carrier/emulsifier/additive composition and native polymer-versus-supplied reference quantity/gate/region/year. Apply this locator to the actual PDMS polymer amount only unless supplier confirms the whole supplied reference formulation; count other real components and water once under a consistent whole-product or constituent scheme. Silicon dioxide, elemental silicon or unknown silicone blends are not PDMS; no use/dose is inferred from literature. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors.
- Selected flow: Primary PDMS polymer for antifoam `4af74934-ef9f-40c1-9de6-e6223ca0b4fe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_inputs and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `jrc-paper-bref-2015`

###### Conditional sodium hydroxide for cleaning or pH control (`naoh`)

Separate cleaning/pH adjustment from upstream kraft cooking. Record concentration, supplied mass and active content; adopt only a supplier-compatible quantity basis and keep dilution water accounted once. The raw name specifies industrial solid purity95–98%; use only compatible supplied solid and measured assay, not an unknown dilute delivered solution. Dissolution/dilution water is measured once; other supplied forms need a separate compatible flow. Source purity is an applicability restriction, not a plant recipe.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_inputs and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `jrc-paper-bref-2015`

###### Paperboard reel core (`core`)

Count net mass of actual paperboard cores delivered with the reels, excluding it from paper output. Record construction, reused versus new cores, receiver and upstream supplier.

- Selected flow: Paperboard reel core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_inputs and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `billerud-sack-handbook-2025`

###### LDPE reel wrapping film (`film`)

Use only the selected low-density polyethylene film, not resin granules or mixed laminate. Count film separately from core and paper; record actual wrap specification and supplier, without importing an assumed package weight.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_inputs and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `billerud-sack-handbook-2025`

###### Replacement Clupak rubber blanket (`blanket`)

Record the finished rubber blanket as one purchased article, with material construction, service period and measured mass. Attribute replacement to actual service production; do not assume rubber species or lifetime. Record other material consumables separately if present.

- Selected flow: Replacement Clupak rubber blanket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_inputs and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inputs`
- Sources: `lahti-clupak-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted extensible sack kraft paper in reels (`finished`)

The broad uncoated packaging-paper identity is restricted here to virgin unbleached softwood, unsized, non-wet-strength, uncoated Clupak paper. Net paper excludes cores and wraps; deliver before sack conversion. The reference identity is not a universal background dataset.

- Selected flow: Accepted unbleached unsized Clupak sack kraft paper reel `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_production`
- Sources: `billerud-sack-handbook-2025`, `lahti-clupak-2015`

###### Liquid steam condensate returned to supplier (`condensate`)

Record actual external return mass and enthalpy state; it is not emitted liquid water and not milk condensate. Internal condensate reuse stays inside the physical diagram. Verify supplier treatment of returns before calculating heat or any credit.

- Selected flow: Liquid steam condensate returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_utilities and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-paper-bref-2015`

###### Off-site recovered unbleached kraft broke (`broke`)

This record is a Product flow for recovered kraft waste/scrap. Use only separately weighed dry kraft trim/broke leaving for recovery with contamination and receiver declared. Internal wet/dry broke is linked equally on both ends and produces no external output, credit or new pulp input.

- Selected flow: Externally dispatched recovered unbleached kraft-paper broke `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_waste and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`, `eu-pef-2021`

##### Waste flows

###### Wet fibre-screening rejects from purchased kraft pulp (`rejects`)

One actual separately discarded wet fibre-screening/cleaning reject from purchased unbleached softwood kraft pulp. Official Waste solid explicitly includes discarded industrial materials and treatment solids, with no prescribed treatment; its broad family conditionally locates this specific stream, not a mixed municipal/default waste or deinking sludge. Weigh wet mass/stock changes and assay water, fibre, foreign/inorganic solids, chemicals/hazard; verify the actual lawful accepting receiver, treatment/gate/region/year and native as-generated versus dry-solid quantity. Split distinct receiver streams and keep useful internal returned fibre out of external rejects. No default reject yield or composition.
- Selected flow: Wet fibre-screening reject from purchased kraft pulp `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_waste and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Primary fibre-rich effluent sludge (`primary_sludge`)

Use the broad paper-production sludge identity only for the actual primary sludge stream. Retain fibre/inorganic/chemical composition, measured wet and dry mass, dewatering and receiver conditions; do not merge with biological sludge.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_waste and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Waste aerobic biological sludge (`bio_sludge`)

Keep separately measured biological sludge under the same broad identity with its origin, biomass/fibre fraction, chemical contamination, dry solids and receiver. Shared UUID does not justify a shared composition or treatment dataset.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_waste and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Collected dry kraft-paper cutting dust sent off site (`dust_waste`)

One actual separately captured kraft-paper cutting/rewinding dust dispatched externally. Official Dust is a nonmetal industrial collector Waste Mass/kg without a specified treatment route. Weigh collector containers with tare/stock changes; record actual fibre, retained chemicals, inorganic contamination, moisture, biogenic/fossil carbon/hazard and accepting lawful receiver/native as-collected quantity/gate/region/year. Total capture, internal pulper returns and external shipments are separate; split distinct collectors/destinations, and only actual released fractions enter air. No kiln dust, assumed positive generation or capture rate, and no avoided-pulp credit.
- Selected flow: Externally dispatched captured kraft-paper cutting dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_waste and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Spent Clupak rubber blanket (`spent_blanket`)

One actual retired rubber Clupak blanket article crossing the waste handover boundary. Official Waste rubber also describes rubber from other durable products, not only tyres; its treatment route is empty and native Mass/kg. Confirm actual rubber/composite construction, reinforcement, polymer/cure/hard-rubber state if known, adhered fibre/chemical contamination, moisture, hazard and measured whole-article mass/stock change. Actual receiver must accept this construction and native article-versus-rubber-fraction quantity; no specific polymer, tyre recipe, recycled-cleaned state, separation yield or credit is assumed. Unknown polymer identity is explicit, not proof of a pure polymer waste. If receiver/reference cannot represent the whole composite, retain that dataset gap or separately model only actual disassembled streams; never multiply whole article mass by an invented rubber fraction.
- Selected flow: Retired Clupak rubber blanket waste `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_waste and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `lahti-clupak-2015`

##### Elementary flows

###### Chemical oxygen demand to fresh water (`cod`)

Record the final fresh-water load as oxygen demand, not chemical mass or carbon. Use same-period concentration and final effluent volume. Inventory identified hazardous species separately; this indicator cannot conceal them.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_effluent and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### Biological oxygen demand to fresh water (`bod`)

Record the actual oxygen-demand test method, incubation duration, nitrification suppression and units. BOD5, ultimate BOD and COD are not interchangeable; a generic BOD identity does not establish BOD5 background/LCIA compatibility.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_effluent and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### Suspended solids discharged to fresh water (`tss`)

Record measured final suspended solids with filtration/drying method and fresh-water receiving body. A dissolved-solids identity or unspecified-water compartment is not an exact substitute.

- Selected flow: Suspended solids discharged to fresh water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_effluent and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### Total nitrogen to fresh water (`nitrogen`)

Quantify kg N including organic and inorganic bound nitrogen, excluding molecular N2. Inorganic-only monitoring is incomplete; do not infer total nitrogen by renaming it or sum aggregate N with its separately reported constituent loads.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_effluent and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### Total phosphorus to fresh water (`phosphorus`)

Quantify measured kg P, not kg phosphate; retain analytical digestion/basis and avoid adding a total-P load to its constituent phosphate load.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_effluent and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### Liquid water discharged to fresh water (`water_return`)

Actual final liquid-water component emitted to the named fresh-water receiver after treatment, not resource withdrawal or vapour. Measure bulk effluent mass or volume with representative actual mixed-liquid density, independently validated water mass fraction and compatible water-component density/state/reference quantity. Convert measured water mass to native Water m3 and divide by P once; total mixed-liquid mass/volume and COD are not pure water. Bulk effluent volume remains the matched COD/BOD/TSS/N/P load basis at the same freshwater outfall/time boundary. Internal reuse, external treatment and actual bypass splits are distinct; missing composition/density/reference is a dataset gap, not water-fraction1 or default1000kg/m3.
- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Use cp_effluent measured final water-component mass and compatible density/reference to calculate native Water m3; divide by same-period P once. Retain measured bulk effluent volume for pollutant loads.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-paper-bref-2015`

###### Water vapour emitted outdoors (`water_air`)

Record water removed in drying, Clupak operation and treatment as actual outdoor vapour, subtracting actual captured condensate. Use measured humidity/airflow or a reconciled physical water balance; no BREF evaporation value is a default.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### Biogenic carbon dioxide released outdoors (`co2_bio`)

Conditional on actual release from biological treatment/degradation of pulp carbon. Retain gross biogenic CO2 in LCI separately from fossil carbon, without deleting it due to a GHG reporting convention. Do not infer a mass from COD oxygen demand.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### Fossil carbon dioxide released outdoors (`co2_fossil`)

Conditional on evidenced fossil-carbon oxidation in foreground treatment; trace substrate origin separately from fibre carbon. Purchased electricity/steam combustion remains upstream and is not invented as a foreground stack emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### Biogenic methane released outdoors (`methane_bio`)

Record only evidenced fugitive release attributable to biogenic substrate, including abnormal operation. Aerobic treatment does not itself prove zero methane; no anaerobic-reactor or landfill factor is imported. Other carbon origins require separate species/source rows.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### Nitrous oxide released outdoors (`n2o`)

Record an actual treatment emission when monitoring or a validated site model supports it. Preserve kg N2O versus kg N2O-N conversion from molecular stoichiometry; do not merge it into NOx or use a factor from another treatment route.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### Outdoor particles at or below 2.5 micrometres (`pm25`)

Measure the non-overlapping finest fraction actually escaping drying/rewinding/cutting collection. Do not add cumulative PM10 to this load.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### Outdoor particles above 2.5 and at or below 10 micrometres (`pm2510`)

Derive only from compatible size-resolved measurements; cumulative PM10 minus cumulative PM2.5 is valid only for the same source, time, sampling convention and boundary. No assumed fraction.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### Outdoor particles above 10 micrometres (`pm10plus`)

Record this distinct outdoor-air fraction when demonstrated. Total dust minus PM10 requires compatible measurements; captured dust is separate waste/internal reuse, not this air emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual attributable records using cp_air and divide by net accepted paper mass in the same cp_production period. Document absence or retain a gap; never assume zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_campaign | First subdivide grades/campaigns and directly meter inputs and releases; investigate system expansion if compatible with the study goal. If these cannot resolve multifunctionality, demonstrate a relevant quantifiable physical relationship; only then consider another justified relationship such as economic value. No fixed allocation fraction or automatic mass allocation is prescribed. | eu-pef-2021 |
| allocate_ledger | Keep full actual co-product/waste outputs and internal links in physical mass/water/carbon balances. Apply allocation shares to attributable environmental burdens in a separate ledger; never mechanically multiply actual recovered-paper output by a burden share. Record total, drivers and reconciliation for each shared meter. | eu-pef-2021; jrc-paper-bref-2015 |
| allocate_recovery | Classify off-site recovered broke according to actual receiver acceptance/specification/function and lawful product/use status, not payment alone, alongside its economic/material role. Do not give internal broke, recycled water, captured dust or returned condensate a default avoided-production credit. Disclose the chosen recycling/end-of-waste convention and consistent receiver linkage before any credit. | eu-pef-2021; jrc-paper-bref-2015 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_production | sack_paper | finished | Production and quality record | reel/lot/grade; gross mass; core/wrap tare; net accepted paper mass P; delivery wet-basis moisture w; rejects; period; MD/CD tensile/stretch/TEA; grammage; air resistance; methods/conditioning; Clupak stage state | Use calibrated reel scales and acceptance records, moisture tests and grade tests; align production and exchange periods. Exclude rejected/recycled paper and nonpaper tare. | kg; %; declared test units | Each reel/lot and campaign | Full representative production period including abnormal/startup/grade-change intervals | Selected machine and accepted grade | per 1 kg reference flow | scale calibration; tare checks; moisture/test certificates; campaign closure |
| cp_inputs | sack_paper | Material and packaging inputs | Weighing, procurement and formulation records | material/UUID; supplier; lot; delivery quantity; moisture/active solids; composition/SDS; inventory changes; packaging tare; blanket service and replacements; actual whole-product or supplier-expanded preparation inventory; supplier formulation/emulsification utilities/losses; packaging/delivery; actual separate onsite additions | Reconcile delivery, consumption and opening/closing stock on calibrated scales. Determine actual supplier reference quantities; document chemical non-use and material consumable coverage. Bought complete preparations are one compatible whole supplied-product exchange with their supplier manufacture, formulation/dispersion/emulsification, utilities, losses, packaging and delivery retained once. Constituents remain analytical composition/fate unless an explicitly evidenced supplier-expanded formulation inventory retains every one of those actual operations and boundaries; that expanded inventory and the whole supply are mutually exclusive for the same quantity. Pure ingredient UUIDs do not alone identify a complete preparation. Actual independently bought onsite additions, dilution/mixing water, utilities and losses remain separate real exchanges. Keep unknown complete-product identity/reference compatibility specific and unresolved; do not invent recipes or preparation factors. | kg | Each receipt/lot and campaign | Same cp_production period with service-period adjustment disclosed | Selected grade, supply boundary and replacement service | per 1 kg reference flow | invoices; supplier definitions; SDS; weighing/stock reconciliation |
| cp_utilities | sack_paper | electricity; steam; condensate; water | Meter and supplier records | meter start/end; stage; grade; kWh; voltage/grid; steam mass P/T/dryness; condensate mass/state; supplied-water volume/density; supplier reference boundary; stock/storage losses | Use calibrated meters and paired delivery/return state measurements; reconcile stage meters with bills, supplier definitions and internal recovery diagram. | kWh; MJ; kg; m3 | Continuous/shift totals and each supplier settlement | Same cp_production period; all relevant operating intervals | Mill supply interface, stages and effluent treatment | per 1 kg reference flow | meter calibration; enthalpy method; supplier background definition; bill reconciliation |
| cp_waste | sack_paper | broke; rejects; primary_sludge; bio_sludge; dust_waste; spent_blanket | Waste shipment and internal balance records | origin; stream; wet/dry mass; moisture; fibre/inorganic/chemical composition; capture/reuse; contamination; receiver; destination/date/treatment; stock change | Weigh each stream separately; sample solids/composition; reconcile receiver tickets and internal recovery at identical linked quantities. Track sludge conditioning constituents individually when used. | kg | Each shipment and matched batch/shift | Same cp_production period; include stored waste and stock changes | Generation and handover boundaries, with each receiver distinct | per 1 kg reference flow | scale records; dry-solids tests; waste acceptance specifications; receiver tickets |
| cp_effluent | sack_paper | cod; bod; tss; nitrogen; phosphorus; water_return | Effluent flow and analytical records | outfall/receiving medium; time interval; bulk effluent volume V/mass; actual mixture/water-component density/state and validated water mass fraction; paired concentrations c; units; analytical method; BOD duration; nitrogen species coverage; blank/correction; bypass and outages | Meter final discharged volume and obtain representative flow-proportional composites matched to the same period; retain method, detection limit and non-detect treatment. Include separately evidenced bypass loads. | m3; mg/L; kg | Interval flow with representative paired analyses; retain actual sampling plan | Same cp_production period; cover normal and abnormal operation | Final fresh-water outfall after treatment | per 1 kg reference flow | flow calibration; sampling representativeness; laboratory QA; receiving-body proof |
| cp_air | sack_paper | water_air; co2_bio; co2_fossil; methane_bio; n2o; pm25; pm2510; pm10plus | Outdoor release and carbon/water balance records | source; medium; species; carbon origin; matched gas flow/humidity/concentration/time; wet/dry and reference T/P; size convention; capture/reuse; operating interval; validated model inputs | Use representative source measurements after controls or a validated site mass-balance/model with explicit measured inputs and uncertainty. Reconcile water and biogenic/fossil carbon independently; do not substitute COD for carbon. | kg; declared compatible gas and test units | Measured intervals and representative source tests matched to operating states | Same cp_production period including startup/abnormal periods | Dryer/Clupak, rewinder/cutter and primary/aerobic treatment outdoor releases | per 1 kg reference flow | sampling location/method; gas calibration; disjoint particle audit; model validation and carbon closure |

Grade tests follow the declared method editions and conditioning: ISO 536 for grammage, ISO 287 for moisture, ISO 1924-3 for tensile/stretch/TEA and ISO 5636-5 for Gurley air resistance are identified in the Billerud handbook. This PCR requires traceable method declaration, not undocumented equivalence between ISO and Tappi tests. Clupak stage records retain moisture, nip/drive conditions and actual compaction without adopting literature setpoints. Sources: `billerud-sack-handbook-2025`, `lahti-clupak-2015`.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_campaign | all inventory rows | q = A / P; A is the actual attributed exchange amount for the campaign; P is kg net accepted as-delivered paper in cp_production. Reference output is 1 kg; other numerator units are preserved. Sum exchange amounts before division, not arithmetic means of specific ratios. | A; P; cp_production; relevant row protocol | exchange amount per 1 kg reference flow | jrc-paper-bref-2015 |
| solid_reconciliation | pulp; finished; rejects; primary_sludge; bio_sludge; broke | D = W × (1-w); W is measured wet mass and w is measured water mass fraction of that same stream. Record dry solids for physical balance; retain actual supplier/delivery reference quantity separately. | W; w; cp_inputs; cp_production; cp_waste | dry-solid mass D | billerud-sack-handbook-2025; jrc-paper-bref-2015 |
| effluent_load | cod; bod; tss; nitrogen; phosphorus | L = sum(c_i × V_i × 0.001); c_i is mg/L and V_i is m3 for the same interval; L is kg of the specified indicator/species. Divide the summed load by P. Bypass is a separately matched measured interval, not an arbitrary uplift. | c_i; V_i; P; cp_effluent; cp_production | kg indicator/species per 1 kg reference flow | jrc-paper-bref-2015 |
| steam_reconciliation | steam; condensate | Preserve measured gross supplied mass and external return mass in the physical inventory. Derive Q_net from actual supply/return mass and compatible specific enthalpy states, deducting only documented losses outside the meter boundary. Link to the supplier unit only after its reference boundary matches; unknown states remain pending. | cp_utilities; supplier definition; measured mass/enthalpy states | physical steam/return mass and separately reconciled useful heat | jrc-paper-bref-2015 |
| water_component | water_return | M_liquid = measured mass or sum(V_bulk_i × measured rho_liquid_i); M_water_i = M_liquid_i × validated water fraction_i; V_water = sum(M_water_i / compatible rho_water_i); normalize V_water/P once. Bulk V remains pollutant-load volume; no assumed density/fraction or receiver broadening. | cp_effluent; actual fraction/density/state/reference; P | actual native water m3 per kg accepted paper | jrc-paper-bref-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| scope_quality | finished; pulp | Verify all reference qualifiers and real grade acceptance, including absence of intentional wet strength, sizing or coating. Broad UUID identity is separate from physical quantity and background compatibility. | supplier specifications; process records; grade tests |
| period_quality | all inventory rows | Use a representative declared site/year/campaign; reconcile stock changes, service-life quantities, abnormal operation and grade allocation. Do not extrapolate a short trial as an industry mean. | complete period ledger and justified sampling |
| balance_quality | sack_paper | Close dry-fibre/solid, water, biogenic carbon and fossil carbon balances before applying environmental-burden shares. Use measured constituent carbon; do not turn COD/BOD into carbon without verified composition. Explain uncertainty and residuals. | matched stage diagrams, tests, internal links and separate burden ledger |
| gap_quality | all inventory rows | Record unsupported UUIDs, receiver definitions, monitoring methods or conversions as explicit gaps. Document non-applicability with evidence; no default positive flow or zero. Add identified unlisted atomic exchanges before data-package completion. | gap register; supplier readback; actual monitored scope |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_reference | Exactly one reference-product output links finished to the reference UUID and 1 kg net paper. Intermediate/final paper is not repeated with the same reference identity. Both languages use the same denominator, collection period and calculations. | billerud-sack-handbook-2025 |
| validate_balance | Reconcile physical output/input/stock amounts, identical internal links, pulp solids, paper moisture, separated waste composition, water and carbon closure. Burden allocation must not distort physical co-product quantities. | jrc-paper-bref-2015; eu-pef-2021 |
| validate_emissions | Verify actual outdoor-air/fresh-water medium and quantity definitions. Do not replace fresh-water TSS with dissolved solids or unspecified water; do not add cumulative and disjoint particle bins. Keep gross biogenic CO2. Hazardous species and other detected releases require separate atomic rows. | jrc-paper-bref-2015 |
| validate_compatibility | A successful identity lookup is not a complete dataset. Require supplier quantity/state/boundary compatibility, including steam enthalpy/return, pulp moisture, utility voltage and waste receiver. An unresolved flow or missing measurement remains explicit; report findings and skipped/inconclusive scope. | jrc-paper-bref-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground process dataset for a defined purchased-pulp Clupak paper campaign |
| downstream_use | secondary_dataset and/or background_dataset only after compatible evidence linkage and quality assessment |
| allowed_use | Upstream paper input to an explicitly compatible sack-conversion model; site-specific manufacturing assessment |
| excluded_use | Other kraft-paper/board routes, integrated pulping, finished-sack service comparisons by mass alone, or unsupported zero-emission claims |
| required_metadata | All reference qualifiers; site/time; pulp supply; grade acceptance; Clupak route; utility interface; treatment/outfall; allocation; receiver links; infrastructure/transport scope |
| required_quality_disclosure | Actual primary data, missing UUIDs/measurements and background compatibility, balances, allocation uncertainty and independent review state |
| update_trigger | Furnish, sizing/wet-strength/coating, compaction technology, supplier quantity basis, energy/treatment/receiver route, grade specification or source-method changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), DOI 10.2791/370629. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | §2.1.1 purchased versus integrated mills; §2.2.2 monitoring, Fig.2.3 and net paper production; §2.3.2.1 chemicals/additives; §2.4 water supply; §§7.1.1–7.1.5 stock/refining, drying, water/broke circuits and optional sizing; §7.1.10 cutting dust/dispatch; §7.1.11.5 kraftliner versus fluting. Qualitative process/measurement scope only; no BAT values, recipes or example-mill defaults. |
| billerud-sack-handbook-2025 | handbook | Billerud, Handbook for Sack Kraft Papers and Paper Sacks, file edition sack-handbook-251218. https://www.billerud.com/globalassets/billerud/packaging-materials/sack-paper/sack-handbook-251218.pdf | Printed pp.8,10,12,16–18: chemical-pulp sack paper, stretch/porosity and separate wet-strength/coating functions, moisture, wrapping and declared test methods. Manufacturer quality guidance, not a universal furnish or grade threshold. |
| lahti-clupak-2015 | literature | Jussi Antero Lahti, Clupak process and its significance for the properties of extensible kraft paper, TU Graz dissertation (2015), DOI 10.3217/nxecf-99f14. https://repository.tugraz.at/publications/nxecf-99f14 | Abstract; §2.2.1–2.2.3 (printed pp.15–17, PDF27–29), Fig.2.6: moist-web MD compaction in the dryer by rubber blanket; §4.2 limitations/counterevidence on air permeance and trial interpretation. No trial operating points, numerical recipe or assumed porosity relationship adopted. |
| eu-pef-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I §4.5 (decision hierarchy, Annex PDF pp.63–64). https://environment.ec.europa.eu/publications/recommendation-use-environmental-footprint-methods_en | General multifunctionality hierarchy: investigate subdivision/system expansion, physical relationship, then other justified relationship; not paper-specific fractions or automatic recovered-paper credits. |
