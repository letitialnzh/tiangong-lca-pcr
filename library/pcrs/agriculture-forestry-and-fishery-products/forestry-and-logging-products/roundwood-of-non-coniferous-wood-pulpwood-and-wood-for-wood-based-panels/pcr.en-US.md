---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-pulpwood-and-wood-for-wood-based-panels
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-coniferous pulpwood and roundwood for wood-based panels

## 1. Scope and Applicability

This PCR covers production of non-coniferous ROUNDWOOD intended for pulp, particle board, oriented strand board (OSB) or fibreboard at forest-roadside producer handover. Product state and intended use, not hardwood density or classification alone, define the category. Exclude conifer wood, saw/veneer logs as reference, other-use logs, fuelwood, finished panels/pulp, industrial chips/residues, recycled wood and chemically treated articles. Actual alternate products remain separately measured coproducts of the forestry lot. Forest chipping is outside this reference route and requires a distinct non-reference dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-pulpwood-and-wood-for-wood-based-panels |
| classification_refs | CPC 3.0 03122 |
| covered_products | Non-conifer roundwood for pulp, particle board, OSB and fibreboard |
| excluded_products | Conifer logs; reference saw/veneer/other-use/fuel logs; pulp/panels; chips and industrial residues; recycled wood; treated products |
| representative_product | Non-coniferous pulpwood and panel roundwood at forest roadside |
| production_route | Actual managed plantation, coppice/regeneration, selectively managed stand or evidenced unmodified natural-stock harvest; felling, extraction, first preparation and intended-use sorting. Origin and route implementations are lot-specific, not universal defaults. |
| market_state | Unprocessed roundwood, actual moisture/bark state, forest-roadside producer handover, pulp/panel intended use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Non-coniferous pulpwood and panel roundwood at forest roadside |
| How much | 1 kg |
| How well | Actual customer pulp/panel acceptance; species/origin, dimensions, bark, moisture and defects declared, not a universal grade |
| How long or cycle | Actual harvest lot and management/cohort service horizon, including establishment, thinnings, final harvest and regeneration where inside the boundary |
| reference_flow_link | `pulp_panel_roundwood_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Non-coniferous pulpwood and panel roundwood at forest roadside |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-conifer species; stand origin/site/cohort; actual management and harvest route; intended pulp/panel use including OSB; dimensions/quality; moisture convention and value; bark basis; harvest lot/date; forest-roadside producer gate; measured mass or same-lot mass/solid-volume bridge; reporting and service periods |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | Reference and internal wood transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain measured as-received mass with moisture/bark metadata; distinguish oven-dry mass, water and bark for allocation. No universal hardwood density. Convert measured solid volume only with representative same-lot mass/density and uncertainty; stacked volume needs a measured solid-volume factor. |
| energy_units | Energy class | Actual carrier property | kg; kWh | Record each fuel and electricity independently. Retain litre records and actual fuel density; kWh/MJ conversions require a declared compatible property/unit group, never a mixed total. |
| fertilizer_n | Fertilizer and field emissions | Mass | kg | Product mass, N fraction and nutrient mass are separate; collect actual formulation/application and applicable emission factor without a universal N rate. |
| land_basis | Occupation/transformation | Actual land-use property | m2 a; m2 | Occupation uses actual area times period; transformation uses an evidenced from/to event area, not the same quantity or presumed clear-cut conversion. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual managed-stand establishment/growth or declared forest stock with equivalent upstream dataset; unmodified natural-resource branch only if evidenced |
| starting_condition_role | foreground_production |
| product_classification_scope | Non-conifer pulp/panel roundwood; alternate wood states are separate outputs, not broadened reference |
| recursive_input_rule | An acquired same-category roundwood input ends recursive foreground tracing at its actual handover and links an equivalent upstream dataset; record only subsequent operations, not a second forest growth/harvest cycle |
| upstream_dataset_requirement | Equivalent species, origin, managed/natural status, physical state, moisture/bark basis, gate, time and product allocation; document any non-equivalence |
| disclosure | Declare start/end, sites/cohorts, route topology, omitted upstream operations, actual events and shared-asset/period attribution |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_start` | Starting condition | Declare site, species, stand origin, cohort and start date. When growth is inside the boundary, include managed-stand history; when acquiring stock, require an equivalent upstream dataset and record exclusions. Unmodified natural stock is not assumed managed. | `fao-wood-harvesting` |
| `b_operations` | Harvest through sorting | Include felling/removal, extraction, first preparation and intended-use grading. Harvest owns source-to-felled handover and resource removal once; extraction-preparation owns stump-side-to-roadside preparation, not another removal. Combine machines only with a complete non-duplicated ledger. | `fao-wood-harvesting` |
| `b_gate` | End gate and exclusions | End at forest-roadside producer handover of reference ROUNDWOOD. Exclude transport to mill, pulping, panels, sawing, chip conversion, preservation/treatment and use/end-of-life. Forest chips or recovered industrial residues need a separate evidenced non-reference dataset, never another reference gate. | `unsd-cpc-non-conifer-pulp-panel`; `fao-wood-harvesting` |
| `b_routes` | Actual alternatives | managed-stand is the parent of plantation versus coppice/regeneration variants: actual planting versus retained stools changes input categories and event/cycle ledgers. For each lot choose its evidenced origin; do not add mutually exclusive establishment events. Harvest and preparation are parents of cut-to-length versus tree-length/whole-tree implementations: delimbing/bucking responsibility moves between nodes, and extraction payload/fuel records change. Record actual machines, topology and handovers; alternative labels alone do not activate extra burdens. | `fao-wood-harvesting` |
| `b_period_assets` | Periods and shared assets | Link establishment, growth, thinning, final harvest, regeneration, road construction/maintenance and equipment use to actual cohorts and service periods. Declare opening/closing stocks, replacements and termination events; reconcile all products, nodes and periods before allocating any shared burdens. | `fao-wood-harvesting` |
| `b_conditional_inputs` | Conditional classes | Energy, fertilizer and service cards are class-level collection requirements. Zero, one or several concrete exchanges follow real records, each with a verified identity and native unit; do not duplicate fuel, machinery or emissions already embodied in a contractor package. | `fao-wood-harvesting` |
| `boundary_direct_release_coverage` | `managed-stand`; `harvest-removal`; `extraction-preparation`; `roadside-grading` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_managed_stand; cp_direct_release_harvest_removal; cp_direct_release_extraction_preparation; cp_direct_release_roadside_grading. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

Inventory reporting and process measurement layers: card amounts are reported per 1 kg reference flow; original quantities, same-lot process outputs, material states and period attribution remain individually recorded in collection protocols and calculation rules. Assign input burdens directly first and allocate shared burdens under Section 7. Preserve unallocated physical transfer and co-product ledgers, then divide each applicable lot amount by the positive final reference-product quantity of the same boundary and period; burden allocation must not shrink a material balance. Do not count internal transfers again as final outputs. Range blocks retain their explicitly declared original denominators: test process-output ranges locally before comparing any reference-normalized amount. If a Range must be converted, scale both bounds using the measured process-output/final-reference-quantity ratio and reviewed attribution factors applicable only to burdens, retaining original bounds and evidence; never assume this ratio is one. Each energy carrier, fertilizer formulation, material and substance keeps its own unit; unlike units cannot be summed. The final reference output is accepted lot quantity divided by itself; rejects, packaging and non-reference grades are excluded from its denominator.

Conditional energy/fertilizer/services/emission classes intentionally stay as one card per process or requirement. Build actual zero/one/multiple exchanges from records without splitting PCR cards by brand, carrier or formulation. Each concrete exchange needs its own compatible UUID/property/unit; a class has no invented single UUID. All other numeric Ranges below are deliberately broad provisional reasoned QA screens, not observed forest performance, defaults or permissible replacements for primary measurements. The reference 1..1 screen follows the chosen normalization, not a yield observation. Record retained slash, stock changes and moisture losses in reconciliation ledgers even when no boundary exchange occurs.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed-stand` | Managed stand establishment and growth | `conditional` | Actual managed-stand growth is inside the declared starting condition; omit when an equivalent standing-stock upstream dataset supplies it | foreground_production | Merchantable standing stock by cohort and period, kg |
| `harvest-removal` | Felling and biological-resource removal | conditional | Own felling/removal occurs inside the foreground; managed and natural source inputs are mutually exclusive per lot. Bypass for purchased harvested wood with matched upstream coverage. | harvest_capture | Felled non-conifer wood at stump-side handover, kg |
| `extraction-preparation` | Extraction and first roundwood preparation | conditional | Actual extraction or first preparation occurs inside the foreground. Bypass completed purchased-feed operations with matched upstream coverage; combined operations retain one burden ledger. | primary_conditioning | Prepared non-conifer roundwood awaiting destination sorting at roadside, kg |
| `roadside-grading` | Roadside intended-use sorting and producer handover | `required` | Declare accepted pulp/panel output and every actual alternate destination or reject; absent conditional outputs are explicit zero, not missing | grading_sorting | Reference pulp/panel roundwood at forest-roadside producer handover, kg |

### Process: Managed stand establishment and growth (`managed-stand`)

Node `managed-stand` must complete the direct-release coverage reconciliation in `cp_direct_release_managed_stand`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Actual non-conifer planting material (`stand_planting_material`)

Seeds, seedlings or cuttings are conditional on the stand origin. Use actual species and planting event; coppice regrowth is not purchased planting stock. Retain count and measured mass when a count-to-mass bridge is needed.

- Selected flow: Actual non-conifer planting material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual fertilizer inputs (`stand_fertilizer`)

One conditional fertilizer class. Expand actual formulations only in the dataset; retain product mass and nutrient content including N separately. Neither fertilization nor one universal formulation is assumed.

- Selected flow: Actual fertilizer inputs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual energy inputs (`stand_energy`)

One class card covers actual fuels and purchased electricity. Expand only the carriers used in the foreground package; retain fuel kg and electricity kWh separately, not a mixed total. Do not duplicate carrier consumption already included in a contracted service.

- Selected flow: Actual energy inputs
- Flow property / unit: Actual fuel Mass / kg; actual electricity energy / kWh
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned QA screen, not measured evidence (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual supporting equipment and services (`stand_supporting_services`)

Conditional class covering actual machinery, lubricant/maintenance, contractor and shared-road services. Expand real material/service exchanges and record their native quantities plus service hours; a billed bundled service excludes its already embodied own-operation inputs.

- Selected flow: Actual supporting equipment and services
- Flow property / unit: Actual material Mass / kg; actual discrete input count / item; actual equipment or service use / h
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (item)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: item
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

##### Elementary flows

###### Actual forest-land occupation (`stand_land_occupation`)

Use georeferenced area and actual cohort-period duration, with the declared land-use class. Attribute occupation to all harvested products from that interval, not automatically all to this final lot.

- Selected flow: Actual forest-land occupation
- Flow property / unit: Actual exchange property / m2 a
- Amount rule: Calculate each actual exchange from activity records, compatible conversion/factor and the protocol; retain raw amount and uncertainty
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: m2 a
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual land-use transformation (`stand_land_transformation`)

Only an evidenced land-use change creates transformation exchanges; record separate from/to land classes and event dates in the actual dataset. Routine harvest of the same forest use is not assumed conversion.

- Selected flow: Actual land-use transformation
- Flow property / unit: Actual exchange property / m2
- Amount rule: Calculate each actual exchange from activity records, compatible conversion/factor and the protocol; retain raw amount and uncertainty
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: m2
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Standing timber (forest biomass, merchantable growing stock) (`stand_merchantable_stock`)

Managed non-conifer cohort stock handed to harvest at the forest site, not roadside logs. Declare actual species, management evidence, moisture/bark basis and same-lot measured density if volume records are converted to kg. The generic carrier is not a species or natural-unmodified-forest default.

- Selected flow: Standing timber (forest biomass, merchantable growing stock) `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Actual direct emissions to their receiving media (`stand_direct_emissions`)

Conditional class: record actual pollutant substance/species or particle-size definition and air/water/soil medium for each emission. Combustion, field applications and spills are calculated only from retained activity records and a declared applicable factor; never bind a broad pollutant family or infer zero from missing evidence.

- Selected flow: Actual direct emissions to their receiving media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate each actual exchange from activity records, compatible conversion/factor and the protocol; retain raw amount and uncertainty
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_managed_stand`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Felling and biological-resource removal (`harvest-removal`)

Node `harvest-removal` must complete the direct-release coverage reconciliation in `cp_direct_release_harvest_removal`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Standing timber (forest biomass, merchantable growing stock) (`harvest_managed_stock`)

Use only for evidenced managed non-conifer stock. Match the stand output or equivalent upstream stock dataset by lot, state, moisture and quantity; exclude its upstream growth burdens from harvest operating inputs. Mutually exclusive with unmodified natural-resource sourcing for the same lot.

- Selected flow: Standing timber (forest biomass, merchantable growing stock) `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual energy inputs (`harvest_energy`)

One class card covers actual fuels and purchased electricity. Expand only the carriers used in the foreground package; retain fuel kg and electricity kWh separately, not a mixed total. Do not duplicate carrier consumption already included in a contracted service.

- Selected flow: Actual energy inputs
- Flow property / unit: Actual fuel Mass / kg; actual electricity energy / kWh
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned QA screen, not measured evidence (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual supporting equipment and services (`harvest_supporting_services`)

Conditional class covering actual machinery, lubricant/maintenance, contractor and shared-road services. Expand real material/service exchanges and record their native quantities plus service hours; a billed bundled service excludes its already embodied own-operation inputs.

- Selected flow: Actual supporting equipment and services
- Flow property / unit: Actual material Mass / kg; actual discrete input count / item; actual equipment or service use / h
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (item)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: item
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

##### Elementary flows

###### Wood biomass resource from unmodified natural forest (`harvest_natural_wood_resource`)

Conditional only when actual unmodified natural stock is directly removed from the environment and the declared method treats it as a resource input. Record species, site and ownership/boundary evidence; do not bind a managed-standing product. An acquired upstream product must instead be modelled as an evidenced product exchange and its resource removal must not be counted again.

- Selected flow: Wood biomass resource from unmodified natural forest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Felled non-conifer wood at stump-side handover (`harvest_felled_wood`)

Felled wood handed to extraction, retaining whole-tree/tree-length/cut-to-length and bark/moisture state. It is an intermediate product, not producer-roadside reference output. Retained slash and stumps are separately reconciled in the source-stock ledger and are not automatically outgoing waste.

- Selected flow: Felled non-conifer wood at stump-side handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual dispatched harvest waste (`harvest_dispatched_waste`)

Only discarded material actually handed to a waste recipient; retain composition, destination and consignment mass. Valuable recovered wood is a separate product and retained forest residues are not this waste handoff.

- Selected flow: Actual dispatched harvest waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct emissions to their receiving media (`harvest_direct_emissions`)

Conditional class: record actual pollutant substance/species or particle-size definition and air/water/soil medium for each emission. Combustion, field applications and spills are calculated only from retained activity records and a declared applicable factor; never bind a broad pollutant family or infer zero from missing evidence.

- Selected flow: Actual direct emissions to their receiving media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate each actual exchange from activity records, compatible conversion/factor and the protocol; retain raw amount and uncertainty
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_removal`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Extraction and first roundwood preparation (`extraction-preparation`)

Node `extraction-preparation` must complete the direct-release coverage reconciliation in `cp_direct_release_extraction_preparation`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Felled non-conifer wood at stump-side handover (`landing_felled_wood`)

Input from harvest_felled_wood with an explicit transfer ledger. Match actual state and kg; extraction distance/terrain and haul method are lot qualifiers, not a second forest-resource-removal node.

- Selected flow: Felled non-conifer wood at stump-side handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual energy inputs (`landing_energy`)

One class card covers actual fuels and purchased electricity. Expand only the carriers used in the foreground package; retain fuel kg and electricity kWh separately, not a mixed total. Do not duplicate carrier consumption already included in a contracted service.

- Selected flow: Actual energy inputs
- Flow property / unit: Actual fuel Mass / kg; actual electricity energy / kWh
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned QA screen, not measured evidence (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual supporting equipment and services (`landing_supporting_services`)

Conditional class covering actual machinery, lubricant/maintenance, contractor and shared-road services. Expand real material/service exchanges and record their native quantities plus service hours; a billed bundled service excludes its already embodied own-operation inputs.

- Selected flow: Actual supporting equipment and services
- Flow property / unit: Actual material Mass / kg; actual discrete input count / item; actual equipment or service use / h
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (item)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: item
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared non-conifer roundwood awaiting sorting at roadside (`landing_prepared_roundwood`)

Delimbed/bucked roundwood, with actual debarking status, handed to intended-use sorting at roadside. Do not confuse this unsorted mixture with the final pulp/panel product. Roundwood may remain unpeeled; optional debarking changes bark and rejects rather than imposing a universal yield.

- Selected flow: Prepared non-conifer roundwood awaiting sorting at roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Recovered bark and woody preparation co-products at roadside (`landing_recovered_bark`)

Conditional class for deliberately recovered products with a documented buyer/use and actual mass. Retain bark versus other woody identity in the dataset; exclude discarded waste and material left on site. No automatic energy-substitution credit.

- Selected flow: Recovered bark and woody preparation co-products at roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual dispatched preparation waste (`landing_preparation_waste`)

Discarded bark, offcuts or contaminated wood handed to a waste recipient, separate from recovered products. Record composition, receiving treatment and whether wet mass contains soil or added water.

- Selected flow: Actual dispatched preparation waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct emissions to their receiving media (`landing_direct_emissions`)

Conditional class: record actual pollutant substance/species or particle-size definition and air/water/soil medium for each emission. Combustion, field applications and spills are calculated only from retained activity records and a declared applicable factor; never bind a broad pollutant family or infer zero from missing evidence.

- Selected flow: Actual direct emissions to their receiving media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate each actual exchange from activity records, compatible conversion/factor and the protocol; retain raw amount and uncertainty
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_extraction_preparation`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Roadside intended-use sorting and producer handover (`roadside-grading`)

Node `roadside-grading` must complete the direct-release coverage reconciliation in `cp_direct_release_roadside_grading`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Prepared non-conifer roundwood awaiting sorting at roadside (`grading_prepared_roundwood`)

Input linked to landing_prepared_roundwood. Record all species/moisture/bark groups and the solid-volume measurement method if volume is retained; do not apply a universal hardwood density.

- Selected flow: Prepared non-conifer roundwood awaiting sorting at roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual energy inputs (`grading_energy`)

One class card covers actual fuels and purchased electricity. Expand only the carriers used in the foreground package; retain fuel kg and electricity kWh separately, not a mixed total. Do not duplicate carrier consumption already included in a contracted service.

- Selected flow: Actual energy inputs
- Flow property / unit: Actual fuel Mass / kg; actual electricity energy / kWh
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned QA screen, not measured evidence (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual supporting equipment and services (`grading_supporting_services`)

Conditional class covering actual machinery, lubricant/maintenance, contractor and shared-road services. Expand real material/service exchanges and record their native quantities plus service hours; a billed bundled service excludes its already embodied own-operation inputs.

- Selected flow: Actual supporting equipment and services
- Flow property / unit: Actual material Mass / kg; actual discrete input count / item; actual equipment or service use / h
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
- Range: Provisional reasoned component QA, not measured evidence (item)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: item
  - Basis: per 1 kg reference output, separately for each compatible component without mixed totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Non-coniferous pulpwood and panel roundwood at forest roadside (`pulp_panel_roundwood_handover`)

The sole reference output: non-conifer ROUNDWOOD intended for pulp, particle board, OSB or fibreboard at forest-roadside producer handover. Retain intended-use/quality, species, origin, moisture, bark, lot/time and weighing evidence. Chips, industrial residues and mill-delivered wood are not this output.

- Selected flow: Non-coniferous pulpwood and panel roundwood at forest roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Measurement detail: Measured accepted product quantity normalized to 1 kg reference output

- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Exact reference normalization from measured lot mass
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`

###### Non-conifer sawlogs and veneer logs at forest roadside (`grading_saw_veneer_roundwood`)

Conditional alternate intended product only when measured wood is actually sold for sawmill/veneer use. Separate customer grade/use and handover quantity from pulp/panel acceptance; downgrade into pulp/panel is not a second simultaneous product.

- Selected flow: Non-conifer sawlogs and veneer logs at forest roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Roundwood of non-coniferous wood, other (`grading_other_use_roundwood`)

Conditional other-use roundwood at forest-roadside handover, for actual poles/posts/piling or other evidenced non-pulp/non-saw uses. Match the confirmed generic unprocessed other-use identity; treated articles, fuelwood and pulp/panel lots are excluded.

- Selected flow: Roundwood of non-coniferous wood, other `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual non-conifer fuelwood at roadside (`grading_fuelwood`)

Conditional wood sold for fuel, with measured mass and actual moisture/bark state. It is not pulpwood and is not waste merely because it was downgraded. Declare destination without an automatic displaced-fuel credit.

- Selected flow: Actual non-conifer fuelwood at roadside `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual discarded sorting rejects (`grading_dispatched_rejects`)

Rejected material with no intended product use and an evidenced waste handoff. Retain the cause, composition and treatment destination; unsold but stockpiled usable wood remains stock, not automatic waste.

- Selected flow: Actual discarded sorting rejects
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual quantity by lot/process, normalized to 1 kg reference output; record evidenced conditional absence explicitly; missing records are not zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_roadside_grading`
- Sources: `fao-wood-harvesting`
- Range: Provisional reasoned QA screen, not measured evidence
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference output; apply separately to each actual compatible exchange
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_direct` | Separable operations | First assign traceable preparation, haul and grading activities to their actual lot/output. Separate product-dedicated operations before splitting a shared burden; no default coproduct or substitution credit. | `fao-wood-harvesting` |
| `a_outputs` | Shared harvest/sorting burdens | Enumerate pulp/panel roundwood, saw/veneer logs, other-use roundwood, fuelwood and recovered bark/wood products with actual handoffs and quantities. For physically common wood handling use measured consistent-basis dry-wood mass fractions only when the causal rationale and moisture conversion are documented. If that relation is inappropriate, require an explicitly justified economic or other allocation with lot-matched prices/quantities and sensitivity; do not silently switch methods or allocate wet wood and water as if comparable. | `fao-wood-harvesting` |
| `a_period` | Stand and event attribution | Retain all actual establishment, growth, thinning, final-harvest and regeneration periods. Apply the selected output-allocation rule to all cohort harvests in the supported service horizon; reconcile opening/closing biomass and establishment/replacement/termination events. Do not put all establishment burdens on the latest harvest or count past thinning again. | `fao-wood-harvesting` |
| `a_assets` | Shared infrastructure | Identify each road, machine or contracted service once with all consuming nodes/cohorts and actual service period. Allocate using a supported physical driver such as measured equipment hours or road use/payload; document denominator, unused capacity, replacements and sensitivity. Apply its burden once across consumers, not in every service and energy row. | `fao-wood-harvesting` |
| `a_residues` | Residues and waste | Record retained slash/stumps in the biomass balance without automatically treating them as products, exported waste or avoided fuel. An actual sold material needs product identity and handoff; an actual discard needs waste identity and recipient. Prevent simultaneous product/waste classification of the same quantity. | `fao-wood-harvesting` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_managed_stand` | `managed-stand` | All actual cards and source/stock reconciliation | foreground_log | lot; site; species; origin; dates/cohort; state/gate; wet/dry wood and bark; mass/volume bridge; retained slash/stock; actual inputs; carrier kg/kWh; fertilizer/N; equipment hours; distances/terrain; service scope; substance/medium/factor; asset/period/output linkage | Calibrated weighing/sampling; inventory/event and contractor logs; invoices/meters; GPS area and duration; documented applicable calculation factors; Raw aggregation operation: Normalize all actual amounts to measured reference kg after state reconciliation and allocation; each carrier/substance/unit separately; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; item; kWh; h; m2; a | Each lot and actual event; meter/service-period reconciliation | Actual full cohort/service horizon and representative harvest period | Declared stand, landing and consuming assets; no unweighted site pooling | per 1 kg reference flow | Calibration, lot samples, moisture/bark tests, source factors and rationale, ledger closure, supplier scope evidence |
| `cp_harvest_removal` | `harvest-removal` | All actual cards and source/stock reconciliation | foreground_log | lot; site; species; origin; dates/cohort; state/gate; wet/dry wood and bark; mass/volume bridge; retained slash/stock; actual inputs; carrier kg/kWh; fertilizer/N; equipment hours; distances/terrain; service scope; substance/medium/factor; asset/period/output linkage | Calibrated weighing/sampling; inventory/event and contractor logs; invoices/meters; GPS area and duration; documented applicable calculation factors; Raw aggregation operation: Normalize all actual amounts to measured reference kg after state reconciliation and allocation; each carrier/substance/unit separately; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; item; kWh; h; m2; a | Each lot and actual event; meter/service-period reconciliation | Actual full cohort/service horizon and representative harvest period | Declared stand, landing and consuming assets; no unweighted site pooling | per 1 kg reference flow | Calibration, lot samples, moisture/bark tests, source factors and rationale, ledger closure, supplier scope evidence |
| `cp_extraction_preparation` | `extraction-preparation` | All actual cards and source/stock reconciliation | foreground_log | lot; site; species; origin; dates/cohort; state/gate; wet/dry wood and bark; mass/volume bridge; retained slash/stock; actual inputs; carrier kg/kWh; fertilizer/N; equipment hours; distances/terrain; service scope; substance/medium/factor; asset/period/output linkage | Calibrated weighing/sampling; inventory/event and contractor logs; invoices/meters; GPS area and duration; documented applicable calculation factors; Raw aggregation operation: Normalize all actual amounts to measured reference kg after state reconciliation and allocation; each carrier/substance/unit separately; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; item; kWh; h; m2; a | Each lot and actual event; meter/service-period reconciliation | Actual full cohort/service horizon and representative harvest period | Declared stand, landing and consuming assets; no unweighted site pooling | per 1 kg reference flow | Calibration, lot samples, moisture/bark tests, source factors and rationale, ledger closure, supplier scope evidence |
| `cp_roadside_grading` | `roadside-grading` | All actual cards and source/stock reconciliation | foreground_log | lot; site; species; origin; dates/cohort; state/gate; wet/dry wood and bark; mass/volume bridge; retained slash/stock; actual inputs; carrier kg/kWh; fertilizer/N; equipment hours; distances/terrain; service scope; substance/medium/factor; asset/period/output linkage | Calibrated weighing/sampling; inventory/event and contractor logs; invoices/meters; GPS area and duration; documented applicable calculation factors; Raw aggregation operation: Normalize all actual amounts to measured reference kg after state reconciliation and allocation; each carrier/substance/unit separately; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; item; kWh; h; m2; a | Each lot and actual event; meter/service-period reconciliation | Actual full cohort/service horizon and representative harvest period | Declared stand, landing and consuming assets; no unweighted site pooling | per 1 kg reference flow | Calibration, lot samples, moisture/bark tests, source factors and rationale, ledger closure, supplier scope evidence |
| `cp_direct_release_managed_stand` | `managed-stand` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_harvest_removal` | `harvest-removal` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_extraction_preparation` | `extraction-preparation` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_roadside_grading` | `roadside-grading` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | Separate physical-ledger and burden normalization | R is the positive final accepted net pulp/panel roundwood mass in kg for the same boundary, lot and period, excluding co-products, internal transfers and unaccepted stocks. Report original material, co-product and transfer totals Q as q_phys = Q/R without a burden-allocation share. Report environmental burdens B as b_ref = B_attributed/R only after one evidenced direct/output/period/asset attribution. Do not divide final-reference intensities again; cancel paired internal transfers only at whole-package aggregation, not as additional final outputs. | unallocated physical totals Q; burdens B and attribution records; matched positive reference mass R | native-unit amount per kg | `fao-wood-harvesting` |
| calc_moisture | Wet/dry/bark basis | For declared wet-basis water fraction w, dry solids = wet mass × (1-w); separate bark consistently. Dry-basis moisture needs the corresponding conversion, never the wet-basis formula. Measured density bridges volume and mass only for the same lot/state. | measured mass; moisture convention; bark; density | compatible wood mass | `fao-wood-harvesting` |
| calc_land | Land inputs | occupation = area × actual duration × supported attribution; transformation = actual from/to event area × supported attribution, each native unit retained | area; dates; event; output shares | m2 a; m2 | `fao-wood-harvesting` |
| calc_emissions | Actual direct releases | Each substance/medium quantity = retained activity × declared applicable factor, with chemistry/unit conversions and uncertainty. If factor validity or medium is unknown retain a gap, not a generic emission identity. | activity; factor/source; species/medium | kg per substance/medium | `fao-wood-harvesting` |
| `calculate_direct_release_ledger` | `managed-stand`; `harvest-removal`; `extraction-preparation`; `roadside-grading` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_managed_stand; cp_direct_release_harvest_removal; cp_direct_release_extraction_preparation; cp_direct_release_roadside_grading; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | Reference and all real exchanges | Actual species, origin, intended use, state/gate and compatible verified property/unit/identity; classify conditional absence and remaining gaps | Lot/customer records and detail-confirmed support identities |
| dq_measurement | Mass, water and volume | Trace calibration, representative sample coverage, wet/dry/bark convention, same-lot conversion and uncertainty; no universal hardwood factor | Tickets/tests and conversion ledger |
| dq_periods | Cohorts and assets | Actual complete establishment-to-harvest/regeneration/service periods with opening/closing stocks and replacement/termination; no arbitrary annualization | Event and asset ledger |
| dq_completeness | Outputs, services and emissions | All actual outputs and waste recipients, class expansions and substance/media factors; missing evidence is disclosed, no invented zero or credits | Reconciled lot, service scope and factor records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | Reference output | Require exactly one reference card pulp_panel_roundwood_handover matching the reference table by state, intended use, roadside gate, kg basis and all required qualifiers. Concrete dataset exchanges require verified product/property/unit support; alternative outputs are not substitutes for this reference. | `fao-wood-harvesting` |
| `v_links` | Process handoffs | Check stand-to-harvest, harvest_felled_wood-to-landing_felled_wood and landing_prepared_roundwood-to-grading_prepared_roundwood lot/state/quantity links. Internal transfers are not additional final products or additional upstream burdens. Use managed stock or evidenced natural-resource/upstream sourcing exclusively for the same source lot. | `fao-wood-harvesting` |
| `v_balance` | Wood and bark reconciliation | Reconcile incoming wood, stock changes, retained residues, all intended products, dispatched waste and documented moisture changes using compatible wet/dry/bark bases. Retained forest residues are recorded in the source ledger, not invented offsite exchanges. Investigate any provisional Range breach; it is not permission to replace measurements. | `fao-wood-harvesting` |
| `v_energy_nutrients` | Input classes | Separate each fuel kg and electricity kWh; never sum them. Use declared conversion factors and actual density for litre-to-kg. Preserve fertilizer product mass, N fraction and direct emission pathway separately. Match concrete material/service identities and remove overlaps with bundled services. | `fao-wood-harvesting` |
| `v_route_period` | Route, periods and shared assets | Verify actual origin and each parent/route delta, mutually exclusive establishment and equipment implementations, complete event periods and shared-asset denominators. Missing replacement/termination, opening/closing stocks or consuming nodes prevents a complete final foreground package. | `fao-wood-harvesting` |
| `v_emissions` | Direct emissions | For every reported elementary release retain specific substance/species/particle basis, receiving medium, activity and applicable factor/source. Distinguish biogenic versus fossil carbon and observed spill from combustion. Missing factor evidence is an explicit gap, not zero or an invented generic UUID. | `fao-wood-harvesting` |
| `validate_direct_release_coverage` | `managed-stand`; `harvest-removal`; `extraction-preparation`; `roadside-grading` | For every activated node, reconcile its activity list against cp_direct_release_managed_stand; cp_direct_release_harvest_removal; cp_direct_release_extraction_preparation; cp_direct_release_roadside_grading: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Equivalent non-conifer pulp/panel roundwood forestry foreground; downstream pulp/panel supply input or process/lifecyclemodel projection with matching state and gate |
| excluded_use | Delivered-mill reference without added logistics; chips/residues/pulp/panels/treated wood; different intended-use wood or unrelated species/route as an undisclosed proxy |
| required_metadata | All reference qualifiers; start/end gates; lot/cohort/event periods; upstream coverage; selected route/parent deltas; output set; allocation and asset/service ledger |
| required_quality_disclosure | Primary-record coverage, uncertainty/conversions, conditional absences, class expansions and verified concrete UUIDs, factor applicability, gaps and provisional-screen limitations |
| update_trigger | Species/origin, management or machinery topology, intended use/gate, moisture/bark method, output allocation, period/asset scope or evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-non-conifer-pulp-panel | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03122 | Non-conifer ROUNDWOOD and pulp/particle-board/OSB/fibreboard intended-use scope, not industrial chips/residues |
| fao-wood-harvesting | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=1 | Felling, extraction, landing preparation and alternative technology interfaces. Quantities, moisture/density, allocation weights, forest history and emission factors must come from declared foreground protocols and supported site evidence, not this generic guidance. |
