---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.vegetable-parchment-greaseproof-papers-tracing-papers-and-glassine-and-other-glazed-tra-4f048b3e
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated mechanically refined greaseproof paper from purchased bleached chemical pulp

## 1. Scope and Applicability

This method covers one physical product: uncoated, unfilled, uncoloured natural greaseproof paper sold as mill-finished reels, whose barrier comes from intensive mechanical refining of virgin bleached chemical wood pulp. The chosen route is purchased papermaking pulp → repulping/cleaning → high refining → wet forming/pressing → externally supplied steam-cylinder drying → ordinary machine finishing if used → slitting/reeling/dispatch. It includes internal broke/white-water recovery and on-site primary settling plus aerobic wastewater treatment with freshwater discharge. Nordic Paper documents a real mechanical cellulose-barrier route family; this is not a claim about the complete recipe or utility system of any named mill [nordic-natural-greaseproof-2022; jrc-pulp-paper-bref-2015, 7.1 and 7.1.11.4].

| Route distinction | Applicability |
| --- | --- |
| Vegetable parchment | Paper web is chemically parchmentized, commonly with sulphuric acid, then rinsed/neutralized and dried. Cellulose gelling is a separate chemical conversion, excluded. A cellulose-only product does not prove the absence of process acid [hubbe-pruszynski-greaseproof-2020, Parchmentized Paper; ahlstrom-gvp-technology]. |
| Mechanical natural greaseproof | Intensive refining and bonded dense fibre structure provide the barrier. No acid parchmentization or functional barrier/release coating; this is the covered route [nordic-natural-greaseproof-2022, p.4; hubbe-pruszynski-greaseproof-2020, Refining]. |
| Coated greaseproof/baking paper | Silicone release, fluorochemical, polymer-film or mineral barrier layers require their own ingredients, application and curing inventory. The producer brochure explicitly includes silicone variants; they are excluded, even if called natural greaseproof. PFAS-free does not mean uncoated [nordic-natural-greaseproof-2022, pp.3–4]. |
| Glassine and tracing paper | Glassine commonly adds strong multi-nip supercalendering, sometimes remoistening and surface film-forming treatment. Transparency or a shared name is not a route match. Supercalendered glassine/release bases and tracing products are excluded; ordinary machine calendering is recorded but never renamed glassine manufacture [ahlstrom-glassine-ep2931972a1, 0001–0006; jrc-pulp-paper-bref-2015, 7.1.9]. |

Terminology: glassine is supercalendered fibre paper (Chinese: 格拉辛纸); cellophane is regenerated-cellulose film (Chinese: 玻璃纸／赛璐玢). They are distinct materials and manufacturing routes. Official UUID-bearing flow labels are retained verbatim; an ambiguous translated source label does not redefine the route described here [upm-glassine-terminology; gb-cellophane-2009].

Also exclude regenerated-cellulose cellophane film, animal parchment, recovered/mechanical furnish, integrated wood pulping/bleaching, wet-strength/filled/coloured grades, on-site combustion, anaerobic sludge digestion, and retail cutting/converting. No recipe, drainability target, coating weight, refining energy, emission factor or thermal-performance default is supplied. All actual process aids must be checked: an uncoated claim does not authorize omitting chemicals. A materially different treatment or barrier requires another method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.vegetable-parchment-greaseproof-papers-tracing-papers-and-glassine-and-other-glazed-tra-4f048b3e |
| classification_refs | CPC 3.0 32137; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated mechanically high-refined virgin chemical-pulp greaseproof reels, without supercalendering |
| excluded_products | Acid parchment; coated baking/barrier paper; glassine; tracing paper; cellophane film; integrated pulp/combustion routes |
| representative_product | Natural Greaseproof uncoated base-paper subset; mechanical barrier documented by Nordic Paper; no assertion that all branded grades meet this scope |
| production_route | Purchased bleached chemical wood pulp; intensive refining; wet forming/pressing; external steam drying; mill-finished reels; primary/aerobic treatment |
| market_state | Accepted net paper reels at manufacturing gate, before downstream coating or conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a mechanically formed grease barrier paper substrate; no claim of non-stick baking service |
| How much | 1 kg accepted net paper at declared delivery moisture, excluding packaging |
| How well | Actual purchaser specification for grease resistance, grammage, caliper, moisture, porosity and strength; declare test method/conditions |
| How long or cycle | One factory-gate delivery; use cycles, release and food-contact certification are outside this reference |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Vegetable parchment, greaseproof papers, tracing papers and glassine and other glazed transparent or translucent papers `89996c15-334b-4f79-ad2c-e21d667f9c80` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | uncoated; mechanical barrier; no parchmentization; no supercalendering; pulp species and chemical/bleaching route; formulation and absence of functional additives; net accepted paper and moisture; grammage/caliper; grease-resistance method and purchaser acceptance; reel dimensions; supply voltage; external steam/return boundary; primary/aerobic treatment; freshwater outfall; site and period |

This broad product UUID includes the stated greaseproof subset with no contrary route restriction. Restrict every data package to the declared physical qualifiers; the UUID neither establishes a compatible supplier dataset nor coverage of the entire classification. Missing qualifiers make applicability incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure Q as accepted paper net mass in cp_mass. All rows use the same period, route and per 1 kg reference flow denominator. Core/wrapper and rejected or internal paper are excluded from Q. |
| wet_dry_basis | pulp, paper, wastes and chemicals | Mass | kg | Keep m_dry = m_wet * (1 - w), with measured wet-basis w. Supplier air-dry conventions must be stated. Physical fibre and water balances use actual solids/moisture; never assume a pulp or paper moisture percentage. |
| electricity_basis | electricity; wwtp_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the reference property; E_MJ = 3.6 * E_kWh is only a unit conversion. Exclude duplicated WWTP meter quantities; verify supplier quantity, region, voltage and loss basis. |
| steam_basis | drying_heat | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` | MJ | cp_heat defines measured net delivery H_net; a supplier must establish H_bg = k_bg * H_net for the selected energy convention, including pressure, dryness and condensate returns. An unknown k_bg is pending, not one. |
| water_basis | water; wwtp_water; effluent_transfer; wastewater_in; effluent_water | Mass / Volume | kg; m3 | Process water and whole wastewater mass use measured density and volume; both internal transfer ends preserve equal whole mass, volume and composition. Final elementary water is only component volume, with whole effluent volume retained for pollutant loads. Keep the utility steam/condensate ledger separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received purchased bleached chemical papermaking pulp and external utilities |
| starting_condition_role | Foreground manufacturing entry |
| product_classification_scope | Mechanical uncoated greaseproof subset of CPC 32137; not its incompatible sibling routes |
| recursive_input_rule | Purchased same-category paper is an upstream product, not a reason to reproduce its manufacture here. A converting-only route is excluded; own internal broke is an internal return, not a purchased recursive input. |
| upstream_dataset_requirement | Require compatible cradle-to-gate pulp, utility, chemical and packaging datasets and external waste treatment; physical flow identity alone is insufficient |
| disclosure | Disclose collected gate-to-gate scope separately from upstream/downstream links; missing links never imply zero burden or complete cradle-to-gate coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_include | all inventory rows | Include stock preparation, refining, wet forming, pressing, drying, finishing, dispatch, cleaning, internal recovery and primary/aerobic treatment; add each actual process chemical and waste as a separate specific row. Keep start-ups, grade changes and cleaning in the actual collection period. | jrc-pulp-paper-bref-2015 |
| boundary_services | all inventory rows | External electricity/steam generation and water supply are background links: do not duplicate their combustion or abstraction emissions here. On-site boilers, pulping/bleaching or anaerobic digestion require another evidenced scope; downstream receiving-water gas generation and disposal are separately linked. | jrc-pulp-paper-bref-2015; ipcc-wastewater-2019 |
| boundary_links | all inventory rows | Internal effluent_transfer and wastewater_in have equal whole-mixture masses, volumes, density and composition. Return white water, fibre, activated sludge and condensate are recorded in physical ledgers and cancel once. Record only final outfall releases to the environment; do not add untreated loads or waste-transfer loads twice. | jrc-pulp-paper-bref-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| papermaking | Purchased pulp to uncoated greaseproof reels | required | Supported mechanical barrier and external-utility route | foreground | finished |
| wwtp | Primary settling and aerobic treatment | required | On-site treatment and freshwater outfall | foreground | Same manufacturing period; per 1 kg finished paper |

Physical map: pulp → preparation/high refining → forming/pressing → cylinder drying → mill finishing/reeling/packing → accepted paper. Process wastewater → primary settling → aeration/clarification → freshwater outfall; primary and excess biological sludge leave separately. Keep stage-specific electricity/steam, drainability, wet-web solids and yield records even though papermaking is one aggregate unit. Drying-to-reeling transfers are internal physical stages; there is only one external paper reference output.

### Process: Purchased-pulp mechanical greaseproof manufacture (`papermaking`)

#### Inputs

##### Product flows

###### Chemical wood pulp, other than dissolving grades (`pulp`)

Purchased bleached hardwood chemical papermaking pulp, non-dissolving grade, when used. Record species, kraft/sulphite route, bleaching sequence, lot moisture and supplier air-dry convention; no blend ratio or moisture default. Every separately purchased grade is a separate row.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Chemical wood pulp, other than dissolving grades (`softwood_pulp`)

Purchased bleached softwood chemical papermaking pulp when used, separately metered from hardwood pulp even with the same broad UUID. At least one qualifying chemical-pulp input is required. Confirm the physical subset and quantity basis for this row independently.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Alternating current (`electricity`)

Grid AC delivered at 1–35 kV, excluding the separately metered treatment unit. Includes pulping, high refining, wire/press sections, drying auxiliaries, optional ordinary machine calender, ventilation and reeling. Retain stage meters and convert kWh to MJ; verify actual region, year, voltage and losses before linking a background. A different interface requires another verified identity. The source flow declares CN; verify actual country/year and provider compatibility independently of the voltage, and reassess the identity if needed.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-pulp-paper-bref-2015`

###### Process heat from steam (`drying_heat`)

Externally generated industrial steam heat for cylinder drying. Collect inlet pressure (absolute versus gauge), temperature, dryness, mass, condensate return and enthalpy; no pressure or kg-to-MJ default. This broad identity has a Gross calorific value reference: it does not establish net delivered heat. Supplier-defined k_bg must reconcile H_bg = k_bg * H_net to its energy convention. Unknown k_bg makes the numeric background link pending; never set it to one by assumption.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `jrc-pulp-paper-bref-2015`

###### Process Water (`water`)

Purchased treated process water, not direct freshwater abstraction. Measure makeup only, separately from recirculated white water and the steam/condensate utility circuit. For volumetric meters, collect density at measured conditions; do not infer density from a database secondary coefficient.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### Cardboard tube or Paper core (`core`)

Dispatch paperboard reel core, if used. Count-to-mass conversion uses actual weighed cores of the same dimensions. Reusable metal machine reels are not consumable dispatch cores. Core mass is excluded from net paper Q. Record actual paperboard furnish and manufacture. A reuse-related burden fraction cannot reduce the full physical mass shipped, returned or discarded.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

###### Polyethylene film (`wrap`)

Actual PE dispatch film only, CAS9002-88-4, not PET or a paper coating; weigh whole film and retain grade/additives/provider. Source classification conflict remains disclosed pending clarification. Use one compatible complete-film background covering actual formulation, film forming/converting, losses, utilities and delivery, or a documented supplier film-manufacturing reconstruction covering those same operations and all actual constituents once. Resin/additive demands belong inside that supplier reconstruction, not additional mill purchases alongside the film. Pure PE resin production alone does not cover finished film; unverified supplier processing remains pending.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Product flows

###### Vegetable parchment, greaseproof papers, tracing papers and glassine and other glazed transparent or translucent papers (`finished`)

The sole accepted external paper product: uncoated, highly mechanically refined, mill-finished greaseproof reels, not supercalendered glassine. Broad UUID restricted to this subset. Net paper excludes core and wrapper; packaging remains in the physical dispatch ledger.

- Selected flow: Vegetable parchment, greaseproof papers, tracing papers and glassine and other glazed transparent or translucent papers `89996c15-334b-4f79-ad2c-e21d667f9c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `jrc-pulp-paper-bref-2015`

##### Waste flows

###### Waste solid (`reject`)

Actual separately removed wet fibre-bearing screening solids from virgin pulp preparation. The broad solid-waste record includes industrial residuals but fixes neither composition nor hazard status or treatment. Weigh whole wet solids and measure water, dry solids, fibre/mineral fractions and contaminants; verify the actual receiving route. Internally recovered fibre stays internal, and no unrelated bean-pulp, black-liquor or recycled separator-paper identity is used.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Dust (`dust_collected`)

Actual collected cellulose paper dust sent off site after slitting or finishing. The industrial-collected-dust identity applies only with actual fibre/additive composition, moisture, collector and receiver records; it does not establish generic waste treatment. Keep physically distinct solid streams separate. Dust returned internally stays in the physical ledger; dust captured as waste is never also an outdoor-air release.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Waste liquid (`effluent_transfer`)

Actual untreated virgin-pulp greaseproof-paper wastewater mixture, an internal link to wastewater_in. Both ends use equal whole-mixture Mass / kg from measured volume V times rho_eff(T,composition), preserving equal volume, density, water fraction, composition and period. Keep volume for pollutant loads; the transfer is neither environmental water release nor an extra treatment burden. The broad liquid-waste source is not a legal hazard classification. Reject recycled-fluting single-mill or directly discharged untreated-water identities.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured whole wastewater mass X_i=V*rho_eff(T,composition), normalized as X_i/Q per 1 kg reference flow; preserve equal physical mass, volume and composition at both ends.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Released paper-cutting dust at or below 2.5 micrometres aerodynamic diameter, after capture. Measure actual released mass and size fractions over operation and cleaning. No sawmill factor or default capture efficiency; do not add nested total PM/PM10 to these disjoint bands.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Released cutting dust above 2.5 and at or below 10 micrometres; disjoint from PM2.5. Measure actual released mass and size fractions over operation and cleaning. No sawmill factor or default capture efficiency; do not add nested total PM/PM10 to these disjoint bands.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (> PM10) (`pm_large`)

Released cutting dust above 10 micrometres, not PM10. Measure actual released mass and size fractions over operation and cleaning. No sawmill factor or default capture efficiency; do not add nested total PM/PM10 to these disjoint bands.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### water vapour (`vapour`)

Papermaking water evaporated to outdoor air: measured dryer ventilation or reconciled water balance with uncertainty, not steam heat expressed as water loss. Returned condensate is not this emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

### Process: Primary and aerobic wastewater treatment (`wwtp`)

#### Inputs

##### Product flows

###### Alternating current (`wwtp_electricity`)

Separately metered 1–35 kV grid electricity attributable to primary settling, aeration, pumping, clarification and sludge dewatering; exclude it from electricity in papermaking. Check actual supply interface and background as for that row. The source CN geography requires the same actual site/provider qualification; no automatic geographic match follows from the UUID.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_wwtp`
- Sources: `jrc-pulp-paper-bref-2015`

###### Process Water (`wwtp_water`)

Purchased treated water for treatment-unit solution preparation, cleaning and makeup, separately metered and excluded from papermaking water. Water contained in commercial chemicals enters the physical composition ledger and is not counted again as purchased water. Collect actual density for mass conversion; pair any internal treated-water return.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_wwtp`
- Sources: `jrc-pulp-paper-bref-2015`


###### Polyaluminium Chloride (`pac`)

This selected solid PAC identity applies only to actual independently purchased compatible dry commercial reagent; record composition/basicity, assay/hydration, moisture and supplied mass. Record real onsite solution-preparation water/utilities separately once. Bought prepared aqueous PAC is one complete formulation: before use require its own compatible supply identity/provider or documented complete supplier-process reconstruction covering carrier, additives, preparation/manufacture, losses/utilities and delivery. Its whole wet mass, solids and stocks remain observed; analytical active conversion does not substitute supplier processing or create extra mill water purchases.

- Selected flow: Polyaluminium Chloride `f1b285a5-2733-450c-af08-69e960b671ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chemical`
- Sources: `jrc-pulp-paper-bref-2015`

###### Polyacrylamide (`pam`)

Use only actual SDS-confirmed nonionic PAM; charged copolymers need a different compatible identity. Separate measured supplied wet/dry mass, active polymer, carrier/additives and stocks. Independently purchased compatible polymer plus onsite mixing water/utilities are separate real inputs. A prepared bought solution/formulation is one complete supply and requires compatible full provider/reference coverage or a documented supplier-process reconstruction retaining actual carrier/additives, preparation/manufacture, losses/utilities and delivery once. Constituents remain analytical or supplier-process inputs, not extra mill purchases; no universal dose or concentration.

- Selected flow: Polyacrylamide `f8ff6647-6bb3-4b72-9830-60a7a86203c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chemical`
- Sources: `jrc-pulp-paper-bref-2015`

###### Sodium hydroxide (`naoh`)

Use this solid NaOH identity only for actual independently purchased industrial solid meeting its 95–98% source purity band; that is identity compatibility, not a dose or factory recipe. Record actual assay, moisture and provider basis, with real onsite dissolution water/utilities once. A bought liquid-caustic formulation of another state/concentration requires its own compatible complete-supply identity/provider or documented full supplier-process reconstruction; preserve whole wet mass, active/carrier ledgers and all actual supplier preparation/auxiliary/loss/delivery burdens. Active-mass conversion alone cannot represent the prepared solution, and included carrier is not fresh onsite purchase.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chemical`
- Sources: `jrc-pulp-paper-bref-2015`

###### Urea (`urea`)

Synthetic urea nutrient only if used in this industrial treatment. Quantity is product kg, not kg nitrogen; use actual supplier assay for N and carbon balances. Do not import fertiliser application rates.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chemical`
- Sources: `jrc-pulp-paper-bref-2015`

###### Phosphoric acid (`phosphoric`)

Conditional actual orthophosphoric acid nutrient. This finished-manufactured chemical identity supplies no CAS, concentration or manufacturing-route default. Supplier evidence must establish H3PO4 chemistry (CAS 7664-38-2), actual source route, solution concentration and whole commercial versus active-acid mass. Use a compatible provider-reference basis while retaining all carrier water and constituents separately without double counting. The Central-Prayon weak-acid record remains a different route-qualified candidate, not a generic replacement; no default P factor or concentration.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_chemical`
- Sources: `jrc-pulp-paper-bref-2015`

##### Waste flows

###### Waste liquid (`wastewater_in`)

Receive exactly the whole wastewater mixture mass, volume, density, water fraction, composition and period recorded at effluent_transfer. Mass is V times rho_eff(T,composition), not pure-water mass or an assumed 1000 kg/m3. Retain inlet pollutant loads and return-water records, with equal unallocated physical transfer and no duplicate treatment burden or external water purchase.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured whole wastewater mass X_i=V*rho_eff(T,composition), normalized as X_i/Q per 1 kg reference flow; preserve equal physical mass, volume and composition at both ends.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_wwtp`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Waste flows

###### sludge (paper production) (`primary_sludge`)

Primary paper-production sludge removed off site. Record wet and dry mass, fibre/mineral/coagulant content, contaminants, receiver and acceptance specification; no mixture with biological sludge. The broad paper-sludge UUID does not define a treatment or dry-solids fraction.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_wwtp`
- Sources: `jrc-pulp-paper-bref-2015`

###### sludge (paper production) (`bio_sludge`)

Excess biological sludge from paper-production wastewater, separately measured; same broad paper-sludge identity restricted to this origin. Measure biomass, moisture, ash, nutrient content and receiver; return activated sludge is internal and not a second waste.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_wwtp`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### Water (`effluent_water`)

Only the water component in actual final effluent discharged to a verified freshwater receiver after reuse, not the whole liquid mixture or abstraction. Compute component water volume as V_eff*rho_eff(T,composition)*x_water/rho_water(T), using measured water mass fraction and documented temperature-specific densities. Keep whole effluent V_eff separately for coincident pollutant concentrations. No default density, pure-water assumption or automatic equivalence between these volumes; any negligible-solids approximation requires evidence and uncertainty.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### chemical oxygen demand (`cod`)

COD oxygen-equivalent load; do not turn COD into a carbon mass or convert it to BOD using a default. Use concentration and discharge flow from the same interval at the final freshwater outfall; no default amount, no duplicate untreated load.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### biological oxygen demand (`bod`)

BOD load on a declared test duration, temperature and nitrification-inhibition basis; BOD5 is not proved by the broad name alone. Use concentration and discharge flow from the same interval at the final freshwater outfall; no default amount, no duplicate untreated load.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### nitrogen, total (excluding N2) (`tn`)

Total N mass excluding molecular N2, including organic and inorganic nitrogen; do not substitute an inorganic-only permit metric. Use concentration and discharge flow from the same interval at the final freshwater outfall; no default amount, no duplicate untreated load.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### phosphorus, total (`tp`)

Total elemental P mass, not phosphate-ion mass without analytical conversion. Use concentration and discharge flow from the same interval at the final freshwater outfall; no default amount, no duplicate untreated load.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### adsorbable organic halogen compounds (`aox`)

AOX analytical halogen-equivalent load on a declared method and calibration basis, only where actual monitoring/chemistry makes it relevant. Do not hide individually identified hazardous organohalogens in a sum indicator. Use concentration and discharge flow from the same interval at the final freshwater outfall; no default amount, no duplicate untreated load.

- Selected flow: adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Suspended solids discharged to freshwater (`tss`)

Measured suspended-solids dry mass at the final freshwater outfall. The available unspecified-water identity does not verify this freshwater subcompartment; UUID remains unresolved. Do not replace suspended solids by dissolved or inorganic solids.

- Selected flow: Suspended solids discharged to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### carbon dioxide (biogenic) (`co2_bio`)

Biogenic CO2 from oxidation of actual biomass carbon; retain it in LCI even when national greenhouse-gas totals omit it. Measure net releases to outdoor air with representative coverage and uncertainty; IPCC industrial sections provide process/coverage context only, not this mill’s default factors. Downstream receiving-water generation is outside this direct foreground and requires a separate model.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### carbon dioxide (fossil) (`co2_fossil`)

Fossil CO2 from actual fossil-carbon-containing treatment inputs, if oxidation occurs; split from biomass carbon using measured carbon provenance. Measure net releases to outdoor air with representative coverage and uncertainty; IPCC industrial sections provide process/coverage context only, not this mill’s default factors. Downstream receiving-water generation is outside this direct foreground and requires a separate model.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### methane (biogenic) (`ch4_bio`)

Biogenic CH4 actually escaping the industrial treatment system, including stripping of dissolved methane; no automatic zero based on an aerobic process label. Measure net releases to outdoor air with representative coverage and uncertainty; IPCC industrial sections provide process/coverage context only, not this mill’s default factors. Downstream receiving-water generation is outside this direct foreground and requires a separate model.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### methane (fossil) (`ch4_fossil`)

Fossil CH4 only if measured/reconciled from fossil carbon; not total methane relabelled as fossil. Measure net releases to outdoor air with representative coverage and uncertainty; IPCC industrial sections provide process/coverage context only, not this mill’s default factors. Downstream receiving-water generation is outside this direct foreground and requires a separate model.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### nitrous oxide (`n2o`)

Nitrous oxide from actual nitrogen conversion; report kg N2O, not kg N2O-N, and keep it separate from NOx. Measure net releases to outdoor air with representative coverage and uncertainty; IPCC industrial sections provide process/coverage context only, not this mill’s default factors. Downstream receiving-water generation is outside this direct foreground and requires a separate model.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-pulp-paper-bref-2015`; `ipcc-wastewater-2019`

###### water vapour (`wwtp_vapour`)

Actual treatment-unit water evaporation to outdoor air, separate from paper-dryer evaporation. Collect a validated tank water balance or representative net exhaust humidity/flow and uncertainty. No default evaporative fraction; unmeasured is not zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange amount aggregated per 1 kg reference flow by the linked collection protocol. Keep actual period X_i and accepted paper Q; no default amount, unknown is not zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_wwtp`
- Sources: `jrc-pulp-paper-bref-2015`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | all inventory rows | Separate grade campaigns and direct meters first. For genuinely shared activities investigate subdivision/system expansion, then demonstrate a relevant underlying physical relationship; only if neither is defensible may a documented other relationship such as economic value be used. No automatic mass allocation, paper yield factor, recycled-paper credit or universal price ratio. | ec-pef-method-2021 |
| allocation_ledgers | all inventory rows | Preserve the unallocated physical mass/water/carbon ledger and full product/waste quantities, separately from the product-attributed environmental burden ledger. Allocation partitions burdens; it must not multiply real co-product outputs or internal-link quantities by an allocation share. Do not call internally recovered broke a sold co-product. Record actual receivers and any genuine off-spec sales independently. | ec-pef-method-2021; jrc-pulp-paper-bref-2015 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | papermaking | finished | weighing | lot; grade; reel gross; actual tare; accepted net Q; moisture w; buyer acceptance | Calibrated reel scale; subtract actual cores/wrappers; validated sampling and oven-dry/gravimetric moisture method with recorded conditions; reconcile delivery and stock changes | kg | each lot | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_material | papermaking | pulp; core; wrap | purchase_and_stock | supplier; grade/species/route; commercial mass; moisture; opening/closing stock; returns; actual core/film tare | Weigh incoming/consumed distinct materials and reconcile invoices, stock and rejected deliveries; separate each pulp grade and packaging component | kg | receipt and lot | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_energy | papermaking | electricity | meter | meter id; voltage; interval; stage; opening/closing kWh; WWTP exclusion; supplier mix/loss basis | Calibrated meters/submeters; retain refiner, paper-machine, finishing and treatment records, including changeovers and cleaning This protocol attributes only actual papermaking rows/sources; the other process uses cp_energy_wwtp. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kWh; MJ | continuous totals by shift | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity; actual owning process: papermaking | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_energy_wwtp | wwtp | wwtp_electricity | meter | meter id; voltage; interval; stage; opening/closing kWh; attributable WWTP electricity; shared-master-meter overlap; exclusion of unrelated site activities; supplier mix/loss basis | Calibrated meters/submeters; retain refiner, paper-machine, finishing and treatment records, including changeovers and cleaning This protocol attributes only actual wwtp rows/sources; the other process uses cp_energy. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kWh; MJ | continuous totals by shift | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity; actual owning process: wwtp | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_heat | papermaking | drying_heat | enthalpy_balance | steam mass; inlet absolute/gauge pressure; temperature; dryness; condensate mass/pressure/temperature; losses; supplier reference definition; k_bg | Calibrated steam/condensate meters and condition sensors; use validated enthalpy data and reconcile inlet-minus-return energy with supplier delivery contract; no default conversion | kg; MJ | continuous totals by shift | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_water | papermaking | water; effluent_transfer; vapour | water_balance | makeup mass/volume/density; internal white-water and effluent volumes; steam/condensate separate; paper/sludge moisture; dryer and treatment exhaust humidity/flow; treatment evaporation; stocks; measured rho_eff(T,composition); water mass fraction; rho_water(T); whole wastewater mass and component-water volume | Calibrated flowmeters, density/temperature measurements and representative dryer and treatment-unit moisture balances; pair internal transfer readings; reconcile water physically before attribution This protocol attributes only actual papermaking rows/sources; the other process uses cp_water_wwtp. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg; m3 | continuous and shift | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity; actual owning process: papermaking | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_water_wwtp | wwtp | wwtp_water; wastewater_in; wwtp_vapour | water_balance | makeup mass/volume/density; internal white-water and effluent volumes; steam/condensate separate; paper/sludge moisture; dryer and treatment exhaust humidity/flow; treatment evaporation; stocks; measured rho_eff(T,composition); water mass fraction; rho_water(T); whole wastewater mass and component-water volume  reaction-water generation/consumption and evidence; oxygen uptake for total-mass reconciliation; | Calibrated flowmeters, density/temperature measurements and representative dryer and treatment-unit moisture balances; pair internal transfer readings; reconcile water physically before attribution This protocol attributes only actual wwtp rows/sources; the other process uses cp_water. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities.  Include independently supported reaction-water terms; do not assume water is conserved across biological conversion or absorb reaction terms into unexplained residuals. | kg; m3 | continuous and shift | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity; actual owning process: wwtp | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_chemical | wwtp | pac; pam; naoh; urea; phosphoric | dosing_and_stock | trade name; SDS/CAS; ionic state; assay/active solids; commercial mass; solution water; dosing meter; stock; supplier reference basis | Reconcile each actual complete supply, dosing, storage and invoices; assay actual lots and match provider reference units. Independently bought reagents and onsite mixing/dilution water/utilities are real separate inputs. Included formulation water/additives are analytical only, never duplicate purchases. Complete bought solutions or supplier-process reconstruction must cover actual preparation/manufacture, auxiliary/loss/utility and delivery burdens once; active conversion alone is insufficient. | kg | every delivery and dosing shift | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_waste | papermaking | reject; dust_collected | weighing_and_receipt | stream; wet mass; dry solids; composition; contamination; receiver; acceptance; disposal route; internal recovery excluded | Weigh each dispatched stream separately and reconcile manifests, sludge solids tests and receiver receipts; collected dust is not emitted PM This protocol attributes only actual papermaking rows/sources; the other process uses cp_waste_wwtp. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | each dispatch | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity; actual owning process: papermaking | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_waste_wwtp | wwtp | primary_sludge; bio_sludge | weighing_and_receipt | stream; wet mass; dry solids; composition; contamination; receiver; acceptance; disposal route; internal recovery excluded | Weigh each dispatched stream separately and reconcile manifests, sludge solids tests and receiver receipts; collected dust is not emitted PM This protocol attributes only actual wwtp rows/sources; the other process uses cp_waste. Retain complete raw stage/component/stock/gate records. Count a shared master-meter/final-outlet external exchange once in one explicitly corresponding row; source decomposition creates no second exchange, and paired internal-transfer ends retain equal quantities. | kg | each dispatch | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity; actual owning process: wwtp | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_effluent | wwtp | effluent_water; cod; bod; tss; tn; tp; aox | outfall_sampling | receiver; flow volume V_t; same-interval C_t; method; duration; N/P/AOX basis; detection/quantification limits; calibration; reuse/bypass; measured rho_eff(T,composition); water mass fraction; rho_water(T); whole wastewater mass and component-water volume | Representative preferably flow-proportional composites at final freshwater outfall and calibrated same-interval volume; record actual sample coverage, bypasses and uncertainty | m3; mg/L; kg | continuous flow; representative composites | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_air | papermaking | pm_fine; pm_coarse; pm_large | emission_measurement | source; exhaust dry/wet volume; sampling T/P; duration; size-band mass; captured dust; cleaning; detection limit; uncertainty | Representative calibrated duct/release measurements after capture and validated fugitive-release assessment; distinguish ambient concentration from emitted mass; BREF 7.1.10 provides cutting relevance, not a factor | kg | representative operation and cleaning | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |
| cp_gas | wwtp | co2_bio; co2_fossil; ch4_bio; ch4_fossil; n2o | gas_measurement_and_balance | source; gas species mass; dissolved gas; net exhaust/ambient difference; flow/T/P/moisture; periods; fossil/biogenic carbon; nitrogen; detection limits; recovery; sludge/effluent carbon | Representative net gas-release measurement with calibrated instrumentation, actual C/N source tracing and physical balance; measure plant releases separately from receiving-water generation. Resolve unknown fossil/biogenic splits rather than relabelling totals | kg species | representative coverage across operation | one complete representative declared production period, including abnormal operation | same selected line/grade and allocated shared services; record every excluded site activity | per 1 kg reference flow | calibration; original logs; receipt/lab method; coverage, uncertainty and reconciliation residual |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | q_i = X_i / Q; X_i is measured grade-attributable exchange in the declared unit, Q is accepted net paper kg in the same period. finished = Q/Q = 1 kg. Internal link ends retain equal X_i and q_i. | X_i; Q; cp_mass; row protocol | amount per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| effluent_load | cod; bod; tss; tn; tp; aox | L_i = sum(C_i,t * V_t) / 1000, for C in mg/L and V in m3, giving kg measured indicator/species. Normalize L_i/Q. Sum loads and Q before dividing; never average concentration-only daily ratios. | C_i,t; V_t; Q; cp_effluent | kg load per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| steam_link | drying_heat | H_net = sum(m_in * h_in) - sum(m_return * h_return), with measured pressure/temperature/dryness and defined utility-return boundary; H_bg = k_bg * H_net only with supplier-defined compatible k_bg. No generic boiler efficiency or kg-steam factor. | cp_heat; supplier definition | supplier-reference MJ; pending if compatibility unknown | jrc-pulp-paper-bref-2015 |
| physical_balances | unallocated physical ledgers | Elemental carbon is conserved: external carbon inputs = external carbon outputs + closing-minus-opening carbon stocks + documented residual, using each stream’s measured or evidenced kg C content. Dry solids and H2O are not independently conserved across biological or chemical reactions: for each component, external inputs + reaction generation - reaction consumption = external outputs + closing-minus-opening stocks + documented residual. Record actual solids conversion, oxygen uptake for total-mass reconciliation and reaction-water generation/consumption from measured or independently supported site chemistry; do not assume reaction yields or substitute COD for carbon mass. Reconcile dispatched paper/packaging, waste, elementary releases and utility returns on their own component bases; internal links cancel once. Keep reaction terms distinct from measurement/model uncertainty, and never force closure or infer evaporation by treating reaction-generated water as unexplained error. Preserve physical quantities before burden allocation. | cp_mass; cp_material; cp_water; cp_water_wwtp; cp_waste; cp_waste_wwtp; cp_effluent; cp_air; cp_gas | physical quantities, residual and uncertainty | jrc-pulp-paper-bref-2015; epa-wastewater-basics; ec-pef-method-2021 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every row | Physical name, CAS when chemical, source route, material state, emission medium/submedium, fossil/biogenic origin, property and unit must agree. A search hit or broad name alone is insufficient. Unknown identities remain specific and blank. | direct identity and actual supplier/site specification |
| dq_quantity | all inventory rows | Use actual site data, same Q and period, measured moisture/active content and explicit background basis. No historical/single-site values or database recipe values become generic quantities. | original records; calibration; supplier definition |
| dq_complete | foreground and links | Reconcile stage meters and physical mass/water/C/N balances. Add every observed material, process aid, transport service, packaging component and emission species as a separate atomic row. Document zeros, nondetects and missing data distinctly; neither uncoated nor PFAS-free proves all process aids absent. | process diagram; chemical register; procurement; balance residuals |

Actual residual boiler/delivery losses are reconciled within the supplier boundary once when applying H_net, with common enthalpy reference states; do not subtract losses already excluded by the delivery meter or credit return heat twice. For wastewater, kg=V*rho_eff(T,composition) at both link ends; effluent_water is V_eff*rho_eff*x_water/rho_water(T), while pollutant loads retain full V_eff.

Screen actual forming fabrics, press felts, refiner/slitter consumables, lubrication and cleaning materials using purchase, use and discard records. Add every present material as an atomic flow with actual quantities; no invented service lifetime or omitted carrier. Preserve complete chemical formulations and all physical losses independently of burden allocation.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Reject acid parchmentization, functional coatings, supercalendered glassine or regenerated-cellulose film from this method; verify actual barrier route and required qualifiers, not a trade name. | nordic-natural-greaseproof-2022; hubbe-pruszynski-greaseproof-2020; ahlstrom-glassine-ep2931972a1 |
| validate_quantity | all inventory rows | Require exactly one external finished-paper reference output, same Q across all rows/protocols, equal internal-link ends and complete conversion evidence. Unknown steam or supplier quantity conventions fail a claim of a complete linked dataset. | jrc-pulp-paper-bref-2015 |
| validate_releases | elementary outputs | Match actual medium/species and analytical quantity basis. Do not duplicate nested particles, captured dust, untreated wastewater or COD/BOD as carbon. Keep biogenic CO2 in LCI and fossil/biogenic methane distinct. No correction flow substitutes for a direct release. | jrc-pulp-paper-bref-2015; ipcc-wastewater-2019 |
| validate_evidence | all inventory rows | Review physical identity and quantitative background compatibility independently. Unresolved identities, unsupported measurements, unexplained residuals and missing treatment links remain explicit; validation does not approve scientific methodology. | jrc-pulp-paper-bref-2015; ec-pef-method-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified manufacturing input for downstream greaseproof-paper conversion |
| allowed_use | Same physical uncoated mechanical-barrier route with explicitly compatible quantities and upstream/treatment links |
| excluded_use | All CPC 32137 as a single mix; parchment, coated baking/release, glassine, tracing, cellophane; unsupported full-life-cycle comparison |
| required_metadata | All reference qualifiers, original period/site, stage coverage, pulp grade/basis, utilities, composition, process diagram and source dates |
| required_quality_disclosure | Uncertainty, data gaps, identity versus numeric linkage debt, outfall/air coverage, unallocated balances and separate burden allocation |
| update_trigger | Changed furnish/barrier/finishing, supply convention, utility/treatment route, emissions or product acceptance specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pulp-paper-bref-2015 | official_guidance | Best Available Techniques Reference Document for the Production of Pulp, Paper and Board; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf; 2015, Chapters 2 and 7; PDF pp. 86–88, 104–105, 698–702, 708, 713–714 | Qualitative non-integrated papermaking, high refining, COD release, slower dewatering/drying, cutting dust, treatment chemicals and same-period concentration/flow/net-output measurement. Numerical examples and BAT values are not defaults. |
| nordic-natural-greaseproof-2022 | literature | Nordic Paper: Natural Greaseproof paper brochure; https://www.nordic-paper.com/sites/default/files/2022-01/Natural%20Greaseproof%20paper_brochure_2022.pdf; 2022 brochure, PDF pp. 3–5 | Producer evidence of a mechanical cellulose barrier; the same brochure documents silicone-coated and wet-strength variants. Supports existence of a route family, not one mill’s full formulation, utility route or quantities. |
| hubbe-pruszynski-greaseproof-2020 | literature | Hubbe and Pruszynski: Greaseproof paper products: A review emphasizing ecofriendly approaches; https://bioresources.cnr.ncsu.edu/resources/greaseproof-paper-products-a-review-emphasizing-ecofriendly-approaches/; 2020; Parchmentized Paper, Refining, Calendering | Route distinctions only: acid-gelled parchment, extensive refining, natural greaseproof without supercalendering, coatings and glassine. No historical recipes or experimental numerical factors adopted. |
| ahlstrom-gvp-technology | literature | Ahlstrom: Genuine Vegetable Parchment technology; https://www.ahlstrom.com/products/technologies/genuine-vegetable-parchment-technology/; Accessed 2026-10-12; history and two-stage parchmentization paragraphs | Producer confirms separate papermaking and cellulose-gelling parchmentization. A no-additive finished-product claim does not prove no process chemicals. No acid recipe adopted. |
| ahlstrom-glassine-ep2931972a1 | literature | Ahlstrom: A method of manufacturing of glassine paper, EP2931972A1; https://patents.google.com/patent/EP2931972A1/en; 2015-10-21; description [0001]–[0006] | Primary patent distinguishes glassine release base, remoistening/offline supercalendering and an alternative online film-forming/multi-nip route. Patent setpoints are not universal requirements and these routes are excluded here. |
| ec-pef-method-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf; 2021-12-16, Section 4.5, PDF pp. 63–64 | Multifunctionality hierarchy only. Applying this hierarchy does not claim PEF compliance or import unrelated animal-specific allocations. |
| ipcc-wastewater-2019 | official_guidance | IPCC 2019 Refinement, Volume 5, Chapter 6 Wastewater Treatment and Discharge; https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/5_Volume5/19R_V5_6_Ch06_Wastewater.pdf; 2019, Sections 6.1, 6.2.3, 6.4 and Appendix 6A.1 | Industrial methane/nitrous-oxide pathways and carbon-origin scope only. No domestic-water factors, industry average loads or national-total exclusion of biogenic CO2 imported into this LCI. |
| epa-wastewater-basics | official_guidance | John R. Buchanan, Wastewater Basics 101, US EPA-hosted original; https://www.epa.gov/sites/default/files/2015-06/documents/epa-mou_wastewater_basics_101.pdf; PDF p.15, Aerobic Biotransformation | General oxygen-consuming biological conversion of organic matter to CO2, H2O and biomass/residue; supports reaction terms, not a paper-mill recipe, default yield, amount or emission factor. |
| upm-glassine-terminology | literature | UPM, Labeling Materials, official Chinese product page; https://www.upmspecialtymaterials.com/cn/zh-hans-pages/upm-labeling-materials/; Products and brands, glassine description | Chinese glassine terminology and supercalendered fibre-paper identity only; no product-specific grammage or performance default adopted. |
| gb-cellophane-2009 | standard | GB/T 24695-2009, Cellophane used for food packaging / 食品包装用玻璃纸; official bilingual title https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=4886854AC267120FA0757B2DDFA20BC9 | Terminology distinction only: the official Chinese name 玻璃纸 corresponds to cellophane. No full-standard compliance or test procedure is claimed. |
