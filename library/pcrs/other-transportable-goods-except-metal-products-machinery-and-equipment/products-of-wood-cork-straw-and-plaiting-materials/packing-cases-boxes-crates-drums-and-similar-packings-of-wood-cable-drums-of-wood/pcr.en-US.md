---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.packing-cases-boxes-crates-drums-and-similar-packings-of-wood-cable-drums-of-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated nailed coniferous sawn-timber shipping boxes

## 1. Scope and Applicability

This PCR covers new uncoated empty shipping boxes assembled by nailing purchased kiln-dried, unimpregnated coniferous solid-sawn boards. Board sides, ends, bottom and matched lid supply the enclosure strength; integral reinforcing cleats are permitted. The foreground uses electric cutting, electrically generated compressed air for nail tools, dust collection and electric handling. The unit ends at acceptance and factory-gate delivery of the empty box and its matched lid. Actual species, board grade and thickness, box drawing and fastening schedule are mandatory descriptors, not a selector between incompatible products. [usda-nailing-1959; usda-crate-1964]

Exclude cable drums, stave barrels/casks, pallets and pallet collars, open slatted crates, structural framed crates, plywood/OSB/particleboard boxes, glued or coated boxes, knocked-down shook alone, repaired/reused boxes, cargo and internal cargo cushioning. On-site drying, heat treatment, fumigation, combustion and fuel-powered handling are outside this narrowly declared route; where they actually occur, this inventory is incomplete and cannot be advertised as the complete product dataset. Upstream supplier drying or treatment must be declared and covered by the actual purchased-board dataset. No IPPC mark, universal treatment or export suitability is presumed. [ippc-ispm15-2018]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.packing-cases-boxes-crates-drums-and-similar-packings-of-wood-cable-drums-of-wood |
| classification_refs | CPC 3.0 31701; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Uncoated nailed coniferous solid-sawn empty shipping box with matched lid and integral cleats |
| excluded_products | Cable drums, stave barrels, pallets, open crates, structural framed crates, panel-board boxes, glued boxes, shook, reused boxes |
| representative_product | New shipping box cut and nailed from purchased kiln-dried coniferous boards; no default dimensions, payload or mass |
| production_route | Board receipt → cutting → nailing box and matched lid → rework/acceptance → empty-box delivery |
| market_state | New finished empty box at factory gate; lid may be supplied matched and loose |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Contain and support the declared cargo during transport |
| How much | 1 kg accepted finished empty box; physical count and measured net mass are reported separately |
| How well | Declare internal/external dimensions, designed payload and distribution, handling/stacking conditions and actual acceptance tests; volume/payload do not substitute for box mass |
| How long or cycle | One declared shipment use; no presumed reuse lifetime or cycle count |
| reference_flow_link | `finished_box` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Box style/drawing and BOM; species and board grade/dimensions; moisture and dry/wet basis; nail material, finish, size and count; lid delivery state; accepted net mass kg/box; dimensions and useful volume; payload distribution/handling/stacking and acceptance evidence; production region and period; supplier drying/treatment evidence; foreground no-treatment declaration; waste recipient route |

The flow identity includes this solid-board manufactured box without fixing a particular design. Its broad database name does not extend this PCR to other containers. A kg result alone is not a functional comparison between differently sized or rated boxes. Required qualifiers must be declared in the concrete data package; no value in this PCR is a factory observation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference amount is 1 kg accepted finished empty box at factory gate; use cp_output. Weigh the complete box, matched lid, integral cleats and installed nails for the same configuration, excluding cargo, cushioning and separate transport packaging. |
| campaign_basis | reference-product mass denominator shared by all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Every row is reported per 1 kg reference flow; accepted net mass total Q from the same campaign is the shared denominator. Count records require measured kg/box and actual count for the same configuration to obtain Q; capacity or payload cannot substitute. The required Mass/kg property describes accepted product Q only; each numerator keeps its own native row reference property/unit. |
| wood_mass | sawn_timber, wood_offcut, sawdust_waste | Mass | kg | Record delivery/transfer wet mass separately from oven-dry wood mass; dry-basis moisture fraction u=(wet mass-dry mass)/dry mass, and dry wood mass=wet mass/(1+u). Purchased-background kg basis must match that moisture state. |
| electric_units | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Electricity uses the record energy reference property; 1 kWh=3.6 MJ. This is not multiplication by fuel calorific value; sum actual user-side electricity and verify the low-voltage interface. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-delivered kiln-dried unimpregnated coniferous sawn timber and purchased nails received at plant; moisture and upstream drying/treatment declared |
| starting_condition_role | Foreground receipt boundary; upstream material and transport burdens remain required |
| product_classification_scope | Nailed solid-board box subset of CPC 31701, narrower |
| recursive_input_rule | New manufacture does not take an existing finished box as same-category input; actual reuse/repair is out of scope, and upstream purchased-board burdens are not recursively truncated |
| upstream_dataset_requirement | Boards require forestry/sawmilling and actual kiln drying; nail production, electricity supply, actual oil and inbound transport require compatible upstream datasets; waste receipt/treatment is documented. Identity UUIDs are not complete background datasets |
| disclosure | One aggregated foreground unit with separate stage ledgers; purchasing state, region/period, transport distances, waste routes, actual/missing treatment evidence and all exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | all inputs | Link upstream data compatible with delivered state, species, moisture, route, property and unit; another PCR or a regional CORRIM lumber survey is not a box-factory coefficient. | usda-wood-handbook-2021 |
| boundary_aggregation | box_manufacture | Cutting, part nailing, assembly, rework, extraction, acceptance and handling before delivery form one aggregated foreground unit with separately measured stages. Internal box-part handovers stay in the physical ledger, not a second finished output with the reference UUID. Both ends of an internal transfer record the same quantity, without duplicate external exchanges. | usda-nailing-1959 |
| boundary_treatment | box_manufacture | A wooden-box, kiln-dried or classification name cannot establish heat treatment/fumigation or an IPPC mark. Actual supplier treatment is covered by sourced upstream data. Actual foreground treatment requires a separate treatment stage, individual atomic inputs/emissions and energy bases followed by review; the present route inventory is incomplete. | ippc-ispm15-2018 |
| boundary_emissions | pm_fine, pm_coarse, pm_large | Record only particles released to the outdoor environment; captured quantities are technosphere waste. EPA sawmill PTE does not cover boilers, condensable particles or measured box-factory coefficients; do not copy its indoor-activity zero assumption. | epa-sawmill-dust-2014 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| box_manufacture | Cutting, nailing, extraction and acceptance | required | Declared route | foreground | 1 kg accepted finished empty box |

Physical stages: purchased boards and nails → cutting/part preparation → box/lid nailing → acceptance → finished_box. Cutting and rework → clean offcuts and captured sawdust; nail failures → separate steel nail scrap. Meter compressor, extraction and handling energy at their actual stages. Dust leaving control equipment → three disjoint PM rows. Retain physical mass/water/carbon ledgers before the separate environmental-burden account. Conditional rows are measured when present; absence needs a documented assessment, not an automatic zero.

### Process: Cutting, nailing and acceptance (`box_manufacture`)

#### Inputs

##### Product flows

###### Kiln-dried coniferous boards (`sawn_timber`)

One homogeneous untreated coniferous sawn-timber grade for side, end, lid and bottom boards, and any integral cleats. The selected UUID applies only to actual incoming solid-sawn boards with thickness exceeding 6 mm; measure and record each component thickness. Inputs at or below 6 mm require a separately verified identity and applicability review before dataset completion; do not infer a plant thickness or substitute this locator. Record each BOM component separately in the raw ledger; different timber grades require separate atomic rows. Supplier kiln drying is upstream, not a box-factory heat-treatment assumption.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `usda-nailing-1959`; `usda-wood-handbook-2021`

###### Uncoated wire box nails (`steel_nails`)

Only the specified uncoated carbon-steel wire box nail crosses this row. Record nail dimensions, shank form, batch and weighed issued/returned mass; count-based records require weighing that exact nail SKU. The broad steel-fastener identity is restricted to that single actual nail SKU; its fabrication/assembly route has no contrary material or coating restriction. No screw, bolt, coating or generic fastener amount estimate substitutes for this row; the matching supplier nail-production background must be verified.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `usda-nailing-1959`

###### User-side electricity (`electricity`)

Meter electricity for cutting, compressor operation, dust extraction, rework, inspection and attributable handling separately by stage, then sum once within this aggregated foreground unit. The selected record is grid-average AC below 1 kV at the user and has source supply geography CN. Verify actual supplier, supply region, reference year, native quantity/unit basis, user-side delivery boundary and included supply losses against the linked background. Physical AC identification alone does not establish a global or site-matched background. Actual supplier/geography/year/quantity compatibility remains pending; nonmatching supply requires a separately reviewed identity/background before dataset completion.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `usda-nailing-1959`

###### Petroleum lubricating oil (`mineral_oil`)

Conditional on actual oil-lubricated tools or compressor maintenance attributable to this route. Record the purchased petroleum oil grade, makeup and inventory change. The selected record is petroleum-fraction oil, not PAO, grease or wax/solvent lubricant. Its calorific-value metadata is not a default amount or a combustion exchange.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `usda-nailing-1959`

#### Outputs

##### Product flows

###### Accepted finished empty box (`finished_box`)

One fully fabricated empty box with its fitted/removable matched lid and integral wood members and installed nails included in delivered net mass. The lid may be supplied loose for later cargo loading but must be weighed with its matched box. The broad selected flow is physically restricted to this box; other subtypes in its definition are outside applicability.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: `usda-nailing-1959`; `usda-crate-1964`

##### Waste flows

###### Clean sawn-timber offcut waste (`wood_offcut`)

Weigh externally transferred unagglomerated clean untreated coniferous solid-board offcuts free of adhesive/coating contamination, including rejected wood parts routed to the same documented waste stream. Keep in-process returns and opening/closing stocks separate; a returned offcut is not also an external output. Declare actual wood condition and recipient. The selected record has a classification-field conflict; its broad woodworking-offcut physical identity is adopted conditionally, and source/supplier clarification remains required.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_residue.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-nailing-1959`; `usda-wood-handbook-2021`

###### Collected clean sawdust waste (`sawdust_waste`)

Weigh captured sawdust crossing the technosphere boundary, including wood dust captured by extraction. Selected untreated combustion/recovery identity requires documented transfer to that route; it is not an on-site boiler or an air emission. Exclude the same captured particles from emitted PM.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_residue.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `epa-sawmill-dust-2014`

###### Rejected steel box-nail waste (`steel_nail_scrap`)

Conditional on actual separately collected bent, misdriven or removed uncoated carbon-steel nails from box assembly or reject rework. This broad final-assembly steel-reject identity has at-plant CN context and no specified recycling/disposal route; it does not represent machine-shop swarf. Record actual nail SKU, steel grade/dimensions, absence of coating, reject source, wood attachment/contamination, receiving contractor and actual fate. Contrary coating or inseparable material states require applicability review. Weigh steel waste separately from attached wood and distinguish unused nails returned to stock; never treat mixed wood/steel gross mass as steel or infer waste equals input. Verify actual plant/receiver, year, composition and native mass/transport/treatment reference compatibility with the CN source context before dataset completion. No recycling quantity or credit is inferred.

- Selected flow: Scrap steel `0e66603a-40d3-4c52-9223-4c18d32c11fd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_residue.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `usda-nailing-1959`

###### Used lubricating oil (`used_oil`)

Conditional on actual oil removal from the in-scope equipment. Weigh contaminated oil separately, record waste receipts and stocks, and link the documented downstream treatment without imposing equality with new-oil input.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `usda-nailing-1959`

##### Elementary flows

###### Outdoor emitted fine wood particles (`pm_fine`)

Record PM2.5 released beyond the factory building and control equipment, from stack exhaust and actual fugitives. Medium is outdoor air unspecified; workplace exposure and captured dust are not elementary outputs. No fossil/biogenic CO2 identity or correction flow substitutes for particles.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_air.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-dust-2014`

###### Outdoor emitted intermediate-size wood particles (`pm_coarse`)

Record only particles between PM2.5 and PM10 on the same sampling, time and control basis as the other PM rows. This is the non-overlapping size interval, not an additional full PM10 total.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_air.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-dust-2014`

###### Outdoor emitted wood particles above PM10 (`pm_large`)

Record only emitted particles above PM10; the identity is outdoor air unspecified, not high-altitude or indoor air. Total PM, PM10 and PM2.5 totals may be retained as monitoring fields but never summed as three additional exchanges.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_air.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-dust-2014`

###### Water lost from wood during manufacture/storage (`water_vapour`)

Conditional on measured non-negative moisture loss to outdoor air during the bounded campaign. Determine retained wood water and residue water separately using measured moisture; do not assume that dry wood contains no water. Net atmospheric uptake requires its own verified atomic input before dataset completion and must not be forced into a negative emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable campaign exchange total divided by accepted net mass Q; cp_moisture.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moisture`
- Sources: `usda-wood-handbook-2021`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | box_manufacture | Prefer actual batch measurement/submeter attribution for the same box design. Attribute shared compressed air, extraction and handling using measured electricity and verifiable runtime or service quantities with disclosed causality; payload rating is not an energy driver. | usda-nailing-1959 |
| allocation_waste | wood_offcut, sawdust_waste, steel_nail_scrap, used_oil | This route has finished_box as its sole accepted product output; documented waste transfer creates no default co-product share or substitution credit. If a residue is sold as a distinct useful co-product, revise the inventory with its correct product identity, collection and an independent allocation decision first; a waste row cannot be retained while claiming completeness. | usda-wood-handbook-2021 |
| allocation_physical | all inventory rows | Keep complete physical outputs and mass/water/carbon ledgers after environmental burdens are attributed. Never multiply physical waste/co-product outputs by burden-allocation shares or close mass gaps using waste credits. Internal loops have equal quantities at both ends and only external net flows are exchanged. | usda-wood-handbook-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | box_manufacture | finished_box | weighing/acceptance | box design; configuration; lot; count; individual net mass including lid; installed nail mass and exact-SKU fastening ledger; acceptance record; moisture | Weigh accepted complete empty boxes and matched lids on a calibrated scale; tare scale pallet/separate transport wrapping, exclude cargo; sum accepted net mass Q by configuration without mixing dimensions/payloads. | kg | each box acceptance; batch reconciliation | same complete representative campaign; stock and maintenance events covered | same site, route and box configuration | per 1 kg reference flow | calibration; original weigh records; acceptance and matched-lid records |
| cp_material | box_manufacture | sawn_timber; steel_nails | issue/return/stock | material SKU; species; grade; component thickness and >6 mm selected-UUID applicability; board dimensions/solid volume; moisture; purchased net mass; opening/closing stock; issue/return; nail specification/weighing | Weigh boards and nails separately for issue, return and stocks; match BOM and campaign. Solid material volume can convert only with measured same-batch/same-moisture density, never cavity volume. Nail counts require measured unit nail mass for that SKU. | kg | each lot; purchasing/stock handover | same complete representative campaign; stock and maintenance events covered | same site, route and box configuration | per 1 kg reference flow | invoices; issue/return ledger; BOM; batch weights/moisture |
| cp_energy | box_manufacture | electricity | meter/service attribution | cutting; nailing compressed-air; extraction; rework; inspection; handling meter readings; voltage; supplier; supply geography; year; provider reference quantity/unit and delivery/loss boundary; shared runtime/service quantities | Read calibrated user-side meters/submeters; retain stage consumption and shared attribution evidence without counting compressor and nail-tool energy twice. Without submeters record measured attributable energy and uncertainty; unproven attribution prevents dataset completion. | kWh | each campaign; billing reconciliation | same complete representative campaign; stock and maintenance events covered | same site, route and box configuration | per 1 kg reference flow | calibration; bills; submeter/attribution logs |
| cp_residue | box_manufacture | wood_offcut; sawdust_waste; steel_nail_scrap | weighing/waste transfer | net mass by atomic waste; moisture; container tare; opening/closing stock; internal reuse; nail SKU/grade/coating and assembly reject source; wood attachment and separate steel mass; recipient/use; actual receiver and CN reference compatibility | Weigh clean offcuts, captured sawdust and rejected nails individually; verify destination, exclude captured mass from emissions and internal reuse from external transfer; distinguish waste from actual co-products. | kg | each transfer; campaign/stock reconciliation | same complete representative campaign; stock and maintenance events covered | same site, route and box configuration | per 1 kg reference flow | original weigh records; waste receipts; reuse ledger |
| cp_maintenance | box_manufacture | mineral_oil; used_oil | maintenance/oil weighing | oil grade/SDS; issue/return; makeup; reservoir stocks; removed waste oil; equipment/service attribution | Weigh actual petroleum new oil and removed waste oil separately, attribute by in-scope equipment service; reconcile stocks/consumption/destinations, do not infer unmeasured oil mist or leaks as zero; actual leaks require separate medium/species rows. | kg | each makeup/oil change; full maintenance cycle | same complete representative campaign; stock and maintenance events covered | same site, route and box configuration | per 1 kg reference flow | oil documentation; maintenance/waste-oil originals |
| cp_air | box_manufacture | pm_fine; pm_coarse; pm_large | exhaust/fugitive monitoring | total filterable PM; PM10; PM2.5; medium; dry/wet/T/P basis; exhaust volume; operating time; control conditions; fugitive sources | Determine emissions using applicable actual outlet/fugitive monitoring or a verified site model; retain methods, detection limits and uncertainty; concentration and exhaust volume share dry/wet/T/P basis. Incompatible size data remain pending, without EPA sawmill factor substitution. | kg | representative operating/control states; campaign durations | same complete representative campaign; stock and maintenance events covered | same site, route and box configuration | per 1 kg reference flow | monitoring originals; outlet/fugitive inventory; control logs |
| cp_moisture | box_manufacture | water_vapour; all wood rows | moisture/material balance | wood input/output/stock wet mass and dry-basis moisture; oven-dry samples; species; sampling position; retained and released wood water | Use representative oven-drying to stable mass per Wood Handbook chapter 13, with matching initial wet mass for dry-basis moisture; electrical readings require species/temperature correction and oven-dry comparison. Balance wood, nails, oil and water separately; do not call every unexplained mass gap evaporation. | kg; dry-basis fraction | each material/product/residue lot and stock point | same complete representative campaign; stock and maintenance events covered | same site, route and box configuration | per 1 kg reference flow | sampling; weighing; oven-drying; uncertainty records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | Q=sum of accepted empty-box net masses including matched lids in the campaign; each atomic exchange=attributable campaign external exchange total/Q; finished_box=Q/Q=1 kg. Reconcile issues, returns and movements within the same stock boundary first. | campaign totals; Q; cp_output | per 1 kg reference flow | usda-nailing-1959 |
| count_disclosure | finished_box; steel_nails | Report measured kg/box by configuration=accepted net mass total/accepted box count; nail count mass=exact-SKU count × measured mean mass per nail of that SKU, with sampling and uncertainty; no default item mass. | cp_output; cp_material | measured kg/box and kg nail | usda-nailing-1959 |
| wood_water_balance | all wood rows; water_vapour | For each wood-only flow: dry wood mass=wet wood mass/(1+u), wood water=wet wood mass-dry wood mass. Finished-box wet wood mass=accepted empty-box net mass minus installed steel nail mass from the exact-SKU fastening ledger; never divide whole box mass (including nails) by 1+u. Dry wood inputs+opening stocks=finished dry wood+waste dry wood+dry wood in emitted particles+closing stocks+verified other losses; reconcile nails and oil separately. Water input+opening water stocks=water retained in finished wood and residues+water in emitted particles+closing water stocks+verified water vapour loss; there is no process-water addition in this route. Released water comes only from this same-campaign ledger; particle wood/water/carbon fractions need characterization, not an assumption that all PM is oven-dry wood. | cp_material; cp_output; cp_residue; cp_air; cp_moisture | unallocated dry wood and water balance | usda-wood-handbook-2021 |
| electric_conversion | electricity | Actual campaign kWh × 3.6 yields MJ, then divide by Q; retain stage records without adding compressed-air energy a second time. | cp_energy; Q | MJ per 1 kg reference flow | usda-nailing-1959 |
| particle_intervals | pm_fine; pm_coarse; pm_large | Only for the same sampling/time/medium/control basis: fine=PM2.5; intermediate=PM10-PM2.5; large=total filterable PM-PM10. Intervals are non-negative and are normalized by Q before their respective rows. Incompatible/incomplete data or negative differences require review, not forced truncation to zero. | cp_air; Q | three disjoint kg exchanges per 1 kg reference flow | epa-sawmill-dust-2014 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quantity | all inventory rows | Distinguish identity verification from quantity/background compatibility row by row; blank UUID is pending identity, missing measurement is not zero, and incomplete data cannot be called complete. | supplier documents; monitoring; row identity/background review |
| representativeness | box_manufacture | Record site, lot, period, sample counts, calibration, stocks, losses and maintenance events; a regional softwood survey does not represent all timber or box factories. | original records and uncertainty |
| carbon_balance | all wood rows | Reconcile biogenic carbon in input, product, residues, emitted wood particles and stocks using measured dry wood and a sourced carbon fraction; no default carbon fraction or negative-emission credit. Count upstream uptake once; actual biogenic CO2 cannot be removed from LCI by a GHG reporting convention. Actual foreground combustion requires route completion and review. | physical carbon ledger; upstream data; carbon-fraction source |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | finished_box | Accept only the declared new nailed coniferous solid-board box; a family selector cannot include cable drums, plywood boxes or other products. Actual foreground treatment or combustion without complete rows makes validation incomplete. | usda-nailing-1959; usda-crate-1964; ippc-ispm15-2018 |
| validate_reference | finished_box | Require exactly one reference finished-product output and the shared 1 kg denominator with measured same-configuration net box mass including matched lid; dimensions, useful volume and payload are not mass or functional equivalence evidence. | usda-nailing-1959; usda-wood-handbook-2021 |
| validate_atomic | all inventory rows | Each row is one atomic exchange; blank UUID, unresolved background quantity basis and omitted positive emissions remain pending. Conditional rows require occurrence/absence records; lookup failure is not no-match and identity success is not dataset completeness. | usda-wood-handbook-2021 |
| validate_balance | all inventory rows | Verify campaign wood, nails, oil, water and sourced biogenic carbon in the physical ledger before allocation; internal handovers have equal quantities and residue transfer/stocks/reuse are not duplicated. Explain mass gaps and monitoring uncertainty without balancing through allocation shares or credits. | usda-wood-handbook-2021 |
| validate_air | pm_fine; pm_coarse; pm_large; water_vapour | Air medium and size must match direct-read identities; use disjoint size rows, and captured sawdust is not emission. Actual additional VOCs, oil mist, condensables or leaks require separate specific species/medium rows before claiming completeness, without broad-pollutant or correction substitutes. | epa-sawmill-dust-2014 |
| validate_treatment | finished_box | Kiln drying and purchasing records alone do not prove a heat-treatment process or valid IPPC mark; declare source, treatment location and actual evidence, without conformity claims where absent. | ippc-ispm15-2018 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Factory-gate box manufacture module for explicitly compatible transport-packaging models only after independent review and complete data |
| allowed_use | Use only where actual route, box configuration/performance, moisture and completeness match; convert purchased counts with measured kg/box |
| excluded_use | Cable drums, panel boxes, barrels, pallets, structural crates, shook, reused boxes, extended treatment/combustion routes, a universal wood-packaging factor or export-conformity proof |
| required_metadata | Section 3 qualifiers; boundary, year/region, reference quantity, quantity/background compatibility, upstream links, waste receipt and emission media |
| required_quality_disclosure | Collection coverage, calibration/sample count, physical mass/water/carbon ledgers, submeters/shared attribution, unmeasured/pending rows and detection limits; this method has no independent scientific review |
| update_trigger | Changed box design, species/board grade, moisture, nail finish, power supply, waste destination, treatment/manufacturing route or source/measurement evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| usda-nailing-1959 | handbook | L. O. Anderson, USDA Forest Products Laboratory, Nailing Better Wood Boxes and Crates, Agriculture Handbook 160, September 1959; https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo19907/pdf/GOVPUB-A-PURL-gpo19907.pdf | Printed pp1, 8: nailed-box components and assembly; historical route evidence, without design sizes, nail amounts or modern equipment-energy factors |
| usda-crate-1964 | handbook | L. O. Anderson and T. B. Heebink, USDA Forest Products Laboratory, Wood Crate Design Manual, Agriculture Handbook 252, February 1964; https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo21815/pdf/GOVPUB-A-PURL-gpo21815.pdf | Printed p1: board box differs from structural framed crate; boundary counterevidence only, without transfer of crate design coefficients |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282, 2021; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Printed pp4–1, 4–11, 13–2: dry-basis moisture, mass/volume density bases and oven-drying; no default species density, moisture or kiln coefficient |
| epa-sawmill-dust-2014 | official_guidance | EPA Region 10, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country, May 8 2014; https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf | PDF p2 headers/footnotes: nested filterable sizes, captured/emitted distinction and source limits; no measured box-factory factor, indoor-zero assumption, boiler or condensable-PM coverage |
| ippc-ispm15-2018 | official_guidance | IPPC, ISPM 15 Regulation of wood packaging material in international trade, 2018 version with revised Annexes 1 and 2, corrected February 2019 (standard first adopted 2002); https://www.ippc.int/static/media/files/publication/en/2019/02/ISPM_15_2018_En_WoodPackaging_Post-CPM13_Rev_Annex1and2_Fixed_2019-02-01.pdf | Sections 2, 2.1, 3.1 (printed p7): packaging scope and treatment/marking; prevents presumed treatment, without claiming actual treatment or current jurisdictional conformity |
