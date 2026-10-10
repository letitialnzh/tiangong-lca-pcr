---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-sawlogs-and-veneer-logs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-coniferous sawlogs and veneer logs

## 1. Scope and Applicability

This PCR produces foreground packages for non-coniferous roundwood intended for sawnwood, sleepers or veneer at one declared forest-roadside producer handover. Include roughly squared roundwood, shingle and stave bolts, match billets, and burls or roots specifically intended for veneer [unsd-roundwood-scope]. Intended use, rather than shape alone, separates this category from pulp/panel and other-use roundwood. Finished sawnwood, veneer sheets, chemically treated wood, conifer timber and fuelwood are excluded.

The producer must identify the actual broadleaf species, origin, stand type, management history, harvest system and wood state. Plantation, coppice, managed natural stands, unmodified natural forests and trees outside forests are not interchangeable labels or default routes. Sources establish process responsibilities, not a universal yield, rotation, density or carbon factor [fao-wood-harvesting]. Commercial lots of special veneer roots/burls use the same final gate and mass basis but declare their distinct collection and preparation operations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-sawlogs-and-veneer-logs |
| classification_refs | cpc:3.0:03121 |
| covered_products | Non-coniferous sawlogs and veneer logs, sleeper roundwood, roughly squared roundwood, shingle/stave bolts, match billets, and burls/roots specifically for veneer |
| excluded_products | Conifer logs; pulp/panel/other-use/fuel roundwood; finished sawnwood or veneer; treated products |
| representative_product | Graded non-coniferous sawlog or veneer-log lot at forest roadside |
| production_route | Actual documented stand origin, harvest/removal, extraction, primary preparation and intended-use grading; only actual route deltas are enabled |
| market_state | Unprocessed or roughly squared roundwood at forest-roadside producer handover, actual bark/moisture/grade declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Non-coniferous sawlogs and veneer logs meeting the declared downstream intended-use specification |
| How much | 1 kg as-received reference-category wood at the declared forest-roadside handover |
| How well | Actual species, dimensions/form, grade, intended use, bark status and moisture basis with acceptance evidence; no universal hardwood specification |
| How long or cycle | Actual growth/management cycle and harvest campaign; enumerate establishment, tending, thinning, regeneration/coppice and final harvest periods where applicable |
| reference_flow_link | `roadside_saw_veneer_logs` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Non-coniferous sawlogs and veneer logs at forest-roadside handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual species; origin/site; stand and management mode; cohort/cycle/campaign; harvest system; intended sawnwood/sleeper/veneer use; special billet/root/burl form where applicable; grade/dimensions; bark; moisture and measurement basis; one forest-roadside gate; same-lot conversion evidence |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mass_reference` | Reference and wood transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net as-received mass with consistent bark and moisture scope. Weigh lots or use a measured same-lot mass/solid-volume bridge; no universal hardwood density. |
| `volume_bridge` | Volume-based records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain original solid versus stacked volume, bark convention, moisture and measured density. Stacked volume is not solid volume; density uncertainty follows the conversion. |
| `component_units` | Input class umbrellas | Actual property | Actual compatible unit | Expand actual carriers, formulations and services at dataset construction. Keep fuel kg/L, electricity kWh, material kg, water kg or m3, nursery count and service h separately; never sum unlike units. |
| `nutrient_basis` | Fertilizer | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Separate formulated fertilizer mass from nutrient mass and report assay; no assumed N fraction or fertilizer application. |
| `carbon_basis` | Carbon, soil and residue ledger | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record dry matter, actual carbon content, moisture basis and stock periods independently; carbon stock is neither reference wet mass nor automatic avoided emission. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented managed-growth responsibility or acquired equivalent managed standing stock; alternatively actual natural-source removal with origin/history disclosure |
| starting_condition_role | Explicit production/source interface, never a zero-burden assertion |
| product_classification_scope | Only the reference saw/veneer/sleeper category; separately identify other outputs |
| recursive_input_rule | An acquired same-category prepared-log input retains supplier gate, quantity and upstream dataset; do not recursively recreate its previously modelled stand/harvest/preparation burdens |
| upstream_dataset_requirement | Equivalent managed standing-stock or purchased-log package must disclose included periods, source, bark/moisture, carbon treatment and gate; absence is a data gap, not zero |
| disclosure | Actual origin, route topology, start/end gates, cycles, outsourced activities, excluded stages, shared assets, upstream omissions and carbon/soil/land-change treatment |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `roadside_end` | Whole package | End at forest-roadside producer handover; exclude outward mill transport, sawing/peeling, chemical treatment, use and end of life. | `unsd-roundwood-scope` |
| `source_and_removal` | Stand and harvest | Separate biological growth/source responsibility from felling/removal and preparation. Harvest owns removal from source; do not add a duplicate resource-removal node for the same operation. Managed product input and natural elementary-resource input cannot both represent the same biomass. | `fao-wood-harvesting` |
| `actual_route` | Alternative routes | Parent stand is documented managed production: planted regeneration adds nursery/establishment records; coppice retains stool/regrowth and linked cuts; managed natural regeneration has its actual tending history. Unmodified natural source bypasses fictitious managed growth. Parent harvest/preparation allows actual cut-to-length, tree-length/whole-tree or veneer-root/burl removal: record changed topology, inputs, losses and validation; mutually exclusive routes for one lot cannot be summed. | `fao-wood-harvesting` |
| `site_ledgers` | All site activities | Retain growth/removal/remaining-stock, soil/deadwood/residue, land occupation/transformation and carbon ledgers with actual area and periods. Record actual species/medium emissions, water use and spills when applicable; no automatic carbon neutrality, sequestration or substitution credit. | |
| `period_assets` | Shared infrastructure | Identify roads, yards and equipment, their consuming nodes and service periods. Retain establishment, tending, thinning and final-harvest burden shares and end-of-cycle/replacement events without repeating them in service and own-input inventories. | |
| `route_handoffs` | Process boundaries | Record stump-side timber, landing timber, prepared material and roadside destination states. Combined equipment may combine nodes, but retain these interfaces and count each activity once. Onsite residues are not exported waste; saleable residues are products. | `fao-wood-harvesting` |
| `boundary_direct_release_coverage` | `stand`; `harvest`; `extraction`; `preparation`; `grading` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_extraction; cp_direct_release_preparation; cp_direct_release_grading. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

Inventory reporting and process measurement layers: card amounts are reported per 1 kg reference flow; original quantities, same-lot process outputs, material states and period attribution remain individually recorded in collection protocols and calculation rules. Assign input burdens directly first and allocate shared burdens under Section 7. Preserve unallocated physical transfer and co-product ledgers, then divide each applicable lot amount by the positive final reference-product quantity of the same boundary and period; burden allocation must not shrink a material balance. Do not count internal transfers again as final outputs. Range blocks retain their explicitly declared original denominators: test process-output ranges locally before comparing any reference-normalized amount. If a Range must be converted, scale both bounds using the measured process-output/final-reference-quantity ratio and reviewed attribution factors applicable only to burdens, retaining original bounds and evidence; never assume this ratio is one. Each energy carrier, fertilizer formulation, material and substance keeps its own unit; unlike units cannot be summed. The final reference output is accepted lot quantity divided by itself; rejects, packaging and non-reference grades are excluded from its denominator.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand` | Documented broadleaf stand management | conditional | Own managed growth responsibility; otherwise equivalent upstream standing-stock package or disclosed actual natural source | Biological production and period linkage | kg managed merchantable standing-stock output |
| `harvest` | Felling and resource removal | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Harvest/capture/removal, not duplicate production | kg felled merchantable wood |
| `extraction` | Extraction to forest landing | conditional | Actual stump-to-landing movement; combined operation recorded once | Transport within forest foreground | kg landing wood |
| `preparation` | Primary roundwood preparation | conditional | Actual delimbing/bucking/rough squaring/optional debarking; no duplicate cut-to-length operation | Raw-to-prepared interface | kg prepared roundwood |
| `grading` | Intended-use grading and roadside handover | required | All actual lot grade/destination records | Reference output and independent destination co-outputs | 1 kg roadside reference-category output |

Energy, fertilizer and similar variable inputs are conditional class cards, not one mandatory exchange per variant. Expand actual exchanges with verified identities and their own units during dataset construction. Each provisional Range below is only a broad QA screen: an exceedance requires evidence and review, not clipping, a default inventory or treating missing data as zero. Additional sold residues or fuelwood destinations must be included in the actual output ledger with their own concrete identity and gate, not silently fitted into the reference output.


### Process: Documented broadleaf stand management (`stand`)

Node `stand` must complete the direct-release coverage reconciliation in `cp_direct_release_stand`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Energy inputs for stand management (`stand_energy`)

Conditionally expand the actual fuel or electricity carriers; do not add carrier amounts with unlike units.

- Selected flow: Energy inputs for stand management
- Flow property / unit: Actual fuel mass / kg; actual electricity / kWh; retain L and density separately
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_stand`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Fertilizer inputs for stand management (`stand_fertilizer`)

One conditional fertilizer class; collect each actual formulation and nutrient content without assuming fertilization.

- Selected flow: Fertilizer inputs for stand management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_stand`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Planting and management material inputs (`stand_materials`)

Conditionally collect nursery stock, guards, irrigation water and crop-protection materials separately by actual material and unit; natural regeneration does not imply purchased seedlings.

- Selected flow: Planting and management material inputs
- Flow property / unit: Actual component property / kg, count, m3 or h, recorded separately
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_stand`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (count)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: count
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (m3)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (h)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Stand management and shared-asset services (`stand_services`)

Record contracted establishment, tending and road/equipment service shares only where not included in own inputs; identify consumers and service periods.

- Selected flow: Stand management and shared-asset services
- Flow property / unit: Actual service time / h
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_stand`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (h)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Carbon dioxide uptake from air in documented stand growth (`stand_carbon_uptake`)

Include only when the stated carbon-accounting method reports this uptake with growth, removals, residues and carbon-stock ledgers; no automatic negative emission or credit.

- Selected flow: Carbon dioxide uptake from air in documented stand growth `da174fac-e567-42d3-99b5-a688913dc88e`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
Carbon measurement method: Calculate uptake from actual growth, dry-matter and carbon-stock ledgers under carbon_and_emissions, then normalize; reference wet mass is not carbon uptake.

- Amount rule: Divide the actual uptake calculated and attributed by the above method by positive final reference-product mass of the same lot; wet wood mass is not carbon uptake.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stand`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Merchantable standing timber from managed broadleaf stands (`stand_managed_stock`)

Conditional merchantable growing stock at forest site from documented managed stands or plantations; actual species/cohort are mandatory. Unmodified natural biomass is not this product.

- Selected flow: Merchantable standing timber from managed broadleaf stands `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_stand`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Felling and resource removal (`harvest`)

Node `harvest` must complete the direct-release coverage reconciliation in `cp_direct_release_harvest`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Merchantable standing timber from managed broadleaf stands (`harvest_managed_stock`)

Use only documented managed standing stock transferred from stand management or an equivalent upstream dataset; do not also inventory the same wood as natural resource input.

- Selected flow: Merchantable standing timber from managed broadleaf stands `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Energy inputs for felling and resource removal (`harvest_energy`)

One conditional class for actual energy carriers; exclude fuel already covered by contractor service or foreground generator.

- Selected flow: Energy inputs for felling and resource removal
- Flow property / unit: Actual fuel mass / kg; actual electricity / kWh; retain L and density separately
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Felling and removal services (`harvest_services`)

Conditional contractor and shared-equipment services; document the source boundary, machine hours and included operations.

- Selected flow: Felling and removal services
- Flow property / unit: Actual service time / h
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (h)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Non-coniferous woody biomass removed from its documented natural source (`harvest_natural_biomass`)

Conditional resource input for an actual natural-source starting condition; identify resource and compartment. Mutually exclusive with product standing-stock input for the same biomass.

- Selected flow: Non-coniferous woody biomass removed from its documented natural source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Non-coniferous felled timber at stump-side extraction handoff (`harvest_felled_wood`)

Felled merchantable timber before extraction; actual cut-to-length, tree-length or whole-tree state is recorded and mass excludes uncollected standing biomass.

- Selected flow: Non-coniferous felled timber at stump-side extraction handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Harvest residues exported for waste management (`harvest_residue_waste`)

Only residues crossing the boundary for waste management; material left onsite remains in the soil/carbon/residue ledger, and sold residues are product co-outputs.

- Selected flow: Harvest residues exported for waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual felling combustion emissions to air (`harvest_air_emissions`)

Conditional umbrella: record each actual emitted substance, fossil/biogenic origin, receiving medium and estimation method separately; unspecified mixtures cannot receive one UUID.

- Selected flow: Actual felling combustion emissions to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Extraction to forest landing (`extraction`)

Node `extraction` must complete the direct-release coverage reconciliation in `cp_direct_release_extraction`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Non-coniferous felled timber at stump-side extraction handoff (`extraction_felled_wood`)

Reconcile the actual transferred state and same-lot mass with harvest output; an internal transfer is not another independent reference product.

- Selected flow: Non-coniferous felled timber at stump-side extraction handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Energy inputs for forest extraction (`extraction_energy`)

Actual carriers for skidding, forwarding or cable extraction are recorded within one class; retain each carrier unit and actual distance/topography.

- Selected flow: Energy inputs for forest extraction
- Flow property / unit: Actual fuel mass / kg; actual electricity / kWh; retain L and density separately
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Extraction and shared-access services (`extraction_services`)

Use actual outsourced extraction and attributed access-road/equipment services; machine/distance logs define the share, not default forest area.

- Selected flow: Extraction and shared-access services
- Flow property / unit: Actual service time / h
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (h)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Non-coniferous timber delivered to forest landing before preparation (`extraction_landing_wood`)

Landing handoff precedes declared primary preparation; preserve bark, moisture, attached branch and tree-length qualifiers.

- Selected flow: Non-coniferous timber delivered to forest landing before preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Primary roundwood preparation (`preparation`)

Node `preparation` must complete the direct-release coverage reconciliation in `cp_direct_release_preparation`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Non-coniferous timber delivered to forest landing before preparation (`preparation_landing_wood`)

Same-lot landing input; cut-to-length material already prepared must not undergo a duplicated virtual bucking process.

- Selected flow: Non-coniferous timber delivered to forest landing before preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Energy inputs for primary log preparation (`preparation_energy`)

Actual delimbing, bucking and optional debarking carriers are collected separately inside one class; no sawing into finished goods or veneer peeling.

- Selected flow: Energy inputs for primary log preparation
- Flow property / unit: Actual fuel mass / kg; actual electricity / kWh; retain L and density separately
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Preparation consumables and service inputs (`preparation_materials`)

Conditionally collect lubricants, replacement cutting consumables and external preparation services separately in their native units; prevent own-input/service overlap.

- Selected flow: Preparation consumables and service inputs
- Flow property / unit: Actual component property / kg, count, m3 or h, recorded separately
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (count)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: count
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (m3)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (h)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg this process primary wood output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Prepared non-coniferous roundwood before intended-use grading (`preparation_ready_wood`)

Unprocessed roundwood ready for destination grading; rough squaring or special veneer billets/root/burl material must retain their actual state and intended use.

- Selected flow: Prepared non-coniferous roundwood before intended-use grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Bark and preparation rejects exported for waste management (`preparation_bark_waste`)

Only actual waste exports; saleable bark and offcuts are additional intended product outputs, while material retained onsite belongs to separate residue ledgers.

- Selected flow: Bark and preparation rejects exported for waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg this process primary wood output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Intended-use grading and roadside handover (`grading`)

Node `grading` must complete the direct-release coverage reconciliation in `cp_direct_release_grading`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

#### Inputs

##### Product flows

###### Prepared non-coniferous roundwood before intended-use grading (`grading_ready_wood`)

Declare all incoming prepared forms and record saleable versus rejected destination fractions without changing their actual physical state.

- Selected flow: Prepared non-coniferous roundwood before intended-use grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg roadside reference-category output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Energy inputs for grading and roadside handover (`grading_energy`)

Conditional sorting/loading carriers; collection stops at the forest-roadside producer gate, not outbound mill transport.

- Selected flow: Energy inputs for grading and roadside handover
- Flow property / unit: Actual fuel mass / kg; actual electricity / kWh; retain L and density separately
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg roadside reference-category output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

- Range: Provisional broad component-specific QA screen, not a default value (kWh)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg roadside reference-category output; apply to each actual component separately, not unlike-unit totals
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Grading and roadside handling services (`grading_services`)

Record actual grading, handling and shared-yard service amounts only once with grade and destination records.

- Selected flow: Grading and roadside handling services
- Flow property / unit: Actual service time / h
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (h)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg roadside reference-category output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Non-coniferous sawlogs and veneer logs at forest-roadside handover (`roadside_saw_veneer_logs`)

The one reference output: roundwood for sawnwood, sleepers or veneer, including matching special billets, bolts, burls and roots; retain intended use, grade, bark and moisture.

- Selected flow: Non-coniferous sawlogs and veneer logs at forest-roadside handover
Parallel measurement and support information: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
Measurement detail: Under normalize_once, divide the nonzero accepted reference-lot mass by itself to obtain exactly 1 kg reference output.

- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grading`
- Sources: `unsd-roundwood-scope`

- Range: Exact reference amount from accepted-lot mass self-normalization (kg)
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg roadside reference-category output
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`

###### Non-coniferous pulpwood and panel roundwood at forest roadside (`roadside_pulp_panel_wood`)

Conditional independent co-output for pulp or wood-based panels; not reference-category yield. Forest chips are a different state and require their own actual output.

- Selected flow: Non-coniferous pulpwood and panel roundwood at forest roadside
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Sources: `unsd-roundwood-scope`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg roadside reference-category output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Roundwood of non-coniferous wood, other, at forest roadside (`roadside_other_wood`)

Conditional unprocessed other-use roundwood, e.g. poles/posts/pitprops; exclude saw/veneer/pulp/fuelwood and finished or treated products.

- Selected flow: Roundwood of non-coniferous wood, other, at forest roadside `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Sources: `unsd-roundwood-scope`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg roadside reference-category output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Grading rejects exported for waste management (`grading_reject_waste`)

Actual rejected material transferred to waste management; downgrade sale does not make wood waste and cannot be credited by assumption.

- Selected flow: Grading rejects exported for waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect non-duplicated component or same-lot transfer total Q; use the matched boundary/period final accepted reference mass M_ref (positive kg) as the sole final denominator: Q/M_ref. For a local process intensity q_i = Q/O_i, multiply by the measured O_i/M_ref; do not divide an already final-reference amount again. Preserve unallocated physical transfers and co-output ledgers; apply only still-required period/output attribution separately to environmental burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading`
- Sources: `fao-wood-harvesting`

- Range: Provisional broad component-specific QA screen, not a default value (kg)
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg roadside reference-category output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `destination_set` | Grading and earlier outputs | Reconcile saw/veneer/sleeper output with pulp/panel, other-use, fuelwood and any saleable residues actually produced; record every destination and gate. Rejected waste and onsite residue are not interchangeable with intended products. | `unsd-roundwood-scope` |
| `attribution_decision` | Shared production | First separate directly attributable operations. For inseparable burdens require one documented causal allocation decision supported by actual process drivers; if causality is unavailable, justify the chosen physical/economic method and sensitivity using same-period quantities/prices. No universal mass or revenue coefficient. | |
| `cycle_allocation` | Growth and harvest periods | Index establishment, tending, coppice/regeneration, thinning and final harvest; reconcile initial, remaining and removed stocks. Link each burden/output/asset to its period and attributable cut; never charge a full rotation to every harvest or omit an unfinished cycle without disclosure. | |
| `shared_service` | Roads, yards and equipment | Attribute shared service to identified nodes and periods using recorded machine hours, use/distance or another justified driver; an included contractor burden excludes overlapping own assets/fuel. | |
| `no_credit_default` | Wood, waste and carbon | Report gross exchanges and actual treatment. No automatic residue substitution, carbon-storage credit or avoided burden; any explicit scenario remains separately documented from reference production. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand` | `stand` | Inputs, stock, carbon and site ledgers | Management and stock records | species/cohort/origin/area; start/end stocks; planting/tending/inputs; moisture/density/carbon; periods; actual resource/soil/land events | Compartment records, invoices, measured surveys and supplier records; Raw aggregation operation: Separate phases, output shares and components, normalize once; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; original volume/area/count; actual component units | Each event and stock survey | Actual full applicable production cycle | Identified compartment/site | per 1 kg reference flow | Survey uncertainty; assay; source history; period reconciliation |
| `cp_harvest` | `harvest` | Source removal, outputs and emissions | Campaign records | lot/source mode; transferred standing mass or natural resource; cut trees/forms; fuels/services; removed/remaining/residue mass; emissions substance/medium/method | Weighing or same-lot bridge; operation logs; measured or documented emission estimation; Raw aggregation operation: Reconcile source/stock/removal; separate substances and sources; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; actual carrier units; h | Each lot and operation | Actual harvest campaign | Identified source compartment | per 1 kg reference flow | Weighbridge calibration; route and compartment records; method uncertainty |
| `cp_extraction` | `extraction` | Transfers and access services | Movement records | input/output lot mass/state; distance/topography; carriers; machine hours; access shares; actual losses | Lot tracking and equipment/service logs; Raw aggregation operation: Reconcile same-lot transfers and allocate only used services; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; actual carrier units; h | Each movement | Actual campaign | Source to named landing | per 1 kg reference flow | Matching lot IDs; meter and service scope evidence |
| `cp_preparation` | `preparation` | Preparation inputs and outputs | Preparation records | incoming/prepared kg; bark/moisture; operations; consumables/service; offcuts/bark destinations; root/burl forms | Weighing, lot reconciliation, machine logs and invoices; Raw aggregation operation: Reconcile prepared wood, co-output/waste/residue and changes of moisture; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; actual component units; h | Each lot and operation | Actual campaign | Named landing/yard | per 1 kg reference flow | Calibration; measured moisture; duplicate-operation checks |
| `cp_grading` | `grading` | Reference and destination outputs | Grade and dispatch records | input/output kg; species/form/grade; sawnwood/sleeper/veneer or other destination; bark/moisture; gate; prices/driver; energy/services | Grade sheets, weigh tickets and roadside acceptance records; Raw aggregation operation: Sum actual destinations; normalize reference output to 1 kg once; Execute final-reference division once only: for a raw lot total, divide the corresponding physical or attributed amount by the positive final reference-product quantity of the same boundary and period; for a local per-process-output quantity, multiply by the measured process-output/final-reference-quantity ratio and any still-required reviewed burden attribution; if already reported per final reference quantity, retain it without another division. Keep unallocated physical transfer, balance and co-product ledgers; burden allocation must not shrink the physical mass balance. | kg; actual component units; h | Each lot and dispatch | Actual harvest/dispatch period | Declared forest-roadside gate | per 1 kg reference flow | Acceptance specification; customer intended-use evidence; traceable reconciliation |
| `cp_direct_release_stand` | `stand` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_harvest` | `harvest` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_extraction` | `extraction` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_preparation` | `preparation` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_grading` | `grading` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_once` | Each inventory | M_ref is positive final accepted reference kg for the matched boundary/period. Physical quantity q_phys = Q/M_ref. For local intensity q_i = Q/O_i, q_phys = q_i * O_i/M_ref; retain already final-reference amounts unchanged. Environmental burden q_burden = B_attributed/M_ref, with evidenced period/output attribution applied once in B_attributed; allocation factors must not reduce physical balances. | Actual totals; output set; attribution driver; accepted reference mass | Component amount per kg reference output |  |
| `mass_bridge` | Wood volume records | Net mass = measured same-lot solid volume multiplied by measured compatible as-received density; stacked conversion needs its separately measured factor | Same-lot volume/density; bark/moisture; conversion uncertainty | Compatible kg | |
| `stock_balance` | Biological and removal ledgers | Opening stock plus actual growth/transfers minus removals/losses equals closing stock on the same area, period and property basis | Survey and harvest records; period/source mode | Stock/removal reconciliation; no duplicated resource input | |
| `carbon_and_emissions` | Actual elementary reporting | Use explicitly declared site-appropriate method and collected activity/species/medium; reconcile dry-carbon stores, uptake/removals/residues and reported releases without assuming credits or neutrality | Actual dry matter/carbon; periods; emissions method and activity | Separate substance/compartment amounts and uncertainty | |
| `component_reconciliation` | Umbrella cards | Expand actual zero/one/multiple exchanges, retain each concrete identity/property/unit; amounts and Range checks are component-specific | Invoices/meters/formulations/services; actual route | Concrete exchange ledger, not mixed-unit totals | |
| `calculate_direct_release_ledger` | `stand`; `harvest`; `extraction`; `preparation`; `grading` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_extraction; cp_direct_release_preparation; cp_direct_release_grading; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `traceable_lots` | Wood states | Link site/cohort/campaign, intermediate states and destination acceptance | Lot IDs, stock and dispatch ledgers |
| `compatible_mass` | Measurement | Report bark/moisture basis, original units, calibration and conversion uncertainty | Same-lot scale/survey/assay records |
| `actual_routes` | Alternatives | Evidence every claimed delta and excluded/combined operation; missing inputs are not zero | Current operation/supplier records |
| `cycle_and_assets` | Attribution | Reconcile unfinished periods, shared services and all output shares | Period/service/driver ledger |
| `quantitative_evidence` | Ranges and factors | Replace provisional screening ranges with reviewed site evidence when available; methods/factors need provenance and applicability | Source and measured uncertainty records |
| `identity_completeness` | Final concrete exchanges | Verify actual flow and support identities before downstream exchange creation | Identity evidence and qualifier alignment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | Reference output | Name/link match real product output; one kg mass basis and one roadside gate; actual intended use must fall inside saw/veneer/sleeper category. | `unsd-roundwood-scope` |
| `state_chain` | Process map | Reconcile wood states and lot IDs; combined nodes cannot create duplicated extraction/preparation/removal or competing reference outputs. | `fao-wood-harvesting` |
| `origin_mode` | Source and route deltas | Verify actual management/origin/history; managed carrier cannot represent unsupported natural source. Enable only evidenced planted/coppice/natural and technological deltas for each lot. | |
| `quantity_and_units` | Inventory | Every amount has protocol, basis and Range; preserve component units and mass/volume bridge. Explain outliers; never infer zero from missing data. | |
| `output_and_attribution` | Products/waste/residues | Complete destination set and justified output/period/shared-asset attribution; no unexplained loss, double counted burden or assumed substitution. | |
| `site_and_carbon` | Site ledgers | Reconcile stock, carbon, soil/residue and land-change periods; actual emitted substances/receiving media and selected accounting method must be explicit. | |
| `concrete_identities` | Dataset construction | Concrete UUID/property/unit must match actual state, gate, origin, destination and units; class umbrella is not one concrete exchange. | |
| `validate_direct_release_coverage` | `stand`; `harvest`; `extraction`; `preparation`; `grading` | For every activated node, reconcile its activity list against cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_extraction; cp_direct_release_preparation; cp_direct_release_grading: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for documented non-coniferous sawlog/veneer-log category |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Supply of the declared reference category at the same roadside gate, mass/moisture/bark basis and actual route |
| excluded_use | Finished timber/veneer or treated goods; delivered-mill gate; pulp/panel/fuel/other-use reference; blanket hardwood density, carbon or route defaults |
| required_metadata | Species, origin/site, stand mode, periods/cohort, harvest/preparation system, special forms, dimensions/grade/intended use, gate, mass/moisture/bark, upstream and attribution rules |
| required_quality_disclosure | Source/quantity uncertainty; incomplete period/site ledgers; omitted upstream stages; provisional screens; unresolved identities and actual dataset validation coverage |
| update_trigger | New species/form or destination specification; changed route/gate, management, period allocation, source method, measured conversion or concrete identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-roundwood-scope` | official_guidance | UNSD CPC product detail 03121, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03121 ; retrieved 2026-10-08 | Product inclusion/exclusion and intended-use classification, not a quantity factor |
| `fao-wood-harvesting` | official_guidance | FAO Sustainable Forest Management Toolbox, Wood harvesting, https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=1 ; retrieved 2026-10-08 | Harvest, extraction, landing preparation and alternative technology responsibilities, not universal quantitative parameters |
