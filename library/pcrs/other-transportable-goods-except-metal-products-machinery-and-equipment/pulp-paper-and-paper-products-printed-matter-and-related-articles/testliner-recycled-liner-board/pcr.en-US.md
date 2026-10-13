---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.testliner-recycled-liner-board
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Natural-brown uncoated testliner from recovered paper

## 1. Scope and Applicability

This PCR covers industrial production of naturally brown, uncoated testliner reels or sheets from recovered corrugated-container paper, with all externally supplied fibre of recovered-paper origin. The foreground begins at the declared received waste/product state and ends with accepted net paper ready for dispatch. It covers mechanical stock preparation, actual one/multiple-ply forming, pressing/drying and non-pigmented starch sizing where present. No quantified factory dataset or universal recipe is supplied.

Excluded: virgin-fibre reinforcement or kraftliner; fluting medium; market pulp; purchased-pulp-only papermaking; white-top/deinked/bleached grades; intentional colouring, pigment coating, barrier/specialty treatment; corrugated-board assembly or box conversion. All plies must satisfy this boundary. The broad reference product includes the physically limited subset without a contrary route limitation.

BREF and FEFCO support a mechanical non-deinked route. The producer WT2000 confirms that deinked recycled top plies also exist; its chemical/site process and product quantities are not generalized. Accordingly this methodology covers a narrower CPC 3.0:32135 subset; accepted mapping decisions are governed by the canonical mapping and its ADR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.testliner-recycled-liner-board |
| classification_refs | CPC 3.0 32135; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated natural-brown testliner; 100% externally recovered dry fibre; mechanically cleaned non-deinked stock; unspecialised starch-sized or unsized reels/sheets |
| excluded_products | Virgin/mixed virgin-fibre liners; fluting; white-top/deinked/bleached/coloured/coated/specialty paper; market pulp; converted corrugated board/boxes |
| representative_product | Natural-brown two-ply recovered-paper testliner reel with declared ply grades and moisture |
| production_route | Declared received recovered paper → actual sorting/slushing/cleaning/screening → stock chests → forming/pressing/drying → actual starch sizing/after-drying → reeling/cutting/dispatch |
| market_state | Accepted net paper at mill gate, actual as-sold moisture, excluding dispatch packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Intermediate liner paper for corrugated-board conversion |
| How much | 1 kg net accepted paper |
| How well | Declared natural-brown uncoated grade, grammage, ply construction, strength specification, moisture and recovered-fibre proof; no claim of equivalence across grades |
| How long or cycle | One reporting-period production output; no box service life is inferred |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Testliner (recycled liner board) `f0d36f33-64df-4aa0-8e68-097cd1928dc9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/period/geography; grade; grammage; measured moisture wet basis; ply number and each ply furnish; recovered grade/source/status/contamination; no deinking/bleaching proof; starch grade and sizing; reel/sheet form; net mass/tare; utility route; effluent route; upstream recovery boundary and allocation |

Declare every qualifier in the foreground package; a trade label or classification code is insufficient.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use one net as-sold accepted paper mass basis; exclude cores/wrapping and rejects. Record Q = total accepted net paper kg for the matched reporting period. All inventory rows and collection aggregation use per 1 kg reference flow. |
| moisture_basis | paper, recovered feed and solids | Mass fraction | kg/kg | Measure moisture on a stated wet basis; dry mass = wet mass × (1 − moisture fraction). Keep dry-fibre/solids balances separate from the as-sold reference denominator; no fixed dryness or recovery yield. |
| quantity_compatibility | utility and emission records | Actual selected reference property | Actual unit | Maintain supplier heat/energy, gas volume-state, species/indicator equivalence and unit conversions as separate proven relationships. Unknown basis remains pending. Numeric identity metadata is not a conversion factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recovered old corrugated containers received as documented waste or sorted secondary product, with actual prior recovery and transport state |
| starting_condition_role | Foreground gate-to-gate mill start; upstream recovery boundary must be represented and disclosed |
| product_classification_scope | CPC 3.0:32135; narrower |
| recursive_input_rule | Internal broke stays an internal link. Externally purchased recovered paper has its own actual state and upstream dataset; do not recursively count the prior testliner life without a governing recycling method or suppress recovery burdens. |
| upstream_dataset_requirement | Accepted-state compatible recovery/sorting/transport; actual electricity/heat/fuel, materials and water supply; receiver-specific external treatment; disclose missing reference bases |
| disclosure | Physical and allocation ledgers; supplier/legal state; previous operations; actual non-deinking and every ply; onsite/offsite utilities/treatment; exclusions and gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_recovery | accepted recovered paper | Do not infer zero prior burden from a waste label, recycled content or payment. Declare the actual waste/product handover, supplier and operations already completed; retain collection, sorting, baling and transport either upstream or within foreground once. Prior product-life allocation requires an explicit governing method and evidence; absent proof remains a gap. | jrc-ppb-2015; eu-pef-2021 |
| boundary_mill | testliner mill | Include receiving and actual mill sorting, pulping, ragger/cleaner/coarse and fine screening, conditional fractionation/dispersing/refining, stock preparation, forming, pressing, drying, actual starch sizing and after-drying, reeling/cutting/dispatch and associated utilities/effluent treatment. No default machine arrangement or recipe follows from the historical example flowsheet. | jrc-ppb-2015; fefco-paper-production |
| boundary_deinking | fibre preparation | Confirm absence of flotation/wash deinking and bleaching using process flow, equipment/chemical records and every ply furnish. Dispersing ink specks is not deinking. White-top deinked recycled products are real counterexamples; this PCR excludes them and does not generalize absence of deinking to CPC 32135. | jrc-ppb-2015; fefco-paper-production; smurfit-wt2000 |
| boundary_links | physical internal links | Retain the stage graph, dry-fibre/solids, water and carbon balances before burden allocation. Match both ends of stock, white-water, broke, steam/condensate and captured-biogas/dust links on period, state and quantity, with storage changes. Internal reuse is neither a second purchase nor an external release or credit. | jrc-ppb-2015 |
| boundary_outlets | utilities and final discharges | Include actual onsite gas boilers and water/effluent treatment; purchased energy includes its supply background once. Treat external wastewater as a treatment handover; direct elementary outlets are only actual mill releases after onsite control. Preserve size-resolved cutting/rewinding/yard dust, boiler species and biological carbon where present. | jrc-ppb-2015; epa-gas-combustion |
| boundary_complete | site-specific inventory | Each listed card is one screening exchange with no presumed positive amount. Establish actual presence/absence; add every other real chemical, fuel, water source, emission, transport service, waste and dispatch material as a separate audited atomic row. Inspect actual paper-machine wires/felts, hydraulic/lubricating fluids, cleaning aids, maintenance replacements and utility/treatment stocks, separating installed capital from actual consumed replacements or losses. Screen actual boiler non-methane VOCs and treatment gases with species-specific evidence; add actual external streams without prescribing positive amounts or default identities. Do not claim a complete site dataset with unexamined aids or unresolved reference bases. | jrc-ppb-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| testliner_mill | Natural-brown uncoated testliner from recovered paper | required | Declared non-deinked recovered-paper route; onsite utilities/treatment only when present | Foreground mill unit | 1 kg reference flow |

Aggregate the linked stock-preparation, paper-machine, finishing and dispatch stages into one foreground unit with one final reference product; retain stage metering and the following physical graph separately from allocated environmental burdens.

| Stage | Physical links / required observations |
| --- | --- |
| Receiving/sorting | Received recovered paper → opened bales/actual sorting → pulper feed; observe grade/moisture/non-paper, separated wire and sorting reject |
| Pulping/cleaning/screening | Feed + returned white water → pulper → heavy cleaning/coarse screen → conditional fractionation/dispersing/refining → stock chest → fine screen; measure dry solids and each actual reject |
| Forming/press/drying/sizing | Stock → each ply/headbox → forming wire → press → dryer → actual starch size/after-dryer → finished sheet; white water/broke return to stock; steam ↔ condensate; exhaust vapour leaves |
| Reel/cut/dispatch | Finished web → weighed accepted net reels/sheets + separately weighed core/wrap; trim/dust → measured internal reuse or real external outlet |
| Utilities/effluent | Actual gas boiler/purchased heat; process-water purge → onsite treatment or external handover; primary and excess biological sludge, final water/pollutant and biogas links remain distinct |

### Process: Testliner mill (`testliner_mill`)

#### Inputs

##### Product flows

###### Waste paper (`recovered_product`)

Sorted recovered corrugated-container paper accepted as a secondary raw-material product. Use only for documented product/end-of-waste status and sorted supply; declare accepted grade, contamination, moisture, supplier and previous collection/sorting/baling burdens. The broad identity includes this subset; its conflicting point-of-generation mix label does not prove legal status.

- Selected flow: Waste paper `55842481-6771-4f13-a54b-02354a7d88de`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`; `fefco-paper-production`

###### Alternating current (`electricity`)

Purchased 1–35 kV grid-average alternating current as a physical locator, with source supply location CN explicitly recorded. Actual delivery voltage, site/country, reporting year, supplier and consumption mix compatibility must be established before background linkage; the source country does not set the foreground location. Meter kWh and convert to MJ; preserve the record reference property Net calorific value. This is not a transmission-service exchange or evidence of onsite generation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ppb-2015`

###### Heat from steam (`steam`)

Purchased paper-dryer steam heat from an industrial boiler. Identity is conditionally compatible, but Gross calorific value/MJ does not establish net delivered heat. Obtain supplier reference-quantity definition, steam pressure/temperature/quality, condensate return and enthalpy balance before linking amounts/background. Keep this quantity compatibility pending when unknown. No benchmark demand is adopted.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ppb-2015`

###### natural gas in the gaseous state (`natural_gas`)

Pipeline gaseous natural gas for actual onsite boilers only. Preserve Volume/m3, meter temperature, absolute pressure, wet/dry composition and compressibility; align supplier/background reference-volume conditions. The secondary mass coefficient is not density. Do not add a purchased-steam background for the same internally generated steam.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ppb-2015`; `epa-gas-combustion`

###### corn starch (`starch`)

Native corn starch only when actually used in wet-end or surface sizing; record purchased powder mass, dry solids and cooked-solution dilution separately. No supplier composition or consumption factor is a PCR default.

- Selected flow: corn starch `982918a4-54b1-4792-9ee5-2f3155d4e929`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `fefco-paper-production`; `jrc-ppb-2015`

###### modified starch (`modified_starch`)

Wet-process industrial-grade modified starch only when supplier specification matches; record modification, feedstock, charge, moisture and formulation. Its food-use general comment does not establish paper performance or quantity; verify supplier/background compatibility and keep other starch grades distinct.

- Selected flow: modified starch `09797370-6632-42aa-9d77-e9d41ff82c75`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

###### cationic polyacrylamide (CPAM) (`pam`)

Cationic polyacrylamide only when the actual retention or sludge-dewatering recipe uses CPAM. Keep charge, active-polymer fraction, solution water and residual monomer evidence; anionic PAM needs a different row and verified identity.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

###### Polyaluminium Chloride (`pac`)

Solid polyaluminium chloride for actual water/effluent coagulation only; do not use its solid reference mass as the mass of an unspecified solution. Record assay, basicity, grade, purchased solids and dilution water.

- Selected flow: Polyaluminium Chloride `f1b285a5-2733-450c-af08-69e960b671ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

###### Urea (`urea`)

Industrially synthesised high-nitrogen urea only if actual biological-treatment dosing uses this grade. Collect product mass/assay separately from elemental nitrogen; the generic nutrient requirement does not prescribe urea or a dose.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

###### diammonium phosphate (`dap`)

Chemically synthesised diammonium phosphate with the recorded purity >99.5% only if the actual supplier grade and biological-treatment dosing match; record delivered product mass, purity, N/P content and dissolution water. The nutrient balance is site-specific.

- Selected flow: diammonium phosphate `743bd461-1a63-4ed6-934c-86b29fe21080`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

###### Process water (`water_supply`)

Purchased process water used as slushing/solution medium. Weigh or convert metered volume using documented temperature-dependent density; retain supply/treatment background. Do not add the supplier water abstraction again in river_water.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### Cardboard tube or Paper core (`paper_core`)

Purchased paperboard reel core when delivered with the product. Record actual core specification/mass and reuse cycles; exclude its mass from net paper output. Sheets without cores require documented non-occurrence.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

###### Polyethylene film (`pe_wrap`)

Actual polyethylene dispatch film only; record density/grade, additives, thickness, purchased consumption and supplier. Name/CAS/comment support film identity, while the source CPC baggage classification is inconsistent and remains a clarification debt; no other polymer is substituted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`

##### Waste flows

###### waste paper (unspecified) (`recovered_waste`)

Recovered corrugated-container paper accepted while legally waste. Record one as-received consignment stream, with old-container grade, loose/baled state, moisture, contamination and transfer documents. Do not also record this consignment in recovered_product; upstream recovery operations remain explicit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ppb-2015`; `fefco-paper-production`

##### Elementary flows

###### river water (`river_water`)

Actual direct river abstraction within the foreground, with river/basin/country, season and treatment meter. Resources from water / renewable material resources from water; not liquid discharge. Add verified groundwater/lake identities only for those real sources.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

#### Outputs

##### Product flows

###### Testliner (recycled liner board) (`finished`)

Accepted uncoated natural-brown testliner, 100% externally recovered fibre by dry-fibre origin, at declared as-sold moisture; net paper excludes core and transport wrapping. One external finished output only.

- Selected flow: Testliner (recycled liner board) `f0d36f33-64df-4aa0-8e68-097cd1928dc9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `fefco-paper-production`; `jrc-ppb-2015`

##### Waste flows

###### Recovered-paper sorting reject (`sorting_reject`)

Actual individually collected recovered-paper sorting solids only; record plastic/non-paper/unsuitable-paper fractions, wet/dry mass, source stage, contamination, waste status and actual receiver acceptance. The broad industrial solid-waste identity is only a foreground physical locator; no receiver, treatment, recoverability, hazard class or background match is inferred. This row stays independent of every other reject/sludge/dust stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Recovered-paper pulper ragger reject (`pulper_reject`)

Actual separately collected dewatered ragger/pulper solids only; retain fibre/plastic/metal composition, moisture and actual receiver. Segregated steel is a different stream, not part of both masses. The broad industrial solid-waste identity is only a foreground physical locator; no receiver, treatment, recoverability, hazard class or background match is inferred. This row stays independent of every other reject/sludge/dust stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Recovered-paper cleaner and screen reject (`screen_reject`)

Actual coarse cleaner/screen solids only; combined solely when actually collected together. Measure mineral/fibre/polymer fractions, wet/dry state and receiver acceptance; physically separate streams require separate cards. The broad industrial solid-waste identity is only a foreground physical locator; no receiver, treatment, recoverability, hazard class or background match is inferred. This row stays independent of every other reject/sludge/dust stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Removed steel baling wire (`steel_wire_waste`)

Actual separately removed steel baling wire leaving as ferrous waste, with measured alloy/coating, attached paper/polymer, wet/dry mass and receiver acceptance. This broad scrap-steel record has no opposing manufacturing or treatment route; use only as a qualified foreground locator. Actual product/end-of-waste or recycling route needs its own evidence and compatible link, without automatic credit. Wafer-production and forming/welding-specific candidates remain incompatible.

- Selected flow: Scrap steel `e232d521-ecef-4ca9-bf7d-c88083b2da7f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### sludge (paper production) (`primary_sludge`)

Primary paper-mill sludge from actual solids separation. The broad paper-production sludge identity is compatible only with the declared fibre/filler/chemical composition; record wet mass, dry solids, carbon, dewatering and receiver. Keep it separate from biological sludge.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### sludge (paper production) (`bio_sludge`)

Excess biological sludge from the mill wastewater plant, not internal return activated sludge. Same broad paper-sludge UUID, independently constrained to measured biomass/fibre/chemical composition; wet/dry mass, carbon, treatment and receiver are required.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### waste paper (unspecified) (`broke_out`)

Natural-brown uncoated trim/off-spec paper leaving the mill for external management. Record actual moisture, contaminants and receiver; internally repulped broke is a matched internal link and is excluded from this external row.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Collected dry paper fibre dust (`captured_dust`)

Actual separately captured cutting/rewinding fibre dust sent offsite only; measure moisture/additive contamination and receiver acceptance. Internal return and uncontrolled airborne releases are separate accounts. The broad industrial solid-waste identity is only a foreground physical locator; no receiver, treatment, recoverability, hazard class or background match is inferred. This row stays independent of every other reject/sludge/dust stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ppb-2015`

###### Untreated testliner process wastewater to external treatment (`wastewater`)

Actual untreated liquid testliner process wastewater handed to an external treatment provider only. Preserve metered m3 and composition/load collection; obtain contemporaneous actual mixture temperature/density or weighing to express the selected Mass/kg reference, never assume 1000 kg/m3. Preserve water and suspended/dissolved fractions separately: whole liquid mass is not pure-water mass or dry-pollutant mass. Require actual receiver, contract, gate state and treatment compatibility; this broad industrial-liquid locator does not establish background or hazard class. The same parcel cannot also carry this mill final-outlet elementary loads. Onsite inflow/recirculation stays internal; fluting-specific and untreated-to-environment routes remain rejected.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil`)

Fossil CO2 from actual natural-gas combustion; retain fuel composition/carbon and stack balance, including start-up and abnormal operation. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`; `jrc-ppb-2015`

###### carbon dioxide (biogenic) (`co2_bio`)

Biogenic CO2 from actual effluent biological degradation or captured biogas oxidation. Separate carbon origin, capture and storage changes; retain the LCI exchange even if a GHG reporting method excludes it. Do not assume a negative forest uptake in recovered-fibre input. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### carbon monoxide (fossil) (`co`)

Fossil carbon monoxide from actual natural-gas combustion, matched to outdoor releases. Biogenic CO requires a separate verified row if present; this fossil record cannot represent it. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`; `jrc-ppb-2015`

###### Nitrogen oxides (`nox`)

Actual outdoor NOx release from combustion. Record the NO/NO2 or NO2-equivalent quantity definition and prove monitoring-to-LCI/LCIA compatibility; Mass/kg alone is insufficient and the record does not prove NO2 equivalence. Keep basis pending if unconfirmed; exclude N2O and avoid summing overlapping NO/NO2 rows. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`; `jrc-ppb-2015`

###### sulfur dioxide (`so2`)

Actual outdoor sulfur dioxide, species CAS 7446-09-5; use fuel sulfur and outlet monitoring only for the actual boiler. Sulfur oxides aggregate and water/indoor SO2 records are not substitutes. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`; `jrc-ppb-2015`

###### methane (fossil) (`methane_fossil`)

Fossil methane leakage or combustion slip actually leaving the gas system/boiler; measure with source definition and operating coverage, not a delayed-emission correction flow. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`; `jrc-ppb-2015`

###### methane (biogenic) (`methane_bio`)

Actual methane loss from anaerobic treatment/biogas handling. Record generated, captured, flared/used and escaped quantities; internally used biogas is not an external methane release or avoided-fuel credit. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### nitrous oxide (`n2o`)

Actual nitrous oxide from combustion or biological treatment; preserve species CAS 10024-97-2 and outlet coverage separately from NOx. No universal treatment emission factor is prescribed. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-combustion`; `jrc-ppb-2015`

###### particles (PM2.5) (`pm25`)

Outdoor particles of aerodynamic size at or below 2.5 micrometres from actual stock handling, dry cutting/rewinding or boilers. Determine released mass after controls, not collected dust; preserve filterable/condensable definitions. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### particles (PM2.5 - PM10) (`pm2510`)

Outdoor particles above 2.5 and at or below 10 micrometres, on the same aerodynamic/method basis as pm25. Use measured size fractions; a cumulative PM10 result is not this bin. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### particles (> PM10) (`pm10plus`)

Outdoor particles above 10 micrometres on the same measured basis. Retain cutting/rewinding and yard fugitives where real; only derive from total-minus-PM10 with matching methods and nonnegative evidence. Do not stack cumulative total/PM10 on these disjoint bins. Medium: emissions to outdoor air, unspecified; use a verified more specific outdoor subcompartment when required by the real release. No default positive amount or emission factor.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-ppb-2015`

###### Water (`water_return`)

Liquid H2O actually returned to a documented freshwater receiver after onsite treatment, using the selected native Volume/m3 identity. Measure matched whole final mixed-effluent volume or wet mass, composition, actual mixture density and discharge temperature/state. Derive H2O-component mass from that whole stream and its independently measured water mass fraction or an equivalent verified component balance; divide by documented water density at discharge temperature to obtain this H2O volume. Whole mixed-effluent volume is not automatically pure-water volume. Retain the original whole-effluent volume separately for time/flow-matched pollutant-load integration; indicators are not additional water or whole-mixture masses. Include physically separate uncontaminated cooling return as its own measured branch, with its water composition established. Keep onsite circulation internal and exclude the parcel handed to external treatment from direct releases; real split branches need distinct records. No density or water fraction is defaulted. Verify the component-volume convention against the selected flow and assessment method quantity definition; unresolved compatibility remains pending.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### water vapour (`water_vapour`)

Water vapour released to outdoor air from drying/exhaust or water management; reconcile hood humidity and airflow or water balance with uncertainty. Keep it distinct from boiler condensate and liquid freshwater return; no historical evaporation ratio is copied.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### chemical oxygen demand (`cod`)

Final freshwater COD load as oxygen-equivalent mass, using matched flow-proportional unfiltered representative sampling and actual discharge flow. COD is an analytical indicator, not a chemical species; keep method and recovery. BOD/TOC remain QA/support data unless nonoverlapping characterization is demonstrated. Inventory individually identified released substances wherever possible, especially highly impacting substances; COD cannot hide them. Preserve compatible speciation and characterization boundaries to prevent duplicate characterization of aggregate and constituent loads.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### nitrogen, total (excluding N2) (`tn`)

Final freshwater total nitrogen excluding molecular N2, as elemental N mass. Include organic/inorganic fractions consistent with the actual analytical method; inorganic-only monitoring is not TN. Collect separately identified actual nitrogen species wherever possible and retain their species identities; total N cannot hide highly impacting constituents. Reconcile elemental-N totals and constituent masses on compatible bases and prevent overlapping characterization.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### phosphorus, total (`tp`)

Final freshwater total phosphorus as elemental P mass. Preserve digestion/analysis definition and separately identified actual phosphorus species wherever possible; the aggregate must not hide highly impacting constituents. Reconcile P and species mass bases and prevent overlapping characterization.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

###### Suspended solids to freshwater (`tss`)

Final freshwater suspended solids dry-mass load with retained filtration/drying method and particle coverage. Dissolved solids and the water-unspecified candidate do not establish a freshwater-specific identity; UUID remains unresolved.

- Selected flow: Suspended solids to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Use actual compatible reporting-period exchange divided by accepted net paper Q kg; retain the row-specific collection and balance conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ppb-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared mill burdens | First isolate directly attributable stages/meters and product campaigns. For remaining shared burdens use a demonstrated causal physical relationship; economic allocation is a disclosed sensitivity-supported last resort. Record coproduct function/status, method, shares and denominator. Waste treatment remains a burden; a revenue receipt alone does not establish a coproduct. | eu-pef-2021 |
| allocation_physical | physical and burden ledgers | Keep actual coproduct/waste masses unchanged in the physical ledger; partition environmental burdens in a separate allocation ledger. Do not multiply physical coproduct outputs by the paper burden share. Internal broke/white-water/biogas loops cancel internally after stock reconciliation and do not receive substitution benefits. | eu-pef-2021; jrc-ppb-2015 |
| allocation_no_credit | recovery and exported residues | This attributional mill dataset contains no automatic virgin-fibre, fuel, electricity, landfill or recovered-material substitution credit. Any separately requested consequential/system-expanded scenario requires an independently defined counterfactual, receiver/product equivalence and nonduplicated burdens; keep it outside this reference inventory. | eu-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Use one representative complete reporting period, including start-up, shut-down, rejects, abnormal emissions and stock changes. Record actual dates, operating coverage and uncertainty; no synthetic factory observation or collection result is implied. Q must be positive, net accepted mass at the declared as-sold moisture.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | testliner_mill | reference output | scale and lot quality | lot; accepted net mass Q; moisture wet basis; grammage; ply/fibre origin; product form; rejected output; core/wrap tare | Weigh calibrated net accepted reels/sheets and sample moisture by a validated oven-dry method to constant mass; retain conditioning and loss-of-solids limitations. Measure grammage by calibrated area/mass records; verify ply source and absent deinking. | kg; g/m2; moisture fraction | each lot and period reconciliation | Same declared complete reporting period | Declared mill, stages, supplier/receiver | per 1 kg reference flow | Calibration; traceable lots; method/QA; uncertainty and coverage |
| cp_material | testliner_mill | material/chemical/packing | delivery and consumption balance | batch; material CAS/grade; legal status; supplier; gross/tare; moisture; purity/active solids; opening/closing stocks; purchase; consumption; upstream operations | Reconcile weighed deliveries, opening/closing stocks and issue records to net use by stage/campaign. Keep product/waste status proof and documented origin; retain solution carrier water separately from dry active ingredient, without duplicating purchased solution mass. | kg | each delivery/issue; monthly balance | Same declared complete reporting period | Declared mill, stages, supplier/receiver | per 1 kg reference flow | Calibration; traceable lots; method/QA; uncertainty and coverage |
| cp_utility | testliner_mill | electricity/steam/gas | meter and supplier quantity definition | meter; voltage; grid; supplier reference unit/basis; reading intervals; steam T/P/quality; inlet/return enthalpy; condensate mass; gas T/P/composition/Z; heating-value basis | Read calibrated supply/stage meters and reconcile bills/generation. Convert kWh with 3.6 MJ/kWh. For steam retain enthalpy and condensate balance separately from supplier GCV/MJ definition; no net-heat assumption. For gas use supplier-compatible reference conditions and documented gas-state correction, never an arbitrary mass coefficient. | MJ; m3; original meter units | continuous/period readings | Same declared complete reporting period | Declared mill, stages, supplier/receiver | per 1 kg reference flow | Calibration; traceable lots; method/QA; uncertainty and coverage |
| cp_water | testliner_mill | abstraction/effluent/vapour | meters and outlet laboratory | source/receiver; whole-effluent volume and wet mass intervals; actual mixture density/state; independent H2O mass fraction; water density at discharge temperature; inlet/outlet stocks; hood flow/humidity; COD oxygen equivalent; TN as N; TP as P; TSS dry mass; detection limits; sample timestamps; external treatment | Meter abstraction/supply and final discharge independently; sample matched final outlets using flow-proportional composite samples or justified alternatives, laboratory method/QA and actual flow. Reconcile evaporated water with measured humidity/airflow or water balance uncertainty. Keep onsite inflow/recirculation internal and external treatment handover distinct. For the external Waste liquid Mass/kg locator, retain original volume and apply actual mixture density/temperature or direct weighing; collect water fraction separately and never substitute liquid mass for water or dry pollutant load. For direct water_return additionally collect matched whole final-effluent volume or wet mass, actual mixture density and discharge temperature/state; derive H2O mass using an independently measured water mass fraction or verified component balance, then divide by documented water density at that temperature for H2O-component volume. Preserve bulk effluent volume separately for pollutant-load integration. Verify this component-volume convention against the selected flow and assessment method quantity definition; unknown composition, density or convention remains pending without defaults. | m3; kg; original lab concentration units | continuous flow; representative composites and all abnormal intervals | Same declared complete reporting period | Declared mill, stages, supplier/receiver | per 1 kg reference flow | Calibration; traceable lots; method/QA; uncertainty and coverage |
| cp_air | testliner_mill | outdoor gas/particle | source test and operating records | outlet; species/CAS; fossil/biogenic origin; concentration; gas flow; normal T/P; oxygen; wet/dry; filterable/condensable PM; aerodynamic cut; time; control/capture; uncertainty | Measure matched pollutant concentration and discharged gas flow with compatible reference conditions and operating coverage. Inventory real released mass including abnormal/fugitive intervals; retain NOx equivalence proof and disjoint PM fractions. Document equipment-specific surrogate/factor applicability when direct measurement is unavailable; AP42 averages are not site defaults or permit limits. | kg; original concentration/flow units | representative source tests and continuous activity; abnormal events | Same declared complete reporting period | Declared mill, stages, supplier/receiver | per 1 kg reference flow | Calibration; traceable lots; method/QA; uncertainty and coverage |
| cp_waste | testliner_mill | external reject/sludge/broke | weighing and transfer record | origin stage; one stream identity; wet mass; dry solids; fibre/plastic/metal/mineral composition; carbon; treatment; legal status; receiver; stock change | Weigh each external waste consignment with representative solids/composition samples and transfer/receiver records. Separate primary/biological sludge and nonmatching rejects; internal returns are not external wastes. Resolve actual recipient treatment and recoverability without automatic credit. | kg | each shipment; period reconciliation | Same declared complete reporting period | Declared mill, stages, supplier/receiver | per 1 kg reference flow | Calibration; traceable lots; method/QA; uncertainty and coverage |
| cp_balance | testliner_mill | internal physical balances | paired stage logs | link id; sender/receiver; period; quantity; state; dry solids; carbon/water; storage; measured residual; uncertainty; allocation ledger | Reconcile paired links, stocks and measured losses before allocation. Keep physical outputs unchanged; use measured causal drivers for shared environmental burdens and record allocation sums/sensitivity. Document residual uncertainty rather than impose a made-up tolerance. | kg; m3; MJ | same reporting period and campaigns | Same declared complete reporting period | Declared mill, stages, supplier/receiver | per 1 kg reference flow | Calibration; traceable lots; method/QA; uncertainty and coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Exchange per 1 kg reference flow = actual compatible period exchange / accepted net paper Q kg; the paper denominator remains as sold. Physical coproduct amounts remain measured; only the separate burden ledger receives allocation shares. | cp_output; cp_material; cp_utility; cp_water; cp_air; cp_waste | Normalized exchange | jrc-ppb-2015 |
| outlet_load | final air/water outlets | Integrate matched concentration × discharged volume over observed intervals, retaining unit conversion and actual normal/wet/dry/oxygen bases. Keep COD oxygen equivalent, TN as N and TP as P; do not invent a total-N or NOx equivalence. | cp_air; cp_water | Actual period released load | jrc-ppb-2015 |
| balance_check | stock and internal links | Dry solids = measured wet mass × (1 − measured wet-basis moisture); reconcile dry fibre/additives/losses and separate water/carbon ledgers using stock changes and uncertainty. No assumed yield, carbon content or closure tolerance. | cp_output; cp_material; cp_balance; cp_water; cp_air; cp_waste | Reconciled physical balances | jrc-ppb-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all exchanges | Check name, CAS, route, medium/submedium, origin, reference property/unit and raw metadata consistency. Retain explicit classifications/quantity-basis defects; UUID success does not cure them. | cp_material; cp_air; cp_water; supplier evidence |
| dq_primary | amounts and applicability | Representative actual measurements, traceable period and justified estimates only; unknown differs from zero. Historical EU/mill examples are not universal recipes or amount defaults. | all collection protocols |
| dq_background | upstream and treatment links | Require accepted raw-material state, previous recovery operations, actual utility route/reference basis and receiver-specific waste treatment. Disclose missing links and quantify sensitivity when support becomes available. | cp_material; cp_utility; cp_waste |
| dq_balances | physical and allocated inventory | Retain original measured physical accounts and a separate burden allocation ledger; flag nonclosing residuals and overlapping analytical/emission definitions. | cp_balance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | reference and applicability | Require exactly one final finished-product reference output, 1 kg net paper at actual as-sold moisture. Confirm natural-brown/uncoated grade, 100% externally recovered dry-fibre origin, no deinking/bleaching, actual stock route and every qualifier. An unresolved reference UUID blocks authored delivery. | jrc-ppb-2015; fefco-paper-production |
| validation_measurement | all rows | EN/ZH must share the same reference mass, normalization and collection aggregation. Require property/unit compatibility, calibrated records, moisture/solids basis and matched period. Gas volume conditions, steam supplier heat basis and NOx equivalence remain pending until proven; identity resolution is not a complete background dataset. | jrc-ppb-2015 |
| validation_balances | physical loops and final releases | Reconcile internal links and stock changes before normalization/allocation; confirm external reject/sludge composition and receivers. Do not duplicate external treatment loads, water abstraction and supply, internally captured dust/biogas, cumulative PM bins, COD/BOD/TOC or nutrient totals/constituents. Retain biogenic CO2. | jrc-ppb-2015 |
| validation_completeness | completed foreground package | Missing exchange identity, route/amount, analytical or supplier reference basis, or unexplained balance residual remains a specific gap, never zero. Record performed/skipped checks and uncertainty. Measured non-occurrence differs from missing data; this method does not establish scientific review, legal classification or TIDAS schema approval. | jrc-ppb-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributed foreground mill production unit for the bounded testliner grade |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route/grade-compatible liner input for downstream corrugator models after unresolved dataset evidence is supplied |
| excluded_use | Unqualified general CPC coverage; white/deinked/mixed-virgin/specialty routes; complete boxes; credit scenarios; a generic measured plant recipe |
| required_metadata | Every reference qualifier; physical boundary; upstream recovery allocation; complete raw records and normalized inventories; period; source/background references; method and allocation ledger |
| required_quality_disclosure | Confirmed/conditional/missing identities; reference-basis compatibility; omitted scope; measurement uncertainty; residuals; checks performed/skipped; remaining evidence gaps |
| update_trigger | Changed fibre grade/status or ply; deinking/bleaching/sizing route; utility supply; treatment/receiver; new reliable evidence or resolved identity/basis debt |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-ppb-2015 | official_guidance | JRC (2015), Best Available Techniques Reference Document for the Production of Pulp, Paper and Board. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Sections 6.1.1–6.1.2, Figure 6.1 (printed pp.550–555), 6.2.2 water/wastes; 7.1 forming/drying/sizing, 7.1.4 broke (printed p.665/PDF p.703), 7.1.10 cutting dust (printed p.670/PDF p.708); 2.2.2 monitoring. Process scope and measurement support only; historical examples/BAT quantities are not defaults. |
| fefco-paper-production | handbook | FEFCO, European Database for Corrugated Board Life Cycle Studies: Paper production process. https://www.fefco.org/lca/dscription-of-production-system/paper-production | Recovered-container slushing/cleaning; normal absence of deinking; multi-ply testliner, starch sizing and reel dispatch. Industry description only, no generic numerical recipe or automatic recycling allocation adopted. |
| smurfit-wt2000 | handbook | Smurfit Kappa, Testliner WT2000. https://www.smurfitkappa.com/us/products-and-services/containerboard/testliner-wt2000 | Specific white-top recycled product with deinked top ply; counterevidence for a universal non-deinking claim. Excluded here; location of deinking and amounts are not inferred. |
| epa-gas-combustion | official_guidance | US EPA, AP-42 §1.4 Natural Gas Combustion (October 2026, retained disclaimer edition with 10/26 page footer). https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Actual gas-boiler firing/emission screening and limits of factor use, pp.1.4-1–1.4-3. Not applicable to paper dust, biogas or non-gas boilers; no default factors or fuel composition adopted. |
| eu-pef-2021 | official_guidance | European Commission (2021), Recommendation (EU) 2021/2279, Annex I §4.5, pp.63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Allocation hierarchy and evidence requirements for substitution. This PCR chooses an attributional no-credit foreground inventory; it does not adopt the full PEF/CFF recycling formula or claim PEF compliance. |
