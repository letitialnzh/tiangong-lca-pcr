---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-made-up-polyester-microfibre-cleaning-cloths
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dry made-up polyester microfibre cleaning cloths

## 1. Scope and Applicability

This PCR covers uncoated, unimpregnated, reusable cleaning cloths made by dry cutting and sewing the edges of purchased finished knitted polyester microfibre fabric. The textile body and sewing thread are PET; supplier records must establish the actual composition and fabric processing state. Virgin and recycled PET inputs require separate declared supplier profiles, not a default recycled fraction. A knitted polyester wiping cloth is a representative market product (`vileda-cleaning-cloths-2025`), not a factory recipe or guaranteed cleaning performance. Cleaning cloths belong within the broader official classification (`unsd-cpc3-notes-2025`); this PCR does not cover the whole leaf.

Exclude life-jackets, life-belts, flotation components, disposable impregnated wipes, nonwoven wipes, cotton cloths, PET/polyamide blends, mop assemblies, household bed/table/toilet linen, carpets and standalone fabric. Exclude thermal/ultrasonic edge sealing and integrated spinning, knitting, dyeing, fibre splitting, coating, washing or heat setting. Sites performing these operations need an additional reviewed route inventory before claiming this profile. The foreground starts with cutting-ready fabric and ends at packed accepted cloth. Agricultural raw materials are outside this PET route; polymer/feedstock production and supplier textile processing are upstream. Consumer cleaning, laundering, distribution and end-of-life remain outside this manufacturing reference. No service life, wash-cycle count, health or regulatory approval is assigned.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-made-up-polyester-microfibre-cleaning-cloths |
| classification_refs | CPC 3.0 27190; narrower semantic subset, no accepted mapping asserted |
| covered_products | Reusable uncoated knitted PET microfibre cleaning cloths with sewn edges |
| excluded_products | Flotation articles; impregnated or nonwoven wipes; cotton and PET/polyamide cloths; household linen; thermal-sealed cloths; integrated textile mills |
| representative_product | Dry knitted polyester microfibre surface-wiping cloth with overlocked edge |
| production_route | Receipt of finished fabric; dry layout and cutting; thread edge sewing; inspection, internal rework and packing |
| market_state | Accepted dry factory-gate cloth, unimpregnated; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a reusable cloth for manual surface wiping |
| How much | 1 kg net accepted finished cloth at factory gate |
| How well | Actual product specification declares dimensions, fibre composition and fineness, knit structure, edge integrity and acceptance criteria; cleaning-service equivalence is not established |
| How long or cycle | One manufacturing delivery; no default use duration or laundering life |
| reference_flow_link | finished_cloth |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished dry knitted polyester microfibre cleaning cloth |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wiping article type; dimensions; textile body and thread PET composition; fibre fineness; knit structure; virgin/recycled content; incoming dye/finish state; sewn edge; residual moisture basis; net mass excluding packaging; acceptance criteria; site geography; period; packaging configuration |

Declare all qualifiers in the foreground data package. The product UUID remains unresolved; no fabric or fibre UUID establishes finished-cloth identity. A mass reference supports manufacturing intensity, not comparison of unlike cloth cleaning services.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted dry cloth net of packaging with a calibrated scale using cp_output. All rows use the same accepted output denominator. Declare conditioning and residual moisture; do not silently convert commercial mass to oven-dry mass. |
| lot_normalization | all inventory rows | Row-specific mass or energy | kg or MJ | Divide attributable batch exchanges by measured accepted cloth net mass in kg, retaining each numerator unit. Never divide by gross packaged mass or include rejects in accepted output. |
| electricity_conversion | cut_electricity; sew_electricity; pack_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain the public energy property and its energy unit group; metered kWh is converted with 1 kWh = 3.6 MJ. This does not represent heating fuel or change the electricity reference property. |
| area_count_conversion | finished_fabric; finished_cloth | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If source records use area or cloth count, collect matched lot net mass and area/count; derive measured mass per area or per cloth. Preserve the source property and conversion evidence; no assumed grammage or item weight. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished, dry, uncoated knitted PET microfibre fabric ready for mechanical cutting; declare supplier dyeing, splitting and finishing already performed |
| starting_condition_role | Upstream textile product input |
| product_classification_scope | Only the declared dry sewn-edge PET cleaning-cloth route within the wider made-up-textile category |
| recursive_input_rule | Incoming already made-up cleaning cloth is a separately declared purchased article for rework; link its upstream dataset and do not count it as new fabric production |
| upstream_dataset_requirement | Compatible PET/feedstock, yarn, knitting and supplier dyeing/finishing data, with recycled-content and geographic profiles matching the incoming fabric; sewing thread and packaging need their own upstream datasets |
| disclosure | Foreground site, reporting period, supplier fabric state, excluded stages, utility coverage, packaging, rework, losses and unresolved flow identities |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_entry | receipt_cut | Start foreground at receipt of cutting-ready fabric and retain upstream textile burdens as linked inputs, not duplicated foreground fibre production. | epa-textile-fabrication-2000 |
| boundary_gate | all processes | Include receipt/layout/cutting, sewing, inspection/rework, packing and attributable utilities and maintenance. Separate captured dust, exported waste and demonstrated environmental releases. | epa-textile-fabrication-2000 |
| boundary_wet_extension | route applicability | On-site fabric wet finishing, washing, fibre splitting or drying is outside this dry route. Require separate material, chemical, technosphere-water, wastewater-treatment and measured elementary-release inventories before extending it. No wastewater is presumed from dry cutting. | epa-textile-fabrication-2000 |
| boundary_completeness | dataset claims | This is a manufacturing foreground profile. A cradle-to-gate claim requires separately documented upstream datasets and transport links with complete declared coverage. Distribution, use and end-of-life are excluded and must not be silently added. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt_cut | Fabric receipt, layout and mechanical cutting | required | All covered cloths | Foreground forming; inspect fabric composition, arrange cutting pattern, segregate offcuts and captured dust | per 1 kg reference flow |
| edge_sew | Edge overlocking or hemming | required | All sewn-edge cloths | Foreground joining; add thread, inspect seams and record attributable lubrication and rework | per 1 kg reference flow |
| inspect_pack | Final inspection, dry rework and packing | required | All covered cloths | Foreground acceptance and delivery; measure net mass and separately issue actual packaging | per 1 kg reference flow |

Transfers of cut pieces and sewn cloth between these stages are internal, with lot counts/masses reconciled; they are not second product deliveries. Optional film/boxes, oil use, captured dust and releases are conditional exchanges within the stated stages, not mandatory process recipes. If another actual component, maintenance chemical or waste exists, add its chemically or physically specific exchange and measurement protocol before representing the site as complete.

### Process: Fabric receipt, layout and mechanical cutting (`receipt_cut`)

#### Inputs

##### Product flows

###### Finished knitted polyester microfibre fabric (`finished_fabric`)

Receive dry, uncoated, unimpregnated fabric ready for cutting. Declare PET fibre fineness, knitting construction, recycled content and supplier finishing state; no default recipe is imposed.

- Selected flow: Finished knitted polyester microfibre fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure batch fabric issued minus unused fabric returned to stock. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric`
- Sources:

###### Alternating current (`cut_electricity`)

For actual China grid-average customer supply below 1 kV only; cutting and extraction electricity. Other geography, voltage or contracted generation needs its own compatible identity. Preserve Net calorific value and Units of energy (93a60a57-a3c8-11da-a746-0800200c9a66).

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter attributable cutting electricity; convert measured kWh to MJ using 3.6 MJ/kWh. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cut_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Knitted PET fabric cutting offcuts (`pet_cutting_offcuts`)

One segregated uncoated fabric offcut stream. Internal re-cutting is not an exported waste; declare actual recipient and fate.

- Selected flow: Knitted PET fabric cutting offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh offcuts leaving the site, excluding internal reuse. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cut_waste`
- Sources: `epa-textile-fabrication-2000`

###### Collected PET fibre dust (`pet_collected_dust`)

Conditional on collection in filters or extraction equipment; weigh dust separately from offcuts. Captured dust remains a waste exchange, not an air emission.

- Selected flow: Collected PET fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure exported collected dust mass if present. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cut_waste`
- Sources: `epa-textile-fabrication-2000`

##### Elementary flows

###### Particulate matter, particle size unspecified (`airborne_particulates`)

Conditional on demonstrated uncaptured cutting dust released to air, unspecified subcompartment, during the reporting period; particle size unspecified. This is not PM2.5, long-term release, collected filter dust or wastewater solids. No emission is presumed and no factor is supplied.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use a documented mass-emission measurement or site-specific mass balance with capture evidence. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-textile-fabrication-2000`

### Process: Edge overlocking or hemming (`edge_sew`)

#### Inputs

##### Product flows

###### PET sewing thread (`pet_sewing_thread`)

One polyester sewing thread used for overlocking or hemming. Specify thread finish, linear density and PET composition; retail yarn excluding sewing thread is not interchangeable.

- Selected flow: PET sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh thread consumed from spool stock reconciliation. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thread`
- Sources:

###### Alternating current (`sew_electricity`)

For actual China grid-average customer supply below 1 kV only. Include attributable machine idle time; do not duplicate cutting or packing electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter attributable sewing electricity; convert measured kWh to MJ using 3.6 MJ/kWh. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sew_energy`
- Sources:

###### Mineral sewing-machine lubricating oil (`mineral_lubricating_oil`)

Conditional on mineral oil lubrication of the actual sewing machinery. Collect product specification and net make-up; initial equipment oil is not a recurring consumption estimate. A different lubricant requires its own row.

- Selected flow: Mineral sewing-machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure oil issued minus returned stock and inventory increase. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil`
- Sources: `epa-textile-fabrication-2000`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used mineral sewing-machine lubricating oil (`used_mineral_oil`)

Conditional on actual collected oil leaving the foreground site. Do not assume that all oil input becomes this waste; reconcile retained and lost oil and actual treatment.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh collected used oil exported during the reporting period. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil`
- Sources: `epa-textile-fabrication-2000`

##### Elementary flows

### Process: Final inspection, dry rework and packing (`inspect_pack`)

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Conditional on actual unlaminated polyethylene film packaging. Exclude multilayer, coated or non-PE film from this identity and add separately specified exchanges for any additional component.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh film issued minus returned stock. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Corrugated cardboard shipping box (`corrugated_box`)

Conditional on actual corrugated box packaging; declare recycled fibre fraction, flute, mass and incoming box state. Do not impose the fibre ratio of an unmatched database box.

- Selected flow: Corrugated cardboard shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh boxes attributable to accepted cloth batches. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Alternating current (`pack_electricity`)

For actual China grid-average customer supply below 1 kV only. Record inspection and packing electricity separately; manual operations may have no incremental machinery electricity but must disclose shared lighting attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter attributable inspection and packing electricity; convert measured kWh to MJ using 3.6 MJ/kWh. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished dry knitted polyester microfibre cleaning cloth (`finished_cloth`)

Accepted, unimpregnated cleaning cloth with completed sewn edge; net mass excludes all shipping packaging. Record actual cloth dimensions, textile body and thread composition, finishing state, residual moisture basis and acceptance criteria.

- Selected flow: Finished dry knitted polyester microfibre cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources:

##### Waste flows

###### Rejected sewn PET cleaning cloth (`rejected_cloth`)

Conditional on rejects discarded off site. Internal rework stays inside the boundary and must not count as a second accepted output. Saleable downgraded cloth is a separate co-product requiring attribution.

- Selected flow: Rejected sewn PET cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh discarded rejected cloth separately from cutting offcuts. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject`
- Sources:

###### Unlaminated polyethylene packaging film offcuts (`pe_film_waste`)

Conditional on clean PE film offcuts leaving the site. Not mixed plastic waste and not the packaging delivered with the accepted product.

- Selected flow: Unlaminated polyethylene packaging film offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh exported PE film offcuts. Per 1 kg reference flow; divide by matching accepted net cloth mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | shared production | First separate batches and meter subprocesses. If unavoidable, use measured load and logged runtime for electricity, and traced material issues for materials; document causal coverage and sensitivity rather than assume equal mass intensity across cloth sizes or seams. | ghg-product-allocation-2011 |
| allocation_coproduct | downgraded cloth or saleable offcuts | Decide waste versus co-product from actual quality, recipient and market records. If allocation cannot be avoided, justify a physical relation; only if unavailable justify another relation such as economic value at separation with sensitivity. No default price or burden-free credit. | ghg-product-allocation-2011 |
| allocation_rework | internal reuse and rework | Retain rework utilities and thread in the same batch; count each accepted cloth once. Record exported scrap treatment separately and do not subtract a speculative displaced-fabric credit. | |

The cited standard is used for general attribution reasoning; it does not make this cloth dataset a certified GHG inventory or prescribe an LCIA method. Foreground measured drivers remain necessary.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | inspect_pack | accepted net cloth | batch weighing | batch id; accepted net cloth mass; count; dimensions; conditioning; residual moisture; packaging tare | Weigh accepted dry cloth on calibrated scales excluding packaging; reject nonconforming lots | kg | each batch | complete declared reporting period | final acceptance site | per 1 kg reference flow | calibration certificate; acceptance and tare records |
| cp_fabric | receipt_cut | finished fabric | stock weighing | batch; supplier; PET composition; fibre fineness; recycled fraction; dye and finish state; fabric issued; returns | Weigh fabric issued and unused returns; reconcile stock and supplier specification | kg | each batch | complete declared reporting period | fabric receipt and cutting site | per 1 kg reference flow | scale calibration; material certificates; stock ledger |
| cp_thread | edge_sew | PET thread | stock weighing | batch; thread specification; spool gross and tare; opening and closing stock; returns | Reconcile weighed spool stock; distinguish seam thread from offcut thread | kg | each batch | complete declared reporting period | sewing station | per 1 kg reference flow | spool tare; stock and seam records |
| cp_cut_energy | receipt_cut | cutting electricity | meter reading | batch; submeter; opening and closing kWh; extraction runtime; location; voltage; allocation driver | Read cutting and extraction submeters; reconcile shared meter with actual logged runtime and measured load | kWh | each batch or metered shift | complete declared reporting period | cutting and extraction supply | per 1 kg reference flow | meter calibration; runtime and voltage evidence |
| cp_sew_energy | edge_sew | sewing electricity | meter reading | batch; machine meter; opening and closing kWh; sewing and idle runtime; location; voltage | Read sewing submeters including attributable idle; reconcile measured load and runtime for shared meters | kWh | each batch or metered shift | complete declared reporting period | sewing supply | per 1 kg reference flow | meter calibration; machine logs |
| cp_pack_energy | inspect_pack | inspection and packing electricity | meter reading | batch; meter; opening and closing kWh; packing runtime; lighting allocation; location; voltage | Read inspection and packing meters; disclose attributable shared lighting and avoid duplicate electricity | kWh | each batch or metered shift | complete declared reporting period | inspection and packing supply | per 1 kg reference flow | meter and allocation records |
| cp_cut_waste | receipt_cut | PET offcuts and collected dust separately | segregated weighing | batch; stream id; net offcut kg; separate net collected dust kg; internal reuse; recipient; fate | Weigh each segregated stream independently at export; subtract container tare; record internal reuse | kg | each removal linked to batch | complete declared reporting period | cutting waste export | per 1 kg reference flow | tare records; waste transfer receipts; filter cleaning log |
| cp_air | receipt_cut | uncaptured air particulate release | emission mass record | batch; dust source; measured mass; test duration; gas flow; capture efficiency; collection; particle size status; environment subcompartment | Use documented emitted mass measurements or measured site mass balance; distinguish concentration from emitted mass, captured dust and uncertain unmeasured loss | kg | representative operating test and reporting-period reconciliation | complete declared reporting period | actual air-release boundary | per 1 kg reference flow | test method; uncertainty; source and capture evidence; no default emission factor |
| cp_oil | edge_sew | mineral oil input and used oil separately | maintenance mass ledger | oil specification; batch attribution; make-up kg; returns; equipment oil stock change; collected used oil kg; recipient | Weigh mineral oil make-up and exported used oil independently; allocate recorded maintenance to represented production and reconcile retained oil | kg | each maintenance event and period reconciliation | complete declared reporting period | sewing maintenance | per 1 kg reference flow | oil product sheet; stock record; waste receipt |
| cp_pack | inspect_pack | PE film, carton and PE offcuts separately | component weighing | batch; component material; film laminate state; box fibre ratio and flute; issued mass; returns; separate PE offcuts mass | Weigh each component separately; reconcile film consumption with shipped film and offcuts; measure actual box mass and composition | kg | each packing batch | complete declared reporting period | packing station and waste export | per 1 kg reference flow | pack specification; scale tare; stock and waste records |
| cp_reject | inspect_pack | discarded rejects | acceptance mass ledger | batch; reject reason; rejected net kg; rework; downgraded sale; exported discarded kg; recipient | Weigh rejects separately; trace rework to one final acceptance record and distinguish downgraded sale from waste | kg | each batch and removal | complete declared reporting period | acceptance and waste export | per 1 kg reference flow | quality log; rework trace; waste receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | Divide attributable batch exchange by accepted net finished-cloth mass in kg; retain each exchange numerator unit. The final product row is 1 kg. | attributable batch exchange; accepted net mass; cp_output | exchange per 1 kg reference flow | |
| convert_electricity | cut_electricity; sew_electricity; pack_electricity | Convert measured kWh to MJ with 3.6 MJ/kWh before batch normalization; preserve the declared public energy property and unit group. | metered kWh; unit conversion; electricity protocol; cp_output | MJ per 1 kg reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | fabric, thread and cloth | Verify PET composition, knit and finishing state, fibre fineness and sewn-edge route. Separate virgin and recycled profiles; do not infer current formulation from a catalogue edition. | supplier certificate, product specification and route map |
| dq_mass_balance | all solid textile rows | Reconcile issued fabric and thread with accepted cloth, offcuts, collected dust, rejects, rework and stock change on the same moisture basis; investigate unexplained loss instead of treating it as emitted dust. | measured batch balance and uncertainty |
| dq_period | all rows | Use one declared period covering representative production, idle/rework and maintenance; disclose site/date, calibration, missing data and allocation fraction. No default throughput, temperature, energy or loss value. | dated records, meter and scale calibration |
| dq_release | airborne_particulates | No observed release is not proof of zero; document controls, test coverage and detection limits. Unknown emissions remain an explicit completeness gap. Preserve actual size and environmental medium; avoid double counting captured dust. | emission test, capture evidence and uncertainty |
| dq_upstream | fabric and packaging | Match supplier material, geography, processing state and recycled content; disclose all unlinked upstream stages and actual transport coverage. | upstream dataset references and supplier records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product and route | Require declared qualifiers and the dry knitted PET sewn-edge route; reject flotation, nonwoven, impregnated, blended-fibre or on-site wet-processing claims under this profile. | unsd-cpc3-notes-2025 |
| validate_reference | all rows | Require positive measured accepted net cloth mass excluding packaging, the finished_cloth link and common per-1-kg denominator; area/count inputs need traceable measured mass conversion. | |
| validate_balance | receipt_cut; edge_sew; inspect_pack | Require material and energy reconciliation including internal transfers and rework, not duplicated accepted output. Distinguish PET waste, collected dust and actual environmental release. | |
| validate_identity | UUID-bearing rows | Check public flow type, actual material, electricity geography/voltage, reference property and unit group. Blank UUIDs must remain disclosed; no search rank or fibre flow can establish product identity. | |
| validate_completeness | final dataset | Record each actual chemical, packaging component, utility, waste and release as one specific exchange; document conditional absence with evidence. Missing measurement or uncertain release cannot be represented as complete validation. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground inventory for dry sewn-edge knitted PET microfibre cleaning cloths |
| downstream_use | secondary_dataset; background_dataset only after review of represented product, technology and supply chain |
| allowed_use | Declared PET cleaning-cloth route and product configuration, combined with compatible upstream fabric/thread/packaging and disclosed transport |
| excluded_use | Entire broad classification; flotation safety claims; cleaning-service equivalence; lifespan or wash-cycle claims; automatically complete cradle-to-gate or cradle-to-grave footprint |
| required_metadata | qualifiers; factory and period; supplier processing state; PET/recycled profiles; accepted net output and moisture basis; stage utilities; packaging; upstream and transport links; conditional presence; unresolved identities |
| required_quality_disclosure | measurement and allocation coverage; material balance; missing/estimated exchanges; dust capture and release uncertainty; offcut/reject fate; excluded wet routes and use stage |
| update_trigger | Changes to fibre composition, knit, edge process, supplier finishing, recycled profile, site electricity, package, recovery route, new verified identity or measured operating evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed p.127, 2719/27190. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; cleaning cloths and flotation articles share a broad leaf, not a common process method |
| vileda-cleaning-cloths-2025 | handbook | Vileda Professional Export Product Catalogue 3/2025, PDF/printed p.12, MicroTuff Base. https://catalog.vileda-professional.com/assets/assets/common/downloads/publication.pdf | Knitted polyester cleaning-cloth market example; not a manufacturing recipe, default dimensions, wash lifetime, hygiene approval or universal regional composition |
| epa-textile-fabrication-2000 | official_guidance | US EPA, EPA 745-B-00-008, May 2000, section 4.2.4, printed pp.4-52–4-54 (PDF pp.115–117). https://ofmpub.epa.gov/apex/guideme_ext/guideme_ext/guideme/file/textile%20processing%20industry.pdf | Historical cutting/sewing and dust/scrap distinction only; not current compliance requirements or emission/consumption factors |
| ghg-product-allocation-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, Chapter 9, printed p.63 (PDF p.65), Tables 9.1/9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision and physical-relationship attribution logic; no certification or numerical allocation factor |
