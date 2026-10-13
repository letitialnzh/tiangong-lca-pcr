---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.labels-of-paper-or-paperboard
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Water-based flexographic converting of paper pressure-sensitive labels on siliconized glassine

## 1. Scope and Applicability

This method covers nonthermal, uncoated white cellulose-paper labels carried on siliconized glassine, with permanent acrylic dispersion PSA. Purchase the complete unprinted laminate; print one black water-based flexographic ink, electrically dry, kiss-cut the face and adhesive without cutting through the liner, strip the matrix, slit, rewind and ship. A commercial structure is HERMAwhite (601)/62Gpt/523, used as route evidence, not a recipe or quantity default. Supplier grade and successful ink/liner converting trials must establish actual suitability. [herma-labelstock-2026; herma-acrylic-dispersion]

Wet-glue labels require adhesive applied during labelling and have a different starting/delivery state. Direct-thermal labels have a heat-reactive coating; thermal-transfer printing is a separate printing operation. Adhesive-free cut labels lack PSA and liner. These, linerless labels, film or synthetic-paper facestocks, paperboard, removable/hot-melt/solvent PSA, UV/solvent inks, multicolour decoration, varnishing, foil and onsite coating or pulping are excluded. Do not combine their consumables into this inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.labels-of-paper-or-paperboard |
| classification_refs | CPC 3.0 32197; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Printed die-cut permanent-PSA paper labels on continuous glassine liner |
| excluded_products | Wet-glue, direct-thermal, adhesive-free, linerless, film/board and incompatible routes in Section 1 |
| representative_product | HERMAwhite (601)/62Gpt/523 converted to black printed die-cut rolls |
| production_route | Purchased laminate → aqueous flexography → electric hot-air drying → kiss cutting → matrix stripping → slitting/rewinding/packing |
| market_state | Ready-to-dispense label rolls; liner retained through factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide printed identification labels for pressure application to a declared substrate |
| How much | 1 kg accepted label web including its delivered continuous liner |
| How well | Declared artwork/legibility, die-cut dimensions, release force, tack/peel and adhesion acceptance on actual application substrate; no universal numeric threshold |
| How long or cycle | One label application for the declared identification period; record shelf life and service conditions, without assuming a universal lifetime |
| reference_flow_link | finished_labels |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | paper grade and fibre origin; nonthermal state; acrylic dispersion PSA grade and permanence; glassine grade; silicone system/cure and release test; label area/count and waste-matrix layout; liner width and delivered mass; ink grade/black artwork coverage; drying electricity/voltage; print and adhesion tests; moisture/conditioning; shelf and use conditions; collection period/site; upstream supplier basis and waste receiver |

Declare all qualifiers in dataset metadata or equivalent product/process notes. Area or label count supplements the mass reference and cannot replace it without lot-specific weighing.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted conditioned web including liner, excluding core and carton; weigh cp_output. All rows use this same reference basis. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the selected electrical reference property; metered kWh is converted using 1 kWh = 3.6 MJ. Never treat it as delivered heat. |
| formulation_basis | ink | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect supplied wet formulation and added water separately; keep actual dry-solids and chemical-species mass ledgers. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete unprinted labelstock, prepared plate, ready-to-use black aqueous ink and packaged consumables at converter gate |
| starting_condition_role | foreground_input |
| product_classification_scope | Narrower subset of CPC32197; upstream labelstock is a different unfinished delivery state |
| recursive_input_rule | Record purchased unfinished labelstock once as input. Reject complete printed/die-cut labels as a proxy; outsourced conversion must be disclosed rather than recursively adding finished-label production. |
| upstream_dataset_requirement | Supplier-specific laminate dataset must include pulp/fibre supply, papermaking of facestock and glassine, silicone coating and cure, acrylic dispersion PSA manufacture/coating/drying, lamination, rejects and energy. Use actual component dry coat masses and supplier yield, not brochure numbers. Avoid double counting separately linked components. |
| disclosure | Converter route and supplier gates; actual voltage and electric dryer; water-only cleaning; offsite waste treatment; included packaging; downstream application/liner treatment excluded |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all inventory rows | Use one foreground unit convert_labels, with distinct stage meters. Include startup, accepted production, cleaning, extraction, die cutting, matrix removal, rewinding and packing. No reference-UUID intermediate product is emitted. | celab-label-terminology-2023 |
| boundary_liner | labelstock; finished_labels; matrix; liner_waste; reject | Keep liner below accepted labels inside the delivered reference web. Matrix-only waste, liner-only trim and whole-laminate rejects are distinct physical outputs. | celab-label-terminology-2023 |
| boundary_environment | all inventory rows | Offsite washwater is a waste handoff, not a freshwater outfall. Survey actual ink constituents and air release; add any substantiated missing species as separate atomic rows before dataset completeness. No onsite combustion/oxidizer is assumed; any such route requires scope review. Retain any real biogenic CO2 in expanded LCI regardless of GHG reporting exclusions. | epa-printing-ap42 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| convert_labels | Receive, print, dry, kiss-cut, strip matrix, slit, rewind and pack | required | Selected purchased-laminate route | foreground_production | finished_labels |

Physical stages: supplier laminate → receiving → black flexography and electric drying → kiss-cutting/matrix stripping → slitting/rewinding → dispatch. A single foreground unit combines successive handling of the same web; stage electricity, ink, yield and waste records remain separate. The upstream silicone/PSA component ledger is supplier evidence, not a second set of foreground inputs. [celab-label-terminology-2023]

### Process: Printing and die-cut converting (`convert_labels`)

#### Inputs

##### Product flows

###### Paper label (`labelstock`)

One purchased composite web, not three separately bought ingredients. Declare uncoated white cellulose-paper facestock, permanent acrylic dispersion adhesive, cured silicone on glassine and no preprinting. The broad label-stock identity does not supply a coating recipe or industry-average quantity; provider coverage of the whole delivered laminate must be verified. The selected locator specifically describes retail-container label stock at plant in China. Verify actual intended substrate and supply geography, complete unprinted three-layer delivery and supplier coverage; other applications/geographies need another verified compatible locator/provider. Unspecified ink does not license counting preprinted material as unprinted.

- Selected flow: Paper label `5f6bda17-c5da-4d9e-ad44-aea4877cb9ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources: `herma-labelstock-2026`

###### Ready-to-use black water-based flexographic printing ink (`ink`)

Single black formulated ink, measured wet as supplied. Obtain actual water, solids, ethanol, ammonia and any other species fractions from supplier documentation; do not equate gravure ink with flexographic ink. No extra colour, varnish or press-side chemical is assumed. The selected broad printing-ink record has aqueous synonyms and a Chinese water-dilutable/dispersed binder description; its English comment gives usual oil-based examples without a mandatory oil recipe. It has no flexography-excluding route, but this language difference remains a source/provider clarification debt. Use only the actual black aqueous flexographic formulation, complete supplied wet kg, verified composition and compatible provider; do not infer default oil/varnish, density or printability from the record.

- Selected flow: Ink `92ae1ece-04f3-4b7b-b0a0-4fcaa6076210`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_ink.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ink`
- Sources: `epa-printing-ap42`

###### Alternating current (`electricity`)

User-side 1–35 kV supply only. Meter press drive, electric hot-air drying, extraction, slitting and rewinding separately, then sum once. Verify actual incoming voltage, transformer boundary, geography and year; this NCV-named electricity property does not represent purchased steam or a heating efficiency. Native source supply geography is CN; confirm actual geographic/year/provider compatibility or another verified supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Water, tap (`water`)

Purchased treated tap water for declared ink dilution and water-only press washing. The reference property is mass; weigh consumption or use metered volume with measured density at recorded temperature. Never assume the database default density or count supply water again as elementary extraction.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Cardboard tube or Paper core (`core`)

Actual paperboard winding core, excluding label web. Weigh each grade and reconcile reuse, shipped cores and losses; a count requires measured grade-specific mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Corrugated paperboard shipping carton (`box`)

Actual shipping carton, measured by grade and fibre composition. The candidate with fixed 16.6% primary/83.4% recycled fibre is not a generic carton; the folding-box candidate explicitly lacks transport durability. No substitute UUID is adopted.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Prepared photopolymer flexographic printing plate (`plate`)

Purchase the prepared black-image plate; include upstream plate preparation. Record material, backing and actual reuse impressions. Attribute replacement consumption to the jobs served, preserving the physical plate stock account. PS polystyrene material is not this plate.

- Selected flow: Prepared photopolymer flexographic printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_plate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plate`
- Sources: `epa-printing-ap42`

#### Outputs

##### Product flows

###### Label, paper (`finished_labels`)

Accepted printed die-cut labels retained on a continuous siliconized glassine liner after matrix stripping. Net reference mass includes label facestock, retained PSA, dry ink and delivered liner; excludes core and carton. This broad paper-label flow is physically restricted to this PCR route.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `celab-label-terminology-2023`

###### Cardboard tube or Paper core (`core_shipped`)

Paper core delivered with accepted rolls; not an independently allocated co-product. Reconcile its actual mass against core purchases and stock change. Excluded from reference mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Corrugated paperboard shipping carton (`box_shipped`)

Shipping carton delivered with the rolls; balance against purchases, stock and damaged cartons, outside reference mass.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

###### Printed paper and acrylic-PSA die-cut matrix (`matrix`)

Stripped face-paper/adhesive matrix, with actual ink contamination and no continuous backing liner. Weigh separately; record receiving treatment and recycler acceptance. Do not classify this sticky laminate as clean mill broke. The broad discarded-industrial-solid family identifies this one actual separated paper/PSA/ink matrix stream only. Preserve its complete measured wet mass, dry composition, moisture and receiver; the shared broad UUID does not merge it with rejects or spent plates or authorize a clean-paper background. No default recycling, hazard or treatment.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `celab-label-terminology-2023`

###### Silicone-coated glassine liner edge trim (`liner_waste`)

Only actual liner edge trim or segregated liner-only setup loss at converter. The continuous liner shipped under good labels remains product; spent liner generated during customer application is downstream. Record paper, silicone and adhesive contamination separately. The unspecified paper/paperboard-scrap family can identify the actual paper-dominant glassine trim with its silicone coating and contamination retained. Its lack of a clean-broke route does not establish repulpability, end-of-waste status or a recycling credit. Require actual liner composition, full as-transferred kg, H2O and receiver compatibility; it is not the delivered continuous liner.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `celab-label-terminology-2023`

###### Rejected paper-PSA-siliconized-glassine laminate web (`reject`)

Whole-laminate startup spoilage or rejected print rolls, containing facestock, adhesive and liner. Keep distinct from matrix-only waste and liner-only trim; record wet/dry condition and destination. Use the broad industrial discarded-solid identity only for this one whole paper/PSA/siliconized-glassine reject, keeping each layer, actual ink and moisture in its complete mass. Separate it from stripped matrix and liner-only trim despite shared identity with other industrial solids; require actual disposal/recovery acceptance without assumed treatment.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `celab-label-terminology-2023`

###### Black water-based flexographic press washwater (`wash`)

Water-only cleaning liquid collected for offsite treatment, with ink solids and dissolved chemicals. Weigh collected liquid, sample composition, record carrier and receiving treatment. This technosphere handoff is not a direct freshwater emission. The industrial-cleaning liquid family is conditional on the actual liquid mixture, tank origin, full chemistry and accepting receiver. Weigh whole wet transfer or use measured V*rho(T); measure the H2O fraction independently for the water ledger. Suspended/dissolved ink and COD/BOD characterize the stream, not additive overlapping masses or direct elementary releases. Retain concentrated waste ink and gel/solid residue separately; no generic hazardous classification follows.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-printing-ap42`

###### Waste ink (`ink_residue`)

Segregated unusable black aqueous flexographic ink, excluding washwater already counted. Broad label-printing waste-ink identity only; expert-judgement quantity in the record is not used. Record solids, water, hazard classification and receiver.

- Selected flow: Waste ink `39f42c3c-9700-4eb6-8159-bd0206cd38e0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-printing-ap42`

###### Collected paper slitting dust (`dust_waste`)

Collected dry paper dust, with measured adhesive/ink contamination where present. Record actual collector recovery and offsite disposal. Do not count captured particles again as airborne emissions; no assumption of universal repulpability. Use the industrial captured-dust Waste identity for this actual individually collected dry cutting/slitting dust, with fibre, PSA/silicone/ink contamination, moisture and receiver verified. Full captured mass and any internal return remain separate from exported airborne particle bins. No cleaning frequency or capture efficiency is prescribed.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Spent photopolymer flexographic printing plate (`plate_waste`)

Actual used press plate sent offsite. Reconcile service life, retained plates and replacement; a prepress-department-only identity does not establish this post-use press waste. This actual retired photopolymer plate plus its actual backing is one discarded industrial solid item; verify polymer/backing/ink contamination, full kg and receiver independently. Preserve original physical retirements and retained stock, separate from burden shares by service life; do not use a prepress-origin-only waste record.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_plate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plate`
- Sources: `epa-printing-ap42`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Only particles at or below 2.5 micrometres actually released beyond the collector to outdoor air, unspecified, non-long-term. Measure or substantiate size-resolved exhaust and fugitive release for the campaign.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Only the disjoint 2.5–10 micrometre airborne fraction, outdoor air unspecified, non-long-term. If PM10 and PM2.5 are nested measurements, subtract compatible same-period PM2.5 from PM10 with uncertainty; never sum nested totals.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (> PM10) (`pmover10`)

Only measured particles over 10 micrometres escaping to outdoor air unspecified, non-long-term. TSP less compatible PM10 may derive this fraction; incompatible sampling or negative residual remains unresolved.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### ethanol (`ethanol`)

CAS 64-17-5 to outdoor air unspecified, non-long-term, only if actual ink composition and exhaust balance establish release. Separate fossil/biogenic feedstock provenance in metadata; do not replace total VOC by ethanol or assume all purchased ethanol evaporates.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-printing-ap42`

###### ammonia (`ammonia`)

CAS 7664-41-7 to outdoor air unspecified, non-long-term, only if present in the actual ink and released. NH3 mass is not nitrogen mass or an amine; absence needs formulation and emission evidence.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-printing-ap42`

###### water vapour (`water_vapour`)

CAS 7732-18-5, water evaporated from the ink and washing to outdoor air unspecified, non-long-term. Reconcile product moisture, washwater and stock change; evaporation is not wastewater discharge. Do not use an evapotranspiration-specific record. Independently quantify incoming/outgoing air humidity and moisture retained in the complete laminate and all residues; ambient humidity is not generated vapour. Actual moisture uptake needs its own verified exchange, not negative emitted vapour.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual attributable exchange for the same period and divide by accepted reference-web mass using cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-printing-ap42`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_jobs | all inventory rows | Use subdivision or justified system expansion first, then an evidenced underlying physical relationship, and only then a justified other relationship such as actual economic values. System expansion requires actual functions and displaced supply; no automatic credit. Separate jobs by direct measurement first. Attribute shared drive, drying, extraction and cleaning from recorded machine time/energy and actual causal drivers, including setup for the job; document why preceding hierarchy steps cannot apply. Keep the unallocated physical mass/water/carbon ledger and environmental burden attribution ledger separate. | eu-pef-2021 |
| allocation_residues | matrix; liner_waste; reject; dust_waste; ink_residue; wash; core_shipped; box_shipped | No saleable co-product is presumed. Account actual waste treatment without an automatic avoided-production credit. Do not multiply physical outputs by a burden allocation share; packaging is delivered with the reference service, not an independent revenue product. Any genuine co-product needs a reviewed causal allocation basis. | celab-label-terminology-2023 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For the same complete period, sum each actual attributable exchange and divide by the accepted reference-web net mass measured by cp_output. Every aggregation_rule below explicitly uses per 1 kg reference flow. Keep inputs, air release, wastes and shipped packaging in separate ledgers and retain stage records. Purchased-product upstream coverage also includes actual inbound transport from provider gate to converter, based on real origins/destinations, modes, distance, load and mass; avoid duplication when transport is linked separately.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | convert_labels | finished web | lot weighing | lot; paper/PSA/liner grade; moisture; gross reel mass; core tare; accepted reference-web mass; label count/area; release/print/adhesion tests | Weigh accepted rolls on calibrated scales, subtract actual cores and transport packaging; retain liner. Record conditioning and matched acceptance. | kg | every lot | complete representative production period | converter accepted product | per 1 kg reference flow | calibration; tare records; release and print tests |
| cp_stock | convert_labels | labelstock | receipt and consumption ledger | supplier; lot; supplied laminate net mass; opening/closing stock; returns; paper, PSA and liner composition; dry coat mass; supplier gate and process coverage | Weigh supplied webs without core, reconcile receipts and stocks; obtain supplier component mass and silicone-cure/PSA coat/dry/laminate evidence. | kg | every receipt and campaign | same complete period | selected laminate grade at converter | per 1 kg reference flow | supplier specification; upstream coverage; mass reconciliation |
| cp_ink | convert_labels | ink | formulation and issue ledger | ink grade/colour; wet issues; returns; stock change; water/solids; ethanol/NH3/other species; coverage; retained dry ink; ink-waste amount | Weigh wet ready-to-use black ink, obtain formulation and actual print coverage; track reuse and residual ink, not a literature recipe. | kg | each job and lot | same complete period | black water-based flexographic press | per 1 kg reference flow | scale; supplier SDS/composition; print acceptance |
| cp_energy | convert_labels | electricity | submeter | press; dryer; extraction; slitter/rewinder; packing; kWh; job-time; meter voltage; transformer scope; region/year | Read calibrated submeters by stage; include attributable idle/setup load; sum once and convert recorded kWh to MJ. | MJ | each job plus period totals | same complete period | user-side electric converting | per 1 kg reference flow | meter calibration; bills; allocation record; voltage/provider basis |
| cp_water | convert_labels | water; water_vapour | weighing and water balance | dilution; washing; metered volume; temperature; measured density; ink water; product moisture; washwater; evaporation; opening/closing water stocks | Weigh added tap water or convert actual metered volume with measured density; use independently measured H2O fractions of whole ink residue and washwater, not their total wet kg; close same-period water balance for evaporation with uncertainty. | kg | each dilution/wash and period | same complete period | converter; no freshwater outfall | per 1 kg reference flow | meter/scale; density measurement; water-balance residual |
| cp_pack | convert_labels | core; box; core_shipped; box_shipped | packaging ledger | grade; count; weighed unit mass; opening/closing stocks; reuse; purchases; shipped quantity; damaged quantity; carton fibre composition | Weigh actual paper cores and corrugated cartons by grade; reconcile full receipts plus opening stocks against full dispatch/return, damage/discard and closing stocks, separately from web mass. Include incoming laminate cores and ink containers as their actual distinct physical transfers; reuse or service allocation never shrinks transferred mass. | kg | each dispatch and stock period | same complete period | converter packaging | per 1 kg reference flow | tare weights; dispatch records; packaging balance |
| cp_plate | convert_labels | plate; plate_waste | plate stock and service ledger | plate/backing material; prepared mass; purchase; reuse impressions; replacement; retained/retired mass; jobs served; receiver | Weigh prepared and spent plates; retain opening/closing stocks and actual service history; attribute consumed plate burden to served jobs without altering the physical stocks. | kg | each plate and replacement | same complete period plus plate service history | black-image press plate | per 1 kg reference flow | supplier plate preparation; service records; receiver evidence |
| cp_waste | convert_labels | matrix; liner_waste; reject; wash; ink_residue; dust_waste | segregated waste weighing | stream id; wet mass; dry fraction; paper/PSA/silicone/ink composition; sampling; collector capture; receiver; carrier; actual treatment; stock change | Segregate and weigh each stream; sample washwater and residues; reconcile internal returns before external removal; retain receiver acceptance. | kg | each removal and complete period | same complete period | converter/offsite handoff | per 1 kg reference flow | weigh tickets; sampling; composition; receiver treatment |
| cp_air | convert_labels | pm25; pmcoarse; pmover10 | size-resolved exhaust and fugitive survey | source; sampling standard/method; measured concentration; actual exhaust volume; temperature; pressure; moisture; size cut; captured dust; duration; uncertainty; detection limits | Survey cutting/slitting/rewinding and collectors; sample representative exhaust and substantiate fugitive releases; retain compatible nonoverlapping size fractions; no default factor. | kg | representative campaigns and operating-hour reconciliation | same complete period | outdoor air release after collection | per 1 kg reference flow | sampling protocol; blank/detection limits; size-cut consistency; collector mass |
| cp_species | convert_labels | ethanol; ammonia | species mass balance and emission measurement | supplier CAS/fractions; ink/stock input; retained species; liquid-waste species; inventory change; capture; recovery; exhaust and fugitive measurements; feedstock origin | Inventory actual chemicals and reconcile each species through product, liquid waste, stocks, recovery and outside-air release; measure where balance cannot close. Add other confirmed species individually. | kg | each formulation/job plus exhaust campaign | same complete period | converter outside-air release | per 1 kg reference flow | supplier composition; analytical method; CAS; mass balance; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide each actual attributable period exchange by the accepted reference-web mass of the same period. finished_labels is 1 kg on this basis. Never divide by gross roll mass including cores. | cp_output; cp_stock; cp_ink; cp_energy; cp_water; cp_pack; cp_plate; cp_waste; cp_air; cp_species | Exchange per 1 kg reference flow | celab-label-terminology-2023 |
| electricity_conversion | electricity | 1 kWh = 3.6 MJ; conversion from the verified Units of energy, not a printing emission factor | cp_energy | Electrical MJ per 1 kg reference flow | |
| physical_balance | all inventory rows | Reconcile incoming laminate/ink/water with accepted web, separate residues, washwater, actual air losses and stock changes before burden attribution. Track facestock, adhesive, liner, ink solids, water and chemical carbon separately; no universal loss factor. | cp_stock; cp_ink; cp_water; cp_output; cp_waste; cp_air; cp_species | Unallocated physical balances and residual uncertainty | epa-printing-ap42 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | all inventory rows | One complete representative period/site and one declared laminate grade; report startup, downtime, stocks and uncertainty. Supplier quantities, bounds and defaults are not inferred from flow identity. | Meter/scale and supplier records; reconciled ledgers |
| quality_release | finished_labels | Report actual label area/count and matrix layout, delivered liner fraction and mass, release/adhesion/print acceptance, conditioning and declared service. Mass alone does not establish equivalent labelling function. | cp_output; cp_stock |
| quality_missing | all inventory rows | Unresolved UUID, provider mismatch, absent composition/receiver or unsupported measurement is explicit incomplete evidence. Survey actual lubricants, replacement blades/dies, filters/wipes, cleaners and separate spent streams; prove absence or add actual atomic exchanges before completion. Add actual missing atomic inputs/emissions; absence or a zero needs evidence. No factory data have been collected by this PCR. | Collection protocols and dataset completeness record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_labels | Require exactly one finished reference output, 1 kg including liner but excluding core/carton; all period amounts and aggregation share this denominator. Confirm broad paper-label identity and narrow physical route separately from supplier quantity compatibility. | herma-labelstock-2026 |
| validation_waste | matrix; liner_waste; reject; wash; dust_waste | Require separate mass/composition/destination records. No duplication of continuous shipped liner as manufacturing waste, no clean-paper proxy for adhesive matrix, no elementary water discharge at offsite handoff. | celab-label-terminology-2023 |
| validation_air | pm25; pmcoarse; pmover10; ethanol; ammonia; water_vapour | Verify particle bins are disjoint, emissions are after capture and outside-air/non-long-term; verify each chemical CAS, origin and mass basis. Do not equate VOC carbon reporting with compound mass, amine with NH3, soil with air, or unknown quantity with zero. | jrc-paper-bref-2015; epa-printing-ap42 |
| validation_coverage | all inventory rows | Methodological review and actual data completeness remain independent. Incompatible grade, printing chemistry, heat/oxidizer or onsite coating route is outside this method until reviewed. Publish no dataset without closing required provider and physical balances. | herma-labelstock-2026; epa-printing-ap42 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_production_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared factory-gate paper-label converting for the specified physical laminate/printing/delivery route |
| excluded_use | Whole CPC32197 default; other excluded labels; finished packaging product, customer labelling, downstream liner disposal; complete cradle-to-grave claims |
| required_metadata | Reference qualifiers; supplier process gates; all protocols; stock balances; stage meters; transport and treatment links; uncertainty; allocation; geography/year |
| required_quality_disclosure | Future collection versus measured data; actual provider compatibility; unresolved flow identities/ranges; emission and waste coverage; independent review state |
| update_trigger | Paper/liner/PSA grade, silicone cure, ink formulation, drying route/voltage, cutting layout, waste destination, supplier dataset or reference conditioning changes |

## 11. Data Sources

| source_id | Title | type | reference | Locator | used_for |
| --- | --- | --- | --- | --- | --- |
| herma-labelstock-2026 | HERMAwhite (601)/62Gpt/523 product information | handbook | https://shop.material.herma.com/product-details/HH12075/ | Issue 08.2026; Product construction, Application and use, Processing | Producer-specific construction and die-cut capability; no quantities or generic performance defaults. |
| herma-acrylic-dispersion | HERMA Migration safety adhesive overview | handbook | https://www.herma.com/material/products/adhesives/migration-safety/ | 62Gpt row | Acrylic dispersion adhesive identity of the real product example only; no migration approval asserted for a final printed package. |
| celab-label-terminology-2023 | CELAB-Europe Regulatory Summary 2023 | handbook | https://celab-europe.org/celab-europe-regulatory-summary-2023/ | Labels terminology; Matrix waste & spent release liner | Physical laminate, matrix and liner boundaries. Dated legal statements and recycling guarantees are not adopted. |
| jrc-paper-bref-2015 | Best Available Techniques Reference Document for the Production of Pulp, Paper and Board | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 2015; Section 7.1.10; printed670/PDF708 | Paper cutting can generate dust. Papermill broke recycling does not establish repulpability of adhesive matrix; no emission factor. |
| epa-printing-ap42 | AP-42 Section 4.9.1 General Graphic Printing | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c4s09-1.pdf | 4/81, reformatted1/95; Sections4.9.1.1.4,4.9.1.2,4.9.1.2.5; PDF3,6,7,9 | Historical process/emission-point and balance method only. No ink recipe, solvent percentage, retained-solvent or per-capita factor is adopted; use actual formulation and release. |
| eu-pef-2021 | European Commission C(2021)9332 final Annexes I-II | official_guidance | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf#page=63 | Annex I4.5, PDF63–64 | General multifunctionality hierarchy; actual physical output ledger separate; no claim of full PEF conformity. |

Retrieved 2026-10-12. The protocols above define future foreground measurement; no site data, UUID quantity defaults or fabricated empirical intervals are supplied.
