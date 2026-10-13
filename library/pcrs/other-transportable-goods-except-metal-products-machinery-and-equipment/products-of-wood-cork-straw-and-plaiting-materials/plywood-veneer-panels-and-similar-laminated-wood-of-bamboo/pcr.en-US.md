---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.plywood-veneer-panels-and-similar-laminated-wood-of-bamboo
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# PF-bonded woven bamboo mat plywood

## 1. Scope and Applicability

This PCR covers unoverlaid flat panels made by impregnating untreated woven bamboo-sliver mats with purchased aqueous phenol-formaldehyde (PF) adhesive, squeezing surplus glue, maturing or redrying, assembling, hot pressing, cooling and edging. The starting material is a purchased, unglued woven mat, not a finished bamboo board. The panel is accepted and packaged at the manufacturing gate. Indirect purchased steam heat or electric heating is permitted; onsite fuel combustion, flue-gas direct drying and onsite wastewater treatment are outside this bounded route. Such sites require an extended methodology and complete utility/treatment inventories, rather than deletion of those burdens.

FAO distinguishes bamboo mat plywood, curtain plywood, strip plywood, paper-overlaid panels and bamboo particleboard as real products. Its China report is January 1998; the India report is August 1997 and records commercialization and subsequent constraints, not modern manufacturing parameters. ITTO's June 2014 Appendix 1 compiles INBAR 2002 mat-board technology; it is technical route evidence, not independent experimental validation. No historical recipe, resin uptake, drying temperature, press schedule, density, market volume or factory mean is prescribed as a present-day inventory value. [fao-china-bamboo-1998; fao-india-mat-board-1997; itto-woven-mat-2014]

Exclude parallel bamboo-curtain layers, glued strip lamination, crushed/fibrillated strand-woven scrimber, flattened culm boards, wood/bamboo composites, particle/fibre boards, UF/MUF/isocyanate bonding, overlays, coatings and preservative/bleaching/carbonization/steaming/boiling pretreatment. The 31212 unglued single-culm continuously shaped strip method supplies a different product and cannot model PF bonding. A boiling/freeze/drying product test described in ITTO is a quality test, not proof of production boiling. INBAR separates strip lamination and compression; those routes cannot be pooled into one bamboo exchange. [itto-woven-mat-2014; inbar-industrial-bamboo-2015]

Drying and hot pressing do not establish carbon neutrality. If any upstream mat treatment is discovered, declare it, link the actual treated-material provider and reassess applicability; do not relabel carbonized mats as untreated or assume thermal treatment removes biogenic or resin fossil carbon.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.plywood-veneer-panels-and-similar-laminated-wood-of-bamboo |
| classification_refs | CPC 3.0 31450; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated PF-impregnated woven-bamboo-mat flat plywood |
| excluded_products | Curtain, strip-laminated, scrimber, flattened, wood-composite, overlaid and pretreated bamboo panels; unglued profiles |
| representative_product | Accepted flat PF bamboo mat packaging or general board, without inferred structural grade |
| production_route | Purchased untreated mat → drying → PF dipping/squeezing → maturing/redrying → layup/hot press → cool/edge/check/wrap |
| market_state | Manufacturer-gate panel at measured dispatch moisture; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an accepted unoverlaid PF woven-mat bamboo panel at the factory gate |
| How much | 1 m3 net solid geometrical panel volume, excluding packaging and stack voids |
| How well | Declare measured panel dimensions, moisture and density, PF formulation/solids, layer/weave construction, bond-test and grade acceptance records; no invented legal grade |
| How long or cycle | One manufacture-to-dispatch cycle; no installed service life or end-of-life assumption |
| reference_flow_link | finished_panel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bamboo Man-made Board `7bc26db5-b0aa-410d-93ee-1c96d34336ba` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | PF resin and measured solids/wet basis; woven sliver mats only; untreated input; bamboo species; weave and layer count; dimensions and tolerances; dispatch moisture method/basis and measured density; unoverlaid/uncoated surface; grade and test acceptance; utility route/receiving voltage; supplier boundaries; net packaging exclusion |

All required qualifiers must appear in dataset metadata, product description or equivalent records. The broad board identity explicitly includes bamboo mat plywood; it does not prove a background dataset for this subset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_volume | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use cp_output: sum accepted final length × width × thickness in metres at measured dispatch moisture. Exclude rejected or unaccepted panels, unfinished rework, internal circulation, packaging and inter-panel voids. Count a reworked panel once when finally accepted at its final dimensions; retain all attributable original and rework activity in raw numerator records. Retain actual net mass and measured moisture; no assumed density. |
| same_denominator | all inventory rows | Declared reference volume | m3 | Every inventory value and collection aggregation is per reference flow (1 m3 accepted final panel). Campaign records are divided by the same accepted volume V; retain absolute physical ledgers before attribution. |
| moisture_state | mat_input; finished_panel; offcuts | Auxiliary specimen/component Mass; each exchange retains its verified native reference property | kg for auxiliary dry-matter/water ledgers and mass-reference exchanges; m3 for the native finished_panel reference | Distinguish dry-basis and wet-basis moisture. Record laboratory method, specimen, conditioning and volatile/resin interference for each matrix; apparent oven loss from cured PF panels is not automatically water or bamboo loss. Specimen/component kg is an auxiliary moisture and physical-balance measurement, not a replacement of finished_panel Volume/m3 reference, output or denominator. Retain actual matched-state panel net mass and geometrical volume/density evidence without assumed density. |
| resin_basis | pf_resin | Mass | kg | Weigh actual complete wet delivered adhesive in its verified complete-product reference basis. Measure solids, water and free-species composition; maintain dry-resin subledger. Require a specific compatible whole-formulation identity/provider including supplier manufacture/preparation/delivery; a generic resin UUID or dry-solids conversion cannot stand for whole wet adhesive kg. Link background only after the complete supplied product and its quantity basis are reconciled; no universal solids percentage. |
| steam_basis | steam | Net delivered heat | MJ | Record cp_heat supply/return enthalpy reference, pressure, temperature, dryness, steam mass and losses. A calorific-value property or MJ label alone cannot define net heat. Unverified quantities/provider definitions remain unavailable. |
| carbon_origins | co2_bio; co2_fossil | Mass | kg | Quantify dry bamboo biogenic carbon and PF/release/LDPE fossil carbon independently with measured fractions and stock changes. Thermal coloration is not carbon removal or neutralization. Unclassified carbon prevents a complete carbon balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unglued woven mats and aqueous PF adhesive received; measured moisture, no thermal/chemical pretreatment |
| starting_condition_role | Declared foreground cut at received constituents, with upstream production and inbound transport linked separately |
| product_classification_scope | PF woven-mat flat panel subset of CPC 3.0 31450; classification does not define all included routes |
| recursive_input_rule | Purchased finished panel in the same category is an explicit upstream input and not virgin mat. Internal uncured mat/board rework is counted once as stock/transfer; do not recursively repeat this PCR |
| upstream_dataset_requirement | Actual bamboo cultivation/harvest, sliver manufacture, weaving and inbound transport; PF manufacture and delivery; electricity supply; verified steam production/delivery/condensate-return convention; water, release and wrapping supply; destination-specific waste treatment |
| disclosure | Site, campaign, species, starting states, all transfers/stock, preprocessing, direct/indirect heat, provider definitions, exclusions, unreconciled balances and unlinked rows |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | p_panel | Include receiving, initial drying, resin dipping and squeezing, maturation/redrying, layup/pressing, cooling, edging/testing, wrapping, clean-up and pollution controls. Aggregate these stages into one foreground process; preserve each physical handoff and stage meter in cp_handoff. Do not export an intermediate board with the final reference UUID. | itto-woven-mat-2014 |
| boundary_inputs | p_panel | Upstream supplier burdens and waste destinations must match the actual material states. Bought mats do not eliminate cultivation/sliver/weaving burdens. A matching flow identity is not a complete background provider. | itto-woven-mat-2014 |
| boundary_utilities | p_panel | No onsite combustion or direct flue-gas drying is covered. Imported net steam heat includes its actual generation/distribution burdens via a separately verified provider; do not append provider boiler emissions to panel exhaust. Disclose capital-equipment exclusion, infrastructure sensitivity and all operating losses. | itto-woven-mat-2014 |
| boundary_carbon | p_panel | Keep actual biological/fossil carbon transfers and emissions. No foreground atmospheric uptake is introduced merely by purchasing bamboo. Storage is separately reported; no generic carbon-neutral label, future combustion credit or delayed-emission correction replaces physical flows. | inbar-industrial-bamboo-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_panel | PF woven-mat panel manufacture | required | Defined untreated mat/PF route | Foreground stage aggregation with original physical handoffs | 1 m3 accepted finished panel |

The physical route is received woven mats → moisture-equalized mats → PF-wet impregnated mats after squeezing → matured/redried layup → hot-pressed board → cooled/edged accepted panel. These are different measured states of in-process material, not external product outputs. Use matched lot/transfer ids and identical sending/receiving quantities; measure water, bamboo dry matter, resin solids, free species, reject and rework at each handoff. Keep absolute mass/water/carbon balances separate from attributed environmental burdens. Only finished_panel is the reference output. [itto-woven-mat-2014]

Each card is one exchange. Conditional absence needs actual route/stock/test evidence; unmeasured is not zero. These rows are a minimum for the declared route; additional chemicals, packages, maintenance consumables or measured pollutants must each receive their own atomic row and identity review before a dataset can be called complete.

### Process: PF woven-mat panel manufacture (`p_panel`)

#### Inputs

##### Product flows

###### Untreated unglued woven bamboo mat (`mat_input`)

Unbleached, uncarbonized woven slivers; record species, weave, mat dimensions and measured moisture. Exclude resin-treated mats and strand bundles.

- Selected flow: Untreated unglued woven bamboo mat
- Flow property / unit: Mass / kg
- Amount rule: Incoming purchased mat mass, divided by accepted panel volume V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `itto-woven-mat-2014`

###### Aqueous phenol-formaldehyde dipping adhesive (`pf_resin`)

One actual complete purchased aqueous PF dipping adhesive supply, measured by net supplied wet-formulation mass. Require a specific compatible complete-product identity and provider preserving supplier resin manufacture, formulation preparation and delivery before use; until established, the UUID and corresponding provider link remain unresolved. A generic phenolic-polymer resin identity cannot receive whole wet adhesive kg; measured solids conversion alone does not establish the complete product. Measure included resin solids, carrier water, additives and free species analytically without extra purchases or duplicate process water. Genuine independently bought additions and actual onsite dilution/mixing water, utilities and losses remain separate exchanges under the declared route; separately bought resin with onsite adhesive manufacture requires an explicit applicability extension and its own verified supply rows.

- Selected flow: Aqueous phenol-formaldehyde dipping adhesive
- Flow property / unit: Mass / kg
- Amount rule: Net purchased aqueous PF adhesive consumed, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resin`
- Sources: `itto-woven-mat-2014`

###### Alternating current (`electricity`)

The chosen identity is consumption mix delivered at 1–35 kV. Include onsite distribution and transformer losses after that meter. Motor, dryer, pump, press and finishing submeter records remain separate before aggregation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured electricity attributable to the panel campaign, divided by V; record kWh and convert using 1 kWh = 3.6 MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `itto-woven-mat-2014`

###### Net process heat delivered by purchased steam (`steam`)

Conditional indirect heating from an external utility provider. Record steam pressure, temperature, dryness, mass and condensate/vent return states. Without provider reference-state correspondence and measured enthalpy balance, keep the heat quantity and dataset link unresolved.

- Selected flow: Net process heat delivered by purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Verified net delivered steam heat divided by V; no conversion from boiler fuel, steam mass or an unidentified MJ definition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `itto-woven-mat-2014`

###### Process Water (`water`)

Record incoming treated water separately from the water already contained in PF adhesive and mats. Include cleaning and utility losses; internal recirculation is a transfer, not fresh water demand.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured additional dilution, cleaning and utility make-up water crossing the boundary, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `itto-woven-mat-2014`

###### Aqueous silicone mould-release agent (`release_agent`)

Conditional plate-release treatment. Record exact formulation and water fraction. No silicone adhesive substitution. If a different release chemistry is used, add its own verified atomic row and reassess emissions.

- Selected flow: Aqueous silicone mould-release agent
- Flow property / unit: Mass / kg
- Amount rule: Measured consumed release formulation divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `itto-woven-mat-2014`

###### Low-density polyethylene foil (PE-LD) (`wrap`)

Conditional transport wrapping. Film retained on shipped panels and onsite film scrap are measured separately. Packaging is excluded from reference-panel net mass and volume. Other packaging materials require separate atomic rows.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured LDPE film issued minus recoverable unused stock, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `itto-woven-mat-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bamboo Man-made Board (`finished_panel`)

PF-impregnated woven-mat flat panel, cooled, edged and accepted, unoverlaid and uncoated. Measure geometrical panel volume at declared dispatch moisture. Broad flow identity is narrowed by these physical qualifiers, not by its classification label.

- Selected flow: Bamboo Man-made Board `7bc26db5-b0aa-410d-93ee-1c96d34336ba`
- Flow property / unit: Volume / m3
- Amount rule: 1 m3
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `itto-woven-mat-2014`

##### Waste flows

###### Untreated unglued woven bamboo mat rejection waste (`mat_reject`)

Before resin contact only. Retain wet mass, moisture, dry bamboo and destination. Do not mix with bonded offcuts.

- Selected flow: Untreated unglued woven bamboo mat rejection waste
- Flow property / unit: Mass / kg
- Amount rule: Measured unglued rejected mat waste sent out, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `itto-woven-mat-2014`

###### PF-bonded bamboo panel offcut waste (`offcuts`)

One bonded-panel material state; separate dry bamboo carbon, cured resin fossil carbon and water by measured composition. No untreated-bamboo combustion factor or avoided-fuel credit.

- Selected flow: PF-bonded bamboo panel offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Measured bonded offcuts and rejected finished panels sent out, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `itto-woven-mat-2014`

###### Spent aqueous phenol-formaldehyde adhesive (`pf_waste`)

Spent liquid formulation, not pressure-sensitive label residue. Returned reusable bath is internal stock, not a new input or an environmental emission.

- Selected flow: Spent aqueous phenol-formaldehyde adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured PF bath purge or spoiled adhesive sent out, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `itto-woven-mat-2014`

###### PF adhesive equipment-washing wastewater for offsite treatment (`wastewater`)

Characterize dissolved PF solids, free phenol/formaldehyde and suspended bamboo; this is a technosphere waste transfer, not direct release to river. Onsite treatment or direct discharge requires additional treatment-specific rows and receiving-media identities.

- Selected flow: PF adhesive equipment-washing wastewater for offsite treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured wastewater delivered to treatment, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `itto-woven-mat-2014`

###### Captured PF-bonded bamboo cutting dust (`captured_dust`)

Dust collector output with retained resin, not an air emission. Keep recovery, collector stock change, captured dust and escaped particulate measurements distinct.

- Selected flow: Captured PF-bonded bamboo cutting dust
- Flow property / unit: Mass / kg
- Amount rule: Measured captured bonded cutting dust sent out, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `itto-woven-mat-2014`

###### LDPE packaging film offcut waste (`wrap_waste`)

Conditional LDPE film trim or rejected wrap; exclude PET, PP, composite film and PF-contaminated film. Destination and packaging carbon remain in the physical ledger.

- Selected flow: LDPE packaging film offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Measured clean LDPE packaging film waste sent out, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `itto-woven-mat-2014`

##### Elementary flows

###### water vapour (`evap_water`)

Mat drying, adhesive maturation, pressing and cooling exhaust; utility steam venting is separately identified before aggregation. Unknown water imbalance is not automatically evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or water-balance-resolved process evaporation to outdoor air, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `itto-woven-mat-2014`

###### formaldehyde (`formaldehyde`)

Speciate actual exhaust and fugitive release; exposure measurements indoors are not the environmental exchange. No automatic UF or wood-veneer emission factor.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured formaldehyde released to outdoor air after controls, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-plywood-2002`

###### phenol (`phenol`)

Only actual phenol release; retained phenol in adhesive or wastewater is not also counted as air release.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured phenol released to outdoor air after controls, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-plywood-2002`

###### acetic acid (`acetic_acid`)

Conditional independently identified acetic acid (CAS 64-19-7) in actual drying/pressing exhaust or fugitives. Database identity does not establish its presence or an emission factor. Indoleacetic acid is a different species. Use matched actual species measurements; an untested route cannot be assigned a positive value or an assumed zero.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured acetic acid released to outdoor air after controls, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### methanol (`methanol`)

Conditional presence in supplied adhesive or measured exhaust; never infer concentration from flow metadata or count total VOC again as methanol.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured methanol released to outdoor air after controls, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-plywood-2002`

###### particles (PM2.5) (`pm25`)

Aerodynamic diameter at or below 2.5 micrometres. Record test cut conventions, sampling conditions and filterable/condensable coverage.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured outdoor released PM2.5 mass after collection, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm`
- Sources: `epa-plywood-2002`

###### particles (PM2.5 - PM10) (`pmcoarse`)

If derived from cumulative cuts, use paired measurements on the same gas/time/coverage basis; retain covariance and uncertainty.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured outdoor released particulate mass above 2.5 and at or below 10 micrometres, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm`
- Sources: `epa-plywood-2002`

###### particles (> PM10) (`pmover10`)

Disjoint coarse fraction. Cumulative PM10 and total suspended particulates are QA records, not additional exchanges summed with these three bins.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured outdoor released particulate mass above 10 micrometres, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm`
- Sources: `epa-plywood-2002`

###### carbon dioxide (biogenic) (`co2_bio`)

Conditional verified bamboo-carbon release; do not create an expected combustion quantity for this non-combustion foreground. Retain actual emissions in LCI even where an impact convention reports biogenic CO2 separately.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured biogenic carbon dioxide released during in-scope processing, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `inbar-industrial-bamboo-2015`

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional verified oxidation of fossil-origin constituents; resin retained in the panel is stored carbon, not CO2. Supplier boiler emissions belong to the heat provider and must not be duplicated here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured fossil carbon dioxide released during in-scope processing, divided by V.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `inbar-industrial-bamboo-2015`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | p_panel | Separate lots/routes and stage meters before attributing burdens to this panel. In-scope accepted panels receive their measured activities and associated losses. Allocate common utilities only from a documented causal meter/engineering relation; retain unallocated site totals and sensitivity. | itto-woven-mat-2014 |
| allocation_residues | p_panel | Rejects, bonded offcuts, captured dust, adhesive purge and film scrap are waste in the default route; include their destination-specific treatment burdens without avoided-product credits. If a genuinely sold coproduct exists, first establish its distinct state/identity and quantity, subdivide and document the justified remaining allocation method for independent review. Waste value alone does not establish product function. | itto-woven-mat-2014 |
| allocation_physical | p_panel | Preserve physical input/output and internal transfer quantities before allocation. An attribution fraction applies to environmental burdens, not mechanically to a measured coproduct mass or stock change. Do not multiply both ends of a physical link differently. | itto-woven-mat-2014 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | p_panel | finished panel | acceptance and geometry | lot; species; weave; layers; PF batch; count; measured length/width/thickness; dispatch moisture method/basis; net mass; grade; reject/rework; V | Use calibrated dimension instruments and net weighing, lot acceptance tests and a matrix-validated moisture method. Sum accepted solid volumes; exclude packaging/stack voids and reconcile dispatch stock. | m3; kg; moisture fraction | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_material | p_panel | mat and release inputs | weighing and supplier record | delivery id; material state; species; formulation; opening/closing stock; receipt; returns; consumption; moisture; density | Weigh lots with calibrated scales; reconcile receipts and stocks. Verify untreated mats and exact release formulation with supplier records and tests. | kg | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_resin | p_panel | PF bath | batch stock and assay | adhesive lot; wet mass; solids assay; water; free phenol/formaldehyde/methanol; formulation; fresh feed; bath return; squeeze return; opening/closing bath; purge | Weigh fresh adhesive and bath stocks; assay lot solids/water/free species with validated methods. Measure mat uptake and returned squeeze liquid separately; only external net supply is an input. Verify the specific complete adhesive identity, supplier manufacture/formulation preparation/delivery and wet-product reference basis before linking; included constituents remain analytical, and actual separately procured additions/onsite dilution or mixing water/utilities/losses remain separate. | kg; fraction | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_energy | p_panel | electricity | meter record | receiving voltage; provider geography/year; main meter; stage kWh; transformer losses; idle/rework; shared load allocation evidence | Read calibrated receiving and stage meters; reconcile stage sums, common services and receiving total. Keep route-specific electricity and heat separately. | kWh; MJ | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_heat | p_panel | purchased net steam heat | meter and enthalpy record | provider; billing quantity basis; steam mass; pressure; temperature; dryness; supply enthalpy; condensate mass/temperature/enthalpy; vent/leak; reference state; net heat; distribution losses | Measure steam delivery and all return/loss paths; use validated thermodynamic property tables with documented state reference. Obtain provider agreement on net-delivered versus gross-production basis and condensate credit. Without correspondence, report unresolved, not zero. | kg; MJ; pressure; temperature | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_water | p_panel | water and wastewater | water meters and composition ledger | fresh dilution/cleaning/make-up; adhesive carrier; mat/panel water; return/recycle; wastewater mass; density; evaporation; validated reaction-generated/consumed water; steam-loop water; storage change; contamination; destination | Meter fresh water; weigh or volume-meter waste with measured density. Reconcile constituent water with dry solids and actual outlets; any chemically generated/consumed water requires measured or validated reaction evidence, not an unexplained balance residual. Keep steam/condensate utility-loop mass separate from the panel-material water ledger while preserving both. | kg; m3; fraction | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_waste | p_panel | solid and adhesive waste | weighing and destination manifest | lot; separate waste state; wet mass; water; bamboo dry mass; PF solids; fossil/biogenic carbon; collector stocks; treatment destination; recovery evidence | Weigh separately segregated waste loads and collector stocks; sample composition; retain actual offsite treatment and return/rework records. No air-emission duplication. | kg; fraction | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_pack | p_panel | LDPE film | issue/stock and waste record | film grade; net issued; unused return; delivered wrap; scrap; opening/closing stock; treatment; carbon composition | Weigh film issuance, finished wrap and waste; reconcile packaging stocks independent of panel reference geometry and net mass. | kg | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_air | p_panel | speciated organic air release | outlet and fugitive sampling | stage; chemical species; outlet; gas flow; concentration; wet/dry and normal/actual basis; sampling time; operating hours; controls; fugitives; detection limits; method; uncertainty | Sample actual bamboo/PF process emissions after controls with validated species methods and matched concentration/gas bases. Include curing and rework. Quantify fugitive paths without double counting captured outlet exhaust; retain below-detection intervals. | kg; gas volume; concentration; h | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_pm | p_panel | three disjoint particulate bins | size-resolved outlet sampling | paired PM2.5; PM10; total PM; outlet; aerodynamic cut; gas/time basis; filterable/condensable coverage; capture efficiency; uncertainty; collector mass | Use matched size-resolved after-control tests; preserve cumulative test values as QA, derive disjoint bins only on identical bases and investigate negative differences. Captured dust is not escaped PM. | kg | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_carbon | p_panel | biogenic and fossil carbon | composition/stock and gas measurements | dry bamboo mass; biomass carbon fraction; resin/release/film dry composition; fossil carbon fractions; product/waste/stock carbon; measured CO2 source attribution; other speciated carbon outlets; uncertainty | Measure material carbon fractions by representative lot assays and traceable formulation records; measure actual gas release and source attribution or retain unclassified carbon as incomplete. No default biomass fraction, resin carbon factor or assumed neutrality. | kg C; kg CO2; fraction | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |
| cp_handoff | p_panel | all material stages | paired lot transfer and stage settings | sending/receiving lot; time; stage state; wet mass; dry bamboo; resin solids; water; free species; PF uptake; squeeze recycle; dry/mature/press schedules; temperature/pressure/duration; output acceptance; rework; stocks | Match both ends of each lot transfer at receipt, initial drying, dipping/squeezing, maturation/redrying, layup/press, cool/edge/wrap. Record actual setpoints and measurements; determine acceptance from the declared product protocol, not old technical examples. | kg; m3; temperature; pressure; time | Each lot and stage; meters continuous where available | One disclosed representative production campaign including idle/rework and stock endpoints | Named panel line, supplier lots and linked utilities | per reference flow | Calibration; assays; lot pairing; acceptance; supplier/destination records; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_volume | all inventory rows | V = sum(n_j × L_j × W_j × T_j), using accepted panel lots with metre dimensions; a_i = Q_i / V. Keep original campaign Q_i, stock adjustments and uncertainty; all inventory cards and protocols use the same 1 m3 reference denominator. | Accepted dimensions/count; Q_i; cp_output | a_i per 1 m3 | itto-woven-mat-2014 |
| moisture_conversion | mat_input; finished_panel; offcuts | For measured water-only fractions: u_d = m_water / m_dry; u_w = m_water / m_wet; m_wet = m_dry + m_water; u_w = u_d / (1 + u_d). For bonded panels distinguish bamboo dry matter from resin solids and other non-water matter; do not use apparent oven loss as water without matrix validation. | Component masses and water-specific assays | Separate dry-matter/water quantities | itto-woven-mat-2014 |
| pf_stock_balance | pf_resin; pf_waste | Q_wet = external wet-adhesive receipts + opening wet PF stock - closing wet PF stock - external wet returns. Build a separate solids balance using each lot's measured solids fraction and stock composition: incoming formulation solids are reconciled to retained cured solids, waste solids, stock change and identified cure-derived losses, including validated reaction products. Never equate wet Q_wet to dry retained resin. Squeeze recirculation is not a second purchase; no universal solids fraction or assumed cure loss. | cp_resin; cp_handoff; cp_waste; measured s | PF consumption and component ledger | itto-woven-mat-2014 |
| heat_enthalpy | steam | Net steam heat is the measured supply enthalpy flow minus the measured condensate/other return enthalpy flow across the declared utility-service boundary, using a common thermodynamic reference and validated states; document vent and distribution losses and provider treatment. Unknown states cannot be converted from mass to MJ or aligned to a generic calorific-value row. | cp_heat; measured supply/return mass and enthalpy | Net utility heat and correspondence | itto-woven-mat-2014 |
| particulate_bins | pm25; pmcoarse; pmover10 | For identical paired tests, E_2_5 = PM2.5; E_2_5_10 = PM10 - PM2.5; E_over10 = PMtotal - PM10. Retain test cut and filterable/condensable coverage; do not add cumulative PM10/PMtotal to the three bins. Unmatched tests or negative differences are unresolved. | cp_pm matched tests | Disjoint outdoor particulate emissions | epa-plywood-2002 |
| carbon_balance | co2_bio; co2_fossil | C_bio,in = dry bamboo mass × measured biomass carbon fraction. C_fossil,in = sum(each dry fossil-bearing constituent mass × its measured carbon fraction). For each origin separately, C_in + C_open = C_product + C_waste + C_close + C_actual_air_or_water. For actual CO2 only, carbon mass = CO2 mass × 12/44. Track organic species and particulate carbon without counting them again as CO2; unknown source attribution remains incomplete. Do not infer CO2 from an unexplained balance residual. | cp_carbon; cp_handoff; cp_air; cp_waste; cp_pack | Separate biogenic/fossil carbon balances and storage | inbar-industrial-bamboo-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

The balance identities and collection/normalization requirements above are this PCR's declared measurement protocol, not measured factory results from the cited reports. Dimensionless factors, carbon fractions, supply enthalpies, gas/concentration corrections, emission factors and allocation shares must be backed by actual assays, validated methods and provider records. No first dataset values or industry parameter ranges are supplied.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_states | p_panel | Pair lots and material states through all handoffs; reproduce absolute dry-matter/water and source-separated carbon balances with uncertainty; expose unexplained differences. | cp_handoff; cp_water; cp_carbon |
| quality_providers | all inventory rows | Identity confirmation does not establish amount, region, technology, time or supplier burden. Keep each unavailable exact UUID, property or background-basis match explicit; no broad emission or correction-flow substitutes. | Provider documents and flow support evidence |
| quality_emissions | p_panel | Actual after-control and fugitive bamboo/PF observations are required. EPA wood guidance is a qualitative checklist only; softwood/CORRIM means, wood dust PTE and boiler factors are not bamboo-panel emission factors. Absence/zero needs test or route evidence. | cp_air; cp_pm; detection limits and route records |
| quality_campaign | p_panel | Disclose representative operating period, idle/rework coverage, starting/ending stocks, load, acceptance and calibration. Site data and historical illustrative sources remain distinct. | Complete measured campaign and source limits |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | p_panel | Require every reference qualifier and PF woven-mat route evidence. Reject inputs already carbonized, steamed/boiled, bleached, preserved or glued, and reject curtain/strip/scrimber or overlaid outputs under this PCR. General bamboo identity alone is insufficient. | fao-china-bamboo-1998; itto-woven-mat-2014; inbar-industrial-bamboo-2015 |
| validation_reference | p_panel | Require exactly one finished reference product output, 1 m3 net accepted solid panel, the same denominator in both languages and all linked collection protocols. Preserve stage measurement records without a second intermediate reference output. | itto-woven-mat-2014 |
| validation_balances | p_panel | Check absolute physical mass, water, PF stocks and separate biogenic/fossil carbon with uncertainty before attribution. Require identical sending/receiving links and separate burden accounting. Unexplained residuals remain incomplete, not assumed releases or allocated mass. | itto-woven-mat-2014 |
| validation_quantities | all inventory rows | Require real protocols, unit/property evidence and supplier quantity correspondence, including wet/dry PF basis and net steam enthalpy definition. Missing UUIDs, net heat definitions, measured quantities or background links prevent a complete linked dataset; disclose them rather than claiming coverage. | itto-woven-mat-2014 |
| validation_emissions | p_panel | Require chemical and medium-specific after-control emission records and three non-overlapping particulate bins. Do not discard biogenic CO2 or substitute correction flows. Record all newly observed species as their own atomic exchange. | epa-plywood-2002 |
| validation_carbon_claims | p_panel | Reject carbon-neutral/negative or avoided-energy claims derived merely from bamboo growth, colour, heat treatment or a future combustion scenario. Declared material carbon storage is separate from emission inventory and chosen impact-method reporting. | inbar-industrial-bamboo-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after route-compatible measured and linked completion |
| downstream_use | Manufacturing-gate PF woven-mat bamboo panel supply at stated quality/moisture |
| allowed_use | Evidence-matched panel purchase using declared solid-volume and provider bases; candidate guidance requires review |
| excluded_use | CPC-wide bamboo proxy, installed floor service, curtain/strip/scrimber/overlaid panel, chemically or thermally treated input, onsite combustion/treatment without extension, carbon-neutral marketing |
| required_metadata | All reference qualifiers; campaign and plant; absolute/attributed ledgers; supplier/treatment scope; recipe assay; heat definition; collection and calculation lineage |
| required_quality_disclosure | Unresolved identities and provider bases, measured coverage and detection limits, stock balance residuals, uncertainty, allocation and exclusions; no implied scientific approval |
| update_trigger | Changed mat treatment/species/weave, resin/formulation, panel surface/construction, utility boundary, provider, emission control or reference moisture/grade |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-china-bamboo-1998 | official_guidance | Zhu Zhaohua et al. Status, Trends and Prospects for Non-Wood and Recycled Fibre in China. APFSOS/WP/35, January 1998, section 3.3.1 and Table 15. https://www.fao.org/4/w7734e/w7734e04.htm | Historical distinct manufactured panel categories; no current market or process factors |
| fao-india-mat-board-1997 | official_guidance | P.M. Ganapathy. Sources of Non Wood Fibre for Paper, Board and Panels Production - Status, Trends and Prospects for India. APFSOS/WP/10, August 1997, section 1.3.1. https://www.fao.org/4/w7703e/w7703e05.htm | Commercial woven-sliver mat board and reported adoption limitations; no plant parameters |
| itto-woven-mat-2014 | official_guidance | Krisdianto Sugiyanto. ITTO PD 600/11 Rev.1 (I), Activity 3.4: Identify Appropriate Bamboo Processing Technologies for a Small-scale Processing Plant. Bogor, June 2014. Appendix 1, printed pp.25–28, credits Zhang Qisheng et al., INBAR Technical Report 26 (2002). https://www.itto.int/files/itto_project_db_input/2981/Technical/E-PD-600-11-R1-I-Technical%20Report-Act-3.4.pdf | Official technical compilation: purchased untreated mat state, drying, PF soaking/squeezing, maturation/redrying, layup/hot pressing, cool/edge/check; no numeric defaults or original trial claims. Balance/collection rules are authored measurement requirements |
| inbar-industrial-bamboo-2015 | literature | The environmental impact of industrial bamboo products: Life-cycle assessment and carbon sequestration. INBAR Technical Report 35, second edition, 2015, chapter 3, printed pp.15–21. https://repository.tudelft.nl/file/File_877d4812-8c8d-446e-a048-5c14cb9994b9 | Exclusion distinctions: strip lamination, compression/strand-woven and flattening; case recipes/densities and full-life carbon credit results not adopted. Source-separated carbon accounting is an authored requirement |
| epa-plywood-2002 | official_guidance | U.S. EPA. AP-42 Section 10.5 Plywood Manufacturing, January 2002, section 10.5.3, printed pp.10.5-3–4. https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | Qualitative wood-process emission monitoring checklist only; actual bamboo/PF species and quantities require site testing. No wood/boiler factor transferred; particulate partition is an authored consistency rule |
