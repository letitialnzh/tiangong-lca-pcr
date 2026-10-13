---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.whole-pelt-natural-fur-coat-manufacturing
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Whole-pelt natural fur coat manufacturing


## 1. Scope and Applicability

This method covers new whole-pelt natural fur coats made from purchased dry dressed hair-on skins by matching, skin-side cutting, sewing and lining assembly, with water-only blocking when used. The specified route has a finished 100% cotton lining, polyester sewing thread and steel hook-and-eye closures. It excludes headgear, accessories, blankets, artificial fur, hair-off leather, raw-skin dressing, remanufacture, knitted fur strips, letting-out, shearing, chemical garment cleaning, steam glazing and on-site dyeing. Such steps require an expanded process-specific inventory before this method is used. CPC is broader than this selected route. No default recipe, energy use, yield, warmth rating or lifetime is established. [Sources: `cpc30-notes`; `usu-fur-2025`; `fic-coat`].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.whole-pelt-natural-fur-coat-manufacturing |
| classification_refs | CPC 3.0 28320; narrower |
| covered_products | New lined whole-pelt natural fur coats in the declared material configuration. |
| excluded_products | All products and processing routes excluded in section 1. |
| representative_product | Unshorn whole-pelt coat, cotton lining, polyester seams and steel hooks; species and size declared. |
| production_route | Pelt receipt/matching → manual cutting → conditional water blocking/passive drying → powered fur-seam/lining sewing → inspection and paper-box packing. |
| market_state | Accepted dry conditioned finished coat, factory gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a specified natural fur outer garment. |
| How much | 1 kg net accepted finished coat output. |
| How well | Complete coat meeting the declared factory dimensional, seam, lining and closure acceptance specification; no certification inferred. |
| How long or cycle | One declared factory manufacturing reporting pool covering all included batches and cycles, failed work and rework; wearing life is outside this manufacturing basis and must be specified separately for service comparisons. |
| reference_flow_link | `finished_coat` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted whole-pelt natural fur coat |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species and farmed/wild origin; dressing and supplier dye state; dry moisture condition; pelt grade/hair state; whole-pelt technique; size mix; lining composition; thread; closure/coating; reinforcement; net output excluding packaging; site/period; outsourcing; supply geography/voltage. |

Declare every required qualifier in the dataset. The mass basis is a manufacturing accounting unit, not equal thermal or lifetime service.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net batch weighing of accepted conditioned coats, excluding packaging. Do not convert pelt count or garment count to mass without actual same-batch weighing. |
| `energy_identity` | `sewing_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain the public electricity reference property and energy unit; meter kWh and convert with exactly 3.6 MJ/kWh. Never rewrite the property as Mass. |
| `water_mass` | `blocking_water` | Mass | kg | Weigh water directly; volume readings require measured density at the recorded temperature, not an assumed density. Do not confuse product water, resource withdrawal, effluent and air vapour. |
| `vapour_mass` | `blocking_vapour` | Mass | kg | Calculate actual air-vapour mass from the independently measured liquid/moisture records in cp_water and water_balance; direct weighing of vapour is not required. Retain uncertainty, receiving air medium and investigation of negative/unexplained residuals; do not equate all supplied water with evaporation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry dressed hair-on skins and finished lining/components received at garment factory. All tanning, dyeing and supplier finishing already completed. |
| starting_condition_role | manufacturing_input |
| product_classification_scope | Narrower whole-pelt lined-coat route within CPC 3.0 28320; no accepted classification edge implied. |
| recursive_input_rule | Purchased same-category coat or preassembled shell must be separately declared as an intermediate with its upstream burden; do not recursively apply virgin-pelt input quantities or count that shell twice. Used coats are excluded. |
| upstream_dataset_requirement | If extending beyond this gate-to-gate boundary, link state/species/origin-compatible dressed-pelt, finished-fabric, component, electricity and water supply datasets, and actual transport. Farming/trapping, skin dressing and cotton/fibre production are upstream, not zero burden. |
| disclosure | Declare operations, incoming processing state, supplier boundaries, exclusions, outsourced sewing and wastewater handling. Do not label the foreground inventory complete cradle-to-gate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all processes | Include matching, cutting, actual rework, seam sewing, lining/closure assembly and acceptance/packing. Blocking is conditional; drying here is passive. Other chemicals, active dryers or steam operations require added explicit process and atomic exchanges before use. | `usu-fur-2025`; `fic-coat` |
| `boundary_releases` | site releases | Purchased water is a technosphere input. No washing bath or routine process effluent is assumed in this route. If blocking runoff is discharged, identify its actual receiving treatment, amount and chemistry separately; wastewater treatment is not direct freshwater emission. Meter site cleaning separately and disclose its boundary. |  |
| `boundary_end` | factory gate | Retail delivery, wearing, cleaning, cold storage by consumers and end-of-life are excluded; no longevity or avoided-product credit is claimed. Manufacturing transport and supplier modules must be disclosed if appended. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cut` | Receipt, matching and manual cutting | required | Declared new-coat route. | foreground_production | per 1 kg reference flow |
| `block` | Water-only blocking and passive drying | conditional | Actual water-only blocking is performed. | foreground_production | per 1 kg reference flow |
| `sew` | Fur-seam sewing and lining/closure assembly | required | Declared new-coat route. | foreground_production | per 1 kg reference flow |
| `pack` | Inspection, rework accounting and packing | required | Declared new-coat route. | foreground_production | per 1 kg reference flow |

All stage exchanges are normalized to the same accepted finished-coat net mass. Internal matched pelts, blocked panels and sewn shells are linked by batch travellers, not counted as extra external products. Quantities have no default values. Other actual exchanges must be individually added; absence needs records, not assumed zero.

### Process: Receipt, matching and manual cutting (`cut`)

#### Inputs

##### Product flows

###### Dry dressed natural hair-on furskin (`dressed_pelt`)

Issue pelts separately by species and grade; retain species, dressing, dye and moisture state and hair direction. Raw, salted, wet-white and wet-blue skins are not equivalent inputs.

- Selected flow: Dry dressed natural hair-on furskin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_material; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Waste flows

###### Dressed natural furskin cutting offcut (`fur_offcut`)

Weigh unsaleable dressed hair-on skin offcuts separately, recording species, dressing chemistry and receiving treatment. Reusable pieces are not automatically wastes.

- Selected flow: Dressed natural furskin cutting offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_waste; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:


### Process: Water-only blocking and passive drying (`block`)

#### Inputs

##### Product flows

###### Process Water (`blocking_water`)

For water-only blocking, weigh water sprayed onto the skin side and reconcile overspray and recovered water. This is purchased technosphere water, not elementary resource withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_water; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Elementary flows

###### water vapour (`blocking_vapour`)

Record only water actually evaporated and released to environmental air. Reconcile measured water against retained moisture, recovered liquid and drainage. The selected compartment is immediate air emission, unspecified; water, soil and long-term identities are not substitutes.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable air-vapour exchange calculated from measured water-balance records using cp_water per 1 kg reference flow; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:


### Process: Fur-seam sewing and lining/closure assembly (`sew`)

#### Inputs

##### Product flows

###### Finished woven cotton lining fabric (`cotton_lining`)

This route uses 100% cotton lining received in its supplier-declared dyed/finished state. Measure net issues and returns; the lining is not a cotton-growing input.

- Selected flow: Finished woven cotton lining fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_material; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Polyester sewing thread (`polyester_thread`)

Record finished polyester sewing thread consumed in fur and lining seams, including attributable spool losses. Filament polymer and non-sewing yarn are not substitutes.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_material; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Non-elastic woven cotton reinforcing tape (`cotton_tape`)

Include cotton hem reinforcement tape only when specified in the actual garment bill of materials; weigh net issues. Elastic tape is not a substitute.

- Selected flow: Non-elastic woven cotton reinforcing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_material; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Steel garment hook-and-eye fastener (`steel_hook`)

Include each specified steel hook-and-eye closure as one complete physical assembly; declare steel grade, plating and mass. Other closure types require their own atomic rows.

- Selected flow: Steel garment hook-and-eye fastener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_material; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`sewing_electricity`)

Apply this identity only to CN grid-average consumption supplied to the sewing workstation below 1 kV. Meter attributable idle loads too. Other geography or voltage requires a separately verified supply identity; preserve the public Net calorific value property.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_electricity; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources:

###### Mineral sewing-machine lubricating oil (`lubricating_oil`)

Include lubricant only when required by actual equipment maintenance. Record oil grade and net replenishment attributable to this batch; sealed maintenance-free equipment may document absence of this exchange.

- Selected flow: Mineral sewing-machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_material; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Waste flows

###### Cotton lining cutting offcut (`cotton_offcut`)

Weigh unsaleable cotton-cloth offcuts separately from fur, thread and oil, recording their receiving recycling or disposal route.

- Selected flow: Cotton lining cutting offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_waste; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Polyester sewing-thread waste (`thread_waste`)

Weigh waste thread ends and spool residues separately; no default loss percentage is assumed.

- Selected flow: Polyester sewing-thread waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_waste; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral lubricating oil (`spent_oil`)

Include only actual maintenance oil drainage; record attributable drained mass, contamination and waste destination. Drained oil is not equated with lubricant input.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_waste; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:


### Process: Inspection, rework accounting and packing (`pack`)

#### Inputs

##### Product flows

###### Paper box (`paper_box`)

Include only a cut, folded and laminated paper box matching the public identity; weigh net box mass and disclose fibre and coating composition. Coat net output excludes packaging; films and hangers require separate rows.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_material; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Accepted whole-pelt natural fur coat (`finished_coat`)

One kilogram of accepted conditioned net finished coat, including cotton lining, sewing thread, declared reinforcement tape and steel closures, excluding the paper box. Record net batch output, size mix and moisture state.

- Selected flow: Accepted whole-pelt natural fur coat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources:

##### Waste flows

###### Rejected natural-fur cotton-lined coat (`rejected_coat`)

Include only irreparably rejected finished coats sent as waste, retaining measured composite composition. Record actual rework inputs within the boundary; output is not accepted product before inspection.

- Selected flow: Rejected natural-fur cotton-lined coat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_waste; sum attributable quantities across the declared homogeneous reporting pool, including wholly rejected batches and rework, and divide once by that pool’s total accepted net finished-coat mass in kg under the declared reporting-pool calculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared equipment | Use batch submetering and separately weighed issues first. For unavoidable shared electricity, collect workstation operating and idle times and measured loads to justify attribution; record total and assigned quantities and residual. | `ghg-product-2011` |
| `allocation_offcuts` | saleable offcuts | Distinguish retained internal offcuts, externally saleable co-products and discarded waste. Internal reuse is an internal transfer. Avoid co-product allocation through subdivision; otherwise justify a physical relationship, or documented economic allocation when no physical basis is defensible. Disclose prices/period, masses, fractions and sensitivity; no automatic avoided-product credit. | `ghg-product-2011` |
| `allocation_upstream` | dressed pelts | Retain the upstream dataset allocation for animal production and dressing, documenting its scope and origin. Garment assembly does not establish agricultural co-product allocation by coat mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | pack | accepted finished output | weighing and acceptance record | batch; species; size; configuration; accepted net coat mass; moisture; rejects; packaging tare; reporting-pool ID; included batch IDs; wholly rejected batch and rework linkage | Weigh accepted complete conditioned coats on calibrated scale, excluding all packaging; reconcile batch acceptance and count for completeness only. Aggregate every included batch under normalize_batch; preserve native row units and use the same positive total accepted kg denominator. | kg | each batch and attributable maintenance event | declared representative reporting period covering all batches and rework | garment factory and declared sewing contractors | per 1 kg reference flow | calibration, travellers, acceptance, invoices and reconciliation worksheets |
| `cp_material` | cut; sew; pack | individual material issues | issue and return record | batch; row_id; supplier lot; composition; incoming state; issued mass; returned mass; reporting-pool ID; included batch IDs; wholly rejected batch and rework linkage | Calibrated weighing of each atomic material, thread spool before/after and box tare; reconcile stores and bill of materials. Aggregate every included batch under normalize_batch; preserve native row units and use the same positive total accepted kg denominator. | kg | each batch and attributable maintenance event | declared representative reporting period covering all batches and rework | garment factory and declared sewing contractors | per 1 kg reference flow | calibration, travellers, acceptance, invoices and reconciliation worksheets |
| `cp_water` | block | blocking water and vapour | water balance | batch; applied water mass; retained moisture change; recovered water; runoff; vent destination; reporting-pool ID; included batch IDs; wholly rejected batch and rework linkage | Weigh application container before/after; measure retained/recovered/discharged water independently; attribute evaporation only to water balance closure, retain uncertainty. Aggregate every included batch under normalize_batch; preserve native row units and use the same positive total accepted kg denominator. | kg | each batch and attributable maintenance event | declared representative reporting period covering all batches and rework | garment factory and declared sewing contractors | per 1 kg reference flow | calibration, travellers, acceptance, invoices and reconciliation worksheets |
| `cp_electricity` | sew | workstation electricity | meter reading | batch; CN geography; voltage; meter readings; run/idle time; measured loads; allocation fractions; reporting-pool ID; included batch IDs; wholly rejected batch and rework linkage | Read calibrated workstation meter; reconcile bills and shared-load assignment before converting kWh to MJ. Aggregate every included batch under normalize_batch; preserve native row units and use the same positive total accepted kg denominator. | kWh | each batch and attributable maintenance event | declared representative reporting period covering all batches and rework | garment factory and declared sewing contractors | per 1 kg reference flow | calibration, travellers, acceptance, invoices and reconciliation worksheets |
| `cp_waste` | cut; sew; pack | each separate waste stream | weighing and transfer note | batch; row_id; mass; composition; reuse status; recipient; treatment; rejects; maintenance period; reporting-pool ID; included batch IDs; wholly rejected batch and rework linkage | Weigh each identified stream independently; document delayed oil drain attribution and rework, never net waste mass against raw input. Aggregate every included batch under normalize_batch; preserve native row units and use the same positive total accepted kg denominator. | kg | each batch and attributable maintenance event | declared representative reporting period covering all batches and rework | garment factory and declared sewing contractors | per 1 kg reference flow | calibration, travellers, acceptance, invoices and reconciliation worksheets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | q_ref = Q_pool / M_accepted. Define one homogeneous reporting pool by site, period, species, supplied state and declared coat configuration/size mix. Q_pool sums each row’s attributable measured or calculated quantities in its native unit across every included batch, including wholly rejected batches, rework and attributable maintenance; exclude duplicate internal transfers. M_accepted is the sum of accepted net finished-coat kg from cp_output for the same pool, counting finally accepted reworked output once. Never divide a zero-output batch separately or omit its burdens. M_accepted must be positive; if the whole pool has no accepted output, retain absolute quantities, report normalization unavailable and require review, not zero or a fabricated denominator. | Q_pool; M_accepted; cp_output; batch and reporting-pool ledger | exchange per 1 kg reference flow |  |
| `electricity_conversion` | `sewing_electricity` | MJ = kWh × 3.6; use attributable measured electricity, retaining its public Net calorific value reference property. | kWh; cp_electricity | MJ |  |
| `water_balance` | `blocking_vapour` | Evaporated water = applied water minus retained moisture increase, recovered water and independently measured runoff; a negative residual or unexplained imbalance requires investigation, not zero clipping. | cp_water | batch air water-vapour mass before normalize_batch |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all batches | Keep species, incoming processing state, whole-pelt technique and complete bill of materials consistent; do not mix cotton and silk-lined configurations without separate records. | supplier declarations and batch travellers |
| `dq_balance` | all processes | Reconcile material issues, internal reuse, inventory change, accepted mass, rejects, separate wastes and water evaporation; identify losses, moisture effects and uncertainty without inventing emission factors. | weighing and utility reconciliation |
| `dq_coverage` | reporting period | Disclose site, actual dates, batch/size coverage, contractors, meter completeness, exclusions, allocation, identity gaps and data age. Do not replace missing records with zero. | production register and quality file |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `finished_coat` | Verify 1 kg complete accepted conditioned coat net output with all qualifiers and cp_output; dressed pelt, artificial fur and headgear cannot substitute for the coat. | `cpc30-notes` |
| `validate_rows` | all inventory rows | Require atomic identity, same accepted-output denominator, compatible public reference property/unit and attributable collection records. Every active exchange needs an amount; unresolved UUIDs are declared identity gaps, not automatic proxies. Verify pool membership and inclusion of wholly rejected batches; require positive M_accepted before producing any normalized result, and retain absolute inventories when no accepted output exists. |  |
| `validate_route` | block; sew | Check conditional blocking, oil and waste applicability against actual records; verify immediate air-vapour medium and CN <1 kV electricity. Any added chemical or effluent route needs explicit exchanges and treatment boundary before dataset acceptance. |  |
| `validate_balance` | batch records | Investigate mass/water residuals, output acceptance and rework; retain calibration and uncertainty. Factory quality acceptance does not establish health, legal or methodological approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground natural-fur coat manufacturing dataset. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After independent review, specified whole-pelt cotton-lined coat configuration at the declared site/period and input state. |
| excluded_use | Whole CPC coverage, thermal-service comparisons without performance/life data, raw-pelt dressing and any excluded route; complete cradle-to-gate claims without linked upstream evidence. |
| required_metadata | All reference qualifiers, batch net output, foreground boundary, supplier processing, contractor scope, water destination, grid geography/voltage, actual allocation and data period. |
| required_quality_disclosure | UUID gaps; unmeasured exchanges; sampling and uncertainty; exclusions; actual losses/rework; shared meters; upstream dataset limits; no scientific approval implied. |
| update_trigger | Change in species/origin, dressing/dye state, lining composition, coat design/size mix, joining route, utility supply or waste handling. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc30-notes` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.133, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification titles and adjacent exclusions only; no manufacturing method prescribed. |
| `usu-fur-2025` | extension_guidance | Cory Farnsworth, Sewing With Fur, Utah State University Extension, February 2025, https://extension.usu.edu/sewing/research/sewing-with-fur | Quality, Blocking, Cutting the Pattern and Sewing It Together; transferable pelt/seam mechanics. Its hat demonstration is not this coat; no quantities or life assumptions imported. |
| `fic-coat` | handbook | Fur Institute of Canada, Making a Fur Coat, https://fur.ca/fur-trade-2/making-a-fur-coat/ | Qualitative coat selection, trimming/assembly and lining; broader finishing variants are not all required here. No hours or industrial averages adopted. |
| `ghg-product-2011` | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard, 2011, Chapter9, p.63 (PDF p.65), Tables9.1/9.2, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical general allocation hierarchy applied by author judgment; no fur-specific factors or certification. |
