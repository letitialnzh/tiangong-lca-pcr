---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.uncoated-graphic-paper-and-paperboard-mechanical
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Virgin-furnish supercalendered uncoated rotogravure paper

## 1. Scope and Applicability

This PCR covers virgin-furnish SC rotogravure magazine/catalogue paper in reels: purchased virgin wood thermomechanical pulp (TMP, without chemical impregnation), purchased bleached softwood kraft reinforcement pulp, and kaolin as in-sheet filler. Mechanical/TMP fibres shall constitute at least 10% of oven-dry fibre furnish, excluding filler and additives from that denominator. No fixed pulp ratio, filler content, grammage, yield or emissions quantity is supplied. The SC commercial grade is evidenced by UPM Cat G; its product sheet establishes chemical/mechanical pulp, fillers and reel delivery, not a particular TMP subtype, supplier, non-integrated mill, recipe or sizing absence. Those narrower conditions are this PCR’s declared applicability requirements, to be verified for each foreground dataset. JRC BREF glossary (printed 850) distinguishes uncoated mechanical magazine paper, including heavily filled SC paper, from woodfree paper.

Uncoated means absence of a surface pigment coating here. Surface sizing is a separate operation: BREF §7.1.5 (printed 666) distinguishes starch/synthetic size application from the pigment slurry described in §7.1.6. This selected route has no surface size press; an uncoated sales label alone does not prove that absence. Wet-end cationic starch or retention aid may still be used and must be collected by actual recipe. Exclude newsprint, recycled/deinked SC, woodfree office paper, pigment-coated LWC/MWC, paperboard, CTMP-integrated production, printed publications and surface-sized variants. A route outside these limits requires separate applicability assessment, not silent reuse of this method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.uncoated-graphic-paper-and-paperboard-mechanical |
| classification_refs | CPC 3.0 32125; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Virgin-furnish supercalendered uncoated rotogravure paper |
| excluded_products | Newsprint; recycled SC; woodfree paper; coated paper; board; surface-sized paper; integrated pulping |
| representative_product | Virgin-furnish SC-A rotogravure magazine reels; UPM Cat G is a commercial grade example, not a mandated recipe |
| production_route | Non-integrated purchased TMP and bleached softwood kraft; kaolin-filled wet forming; gas-boiler cylinder drying; supercalendering; slitting/rewinding; separate kraft/PE wrapping and paper core; onsite effluent treatment |
| market_state | Unprinted, finished saleable SC reels at dispatch gate; actual moisture and quality declared; core and packaging outside net paper mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply printable SC paper for rotogravure magazine/catalogue conversion |
| How much | 1 kg net accepted paper at dispatch gate |
| How well | Declared basis weight, caliper, opacity, brightness, smoothness/gloss, tensile and moisture; agreed rotogravure acceptance; no universal producer target copied |
| How long or cycle | One production/dispatch supply cycle; no assumed printing yield or service life |
| reference_flow_link | `finished_paper` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uncoated graphic paper and paperboard, mechanical `a708be32-4fc9-49c7-a7da-57ce387f98c0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SC rotogravure grade; TMP/chemical fibre dry shares and supplier routes; kaolin ash/retention; no pigment coating; demonstrated absence of surface sizing; virgin/recycled status; actual grammage, moisture and quality; mill boundary; electricity voltage; gas-boiler pressure/enthalpy; water source/recipient; packaging and treatment routes |

This is a mass-based supply declared unit. Comparison of printing service additionally requires measured area/grammage, print performance and conversion yield; equal mass alone does not establish equal print service. All required qualifiers must be declared in the resulting dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_paper | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net paper weighing after final slitter/winder; exclude core, wrapper, rejects, internal broke and rework. Retain actual moisture, not assumed air-dry or oven-dry output. |
| `common_basis` | all inventory rows | Declared row property | row unit / kg paper | Use per 1 kg reference flow in both languages; protocols aggregate over the same actual net accepted paper P in kg and period. P must be positive. |
| `dry_furnish` | tmp_pulp; kraft_pulp; kaolin; primary_sludge; bio_sludge | Mass | kg | Keep delivered wet mass, measured dry-solids fraction, oven-dry fibre, ash and residual water separately; no fixed 90% pulp dryness or sheet moisture. Fibre share excludes minerals, chemicals and packaging. |
| `energy_volume` | gas; electricity | Volume / Net calorific value | m3 / MJ | Gas m3 requires measured T/P/Z/composition/dry-wet and matching supplier reference; electricity uses the verified Net calorific value energy chain, 1 kWh = 3.6 MJ. Do not apply gas secondary Mass coefficient as density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased virgin TMP and bleached softwood kraft, kaolin, actual chemical products and packaging arrive at mill; direct river intake, grid electricity and pipeline boiler gas cross the site boundary. |
| starting_condition_role | Gate-to-gate papermaking foreground; supplier cradle-to-delivered-gate datasets provide upstream burdens. |
| product_classification_scope | SC virgin-furnish subset of CPC 32125 only; not all writing/printing paper. |
| recursive_input_rule | Internal broke, save-all stock, fines, fillers, filtrate and condensate are internal recirculation. Purchased same-category paper is not eligible for this virgin-pulp route without new applicability assessment. |
| upstream_dataset_requirement | Require subtype/route/moisture-compatible pulp datasets including forestry, pulping, bleaching and supplier transport; grade/quantity-compatible chemicals, packaging and delivered electricity/gas; actual offsite residue transport and treatment. Missing delivered-gate transport is added explicitly once in the resulting model. |
| disclosure | Site/year, product campaigns, excluded integrated pulping, no sizing/coating proof, boiler and water-treatment boundaries, material and energy contracts, transport coverage, cutoffs and unresolved quantity/background compatibility. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing` | sc_papermaking | Include slushing, screening, separate pulp refining/blending, kaolin/chemical dosing, approach flow, wet forming/pressing, cylinder drying, supercalendering, dry slitting/rewinding, wrapping and core insertion; include start-up, breaks and cleaning. | jrc-paper-bref-2015 |
| `boundary_utilities` | site support | Include gas boiler, internal steam distribution/condensate, raw water treatment, save-all, onsite primary/biological effluent treatment, sludge dewatering and dust collection. No CHP, biomass/sludge burning, purchased heat or integrated pulping is assumed by this selected route; actual presence triggers boundary reassessment. | jrc-paper-bref-2015; epa-gas-combustion-2026 |
| `boundary_water_loops` | water/fibre/mineral ledger | Keep primary white-water I and secondary white-water II/save-all returns inside the foreground. Track water, long fibre, fines and kaolin separately at both ends of every internal link with equal amounts. Route save-all solids actually returned to furnish as internal recovery; only purge to treatment can become exported sludge. | jrc-paper-bref-2015 |
| `boundary_complete_rows` | all exchanges | The cards are an atomic route inventory, not a licence to omit unlisted site exchanges. Reconcile purchase/SDS/maintenance, treatment and monitoring registers; add each actually present chemical, pollutant, lubricant, refrigerant, packaging waste and other reject as a separate identity-verified row. Document absence, missing data and cutoffs distinctly; never use blank identity or no measurement as zero. | jrc-paper-bref-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sc_papermaking` | Virgin-furnish supercalendered uncoated rotogravure paper | required | Only the qualified non-integrated route described above | Aggregate foreground manufacturing and onsite support | 1 kg net accepted finished SC paper |

Physical sequence: purchased pulp → stock preparation/blending → forming/pressing → drying → supercalender → slitting/rewinding → wrapping/dispatch. White-water I returns to approach flow; excess II goes to save-all → recovered fibre/fines/kaolin and clarified water return; net purge goes to treatment → final river discharge and primary/biological sludge. Captured cutting dust goes either to documented internal repulping or net external receiver. Internal steam supply and condensate return are separately measured equal-link transfers. These continuous paper stages form one foreground unit, with stage meters retained; intermediate paper is not another saleable output.

### Process: Virgin-furnish supercalendered uncoated rotogravure paper (`sc_papermaking`)

#### Inputs

##### Product flows

###### Paper Pulp (`tmp_pulp`)

Only purchased virgin wood TMP, with no chemical impregnation before mechanical refining. The broad virgin wood pulp identity contains this subset; supplier route, bleaching, tree species and oven-dry versus delivered mass must match the supplying dataset. Do not use it as an undifferentiated pulp selector.

- Selected flow: Paper Pulp `6752b268-93a1-4dca-b098-3f3afa7eaddf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_furnish; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_furnish`
- Sources: jrc-paper-bref-2015

###### Chemical wood pulp, other than dissolving grades (`kraft_pulp`)

Only purchased bleached softwood kraft reinforcement pulp within the manufactured non-dissolving chemical-wood-pulp identity. Require actual softwood species, kraft/bleaching route, grade, delivered moisture and compatible supplier dry-mass reference. Other chemical routes or dissolving-grade pulp cannot substitute; this physical locator alone does not establish the provider inventory.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_furnish; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_furnish`
- Sources: jrc-paper-bref-2015

###### Paper-grade kaolin filler (`kaolin`)

Kaolin retained within the sheet, not a surface pigment coat. Record purchased product purity and suspension solids; a mine entity is not a verified paper-grade product identity.

- Selected flow: Paper-grade kaolin filler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_furnish; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_furnish`
- Sources: jrc-paper-bref-2015

###### Cationic starch wet-end additive (`starch`)

Conditional on actual wet-end addition; no surface size press. Record modified-starch grade, formulation and dry solids. Native starch identity does not prove cationic modification.

- Selected flow: Cationic starch wet-end additive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_chemicals; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: jrc-paper-bref-2015

###### cationic polyacrylamide (CPAM) (`pam`)

Conditional retention/flocculation polymer input. Separately meter wet-end and effluent-treatment use; aggregate this same polymer only after preserving both destinations. Confirm charge grade, formulation, active fraction and supplying dataset basis.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_chemicals; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: jrc-paper-bref-2015

###### Polydimethylsiloxane defoamer emulsion (`defoamer`)

Conditional on the actual emulsion product. Record whole formulation mass and supplier composition; do not substitute broad organic silicone or count its active polymer again.

- Selected flow: Polydimethylsiloxane defoamer emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_chemicals; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: jrc-paper-bref-2015

###### Sodium hypochlorite biocide solution (`biocide`)

Conditional on actual use. Record solution mass, measured NaOCl fraction, available chlorine basis and destination. A candidate restricted to purity at least 10% does not establish compatibility with an unknown purchased concentration; no concentration default.

- Selected flow: Sodium hypochlorite biocide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_chemicals; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: jrc-paper-bref-2015

###### ferric chloride (`ferric_chloride`)

Conditional effluent coagulation: inventory anhydrous FeCl3 equivalent only when the supplier/background reference is the same. Retain solution mass, measured active fraction and carrier water once; a solution dataset instead uses solution mass, never both representations.
The CAS7705-08-0 and name/comment identify inorganic FeCl3; CPC34160 organic-compound classification is a disclosed source error requiring clarification, not an alternative chemical identity. Solid/solution reference compatibility remains mandatory.

- Selected flow: ferric chloride `d29463c7-fbbf-4811-b122-a651f205d603`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_chemicals; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: jrc-paper-bref-2015

###### Sodium hydroxide solution for pH control (`caustic`)

Conditional actual pH-control solution; record delivered concentration. The inspected solid caustic candidate specifies 95–98% purity and is not assigned to an unspecified solution.

- Selected flow: Sodium hydroxide solution for pH control
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_chemicals; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemicals`
- Sources: jrc-paper-bref-2015

###### Alternating current (`electricity`)

Customer-side grid-average AC at 1–35 kV only. Include stock preparation, pumps, vacuum, dryer auxiliaries, supercalender, winding, dust capture, boiler auxiliaries and water treatment once. Confirm actual voltage, geography/year, losses and supplier mix; reject a plant-production mix for a consumer boundary.
The source identifies CN; actual regional mix, reference year, medium-voltage interface and losses remain required and cannot be inferred from the UUID.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_energy; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: jrc-paper-bref-2015

###### natural gas in the gaseous state (`gas`)

Pipeline gas to the onsite boiler; reference property is Volume, not Mass. Record meter temperature, absolute pressure, dry/wet state, composition and compressibility; reconcile supplier/background m3 definition. Secondary Mass coefficient is not a density. Internal steam has measured pressure, enthalpy and condensate return, without a purchased-steam exchange.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_energy; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: jrc-paper-bref-2015

###### Uncoated printing, writing and packaging paper (`wrapper`)

Actual uncoated kraft reel wrapping sheet and end-cover material, measured separately from PE film and paperboard core. Confirm fibre composition, grammage, moisture, source gate and supplier basis. The broad packaging-paper name includes this physical subset, but its CPC32129 graphic-paper classification is a disclosed source discrepancy, not packaging-grade proof. A paper bag is not this sheet; a purchased laminated composite wrapper needs its own verified exchange replacing, not duplicating, constituents.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_packaging; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: upm-cat-g-2026

###### Polyethylene film (`pe_film`)

Conditional separate polyethylene moisture barrier, not PET film or a composite wrapper. Confirm polymer grade, thickness, measured mass and supplier; physical name/CAS/comment support PE film despite an inconsistent source classification.
Only actual noncellular, non-self-adhesive, unreinforced, unlaminated and unsupported film is represented; composite kraft/PE packaging is excluded from this separate-film identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_packaging; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: upm-cat-g-2026

###### Cardboard tube or Paper core (`core`)

Paperboard reel core of the actual size and grade. Account for new purchases, returned cores, reuse cycles and rejects without assigning the full new-core burden at every reuse. Exclude core and wrapper mass from reference paper.
Keep actual received/returned/exported core masses in the physical ledger. Reuse only affects evidence-based service burdens and replacement consumption; it never scales down a real physical return or discard.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_packaging; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: upm-cat-g-2026

##### Elementary flows

###### river water (`water_in`)

Direct river withdrawal at the site intake only; record waterbody and geographic location. Internal white water is not fresh abstraction. Purchased water or groundwater requires a distinct actual flow and supplier/resource boundary instead.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_water; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: jrc-paper-bref-2015

#### Outputs

##### Product flows

###### Uncoated graphic paper and paperboard, mechanical (`finished_paper`)

One finished reference output: qualifying TMP/chemical-pulp SC reels, no pigment coat and no surface sizing. The database name is broader than this PCR and must not widen its scope. Only final net accepted paper is the product output of the aggregated manufacturing unit.

- Selected flow: Uncoated graphic paper and paperboard, mechanical `a708be32-4fc9-49c7-a7da-57ce387f98c0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: jrc-paper-bref-2015; upm-cat-g-2026

##### Waste flows

###### sludge (paper production) (`primary_sludge`)

Net exported dewatered primary sludge: fibres, fines and kaolin not returned by the save-all. Record wet mass, dry solids, organic/ash composition and receiver. Recovered stock returned to furnish is not sludge export; no automatic coproduct credit.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_residues; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015

###### sludge (paper production) (`bio_sludge`)

Net exported biological excess sludge, separately weighed from primary sludge. Return activated sludge and dewatering filtrate remain internal. If the two sludges are physically co-dewatered, preserve measured component reconciliation and represent the single mixed export once, never add both rows and the mixed total.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_residues; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015

###### Waste solid (`screen_rejects`)

Actual net exported wet screening rejects from purchased virgin-pulp preparation, conditionally located by the broad industrial-solid-waste identity. Measure wet mass, dry solids, fibre/filler/foreign-material composition, contamination and receiver/provider compatibility. Internal returned stock is not an external export. A shared UUID does not merge this residue with primary sludge, biological sludge, paper trim or captured dust; preserve every actual stream and receiving route separately.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_residues; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: jrc-paper-bref-2015

###### Dust (`collected_dust`)

Collected and exported dry cutting/rewinding dust with paper fibre and kaolin composition. Weigh collector discharge and track internal repulping separately; this waste mass is not an air-emission amount or virgin-fibre displacement credit.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_dust; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: jrc-paper-bref-2015

##### Elementary flows

###### Water (`water_out`)

Only final liquid discharge to the river after onsite treatment, Volume/m3. Record all bypasses and receiver; no untreated-wastewater product exchange or resource-water output substitution. Pollutant rows quantify contained loads, not extra wastewater volume.
This is the liquid water component, not an assertion that mixed effluent is pure water. Record outfall temperature, measured whole-effluent density and water mass fraction; water-component mass = measured effluent volume * effluent density * water fraction, and water-component volume = water-component mass / documented water density at discharge temperature. Retain actual whole-effluent volume separately for pollutant loads; do not assume density1000 or treat COD/TSS as extra carrier water.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_water; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: jrc-paper-bref-2015

###### water vapour (`water_vapour`)

Actual dryer, cooling and boiler water vapour released to outdoor air, unspecified subcompartment. Distinguish process evaporation from water formed by gas combustion in the water balance; internal steam/condensate is not an emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_water; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: jrc-paper-bref-2015

###### carbon dioxide (fossil) (`co2_fossil`)

Measure boiler fossil CO2 and other attributable fossil carbon releases; distinguish carbonate mineral carbon from biomass. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### carbon dioxide (biogenic) (`co2_bio`)

Measure/model biogenic carbon oxidation from effluent treatment and other in-boundary releases; retain in LCI irrespective of greenhouse-gas reporting exclusions. Do not invent new forest uptake in this gate-to-gate unit. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### carbon monoxide (fossil) (`co`)

Actual fossil CO released from the gas boiler, with measured dry-gas conditions and species mass. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### Nitrogen oxides (`nox`)

NO plus NO2 only; exclude N2O. Source Mass/kg does not establish NO2-equivalent reporting. Keep measured species or NO2-equivalent basis and LCIA definition consistent; unresolved conversion is pending, never add species masses to the same aggregate. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### sulfur dioxide (`so2`)

Actual SO2 only from fuel sulphur/odorants or measured boiler release; not a total sulfur-oxides surrogate. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### methane (fossil) (`ch4`)

Include measured fugitive pipeline gas methane and incomplete-combustion methane once; purchased gas remains the input and methane release is an output, not an additional fuel use. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### methane (biogenic) (`ch4_bio`)

Conditional actual biological-treatment methane; evaluate anaerobic zones and sludge storage rather than presume zero for an aerobic plant. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### nitrous oxide (`n2o`)

Actual boiler and biological-treatment N2O; keep separate from NOx, include process conditions and measured or justified site-specific estimation. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### particles (PM2.5) (`pm25`)

Actual external air discharge below/equal PM2.5 from dry cutting, rewinding, handling and boiler after capture. Record source-specific filterable/condensable coverage; no generic cutting or combustion factor. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_dust; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: jrc-paper-bref-2015

###### particles (PM2.5 - PM10) (`pmcoarse`)

Actual external air discharge in the mutually exclusive above-PM2.5 to PM10 band; PM10 cumulative mass minus PM2.5 only with matched sampling definitions. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_dust; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: jrc-paper-bref-2015

###### particles (> PM10) (`pmover`)

Actual external air discharge above PM10, especially cutting/rewinding dust; source identity is not evidence of a positive amount. No cumulative TSP/PM10/PM2.5 addition; captured dust remains separate. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_dust; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dust`
- Sources: jrc-paper-bref-2015

###### formaldehyde (`formaldehyde`)

Evaluate actual trace formaldehyde from gas combustion; species measurement or a documented site-specific estimate, not total VOC as this species. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### benzene (`benzene`)

Evaluate actual trace benzene from gas combustion; add other identified VOC species as separate verified rows, without adding total VOC to its already speciated fraction. Outdoor air, unspecified subcompartment; use an actual more specific subcompartment only after identity verification.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_air; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-combustion-2026; jrc-paper-bref-2015

###### chemical oxygen demand (`cod`)

Final COD load as kg oxygen demand, preserve analytical method and reduction-agent interferences. Only final release to freshwater after treatment/bypass; do not add influent or captured sludge loads.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_effluent; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: jrc-paper-bref-2015

###### biological oxygen demand (`bod`)

Specify BOD5 incubation and nitrification inhibition and compatibility of the broader BOD identity; BOD is a parallel diagnostic, not an additive second oxygen burden over COD. Only final release to freshwater after treatment/bypass; do not add influent or captured sludge loads.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_effluent; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: jrc-paper-bref-2015

###### Total suspended solids to freshwater (`tss`)

Final measured TSS, including remaining fibre/fines/filler; a dissolved-solids record is not this indicator and the inspected water-unspecified record does not establish the selected freshwater compartment. Only final release to freshwater after treatment/bypass; do not add influent or captured sludge loads.

- Selected flow: Total suspended solids to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_effluent; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: jrc-paper-bref-2015

###### nitrogen, total (excluding N2) (`nitrogen`)

Mass of N; disclose measured nitrogen species and exclude N2; do not duplicate total-N burden with the same speciated N. Only final release to freshwater after treatment/bypass; do not add influent or captured sludge loads.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_effluent; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: jrc-paper-bref-2015

###### phosphorus, total (`phosphorus`)

Mass of P, not phosphate product mass; retain measured method and particulate/dissolved coverage. Only final release to freshwater after treatment/bypass; do not add influent or captured sludge loads.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_effluent; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: jrc-paper-bref-2015

###### adsorbable organic halogen compounds (`aox`)

Declare AOX analytical halogen-equivalent basis and compatibility with the source sum indicator; identify high-impact individual compounds where present. No chlorinated release assumed from pulp receipts alone. Only final release to freshwater after treatment/bypass; do not add influent or captured sludge loads.

- Selected flow: adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the attributable net boundary exchange from cp_effluent; retain its declared quantity basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: jrc-paper-bref-2015

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | qualified SC campaign | One saleable paper output; internal stock/broke/fines/filler recovery are not coproducts and receive no allocation share or avoided-pulp credit. Assign collection/treatment of actual net waste to its source campaign unless a justified subsequent model establishes a different waste/secondary-product boundary. | jrc-paper-bref-2015; eu-pef-allocation-2021 |
| `allocation_shared_loads` | multi-grade mill utilities/treatment | Prefer campaign/line subdivision and direct meters. For shared remaining burdens use a demonstrated physical relationship: measured steam/enthalpy or electrical duty, and measured hydraulic/organic/solids treatment drivers for wastewater and sludge. Document driver tests, boundary and sensitivity; product-mass shares are not a universal treatment or energy driver. If physical relation fails, justify another relationship using contemporary values; no default allocation factor. | eu-pef-allocation-2021 |
| `allocation_two_ledgers` | all mass/water/carbon balances | Preserve the unallocated physical graph and component mass/water/carbon balance separately from the partitioned environmental-burden ledger. Allocation changes assigned burdens, not measured coproduct/export masses or either end of an internal link. No simultaneous sludge diversion credit and raw-material recovery credit for the same solids. | jrc-paper-bref-2015; eu-pef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | sc_papermaking | accepted SC paper | primary measured/traceable records | grade/campaign; reel net weight; wrapper/core tare; moisture; grammage; rejects; start/end inventories | Calibrated final reel weighing and quality release; reconcile sales and inventory. | kg | each reel and campaign | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_furnish | sc_papermaking | TMP/kraft/kaolin; internal component balance | primary measured/traceable records | supplier/species/route; receipts; stocks; pulp dry solids; kaolin purity/ash; TMP fibre fraction; white-water flow/long-fibre/fines/ash; save-all return/purge | Weigh receipts/issues; laboratory dry-solids, fibre fraction and ash; matched internal-link meters, sampling and inventories. | kg | lot/shift and grade change | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_chemicals | sc_papermaking | each actual formulated input | primary measured/traceable records | SDS; recipe; charge grade; composition; delivered strength; solution/active mass; destination; cleaning; stock changes | Weigh/dose each product, verify supplier reference amount and laboratory solids/active fraction; never duplicate formulation and its ingredients. | kg | batch/dosing shift | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_energy | sc_papermaking | electricity and gas; internal heat ledger | primary measured/traceable records | submeters by stage; grid voltage/year; gas volume T/P/Z/wet-dry/composition; supplier standard volume; boiler load; steam pressure/temperature/enthalpy; condensate flow/enthalpy; blowdown | Calibrated utility and stage meters; reconcile boiler supply/condensate heat balance and utility invoices; retain simultaneous conditions. | MJ; m3 | continuous/shift and campaign | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_packaging | sc_papermaking | kraft wrapper; PE film; core | primary measured/traceable records | material grade; dimensions; tare; issue/return/stock; offcuts; new/reused cores; supplier transport | Weigh each separate component, reconcile reuse and waste; record delivered composite instead of duplicate constituents if used. | kg | reel/campaign | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_water | sc_papermaking | river withdrawal; liquid return; vapour | primary measured/traceable records | intake/discharge flow; source/recipient; process evaporation; water in pulp/chemicals/paper/sludge; rainfall; boiler combustion water; internal I/II/filtrate/condensate; storage change; bypass | Calibrated independent intake/outfall meters, measured temperature, separate effluent and water densities, water fraction and stream moisture; convert carrier water as defined by water_out, retaining whole-effluent volume for cp_effluent. Evaporation uses a measured balance with uncertainty, not a BREF default. | m3; kg | continuous and daily | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_residues | sc_papermaking | primary/bio sludge; stock-screen rejects | primary measured/traceable records | wet weight; dry solids; fibre/fines/ash/organic carbon; co-dewatering split; storage change; returns; carrier; receiver; actual disposal/recovery | Calibrated waste scales/manifests and matched solids/ash/carbon assays; reconcile production and receiver, including co-dewatered exports only once. | kg | each transfer; representative lots | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_air | sc_papermaking | gas-boiler species; treatment GHG | primary measured/traceable records | species/CAS; source; fossil/biogenic carbon; NO/NO2 basis; concentration; actual/reference O2; dry/wet T/P; gas flow; time/load; control state; detection limits; leaks | Source testing/CEMS and flow matched in time and dry/temperature/pressure/O2 reference; integrate species loads. Document measured or site-specific justified treatment/leak estimates and all unmeasured scope. | kg | continuous where installed; representative load tests | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_dust | sc_papermaking | each particle bin and captured cutting dust | primary measured/traceable records | cutting/rewinding source; collector inlet/outlet/efficiency; external fugitive share; sampling diameter; PM2.5/PM10/TSP; filterable/condensable; flow/hours; captured mass/ash; returned/exported mass | Size-resolved stack and fugitive discharge assessment plus collector weighing; qualify matched cumulative fractions before differences. Indoor capture is not automatically an outdoor emission. | kg | representative cutting/boiler loads; each dust transfer | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |
| cp_effluent | sc_papermaking | each final indicator | primary measured/traceable records | paired flow and 24h composite; COD method; BOD5 incubation; TSS; TN as N; TP as P; AOX halogen basis; sludge removal; bypass; sampling coverage; LOQ | Flow-proportional composites or justified equivalent, accredited assays and matched discharge volumes; vary frequency by parameter/site, quantify gaps rather than assert universal BREF monitoring frequency. | kg; mg/L; m3 | paired sampling per site plan and bypass event | Same complete declared campaign/year; include downtime and stock changes | Selected line plus causally attributable onsite support | per 1 kg reference flow | Calibration, raw logs, methods, supplier certificates, coverage, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_basis` | all inventory rows | x_i = X_i / P; X_i is attributable net exchange over the same period; P is accepted net finished paper in kg. The finished_paper row is exactly 1 kg. | X_i; P; cp_output | x_i | jrc-paper-bref-2015 |
| `dry_components` | tmp_pulp; kraft_pulp; kaolin; primary_sludge; bio_sludge | D_i = W_i * s_i; water_i = W_i - D_i; fibre and ash subdivisions require measured composition, not inferred yield. Fibre share = dry TMP fibre / total dry fibre, excluding minerals. | W_i; s_i; cp_furnish; cp_residues | D_i; water_i; fibre share | jrc-paper-bref-2015 |
| `effluent_load` | cod; bod; tss; nitrogen; phosphorus; aox | L_j = sum(C_j,t * V_t * 0.001); C in mg/L, V in m3, L in kg. Pair concentration and flow at the same final outfall and interval; include bypass; normalize by P. Do not multiply separate annual means. | C_j,t; V_t; cp_effluent; P | L_j / P | jrc-paper-bref-2015 |
| `air_load` | co2_fossil; co2_bio; co; nox; so2; ch4; ch4_bio; n2o; pm25; pmcoarse; pmover; formaldehyde; benzene | L_j = sum(c_j,t * v_t * dt * 0.000001) for c in mg/m3, v in m3/h, dt in h and identical gas-reference conditions. Reference-O2 correction cannot be applied to concentration alone while retaining incompatible actual gas volume. | c_j,t; v_t; dt; cp_air; cp_dust; P | L_j / P | jrc-paper-bref-2015 |
| `particle_partition` | pm25; pmcoarse; pmover | E_small = measured PM2.5; E_coarse = measured PM10 - measured PM2.5; E_large = measured TSP - measured PM10 only if sampling/condensable coverage match and all differences are nonnegative. Otherwise retain unresolved size data; no assumed fractions. | cp_dust; matched cumulative loads | mutually exclusive emitted bins | jrc-paper-bref-2015 |
| `component_balance` | sc_papermaking | For each water, long-fibre, fines, mineral/ash and carbon component: external inputs + generated component = paper + packaging export + net residues + final emissions + inventory change + quantified residual. Internal links cancel only with equal amounts at both ends. Carbon bookkeeping uses kg C from measured stream carbon content or explicitly documented chemical stoichiometry, separately identifying biogenic, fossil and mineral carbon; the wood/kaolin name is not a carbon-content factor. COD/BOD oxygen demand is not physical carbon mass. Include only actual moisture carried by particulate streams, separately from vapour, and reconcile pure-water-component discharge versus mixed-effluent volume without duplicate pollutant/solid mass. | cp_furnish; cp_output; cp_water; cp_residues; cp_air; cp_dust; cp_effluent | unallocated balance and residual | jrc-paper-bref-2015 |
| `burden_partition` | shared burdens | B_SC = B_direct,SC + sum(B_shared,k * f_SC,k); each f is justified by a measured causal driver and sums to one across served outputs. Keep actual physical exports unchanged. | shared burden; driver records; cp_energy; cp_effluent | assigned burden ledger | eu-pef-allocation-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify actual physical subset, name/CAS/route/name properties, supplier reference amount and unit chain; UUID resolution alone is not dataset compatibility. Blank UUID remains a named atomic gap. | Supplier specifications; direct flow metadata; basis reconciliation |
| dq_period | all inventory rows | Use a complete same-period net production denominator; include changes, offgrade campaigns, shutdowns, monitoring gaps and uncertainty. Do not use installed capacity. | Production/meter logs and calibration |
| dq_completeness | all exchanges | BREF and AP-42 define evidence scope, not recipes or default loads. Actual chemicals, gases and residues outside listed cards require named additional rows; unknown is not absent. | Purchase/SDS/maintenance and environmental registers |
| dq_indicators | water emissions | COD/BOD and TN/TP/AOX are analytical indicators, not independent molecular species. Preserve analytical/species data and choose nonduplicating LCIA treatment; do not hide high-impact species in sum indicators. | Laboratory method, speciation and LCIA reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | finished_paper | Fail applicability when virgin TMP/bleached softwood kraft/kaolin SC route, at least 10% dry mechanical fibre, no pigment coating or no surface-sizing evidence is missing or contradicted; a CPC label or broad UUID does not replace those facts. | jrc-paper-bref-2015; upm-cat-g-2026 |
| `validate_measurement` | all inventory rows | Require one final 1 kg output, same denominator and temporal aggregation, supported reference property/unit chain, measured moisture/active fraction and supplier/background quantity compatibility. Unsupported conversions or unknown gas volume conventions remain incomplete. | jrc-paper-bref-2015 |
| `validate_loops_residues` | water/fibre/mineral/carbon ledger | Reconcile equal internal links and separate paper, recovered-stock, primary sludge, biological sludge, wet rejects, captured dust and residual effluent destinations. Any unexplained residual needs investigation, not arbitrary proportional balancing or duplicate allocation. Require actual receivers and offsite treatment. | jrc-paper-bref-2015; eu-pef-allocation-2021 |
| `validate_emissions` | all elementary outputs | Require correct compartment/species/carbon origin, matched monitoring conditions, nonoverlapping particle bins and separate capture. Retain biogenic CO2 in LCI. NOx excludes N2O and needs explicit NO2-equivalent/species compatibility; COD/BOD/TN/TP/AOX overlap requires explicit LCIA exclusion/mapping. No measurements or quantified justified estimates means incomplete, not passed. | jrc-paper-bref-2015; epa-gas-combustion-2026 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified SC supply at factory gate with explicit upstream and residue-treatment links; printing model input after service/quality assessment |
| excluded_use | Complete CPC 32125 coverage, all cultural paper, printed-product footprint, verified commercial recipe, comparative printing equivalence, independent scientific approval |
| required_metadata | All reference qualifiers; site/year/campaign; grade and quantity bases; supplier datasets; transport; treatment and receiver; physical and burden ledgers; actual additional exchanges |
| required_quality_disclosure | Identity gaps, source metadata conflicts, measurement/monitoring coverage, uncertainty, LCIA overlaps, allocation sensitivity and missing foreground records |
| update_trigger | Furnish, pulp treatment, sizing/coating, utilities, packaging, water/sludge route, product quality or measurement/background reference change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board (2015), DOI 10.2791/370629; [original PDF](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf), §§2.2.2, 7.1.1–7.1.10; Figure 7.3 printed 664; glossary printed 850 | General papermaking, white-water fibre/fines/filler recovery, broke, distinct sizing/coating, calendering/cutting dust, monitoring and net-production basis. European 2015 scope; case amounts, recipes and BAT-AELs are not adopted as universal quantities. |
| upm-cat-g-2026 | handbook | UPM Cat G, dated 05.10.2026, p.1 [producer PDF](https://www.upmpaper.com/siteassets/images/products--services/paper-catalog/public/upm_cat_g_en_232002.pdf) | Commercial SC grade example, chemical/mechanical pulp and fillers, rotogravure reels and packaging options. Does not establish exact pulp subtype/ratio, kaolin recipe, non-integration or sizing absence; informative technical targets not defaults. |
| epa-gas-combustion-2026 | official_guidance | US EPA AP-42 §1.4 Natural Gas Combustion, header 10/26, §§1.4.1–1.4.3, pp.1.4-1–1.4-3 [original PDF](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf) | External gas-boiler pollutant/species coverage and testing conditions only. Not paper-cutting dust, biomass/sludge firing or site-specific permit evidence; no numerical factors/heating values adopted. |
| eu-pef-allocation-2021 | official_guidance | Commission Recommendation C(2021)9332 final, Annex I §4.5, printed pp.63–64 [original annex](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf) | General subdivision/physical/other-relationship allocation hierarchy; no paper-specific shares or claim of full PEF conformance. |
