---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-pulpwood-and-wood-for-wood-based-panels
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coniferous pulpwood and panel wood: roundwood and direct forest chips

## 1. Scope and Applicability

This PCR covers coniferous pulpwood and wood for particleboard, oriented strand board (OSB), or fibreboard, delivered either as round/split wood or as chips made directly from roundwood in the forest. Both forms are reported as solid wood volume under bark or its documented equivalent. Its methodology scope is broader than CPC 3.0 03112: that code covers the roundwood, whereas deliberately produced chips fall under CPC 31230. The FAO statistical grouping of direct forest chips with pulpwood does not establish CPC equivalence (un-cpc-03112; un-cpc-31230; fao-jfsq-2020). Forest management is included only where attributable to the declared harvested cohort. The handover gate is the forest roadside landing before external road haulage. Species, origin, forest regime, diameter/grade, form, bark and moisture state, destination use, harvest system, cohort, and measurement method must be declared (fao-harvesting-code).

Excluded are sawlogs/veneer logs, non-coniferous wood, fuelwood, poles and other industrial roundwood, mill-generated chips or processing residues, external haulage, pulping, and panel manufacture. No generic fuel, bark, growth, moisture, or chip-conversion factor is imposed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-pulpwood-and-wood-for-wood-based-panels |
| classification_refs | CPC 3.0 `03112`, broader PCR mapping: only the round/split roundwood state belongs to 03112; the included direct forest-chip state belongs to 31230. This does not create a mapping from 31230. |
| covered_products | Coniferous pulpwood and panel wood, round/split or directly forest-chipped form, on solid under-bark basis |
| excluded_products | Sawlogs/veneer logs, fuelwood, non-coniferous or other industrial wood, mill chips/residues, pulp and finished panels |
| representative_product | Graded conifer pulpwood logs ready for outbound transport at forest roadside |
| production_route | Attributable stand management → felling and bucking → extraction to landing → sorting and scaling; direct forest chipping is a conditional terminal route |
| market_state | Industrial wood at forest roadside before external transport or mill conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Coniferous pulpwood or wood for wood-based panels at forest roadside |
| How much | 1 m3 solid wood volume under bark |
| How well | Declared species/group, pulp/panel destination, grade/diameter, physical form, bark and moisture; no assumed pulp yield |
| How long or cycle | Declared harvest cohort and reporting period, with attributable establishment and tending years linked |
| reference_flow_link | `roadside_pulpwood` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Coniferous pulpwood/panel wood at roadside; exact UUID unresolved |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` ; measured as solid under-bark wood volume or its documented equivalent |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| reference_output_optional_process | `forest_chip` |
| reference_output_when_inactive | `roadside_pulpwood` |
| reference_output_when_active | `direct_forest_chips` |
| Required qualifiers | Conifer species/group; region and stand regime; pulp or panel end use; round/split/direct forest-chip form; bark/moisture state; diameter/grade; harvest cohort; landing gate; scale/conversion method |

Required qualifiers are foreground data-package metadata. A loose-chip cubic metre is not the reference amount; direct chips require measured or documented solid-wood-equivalent conversion (fao-jfsq-2020).
The direct-forest-chip card is a conditional product-route output, not a second reference-flow object. A chip-specific downstream dataset must confirm its own concrete chip-flow identity before publication and must not reuse the unresolved roundwood identity by assumption.

For the declared reference lot, retain one process map with optional forest chipping. Determine whether `forest_chip` is active from actual processing and dispatch records: inactive selects `roadside_pulpwood` as the final reference output; active selects `direct_forest_chips` and treats `roadside_pulpwood` as an internal feed. `reference_flow_link` anchors the inactive wood state only; it is not an unconditional choice. The selected card supplies the actual product identity and form, without inheriting the other state's UUID. Exactly one of these cards is the final reference output for that lot, normalized to 1 m3 solid under-bark wood or its documented equivalent. Do not sum the two as final outputs. Separate differently delivered lots and attribute common burdens explicitly; unknown chipping status or missing chip-conversion evidence is a gap, not an inactive default.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `underbark_solid_volume` | Reference product and wood balances | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Scale each form to solid wood volume excluding bark. Record any over-bark measure and documented species/lot bark deduction; never equate loose-chip bulk volume to solid volume (fao-jfsq-2020). |
| `fuel_consistency` | Equipment energy | Fuel volume/mass or electricity | L, kg or kWh | Retain measured unit and any density conversion; allocate only actual activity inside this roadside gate. |
| `cohort_period_link` | Forest inputs and outputs | Dated activity and attributed volume | period record and m3 | Link management activities to harvested cohorts. Record each original road, tending or machine-service event once at its responsible node and date; distribute its shared burdens across benefiting cohorts, products and service periods using documented shares, without recounting the original event. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | For own harvesting, an identified coniferous stand or recovered-tree source with origin, management regime, age/cohort, location and pre-harvest volume method; for purchased qualified roundwood, its origin, received product state, incoming gate, lot quantity and upstream coverage |
| starting_condition_role | Biological forest source for own harvesting; an upstream product input for purchased qualified roundwood. A purchased lot does not create a second growth or harvest operation in this foreground. |
| product_classification_scope | Coniferous industrial wood for pulp or wood-based panels; declared intended use and final form decide inclusion |
| recursive_input_rule | Purchased same-category pulpwood at landing is separately metered with origin and upstream dataset; do not count it as newly grown and harvested here |
| upstream_dataset_requirement | Supply upstream datasets for purchased fuel, seedlings, services, machinery, and any imported same-category wood |
| disclosure | Stand/cohort and periods; felling/extraction system; landing and shared road/equipment; bark/moisture/scale method; other grades, losses and direct-chipping choice |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `roadside_gate` | All nodes | Include attributable stand management, felling/bucking, extraction, landing grading/scaling and direct forest chipping only when before roadside handover. Exclude outbound haulage and mill processing. | `fao-harvesting-code`, `fao-jfsq-2020` |
| `purpose_and_form` | Product classification | Confirm conifer identity and intended pulp/panel use; route sawlogs, veneer logs, fuelwood and other assortments separately. Direct forest chips qualify for this PCR but are classified as CPC 31230, not 03112. Mill residues remain outside this PCR. Do not transfer the FAO statistical grouping into CPC classification. | `un-cpc-03112`, `un-cpc-31230`, `fao-jfsq-2020` |
| `wood_removed_once` | Wood accounting | Count delivered removed wood on solid under-bark basis; distinguish bark and unremoved forest residues, and identify internal transfers only once. | `fao-jfsq-2020` |
| `period_shared_assets` | Stand, forest road, landing and equipment | Identify establishment, tending and harvest periods and every shared asset consumer; allocate documented service once among cohorts and outputs. | `fao-harvesting-code` |
| `boundary_direct_release_coverage` | `stand_management`; `felling_extraction`; `landing_sort_scale`; `forest_chip` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_stand_management; cp_direct_release_felling_extraction; cp_direct_release_landing_sort_scale; cp_direct_release_forest_chip. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

Inventory reporting and process measurement layers: card amounts are reported per 1 m3 reference flow; original quantities, same-lot process outputs, material states and period attribution remain individually recorded in collection protocols and calculation rules. Assign input burdens directly first and allocate shared burdens under Section 7. Preserve unallocated physical transfer and co-product ledgers, then divide each applicable lot amount by the positive final reference-product quantity of the same boundary and period; burden allocation must not shrink a material balance. Do not count internal transfers again as final outputs. Range blocks retain their explicitly declared original denominators: test process-output ranges locally before comparing any reference-normalized amount. If a Range must be converted, scale both bounds using the measured process-output/final-reference-quantity ratio and reviewed attribution factors applicable only to burdens, retaining original bounds and evidence; never assume this ratio is one. Each energy carrier, fertilizer formulation, material and substance keeps its own unit; unlike units cannot be summed. The final reference output is accepted lot quantity divided by itself; rejects, packaging and non-reference grades are excluded from its denominator.

The managed-production node establishes the stand and attributable management handoff. Harvesting independently changes the standing source into extracted logs. Landing sorting creates pulp/panel, other-grade and reject destinations. Direct forest chipping is a conditional first-conditioning node from graded roundwood to forest-made chips, not mill chipping.

Determine activation from stand, task and lot records; distinguish unused activity from missing data. Energy, fertilizer and other common input requirements use one conditional card per process and input class; resolve actual carriers, formulations and supply specifications into verified concrete exchanges during dataset construction, without adding a PCR card per specification. Independently required product states, handoffs and destinations remain separate. Measure fuel by mass, electricity by electrical energy and services in their reference unit, retaining documented density for volume conversion; do not apply one quantity range to L, kg, kWh and h. Same-lot output/input handoffs share a compatible material identity, with process gate retained in lot records. A generic platform flow may be used where its scope is compatible and foreground records carry the required qualifiers; absence of species in a flow name or a Mass property alone is not grounds for rejection.
### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_management` | Source stand management and growth attribution | conditional | Include attributable establishment/tending or managed-natural-forest operations; otherwise document source and upstream treatment | Managed biological production and cohort handoff | Standing volume and records by cohort |
| `felling_extraction` | Felling, bucking and extraction | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Harvest/capture distinct from growth and sorting | Extracted log volume and machine energy |
| `landing_sort_scale` | Landing sorting and scaling | required | Final lot measurement, acceptance and roadside producer handover remain required for every reference lot. Repeat physical sorting only when actually performed; purchased qualified lots retain upstream sorting coverage without repeating it. | Accept and measure the final lot; grade actual intended uses, rejects and under-bark product | Product volumes by lot |
| `forest_chip` | Direct forest chipping | conditional | Only directly forest-chipped roundwood before dispatch | Primary conditioning from logs to chips | Matched feed, chips and rejects |

### Process: Source stand management and growth attribution (`stand_management`)

Node `stand_management` must complete the direct-release coverage reconciliation in `cp_direct_release_stand_management`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Coniferous seedlings for planting (`conifer_seedlings`)

Activate only for recorded planting or replanting. Declare species, provenance, bare-root/container stock, age/size and delivered nursery gate; separate different stock forms. Attribute delivered seedlings to the relevant stand phase. Naturally regenerated lots with no planting have no seedling exchange.

- Selected flow: Coniferous nursery seedlings; resolve species, provenance and stock form; UUID unresolved
- Flow property / unit: Number of seedlings / item
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: item/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous seed for direct sowing (`conifer_seeds`)

Activate only where direct sowing is documented. Record species, provenance, purity, moisture and treatment, delivered seed mass and sown area. Seed embedded in purchased nursery seedlings is upstream of the seedling supply and is not added here.

- Selected flow: Coniferous tree seed for direct sowing; resolve species and treatment; UUID unresolved
- Flow property / unit: Mass of seed as supplied / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilizer applied to the stand (`stand_fertilizer`)

Activate only for recorded fertilization in the foreground stand. Instantiate one exchange per commercial formulation; retain N/P/K composition, product mass, date and area. Nutrient mass is a parallel calculation, not the fertilizer-product exchange amount. Nursery fertilizer embedded in purchased seedlings is not duplicated.

- Selected flow: Applied fertilizer product of the recorded formulation; UUID unresolved
- Flow property / unit: Mass of commercial fertilizer product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for establishment or tending (`stand_watering_water`)

Activate only for measured foreground watering. Record source, supplied-water grade/treatment, meter and pumping boundary. Supplied product water and direct water withdrawal are distinct roles; record a direct withdrawal separately by resource and compartment if it occurs. Rainfall is not supplied water.

- Selected flow: Supplied watering water with recorded source and treatment; UUID unresolved
- Flow property / unit: Volume of supplied water / m3
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: m3/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recorded vegetation-control or protection product (`stand_protection_product`)

Activate only for documented chemical vegetation control or tree protection. Record product, active substance and concentration, formulation, applied product mass, date and area. Resolve each formulation separately; any release needs its own substance and receiving-medium evidence. Mechanical weeding does not imply a chemical input.

- Selected flow: Recorded commercial protection formulation; one exchange per formulation; UUID unresolved
- Flow property / unit: Mass of commercial formulated product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recorded establishment and tending operation — Energy supply (`stand_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Sources: `fao-harvesting-code`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



###### Recorded establishment and tending operation — Contracted operation with declared service boundary (`stand_service`)

Task: Recorded establishment and tending operation. Activate only for a contractor dataset whose reference is operating hours of the named task/equipment. Record supplier, task, technology, service unit and included fuels, machinery and emissions. If its service unit differs, create an appropriately measured task card. Components already included in the service dataset are not also burdened through separate fuel or machine inputs.

- Selected flow: Recorded contractor operation, machine and service boundary; UUID unresolved
- Flow property / unit: Measured equipment operating time / h
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_management`
- Sources: `fao-harvesting-code`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: h/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing conifer source for harvest (`standing_conifer_source`)

A dated stand cohort and merchantable standing wood state, not the roadside product. The fixed UUID applies only to merchantable standing timber in the managed-forest or plantation context supported by that flow. Fallen or already felled recovered wood is not standing timber: record its actual received state with a separate compatible flow rather than inheriting this UUID.

- Selected flow: Standing merchantable coniferous timber; generic standing-stock identity with foreground species and stand `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; matched under-bark solid volume m3 recorded separately
- Amount rule: Express the fixed Mass exchange in kg of the same merchantable stemwood stock, from measured mass or a documented same-lot mass/volume bridge with matching moisture and bark coverage; never apply a default density. Inventory-based standing volume reconciled to removals
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_inventory_at_stand_management`
- Range: Provisional parallel-volume QA screen; not a kg exchange-amount bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3/m3
  - Basis: per 1 m3 under-bark roadside reference output; provisional values are screening only, not replacements for measurement ; applies only to parallel recorded under-bark volume; the fixed flow exchange amount remains kg
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Felling, bucking and extraction (`felling_extraction`)

Node `felling_extraction` must complete the direct-release coverage reconciliation in `cp_direct_release_felling_extraction`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Standing source allocated to felling (`standing_source_input`)

Only merchantable standing trees in the declared managed-forest or plantation harvest cohort use this card. A recovered fallen-tree input or purchased harvested wood requires its actual material-state exchange and upstream treatment; it must not be represented by this standing-stock UUID or charged again for completed felling.

- Selected flow: Standing merchantable coniferous timber; generic standing-stock identity with foreground species and stand `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; matched under-bark solid volume m3 recorded separately
- Amount rule: Express the fixed Mass exchange in kg of the same merchantable stemwood stock, from measured mass or a documented same-lot mass/volume bridge with matching moisture and bark coverage; never apply a default density. Matched stand and harvest tickets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_inventory_at_felling_extraction`
- Range: Provisional parallel-volume QA screen; not a kg exchange-amount bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3/m3
  - Basis: per 1 m3 under-bark roadside reference output; provisional values are screening only, not replacements for measurement ; applies only to parallel recorded under-bark volume; the fixed flow exchange amount remains kg
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Felling, bucking and extraction — Energy supply (`harvest_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Sources: `fao-harvesting-code`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



###### Felling, bucking and extraction — Lubricant consumed by equipment (`harvest_lubricant`)

Task: Felling, bucking and extraction. Activate only for lubricant consumption recorded separately from fuel. Identify chain oil, hydraulic oil or engine lubricant and formulation; instantiate separate exchanges for different uses/products. Convert measured volume using documented density. Retain leakage, spent-oil collection and receiver records rather than assuming an emission or disposal route.

- Selected flow: Recorded lubricant formulation and application; UUID unresolved
- Flow property / unit: Mass of lubricant product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Sources: `fao-harvesting-code`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Ungraded extracted conifer logs (`extracted_logs`)

Felled and bucked wood transferred from stump to landing, before destination grading.

- Selected flow: Ungraded conifer roundwood at landing; unresolved
- Flow property / unit: solid under-bark volume [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Sum unique log tickets arriving at landing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_log_scale_at_felling_extraction`
- Range: Provisional extracted-log balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3/m3
  - Basis: per 1 m3 under-bark roadside reference output; provisional values are screening only, not replacements for measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste exchange is prescribed for woody material retained in the forest. Record unremoved tops, branches and felling losses in the stock/loss and wood-balance ledger using field survey or a documented volume model under `cp_residues`, in estimated solid-wood m3 per 1 m3 under-bark roadside output. Disclose uncertainty and investigate values outside the provisional 0–20 m3/m3 screening interval; this interval is not a substitute for measurement. Create a waste exchange only if material is physically removed and its actual destination and flow identity are verified.

##### Elementary flows

### Process: Landing sorting and scaling (`landing_sort_scale`)

Node `landing_sort_scale` must complete the direct-release coverage reconciliation in `cp_direct_release_landing_sort_scale`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Ungraded logs received at landing (`landing_logs_input`)

Match each incoming log lot either to its own-harvest transfer or to a qualified external supplier receipt with upstream coverage, once only; do not invent a foreground harvest for a purchased lot.

- Selected flow: Ungraded conifer roundwood at landing; unresolved
- Flow property / unit: solid under-bark volume [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Matched incoming log-ticket volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_log_scale_at_landing_sort_scale`
- Range: Provisional landing-input balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3/m3
  - Basis: per 1 m3 under-bark roadside reference output; provisional values are screening only, not replacements for measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Roadside sorting, scaling and handling — Energy supply (`landing_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_landing_energy`
- Sources: `fao-harvesting-code`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Roadside sorting, scaling and handling — Lubricant consumed by equipment (`landing_lubricant`)

Task: Roadside sorting, scaling and handling. Activate only for lubricant consumption recorded separately from fuel. Identify chain oil, hydraulic oil or engine lubricant and formulation; instantiate separate exchanges for different uses/products. Convert measured volume using documented density. Retain leakage, spent-oil collection and receiver records rather than assuming an emission or disposal route.

- Selected flow: Recorded lubricant formulation and application; UUID unresolved
- Flow property / unit: Mass of lubricant product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_landing_energy`
- Sources: `fao-harvesting-code`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Graded pulpwood or panel wood at roadside (`roadside_pulpwood`)

This intended output is the final reference product for the unchipped route; if chipped in forest, this is an internal transfer, not a second final product.

- Selected flow: Coniferous pulpwood/panel wood at roadside; exact UUID unresolved
- Flow property / unit: solid under-bark volume [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: For unchipped sale, 1 m3 reference output; for direct forest chipping, the measured under-bark volume internally fed to the chipper per 1 m3 final chip equivalent
- Amount rule when reference output: 1 m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade_scale`
- Range: Route-specific graded-wood output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: m3/m3
  - Basis: per 1 m3 under-bark roadside reference output; provisional values are screening only, not replacements for measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous sawlogs accepted for sawing at roadside (`coproduct_sawlog`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous sawlogs accepted for sawing at roadside; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3; retain mass and moisture where available
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_scale`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous veneer logs accepted for peeling or slicing at roadside (`coproduct_veneer_log`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous veneer logs accepted for peeling or slicing at roadside; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3; retain mass and moisture where available
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_scale`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other-use unprocessed coniferous industrial roundwood at roadside (`coproduct_other_industrial`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. This verified Mass flow requires kg as exchange amount; convert volume records only using a measured same-lot kg/m3 bridge.

- Selected flow: Other-use unprocessed coniferous industrial roundwood at roadside `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; matched under-bark solid volume recorded separately
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_scale`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous fuelwood logs sold for energy use at roadside (`coproduct_fuelwood`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous fuelwood logs sold for energy use at roadside; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3; retain mass and moisture where available
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_scale`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected untreated landing logs removed as waste (`landing_rejects`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. Identify rejected whole logs/bolts after sorting, separately from chipping screens and retained forest matter. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Untreated rejected coniferous log waste; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste_at_landing_sort_scale`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark roadside reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Direct forest chipping (`forest_chip`)

Node `forest_chip` must complete the direct-release coverage reconciliation in `cp_direct_release_forest_chip`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Graded roundwood fed to forest chipper (`chipper_roundwood_input`)

Internal transfer of already graded pulpwood/panel wood; no new harvested source is created.

- Selected flow: Graded conifer pulpwood/panel roundwood; unresolved
- Flow property / unit: solid under-bark volume [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Matched feed scale tickets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chip_conversion`
- Range: Provisional chip-feed balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: m3/m3
  - Basis: per 1 m3 under-bark direct-chip process output; provisional values are screening only, not replacements for measurement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct forest chipping — Energy supply (`chipper_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chip_energy`
- Sources: `fao-harvesting-code`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark equivalent direct-chip process output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark equivalent direct-chip process output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Direct forest chipping — Lubricant consumed by equipment (`chipper_lubricant`)

Task: Direct forest chipping. Activate only for lubricant consumption recorded separately from fuel. Identify chain oil, hydraulic oil or engine lubricant and formulation; instantiate separate exchanges for different uses/products. Convert measured volume using documented density. Retain leakage, spent-oil collection and receiver records rather than assuming an emission or disposal route.

- Selected flow: Recorded lubricant formulation and application; UUID unresolved
- Flow property / unit: Mass of lubricant product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chip_energy`
- Sources: `fao-harvesting-code`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark equivalent direct-chip process output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Directly forest-made conifer chips at roadside (`direct_forest_chips`)

Only chips made directly from roundwood in the forest qualify; measured mass or bulk volume needs lot-specific conversion to solid under-bark equivalent.

- Selected flow: Direct forest chips from conifer pulpwood/panel wood; exact UUID unresolved
- Flow property / unit: solid under-bark wood equivalent [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: 1 m3 equivalent process output from matched chip and feed records
- Amount rule when reference output: 1 m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chip_conversion`
- Range: Direct-chip process-output identity check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m3/m3
  - Basis: per 1 m3 under-bark direct-chip process output; provisional values are screening only, not replacements for measurement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-jfsq-2020`

##### Waste flows

###### Bark separated from forest-chip production (`chip_bark_rejects`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. Use only when bark is actually separated and exported; do not deduct an assumed bark amount. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Separated untreated conifer bark waste; UUID unresolved
- Flow property / unit: As-received material mass / kg
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste_at_forest_chip`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark equivalent direct-chip process output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wood fines removed from forest chips (`chip_wood_fines`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. Record screen size, moisture and wood-only composition; exported fines differ from mineral/foreign contamination. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Untreated coniferous wood fines from direct forest chipping; UUID unresolved
- Flow property / unit: As-received material mass / kg
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste_at_forest_chip`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark equivalent direct-chip process output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-spec coarse wood removed from chipping (`chip_oversize_wood`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. Record coarse pieces exported for treatment. Material recirculated to the chipper is an internal return, not a final waste output; track the extra operation once. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Untreated off-spec coniferous coarse wood waste; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste_at_forest_chip`
- Sources: `fao-jfsq-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark equivalent direct-chip process output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

The product definitions and volume convention below are supported by the FAO sources. The allocation hierarchy and shared-asset attribution are rules selected by this PCR, not LCA allocation requirements prescribed by those statistical or harvesting documents. Before applying a volume or service driver, demonstrate its relevance to the shared activity and retain the justification and sensitivity to a materially different justified driver; a product-class definition alone is not allocation evidence.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `distinct_outputs` | Harvest and graded lots | Report pulp/panel wood, sawlogs/veneer logs, other industrial wood, fuelwood, and rejected or forest-retained material separately, each with a handoff. Residues are not intended co-products unless documented recovery makes them saleable. | `fao-jfsq-2020` |
| `direct_then_physical` | Shared management, harvest and landing inputs | Assign metered output-specific activities directly. Allocate genuinely shared burdens across intended products using measured solid under-bark output volumes within the same cohort, documenting shares and any justified alternative; do not apply automatic avoided-production credits. | `fao-jfsq-2020` |
| `period_and_asset_once` | Years and shared roads, landing and machines | Link establishment, tending, maintenance and harvesting activities to cohorts and service years. Allocate shared infrastructure by measured use, load, hours or output once across consumers; never re-add it in a downstream node. | `fao-harvesting-code` |
| `chip_internal_transfer` | Direct forest-chip variant | Graded roundwood entering the chipper is an internal transfer, not a second final market product; balance measured chips and rejects before roadside handover. | `fao-jfsq-2020` |
| `physical_ledger_before_allocation` | Physical ledgers and attributed burdens | Retain unallocated physical values for original material balances, handoffs and co-products: q_B = Q_B/R. Apply this PCR's allocation method separately to shared burdens: b_ref = B_shared * a_ref/R; assign direct burdens directly and apply each period/output share once. R is the selected final reference output, excluding internal transfers. Never apply burden share a_ref to original co-product or transfer quantities; distinguish any allocated single-product process projection from the unallocated whole-package material ledger. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_management` | `stand_management` | Management inputs | Work and purchase records | stand, cohort, year, input/service, quantity, area, shared consumer  ; stock species/form; fertilizer composition; protection active substance/concentration; water source/treatment; supply specification; activation/missing flag; actual task/service boundary ; fuel grade/density; electricity voltage/mix; task operating hours| Link invoices, work orders and stand map; Raw aggregation operation: Assign input to cohort once per output; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | item; kg; L; m3; kWh; h; ha; year | per operation and annual close | establishment through harvest | declared stand | per 1 m3 reference flow | dated invoices, maps, meter logs |
| `cp_stand_inventory_at_stand_management` | `stand_management` | Standing source | Forest inventory | species, cohort, plot, trees, size, volume model, bark basis  ; same-lot mass/volume samples; measured density; moisture; bark coverage; mass estimation/weighing method; conversion uncertainty; event_id; transfer_id; counterparty_process_id | Inventory plots and documented volume model; Raw aggregation operation: Reconcile standing merchantable volume to removals; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m3 under bark | pre-harvest and close | declared cohort | harvested stand | per 1 m3 reference flow | plot sheets, model and scale reconciliation |
| `cp_stand_inventory_at_felling_extraction` | `felling_extraction` | Standing source | Forest inventory | species, cohort, plot, trees, size, volume model, bark basis  ; same-lot mass/volume samples; measured density; moisture; bark coverage; mass estimation/weighing method; conversion uncertainty; event_id; transfer_id; counterparty_process_id | Inventory plots and documented volume model; Raw aggregation operation: Reconcile standing merchantable volume to removals; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m3 under bark | pre-harvest and close | declared cohort | harvested stand | per 1 m3 reference flow | plot sheets, model and scale reconciliation |
| `cp_harvest_energy` | `felling_extraction` | Harvest energy | Machine and fuel logs | machine, task, fuel/kWh, hours, lot  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag| Match shift logs, meters and fuel invoices; Raw aggregation operation: Divide assigned energy by roadside output; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | L, kg or kWh | each shift/lot | harvest year | felling and extraction route | per 1 m3 reference flow | meter and invoice match |
| `cp_log_scale_at_felling_extraction` | `felling_extraction` | Extracted log transfer | Log and landing tickets | stand, species, unique log ID, size, bark basis, arrival; event_id; transfer_id; counterparty_process_id | Scale and match at landing; Raw aggregation operation: Sum unique arrivals once; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 under bark | each load | harvest year | stump to landing | per 1 m3 reference flow | scale calibration, tickets |
| `cp_log_scale_at_landing_sort_scale` | `landing_sort_scale` | Extracted log transfer | Log and landing tickets | stand, species, unique log ID, size, bark basis, arrival; event_id; transfer_id; counterparty_process_id | Scale and match at landing; Raw aggregation operation: Sum unique arrivals once; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 under bark | each load | harvest year | stump to landing | per 1 m3 reference flow | scale calibration, tickets |
| `cp_residues` | `felling_extraction` | Forest-retained residues | Field survey | plot, tops, branches, merchantable loss, removed flag | Survey or documented volume model; Raw aggregation operation: Separate retained matter from removed volume; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | m3 or kg | representative lot | harvest year | harvested stand | per 1 m3 reference flow | survey and model basis |
| `cp_landing_energy` | `landing_sort_scale` | Landing energy | Handling logs | machine, task, meter, fuel/kWh, throughput  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag| Meter actual roadside equipment use; Raw aggregation operation: Assign once by throughput or handling time; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | L, kg or kWh | each shift/lot | harvest year | landing | per 1 m3 reference flow | logs, invoice, scale ticket |
| `cp_grade_scale` | `landing_sort_scale` | Intended grades and rejects | Grade/dispatch/disposal tickets | log ID, species, grade, intended use, bark basis, volume, reject destination | Grade and scale each lot; Raw aggregation operation: Reconcile incoming volume to products and rejects; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | m3 under bark | every lot | harvest year | landing | per 1 m3 reference flow | signed grade and scale tickets |
| `cp_chip_conversion` | `forest_chip` | Feed, chips and rejects | Matched chip-lot records | feed ID/volume, chip mass/bulk, moisture, density, bark deduction, rejects | Measure matched feed and chip lots; Raw aggregation operation: Convert to solid under-bark equivalent and balance; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | m3 equivalent, kg | each lot | harvest year | in-forest chipper | per 1 m3 reference flow | scale tickets, density/moisture tests |
| `cp_chip_energy` | `forest_chip` | Chipper energy | Chipper machine logs | machine, meter, fuel/kWh, chip lot  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag| Meter assigned chipping energy; Raw aggregation operation: Divide by solid-equivalent output; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | L, kg or kWh | each lot | harvest year | in-forest chipper | per 1 m3 reference flow | meter and fuel logs |
| `cp_removed_waste_at_landing_sort_scale` | `landing_sort_scale` | separate exported wood/bark waste streams | weighing, screening and receiver tickets | lot; material; treatment/contamination; mass/volume; moisture; bark; screen size; receiver; treatment; date; event_id; transfer_id; counterparty_process_id | measure each stream and reconcile receiver tickets; Raw aggregation operation: separate products, returns, exported waste and retained material; reconcile like measurement bases; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m3 | each lot/removal | harvest through roadside gate | actual generating node | per 1 m3 reference flow | calibration, composition/moisture test and receiver tickets |
| `cp_removed_waste_at_forest_chip` | `forest_chip` | separate exported wood/bark waste streams | weighing, screening and receiver tickets | lot; material; treatment/contamination; mass/volume; moisture; bark; screen size; receiver; treatment; date; event_id; transfer_id; counterparty_process_id | measure each stream and reconcile receiver tickets; Raw aggregation operation: separate products, returns, exported waste and retained material; reconcile like measurement bases; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m3 | each lot/removal | harvest through roadside gate | actual generating node | per 1 m3 reference flow | calibration, composition/moisture test and receiver tickets |
| `cp_direct_release_stand_management` | `stand_management` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_felling_extraction` | `felling_extraction` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_landing_sort_scale` | `landing_sort_scale` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_forest_chip` | `forest_chip` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_underbark` | All wood rows | Sum scaled solid wood volume excluding bark; deduct measured or documented species/lot bark volume from over-bark readings. | log scale, bark deduction | m3 solid under bark | `fao-jfsq-2020` |
| `calc_chip_equivalent` | Direct forest chips | Convert chip mass/bulk volume with lot-specific density, moisture and bark basis; reconcile against measured roundwood feed; no universal factor. | chip and feed tickets, tests | m3 solid under-bark equivalent | `fao-jfsq-2020` |
| `calc_assortment_balance` | Landing outputs | For one reconciliation boundary covering landing sorting and any activated forest chipping, V_open + V_receipts = V_selected_final + V_other_final + V_exported_waste + V_retained_loss + V_close + delta, all on matched underbark solid-volume or evidenced equivalent bases. Receipts include own-harvest deliveries and external purchased lots; cancel paired sorting-to-chipper transfers once. Select exactly one final reference output per lot from actual chipping activation, never both roundwood feed and chips. Opening/closing stock includes work in progress; known stock changes are explicit. Delta is only an unexplained measurement residual, not an inferred loss or emission; exported waste and retained loss must originate in the same input wood pool. | receipt/sorting/chipping tickets; opening/closing and work-in-progress stock; transfer, waste and retained-loss records | reconciled output m3 | `fao-jfsq-2020` |
| `calc_shared_burden` | Cross-output and cross-period inputs | Directly assign metered use; otherwise allocate each shared activity once by documented service/use or under-bark output fraction within the cohort; sum shares to 100%. | service records, cohort, products | assigned activity per m3 output | `fao-harvesting-code` |
| `calculate_direct_release_ledger` | `stand_management`; `felling_extraction`; `landing_sort_scale`; `forest_chip` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_stand_management; cp_direct_release_felling_extraction; cp_direct_release_landing_sort_scale; cp_direct_release_forest_chip; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | All wood states | Preserve conifer species, origin, intended use, physical form, gate and lot linkage; split mixed or unknown assortments. | stand, grade, dispatch records |
| `dq_measurement` | Reference amount | Document scaling/calibration, bark correction and chip moisture/density conversion. | scale certificates and worksheets |
| `dq_period` | Management and shared assets | Record cohort, activity/harvest years and consumers; disclose attribution period and exclusions. | dated work, road and machine records |
| `dq_completeness` | Wood and energy balances | Reconcile harvested logs, grades, chips, rejects, retained material and energy without double-counting internal transfers. | balance worksheet and fuel reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_class_gate` | Dataset identity | Reject missing conifer identity, pulp/panel intended use, form or forest-roadside gate, and any mill residues, fuelwood or external haulage counted as reference output. Classify the actual final product form: round/split pulpwood is CPC 03112; deliberately produced forest chips are CPC 31230. The broader PCR mapping does not authorize coding chips as roundwood. | `un-cpc-03112`, `un-cpc-31230`, `fao-jfsq-2020` |
| `validate_volume` | Reference quantity | Require normalized 1 m3 solid volume under bark; reject unconverted over-bark logs or loose-chip volume. | `fao-jfsq-2020` |
| `validate_route_balance` | Process links | Match cohort and lot IDs; reconcile products, rejects and retained residues; count chipped internal transfer only once at final gate. | `fao-jfsq-2020` |
| `validate_attribution` | Shared/multi-period inputs | Require named periods, assets, consumers, driver and shares; reject duplicate burdens and undisclosed substitution credits. | `fao-harvesting-code` |
| `validate_flow_resolution` | Downstream exchange creation | Do not emit a concrete TIDAS exchange from any unresolved semantic card until exact flow, property and unit-group identities are verified. |  |
| `validate_card_activation_units` | All refined cards | Verify activation and actual material/formulation/task/supply specification; missing records are not zero. Each amount and Range uses one compatible property/unit; retain density and wood mass/volume bridges. Check contractor-service components against fuel, equipment and emissions to avoid double burdens. | `fao-harvesting-code` |
| `validate_direct_release_coverage` | `stand_management`; `felling_extraction`; `landing_sort_scale`; `forest_chip` | For every activated node, reconcile its activity list against cp_direct_release_stand_management; cp_direct_release_felling_extraction; cp_direct_release_landing_sort_scale; cp_direct_release_forest_chip: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground forest-roadside pulpwood/panel-wood production package for the declared roundwood or direct forest-chip state, not a reviewed platform dataset |
| downstream_use | `secondary_dataset` or `background_dataset` after identity and review checks |
| allowed_use | Downstream models with matching conifer species, region, regime, grade, form and roadside gate |
| excluded_use | Sawlogs, veneer logs, non-coniferous wood, fuelwood, mill chips/residues, manufactured pulp/panels or mill-gate wood without added transport |
| required_metadata | Species/group, region, stand/cohort, reporting/harvest years, intended use, form, bark/moisture, harvest system, landing, conversion, chip branch, assortments and shared-asset treatment |
| required_quality_disclosure | Primary-record coverage, scaling uncertainty, unresolved identities, energy completeness, residue estimate, period and co-product attribution |
| update_trigger | New verified platform UUID, changed species/route/gate, improved scaling or fuel data, output classes or forest attribution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-03112` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03112 | Product identity and pulp/panel purpose |
| `un-cpc-31230` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31230 | Classification of deliberately produced wood chips; distinguishes the chip state from CPC 03112 roundwood |
| `fao-jfsq-2020` | official_guidance | FAO Joint Forest Sector Questionnaire Definitions, https://www.fao.org/forestry-fao/7800-0944787ecbf6036088182f841ab15fe42.pdf | Roundwood forms, direct forest chips, use-class distinction and solid under-bark volume |
| `fao-harvesting-code` | official_guidance | FAO Model Code of Forest Harvesting Practice, https://www.fao.org/4/v6530e/v6530e12.htm and https://www.fao.org/4/v6530e/v6530e08.htm | Felling, extraction and roadside-landing handoff |
| `fao-planted-forest-management` | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/management-of-planted-forests/1/en?tabInx=1; https://www.fao.org/4/AC601E/ac601e03.htm | Conditional planting stock, fertilization, protection and watering inputs; no universal application rates |
