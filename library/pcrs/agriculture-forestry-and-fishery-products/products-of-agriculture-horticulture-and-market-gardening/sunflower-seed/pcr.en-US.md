---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sunflower-seed
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Sunflower seed

## 1. Scope and Applicability

This PCR makes a foreground package for whole sunflower seed produced by a managed field crop and transferred at a declared point within the farm. It covers oilseed, confection/non-oil, and bird-food market classes as whole seed. The platform reference is “Production mix, in the farm” and “Production of sunflower seeds”. This does not establish an at-farm-gate, cleaned, dried, or graded state. Each package must record its real hand-off and all preceding on-farm operations. NDSU identifies distinct market types and field, harvest, drying and grading practices. [ndsu-sunflower-guide-2020]

Oil, meal, dehulled kernels, roasted seed, off-farm processing and transport are outside this record. Sowing-seed production needs its own verified output identity; a sowing-seed supply mix at farm input is not a harvested output. The proposed CPC relation is narrower than the whole leaf if it also includes seed for sowing. [unsd-cpc-3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sunflower-seed |
| classification_refs | CPC 3.0 01445 Sunflower seed; `narrower` whole-commodity route |
| covered_products | Whole sunflower seed for oil, confection/food and bird-food markets at a documented in-farm hand-off |
| excluded_products | Sowing seed under an unverified output identity; oil, meal, kernels, roasted seed |
| representative_product | Whole harvested sunflower seed, actual accepted mass |
| production_route | Managed field crop; head/seed harvest and threshing; conditional on-farm first cleaning, grading, drying and storage |
| market_state | Market class, grade, foreign matter, moisture and hand-off are lot-specific rather than implied by the platform flow |

The managed crop is the production parent. Irrigated fields add water, pump energy and meter records to the rainfed field inventory; the two routes are mutually exclusive per field/period, though separately identified fields can be aggregated. First conditioning is the parent of natural-air and heated drying routes; these may be sequential for a lot only when separately logged. Heated drying changes energy and moisture-removal records. Oilseed and confection types are distinct market classes, not grades to pool without evidence. [ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole sunflower seed at the actual in-farm output hand-off |
| How much | 1 kg actual accepted whole-seed mass |
| How well | Declare oilseed, confection/non-oil or bird-food class, grade/acceptance rule, measured moisture and foreign matter; no inferred cleaning or storage grade |
| How long or cycle | Identified crop year, field and lot; every included conditioning run is traceable |
| reference_flow_link | Final accepted seed state of `sunflower_grading`, `sunflower_drying`, `sunflower_cleaning` or `sunflower_harvest` according to actual route |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg actual mass; dry-mass or standardized-moisture quantities are separate declared calculations |
| Reference product flow | Sunflower seed `a62436d6-249c-4ac3-b5f4-653d0f277519`; production mix “in the farm” |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | farm and field; crop year and lot; oilseed/confection/bird-food class; variety where known; measured harvest and hand-off moisture; grade and foreign matter; actual hand-off; harvest, cleaning, grading, drying and storage scope; irrigated or rainfed route |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | All seed state transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use weighed actual mass and moisture at each transfer; record conversion to dry solids separately. |
| `wet_dry_balance` | Drying | Mass | kg | Dry solids = wet mass × (1 − measured wet-basis moisture fraction); reconcile input and output dry solids with rejects. |
| `input_units` | Nutrients, energy and water | Appropriate measured property | kg, L, kWh or m3 | Keep original unit and document product-to-nutrient, fuel-to-energy, or water-volume conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Pre-sowing field in a stated rotation and documented opening soil condition; identify purchased inputs and field operations from preparation through harvest |
| starting_condition_role | Crop establishment is the foreground start; purchased seed, fertilizer, crop protection, fuel and electricity carry upstream datasets |
| product_classification_scope | Whole commodity seed in the narrower CPC 01445 route, with oilseed and non-oil classes separated |
| recursive_input_rule | Purchased sunflower sowing seed is an upstream input; never recursively assign this output dataset to itself |
| upstream_dataset_requirement | Identify upstream supply datasets for sowing seed, nutrients, crop protection, fuel, electricity and services; disclose gaps |
| disclosure | Field and crop year, market class, actual in-farm hand-off, treatment and storage coverage, water route, residue fate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_field` | `sunflower_cultivation` | Include seedbed preparation, planting, nutrient/protection management, irrigated water and pumping when practiced, and machinery up to mature heads ready for harvest. | ndsu-sunflower-guide-2020 |
| `b_harvest` | `sunflower_harvest` | Separate head/seed capture and threshing from standing crop production; record collected bulk seed, uncollected loss and incidental stalk/head material distinctly. | ndsu-sunflower-guide-2020 |
| `b_treatment` | `sunflower_cleaning`, `sunflower_grading`, `sunflower_drying` | Include first cleaning, sorting and stabilization only if actually performed before hand-off; log accepted, downgraded, reject, moisture-loss and storage states. | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `b_exit` | Final output | End at the declared in-farm whole-seed transfer. Exclude off-farm movement and oil/food processing; do not reinterpret “in the farm” as “at farm gate”. | ndsu-sunflower-guide-2020 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sunflower_cultivation` | Field crop management | required | Each field and crop year | Managed biological production; rainfed or irrigated | Field records per accepted kg |
| `sunflower_harvest` | Head and seed capture | required | Each harvest lot | Independent harvest and threshing | Collected seed and field loss |
| `sunflower_cleaning` | First cleaning | conditional | Performed before hand-off | Raw bulk to prepared whole seed | Inlet/outlet kg |
| `sunflower_grading` | Market-class sorting | conditional | Two or more quality/destination states are separated | Accepted, downgraded and rejected output hand-offs | kg by grade and fate |
| `sunflower_drying` | On-farm preservation | conditional | Drying or active storage occurs before hand-off | Usable wet seed to stable measured-moisture state | Moisture, mass and energy by run |

Field and harvest are separate because harvest removes mature heads/seeds from the growing crop; first cleaning cannot be assumed to occur. Oilseed, confection and bird-food destinations require actual lot records. Continuous cleaners and dryers need operating periods, while field harvest and grade sorting need lot/run IDs. Changeovers, re-cleaning and sequential drying are recorded as linked runs; one input or output is counted once. [ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022]

### Process: Field crop management (`sunflower_cultivation`)

#### Inputs

##### Product flows

###### Sowing seed input (`sowing_seed_input`)

The sowing seed used to establish this field enters cultivation as a purchased or retained input.

- Selected flow: Verified actual sowing-seed product identity; never the commodity output UUID.
- Flow property / unit: Mass / kg
- Amount rule: Seed actually planted by field and event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and accepted seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 50
  - Unit: kg seed/ha
  - Basis: one crop hectare; broad provisional mass screen across seed sizes and plant populations; use the measured seed lot
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`sunflower_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and accepted seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg product/ha
  - Basis: one crop hectare, each fertilizer product separately; provisional screen only, replace with field application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection`)

Pest, disease and weed control products enter only when actually applied.

- Selected flow: Actual crop-protection product identity.
- Flow property / unit: Mass / kg product
- Amount rule: Sum applications by field and product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and accepted seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg product/ha
  - Basis: one crop hectare, each applied protection or harvest-aid product separately; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Applied irrigation water enters the field only on an irrigated route.

- Selected flow: Actual irrigation water supply identity.
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter applied water by field; rainfed fields record route without a water exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and accepted seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: one crop hectare; zero on rainfed routes, measured withdrawal/delivery on irrigated routes; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel (`field_fuel`)

Fuel for establishment and field management enters the field operation.

- Selected flow: Actual fuel product identity.
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Meter or derive fuel from machine logs by field; keep conversion factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and accepted seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/ha
  - Basis: one crop hectare; all assigned field operations, carrier-specific measured litres; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and irrigation electricity (`field_electricity`)

Electricity for actual field equipment and irrigation pumps enters when used.

- Selected flow: Actual electricity supply identity.
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or log use by field and pump run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and accepted seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh/ha
  - Basis: one crop hectare; conditional electric machinery or irrigation pumping, measured kWh; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input; separately identify any recycled amendment.

##### Elementary flows

No fixed elementary input is assumed.

#### Outputs

##### Product flows

###### Mature heads in standing crop (`mature_heads`)

The mature standing crop is the biological hand-off to independent harvest.

- Selected flow: Internal biological state, not a sold seed UUID.
- Flow property / unit: Estimated seed mass / kg.
- Amount rule: Link field and crop year to the harvest lot; do not treat potential seed as market output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per crop year.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg potential seed/ha
  - Basis: one crop hectare; provisional potential-seed screen before harvest loss, not marketed seed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Stalks and heads retained on the field are field residues; removed material needs a measured exit and fate.

##### Elementary flows

No elementary-flow exchange is fixed without a named emission species and a justified method or factor. Field-level records retain each candidate species, method source and calculation inputs; add a separate species-specific exchange only when verified.

### Process: Head and seed capture (`sunflower_harvest`)

#### Inputs

##### Product flows

###### Standing mature crop (`standing_crop_input`)

Mature heads pass from cultivation to the independent capture operation.

- Selected flow: Internal mature-head state, not a sold product.
- Flow property / unit: Mass / kg potential seed
- Amount rule: Link the producing field and crop year to the harvest lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg potential seed/ha
  - Basis: one crop hectare; provisional potential-seed screen before harvest loss, not marketed seed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest machinery fuel (`harvest_fuel`)

Fuel for combine and threshing equipment enters the harvest run.

- Selected flow: Actual fuel product identity.
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Meter harvest fuel by field and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per bulk seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L/ha
  - Basis: one harvested hectare, conditional route and measured machinery fuel; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity for harvest equipment (`harvest_electricity`)

Electricity for harvest equipment enters only when electric machinery is used.

- Selected flow: Actual electricity supply identity.
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter harvest electricity by field and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per bulk seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh/ha
  - Basis: one harvested hectare, only where electric harvest service actually operates; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input.

##### Elementary flows

No fixed elementary input.

#### Outputs

##### Product flows

###### Bulk threshed whole seed (`bulk_seed`)

Collected bulk seed leaves harvest before any unverified cleaning or grading.

- Selected flow: Internal harvested seed state before any claimed cleaning or grading.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh by field and lot; test moisture and foreign material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg raw seed/ha
  - Basis: one harvested hectare; provisional broad captured-seed screen before first conditioning, replace with scale records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Uncollected seed loss and stalk/head material retained on the field are recorded as field observations and residue fate in `cp_harvest`, not as an assumed waste exchange. If residue is physically removed, record the measured exit and independently classify its product or waste destination.

##### Elementary flows

No fixed elementary output.

### Process: First cleaning (`sunflower_cleaning`)

#### Inputs

##### Product flows

###### Bulk seed into first cleaner (`bulk_seed_cleaner_input`)

Collected bulk seed enters the first conditioning operation.

- Selected flow: Internal bulk whole-seed state.
- Flow property / unit: Mass / kg
- Amount rule: Weigh inlet seed and test moisture and foreign matter by run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaner electricity (`cleaner_electricity`)

Powered first cleaning uses metered electricity for the actual run.

- Selected flow: Actual electricity supply identity.
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter cleaner electricity by run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaner fuel (`cleaner_fuel`)

Fuel enters only if the cleaning equipment consumes fuel.

- Selected flow: Actual fuel product identity.
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter cleaner fuel by run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: L liquid fuel/kg processed seed
  - Basis: per kg seed entering this actual conditioning or drying run; liquid-fuel screen only, convert other carriers separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input.

##### Elementary flows

No fixed elementary input.

#### Outputs

##### Product flows

###### Prepared whole seed (`clean_seed`)

Prepared whole seed leaves the first cleaner for its documented next use.

- Selected flow: Internal cleaned whole-seed state, transferred to grading, drying or final in-farm hand-off.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh cleaned mass and record moisture and foreign matter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per cleaning run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Screen-outs and dust (`clean_reject`)

Screen-outs leave the cleaner through a documented rework, downgrade or disposal route.

- Selected flow: Off-spec seed/debris by documented re-cleaning, downgraded sale or disposal fate.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh or estimate removed material and link any return to a new run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per cleaning run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Report measured dust emission separately when relevant; do not equate all screen-outs with emitted dust.

### Process: Market-class sorting (`sunflower_grading`)

#### Inputs

##### Product flows

###### Whole seed into sorter (`grade_seed_input`)

The identified bulk or prepared seed lot enters market-class grading.

- Selected flow: Internal whole-seed state with known lot.
- Flow property / unit: Mass / kg
- Amount rule: Weigh inlet seed and retain its class and moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per grading run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorting electricity (`sorter_electricity`)

Sorting energy enters only when powered equipment is used.

- Selected flow: Actual electricity supply identity.
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter sorter electricity by operating run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per graded seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input.

##### Elementary flows

No fixed elementary input.

#### Outputs

##### Product flows

###### Accepted whole-seed grade (`accepted_seed`)

An accepted whole-seed grade leaves at the actual declared in-farm commodity hand-off.

- Selected flow: Sunflower seed `a62436d6-249c-4ac3-b5f4-653d0f277519` at the declared in-farm commodity hand-off.
- Flow property / unit: Mass / kg.
- Binding: `fixed`
- Amount rule: Weigh accepted oilseed, confection or bird-food class by actual grade, lot and moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted output kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded saleable seed (`downgraded_seed`)

A separately saleable lower grade leaves for its recorded destination.

- Selected flow: Separate whole-seed product destination, not part of accepted reference mass.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh each downgraded sale grade and document buyer or use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per grading run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected seed (`grade_reject`)

Off-spec seed is held for a documented return, recovery or final waste exit.

- Selected flow: Off-spec lot with re-sort, downgrade, recovery or disposal path.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh rejects and identify destination and linked follow-on run; only final rejected material is a waste exit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per grading run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No fixed elementary output.

### Process: On-farm preservation (`sunflower_drying`)

#### Inputs

##### Product flows

###### Usable whole seed before drying (`wet_seed_input`)

Measured wet seed enters the bounded stabilization run.

- Selected flow: Internal whole-seed state with grade and lot identity.
- Flow property / unit: Mass / kg
- Amount rule: Weigh inlet mass and test wet-basis moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilized seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying fan electricity (`drying_fan_electricity`)

Fan electricity enters a natural-air or heated run only when the fan operates.

- Selected flow: Actual electricity supply identity.
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter fan electricity by bin or dryer run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilized seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplemental heat fuel (`drying_heat_fuel`)

Heat fuel enters only when supplemental or high-temperature drying occurs.

- Selected flow: Actual stationary combustion fuel product for supplemental drying heat.
- Flow property / unit: Volume / L or mass / kg by fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Meter fuel for each heated run; zero only for documented unheated operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilized seed kg.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: L liquid fuel/kg processed seed
  - Basis: per kg seed entering this actual conditioning or drying run; liquid-fuel screen only, convert other carriers separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input.

##### Elementary flows

Ambient air is a process medium; no fixed elementary quantity is imposed.

#### Outputs

##### Product flows

###### Stabilized whole seed (`dry_seed`)

Stabilized whole seed leaves with its measured moisture and declared hand-off.

- Selected flow: Whole seed at measured exit moisture and actual in-farm hand-off.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh output, test moisture and retain class/grade; do not infer a universal target moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per drying lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spoiled or rejected material (`dry_reject`)

Spoiled or rejected seed leaves through an identified recovery or disposal path.

- Selected flow: Off-spec seed by actual recovery or disposal fate, distinct from water removal.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh rejected seed and record whether reworked or discarded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per drying lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Removed moisture (`drying_water`)

Water removed during drying is accounted separately from rejected seed.

- Selected flow: Water vapor only where required by the applicable inventory system.
- Flow property / unit: Mass / kg.
- Amount rule: Derive from inlet/outlet wet mass and moisture after reject dry solids are accounted for.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per drying lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_field` | Cultivation and harvest | Attribute joint field/harvest burdens to collected seed when residues remain in the field. A physically removed and marketed stalk/head output needs measured mass and a disclosed allocation basis; do not automatically give it zero burden. | ndsu-sunflower-guide-2020 |
| `a_grade` | Cleaning and grading | Reconcile accepted, downgraded, reworked and waste mass. Directly assign metered separable work to its output run; disclose a consistent measured driver for truly shared burdens when more than one saleable output exists. | ndsu-sunflower-guide-2020 |
| `a_rework` | Reject return | Link reject/re-cleaning loops to their original and follow-on run; charge added work once and count the material as accepted only after successful recovery. | ndsu-sunflower-guide-2020 |
| `a_mode` | Field, batch and continuous runs | Attribute shared machinery, cleaning and changeover to logged field/lot/period by recorded time, throughput or other causal driver; no duplicate charge across sequential runs. | ndsu-sunflower-guide-2020 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The quantity ranges on flow cards are review triggers before normalization, not inventory defaults or universal acceptance limits. Use actual field, lot and run records for amounts; investigate values outside provisional screens against route, region, units and measurement quality. Regional planting-rate examples are illustrative only.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field` | `sunflower_cultivation` | Inputs and irrigation | Field, invoice, application and meter logs | field_id, area, year, seed_kg, product_kg, nutrient_kg, water_m3, fuel_L, kWh, emission_species, emission_method, factor_source, date | Reconcile applications with invoices and meter reads | ha, kg, m3, L, kWh | Each event | Full crop year | Each field | Sum by field and link to harvested lots | Receipts, meter records and calculation factors |
| `cp_harvest` | `sunflower_harvest` | Capture and loss | Combine, scale and field notes | field_id, lot_id, date, bulk_kg, moisture_pct, foreign_matter_pct, loss, residue_fate, fuel_L | Weigh lots and measure condition | kg, %, L | Each harvest lot | Harvest period | Field and machine run | Sum distinct lots; link downstream | Scale ticket, moisture test, field observation |
| `cp_clean` | `sunflower_cleaning` | Prepared seed and screen-outs | Cleaner run log | lot_id, run_id, inlet_kg, outlet_kg, reject_kg, moisture_pct, kWh, reject_fate | Weigh inlet/outlet and meter service | kg, %, kWh | Each run | All in-boundary runs | Farm cleaner | Reconcile mass and linked returns | Scale and meter log |
| `cp_grade` | `sunflower_grading` | Quality/destination states | Sorting and sale records | lot_id, run_id, class, grade, accepted_kg, downgraded_kg, reject_kg, destination, return_link | Weigh by state and destination | kg | Each run | All in-boundary runs | Farm sorter | Balance distinct states; avoid duplicate returns | Grade sheet, sale and reject tickets |
| `cp_dry` | `sunflower_drying` | Preservation and water loss | Bin/dryer and meter log | lot_id, run_id, method, inlet_kg, inlet_moisture, outlet_kg, outlet_moisture, reject_kg, fan_kWh, fuel_L, days | Weigh/test before and after; meter energy | kg, %, kWh, L, day | Each run | All on-farm treatment before hand-off | Farm bin or dryer | Balance dry solids and sum sequential stages once | Scale, moisture test and meter log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_norm` | All inventory | Divide distinct field-, lot- or run-linked quantities by actual accepted seed kg at the declared hand-off. | Raw amount; accepted kg; trace links | Per kg reference seed | ndsu-sunflower-guide-2020 |
| `c_dry` | Drying | Dry solids = wet mass × (1 − wet-basis moisture fraction); compare inlet and outlet plus reject dry solids before estimating evaporated water. | Mass and moisture on inlet, outlet and reject | Dry-solids residual and water loss | ndsu-sunflower-drying-2022 |
| `c_field_emissions` | Field emissions | Create a species-specific calculated exchange only when a named species, method and factor source are verified against field records; otherwise flag the exchange as unresolved. | Field records; species; method; factor source | Method-specific calculated exchange or unresolved finding | ndsu-sunflower-guide-2020 |
| `c_sort` | Cleaning and grading | Input mass = accepted + downgraded + rejected + measured loss, allowing separately measured moisture change. | Weigh and moisture records | Run mass residual | ndsu-sunflower-guide-2020 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | Reference output | Verify whole commodity seed, market class, grade, actual in-farm hand-off and moisture; no sowing-seed output under the fixed UUID. | Lot and transfer records |
| `q_time` | Foreground package | Capture one full crop cycle and all fields and included treatment runs; disclose gaps. | Dated field and machine logs |
| `q_mass` | All seed states | Reconcile harvest, cleaning, grading and drying mass with moisture and rejects; flag unexplained residual. | Scale calibration and reconciliation sheet |
| `q_route` | Irrigation and drying | Preserve actual water and drying route, metered energy, sequential run links and reject destination. | Meter and equipment logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_identity` | Reference output | Reject missing class, measured moisture, grade or actual hand-off, and reject sowing seed bound to `a62436d6-249c-4ac3-b5f4-653d0f277519`. | ndsu-sunflower-guide-2020 |
| `v_boundary` | Inventory | Verify cultivation, harvest and each actual on-farm cleaning, grading, drying and storage step up to hand-off; do not infer farm-gate grade from the platform label. | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `v_route` | Alternative routes | Require metered irrigation and pump records for irrigated fields and metered fan/fuel records for drying; link sequential technologies. | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `v_balance` | Lots and rejects | Reconcile accepted, downgraded, rejected, returned and lost mass with moisture; a reject becomes accepted only after a linked successful run. | ndsu-sunflower-guide-2020 |
| `v_emissions` | Field elementary flows | Do not accept an anonymous field-emission row or unverified generic factor; require each calculated exchange to name species, method and factor source. | ndsu-sunflower-guide-2020 |
| `v_once` | Shared runs | Check field and period attribution, cleaning changeovers and returned lots to prevent double counting. | ndsu-sunflower-guide-2020 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground whole-sunflower-seed production at an identified in-farm hand-off |
| downstream_use | `secondary_dataset` or `background_dataset` for agricultural whole-seed inputs |
| allowed_use | Oil crushing, confection/food or bird-food seed input when class, grade and moisture match |
| excluded_use | Sowing-seed production, oil, kernels, meal, roasted foods or unrecorded farm-gate grade |
| required_metadata | Farm/region, crop year, class, field/lot, variety if known, hand-off, moisture, grade, conditioning/drying scope, irrigation route |
| required_quality_disclosure | Record coverage, scale/moisture evidence, upstream datasets, missing emission estimates, mass-balance residual and allocation choice |
| update_trigger | Material change in market class, hand-off, water/drying technology, input mix, grade standard or region |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Ver. 3.0 explanatory notes (2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope |
| `ndsu-sunflower-guide-2020` | extension_guidance | North Dakota State University Extension, Sunflower Production Guide A1995, https://www.ndsu.edu/agriculture/sites/default/files/2023-12/a1995.pdf | Market types, field, harvest, grading and conditioning routes |
| `ndsu-sunflower-drying-2022` | extension_guidance | North Dakota State University Extension, “NDSU offers advice on harvesting and drying sunflower in North Dakota” (2022), https://www.ag.ndsu.edu/news/newsreleases/2022/september/ndsu-offers-advice-on-harvesting-and-drying-sunflower-in-north-dakota/ | Conditional drying and moisture evidence |
