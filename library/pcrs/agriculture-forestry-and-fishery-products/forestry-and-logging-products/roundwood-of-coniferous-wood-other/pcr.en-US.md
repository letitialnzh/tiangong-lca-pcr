---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-other
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other coniferous industrial roundwood at forest roadside

## 1. Scope and Applicability

This PCR covers unprocessed coniferous industrial roundwood assigned to uses other than sawing, veneer, pulp, or panels, including pole, pile, post, fence, pitprop, wood-wool, mushroom-growing, and comparable logs. Intended use and physical log assortment define the category; do not relabel sawlogs, pulpwood, or fuelwood as “other” because they are low grade. The gate is sorted logs at the forest-roadside landing, ready for road transport. Long-distance haulage, preservation, machining, chipping, and finished goods are outside scope. Sources: `unsd-cpc-03119`, `fao-jfsq-definitions`, `fao-wood-harvesting`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-other |
| classification_refs | CPC 3.0 `03119` (proposed exact match) |
| covered_products | Unprocessed coniferous industrial roundwood for pole, pile, post, fence, pitprop, wood-wool, mushroom, match-block, and comparable other use |
| excluded_products | Sawlogs, veneer logs, pulpwood, panel wood, fuelwood, non-coniferous logs, processed or treated wood goods |
| representative_product | As-received unpreserved coniferous pole/post assortment at forest roadside |
| production_route | Managed stand → felling and extraction → bucking, grading, measurement, and roadside assortment |
| market_state | Unprocessed logs with or without bark, at forest-roadside landing before long-distance transport |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Other-use coniferous industrial roundwood at forest roadside |
| How much | 1 kg as-received saleable log mass; report matching under-bark solid m³ separately |
| How well | Declared coniferous species, intended use, grade, length/diameter, bark and moisture state |
| How long or cycle | Harvest lot/campaign; link stand burdens to relevant management periods and harvested lots |
| reference_flow_link | `roundwood_other_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Roundwood of coniferous wood, other `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/mix; region and stand regime; planted/natural source; harvest system; intended use and grade; log length and diameter; bark state; moisture; lot mass and under-bark volume; lot-specific mass–volume bridge; harvest period; roadside gate; co-product set and allocation method |

The verified platform product flow has a Mass reference property and kg unit, not a volume property. FAO's under-bark m³ is mandatory parallel reporting, not the unit of that UUID. Source: `fao-jfsq-definitions`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Target logs at roadside | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg as received | Weigh net wood mass; retain bark and moisture state. |
| `underbark_volume` | Every merchantable assortment | Solid volume | m³ under bark | Scale logs by declared method; document species/lot bark deduction when only over-bark dimensions exist. |
| `mass_volume_bridge` | Reference and co-product lots | Mass and solid volume | kg/m³ | Calculate measured as-received kg divided by matching under-bark m³ for each species/lot/assortment; no universal density. |
| `cross_period_normalization` | Stand and harvest burdens | Mass and solid volume | kg and m³ by period | Link establishment, maintenance, thinning, harvest, loss, and asset service to stand and period before allocation. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified coniferous stand/block with species, planted/natural source, tenure, management history, and harvest authorization; standing wood is not assumed burden-free. |
| starting_condition_role | Managed biological source entering the foreground stand-to-roadside chain. |
| product_classification_scope | Target other-use logs only; separately record saw/veneer, pulp/panel, fuelwood, and any other assortments. |
| recursive_input_rule | An input of another roundwood category keeps its upstream dataset once; do not recursively add the same stand or harvest burden. |
| upstream_dataset_requirement | Use matched datasets for actual purchased inputs and services; disclose proxies. |
| disclosure | Stand/lot, region, phase, silviculture, harvest equipment, extraction distance, gate, all outputs, bark/moisture, scaling, mass conversion, and asset attribution. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stand_to_roadside` | All nodes | Include attributable stand operations, felling, on-site extraction, bucking, sorting, scaling, and landing handling. Separate biological production, harvest, and grading because their states and handovers differ. Exclude off-site haulage and subsequent treatment/manufacture. | `fao-wood-harvesting`; `fao-jfsq-definitions` |
| `boundary_output_classes` | Roadside outputs | Enumerate target logs, other saleable assortments, recovered material, and unrecovered slash separately. Slash left in forest is neither an exported product nor a waste exchange. | `unsd-cpc-03119`; `fao-jfsq-definitions` |
| `boundary_period_asset` | Stand and shared roads/landing | Link stand establishment/maintenance, thinning, final harvest, road/landing service, disturbance, and replacement by period. Charge shared service once across its consuming nodes/periods. | `fao-wood-harvesting` |
| `boundary_direct_release_coverage` | `managed_stand`; `harvest_extraction`; `roadside_assortment` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_managed_stand; cp_direct_release_harvest_extraction; cp_direct_release_roadside_assortment. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

## 6. Process Inventory Structure

Inventory reporting and process measurement layers: card amounts are reported per 1 kg reference flow; original quantities, same-lot process outputs, material states and period attribution remain individually recorded in collection protocols and calculation rules. Assign input burdens directly first and allocate shared burdens under Section 7. Preserve unallocated physical transfer and co-product ledgers, then divide each applicable lot amount by the positive final reference-product quantity of the same boundary and period; burden allocation must not shrink a material balance. Do not count internal transfers again as final outputs. Range blocks retain their explicitly declared original denominators: test process-output ranges locally before comparing any reference-normalized amount. If a Range must be converted, scale both bounds using the measured process-output/final-reference-quantity ratio and reviewed attribution factors applicable only to burdens, retaining original bounds and evidence; never assume this ratio is one. Each energy carrier, fertilizer formulation, material and substance keeps its own unit; unlike units cannot be summed. The final reference output is accepted lot quantity divided by itself; rejects, packaging and non-reference grades are excluded from its denominator.

Determine activation from stand, task and lot records; distinguish unused activity from missing data. Energy, fertilizer and other common input requirements use one conditional card per process and input class; resolve actual carriers, formulations and supply specifications into verified concrete exchanges during dataset construction, without adding a PCR card per specification. Independently required product states, handoffs and destinations remain separate. Measure fuel by mass, electricity by electrical energy and services in their reference unit, retaining documented density for volume conversion; do not apply one quantity range to L, kg, kWh and h. Same-lot output/input handoffs share a compatible material identity, with process gate retained in lot records. A generic platform flow may be used where its scope is compatible and foreground records carry the required qualifiers; absence of species in a flow name or a Mass property alone is not grounds for rejection.
### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_stand` | Managed coniferous stand production | `required` | Stand history and management must be declared | Biological production and standing-wood handover | stand/harvest lot |
| `harvest_extraction` | Felling, bucking, and extraction | `required` | Harvested source and route must be declared | Harvest from standing source to mixed landing logs | mixed landing volume/mass |
| `roadside_assortment` | Roadside grading and handover | `required` | Target and non-target states must be considered | Sorting, measurement, and release | 1 kg target logs and total output set |

Conditional cards distinguish material, energy and intended-use roles. Confirm each activation condition, actual formulation/supply specification and measurement basis before instantiating concrete exchanges.

### Process: Managed coniferous stand production (`managed_stand`)

Node `managed_stand` must complete the direct-release coverage reconciliation in `cp_direct_release_managed_stand`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

The managed object is the coniferous stand. Management inputs and shared roads are assigned to their real periods. Handover is standing merchantable wood at the harvest block, not a roadside log. Unrecovered biomass is an in-forest loss or stock change, not a product.

#### Inputs

##### Product flows

###### Coniferous seedlings for planting (`conifer_seedlings`)

Activate only for recorded planting or replanting. Declare species, provenance, bare-root/container stock, age/size and delivered nursery gate; separate different stock forms. Attribute delivered seedlings to the relevant stand phase. Naturally regenerated lots with no planting have no seedling exchange.

- Selected flow: Coniferous nursery seedlings; resolve species, provenance and stock form; UUID unresolved
- Flow property / unit: Number of seedlings / item
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: item/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous seed for direct sowing (`conifer_seeds`)

Activate only where direct sowing is documented. Record species, provenance, purity, moisture and treatment, delivered seed mass and sown area. Seed embedded in purchased nursery seedlings is upstream of the seedling supply and is not added here.

- Selected flow: Coniferous tree seed for direct sowing; resolve species and treatment; UUID unresolved
- Flow property / unit: Mass of seed as supplied / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilizer applied to the stand (`stand_fertilizer`)

Activate only for recorded fertilization in the foreground stand. Instantiate one exchange per commercial formulation; retain N/P/K composition, product mass, date and area. Nutrient mass is a parallel calculation, not the fertilizer-product exchange amount. Nursery fertilizer embedded in purchased seedlings is not duplicated.

- Selected flow: Applied fertilizer product of the recorded formulation; UUID unresolved
- Flow property / unit: Mass of commercial fertilizer product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for establishment or tending (`stand_watering_water`)

Activate only for measured foreground watering. Record source, supplied-water grade/treatment, meter and pumping boundary. Supplied product water and direct water withdrawal are distinct roles; record a direct withdrawal separately by resource and compartment if it occurs. Rainfall is not supplied water.

- Selected flow: Supplied watering water with recorded source and treatment; UUID unresolved
- Flow property / unit: Volume of supplied water / m3
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recorded vegetation-control or protection product (`stand_protection_product`)

Activate only for documented chemical vegetation control or tree protection. Record product, active substance and concentration, formulation, applied product mass, date and area. Resolve each formulation separately; any release needs its own substance and receiving-medium evidence. Mechanical weeding does not imply a chemical input.

- Selected flow: Recorded commercial protection formulation; one exchange per formulation; UUID unresolved
- Flow property / unit: Mass of commercial formulated product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recorded establishment and tending operation — Energy supply (`stand_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



###### Recorded establishment and tending operation — Contracted operation with declared service boundary (`stand_service`)

Task: Recorded establishment and tending operation. Activate only for a contractor dataset whose reference is operating hours of the named task/equipment. Record supplier, task, technology, service unit and included fuels, machinery and emissions. If its service unit differs, create an appropriately measured task card. Components already included in the service dataset are not also burdened through separate fuel or machine inputs.

- Selected flow: Recorded contractor operation, machine and service boundary; UUID unresolved
- Flow property / unit: Measured equipment operating time / h
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management`
- Sources: `fao-wood-harvesting`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exported waste; record actual removed waste separately if present.

##### Elementary flows

No generic emission UUID; any direct emission needs identified substance and receiving medium.

#### Outputs

##### Product flows

###### Standing merchantable coniferous wood (`standing_wood_handover`)

Internal standing-wood state handed from managed production to the harvest node.

- Selected flow: Standing merchantable coniferous timber; generic standing-stock identity with foreground species and stand `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; matched under-bark solid volume m3 recorded separately
- Amount rule: Express the fixed Mass exchange in kg of the same merchantable stemwood stock, from measured mass or a documented same-lot mass/volume bridge with matching moisture and bark coverage; never apply a default density. Reconcile standing merchantable quantity, cut logs, and retained losses for the block.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_inventory_at_managed_stand`
- Sources: `fao-jfsq-definitions`
- Range: Broad provisional stand-to-target screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: standing merchantable wood per 1 kg target logs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste output; mortality and unrecovered wood remain stock/loss disclosures unless removed.

##### Elementary flows

No generic elementary output is prescribed.

### Process: Felling, bucking, and extraction (`harvest_extraction`)

Node `harvest_extraction` must complete the direct-release coverage reconciliation in `cp_direct_release_harvest_extraction`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Harvest independently removes wood from the stand, then extracts it to the landing. Collect incidental damaged wood and unrecovered slash in a loss register. Only physically removed product or waste crosses the foreground exchange boundary.

#### Inputs

##### Product flows

###### Standing coniferous wood input (`standing_wood_input`)

Internal standing-wood receipt linked to the same stand inventory and harvest lot.

- Selected flow: Standing merchantable coniferous timber; generic standing-stock identity with foreground species and stand `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; matched under-bark solid volume m3 recorded separately
- Amount rule: Express the fixed Mass exchange in kg of the same merchantable stemwood stock, from measured mass or a documented same-lot mass/volume bridge with matching moisture and bark coverage; never apply a default density. Carry the same stand lot once, without a second upstream burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_inventory_at_harvest_extraction`
- Sources: `fao-wood-harvesting`
- Range: Same-lot transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: internal input per 1 kg target logs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Felling, bucking and extraction — Energy supply (`harvest_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



###### Felling, bucking and extraction — Lubricant consumed by equipment (`harvest_lubricant`)

Task: Felling, bucking and extraction. Activate only for lubricant consumption recorded separately from fuel. Identify chain oil, hydraulic oil or engine lubricant and formulation; instantiate separate exchanges for different uses/products. Convert measured volume using documented density. Retain leakage, spent-oil collection and receiver records rather than assuming an emission or disposal route.

- Selected flow: Recorded lubricant formulation and application; UUID unresolved
- Flow property / unit: Mass of lubricant product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Sources: `fao-wood-harvesting`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Felling, bucking and extraction — Contracted operation with declared service boundary (`harvest_service`)

Task: Felling, bucking and extraction. Activate only for a contractor dataset whose reference is operating hours of the named task/equipment. Record supplier, task, technology, service unit and included fuels, machinery and emissions. If its service unit differs, create an appropriately measured task card. Components already included in the service dataset are not also burdened through separate fuel or machine inputs.

- Selected flow: Recorded contractor operation, machine and service boundary; UUID unresolved
- Flow property / unit: Measured equipment operating time / h
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Sources: `fao-wood-harvesting`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste input.

##### Elementary flows

No generic elementary input; actual exchanges require medium-specific identity.

#### Outputs

##### Product flows

###### Mixed coniferous roundwood at landing (`mixed_roundwood_output`)

Logs physically removed from the block and delivered to the landing before sorting.

- Selected flow: Internal mixed unprocessed coniferous roundwood at landing; concrete identity unresolved
- Flow property / unit: Mass / kg and parallel under-bark solid m³
- Amount rule: Sum removed logs arriving at the landing before destination grading.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_landing_scale_at_harvest_extraction`
- Sources: `fao-jfsq-definitions`
- Range: Broad provisional recovered-log screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: recovered logs per 1 kg target logs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default slash flow; material removed for disposal requires its own recorded and verified waste identity.

##### Elementary flows

Direct emissions require specific substance, receiving medium, activity, and factor evidence.

### Process: Roadside grading and handover (`roadside_assortment`)

Node `roadside_assortment` must complete the direct-release coverage reconciliation in `cp_direct_release_roadside_assortment`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Incoming mixed logs are graded into mutually exclusive target, saw/veneer, pulp/panel, fuelwood, and rejected states. Every declared output state has one destination and roadside handover. Saleable non-target logs are co-products, not losses; unrecovered slash is not an exchange.

#### Inputs

##### Product flows

###### Roadside grading and handling — Energy supply (`grading_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assortment_energy`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Mixed landing logs input (`mixed_roundwood_input`)

Internal transfer of the unsorted landing lot into roadside grading.

- Selected flow: Internal mixed roundwood from `harvest_extraction`; concrete identity unresolved
- Flow property / unit: Mass / kg and under-bark solid m³
- Amount rule: Carry same landing lot once and reconcile it against sorted outputs and losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_landing_scale_at_roadside_assortment`
- Sources: `fao-jfsq-definitions`
- Range: Same-lot transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: mixed landing logs per 1 kg target logs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input.

##### Elementary flows

No generic elementary input.

#### Outputs

##### Product flows

###### Other-use coniferous roundwood output (`roundwood_other_output`)

Saleable target assortment released at the forest-roadside gate.

- Selected flow: Roundwood of coniferous wood, other `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
Parallel measurement and support information: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; under-bark solid m³ in parallel

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
Measurement detail: Weighed target logs normalized to exactly 1 kg reference product, with same-lot volume/moisture record.

- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `fao-jfsq-definitions`
- Range: Declared reference-product identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: normalized target output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-jfsq-definitions`

###### Coniferous sawlogs accepted for sawing at roadside (`coproduct_sawlog`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous sawlogs accepted for sawing at roadside; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; matched under-bark solid volume recorded separately
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assortment_outputs`
- Sources: `fao-jfsq-definitions`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous veneer logs accepted for peeling or slicing at roadside (`coproduct_veneer_log`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous veneer logs accepted for peeling or slicing at roadside; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; matched under-bark solid volume recorded separately
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assortment_outputs`
- Sources: `fao-jfsq-definitions`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous roundwood accepted for pulp or wood-based panels at roadside (`coproduct_pulp_panel`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous roundwood accepted for pulp or wood-based panels at roadside; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; matched under-bark solid volume recorded separately
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assortment_outputs`
- Sources: `fao-jfsq-definitions`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coniferous fuelwood logs sold for energy use at roadside (`coproduct_fuelwood`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous fuelwood logs sold for energy use at roadside; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; matched under-bark solid volume recorded separately
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assortment_outputs`
- Sources: `fao-jfsq-definitions`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected untreated logs removed as waste (`removed_rejected_logs`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. Record rejected roadside logs separately from saleable fuelwood, bark, and retained slash; retain a matched under-bark volume for the wood balance. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Untreated rejected coniferous log waste; UUID unresolved
- Flow property / unit: As-received material mass / kg
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste`
- Sources: `fao-jfsq-definitions`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: 1 kg as-received other-use coniferous roundwood reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No generic elementary output without substance- and medium-specific evidence.

## 7. Allocation and Co-product Handling

The allocation rules below are methodological choices of this PCR, not LCA allocation requirements prescribed by FAO statistical definitions. The FAO source supports product distinctions and the under-bark volume convention only. Justify the selected physical allocation driver against the actual joint production system and retain the required sensitivity comparison.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_first` | All nodes | Assign directly recorded activities to the actual stand, lot, and assortment first. Enumerate all saleable output classes and roadside handovers; distinguish co-product, retained slash, and removed waste. | `fao-wood-harvesting`; `fao-jfsq-definitions` |
| `allocation_shared_volume` | Joint stand and harvest burdens | Allocate residual joint burdens among all saleable log assortments by measured under-bark solid m³ at the same gate and period. Record denominator, bark deduction, zero-output lots, and sensitivity to another defensible physical basis. Do not allocate unrecovered slash as a saleable output. | `fao-jfsq-definitions` |
| `allocation_period` | Establishment, maintenance, thinning, final harvest | Link every input, output, disturbance, and replacement event to stand phase and reporting period. Assign stand burdens over the declared production horizon by attributable harvested under-bark volume, counting thinning outputs once. No universal rotation duration is imposed. | `fao-wood-harvesting` |
| `allocation_shared_asset` | Shared roads, landing, machinery | Identify every consuming node and service period. Charge construction, maintenance, and operation once by logged use where possible; otherwise use documented harvested-volume share over the service period. | `fao-wood-harvesting` |
| `physical_ledger_before_allocation` | Physical ledgers and attributed burdens | Retain unallocated physical values for original material balances, handoffs and co-products: q_B = Q_B/R. Apply this PCR's allocation method separately to shared burdens: b_ref = B_shared * a_ref/R; assign direct burdens directly and apply each period/output share once. R is the selected final reference output, excluding internal transfers. Never apply burden share a_ref to original co-product or transfer quantities; distinguish any allocated single-product process projection from the unallocated whole-package material ledger. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_management` | `managed_stand` | management inputs and shared road | stand plan, invoice, activity log | stand; phase; date; species; planted/natural; input/service; quantity; asset  ; stock species/form; fertilizer composition; protection active substance/concentration; water source/treatment; supply specification; activation/missing flag; actual task/service boundary ; fuel grade/density; electricity voltage/mix; task operating hours| reconcile plan, invoice, and field log; Raw aggregation operation: assign to period then lot/output; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | item; kg; L; m3; kWh; h; ha; year | each activity and annual close | establishment through harvest | source block and shared assets | per 1 kg reference flow | permits, invoices, GIS plan, signed logs |
| `cp_stand_inventory_at_managed_stand` | `managed_stand` | standing wood and loss | forest inventory and harvest tally | stand; species; diameter; height; merchantable volume; bark; mortality; date  ; same-lot mass/volume samples; measured density; moisture; bark coverage; mass estimation/weighing method; conversion uncertainty; event_id; transfer_id; counterparty_process_id | field inventory and scaling; Raw aggregation operation: reconcile standing, removed, retained; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m³ under bark; kg if weighed | pre-harvest and harvest close | all relevant stand phases | source stand | per 1 kg reference flow | inventory plots and scale calibration |
| `cp_stand_inventory_at_harvest_extraction` | `harvest_extraction` | standing wood and loss | forest inventory and harvest tally | stand; species; diameter; height; merchantable volume; bark; mortality; date  ; same-lot mass/volume samples; measured density; moisture; bark coverage; mass estimation/weighing method; conversion uncertainty; event_id; transfer_id; counterparty_process_id | field inventory and scaling; Raw aggregation operation: reconcile standing, removed, retained; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m³ under bark; kg if weighed | pre-harvest and harvest close | all relevant stand phases | source stand | per 1 kg reference flow | inventory plots and scale calibration |
| `cp_harvest_energy` | `harvest_extraction` | harvest energy/services | machine/fuel log | machine; task; hours; fuel; electricity; extraction distance; asset  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag| meter, issue ticket, invoice; Raw aggregation operation: sum by task; apportion shared use once; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; L; kWh; h; km | each shift or lot | harvest campaign | block to landing | per 1 kg reference flow | tickets and meters |
| `cp_landing_scale_at_harvest_extraction` | `harvest_extraction` | mixed logs and transfer | scale and landing tally | lot; species; log count; length; diameter; bark; mass; moisture; scaling method; event_id; transfer_id; counterparty_process_id | weighbridge and log scaling; Raw aggregation operation: reconcile input, sorted, stored, lost; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m³ under bark; % moisture | each load/lot | harvest campaign | forest-roadside landing | per 1 kg reference flow | calibration, tally, sampling |
| `cp_landing_scale_at_roadside_assortment` | `roadside_assortment` | mixed logs and transfer | scale and landing tally | lot; species; log count; length; diameter; bark; mass; moisture; scaling method; event_id; transfer_id; counterparty_process_id | weighbridge and log scaling; Raw aggregation operation: reconcile input, sorted, stored, lost; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m³ under bark; % moisture | each load/lot | harvest campaign | forest-roadside landing | per 1 kg reference flow | calibration, tally, sampling |
| `cp_assortment_outputs` | `roadside_assortment` | target and co-output | sort and stock/sales ticket | lot; use; grade; destination; length; diameter; bark; mass; volume; stock | grade inspection and weighing/scaling; Raw aggregation operation: mutually exclusive output classes; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; m³ under bark | each lot and close | harvest campaign | forest-roadside landing | per 1 kg reference flow | buyer spec, sort and scale tickets |
| `cp_assortment_energy` | `roadside_assortment` | roadside grading/handling diesel and electricity | machine, meter and issue records | machine; task; lot; fuel grade/density; kg/L; kWh; voltage/supply mix; hours; activation/missing | meter and reconcile issue/task logs; Raw aggregation operation: direct task assignment; apportion shared use once by throughput/hours; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; L; kWh; h | each shift/lot | roadside sorting through handover | roadside landing | per 1 kg reference flow | calibration, fuel tickets and logs |
| `cp_removed_waste` | `roadside_assortment` | separate exported wood/bark waste streams | weighing, screening and receiver tickets | lot; material; treatment/contamination; mass/volume; moisture; bark; screen size; receiver; treatment; date | measure each stream and reconcile receiver tickets; Raw aggregation operation: separate products, returns, exported waste and retained material; reconcile like measurement bases; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; m3 | each lot/removal | harvest through roadside gate | actual generating node | per 1 kg reference flow | calibration, composition/moisture test and receiver tickets |
| `cp_direct_release_managed_stand` | `managed_stand` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_harvest_extraction` | `harvest_extraction` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_roadside_assortment` | `roadside_assortment` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_volume` | Each assortment lot | `kg_per_m3 = measured_as_received_kg / measured_underbark_m3` for the matching species, moisture, and lot; no universal density. | weighed kg; scaled m³; bark and moisture records | conversion factor and uncertainty | `fao-jfsq-definitions` |
| `calc_output_balance` | Landing output set | `mixed_kg = target_kg + non_target_kg + removed_waste_kg + measured_stock_or_loss_change_kg`; reconcile m³ separately on under-bark basis. | harvest, sort, stock tickets | balance and exception log | `fao-jfsq-definitions` |
| `calc_normalize` | Final-reference normalization of physical ledgers and environmental burdens | R is positive final accepted as-received other-use log mass (kg) for the same lot, boundary and period; co-products and internal transfers are excluded from that denominator. Report unallocated material, transfer and co-product totals Q as q_phys = Q/R. For environmental burdens B only, complete evidenced direct, period, output and asset attribution once, then report b_ref = B_attributed/R. Do not apply burden shares to physical ledgers or divide already final-reference amounts again. | unallocated physical ledger Q; environmental burdens B; evidenced attribution; matched reference quantity R | amount per 1 kg target logs | `fao-wood-harvesting` |
| `calculate_direct_release_ledger` | `managed_stand`; `harvest_extraction`; `roadside_assortment` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_managed_stand; cp_direct_release_harvest_extraction; cp_direct_release_roadside_assortment; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Output lots | Species, intended use, grade, state, and destination must match the source class and selected reference flow. | sort ticket and buyer specification |
| `dq_mass_volume` | All log outputs | Retain calibrated weights, log scaling, bark deduction, moisture sampling, lot-specific kg/m³ bridge, and uncertainty. Volume-only data do not directly instantiate a Mass UUID. | weighbridge, scale, sample sheet |
| `dq_completeness` | Full chain | Reconcile stand, harvest, landing, sorted outputs, fuel, stock, slash, and shared infrastructure with no duplicate burden. | signed balance and attribution ledger |
| `dq_temporal` | Multi-period stand | Declare phase, thinning/final harvest, reporting periods, and asset service, disturbance, or replacement. | stand and event ledger |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | Reference product | Require exactly 1 kg normalized as-received other-use coniferous logs at forest roadside, with the verified Mass flow/property/unit group and separate measured under-bark m³. Reject volume-property assertions for the Mass UUID. | `unsd-cpc-03119`; `fao-jfsq-definitions` |
| `validate_category` | Roadside output set | Check species and intended use; reject saw/veneer, pulp/panel, fuelwood, non-coniferous, or treated/fabricated goods as reference product. Account for every other output once. | `unsd-cpc-03119`; `fao-jfsq-definitions` |
| `validate_balance` | Harvest and sorting | Reconcile mass and under-bark volume; separately disclose retained biomass, removed waste, unsold stock, and co-products. | `fao-jfsq-definitions` |
| `validate_period_asset` | Shared activities | Trace each stand phase and shared road/landing service period into one ledger; reject missing disturbance/replacement treatment or duplicate charges. | `fao-wood-harvesting` |
| `validate_identity_coverage` | Conditional exchanges | Final exchanges need actual material/state, direction, type, property/unit, and verified UUID. Semantic umbrella cards cannot be published as fabricated fixed identities. | `fao-wood-harvesting` |
| `validate_card_activation_units` | All refined cards | Verify activation and actual material/formulation/task/supply specification; missing records are not zero. Each amount and Range uses one compatible property/unit; retain density and wood mass/volume bridges. Check contractor-service components against fuel, equipment and emissions to avoid double burdens. | `fao-wood-harvesting` |
| `validate_direct_release_coverage` | `managed_stand`; `harvest_extraction`; `roadside_assortment` | For every activated node, reconcile its activity list against cp_direct_release_managed_stand; cp_direct_release_harvest_extraction; cp_direct_release_roadside_assortment: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground stand-to-roadside dataset reusable as secondary/background data only for declared species, use, geography, and harvest route |
| downstream_use | Process and lifecyclemodel production of compatible other-use coniferous logs and downstream systems |
| allowed_use | Mass-normalized roadside inventory with measured under-bark volume and complete co-product attribution |
| excluded_use | Automatic substitution for sawlogs, veneer logs, pulpwood, fuelwood, non-coniferous wood, mill-gate products, or treated goods |
| required_metadata | PCR id/version; stand/lot; species; region; management/harvest system; intended use; grade; bark/moisture; gate; period; kg and under-bark m³; conversion; co-products; allocation |
| required_quality_disclosure | Primary record coverage; mass/volume uncertainty; provisional ranges; unresolved conditional identities; period and shared-asset attribution; upstream proxies |
| update_trigger | Changed use, species, harvest technology, geography, road service, measurement bridge, or reviewed range/identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-03119` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03119 | Product identity, uses, and subclass boundary |
| `fao-jfsq-definitions` | `official_guidance` | https://www.fao.org/forestry-fao/7800-0944787ecbf6036088182f841ab15fe42.pdf | Industrial roundwood classes, roadside stock, under-bark volume and co-output distinctions |
| `fao-wood-harvesting` | `official_guidance` | https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=0 | Planning, felling, extraction, landing, roads, and process decomposition |
| `fao-planted-forest-management` | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/management-of-planted-forests/1/en?tabInx=1; https://www.fao.org/4/AC601E/ac601e03.htm | Conditional planting stock, fertilization, protection and watering inputs; no universal application rates |
