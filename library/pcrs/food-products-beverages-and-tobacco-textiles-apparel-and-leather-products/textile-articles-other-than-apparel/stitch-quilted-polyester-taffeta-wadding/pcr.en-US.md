---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.stitch-quilted-polyester-taffeta-wadding
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# One-sided stitch-quilted polyester taffeta and wadding

## 1. Scope and Applicability

This PCR covers dry, mechanically stitch-quilted piece goods made from one received finished plain-weave polyester filament taffeta face and one received high-bulk polyester wadding sheet, sewn with polyester continuous multifilament thread. The representative output is one-sided insulation material supplied in rolls for later garment lining conversion. Fibre origin, bonding auxiliaries and finishes are declared; “polyester” is not a claim that all non-fibrous constituents are PET. The commercial construction is supported by xmt-q1 and ptg-one-sided; stitch-route context by schmetz-quilting. These sources establish a bounded route, not an industry-average recipe.

Exclude made-up quilts, pillows, mattress assemblies, finished apparel, embroidery, felt and nonwoven manufacture, two-faced sandwich goods, other-fibre constructions, adhesive-only or thermally fused quilting, foam filling, coating, washing, dyeing and heat setting within the converting site. Such routes require separate methodological assessment and explicit process expansion. CPC 3.0 27999 is broader than this scope; this record does not establish full classification coverage. No service life, thermal performance equivalence, health claim or compliance approval is assigned.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.stitch-quilted-polyester-taffeta-wadding |
| classification_refs | CPC 3.0: 27999; narrower semantic scope reference, no accepted mapping implied |
| covered_products | One-sided stitch-quilted polyester taffeta and wadding |
| excluded_products | Two-faced or mixed-fibre quilting; fused or glued bonding; made-up articles; upstream fabric and batting formation |
| representative_product | One-sided stitch-quilted polyester taffeta and wadding |
| production_route | Receipt and unwinding; layer alignment; multi-needle sewing; edge trimming; inspection; winding; actual packing; conditional attributable maintenance |
| market_state | Accepted intermediate piece goods in rolls, face fabric on one side, exposed wadding on the other |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Sewn polyester lining material at the converting gate |
| How much | 1 kg net accepted quilted textile, excluding packaging |
| How well | Declared taffeta, wadding and thread specification; intact layer connection, accepted width, pattern, seam appearance and defect criteria from customer specification |
| How long or cycle | One production period at the manufacturing gate; no use-phase duration or thermal-service functional equivalence |
| reference_flow_link | finished_roll |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | One-sided stitch-quilted polyester taffeta and wadding |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | one-sided construction; taffeta weave and fibre composition; wadding fibre composition, bonding route and loft; additives and finishes; virgin/recycled origin and evidence; thread grade and linear density; stitch type, pattern and density; accepted width, length and measured complete-product areal mass; net mass and conditioning state; customer acceptance criteria; site, voltage and production period; packing and outsourced operations |

Declare all qualifiers in the foreground dataset. The blank product UUID is an explicit identity gap, not permission to substitute generic fabric or a made-up quilt.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished_roll | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted conditioned textile rolls on calibrated scales; subtract measured core and wrapping tare. Sum net accepted output for the period; exclude rejects and count reworked saleable output only once. |
| area_mass | finished_roll | Mass / Area | kg; m2 | Use measured complete-product net mass divided by measured accepted area. Wadding-only nominal g/m2 is not composite areal mass; width and length must describe accepted trimmed output. This complete-product ratio applies only to finished output. For taffeta_input and wadding_input, keep separately measured actual kg; any area conversion must use that input’s own measured supplied-state areal mass, issued/returned area and loss records, never the composite output ratio. |
| electricity_conversion | quilting_electricity; finishing_electricity | Net calorific value | MJ | Retain the public flow reference property. Convert calibrated-meter kWh to MJ using 1 kWh = 3.6 MJ; record meter scope and allocation. |
| basis_consistency | all inventory rows | Row-specific property | Row-specific unit | Use one net accepted textile mass and period for all exchanges. Area and roll count are supplementary and never replace the kg denominator without measured mass conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished dyed polyester taffeta, formed polyester wadding and sewing-grade polyester thread received at the converting site |
| starting_condition_role | Purchased or transferred intermediate products; no raw fibre transformation in this foreground |
| product_classification_scope | One-sided mechanically sewn polyester piece goods within broader CPC 27999 |
| recursive_input_rule | Received same-category quilted goods are a separate input with upstream dataset; include only subsequent in-scope work, never repeat completed quilting |
| upstream_dataset_requirement | Link separate representative taffeta (including weaving and dyeing), wadding (including fibre and bonding), sewing thread, electricity, oil, packaging and off-site treatment datasets. Fibre feedstock agriculture, if present outside this all-polyester route, is not foreground converting. |
| disclosure | Foreground gate-to-gate only; disclose subcontract sewing, transport links, upstream omissions, exclusions, meters, waste destinations and unresolved identities. It is not complete cradle-to-gate without documented upstream and transport linkage. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_dry_route | quilting; finishing | Include receipt, unwinding, layer feeding, sewing, attributable compressor and extraction electricity, inspection, trimming, winding and actual packing. Meter actual operations; do not use machine ratings as inventory. | mammut-vmk |
| boundary_finishing | Foreground | The supplied taffeta is already dyed and finished. No wet finishing wastewater or combustion emission is assumed. If washing, coating, thermal bonding or boiler operation occurs, this bounded route is insufficient and separate processes, atomic exchanges and measured releases are required before use. | ptg-one-sided |
| boundary_transfers | quilted_intermediate_out; quilted_intermediate_in | Pair the internal transfers and cancel them only when combining the matching processes. Link outsourced operations as separately documented inputs; do not silently exclude them. |  |
| boundary_actual_exchanges | Foreground support and packing | These cards define the stated route, not an exhaustive site inventory. Add one chemically or physically specific row for each actually consumed needle, replacement filter, distinct lubricant, other packaging component or generated packaging scrap. Collect its quantity, upstream or treatment linkage and identity; do not silently omit observed exchanges or replace them by collection labels. Reconcile packaging and maintenance balances separately from textile mass. No default cut-off is assigned. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| quilting | Receipt, layer feeding and sewing | required | All in-scope products | Foreground stitch assembly | per 1 kg reference flow |
| finishing | Trimming, inspection, winding and packing | required | Packing components only when used | Foreground finalization | per 1 kg reference flow |
| maintenance | Attributable oil maintenance | conditional | Actual mineral oil use or collected spent oil | Foreground support | per 1 kg reference flow |

### Process: Receipt, layer feeding and sewing (`quilting`)

#### Inputs

##### Product flows

###### Dyed plain-weave polyester filament taffeta (`taffeta_input`)

Receive fully woven and finished polyester taffeta; declare dyeing state, finish, width, areal mass and supplier lot. Weaving and dyeing are upstream, not repeated in this dry conversion process.

- Selected flow: Dyed plain-weave polyester filament taffeta
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### High-bulk polyester fibre wadding sheet (`wadding_input`)

Record one purchased formed polyester wadding sheet, including bonding route, loft, fibre origin and any binder or finish. It is not loose PET fibre or compact filter fabric. Binder chemistry and non-fibrous content must be disclosed separately from fibre composition.

- Selected flow: High-bulk polyester fibre wadding sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Continuous multifilament polyester sewing thread (`thread_input`)

Record the actual sewing-grade polyester needle and looper thread of the same specified product. If different grades are used, split the exchange into separate atomic rows. Record linear density, twist and finish; raw filament yarn is not interchangeable.

- Selected flow: Continuous multifilament polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `schmetz-quilting`

###### Alternating current (`quilting_electricity`)

Apply this identity only to CN grid-average consumption supply below 1 kV. Meter unwinding, sewing, extraction and attributable compressor electricity; subtract electricity reported in finishing or maintenance. Other regions, voltage levels and captive generation require separate verified flows. Machine ratings do not establish consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered kWh multiplied by 3.6 MJ/kWh, divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uninspected one-sided stitch-quilted polyester taffeta and wadding (`quilted_intermediate_out`)

Weigh the internal roll transferred to finishing. This transfer is not an additional marketable product and cancels against the matching finishing input in an aggregated dataset.

- Selected flow: Uninspected one-sided stitch-quilted polyester taffeta and wadding
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources:

##### Waste flows

###### Polyester sewing-thread trimmings (`thread_waste`)

Collect cut thread and sewing start-up rejects separately, with actual destination. Do not assume recovered thread offsets virgin thread input.

- Selected flow: Polyester sewing-thread trimmings
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Captured polyester fibre dust (`captured_dust`)

Conditional: weigh removed polyester dust from dry collection. Add separate identities for contaminated filter media if replaced; no environmental release is inferred from collection.

- Selected flow: Captured polyester fibre dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Polyester fibre particulate emitted to air, unspecified subcompartment (`pet_dust_air`)

Conditional: report only actual uncontained polyester fibre dust released across the site boundary, supported by monitoring or a validated material balance. Captured dust is waste, not an air emission. No emission factor, particle-size fraction or routine emission is assumed.

The selected identity is the size-unspecified particulate emission class to air, unspecified. Retain actual polyester-source material composition, monitoring, controls and release evidence as process qualifiers. This identity supplies no specific polymer chemistry, size distribution, default amount or microplastic characterization factor; assess exact-flow/LCIA coverage. If measured size or receiving subcompartment is established, use its matching verified identity instead.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Trimming, inspection, winding and packing (`finishing`)

#### Inputs

##### Product flows

###### Uninspected one-sided stitch-quilted polyester taffeta and wadding (`quilted_intermediate_in`)

Use the same lot, conditioned mass and physical identity as quilted_intermediate_out.

- Selected flow: Uninspected one-sided stitch-quilted polyester taffeta and wadding
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources:

###### Alternating current (`finishing_electricity`)

Only CN grid-average user supply below 1 kV; measure inspection, edge trimming, winding and packing electricity separately from sewing.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered kWh multiplied by 3.6 MJ/kWh, divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`ldpe_wrap`)

Conditional: record actual LDPE roll wrapping issued, including packaging scrap. This identity does not cover PVC, multilayer barrier film or polymer resin. Packaging is additional to net textile reference mass.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Cardboard tube or Paper core (`paper_core`)

Conditional: record paperboard winding cores actually delivered. Measure core tare separately; disclose reuse cycles from tracked returns rather than an assumed lifetime.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### One-sided stitch-quilted polyester taffeta and wadding (`finished_roll`)

Accepted saleable one-sided quilted piece goods after trimming and inspection, with the declared two-layer construction and stitching, excluding core and wrapping.

- Selected flow: One-sided stitch-quilted polyester taffeta and wadding
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources:

##### Waste flows

###### Stitched polyester taffeta-wadding composite offcuts (`composite_offcuts`)

Record composite edge trims and rejected lengths of this one construction; declare retained thread and actual disposal or recycling destination. Do not combine loose thread or contaminated oil.

- Selected flow: Stitched polyester taffeta-wadding composite offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Attributable oil maintenance (`maintenance`)

#### Inputs

##### Product flows

###### Mineral-base sewing-machine lubricating oil (`mineral_oil`)

Conditional: only when the actual maintenance product is mineral-base oil. Record grade, additives, replenishment and machine scope. Synthetic PAO lubricant is not this identity and requires a separate row.

- Selected flow: Mineral-base sewing-machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent mineral-base sewing-machine lubricating oil (`spent_oil`)

Conditional: quantify actual collected spent oil separately from replenishment, water and contaminated absorbents. Document composition and licensed destination where applicable; no fixed oil loss is assumed.

- Selected flow: Spent mineral-base sewing-machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable batch exchange divided by matching net accepted textile kg, per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | Each product batch | First assign separately metered sewing, material issues and rejects to the actual product batch. For shared machine electricity and support, use measured run-time with observed operating-state power or submetered energy, reconcile to the site total and disclose idle/changeover assignment. If products differ in stitch density or loft, mass-only energy allocation requires empirical justification. |  |
| allocation_scrap | Scrap and rework | Keep all rejected production burdens with accepted product unless a documented co-product function requires subdivision or allocation. Scrap sale alone does not justify avoided virgin production credit. Record recovered offcuts and their treatment without double counting internal reuse; disclose any multi-output allocation basis, prices, period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | quilting | taffeta_input; wadding_input; thread_input | Mass issues | lot; composition; finish; origin; issue_kg; returns_kg; opening_and_closing_stock; accepted_output_kg | Calibrated weighing and lot-linked issue ledger; reconcile issues, WIP and accepted output | kg | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |
| cp_output | finishing | finished_roll | Accepted net mass | roll_id; gross_kg; measured_tare_kg; net_kg; width_m; length_m; complete_areal_mass; conditioning; defects ; reporting-period pool ID; same product construction/grade; failed and zero-output batch IDs; rework origin and final accepted roll IDs | Weigh every accepted roll; measure accepted area; inspect layer connection and seam defects against declared customer criteria  Reconcile every batch, including wholly failed batches, to the same product/period pool; retain zero-output batch activity for numerator attribution and count finally accepted rework once. Aggregate accepted net mass over this pool for normalize_batch. | kg; m2 | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |
| cp_transfer | quilting; finishing | quilted_intermediate_out; quilted_intermediate_in | Internal mass transfer | lot_id; transfer_kg; WIP_kg; conditioning; source_and_receiving_process | Paired calibrated scale records on a common conditioning basis | kg | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |
| cp_energy | quilting; finishing | quilting_electricity; finishing_electricity | Electricity meter | meter_id; opening_kWh; closing_kWh; voltage; region; machine_state; run_time; compressor_and_extraction_allocation; accepted_output_kg | Read calibrated submeters for matched batches; independently reconcile support energy to site meters | kWh; MJ | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |
| cp_pack | finishing | ldpe_wrap; paper_core | Packaging mass | component_grade; issue_kg; scrap_kg; tare_kg; tracked_returns; accepted_output_kg | Weigh each packaging component separately and reconcile actual issues and reusable core returns | kg | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |
| cp_waste | quilting; finishing | thread_waste; composite_offcuts; captured_dust | Waste mass | stream_identity; generated_kg; returned_kg; destination; transport; contamination; accepted_output_kg | Separate calibrated container weights and destination receipts; do not combine unlike wastes | kg | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |
| cp_emission | quilting | pet_dust_air | Conditional monitored release | material_identity; sampling_method; duration; actual_air_volume; concentration; capture_boundary; subcompartment; uncertainty; accepted_output_kg | Use measured representative release over the reporting period; demonstrate particle identity and convert concentration with measured airflow and duration; record absence evidence separately from missing data | kg | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |
| cp_maintenance | maintenance | mineral_oil; spent_oil | Oil mass records | grade; mineral_base; issue_kg; removed_oil_kg; contamination; machine_service_time; allocation; destination; accepted_output_kg | Weigh replenishment and removed oil independently, retain supplier and service records and assign maintenance to actual machine service output | kg | Each batch; reconcile each reporting period | Complete declared period including starts, stops, rejects and rework | Declared converting site and attributable outsourced operation | per 1 kg reference flow | Calibration, batch ledger, raw records, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | Define one documented reporting-period pool for the same declared product construction, grade, site and conditioning; include all attributable startup, shutdown, wholly failed batches, rejects and rework. For each exchange j, normalized amount = sum of attributable measured exchange j across that pool / total net accepted textile mass in kg from the same pool. Count reworked product only once when finally accepted; rejected product is not accepted output, while its attributable exchanges remain in the numerator. Do not normalize a wholly failed batch by its zero output, omit its burden or average per-batch ratios. If the complete pool has no positive accepted output, retain the unnormalized inventory and require review; do not fabricate output or a per-kg result. Do not pool unrelated products, divide by gross packed-roll mass or double count internal transfers. | cp_material; cp_output; cp_transfer; cp_energy; cp_pack; cp_waste; cp_emission; cp_maintenance | Exchange unit per 1 kg reference flow |  |
| electricity_conversion | quilting_electricity; finishing_electricity | Electricity in MJ = metered electricity in kWh multiplied by 3.6; then apply normalize_batch. This exact unit conversion is not an energy-intensity assumption. | cp_energy; cp_output | MJ per 1 kg reference flow |  |
| area_reporting | finished_roll | Accepted area = sum of accepted width multiplied by accepted length; complete-product areal mass = net accepted textile kg / accepted m2. If only area statistics exist, weigh representative full-construction samples and validate roll mass conversion. Never use wadding-only g/m2 as total product mass. | cp_output | m2 and kg/m2, supplementary to kg reference | xmt-q1 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | finished_roll; taffeta_input; wadding_input; thread_input | Retain composition, finished incoming state, bonding auxiliaries, supplier lots, actual seam construction and customer acceptance records; fibre recycled content requires traceable evidence. | cp_material; cp_output |
| dq_complete | all inventory rows | Reconcile textile issues, accepted mass, rejects, WIP, captured dust and any demonstrated release on consistent moisture bases. Declare residual imbalance and investigate it; never force a fabricated closure or zero emission. | cp_material; cp_transfer; cp_waste; cp_emission |
| dq_temporal | Site records | Use one representative complete production period and report actual dates, technology, capacity utilisation, starts/stops, batch mix and missing coverage. No literature recipe, energy, temperature or yield is a default. | cp_energy; cp_output |
| dq_uncertainty | Measurement and linkage | Retain calibration and uncertainty, checks on area-to-mass conversion, upstream representativeness, allocation sensitivity and all unresolved UUIDs. Missing records differ from not-applicable operations. | cp_output; cp_energy; cp_waste |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | finished_roll | Reject use outside the one-sided polyester sewn route; require all declared qualifiers and actual customer acceptance. Do not infer apparel compliance or thermal equivalence from the intermediate textile record. |  |
| validate_basis | all inventory rows | Require positive net accepted kg, measured tare, common conditioning, paired internal transfers and reproducible normalized exchanges. Compare total composite areal mass with direct roll weighing; do not use a nominal wadding grade as the denominator.  Verify complete same-product period-pool numerator coverage, including wholly failed batches, and one matching positive accepted-mass denominator. A zero-output pool remains unnormalized and requires review; averaging batch ratios or dropping failed-batch exchanges is prohibited. | xmt-q1 |
| validate_identity | Public flows and unresolved rows | Verify public flow type, referenced property, unit, geography, voltage, material and incoming state before use. Blank UUIDs remain exact named exchanges and block claims of fully linked inventory; identity resolution does not approve methodology. |  |
| validate_emissions | pet_dust_air; captured_dust | Separate elementary airborne release from captured waste and technical water. No wet-processing wastewater or combustion emissions are mandatory in this dry route; actual additional operations require complete process additions and verified exchange identities. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dry quilting conversion dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to declared garment lining or other compatible downstream piece-goods conversion, with matching construction, geography, period and upstream linkage |
| excluded_use | Whole CPC coverage; cradle-to-gate without upstream and transport completeness; finished apparel or quilt LCA; thermal-service comparison; unmeasured recipe or life-cycle claims |
| required_metadata | Qualifiers; net reference mass; boundary start; site and dates; meters; input upstream datasets; waste destinations; allocation; outsourced processes |
| required_quality_disclosure | Measurement uncertainty; actual composition and mass closure; sampling; omitted operations; UUID gaps; upstream completeness; scientific review state |
| update_trigger | Change of layers, fibre origin, finish, sewing pattern, site supply, machinery, upstream source, waste route or evidence of material measurement error |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.130, 27999. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Broad category name only; no specific route or methodology prescription |
| xmt-q1 | handbook | XM Textiles: Quilted fabric, 1-sided (Q1), undated technical data sheet, p.1. https://www.xmtextiles.com/workwear-fabrics/tds/Quilted-fabric-1-sided-Q1-TDS%20-XMT.pdf | One-sided polyester taffeta/wadding commercial construction; distinguish wadding mass from total composite mass. Indicative listed specifications are not PCR defaults or compliance approval. |
| ptg-one-sided | handbook | Polish Textile Group: ONE-SIDED QUILTED FIBRE, undated product description, Description and Characteristics. https://polishtextilegroup.com/produkty_page/one-sided-quilted-fibre-en/ | Independent statement of sewn polyester taffeta/high-bulk nonwoven construction; no health or certification claims adopted |
| schmetz-quilting | handbook | SCHMETZ Sewing Focus: Quilting, undated technical sewing information, PDF p.1 and pp.2-5. https://www.schmetz.com/mm/media/en/web/7_tochtergesellschaften/bilder_18/schmetz/pdfs_4/sewing_focus/SewingFocus_40_3075-36_Quilting_D.pdf | Multi-needle yard goods, sewing-grade multifilament polyester thread and seam-defect inspection context; not default stitch density or mandatory needle schedule |
| mammut-vmk | handbook | Mammut: VMK Double Chainstitch-Multi-Needle Quilter, undated manufacturer page, material-roll feeding and thread-cutter features, Electrical/Mechanical Data. https://www.mammut.de/en/double-chainstitch-multi-needle-quilter-mammut-vmk | Roll feeding, sewing, thread cutting and compressor support on one machine; rated data are not measured energy, throughput or a universal route requirement |
