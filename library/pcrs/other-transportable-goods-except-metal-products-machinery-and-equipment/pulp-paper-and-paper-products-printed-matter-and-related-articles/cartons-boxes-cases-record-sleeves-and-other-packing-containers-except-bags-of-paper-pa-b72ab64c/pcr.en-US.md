---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cartons-boxes-cases-record-sleeves-and-other-packing-containers-except-bags-of-paper-pa-b72ab64c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unprinted C-flute starch-glued regular slotted corrugated boxes

## 1. Scope and Applicability

This PCR covers one box construction: an unprinted, uncoated C-flute single-wall regular slotted case, FEFCO 0201-G, made from purchased corrugated sheets with an aqueous natural-starch manufacturer joint. The net product is supplied glued and flat, ready for downstream erection; filling and top/bottom flap sealing are outside the foreground. FEFCO distinguishes sheet plants, box plants and integrated plants and explicitly allows converting without printing. [fefco-box-production; fefco-code-2022]

The foreground uses electric slotting/scoring, folding/gluing and conditioning without combustion or purchased steam/heat; rinse is exported for external treatment. Corrugation, pulp/base-paper production, printing, coatings, laminating, stitching, hot melts, synthetic joint binders, solid-board folding cartons, die-cut styles, office articles and other 32153 products are excluded. Any actual excluded operation requires a completed scope/method/inventory extension before use. Ink/varnish absence must be demonstrated by order and issue records: the recycling original treats ink as a formulated material with colorants, resin, carrier and additives, so an unknown printing route cannot be assigned zero. Adhesive guidance supports starch as one box-making choice, not a dosage or a guarantee of no emissions. [fefco-box-production; fefco-recyclability-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cartons-boxes-cases-record-sleeves-and-other-packing-containers-except-bags-of-paper-pa-b72ab64c |
| classification_refs | CPC 3.0 32153; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted uncoated C-flute single-wall 0201-G flat glued boxes |
| excluded_products | Other box constructions/materials/finishes; bags and office articles; upstream sheet manufacture |
| representative_product | One-piece four-panel slotted box with manufacturer glue overlap and central-meeting outer flaps |
| production_route | Purchased sheets → slot/score → fold/starch-glue → condition/accept → flat bundle |
| market_state | Net accepted flat glued empty box at converter gate; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the stated empty RSC structure for downstream erection and containment with declared order quality |
| How much | 1 kg |
| How well | Actual dimensions, flap/joint geometry, C flute, board grade/moisture, joint acceptance and compression/handling specification if required by customer; no universal test value |
| How long or cycle | One manufacturing campaign and gate delivery; downstream package lifetime/number of uses not prescribed |
| reference_flow_link | `box_out` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 0201-G drawing/dimensions; single-wall C flute; unprinted/uncoated status; grade/fibre fractions; compatibility with selected 16.6% primary/83.4% recycled total-fibre identity; actual board fibre >=80% and recycled content; adhesive supplied wet/dry state/solids/additives; net mass/gate moisture/packaging tare; glue-joint order acceptance; factory/period/electric supply/delivery point; wastewater receiver; upstream boundaries |

Required qualifiers belong in the completed data package. The reference is 1 kg net gate-moist box, not 1 kg oven-dry fibre and not one assumed-weight box. Verify identity restrictions separately from supplier dataset quantity/technology compatibility. The reference record fractions are not a production recipe or environmental-burden allocation; unknown compatibility blocks completed dataset acceptance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is same-period calibrated accepted net box output in kg after bundle tare and rejects, including gate moisture and retained joint solids; Q must be positive. All rows use per reference flow. |
| moisture_state | board/glue/product/residues | Mass | kg | Keep supplied wet mass, measured solids/water and actual volatile applicability separately. Adhesive wet mass is not dry starch mass. |
| electric_units | electricity_in | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use actual delivered electrical energy: verified energy-unit relation is 1 kWh = 3.6 MJ. Do not derive steam heat or combustion efficiency. |
| water_volume | water_in | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter added water volume. Convert for the separate physical water ledger using sampled density and temperature, not database assumed density. |
| particle_bins | outdoor air releases | Mass | kg | PM2.5, >2.5 to 10 and >10 are exclusive measured aerodynamic bins. Compatible cumulative differences are allowed; unknown splits remain pending and collected dust is separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unprinted uncoated C-flute sheets and ready aqueous starch adhesive received at converter |
| starting_condition_role | Gate-to-gate box-converting start; upstream production burdens remain required |
| product_classification_scope | The restricted RSC subset of CPC 32153, separate from 32151 sheet manufacture |
| recursive_input_rule | Internal reuse does not cross the boundary. Purchased same-category boxes for repacking are distinct measured inputs with supplier cut point, never a silent deduction or second reference output. |
| upstream_dataset_requirement | Each sheet background includes actual liner/fluting manufacture, corrugation, embedded flute adhesive and utilities once; joint adhesive supply and purchased utilities need compatible reference bases. Declare transport coverage/endpoints and add individual uncovered transport exchanges. |
| disclosure | Actual site, period, sources, moisture, foreground electric route, supplier cut points, packing components, receivers and unresolved bases; inherited examples are not measurements |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_sheet_box | converter | Begin at sheet receipt. Include slotting/scoring, folding, wet joint gluing, conditioning, acceptance, dust capture, cleaning and gate bundling with all attributable utilities. | fefco-box-production; fefco-code-2022 |
| boundary_upstream | board_in | Supplier pulp/papermaking/corrugation and embedded starch are included once in upstream sheets, not reinjected as converter inputs; do not substitute flat-layer board or corrugator-only results for finished boxes. | fefco-box-production |
| boundary_ink | product | Demonstrate no print/varnish from order, inspection and chemical issues. Printed, coated or laminated variants require explicit ink/plate/cleaner/waste/species and utility methods before use. Starch glue or water-based ink labels do not demonstrate zero air release. | fefco-box-production; fefco-recyclability-2025 |
| boundary_residuals | converter | Export rinse for external treatment; no on-site biological treatment or combustion occurs in this route. If found, reassess scope and include actual species, including biogenic CO2, instead of assuming zero from GHG reporting convention. No pulper means exported trim is not internally recycled mill broke. | ec-paper-bref-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| box_converter | Sheet-to-flat-box converting and gate bundling | required | The declared electric unprinted C-flute 0201-G starch-joint route | foreground | 1 kg reference flow |

A single foreground unit aggregates actual transfers of the same box between slotting, joint formation and bundling. Keep stage meters and unallocated physical mass/water/carbon diagrams; every retained internal link must carry equal amounts at both ends. There is exactly one finished reference output. Add each actual extra packaging, lubricant, chemical, transport or utility exchange individually before dataset completion; the finite inventory does not certify every factory configuration.

### Process: Sheet-to-box conversion (`box_converter`)

#### Inputs

##### Product flows

###### Received C-flute single-wall sheets (`board_in`)

Two unprinted uncoated liners enclose one C-fluted medium. Collect each grade, fibre origin, received moisture, sheet mass and upstream corrugator dataset. This flow requires C/E/F construction, fibre at least 80% and recycled material; this PCR uses only C flute and does not infer any generic furnish. Corrugator starch, liner/fluting manufacture and supplier drying are already upstream.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_board`
- Sources: `fefco-box-production`

###### Purchased aqueous starch joint adhesive (`glue_in`)

Purchased ready-to-use aqueous natural-starch formulation is applied to the manufacturer joint. Record supplied wet mass, solids, starch origin/modification, additives, SDS and background wet/dry reference. Do not also input its carrier water or upstream ingredients; extra on-site dilution water is separate. Glue consumption and VOC absence are never inferred from the database or recycling guidance.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_glue`
- Sources: `fefco-recyclability-2025`

###### Added dilution and cleaning tap water (`water_in`)

Meter actual external additions in m3. Supplied glue water and internal recirculation are not added again. Verify supplier delivery and treatment boundary, geography and reference volume; the located Hong Kong supply record is not a universal background. Physical water balance uses measured temperature/density, not the record screening mass coefficient.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `fefco-recyclability-2025`

###### Delivered low-voltage electricity (`electricity_in`)

Record sheet handling, slotting/scoring, folding/gluing, ventilation, dust extraction, cleaning and bundling loads with non-overlapping meters. The selected source is CN grid-average alternating current below 1 kV at the user; verify actual country, year, supplier mix, transformer losses and delivery point before provider linkage. Convert metered kWh to MJ using the verified energy unit group; Net calorific value is the actual database property, not a steam-enthalpy basis.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `fefco-box-production`

###### Bundle strapping (`strap_in`)

Record only actual PP strapping issued for flat-box bundles; verify polymer grade, additives, width and mass. Resin, yarn, farm-gate twine and nylon cable ties are not verified strapping identities. UUID remains unresolved. No pallet, film or other packing is silently represented by this row; add actual components separately before dataset completion.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `fefco-box-production`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted flat glued box (`box_out`)

One unprinted uncoated C-flute single-wall FEFCO 0201-G structure, with a glued manufacturer joint and top/bottom outer flaps meeting centrally on erection; supplied flat, before filling and flap sealing. Net accepted mass includes retained joint solids and gate moisture, excludes bundle packaging and rejects. The selected reference record contains 16.6% primary and 83.4% recycled fibre: verify actual total-fibre split and provider basis before using this UUID in a completed dataset; these are identity compatibility conditions, not a factory recipe, an allocation share or a consumption default. Incompatible products require another verified reference identity, never silent widening.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_mass`
- Sources: `fefco-box-production`; `fefco-code-2022`

###### Strapping physically dispatched with boxes (`strap_dispatch`)

Record the full actual PP strapping mass crossing the gate with accepted flat-box bundles, separately from net box mass, strapping offcuts and stock changes. Reconcile issued strap = dispatched strap + actual offcuts/losses + stock increase, with returns counted once. This is accompanying packaging, not another box function or co-product. Its physical output does not cancel the purchased strapping burden or create recycling credit; burden allocation cannot shrink physical dispatched mass. Finished PP-strapping identity remains unresolved; neither adhesive BOPP tape nor metal bands or coated steel rope represent it.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `fefco-box-production`


##### Waste flows

###### Exported corrugated trim and rejected boxes (`trim_out`)

The broad paper/paperboard-waste identity conditionally includes the measured unprinted corrugated trim and rejected boxes; retain specific C-flute composition, joint-starch contamination, moisture and receiver acceptance. Weigh this separately from collected fine dust. Converter has no pulper: shipment for recycling is external waste, not internal mill broke and not an automatic recovered-product credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `fefco-box-production`

###### Captured paper dust (`dust_out`)

Weigh actual captured industrial paper-cutting dust separately, retaining cellulose, filler and starch content, moisture, collector opening/closing stock and actual receiver. This is a Waste flow for collected dust, not kiln ash or an atmospheric particle interval. Internal return is not exported; do not subtract the same captured mass again from measured post-control emissions. No collection efficiency or treatment route is preset.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ec-paper-bref-2015`

###### Exported cleaning effluent (`effluent_out`)

Keep actual separately collected untreated aqueous joint-equipment wash liquid distinct from concentrated discarded glue. Measure whole-mixture wet kg directly or as measured V_eff*rho_eff(T), not pure-water kg or assumed water density. Retain starch, additives, solids/COD where relevant, actual water fraction and receiving-treatment requirements. Pollutant loads use measured whole effluent volume. External treatment is linked once; this transfer is not also a direct aquatic water/pollutant release or a second purchased water supply. Broad liquid-waste identity prescribes no hazard classification or treatment route.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `fefco-recyclability-2025`

###### Separate discarded joint glue (`glue_waste_out`)

Weigh the actual separately collected liquid spoiled or unused aqueous starch joint glue in its whole wet supplied form. Record starch, other solids/additives, water fraction, packaging separation and the actual receiver. Dried, gelled or solidified residues require separate applicable identities and physical rows. Exclude glue already in rinse or rejected boxes. This liquid-waste identity is not a default hazardous designation, wafer-production residue, recovery yield or disposal technology.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `fefco-recyclability-2025`

###### PP strapping offcuts sent for recycling (`strap_waste_out`)

This PP waste identity has CAS 9003-07-0 and a mechanical-recycling route; use only for separately collected actual PP strapping offcuts accepted by that receiver. Mixed polymer, contaminated waste or another disposal route needs another compatible identity. Neither downstream recycling yield nor lifespan in its comment is a foreground default.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `fefco-box-production`

##### Elementary flows

###### PM2.5 emitted outdoors (`pm25_out`)

Measure aerodynamic PM2.5 from cutting/handling exhaust and fugitives after actual capture. Outdoor-air unspecified is used only if more specific receiving context is not established. BREF paper finishing motivates screening by physical analogy; it supplies no converter factor or size split.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `ec-paper-bref-2015`

###### Exclusive PM2.5 to PM10 outdoor fraction (`pmcoarse_out`)

Record only particles above 2.5 and up to 10 micrometres. Matched cumulative PM10 minus PM2.5 may establish this fraction only with identical sampling definitions and conditions. Never sum cumulative PM10 and PM2.5; unmeasured fractions remain pending.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `ec-paper-bref-2015`

###### Exclusive particles above PM10 outdoors (`pmover10_out`)

Record only particles larger than 10 micrometres crossing to outdoor air after collection controls. Comparable total-particulate minus PM10 can be used with matched conditions; review negative differences and detection-limit uncertainty, never clip or invent splits.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `ec-paper-bref-2015`

###### Evaporated water to outdoor air (`vapour_out`)

Determine net process water evaporation from matched board/glue/addition/product/residue/effluent/stock water measurements and ventilation humidity correction where measured. This is H2O, CAS 7732-18-5, outdoor air unspecified; not water abstraction, boiler steam or liquid discharge. Review unexplained water-balance residual instead of treating it automatically as evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect this external exchange under the linked protocol and normalize per reference flow; missing measurement remains pending, never zero.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `fefco-recyclability-2025`

Survey actual slotting/scoring tools, belts, glue applicators, lubricants, cleaning agents and replaced consumables before completing a plant inventory. Retain real issue/return, stock, composition, wear/service and full discarded masses; add each actual exchange as an atomic measured row. No universal service life, maintenance kit or replacement rate is assumed.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared units | Prefer measured subdivision; investigate system expansion consistently with study scope; when allocation is necessary justify relevant physical relations before other relations such as economic allocation, and retain sensitivity. No universal share. | eu-pef-allocation-2021 |
| allocation_physical | physical and burden ledgers | Preserve actual gross product, waste, water and carbon quantities and equal internal links in a physical ledger. Apply allocation only in a separate environmental-burden ledger; never multiply physical co-product output by a burden share. | eu-pef-allocation-2021 |
| allocation_waste | trim_out; strap_waste_out | Positive waste value alone does not establish a co-product. Retain material state, actual receiver/continuing use and waste or product decision. No automatic avoided-paper/plastic credit or second upstream charge for internal returns; any broader recycling method needs separately disclosed assumptions. | eu-pef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | box_converter | reference output | scale/meter/supplier/laboratory records | gross/tare/net Q; accepted/rejected production; order/drawing/0201-G; dimensions; C flute; fibre split/grade; gate moisture; joint acceptance; dispatch/stock | Calibrated net weighing and representative gate-moisture tests; reconcile production, dispatch and stocks | kg; mass fraction; dimensions | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |
| cp_board | box_converter | purchased board | scale/meter/supplier/laboratory records | supplier/mill; grade; C-flute geometry; unprinted/uncoated declaration; recycled/primary fibre; filler; sheet mass/moisture; issues/returns/opening/closing stock; upstream corrugator basis | Per-grade calibrated receipt and stock balance; independently verify supplier paper/corrugation cut point | kg; mass fraction | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |
| cp_glue | box_converter | joint adhesive | scale/meter/supplier/laboratory records | supplier/SDS; natural starch origin/modification; supplied wet mass; solids; additives/CAS/volatiles; dosing/returns/waste/stock; provider wet/dry basis; joint acceptance | Calibrated dosing/stock balance, validated solids and formulation review; no double count of carrier water or supplied ingredients | kg; mass fraction | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |
| cp_energy | box_converter | electricity | scale/meter/supplier/laboratory records | stage kWh; meter coverage; voltage; supplier geography/mix; transformers; idle/start/stop; on-site combustion/heat absence | Calibrated non-overlapping interval meters and documented attributable shared-load allocation | kWh; MJ | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |
| cp_pack | box_converter | strapping and extra gate packaging | scale/meter/supplier/laboratory records | PP strapping grade/additives/width; full issued/dispatched/returned masses; opening/closing stock; actual scrap/loss; finished-bundle tare; pallet/film/other component presence | Weigh individual issued packing components; audit all external packaging; reusable on-site handling stays internal | kg | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |
| cp_waste | box_converter | each solid/wet waste export | scale/meter/supplier/laboratory records | stream; mass/moisture/solids/carbon; starch/filler/polymer contamination; captured dust; collector stocks; internal return; receiver/treatment/acceptance | Weigh separate loads with representative composition and receiver tickets; reconcile collector and waste stock | kg; mass fraction | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |
| cp_air | box_converter | each actual outdoor release | scale/meter/supplier/laboratory records | source/exhaust/fugitive; aerodynamic cut; concentration; gas volume T/P wet/dry; hours; actual capture; blanks/detection limits; outdoor medium; uncertainty; volatile-species screening | Site-approved representative size-resolved exhaust/fugitive sampling and matched concentration/volume integration; formulation/site screening establishes absence or need for extra species | kg; gas volume; concentration | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |
| cp_water | box_converter | water, rinse and vapour | scale/meter/supplier/laboratory records | external m3; temperature/density; board/glue/product/waste water; separate rinse mass/solids/COD; receiver; water stocks; ventilation humidity/boundary | Calibrated water/effluent meters and sampled density/solids; matched gross physical water balance; investigate residuals | m3; kg; mass fraction | each lot and matched stage interval | full declared representative period including starts/stops, rejects and stock changes | declared converting line and attributable shared loads | per reference flow | calibration; SOP; supplier definitions; sample chain; raw records; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all non-reference rows | q_i = A_i / Q; A_i is the same-period external exchange total in its row unit; Q is accepted net gate-moist box kg. | cp_mass; cp_board; cp_glue; cp_energy; cp_pack; cp_waste; cp_air; cp_water | row amount per reference flow |  |
| electricity_mj | electricity_in | A_MJ = 3.6 * A_kWh; verified energy-unit conversion, metered at the declared delivery point. | cp_energy | MJ per reference flow |  |
| solids_water | board/glue/box/wastes | m_solid = m_wet * s; m_water = m_wet * (1-s); s is measured solids mass fraction with method/volatile applicability checked. Keep gate-moist reference mass unchanged. | cp_mass; cp_board; cp_glue; cp_waste; cp_water | separate physical solids and water |  |
| whole_liquid_mass | effluent_out; glue_waste_out | A_wet_kg = V_m3*rho_mixture(T), or direct calibrated whole-wet weighing. Water-component mass = A_wet_kg*x_water; retain actual solids/other constituents and whole effluent volume for pollutant loads. Divide by the same Q once. | cp_water; cp_waste; cp_mass | kg per reference flow and separate physical water balance |  |
| physical_balance | box_converter | For solids, water and carbon separately: inputs = net product + accompanying packaging dispatched + exported waste + environmental release + stock change; equal internal links cancel. Water mass = volume * measured density. Measure carbon content and origin; no generic carbon fraction or CO2 factor. | cp_mass; cp_board; cp_glue; cp_pack; cp_water; cp_waste; cp_air | unallocated physical ledger and residual |  |
| pm_exclusive | pm25_out; pmcoarse_out; pmover10_out | PM2.5-10 = matched cumulative PM10 - PM2.5; >10 = comparable total particulate - PM10. Only compatible definitions/conditions/detection limits allow subtraction; investigate negative differences; otherwise measure the exclusive bin. | cp_air | exclusive kg per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | Verify full multilingual name, species/CAS when relevant, material form, hard route, medium/submedium, classification and property/unit; physical identity does not prove provider quantity compatibility. | supplier records; direct flow/property/unit records |
| measurement | all protocols | Use matched actual site/period, calibrated measurement and uncertainties. Missing quantities, unknown receiver/particle split or compatibility are pending, never default zero or inherited recipe. | cp_mass; cp_board; cp_glue; cp_energy; cp_pack; cp_waste; cp_air; cp_water |
| emission_coverage | actual route | Screen dust, retained adhesives/additives and actual utility/waste facilities. Add every relevant atomic species before completion; preserve biogenic CO2 when actually present even if a GHG account treats it differently. No assumed incineration/biological loss occurs inside the declared route. | cp_air; cp_glue; cp_energy; cp_waste; actual site diagram |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product | Verify 0201-G geometry, single-wall C flute, absent printing/coating and actual wet starch joint; classification name cannot establish method applicability. | fefco-code-2022; fefco-box-production |
| validate_reference | box_out | Exactly one product output is linked by box_out or the reference UUID; it is 1 kg net gate-moist box. Verify record fibre restrictions and background compatibility before complete dataset acceptance. |  |
| validate_boundary | box_converter | Upstream corrugation/embedded glue and converter joint glue are distinct; prove no overlapping manufacture or utilities and no direct-water emission double count for exported rinse. | fefco-box-production; fefco-recyclability-2025 |
| validate_physical | all rows | Every protocol and quantity uses the same positive Q and per reference flow. Review mass/water/carbon residuals and equal internal links before a separate allocation ledger. | eu-pef-allocation-2021 |
| validate_air | particle and vapour rows | Three particle bins are exclusive and separate from captured dust; do not add cumulative totals. Missing source/species measurements or unexplained water residuals prevent complete acceptance; no zero inferred from unprinted or starch labels. | ec-paper-bref-2015 |
| validate_completeness | dataset | Resolve or explicitly review blank UUIDs, actual added packing/chemicals/transport and provider bases before calling a dataset complete. Guidance identity is not measurement evidence, scientific approval or product certification. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Compatible empty flat-box input to product-packing models; upstream sheet dataset remains separate |
| allowed_use | Only actual within-scope boxes with completed inventory, identity and quantity compatibility |
| excluded_use | All CPC 32153 coverage; printed/solid-board/die-cut containers; filled package service comparison; unknown fibre/provider bases |
| required_metadata | Structure/drawing, dimensions, grade/fibre split, net mass/moisture, joint formulation, gate state, supplier cut points, place/period/utilities, receivers and transport |
| required_quality_disclosure | Measurement/identity gaps, provider bases, calibration, particle coverage, balances/residuals, allocation, uncertainty and review state |
| update_trigger | Change in structure/board/glue/printing, supplier/energy/effluent route, packaging, period or material source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fefco-box-production | extension_guidance | FEFCO, Corrugated board production, publisher snapshot read 2026-10-11; https://www.fefco.org/lca/dscription-of-production-system/corrugated-board-production | Construction, sheet/box/integrated plant boundaries and RSC converting; printing may be absent; examples and industry averages are not quantities for this route. |
| fefco-code-2022 | standard | FEFCO International Fibreboard Case Code, 2022, 12th edition, pp.5 and 18; https://www.fefco.org/sites/default/files/files/styles/thumbnail/public/FEFCO%20Code_WEBprotected.pdf | 0201 construction drawing and glued manufacturer-joint suffix G; no universal geometry, quality limit or certification. |
| fefco-recyclability-2025 | extension_guidance | FEFCO, Corrugated Packaging Recyclability Guidelines, 2025, fourth edition, p.7 and Annex 1 PDF p.14; https://www.fefco.org/sites/default/files/documents/FEFCO-Recyclability-Guidelines-UPDATE%202025%20final_0.pdf | Starch adhesive for box making/closure; inks include resins/solvents/additives. Recycling guidance does not establish a glue recipe, VOC-free production or recovery credit. |
| ec-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF, 2015, section 7.1.10 printed p.670/PDF p.708; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Paper-machine cutting dust and trim: only qualitative physical analogy motivates independent converter dust measurement. No converter emission factors, energy/water defaults or mill-broke recycling assumption. |
| eu-pef-allocation-2021 | official_guidance | Commission Recommendation C(2021) 9332 final / (EU) 2021/2279, Annex I 4.5, pp.63-64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Subdivision/system expansion, physical then other justified allocation hierarchy; no fixed shares or claim of complete PEF conformity. |
