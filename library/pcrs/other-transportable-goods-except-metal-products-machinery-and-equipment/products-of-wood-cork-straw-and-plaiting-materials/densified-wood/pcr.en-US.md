---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.densified-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Resin-free heat-stabilized densified solid wood

## 1. Scope and Applicability

This PCR concerns unglued solid-wood blanks whose cellular structure is physically compressed by hot pressing and whose compressed state is retained under declared conditioning. The representative is an uncoated yellow-birch tool-handle blank. The route uses the heat-stabilized compression principle of solid-wood Staypak; it does not assume that a contemporary factory achieves historical specimen performance. Solid wood retains continuous grain, without added impregnation resin, adhesive, coating or chemical delignification. An inherently dense species without compression is not densified wood; drying water loss or heat treatment alone is insufficient.

Resin-impregnated compressed wood (compreg) requires separate resin uptake, compression, curing and emissions collection. Ordinary plywood/blockboard forms panels by bonding veneers or lumber strips: bonding pressure does not establish compression fixation of solid wood. MDF and particleboard reconstruct fibres or particles and are excluded. Glued compressed veneers, resin-only mass gain and wet compressed wood without verified fixation are outside this record. CPC 31520 supplies classification context, not evidence of the route.

The representative inventory covers electrically heated platens and electric drives through factory-gate dispatch. Purchased steam/heat, fuel combustion, chemical additions, refrigerants, additional packaging or direct water discharge require additional atomic exchanges and verified supply/treatment boundaries before applying the inventory; none is silently assigned zero. A steam MJ property alone does not establish net delivered heat: supplier definitions and site enthalpy balance must correspond. No universal density multiplier, pressure, temperature, recovery limit or service life is assigned. [Sources: usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.densified-wood |
| classification_refs | CPC 3.0 31520; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Resin-free unglued heat-stabilized compressed solid-wood tool-handle blanks; yellow birch representative |
| excluded_products | Compreg; ordinary plywood/blockboard; glued compressed veneer; MDF; particleboard; naturally dense uncompressed wood; heat-modified-only wood; coated or chemically treated products |
| representative_product | Uncoated yellow-birch tool-handle blank, net accepted conditioned mass at factory gate |
| production_route | Receive kiln-dried solid stock → moisture conditioning → electrically heated compression → cooling/fixation under load → conditioning/recovery acceptance → trimming and packing |
| market_state | Uncoated solid blank for further tool-handle manufacture; not a complete tool |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply physically compressed and heat-stabilized uncoated solid blanks for tool-handle manufacture without cross-material functional equivalence |
| How much | 1 kg net accepted conditioned wood at factory gate, excluding packaging |
| How well | Declared species, dimensions, moisture basis of density, compression direction and fixation/recovery acceptance; verified against intended-use specification |
| How long or cycle | One declared production/dispatch accounting period; no end-use service life assigned |
| reference_flow_link | `finished_blank` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical species; solid feedstock and sawing orientation; feedstock/final moisture and dry-basis definition; pre/post mass and volume at comparable state; pressure/temperature/time and cooling records; compression direction; release and conditioned recovery tests; no added adhesive/resin/coating declaration and formulation evidence; finished dimensions and tool-handle acceptance; site/period; delivery state; electricity voltage and boundary |

These qualifiers must be declared in the data package. The verified Wood material foreground identity leaves species, form, treatment, moisture, route and provider unspecified and includes the declared resin-free compressed solid-wood subset only with these physical qualifications. Require actual yellow birch, continuous solid grain, no added resin/glue/coating, measured paired compression and conditioned recovery, geometry and net accepted dispatch mass. The UUID does not establish a densification production background, quantity, mechanical performance or durable fixation by itself; each actual provider and reference-quantity basis remains independently subject to verification.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted conditioned wood mass as denominator; exclude packaging and rejects. Oven-dry or gross mass is not a substitute. |
| moisture_basis | birch_stock, finished_blank | Mass | kg | u = (m_wet - m_dry) / m_dry; m_dry = m_wet / (1 + u). u is a dry-basis mass ratio; divide percentages by 100 first. Compare paired feedstock/final density at comparable moisture and temperature, separating water loss from physical compression. |
| energy_unit | electricity | Net calorific value | MJ | Record low-voltage AC consumption; 1 kWh = 3.6 MJ. This conversion assigns neither press efficiency nor net delivered steam heat. |
| hydraulic_volume | hydraulic_oil | Volume | m3 | Use actual fluid volume at recorded temperature; V = m / rho(T) only with measured positive finite density in kg/m3 for the same grade and temperature. Report V/D in m3/kg and retain m = rho(T)*V for mass balance; no default density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Kiln-dried unglued unimpregnated yellow-birch solid stock received at factory, with measured moisture and traceable origin |
| starting_condition_role | Foreground receiving gate; not exemption of upstream stock burdens |
| product_classification_scope | Resin-free heat-stabilized solid-wood subset of CPC 31520; resin/veneer/reconstituted-board routes excluded |
| recursive_input_rule | Internal rework has no external input/output pair; purchased already-densified solid stock needs separate state and upstream dataset without duplicated compression burdens |
| upstream_dataset_requirement | Retain forestry, sawing, kiln drying and delivery transport burdens with actual species/region/moisture/drying background, not coniferous survey averages |
| disclosure | Declare supply boundary, stage meters, losses/rejects, recovery tests, auxiliaries, waste destinations and exhaust controls; missing evidence remains unresolved |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | Apply only to the declared electric-drive hot-pressed solid route; combine compression, conditioned acceptance, trimming/packing into one foreground unit while retaining stage metering. | usda-wood-handbook-2021; cabral-densification-2022 |
| boundary_complete | manufacture | Include attributable idle, rejected production, rework, cooling and controls; link delivery transport as a separate service background and keep added exchanges atomic. | usda-wood-handbook-2021; cabral-densification-2022 |
| boundary_external | manufacture | Linked background carries upstream emissions; foreground exhaust contains site releases only. External waste treatment is not also a site emission. | usda-wood-handbook-2021; cabral-densification-2022 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Solid-wood hot compression, conditioned acceptance and dispatch | required | Declared resin-free electrically heated route | foreground | 1 kg accepted net wood |

Physical stages: reception → conditioning → hot pressing/cooling under load → conditioning/recovery tests → trimming/packing → dispatch. Internal handoffs retain batch, mass and moisture records with equal quantities at both ends; they are not duplicated as external product exchanges of this unit.

### Process: Solid-wood hot compression and dispatch (`manufacture`)

#### Inputs

##### Product flows

###### Kiln-dried yellow-birch solid sawn stock (`birch_stock`)

Supply actual unglued, untreated kiln-dried yellow-birch sawn stock. The broad hardwood identity is at the sawmill gate; verify actual botanical species, moisture, dimensions, sawing orientation, supplier gate and absence of bonding or chemical treatment. Its illustrative downstream seat-frame use does not define this product use. Species-unspecified identity is not a species-verified background: actual hardwood/species and gate compatibility must be established separately; unknown compatibility remains incomplete. The adopted sawnwood classification requires actual stock thicker than 6 mm; thinner stock needs another verified identity. Do not substitute coniferous stock.

- Selected flow: Sawnwood, hardwood `43103a96-43df-4f35-ad02-728237b3f815`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_wood` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Alternating current (`electricity`)

Applies to low-voltage (<1 kV) customer-side AC supply only. Meter electric conditioning, platens, press drive, cooling, trimming, extraction, auxiliaries and attributable idle/reject loads; reconcile transformer losses with supplier boundary. The adopted record specifies CN consumption supply: verify actual site region/year, supplier mix, voltage, user-side delivery/loss boundary and native electrical-energy basis; the identity does not make the Chinese background a global default.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_energy` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Process Water (`conditioning_water`)

Conditional treated make-up water for moisture conditioning or cooling. Record actual water grade and supplier treatment; count net external supply, not recirculated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_water` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Mineral-base hydraulic oil for press (`hydraulic_oil`)

Conditional hydraulic press: use this broad hydraulic-fluid identity only for the actual mineral-base formulation and documented additive grade. Supplier delivery and background composition must match; a generic identity alone is not a formulation-specific dataset. Record native liquid volume at measured temperature; where only mass is recorded, divide by positive finite measured grade-specific density at matching temperature. No generic density is assumed. Count fresh fluid introduced from external supply/unused stock once, never pump throughput or repeated standing charge; drained used oil is a separate output, not a subtraction from virgin input.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collect period fresh-fluid volume V with `cp_hydraulic`; V / D in m3 per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulic`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Polyethylene film (`packing_film`)

Conditional polyethylene dispatch wrapping only; exclude its mass from the net wood denominator. Retain actual polymer grade, film mass and packaging specification; PET is not PE. Require unsupported non-self-adhesive nonlaminated PE film, actual composition and provider compatibility. The source names/CAS/comment identify PE film while CPC29220 incorrectly classifies luggage; retain this source clarification debt, not a claim of repaired classification.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_aux` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aux`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

#### Outputs

##### Product flows

###### Resin-free heat-stabilized densified yellow-birch solid-wood blank (`finished_blank`)

One accepted, conditioned, uncoated solid-wood tool-handle blank at factory gate. Final trimming and wrapping belong to this same unit; no second reference-UUID output is created.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reference`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

##### Waste flows

###### sawdust waste (`captured_sawdust`)

Captured sawing/sanding dust sent to external waste treatment, measured separately from escaped airborne particles. Confirm the actual pre/post-press thermal state, absence of chemical impregnation/glue/resin and the selected untreated-combustion-or-recovery identity against the actual receiver. A different contamination or treatment route requires another identity review. If marketed as a co-product, establish a product-flow identity before using that route.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_residues` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Untreated yellow-birch planing shavings for waste treatment (`planing_shavings`)

Conditional planing; separately weigh actual loose yellow-birch shavings with their pre/post-compression origin, moisture and absence of added glue, resin or coating. They are not automatically sawing dust, engineered board feedstock, wood chips or pellet fuel. The broad Wood waste identity requires actual manufacturing-origin compatibility and receiving treatment. Its primary-production wording and CPC39282 agglomeration classification conflict with this non-agglomerated residue state and remain source clarification debt; the coherent wood-waste names/comment do not establish pelletizing or briquetting.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_residues` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Rejected densified yellow-birch solid blanks for waste treatment (`rejected_solid`)

Weigh unrecoverable rejected blanks and solid trim separately from dust and shavings. Record actual heat-compression history, recovery failure/defect, moisture, no added resin/glue/coating and receiving treatment. Continuous solid-wood compression is not agglomeration of wood particles; the broad Wood waste record's CPC39282 agglomeration field and primary-production wording require clarification against this actual non-agglomerated manufacturing residue, without borrowing a disposal background. Internal rework is retained inside the unit and counted once; it is not simultaneously a waste export.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_residues` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Used lubricating oil (`used_oil`)

Conditional used press lubricating/hydraulic oil exported to licensed treatment. Record its mineral-base identity, contaminants and receiver; no disposal or recycling credit is assigned by the flow UUID.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_aux` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aux`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### Untreated wood-conditioning condensate to external wastewater treatment (`conditioning_effluent`)

Conditional collected condensate or cooling purge leaving for external treatment. Collect volume, composition and receiver; do not replace it with paper-mill wastewater or model it simultaneously as an elementary discharge.

- Selected flow: Untreated wood-conditioning condensate to external wastewater treatment
- Flow property / unit: Volume / m3; supplier unit/property identity unresolved
- Amount rule: Collect with `cp_water` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

##### Elementary flows

###### water vapour (`water_vapour`)

Net water vapour released to outdoor air, unspecified subcompartment. Reconcile wood moisture, make-up water, liquid effluent and retained water; exclude internal vapour condensation/recycle.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### particles (PM2.5) (`pm_fine`)

Only emitted PM2.5 after collection/control, to outdoor air with unspecified subcompartment. Do not report captured dust here.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Only emitted particles >2.5 and <=10 micrometres, outdoor air unspecified. Exclude the lower-stratosphere and long-term flow variants.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### particles (> PM10) (`pm_large`)

Only emitted particles >10 micrometres, outdoor air unspecified. Subtract nested fractions on a common sampling basis before using three disjoint bins.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### methanol (`methanol_air`)

Conditional speciated methanol release confirmed by site exhaust screening. Outdoor air unspecified; no generic VOC quantity or resin-route factor is substituted.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### formaldehyde (`formaldehyde_air`)

Conditional speciated formaldehyde release confirmed by screening; resin-free does not prove zero wood-derived emissions. Outdoor air unspecified.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### acetic acid (`acetic_acid_air`)

Conditional speciated acetic-acid release confirmed by screening, outdoor air unspecified. Keep acid mass distinct from carbon-equivalent VOC measurements.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### carbon dioxide (biogenic) (`biogenic_co2`)

Conditional wood-derived CO2 released during heat treatment, established by measurements and carbon reconciliation; no on-site combustion is assumed. Retain in LCI regardless of climate reporting convention.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect with `cp_air` and normalize per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all inventory rows | Keep the unallocated physical wood/water/carbon balance separate from allocated environmental burdens; internal links have equal quantities, and physical co-product outputs are not multiplied by allocation shares. |  |
| allocation_subdivision | manufacture | Prefer subdivision and direct metering; shared electricity uses measured load/runtime drivers with residual reconciliation, not nameplate-power guesses. |  |
| allocation_residues | manufacture | Waste rows describe waste transfers. Sold sawdust/shavings/trim require verified separate atomic product rows and co-product determination rather than waste UUID reuse. Establish causal allocation before assigning burdens; otherwise disclose economic prices/period/shares and sensitivity. No automatic recycling credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | manufacture | finished_blank | collected_record | accepted batch; net wet mass; oven-dry sample mass; dimensions/volume; moisture; conditioning RH/temperature/time; intended use and rejects | Calibrated scales and dimensional instruments; paired moisture specimens; acceptance against order specification, excluding packaging; Accepted net wood mass supplies period denominator D; all exchanges aggregated per 1 kg reference flow | kg; m3; % | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_wood | manufacture | birch_stock | collected_record | botanical species; origin/drying state; batch; mass/moisture/dimensions; growth-ring orientation; formulation records for no added adhesive/resin/coating/chemical | Receipt weights/invoices and supplier formulation reconciliation; paired oven-dry sampling; trace to finished batch; External stock consumption with inventory change divided by D; per 1 kg reference flow | kg; m3; % | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_press | manufacture | manufacture | collected_record | pressure/force and loaded area; platen/core temperature; holding/cooling time; compression direction; initial t0, loaded tc, released tr, conditioned tf, post-cycle tcycle; failure/cracking | Continuous batch press sensor records; actual humidity cycles and reconditioning states; compare density at matching states; hydraulic-line pressure is not wood pressure; Batch distributions linked to D; inventory consistently per 1 kg reference flow | MPa; degC; s; mm | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_energy | manufacture | electricity | collected_record | stage meter start/end; kWh; voltage; load; idle/rejects; supplier and transformer boundary | Calibrated meters reconciled to purchases/main meter; record drivers and residuals for shared stage meters; Attributable period electricity converted to MJ then divided by D; per 1 kg reference flow | kWh; MJ | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_water | manufacture | conditioning_water; conditioning_effluent | collected_record | water supply/grade; recycle and net make-up; condensate/purge; destination; composition; stock changes | Calibrated meter, tank-level and flow reconciliation; measure liquid density/temperature before mass-volume conversion; Each external water exchange separately divided by D; per 1 kg reference flow | kg; m3 | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_aux | manufacture | used_oil; packing_film | collected_record | individual waste-oil or film grade; mass; receipts/stocks; waste-oil transfer records; contaminants | Weigh each waste-oil transfer and packaging-film consumption separately; do not subtract waste-oil drains from fresh hydraulic-fluid input; each mass divided by D; per 1 kg reference flow | kg | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_hydraulic | manufacture | hydraulic_oil | collected_record | mineral-base grade and additive specification; fresh-fluid deliveries/returns; unused and operating-fluid opening/closing stocks; fill/makeup volume; temperature; mass; measured grade-specific density; drains and losses | Calibrated flow/tank/invoice reconciliation; V = m / rho(T) only with measured positive finite matching density; fresh volume from deliveries plus opening unused stock minus closing unused stock and unused returns; reconcile operating-fluid opening stock plus introduction against closing stock, drains and actual losses. Never count circulation or subtract drained used oil from fresh input. Each fresh period volume divided by D; per 1 kg reference flow | m3; kg; kg/m3; degC | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_residues | manufacture | captured_sawdust; planing_shavings; rejected_solid | collected_record | separate dust/shavings/solid-reject weights; moisture; rework; transfer notes; sale/disposal contracts | Separate containers/weighing; reconcile matching wet/dry batch bases with receivers; avoid captured/escaped double counting; Each external residue exchange divided by D; per 1 kg reference flow | kg | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |
| cp_air | manufacture | water_vapour; pm_fine; pm_coarse; pm_large; methanol_air; formaldehyde_air; acetic_acid_air; biogenic_co2 | collected_record | stack/fugitive sources; controls; gas flow/temperature/pressure/wet-dry basis; species concentration/detection limit; time; nested particle basis; biogenic carbon evidence | Site screening and qualified species/size testing; align gas and concentration state and integrate actual time; distinguish nondetect from unmeasured, without assumed zeros; water/carbon cross-check; Each distinct emission mass divided by D; per 1 kg reference flow; retain biogenic CO2 | kg | each batch/continuous monitoring and period reconciliation | declared representative production period including startup/idle/rejects | same site/route with specified equipment | per 1 kg reference flow | calibration, batch records, test reports and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | D = period accepted net conditioned wood in kg; divide each physical period exchange total by D to obtain its amount per 1 kg reference flow. D must be positive; missing site values are not fabricated. | cp_reference; all collection protocols | exchange per 1 kg reference flow |  |
| hydraulic_conversion | hydraulic_oil | q = V / D; V = m / rho(T) when measured mass is converted using the same grade at measured T. Keep physical oil mass m = rho(T)*V and operating-stock/drain/loss balance separately; never infer a default density or subtract drains from virgin input. | cp_hydraulic; cp_reference | m3 hydraulic fluid per kg reference flow, plus separate physical mass balance |  |
| density_compression | birch_stock, finished_blank | rho = m / V; verify physical density increase using paired initial rho0 and final rhof at matching moisture/temperature, with volume change and dry-wood mass loss. Compression ratio CR = (t0 - tf) / t0; release springback SB = (tr - tc) / tc; this record's cyclic compression-loss ratio R = (tcycle - tf) / (t0 - tf). Ratios are dimensionless; nonpositive denominators are undefined. Measure tcycle after return to the conditioning state of tf. R is this record's explicit measurement convention and must not be compared directly with differently defined literature SR indices. | cp_wood; cp_reference; cp_press | density and separate recovery test indicators | usda-wood-handbook-2021; cabral-densification-2022 |
| physical_balance | manufacture | Maintain separate dry wood, water and carbon ledgers: inputs + opening stocks = product + individual residues + actual releases + closing stocks + unexplained residual. Report residual/uncertainty without invented balancing emissions. Wood carbon uses measured/traceable species data with no default fraction; reconcile CO2 carbon using molecular mass ratio 12/44. | cp_wood; cp_reference; cp_residues; cp_water; cp_air | physical balances and residuals | usda-wood-handbook-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_route | all inventory rows | Verify continuous solid grain, actual compression/fixation and absence of glue/impregnation; UUID identity alone does not establish background compatibility | cp_wood; cp_press; cp_reference |
| coverage | all inventory rows | Declare applicable/not applicable/unmeasured and detection limits per row; unknown is not zero, and additional species/auxiliaries need atomic rows | cp_air; cp_aux; batch records |
| physical_basis | all inventory rows | Both languages use accepted net conditioned wood; retain biogenic CO2 in LCI and never add nested PM totals | cp_reference; cp_air |
| source_scope | manufacture | Historical glued yellow-poplar veneer tests, coniferous surveys and sawmill PTE factors are not defaults for this solid-wood factory; require site full-route records | usda-staypak-1956; site records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_blank | Require verified Wood material identity with all actual resin-free yellow-birch compression/fixation, moisture, geometry, net mass and provider/quantity qualifiers. MDF, lumber-core plywood, ordinary bonded panels and generic man-made board are not substitutes. Exactly one reference-output row is required; physical identity success does not complete measurements or background linkage. | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_fixation | manufacture | Verify physical compression and fixation using paired mass/volume/moisture and pressing, release and conditioning-cycle records; water loss, natural density or untested stability claims are insufficient. | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_quantities | all inventory rows | Use one positive D with actual pressure/temperature/time/moisture and stage measurements; unknown quantities/identities remain unresolved, with no invented enhancement multiplier from historical data. | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_hydraulic | hydraulic_oil | Confirm actual mineral formulation, supplier/background gate, native Volume/m3 basis, matching measured T and positive finite density for conversions. Fresh volume uses the same D; kg-only evidence without matched density is incomplete. Waste oil stays a separate mass output and physical operating stock balance; no repeated circulation or netting of drains. |  |
| validate_air | manufacture | Match outdoor-air compartment; indoor, stratospheric, long-term and biogenic-CO2 uptake/correction flows are not substitutes. Use non-overlapping particulate bins, separate methanol/formaldehyde/acetic acid, and do not hide additional species inside total VOC. | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_balances | manufacture | Check physical wood/water/carbon balances, equal internal handoffs and residuals; allocation shares apply only to the relevant burden ledger. Missing background compatibility or measurement coverage is incomplete. | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Following complete identity/measurement/background verification and independent review, use for the actual tool-handle-blank production route |
| allowed_use | Matching species/route/delivery state and declared application after actual collection and provider qualification; candidate methodology does not itself supply a complete measured dataset |
| excluded_use | Whole-CPC-31520 average; ordinary panels/compreg/MDF; end-use functional equivalence; unverified stability or enhancement multipliers |
| required_metadata | Site/year/species; process and pressure/temperature/recovery records; net-mass moisture basis; identities/backgrounds/waste routes |
| required_quality_disclosure | Row-level measured/unresolved/not-applicable status; uncertainty, balance residuals, allocation drivers and all uncovered scope |
| update_trigger | Change of species, heat supply, pressure/temperature route, adhesive/resin, stability, specification, background or waste destination |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory (2021), Wood handbook—wood as an engineering material, FPL-GTR-282. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; Chapters 4, 13 and 19, especially printed 19-5 and 19-10 | Moisture/density basis; resin-free compressed wood versus compreg and wet-wood recovery; application limits. No process numbers transferred. |
| usda-staypak-1956 | official_guidance | Seborg, Millett and Stamm, Heat-stabilized compressed wood (Staypak), FPL Report No. 1580 (Revised), information reviewed and reaffirmed March 1956. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo43146/pdf/GOVPUB-A13-PURL-gpo43146.pdf; printed pages 1, 7-8 | Historical evidence for solid yellow birch and no-synthetic-resin route. Glued yellow-poplar veneer experiments are not factory parameters for solid wood. |
| cabral-densification-2022 | literature | Cabral et al. (2022), Densification of timber: a review on the process, material properties, and application. Journal of Wood Science 68:20. https://doi.org/10.1186/s10086-022-02028-3; Fundamentals of timber densification, Fig. 4 and Eqs. 1-3 | Compression stages and distinction between release springback and cyclic set recovery. This record explicitly defines dimensional states in its test formulas and adopts no universal enhancement or factory average. |
