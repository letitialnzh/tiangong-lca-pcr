---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.other-wooden-wrapping-and-packaging-material
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---




# Untreated saw-machined solid wood packaging wedges and contoured blocks



## 1. Scope and Applicability



Applies only to finished loose, untreated solid-wood packaging wedges and contoured/notched blocks, saw-machined from purchased kiln-dried coniferous or temperate hardwood sawnwood by electric equipment. A cargo-contact taper, contour or notch and documented packaging fit acceptance are mandatory. Plain rectangular timber and continuous profiles sold for further manufacture remain upstream categories, even when a buyer later uses them as dunnage. H.A. Stiles documents custom shaped dry pine/poplar packaging components; CTU Code Annex 7 §2.3.5 makes wedge grain direction relevant to cargo restraint. These sources establish physical product/function distinctions, not a universal strength, yield or lifespan.

Excluded: wood boxes/crates/cable drums, pallets/load boards or their assembly stock, barrels/coopers products, wood wool/flour (31220), waste products (392), unshaped sawnwood (31101), general continuously shaped timber (31211), furniture/construction wedges, particleboard/composite or glued blocks, coatings, impregnation and phytosanitary-treated dispatch products. This cold route excludes onsite drying, thermal treatment, combustion, sanding/planing, wet processing, fuel-powered handling and product assembly. Material operations beyond this scope require an evidence-backed extension with individually resolved exchanges before data release. Untreated solid-wood dunnage is not exempt from phytosanitary obligations merely because cut; this dataset makes no export-compliance claim.



## 2. Product Category Identity



| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.other-wooden-wrapping-and-packaging-material |
| classification_refs | CPC 3.0 31709; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Accepted solid-wood packaging wedges and contoured/notched blocks with cargo-contact geometry |
| excluded_products | The exclusions in section 1; classification labels alone do not establish applicability |
| representative_product | Unglued uncoated tapered pine packaging wedge, cut to order from kiln-dried sawn stock |
| production_route | Purchased dry stock; electric sawing of taper/contour/notch; dry dust collection; dimensional/grain/fit acceptance; bulk or PE-wrapped dispatch |
| market_state | Finished standalone packaging article at manufacturing gate, ready for customer cargo placement; no downstream installation included |



## 3. Reference Flow



| Field | Value |
| --- | --- |
| What | Supply specified loose packaging wedge or contoured block for declared cargo support/restraint application |
| How much | 1 kg accepted net as-delivered wood at factory gate, excluding wrapping |
| How well | Meet actual order geometry, taper/contour/notch, grain direction, species, moisture, defect and fit acceptance; no generic load rating |
| How long or cycle | One declared production and dispatch cohort; no service life or shipment-count equivalence |
| reference_flow_link | `finished_out` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other wooden wrapping and packaging material `1437dd55-5b8c-4866-83a4-b6911ed60bf8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | One actual SKU and accepted geometry; cargo packaging function; botanical species/mix; solid/unglued/uncoated/unimpregnated state; source kiln-dried stock; actual finished dimensions/taper/contour/notch and grain direction; acceptance specification and defect/fit evidence; net delivered mass; dry-basis moisture and method; actual site/period; starting gate; wrapping separate; no phytosanitary treatment/export claim; matched upstream supplier basis |

Declare all required qualifiers in dataset metadata or equivalent reference-flow notes. The broad verified reference identity must be constrained by these physical qualifiers; a kg cannot establish equivalent cargo restraint across geometries. No factory observations are supplied by this PCR.



## 4. Measurement and Unit Rules



| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net weighing of accepted wood at dispatch under cp_reference. All inventory is per 1 kg reference flow, including physical residues. No piece-to-kg estimate from nominal geometry. |
| `moisture_basis` | wood and wood residues | Mass and dry-basis moisture | kg; dimensionless | For fractions u=(m_wet-m_dry)/m_dry; m_dry=m_wet/(1+u); water=m_wet-m_dry. Measure paired specimens to oven-dry constant mass, with sampling/calibration evidence, m_dry>0 and u≥0. Divide percentage by100. No fixed species moisture/density. [usda-wood-handbook-2021, Ch4 eq4-2; algebra.] |
| `energy_basis` | `electricity_in` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter customer-side delivered electricity by stage; 1 kWh=3.6 MJ from verified unit group. Database energy-property label does not imply combustion. Do not model onsite generation emissions for purchased electricity. |
| `count_volume_basis` | count/volume records | Mass | kg | Reconcile counts to directly weighed accepted lot mass at the same moisture; use measured density with actual net contoured solid volume only if conversion is necessary. Bounding rectangular volume and stacked volume are not net solid volume. |



## 5. System Boundary



### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased kiln-dried untreated sawn stock received at workshop; supplier drying burdens remain upstream |
| starting_condition_role | Gate-to-gate electric conversion to accepted packaging articles |
| product_classification_scope | Only specified solid-wood packaging wedge/contoured-block subset; CPC31709 narrower scope |
| recursive_input_rule | Purchased same-category unfinished/reworked packaging articles change the route and require separate disclosed supplier gate; never silently substitute for sawn stock or create repeated finishing credit |
| upstream_dataset_requirement | Match stock species, drying, moisture/reference quantity, forestry carbon/allocation, supplier gate and inbound transport; match delivered electricity voltage/geography/period, oil and PE supplier specifications. Identity UUID is not a background dataset. |
| disclosure | Disclose all gates, actual operations, meters, transport providers, exclusions and pending identities/background compatibility; gate-to-gate alone is not cradle-to-gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | workshop | Include receiving, layout, taper/contour/notch sawing, reject handling, dust collection, electric internal movement, maintenance attribution, fit/geometry acceptance and dispatch; meter stages within one foreground unit. Installation, cargo transport/use, fasteners applied by customers and end-of-life are downstream. Declare capital/tool replacement and employee-activity treatment and assess significance; no automatic zero claim. | `hastiles-packaging-wedges`; `ctu-code-2014` |
| `boundary_dust` | mechanical releases | Measure actual air emissions after controls; captured sawdust is an external material output. EPA PTE tables are screening evidence, not actual emissions. Add each other observed atomic substance before dataset completion; no blanket mass cutoff. | `epa-sawmill-pte-2014` |
| `boundary_carbon` | wood carbon | Track measured dry-wood carbon crossing all material gates and retained stock. No new atmospheric uptake or avoided-disposal credit is created at the workshop. Retain inherited upstream uptake once. This cold non-combustion route has no prescribed positive biogenic CO2 emission; any measured oxidation/decay invalidates assumed absence and requires separate biogenic CO2 and other species rows. Never erase biogenic CO2 from LCI because of a greenhouse-gas reporting convention. | `usda-wood-handbook-2021` |
| `boundary_treatment` | route qualification | Do not represent heated, glued, coated, fumigated or export-certified products with this untreated route. Machining alone is not a processed-wood pest exemption. Require separate treatment evidence and inventory for an extended route. | `ippc-ispm15-2018` |



## 6. Process Inventory Structure



### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `manufacture` | Cold sawing, collection, acceptance and dispatch | required | Purchased dry stock, all-electric dry route | Single foreground unit with stage meters and material balance | `finished_out` |

The physical graph retains unallocated inputs, accepted wood, shipped wrapping, all coproducts/wastes, emissions and stock changes. Divide same-cohort physical totals once by accepted net wood kg; this is normalization, not allocation. Keep a separate product-specific environmental-burden ledger after allocation; never multiply coproduct physical outputs or internal transfer amounts by allocation shares. Sawing and dispatch are aggregated to one process so the same finished UUID has exactly one reference output; keep substage metering. Internal returns remain internal and are not new purchased inputs. No amount ranges or factory values are asserted. Unknown exchanges are pending, not zero; conditional absence requires records.

### Process: Cold saw machining and dispatch (`manufacture`)

#### Inputs

##### Product flows



###### Kiln-dried sawn coniferous timber, at mill (`coniferous_in`)



Only the actual kiln-dried untreated coniferous stock; do not use for hardwood. Collect species, dimensions, moisture and supplier drying boundary. The selected stock identity applies to actual incoming sawn boards thicker than 6 mm; record measured thickness. Boards at or below 6 mm require a separately verified compatible identity before use.



- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_material`

- Sources: `usda-wood-handbook-2021`



###### Sawnwood, hardwood (`hardwood_in`)



Only actual kiln-dried untreated temperate hardwood stock. Generic feedstock identity is not a seat-frame manufacturing inventory; verify actual species and supplier gate. The selected stock identity applies to actual incoming sawn boards thicker than 6 mm; record measured thickness. Boards at or below 6 mm require a separately verified compatible identity before use.



- Selected flow: Sawnwood, hardwood `43103a96-43df-4f35-ad02-728237b3f815`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_material`

- Sources: `usda-wood-handbook-2021`



###### Alternating current (`electricity_in`)



Purchased customer-side grid electricity below 1 kV, for sawing, dust collection, electric handling and dispatch. Supplier geography/period/voltage must match. Other voltages require another verified identity. The raw record states geography CN. This physical AC identity does not establish a globally applicable background: verify the actual supplier, region, year, delivery gate, loss convention and MJ reference-quantity basis before linking a supplier dataset; unresolved compatibility remains disclosed.



- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_energy`

- Sources:



###### Lubricating oil (`oil_in`)



Petroleum-fraction liquid machinery lubricating oil when consumed. Verify formulation/SDS and maintenance attribution. Do not transfer the record heating value into inventory or treat oil as burned fuel.



- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_auxiliary`

- Sources:



###### Polyethylene film (`film_in`)



Only actual PE film used for dispatch wrapping. Verify polymer/SDS, additives, supplier and delivered grade. Source classification defect remains disclosed. No assumed wrapping quantity.



- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_auxiliary`

- Sources:

#### Outputs

##### Product flows



###### Finished untreated saw-machined solid-wood cargo-securing block (`finished_out`)



The referenced identity has the official baseName “Other wooden wrapping and packaging material”; this card represents one actual finished cargo-securing block SKU with one accepted geometry within that identity, constrained to the wedge or contoured/notched-block scope. Only accepted finished packaging wedges or contoured/notched blocks, excluding attached dispatch film. Record geometry, grain orientation, lot, fit acceptance and actual moisture.



- Selected flow: Finished untreated saw-machined solid-wood cargo-securing block `1437dd55-5b8c-4866-83a4-b6911ed60bf8`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: 1 kg

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_reference`

- Sources: `hastiles-packaging-wedges`; `ctu-code-2014`



###### Polyethylene film (`film_shipped`)



Dispatch PE wrapping crossing the gate with goods, counted separately from net wood reference mass; physical transfer only, not another reference product or a coproduct credit.



- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_auxiliary`

- Sources:



###### Clean untreated non-agglomerated solid-wood cutting offcuts sold as coproduct (`offcuts_sold`)



Conditional actual separately sold clean untreated, non-agglomerated solid cutting pieces with lawful product/coproduct status, buyer-accepted dimensions/specification and continuing intended use. Record species, solid form, measured dimensions, moisture, treatment/adhesive/coating state, origin, wet mass and receiver. Payment alone does not establish product identity. Wood material is a broad physical locator for this single concrete stream; provider/downstream route, geography, period and reference-quantity compatibility remain to be verified. Keep separate from sawdust and discarded offcuts, without avoided credit.



- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_residue`

- Sources: `usda-wood-handbook-2021`



###### Clean untreated uncompressed sawdust sold as coproduct (`sawdust_sold`)



Conditional actual separately sold clean untreated, uncompressed sawing particles with lawful product/coproduct status, buyer-accepted particle specification and continuing intended use. Record species, actual particle size/form, moisture, treatment/adhesive/coating state, collection origin, wet mass and receiver. Payment alone does not establish product identity. Wood material is a broad physical locator for this single concrete sawdust stream; provider/downstream route, geography, period and reference-quantity compatibility remain to be verified. Do not substitute chips, pellets, mixed hog fuel or a waste identity; keep separate from solid offcuts and captured waste, without avoided credit.



- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_residue`

- Sources: `usda-wood-handbook-2021`

##### Waste flows



###### Offcut (`offcuts_waste`)



Actual discarded untreated, unglued, uncoated, non-agglomerated solid wood cutting offcuts/rejects only; record adhesive contamination absence and named receiver. Conditional physical identity despite disclosed CPC39282 conflict. No compressed briquettes.



- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_residue`

- Sources: `usda-wood-handbook-2021`



###### sawdust waste (`sawdust_waste`)



Captured untreated sawing dust leaving for declared waste treatment/receiver. Exclude airborne dust and sold coproduct. Receiver combustion is outside this foreground and linked once downstream if modelled. The raw identity specifies combustion/recycling compatibility: verify actual fine powder/tiny-chip form, untreated clean state and receiver route; an incompatible actual route requires another verified flow.



- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_residue`

- Sources: `usda-wood-handbook-2021`



###### Spent petroleum machinery lubricating oil (`used_oil_out`)



Conditional actual used liquid petroleum-based machinery oil at its point of generation, with treatment unspecified by the selected broad waste identity. Record actual base oil/additives, contaminants, source equipment and maintenance interval, weighed dispatched mass, stock changes, retained oil and named receiver. Verify receiver treatment and provider reference-quantity compatibility separately; do not treat this identity as cleaned or regenerated oil, assume input equals waste, or substitute alkaline liquor.



- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_auxiliary`

- Sources:



###### Unprocessed polyethylene wrapping-film trimmings (`film_waste`)



Conditional factory PE film trimmings, before cleaning or recycling; record polymer, contamination and receiver. Shipped wrapping remains in film_shipped.



- Selected flow: Unprocessed polyethylene wrapping-film trimmings

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use unallocated measured same-cohort exchange total divided once by accepted net wood kg; preserve raw total, stock change and origin/destination.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_auxiliary`

- Sources:

##### Elementary flows



###### particles (PM2.5) (`pm_fine`)



Actual emitted PM2.5 after controls, outdoor-air unspecified, including separately measured outlet and fugitive releases. Not total generated or captured dust.



- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use same-cohort actual emitted mass after controls divided once by accepted net wood kg. No nested PM sums or assumed zero.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_dust`

- Sources: `epa-sawmill-pte-2014`



###### particles (PM2.5 - PM10) (`pm_coarse`)



Only the non-overlapping PM2.5-to-PM10 size interval actually emitted to unspecified outdoor air; derive difference only from compatible simultaneous nested measurements.



- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use same-cohort actual emitted mass after controls divided once by accepted net wood kg. No nested PM sums or assumed zero.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_dust`

- Sources: `epa-sawmill-pte-2014`



###### particles (> PM10) (`pm_large`)



Only actual emitted particles larger than PM10 in unspecified outdoor air; require measured compatible size basis. Unspecified PM cannot be reassigned to this bin.



- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use same-cohort actual emitted mass after controls divided once by accepted net wood kg. No nested PM sums or assumed zero.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_dust`

- Sources: `epa-sawmill-pte-2014`



###### water vapour (`water_vapour_out`)



Conditional positive water evaporation from wood during cold handling/storage to unspecified outdoor air, supported by water balance. No onsite kiln. Material ambient sorption requires a separate verified resource input before completion, never a negative emission.



- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use same-cohort actual positive evaporation mass evidenced by the water balance divided once by accepted net wood kg. Absorption requires a separate verified input; do not assume zero or use a negative emission.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_material`

- Sources: `usda-wood-handbook-2021`



## 7. Allocation and Co-product Handling

The dry-mass fallback is a candidate PCR methodological choice for residual joint dry material conversion, subject to site causal assessment and independent review. Wood Handbook supports only moisture-to-dry-mass measurement, not allocation approval. Do not use a dry-mass share for dedicated geometric machining or services with a demonstrated different driver.



| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | cohort operations | First separate operations/meters by accepted geometry/species and by coproduct destination. Dedicated operations belong to their output. Distinguish physical waste from genuine marketable coproduct using contract/specification/receiver evidence; a receipt of revenue alone is not methodological approval. | `hastiles-packaging-wedges` |
| `allocation_joint` | unavoidable joint burdens | For unavoidable joint dry sawing burdens without a demonstrated causal alternative, use site-measured oven-dry mass shares of accepted wood and genuine coproducts. State products, measured moisture and sums; disclose justification and test an economic-share sensitivity with same-period prices if decision-relevant. Do not allocate burdens to discarded wastes or assume zero disposal burden. Preserve actual full physical outputs and water/carbon ledgers; allocated external input/emission values are a separate account. No survey shares or substitution credit. | `usda-wood-handbook-2021` |



## 8. Foreground Data Collection, Calculation, and Quality Rules



### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | `manufacture` | accepted wood denominator | collected_record | lot; order; species; geometry; taper/contour/notch; grain; moisture; net mass; wrapping tare; defects; fit acceptance; rejects; period | Calibrated scales and order-linked dimensional/grain/fit inspection at dispatch; retain net weighing and acceptance trace Aggregation: Accepted net wood kg divided by the same accepted net wood kg: per 1 kg reference flow | kg | each accepted lot | one common disclosed cohort | one workshop; geometry/species separately | per 1 kg reference flow | Scale calibration; order drawings; acceptance/rejection records |
| `cp_material` | `manufacture` | stock, moisture, water and carbon | collected_record | supplier; species; treatment; wet mass; paired oven-dry specimens; geometry; carbon fraction analysis; beginning/end stock; evaporation evidence | Calibrated stock weighing, representative paired moisture samples oven-dried to constant mass; record sampling coverage and uncertainty; independently evidence carbon fraction; reconcile gate water Aggregation: Each unallocated cohort mass/positive evaporation total divided by accepted net wood kg: per 1 kg reference flow | kg | each stock lot and dispatch cohort | same common cohort | same workshop and receiving gate | per 1 kg reference flow | Supplier boundary; oven/scales calibration; sampling and analysis files |
| `cp_energy` | `manufacture` | electricity by stage | collected_record | meter start/end; kWh; voltage; site; period; machine runtime; standby; dust fan; electric handling; shared-use split | Calibrated stage meters; reconcile purchased delivery with sawing/fans/handling/dispatch; evidence any shared-service driver Aggregation: Unallocated attributed delivered MJ divided by accepted net wood kg: per 1 kg reference flow | kWh; MJ | continuous meters; cohort reconciliation | same common cohort | same workshop and customer-side supply | per 1 kg reference flow | Meter certificates; supplier voltage/geography/period; splits |
| `cp_auxiliary` | `manufacture` | oil, PE film and their destinations | collected_record | SDS; actual polymer/oil formulation; supplier; issue mass; opening/closing stocks; shipped wrapping; trimming mass; used oil; base oil/additives; contaminants; source equipment; receiver treatment; provider reference-quantity basis; retained oil | Weigh issues, wrap and trimmings separately; reconcile consumption and stocks; maintenance logs attribute oil; manifests identify actual waste receiver Aggregation: Each unallocated attributed material total divided by accepted net wood kg: per 1 kg reference flow | kg | each issue/dispatch/maintenance event | same common cohort; maintenance interval disclosed | same workshop and contracted providers | per 1 kg reference flow | Scales; SDS/invoices; transfer notes; residual/stock balances |
| `cp_residue` | `manufacture` | offcuts and sawdust by destination | collected_record | origin stage; species; particle form; glue/coating contamination; wet/dry mass; moisture; internal returns; stock; contracts; price; receiver; lawful product/waste status; buyer-accepted specification and intended use; dimensions/particle size; provider reference-quantity basis | Weigh each separated stream; representative paired moisture tests; reconcile offcuts/captured dust/sold products/waste without duplicate destinations Aggregation: Each unallocated stream total divided by accepted net wood kg: per 1 kg reference flow | kg | each collection/transfer and cohort close | same common cohort | same workshop; named receivers | per 1 kg reference flow | Scales; moisture; contracts; receiver classification; disposal evidence |
| `cp_dust` | `manufacture` | three disjoint emitted PM sizes | collected_record | outlet/fugitive source; PM2.5; PM10; compatible total particulate; sampling basis; exhaust volume; hours; controls; captured dust; detection limits; uncertainty | Site-specific post-control monitoring with documented size, sampling and dry/wet standard volume bases; representative campaigns linked to production hours; no direct EPA PTE transfer Aggregation: Each actual emitted non-overlapping cohort mass divided by accepted net wood kg: per 1 kg reference flow | kg | representative campaign plus operation/control logs | same common cohort | same workshop; specified outdoor-air release | per 1 kg reference flow | Accredited method; matched size basis; control logs; uncertainty and detection evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_cohort` | all inventory rows | For each exchange, sum unallocated same-cohort measured amounts after stock reconciliation and divide once by accepted net wood kg. finished_out is 1 kg. Retain physical values separately from burden allocation. | cp_reference; cp_material; cp_energy; cp_auxiliary; cp_residue; cp_dust | physical exchange per 1 kg reference flow |  |
| `energy_conversion` | electricity_in | Multiply metered delivered kWh by3.6 to MJ before cohort normalization; do not confuse fuel heat with electricity. | cp_energy | delivered MJ |  |
| `dry_balance` | wood and residue ledger | Convert each measured wet mass using its own dry-basis moisture per moisture_basis. Dry inputs plus stock decrease equal dry accepted wood, coproducts, discarded wood, emitted wood dust and unexplained residual. Keep water and carbon balances separate; investigate uncertainty rather than assigning a made-up yield. | cp_material; cp_reference; cp_residue; cp_dust | unallocated dry mass, water and carbon closure | `usda-wood-handbook-2021` |
| `dust_bins` | pm_fine; pm_coarse; pm_large | When nested quantities are measured under identical conditions: fine=PM2.5; coarse=PM10-PM2.5; large=compatible total particulate-PM10. Require nonnegative differences and consistent methods/coverage. Otherwise measure disjoint bins or retain missing-bin uncertainty. Never sum PM2.5+PM10+total or subtract incompatible condensable/filterable measurements. | cp_dust | three disjoint emitted masses | `epa-sawmill-pte-2014` |
| `burden_shares` | joint burdens only | Use each accepted product or genuine coproduct dry mass divided by the sum of those dry masses for residual joint burdens after subdivision. Shares sum to1; do not apply shares to physical outputs, waste or internal links. Document any justified causal alternative. | cp_reference; cp_material; cp_residue | separate allocated environmental-burden account | `usda-wood-handbook-2021` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | manufacture | Prove dry purchased stock, actual shaped packaging end-state and cold electric route; exclude incompatible treatment/assembly. Document absence rather than assume. | cp_reference; cp_material; cp_energy |
| `dq_identity` | each external flow and background | Verify physical identity separately from measured quantity and provider dataset basis. Blank UUIDs and classification conflicts remain visible; all material missing exchanges/backgrounds block a complete dataset claim. | Direct identity records; supplier/receiver specifications; uncertainty log |
| `dq_period` | all records | Same disclosed cohort/site, traceable source periods and stock changes; keep collection totals, allocation drivers and detection limits. No universal manufacturing ranges inferred. | cp_reference; cp_material; cp_energy; cp_auxiliary; cp_residue; cp_dust |



## 9. Validation Rules



| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_out | Exactly one reference output is 1 kg accepted net wood; reference link, UUID, Mass/kg, geometry/function, moisture and packaging exclusion must agree. Do not duplicate its UUID as an intermediate product output. | `ctu-code-2014`; `hastiles-packaging-wedges` |
| `validate_balance` | physical and allocated accounts | Close raw mass/water/carbon within documented measurement uncertainty; same internal transfer has equal quantities at both ends. Reconcile wrapping consumed=shipped+trimmings+stock change; oil issue=used oil+retention+documented loss+stock change. No balancing invented emissions or allocating physical coproduct amounts. | `usda-wood-handbook-2021` |
| `validate_dust` | dust emissions | Check three non-overlapping size bins, compatible monitoring/volume basis and post-control outdoor compartment. Captured and emitted dust cannot be counted twice. PTE values, unspecified-size PM or missing bins cannot prove measured complete emissions. | `epa-sawmill-pte-2014` |
| `validate_completeness` | data release | Resolve all applicable material UUID/background gaps and supplier/receiver compatibility; disclose source classification defects and uncertain coverage. Every added actual flow is atomic and audited. An unavailable identity, incomplete physical balance or unmeasured material emission fails a complete-dataset claim; passing a structural PCR check does not approve methodology or fill missing field data. |  |
| `validate_treatment` | product status | No ISPM15 certification, heat-treatment, load rating, life-cycle completeness or full CPC31709 coverage follows from this manufacturing reference. Reject incompatible states unless the method is formally extended with evidence. | `ippc-ispm15-2018` |



## 10. Published Dataset Profile



| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Only completed compatible manufacturing inventory for specified untreated shaped packaging articles |
| allowed_use | Supplier-specific packaging component burdens at matched net wood/moisture/geometry gate; cargo-support model with separately demonstrated suitability |
| excluded_use | Cargo securement certification, installation/transport/use/EOL, treated/composite articles, generic sawnwood, equivalent restraint per kg, automatic full CPC31709 mapping |
| required_metadata | All reference qualifiers; site/cohort; starting gate; stock/upstream sources; allocated and physical accounts; inventory/protocol links |
| required_quality_disclosure | Meter/sampling/uncertainty; moisture/carbon basis; dust coverage; source identity defects; unresolved applicable UUIDs/backgrounds; allocation justification/sensitivity; excluded stages |
| update_trigger | Changes to geometry/application, stock species/treatment/moisture, site equipment/control/supply, provider definitions, residue fate, source metadata or verified inventory gaps |



## 11. Data Sources



| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `hastiles-packaging-wedges` | extension_guidance | [H.A. Stiles, Wood Wedges & Corner Blocks](https://www.hastiles.com/portfolio-items/wood-wedges/); Use Cases; Materials and Options | Primary manufacturer page: shaped dry pine/poplar packaging options; exclude particleboard, green wood, construction uses and optional finishes. No LCI values. |
| `ctu-code-2014` | official_guidance | [IMO/ILO/UNECE CTU Code, January 2014](https://assets.ippc.int/static/media/files/publication/en/2022/01/CTU_Code_January_2014.pdf); Annex7 §2.3.5, Figure7.7, PDF p83 | Cargo-blocking wedge grain/design qualifier only; no default force, dimensions or lifespan; downstream installation separate. |
| `usda-wood-handbook-2021` | handbook | [USDA FPL Wood Handbook, FPL-GTR-282 (2021)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf); Ch4, printed p4–1, eq4-1/4-2 | Dry-basis moisture and matched-state mass accounting; no species density, moisture target, carbon fraction or industry yield adopted. |
| `epa-sawmill-pte-2014` | official_guidance | [EPA Region10 sawmill PM PTE memorandum, May8 2014](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf); activity table headers/footnotes; cover memorandum | Mechanical dust screening and nested PM/PM10/PM2.5 interpretation only; excludes boilers. No geographic/species PTE factors transferred as actual packaging emissions. |
| `ippc-ispm15-2018` | standard | [IPPC ISPM15, 2018 text](https://www.ippc.int/static/media/files/publication/en/2019/02/ISPM_15_2018_En_WoodPackaging_Post-CPM13_Rev_Annex1and2_Fixed_2019-02-01.pdf); scope and processed-wood exemptions | Solid-wood dunnage trade limitations; cold sawing does not confer exempt status or export certification. Current provider publication page should be consulted for actual destination obligations. |
