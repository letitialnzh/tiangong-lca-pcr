---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.copra
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Copra

## 1. Scope and Applicability

This PCR covers dried coconut kernel made from mature Cocos nucifera fruit and handed off before oil extraction. Declare moisture basis, measured final moisture, drying route, heat source, grade and hand-off. Whole fresh coconut, fresh kernel, coconut oil, and post-extraction press cake or meal are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.copra |
| classification_refs | CPC 3.0: 01492 Copra |
| covered_products | Dried coconut kernel before oil extraction |
| excluded_products | Whole fresh coconut, oil, press cake and meal |
| representative_product | Copra at producer or primary-conditioning hand-off |
| production_route | Coconut production, separate harvest, opening, kernel removal, sun/solar/smoke/hot-air/kiln or hybrid drying, and grading |
| market_state | Stable dried kernel; moisture reported on wet basis unless converted |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Copra before oil extraction |
| How much | 1 kg |
| How well | Measured moisture, drying route, grade and contamination status declared |
| How long or cycle | One production lot linked to crop period and drying run |
| reference_flow_link | `copra_accepted_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Copra `65b49595-596f-42a7-91f4-d3722df073de` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dried kernel; moisture value and basis; drying route and heat source; grade; hand-off; before oil extraction |
| Binding | `fixed` |

The database route label “Fresh, unprocessed produce” is invalid for copra and is overridden by the required dry-state qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Measure as-received mass and report moisture separately. |
| `moisture_basis` | kernel and copra | mass fraction | % wet basis | Use water mass divided by as-received mass; label and convert dry-basis results. |
| `dry_matter` | material balance | Mass | kg dry matter | as-received mass × (1 − wet-basis moisture fraction). |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established coconut palms entering the assessed crop period |
| starting_condition_role | avoid repeating plantation establishment |
| product_classification_scope | mature coconuts and internal kernel intermediates leading to copra |
| recursive_input_rule | record purchased same-category material once with upstream dataset and hand-off |
| upstream_dataset_requirement | geography, technology, crop phase, moisture and non-overlap |
| disclosure | crop phase, harvest, drying route, moisture, grade, storage and hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `before_oil_extraction` | all routes | End at graded dry kernel hand-off; exclude crushing, pressing, extraction, refining and press-cake handling. | `fao-coconut-postharvest-compendium` |
| `separate_harvest` | harvest | Record harvest separately from biological production and conditioning. | `fao-coconut-postharvest-compendium` |
| `drying_gate` | drying | Start at opened nuts or fresh kernel; record route and end at measured stable copra moisture. | `fao-coconut-postharvest-compendium`; `fao-aflatoxin-copra` |
| `route_separation` | drying | Keep sun, solar, smoke, hot-air, kiln and hybrid route energy and output separate before output-weighted aggregation. | `fao-coconut-postharvest-compendium` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `coconut_production` | Managed coconut production | required | Always | foreground node | kg output |
| `coconut_harvest` | Coconut harvest and field transfer | required | Always | foreground node | kg output |
| `copra_drying` | Nut opening, kernel removal and drying | required | Always | foreground node | kg output |
| `copra_grading` | Copra grading and hand-off | required | Always | foreground node | kg output |

### Process: Managed coconut production (`coconut_production`)

#### Inputs

##### Product flows

###### Consolidated fertilizer and nutrient supply (`crop_nutrients`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected nutrient products
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg mature coconuts
- Basis kind: (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_production`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg mature coconuts
  - Basis kind: (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Managed irrigation water (`irrigation_water`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected irrigation water
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg mature coconuts; zero when inactive
- Basis kind: (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_production`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3
  - Basis: per 1,000 kg mature coconuts; zero when inactive
  - Basis kind: (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy supply (`crop_energy`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected energy carriers
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg mature coconuts
- Basis kind: (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_production`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ
  - Basis: per 1,000 kg mature coconuts
  - Basis kind: (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Mature whole coconuts (`mature_coconut`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Internal intermediate — mature whole coconut
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg process output
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_production`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg process output
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Field residues and spoiled fruit (`field_residue`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Deferred destination-specific residue identity
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg mature coconuts
- Basis kind: (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_production`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg mature coconuts
  - Basis kind: (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows


### Process: Coconut harvest and field transfer (`coconut_harvest`)

#### Inputs

##### Product flows

###### Mature coconut from production (`mature_coconut_input`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Internal intermediate — mature whole coconut
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered nuts
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_harvest`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1300
  - Unit: kg
  - Basis: per 1,000 kg delivered nuts
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest energy supply (`harvest_energy`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected energy carriers
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered nuts
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_harvest`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: MJ
  - Basis: per 1,000 kg delivered nuts
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-to-dryer transport service (`field_transport`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected freight service
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered nuts; zero when inactive
- Basis kind: (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_harvest`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: t·km
  - Basis: per 1,000 kg delivered nuts; zero when inactive
  - Basis kind: (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Harvested whole nuts (`harvested_nuts`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Internal intermediate — harvested whole coconuts
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg process output
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coconut_harvest`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg process output
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


### Process: Nut opening, kernel removal and drying (`copra_drying`)

#### Inputs

##### Product flows

###### Harvested whole nuts (`harvested_nuts_input`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Internal intermediate — harvested whole coconuts
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg ungraded copra
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_drying`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1500
  - Upper: 8000
  - Unit: kg
  - Basis: per 1,000 kg ungraded copra
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning process water (`process_water`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected process water
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg ungraded copra; zero when inactive
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_drying`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per 1,000 kg ungraded copra; zero when inactive
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying energy supply (`drying_energy`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected energy carriers
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg ungraded copra by route
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_drying`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ
  - Basis: per 1,000 kg ungraded copra by route
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Ungraded dried kernel (`ungraded_copra`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Internal intermediate — ungraded copra
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: sampled dryer output
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_drying`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 12
  - Unit: % wet-basis moisture
  - Basis: sampled dryer output
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated husk and shell (`husk_shell`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Deferred destination-specific husk and shell identity
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg ungraded copra
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_drying`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4000
  - Unit: kg
  - Basis: per 1,000 kg ungraded copra
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Drying rejects (`drying_reject`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Unresolved until reject destination and treatment are recorded
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg ungraded copra
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_drying`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg dry matter
  - Basis: per 1,000 kg ungraded copra
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows


### Process: Copra grading and hand-off (`copra_grading`)

#### Inputs

##### Product flows

###### Ungraded copra (`ungraded_copra_input`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Internal intermediate — ungraded copra
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted copra
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_grading`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1400
  - Unit: kg
  - Basis: per 1,000 kg accepted copra
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grading energy supply (`grading_energy`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Foreground-selected energy carriers
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted copra
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_grading`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: MJ
  - Basis: per 1,000 kg accepted copra
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Accepted copra at hand-off (`copra_accepted_output`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Copra `65b49595-596f-42a7-91f4-d3722df073de`
- Flow property / unit: Mass or applicable service property / declared unit
- Binding: `fixed`
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: one reference flow
- Basis kind: (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_grading`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: one reference flow
  - Basis kind: (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded copra (`downgraded_copra`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Deferred grade- and destination-specific copra identity
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted copra
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_grading`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1,000 kg accepted copra
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Grading rejects (`grading_reject`)

Measure by lot or calculate from linked foreground records. Internal, deferred, or unresolved status explains why no external UUID is assigned.

- Selected flow: Unresolved until rework, recovery or disposal destination is recorded
- Flow property / unit: Mass or applicable service property / declared unit
- Amount rule: measured or reconciled amount for the linked lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted copra
- Basis kind: (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copra_grading`
- Range: QA or normalization range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg accepted copra
  - Basis kind: (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | all nodes | Subdivide by site, crop period, route and lot; use direct measurement first. |  |
| `multi_output` | production and drying | Enumerate accepted, downgraded, husk, shell, residue and waste hand-offs; use dry-matter mass only when physical causality cannot be established. |  |
| `internal_fuel` | husk or shell fuel | Count internal transfer and combustion once; do not also claim sold co-product output. |  |
| `rework` | rejects | Record rework, downgrade, recovery or disposal and incremental burdens once; exclude rejected mass from accepted output. |  |
| `multi_period` | crop and storage periods | Link events to the affected period and prevent double attribution to batch and annual totals. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coconut_production` | `coconut_production` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |
| `cp_coconut_harvest` | `coconut_harvest` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |
| `cp_copra_drying` | `copra_drying` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |
| `cp_copra_grading` | `copra_grading` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | kernel | 100 × (wet mass − oven-dry mass) / wet mass | wet and dry sample mass | % wet-basis moisture | `fao-coconut-postharvest-compendium` |
| `calc_dry_matter` | lots | mass × (1 − moisture/100) | mass and moisture | kg dry matter |  |
| `calc_transport` | field transfer | tonnes × loaded distance | mass, distance | t·km |  |
| `calc_route_mix` | route aggregate | output-weighted sum of route inventories | route inventory and output | aggregate |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm dried kernel before oil extraction and required qualifiers. | lot, moisture and dispatch records |
| `dq_route` | drying | Separate route, heat source, smoke contact and run mode. | dryer logs |
| `dq_balance` | processes | Reconcile as-received and dry-matter inputs, outputs, rejects and losses. | mass-balance sheet |
| `dq_completeness` | conditional cards | Report evidenced zero when inactive. | completeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference | Fail whole fresh coconut, fresh meat, oil, press cake or meal and any fresh/unprocessed description lacking dry-state qualifiers. | `fao-coconut-postharvest-compendium` |
| `validate_moisture` | copra | Require measured value, basis, method and lot; investigate values outside 5–12% wet-basis screen. | `fao-coconut-postharvest-compendium`; `fao-aflatoxin-copra` |
| `validate_route` | drying | Require route, heat source, smoke contact, time and route-specific energy. | `fao-coconut-postharvest-compendium` |
| `validate_nutrients` | nutrients | Require one 0.3.0 set-only nutrient card in coconut production and no group. |  |
| `validate_bindings` | cards | Expand every Flow Set to a verified concrete foreground UUID; accept unbound cards only with internal, deferred or unresolved rationale. |  |
| `validate_rework` | rejects | Require destination and keep rejects out of accepted output. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground copra production and primary-conditioning dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | oil-mill input systems requiring representative dried kernel |
| excluded_use | fresh coconut, food coconut, coconut oil, press cake or meal |
| required_metadata | geography; crop phase; drying route; heat source; moisture method and basis; grade; hand-off; allocation; destinations |
| required_quality_disclosure | coverage, measurement, sampling, route shares and mass balance |
| update_trigger | change in identity, hand-off, drying technology, moisture rule, route mix or primary data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-coconut-postharvest-compendium` | official_guidance | FAO, Coconut: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Coconut.pdf | identity, drying route, moisture, process boundary and quality |
| `fao-aflatoxin-copra` | official_guidance | FAO, HACCP Manual, Example 3: Copra cake and meal, https://www.fao.org/4/y1390e/y1390e0l.htm | route-dependent safe moisture, mould prevention and validation |
