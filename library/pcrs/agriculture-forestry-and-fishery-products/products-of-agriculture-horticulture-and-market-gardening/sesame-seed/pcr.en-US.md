---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sesame-seed
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Sesame seed

## 1. Scope and Applicability

This PCR covers whole, unprocessed Sesamum indicum grain from crop establishment through transfer at the farm gate. It includes separately measured field production, harvest and threshing, first cleaning, conditional moisture stabilization and grading. Rainfed and irrigated cultivation are alternative implementations of managed crop production. Shattering varieties can require cutting, field drying and manual threshing; shatter-resistant varieties permit direct combine harvesting. Record the chosen route, associated energy and seed loss for each field and run. Oil extraction, dehulling, roasting and milling are downstream. The fixed platform flow is harvested grain; it is not a verified planting-seed output. [ncstate-sesame-2026; tamu-sesame-2007]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sesame-seed` |
| classification_refs | CPC 3.0 `01444`; narrower grain route |
| covered_products | Whole sesame commodity grain, with declared color and market grade |
| excluded_products | Any sesame seed produced or sold for sowing, regardless of certification; dehulled, roasted or ground seed; oil and meal |
| representative_product | Whole harvested and first-cleaned sesame grain |
| production_route | Annual managed sesame crop; rainfed or irrigated; manual/field-thresh or direct-combine harvest; first cleaning and conditional drying |
| market_state | Unprocessed whole grain at farm gate, with measured moisture, foreign matter and broken-seed state |

The narrower mapping reflects the verified grain flow. A planting-seed route requires a separately verified output identity and method.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole harvested sesame grain accepted at the farm gate |
| How much | 1 kg net seed mass |
| How well | Declare variety, color, grade, moisture, foreign matter and broken-seed fractions |
| How long or cycle | One crop cycle through farm-gate transfer |
| reference_flow_link | `accepted_gate_seed` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net whole sesame grain |
| Reference product flow | Sesame seed `fa13af02-bb6e-4d44-a4a8-6464c0eece63` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Farm and crop year; cultivar and shattering trait; rainfed or irrigated; manual or mechanical harvest; grain moisture, damage, foreign matter, color and grade; actual pre-gate conditioning |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_gate_mass` | Reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use weighed accepted whole-seed mass at actual gate moisture; never silently substitute dry matter. |
| `mass_balance` | Harvest, conditioning and gate | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile captured seed to accepted, downgraded, rejected and conditioning loss, accounting for moisture change; report field loss separately before capture. |
| `area_yield` | Field records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain original area and input records; normalize attributed crop-cycle inventory by accepted gate kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field before sesame sowing, with previous crop and land condition disclosed; purchased seed and inputs enter with independent upstream burdens. |
| starting_condition_role | Declared crop-cycle starting point, not a zero-impact input. |
| product_classification_scope | Whole commodity sesame grain only. |
| recursive_input_rule | Sown sesame is a measured input; do not feed the gate output into its own crop model. Resolve the sowing seed to an independent upstream dataset or disclose the gap. |
| upstream_dataset_requirement | Link seed, fertilizers, protection products, fuel, electricity and purchased services to independent upstream datasets where used. |
| disclosure | Field, season, water regime, cultivar trait, harvest route, pre-gate handling, gate location, rejection path and residue disposition. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `crop_boundary` | Field to gate | Include actual sowing, crop management, harvest, first cleaning, grading and any pre-gate drying, including contracted pre-gate work. | `ncstate-sesame-2026`; `tamu-sesame-2007` |
| `capture_boundary` | Standing mature crop | Separate harvest from growth: capsule opening, hand or header capture, and threshing determine recovered mass and loss. | `ncstate-sesame-2026` |
| `downstream_boundary` | After gate | Exclude post-gate transport, food processing, oil pressing, dehulling and roasting. | `tamu-sesame-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_management` | Managed sesame crop | required | Every field/cycle, rainfed or irrigated | Grow mature capsules; irrigation adds water and pumping records | Field-cycle inputs per accepted kg |
| `harvest_thresh` | Seed capture and threshing | required | Manual/field-thresh or direct combine according to cultivar and practice | Capture raw seed; measure shattering and equipment loss | Captured kg by field/run |
| `first_clean_dry` | First cleaning and stabilization | conditional | Include actual cleaning or drying; declare bypass otherwise | Remove chaff and foreign matter; stabilize high-moisture seed | Weighed input/output and energy by pass |
| `grade_gate` | Grade and farm-gate release | required | Every transferred lot | Split accepted, downgraded and rejected destinations | Net gate kg |

Cultivation is field-cycle based. Harvest and conditioning are lot/run based. Link every run to its originating field; assign cleaning and changeover energy once. Survey capsule shattering and cutting/header/threshing losses as field-retained seed or residues before capture, with method and destination recorded under `cp_harvest`; they are not a transferred waste flow or saleable output. An off-spec seed lot can return to cleaning, be downgraded to a documented buyer or become waste after a documented decision. Reworked material retains original burdens plus additional pass burdens.

### Process: Managed sesame crop (`crop_management`)

#### Inputs

##### Product flows

###### Sowing seed (`sowing_seed`)

Record purchased or retained planting material as an independent upstream product; the fixed grain output UUID must not stand in for any sowing seed.

- Selected flow: Sesame sowing material, independently verified
- Flow property / unit: Mass / kg
- Amount rule: Actual kg sown by field.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted gate kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Regional planting-rate example for review
  - Range role: Typical range (`typical_range`)
  - Lower: 1.1
  - Upper: 3.4
  - Unit: kg seed/ha
  - Basis: one crop hectare; NC 1 lb/acre and Texas 3 lb/acre regional planting examples, not a universal limit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ncstate-sesame-2026`; `tamu-sesame-2007`

###### Agricultural nutrient and fertilizer inputs (`crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted gate kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ncstate-sesame-2026`
- Range: Consolidated nutrient-product QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg product/ha
  - Basis: sum of separately recorded mineral fertilizer, organic fertilizer, lime and nutrient-bearing amendment product masses per crop hectare; screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product applied (`protection_input`)

Record each herbicide, insecticide or fungicide used, including active ingredient and concentration, without assuming an application.

- Selected flow: Applied crop-protection product, identified per formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual kg of this formulation applied in the field-cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted gate kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ncstate-sesame-2026`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg product/ha
  - Basis: one crop hectare, each applied protection or harvest-aid product separately; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest aid applied (`harvest_aid_input`)

Include a desiccant or other harvest aid only if applied; retain product identity and application event.

- Selected flow: Applied harvest-aid product, identified per formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual kg applied before harvest.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted gate kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ncstate-sesame-2026`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg product/ha
  - Basis: one crop hectare, each applied protection or harvest-aid product separately; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel (`field_fuel`)

Record fuel for actual planting, cultivation, spraying or pumping operations; share equipment use by logged time or area.

- Selected flow: Field machinery fuel, identified per fuel type
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Measured or invoiced litres attributed to the field-cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted gate kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/ha
  - Basis: one crop hectare; all assigned field operations, carrier-specific measured litres; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field electricity (`field_electricity`)

Record metered electricity for irrigation pumping or other actual crop operations, if used.

- Selected flow: Electricity supplied to the field operation
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered kWh attributed to this field-cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted gate kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh/ha
  - Basis: one crop hectare; conditional electric machinery or irrigation pumping, measured kWh; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

The irrigated production branch adds measured delivered water and source; rainfed fields declare no irrigation.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or documented water delivered to the field-cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted gate kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `tamu-sesame-2007`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: one crop hectare; zero on rainfed routes, measured withdrawal/delivery on irrigated routes; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature crop hand-off (`mature_crop`)

The crop is a standing biological intermediate handed to harvest, not a second gate product.

- Selected flow: Mature sesame-bearing plants, internal
- Flow property / unit: Mass / kg
- Amount rule: Estimate standing seed mass from field samples and link field and season to harvest lot; retain area in `cp_field`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg/ha
  - Basis: one crop hectare; provisional standing biomass screen, not a second saleable seed output
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Seed capture and threshing (`harvest_thresh`)

#### Inputs

##### Product flows

###### Harvest machinery fuel (`harvest_fuel`)

Record fuel for actual cutting, threshing or combining machines. For shattering varieties, cutting, field drying, bundling and manual threshing labor hours stay in `cp_harvest`; a direct-combine run reports combine passes. These technology routes are mutually exclusive for a harvest run. [ncstate-sesame-2026]

- Selected flow: Harvest machinery fuel, identified per fuel type
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Actual litres consumed by harvest run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per captured kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L/ha
  - Basis: one harvested hectare, conditional route and measured machinery fuel; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Captured raw seed (`raw_seed`)

Weigh threshed seed before cleaning; state moisture, visible debris and damaged-seed condition.

- Selected flow: Raw whole sesame seed, internal
- Flow property / unit: Mass / kg
- Amount rule: Weighed seed captured by field/run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per captured kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg raw seed/ha
  - Basis: one harvested hectare; provisional broad captured-seed screen before first conditioning, replace with scale records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: First cleaning and stabilization (`first_clean_dry`)

#### Inputs

##### Product flows

###### Raw seed for conditioning (`seed_to_clean`)

Use the linked raw harvest lot; no new independent supply is created.

- Selected flow: Raw whole sesame seed, internal
- Flow property / unit: Mass / kg
- Amount rule: Weighed incoming lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning electricity (`cleaning_electricity`)

Include electricity for actual seed cleaning passes. A lot bypassing cleaning has no cleaning electricity.

- Selected flow: Electricity supplied to seed-cleaning equipment
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered kWh by lot and pass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Sources: `tamu-sesame-2007`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying electricity (`drying_electricity`)

Include fan or electrically heated drying electricity only when moisture stabilization occurs before gate.

- Selected flow: Electricity supplied to seed-drying equipment
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered kWh by lot and drying pass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying fuel (`drying_fuel`)

Include thermal fuel only when fuel-fired pre-gate drying actually occurs; state fuel identity.

- Selected flow: Stationary combustion fuel for drying, identified per fuel type
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Metered or invoiced litres by lot and drying pass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: L liquid fuel/kg processed seed
  - Basis: per kg seed entering this actual conditioning or drying run; liquid-fuel screen only, convert other carriers separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared whole seed (`prepared_seed`)

After actual debris removal and any moisture stabilization, hand whole seed to grading; record before/after moisture and mass.

- Selected flow: Prepared whole sesame seed, internal
- Flow property / unit: Mass / kg
- Amount rule: Weighed post-conditioning lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-spec whole seed (`offspec_seed`)

Separate recoverable or downgradable whole sesame seed from foreign-material screenings. Record its re-cleaning loop, buyer or final disposal decision; only a sold lot becomes a distinct product at the gate.

- Selected flow: Off-spec whole sesame seed, internal
- Flow property / unit: Mass / kg
- Amount rule: Weighed off-spec seed mass per pass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Foreign-material screenings (`screening_chaff`)

Record removed chaff and foreign material as a waste output when it leaves conditioning for disposal. It is distinct from recoverable off-spec seed.

- Selected flow: Chaff and foreign-material screenings
- Flow property / unit: Mass / kg
- Amount rule: Weighed screenings removed by cleaning pass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per prepared kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Sources: `tamu-sesame-2007`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grade and farm-gate release (`grade_gate`)

#### Inputs

##### Product flows

###### Whole seed to grade (`seed_to_grade`)

Grade the identified prepared lot, or the captured lot when conditioning is explicitly bypassed.

- Selected flow: Whole sesame seed, internal
- Flow property / unit: Mass / kg
- Amount rule: Weighed grading input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted kg
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted gate seed (`accepted_gate_seed`)

The sole fixed reference output is accepted unprocessed whole sesame grain with actual grade and moisture.

- Selected flow: Sesame seed `fa13af02-bb6e-4d44-a4a8-6464c0eece63`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Weighed accepted net seed at farm gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg accepted farm-gate seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sold downgraded seed (`downgraded_seed`)

A sold lower-grade lot is separate from accepted reference mass; retain documented buyer and use.

- Selected flow: Downgraded whole sesame grain, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass sold as lower grade.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unsold rejected seed (`gate_reject`)

Trace rejected material to re-cleaning, recovery or disposal. Re-entry retains the originating crop and harvest burdens.

- Selected flow: Rejected sesame, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected mass by final path.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per accepted kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_product` | Grain with retained stalk and loss | Attribute crop burdens to saleable seed; field-retained stalks and unrecovered or unsold seed are not reference product. Record actual residue destination. | `ncstate-sesame-2026` |
| `grade_split` | Accepted and sold downgraded grain | Keep grades and masses separate. If both are sold, allocate common burdens on physical seed mass, disclosing shares and grade criteria; economic allocation requires a justified exception and documented prices. | `tamu-sesame-2007` |
| `sold_residue` | Deliberately sold stalk or chaff | If residues are marketed, record dry mass and destination and review multi-output allocation before release; do not assume zero burden. | `ncstate-sesame-2026` |
| `run_rework` | Shared runs and re-cleaning | Attribute shared machinery, cleaning and changeovers once using recorded time or mass. A reworked lot retains original burdens plus each actual additional pass; intermediate mass is not counted twice. | `tamu-sesame-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The quantity ranges on flow cards are review triggers before normalization, not inventory defaults or universal acceptance limits. Use actual field, lot and run records for amounts; investigate values outside provisional screens against route, region, units and measurement quality. Regional planting-rate examples are illustrative only.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field` | `crop_management` | Crop inputs and water | Field log and invoice | Field; area; crop year; cultivar; water route; field sample seed mass; each input identity and mass; fuel L; electricity kWh; irrigation m3 | Match application and meter logs to each field | kg; L; kWh; m3; ha | Each operation | Whole crop cycle | Every contributing field | Sum actual use; apportion shared operations once | Invoices, meter and application logs |
| `cp_harvest` | `harvest_thresh` | Capture, loss, residue | Harvest log and field survey | Field; run; capsule trait; harvest mode; fuel; labor; raw kg; moisture; estimated loss; residue path | Weigh lots and survey loss by stated method | kg; h; L; percent | Each run | Whole harvest | Each field/run | Join lot to field cycle; sum actual runs | Scale, moisture and loss records |
| `cp_condition` | `first_clean_dry` | Cleaning, drying and rejects | Batch log and meter | Lot; pass; input/output kg and moisture; cleaning kWh; drying kWh; drying fuel L; off-spec seed kg and path; screenings kg and path | Weigh and test each pass or record bypass | kg; percent; kWh; L | Each pass | Before gate | Farm and contracted pre-gate site | Count each pass once | Scale, meter, test and disposal tickets |
| `cp_gate` | `grade_gate` | Accepted and other grade states | Grade and transfer ticket | Lot; accepted kg; moisture; color; foreign matter; broken seed; grade; downgraded/rejected kg and path | Weigh, inspect and grade before transfer | kg; percent | Each lot | Crop year | Each gate | Sum accepted output for denominator; retain other destinations | Signed ticket and quality report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reconcile_seed` | Harvest through gate | Estimate available standing seed as captured seed plus separately surveyed field loss. For the post-capture lot, captured mass = accepted + downgraded + rejected + conditioning loss + moisture-change adjustment; investigate residual difference. | Scale, moisture and field-loss records | Reconciled lot balance with separate field-loss record | `tamu-sesame-2007`; `ncstate-sesame-2026` |
| `normalize_gate` | All attributed inventory | Divide attributed input/emission totals by net accepted gate kg; retain field/run links. | Input records, allocation and gate tickets | Per-kg inventory |  |
| `capture_loss_rate` | Harvest route comparison | Report surveyed lost seed mass relative to estimated available seed, with method and uncertainty. | Loss survey and captured mass | Capture-loss fraction | `ncstate-sesame-2026` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `product_identity` | Final product | Verify whole sesame grain, cultivar, color, grade, farm-gate state; no sowing-seed substitution. | Crop and sale records |
| `mass_moisture` | Harvest and gate | Keep original scale and moisture tests; disclose any estimates and unexplained balance difference. | Scale and lab/sample sheets |
| `route_coverage` | Field and batches | Show complete field/run coverage and final paths for rework, sold downgrade, waste and residue. | Field, run and disposition logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | Gate product | Require fixed whole-seed UUID, mass property/group, kg and actual gate state; reject oil, dehulled and sowing-seed products under this flow. |  |
| `validate_routes` | Field and harvest | Require rainfed/irrigated and manual/direct-combine choices with cultivar and run evidence; include pumping for irrigation and prevent default simultaneous harvest routes. | `ncstate-sesame-2026`; `tamu-sesame-2007` |
| `validate_loss_grades` | Harvest and conditioning | Require loss method, moisture, cleaning/drying passes or bypass, and accepted/downgraded/rejected destinations; no rejected seed in accepted mass. | `ncstate-sesame-2026`; `tamu-sesame-2007` |
| `validate_run_burdens` | Shared machinery and rework | Count each run, cleaning/changeover and rework pass once; resolve unexplained mass imbalance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate whole sesame grain dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review |
| allowed_use | Whole commodity sesame grain at a comparable farm gate with disclosed region, year, route, moisture and grade |
| excluded_use | Any sowing-seed output; oil, meal, dehulled, roasted or ground products; assuming regional extension input rates are universal |
| required_metadata | Farm and crop year; field area; variety and shattering trait; water and harvest mode; lot lineage; gate; moisture, color and grade |
| required_quality_disclosure | Coverage and missing inputs; measured versus estimated losses; shared-run attribution; rejected and residue paths; upstream seed identity |
| update_trigger | Verified planting-seed flow, materially new harvest or conditioning route, changed gate or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ncstate-sesame-2026` | `extension_guidance` | NC State Extension, Sesame Production Fact Sheet (2026), https://content.ces.ncsu.edu/sesame-production-fact-sheet | Biological production, shattering, harvest route, loss and moisture |
| `tamu-sesame-2007` | `extension_guidance` | Texas A&M AgriLife Research and Extension Center, Sesame Production Guide (2007), https://sanangelo.tamu.edu/agronomy/agronomy-publications/sesame-production-guide/ | Irrigation distinction, combine damage, first cleaning and grade handling |
