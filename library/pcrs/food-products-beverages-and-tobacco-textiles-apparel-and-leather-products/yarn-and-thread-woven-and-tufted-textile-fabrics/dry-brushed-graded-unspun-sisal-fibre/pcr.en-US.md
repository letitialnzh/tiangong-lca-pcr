---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-brushed-graded-unspun-sisal-fibre
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dry-brushed graded unspun sisal fibre

## 1. Scope and Applicability

This PCR covers factory finishing of single-species Agave sisalana fibre received already extracted and dried: sorting, dry brushing, grading and baling. The representative output is untreated, unspun main fibre, with recovered saleable tow accounted separately. Sisaex distinguishes fibre finishing from later yarn and rope production; Grosso documents recovered brushing tow. These are manufacturer route observations, not universal recipes.

CPC 26190 is broader: the official explanation also includes processed flax, hemp, abaca, coconut, ramie and other fibres. This PCR does not cover that whole subclass. Fresh-leaf decortication, washing and initial drying are upstream; ramie degumming, coir retting, flax scutching, hemp cottonization, wet chemical treatment, dyeing, spinning, composites and post-consumer rag reclamation need separate route methodology. A plant performing these operations shall separate its unit processes and cannot use this foreground boundary to conceal them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-brushed-graded-unspun-sisal-fibre |
| classification_refs | CPC 3.0: 26190; narrower semantic scope; no accepted mapping is asserted |
| covered_products | Dry-brushed graded unspun untreated Agave sisalana main fibre; associated saleable brushing tow as co-product |
| excluded_products | Other fibre species; raw leaves; wet or chemically treated fibre; yarn; rope; fibre waste as the reference product |
| representative_product | Dry-brushed graded unspun sisal fibre |
| production_route | Dried extracted fibre receipt → dry sorting/brushing/grading → net weighing and baling |
| market_state | Factory-gate baled fibre, declared grade and moisture; packaging excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unspun sisal fibre for declared downstream processing |
| How much | 1 kg net accepted fibre at dispatch moisture |
| How well | Declared species purity, processing state, length distribution, grade, impurity acceptance and measured moisture; buyer-specific limits |
| How long or cycle | One accepted production lot; no service life claim |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dry-brushed graded unspun sisal fibre |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Agave sisalana species and purity; extracted dried incoming state; dry brushing route; main-fibre grade; fibre length distribution; impurity specification; measured wet-basis moisture; net mass excluding packaging; untreated unspun state; site and period; packaging configuration |

Declare all required qualifiers in the dataset. This is a declared-unit intermediate product, not evidence of equivalent downstream performance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net fibre using calibrated scales and measured tare; normalize every row to per 1 kg reference flow with cp_mass_baling. Maintain the declared dispatch moisture basis. |
| `electricity_conversion` | receipt_electricity; brushing_electricity; baling_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public energy reference property. Collect kWh; 1 kWh = 3.6 MJ. Never treat electricity as mass or use rated power as measured energy. |
| `moisture_observation` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet-basis moisture fraction w and as-received mass m; dry solids = m × (1 − w). Do not replace the 1 kg dispatch reference by dry mass without an explicit separate conversion and metadata. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_finishing` | all foreground processes | Start at accepted extracted dried fibre receipt; include sorting, brushing, grading, dust handling, baling, net weighing and attributable gate storage/handling. This is gate-to-gate finishing. | `sisaex-finishing`; `grosso-sisal` |
| `upstream_separation` | agricultural and wet extraction operations | Keep cultivation, harvesting, leaf decortication, extraction washing and initial drying outside this foreground. Link state-compatible supplier datasets; a complete cradle-to-gate claim requires these upstream burdens and transport explicitly connected and completeness demonstrated. | `grosso-sisal` |
| `wet_route_exclusion` | route applicability | No wet treatment or dyeing is assumed. Actual wet cleaning, softening, bleaching or dyeing requires a route-specific extension with each chemical, technosphere water, wastewater and measured pollutant separately; do not assign zero effluent by omission. | `sisaex-finishing` |
| `recursive_input` | same-category fibre | Purchased already-brushed fibre must carry upstream finishing evidence; segregate it from this unbrushed-input route. Internal transfer and rework are counted once; never attach a second background dataset to internal transfers. Exclude downstream spinning, use and end of life. | `unsd-cpc-2025`; `sisaex-finishing` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted extracted dried unbrushed Agave sisalana fibre at factory receipt |
| starting_condition_role | foreground_input |
| product_classification_scope | Only dry finishing of sisal within CPC 26190; other routes unassessed |
| recursive_input_rule | Segregate purchased processed fibre; count internal transfers once |
| upstream_dataset_requirement | Species, extraction/drying state, moisture, region and period compatible supplier data including agricultural/extraction burdens where the study includes them |
| disclosure | State gate-to-gate extent, excluded routes, upstream coverage, transport responsibility and actual moisture/grade |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Receipt, sorting and moisture verification | required | For the declared dry-finishing route | foreground_production | per 1 kg reference flow |
| brushing | Dry brushing, grading and dust capture | required | For the declared dry-finishing route | foreground_production | per 1 kg reference flow |
| baling | Baling, labelling and dispatch weighing | required | For the declared dry-finishing route | foreground_production | per 1 kg reference flow |

### Process: Receipt, sorting and moisture verification (`receipt`)

#### Inputs

##### Product flows

###### Extracted dried unbrushed sisal fibre (`dried_sisal_input`)

Weigh accepted incoming Agave sisalana fibre and record extraction/drying state, moisture and supplier. Leaves and mixed-species lots are outside this route.

- Selected flow: Extracted dried unbrushed sisal fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_receipt`
- Sources: `sisaex-finishing`

###### Alternating current (`receipt_electricity`)

Only user-side grid supply below 1 kV. Include warehouse handling and monitoring electricity actually attributable to this lot; other supply routes need their own verified identity.


This selected UUID is applicable only to actual CN grid-average consumption supply to the user below 1 kV. Other geography, supply technology or voltage requires another verified identity and matching provider data; it is not covered by this selected UUID.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured allocated batch kWh × 3.6 divided by accepted net main-fibre kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_receipt`
- Sources: `sisaex-finishing`

##### Waste flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

##### Elementary flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

#### Outputs

##### Product flows

###### Sorted dried unbrushed sisal fibre (`sorted_sisal_output`)

Internal transfer to brushing; retain batch linkage and mass without adding a second upstream burden.

- Selected flow: Sorted dried unbrushed sisal fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_receipt`
- Sources: `sisaex-finishing`

##### Waste flows

###### Rejected dried sisal fibre for off-site treatment (`receipt_rejected_sisal`)

Conditional on actual discarded fibre. Weigh separately and document contamination and destination; supplier-returned fibre is a product return rather than this waste.

- Selected flow: Rejected dried sisal fibre for off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_receipt`
- Sources: `sisaex-finishing`

##### Elementary flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

### Process: Dry brushing, grading and dust capture (`brushing`)

#### Inputs

##### Product flows

###### Sorted dried unbrushed sisal fibre (`sorted_sisal_input`)

Match the receipt transfer mass after explicitly recording intervening moisture change and stock movements.

- Selected flow: Sorted dried unbrushed sisal fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_brushing`
- Sources: `sisaex-finishing`

###### Alternating current (`brushing_electricity`)

Meter brushing drives and dust-extraction fans, with grid supply below 1 kV. Allocate shared electricity using measured machine-time and load evidence.


This selected UUID is applicable only to actual CN grid-average consumption supply to the user below 1 kV. Other geography, supply technology or voltage requires another verified identity and matching provider data; it is not covered by this selected UUID.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured allocated batch kWh × 3.6 divided by accepted net main-fibre kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_brushing`
- Sources: `sisaex-finishing`

##### Waste flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

##### Elementary flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

#### Outputs

##### Product flows

###### Dry-brushed graded unspun sisal fibre before baling (`brushed_sisal_output`)

Weigh each accepted main-fibre grade before packing, with moisture and length/impurity acceptance recorded. No universal grade threshold is imposed.

- Selected flow: Dry-brushed graded unspun sisal fibre before baling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_brushing`
- Sources: `sisaex-finishing`

###### Saleable sisal tow recovered by dry brushing (`sisal_tow_output`)

Conditional on separately collected short fibre that meets a buyer specification and is sold as a co-product. Record grade, moisture, buyer and revenue; not the main reference product.

- Selected flow: Saleable sisal tow recovered by dry brushing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_brushing`
- Sources: `grosso-sisal`

##### Waste flows

###### Captured sisal brushing dust for off-site treatment (`captured_sisal_dust`)

Conditional on actual captured discard. Record dry fibre content and contamination separately from saleable tow; the collected solid is not an air emission.

- Selected flow: Captured sisal brushing dust for off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_brushing`
- Sources: `sisaex-finishing`

##### Elementary flows

###### Particulate matter, particle size unspecified (`particulate_air`)

Conditional on measured particulate discharge to ambient air with unspecified subcompartment and particle-size fraction. Record emission point, test method, controls, air volume and uncertainty. Never infer PM2.5 from total dust; distinguish collected dust from emitted mass. Add size-specific or other actual pollutants as individual verified rows when data support them.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

### Process: Baling, labelling and dispatch weighing (`baling`)

#### Inputs

##### Product flows

###### Dry-brushed graded unspun sisal fibre before baling (`brushed_sisal_input`)

Internal transfer of the same accepted grade; reconcile with brushing output and final net mass.

- Selected flow: Dry-brushed graded unspun sisal fibre before baling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_baling`
- Sources: `sisaex-finishing`

###### Alternating current (`baling_electricity`)

Include press, scale, lighting and handling electricity attributable to this lot for grid supply below 1 kV, retaining idle-load allocation evidence.


This selected UUID is applicable only to actual CN grid-average consumption supply to the user below 1 kV. Other geography, supply technology or voltage requires another verified identity and matching provider data; it is not covered by this selected UUID.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured allocated batch kWh × 3.6 divided by accepted net main-fibre kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_baling`
- Sources: `sisaex-finishing`

###### Polypropylene bale strapping (`pp_bale_strap`)

Conditional on use of solid polypropylene strap. Weigh actual consumption and retain specification; resin, twine and cable ties are not interchangeable identities.

- Selected flow: Polypropylene bale strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `sisaex-finishing`

###### Paper bale label (`paper_bale_label`)

Conditional on an actual paper label. Weigh labels separately; declare any adhesive as another atomic input if used. No mixed packaging placeholder is permitted.

- Selected flow: Paper bale label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured allocated batch exchange amount divided by accepted net main-fibre kg; retain moisture and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `sisaex-finishing`

##### Waste flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

##### Elementary flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

#### Outputs

##### Product flows

###### Dry-brushed graded unspun sisal fibre (`reference_product_output`)

Net accepted fibre mass at dispatch, excluding straps and labels. Tare each bale and measure moisture. No spinning, dyeing or chemical softening is included.

- Selected flow: Dry-brushed graded unspun sisal fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_baling`
- Sources: `sisaex-finishing`

##### Waste flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

##### Elementary flows

No exchange is assumed in this group for the declared route; record actual additional exchanges individually when present.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | main fibre and tow | Separate metered operations and grade-specific packing first. For joint brushing, cp_allocation shall test whether measured operation/material relationships justify physical partition. Never infer an allocation ratio from the classification title or assume all short fibre is waste. | `grosso-sisal` |
| `joint_partition` | unseparated joint burdens | If separation and a causal physical relationship cannot be established, disclose economic partition as a study-specific choice based on actual same-period net revenues for main-fibre grades and saleable tow. Report quantities, prices, period, factor and sensitivity to moisture-adjusted mass partition; unresolved evidence prevents comparability. No fixed factor is supplied by this PCR. |  |
| `waste_no_credit` | discarded fibre and captured dust | Document product-versus-waste status using actual contracts and destination. Assign treatment burdens consistently with the study method and disclose any substitution scenario separately; no automatic avoided-product credit. Include treatment and transport once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection normalization: retain measured batch totals, apply allocation first, and divide by accepted net main-fibre kg. Electricity is converted to MJ first; component counts require measured component mass. This procedure gives the aggregation basis specified below.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass_receipt | receipt | fibre transfers and outputs | measurement | lot; species; grade; gross and tare mass; moisture fraction; accepted net mass; tow mass; rejects; opening/closing stocks | Calibrated scales; batch reconciliation; documented gravimetric moisture method and sampling including oven conditions appropriate to fibre | kg | Each lot and transfer | One complete representative reporting period including rejects and rework | Declared plant and dry line | per 1 kg reference flow | Calibration; tare records; moisture tests; supplier state; buyer acceptance; disposal receipts |
| cp_mass_brushing | brushing | fibre transfers and outputs | measurement | lot; species; grade; gross and tare mass; moisture fraction; accepted net mass; tow mass; rejects; opening/closing stocks | Calibrated scales; batch reconciliation; documented gravimetric moisture method and sampling including oven conditions appropriate to fibre | kg | Each lot and transfer | One complete representative reporting period including rejects and rework | Declared plant and dry line | per 1 kg reference flow | Calibration; tare records; moisture tests; supplier state; buyer acceptance; disposal receipts |
| cp_mass_baling | baling | fibre transfers and outputs | measurement | lot; species; grade; gross and tare mass; moisture fraction; accepted net mass; tow mass; rejects; opening/closing stocks | Calibrated scales; batch reconciliation; documented gravimetric moisture method and sampling including oven conditions appropriate to fibre | kg | Each lot and transfer | One complete representative reporting period including rejects and rework | Declared plant and dry line | per 1 kg reference flow | Calibration; tare records; moisture tests; supplier state; buyer acceptance; disposal receipts |
| cp_energy_receipt | receipt | electricity | measurement | meter start/end kWh; voltage; equipment; operating and idle hours; allocation driver; period | Read calibrated process meters; reconcile with invoices; use measured operating-load evidence for shared meters, never nameplate capacity alone | kWh | Each shift and reporting period | Same period as cp_mass_baling | Same factory equipment | per 1 kg reference flow | Meter calibration; supply voltage; invoice reconciliation; allocation record |
| cp_energy_brushing | brushing | electricity | measurement | meter start/end kWh; voltage; equipment; operating and idle hours; allocation driver; period | Read calibrated process meters; reconcile with invoices; use measured operating-load evidence for shared meters, never nameplate capacity alone | kWh | Each shift and reporting period | Same period as cp_mass_baling | Same factory equipment | per 1 kg reference flow | Meter calibration; supply voltage; invoice reconciliation; allocation record |
| cp_energy_baling | baling | electricity | measurement | meter start/end kWh; voltage; equipment; operating and idle hours; allocation driver; period | Read calibrated process meters; reconcile with invoices; use measured operating-load evidence for shared meters, never nameplate capacity alone | kWh | Each shift and reporting period | Same period as cp_mass_baling | Same factory equipment | per 1 kg reference flow | Meter calibration; supply voltage; invoice reconciliation; allocation record |
| cp_pack | baling | strap and paper label separately | measurement | material specification; consumed mass; count; measured mass per component; stock; scrap; actual adhesive | Weigh components on calibrated scale and reconcile purchasing, stock and consumption; count only with measured component mass | kg | Each packing lot | Same as cp_mass_baling | Packing line | per 1 kg reference flow | Weighing; supplier specifications; consumption records |
| cp_air | brushing | measured particulate discharge | measurement | emission point; particulate concentration; dry standardized exhaust volume; duration; moisture; size definition; abatement status | Use representative stack tests or documented monitoring; combine matching concentration and gas volume bases; separately assess fugitive discharge. Unmeasured emissions remain a disclosed gap, not zero | kg | Representative operating conditions and control states | Same reporting period or justified temporal adjustment | Brushing exhaust points | per 1 kg reference flow | Test report; concentration/volume basis; control uptime; uncertainty |
| cp_allocation | brushing | joint outputs and shared operations | record | grade kg; tow kg; moisture; net revenue; invoice period; dedicated/shared meter; causal driver | Retain production/sales ledgers and measured physical partition evidence; explain choice and sensitivity. No default prices or allocation factors | kg | Each reporting period | Same as production inventory | All joint outputs at this factory | per 1 kg reference flow | Production, sales and reconciliation records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | q_norm = allocated batch exchange amount / accepted net main-fibre mass in kg; report per 1 kg reference flow. Internal transfers reconcile without repeated upstream burdens. | cp_mass_baling; cp_allocation | Normalized exchange in its declared unit |  |
| calc_energy | receipt_electricity; brushing_electricity; baling_electricity | E_MJ = measured allocated electricity_kWh × 3.6; then apply calc_normalize. | cp_energy_receipt; cp_energy_brushing; cp_energy_baling; cp_mass_baling | E_MJ |  |
| calc_moisture | all fibre mass rows | m_dry = m_wet × (1 − w); w is measured wet-basis water mass fraction. Use dry solids for balance only; the reference remains dispatch net mass. | cp_mass_baling | m_dry |  |
| calc_air | particulate_air | Emitted kg = measured concentration in mg/m3 × matching exhaust m3 / 1000000; retain matched dry/wet, temperature and pressure bases; apply calc_normalize after allocation. | cp_air; cp_mass_baling; cp_allocation | Emitted particulate mass |  |
| calc_partition | joint brushing burdens | Retain separation and causal physical evidence first. Where economic partition is justified, a_i = observed net revenue_i / sum of joint-product net revenues in the same period; fractions sum to one. Calculate moisture-adjusted mass alternative from measured dry product masses and disclose sensitivity. | cp_allocation | a_i |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | all processes | Confirm species purity, incoming extraction/drying state and absence of wet/chemical treatment; no classification-wide extrapolation | Supplier records and process walk-through |
| dq_balance | fibre transfers | Reconcile opening stock + inputs − closing stock with main fibre, tow, rejects and dust on measured dry-solids basis; quantify unexplained differences and sampling uncertainty. No universal loss threshold | Batch mass and moisture reconciliation |
| dq_coverage | data package | Cover representative operations, downtime, grades, supplier/geographic mix and period. Disclose missing inventories and allocation uncertainty; no invented temperature, yield, moisture or lifetime | Meter/production coverage and uncertainty report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Require exact main-fibre state and qualifiers, matching reference output and 1 kg net mass. An unresolved product UUID must be declared and confirmed before release; a broader fibre or yarn identity is not interchangeable. |  |
| `validate_measurements` | all inventory rows | Require linked protocols, same reporting-period mass denominator, unit conversions and documented allocation. Reject kg/kWh/MJ confusion, gross-mass reference, missing moisture basis or unexplained stock differences. |  |
| `validate_atomic_boundary` | route and emissions | Require one atomic exchange per row; distinguish solid dust from emitted air particulate, technosphere water from resources and wastewater. Check actual ancillary inputs and waste handling; gaps fail completeness and cannot be replaced by assumed zero. |  |
| `validate_upstream_claim` | dataset profile | Gate-to-gate finishing alone cannot establish complete cradle-to-gate coverage or equivalence between grades. Require audited upstream links and disclosure before extending scope. | `unsd-cpc-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route-specific unspun sisal finishing input to later spinning or product manufacture, with grade and moisture compatibility |
| excluded_use | Whole CPC coverage; raw leaf production; wet treatment; spun yarn; use-stage performance; automatic full cradle-to-gate claims |
| required_metadata | Site, period, species, incoming state, output grade, length, moisture, net mass, packaging, upstream links, allocation and actual route |
| required_quality_disclosure | Measured and estimated shares; mass reconciliation; missing exchanges; upstream/transport extent; identities; emission coverage and uncertainty; sensitivity |
| update_trigger | Changed species, route, moisture convention, grade specification, equipment, electricity supply, packaging or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, printed/PDF pp. 117–118. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 26190 breadth, other fibre routes and raw/retted exclusions; classification only |
| `sisaex-finishing` | literature | Sisaex, Productive Process, undated manufacturer page, Benefiting Fiber steps 1–7 and Fiber Industrialization. https://sisaex.com.br/Sisaex_en/productive_process.html | Dry finishing stages and moisture monitoring; one manufacturer route, no universal numeric recipe |
| `grosso-sisal` | literature | Grosso Sisal, operations and Sisal Fibre Products / Tow Fibre, undated manufacturer page. https://grossosisal.com/ | Extraction upstream distinction and recoverable brushing tow; supplier-specific grades and bale sizes are not adopted as defaults |
