---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.doors-and-their-frames-and-thresholds-made-out-of-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated solid hardwood mortise-and-tenon door leaf at factory gate

## 1. Scope and Applicability

Applies to a single accepted uncoated solid hardwood stile-and-rail door leaf with solid hardwood panels, made by mortise-and-tenon joinery and one-part PVAc ambient bonding. It is a factory-made, sanded and inspected door slab requiring downstream finishing and installation. This is a manufacturing declared unit, not a complete installed doorway or a lifetime service comparison. The market route is evidenced by `adk-solid-door-route`; this PCR does not adopt that manufacturer’s mass, recipe or species share.

Distinguish solid-wood leaves from wood-frame filled-core/flush leaves (paper honeycomb, particleboard, mineral or composite cores and skins), independent frames/thresholds, and complete door sets. Only the first, unglazed and without hardware/seals/coating, is covered. Exclude cellular-board semifinished products under CPC 31610, engineered/veneered leaves, glass, factory-coated leaves, exterior-weatherproof or certified acoustic/fire door sets. This method includes door-level joinery, cure, final machining and acceptance rather than repeating a panel PCR. On-site kiln drying, boilers, thermal pressing, washing and solvent finishing are outside the selected route; evidence of them requires an explicit route extension with additional atomic exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.doors-and-their-frames-and-thresholds-made-out-of-wood |
| classification_refs | CPC 3.0 31622; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated, unglazed solid hardwood mortise-and-tenon door leaves |
| excluded_products | Filled-core leaves; frames; thresholds; complete door sets; cellular panel semifinished products; veneered/engineered or coated leaves |
| representative_product | One sanded, accepted solid hardwood panel door leaf with no fitted hardware |
| production_route | Purchased kiln-dried planed hardwood → cutting/profiling/tenoning → ambient PVAc assembly → door finishing machining/sanding → inspection → packing |
| market_state | Factory gate uncoated door slab; further finishing and installation required |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A door leaf that will close an interior opening after finishing and fitting |
| How much | 1 kg of accepted door-leaf net mass of one declared configuration; physical leaves are weighed individually |
| How well | Conform to the actual signed drawing and documented dimensional, joint and appearance acceptance; no assumed acoustic/fire rating |
| How long or cycle | One manufacturing campaign through factory dispatch; service life is outside this declared unit |
| reference_flow_link | accepted_leaf |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Doors and their frames and thresholds made out of wood `6ae3ac1d-ab21-4c46-8d5a-cf630e05496a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | single door leaf identity; interior use; species and origin; net mass and moisture; height/width/thickness and area; solid panel/stile/rail dimensions and joints; no filled core or skin; glue formulation/solids/water and supplier bonding conditions; uncoated state; hardware/seals/glass absent; acceptance drawing and results; actual functional claim and acoustic/fire evidence or explicit no claim; factory/meter voltage/campaign; packaging |

Declare every qualifier in dataset metadata or linked primary records. The broad database name is an identity anchor narrowed to this leaf; it is never permission to select a frame or door set.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use 1 kg accepted uncoated door-leaf net mass, excluding all packaging. Under cp_mass weigh each complete accepted leaf on a calibrated scale, identify its configuration and acceptance record, then sum the same-configuration campaign net masses. No default per-door weight; no area-times-assumed-density substitute. |
| wood_moisture | hardwood, clean_offcut, clean_sawdust, glued_dust | Mass | kg | Record as-received mass and dry-basis moisture separately. For wood only, dry mass = wet mass / (1 + dry-basis moisture / 100). Determine moisture under cp_material using species-calibrated meters checked against representative oven-dry samples; glue/abrasive fractions are not wood. |
| electricity_basis | electricity | Net calorific value | MJ | Convert actual metered kWh to MJ by multiplying by 3.6, matching the verified unit group; reconcile purchased medium-voltage supply and internal losses. |
| geometry | reference product | Mass | kg | Retain actual measured door area and thickness as configuration descriptors, not mass substitutes. Supplied acoustic/fire declarations must match the tested leaf/assembly, hardware, seals and installation; absent assembly evidence cannot create a rating. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Kiln-dried planed untreated hardwood and supplied ready-to-use PVAc glue received at the door plant |
| starting_condition_role | Foreground starting gate; not a full life-cycle cut-off |
| product_classification_scope | Narrower interior solid-hardwood door-leaf subset of CPC 31622, not all leaf/frame/threshold identities |
| recursive_input_rule | Purchased accepted door leaves are outside this manufacturing route. In-process rework stays internal and must not be counted as a new purchased leaf or a second reference output. |
| upstream_dataset_requirement | Link species/state-compatible sawnwood production including drying, glue formulation manufacture, actual electricity supply, abrasive and packaging production; retain upstream emissions including biogenic CO2 even if excluded from a particular impact subtotal. UUID identity does not establish background completeness. |
| disclosure | Declare start/end gates, supplier operations, outsourcing, rework, losses, packaging, waste destinations, background gaps and excluded downstream finishing/installation/use/end of life |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b-door-gate | door_manufacture | Include cut/shape/tenon, panel preparation, glue application, clamping/cure, final leaf machining, sanding, dimensional/joint acceptance, reject handling and packing. Preserve stage meters and mass records inside one aggregated foreground unit, avoiding a fictitious intermediate door output. | adk-solid-door-route; woodtech-door-quality |
| b-route | door_manufacture | Confirm solid panels, no added catalyst or coatings, dry cleanup and no on-site combustion. If actual operations differ, re-assess scope and add each chemical, utility, waste and species emission separately; never suppress known exchanges to fit the route. | usda-wood-handbook-2021 |
| b-background | all inventory rows | Require supplier process boundaries and quantities independently of flow identity; account for outsourcing and actual material transport with separately identified transport services in the completed dataset. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| door_manufacture | Door-leaf manufacture, acceptance and packing | required | Declared solid hardwood ambient-bonding route | Aggregated foreground production; stage records retained | 1 kg accepted net door-leaf mass |

### Process: Door-leaf manufacture, acceptance and packing (`door_manufacture`)

#### Inputs

##### Product flows

###### Sawnwood, hardwood (`hardwood`)

Only kiln-dried, planed, untreated hardwood sawnwood for solid stiles, rails and panels. Record each species and supplier lot separately; no veneer, laminated core, chipboard or softwood surrogate. The identity has unspecified species shares: require a species-compatible upstream dataset and actual mass/moisture, rather than inheriting its prior application.

- Selected flow: Sawnwood, hardwood `e58cb409-74f7-4f0b-bfc0-9261c27c14be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_material; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Polyvinyl acetate (`pvac_glue`)

Ready-to-use one-part aqueous PVAc woodworking glue, recorded as one as-supplied mixture exchange. Collect brand, batch, supplier SDS/formulation, actual polymer and total solids, water and other disclosed formulation constituents, bonding conditions and joint acceptance. The broad identity includes aqueous PVAc emulsions but supplies no concentration or formula. Verify whether the supplier/background reference quantity is the delivered wet mixture or dry solids before quantity linkage; unknown compatibility remains explicit. Do not count embedded resin, carrier water or additives again as separate purchased inputs. Separately added catalyst, filler or dilution water is outside this declared route.

- Selected flow: Polyvinyl acetate `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_material; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Alternating current (`electricity`)

Meter purchased grid electricity for machining, clamping, sanding, extraction, compressed-air generation and packing. This UUID is customer-side 1–35 kV supply only: verify the service-meter voltage and upstream supplier/year/region/loss boundary; include internal transformation losses once. A low-voltage meter needs a separately verified compatible identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Recorded exchange per reference flow under cp_energy; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Abrasive paper, at plant (`abrasive_paper`)

Paper-backed abrasive used for door sanding; record abrasive mineral, binder, grit, backing and worn-paper mass. No raw alumina is substituted for manufactured abrasive paper, and no material composition is supplied by this broad identity.

- Selected flow: Abrasive paper, at plant `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_material; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `woodtech-door-quality`

###### Corrugated cardboard (`cardboard`)

Corrugated board protection, conditional on actual use. The selected record is recycled-content C/E/F flute board with fiber at least 80%; verify the actual board meets those identity qualifiers. Do not impose that composition as a default recipe.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_pack; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `woodtech-door-quality`

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Non-cellular, non-adhesive LDPE wrapping film, conditional on actual use; measure dispensed film and outgoing wrapping separately from scraps.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_pack; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_pallet`)

One physical wooden load pallet, conditional on dispatch use. This PCR selects a flat wooden pallet subset of the broad identity, not a pallet/collar selector. Record new/reused state, tare, supplier construction, return rate and verified trips; allocate consumption to the shipment without shrinking the physical pallet transfer.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_pack; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `woodtech-door-quality`

#### Outputs

##### Product flows

###### Doors and their frames and thresholds made out of wood (`accepted_leaf`)

Accepted uncoated solid hardwood mortise-and-tenon door leaf after door-level machining, assembly, sanding and dimensional/joint inspection, before transport packaging. Although the database display covers doors and frames, this exchange represents only the declared leaf. No intermediate output uses this reference UUID.

- Selected flow: Doors and their frames and thresholds made out of wood `6ae3ac1d-ab21-4c46-8d5a-cf630e05496a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `adk-solid-door-route`

##### Waste flows

###### Untreated hardwood machining offcut, non-agglomerated (`clean_offcut`)

Clean pre-bonding offcuts sent off site. Weigh by lot and destination; not briquettes, not glue-contaminated trim.

- Selected flow: Untreated hardwood machining offcut, non-agglomerated
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### sawdust waste (`clean_sawdust`)

Captured untreated pre-bonding hardwood sawdust sent for off-site combustion or recovery, matching the selected route. Captured material is waste, not an air emission. Exclude glued sanding dust and keep moisture and actual destination.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Captured PVAc-bonded hardwood sanding dust (`glued_dust`)

One physically collected mixed sanding-dust stream after bonding. Record wood, cured glue and abrasive content where present. Do not reuse an untreated-sawdust UUID; do not recount captured dust as outdoor PM.

- Selected flow: Captured PVAc-bonded hardwood sanding dust
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Rejected uncoated PVAc-bonded solid hardwood door leaf for disposal (`rejected_leaf`)

Unrecoverable assembled leaf rejects crossing the waste boundary. Exclude reworked leaves ultimately accepted, which remain internal; no accepted-product UUID is used for this waste identity.

- Selected flow: Rejected uncoated PVAc-bonded solid hardwood door leaf for disposal
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Scraped PVAc woodworking glue residue (`glue_residue`)

Separately scraped aqueous/cured PVAc residue; measure state, water content, container tare and disposal. No wafer-production adhesive residue is substituted. Dry scraping is the declared cleanup route; water-washing requires additional separately identified water and wastewater exchanges.

- Selected flow: Scraped PVAc woodworking glue residue
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Spent abrasive waste (`spent_abrasive`)

Spent abrasive paper removed from sanding. Reconcile remaining backing/mineral/binder and attached dust; avoid double counting detached wear or dust already in glued_dust.

- Selected flow: Spent abrasive waste `f0a52dd6-0027-4033-9068-f293526f958f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Packaging waste, cardboard (`cardboard_scrap`)

Conditional cardboard packing trim and damaged protection. Weigh actual mass; do not adopt the database comment’s expert-judgement scrap percentage.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Unwashed LDPE wrapping-film scrap at door plant (`ldpe_scrap`)

Conditional on-site LDPE scrap before treatment. Do not substitute PET waste, PP waste or cleaned recycling-plant PE.

- Selected flow: Unwashed LDPE wrapping-film scrap at door plant
- Flow property / unit: Mass / kg
- Amount rule: Recorded exchange per reference flow under cp_waste; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

##### Elementary flows

###### particles (PM2.5) (`pmfine`)

Outdoor residual machining/sanding dust in the PM2.5 fraction after controls; specify air/unspecified. Record sampling duration, airflow, capture efficiency evidence and uncertainty.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_air; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### particles (PM2.5 - PM10) (`pmmid`)

Outdoor residual dust in the disjoint >PM2.5 to PM10 fraction, air/unspecified; a cumulative PM10 result must first be reconciled with PM2.5 under the same sampling basis.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_air; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### particles (> PM10) (`pmcoarse`)

Outdoor residual dust >PM10, air/unspecified; require an actual size-resolved result or valid total-minus-PM10 reconciliation, never a generic particle default.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_air; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### water vapour (`water_vapor`)

Net evaporation of wood moisture and supplied glue water to outdoor air/unspecified during conditioning/cure. Establish the campaign water balance; distinguish retained glue water, residual waste water content and ambient uptake. No drying-factor transfer from a softwood survey.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_water; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`

###### acetic acid (`acetic_acid`)

Conditional acetic acid (CAS 64-19-7) to outdoor air/unspecified, only when identified in the actual glue/wood emission evidence and quantified. The presence of a PVAc product or a searched UUID does not establish positive emissions. Check every other identified volatile species separately before completing a dataset.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded exchange per reference flow under cp_air; campaign normalization as specified in section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a-physical | door_manufacture | Maintain a physical stage ledger before burden allocation: wood dry mass, water and carbon entering equal accepted leaves, actual wastes, emissions and stock change within documented measurement uncertainty. Packaging has a separate dispatch ledger and is excluded from leaf net mass. Internal transfers and rework have equal quantities at both stage endpoints. |  |
| a-attribution | door_manufacture | Prefer dedicated campaign meters and withdrawals. For shared electricity/extraction/air systems, use measured runtime/load or submeter evidence and disclose the attribution driver. Keep environmental burden accounting separate from physical outputs; never multiply physical waste or co-product quantity by a burden share. |  |
| a-residues | clean_offcut, clean_sawdust, glued_dust | Rows here are waste transfers with actual treatment links and no avoided-product credit. If residues are deliberately produced marketable co-products, document that status and re-assess allocation with independent review before issuing that dataset; no default substitution or economic split is supplied. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Use a single configuration and campaign with measured accepted net mass S (kg) = sum of individual accepted leaf net masses. Rejects and packaging are excluded from S; their production inputs and wastes remain in the numerator. All collection protocols return amounts per 1 kg reference flow. Record the physical campaign totals alongside the normalized result. No invented per-door mass or industry recipe is needed.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | door_manufacture | accepted leaf net mass | foreground_record | configuration; batch; leaf identifier; calibration; individual net masses; accepted count; S; drawing; height/width/thickness; area; acceptance defects; claim/test references | Weigh each accepted complete uncoated leaf on a calibrated scale without transport packaging; reconcile drawing, configuration and acceptance record; retain each reading and sum as S. Dimensions measured with verified instruments. | kg | each leaf; campaign close | Complete declared campaign, with representative operating coverage | Named factory and configuration | per 1 kg reference flow | Calibration, source records and reconciled campaign ledger |
| cp_material | door_manufacture | wood, glue and abrasive inputs | foreground_record | supplier lot; species/origin; delivery state; withdrawals; opening/closing stock; wet/dry basis; moisture method; supplier formulation/SDS; glue solids/water; abrasive composition | Weigh and reconcile lot receipts, withdrawals and stocks by separate atomic material. Measure wood moisture on representative same-lot specimens with species-calibrated meters and oven-dry checks; glue properties from supplier and verified batch sampling, not assumed polymer concentration. Record ambient bonding conditions and cure acceptance. | kg | each lot and campaign | Complete declared campaign, with representative operating coverage | Named factory and configuration | per 1 kg reference flow | Calibration, source records and reconciled campaign ledger |
| cp_energy | door_manufacture | electricity | foreground_record | meter readings; service voltage; stage runtime/load; site supply; transformer losses; kWh; attribution driver; supplier background boundary | Use calibrated purchased-electricity meters and stage submeters for the campaign; reconcile totals and shared loads, including dust extraction and compressor use. Convert kWh to MJ without adding upstream supply losses twice. | MJ | continuous, campaign totals | Complete declared campaign, with representative operating coverage | Named factory and configuration | per 1 kg reference flow | Calibration, source records and reconciled campaign ledger |
| cp_pack | door_manufacture | each packaging input | foreground_record | packing bill; separate board/film/pallet masses; tare; return and trip records; dispatch quantity; scrap; stocks | Weigh each packaging material separately; reconcile withdrawals with dispatched protection, scrap and stock change. For reusable pallets retain physical transfer and return records and verified service-life attribution separately. | kg | each shipment | Complete declared campaign, with representative operating coverage | Named factory and configuration | per 1 kg reference flow | Calibration, source records and reconciled campaign ledger |
| cp_waste | door_manufacture | each waste output | foreground_record | row identity; pre/post glue stage; container tare; wet mass; moisture; attached glue/abrasive; destination; transfer note; rework stock | Weigh segregated waste containers, subtract tare and retain treatment transfer evidence. Separate clean offcut, untreated sawdust, glued dust, rejected leaf, PVAc residue, abrasive paper and each packaging scrap. Reconcile detached material once. | kg | each removal and campaign | Complete declared campaign, with representative operating coverage | Named factory and configuration | per 1 kg reference flow | Calibration, source records and reconciled campaign ledger |
| cp_air | door_manufacture | each elementary air emission | foreground_record | species/CAS; medium/submedium; stage; control device; sampling/airflow/time; size basis; detection limit; fugitive estimate and uncertainty; glue SDS | Collect outdoor discharge measurements after control with compatible sampling periods; include documented fugitive releases. Obtain separate species and disjoint dust-size totals. Acetic acid requires actual source identification and measurement. Unknown or below detection is disclosed, not an invented zero. | kg | representative operating conditions and campaign | Complete declared campaign, with representative operating coverage | Named factory and configuration | per 1 kg reference flow | Calibration, source records and reconciled campaign ledger |
| cp_water | door_manufacture | evaporated water | foreground_record | wood moisture before/after; glue input water; water in accepted leaf and wastes; stock change; ambient uptake; airflow/humidity cross-check | Determine net evaporated water from consistent campaign water balances, cross-checked by outlet airflow/humidity where feasible; record retained water and ambient uptake rather than treating all supplied glue water as vapor. | kg | each campaign | Complete declared campaign, with representative operating coverage | Named factory and configuration | per 1 kg reference flow | Calibration, source records and reconciled campaign ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | For each non-reference row, normalized exchange = attributable physical campaign total / S; S is the sum of measured accepted net leaf masses in kg. Accepted_leaf = 1 kg. Apply the same campaign and configuration throughout. | cp_mass; cp_material; cp_energy; cp_pack; cp_waste; cp_air; cp_water | Exchange per 1 kg reference flow |  |
| wood_balance | hardwood, clean_offcut, clean_sawdust, glued_dust | Wood dry mass = wet wood mass / (1 + dry-basis moisture / 100); use only the wood fraction of composite streams. Maintain unallocated dry-wood/water/carbon balances including stock changes; carbon fraction requires actual species/composition evidence, not a universal default. | cp_material; cp_waste; cp_water | Dry wood mass and physical balance | usda-wood-handbook-2021 |
| particle_partition | pmfine, pmmid, pmcoarse | If the same valid sample reports cumulative totals, middle fraction = PM10 − PM2.5 and coarse fraction = total suspended particles − PM10; require non-negative values, equal sampling/control bases and documented uncertainty. Add only disjoint fractions; never sum PM10 with its PM2.5 subset. | cp_air | Disjoint particle totals before campaign normalization |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq-route | door_manufacture | Verify actual solid leaf construction and complete door gate; retain excluded-operation checks and stage records. | Drawing, bill of materials, shop route and acceptance |
| dq-mass | all inventory rows | S must be positive and measured; report scale resolution/calibration, sampling coverage, period and denominator. Quantities, null values, detection limits and absence are distinct. | Traceable original campaign records |
| dq-background | all inventory rows | Confirm actual supplied composition, geographic/temporal representativeness and unit basis before linking backgrounds. Unresolved waste identities or supply compatibility remain explicit and block a complete dataset, not the future collection protocol. | Supplier declarations, state-confirmed identities, linked process boundaries |
| dq-functions | reference product | Area, thickness, adhesive, absence of cores/skins/coatings/hardware and functional claims require original evidence. Do not infer sound/fire certification from wood species or material mass. | Product schedule and test report matching configuration, or explicit no claim |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v-identity | reference product | Require exactly one completed accepted door-leaf product output linked by accepted_leaf, equal to 1 kg net mass. A frame, threshold, filled-core panel or packaged gross mass fails scope. | adk-solid-door-route |
| v-basis | all inventory rows | EN and ZH must preserve rows, quantities, S denominator, sources and formulas. Every row has one atomic flow, reference basis and named collection protocol; actual optional absence needs route evidence. |  |
| v-balance | door_manufacture | Reconcile physical mass/water/carbon and packaging ledgers before allocation. Check no duplicated internal handoffs, rework or captured-versus-emitted dust. Document discrepancy and measurement uncertainty; no invented closure amount. |  |
| v-emissions | pmfine, pmmid, pmcoarse, water_vapor, acetic_acid | Check species, CAS where relevant, outdoor air/submedium, size partition and actual control boundary. Preserve biogenic CO2 in linked upstream LCI and disclose impact-accounting conventions separately. No generic PM or correction flow substitutes a specific emission. |  |
| v-completeness | all inventory rows | Missing identity, incompatible supplier composition/units, unmeasured quantities or unknown flows make the concrete dataset incomplete. Add every evidenced additional exchange atomically; flow identity success alone does not approve quantities or background data. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input for the specified uncoated interior solid hardwood door leaf, with linked upstream manufacture and disclosed finishing/installation outside this gate |
| allowed_use | Manufacturing comparison only after matching leaf geometry, configuration, moisture, performance, gates and complete supply data |
| excluded_use | Whole installed door sets; frames/thresholds; filled-core panels; certified fire/acoustic assemblies; universal per-door weight |
| required_metadata | Factory, campaign, S and accepted count, mass calibration, dimensions/species/route, glue formulation, claims and acceptance, boundary and backgrounds, packaging, allocation, UUID gaps |
| required_quality_disclosure | Measured/estimated/missing quantities, sampling and uncertainty, data age, supplier compatibility and outstanding identity or background gaps |
| update_trigger | Changed species, construction, adhesive, finishing, functional claim, meter boundary, energy route, waste destination or supplier background |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood Handbook, FPL-GTR-282 (2021), Table 10-1 / pp.10-9, 10-12; ch.13 p.13-2. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Wood moisture measurement; ready-to-use PVAc and ambient cure/volatile caveats. No door weight, recipe, emission factor or sector average. |
| adk-solid-door-route | literature | Adirondack Naturals, Custom, Solid Wood Doors Handmade Since 1999, Welcome and FAQ, undated publisher page. https://www.adknaturals.com/ | Primary manufacturer evidence of solid-wood mortise-and-tenon construction and unfinished slab delivery; qualitative subset only. |
| woodtech-door-quality | literature | WoodTech Door, Specifications, §§4–6, undated publisher page. https://woodtechdoor.net/specifications | Independent manufacturer evidence of door-level machining/sanding, squareness/warp inspection and dispatch protection. Engineered component recipe and numeric tolerances are not adopted. |
