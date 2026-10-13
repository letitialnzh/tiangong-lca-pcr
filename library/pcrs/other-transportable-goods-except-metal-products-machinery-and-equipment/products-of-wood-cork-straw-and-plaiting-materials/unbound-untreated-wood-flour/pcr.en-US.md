---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.unbound-untreated-wood-flour
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Unbound untreated wood flour from dry waste sawdust

## 1. Scope and Applicability

This method covers a dedicated, unheated electrical milling and screening route using already dry, clean, untreated waste sawdust to produce loose wood flour for a declared filler application. Flour grades remain distinct by species, particle-size distribution and moisture. Wood wool/excelsior consists of long slivers and has different handling, geometry and intended functions; it is not an alternative reference product or a flour blend. The common classification label does not establish physical interchangeability (`hmrc-wood-classification`, `clemons-wood-flour-2005`).

Exclude wood wool, pulp/refined long fibers, chips, particleboard furnish, bonded boards, polymer compounds, chemically treated flour and fuel pellets. Onsite thermal drying, wet washing, chemical treatment or combustion require a separately assessed expanded route; upstream sawdust drying remains in the supplier dataset. No lifetime equivalence to an insulation panel, packaging cushion or finished composite is asserted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.unbound-untreated-wood-flour |
| classification_refs | CPC 3.0 31220; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Untreated unbound flour from dry waste sawdust, one declared filler grade |
| excluded_products | Wood wool; long fibers; bonded or chemically treated products; thermally dried onsite routes |
| representative_product | Loose mechanically milled wood flour at bulk dispatch |
| production_route | Receipt; electrical milling; screening; dry dust capture; bulk handling |
| market_state | Unbound powder, moisture and size grade declared; no binder or chemical treatment |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply wood flour as a material filler of a declared grade |
| How much | 1 kg net accepted wood flour at dispatch moisture |
| How well | Conform to declared species, sieve distribution and contamination limits, without bonding or chemical treatment |
| How long or cycle | One production and bulk dispatch cycle; no service-life claim |
| reference_flow_link | `flour_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | particle size distribution and sieve opening/standard; length/width/aspect-ratio description; dispatch moisture with wet/dry basis and test method; species/species mixture; untreated/no binder confirmation; filler grade/intended use; input origin/waste status; dust destinations; milling/screening route; bulk dispatch; site, production period and product provider; electrical supply voltage and geography |

Declare every required qualifier in the dataset metadata or reference-flow comment. Net reference mass excludes containers and transport packaging; bulk dispatch is the declared market state. Neither a sieve mesh number alone nor the word “wood” establishes a grade. The selected Wood material record is a foreground material locator with species, product form, dimensions, treatment, moisture, production route and provider unspecified. It is physically restricted here to one actual clean, untreated, unbound wood-flour filler grade at the bulk-dispatch gate. The required qualifiers and measured batch mass establish that concrete reference; this UUID does not verify a wood-flour supplier background, environmental burdens, compliance, strength or collected quantity. Another wood form, grade or gate is not interchangeable merely because it can use the same broad material UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net flour at measured dispatch moisture; collect net output and moisture with cp_material. All inventory rows use per 1 kg reference flow. |
| `moisture_basis` | sawdust_input; flour_output; oversize_return; oversize_reinput; captured_dust_return; captured_dust_reinput; dust_waste; screen_reject | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve both wet mass and oven-dry wood mass. MC_db = water mass / oven-dry wood mass; m_dry = m_wet / (1 + MC_db), using MC_db as a fraction. A wet-basis fraction w gives m_dry = m_wet * (1 - w). Never substitute an assumed moisture target (`usda-wood-handbook-2021`). |
| `electricity_unit` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the database energy property for electricity; convert metered kWh to MJ with 3.6 MJ/kWh. This is electrical energy, not fuel heat or steam enthalpy. |
| `particle_bins` | pm25; pmcoarse; pmover10 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert cumulative measurements into nonoverlapping bins only for the same sampling boundary, duration and control condition. PM2.5-10 = PM10 - PM2.5; PM>10 = total PM - PM10. Retain source totals as evidence, not extra exchanges. Negative differences require investigation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry clean untreated waste sawdust received at flour plant; verified moisture suitable for unheated milling |
| starting_condition_role | Foreground collection gate; upstream origin and drying are not erased |
| product_classification_scope | Only the wood flour subset of CPC 31220 and the declared route |
| recursive_input_rule | Record purchased flour of the same grade with its own supplier dataset; stop foreground recursion at the supplier gate, not by treating its burden as zero |
| upstream_dataset_requirement | Traceable waste-sawdust origin, supplier drying/transport, allocation and electricity background; documented waste cut-off or co-product burden |
| disclosure | Site, dates, species, moisture, waste status, dust controls/destinations, foreground gate and upstream burden choices |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | all inventory rows | Include receipt, grinding, screening, dust control, handling and attributable maintenance electricity. This route has no onsite fuel use, thermal drying or bonding; reject that route mismatch rather than hide exchanges. | `clemons-wood-flour-2005` |
| `b_returns` | oversize_return; oversize_reinput; captured_dust_return; captured_dust_reinput | Internal transfers are recorded at equal amounts on both ends and cancel in the aggregated foreground boundary. They are neither external feed nor saleable output; repeated passes still consume measured electricity. |  |
| `b_carbon` | sawdust_input; flour_output; dust_waste; screen_reject; pm25; pmcoarse; pmover10 | Keep a physical dry-wood and biogenic-carbon account. Do not add photosynthetic uptake again if supplied upstream, and do not delete real biogenic CO2 emissions because a climate indicator excludes them. No onsite combustion is permitted in this route. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flour_mill` | Receipt, milling, screening, dry dust collection and bulk dispatch | required | Dedicated unheated electrical flour route | Aggregated foreground; stage measurements retained | 1 kg net accepted flour |

Stages: receipt → milling → screening → accepted bulk flour. Screening oversize returns to milling. Captured dust returns only if approved; the remainder has a documented disposal destination. Dust emitted to air is measured after capture, separately from either captured-dust destination. The four records in the internal stage ledger below are diagnostic handoffs within this aggregate, not external product inputs or outputs. Their qualified material states use the same verified wood-material locator without becoming accepted flour, an external purchase or a saleable product. Repeated passes consume measured electricity; internal quantities cancel only in the aggregate material boundary.

### Internal Stage Collection Ledger

These four stable record IDs retain separate oversize and captured-dust routing within the single flour_mill foreground. One homogeneous untreated wood material crosses each handoff; the broad locator has no fixed particle grade, form, moisture or provider. Qualify each record by actual species, particle distribution/morphology, contamination acceptance, moisture and stage. Do not infer equal grades or an external supplier link from the shared UUID. Keep raw wet mass, dry mass and water mass, stocks and both end measurements before any burden allocation; these records are not rows in the external process inventory.

| record_id | pair_id | stage_role | material_identity | property_unit | raw_fields_and_scope | quantity_reconciliation | collection_protocol |
| --- | --- | --- | --- | --- | --- | --- | --- |
| oversize_return | oversize_pair | Screening outlet to milling return | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | Actual untreated oversize wood powder; species, sieve distribution/morphology, moisture, stocks and matched routing | Measured campaign total/B for diagnostic reporting; wet/dry wood and water mass equals oversize_reinput; not accepted flour or external output | cp_returns |
| oversize_reinput | oversize_pair | Return received at milling inlet | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | Same oversize material, measured at receiving end in same stage/campaign; keep any intermediate stock change | Same matched wet/dry wood and water quantities as oversize_return; internal transfer cancels, not extra purchased feed | cp_returns |
| captured_dust_return | captured_dust_pair | Capture outlet to approved milling return | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | Actual untreated captured wood powder; species, particle distribution/morphology, moisture, contamination and same-grade reuse approval; one destination per portion | Measured campaign total/B for diagnostic reporting; wet/dry wood and water mass equals captured_dust_reinput; separate disposed dust and emitted PM | cp_returns |
| captured_dust_reinput | captured_dust_pair | Approved captured powder received at milling inlet | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | Same approved material, measured receiving end and stage; matched stocks and routing | Same matched wet/dry wood and water quantities as captured_dust_return; cancels internally, no purchase or additional accepted flour | cp_returns |

### Process: Receipt through bulk dispatch (`flour_mill`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Applies only to grid-average consumption at less than 1 kV; meter receipt and any onsite transformer losses separately. The raw supply geography is CN; actual provider, geography, production period, grid mix and delivery-loss compatibility remain to be verified, without a China or global background default. Another voltage, geography or supply route requires separately reviewed identity/background compatibility.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect attributable quantity under cp_energy, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Lubricating oil (`lubricating_oil`)

Conditional petroleum-derived machine lubricant replenishment; record mass, not its calorific value. A different lubricant chemistry requires its own atomic row.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_oil, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oil`

##### Waste flows

###### sawdust waste (`sawdust_input`)

Incoming dry, clean, untreated waste sawdust for material recovery, not wood fuel; retain supplier origin, moisture, species and upstream burden evidence. The selected untreated combustion/recovery record is restricted to its actual material-recovery branch, with the incoming waste state and supplier recovery boundary verified; it does not prescribe combustion or a boiler burden.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_material, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

#### Outputs

##### Product flows

###### Unbound untreated wood flour (`flour_output`)

Accepted clean, untreated, unbound bulk wood flour for one filler grade at the plant dispatch gate; the only accepted reference output. Record actual species/mix, particle-size distribution and sieve standard, particle morphology, dispatch moisture and net accepted batch mass, with no binder, polymer matrix or chemical treatment. The broad foreground Wood material identity is restricted to that measured product state; provider production route and background compatibility remain unresolved until independently checked. It supplies no default mass, flour grade, yield, burden or functional performance. Internal returns retain their separate product states and are not additional accepted flour outputs.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

##### Waste flows

###### Captured untreated wood flour dust for offsite disposal (`dust_waste`)

Record only collected dust dispatched for treatment, separately from returned dust and airborne release; destination and treatment dataset are required.

- Selected flow: Captured untreated wood flour dust for offsite disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_waste, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Untreated coarse wood screening reject for disposal (`screen_reject`)

Irrecoverable coarse wood reject, excluding nonwood contamination; contamination found at receipt requires separate specific rows.

- Selected flow: Untreated coarse wood screening reject for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_waste, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Used lubricating oil (`spent_oil`)

Conditional used-oil shipment; its mass does not equal replenishment automatically. Record opening and closing oil stocks, retained oil and contractor destination.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_oil, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oil`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Outdoor-air release after capture controls, aerodynamic diameter at most 2.5 micrometres; exclude indoor exposure and collected solids.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_air, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Outdoor-air release with aerodynamic diameter above 2.5 and at most 10 micrometres; never report cumulative PM10 again alongside this bin.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_air, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (> PM10) (`pmover10`)

Outdoor-air release with aerodynamic diameter above 10 micrometres; do not substitute total PM or PM10.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_air, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### water vapour (`water_vapour`)

Net water evaporated to outdoor air during unheated milling and handling, if positive and substantiated; no assumed dryer or purchased steam. A net atmospheric moisture uptake requires a separately verified atomic input and review before complete data delivery; do not force it into negative vapour emission or replace unexplained process loss with water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable quantity under cp_water, divide the campaign total by net accepted flour output B in kg; include the named conditional exchange only when present.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_dedicated` | flour_mill | A dedicated single-grade campaign assigns its environmental burdens to accepted flour. Keep discarded waste and internal returns in the physical balance; do not allocate them as saleable co-products. |  |
| `a_multigrade` | flour_mill | Separate grade-specific meters or campaigns first. Where saleable grades share operations, report unallocated physical outputs and separately document the burden-sharing relationship using measured causal drivers; if none is supported, retain an allocation review gap. Do not import sawmill allocation percentages. |  |
| `a_ledgers` | all inventory rows | Maintain the physical process/wood-water-carbon balance separately from the allocated burden ledger. Never multiply actual co-product output mass or internal link quantity by a burden share. No avoided-product credit without an explicit reviewed system-expansion scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | `flour_mill` | receipt/reference product | foreground record | feed receipts; opening/closing stocks; net dispatch B; species; sieve opening and retained fractions; sample wet/dry masses; waste status | Calibrated weighing, matched supplier records, representative sealed moisture samples and oven-dry mass checks; sieve analysis identifies openings and method | kg; moisture fraction; micrometres | each lot and dispatch | one complete campaign including stock changes | same site and accepted grade | per 1 kg reference flow | scale calibration; sample plan; lab records; supplier burden disclosure |
| `cp_energy` | `flour_mill` | electricity | foreground record | submeter readings; operating hours by stage; supply voltage; transformer boundary; B | Read calibrated electrical meters for receipt, milling, screening, dust extraction and bulk handling; reconcile bills | kWh; MJ | each campaign; stage totals | same campaign | same metered line | per 1 kg reference flow | meter calibration; bills; 3.6 MJ/kWh conversion |
| `cp_returns` | `flour_mill` | internal wood transfers | foreground record | pair id; returned mass; moisture; sieve grade; routing; B | Weigh or validate calibrated conveying balances at both ends; retain capture and oversize return records independently | kg | each return batch | same campaign | same closed-loop line | per 1 kg reference flow | paired logs; flowmeter calibration; contamination checks |
| `cp_waste` | `flour_mill` | disposed wood fractions | foreground record | dust shipment mass; coarse reject shipment mass; moisture; stock change; contractor; treatment; B | Separate calibrated collection bins, weigh shipments and reconcile manifests by individual waste fraction | kg | each shipment | same campaign including storage | same site | per 1 kg reference flow | weighbridge tickets; transfer manifests; treatment dataset |
| `cp_oil` | `flour_mill` | lubricant input and spent output | foreground record | oil additions; used-oil shipments; oil type; opening/closing stocks; retained oil; B | Weigh individual additions and shipments, reconcile maintenance and oil stock records without assuming equal input/output | kg | each maintenance event | campaign and documented prorating | same line equipment | per 1 kg reference flow | oil specification; scale and contractor records |
| `cp_air` | `flour_mill` | outdoor particle bins | foreground record | sample duration; exhaust volume; control state; cumulative PM/PM10/PM2.5; fugitive sources; B | Use source-specific controlled outlet and fugitive emission measurements or a validated local mass-release model, retaining detection limits and aerodynamic cut definitions; no sawmill PTE default | kg | representative operation and campaign | same operating/control window | outdoor-air emissions, unspecified receiving subcompartment; record actual release geometry | per 1 kg reference flow | sampling report; control log; bin reconciliation; uncertainty |
| `cp_water` | `flour_mill` | evaporated water | foreground record | input/output wet/dry masses; opening/closing wood water stocks; condensate; vapor release; B | Reconcile water carried in wood and stock changes; quantify positive net vapor only after investigating balance residuals, with independent moisture or exhaust evidence | kg | each campaign | same campaign | same aggregate; no heating or wet wash | per 1 kg reference flow | moisture records; uncertainty; water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_basis` | all inventory rows | For each exchange, sum attributable campaign receipts/releases after relevant opening/closing stock correction and divide by B, the net accepted flour mass at dispatch moisture in kg. Maintain physical transfers before burden allocation; the reference row equals 1 kg. | campaign records; B | exchange quantity per 1 kg reference flow |  |
| `wood_balance` | sawdust_input; flour_output; dust_waste; screen_reject; pm25; pmcoarse; pmover10 | Dry incoming wood plus opening dry-wood stock equals dispatched dry flour plus disposed dry wood plus emitted dry wood particles plus closing dry-wood stock, subject to disclosed measured uncertainty. Internal returns cancel; unexplained residuals remain a quality gap. | wet/dry masses; stocks; particle composition | unallocated physical balance | `usda-wood-handbook-2021` |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | Keep each exchange physically or chemically specific. The reference uses a verified foreground wood-material locator only with the exact flour qualifiers; unresolved return/waste UUIDs remain concrete identity gaps and must be resolved before declaring the corresponding foreground dataset complete. A Product flow locator cannot replace a Waste or Elementary flow, and identity verification cannot establish supplier-background compatibility or measured quantity. | Direct identity and property/unit confirmation |
| `dq_grade` | flour_output | Retain size distribution, moisture basis and test records; do not apply foreign tariff sieve limits as a universal CPC flour specification. | Batch specifications and sample records |
| `dq_coverage` | all inventory rows | Disclose unmeasured sources, detection limits and route exclusions. Add every actually detected species as its own atomic exchange; unknown does not mean zero. Conditional absence requires a documented actual assessment, including oil mist, leaks and other emissions when relevant. | Completeness and uncertainty review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | flour_output | Exactly one accepted reference output has 1 kg net dispatch flour; all rows and collection denominators agree in both languages. The verified foreground reference UUID and required concrete flour qualifiers must be complete. Its broad physical identity does not establish actual provider/background compatibility or collected amounts. |  |
| `v_route` | flour_mill | Reject wood wool, bonding, chemical treatment, onsite drying/heating or combustion as this route. Do not infer applicability from CPC alone. | `hmrc-wood-classification`; `clemons-wood-flour-2005` |
| `v_returns` | oversize_return; oversize_reinput; captured_dust_return; captured_dust_reinput | Both ends of each return pair carry equal physical mass and moisture; every dust portion has one destination, with no double counting of waste and air emissions. |  |
| `v_air` | pm25; pmcoarse; pmover10; water_vapour | Check outdoor-air medium, nonoverlapping aerodynamic bins and emission controls; cumulative PM must not be added to its component bins. Water releases to water or indoor-air exposure records cannot replace outdoor-air flows. |  |
| `v_balance` | flour_mill | Reconcile wood-water-carbon stocks, transfers and losses before allocation; then check the burden ledger separately. Require unresolved measurements or unsupported allocation to remain explicit. | `usda-wood-handbook-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply a declared unbound flour grade to material manufacturing, with boundary and identity evidence |
| allowed_use | The matching flour grade, moisture and dry-feed electrical route only |
| excluded_use | Wood wool; insulation performance; finished composites; onsite thermal drying or fuel combustion; arbitrary all-wood averages |
| required_metadata | Site/time; grade; species; size; moisture basis; waste input status; upstream burden; electricity supply; dust destinations and controls |
| required_quality_disclosure | Measurement completeness; unresolved identities; unallocated balances; burden allocation; sampling and model uncertainty |
| update_trigger | Grade/species, input origin, moisture, energy route, dust controls or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `hmrc-wood-classification` | official_guidance | [HMRC, Classifying wood for import and export (updated 10 March 2023), Wood-wool and wood-flour](https://www.gov.uk/guidance/classifying-wood#wood-wool-and-wood-flour) | Physical form and grinding/sifting distinction; UK tariff context only, no universal CPC numeric limits |
| `clemons-wood-flour-2005` | literature | [Clemons and Caufield (2005), Wood Flour, Functional Fillers for Plastics, pp. 249–270, §15.2 pp.251–253](https://research.fs.usda.gov/download/treesearch/23122.pdf) | Flour size-reduction/classification route and grade descriptors; no current energy/yield/industry ranges adopted |
| `usda-wood-handbook-2021` | handbook | [USDA FPL-GTR-282 (2021), Wood handbook—wood as an engineering material, p.4–1 equations (4–1)/(4–2)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | Water/oven-dry-wood mass basis; no species survey parameter or drying target adopted |
