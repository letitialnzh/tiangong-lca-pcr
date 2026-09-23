---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Hop cones

## 1. Scope and Applicability

This PCR covers whole hop cones from establishment of a perennial managed hop yard through the declared farm-gate hand-off. It includes yard establishment, crop management, harvest, cone separation, cleaning and grading. The normal route may end with accepted wet cones. Drying is included only when the declared hand-off is dried whole cones and the farm or included foreground operator controls it.

The managed object is female *Humulus lupulus* trained on a support system. Manual selective picking and mechanical whole-bine harvest are alternative implementations of the harvest activity. Their topology, energy, collected material and chaff differ, so a dataset shall identify the route and shall not combine mutually exclusive operations without measured weights. Pelletizing, milling, extraction, brewing, merchant storage, downstream packaging and post-gate transport are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones |
| classification_refs | CPC 3.0:01659 Hop cones |
| covered_products | Accepted whole hop cones at farm gate, in wet/fresh state or route-declared dried whole-cone state |
| excluded_products | Pellets, powders, extracts, oils, brewed products, plants for propagation, shoots, leaves, bines and roots |
| representative_product | Marketable whole hop cones from a managed perennial hop yard |
| production_route | Perennial production, harvest, cone separation and grading; manual and mechanical harvest coexist as declared alternatives; drying is conditional |
| market_state | Accepted wet cones for immediate use, or dried whole cones only when drying is explicitly included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted route-declared farm-gate hop cones |
| How much | 1 kg net mass |
| How well | Whole cones meeting the reported acceptance specification, excluding leaves, stems, chaff and rejected cones |
| How long or cycle | One declared harvest within a model that attributes establishment and shared assets over the evidenced productive life |
| reference_flow_link | Net accepted output from `grading_handoff` for wet cones or `conditional_drying` for dried whole cones |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wet or dried whole-cone state; moisture or dry-matter basis and test method; cultivar; harvest route; harvest date or campaign; geography; acceptance grade; farm-gate hand-off; drying inclusion |
| Binding | `fixed` |

All qualifiers are mandatory. The reference is accepted cone mass in the declared state, not standing crop, whole bines, harvester mixture, chaff, rejects or dry matter.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net accepted cone mass after grading; tare containers and exclude leaves, stems, chaff and rejects. |
| `moisture_state` | Wet and dried routes | Mass fraction or dry-matter fraction | kg/kg or % | Record sampling and test method and time; do not convert states without lot-specific moisture fractions. |
| `area_period_conversion` | Yard inventory | Mass or service per occupied area and period | stated unit/ha/year | Link every record to yard area, crop year and lifecycle phase before normalization to accepted output. |
| `drying_reconciliation` | Conditional drying | Mass | kg | Reconcile wet input, dried accepted output, rejects and water removed on one batch basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural land at hop-yard establishment, with planting material, infrastructure, nutrients, water, crop-protection products and energy crossing as inputs |
| starting_condition_role | Start of the foreground perennial hop-yard system |
| product_classification_scope | CPC 3.0:01659 whole hop cones |
| recursive_input_rule | Purchased hop cones are separate upstream Product inputs and never relabelled own-farm production; planting rhizomes or plants are planting material, not cone reference flow |
| upstream_dataset_requirement | Traceable upstream datasets for planting material, infrastructure materials, energy, water, nutrient and crop-protection products, resolved to concrete UUIDs during dataset construction |
| disclosure | Yard location and area, establishment year, phases represented, cultivar, trellis and irrigation configuration, harvest route, wet/dried hand-off, drying ownership, reporting period and excluded capital items |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_yard` | Yard production | Include establishment, planting, trellis/support and irrigation infrastructure, crop management and field emissions; link each item to establishment, productive, replacement or termination periods. | `cornell-hop-yard-2017`; `cordella-hop-lca-2026` |
| `boundary_harvest_separate` | Harvest | Model harvest independently because it removes the output from perennial production and manual and mechanical routes create different collected states and burdens. | `uf-ifas-hop-harvest-2019` |
| `boundary_conditioning` | Separation and grading | Include cone separation, leaf and chaff removal, grading and immediate breathable handling. | `uf-ifas-hop-harvest-2019`; `penn-state-hop-production` |
| `boundary_wet_route` | Wet route | End at accepted graded wet cones; exclude drying, kiln assets and subsequent storage. | `penn-state-hop-production` |
| `boundary_dried_route` | Dried route | Include drying only for an explicitly declared dried whole-cone hand-off controlled by the foreground; record pre-state, moisture, energy, loss and post-state. | `cornell-hop-yard-2017` |
| `boundary_rejects` | Grading and drying | Separate accepted, downgraded, single-pass rework, rejected and chaff states and document every destination. | `penn-state-hop-production` |
| `boundary_downstream` | All routes | Exclude pelletizing, extraction, brewing, merchant storage, downstream packaging and post-gate transport. | `penn-state-hop-production` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yard_production` | Hop-yard establishment and perennial production | required | All routes | Establish and manage female hop plants and deliver mature cone-bearing crop to harvest | Occupied hectare and crop year reconciled to accepted output over the attribution window |
| `harvest_capture` | Harvest and capture | required | All routes | Remove cones or cone-bearing bines and create a lot-indexed collected state | Harvest input and collected mixture by lot or campaign |
| `grading_handoff` | Cone separation, cleaning, grading and wet hand-off | required | All routes | Separate cones and classify accepted, downgraded, rework, reject and chaff states | Lot mass balance |
| `conditional_drying` | Whole-cone drying and stabilization | conditional | Dried whole-cone hand-off only | Stabilize accepted wet cones and hand off dried whole cones | Batch wet input, energy, water removed and dry outputs |

### Process: Hop-yard establishment and perennial production (`yard_production`)

This seasonal process is indexed by yard and crop year. Establishment, immature, productive, replacement and termination phases remain distinguishable.

#### Inputs

##### Product flows

###### Planting and shared yard infrastructure (`establishment_infrastructure`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Female hop planting material, trellis poles, wire, anchors, strings and irrigation assets
- Amount rule: Record each concrete material, installation or replacement year, service area, consuming nodes and evidenced service life; attribute each burden once across accepted output from its service periods.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted route-declared farm-gate hop cones over the declared productive-life scenario
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yard_assets`
- Sources: `cornell-hop-yard-2017`; `cordella-hop-lca-2026`
- Range: Provisional attributed establishment-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg material/kg accepted hop cones
  - Basis: planting and infrastructure material attributed once to 1 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`agricultural_nutrient_supply`)

This single card covers all mineral fertilizers, organic fertilizers and nutrient-bearing amendments in this process. Actual products and nutrient analyses are collected separately.

- Selected flow: Agricultural nutrient supply products used in the hop yard
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Record every actual product mass, nutrient analysis, date, method and treated area, then sum product mass only for this umbrella; resolve each actual product to a concrete UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per occupied hectare and crop year, then normalized to accepted output for the same attributed periods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_inputs`
- Sources: `penn-state-hop-production`
- Range: Provisional total nutrient-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg product/ha/year
  - Basis: as-applied mass of all nutrient products per occupied hectare and crop year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Irrigation water
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter or calculate delivered water by block and date; rainfall is not a supplied Product flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per occupied hectare and irrigation week, then normalized to crop-year accepted output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yard_operations`
- Sources: `penn-state-hop-production`
- Range: Source-supported weekly irrigation context
  - Range role: Typical range (`typical_range`)
  - Lower: 254
  - Upper: 508
  - Unit: m3/ha/week
  - Basis: 1 to 2 inches delivered over one hectare during an irrigation week
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `penn-state-hop-production`

###### Crop-protection and canopy-management inputs (`field_operations_inputs`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Site-reported crop-protection and canopy-management products
- Amount rule: Record every concrete material, active ingredient where applicable, concentration, quantity, operation, block and date; resolve Product inputs individually before final exchange generation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per occupied hectare and crop year, then normalized to accepted output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yard_operations`
- Sources: `cornell-hop-yard-2017`; `cordella-hop-lca-2026`
- Range: Provisional applied-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg product/ha/year
  - Basis: separately identified crop-protection and canopy-management product mass per occupied hectare and crop year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy supply (`field_energy`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.

- Selected flow: Energy carriers and purchased electricity used for establishment, training, pruning, spraying, irrigation and other field operations
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record actual carrier, quantity, equipment or meter, operation, block and crop year; resolve every carrier to a concrete Product-flow UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per occupied hectare and crop year, then normalized to accepted output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yard_operations`
- Sources: `cordella-hop-lca-2026`
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/ha/year
  - Basis: carrier lower-heating-value energy and purchased electricity converted to MJ per occupied hectare and crop year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct field emissions (`direct_field_emissions`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Substance-specific emissions to air, water and soil from recorded field inputs
- Amount rule: Calculate each substance and compartment using a declared method and collected application, soil, weather and management fields; never bind a broad pollutant label.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per occupied hectare and crop year, then normalized to accepted output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Range: Provisional substance-specific emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg substance/ha/year
  - Basis: each separately identified substance and compartment per occupied hectare and crop year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Mature cone-bearing crop delivered to harvest (`mature_crop_handoff`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Mature cone-bearing bines or selectively picked cones at the harvest interface
- Amount rule: Measure harvested wet material consistently with the route and link it to yard, cultivar and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg accepted route-declared farm-gate hop cones
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources: `uf-ifas-hop-harvest-2019`
- Range: Provisional crop hand-off ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 50
  - Unit: kg wet harvested material/kg accepted hop cones
  - Basis: material crossing the harvest interface per 1 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residues and uncollected loss (`field_residues_losses`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Prunings, leaves, spent bines and cones left in field or otherwise not collected
- Amount rule: Record each state and destination separately and exclude it from accepted product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted route-declared farm-gate hop cones
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_balance`
- Range: Provisional residue-and-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg wet residue/kg accepted hop cones
  - Basis: reported residues and losses per 1 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Harvest and capture (`harvest_capture`)

Manual field picking, indoor manual picking and mechanical stripping are alternative lot-indexed instances. Inputs, outputs, cleaning and changeover events are assigned to the actual instance once.

#### Inputs

##### Product flows

###### Harvest energy and services (`harvest_energy`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Fuels, electricity and contracted equipment service used to cut, lower, move, pick or strip the lot
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record actual carrier or service, quantity, machine, route, lot and shared run event; resolve each concrete input UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg material delivered to separation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_operations`
- Sources: `uf-ifas-hop-harvest-2019`
- Range: Provisional harvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg collected material
  - Basis: energy supplied to the selected harvest instance per kg material delivered to separation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected harvest mixture (`collected_harvest_mixture`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Selectively picked wet cones or mechanically collected mixture of cones, leaves and stems
- Amount rule: Weigh before separation and declare the physical state and harvest route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg accepted route-declared farm-gate hop cones
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources: `uf-ifas-hop-harvest-2019`
- Range: Provisional collected-mixture ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 30
  - Unit: kg wet mixture/kg accepted hop cones
  - Basis: collected material delivered to separation per 1 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest losses and incidental material (`harvest_losses`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Material lost or removed during cutting, lowering, movement or picking before the separation hand-off
- Amount rule: Reconcile harvest input and collected output and record destination or on-field retention.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg harvest input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_balance`
- Range: Provisional harvest-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg harvest input
  - Basis: loss and incidental material divided by harvest input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cone separation, cleaning, grading and wet hand-off (`grading_handoff`)

The incoming state is the declared harvest output. Every output is accepted wet cones, downgraded cones with a destination, a single-pass rework return, rejected cones, or chaff/residue sent to a stated route.

#### Inputs

##### Product flows

###### Separation and grading energy (`separation_energy`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Fuels and electricity for picking, screening, air separation, conveyors, cleaning and grading
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record actual carrier and quantity by lot; allocate start-up, cleaning and changeover once to the run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg separation input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Sources: `uf-ifas-hop-harvest-2019`
- Range: Provisional separation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg separation input
  - Basis: energy used by the separation and grading run per kg incoming material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted wet hop cones (`accepted_wet_cones`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Weigh net accepted wet cones after grading; this is the reference output for the wet route and input to drying for the dried route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted wet hop cones
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Sources: `penn-state-hop-production`
- Range: Reference-output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted wet hop cones
  - Basis: wet reference route only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded or reworkable cones (`downgraded_cones`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Off-spec whole cones with a documented downgrade, recovery or single-pass rework destination
- Amount rule: Weigh by disposition; link rework to the producing lot and do not count it accepted before successful regrading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg separation input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Range: Provisional downgrade-and-rework fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg separation input
  - Basis: downgraded or reworkable cone mass divided by separation input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Chaff and rejected cones (`chaff_rejects`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Leaves, stems, chaff and cones rejected after grading
- Amount rule: Weigh chaff and rejected cones separately and record field return, recovery, treatment or disposal destination; exclude all from accepted output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per kg separation input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Sources: `penn-state-hop-production`
- Range: Provisional chaff-and-reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg/kg separation input
  - Basis: combined chaff and rejected cone mass divided by separation input mass, with components still recorded separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Whole-cone drying and stabilization (`conditional_drying`)

This node is inactive for the wet route. Its usable input is accepted wet cones and its stabilized hand-off is accepted dried whole cones. Energy, cleaning and shared dryer burdens are assigned once to the actual batch or service period.

#### Inputs

##### Product flows

###### Accepted wet cones for drying (`wet_cones_for_drying`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Weigh the input and test lot moisture or dry matter immediately before drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg initial cone dry matter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `cornell-hop-yard-2017`
- Range: Source-supported pre-drying wet-mass ratio
  - Range role: Typical range (`typical_range`)
  - Lower: 3.85
  - Upper: 5
  - Unit: kg wet cones/kg initial cone dry matter
  - Basis: harvested cones at 20 to 26 percent dry matter before drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `cornell-hop-yard-2017`

###### Drying energy supply (`drying_energy`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Actual fuel and electricity used by heat source, fans, loading, unloading and batch cleaning
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record each carrier and quantity by batch; attribute shared dryer service once using metering or documented capacity-time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg accepted dried whole hop cones
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `cornell-hop-yard-2017`
- Range: Provisional drying-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ/kg accepted dried whole cones
  - Basis: all batch drying energy per kg accepted dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dried whole hop cones (`accepted_dried_cones`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Weigh accepted whole cones after drying and final grading at declared moisture; this is the reference output only for the dried route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted dried whole hop cones
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `cornell-hop-yard-2017`
- Range: Reference-output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted dried whole cones
  - Basis: dried reference route only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Drying rejects (`drying_rejects`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Cones or fragments rejected after drying with declared destination
- Amount rule: Weigh by batch and exclude from accepted output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg wet cones entering drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Provisional drying-reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg wet cones entering drying
  - Basis: dry reject mass divided by wet input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed during drying (`drying_water_to_air`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Water emitted to air from cone moisture during drying
- Amount rule: Calculate wet input water minus water retained in accepted dried cones and rejects.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg wet cones entering drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch`
- Sources: `mass-balance-identity`; `cornell-hop-yard-2017`
- Range: Physical moisture-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg water/kg wet cones entering drying
  - Basis: water removed divided by wet input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_no_co_product_default` | Production | Accepted cones are the only reference product. Residues, chaff, rejects and field losses receive no avoided burden unless a documented valuable output requires justified allocation. |  |
| `allocation_productive_life` | Perennial phases | Aggregate establishment, immature, productive, replacement and termination records over the declared scenario and divide by accepted output from the same periods; do not assign establishment twice. | `cordella-hop-lca-2026` |
| `allocation_shared_infrastructure` | Shared assets | Link trellis, irrigation, harvest and dryer assets to every consuming node and service period; attribute once by serviced area-time, measured use or documented capacity-time. | `cordella-hop-lca-2026` |
| `allocation_batches` | Harvest, grading and drying | Assign direct records to actual lots; allocate start-up, cleaning and changeover once by measured use, processed mass or capacity-time. |  |
| `allocation_rework_rejects` | Off-spec states | Retain burdens through the producing node. A single rework loop receives incremental burdens and is not a second accepted output; every boundary exit and credit needs a destination and method. |  |
| `allocation_route_exclusivity` | Wet and dried routes | Select one reference route. The wet route excludes drying; the dried route includes the wet-cone chain once and drying once. | `penn-state-hop-production` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yard_assets` | `yard_production` | establishment, planting and shared assets | invoices, maps, bills and replacement logs | yard_id; area; phase; cultivar; material_uuid; count; mass; installation_year; replacement_year; service_area; consuming_nodes; service_life | Physical inventory linked to mapped blocks | count; kg; ha; year | Each installation or replacement | Full declared scenario | Asset and serviced blocks | Attribute once across service area and periods | Dated invoices, drawings, logs and photos |
| `cp_nutrient_inputs` | `yard_production` | all nutrient products | purchase and application records | product_uuid; name; product_mass; nutrient_analysis; dry_matter; date; block; method; treated_area | Collect each product separately before umbrella aggregation | kg product; kg nutrient; ha | Every application | Every represented year | Treated block | Sum by product and year; retain analysis | Invoice, label and calibrated application log |
| `cp_yard_operations` | `yard_production` | water, crop protection, canopy inputs and field energy | meter, application, fuel and operation logs | date; block; input_uuid; active_ingredient; quantity; unit; water_volume; equipment; operation; runtime | Meter or calibrated application record | m3; kg; L; kWh; MJ; h | Every operation | Every represented year | Block and equipment | Sum by concrete input and year, never unlike units | Meter calibration, invoices and logs |
| `cp_field_emissions` | `yard_production` | direct emissions | calculation inputs | input identity; nutrient or active amount; soil; weather; irrigation; incorporation; method; compartment | Apply declared substance-specific method | kg substance/ha/year | Each application and annual calculation | Every represented year | Treated block | Calculate by substance and compartment | Complete calculation sheet and method/version |
| `cp_harvest_balance` | `yard_production`; `harvest_capture` | hand-off, collected mixture, residues and losses | lot tickets and scale logs | lot_id; yard_id; cultivar; route; input_mass; collected_mass; residue_mass; loss; destination; timestamps | Calibrated weighing or documented reconciliation | kg wet mass | Every lot | Every harvest | Yard and lot | Reconcile input with unique outputs, residues and losses | Calibration and chain of custody |
| `cp_harvest_operations` | `harvest_capture` | energy, cleaning and changeover | fuel, meter and machine logs | lot_id; route; machine; carrier_uuid; quantity; runtime; event | Meter or carrier issue linked to run | L; kWh; MJ; h | Every run and event | Every harvest | Machine and lot | Assign shared event once | Meter and run logs |
| `cp_grading_batch` | `grading_handoff` | all grade states and energy | lot, scale, grade and meter records | lot_id; input_mass; accepted_mass; downgraded_mass; rework_mass; reject_mass; chaff_mass; destination; moisture; carrier_uuid; energy | Calibrated weighing, destination coding and meter record | kg; %; MJ | Every lot and rework pass | Every harvest | Lot and equipment | Reconcile all unique states; do not double-count returns | Calibration, grade sheet and receipts |
| `cp_drying_batch` | `conditional_drying` | wet input, moisture, energy, dried outputs and water | batch sheet, scales, moisture tests and meters | batch_id; lot_id; wet_mass; initial_moisture; test_method; carrier_uuid; energy; temperature; duration; dried_mass; final_moisture; reject_mass | Weigh, sample moisture and meter energy by batch | kg; %; MJ; °C; h | Every batch | Every dried-route harvest | Batch and dryer | Close dry-matter and total-mass balance; assign shared energy once | Calibrations and validated moisture records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_productive_life` | Establishment and assets | Sum attributed phase burdens across the scenario and divide by cumulative accepted mass from the same area and periods. | phase, asset, area, period and accepted-output records | burden/kg accepted cones | `cordella-hop-lca-2026` |
| `calc_route_yield` | Crop year and route | Accepted farm-gate mass divided by occupied area; report state and moisture. | accepted mass; area; state; moisture | kg/ha/year | `penn-state-hop-production` |
| `calc_grading_balance` | Harvest and grading | input minus unique accepted, downgraded, rejected, chaff and loss states; rework returns are transfers. | all lot masses and state codes | closure mass and ratio | `mass-balance-identity` |
| `calc_drying_water` | Drying | wet input × initial moisture − accepted dry output × final moisture − reject mass × reject moisture. | batch masses and moisture fractions | kg water to air | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Preserve cultivar, state, grade, moisture, harvest date and hand-off with the fixed UUID. | Lot specification |
| `dq_temporal` | Perennial system | Cover the declared establishment and productive-life scenario or identify extrapolated years and replacement assumptions. | Multi-year records |
| `dq_completeness` | Inventory | Include establishment, nutrients, water, crop protection, field energy, infrastructure, emissions, harvest, rejects and route-conditional drying. | Process/protocol matrix |
| `dq_measurement` | Mass, water and energy | Use calibrated instruments where available and disclose estimation, sampling and uncertainty. | Calibration and calculations |
| `dq_route` | Alternatives | Keep manual/mechanical harvest and wet/dried hand-offs separate unless evidence-based weights are supplied. | Route records |
| `dq_flow_resolution` | Inputs and emissions | Resolve actual Product inputs to verified UUIDs and retain substance and compartment specificity for elementary flows. | Resolution record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require fixed Hop cones, Mass and unit-group UUIDs, 1 kg accepted output and every qualifier. |  |
| `validate_route_exclusivity` | Route | Require exactly one wet or dried hand-off; wet has no drying inventory, dried has one linked drying node and declared parent activity and delta. | `penn-state-hop-production` |
| `validate_periods` | Perennial attribution | Require phase treatment, cumulative output, attribution period and evidence and reject double attribution. | `cordella-hop-lca-2026` |
| `validate_shared_assets` | Shared infrastructure | Require asset identity, consuming nodes and periods, service boundary, attribution driver and duplicate-burden check. |  |
| `validate_nutrient_cardinality` | Every process | Permit at most one Product-input nutrient card; it binds only `flow-set.agricultural-nutrient-supply` version `0.3.0` without group while actual products are separately collected. |  |
| `validate_batch_linkage` | Harvest, grading and drying | Require lot/batch IDs for inputs, outputs, energy, cleaning and changeover and reject shared burdens counted twice. |  |
| `validate_mass_balance` | Harvest, grading and drying | Reconcile accepted, downgraded, rework, rejected, chaff, loss and moisture states within disclosed uncertainty. | `mass-balance-identity` |
| `validate_reject_routing` | Off-spec material | Give every downgrade, rework, recovery or discard state one producing node and documented next state; exclude unresolved rejects from accepted output. |  |
| `validate_drying` | Dried route | Require initial/final moisture, test method, batch mass, energy and acceptance state. The 20–26% initial dry matter and 8–10% target moisture are QA context, not universal limits. | `cornell-hop-yard-2017` |
| `validate_ranges` | All flow cards | Require exactly one complete Range per card and identical English, Chinese and structured values. |  |
| `validate_exclusions` | Boundary | Reject pelletizing, extraction, brewing, merchant storage, downstream packaging and post-gate transport. | `penn-state-hop-production` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for route-declared farm-gate hop cones |
| downstream_use | Secondary or background use after matching state, geography, cultivar, time and boundary |
| allowed_use | Attributional modelling of wet or dried whole cones at farm gate; comparison only with compatible state and perennial attribution |
| excluded_use | Pellets, extracts, brewed products, planting material or systems requiring excluded downstream processing |
| required_metadata | PCR id/version; fixed flow UUID; geography; yard area and establishment year; attribution period; cultivar; harvest route; state; moisture method/result; grade; infrastructure treatment; years and sources |
| required_quality_disclosure | Foreground coverage, estimation share, missing years, productive-life assumptions, UUID resolution, mass-balance closure, calibration, route weights and reasoned estimates |
| update_trigger | Material change in yard configuration, cultivar, yield, nutrient or irrigation regime, harvest technology, infrastructure life, drying, hand-off state, specification or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `uf-ifas-hop-harvest-2019` | extension_guidance | University of Florida IFAS Extension, Campbell and Pearson, *Harvest Techniques for Hops (Humulus lupulus)*, ENH1314/EP578, https://doi.org/10.32473/edis-ep578-219 | Perennial/trellis context, harvest routes, separation, incidental material and immediate handling |
| `penn-state-hop-production` | extension_guidance | Penn State Extension, *Hop Production*, https://extension.psu.edu/hop-production | Wet/dried routes, irrigation, nutrient management, maturity and leaf/chaff removal |
| `cornell-hop-yard-2017` | extension_guidance | Cornell Hops, Weldon, Gent and Gadoury, *Five considerations before ever planting your first hop*, November 2017, https://hops.cals.cornell.edu/grower-resources/five-considerations-before-ever-planting-your-first-hop/ | Permanent yard, establishment, shared equipment, initial dry matter and drying endpoint context |
| `cordella-hop-lca-2026` | literature | Cordella et al., *Uncovering the environmental burden of hops: a spatially resolved agricultural LCA for modern beer supply chains*, International Journal of Life Cycle Assessment (2026), https://doi.org/10.1007/s11367-026-02651-y | Farm-gate process coverage, establishment, trellis, field operations, drying and multi-year attribution |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to lot and batch records | Harvest, grading and drying reconciliation and water calculation |
