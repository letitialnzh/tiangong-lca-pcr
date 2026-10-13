---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.pulps-of-fibres-derived-from-recovered-waste-and-scrap-paper-or-paperboard-or-of-other-73692a30
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Washed and bleached deinked recovered-paper market pulp

## 1. Scope and Applicability

This PCR supports recovered-paper pulping with actual deinking, washing, peroxide bleaching, dewatering and drying to qualified market pulp. It excludes non-deinked paperboard furnish, primary straw/bagasse/bamboo or other nonwood plant pulps, virgin wood pulp, dissolving pulp, wet-lap delivery and downstream papermaking. These routes have different contaminant removal, chemistry and product states and must not share averaged inventories. BREF Chapter 6 distinguishes recycled-fibre processing routes; the two Sustana sources corroborate bleached recycled fibre and the importance of dry versus wet delivery without establishing universal quantities.

A foreground dataset must name the actual paper grades, deinking technology, bleaching formulation, final composition, utility source and wastewater disposition. The illustrative sodium-oleate collector is conditional on actual use; it does not prescribe a formulation. Other actual chemicals, nutrients, biocides, defoamers, refrigerants, packaging components and pollutant species must each be added as one specific exchange, directly verified when a UUID is adopted. No omission, zero amount or default yield follows from this minimum inventory. The selected utility envelope is purchased grid electricity plus purchased steam heat and/or an attributable natural-gas boiler; CHP, biomass/sludge firing and anaerobic gas-energy systems require a separately evidenced extension.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.pulps-of-fibres-derived-from-recovered-waste-and-scrap-paper-or-paperboard-or-of-other-73692a30 |
| classification_refs | CPC 3.0 32114; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Washed, peroxide-bleached deinked recovered-paper market pulp with qualified dried delivery |
| excluded_products | Non-deinked board pulp; primary nonwood plant pulp; virgin wood/dissolving pulp; wet lap; finished paper |
| representative_product | Deinked market pulp for paper manufacture, composition and quality measured |
| production_route | Repulping → coarse/fine screening and cleaning → deinking → washing → peroxide bleaching → dewatering → drying and packing |
| market_state | Factory-gate dried market pulp; packaging measured separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply usable deinked fibre for downstream papermaking |
| How much | 1 kg reference flow |
| How well | Accepted washed/bleached pulp; measured fibre, moisture, ash, residual ink, stickies, brightness and declared grade specification |
| How long or cycle | One measured production and delivery campaign; no downstream service-life claim |
| reference_flow_link | finished_pulp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Waste Paper Pulp `35b4a2f9-d344-4cc9-85a1-8eb4039ef21c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Recovered-paper grades/source; actual deinking, washing and peroxide bleaching; nominal 90% paper-fibre/10% moisture reference state and measured fibre/ash/other contaminants; supplier composition tolerance and quantity definition; grade quality; drying; packaging exclusion; site/campaign; utility and treatment route; recycling allocation convention |

Missing qualifiers make the dataset reference incomplete. The UUID establishes a physical product candidate, not a background dataset or a universal moisture recipe. Use measured accepted output mass Q only after composition/quantity compatibility is demonstrated. Do not rescale an incompatible wet product into a fictitious dried product without the actual drying inventory.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measurement_output | finished_pulp | Mass | kg | Weigh accepted net delivered pulp using calibrated scales; exclude packaging and off-spec stock. cp_product independently measures moisture, oven-dry matter, ash and actual fibre/nonfibre composition. Only composition-compatible accepted output enters Q. |
| measurement_basis | all inventory rows | Declared exchange property | Declared row unit | All quantities and protocols use per 1 kg reference flow. Campaign totals are divided by Q in kg after stock correction and traceable attribution; dry-fibre and dry-solid balances remain separate from this delivered-mass denominator. |
| measurement_energy | purchased_heat; gas; electricity | Energy and volume | MJ; m3 | Preserve each reference property. Electricity uses Net calorific value/MJ identity and meter conversion; gas uses Volume/m3 with matched supplier conditions; steam needs verified net enthalpy delivered minus return. Do not equate NCV/GCV with useful heat. |
| measurement_emissions | species or indicator elementary outputs expressed in kg; excludes final_liquid_water | Mass of species or defined indicator | kg | Record medium/submedium, analytical definition, fossil/biogenic origin and reporting unit; kg as N, kg as P and kg oxygen-equivalent COD remain distinct. Resolve NOx basis and PM disjoint bins before acceptance. |
| measurement_final_water | final_liquid_water | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | The native exchange is measured final H2O-component volume; mass, water fraction and compatible density are auxiliary conversion/closure evidence under final_water_component, not a replacement of native m3 by kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sorted recovered paper supplied to the pulp mill; supply-chain activities remain linked |
| starting_condition_role | foreground entry interface |
| product_classification_scope | Only the reviewed deinked/washed/bleached market-pulp subset of CPC32114 |
| recursive_input_rule | Purchased same-category pulp is an upstream product input, not a reason to repeat its entire production here; disclose origin and prevent circular double counting |
| upstream_dataset_requirement | Include recovered-paper collection, sorting, transport and retained prior-cycle burdens under an explicit recycling convention, plus each purchased supply and actual off-site residue treatment |
| disclosure | Cradle-to-gate modelling with separately disclosed foreground and upstream modules; no automatic cut-off at recovery and no avoided burden without evidence |

P1 aggregates stock preparation, pulp drying/packing, attributable natural-gas utilities and any on-site aerobic treatment. Preserve the physical stage graph and measured transfers independently: paper → pulp; pulper/screen reject → residue handling; flotation/wash solids → deinking sludge; process water → recirculation or treatment; final pulp → drying/packing. Each internal link has identical mass/composition and time coverage at both ends, with inventory/storage changes reconciled. A same-product transfer before packing is not a second reference-product output. External wastewater treatment receives the waste exchange only; its environmental emissions belong to the treatment dataset. Downstream papermaking, use and final paper recycling are outside this foreground boundary.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| P1 | Washed bleached deinked market-pulp production | required | Selected deinking, washing, peroxide bleaching and dried delivery route | foreground | 1 kg reference flow |

### Process: Market-pulp production (`P1`)

#### Inputs

##### Product flows

###### Waste paper (`recovered_paper`)

Sorted recovered paper actually received: retain grade/source fractions, printed/coated material, mineral filler, plastics, metal, adhesives, moisture and dry fibre. A mixture is one physical feed stream only when its composition is measured. The broad UUID does not imply zero upstream burdens.

- Selected flow: Waste paper `55842481-6771-4f13-a54b-02354a7d88de`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Sources: `eu-pulp-paper-bref-2015`

###### Alternating current (`electricity`)

Meter user-side 1–35 kV grid-average electricity for pulping, screening, flotation, washing, bleaching, dewatering, drying auxiliaries, packing and any on-site treatment. Retain stage submeters; convert metered kWh using 3.6 MJ/kWh. Do not apply another fuel calorific factor to electricity. Raw source geography is CN. Verify actual supplier/region/year, 1–35kV user gate, losses and MJ reference-quantity compatibility; the physical AC locator is not a globally applicable grid background.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `eu-pulp-paper-bref-2015`

###### Net process heat delivered by purchased steam (`purchased_heat`)

Conditional one actual purchased steam-heat input. Official Heat for manufacturing is a Product flow with unspecified heat carrier at plant GLO and native Net calorific value/MJ; no specific pressure or fuel route is imposed. The native property does not automatically establish useful net enthalpy. Measure supplier steam and returned-condensate mass, absolute/gauge pressure convention, temperature, quality and common enthalpy reference; deduct only losses not already reflected in the delivery measurement. Verify actual supplier region/year, gate, production route and net-heat reference quantity before background linkage. Internal gas-boiler steam is not a second purchased input. Fixed-pressure kg-steam and GCV heat candidates remain incompatible substitutes.

- Selected flow: Net process heat delivered by purchased steam `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `eu-pulp-paper-bref-2015`

###### natural gas in the gaseous state (`gas`)

Conditional on an on-site pipeline-natural-gas boiler for process heat. Preserve Volume/m3; retain meter and supplier reference temperature, pressure, humidity, composition and compressibility. Reconcile volume definitions before background linking; measure calorific value separately. A secondary mass coefficient is not density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-gas-2026`

###### Tap water (`fresh_water`)

Treated tap-water supply measured at the site inlet; recycled wash water is internal and not repeatedly counted as fresh supply. If the site abstracts raw water, replace this supply interface with one verified resource flow and treatment inventory, with no tap-water duplication. Raw source supply is HK at a Hong Kong water-treatment plant. Verify actual supplier/basin, treatment, region/year, delivery gate and native Volume/m3 basis; the secondary1000kg/m3 screening descriptor is not an actual density.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `eu-pulp-paper-bref-2015`

###### Sodium hydroxide solution, 50% (`alkali_solution`)

Conditional on actual use of a 50% by mass sodium hydroxide solution; measure delivered solution mass and supplier assay, not pure NaOH mass. Pulping and peroxide bleaching doses are separate stage measurements before aggregation. A different formulation requires its own verified atomic row.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemicals`
- Sources: `eu-pulp-paper-bref-2015`

###### Hydrogen peroxide, 50% in water (`peroxide_solution`)

For the selected peroxide-bleaching route, record actual 50% aqueous H2O2 solution mass and assay. Identity does not import the source-record cotton-processing quantities. If another concentration or bleaching chemistry is used, a reviewed separate row is required; no default positive dose is assigned. The raw record has a CN textile-mill use context but an at-plant inorganic chemical supply route; this is a conditional physical 50% aqueous reagent locator, not that textile background for pulp. Verify actual industrial grade/stabilizers/formulation, supplier route/region/year, whole-solution Mass/kg and delivery gate before linkage.

- Selected flow: Hydrogen peroxide, 50% in water `2ef759d9-dc11-4c3e-b61f-83222f3c60ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemicals`
- Sources: `eu-pulp-paper-bref-2015`

###### Aqueous sodium silicate solution for deinking (`silicate_solution`)

Conditional on actual use. Record solution mass, solids fraction and SiO2/Na2O modulus. An unverified concentrated/solid melting-route record cannot stand for aqueous solution mass; keep the UUID unresolved.

- Selected flow: Aqueous sodium silicate solution for deinking
- Flow property / unit: Mass / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemicals`
- Sources: `eu-pulp-paper-bref-2015`

###### Sodium oleate flotation collector (`flotation_soap`)

Conditional one actual sodium-oleate deinking collector. Official Sodium carboxylate is a broad sodium salt of a carboxylic acid, with empty treatment route and no source CAS; it conditionally contains this specific chemical, not an exact sodium-oleate assay or supplier inventory. Verify actual supplier/SDS identifies the oleate anion and sodium cation, actual CAS143-19-1, supplied form, purity/active fraction, associated water/additives and native Mass reference/gate/period compatibility. Actual chemical CAS is supplier evidence and must not be described as a CAS verified in the raw source. Preserve complete as-supplied mass versus active-oleate/dilution-water bases; do not invent purity, dose or manufacture, silently substitute another sodium carboxylate, soap blend, paraffin/lithium collector or nonionic/SDS surfactant. If actual formulation is another chemical, author its own specific exchange.

- Selected flow: Sodium oleate flotation collector `d1456413-4931-406b-95a1-c2c3193f38fe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemicals`
- Sources: `eu-pulp-paper-bref-2015`

###### Polyethylene film (`pe_film`)

Conditional on actual PE-film bale packaging. Weigh film separately from pulp; verify polymer, supplier and upstream reference. The source CPC classification defect is disclosed in review metadata. Other packaging components require separate rows.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemicals`
- Sources: `eu-pulp-paper-bref-2015`

###### Road freight of sorted recovered paper by diesel lorry (`inbound_freight`)

Conditional one actual diesel-lorry road-freight service for sorted recovered paper, only outside the upstream supplied-paper transport gate. Official freight transport has the road-freight route and native mass*distance/kg*km, without a hard cargo or specific-case restriction. Record each actual payload, distance, diesel vehicle class/emissions standard, load factor, loading/empty-return attribution, supplier region/year and service reference convention; no default truck, distance or return ratio. F = sum(payload kg × actual km), and 1 t*km = 1000 kg*km, then divide the compatible service total by Q once. Do not count separate foreground diesel on top of a provider including it.

- Selected flow: Road freight of sorted recovered paper by diesel lorry `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Use cp_transport measured F = sum(payload kg × actual km); convert tonne-km by 1000 to native kg*km before F/Q, normalize once and retain upstream/empty-return compatibility.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `eu-pulp-paper-bref-2015`

#### Outputs

##### Product flows

###### Waste Paper Pulp (`finished_pulp`)

One accepted net pulp output at the plant delivery gate, excluding packaging. The UUID is for washed, bleached, chemically recycled/deinked pulp with nominal 90% paper fibre and 10% moisture. Validate actual water, fibre, ash and other material against supplier background definitions; 90% dry solids is not proof of 90% fibre. Wet lap and an incompatible composition are not silently converted to this delivery state.

- Selected flow: Waste Paper Pulp `35b4a2f9-d344-4cc9-85a1-8eb4039ef21c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product`
- Sources: `eu-pulp-paper-bref-2015`

##### Waste flows

###### Mixed coarse pulper and screen reject from recovered-paper deinking (`pulping_reject`)

One actual separately collected and externally dispatched mixed coarse pulper/screen reject from recovered-paper deinking. Official Waste solid explicitly includes industrial discarded solids without a hard treatment restriction. Measure as-shipped wet mass, dry matter, cellulose, plastics, metals, fillers/ash, inks/adhesives, carbon, moisture and hazard; record stage/form and named lawful accepting receiver/provider treatment and native Mass reference compatibility. Different physically separated fractions/receivers require individual rows; internally returned fibre is an internal link. This is neither black liquor, wood offcut nor clean paper scrap, and the generic identity supplies no composition or disposal default.

- Selected flow: Mixed coarse pulper and screen reject from recovered-paper deinking `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `eu-pulp-paper-bref-2015`

###### sludge (paper production) (`deinking_sludge`)

Deinking flotation/wash-water clarification sludge collected separately from coarse reject and biological sludge. The broad paper-production-sludge UUID is restricted here to this measured stream; retain moisture, ash, fibre, inks, hazardous constituents, dewatering and actual treatment/reuse destination.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `eu-pulp-paper-bref-2015`

###### Untreated deinked-pulp process wastewater sent to external treatment (`untreated_effluent`)

Only one actual untreated liquid deinked-pulp process wastewater stream dispatched to external treatment. Official Waste liquid covers industrial wastewater with no hard treatment route, but its native reference is Mass/kg, not Volume/m3. Weigh the as-sent liquid or determine m = sum(V_i × rho_i) using measured interval volume and representative actual temperature/composition-dependent density in kg/m3; retain calibration, sampling and uncertainty, never a default pure-water density. Record fibre/filler/ink, chemical/COD/TSS/N/P/species and water fractions, pH/contaminants, lawful accepting receiver and treatment/interface/quantity basis. Whole wastewater mass is not water mass or COD mass; retain measured volume for receiver loads and water fraction for the physical water ledger. On-site influent remains an internal record; off-site treatment emissions stay with its dataset, without duplicate direct discharge. The source generic hazardous wording does not determine this actual stream's legal hazard classification.

- Selected flow: Untreated deinked-pulp process wastewater sent to external treatment `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_water measured as-sent liquid mass or m = sum(V_i × measured rho_i); normalize native kg/Q once, retaining actual volume, water fraction and receiving-treatment basis; unknown density is unresolved, not 1000 kg/m3.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `eu-pulp-paper-bref-2015`

###### sludge (paper production) (`primary_treatment_sludge`)

Conditional on on-site primary wastewater treatment: one primary clarification sludge stream, separately weighed with measured wet mass, dry solids, fibre, ash, carbon, hazardous constituents and receiving facility. The broad paper-production-sludge identity is physically restricted to this source.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `eu-pulp-paper-bat-2014`

###### sludge (paper production) (`biological_treatment_sludge`)

Conditional on on-site biological wastewater treatment: one excess biological sludge stream, independently weighed and characterized by moisture, dry solids, organic carbon, ash, hazard and receiver. Do not duplicate return activated sludge circulating internally or merge it with deinking or primary sludge.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `eu-pulp-paper-bat-2014`

###### Captured recycled-fibre mill dust (`captured_dust`)

Conditional one actual separately captured non-metal recycled-fibre-mill dust stream externally dispatched from a documented handling/drying/packing collection point. Official Dust is a Waste Mass/kg industrial-collector identity with no specified treatment restriction; it does not prove that dust is generated or a default collection rate. Weigh collector/container tare-corrected mass and stock, separately track actual internal fibre return and external consignments; assay moisture, actual fibre/filler/ink/adhesive and mineral contaminants, biogenic/fossil carbon and hazard. Verify actual material family, lawful accepting receiver/provider treatment/native reference basis. Captured mass is not emitted PM or clean wood dust; split separately collected/dispatched streams, and retain internal return as matched stage links without new product or avoided credit. Absence requires equipment/process screening; unknown captured mass remains a gap.

- Selected flow: Captured recycled-fibre mill dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `eu-pulp-paper-bat-2014`; `sustana-dry-bales-2024`


##### Elementary flows

###### Final treated liquid water discharged to the actual receiving body (`final_liquid_water`)

Conditional actual liquid water component in final direct discharge after the included on-site treatment; separately measured actual bypasses remain identified. Official Water, CAS7732-18-5, is an Elementary emission to water unspecified, native Volume/m3, not a resource or vapour. This provisional physical locator is allowed only while the method has not specified a receptor; every concrete dataset must establish its named receiving body/location and use the directly verified freshwater/marine identity when known, consistently with COD/TSS/N/P outfall media. External wastewater treatment is the separate waste interface; mutually exclusive branches or measured actual splits prevent duplicate emissions. Determine actual final liquid mass from weighing or measured bulk volume×bulk-density; determine its actual water-component mass using measured water fraction, then convert to native water volume with a verified corresponding water-component density/state/reference convention. Total mixed effluent mass/volume and COD are not pure-water quantity. Retain bulk outfall volume for pollutant loads, methods/calibrations and conversion/medium uncertainty; unknown water fraction/density/receptor remains a dataset gap.

- Selected flow: Final treated liquid water `a3876d9b-a3e8-4680-861a-4e08642f1392`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_water measured final water-component mass and compatible density to obtain V_water; normalize native V_water/Q once only for actual direct outfall or measured split, never substitute total wastewater mass or resource/vapour.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `eu-pulp-paper-bref-2015`; `eu-pulp-paper-bat-2014`


###### water vapour (`evaporated_water`)

Water vapour released to outdoor air during drying; close measured water balance including water in pulp/residues, condensate, discharge and storage change. Do not add internal steam as another evaporative loss.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `eu-pulp-paper-bref-2015`

###### carbon dioxide (biogenic) (`co2_biogenic`)

Conditional actual biogenic CO2 from on-site biological wastewater treatment or other included biogenic-carbon release. Keep it in the LCI even if the chosen GHG reporting convention or characterization gives it zero weight. Do not infer carbon origin from a total CO2 meter alone.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-pulp-paper-bat-2014`

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional natural-gas boiler fossil CO2, measured or calculated from site fuel carbon and measured oxidation/output reconciliation. Include startup/shutdown; upstream grid emissions belong in the supply dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### methane (biogenic) (`methane_biogenic`)

Conditional actual methane released from included biological treatment; distinguish recovered gas, flared gas and fugitive emission, and measure origin. An anaerobic/biogas-energy system needs a separately evidenced extension; never assume a methane emission from COD alone.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-pulp-paper-bat-2014`

###### methane (fossil) (`methane_fossil`)

Conditional unburned gas or incomplete-combustion methane from the on-site gas boiler; preserve fossil origin and measured operation coverage.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### nitrous oxide (`nitrous_oxide`)

Conditional measured N2O from included gas combustion or biological treatment, with separate stage records; never include it in the NOx total.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`; `eu-pulp-paper-bat-2014`

###### carbon monoxide (fossil) (`carbon_monoxide`)

Conditional fossil CO from on-site natural-gas combustion; capture actual stack mass after controls, including nonsteady operation.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### sulfur dioxide (`sulfur_dioxide`)

Conditional SO2 from the natural-gas boiler; use species-specific monitoring or measured gas sulphur balance, not total SOx identity or an indoor-air record.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### Nitrogen oxides (`nox_air`)

Conditional gas-boiler NOx aggregate excluding N2O. A mass UUID does not establish NO2-equivalence: retain instrument reporting basis, chemistry and background/LCIA compatibility; pending compatibility prevents quantitative acceptance. Do not also sum NO and NO2 emissions for the same mass.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas-2026`

###### particles (PM2.5) (`pm_fine`)

Conditional emitted PM2.5, not cumulative PM10. Retain aerodynamic cutoff and filterable/condensable test definition; subtract only compatible nested measurements to obtain disjoint bins. Screen actual recovered-paper yard/handling, pulp dryer/bale packing and included gas-boiler sources separately; count only particles released past the environmental boundary after controls, including relevant fugitive releases. Collector dust and internal returned fibre are separately measured, never added as air PM; no finished-paper cutting or newsprint emission default is transferred.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-pulp-paper-bref-2015`; `epa-ap42-gas-2026`; `eu-pulp-paper-bat-2014`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Conditional emitted particles above PM2.5 and at/below PM10; this is a disjoint bin, not cumulative PM10. Unknown size distribution remains incomplete rather than all PM2.5. Screen actual recovered-paper yard/handling, pulp dryer/bale packing and included gas-boiler sources separately; count only particles released past the environmental boundary after controls, including relevant fugitive releases. Collector dust and internal returned fibre are separately measured, never added as air PM; no finished-paper cutting or newsprint emission default is transferred.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-pulp-paper-bref-2015`; `eu-pulp-paper-bat-2014`

###### particles (> PM10) (`pm_over10`)

Conditional emitted particles above PM10 from handling/drying; no default positive release or transfer of timber dust factors. Combined size-bin masses must equal the compatible measured total, with no overlap. Screen actual recovered-paper yard/handling, pulp dryer/bale packing and included gas-boiler sources separately; count only particles released past the environmental boundary after controls, including relevant fugitive releases. Collector dust and internal returned fibre are separately measured, never added as air PM; no finished-paper cutting or newsprint emission default is transferred.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-pulp-paper-bref-2015`; `eu-pulp-paper-bat-2014`

###### chemical oxygen demand (`cod_water`)

Only final direct discharge from on-site treatment to water. Retain oxygen-equivalent analytical definition, flow-weighted load and receiver. COD is one monitored indicator; it must not hide separately known toxic species or be added to them as a physical constituent mass.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ef-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge`
- Sources: `eu-pulp-paper-bat-2014`

###### Suspended solids, unspecified (`suspended_solids`)

Only final direct discharge: separately measure TSS by the declared gravimetric method and flow-weighted load. Off-site untreated wastewater load is a receiver characterization, not a second direct environmental release.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge`
- Sources: `eu-pulp-paper-bat-2014`

###### nitrogen, total (excluding N2) (`nitrogen_water`)

Only final direct discharge: retain kg as N, analytical total nitrogen excluding N2 and any separately measured species. Avoid aggregate/species double counting in LCIA; do not assume elemental N2 release.

- Selected flow: nitrogen, total (excluding N2) `3624d70d-4e4b-4927-9b84-b40e26c58e6d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge`
- Sources: `eu-pulp-paper-bat-2014`

###### phosphorus, total (`phosphorus_water`)

Only final direct discharge: measure kg as P and retain receiver. The verified unspecified-water identity has no Chinese baseName. Aggregate phosphorus is not phosphate-ion mass; avoid species/indicator double counting.

- Selected flow: phosphorus, total `46854df3-e13d-4a5a-9e11-6319f1f8347e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Campaign-total measured exchange divided by accepted compatible output mass Q; preserve the row-specific conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge`
- Sources: `eu-pulp-paper-bat-2014`

## 7. Allocation and Co-product Handling

Apply the hierarchy in eu-pef-annex-2021 section 4.5 as an explicit methodological choice: first attribute separable operations by subdivision; examine feasible system expansion with stated additional functions; otherwise justify a relevant causal physical relationship, or an economic relationship when physical causality cannot be substantiated. Do not automatically use wet-mass shares for water-rich sludge. Record allocation factors, prices/period, outputs, shared processes and sensitivity; distinguish waste treatment from a saleable co-product with demonstrated function and receiving market.

Maintain two linked ledgers: (1) unallocated physical quantities and dry-fibre/dry-solid/water/carbon balances, including full co-product outputs and identical internal transfers; (2) attributed environmental burdens and credits. Allocation shares do not physically reduce co-product output or internal-link quantities. Foreground treatment burdens follow the actual receiver. A recovered-paper input is not automatically burden-free: document collection, sorting, transport, previous-life burden and credit sharing, quality at substitution and upstream dataset convention. PEF CFF is an available programme-specific convention with stated parameters, not a default imposed here. Do not combine an avoided-production credit with a background dataset already including that credit; no blanket virgin-fibre substitution or fertilizer/energy credit is permitted.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | P1 | finished_pulp | accepted-output and laboratory record | batch; gross/tare/net mass Q; delivery moisture; dry solids; ash; fibre/nonfibre composition; brightness; dirt/stickies; grade; supplier tolerance | Calibrated weighbridge/bale scales; representative batch moisture/oven-dry and ash assays under declared independently validated methods with drying/ashing conditions and uncertainty retained; fibre composition method and uncertainty; release-quality record | kg; fractions | Each batch; matched campaign | Full matched production campaign; record dates and idle/startup periods | Only qualified accepted dried pulp; opening/closing stock and off-spec stock reconciled | per 1 kg reference flow | Scale calibration; sample representativeness; laboratory method/version and report; supplier/background state agreement |
| cp_feed | P1 | recovered_paper | receipt and composition sampling | supplier; grade/source mass fractions; gross/tare; moisture; dry solids; fibre; ash; plastics; metals; ink/coatings/adhesives; stock change | Weigh each receipt; stratified representative sorting/composition and dry-matter tests by grade/source; retain analytical definition of fibre and nonfibre contaminants | kg; fractions | Each load/batch; representative grade sampling | Full matched production campaign; record dates and idle/startup periods | All accepted feed to the selected campaign, with warehouse reconciliation | per 1 kg reference flow | Grade tickets; scales; sample design; dry matter and contaminant laboratory reports |
| cp_utilities | P1 | electricity; gas; purchased_heat | meter and supplier reconciliation | stage meters; inlet/return; gas T/P/humidity/composition/Z; supplier reference volume; steam mass/T/P/quality/enthalpy; output Q; shared-use allocation | Calibrated energy and flow meters; supplier quantity definitions; inlet minus return enthalpy balance; reconcile stages and purchased/generated utilities without duplication | MJ; m3; kg; kWh | Continuous/daily totals; all operating modes | Full matched production campaign; record dates and idle/startup periods | Selected route and attributable on-site utility operations | per 1 kg reference flow | Meter calibration; supplier definition; enthalpy calculation; allocation and balance residual |
| cp_water | P1 | fresh_water; untreated_effluent; final_liquid_water; evaporated_water | water-meter and water balance | fresh inlet; internal loops; pre/post treatment flow; as-sent wastewater and final-discharge liquid mass/volume, representative liquid/water-component densities at actual state, measured water fraction and receiver quantity basis; condensate; water in pulp/sludge/reject; evaporation; storage; Q; receiver | Calibrated flow meters and measured stream moisture; independent supply/discharge and storage reconciliation; measured evaporation or uncertainty-bounded water-balance residual | m3; kg | Continuous/daily; each residue batch | Full matched production campaign; record dates and idle/startup periods | Whole foreground water circuit and actual treatment boundary | per 1 kg reference flow | Meter/sample records; measured density for mass-volume conversion; balance uncertainty |
| cp_chemicals | P1 | chemical and PE-film inputs | weighed dose and supplier specification | separate chemical identity; solution mass; active fraction; density; silicate modulus; purity; dose stage; polymer; film mass; stock; Q | Calibrated dosing scales/meters reconciled with receipts and stock; supplier assays; supplied-solution quantities distinguished from active substance and dilution water | kg; fractions | Each dose/batch; campaign stock totals | Full matched production campaign; record dates and idle/startup periods | Each actual atomic chemical and packaging input | per 1 kg reference flow | Assays/SDS; polymer/film verification; dose calibration; no source recipe copied |
| cp_residues | P1 | pulping_reject; deinking_sludge; primary_treatment_sludge; biological_treatment_sludge; captured_dust | separate waste weighing and composition | source stage/collector; externally dispatched versus internally returned material; stock and tare; wet/dry mass; fibre; ash; carbon; contaminants; hazard; dewatering; receiver/treatment; storage; Q | Calibrated separate stream weighing; representative dry matter/composition/carbon analyses; shipment/receiver reconciliation. Distinct sludge types remain separate and further split when physically separately dispatched | kg; fractions | Each batch/dispatch; campaign reconciliation | Full matched production campaign; record dates and idle/startup periods | Actual rejects, deinking sludge, actual on-site treatment sludge and separately captured dust | per 1 kg reference flow | Waste tickets; laboratory reports; receiver permit/function evidence; balance closure |
| cp_air | P1 | air elementary outputs | source test and carbon/species balance | source/stage; species; fossil/biogenic share; gas flow; concentration; T/P/wet-dry/O2 correction; duration; PM cutoffs/filterable/condensable; detection limit; NOx quantity basis; Q | Source-specific valid emission testing and activity-weighted integration after controls; retain operating coverage and documented calculation/monitoring method; do not import AP42 factors as site measurements | kg; concentration; volume/time | Representative source tests plus operation logs; full campaign | Full matched production campaign; record dates and idle/startup periods | Direct included foreground releases only, including startup/shutdown | per 1 kg reference flow | Test method/report; instrument calibration; origin analysis; NOx compatibility; PM disjointness and uncertainty |
| cp_discharge | P1 | water elementary outputs | flow-weighted discharge sampling | final receiver; flow; COD as O2; TSS; TN as N; TP as P; species; method; detection limit; background inlet; discharge time; Q | Final outfall flow-proportional composite samples and accredited/equivalently validated assays; BAT8/10 inform measurement coverage with applicable footnotes; retain raw dates and matched flow intervals | kg; mg/L; m3 | Continuous flow; representative daily COD/TSS, weekly N/P unless justified comparable coverage | Full matched production campaign; record dates and idle/startup periods | Only on-site-treated final direct discharge, not off-site treatment influent | per 1 kg reference flow | Laboratory method; flow calibration; receiving medium; detection/coverage; indicator/species overlap decisions |
| cp_transport | P1 | inbound_freight | haul record | load mass; distance; vehicle; payload; loading; empty return; upstream transport boundary; Q | Traceable load tickets and actual haul distances; measured payload kg timeskm, or tonne-km times1000, with explicit empty-return model and supplier double-count check | kg*km; t*km | Each haul; full campaign | Full matched production campaign; record dates and idle/startup periods | Transport not already in supplied paper background | per 1 kg reference flow | Tickets/routes; vehicle and allocation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | a = A / Q; A is an attributable measured campaign exchange in its declared unit; Q is accepted composition-compatible delivered pulp in kg. Retain full physical quantities before burden allocation. | A; Q; cp_product | Exchange per 1 kg reference flow | eu-pulp-paper-bref-2015 |
| dry_material_balance | recovered_paper; finished_pulp; pulping_reject; deinking_sludge; primary_treatment_sludge; biological_treatment_sludge; captured_dust | D = W × (1 − w); W is separately measured wet mass, w is measured water mass fraction. F = D × f, where f is measured dry-fibre fraction, not an assumption that all dry solids are cellulose. Dry-fibre yield = accepted output F / consumed feed F; dry-solids yield = accepted output D / consumed feed D. Include storage and off-spec stock changes. | W; w; f; cp_feed; cp_product; cp_residues | Separate physical fibre and dry-solids balances; no universal yield | eu-pulp-paper-bref-2015 |
| water_load | cod_water; suspended_solids; nitrogen_water; phosphorus_water | L = sum(C_i × V_i × 0.001), for compatible concentration C_i in mg/L and interval volume V_i in m3; L is kg of the declared analytical species/indicator. Normalize L / Q once. Do not sum concentration averages without matched flow. | C_i; V_i; cp_discharge; Q | Final direct discharge load per reference flow | eu-pulp-paper-bat-2014 |
| physical_balances | P1 | For conserved elemental carbon: measured inputs = all physical carbon outputs + stock change; reactions change species/phase, not an elemental-carbon offset. Dry-solids and water ledgers separately include independently measured or supported transformations and actual oxygen/reaction-water terms; internal returns cancel. Carbon outputs include fibre, residues, wastewater and gaseous species with their own elemental-carbon fractions. Disclose balance residual and measurement uncertainty; do not force closure by inventing CO2 or yield. Keep the allocation burden ledger separate. | cp_feed; cp_product; cp_water; cp_residues; cp_air | Unallocated physical balances and explained residual | eu-pulp-paper-bref-2015 |
| liquid_waste_mass | untreated_effluent | Native as-sent liquid mass m = sum(V_i m3 × measured rho_i kg/m3), or calibrated directly measured mass; normalize m/Q once. Water mass = m × measured water fraction; keep volume for treatment/indicator loads and do not assume density1000 or all wastewater is water. | cp_water; actualT/composition/density; Q | Nativekg per 1kg reference flow | eu-pulp-paper-bref-2015 |
| road_freight_quantity | inbound_freight | F = sum(payload kg × actual km); 1 t*km = 1000 kg*km. Native service amount is F/Q once, with actual load/empty-return/provider-gate convention and no duplicate fuel/transport. | cp_transport; Q | Nativekg*km per 1kg reference flow | eu-pulp-paper-bref-2015 |
| purchased_net_heat | purchased_heat | NetMJ = (sum(delivered steam kg × common-reference enthalpy kJ/kg) - sum(return condensate kg × return enthalpy kJ/kg) - losses kJ not already in the delivery measurement)/1000; normalize once by Q. Verify explicit provider net-heat versus source NCV reference correspondence; no heating-value/efficiency default. | cp_utilities; state/enthalpy/reference agreement; Q | Verified netMJ per 1kg reference flow | eu-pulp-paper-bref-2015 |
| final_water_component | final_liquid_water | M_liquid = sum(V_liquid_i × measured rho_liquid_i) or measured final liquid mass; M_water = sum(M_liquid_i × measured water fraction_i); V_water = sum(M_water_i / compatible rho_water_i). Density states and water-content method are independently validated; native V_water/Q once. Keep bulk V_liquid for COD/TSS/N/P loads; do not assume all effluent is water or a default density of 1000 kg/m3. Reconcile actual treatment branches and receiving media. | cp_water; cp_discharge; water fraction; compatible density; Q | Actual water-component m3 per 1 kg reference flow | eu-pulp-paper-bref-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | P1 | Confirm actual route and each atomic flow; unresolved UUIDs remain specific named exchanges and block claims of complete identity linkage, not silently zero quantities. | Direct identity read and supplier/site evidence |
| quality_period | P1 | Match inputs, outputs, emissions and stock changes to the same site, grades and campaign. Preserve start/stop, off-spec production and data gaps. Do not average non-deinked or nonwood routes into this reference. | All collection protocols |
| quality_evidence | P1 | Use actual foreground amounts; published historical or producer cases do not establish a universal dose, fibre yield, energy or water factor. Report detection limits, substitutions, uncertainty and missing flow/quantity compatibility. | eu-pulp-paper-bref-2015; epa-ap42-gas-2026 |
| quality_allocation | P1 | Retain full physical flows and stage links alongside burden allocation; document receiver function and recycled-input convention and test credit double counting. | eu-pef-annex-2021 |

## 9. Validation Rules

Reject a data package that lacks reference qualifiers, measured accepted output Q, actual input composition or dry-fibre/dry-solids yield basis. Check every exchange denominator against 1 kg qualified delivered pulp and every internal transfer at both ends. Verify utilities by stage, gas/steam supplier quantity definitions and electricity voltage; unresolved steam basis or NOx-equivalence stays pending.

Check that coarse reject, deinking sludge, treatment sludge and wastewater have independent quantities and receivers; final direct-water emissions apply only to the on-site treatment route. Elementary identities require the actual medium/submedium and species or analytical indicator. The listed unspecified outdoor-air/water compartment is not a substitute for a known specific receptor: select and direct-read the matching subcompartment for that dataset. No correction flow is accepted. PM2.5, PM2.5–PM10 and >PM10 are disjoint; do not add a cumulative PM10 or total dust row on top. Retain biogenic CO2 in LCI. Source-specific toxic substances require separate rows even when COD/TN/TP are reported. Missing measurement, identity, speciation or applicable flow coverage remains incomplete, with checks performed/skipped and reasons disclosed.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified route-specific pulp supply to papermaking after review of actual data and links |
| excluded_use | Non-deinked/nonwood/dissolving pulp, wet-lap delivery, generic fibre recipe, carbon-neutrality or EF-compliance claim |
| required_metadata | Site and period; paper composition/grade; measured reference state; stage graph; utility/treatment route; allocation convention; supplier backgrounds |
| required_quality_disclosure | Calibration and assays; balances and yields; uncertainty; missing UUIDs; source metadata caveats; quantity-basis compatibility; review and coverage status |
| update_trigger | Feed grade, ink/contaminants, deinking/bleaching, dried delivery, utility/treatment, supplier identity or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eu-pulp-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF, 2015, Chapter 6, sections 6.1.2–6.2.2, printed pp. 550–564; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Recovered-fibre routes, washing/bleaching, quality, residues and water loops; historical mill quantities are not defaults. |
| eu-pulp-paper-bat-2014 | official_guidance | Commission Implementing Decision 2014/687/EU, BAT 8, 10, 12–16 and RCF BAT 42–46; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014D0687 | Water monitoring and separately recorded wastes/treatment. BAT-AELs are not recipes or generic LCI factors; legal applicability is not established here. |
| eu-pef-annex-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I sections 4.4.8 and 4.5, PDF pp. 49, 63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Recycling burden/credit disclosure and multifunctionality hierarchy only; no default CFF factors or EF-compliance claim. |
| epa-ap42-gas-2026 | official_guidance | US EPA AP-42, section 1.4 Natural Gas Combustion, header 10/26, sections 1.4.1–1.4.3; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Conditional natural-gas boiler emission species and source-test caveats; no emission factors, gas heating values or sludge/biomass-combustion factors adopted. |
| sustana-envirotouch | literature | Sustana official EnviroTouch product page, retrieved 2026-10-11; https://sustanasolutions.com/products/sustana-envirotouch/ | One producer corroborates recycled, non-chlorine-bleached market fibre and ash/stickies quality relevance; not a recipe or universal yield. |
| sustana-dry-bales-2024 | literature | Sustana, De Pere mill dry-bale equipment report, 1 May 2024; https://sustanasolutions.com/sustana-shares-with-paper360-the-de-pere-mill-optimization-for-production-of-dry-bales/ | Site-specific evidence that wet-lap and dried delivery states require different drying boundaries; no moisture or capacity default adopted. |
