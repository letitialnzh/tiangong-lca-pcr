---
status: candidate
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-three-strand-polypropylene-rope
language: en-US
sync_with: pcr.zh-CN.md
---

# Dry three-strand polypropylene rope manufacture

## 1. Scope and Applicability

This method covers purchased, spun and drawn PP filament yarn of declared composition, dry preparation/strand formation and three-strand laying at the rope plant, followed by mechanical cutting, inspection and coil dispatch. The representative product is general-purpose three-strand PP rope without newly applied on-site coating. Actual orders and acceptance records establish dimensions, linear mass, strength and lay length. Supplier-added pigment, stabilizer and spin finish remain part of incoming yarn composition and upstream burdens.

Exclude natural fibres, PET/nylon/high-modulus fibres, PP blends with other polymers, braided ropes, nets, metal cables, electrical cables, sling assemblies and downstream use. Polymerization, fibre extrusion/drawing, melt end-cutting, heat-setting, on-site dyeing, washing and newly applied chemical coating are outside this dry route. Actual additional operations require a documented boundary expansion and individual exchanges. The official CPC document only supplies the broad category title; this method does not cover the whole of 27310. Manufacturer originals support yarn-based three-strand rope and twisting operations; coated dielectric rope supplies counterevidence against treating every PP rope as the same dry route. See deyuan-pp-rope, meera-pp-twisting, samson-coated-counterevidence and unsd-cpc-notes.

Factory yarn preparation and strand formation are distinct from laying three finished strands into a rope. A purchased already-plied qualifying yarn may use the existing man-made cabled-yarn method upstream, with its actual processing state declared; do not count that preparation again. The existing netting method treats rope manufacture as upstream and explicitly excludes unconverted rope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-three-strand-polypropylene-rope |
| classification_refs | CPC 3.0 27310; narrower |
| covered_products | Dry three-strand PP rope made from purchased PP filament yarn without newly applied on-site coating |
| excluded_products | Braided ropes; blended ropes; natural-fibre ropes; integrated extrusion or wet-finishing routes; specially coated ropes; nets; metal and electrical cables |
| representative_product | General-purpose three-strand PP rope coil with declared composition and configuration |
| production_route | Yarn receipt/preparation → strand twisting → three-strand laying/take-up → mechanical cutting/inspection/packing |
| market_state | Accepted rope coil at factory gate; packaging mass separate; no use-service claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture accepted PP rope of declared composition and three-strand construction |
| How much | 1 kg accepted net rope |
| How well | Declare diameter, lay length/direction, measured linear mass, break-test method/results, colour/additives and incoming state; no automatic safety-use qualification |
| How long or cycle | One manufacturing batch; no assumed service life or reuse cycles |
| reference_flow_link | `finished_rope_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dry three-strand polypropylene rope, accepted net product |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PP/additive mass composition; filament form and incoming processing state; virgin/recycled share; three-strand construction; lay direction/length; diameter; measured linear mass; test method/acceptance status; net mass excluding packaging; site/period; wet-finishing/coating exclusions |

Mass is a manufacturing normalization basis, not equal length, equal breaking force or equal lifetime service. Keep the unverified reference-product UUID blank and register the exact finished output row in manifest; generic plastic rope and farm baling twine are not substitutes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted rope net mass with a calibrated scale for the same released lot; exclude detachable spool, ties and packaging; normalize all inventory rows per 1 kg reference flow. |
| linear_mass | length records | Mass and length separately | kg; m | Measure net mass and length of the same rope configuration to obtain kg/m; do not infer rope mass from diameter or polymer density. |
| electricity_unit | strand_electricity; laying_electricity; packing_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public identity actual Net calorific value reference and energy unit group; multiply metered kWh by 3.6 to obtain MJ, never relabel as Mass. |

Net calorific value retains Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` with MJ as the reference unit.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased processed PP filament yarn at plant receipt, with declared colour and finish state |
| starting_condition_role | Upstream-prepared technosphere material input |
| product_classification_scope | One narrow manufacturing route within CPC 27310 |
| recursive_input_rule | Purchased strands or semi-finished rope require disclosure of omitted stages and upstream links; they cannot masquerade as raw yarn while claiming preparation/strand manufacture. Link internal transfers once. |
| upstream_dataset_requirement | Match actual PP route, yarn processing state, additives, recycled share, regional electricity and packaging upstream datasets; disclose gaps |
| disclosure | Manufacturing foreground only; polymer/fibre manufacture, inbound external transport, use and end-of-life are separately modelled; no complete cradle-to-gate claim |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | manufacturing stages | Include direct exchanges of yarn preparation, strand twisting, three-strand laying/take-up, mechanical cutting/inspection and actual packing. Machine purchasing energy does not replace operating meters; integrated machines may share measurement only with stage responsibility and no double counting documented. | meera-pp-twisting; deyuan-pp-rope |
| boundary_extensions | optional and excluded operations | Dyeing, coating, heat-setting, melt cutting and washing are not mandatory for this dry route. Actual additional operations require expansion with each chemical, water, fuel, wastewater and measured emission separately. Coated dielectric rope cannot directly use this profile. | samson-coated-counterevidence |
| boundary_direct_emissions | elementary and technosphere exchanges | This baseline does not assume direct combustion, resource-water withdrawal, effluent or dust emission; zero elementary rows require site completeness checking. Electricity-supply emissions remain upstream. Add actual releases individually by measured substance, origin, compartment and subcompartment. Collected offcuts are not airborne particulates. Actual compressed air, cleaning agent, lubricating oil and other auxiliaries require specific additions or a documented omission scope. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| strand_preparation | Yarn receiving, preparation and strand twisting | required | Actual stage for this declared route; conditional cards only when present | foreground manufacturing | per 1 kg reference flow |
| rope_laying | Three-strand laying and take-up | required | Actual stage for this declared route; conditional cards only when present | foreground manufacturing | per 1 kg reference flow |
| inspection_packing | Cutting, inspection, release and coil packing | required | Actual stage for this declared route; conditional cards only when present | foreground manufacturing | per 1 kg reference flow |

### Process: Yarn receiving, preparation and strand twisting (`strand_preparation`)

#### Inputs

##### Product flows

###### Polypropylene filament yarn (`filament_yarn_input`)

Receive fully spun and drawn PP filament yarn, with supplier-declared colour, additives, twist and recycled status. This is not PP resin or loose staple fibre. Record net consumed yarn after returns and stock reconciliation.

- Selected flow: Polypropylene filament yarn `26f0ce1c-fd85-402c-8993-4e843df4f762`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `meera-pp-twisting`

###### Alternating current (`strand_electricity`)

Adopt this public electricity identity only for a Chinese site supplied with grid-average alternating current below 1 kV at the user boundary. Meter this stage including attributable idle/changeover and auxiliary drive use; for another region, voltage or supply mix retain a specific electricity row with a separately verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `meera-pp-twisting`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dry twisted polypropylene rope strand (`strand_output`)

Weigh the actual strand transferred to laying; record strand yarn count, twist direction and twist level. This intermediate is linked once to strand_input; it is not sold reference rope.

- Selected flow: Dry twisted polypropylene rope strand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `meera-pp-twisting`

##### Waste flows

###### Polypropylene filament yarn offcuts (`strand_pp_waste`)

Record only segregated PP filament yarn removed during preparation; weigh actual removed offcuts, including setup rejects. Internal returns are not waste exports.

- Selected flow: Polypropylene filament yarn offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `meera-pp-twisting`

##### Elementary flows

### Process: Three-strand laying and take-up (`rope_laying`)

#### Inputs

##### Product flows

###### Dry twisted polypropylene rope strand (`strand_input`)

Receive three strands of the same declared PP construction. Reconcile mass and lot with strand_output; do not attach an additional yarn-production dataset to this internal link.

- Selected flow: Dry twisted polypropylene rope strand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `meera-pp-twisting`

###### Alternating current (`laying_electricity`)

Adopt this public electricity identity only for a Chinese site supplied with grid-average alternating current below 1 kV at the user boundary. Meter this stage including attributable idle/changeover and auxiliary drive use; for another region, voltage or supply mix retain a specific electricity row with a separately verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `meera-pp-twisting`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unreleased dry three-strand polypropylene rope (`laid_rope_output`)

Record net rope leaving three-strand laying and take-up before final inspection. Measure actual lay, diameter and linear mass; no twist contraction factor is assumed.

- Selected flow: Unreleased dry three-strand polypropylene rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `meera-pp-twisting`

##### Waste flows

###### Polypropylene rope laying offcuts (`laying_pp_waste`)

Weigh segregated PP rope rejected at laying; keep contamination and external destination explicit. Do not assume it has undergone mechanical recycling.

- Selected flow: Polypropylene rope laying offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `meera-pp-twisting`

##### Elementary flows

### Process: Cutting, inspection, release and coil packing (`inspection_packing`)

#### Inputs

##### Product flows

###### Unreleased dry three-strand polypropylene rope (`laid_rope_input`)

Link to laid_rope_output, accounting for intermediate stock and rework. Record the mass actually inspected and cut to sale length.

- Selected flow: Unreleased dry three-strand polypropylene rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `deyuan-pp-rope`

###### Alternating current (`packing_electricity`)

Adopt this public electricity identity only for a Chinese site supplied with grid-average alternating current below 1 kV at the user boundary. Meter this stage including attributable idle/changeover and auxiliary drive use; for another region, voltage or supply mix retain a specific electricity row with a separately verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `deyuan-pp-rope`

###### Corrugated cardboard (`corrugated_board_input`)

Conditional: record this individual packing component only if corrugated board is used for the rope coil. This UUID is applicable only to type C, E or F corrugated board with at least 80% fibre and recycled material content, matching the public original. Otherwise retain this atomic row with a separately verified identity or blank UUID. Collect actual grade, recycled content, converted state and consumed mass; the input is not a composite packaging selector.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `deyuan-pp-rope`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dry three-strand polypropylene rope, accepted net product (`finished_rope_output`)

Accepted complete rope in coils, without detachable spool or transport packaging. Declare the measured composition and configuration of the same sale lot; defective rope and test specimens are excluded from accepted output.

- Selected flow: Dry three-strand polypropylene rope, accepted net product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `deyuan-pp-rope`

##### Waste flows

###### Polypropylene rope inspection and cutting rejects (`inspection_pp_waste`)

Weigh discarded PP rope, including destructive test pieces, cut ends and rejected coils that are not reworked internally. Destination and contamination are mandatory collection fields.

- Selected flow: Polypropylene rope inspection and cutting rejects
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `deyuan-pp-rope`

###### Packaging waste, cardboard (`cardboard_waste`)

Conditional: weigh cardboard packing trim/rejects generated on site; collect disposal or recovery destination without imposing a loss fraction or treatment process.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch exchange amount divided by accepted net rope mass of the same batch; preserve the actual numerator unit and raw batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `deyuan-pp-rope`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | different rope products and shared machinery | Use cp_energy stage meters and orders for direct attribution, avoiding allocation first. Do not allocate by length unconditionally across different linear mass, twist and machine settings. Remaining shared use requires contemporaneously measured running time/load relationship. Mass allocation needs evidence of equivalent process settings and consumption relationship, with sensitivity disclosed. |  |
| allocation_rework | rework and offcuts | Keep actual extra electricity for internal rework/strand transfers; cancel internal material loops in the combined system and avoid duplicate upstream burdens. Weigh exported waste separately from accepted rope; intended recycling gives no automatic substitution credit. Saleable co-products require boundary, allocation basis and reproducible quantities. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | inspection_packing | reference output | weighing | lot; net mass; packaging tare; length; diameter; lay length; acceptance result | Calibrated-scale weighing of the same accepted lot, subtract packaging/spool tare; calibrate length counter and sample same-configuration linear mass, retain weighing and release originals | kg; m | each batch | complete representative consecutive period, actual dates and exceptional batches | selected site and same rope configuration | per 1 kg reference flow | scale/length calibration; batch release and sampling records |
| cp_material | strand_preparation | incoming yarn | mass balance | receipts; returns; opening/closing stock; net consumption; yarn composition/state | Calibrated weighing plus lot issue/return ledger, verify supplier processing state and composition | kg | each batch and period reconciliation | same period as cp_output | yarn preparation | per 1 kg reference flow | supplier lots; weights; stock ledger |
| cp_transfer | all | internal intermediate | weighing | transfer lot; strand/rope net mass; opening/closing stock; rework amount | Match calibrated weights at stage exit/entry for the same lot; rope length cannot substitute strand mass | kg | each transfer | same period as cp_output | strand to laying to inspection | per 1 kg reference flow | paired lot IDs, stock and rework records |
| cp_energy | all | electricity | meter reading | stage meter readings; voltage; region; running/idle time; order; shared-use basis | Submeter or measured power and run time including attributable idle/auxiliary load; reconcile main meter, never use nameplate rated power as actual power | kWh; MJ | each shift/batch | same period as cp_output | three manufacturing stages | per 1 kg reference flow | meter calibration; voltage/order; allocation record |
| cp_waste | all | PP offcut waste | weighing | stage; material; contamination; net waste mass; destination; internal rework | Weigh segregated PP waste separately by stage, excluding packaging and unidentified waste mixtures | kg | each batch | same period as cp_output | each generating stage | per 1 kg reference flow | scale calibration; segregation/handover records |
| cp_pack | inspection_packing | cardboard input and cardboard waste | weighing | cardboard grade; recycled share; consumption; waste; dispatched packaging mass | Separately weigh actual cardboard input, cut waste and delivered packaging; do not substitute purchase-lot mass for consumption | kg | each batch | same period as cp_output | rope coil packing | per 1 kg reference flow | packing weights; purchase specifications; dispatch reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | Divide each actual exchange amount by accepted net rope mass of the same batch, per 1 kg reference flow; finished output is 1 kg. Incoming yarn mass is not the accepted-output denominator. | cp_output; cp_material; cp_transfer; cp_energy; cp_waste; cp_pack | exchange quantity per 1 kg reference flow |  |
| convert_electricity | strand_electricity; laying_electricity; packing_electricity | Multiply metered kWh by 3.6 for MJ, then normalize by the same accepted batch net rope mass. | cp_energy; cp_output | MJ/kg | si-units |
| reconcile_mass | yarn, intermediates and wastes | Within the same period, inputs plus opening stocks equal accepted output plus exported waste plus closing stocks and explained measurement residual; cancel internal transfers, balance packaging separately. Unbalanced mass is not automatically dust or gaseous emission. | cp_material; cp_transfer; cp_output; cp_waste; cp_pack | batch mass balance and residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | rope and yarn | Verify actual composition/state, filament form, colour/finish, lay length, diameter, linear mass and test method; different configurations are not service-equivalent. | cp_material; cp_output; deyuan-pp-rope |
| quality_coverage | all stages | Cover changeover, setup, rework and rejects; disclose dates, production, measurement coverage, gaps, exclusions, allocation and uncertainty. Never invent energy, losses or recipes. | cp_output; cp_energy; cp_waste |
| quality_identity | public identities | Verify UUID type, actual reference property/unit group, processing and supply qualifiers; unconfirmed identities remain concrete atomic rows with blank UUID. Supplier datasets must not duplicate foreground strand formation/laying. | cp_material; cp_energy |
| quality_releases | site environmental completeness | Check actual combustion, resource withdrawal, washing, leakage, airborne fibre particulates or effluent. Zero elementary rows describe this boundary, not an emission-free plant claim; unverified conditions mean incomplete coverage. | cp_energy; cp_waste |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_rope_output | Check 1 kg accepted net rope output, all required qualifiers, same-lot weighing and packaging tare; align bilingual names and row_id. Blank reference UUID is a declared candidate identity gap, not full identity resolution. |  |
| validation_stage_links | strand_output; strand_input; laid_rope_output; laid_rope_input | Check sequence, lots and quantities, explain stock/rework differences and avoid duplicate upstream burdens on internal links. Purchased strand/rope requires disclosure of omitted stages. | meera-pp-twisting |
| validation_quantities | all inventory rows | Normalize each row by same-batch accepted net mass; preserve electricity Net calorific value, MJ and kWh conversion. Verify actual occurrence and collection evidence row by row. Quantities must be finite/nonnegative and accepted output positive; explain residual against measured uncertainty, with no universal loss threshold. | si-units |
| validation_boundary | site and data package | Actual coating, wet treatment, extrusion, heat-setting or melt cutting requires boundary expansion and added flows. Verify elementary, water, waste and auxiliary coverage. Unverified scope is inconclusive, never zero by omission; this manufacturing profile does not approve dielectric or lifting safety. | samson-coated-counterevidence |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | manufacturing_foreground |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Three-strand PP rope manufacturing module under declared composition/construction/site/period/boundary, with explicit upstream links |
| excluded_use | Complete cradle-to-gate or lifetime comparison; whole-CPC coverage; unspecified rope substitution; dielectric, food-contact, lifting or health/compliance approval |
| required_metadata | composition/additives; incoming state; virgin/recycled share; three-strand construction/lay; diameter/measured linear mass; net mass/packing; test method; site/period; supply voltage; upstream links; allocation |
| required_quality_disclosure | identity gaps; scientific review state; measurement/period coverage; uncertainty; uncovered processes; site verification of zero elementary rows; absence of default consumption/loss ranges |
| update_trigger | changes in composition, incoming state, process, finishing, electricity or configuration; resolved identities or new scientific-review evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-notes | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 128. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 27310 category and adjacent netting; no specific process explanation |
| deyuan-pp-rope | literature | Deyuan Marine, 3-Strand PP Rope, Product Introduction. https://www.deyuanmarine.com/3-Strand-PP-Rope-pd129282238.html | Existence/construction of three-strand PP multifilament rope; no adoption of promotional certification/performance/tolerance values |
| meera-pp-twisting | literature | Meera Industries, Twisted PP Yarn, Webbing & Rope Manufacturing, 4 December 2025, opening ecosystem and sections 2, 6. https://meeraind.com/resources/pp-yarn-webbing-rope-manufacturing-meera-twisting-solutions | Qualitative preparation/twisting/winding decomposition; machine-supplier account establishes no universal process necessity or consumption |
| samson-coated-counterevidence | literature | Samson, LightSpeed-3, product description and dielectric selection instructions. https://www.samsonrope.com/utility/lightspeed-3 | Coated dielectric PP rope as excluded-route counterevidence; no generalization of its lifetime, density or strength |
| si-units | official_guidance | BIPM, SI Brochure, 9th edition V4.01 (June 2026), section 2.3.4/Table 4 (p. 133, PDF p. 23), section 4/Table 8 (p. 140, PDF p. 30), W = J/s and h = 3600 s. https://www.bipm.org/en/publications/si-brochure | Exact kWh-to-MJ unit conversion, not energy-consumption factor |

Web originals consulted 2026-10-06. Manufacturer originals support qualitative routes and product qualifiers only. Foreground protocols implement measurement, normalization and allocation; no default material recipe, temperature, energy, net yield or lifetime is prescribed.
