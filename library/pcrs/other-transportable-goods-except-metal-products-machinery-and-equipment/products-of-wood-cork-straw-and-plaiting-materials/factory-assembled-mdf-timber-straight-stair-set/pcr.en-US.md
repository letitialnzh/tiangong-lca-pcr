---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.factory-assembled-mdf-timber-straight-stair-set
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Factory-assembled straight MDF-string timber stair delivery sets

## 1. Scope and Applicability

The physical subject is one indoor straight closed-riser stair flight with two MDF strings, actual timber/MDF treads and risers, and its specified timber rake balustrade/newel delivery set, manufactured by machining purchased dried sawnwood and uncoated MDF, PVAc-dispersion joining, mechanical fixing, inspection and wrapping/banding. Flight assembly is completed in the factory; declared loose newels and rake components remain bundled for site fitting. The delivered configuration must distinguish assembled parts from loose components. No complete installed staircase, unrelated landing railing or single tread is the reference object. Sources: `staircraft-stairs-2023`.

The base route is uncoated, without preservative/fire-retardant treatment, on-site kiln drying, panel manufacture or combustion. It requires documented all-electric factory utilities; conditioned storage, extraction and handling still count. The EPD supports the actual product and assembly route, not proof that every factory has these narrower uncoated/PVAc/electric conditions; these are supplier/site admission requirements. If any finish, different adhesive, fuel, purchased thermal carrier, lubricant, cleaning water or additional packaging is used, this base inventory is incomplete until each actual exchange is separately defined and verified. No borrowed survey average is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.factory-assembled-mdf-timber-straight-stair-set |
| classification_refs | CPC 3.0 31629; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | The single configured factory-assembled MDF-string straight stair delivery set defined above |
| excluded_products | Windows 31621; doors 31622; shuttering 31623; shingles/shakes 31624; standalone posts/beams 31625; flooring panels 31626; engineered structural timber 31627; bamboo; curved/winder/spiral stairs; loose stair parts sold individually; all-solid-wood stairs; coated/treated stairs; installed works |
| representative_product | Straight MDF-string flight with its specified rake/newel set; complete factory dispatch configuration |
| production_route | Receipt/storage → CNC machining/cross-cutting → glue/fixing/jig assembly → acceptance → wrapping/banding |
| market_state | Net accepted factory dispatch set, with fitted/loose state disclosed; packaging mass excluded |

Existing sawnwood, continuously shaped timber/bamboo and MDF PCRs stop at their own input-product gates. They can support upstream manufacture where their route applies; they do not cover stair BOM completeness, assembly, mixed-material mass or the dispatch-set configuration. CPC 31629 is a residual class; sibling exclusions support only the narrower boundary, not full class coverage. The published CPC note itself does not explicitly enumerate staircases. Sources: `un-cpc-3-2025`; `staircraft-stairs-2023`.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted configured factory stair delivery set |
| How much | 1 kg net accepted delivery-set mass at declared delivery moisture |
| How well | Declare drawing/BOM, rise/run/width, loads and acceptance specification; no assumed certification or performance |
| How long or cycle | One manufacturing delivery; no prescribed service life |
| reference_flow_link | `stair_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other builder's joinery and carpentry of wood and bamboo `b8edb107-92dc-43d0-a6d0-0c2c898799d5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Drawing/BOM and complete set; fitted versus loose rake/newels; two MDF strings; wood species/provenance/drying; board grade/binder/thickness; uncoated untreated condition; PVAc formulation/solids; actual fixings; delivery moisture; net mass excluding packaging; performance acceptance; location/year; electric supply/meter boundary |

All required qualifiers must be declared in dataset metadata or equivalent fields. Mass of one complete set M is weighed; do not invent M from a geometry example. A kg declared unit is a production scaling basis and does not establish equal stair function between designs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | stair_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_output measures accepted net set mass. Every row is per 1 kg reference flow; the common denominator D is the sum of net accepted complete sets for the same collection period. |
| moisture_basis | sawnwood; mdf; wastes; stair_output | Mass | kg | Keep actual wet mass, dry solids and water separate; u = water/dry solids and w = water/wet mass. Validate resin/volatile correction for MDF; an oven mass loss is not automatically moisture. |
| count_mass | screws; staples; packaging | Mass | kg | Use measured same-specification sample mass/count; do not import nominal density or mass from another product. |
| electric_energy | electricity | Net calorific value | MJ | Convert metered kWh to MJ using 3.6; match delivered voltage, transformer/loss boundary and grid context. This energy property supplies no steam/net heat basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dried timber, MDF, actual assembly and packaging supplies at factory receipt |
| starting_condition_role | foreground production |
| product_classification_scope | One configured straight timber/MDF stair-set subset within 31629 |
| recursive_input_rule | No purchased finished stair re-labelled as this manufacture. Retain rework internally; purchased replacement components require their own verified upstream state. |
| upstream_dataset_requirement | Link compatible actual timber/MDF, adhesive, fixings, power, packaging, inbound transport and waste treatment; identity alone is not background qualification |
| disclosure | Plant/period, set configuration, stage meters, stocks, assembly state, exclusions, waste destinations, upstream gates and unresolved links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | stair-line | Include receipt/stabilization, machining/cross-cutting, adhesive dosing/clamping/fixing, acceptance, rework, extraction and packaging. Retain stage measurements within one foreground unit; internal transfers have equal quantities at both ends. | `staircraft-stairs-2023` |
| boundary_gate | stair-line | End at factory dispatch; upstream production/inbound transport and actual waste treatment remain linked. Site installation, use, downstream transport and end of life are separate scenarios. Do not import the EPD service life or landfill assumptions. | `staircraft-stairs-2023` |
| boundary_gaps | all rows | Missing identity or measurement is not zero. Every additional actual chemical, carrier, package or waste requires its own atomic exchange; applicability and completeness must be reassessed when the base route changes. | `staircraft-stairs-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stair-line | Aggregated factory stair manufacture and packaging | required | Defined base route | foreground production | 1 kg accepted net stair set |

Physical stages: receipt/stabilization → CNC/cross-cutting → jig/glue/fixing assembly → acceptance/rework → wrapping/banding/dispatch. Keep a physical solids/water/carbon ledger separate from the allocated environmental-burden ledger. Packaging changes the dispatch package, not the reference-product mass. The factory-assembled flight and the packaged flight are one output, with phase-specific records and no duplicate product exchange. Sources: `staircraft-stairs-2023`; `usda-wood-handbook-2021`.

### Process: Factory stair line (`stair-line`)

#### Inputs

##### Product flows

###### Purchased dried untreated sawnwood for stair joinery (`sawnwood`)
Measure same-lot net solid timber volume. Supplier/background m3 definition, gate and moisture state must be declared and compatible; unknown correspondence leaves quantity/background linkage incomplete. A database secondary mass coefficient is not an assumed density.


Material species, dryness and supplier boundary must match the actual BOM; no green timber or preservative-treated substitute.

- Selected flow: Lumber `ca253295-1699-4c83-9933-9467a136a4fc`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect period quantity q_sawnwood with cp_material; normalize q_sawnwood/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `staircraft-stairs-2023`

###### Medium density fiberboard (`mdf`)

Purchased uncoated dry-process MDF for the two strings and actual treads/risers; thickness, binder and formaldehyde class are supplier fields.

- Selected flow: Medium density fiberboard `57c184ac-a2d3-4500-af7b-80609ed89d2f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_mdf with cp_material; normalize q_mdf/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `staircraft-stairs-2023`

###### Aqueous polyvinyl acetate wood adhesive dispersion (`pva`)
This broader identity includes PVAc emulsion polymerized in water; use only with supplier confirmation of that actual aqueous formulation. Independently verify whether background reference kg denotes supplied wet formulation or polymer solids. Retain measured/supplier solids, water and additives; unknown basis remains quantity-pending. Polymer-solids-only background data cannot stand for complete wet glue.


Only the declared PVAc-dispersion route; weigh supplied formulation, record solids and water from actual supplier evidence. Do not treat dry polymer mass as wet glue mass.

- Selected flow: Polyvinyl acetate `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_pva with cp_material; normalize q_pva/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `staircraft-stairs-2023`

###### Steel screw (`screws`)

Actual incorporated steel screws; grade, plating and dimensions must be supplier-compatible. Weigh a sampled lot for count-to-mass conversion.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_screws with cp_material; normalize q_screws/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `staircraft-stairs-2023`

###### Steel assembly staples (`staples`)

Include only actual supplied steel staples in the assembly BOM, one specification per exchange. This broad steel assembly-fastener identity requires actual grade, coating, wire/crown/leg dimensions, loose or collated strip state, counted sample mass and provider reference-quantity compatibility. Do not substitute screw or unidentified mixed hardware quantities, or count packaging/carrier mass as steel. Separately document and inventory any actual additional collation material outside the matched fastener reference; no invented recipe. Raw CPC42944 excludes staples in strips: if strip format is supplied, retain source-classification clarification debt and do not claim exact strip coverage or a matched strip-staple background.

- Selected flow: Steel fasteners `691b2092-38f6-4125-bfb4-cab3d86af41f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_staples with cp_material; normalize q_staples/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `staircraft-stairs-2023`

###### Alternating current (`electricity`)

Customer-side 1–35 kV grid-average AC supply only. Include transformer losses, CNC, saws, clamping, extraction, electric conditioning and allocated services inside the meter boundary. Other voltages/supply routes require a compatible identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect period quantity q_electricity with cp_energy; normalize q_electricity/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `staircraft-stairs-2023`

###### Polypropylene flat packaging strap (`pp_band`)

Conditional on actual PP strap specification; twine, steel band and nylon cable ties are different products. Record net strap leaving with accepted sets and manufacturing trim separately.

- Selected flow: Polypropylene flat packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_pp_band with cp_pack; normalize q_pp_band/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `staircraft-stairs-2023`

###### Low-density polyethylene foil (PE-LD) (`ldpe_wrap`)

Only non-self-adhesive, non-cellular, non-laminated, non-reinforced and unsupported LDPE wrapping, not similarly combined with other materials. Confirm actual supplier form/specification and mass; no foam, adhesive-backed, supported or multilayer substitution.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_ldpe_wrap with cp_pack; normalize q_ldpe_wrap/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `staircraft-stairs-2023`

###### Corrugated cardboard (`cardboard`)

Conditional protective C/E/F corrugated sheet with fibre ≥80%, recycled content and recyclable condition. Verify actual supplier recipe and receiver acceptance for that condition; neither recyclability nor recycled content creates an automatic recycling credit.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_cardboard with cp_pack; normalize q_cardboard/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `staircraft-stairs-2023`

#### Outputs

##### Product flows

###### Factory-assembled straight MDF-string timber stair delivery set (`stair_output`)

One accepted delivery set: assembled flight plus its specified rake balustrade and separately bundled newel posts. Exclude packaging from reference mass; do not sell a loose tread or landing balustrade as this output.

- Selected flow: Other builder's joinery and carpentry of wood and bamboo `b8edb107-92dc-43d0-a6d0-0c2c898799d5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: `staircraft-stairs-2023`

##### Waste flows

###### Untreated sawnwood solid offcuts (`timber_offcut`)

Separate from sawdust and resin-bearing MDF. Record actual receiving facility and recovery/disposal boundary.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_timber_offcut with cp_waste; normalize q_timber_offcut/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `staircraft-stairs-2023`

###### Captured untreated sawnwood machining dust (`timber_dust`)

Use only separately captured fine powder or tiny chips from actual untreated solid-timber sawing/sanding/grinding, with species, particle form, absence of resin/chemical treatment, collector and moisture basis recorded. Verify an actual offsite combustion/recycling receiver and compatible waste-transport/treatment reference quantity before using this untreated comb/rec identity; unknown or contrary fate stays pending and requires another verified exchange where needed. Exclude coarse offcuts and resin-bearing MDF dust. Weigh net collection, dispatch and retained stock on the same moisture basis. Captured waste is separate from outdoor-air emissions; do not invent combustion/recycling quantities or credits.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_timber_dust with cp_waste; normalize q_timber_dust/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `staircraft-stairs-2023`

###### Uncoated resin-bonded MDF solid offcuts (`mdf_offcut`)

Keep binder-bearing waste distinct from untreated timber; no assumption that its fuel/treatment route equals clean wood.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_mdf_offcut with cp_waste; normalize q_mdf_offcut/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `staircraft-stairs-2023`

###### Captured resin-bonded MDF machining dust (`mdf_dust`)

Use Dust only as a broad nonmetal captured-waste identity for actual resin-bearing MDF machining fine particles. Record the board/binder recipe, resin state, moisture basis, collector, source operation, same-period site attribution and receiving contractor/fate. A mixed collector requires measured material attribution and an accurately described actual mixed-dust exchange; do not merge clean timber dust, solid offcuts or outdoor-air releases into this row. Weigh net dispatch and collector stock separately. Verify receiver/provider reference-quantity, composition, moisture and treatment compatibility before dataset completion; this identity alone does not match a treatment background or prescribe disposal, combustion or recycling.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_mdf_dust with cp_waste; normalize q_mdf_dust/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `staircraft-stairs-2023`

###### Uncured aqueous PVAc adhesive waste (`adhesive_waste`)

Record uncured residual formulation transferred to treatment; do not assign wafer-production glue residue or a pure polymer flow.

- Selected flow: Uncured aqueous PVAc adhesive waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_adhesive_waste with cp_waste; normalize q_adhesive_waste/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `staircraft-stairs-2023`

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Outdoor air, unspecified; actual discharged particulate ≤2.5 µm. No assumed particle distribution from wood throughput.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_pm_fine with cp_air; normalize q_pm_fine/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources:

###### particles (PM2.5 - PM10) (`pm_coarse`)

Outdoor air, unspecified; exclusive >2.5 to ≤10 µm interval, not cumulative PM10.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_pm_coarse with cp_air; normalize q_pm_coarse/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources:

###### particles (> PM10) (`pm_over10`)

Outdoor air, unspecified; actual >10 µm mass. Do not add total suspended particles on top of these three bins.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_pm_over10 with cp_air; normalize q_pm_over10/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources:

###### formaldehyde (`formaldehyde`)

CAS 50-00-0; outdoor air, unspecified. Actual manufacture/storage exhaust only; a board chamber test or occupational concentration is not an emission flux.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_formaldehyde with cp_air; normalize q_formaldehyde/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources:

###### water vapour (`water_air`)

CAS 7732-18-5; outdoor air, unspecified. Include measured net water released during stabilization and glue drying. Resin/extractive volatilization is not automatically water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect period quantity q_water_air with cp_water; normalize q_water_air/D to 1 kg reference output. No default amount.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `usda-wood-handbook-2021`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | stair-line | Use segregated BOM and stage meters first; document causal machine-time/extraction allocation for shared resources with the same period denominator. EPD mass/volume allocation is a case, not a universal factor. | `staircraft-stairs-2023` |
| allocation_physical | all products and wastes | Never multiply physical coproduct or waste outputs by a burden-allocation share. Reconcile the physical balance before allocating burdens. Any sold usable residue requires an evidenced end-of-waste boundary, allocation rationale and separately defined product flow; do not claim avoided energy credit at this factory gate. | `staircraft-stairs-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | stair-line | stair_output | foreground_record | set id; BOM; fit/loose list; net M; moisture; accepted count; tare | Calibrated complete-set weighing or matched constituent weighing with documented completeness; exclude packaging and rework not yet accepted | kg; m3; count; fraction | Each lot/shift; emissions by representative campaign | Same declared production period for all quantities and D | One declared plant and configured route | per 1 kg reference flow | Calibration, supplier records, sampling coverage, uncertainty and reconciliation |
| cp_material | stair-line | materials and fixings | foreground_record | supplier lot; species/recipe; net receipts/issues/stocks; solids; staple grade/coating/dimensions/strip state; reference quantity; separate collation material if present; sample count/mass | Weigh issues and closing stock; supplier SDS/BOM/grade records; matched sample mass for piece items | kg; m3; count; fraction | Each lot/shift; emissions by representative campaign | Same declared production period for all quantities and D | One declared plant and configured route | per 1 kg reference flow | Calibration, supplier records, sampling coverage, uncertainty and reconciliation |
| cp_energy | stair-line | electricity | foreground_record | voltage; meter kWh; meter gate; time; stage hours; transformer loss; shared share | Stage submetering and verified main-meter reconciliation including factory services | kg; kWh | Each lot/shift; emissions by representative campaign | Same declared production period for all quantities and D | One declared plant and configured route | per 1 kg reference flow | Calibration, supplier records, sampling coverage, uncertainty and reconciliation |
| cp_pack | stair-line | packaging | foreground_record | polymer/flute specification; LDPE adhesive/support state; cardboard recyclable condition and receiver acceptance; delivered mass; scrap; stock; count; sample tare | Weigh actual bands/wrap/protectors separately; retain scrap destination and do not include pack in M | kg; m3; count; fraction | Each lot/shift; emissions by representative campaign | Same declared production period for all quantities and D | One declared plant and configured route | per 1 kg reference flow | Calibration, supplier records, sampling coverage, uncertainty and reconciliation |
| cp_waste | stair-line | each waste row | foreground_record | material/binder recipe; physical particle state; wet/dry mass; collector/source operation; same-period site/material attribution; dispatch/stock; consignee; actual fate; receiver/provider reference quantity | Separate bins/weighbridge and collector stock reconciliation; mixed streams require measured attribution. Verify clean-timber combustion/recycling route and MDF-dust composition/moisture/receiver compatibility separately; captured mass is not an air emission | kg; m3; count; fraction | Each lot/shift; emissions by representative campaign | Same declared production period for all quantities and D | One declared plant and configured route | per 1 kg reference flow | Calibration, supplier records, sampling coverage, uncertainty and reconciliation |
| cp_air | stair-line | PM bins; formaldehyde | foreground_record | species; outlet; media; concentration; volumetric flux; T/P wet-dry basis; operating time; controls; detection limit; particle bins | Representative stack/fugitive discharge sampling with matched concentration and gas-volume basis; integrate actual mass flux; no worker exposure substitute | kg; m3; count; fraction | Each lot/shift; emissions by representative campaign | Same declared production period for all quantities and D | One declared plant and configured route | per 1 kg reference flow | Calibration, supplier records, sampling coverage, uncertainty and reconciliation |
| cp_water | stair-line | water_air; solids balance | foreground_record | same-lot before/after wet/dry weights; sampling method; resin/volatile correction; glue water; remaining stock | Validated representative moisture measurements with separate water balance; explain any drying loss not proven to be water | kg; m3; count; fraction | Each lot/shift; emissions by representative campaign | Same declared production period for all quantities and D | One declared plant and configured route | per 1 kg reference flow | Calibration, supplier records, sampling coverage, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_denominator | all rows | D = sum(M_k) | Net accepted complete set masses in cp_output | Common period kg denominator; exclude packaging/rework stock | `staircraft-stairs-2023` |
| calc_normalize | all non-reference rows | a_i = q_i / D | Attributable period quantity and same-period D | Row amount per 1 kg reference flow | `staircraft-stairs-2023` |
| calc_count | screws; staples; packaging | q_i = count_i × sample_mass_i / sample_count_i | Matched physical specification and measured lot sample | Period kg | `staircraft-stairs-2023` |
| calc_electric | electricity | q_electricity = 3.6 × kWh | Attributed metered kWh | MJ | `staircraft-stairs-2023` |
| calc_moisture | wood and board | dry_mass = wet_mass / (1 + u); water_mass = wet_mass - dry_mass; w = u / (1 + u) | Validated dry-basis fraction u; resin/volatile correction where needed | Separate solids and water ledgers | `usda-wood-handbook-2021` |
| calc_air | PM bins; formaldehyde | q_i = integral(C_i × Vdot × dt) in matched kg/m3, m3/time and time; use exclusive measured particle bins | cp_air discharge sampling and controls | Actual kg leaving to outdoor air; unmeasured bins remain missing |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_balance | stair-line | Reconcile dry solids, glue solids, metal, packaging, water and carbon separately with stock changes, captured dust, discharged dust and rework. Quantify uncertainty; unexplained residual is not an invented emission. | cp_output; cp_material; cp_pack; cp_waste; cp_air; cp_water |
| quality_identity | all rows | Keep route/material/state/property compatibility distinct from amount/background compatibility. Do not transfer a Tiangong identity comment recipe or literature mean into a site default. | supplier records; direct identity and background definition |
| quality_completeness | all rows | Preserve missing values, detection limits and omitted activity. Foreground all-electric scope does not remove upstream or waste-treatment biogenic CO2; keep all actual releases in their own processes, distinct from carbon stored in the product. | site coverage and linked datasets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | stair_output | Require exactly one finished product output linked by row id, complete set qualifiers and verified reference identity/property/unit. No intermediate output shares the finished reference UUID. An unresolved reference identity prevents a complete dataset. | `staircraft-stairs-2023` |
| validation_denominator | all rows | Reference quantity, amounts, collection period and calculations all use 1 kg net set and the same D; count, gross dispatch mass and a missing component list cannot substitute for D. | `staircraft-stairs-2023` |
| validation_pm | pm_fine; pm_coarse; pm_over10 | Three mutually exclusive bins only; cumulative PM10/TSP must not be added. Check media and conditions of stack/fugitive sampling; identify unmeasured emissions explicitly. |  |
| validation_boundary | stair-line | Verify route admission, BOM and mass/water/carbon closure separately from burden allocation. Do not claim certification, service-life equivalence or full 31629 coverage from this production inventory. | `staircraft-stairs-2023`; `un-cpc-3-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Upstream manufacture of the precisely configured stair delivery set |
| allowed_use | Only after all applicable identity, background, quantity and completeness gaps are resolved; match configuration/site/year/route |
| excluded_use | Generic wood products; installation; all-solid/bamboo/winder stairs; complete class mapping; service-life or regulatory claims |
| required_metadata | Full reference qualifiers; PCR identity; net D; period/site; upstream gates; row protocols; physical and allocated ledgers |
| required_quality_disclosure | Missing reference/flow identities; measurement/background uncertainty; excluded activities; sampling coverage; translation and methodology state |
| update_trigger | BOM, assembly/loose state, species, boards, glue, coating, fixings, voltage, utility, packaging, controls or background change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `staircraft-stairs-2023` | literature | [Staircraft Timber Staircases with Balustrades, HUB-0834](https://staircraftgroup.com/wp-content/uploads/2024/06/EPD_Staircraft_Group_Ltd_Timber_staircases_HUB-0834_2024-06-19.pdf); pp. 2–7; 10 November 2023 | Actual timber/MDF product, factory assembly and wrapped loose newels, 1 kg scaling, gate and allocation case. UK 2021–2022 multiple-factory evidence; no transferred BOM ratios, energy, 60-year life, carbon factor or landfill scenario. EPD route does not verify the narrower uncoated/PVAc/all-electric admission conditions. |
| `usda-wood-handbook-2021` | handbook | [Wood handbook, FPL-GTR-282](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf); Chapter 13, pp. 13–1 to 13–2, eq. 13–1 | Moisture measurement, dry/wet basis and resin/volatile/electrical-method limitations. No staircase emission factor, fixed density, universal moisture or inventory range. Air-flux and balance protocols are explicit foreground requirements, not USDA emissions prescriptions. |
| `un-cpc-3-2025` | official_guidance | [CPC 3.0 Explanatory Notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf); pp. 142–143, subclasses 31621–31629 | Sibling exclusions and residual joinery context only. The stair-set narrower relation is a classification interpretation governed by the canonical mapping and its ADR; the note gives no stair factory method or reference UUID. |
