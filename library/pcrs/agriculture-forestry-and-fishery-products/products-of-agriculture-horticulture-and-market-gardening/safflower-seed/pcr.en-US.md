---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.safflower-seed
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Safflower seed

## 1. Scope and Applicability

This PCR produces a foreground package for whole, unprocessed safflower (Carthamus tinctorius) grain physically handed over at the farm gate. Include managed annual-crop production, a distinct harvest operation, and the cleaning, sorting, drying or short storage actually completed before handover. Exclude oil extraction, meal manufacture, post-gate transport and consumption. The fixed reference flow denotes harvested grain; it does not prove a certified or treated planting-seed output. Declare cultivar and oleic/linoleic type when known, irrigation, harvest path, seed grade, actual moisture, and gate. Regional buyer moisture limits in the sources are not universal PCR limits. [uc-safflower-production; wisconsin-safflower]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.safflower-seed |
| classification_refs | CPC 3.0 01446 Safflower seed; this raw-grain route is narrower than the whole classification leaf when planting-seed handling is considered. |
| covered_products | Whole harvested safflower grain for oilseed, birdseed or another declared raw-grain market. |
| excluded_products | Extracted oil, press cake or meal, flowers, forage, processed feed, and certified or treated planting-seed output using the fixed grain UUID. |
| representative_product | Whole accepted safflower grain at recorded moisture and grade, at physical farm-gate handover. |
| production_route | Managed annual safflower cultivation is the parent activity. Dryland and irrigated production are alternative management routes: irrigation changes the water and pumping-energy inventory. Direct combining is the parent harvest technology; windrow plus pickup is a conditional alternative with an additional pass and field-drying interval. These harvest choices are mutually exclusive for each lot. [uc-safflower-production; wisconsin-safflower] |
| market_state | Whole unprocessed grain, as-harvested or first-cleaned, with any actual farm-side drying declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole, accepted safflower grain handed over by the farm. |
| How much | 1 kg at measured as-delivered moisture. |
| How well | Declare cultivar/oil class, market grade, admixture/cleaning state, damage and actual moisture. |
| How long or cycle | One identified field crop cycle and its linked harvest and pre-gate conditioning lots. |
| reference_flow_link | Final accepted output of `safflower_grading`, or `safflower_stabilization` when pre-gate drying occurs. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg accepted whole safflower grain at actual handover moisture. |
| Reference product flow | Safflower seed `30eacea6-7a8a-457f-a766-c93480303927` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Location and crop year; cultivar/oil class if known; dryland or irrigated; direct combine or windrow/pickup; actual moisture; cleaning and grade; pre-gate drying/storage; market destination; physical gate. |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Accepted grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured final lot mass and moisture; never substitute wet harvest mass without adjustment. |
| `dry_matter` | Differing moisture states | Mass | kg | Compare dry matter as wet kg × (1 − measured moisture fraction); keep both measured wet masses and moisture values. |
| `field_yield` | Crop cycle | Mass per area | kg/ha | Divide final accepted mass from the field by harvested area; identify any separately sold lower grade. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Record field area, previous crop/land use, soil preparation, seed supply, and available soil nutrient and water conditions at crop-cycle start. |
| starting_condition_role | Starting point for managed annual safflower production, without assuming zero upstream burdens for inputs. |
| product_classification_scope | Whole harvested safflower grain; treated or certified planting seed requires a verified distinct product identity. |
| recursive_input_rule | Planting seed used as an input retains its actual upstream seed dataset; do not recursively treat this grain output as certified seed supply. |
| upstream_dataset_requirement | Link purchased seed, fertilizer, crop protection products, fuel, electricity, water supply, and contracted pre-gate operations to supported upstream datasets or disclose gaps. |
| disclosure | Field/crop year, farm gate, product state and moisture, irrigation, harvest route, actual pre-gate conditioning, all rejects/destinations and missing data. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `field_to_gate` | Foreground system | Include crop management, separate harvest capture, and actual first cleaning, sorting, drying and storage before handover. Standing plants and collected grain are separate states so harvest loss is visible. | uc-safflower-production; wisconsin-safflower |
| `route_delta` | Production and harvest | Irrigated fields add measured water and pumping burdens; dryland fields do not. Windrow/pickup adds cutting, field drying and pickup observations; direct-combine lots omit these. Record one path per lot. | uc-safflower-production; wisconsin-safflower |
| `conditional_nodes` | First handling | Cleaning, drying and storage apply only when physically performed before gate; no California or Upper Midwest moisture target is a global condition. | uc-safflower-production; wisconsin-safflower |
| `downstream` | Exclusions | Oil pressing, meal processing and post-gate transport remain outside. A separately sold residue or lower grade requires recorded mass, destination and attribution. | uc-safflower-production; wisconsin-safflower |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `safflower_cultivation` | Managed safflower crop | required | Every field/crop year; declare dryland or irrigated. | Grow the seed-bearing standing crop and hand it to harvest. | Field area and input ledger. |
| `safflower_harvest` | Grain capture | required | Direct combine or conditional windrow/pickup per lot. | Separate collected grain from plant and record field loss. | Harvest scale and route log. |
| `safflower_conditioning` | First seed conditioning | conditional | Actual first cleaning before gate. | Convert raw harvested grain to prepared whole seed, separating screenings. | In/out scale mass and energy. |
| `safflower_grading` | Grade and destination sorting | required | Classify every transferred lot. | Split accepted, downgraded and rejected states with handoffs. | Grade tickets and mass balance. |
| `safflower_stabilization` | Farm-side drying or storage | conditional | Actual pre-gate stabilization. | Transform usable seed to measured stable handover state. | Mass, moisture, energy and duration. |

All operations are indexed to field/crop cycle and linked harvest or conditioning runs. A re-cleaned reject returns to its original run; its returning mass is not new crop output. Harvest capture is independent from crop growth and first conditioning because it has distinct equipment, collected-state handoff and field losses. Record straw/chaff remaining on land and uncaptured seed loss as separate field observations with distinct fates; neither is a verified elementary emission or accepted farm-gate grain. [uc-safflower-production; wisconsin-safflower]

### Process: Managed safflower crop (`safflower_cultivation`)

#### Inputs

##### Product flows

###### Planting seed (`planting_seed`)

Record the actual safflower seed supply entering each field. A verified planting-seed flow UUID is not yet available; do not reuse the harvested-grain output UUID for a seed-grade input.

- Selected flow: Safflower planting seed, identity unresolved
- Flow property / unit: Mass / kg
- Amount rule: Recorded mass sown by field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field crop cycle.
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: wisconsin-safflower
- Range: Regional planting-rate example for review
  - Range role: Typical range (`typical_range`)
  - Lower: 22
  - Upper: 34
  - Unit: kg seed/ha
  - Basis: one crop hectare; California 20–30 lb/acre regional row or drilled examples, not a universal limit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `uc-safflower-production`

###### Agricultural nutrient and fertilizer inputs (`safflower_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field crop cycle.
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `wisconsin-safflower`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg product/ha
  - Basis: one crop hectare, each fertilizer product separately; provisional screen only, replace with field application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection materials (`crop_protection`)

Record each actual herbicide, fungicide or other protection product separately by formulation and application; omit categories not used on the field.

- Selected flow: Applied crop protection product, identity unresolved until product-specific lookup
- Flow property / unit: Mass / kg product
- Amount rule: Product mass issued or applied by field and event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field crop cycle.
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg product/ha
  - Basis: one crop hectare, each applied protection or harvest-aid product separately; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Include supplied water only on irrigated fields, with source and event recorded. Dryland fields declare the route and have no invented water supply row amount.

- Selected flow: Irrigation water supply, identity unresolved pending source-specific lookup
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or documented delivered water by field and event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per irrigated field crop cycle.
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: one crop hectare; zero on rainfed routes, measured withdrawal/delivery on irrigated routes; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-operation fuel (`field_fuel`)

Record tractor and other cultivation fuel actually consumed, excluding harvest fuel owned by the separate harvest node.

- Selected flow: Actual mobile machinery fuel for field equipment, identity unresolved until carrier-specific lookup
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Metered or allocated litres by field operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field crop cycle.
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/ha
  - Basis: one crop hectare; all assigned field operations, carrier-specific measured litres; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation-pump electricity (`pump_electricity`)

For electric pumping on irrigated fields, record metered electricity separately from supplied water and liquid fuel. Other pumping carriers require their own identified row in the foreground package.

- Selected flow: Purchased electricity for irrigation pumping, identity unresolved pending supply lookup
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered pumping electricity by field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per irrigated field crop cycle.
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh/ha
  - Basis: one crop hectare; conditional electric machinery or irrigation pumping, measured kWh; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

Where a compatible method and measured activity data support a specific managed-field elementary emission, add a separate species-specific exchange with its method, quantity and verified identity in the foreground package. No undifferentiated field-emissions exchange is prescribed here.

#### Outputs

##### Product flows

###### Standing seed-bearing crop (`standing_crop`)

The managed biological output is the standing mature crop handed to harvest, not an extra sold seed output.

- Selected flow: Standing safflower crop, internal state
- Flow property / unit: Area / ha
- Amount rule: Recorded harvested field area and maturity handoff.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per crop cycle.
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: ha/ha cultivated
  - Basis: one recorded cultivated hectare linked once to the harvest field
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Grain capture (`safflower_harvest`)

#### Inputs

##### Product flows

###### Harvest equipment fuel (`harvest_fuel`)

Record actual combine fuel and, for windrow/pickup lots, the separate cutting and pickup fuel. If a contractor service dataset already contains equipment fuel, do not count the same fuel again.

- Selected flow: Actual mobile machinery fuel for harvest equipment, identity unresolved until carrier-specific lookup
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Litres by equipment pass and linked harvest lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per harvest lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L/ha
  - Basis: one harvested hectare, conditional route and measured machinery fuel; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contracted harvest service (`harvest_service`)

When a contractor performs harvest, record the purchased service separately from direct fuel; disclose whether its upstream dataset already includes fuel and equipment.

- Selected flow: Actual contracted harvest service, identity unresolved pending supplier/service lookup
- Flow property / unit: Service / documented operating hour
- Amount rule: Invoiced equipment hours or other documented service quantity by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per harvest lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h/ha
  - Basis: one harvested hectare, contracted machine operating time recorded separately from fuel; provisional screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Captured raw grain (`raw_grain`)

Weigh uncleaned captured seed with admixture and actual moisture before sending it to first cleaning or grade sorting.

- Selected flow: Harvested safflower grain, internal pre-cleaning state
- Flow property / unit: Mass / kg
- Amount rule: Scale mass and moisture per lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: uc-safflower-production; wisconsin-safflower
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

### Process: First seed conditioning (`safflower_conditioning`)

#### Inputs

##### Product flows

###### Raw harvested seed intake (`conditioning_seed_input`)

Weigh the harvested grain entering first cleaning and link any rejected lot returned for re-cleaning to its original run.

- Selected flow: Raw harvested safflower grain, internal pre-cleaning state
- Flow property / unit: Mass / kg
- Amount rule: Incoming grain mass and measured moisture by cleaning run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning electricity (`conditioning_electricity`)

Include electricity metered for actual cleaning equipment; assign shared meter periods once by throughput or documented run time.

- Selected flow: Purchased electricity for cleaning, identity unresolved pending supply lookup
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered or justified allocated kWh per cleaning run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning fuel (`conditioning_fuel`)

Include fuel only if an engine powers first cleaning, as a separate carrier from electricity; do not count the same machine service twice.

- Selected flow: Actual cleaning-equipment fuel, identity unresolved until carrier-specific lookup
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Litres consumed or justified allocated to the cleaning run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: uc-safflower-production; wisconsin-safflower
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

Hand cleaned whole grain to grade sorting; this is an internal state, not a second sale.

- Selected flow: Prepared whole safflower grain, internal state
- Flow property / unit: Mass / kg
- Amount rule: Weighed clean mass and moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Screenings (`screenings`)

Classify broken seed, empty seed, weed seed and hull fragments by actual recovery, sale or disposal destination.

- Selected flow: Safflower cleaning screenings, identity unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled removed mass by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grade and destination sorting (`safflower_grading`)

#### Inputs

##### Product flows

###### Seed lot to classify (`grade_input`)

Classify as-harvested or cleaned grain against declared buyer requirements and record mass and moisture before the split.

- Selected flow: Whole safflower grain, internal input state
- Flow property / unit: Mass / kg
- Amount rule: Incoming lot mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per grade lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: uc-safflower-production; wisconsin-safflower
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

###### Accepted raw-grain grade (`accepted_seed`)

Accepted whole seed goes to farm-gate sale or actual pre-gate drying. Count only its final handover mass as reference output.

- Selected flow: Safflower seed `30eacea6-7a8a-457f-a766-c93480303927`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Weighed accepted seed at measured moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final farm-gate seed.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded sold grain (`downgraded_seed`)

If a lower grade actually sells, weigh and identify its destination separately; do not assume it is waste or merge it into accepted mass.

- Selected flow: Downgraded safflower grain, identity unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed sold lower grade by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per grade lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-spec reject (`grade_reject`)

Link rejects to the originating grade run and to re-cleaning, documented recovery or disposal; never count unreworked rejects as accepted.

- Selected flow: Rejected safflower seed, identity unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed reject and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per grade lot.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Farm-side drying or storage (`safflower_stabilization`)

#### Inputs

##### Product flows

###### Usable seed before stabilization (`stabilization_seed_input`)

Record the accepted whole-seed lot entering an actual pre-gate drying or storage run with inlet mass and moisture.

- Selected flow: Whole safflower grain, internal pre-stabilization state
- Flow property / unit: Mass / kg
- Amount rule: Measured inlet mass and moisture by run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilization run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dryer fuel (`dryer_fuel`)

When a fuel-fired dryer actually operates before gate, record the identified carrier and consumed litres separately from seed and electricity.

- Selected flow: Actual stationary combustion fuel for the dryer, identity unresolved until carrier-specific lookup
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Metered or justified allocated litres for the drying run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilization run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: L liquid fuel/kg processed seed
  - Basis: per kg seed entering this actual conditioning or drying run; liquid-fuel screen only, convert other carriers separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dryer electricity (`dryer_electricity`)

Record electricity actually used by dryer fans or controls; do not combine it with fuel or seed mass.

- Selected flow: Purchased electricity for drying, identity unresolved pending supply lookup
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered or justified allocated kWh for the drying run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilization run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage electricity (`storage_electricity`)

If seed is stored before gate, record ventilation or handling electricity during the documented storage period separately from active drying.

- Selected flow: Purchased electricity for farm-side storage, identity unresolved pending supply lookup
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered or justified allocated kWh and storage duration by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilization run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: wisconsin-safflower
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg processed seed
  - Basis: per kg seed entering this actual cleaning, sorting, drying or storage run; provisional screen only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized seed at gate (`stabilized_seed`)

The measured final mass/moisture supersedes the pre-drying grade mass as reference output; no universal target moisture is imposed.

- Selected flow: Safflower seed `30eacea6-7a8a-457f-a766-c93480303927`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Weighed final accepted seed at actual moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final farm-gate seed.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: uc-safflower-production; wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Damaged seed (`stabilization_reject`)

Identify actual spoilage or damaged seed with measured quantity and disposal/recovery destination.

- Selected flow: Damaged safflower seed, identity unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed off-spec mass by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilization run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: wisconsin-safflower
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Evaporated drying water (`drying_water`)

Calculate actual water loss from inlet/outlet mass and moisture without treating it as sold grain or dry matter loss.

- Selected flow: Water to air, semantic elementary flow
- Flow property / unit: Mass / kg
- Amount rule: Inlet wet mass less outlet wet mass after separately accounting for rejected dry material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per drying run.
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization`
- Sources: wisconsin-safflower
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
| `single_seed_product` | Normal crop | Attribute crop and harvest burdens to accepted grain when straw stays in the field, uncaptured seed is lost, and screenings/rejects are discarded; these are not presumed saleable co-products. | uc-safflower-production; wisconsin-safflower |
| `separate_sale` | Sold lower grade or residue | If lower-grade seed, screenings or straw actually sells, measure its mass/destination and document process subdivision or justified allocation before dataset use. No default economic split is supplied. | uc-safflower-production; wisconsin-safflower |
| `run_attribution` | Shared runs | Link inputs to crop cycle and harvest, cleaning, drying and changeover energy to actual lots/runs. Assign a shared meter period once by measured throughput or documented time and include re-cleaning energy without double counting returned seed. | uc-safflower-production; wisconsin-safflower |
| `reject_exclusion` | Rework | Accepted reference mass excludes rejected mass unless a linked rework pass restores accepted grade; the returning mass is not a new farm output. | uc-safflower-production; wisconsin-safflower |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The quantity ranges on flow cards are review triggers before normalization, not inventory defaults or universal acceptance limits. Use actual field, lot and run records for amounts; investigate values outside provisional screens against route, region, units and measurement quality. Regional planting-rate examples are illustrative only.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field` | `safflower_cultivation` | Field inputs and irrigation | Field log, invoices and meters | field_id, area_ha, crop_year, seed_kg, product_id, applied_kg, fuel_L, irrigation_m3, pump_kWh, route | Reconcile issue log and meters | ha; kg; L; m3; kWh | Each event | Full crop cycle | Each field | Sum by field/year/input | Invoices, log, meter, area record |
| `cp_harvest` | `safflower_harvest` | Capture and field loss | Work log, scale, moisture test | lot_id, field_id, direct_or_windrow, dates, fuel_L, service_hours, grain_kg, moisture, straw_chaff_kg, uncaptured_seed_kg, residue_fate | Weigh lot and observe residue and uncaptured seed separately | kg; fraction; L | Each lot | Harvest window | Field and route | One recorded path and mass per lot | Scale ticket, work log, moisture test |
| `cp_conditioning` | `safflower_conditioning` | Cleaning and screenings | Run ledger and meters | run_id, lot_id, in_kg, out_kg, screenings_kg, electricity_kWh, fuel_L, return_id, destinations | Weigh input/output and meter energy | kg; kWh or fuel unit | Each run | Before gate | Farm or pre-gate contractor | Link returns, balance mass | Scale, meter and disposition tickets |
| `cp_grade` | `safflower_grading` | Grade and handover | Grade/sale ticket | lot_id, grade, accepted_kg, downgrade_kg, reject_kg, moisture, gate_date, destinations | Apply declared buyer grade and weigh states | kg; fraction | Each lot | Before gate | Farm gate | Sum final accepted once | Grade and scale tickets |
| `cp_stabilization` | `safflower_stabilization` | Actual drying/storage | Dryer and store log | run_id, lot_id, inlet_kg, outlet_kg, inlet_moisture, outlet_moisture, dryer_fuel_L, dryer_electricity_kWh, storage_electricity_kWh, duration, reject_kg | Weigh and moisture-test both sides; meter energy | kg; fraction; energy unit; days | Each run | Before gate | Farm/contractor | Dry-matter balance, final accepted once | Scale, moisture, energy records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_yield` | Field crop cycle | Final accepted kg ÷ harvested ha at declared moisture; disclose separate lower-grade sale. | accepted_kg, area_ha | kg/ha | wisconsin-safflower |
| `mass_balance` | Harvest through gate | Raw grain = final accepted + downgraded + rejected + process dry-matter loss + net water loss; count returned rework once and explain residual. | Linked lot/run masses and moisture | Balance residual and destination | uc-safflower-production; wisconsin-safflower |
| `dry_matter_balance` | Drying | Dry mass = wet kg × (1 − measured moisture fraction) for inlet and outlet; report separately removed dry matter. | Inlet/outlet mass and moisture | Dry matter and evaporated water | wisconsin-safflower |
| `shared_run` | Shared equipment period | Assign measured period energy once by measured throughput or justified time; record mixed-product changeover. | Meter total, runs, throughput/time | Energy per run | wisconsin-safflower |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | Final product | Demonstrate whole grain, farm gate, actual moisture and accepted grade; planting-seed claim needs separate verified identity. | Sale, grade, UUID identity records |
| `routes` | Production/harvest | Identify dryland or irrigated and direct or windrow route for every field/lot; keep added operations explicit. | Field water and harvest work logs |
| `completeness` | Mass and energy | Link field, harvest, cleaning, grading and drying; disclose missing meters, estimated shared loads and material-balance residual. | Linked scale, moisture and meter records |
| `period` | Temporal coverage | Declare crop year and actual pre-gate storage period; separate years unless an aggregation rule is documented. | Crop and storage log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `valid_identity` | Reference output | Require grain UUID `30eacea6-7a8a-457f-a766-c93480303927`, Mass property, mass unit group, kg, actual moisture, grade and farm gate; reject planting-seed use of this fixed grain identity. | uc-safflower-production; wisconsin-safflower |
| `valid_routes` | Fields and harvest lots | Every field has dryland/irrigated status and every lot exactly one direct or windrow/pickup path; selected irrigation and windrow routes require their additional records. | uc-safflower-production; wisconsin-safflower |
| `valid_nodes` | Conditional handling | Activated cleaning or drying/storage nodes need linked input/output mass, energy and reject disposition; absent nodes get no invented default burden or global moisture threshold. | uc-safflower-production; wisconsin-safflower |
| `valid_balance` | Grade, rework, shared runs | Reconcile accepted, downgraded, rejected and drying water by linked lot within a disclosed tolerance; keep straw/chaff and uncaptured seed as separately observed fates, not an invented elementary exchange; rejected grain needs a disposition and linked rework before acceptance; count shared energy once. | uc-safflower-production; wisconsin-safflower |
| `valid_scope` | Dataset use | Exclude pressing/meal and disclose any separately sold residue or screenings with attribution method. | uc-safflower-production; wisconsin-safflower |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground crop and first farm-gate grain data package; review is needed before publication. |
| downstream_use | `secondary_dataset`; `background_dataset` only where region, year, route, grade and moisture are representative. |
| allowed_use | Comparable raw whole safflower grain at the farm gate with declared routes and state. |
| excluded_use | Planting seed, extracted oil, meal, processed feed, unknown gate or unknown moisture state. |
| required_metadata | Crop year, region, field area, cultivar/oil class, irrigation, harvest route, grade, actual moisture, conditioning, storage, allocation, gate and UUIDs. |
| required_quality_disclosure | Field/lot coverage, measured versus allocated values, balance residual, unresolved flow identities and regional applicability. |
| update_trigger | New verified planting-seed identity, changed market route, new primary records, changed regional practice or revised product flow. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| uc-safflower-production | extension_guidance | University of California Agriculture and Natural Resources, Safflower Production in California, Publication 21565, https://oilseeds.ucdavis.edu/sites/g/files/dgvnsk14771/files/inline-files/21565e.pdf | Harvest mode, losses, farm conditioning and downstream oil/meal distinction; California thresholds are regional. |
| wisconsin-safflower | extension_guidance | University of Wisconsin and University of Minnesota extension, Safflower, Alternative Field Crops Manual (1992), https://corn.aae.wisc.edu/Crops/Safflower.aspx | Crop system, irrigation, harvest, cleaning, drying and buyer/storage distinction. |
