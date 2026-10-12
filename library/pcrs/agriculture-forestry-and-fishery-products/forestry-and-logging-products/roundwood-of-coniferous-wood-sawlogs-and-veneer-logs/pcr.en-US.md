---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-sawlogs-and-veneer-logs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coniferous sawlogs and veneer logs at roadside landing

## 1. Scope and Applicability

This PCR covers coniferous roundwood selected for lengthwise sawing into lumber or railway sleepers, or peeling or slicing into veneer. The product is a raw log or bolt at a roadside landing, not sawnwood or a veneer sheet. Roughly squared logs, shingle or stave bolts, match billets, and specialty burls or roots are included only if selected for those uses. The official product boundary is in `unsd-cpc-03111` and `fao-forest-products-2020`.

The foreground system includes attributable managed-stand activity, felling, extraction from stump to landing, delimbing and bucking at the actual route position, grading, and loading-ready roadside handover. A shortwood route may buck at the stump; tree-length routes may buck at the landing. Count the duty once. Road haul beyond the landing and mill-side sawing or veneer production are excluded (`fao-wood-harvesting`).

Pulp/panel wood, poles and other industrial logs, fuelwood, non-coniferous logs, wood-processing residues, sawnwood and veneer sheets are outside the reference product. Downgraded logs sold to those markets are separately reported co-products of the harvest, not included in the sawlog/veneer-log reference volume.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-sawlogs-and-veneer-logs |
| classification_refs | CPC 3.0:03111 exact — Roundwood of coniferous wood, sawlogs and veneer logs |
| covered_products | Coniferous sawlogs, veneer logs, roughly squared logs, shingle/stave bolts, match billets and special veneer logs |
| excluded_products | Pulp/panel wood; other industrial roundwood; fuelwood; non-coniferous logs; processed lumber and veneer |
| representative_product | 1 m3 solid underbark of graded coniferous sawlog or veneer log ready for pickup at a roadside landing |
| production_route | Managed stand → felling/removal → skidding, forwarding or cable extraction → delimbing/bucking at stump or landing → grading and roadside handover |
| market_state | Raw round or roughly squared log/bolt; bark may remain physically attached, but reporting is solid wood volume underbark |

The managed-stand parent may be naturally regenerated or planted. The latter changes seedling and site-preparation inventory only when those duties occurred. Motor-manual/mechanized felling and ground/cable extraction are alternative implementations of their parent activities; fuel, access and equipment records establish any delta. Routes can coexist among separate harvest lots but are mutually exclusive for a given stem segment. The route-specific bucking position is recorded (`fao-wood-harvesting`).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Coniferous sawlog or veneer log graded for sawing or veneer use |
| How much | 1 m3 solid wood volume underbark at the roadside landing |
| How well | Declared conifer species, intended use, log grade, dimensions and bark convention |
| How long or cycle | One identified harvest lot with its attributable stand phases, normalized to 1 m3; record harvest year |
| reference_flow_link | `saw_veneer_log` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Coniferous sawlog or veneer log at roadside landing; UUID unresolved |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; measured as solid wood volume underbark |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | species or mix; region and stand type; harvest system; log grade and intended use; length and diameter convention; underbark conversion; bark and moisture state; harvest lot/year; landing gate; co-product attribution |

The foreground package must carry these qualifiers. The product-flow UUID remains unresolved. Confirmed Volume and volume-unit-group support identifies only the physical property and units, not the product state, gate or a product-flow match.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `underbark_volume` | Reference and all roundwood grade outputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 underbark | Use calibrated log-scale dimensions and a locally evidenced bark correction where needed. Do not equate stacked volume or tonnes to solid underbark volume (`fao-forest-products-2020`). |
| `wood_balance` | Standing stock, felled stems, landing logs, grades and residues | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 underbark | Balance only matching wood components from the same lot under consistent bark, dimensional, moisture and volume conventions. Merchantable-stem input reconciles only with grades and stem losses originating in that input; branches, bark and other biomass outside it require separate component ledgers, not additional outputs in the stemwood balance. |
| `fuel_basis` | Mobile and landing equipment | Fuel volume or energy; UUID unresolved | L or MJ | Preserve fuel type and lower-heating-value method; represent direct combustion once, not as upstream fuel production twice. |
| `period_basis` | Tending and shared access | Physical service or area | ha, h, km or m3 | Attribute only dated activities benefiting the harvested lot. Never assume a universal rotation length. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `managed_conifer_stand_before_attributable_harvest` |
| starting_condition_role | Declares the stand, region, management phase, legal harvest area and standing stock before attributable tending and removal. |
| product_classification_scope | Coniferous sawlog/veneer-log grades only; other harvested destinations are separately identified co-products or retained residues. |
| recursive_input_rule | Purchased coniferous logs are upstream products with separate datasets; never reopen this PCR recursively for that purchased input. |
| upstream_dataset_requirement | Link purchased seedlings, fuels, electricity, lubricants, access materials and contracted services where they cross the boundary; model site combustion and land management once. |
| disclosure | State forest origin, species, management phase, harvest system, bucking location, extraction distance, road/landing service, grading, bark and volume method, co-product destinations, residue fate, allocation and roadside gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_roadside` | All lots | Include attributable stand management, felling, extraction, preparation and grading through loading-ready roadside handover; exclude road haul beyond landing and wood conversion. | `fao-wood-harvesting` |
| `boundary_route_position` | Tree-length and shortwood routes | Locate delimbing/bucking at its actual stump or landing position and count input and residue duties once. | `fao-wood-harvesting` |
| `boundary_residue` | Slash, bark and rejects | Marketed wood is a product, exported disposal material is waste, and slash retained in forest is a disclosed on-site loss rather than fictitious exported waste. | `fao-forest-products-2020` |
| `boundary_shared` | Roads, landings and equipment | Attribute shared services across consuming operations and periods once, using recorded hours, area, road use or volume as appropriate. |  |
| `boundary_direct_release_coverage` | `stand_management`; `felling_removal`; `forest_extraction`; `log_preparation`; `grade_handover` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_stand_management; cp_direct_release_felling_removal; cp_direct_release_forest_extraction; cp_direct_release_log_preparation; cp_direct_release_grade_handover. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

Inventory reporting and process measurement layers: card amounts are reported per 1 m3 reference flow; original quantities, same-lot process outputs, material states and period attribution remain individually recorded in collection protocols and calculation rules. Assign input burdens directly first and allocate shared burdens under Section 7. Preserve unallocated physical transfer and co-product ledgers, then divide each applicable lot amount by the positive final reference-product quantity of the same boundary and period; burden allocation must not shrink a material balance. Do not count internal transfers again as final outputs. Range blocks retain their explicitly declared original denominators: test process-output ranges locally before comparing any reference-normalized amount. If a Range must be converted, scale both bounds using the measured process-output/final-reference-quantity ratio and reviewed attribution factors applicable only to burdens, retaining original bounds and evidence; never assume this ratio is one. Each energy carrier, fertilizer formulation, material and substance keeps its own unit; unlike units cannot be summed. The final reference output is accepted lot quantity divided by itself; rejects, packaging and non-reference grades are excluded from its denominator.

Determine activation from stand, task and lot records; distinguish unused activity from missing data. Energy, fertilizer and other common input requirements use one conditional card per process and input class; resolve actual carriers, formulations and supply specifications into verified concrete exchanges during dataset construction, without adding a PCR card per specification. Independently required product states, handoffs and destinations remain separate. Measure fuel by mass, electricity by electrical energy and services in their reference unit, retaining documented density for volume conversion; do not apply one quantity range to L, kg, kWh and h. Same-lot output/input handoffs share a compatible material identity, with process gate retained in lot records. A generic platform flow may be used where its scope is compatible and foreground records carry the required qualifiers; absence of species in a flow name or a Mass property alone is not grounds for rejection.
### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_management` | Stand management | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Produces identified standing timber stock before felling. | harvestable stem m3 underbark and dated stand phases per reference m3 |
| `felling_removal` | Felling and removal | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Independently removes stemwood from standing stock; hands felled stems to extraction. | felled-stem m3 underbark per reference m3 |
| `forest_extraction` | Forest extraction to roadside | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Transfers felled stems or shortwood to landing, not to mill. | landing-stem m3 underbark per reference m3 |
| `log_preparation` | Primary delimbing and bucking | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Converts raw stems to measured logs and identifies trim, bark and loss. | prepared-log m3 underbark per reference m3 |
| `grade_handover` | Grading and roadside handover | required | Sort every prepared log by use and grade. | Separates saw/veneer reference logs, downgraded products and disposal rejects. | m3 underbark per grade and destination per reference m3 |

Route order is exclusive per stem segment. Shortwood follows felling → forest-site delimbing/bucking → extraction of prepared shortwood → roadside grading. Tree-length follows felling → extraction of tree-length stems → landing delimbing/bucking → roadside grading. The display order of process nodes is not a common operational sequence for both routes.

### Process: Stand management (`stand_management`)

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
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: item/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
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
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
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
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
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
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: m3/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
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
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-planted-forest-management`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
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
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
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
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-wood-harvesting`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: h/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvestable standing stemwood (`standing_stemwood`)

Identified standing biological stock is handed to felling, not sold as a log and not counted as an additional biogenic uptake credit.

- Selected flow: Standing merchantable coniferous timber; generic standing-stock identity with foreground species and stand `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; matched under-bark solid volume m3 recorded separately
- Amount rule: Express the fixed Mass exchange in kg of the same merchantable stemwood stock, from measured mass or a documented same-lot mass/volume bridge with matching moisture and bark coverage; never apply a default density. Estimate harvestable stem volume from pre-harvest inventory and reconcile against removals.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_at_stand_management`
- Sources: `fao-forest-products-2020`
- Range: Provisional parallel-volume QA screen; not a kg exchange-amount bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log ; applies only to parallel recorded under-bark volume; the fixed flow exchange amount remains kg
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Felling and removal (`felling_removal`)

Node `felling_removal` must complete the direct-release coverage reconciliation in `cp_direct_release_felling_removal`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Standing stemwood entering harvest (`standing_stemwood_input`)

The same lot stock enters felling; do not add a separate purchased-wood burden.

- Selected flow: Standing merchantable coniferous timber; generic standing-stock identity with foreground species and stand `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; matched under-bark solid volume m3 recorded separately
- Amount rule: Express the fixed Mass exchange in kg of the same merchantable stemwood stock, from measured mass or a documented same-lot mass/volume bridge with matching moisture and bark coverage; never apply a default density. Match the recorded stand-stock handoff.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_at_felling_removal`
- Sources: `fao-forest-products-2020`
- Range: Provisional parallel-volume QA screen; not a kg exchange-amount bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log ; applies only to parallel recorded under-bark volume; the fixed flow exchange amount remains kg
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Felling — Energy supply (`felling_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_at_felling_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



###### Felling — Lubricant consumed by equipment (`felling_lubricant`)

Task: Felling. Activate only for lubricant consumption recorded separately from fuel. Identify chain oil, hydraulic oil or engine lubricant and formulation; instantiate separate exchanges for different uses/products. Convert measured volume using documented density. Retain leakage, spent-oil collection and receiver records rather than assuming an emission or disposal route.

- Selected flow: Recorded lubricant formulation and application; UUID unresolved
- Flow property / unit: Mass of lubricant product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_at_felling_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Felled coniferous stems (`felled_stems`)

Felled merchantable coniferous stems immediately after felling at the forest site. Hand over to stump-side preparation in the shortwood route, or to extraction in the tree-length route. Retained slash stays in the loss ledger; prepared shortwood is identified separately.

- Selected flow: Felled coniferous stems; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Reconcile the merchantable-stem felling tally with matched landing receipts, stock changes and retained losses originating in that same stemwood input pool; keep excluded branches and bark in separate component ledgers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_at_felling_removal`
- Sources: `fao-forest-products-2020`
- Range: Broad provisional felled-stem screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Forest extraction to roadside (`forest_extraction`)

Node `forest_extraction` must complete the direct-release coverage reconciliation in `cp_direct_release_forest_extraction`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Felled stems entering extraction (`felled_stems_input`)

Activate only for tree-length extraction before landing preparation; match the felled-stem output by lot and declared delimbing state. In the shortwood route use prepared_shortwood_input instead, so a stem segment enters extraction once.

- Selected flow: Felled coniferous stems; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Match felled-stem tally entering ground or cable extraction.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_at_forest_extraction`
- Sources: `fao-wood-harvesting`
- Range: Matched extraction input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Stump-prepared shortwood entering extraction (`prepared_shortwood_input`)

Activate only for the shortwood route. Receive delimbed, bucked and ungraded conifer logs from prepared_logs at the forest site; record same-lot dimensions, under-bark volume and forest-site gate. Do not also include them in felled_stems_input.

- Selected flow: Prepared ungraded coniferous logs; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Match the prepared_logs forest-site scale ticket and harvest lot before extraction.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_landing_at_forest_extraction`
- Sources: `fao-forest-products-2020`
- Range: Matched forest-site shortwood input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Stump-to-landing extraction — Energy supply (`extraction_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_at_forest_extraction`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Stump-to-landing extraction — Lubricant consumed by equipment (`extraction_lubricant`)

Task: Stump-to-landing extraction. Activate only for lubricant consumption recorded separately from fuel. Identify chain oil, hydraulic oil or engine lubricant and formulation; instantiate separate exchanges for different uses/products. Convert measured volume using documented density. Retain leakage, spent-oil collection and receiver records rather than assuming an emission or disposal route.

- Selected flow: Recorded lubricant formulation and application; UUID unresolved
- Flow property / unit: Mass of lubricant product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_at_forest_extraction`
- Sources: `fao-wood-harvesting`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Unsorted stems at landing (`landing_stems`)

Activate only for the tree-length route. Ungraded tree-length stems arrive at the roadside before landing delimbing/bucking and feed raw_stems_input. Disclose extraction damage and loss; do not merge these stems with already bucked shortwood.

- Selected flow: Unsorted coniferous stems at landing; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Measure landing receipts and reconcile by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_landing_at_forest_extraction`
- Sources: `fao-forest-products-2020`
- Range: Broad provisional landing-throughput screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Prepared shortwood delivered to roadside (`landing_shortwood`)

Activate only for the shortwood route. Deliver same-lot delimbed, bucked, ungraded conifer logs at roadside to prepared_logs_input for grading without a second preparation step. Record dimensions, moisture/bark convention and extraction loss.

- Selected flow: Prepared ungraded coniferous logs; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Sum measured roadside shortwood receipts by lot and reconcile extraction loss against the forest-site input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_landing_at_forest_extraction`
- Sources: `fao-forest-products-2020`
- Range: Roadside shortwood receipt screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary delimbing and bucking (`log_preparation`)

Node `log_preparation` must complete the direct-release coverage reconciliation in `cp_direct_release_log_preparation`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Delimbing and bucking at the recorded route position — Energy supply (`preparation_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_at_log_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



###### Delimbing and bucking at the recorded route position — Lubricant consumed by equipment (`preparation_lubricant`)

Task: Delimbing and bucking at the recorded route position. Activate only for lubricant consumption recorded separately from fuel. Identify chain oil, hydraulic oil or engine lubricant and formulation; instantiate separate exchanges for different uses/products. Convert measured volume using documented density. Retain leakage, spent-oil collection and receiver records rather than assuming an emission or disposal route.

- Selected flow: Recorded lubricant formulation and application; UUID unresolved
- Flow property / unit: Mass of lubricant product / kg
- Amount rule: Collect measured quantity by task, lot and period; attribute to the actual consumer before normalization. Inactive activities are omitted; missing records are not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_at_log_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Raw stems for preparation (`raw_stems_input`)

Shortwood route — receive felled_stems at the forest site before extraction. Tree-length route — receive landing_stems at the roadside after extraction. Record lot, route, actual gate, delimbing state and dimensions; use one preparation position per segment.

- Selected flow: Unsorted coniferous stems for preparation; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Match incoming stems at the actual preparation position.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_landing_at_log_preparation`
- Sources: `fao-wood-harvesting`
- Range: Broad provisional raw-stem screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared coniferous logs (`prepared_logs`)

Delimbed and bucked ungraded coniferous logs or bolts at the actual preparation gate. Shortwood route — hand over at the forest site to prepared_shortwood_input for extraction. Tree-length route — hand over at the landing directly to prepared_logs_input for grading. No log segment is counted at both gates.

- Selected flow: Prepared ungraded coniferous logs; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Sum scaled log volumes across all destinations after preparation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grades_at_log_preparation`
- Sources: `fao-forest-products-2020`
- Range: Broad provisional prepared-log screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Separated bark removed as waste (`removed_bark`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. Record whether debarking actually occurred and where; bark mass is not under-bark stem volume. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Separated untreated conifer bark waste; UUID unresolved
- Flow property / unit: As-received material mass / kg
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste_at_log_preparation`
- Sources: `fao-forest-products-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Woody trim removed as waste (`removed_woody_trim`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. Record cut ends/wood pieces separately from bark and branches left on site. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Untreated coniferous woody trim waste; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste_at_log_preparation`
- Sources: `fao-forest-products-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading and roadside handover (`grade_handover`)

Node `grade_handover` must complete the direct-release coverage reconciliation in `cp_direct_release_grade_handover`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Roadside sorting and loading-ready handling — Energy supply (`grading_energy`)

Use one conditional energy card for this process, without splitting PCR cards by fuel grade or electricity specification. During dataset construction, expand the actual recorded carriers into concrete exchanges with verified UUIDs, supply specifications and units. Do not double count energy already included in contractor services or foreground generation.

- Selected flow: Actual fuel or electricity supply for this process; expand recorded carriers, no single umbrella UUID
- Flow property / unit: Actual fuel mass / kg; electrical energy / kWh; retain native L and mass-conversion evidence separately
- Amount rule: Attribute each recorded carrier to this process in its own amount/unit, then normalize on the basis below; never add kg to kWh or substitute zero for missing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_at_grade_handover`
- Sources: `fao-wood-harvesting`
- Range: Provisional QA screen for actual fuel mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional QA screen for actual electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate. ; applies separately to each actual carrier in the stated unit, not a mixed-energy total
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Prepared logs entering grading (`prepared_logs_input`)

Receive prepared logs from landing_shortwood after shortwood extraction, or directly from prepared_logs after landing preparation in the tree-length route. Match the actual route, same lot, log dimensions and under-bark volume before mutually exclusive intended-use grading.

- Selected flow: Prepared ungraded coniferous logs; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Match prepared-log handoff and log-level grading tally.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grades_at_grade_handover`
- Sources: `fao-forest-products-2020`
- Range: Broad provisional grading-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: m3 underbark
  - Basis: per 1 m3 final log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Graded sawlog or veneer log (`saw_veneer_log`)

Coniferous logs accepted for lengthwise sawing or veneer peeling/slicing are transferred at the loading-ready roadside landing.

- Selected flow: Coniferous sawlog or veneer log at roadside landing; UUID unresolved
- Flow property / unit: Solid wood volume underbark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
Measurement detail: Scale accepted grades, then normalize this reference output to exactly 1 m3.

- Amount rule: 1 m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grades_at_grade_handover`
- Sources: `unsd-cpc-03111`; `fao-forest-products-2020`
- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m3 underbark
  - Basis: per 1 m3 reference log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-normalization-identity`

###### Coniferous roundwood accepted for pulp or wood-based panels at roadside (`coproduct_pulp_panel`)

Activate only for this separately marketable assortment from the same harvest lot. Record conifer species, raw log form, intended use, buyer grade, bark/moisture, measured quantity and roadside receiver. Each log belongs to one grade/use and one final handover; reject material sold for another use is reclassified to that product. Resolve the concrete flow using its actual product qualifiers; any kg/m3 conversion requires matching lot evidence.

- Selected flow: Coniferous roundwood accepted for pulp or wood-based panels at roadside; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3; retain mass and moisture where available
- Amount rule: Measure the unallocated physical total Q_B of this assortment separately and normalize only by the positive final reference quantity R for the same boundary and period: q_B = Q_B/R. Do not multiply physical co-product quantities by shared-burden allocation factors. Attribute shared environmental burdens separately; zero only when records confirm no such output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grades_at_grade_handover`
- Sources: `fao-forest-products-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
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
- Collection protocol: `cp_grades_at_grade_handover`
- Sources: `fao-forest-products-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
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
- Collection protocol: `cp_grades_at_grade_handover`
- Sources: `fao-forest-products-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected untreated logs removed as waste (`rejected_wood`)

Activate only when this identified material is physically removed as waste to a recorded receiver/treatment. This is rejected whole log/bolt material after grading, not bark, preparation trim or saleable fuelwood. Keep retained material in the stock/loss ledger and saleable material in the appropriate product card. Unidentified or contaminated material requires its own composition-specific card before a UUID is selected.

- Selected flow: Untreated rejected coniferous log waste; UUID unresolved
- Flow property / unit: Solid wood volume under bark [Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- Amount rule: Measure the separate removed stream by receiver, lot and date, retain moisture/bark convention, and reconcile against the same-lot material ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_waste_at_grade_handover`
- Sources: `fao-forest-products-2020`
- Range: Provisional non-negative screen; not a default input/output rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/m3
  - Basis: 1 m3 under-bark sawlog/veneer-log reference output; screen only for investigating exceptions, not a substitute for measurement or a universal rate.
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_set` | Grading and shared harvest | Tally sawlog and veneer-log grades, pulp/panel logs, other industrial logs and fuelwood where marketed; give each destination one handover and measured underbark volume. Keep rejected waste and retained slash separate from intended products. | `fao-forest-products-2020` |
| `allocation_shared_activity` | Shared stand, felling, extraction and landing burdens | Assign directly metered activity to the receiving grade where feasible; otherwise allocate common harvest activity among marketed wood outputs by measured solid underbark volume at the common gate. No avoided-product credit or burden allocation to retained slash. |  |
| `allocation_period_assets` | Stand phases, roads, landing and machines | Index establishment, tending, thinning and harvest activity by stand and year. Attribute shared assets to benefiting lots using actual area, machine hours, road service or measured output before the grade split. Carry only the share benefiting future harvests forward; never count one burden twice. |  |
| `physical_ledger_before_allocation` | Physical ledgers and attributed burdens | Retain unallocated physical values for original material balances, handoffs and co-products: q_B = Q_B/R. Apply this PCR's allocation method separately to shared burdens: b_ref = B_shared * a_ref/R; assign direct burdens directly and apply each period/output share once. R is the selected final reference output, excluding internal transfers. Never apply burden share a_ref to original co-product or transfer quantities; distinguish any allocated single-product process projection from the unallocated whole-package material ledger. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_at_stand_management` | `stand_management` | silvicultural inputs and standing stock | stand plan, operation and inventory record | stand_id; area; species; origin; age/phase; dated material inputs; thinning; standing volume; harvest year  ; stock species/form; fertilizer composition; protection active substance/concentration; water source/treatment; supply specification; activation/missing flag; actual task/service boundary ; fuel grade/density; electricity voltage/mix; task operating hours ; same-lot mass/volume samples; measured density; moisture; bark coverage; mass estimation/weighing method; conversion uncertainty; event_id; transfer_id; counterparty_process_id | forestry inventory and material issue records; Raw aggregation operation: attribute actual phase inputs to harvest lots then normalize by final reference volume; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | item; kg; L; m3; kWh; h; ha; year | per stand event and harvest lot | attributable establishment through harvest | managed compartment | per 1 m3 reference flow | management plan, plots, invoices, harvest permit |
| `cp_stand_at_felling_removal` | `felling_removal` | silvicultural inputs and standing stock | stand plan, operation and inventory record | stand_id; area; species; origin; age/phase; dated material inputs; thinning; standing volume; harvest year  ; stock species/form; fertilizer composition; protection active substance/concentration; water source/treatment; supply specification; activation/missing flag; actual task/service boundary ; fuel grade/density; electricity voltage/mix; task operating hours ; same-lot mass/volume samples; measured density; moisture; bark coverage; mass estimation/weighing method; conversion uncertainty; event_id; transfer_id; counterparty_process_id | forestry inventory and material issue records; Raw aggregation operation: attribute actual phase inputs to harvest lots then normalize by final reference volume; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | item; kg; L; m3; kWh; h; ha; year | per stand event and harvest lot | attributable establishment through harvest | managed compartment | per 1 m3 reference flow | management plan, plots, invoices, harvest permit |
| `cp_fuel_at_felling_removal` | `felling_removal` | machine fuel and shared service | fuel issue and machine-hour log | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag; event_id; transfer_id; counterparty_process_id | fuel meter or reconciled issue and shift log; Raw aggregation operation: assign direct fuel by task and shared fuel by recorded hours; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; L; kWh; h; km | per shift/lot | full harvest operation | felling and extraction fleet | per 1 m3 reference flow | meter calibration, invoices, shift logs |
| `cp_fuel_at_forest_extraction` | `forest_extraction` | machine fuel and shared service | fuel issue and machine-hour log | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag; event_id; transfer_id; counterparty_process_id | fuel meter or reconciled issue and shift log; Raw aggregation operation: assign direct fuel by task and shared fuel by recorded hours; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; L; kWh; h; km | per shift/lot | full harvest operation | felling and extraction fleet | per 1 m3 reference flow | meter calibration, invoices, shift logs |
| `cp_fuel_at_log_preparation` | `log_preparation` | machine fuel and shared service | fuel issue and machine-hour log | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag; event_id; transfer_id; counterparty_process_id | fuel meter or reconciled issue and shift log; Raw aggregation operation: assign direct fuel by task and shared fuel by recorded hours; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; L; kWh; h; km | per shift/lot | full harvest operation | felling and extraction fleet | per 1 m3 reference flow | meter calibration, invoices, shift logs |
| `cp_fuel_at_grade_handover` | `grade_handover` | machine fuel and shared service | fuel issue and machine-hour log | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance  ; fuel grade/density; electricity voltage/supply mix; lubricant application/formulation; contractor boundary; activation/missing flag; event_id; transfer_id; counterparty_process_id | fuel meter or reconciled issue and shift log; Raw aggregation operation: assign direct fuel by task and shared fuel by recorded hours; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; L; kWh; h; km | per shift/lot | full harvest operation | felling and extraction fleet | per 1 m3 reference flow | meter calibration, invoices, shift logs |
| `cp_harvest_at_felling_removal` | `felling_removal` | felled stemwood and retained slash | felling and removal tally | lot_id; species; pre-harvest volume; felled volume; residual/retained volume; bark method; component_pool; merchantable_stem_definition; branch_bark_inclusion; opening_closing_stock; retained_component; event_id; transfer_id; counterparty_process_id | Reconcile stemwood, branches and bark separately; identify whether each residue originates in the measured input pool, retain unmeasured components as gaps, and do not infer source inputs from a closing residual. plot inventory plus post-harvest tally; Raw aggregation operation: reconcile standing, felled and retained quantities; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 underbark | per lot | felling event | harvest stand | per 1 m3 reference flow | scale sheets, plot method and field inspection |
| `cp_harvest_at_forest_extraction` | `forest_extraction` | felled stemwood and retained slash | felling and removal tally | lot_id; species; pre-harvest volume; felled volume; residual/retained volume; bark method; component_pool; merchantable_stem_definition; branch_bark_inclusion; opening_closing_stock; retained_component; event_id; transfer_id; counterparty_process_id | Reconcile stemwood, branches and bark separately; identify whether each residue originates in the measured input pool, retain unmeasured components as gaps, and do not infer source inputs from a closing residual. plot inventory plus post-harvest tally; Raw aggregation operation: reconcile standing, felled and retained quantities; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 underbark | per lot | felling event | harvest stand | per 1 m3 reference flow | scale sheets, plot method and field inspection |
| `cp_landing_at_forest_extraction` | `forest_extraction` | landing and preparation receipts | landing log scale | lot_id; route; bucking_position; log_length; diameters; bark factor; moisture; receipt volume; event_id; transfer_id; counterparty_process_id | calibrated scale and lot tally; Raw aggregation operation: sum same-convention volume and reconcile handoffs; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 underbark; kg optional | per log/lot | stump through landing | roadside landing or stump-side shortwood | per 1 m3 reference flow | scale calibration and conversion worksheet |
| `cp_landing_at_log_preparation` | `log_preparation` | landing and preparation receipts | landing log scale | lot_id; route; bucking_position; log_length; diameters; bark factor; moisture; receipt volume; event_id; transfer_id; counterparty_process_id | calibrated scale and lot tally; Raw aggregation operation: sum same-convention volume and reconcile handoffs; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 underbark; kg optional | per log/lot | stump through landing | roadside landing or stump-side shortwood | per 1 m3 reference flow | scale calibration and conversion worksheet |
| `cp_grades_at_log_preparation` | `log_preparation` | prepared logs and saleable grades | grade sheet and dispatch record | lot_id; log_id; species; dimensions; grade; intended_use; destination; volume; buyer; handover_time; event_id; transfer_id; counterparty_process_id | log scan/grade sheet and dispatch docket; Raw aggregation operation: sum each destination, reconcile and normalize accepted saw/veneer grades to 1 m3; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 underbark | per log/lot | preparation through roadside handover | roadside landing | per 1 m3 reference flow | grade specification, scale sheet, signed dispatch |
| `cp_grades_at_grade_handover` | `grade_handover` | prepared logs and saleable grades | grade sheet and dispatch record | lot_id; log_id; species; dimensions; grade; intended_use; destination; volume; buyer; handover_time; event_id; transfer_id; counterparty_process_id | log scan/grade sheet and dispatch docket; Raw aggregation operation: sum each destination, reconcile and normalize accepted saw/veneer grades to 1 m3; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | m3 underbark | per log/lot | preparation through roadside handover | roadside landing | per 1 m3 reference flow | grade specification, scale sheet, signed dispatch |
| `cp_residues_at_log_preparation` | `log_preparation` | bark, trim, rejected wood and retained slash | residue and receiver record | residue_type; mass_or_volume; bark_basis; retained_or_removed; destination; treatment; event_id; transfer_id; counterparty_process_id | weighbridge, scale tally or field survey; Raw aggregation operation: separate marketed, exported waste and retained material; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg bark; m3 wood | per lot | harvest through handover | stand and landing | per 1 m3 reference flow | receiver tickets and field survey |
| `cp_residues_at_grade_handover` | `grade_handover` | bark, trim, rejected wood and retained slash | residue and receiver record | residue_type; mass_or_volume; bark_basis; retained_or_removed; destination; treatment; event_id; transfer_id; counterparty_process_id | weighbridge, scale tally or field survey; Raw aggregation operation: separate marketed, exported waste and retained material; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg bark; m3 wood | per lot | harvest through handover | stand and landing | per 1 m3 reference flow | receiver tickets and field survey |
| `cp_removed_waste_at_log_preparation` | `log_preparation` | separate exported wood/bark waste streams | weighing, screening and receiver tickets | lot; material; treatment/contamination; mass/volume; moisture; bark; screen size; receiver; treatment; date; event_id; transfer_id; counterparty_process_id | measure each stream and reconcile receiver tickets; Raw aggregation operation: separate products, returns, exported waste and retained material; reconcile like measurement bases; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m3 | each lot/removal | harvest through roadside gate | actual generating node | per 1 m3 reference flow | calibration, composition/moisture test and receiver tickets |
| `cp_removed_waste_at_grade_handover` | `grade_handover` | separate exported wood/bark waste streams | weighing, screening and receiver tickets | lot; material; treatment/contamination; mass/volume; moisture; bark; screen size; receiver; treatment; date; event_id; transfer_id; counterparty_process_id | measure each stream and reconcile receiver tickets; Raw aggregation operation: separate products, returns, exported waste and retained material; reconcile like measurement bases; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance.; Collect this node's events only; pair counterpart transfers by transfer_id and cancel internal transfers at system aggregation. Assign each shared event to one node without duplicate measurement. | kg; m3 | each lot/removal | harvest through roadside gate | actual generating node | per 1 m3 reference flow | calibration, composition/moisture test and receiver tickets |
| `cp_direct_release_stand_management` | `stand_management` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_felling_removal` | `felling_removal` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_forest_extraction` | `forest_extraction` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_log_preparation` | `log_preparation` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_grade_handover` | `grade_handover` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 m3 reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_underbark` | Every wood stream | Apply documented calibrated log-scale formula and locally measured bark correction before aggregation; never use a universal bark percentage. | length, diameters, bark, scale method | m3 solid underbark by lot and grade | `fao-forest-products-2020` |
| `calc_wood_balance` | Harvest through grading | For the matched merchantable-stem pool, V_open + V_felled + V_purchased = V_marketed + V_removed_stem_waste + V_retained_stem_loss + V_close + delta, on a matched lot-specific solid underbark basis. V_purchased is actual harvested/prepared wood received from outside the reconciled foreground system, excluding own wood already in V_felled and internal transfers; a purchased-only route may have V_felled=0. Delta is only a signed unexplained measurement residual to disclose and investigate: known stock changes are explicit, not delta or emissions. Retained loss must originate in that input pool; branches, bark, special root/burl wood and other excluded components use separate compatible physical ledgers. Cancel paired internal transfers once at whole-package aggregation. | component-indexed felling and external receipt records; opening/closing stocks; grade and loss origins; matched scale records | volume balance by lot | `fao-forest-products-2020` |
| `calc_reference` | Final-reference normalization of physical ledgers and environmental burdens | R is positive accepted saw/veneer-log solid underbark volume (m3) for the same lot, boundary and period; downgraded co-products and internal transfers are excluded from that denominator. Report unallocated material, transfer and co-product totals Q as q_phys = Q/R. For environmental burdens B only, complete evidenced direct, period, output and asset attribution once, then report b_ref = B_attributed/R. Do not apply burden shares to physical ledgers or divide already final-reference amounts again. | unallocated physical ledger Q; environmental burdens B; evidenced attribution; matched reference quantity R | amount per 1 m3 reference output | `reference-normalization-identity` |
| `calc_shared` | Management and shared assets | Attribute actual dated service to benefiting stands/lots once using measured service drivers, then split common lot burden among marketed roundwood grades by underbark volume. | dated operations, service driver, lots, grades | activity attributable to reference grade |  |
| `calculate_direct_release_ledger` | `stand_management`; `felling_removal`; `forest_extraction`; `log_preparation`; `grade_handover` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_stand_management; cp_direct_release_felling_removal; cp_direct_release_forest_extraction; cp_direct_release_log_preparation; cp_direct_release_grade_handover; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_log_trace` | Every log and grade | Link stand, harvest lot, species, grade, intended use and destination to dispatch. | permit, log scale and docket |
| `dq_scale` | Wood volume | State scale method, calibration, bark conversion, moisture and dimensional convention; flag inconsistent units. | scale and conversion worksheet |
| `dq_route` | Harvest route | State extraction method and bucking position; count every machine duty and output once. | machine and operation log |
| `dq_period` | Stand and infrastructure | Record establishment/tending/harvest phases and serviced years, disclosing missing historical records. | management and road-use logs |
| `dq_balance` | Inputs, grades and residues | Reconcile all marketed and retained destinations and disclose residual volume differences or missing fuel data. | grade tally and fuel reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | Reference output | Require conifer species, saw/veneer intended use, raw log state and roadside gate; reject lumber, veneer sheets and pulp/other/fuel logs as the reference. | `unsd-cpc-03111`; `fao-forest-products-2020` |
| `validate_unit` | Reference and wood grades | Require 1 m3 solid underbark reference and documented local conversion for overbark, mass or stacked-volume records. | `fao-forest-products-2020` |
| `validate_route` | Process map | Require evidenced harvest and extraction system, one bucking position per stem segment and no duplicate extraction/preparation burdens. | `fao-wood-harvesting` |
| `validate_destinations` | Landing grade tally | Require one grade, destination, handover and underbark volume for every saw/veneer, pulp/panel, other industrial, fuelwood or rejected stream present. | `fao-forest-products-2020` |
| `validate_rework` | Downgraded and rejected wood | No automatic rework loop is assumed. If an actual lot is regraded or recut, track that operation once and prevent its earlier rejected state from also appearing as accepted output. |  |
| `validate_attribution` | Shared and multi-period activity | Verify phase-to-lot and asset-to-consumer drivers, direct assignment before common volume split, no burden on retained slash and no double attribution. |  |
| `validate_uuid` | Final TIDAS exchanges | Resolve each concrete exchange to exactly one verified flow UUID with matching flow type, direction, property, unit and use before process projection; unresolved cards are not fixed bindings. |  |
| `validate_card_activation_units` | All refined cards | Verify activation and actual material/formulation/task/supply specification; missing records are not zero. Each amount and Range uses one compatible property/unit; retain density and wood mass/volume bridges. Check contractor-service components against fuel, equipment and emissions to avoid double burdens. | `fao-wood-harvesting` |
| `validate_direct_release_coverage` | `stand_management`; `felling_removal`; `forest_extraction`; `log_preparation`; `grade_handover` | For every activated node, reconcile its activity list against cp_direct_release_stand_management; cp_direct_release_felling_removal; cp_direct_release_forest_extraction; cp_direct_release_log_preparation; cp_direct_release_grade_handover: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for coniferous sawlog and veneer-log harvest to loading-ready roadside landing |
| downstream_use | `secondary_dataset` or `background_dataset` for sawing or veneer inputs after gate and grade matching |
| allowed_use | Raw coniferous sawlog/veneer-log supply with declared region, grade and underbark basis |
| excluded_use | Pulp/panel wood, poles, fuelwood, non-coniferous logs, sawmilling, veneer peeling and post-landing haulage without additional datasets |
| required_metadata | Species/stand; management phases; region/year; harvest system; bucking position; grade/destination; gate; bark conversion; output allocation; residue fate |
| required_quality_disclosure | Measured/estimated volume and fuel; bark evidence; balance residual; shared-asset drivers; missing periods; unresolved UUIDs and provisional ranges |
| update_trigger | Changed product use, forest route, scaling, management regime, allocation basis, region or verified platform flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-03111` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03111 | Official sawlog/veneer-log boundary |
| `fao-forest-products-2020` | official_guidance | https://www.fao.org/forestry-fao/7800-0944787ecbf6036088182f841ab15fe42.pdf | Roundwood categories, exclusions, underbark unit |
| `fao-wood-harvesting` | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=0 | Felling, extraction, landing, route distinctions |
| `reference-normalization-identity` | method_factor | PCR identity: reference output divided by itself equals 1 m3 per 1 m3 reference | Reference normalization |
| `fao-planted-forest-management` | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/management-of-planted-forests/1/en?tabInx=1; https://www.fao.org/4/AC601E/ac601e03.htm | Conditional planting stock, fertilization, protection and watering inputs; no universal application rates |
