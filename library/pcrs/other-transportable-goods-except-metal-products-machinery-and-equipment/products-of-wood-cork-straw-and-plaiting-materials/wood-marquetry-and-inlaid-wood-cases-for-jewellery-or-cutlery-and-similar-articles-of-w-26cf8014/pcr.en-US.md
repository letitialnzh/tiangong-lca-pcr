---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-marquetry-and-inlaid-wood-cases-for-jewellery-or-cutlery-and-similar-articles-of-w-26cf8014
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Single-piece hardwood carved indoor ornaments with brush-applied shellac

## 1. Scope and Applicability

This method covers new indoor decorative statuettes or free-standing ornaments carved from one untreated kiln-dried non-coniferous wood piece, mechanically shaped and dry sanded, then brush coated with shellac mixed from dry refined resin and undenatured ethanol and dried at ambient conditions. It is a declared production unit (1 kg), not proof that mass-equivalent ornaments provide equivalent aesthetic service. The functional description, design and acceptance criteria must accompany comparisons. The finish is for indoor appearance and cleanability; no numerical lifetime or food-contact certification is asserted. [usda-wood-handbook-2021; usda-finishing-1999; gsa-shellac-2017]

CPC3.0 31913 combines inlaid/marquetry surfaces, protective storage cases and decorative objects. Those functions require different product qualifiers and operations. Only the carved decorative subset is covered here. Exclude marquetry/inlay, jewellery/cutlery cases, tableware, toys, frames, furniture, building products, glued blocks/laminates, engineered panels, bamboo/cork, preserved wood, cast wood composites, gilding, pigments, fillers, oils, waxes, PU/UV/nitrocellulose coatings and spray coating. Exclude onsite kiln drying, combustion, thermal oxidizers and solvent recovery. Wood lost by cutting is not automatically a waste; any coating, adhesive or treatment contamination changes the receiver requirements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-marquetry-and-inlaid-wood-cases-for-jewellery-or-cutlery-and-similar-articles-of-w-26cf8014 |
| classification_refs | CPC 3.0 31913; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Single-piece hardwood carved indoor decorative statuettes and ornaments with brush-applied shellac |
| excluded_products | Marquetry; storage cases; functional furniture/tableware/toys; glued or treated wood; other finish routes |
| representative_product | A kiln-dried solid hardwood decorative statuette, dry sanded and clear shellac brush finished |
| production_route | Delivered kiln-dried untreated hardwood → carve → dry sand → mix shellac/ethanol → brush → ambient dry → inspect → pack |
| market_state | Accepted finished indoor ornament at factory dispatch gate, packaging inventoried separately |



## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Indoor decorative display with the specified carved design and cleanable transparent finish |
| How much | 1 kg accepted net finished ornament, including retained coating but excluding transport packaging |
| How well | Design/dimensions, botanical wood species, moisture, workmanship, dry-film acceptance and indoor exposure are declared and passed |
| How long or cycle | One factory production and dispatch cycle; no fixed use lifetime or replacement equivalence |
| reference_flow_link | finished_ornament |



| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood marquetry and inlaid wood, cases for jewellery or cutlery, and similar articles, of wood, statuettes and other ornaments, of wood `0c60a652-810a-4789-ab0c-ee9babbb3fd7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Decorative function and design; indoor exposure; single-piece construction; botanical species/provenance; untreated kiln-dried supply; incoming and final moisture dry basis; shellac grade/wax status; solvent purity/origin/water; brush and ambient-drying route; dry-film and residual-solvent acceptance; accepted net product mass; site/period; low-voltage meter; residue receivers and status; packaging specification |



Declare every required qualifier in dataset metadata, process notes, reference-flow comment or product description. A broad flow UUID does not replace those physical qualifiers or establish a compatible background dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted dry-to-specification finished ornaments on a calibrated scale, excluding packaging. Retained shellac, moisture and residual solvent are included in net output; keep component amounts separately. Aggregate by homogeneous species/design/finish batch. |
| moisture_basis | dry_wood; finished_ornament; offcut_sale; offcut_waste; dust_waste; reject_waste | Mass | kg | Record dry-basis moisture u = water mass / oven-dry wood mass. For uncoated wood, dry wood mass = wet wood mass / (1 + u); use measured species/batch moisture. For coated output/rejects, subtract measured coating and solvent masses before applying the wood-moisture conversion. Volatile extractives can bias oven-dry moisture measurements; assess the actual species and uncertainty rather than drying a coated object as a wood sample. [usda-wood-handbook-2021] |
| solvent_basis | ethanol; ethanol_air; shellac_waste; solvent_waste | Mass | kg | Keep delivered liquid mass, ethanol species mass, shellac dry solids and water distinct. Confirm supplier reference basis before linking; no generic alcohol, denaturant or wet/dry substitution. Volume-to-mass requires actual temperature and measured or supplier-verified solution density, not a database secondary coefficient. |
| electrical_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The electricity record uses the energy property with MJ reference, not fuel combustion heat. Convert metered kWh to MJ using 1 kWh = 3.6 MJ; match <1 kV consumer delivery and avoid double-counting transformer losses. |
| particle_basis | pm25; pmcoarse; pmover10 | Mass | kg | Report disjoint size bins from the same source/time/method and actual release boundary. Reject negative difference or incompatible totals; retain unknown size distribution as pending rather than treating missing fractions as zero. |



## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated kiln-dried non-coniferous sawn blank and separately purchased dry shellac, ethanol and consumables delivered to the factory |
| starting_condition_role | foreground_entry |
| product_classification_scope | Carved decorative subset of CPC3.0 31913; no classification-wide method |
| recursive_input_rule | Purchased finished ornaments or previously coated blanks are outside this manufacturing route; do not relabel them as virgin dry sawn blanks. Internal rework of the same batch remains in the single unit without a new reference output. |
| upstream_dataset_requirement | Trace wood forestry/sawmill/drying, resin refining, ethanol manufacture, electricity and each consumable to compatible supplier/background datasets, including inbound freight and waste treatment. An entry boundary is not a burden cut-off. |
| disclosure | Declare site/time, species/supply treatment, meters, coating formulation, packaging, release subcompartments, stock changes, residue destinations, allocation and unresolved supplier quantity compatibility. |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | all inventory rows | Include upstream production and actual delivered transport once; retain upstream biogenic and fossil carbon emissions as distinct LCI exchanges. No GHG reporting convention permits deletion of biogenic CO2. Missing delivered background or waste receiver linkage is incomplete data. | corrim-northern-lumber-2025 |
| boundary_stages | ornament_manufacture | Aggregate carving, sanding, mixing, brush coating, ambient drying, inspection and packing as one foreground unit, while preserving independent stage measurements. No duplicated intermediate finished-product exchange; process links, if later decomposed, carry equal physical quantities at both ends. | usda-wood-handbook-2021; epa-coating-eiip-2001 |
| boundary_losses | ornament_manufacture | Account for reject/rework, collection equipment, escaped dust and solvent/water releases. Plant lighting/ventilation electricity is measured and attributed; reusable capital equipment/brush manufacture is outside the declared foreground, with exclusions and significance reviewed. No threshold is assumed to justify omission of a detected chemical or important waste. | epa-coating-eiip-2001 |
| boundary_route | ornament_manufacture | Verify brush application and ambient drying, with no combustion, drying kiln, thermal abatement or solvent recovery. Introducing these operations, denaturants, post-coating sanding or another finish requires additional atomic inventories and method review; do not silently apply this route. | gsa-shellac-2017; usda-finishing-1999 |



## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ornament_manufacture | Carving through finished ornament dispatch | required | Declared single-piece hardwood and shellac brush route | foreground_production | 1 kg finished_ornament |



### Process: Carving, sanding, shellac finishing and packing (`ornament_manufacture`)

Separate records cover receipt, rough/fine carving, sanding/collection, resin/solvent mixing, brush application, ambient drying, inspection and pack-out. No recipe, yield, dust factor, solvent retention, coating thickness or energy average is prescribed. Conditional rows require measured amounts or a documented absence decision; a blank UUID never licenses omission.

#### Inputs

##### Product flows

###### Dry Wood (`dry_wood`)

Purchased untreated kiln-dried hardwood sawn blank. Record botanical species, dimensions, moisture, provenance and supplier. A generic sawnwood identity supplies no species-specific background or loss factor. The selected kiln-dried hardwood sawnwood identity applies only when actual incoming blank thickness exceeds 6 mm; measure and declare that dimension, with species, treatment, moisture and the sawmill-versus-delivered gate. Thinner feedstock requires separate flow-identity and applicability review, not a guessed dimension. The seat-frame example does not establish this ornament supplier or delivered background.

- Selected flow: Sawnwood, hardwood `43103a96-43df-4f35-ad02-728237b3f815`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_materials.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `usda-wood-handbook-2021`

###### Electricity (`electricity`)

Purchased grid electricity at the low-voltage consumer meter (<1 kV). Include carving, extraction fans, sanding, mixing, ventilation and packing; retain their separate submeter records. Use this UUID only for that voltage and delivery interface, with the actual regional/year background. Actual provider, supply geography, year, grid mix and loss boundary remain to be verified; this physical low-voltage locator does not establish a China or generic world background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_energy.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources:

###### Abrasive (`abrasive`)

One paper-backed sanding abrasive consumable. Confirm actual abrasive mineral, backing, binder, grit and supplier; quantify whole consumable mass, not bulk aluminium oxide. Generic abrasive-paper identity is conditional on actual paper construction; cloth belts are excluded.

- Selected flow: Abrasive paper, at plant `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_materials.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `usda-wood-handbook-2021`

###### Shellac (`shellac`)

Dry refined lac-insect shellac resin, mixed on site with the separately recorded ethanol. Require supplier grade, wax status, dry solids and impurity declaration. Raw gum exudate, Chinese tree lacquer and premixed varnish are not this exchange.

- Selected flow: Dry refined shellac resin flakes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources: `usda-finishing-1999`; `gsa-shellac-2017`

###### Ethanol (`ethanol`)

Undenatured ethanol for shellac preparation and brush cleaning, without intentionally added other solvents. Record delivered purity and water; link the supplier amount basis. Chemical identity alone does not specify fermentation or fossil production. Separate delivery mass from ethanol-species mass; supplier admixtures require new atomic rows and scope review.

- Selected flow: Ethanol `df7bb021-85c3-4d72-ad46-29e83afe64e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources: `gsa-shellac-2017`; `epa-coating-eiip-2001`

###### Carton (`carton`)

A purchased finished corrugated carton with declared actual fibre furnish and supplier. Weigh cartons issued net of returns, with an explicit account of any scrap. Do not assume a database fibre recipe for the site. This UUID has explicit source furnish of 16.6% primary fibre and 83.4% recycled fibre. Use it conditionally only after supplier evidence confirms compatible actual carton furnish, construction and delivery/reference basis. These values constrain UUID applicability, not the factory recipe or an assumed measured composition. If actual furnish differs or is unknown, keep provider/background linkage pending and separately review an applicable identity before using that linkage.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_pack.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Film (`film`)

Polyethylene protective film only when actually used. Confirm PE polymer, film format, thickness and supplier. The film identity does not authorize other polymers or foam. Verify actual supplied PE-film grade and provider/reference state before background linkage; source-classification debt is not resolved by physical polymer identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_pack.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Finished Ornament (`finished_ornament`)

Exactly one final reference output: accepted single-piece hardwood carved ornament after shellac drying and packing, excluding packaging mass. The broad product record explicitly includes wooden statuettes; dataset qualifiers restrict it to this method. No intermediate output reuses this reference UUID.

- Selected flow: Wood marquetry and inlaid wood, cases for jewellery or cutlery, and similar articles, of wood, statuettes and other ornaments, of wood `0c60a652-810a-4789-ab0c-ee9babbb3fd7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_product`
- Sources: `usda-wood-handbook-2021`

###### Offcut Sale (`offcut_sale`)

Only separately sorted clean sawn/carved offcuts with documented useful function and purchaser acceptance. Record actual physical output before any burden allocation. The same piece cannot also occur in offcut_waste; loose chips or dust need their own identity if sold. Wood material is a broad foreground Product flow locator, restricted here to one segregated actual clean, unglued, uncoated, untreated solid hardwood carving-offcut grade with species, dimensions/form, moisture, useful function, purchaser/provider gate and measured mass declared. It establishes no waste-to-product conversion, agreed selling function, virgin-product equivalence, background burden or substitution credit by itself. Coated rejects, unsorted chips and dust are not this row.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_residues.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residues`
- Sources: `corrim-northern-lumber-2025`

##### Waste flows

###### Offcut Waste (`offcut_waste`)

Unagglomerated untreated hardwood carving offcuts discarded to an identified receiver, before shellac application, with no adhesive contamination. Confirm actual clean state and receiver acceptance. Do not extend this row to coated rejects.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_residues.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residues`
- Sources: `corrim-northern-lumber-2025`

###### Dust Waste (`dust_waste`)

Collected clean wood saw/carving/sanding fines removed from bins and filters before finishing. The record includes sanding and grinding; use only the untreated combustion/recycling receiver route. Weigh captured material separately from escaped air particles and from dust retained on spent abrasive paper.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_residues.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residues`
- Sources: `usda-wood-handbook-2021`

###### Reject Waste (`reject_waste`)

Discarded shellac-coated wooden ornaments with the coating mass, chemistry and receiver declared. The broad wood-waste definition includes durable wooden products; it establishes no treatment or clean-fuel suitability. Never combine with clean offcuts or assume avoided virgin wood. Use only for the actual non-agglomerated discarded whole carved wood object or pieces with retained shellac/ethanol/water composition and contamination declared; verify receiver/provider acceptance and compatible treatment independently. The raw primary-production label does not identify a treatment technology or remove coating contamination.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_residues.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residues`
- Sources: `usda-finishing-1999`

###### Spent Abrasive (`spent_abrasive`)

Spent whole sanding paper with declared retained wood dust and mineral/binder content. Partition retained wood in the physical balance once; it is not also loose dust_waste. Link the actual receiver, not a clean-paper recycling default. The broad spent-abrasive Waste identity applies to this actual whole paper-backed dry-sanding consumable only with paper, abrasive mineral, binder, attached clean hardwood dust, moisture and contamination composition declared and receiver/provider acceptance verified. No metal blasting medium, clean waste paper, cloth belt, clean-paper recycling or treatment burden is assumed.

- Selected flow: Spent abrasive waste `f0a52dd6-0027-4033-9068-f293526f958f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_residues.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_residues`
- Sources:

###### Shellac Waste (`shellac_waste`)

Unused shellac coating solution discarded from a separate coating container. Measure wet mass and shellac/ethanol/water composition. Do not also report the same liquid as brush-rinse solvent; retained ethanol is not counted as air emission. The broad waste-coating-residue identity is conditional on actual separately collected wet leftover refined-shellac/ethanol/water coating from this mixing/application route and receiver/provider confirmation of that liquid waste state. Record composition, generated mass, storage and accepted offsite treatment; no pigment, overspray, sludge, filter, generic paint recipe or hazardous classification is inferred from the broad name. It does not identify the separate ethanol brush-rinse stream or establish compatible treatment background.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources: `epa-coating-eiip-2001`

###### Solvent Waste (`solvent_waste`)

Separately contained spent ethanol used to rinse the reusable application brush, with shellac contamination and water quantified. Collection and offsite treatment are included; no on-site solvent incineration, distillation or recovery unit is assumed.

- Selected flow: Spent ethanol brush-rinse solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources: `epa-coating-eiip-2001`

##### Elementary flows

###### Pm25 (`pm25`)

Wood dust emitted to outdoor air, unspecified subcompartment, PM2.5 fraction. Include measured outlet and fugitive releases after collection, not filter catch or indoor worker exposure. No mineral abrasive share is attributed to wood without analysis.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_air.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### Pmcoarse (`pmcoarse`)

Outdoor-air wood particulate fraction between PM2.5 and PM10. Calculate only from compatible paired PM10 and PM2.5 observations. If only total PM is measured, keep size allocation pending; do not invent a split.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_air.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### Pmover10 (`pmover10`)

Outdoor-air wood particulate fraction above PM10. Calculate only from compatible total PM and PM10 observations. This row and the other two size fractions are disjoint; never add PM10 or total PM as additional exchanges.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_air.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### Ethanol Air (`ethanol_air`)

Ethanol CAS64-17-5 released across the plant boundary to outdoor air, unspecified subcompartment, from shellac mixing, application, drying and brush rinsing. Use species mass balance including stock, retained product solvent and separately removed liquids. Indoor exposure is not an additional LCI release of the same mass.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources: `epa-coating-eiip-2001`

###### Water Air (`water_air`)

Net water vapour released to outdoor air during ambient wood equilibration and finish drying. Quantify wood moisture changes and water present in supplied ethanol/resin, residual liquid and product. Negative net evaporation requires a separate water-uptake exchange; do not force it to zero. Keep the output nonnegative only when evaporation is substantiated; actual atmospheric uptake needs a separately verified atomic input, not a negative vapour output or a forced balance residual.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_water.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`

###### Acetic Air (`acetic_air`)

Acetic acid CAS64-19-7 to outdoor air only when identified in actual wood/finish release tests. Species identity is not evidence of a positive emission. Screen actual species and ambient route; do not transplant kiln-drying emission factors.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_air.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Pinene Air (`pinene_air`)

Alpha-pinene CAS80-56-8 to outdoor air only when the actual wood species and emission speciation demonstrate it. Do not substitute a specific enantiomer CAS7785-26-4 for an unseparated alpha-pinene measurement; other terpenes require separate rows.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_air.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

###### Formaldehyde Air (`formaldehyde_air`)

Formaldehyde CAS50-00-0 to outdoor air only if found by representative actual wood/finish testing. Absence of synthetic adhesive does not prove zero natural release; evidence must distinguish nondetection, detection limit, missing measurement and measured zero.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collected batch exchange / accepted net finished-ornament batch mass; record using cp_air.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | ornament_manufacture | Maintain an unallocated physical wood/water/coating/carbon ledger and a separate environmental-burden ledger. Never multiply measured product/co-product output masses by allocation fractions. Internal transfers and stock are physical quantities; reconciled yields precede allocation. | corrim-northern-lumber-2025; usda-wood-handbook-2021 |
| allocation_status | offcut_sale; offcut_waste; dust_waste; reject_waste | Assign residue status by actual function, market specification, clean/contaminated condition and receiver. Do not classify every wood loss as burden-free waste. Sale alone does not establish an avoided-product credit. Waste transport/treatment remains assigned to production; contaminants determine receiver suitability. | corrim-northern-lumber-2025 |
| allocation_burdens | ornament_manufacture | First subdivide attributable stage burdens using records; final finishing and packaging belong to the ornament. For remaining genuinely shared burdens, justify a physical relationship and its measured basis. If no defensible physical relationship exists, disclose economic allocation using consistent quantities/prices and sensitivity analysis. Do not import CORRIM lumber mass shares or apply automatic zero burdens. | corrim-northern-lumber-2025 |
| allocation_no_credit | ornament_manufacture | No automatic substitution or energy credit for exported offcuts/dust and no onsite biomass use in this route. Any expanded system must separately identify actual displaced function, receiver process, quality and mutually exclusive attribution; retain all real carbon releases. | corrim-northern-lumber-2025 |



## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | ornament_manufacture | accepted output | measured_record | Batch id; species; design; accepted net product kg; rejected count/mass; finish/wax; dry film; moisture; retained solvent; packaging tare; final stock | Calibrated batch weighing after finish acceptance, with documented moisture and retained-coating/solvent tests; retain drawings, single-piece proof and signed acceptance. | kg | Each accepted batch | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |
| cp_materials | ornament_manufacture | dry wood and abrasive | measured_record | Supplier/batch; botanical species; origin; kiln treatment; net wood kg; moisture sample wet/dry masses; abrasive mass/mineral/backing/binder; receipts; opening/closing stock; returns; density/volume basis when used | Calibrated scales and representative untreated wood oven-dry moisture samples; separate coating solids from wood. Reconcile invoice/stock and supplier delivered background. | kg | Each receipt and production batch | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |
| cp_energy | ornament_manufacture | electricity | measured_record | Meter ids; voltage; kWh readings; stage equipment runtimes; fan/ventilation/lighting loads; production batch/idle status; attribution evidence | Read calibrated <1 kV consumer meter and submeters; reconcile whole-period electricity including downtime and collection fans; attribute using measured stage use. | MJ | Each shift plus batch reconciliation | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |
| cp_finish | ornament_manufacture | shellac and ethanol balance | measured_record | Resin/ethanol delivery mass and composition; purity/wax; water fraction; solvent origin; supplier amount basis; formulation sheet; batch additions; cleaning withdrawals; opening/closing stocks; retained product/reject solvent; unused coating and separate rinse liquids; measured exhaust/fugitive ethanol; uncertainty | Calibrated gravimetric mixing/stock reconciliation and supplier certificates; sample distinct waste liquids and retained film/solvent. Verify brush/ambient route and no denaturants. Use species mass balance with representative testing, not total VOC as carbon or percent recipes. | kg | Each mixture, cleaning event and batch | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |
| cp_residues | ornament_manufacture | each segregated residue | measured_record | Row id; stage; batch; gross/tare; wet wood and dry solids; coating/solvent/dust on abrasive; stock changes; sale contracts; prices if needed; receiver and accepted treatment; transfer receipts | Weigh each separate offcut/dust/reject/abrasive stream and reconcile receiving tickets. Record composition and physical destination before environmental allocation; exclude double counting between waste streams. | kg | Each bin/dispatch and batch | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |
| cp_air | ornament_manufacture | each outdoor particulate/species | measured_record | Source/stage; sampling method; volume and T/P/moisture basis; emission concentration; duration; capture/outlet/fugitive measurement; PMtotal/PM10/PM2.5; wood/mineral share; CAS speciation; nondetection limits; ambient blank; uncertainty | Representative post-control outdoor-release tests with synchronized compatible gas basis and size methods; integrate concentration × exhaust quantity and fugitive periods. Screen actual wood/finish species. EPA sawmill PTE factors and softwood survey values are not carving defaults. | kg | Representative operating states and each changed route/species | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |
| cp_water | ornament_manufacture | net ambient water transfer | measured_record | Incoming/final wood and residue dry masses and moisture; water in resin/ethanol and waste liquids; retained product water; opening/closing stocks; ambient T/RH; uptake versus evaporation | Use paired gravimetric moisture and liquid composition records with stock correction. State uncertainty and sign; distinguish ambient uptake from vapour release without assuming kiln drying. | kg | Each batch, including ambient-drying period | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |
| cp_pack | ornament_manufacture | carton and PE film | measured_record | Actual material specification/fibre furnish; PE polymer/thickness; supplier; net issued mass; returns/scrap; output package bill; inbound freight basis | Weigh each packaging component separately and reconcile store/pack-out. Declare unused film with documented absence; add separate atomic packaging-waste rows if generated, with receivers. | kg | Each packing batch | Complete selected production period, seasonal/shift coverage disclosed | One declared site and homogeneous species/design/finish route | per 1 kg reference flow | Raw tickets; calibration; uncertainty; supplier certificates; stock and stage reconciliation |



### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | all inventory rows | For each row sum the attributable measured exchange amount over the selected homogeneous production period, then divide by accepted net finished-ornament kg. The final reference output is 1 kg. Failed output contributes burdens and waste, not the accepted denominator. | batch exchange amount; accepted net finished-ornament kg; cp_product | exchange amount per 1 kg reference flow |  |
| electricity_conversion | electricity | Metered electricity MJ = recorded kWh × 3.6; divide attributable MJ by the same accepted net finished-ornament kg. | meter kWh; cp_energy; cp_product | MJ per 1 kg reference flow |  |
| uncoated_wood_moisture | uncoated wood samples and measured product-component separation | Use these collection-ledger equations before normalization or burden allocation. B is accepted batch net ornament mass (kg). For every uncoated wood sample, u = (m_wet - m_dry) / m_dry and m_dry = m_wet / (1 + u). Coated final/reject masses are first separated into wood, water, retained shellac and retained solvent by measured composition; whole ornament mass is not oven-dry wood mass. | cp_materials; cp_product; cp_residues | separate wood, water, coating and solvent quantities | usda-wood-handbook-2021 |
| dry_wood_reconciliation | ornament_manufacture physical dry-wood ledger | Dry wood entering + opening dry-wood stock = dry wood retained in accepted products + dry wood in saleable offcuts + discarded offcuts + collected dust + rejects + dust retained on spent abrasive + outdoor wood-dust release + wood-derived volatile mass + closing dry-wood stock + measured reconciliation residual. Separate wood/mineral dust by composition; do not force all total-PM mass into wood yield. Inventory changes of work-in-progress are included, and rework transfers cancel within the unit. The residual has measurement uncertainty and investigation, not a new fictitious waste exchange. | cp_materials; cp_product; cp_residues; cp_air | dry-wood balance, WIP/rework and measured residual |  |
| ethanol_shellac_reconciliation | shellac and ethanol species ledgers | For ethanol species: delivered ethanol + opening ethanol stock = retained ethanol in accepted product/rejects + ethanol in discarded coating solution + ethanol in separate rinse solvent + outdoor ethanol release + closing stock + reconciliation residual. Incoming species mass = delivered liquid mass × measured ethanol mass fraction. Sum releases across mixing/application/drying/cleaning once, net of ambient background; no assumed 100% volatilization. Shellac dry solids are balanced independently among accepted film, rejects, waste coating, rinse residue and stock. | cp_finish; cp_product; cp_residues; cp_air | ethanol species and independent shellac dry-solids balances | epa-coating-eiip-2001 |
| matched_particle_partition | pm25; pmcoarse; pmover10 | For matched cumulative particle observations: PM2.5 bin = PM2.5; coarse bin = PM10 - PM2.5; >PM10 bin = PMtotal - PM10. Require PMtotal ≥ PM10 ≥ PM2.5 ≥ 0, same size definitions/method/time/source, and post-control outdoor releases. These bins sum to PMtotal once; filter catch remains waste, and indoor samples cannot be added to the same released mass. PTE tables are not measurements. | cp_air; cp_residues | exclusive outdoor particle masses | epa-sawmill-pte-2014 |
| water_carbon_reconciliation | ornament_manufacture physical water/carbon ledgers | Water ledger covers wood moisture, liquid-input water, waste-liquid water, product/residue retained water, stock and net ambient uptake/vapour. Carbon ledger separately records dry wood and shellac carbon from measured/supplier composition, ethanol carbon from confirmed species amount, retained carbon, sale/waste transfers and outdoor volatile/particle carbon. Reconcile without assuming a universal wood carbon fraction or transferring a northern softwood survey coefficient. Track biogenic versus fossil origin for wood/resin/ethanol/background emissions; LCIA conventions never change the physical ledger. | cp_materials; cp_finish; cp_product; cp_residues; cp_air; cp_water | separate measured water and biogenic/fossil carbon ledgers |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |



### Physical Reconciliation Procedures

Use these collection-ledger equations before normalization or burden allocation. B is accepted batch net ornament mass (kg); no invented machine mass is used. For every uncoated wood sample, u = (m_wet - m_dry) / m_dry and m_dry = m_wet / (1 + u). Coated final/reject masses are first separated into wood, water, retained shellac and retained solvent by measured composition; whole ornament mass is not oven-dry wood mass. [usda-wood-handbook-2021]

Dry wood entering + opening dry-wood stock = dry wood retained in accepted products + dry wood in saleable offcuts + discarded offcuts + collected dust + rejects + dust retained on spent abrasive + outdoor wood-dust release + wood-derived volatile mass + closing dry-wood stock + measured reconciliation residual. Separate wood/mineral dust by composition; do not force all total-PM mass into wood yield. Inventory changes of work-in-progress are included, and rework transfers cancel within the unit. The residual has measurement uncertainty and investigation, not a new fictitious waste exchange.

For ethanol species: delivered ethanol + opening ethanol stock = retained ethanol in accepted product/rejects + ethanol in discarded coating solution + ethanol in separate rinse solvent + outdoor ethanol release + closing stock + reconciliation residual. Incoming species mass = delivered liquid mass × measured ethanol mass fraction. Sum releases across mixing/application/drying/cleaning once, net of ambient background; no assumed 100% volatilization. Shellac dry solids are balanced independently among accepted film, rejects, waste coating, rinse residue and stock. [epa-coating-eiip-2001]

For matched cumulative particle observations: PM2.5 bin = PM2.5; coarse bin = PM10 - PM2.5; >PM10 bin = PMtotal - PM10. Require PMtotal ≥ PM10 ≥ PM2.5 ≥ 0, same size definitions/method/time/source, and post-control outdoor releases. These bins sum to PMtotal once; filter catch remains waste, and indoor samples cannot be added to the same released mass. PTE tables are not measurements. [epa-sawmill-pte-2014]

Water ledger covers wood moisture, liquid-input water, waste-liquid water, product/residue retained water, stock and net ambient uptake/vapour. Carbon ledger separately records dry wood and shellac carbon from measured/supplier composition, ethanol carbon from confirmed species amount, retained carbon, sale/waste transfers and outdoor volatile/particle carbon. Reconcile without assuming a universal wood carbon fraction or transferring a northern softwood survey coefficient. Track biogenic versus fossil origin for wood/resin/ethanol/background emissions; LCIA conventions never change the physical ledger.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_basis | all inventory rows | Same accepted 1 kg denominator in all records; one species/design/finish scope or separately measured strata. Reject unsupported count, volume, wet/dry or supplier reference conversions. | cp_product; cp_materials; cp_finish |
| quality_absence | conditional rows | Nondetection, measured zero, absent process and unmeasured are distinct. State test coverage and detection limits; uncertainty/speciation gaps remain pending. Add a specific atomic row for any identified additional ingredient, packaging waste or released species. | cp_air; cp_finish; cp_pack |
| quality_identity | UUID-bearing rows | Verify actual material, route, medium, property, supplier amount basis and background context. Identity success does not complete the data package. Unknown UUIDs or source defects must remain disclosed and resolved before claiming complete compatible linkage. | supplier certificates; receiver manifests; direct identity metadata |
| quality_coverage | ornament_manufacture | Disclose production period, season/shift/site representation, calibration and uncertainty; retain complete stage and physical ledgers and the separate burden allocation ledger. Source survey numbers are not industry defaults for the selected hardwood route. | all collection protocols |



## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Reject classification-label-only applicability. Verify single-piece untreated kiln-dried hardwood, indoor decorative function, shellac/undenatured-ethanol brush route and all required qualifiers; excluded product functions require another method. | usda-wood-handbook-2021; usda-finishing-1999 |
| validate_reference | all inventory rows | Exactly one finished_ornament product output carries the reference UUID and 1 kg. All row, protocol and normalization denominators agree; exclude packaging from net reference mass and exclude rejected product from the denominator. |  |
| validate_balances | ornament_manufacture | Check measured dry wood, coating solids, ethanol species, water and carbon balances with declared uncertainties and stock changes. Investigate residuals; confirm equal internal transfer quantities and no physical allocation of co-product outputs. | usda-wood-handbook-2021; epa-coating-eiip-2001; corrim-northern-lumber-2025 |
| validate_emissions | elementary outputs | Verify outdoor-air subcompartment, CAS and species mass rather than total VOC-as-carbon. Require disjoint particle size bins and no indoor/outdoor double count. No unverified correction, surrogate, enantiomer or missing-fraction substitution; unmeasured emissions remain unresolved. | epa-coating-eiip-2001; epa-sawmill-pte-2014 |
| validate_destinations | waste and coproduct outputs | Verify clean/contaminated state, separate receiver function, composition and upstream/treatment linkage. No zero-burden wood-loss default and no automatic substitution credit. Declare missing UUIDs and source metadata defects rather than claiming scientific approval or full completeness. | corrim-northern-lumber-2025 |



## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply of the declared indoor carved shellac-coated hardwood ornament, after complete data collection, compatible linkage and independent quality review |
| allowed_use | Same species/design/function/route and reference basis; explicit uncertainty and applicability review |
| excluded_use | Whole CPC31913 coverage; storage case, inlay, tableware or furniture substitution; alternate coating; generic per-piece aesthetic equivalence; methodology approval inferred from packaging |
| required_metadata | All reference qualifiers, production period/site, supplier/background pins and delivery bases, receiver routes, full physical ledgers and burden allocation |
| required_quality_disclosure | UUID gaps; metadata defects; measurements/nondetection; uncertainty; balances; representativeness; exclusions; pending independent scientific review |
| update_trigger | Wood species/supply treatment, design, coating/solvent/denaturant, application/drying/abatement, supplier reference basis, electricity boundary or residue destination changes |



## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA FPL, Wood handbook, FPL-GTR-282 (2021), Ch4 pp4-1,4-11; Ch13 pp13-2; Ch16 pp16-29–16-30. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Dry-basis moisture, measured mass/density and indoor surface preparation; no universal species moisture or density adopted. |
| usda-finishing-1999 | handbook | USDA FPL, Williams (1999), FPL-GTR-113, Ch15 p15-31, Surface Coats. https://research.fs.usda.gov/download/treesearch/7145.pdf | Shellac as an indoor transparent coat and water sensitivity; historical description is not a production recipe or quantified service life. |
| gsa-shellac-2017 | official_guidance | GSA, Cleaning and refinishing of woodwork, procedure modified 2017-07-28, Part2 materials and Part3 §3.02. https://www.gsa.gov/real-estate/historic-preservation/historic-preservation-policy-tools/preservation-tools-resources/technical-procedures/cleaning-and-refinishing-of-woodwork | Shellac/alcohol combination and substrate-dependent acceptance. Restoration cloth/wax steps and overnight time are not transferred to ornament manufacture; supplier must substantiate the selected ethanol-only brush route. |
| epa-coating-eiip-2001 | official_guidance | US EPA EIIP VolII Ch7 (July 2001), §§3.1.1,4.1,4.2,6.1.1; pp7.4-10–7.4-11. https://www.epa.gov/sites/default/files/2015-08/documents/ii07_july2001.pdf | Site-specific coating material balance, species composition and captured/fugitive distinction; no example application rate, recipe or removal efficiency adopted. |
| corrim-northern-lumber-2025 | literature | CORRIM, Life Cycle Assessment of Softwood Lumber Production – Northern Region (2025-07-22), §3.2.6 p16. https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf | Counterevidence to treating all residues as burden-free: report partitions environmental loads among lumber/byproducts and attributes packaging to final product. Its softwood survey, factors and prescribed allocation shares are not transferred to hardwood ornaments. |
| epa-sawmill-pte-2014 | official_guidance | US EPA Region10 (2014-05-08), PM Potential to Emit Factors for Activities at Sawmills Excluding Boilers, pp1–2. https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf | Limits of the sawmill PTE table and nested PM size conventions; its maximum-capacity factors do not quantify actual carving emissions or boiler emissions. |
