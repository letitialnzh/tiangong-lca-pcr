---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-b33b549b
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unglued continuously shaped bamboo strips

## 1. Scope and Applicability

This methodology covers discrete, unassembled bamboo strips from one culm, with a deliberate continuous tongue, groove, rebate, bead or other declared longitudinal edge/face profile. Plain rectangular planing, rough splitting, culms and boards sold without a continuous profile do not qualify. Verify a cross-section drawing, photographs, bill of materials, production record and sales description before selection. Market wording such as “solid bamboo flooring” does not establish unglued construction. Sources: `un-cpc3-2025`, `inbar-industrial-bamboo-2015`, `yu-bamboo-flooring-2019`.

The foreground starts with received dry, unglued strip blanks and includes mechanical profiling/trimming, sanding and dust control, optional verified solvent-free UV polyurethane finishing, inspection and packaging. No in-plant wet treatment, thermal modification, drying or combustion route is prescribed. Delivered blanks must carry compatible upstream evidence for harvesting, strip preparation, treatment and drying; a gate-to-gate inventory alone cannot be presented as cradle-to-gate.

Exclude every glued or engineered bamboo blank, including parallel-strip lamination, cross-ply plywood, veneered panels, strand-woven/scrimber/densified products, assembled parquet panels, installation and structural members. INBAR distinguishes strip lamination, fibre compression and flattening; Yu et al. describe UF laminated flooring and phenolic scrimber with separate panel-making and mortise/painting stages. These sources do not settle the classification of a particular glued profiled article. Do not import their glue rates, yield, density, heat, lifetime, combustion assumptions or negative-carbon conclusion. Adhesive use or engineered feedstock triggers a separate applicability decision; it is not an optional row in this unglued route. Surface coating never authorizes lamination. Sources: `un-cpc3-2025`, `inbar-industrial-bamboo-2015`, `yu-bamboo-flooring-2019`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-b33b549b |
| classification_refs | CPC 3.0 31212; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Single-culm unglued unassembled continuously profiled bamboo strips; documented coated or uncoated state |
| excluded_products | Glued/engineered bamboo; bamboo plywood; assembled flooring; plain-planed stock; untreated culms; other coating routes without review |
| representative_product | One unglued bamboo moulding with declared continuous cross-section |
| production_route | Received dry strip → profile/sand/extract dust → conditional UV polyurethane coat → inspect/pack |
| market_state | Finished strip, unassembled, at factory gate; no service-life equivalence claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply continuously profiled unglued bamboo strip for subsequent use |
| How much | 1 kg accepted net finished product at declared moisture/coating state |
| How well | Verified continuous profile, dimensions/tolerances, species, grade and absence of adhesive/assembly |
| How long or cycle | One factory-gate production cohort; no installation or service duration assumed |
| reference_flow_link | `profile_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood, continuously shaped along any of its edges or faces (including strips and friezes for parquet flooring, not assembled, and beadings and mouldings) of bamboo `0fe2e549-0389-46bd-b0e0-a5cd53585138` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | bamboo species; single-culm unglued construction; continuous profile drawing; dimensions/tolerances; product grade; moisture and dry/wet basis; coating chemistry/state; no assembled flooring; blank upstream treatment/drying; factory/period; grid voltage/mix; packaging excluded from net reference mass |

This is a declared production quantity, not a verified functional equivalence for a floor or installed component. Qualifiers must be in dataset metadata or equivalent notes; absence makes applicability incomplete. The generic product UUID preserves its original label and is constrained here to the documented unglued strip.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `profile_reference` | Mass | kg | Weigh accepted net finished strip including retained coating and measured moisture; exclude all transport packaging. Use cp_reference. All inventory rows use the same final-product kg denominator. |
| `moisture_basis` | bamboo material rows | Mass | kg | Measure paired wet and oven-dry uncoated bamboo specimen masses; dry-basis moisture u = (wet mass - dry mass) / dry mass, dimensionless. Record sampling and constant-mass drying method. For coated specimens separate coating solids; do not count fossil coating carbon as bamboo. Wood Handbook equations are measurement definitions only, not bamboo property defaults. |
| `solid_volume` | bamboo material rows | Mass / solid volume | kg | Mass = measured solid material volume × paired measured density at the same moisture and coating state. Measure actual shaped cross-section, excluding grooves/voids; bounding-box, stacked/bulk volume and nominal wood density cannot substitute. Preserve a precise volume-reference flow where applicable with this verified conversion. |
| `electric_energy` | shaping_electricity; coating_electricity; pack_electricity | Energy | MJ | Record meter kWh and convert using 1 kWh = 3.6 MJ; retain raw readings and supply condition. Do not sum a parent meter and its child meter amounts. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry unglued single-culm strip blank received at the profiling site |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0 31212 subset; material shape/construction overrides sales labels |
| recursive_input_rule | Same-category previously profiled input is one separately quantified purchased or internal transfer with declared state and origin; do not recursively regenerate its prior profile production or double count reused scrap |
| upstream_dataset_requirement | Compatible bamboo harvesting/transport/strip preparation/treatment/drying and purchased electricity, abrasives, coating, packaging and external waste treatment; retain provider boundary and allocation |
| disclosure | Declare omitted upstream coverage; no onsite drying/boiler/gluing and no installation/use/end-of-life included. Do not turn excluded heat supply into zero upstream emissions |

### Boundary rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_identity` | Require physical proof of single-culm, non-glued continuous shaping and unassembled market form. Reject laminated/scrimber feedstock and assembled floors before guidance is applied. | `un-cpc3-2025`; `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |
| `boundary_complete` | Include handling, profiling, sanding, dust collection, optional compatible UV polyurethane finish and packing with actual losses. Source inventories do not replace site data. Upstream thermal processing and any residue combustion must retain complete separate supplier inventories, including biogenic CO2; GHG accounting conventions cannot delete LCI flows. | `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |

## 6. Process Inventory Structure

Profiling, conditional coating and packing form one integrated foreground unit with exactly one terminal product output. Keep stage-specific meters and mass ledgers, including equal physical handoffs at the same moisture/coating state; these handoffs are internal observations, not extra product outputs. Keep an unallocated physical process graph and a separate attributed environmental-burden account. Normalize physical cohort totals once by the same accepted final net product kg; no allocation share changes internal transfers or physical coproduct output. Close bamboo dry matter, water, coating solids, energy and biogenic/fossil carbon balances using raw records before attribution. The same material cannot be sold, disposed and counted as internal fuel. No concrete factory quantity or universal range is supplied.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| profile_production | Integrated profiling, conditional finishing and packing | required | Received dry unglued strip; coating only when individually proven | foreground | profile_reference |

### Process: Integrated profiling, finishing and packing (`profile_production`)

#### Inputs

##### Product flows

###### Dry unglued single-culm bamboo strip blank (`bamboo_blank`)

Received dry, non-impregnated strips from one culm, with no adhesive or laminated layers. Verify upstream drying/treatment history and specimen moisture; no green-culm processing is included.

- Selected flow: Dry unglued single-culm bamboo strip blank
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019`

###### Alternating current (`shaping_electricity`)

Meter profiling, trimming, sanding and dust extraction separately; this UUID applies only to grid-average customer-side alternating current below 1 kV.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `yu-bamboo-flooring-2019`

###### Abrasive paper, at plant (`abrasive_paper`)

Only paper-backed sanding consumable when used; keep belt substrate, grit and replacement records. A textile-backed belt requires its own flow.

- Selected flow: Abrasive paper, at plant `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `yu-bamboo-flooring-2019`

###### Solvent-free UV-curable polyurethane coating for bamboo (`polyurethane_coating`)

Only documented solvent-free UV polyurethane finishing compatible with the single-strip product; weigh supplied formulation, record solids/composition, and separate any independently supplied hardener or cleaner in an additional exact atomic row.

- Selected flow: Solvent-free UV-curable polyurethane coating for bamboo
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coating`
- Sources: `yu-bamboo-flooring-2019`

###### Alternating current (`coating_electricity`)

Only operating coating application, UV curing and extraction; use the same below-1-kV customer-side grid condition and no overlap with shaping meter totals.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `yu-bamboo-flooring-2019`

###### Polyethylene film (`pe_film`)

Only polyethylene packaging film if used; weigh net film consumed, keep polymer and shrink-process records, and exclude foam or other polymers from this row.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `yu-bamboo-flooring-2019`

###### Corrugated paperboard packaging carton (`carton`)

Only a finished corrugated paperboard carton if used; record fibre composition and net empty carton mass, excluding film and cushioning.

- Selected flow: Corrugated paperboard packaging carton
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: `yu-bamboo-flooring-2019`

###### Alternating current (`pack_electricity`)

Only inspection and electric shrink-wrapping when used under the same below-1-kV grid condition; fuel-fired shrink or drying requires an independently justified route.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `yu-bamboo-flooring-2019`

#### Outputs

##### Product flows

###### Unglued bamboo planer shavings coproduct (`bamboo_shavings`)

Only clean separately weighed shavings sold as a documented coproduct; retain dry mass, purchaser and value. Material sent for disposal belongs in a waste record instead.

- Selected flow: Unglued bamboo planer shavings coproduct
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `inbar-industrial-bamboo-2015`

###### Wood, continuously shaped along any of its edges or faces (including strips and friezes for parquet flooring, not assembled, and beadings and mouldings) of bamboo (`profile_reference`)

Final accepted continuously shaped unglued bamboo strip, sold unassembled, at declared moisture and coating state, with packaging excluded from reference mass.

- Selected flow: Wood, continuously shaped along any of its edges or faces (including strips and friezes for parquet flooring, not assembled, and beadings and mouldings) of bamboo `0fe2e549-0389-46bd-b0e0-a5cd53585138`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `un-cpc3-2025`; `yu-bamboo-flooring-2019`

##### Waste flows

###### Untreated unglued bamboo offcut waste (`bamboo_offcuts`)

Only separately weighed unglued untreated offcuts sent to external treatment; no glued/impregnated rejects.

- Selected flow: Untreated unglued bamboo offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `yu-bamboo-flooring-2019`

###### Collected unglued bamboo sanding dust waste (`collected_dust`)

Only captured bamboo sanding dust sent to external treatment; never count captured dust as air emission or again as shavings.

- Selected flow: Collected unglued bamboo sanding dust waste
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `yu-bamboo-flooring-2019`

###### Spent abrasive paper from bamboo sanding (`spent_abrasive`)

Only discarded paper-backed abrasive; weigh bamboo dust attached to it separately in the balance without duplicating collected dust.

- Selected flow: Spent abrasive paper from bamboo sanding
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `yu-bamboo-flooring-2019`

###### Uncured UV polyurethane coating waste (`coating_waste`)

Only unused uncured UV polyurethane paint sent to treatment; separately record cured solid scrap if present rather than merge it with this exchange.

- Selected flow: Uncured UV polyurethane coating waste
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `yu-bamboo-flooring-2019`

##### Elementary flows

###### particles (PM2.5) (`shaping_pm25`)

Only this disjoint particle size fraction actually emitted to outdoor air after controls, measured under cp_air. Cumulative PM10/TSP measurements require documented differences before entry; no wood-industry factor is prescribed.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `yu-bamboo-flooring-2019`

###### particles (PM2.5 - PM10) (`shaping_pm25_10`)

Only this disjoint particle size fraction actually emitted to outdoor air after controls, measured under cp_air. Cumulative PM10/TSP measurements require documented differences before entry; no wood-industry factor is prescribed.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `yu-bamboo-flooring-2019`

###### particles (> PM10) (`shaping_pm_gt10`)

Only this disjoint particle size fraction actually emitted to outdoor air after controls, measured under cp_air. Cumulative PM10/TSP measurements require documented differences before entry; no wood-industry factor is prescribed.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `yu-bamboo-flooring-2019`

###### formaldehyde (`coating_formaldehyde`)

Only chemically confirmed formaldehyde released during foreground coating/curing to outdoor air; measure outlet concentration, flow and hours. No formaldehyde-containing adhesive is assumed; a product chamber limit is not a factory release factor.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Unallocated physical total for this exchange in the selected production cohort divided by the same accepted final net product kg; retain raw total, routing and paired handoff records. No attribution share changes this physical amount. Verify absence when inapplicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `yu-bamboo-flooring-2019`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_avoid` | First separate measured directly attributable electricity/materials and product cohorts; use line/submeter or documented causal runtime partition only where tested against joint meters. Do not borrow coniferous sawmill allocation shares. | `yu-bamboo-flooring-2019` |
| `allocation_coproduct` | Document whether shavings are saleable coproducts or wastes with destination, dry mass and value. If shared burdens cannot be separated causally, require a justified allocation decision and sensitivity analysis before claiming complete product LCI; no automatic mass or economic share is prescribed. Physical shavings and internal handoffs keep original amounts. | `inbar-industrial-bamboo-2015` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | profile_production | profile_reference | scale | cohort; species; configuration; continuous profile; accepted final net mass; moisture; coating solids; packaging tare; rejects | Calibrated scale of accepted finished strips excluding packaging; pair sample moisture with constant-mass dry weighing and retain drawings/BOM proving no glue or assembly | kg | each batch; operating-period meters and representative tests | same declared production period, covering all shifts, states and rejects | selected site and matched product cohort; separately trace upstream suppliers | per 1 kg reference flow | calibration; raw records; drawings/specifications; routing closure; uncertainty and detection limits |
| cp_material | profile_production | material exchanges | weighing | lot; row; process; origin/destination; gross/tare/net mass; treatment; moisture; solid volume; paired density; rejects; same handoff id | Weigh lot flows on calibrated scales; inspect substrate and physical profile; paired specimens/actual solid cross-section for density; reconcile source/destination without allocation | kg | each batch; operating-period meters and representative tests | same declared production period, covering all shifts, states and rejects | selected site and matched product cohort; separately trace upstream suppliers | per 1 kg reference flow | calibration; raw records; drawings/specifications; routing closure; uncertainty and detection limits |
| cp_energy | profile_production | electricity | meter | meter id; process; start/end kWh; voltage; supply mix; standby; extraction/UV/shrink runtime; parent/child coverage | Read calibrated process/utility meters, including extraction and curing; reconcile parent/child meter totals and cohort routing | MJ | each batch; operating-period meters and representative tests | same declared production period, covering all shifts, states and rejects | selected site and matched product cohort; separately trace upstream suppliers | per 1 kg reference flow | calibration; raw records; drawings/specifications; routing closure; uncertainty and detection limits |
| cp_coating | profile_production | polyurethane_coating | weighing | coating code; SDS; chemistry; solvent-free UV proof; solids; gross/tare; issued/returned/retained/waste mass; cure; species screening | Weigh actual formulation and returned material; supplier specification and trial/acceptance confirm suitability for single strips; measure retained dry coating rather than assume purchased amount adheres | kg | each batch; operating-period meters and representative tests | same declared production period, covering all shifts, states and rejects | selected site and matched product cohort; separately trace upstream suppliers | per 1 kg reference flow | calibration; raw records; drawings/specifications; routing closure; uncertainty and detection limits |
| cp_residue | profile_production | residues | weighing | row; process; gross/tare/net; bamboo dry matter; coating solids; moisture; sale price; recipient; waste status; attached dust; routing | Separate offcuts, shavings, captured sanding dust, spent paper and uncured coating; weigh and reconcile manifests/invoices and overlapping dust routes | kg | each batch; operating-period meters and representative tests | same declared production period, covering all shifts, states and rejects | selected site and matched product cohort; separately trace upstream suppliers | per 1 kg reference flow | calibration; raw records; drawings/specifications; routing closure; uncertainty and detection limits |
| cp_air | profile_production | air emissions | measurement | species; compartment; outlet; flow; concentration; detection limit; blank; hours; control state; fugitive scope; cumulative TSP/PM10/PM2.5; method; moisture | Representative calibrated outlet sampling plus documented fugitive assessment over actual operating conditions; retain chemically specific formaldehyde and particle fractions; chamber product limits and impact scores cannot replace emitted mass | kg | each batch; operating-period meters and representative tests | same declared production period, covering all shifts, states and rejects | selected site and matched product cohort; separately trace upstream suppliers | per 1 kg reference flow | calibration; raw records; drawings/specifications; routing closure; uncertainty and detection limits |
| cp_pack | profile_production | pe_film; carton | weighing | material id; polymer; fibre composition; unit mass; issued/returned; actual rejects; contained packaging mass; shipments | Weigh net empty cartons and film separately and reconcile stock/shipment; packaging stays outside reference product mass | kg | each batch; operating-period meters and representative tests | same declared production period, covering all shifts, states and rejects | selected site and matched product cohort; separately trace upstream suppliers | per 1 kg reference flow | calibration; raw records; drawings/specifications; routing closure; uncertainty and detection limits |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `physical_normalization` | all inventory rows | Divide each unallocated cohort exchange total by the same accepted final net product kg. Keep matched handoff totals equal; profile_reference = 1 kg. Preserve raw totals. | cp_reference; cp_material; cp_energy; cp_coating; cp_residue; cp_air; cp_pack | physical amount per 1 kg reference flow | `yu-bamboo-flooring-2019` |
| `bamboo_dry_mass` | bamboo material rows | Dry bamboo mass = uncoated wet bamboo mass / (1 + measured dry-basis moisture); for coated material first exclude measured coating solids and separately establish water. Do not assume all finished mass is biogenic dry matter. | cp_material; cp_reference; cp_coating | dry bamboo and water ledgers | `usda-wood-handbook-2021` |
| `air_mass` | shaping_pm25; shaping_pm25_10; shaping_pm_gt10; coating_formaldehyde | Concentration × matching gas volume over operating period after blank/moisture/unit corrections gives species mass. From comparable cumulative measurements: middle fraction = PM10 - PM2.5; coarse fraction = TSP - PM10. Require nonnegative compatible totals and propagated uncertainty; incompatible or incomplete sampling is unresolved, never zero. Do not add cumulative PM10 or TSP again. | cp_air; cp_reference | disjoint species emissions per 1 kg reference flow | `yu-bamboo-flooring-2019` |
| `balance_and_attribution` | all inventory rows | Reconcile original process input, retained product, separate residues, air releases and storage changes for bamboo dry matter, water and coating solids; investigate residuals against measured uncertainty. Match internal edges first. Build separate burden account using measured causal attribution or an explicitly reviewed allocation decision; do not multiply physical product/coproduct/transfers by burden shares. Track bamboo biogenic carbon separately from coating fossil carbon with measured composition; do not claim storage credits from mass alone. | cp_material; cp_reference; cp_coating; cp_residue; cp_air; cp_energy | closed physical accounts plus separate attributable LCI | `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all inventory rows | Match physical role/state, Tiangong type, full route qualifiers, reference property/unit and emission compartment. Missing identity does not authorize an approximate UUID. | flow original and product specification |
| `quality_complete` | all processes | Screen site BOM, permits, cleaning, lubricants, retained moisture, coating release species and wastes. Additional observed exchanges require individual specific rows, measurement and identity review before complete dataset use. Distinguish zero, absence, below detection and unknown; quantify missing upstream coverage. | cp_material; cp_coating; cp_residue; cp_air; supplier evidence |
| `quality_variability` | all protocols | Cover actual shifts and representative lots, moisture/coating and controls; report time, geography, sample counts, meter reconciliation, uncertainty and limits. No literature industry range or default bamboo density is prescribed. | raw records and calibration |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_scope` | Fail applicability if adhesive/laminated/strand-compressed substrate, assembled floor, missing continuous profile or unproven single-culm state occurs. Compare cohort routing with actual purchase/sales evidence; status labels cannot establish product boundary. | `un-cpc3-2025`; `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |
| `validate_inventory` | Require one atomic exchange per row, equal internal links, one final denominator, true conditional absence and no dust/residue double counting. Keep physical quantities separate from attributed burden. Unresolved identities, missing upstream inventories, unclosed balances or unsupported allocation leave a dataset incomplete. | `yu-bamboo-flooring-2019` |
| `validate_air_carbon` | Air UUIDs use emissions to outdoor air, unspecified subcompartment, kg mass. Refine site compartments only with matching direct identity. Reject cumulative particle overlap and product-test-limit substitution. Do not delete upstream biogenic CO2 or grant universal carbon-negative credits; classify biogenic and fossil carbon from actual material composition. | `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Documented factory-gate supply of this unglued profiled strip; compatible upstream chain only when verified |
| excluded_use | Generic bamboo board/laminate/scrimber/flooring LCI; installed service comparison; automatic CPC-wide coverage; unverified carbon storage or end-of-life benefit |
| required_metadata | All reference qualifiers; process map; raw cohort basis; upstream boundary; chosen flow/property/unit; conditional routes; co-product/waste status; attributed burden decision |
| required_quality_disclosure | Measured vs absent vs unknown; identity gaps; omitted scope; uncertain partition/air balance; sampling/time/geography; no industry recipe defaults |
| update_trigger | Changed bamboo construction/profile, treatments, coating chemistry, meters, control, supply boundary, routing, allocation or flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | UNSD, CPC 3.0 Explanatory Notes, 30 June 2025, printed pp.137, 141, 143; 31212, 31450, 31626. [Original](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Continuous-shape/unassembled classification boundary; labels do not prove engineered-route applicability |
| `inbar-industrial-bamboo-2015` | official_guidance | Vogtländer and van der Lugt, INBAR Technical Report 35, second edition, 2015, pp.4, 15–20. [Original held by TU Delft](https://repository.tudelft.nl/file/File_877d4812-8c8d-446e-a048-5c14cb9994b9) | Distinguish strip lamination, compression and flattening; separate carbon boundaries. MOSO-specific case: no recipe/density/yield/carbon-credit defaults adopted |
| `yu-bamboo-flooring-2019` | literature | Yu, Zeng, Zhang and Wang (2019), Environmental Impact of Bamboo Laminated Flooring and Bamboo Scrimber Flooring Investigated via Life Cycle Assessment, BioResources 14(4), 9132–9145; Fig.1 and pp.9135–9138. [Publisher full text](https://bioresources.cnr.ncsu.edu/resources/environmental-impact-of-bamboo-laminated-flooring-and-bamboo-scrimber-flooring-investigated-via-life-cycle-assessment/) | Qualitative separation of planing/panel-making/mortise/coating/packing; polyurethane, abrasive paper, PE film and carton prompts subject to site proof. Three Zhejiang/Sichuan makers, 2005–2009. Engineering route data, borrowed wood combustion emissions, estimated formaldehyde limits and omission of TSP are rejected as actual strip inventory |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory, Wood Handbook, FPL-GTR-282 (2021), Chapter 4 pp.4–1 and 4–11. [Original](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | Only dry-basis moisture and mass/solid-volume definitions, applied to measured bamboo specimens; no wood species density, drying schedule or softwood survey value transferred |
