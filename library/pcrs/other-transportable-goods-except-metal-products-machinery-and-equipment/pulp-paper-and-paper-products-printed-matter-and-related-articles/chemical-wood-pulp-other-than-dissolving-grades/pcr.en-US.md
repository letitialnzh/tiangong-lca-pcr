---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.chemical-wood-pulp-other-than-dissolving-grades
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Oxygen-delignified ECF bleached softwood kraft market pulp

## 1. Scope and Applicability

This method covers one non-dissolving, virgin softwood market-pulp route: received debarked pine/spruce pulpwood chips, continuous kraft cooking, washing/screening, oxygen delignification and D-EOP-D ECF bleaching, followed by steam drying and bale delivery at the mill gate. It includes chemical recovery and site utilities as one integrated foreground unit. Supplier chemistry and any conditional auxiliaries must be explicitly declared; they are not optional route selectors. The reference UUID is broader than the method: applicability follows this physical definition, not the CPC label. [jrc-pulp-bref-2015; metsa-pulp-production]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.chemical-wood-pulp-other-than-dissolving-grades |
| classification_refs | CPC 3.0 32112; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Dried non-dissolving bleached pine/spruce kraft market-pulp sheets in bales |
| excluded_products | Unbleached; sulphite; soda; dissolving-grade; hardwood; bamboo; nonwood; mechanical/semichemical; recycled; wet integrated pulp; paper |
| representative_product | Oxygen-delignified D-EOP-D ECF bleached softwood kraft pulp |
| production_route | Continuous kraft digestion; oxygen delignification; D-EOP-D; on-site methanol/sulphuric-acid vacuum ClO2 generation; indirect liquor evaporation/recovery/CHP and lime cycle; purchased oxygen; natural-gas kiln/auxiliary fuel; river-water abstraction and biological treatment to fresh water |
| market_state | Dried, cut and baled pulp at mill gate; measured shipment dryness, expressed as air-dry equivalent |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply papermaking-grade bleached softwood kraft fibre as dried market pulp |
| How much | 1 kg air-dry equivalent, containing 0.9 kg dry pulp solids |
| How well | Accepted non-dissolving grade; declared species blend, brightness/test method, kappa/viscosity where specified, contamination and bale condition; no universal specification value |
| How long or cycle | One mill-gate supply; no use lifetime is implied |
| reference_flow_link | pulp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Pine/spruce shares and origin; virgin non-dissolving grade; continuous kraft; oxygen stage; D-EOP-D ECF; actual chemical formulations; brightness/kappa/viscosity test basis; bale net wet mass and dry fraction; AD-equivalent basis; site/year; recovery and fuel configuration; imported/exported power voltage; supplier volume definitions; river/catchment and receiving medium; by-product/treatment destinations |

Declare all required qualifiers in the dataset. One ADt is 1,000 kg air-dry-equivalent pulp at 90% dry matter, a reporting conversion, not a claim that every shipment has exactly 10% moisture. Supplier/background output mass must use a compatible moisture basis. [jrc-pulp-bref-2015, §2.2.2.2, printed p49]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference output is 1 kg at the stated AD-equivalent basis. Measure net shipment mass and lot dry fraction using cp_output; sum accepted dry pulp solids and divide by 0.9 to obtain accepted reference-flow mass. Exclude wire, non-pulp packaging, rejected pulp and internal wrapping diversion. |
| `volume_compatibility` | chips; gas; oxygen | Volume | m3 | Preserve the actual Tiangong reference property. Chips require solid/bulk convention and measured packing; gases require supplier T/P, composition and normal/operating-volume equivalence. Quantity or background link stays pending when correspondence is unknown. |
| `chemical_basis` | mass-referenced solid, hydrate and liquid chemical inputs | Mass | kg | Record solid, hydrate or solution identity and actual assay. A 30% H2O2 solution is counted as solution kg; other chemicals must use the declared supplier active/solution reference basis, with carrier water reconciled once. Internal liquor is not make-up. Gas reagents such as oxygen preserve their native Volume/m3 reference under volume_compatibility; supplier purity/species mass may be an auxiliary composition ledger but is not a replacement mass exchange. Actual reference conditions and provider quantity correspondence remain required. |
| `electricity_basis` | power | Net calorific value | MJ | Convert actual metered electrical kWh using 3.6 MJ/kWh; do not apply boiler efficiency or primary-energy factors to this exchange. Imported and exported power are separate measurements. |
| `steam_balance` | internal steam ledger | Delivered heat | MJ | Measure steam mass, inlet/outlet pressure, temperature, condensate return and enthalpy differences; retain producer/consumer balances. Steam MJ property alone never proves net delivered heat. Unknown enthalpy prevents declaring heat-balance closure. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received debarked untreated pine/spruce pulpwood chips at mill gate; actual chemicals and utilities at declared supply points |
| starting_condition_role | Foreground integrated market-pulp manufacture, not paper manufacture |
| product_classification_scope | CPC 3.0 32112; narrower |
| recursive_input_rule | Internal same-grade pulp rework stays inside the unit and is not netted against final output. Purchased same-category pulp is outside this virgin-chip route and requires a separately assessed method/dataset. |
| upstream_dataset_requirement | Actual wood species/moisture and chip production; reagent state/assay; gas volume; oxygen normal volume; grid region/voltage/year; transport and external waste destinations. Identity UUID alone does not establish dataset suitability. |
| disclosure | Site, reporting year, route, capacity/utilisation, product quality, recovery/CHP, freshwater catchment/outlet, all imports/exports, conditional auxiliaries, inventory gaps and cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | mill foreground | Include received debarked pine/spruce chips, screening/rechipping, continuous kraft digestion, brownstock washing/screening, oxygen delignification, D-EOP-D ECF bleaching with interstage washing, final screening, dewatering, steam drying, cutting and baling. Other pulping/bleaching routes require a different methodology. | jrc-pulp-bref-2015 |
| `boundary_recovery` | chemical and utility recovery | Include indirect multi-effect black-liquor evaporation, condensate stripping, recovery boiler/CHP, smelt dissolution, green-liquor clarification, recausticising, lime-mud washing/reburning and non-condensable gas collection/combustion. Include water/biological effluent treatment, pollution controls, on-site methanol/sulphuric-acid vacuum ClO2 manufacture and gas-fired kiln/auxiliary heat. No purchased steam or heat is selected in this route. | jrc-pulp-bref-2015; epa-chemical-pulping-1990 |
| `boundary_internal` | internal physical links | Keep weak/concentrated black liquor, white/green liquor, lime mud/CaO, ClO2 solution, condensate, process steam, pulp transfers and captured NCG inside the integrated mill unit. cp_balance keeps each sending/receiving link on the same amount, state and time basis. Internal black liquor is neither purchased fuel nor a zero-burden waste output. | jrc-pulp-bref-2015 |
| `boundary_upstream` | supply and external treatment | Foreground starts at received chips; forestry, harvesting, debarking/chipping outside the site, input transport and upstream chemical/electricity/fuel supply remain linked upstream activities, not omitted burdens. Include actual transport distances/modes and external waste treatment in the completed product system. Exclude downstream papermaking, customer transport after gate, use and end-of-life from the foreground. | jrc-pulp-bref-2015 |
| `boundary_completeness` | actual auxiliaries | This inventory is a mandatory screening list, not permission to omit actual process aids, antifoams, lubricants, cleaning chemicals, nutrients, refrigerants, other emissions or mineral-carbon inputs. Add each confirmed exchange as one specific row with actual composition, UUID audit and primary measurement; do not fold it into a listed flow or infer zero. Additional chemistry must not alter the declared pulping/bleaching route. | jrc-pulp-bref-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| kraft_market_mill | Integrated softwood kraft market-pulp mill | required | Declared continuous kraft / oxygen / D-EOP-D route only | foreground production with recovery, utility and effluent systems | 1 kg reference flow |

The unit aggregates manufacture and baling so the same reference UUID is not duplicated as intermediate and final outputs. Keep stage measurements and the physical process graph separately:

| Stage | Internal physical links and records |
| --- | --- |
| wood | Chips → screening/rechipping → digester; moisture, dry wood and rejects |
| fibre | Continuous cooking → wash/screen → oxygen/post-wash → D-EOP-D/interstage wash → final screen → dewater/dry/cut/bale; stage dry-fibre throughput and losses |
| recovery | Weak black liquor → indirect evaporation/stripping → recovery boiler → smelt/green liquor → clarification/causticising → white liquor → cooking; lime mud → kiln → CaO → causticising |
| bleach_chemical | Sodium chlorate + methanol + sulphuric acid → vacuum ClO2 preparation → absorbed ClO2 solution → D stages; salt cake → verified recovery destination |
| utilities | Recovery boiler/CHP and gas auxiliary boiler → steam headers → cooking/evaporation/dryer → condensate return; generator → internal demand and separate export meter |
| environment | Collected NCG → actual combustor → final air outlet; river intake → treatment/use → biological effluent treatment → freshwater outlet; sludge/solids → actual reuse/treatment |

This is a routing graph, not a stoichiometric recipe. Black-liquor solids/concentrations, bleach charges, yield, steam demand and efficiency are measured at the site; historical BREF/AP-42 examples are not defaults. The integrated-unit inventory below records only external exchanges. Conditional cards require measured presence/non-occurrence, not a choice between incompatible production routes. [jrc-pulp-bref-2015; epa-chemical-pulping-1990]

### Process: Integrated softwood kraft market-pulp mill (`kraft_market_mill`)

#### Inputs

##### Product flows

###### Debarked coniferous pulpwood chips (`chips`)

Purchased untreated pine/spruce chips at the mill gate; exclude adhesive-treated, recycled or impregnated wood. Collect species shares, supplier, wet mass, dry fraction and screened losses. The Volume/m3 UUID establishes neither solid nor bulk volume: measure packing and volume convention and obtain the supplier dataset reference-volume definition; an unknown convention leaves the background link incomplete.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Sodium hydroxide (`naoh`)

External industrial solid NaOH make-up and extraction alkali only; do not record circulating white-liquor NaOH again. Record assay and dissolved carrier water separately in the water balance; an aqueous purchased formulation requires its own confirmed identity rather than treating solution kg as solid NaOH kg. Apply this selected industrial solid identity only when actual supplier assay and state are compatible with its 95%–98% purity metadata. The range constrains identity applicability, not the mill dose or an assumed measured assay; incompatible grades/formulations require another reviewed identity.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Sodium sulfide make-up, industrial Na2S (`nas`)

Conditional on actual external Na2S additions; recovered sulphide in white liquor is internal. Record hydration, assay and purchased mass. The available hydrometallurgical recycling-route record is incompatible and is not adopted.

- Selected flow: Sodium sulfide make-up, industrial Na2S
- Flow property / unit: Mass / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Anhydrous sodium sulfate (`nasulfate`)

Conditional external anhydrous Na2SO4 make-up to recovery; record assay and issue quantity. Salt cake generated by on-site chlorine dioxide preparation and returned to recovery is an internal flow, not a second external input.

- Selected flow: Sodium sulfate `eb53c69e-ff4b-47f4-b8b3-879d82e2f9bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Calcium oxide make-up (`lime`)

External calcined CaO make-up only; record form, CaO assay and mass. Regenerated lime and circulating lime mud are internal. Do not assume kiln carbonate carbon is all fossil: distinguish wood-derived carbonate carbon, externally introduced inorganic carbon and fuel carbon in cp_balance.

- Selected flow: Calcium Oxide `61666bfa-0357-473f-b080-dcc6e7ac560a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Industrial oxygen (`oxygen`)

Purchased oxygen for oxygen delignification and EOP reinforcement; record purity, temperature, pressure, dry/wet basis, meter volume and supplier normal-condition definition. Do not treat the dataset secondary Mass coefficient as an operating density or an unqualified conversion. On-site oxygen manufacture is outside this purchased-oxygen route. The actual purchased-oxygen normal-volume identity and volume meter protocol remain applicable only with confirmed supplier purity/reference conditions and gas volume correspondence; neither the documented secondary mass coefficient nor another mass-based cryogenic oxygen identity proves actual operating density or supplier route.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_utility`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Magnesium sulfate heptahydrate (`mg`)

Conditional verified MgSO4·7H2O addition protecting pulp during oxygen treatment; record hydration, assay and supplied mass. Do not use this hydrate UUID for anhydrous MgSO4 or another magnesium salt.

- Selected flow: Magnesium Sulfate Heptahydrate `099ef12e-1a6c-4cfc-a320-fe42bd363a91`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Hydrogen peroxide solution, 30% (`peroxide`)

EOP reinforcement with the verified 30% aqueous formulation: record delivery assay and solution kg, not active H2O2 kg. The percentage identifies the material, not a dose or a universal mill concentration; different purchased strengths require separately verified identities and quantities.

- Selected flow: Hydrogen peroxide (30%) `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Sodium chlorate (`chlorate`)

Purchased sodium chlorate feeding on-site methanol/sulphuric-acid vacuum ClO2 generation. Record solid assay and mass; if delivered in solution, explicitly reconcile active chemical and carrier water with the supplier reference amount before background linking.

- Selected flow: Sodium chlorate `763dbb4e-a338-4348-b2a8-bf07b6bf7b47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Methanol (`methanol`)

Purchased fossil industrial methanol used as the ClO2 reducing agent; it is not default supplementary boiler fuel. Exclude biomethanol from this UUID route. Separately record recovered biogenic condensate methanol inside the mill carbon balance.

- Selected flow: Methanol (market average) `adbc8430-7937-4ade-b7a5-cb1797dda661`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Sulfuric acid (`acid`)

Industrial sulphuric acid for vacuum ClO2 preparation and, if operated, tall-oil soap acidulation; allocate actual issue records by operation. Record concentration and the supplier active/solution reference basis; unknown correspondence is incomplete. This selected industrial acid identity declares 93%–98% concentration: require compatible actual supplied solution assay, composition and supplier solution-versus-active mass reference. Those figures do not prescribe the mill recipe or prove actual concentration; different formulations require separate identity review.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Natural gas, gaseous (`gas`)

Meter external pipeline gas to the lime kiln, start-up burners and the optional gas-only auxiliary boiler separately. Use Volume/m3; record T/P, dry/wet composition, compressibility, calorific-value convention and supplier background m3 definition. Do not infer density from the secondary Mass coefficient. Unknown reference-volume compatibility is pending.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_utility`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Imported medium-voltage electricity (`power`)

Gross imports at 1–35 kV user-side MVAC; keep imports separate from exports and self-generation. The verified property is Net calorific value, not a generic energy label; convert electrical kWh to MJ using 3.6 MJ/kWh. Match region/year, voltage and supply losses before background linkage. Raw supply geography is CN; verify actual provider/geography/year/grid mix and metering/loss compatibility before background linkage, without a China or generic-world default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_utility`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

###### Steel baling wire (`wire`)

Actual cylindrical steel wire used to secure dried pulp bales; measure wire kg and declare alloy, coating and supplier. This is not flat steel band. Wrapping sheets made from the same pulp are an internal material diversion measured in cp_balance, not a duplicate reference-product output.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Urea (`urea`)

Conditional solid industrially synthesised urea dosed as a wastewater-treatment nutrient; record purity, purpose and mass. No universal dose is assigned. SNCR use must be separately identified if present.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Phosphoric acid nutrient solution (`phosacid`)

Conditional purchased phosphoric-acid nutrient for biological treatment; record solution strength, mass and active P. A weak-acid Central Prayon intermediate does not establish this delivered formulation. The broad finished phosphoric-acid Product identity is used only as the physical locator for this actual industrial nutrient formulation; it specifies no concentration or compatible supplier background. Keep delivered solution kg, active H3PO4/P and carrier water separate, and obtain the supplier dataset reference-mass definition before linking or normalizing against that basis. Unknown active-versus-solution correspondence remains pending; no 85% strength or pure-acid/solution mass conversion is assumed. Actual other ingredients require separate atomic identities and collection.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Ferric chloride (`ferric`)

Conditional verified solid FeCl3 for water treatment/coagulation; record assay and supplied mass. A formulated aqueous or hydrated product needs its own identity and carrier-water reconciliation.

- Selected flow: ferric chloride `d29463c7-fbbf-4811-b122-a651f205d603`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

###### Non-ionic polyacrylamide (`pam`)

Conditional non-ionic PAM for actual sludge conditioning; record grade, ionic character, active solids and supplied form. Do not expand this non-ionic identity to cationic or anionic copolymers.

- Selected flow: Polyacrylamide `f8ff6647-6bb3-4b72-9830-60a7a86203c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_material`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-bref-2015`

##### Elementary flows

###### River water abstraction (`river`)

Gross river-water abstraction into on-site treatment/cooling/process systems in m3; identify river, catchment and intake. Include treatment chemicals and electricity. Record returned water separately; do not net it against abstraction or count internal recirculation as another abstraction.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

#### Outputs

##### Product flows

###### Bleached kraft market pulp (`pulp`)

One accepted saleable output only, covering dewatering, steam drying, cutting and baling in the same mill unit. The broad non-dissolving product UUID is physically limited here to virgin pine/spruce kraft pulp, oxygen delignification and D-EOP-D ECF bleaching. Actual wet mass and dry matter remain in the physical ledger; the model output is 1 kg air-dry equivalent at 90% dry matter, excluding baling wire and wrapping diversion.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `jrc-pulp-bref-2015`; `metsa-pulp-production`

###### Crude tall oil (`tall`)

Conditional externally delivered unrefined acidulated tall oil; record measured wet mass, water and acidulation recovery. The generic tall-oil identity is limited to this unrefined state; it does not establish a refined fraction or a burden-free co-product.

- Selected flow: tall oil `923fd725-d53a-438c-af51-24064c0778f5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_output`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `jrc-pulp-bref-2015`

###### Crude sulfate turpentine (`turp`)

Conditional recovered crude sulphate turpentine delivered outside the mill; record quantity, water, purity and recipient. Broad turpentine UUID has no contrary route; this PCR does not cover gum distillation or refined terpene fractions.

- Selected flow: turpentine `eaf4b5df-7efb-4594-bf42-d78974276fc2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_output`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `jrc-pulp-bref-2015`

###### Net exported electricity from kraft recovery turbine (`exportpower`)

Conditional measured export at the grid delivery meter; record voltage, transformer losses, generator auxiliary use and fuel shares. National Chinese biomass-at-plant 35–330kV identity does not establish this specific mixed kraft-recovery export; UUID remains unresolved. Do not subtract exports from grid purchases.

- Selected flow: Net exported electricity from kraft recovery turbine
- Flow property / unit: Electrical energy / MJ
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_utility`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-pulp-bref-2015`

##### Waste flows

###### Green-liquor clarification dregs (`dregs`)

Green-liquor clarification solids actually exported to treatment; include wet mass, dry solids, sodium/calcium content, hazardous properties and recipient. Wine-lees records are incompatible. The broad industrial solid-Waste identity is restricted to this one separately collected actual stream from the stated operation. Keep its measured wet mass, dry solids, water, chemical/salt/fibre composition, contamination, hazardous characteristics, stock changes and specific receiver/provider acceptance independently traceable. Same UUID on other rows does not merge streams, convert internal recycling to external waste, establish a disposal/recovery route, allocate physical mass or prove matched treatment burdens. A liquid discharge or a saleable product requires a separately applicable identity.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Causticising lime grits (`grits`)

Actual discarded lime slaker/causticiser grits; record wet mass, dry solids, composition and treatment. Keep circulating lime mud inside the recovery balance. The broad industrial solid-Waste identity is restricted to this one separately collected actual stream from the stated operation. Keep its measured wet mass, dry solids, water, chemical/salt/fibre composition, contamination, hazardous characteristics, stock changes and specific receiver/provider acceptance independently traceable. Same UUID on other rows does not merge streams, convert internal recycling to external waste, establish a disposal/recovery route, allocate physical mass or prove matched treatment burdens. A liquid discharge or a saleable product requires a separately applicable identity.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Purge ash from kraft recovery combustion (`ash`)

Only ash removed from the recovery/auxiliary gas-combustion systems and exported, with source, salts, moisture and recipient declared; ESP ash recycled to liquor is internal, not waste export.

- Selected flow: ash `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Dewatered kraft-mill biological wastewater sludge (`sludge`)

Actual off-site sludge transfer after on-site wastewater treatment; record dry solids, wet mass, contamination, treatment and transport. Internal combustion is measured in the mill balance and its emissions are counted at the actual outlet. The broad industrial solid-Waste identity is restricted to this one separately collected actual stream from the stated operation. Keep its measured wet mass, dry solids, water, chemical/salt/fibre composition, contamination, hazardous characteristics, stock changes and specific receiver/provider acceptance independently traceable. Same UUID on other rows does not merge streams, convert internal recycling to external waste, establish a disposal/recovery route, allocate physical mass or prove matched treatment burdens. A liquid discharge or a saleable product requires a separately applicable identity.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

###### Kraft-pulp fibre screening rejects (`rejects`)

Only unrecovered fibre rejects exported off-site; distinguish knots returned to digestion, recovered good fibres, internally burned rejects and external transfer. Record solids, residual liquor and destination. The broad industrial solid-Waste identity is restricted to this one separately collected actual stream from the stated operation. Keep its measured wet mass, dry solids, water, chemical/salt/fibre composition, contamination, hazardous characteristics, stock changes and specific receiver/provider acceptance independently traceable. Same UUID on other rows does not merge streams, convert internal recycling to external waste, establish a disposal/recovery route, allocate physical mass or prove matched treatment burdens. A liquid discharge or a saleable product requires a separately applicable identity.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-bref-2015`

##### Elementary flows

###### Biogenic carbon dioxide (`co2bio`)

All wood-derived CO2 reaching outdoor air, including recovery combustion, biological treatment and the wood-carbon-derived share of lime-kiln carbonate decomposition. Reconcile carbon transfers before origin attribution; retain this LCI exchange even where a GHG reporting convention excludes it. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Fossil carbon dioxide (`co2fos`)

Fossil-fuel/reagent CO2 reaching outdoor air. Distinguish kiln fuel CO2 from carbonate process CO2. External mineral carbonate carbon, if introduced, requires separate documented origin accounting and a compatible specific flow, never silently relabelled as biogenic. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Fossil carbon monoxide (`cofos`)

Actual fossil-origin CO from gas burners and other verified fossil-carbon sources; split measured total CO by source-specific evidence, not arbitrary fuel energy shares. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Biogenic carbon monoxide (`cobio`)

Actual wood-origin CO from recovery combustion; reconcile separately from fossil CO and any unreconciled source fraction. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Nitrogen oxides (`nox`)

NOx at actual final outlets, excluding N2O. Mass/kg alone does not define NO2-equivalent mass: preserve monitor convention and obtain flow/LCIA quantitative-definition compatibility; until confirmed, dataset linkage is pending. Do not additionally inventory the same NO and NO2 mass. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Sulfur dioxide (`so2`)

Actual SO2 from recovery boiler, lime kiln and treated NCG combustion; do not replace with aggregate sulfur oxides or TRS. Convert any sulphur-basis monitor result using declared stoichiometry. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Hydrogen sulfide (`h2s`)

Residual H2S after gas collection/treatment and any documented fugitive releases; internal captured NCG is not yet an emission. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Methyl mercaptan (`mercaptan`)

Speciated CH3SH to outdoor air, including documented fugitive sources; a TRS-as-S result is not automatically this species mass. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: methyl mercaptan `fe0acd60-3ddc-11dd-9e59-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Dimethyl sulfide (`dms`)

Speciated dimethyl sulfide (CAS 75-18-3); do not use pesticide near-name records. Avoid double counting with total VOC or TRS. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: dimethyl sulfide `4d9a8790-3ddd-11dd-8e3b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Dimethyl disulfide (`dmds`)

Speciated dimethyl disulfide (CAS 624-92-0); thiram is another substance and cannot substitute. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: dimethyldisulfide `fe0acd60-3ddc-11dd-ac1e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Particles at or below 2.5 micrometres (`pmfine`)

Measured final discharged PM2.5 bin; actual sodium/calcium salts and other dust are represented in the appropriate size bin. No automatic positive rate is assigned. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Particles above 2.5 up to 10 micrometres (`pmcoarse`)

Disjoint bin PM10 minus PM2.5 only where the same sampling period/method supports subtraction; do not sum cumulative PM10 with PM2.5. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Particles above 10 micrometres (`pmover`)

Disjoint bin total particulate minus PM10 only for compatible measurements; no invented size fractions. Unknown size-resolved emissions remain incomplete rather than zero. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Fossil methane (`ch4`)

Actual fossil-origin methane slip/leakage from the site gas system; upstream supply leakage belongs to the upstream dataset, not this foreground exchange. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Biogenic methane (`ch4bio`)

Actual wood-carbon-origin methane from recovery/biological treatment where supported by site data; conditional measurement does not imply a default positive emission. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Nitrous oxide (`n2o`)

Actual N2O from site combustion/treatment if present; retain separate from NOx and verify laboratory species basis. No emission factor is adopted. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Water vapour to air (`vapour`)

Water actually evaporated to outdoor air during drying, recovery and treatment; reconcile with moisture and net water balance, without treating recycled process steam as an external input. Air subcompartment is unspecified, not indoor or long-term. If actual stack height/location is known, retain it and verify the corresponding exact compartment identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-bref-2015`; `epa-chemical-pulping-1990`

###### Chemical oxygen demand to fresh water (`cod`)

Measured treated-effluent COD in kg O2, with the laboratory oxidation method declared. It is an oxygen-demand indicator, not the mass of a single organic chemical; do not add COD and BOD as independent pollutant masses or let it conceal known hazardous species. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Biological oxygen demand to fresh water (`bod`)

Measure BOD with incubation duration, temperature and inhibition conditions declared; a BOD5 assay is not interchangeable with ultimate BOD without evidence. Quantitative compatibility with the flow/LCIA definition must be checked. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Total nitrogen to fresh water, excluding N2 (`nwater`)

Final-effluent kg N excluding dissolved molecular N2; preserve laboratory digestion basis and avoid adding speciated N again to the same sum. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Total phosphorus to fresh water (`pwater`)

Final-effluent kg P; preserve digestion basis, distinguish P from phosphate mass, and prevent overlapping total/speciated burdens. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Chlorate to fresh water (`chloratewater`)

Final-effluent chlorate ion ClO3- mass (CAS 14866-68-3), not sodium chlorate mass. Do not count internal bleach liquor as a receiving-water emission. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary.

- Selected flow: chlorate `4d9a8790-3ddd-11dd-9b3f-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Adsorbable organic halogen compounds to fresh water (`aox`)

Measured AOX with halogen-equivalent definition and analytical method declared; retain this as a separate analytical sum indicator, not a chemical recipe. Confirm whether kg is expressed as Cl and that LCIA/background semantics agree; unknown equivalence is pending. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary.

- Selected flow: adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Suspended solids to fresh water (`tss`)

Measured suspended solids after treatment in kg dry residue, with filter and drying method recorded. Unspecified-water identity is not adopted as a precise fresh-water identity. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary.

- Selected flow: Suspended solids to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

###### Liquid water discharged to river (`waterreturn`)

Actual liquid-water return after on-site treatment/cooling to the identified fresh-water receiving river in m3. Resource-water and rain-water flows are not substitutes; no pulp effluent is represented by a manganese-residue washing wastewater record. This route requires discharge to fresh water; a sewer/sea-discharge mill is outside this receiving-medium boundary. The selected Water elementary identity has CAS7732-18-5 and the explicit Emissions to fresh water medium. Use only the actual separately metered liquid return at the identified river boundary, not resource abstraction, rainfall, vapour, internal recycling or a mass-density default. Retain outlet/time/temperature and measured volume independently of each pollutant load; this locator does not establish effluent treatment burdens or receiving-water impact compatibility. Retain the entire measured final mixed-effluent discharge volume separately for pollutant concentration×volume loads and the physical effluent ledger. It is not automatically the H2O reference-flow quantity. Before populating waterreturn, prove the selected flow and LCIA water-quantity convention for the actual receiving medium and outlet state. When that convention requires H2O-component or H2O-equivalent volume, establish the actual water component from measured mixture composition/fraction and mass or documented matched mixture-density/state evidence, then use a demonstrated compatible H2O density/state/reference conversion. State the amount definition and temperature/pressure/phase basis; assume neither additive component volumes, a universal density nor a 1000 kg/m3 factor. If direct bulk-volume use is permitted, retain explicit proof of that convention and scope; otherwise an unresolved convention/composition/state bridge keeps the Water quantity pending while bulk effluent volume and pollutant loads remain available.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured period exchange / accepted reference-flow mass; follow `cp_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_internal` | recycled liquor and steam | Internal black liquor, recovered alkali, condensates, steam and returned fibres carry the existing process burdens through their links. No waste credit, external input burden or allocation factor is created for an internal transfer. | jrc-pulp-bref-2015 |
| `allocation_separate_ledgers` | physical and burden accounting | Keep the unallocated mass/water/carbon/energy process ledger separate from the allocated environmental-burden ledger. Tall oil, turpentine and power retain their full measured physical outputs; never multiply co-product physical masses by the pulp allocation share. The normalized pulp reference remains 1 kg. | eu-pef-allocation-2021 |
| `allocation_hierarchy` | joint burdens | First directly assign separately measured operations, such as tall-oil acidulation or export power transformation. Investigate subdivision/system expansion; for a product-specific attributional dataset, justify any rejection of expansion. Allocate remaining joint burdens by a demonstrated causal physical relationship; if none is defensible, use documented same-period gate-value shares with sensitivity. No fixed allocation share or default credit is supplied. | eu-pef-allocation-2021 |
| `allocation_wastes` | residues and treatment | Classify each actual external residue by documented destination and applicable product/waste status. Treatment and transport burdens remain explicit. A recovery or sale intention alone does not establish zero burden or avoided production. Avoid simultaneous allocation and displacement credit for the same co-product. | eu-pef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | kraft_market_mill | saleable pulp and external co-products | shipment and quality records | timestamp; batch; grade; species blend; gross/tare/wire/wrapping masses; net wet mass; dry fraction; product tests; stock change; tall oil/turpentine quantity and condition | Calibrated scale and dispatch/stock reconciliation; representative pulp lot oven-dry testing to constant mass, with documented temperature, sampling, volatile-loss assessment and repeatability; retain wet mass and dry solids separately. Aggregation: Sum accepted net dry pulp solids / 0.9 to derive reference-flow mass; each external co-product retains its measured amount per 1 kg reference flow. | kg; dry fraction | Each lot; monthly reconciliation | 12 consecutive representative months; justify a complete shorter start-up/campaign period separately | All declared mill stages and actual boundary outlets | per 1 kg reference flow | Calibration; timestamps; test methods; reconciliation; uncertainty and gap records |
| cp_material | kraft_market_mill | specific material inputs | receipts issues and stock records | flow identity; supplier; formulation/assay; hydrate; route; wet/dry mass; volume/packing; opening/closing stock; issue by stage | Reconcile actual receipts plus opening stock minus closing stock and transfers; calibrate scales/volume instruments and retain supplier SDS/specifications and actual dose logs. Aggregation: Sum actual external material use; divide each atomic flow by accepted reference-flow mass, per 1 kg reference flow; circulating recovery chemicals excluded from external use. | kg; m3; assay | Each receipt/issue; monthly | 12 consecutive representative months; justify a complete shorter start-up/campaign period separately | All declared mill stages and actual boundary outlets | per 1 kg reference flow | Calibration; timestamps; test methods; reconciliation; uncertainty and gap records |
| cp_utility | kraft_market_mill | gas oxygen and electricity | meter and supplier records | meter id; stage; imports; exports; generator; kWh; m3; temperature; pressure; composition; dry/wet basis; compressibility; supplier reference conditions; voltage; losses | Calibrated separate boundary meters, stage submeters and supplier bills; reconcile grid imports/export/self-generation and gas/oxygen reference volumes. Measure internal steam enthalpy separately in cp_balance. Aggregation: Sum each external metered exchange on its verified reference-unit basis / accepted reference-flow mass, per 1 kg reference flow; no import-export netting. | kWh; MJ; m3 | Continuous totals; monthly | 12 consecutive representative months; justify a complete shorter start-up/campaign period separately | All declared mill stages and actual boundary outlets | per 1 kg reference flow | Calibration; timestamps; test methods; reconciliation; uncertainty and gap records |
| cp_water | kraft_market_mill | river abstraction final effluent and water loads | flow meters and laboratory analyses | intake/outlet ids; basin; liquid volumes; concentration; COD oxidation method; BOD conditions; N/P basis; AOX halogen equivalence; chlorate species; filter/drying method; uncertainty; selected-flow/LCIA water-quantity convention and proof; actual outlet mixture composition/H2O fraction; component mass; measured matched mixture density where used; temperature/pressure/phase; compatible H2O density/state/reference conversion and uncertainty | Measure gross intake and final freshwater discharge independently. Flow-proportional composite sampling with accredited methods; declare monitoring frequency per permit/process variation; concentration × matched discharged volume, with actual units and non-detect rules. Preserve missing intervals and individual hazardous-species analyses. Keep the entire bulk effluent volume for these load integrals and physical records. Determine waterreturn only under its proven selected-flow/LCIA quantity convention, using measured component and matched density/state evidence where the convention needs H2O-equivalent volume; no assumed additive component volumes or universal density. Unknown correspondence leaves that Water quantity pending without discarding bulk discharge or independently supported pollutant loads. Aggregation: Sum intake, separately recorded bulk discharge, convention-compatible waterreturn quantity where proven, and each final-outlet analytical load separately / accepted reference-flow mass, per 1 kg reference flow; never count internal wastewater transfer as emission. | m3; mg/L; kg | Continuous flow; justified sampling schedule | 12 consecutive representative months; justify a complete shorter start-up/campaign period separately | All declared mill stages and actual boundary outlets | per 1 kg reference flow | Calibration; timestamps; test methods; reconciliation; uncertainty and gap records |
| cp_air | kraft_market_mill | final air emissions | stack fugitive and laboratory records | outlet; equipment; species/CAS; mass basis; wet/dry/normal gas conditions; concentration; exhaust flow; operating hours; captured NCG; abatement state; fuel/wood-carbon origin; PM cumulative/bin definitions; detection limits | Use CEMS, representative calibrated stack tests and justified fugitive-source measurements; match concentration and exhaust volume on the same conditions/time. Speciate reduced sulphur and carbon origin; identify disturbances, bypass and start-up. No historical AP-42 emission factor is adopted. Aggregation: Sum actual final-outlet mass for each atomic species/origin/non-overlapping particle bin / accepted reference-flow mass, per 1 kg reference flow. | kg; mg/m3; m3; hours | Continuous/representative tests including disturbances | 12 consecutive representative months; justify a complete shorter start-up/campaign period separately | All declared mill stages and actual boundary outlets | per 1 kg reference flow | Calibration; timestamps; test methods; reconciliation; uncertainty and gap records |
| cp_waste | kraft_market_mill | external waste transfers | weighbridge assay and treatment receipts | origin; wet mass; solids; salts/metals; contamination; hazard status; external treatment; transport; internal recycling/combustion | Calibrated transfer weights and representative dry-solids/composition tests; reconcile treatment receipts with site records and account for inventory changes. Aggregation: Sum each specific external waste stream / accepted reference-flow mass, per 1 kg reference flow; internal recovery material is not external waste. | kg; dry fraction | Each shipment; monthly | 12 consecutive representative months; justify a complete shorter start-up/campaign period separately | All declared mill stages and actual boundary outlets | per 1 kg reference flow | Calibration; timestamps; test methods; reconciliation; uncertainty and gap records |
| cp_balance | kraft_market_mill | internal physical links and allocation evidence | stage meter balance and joint-cost ledger | link id; sender/receiver; time; wet/dry mass; carbon/Na/S/Ca; liquor solids; internal fibre; steam T/P/enthalpy; condensate; inventory changes; uncertainty; co-product price at gate; allocation justification | Meter both ends of internal flows on the same basis and reconcile stocks; retain separate real physical and allocated environmental ledgers. Determine carbon provenance through wood/chemical/carbonate transfers, not stack location alone. Document directly assigned operations and justified joint-burden shares. Aggregation: Retain complete physical ledger before allocation; report internal balances per 1 kg reference flow only as a separate normalized view. Burden shares apply to joint environmental exchanges, not co-product physical masses. | kg; m3; MJ; currency | Stage totals; monthly and annual | 12 consecutive representative months; justify a complete shorter start-up/campaign period separately | All declared mill stages and actual boundary outlets | per 1 kg reference flow | Calibration; timestamps; test methods; reconciliation; uncertainty and gap records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `air_dry_output` | pulp | Q = sum(net accepted wet pulp mass × measured dry fraction) / 0.9; Q is accepted reference-flow kg. Keep actual shipment wet mass and dry solids in the separate physical balance. | cp_output | accepted reference-flow mass Q | jrc-pulp-bref-2015 |
| `normalize_period` | all external inventory rows | Exchange per 1 kg reference flow = verified period exchange amount / Q, using the same site, route and reporting period. No allocation is applied to physical co-product output amounts. | cp_output; cp_material; cp_utility; cp_water; cp_air; cp_waste | normalized external exchange | jrc-pulp-bref-2015 |
| `outlet_load` | final air/water species | Integrate matched concentration × discharged volume over time using recorded dimensional conversion; sum actual outlets. Preserve dry/wet gas and temperature/pressure definitions. Unknown intervals, non-detect rules or species-equivalent definitions require disclosure and review. Waterreturn is not one of these concentration×bulk-volume pollutant loads: preserve bulk effluent volume for the integrals, and derive its native m3 only under the proven selected-flow/LCIA water-quantity convention and measured H2O-component/density/state evidence where required by waterreturn/cp_water. Component volumes are not assumed additive and no universal density is introduced; unknown correspondence leaves the Water quantity pending. | cp_air; cp_water | period species/indicator load | jrc-pulp-bref-2015 |
| `electricity_convert` | power | Electrical MJ = metered kWh × 3.6; preserve the Net calorific value property of the verified product record. | cp_utility | electrical MJ |  |
| `joint_burden` | remaining joint environmental burdens | Assigned pulp burden = directly attributable pulp burden + justified pulp share × remaining joint burden. After direct assignment/subdivision, define the recipients of each same remaining joint burden explicitly. For a justified economic fallback, pulp share = V_pulp / (V_pulp + sum(V_c)), where V_pulp is contemporaneous pulp gate value and c is every applicable jointly produced co-product recipient at that same gate/period, with consistent quality, quantities and currency. The denominator includes pulp itself and all those recipients; require an admissible strictly positive total and recipient shares summing to one. Unsupported zero/negative value or recipient-set cases remain for review, not default shares. Preserve full physical outputs separately. | cp_balance; cp_output | pulp environmental-burden ledger | eu-pef-allocation-2021 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | kraft_market_mill | One verified route and product grade; declare species and actual chemicals. No classification-label recipe or automatic route mixing. | cp_output; cp_material |
| dq_balance | all flows | Physical mass/water/carbon/Na/S/Ca and energy balances with stocks and uncertainty; allocated burden ledger is separate. Reject duplicated black liquor, internal steam and pulp hand-off. | cp_balance |
| dq_primary | all external rows | Use real site data and assay; retain zero/non-occurrence evidence, non-detects and missing intervals. No historical recipe, yield or factor is a site measurement. | cp_material; cp_utility; cp_air; cp_water; cp_waste |
| dq_background | UUID and supply links | Verify physical identity separately from dataset amount, concentration, volume, moisture, geography/year, route and LCIA equivalence. Retain specific gaps; do not use a nearest-name correction flow. | supplier reference definitions; cp_output; cp_utility |
| dq_sources | source applicability | BREF/EPA provide process and measurement guidance, not universal quantities. The producer page supports an actual dried/baled softwood route only, not representative recipe or mill-wide numerical averages. PEF provides a general allocation hierarchy, not PEF conformity. | jrc-pulp-bref-2015; epa-chemical-pulping-1990; metsa-pulp-production; eu-pef-allocation-2021 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | reference product | Reject dissolving-grade, unbleached, sulphite, soda, mechanical/semichemical, bamboo/nonwood, hardwood and recycled pulp; reject wet integrated pulp transferred directly to paper manufacture. Verify the declared pine/spruce continuous kraft and oxygen/D-EOP-D ECF route. | jrc-pulp-bref-2015 |
| `validation_reference` | quantity and output identity | Require exactly one final pulp reference row, complete qualifiers, calibrated net mass and lot dry matter; normalize every external row to the same 1 kg air-dry-equivalent denominator. Actual physical balances use measured masses, not the standardized output mass. | jrc-pulp-bref-2015 |
| `validation_links` | physical completeness | Reconcile dry wood, accepted pulp, dissolved organics, rejects, recovery, water and carbon including stock changes; report balance residuals and measurement uncertainty rather than inventing a closure tolerance. Internal link pairs must match. Black liquor may not appear as both external fuel and waste. | jrc-pulp-bref-2015; epa-chemical-pulping-1990 |
| `validation_emissions` | emission definitions | Preserve final outlet, medium, source origin, species, analytical method and uncertainty. Do not stack overlapping particle intervals, TRS with its species, NOx with NO/NO2, or totals with their constituent burdens. Keep biogenic CO2. Use sum indicators as declared indicators, not invented substances or substitute chemical recipes. | jrc-pulp-bref-2015 |
| `validation_dataset_gaps` | executable dataset | An identity lookup is not a complete background dataset. Missing UUID, unresolved supplier reference amount, incompatible concentration/volume basis, unknown emission equivalence, absent site amount or unsupported relationship remains pending; do not report complete validation. A measured non-occurrence may be zero, but missing data is never zero. | jrc-pulp-bref-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional mill-gate product dataset for the declared softwood route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply to downstream paper/tissue/board modelling after identity, basis and scope compatibility checks |
| excluded_use | Other pulping routes, dissolving pulp, hardwood/bamboo, integrated wet pulp, complete paper LCA or a claimed industry-average recipe |
| required_metadata | All reference qualifiers; upstream supplier datasets and transports; site/time; process graph; physical and burden ledgers; allocation decisions; emission definitions; treatment and remaining gaps |
| required_quality_disclosure | Primary-data coverage; completeness; exact and unresolved identities; supplier basis compatibility; uncertainty; abnormal periods; proxies; source limitations and unreviewed scope |
| update_trigger | Species, pulping/bleaching chemistry, recovery/CHP, fuel/water/outlet, supplier reference basis or product specification changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pulp-bref-2015 | official_guidance | JRC (2015), Best Available Techniques Reference Document for the Production of Pulp, Paper and Board, DOI 10.2791/370629. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | §2.2 monitoring and printed p49 net production/90% AD basis; §2.3.2 printed p67 site treatment chemicals; §§3.1.1–3.1.12 printed pp196–208 kraft route, recovery, oxygen/ECF, drying and ClO2 preparation. Historic examples do not establish default amounts. |
| epa-chemical-pulping-1990 | official_guidance | US EPA, AP-42 §10.2 Chemical Wood Pulping, September 1990, reformatted January 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c10s02.pdf | §10.2.2.1–.2 and Figure10.2-1, printed pp10.2-1–4: kraft recovery and reduced-sulphur/particulate species screening only; direct-contact legacy configurations and historical emission factors are not adopted. |
| metsa-pulp-production | literature | Metsä Fibre, Pulp production. https://www.metsagroup.com/metsafibre/about-metsafibre/pulp-production/ | Sections From wood to chips, From chips to pulp, Pulp units ready for the world, Resource-efficient production process: actual pine/spruce softwood, wash/bleach/dry/bale, recovery and by-products; no factory quantity, universal recipe or representative average adopted. |
| eu-pef-allocation-2021 | official_guidance | European Commission, C(2021)9332 final, Annex I §4.5, printed pp63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General multifunctionality hierarchy and justified economic fallback; no sector factor, recycling formula or PEF-conformity claim. |
