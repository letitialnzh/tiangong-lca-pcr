---
pcr_id: pcr.construction-services.existing-long-distance-steel-pipeline-preimpregnated-glass-polyurethane-composite-wrap-repair-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing long-distance steel pipeline preimpregnated glass/polyurethane composite wrap repair services

## 1. Scope and Applicability

This PCR covers the bounded accepted service of engineered external reinforcement of a non-through-wall, non-leaking external metal-loss defect on an already exposed and supported existing overland long-distance carbon-steel pipeline, using factory-preimpregnated glass-fibre moisture-curing polyurethane wrap, actual approved filler/primer and current project design. The repair contractor owns qualification, preparation, installation, full required cure, applicable inspection/testing, rework and signed handover. The broader manufacturer application list does not widen this subset.

The output is an accepted repair service at one uniquely identified defect, not new pipe, reinforcement material production or later fluid transport. Design configurations remain declared qualifiers; a counted repair is not a universal equivalence claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-long-distance-steel-pipeline-preimpregnated-glass-polyurethane-composite-wrap-repair-services |
| classification_refs | CPC 3.0 54241 — General construction services of long-distance pipelines; proposed narrower coverage |
| covered_products | Accepted engineered prepreg glass/PU external metal-loss reinforcement of retained long-distance carbon-steel pipe |
| excluded_products | Leaking/through-wall, internal defect, crack/dent/weld repair; urban mains; plant-only piping; sleeve/clamp; carbon/epoxy wet lay-up; hot/postcure route; replacement/new pipeline; excavation/backfill; later transport operation |
| representative_product | Qualified non-leaking external corrosion repair using XT-FP type factory prepreg and approved compatible filler/primer |
| production_route | Inspect/design and control operating state → surface preparation → actual filler/primer → activation/engineered lay-up/compaction → full required moisture cure → required inspection/tests/rework → signed acceptance |
| market_state | Site-specific completed and signed accepted repair service on retained exposed pipeline |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Accepted engineered external metal-loss composite wrap repair of retained long-distance steel pipeline |
| how_much | 1 item |
| how_well | Current approved engineered defect eligibility, geometry, system, lay-up and full-cure/inspection/test requirements with signed final acceptance |
| how_long_or_cycle | One declared repair campaign including setup/rework through final acceptance; record phase dates and stock periods, and complete reusable asset lifecycle phases across all consuming jobs/periods; no guaranteed repair life |
| reference_flow_link | `accepted_repair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted engineered external metal-loss composite wrap repair of retained long-distance steel pipeline |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Unique defect/design ID; overland long-distance function; carbon-steel grade/diameter/wall; non-leaking external metal-loss geometry/eligibility; exposed supported host; actual medium/pressure/temperature state; system/SKU/instruction; wrap length/width/plies/overlaps/directions; surface, cure and test results; technician qualification; acceptance date; campaign/asset periods and coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_count | accepted_repair | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N = unique finally accepted defect repairs; N > 0. Do not count rolls, layers, passes, attempts or unaccepted defects. Record diameter, wall, defect and wrap geometry as qualifiers, not a mass denominator. |
| native_unit_ledgers | all inventory rows | Actual native property | Actual compatible unit | Preserve each SKU native Length, Area, Count or Mass and outward return in the same unit. Only use independently evidenced compatible conversion with actual width/contents/density/state; never force native returns to mass. |
| paired_component_state | filler_components; primer_components | Mass | kg | Purchased kit/component attribution, dosed component masses, mixed intermediate activity, cured-retained mass and residue are distinct nonadditive ledgers. Prepreg already contains PU resin. |
| medium_species_state | process_medium; identified_releases | Mass | kg | Keep whole-medium stock/capture/reinjection/test ledger separate from identified species/medium elementary exchanges; actual pressure-temperature-composition evidence is required for volume conversion. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing exposed supported eligible pipeline defect and retained contents/support, with actual pressure/operating state and approved current design; no excavation or new pipe manufacture |
| starting_condition_role | Retained host state interface for the bounded repair treatment |
| product_classification_scope | Only the declared prepreg external metal-loss repair subset within long-distance pipeline construction services |
| recursive_input_rule | An actual prior same-category repair is disclosed as retained state or an independently bounded purchased service with exact scope; do not recursively repurchase this job or the whole pipeline |
| upstream_dataset_requirement | Actual compatible supplied prepreg inclusive of resin, component/kit scope, ancillary inputs, attributable lost/consumed medium, utilities/fuel, freight, bounded providers, complete-life assets and actual waste treatment; one owner per covered scope |
| disclosure | Host/defect/design/system state; contractor/provider ownership; campaign, batch, stock and asset lifecycle periods; actual exclusions, quantities, conversions, gaps, uncertainty and handover evidence |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| qualified_host | composite_repair | Start with already exposed supported retained carbon-steel overland long-distance pipeline, qualified non-through-wall non-leaking external metal-loss defect, contents and support state. Existing host manufacture is not bought again. | csnri-xt-ps-0625; csnri-transmission-corrosion-case |
| design_gate | composite_repair | Current approved engineered design and system instruction must establish defect eligibility, operating/pressure state, surface profile/cleanliness, filler/primer compatibility, activation, wrap dimensions/plies/overlap/direction and applicable full-cure/inspection/test criteria before signed acceptance. Brochure compliance is not a full standard review or universal approval. | csnri-xt-ps-0625; csnri-xt-product-page |
| embedded_route | composite_repair | Qualification, preparation, embedded component mixing/placement and moisture cure form one repair treatment responsibility. There is no independently handed-off formulation, reaction or assembly product; include all their resources and residues here. | csnri-xt-ps-0625 |
| operating_interface | composite_repair | Own actual repair-induced isolation, drain, depressurisation, purge, restoration and tests, including provider-paid supplies, utilities and medium fate. Retained contents are state interfaces; actual consumed/lost contents carry upstream supply once. No leakage does not prove no job-induced release. |  |
| prepreg_system | prepreg_length; prepreg_area; prepreg_count; prepreg_mass; filler_components; primer_components | Factory glass/PU prepreg is purchased once inclusive of resin. Use actual compatible system filler and primer; kit versus component purchases are exclusive but A/B physical dosing and mixed/cured/waste states remain reconciled. | csnri-xt-ps-0625 |
| complete_resources | all inventory rows | Own every actual preparation/abrasive/cleaning/activation/containment/compaction/curing/test input, water, utility, direct fuel, freight, bounded provider and asset scope. Unknown is a gap; conditional zero requires actual absence evidence. Packaging, residues, wash/test water and releases retain their destinations. |  |
| run_period_boundary | composite_repair | Index job/defect batches, preparation/installation/cure/test/rework dates, opening and closing stock periods; link setup, cleaning and changeover to the producing campaign. Asset scope spans manufacture, use/maintenance/replacements, termination and EOL across all consuming jobs/nodes/periods. |  |
| rework_exit | composite_repair | Failed surface qualification, incorrect lay-up, incomplete cure and failed acceptance remain unaccepted. Reinspect/reprepare/remove/reapply/recure/retest inside composite_repair; link actual removed rejected material to repair_wastes, actual usable returns to their native outputs and identified releases to their events. |  |
| medium_disjoint_outlets | process_medium; identified_releases | Use disjoint whole-medium final outlets: opening + external_supply = closing + usable_outward_return + consumed_transformed + collected_waste + uncontained_loss. Closing includes all retained/recovered stock. Captured/reinjected and used/dosed quantities are intermediate audit views, not extra final outlets; vented is a subset of uncontained_loss, not an additional outlet. Never subtract capture plus reinjection/return/closing, or vented plus loss, twice. Job-attributed medium upstream supply and species/medium elementary releases remain separate nonadditive views. |  |
| scope_exclusions | composite_repair | Exclude leaking/through-wall or internal-defect/crack/dent/weld repair, urban mains, plant-only piping, sleeves/clamps, wet-lay-up carbon/epoxy, hot/postcure routes, pipe replacement, excavation/backfill, new pipeline and later product transport. No avoided replacement/new-pipeline or downstream transport credit. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Approved filler components supplied (`filler_components`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate each actual approved formulation component separately. A purchased complete kit and its separately purchased components are mutually exclusive upstream views; retain component A/B physical mixing subledgers even for a kit. Do not guess a mixing ratio or substitute the prepreg resin.

Range evidence need: Actual approved filler/primer SKU, current component ratio and measured dosing, retained mass and residue; no default ratio or universal kg per repair.

- Collection subject: Approved filler components supplied
- Flow property / unit: Mass / kg
- Amount rule: actual attributable component mass / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filler_components`

- Sources: `csnri-xt-ps-0625`

#### Collection requirement: Approved primer components supplied (`primer_components`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate each actual approved formulation component separately. A purchased complete kit and its separately purchased components are mutually exclusive upstream views; retain component A/B physical mixing subledgers even for a kit. Do not guess a mixing ratio or substitute the prepreg resin.

Range evidence need: Actual approved filler/primer SKU, current component ratio and measured dosing, retained mass and residue; no default ratio or universal kg per repair.

- Collection subject: Approved primer components supplied
- Flow property / unit: Mass / kg
- Amount rule: actual attributable component mass / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primer_components`

- Sources: `csnri-xt-ps-0625`

#### Collection requirement: Actual ancillary repair supplies in mass (`ancillary_mass`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate actual surface-cleaning chemicals, blast abrasive, containment, protective coating where approved, compaction/release film, wipes, test consumables and other required supplies in this native unit. Assign activation, surface preparation, curing, isolation/purge and inspection resources an owner even when provider-paid; no guessed zero.

Range evidence need: Actual preparation, activation, containment, curing and test specification, SKU units and measured quantities/fates for this job.

- Collection subject: Actual ancillary repair supplies in mass
- Flow property / unit: Mass / kg
- Amount rule: actual attributable ancillary native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ancillary_mass`

#### Collection requirement: Actual ancillary repair supplies in length (`ancillary_length`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate actual surface-cleaning chemicals, blast abrasive, containment, protective coating where approved, compaction/release film, wipes, test consumables and other required supplies in this native unit. Assign activation, surface preparation, curing, isolation/purge and inspection resources an owner even when provider-paid; no guessed zero.

Range evidence need: Actual preparation, activation, containment, curing and test specification, SKU units and measured quantities/fates for this job.

- Collection subject: Actual ancillary repair supplies in length
- Flow property / unit: Length / m
- Amount rule: actual attributable ancillary native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ancillary_length`

#### Collection requirement: Actual ancillary repair supplies in area (`ancillary_area`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate actual surface-cleaning chemicals, blast abrasive, containment, protective coating where approved, compaction/release film, wipes, test consumables and other required supplies in this native unit. Assign activation, surface preparation, curing, isolation/purge and inspection resources an owner even when provider-paid; no guessed zero.

Range evidence need: Actual preparation, activation, containment, curing and test specification, SKU units and measured quantities/fates for this job.

- Collection subject: Actual ancillary repair supplies in area
- Flow property / unit: Area / m2
- Amount rule: actual attributable ancillary native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ancillary_area`

#### Collection requirement: Actual ancillary repair supplies in count (`ancillary_count`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate actual surface-cleaning chemicals, blast abrasive, containment, protective coating where approved, compaction/release film, wipes, test consumables and other required supplies in this native unit. Assign activation, surface preparation, curing, isolation/purge and inspection resources an owner even when provider-paid; no guessed zero.

Range evidence need: Actual preparation, activation, containment, curing and test specification, SKU units and measured quantities/fates for this job.

- Collection subject: Actual ancillary repair supplies in count
- Flow property / unit: Count / item
- Amount rule: actual attributable ancillary native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ancillary_count`

#### Collection requirement: Repair-attributable process, purge and test medium supply (`process_medium`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Only actual repair-induced loss or consumption and actual external purge/test medium supply enters upstream attribution. Retained pipeline contents are an existing state interface. Track capture/reinjection/return and restoration without repurchasing unchanged contents; no absence of leakage establishes zero repair-induced release.

Range evidence need: Actual fluid/gas identity, composition, repair-induced activity and stock/capture/return/fate measurements; whole-mixture vent mass is not an elementary species identity.

- Collection subject: Repair-attributable process, purge and test medium supply
- Flow property / unit: Mass / kg
- Amount rule: actual attributable supplied or consumed medium mass / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_medium`

#### Collection requirement: Repair fuel upstream supply (`fuel_supply`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate actual fuel by grade for direct equipment or transport operation only where not covered by upstream services. Upstream supply retains nonreturned waste and uncontained losses as well as burned fuel.

Range evidence need: Actual fuel identity, stock/receipt/outlet data and compatible density if converted; burned-fuel emissions need separate actual factors/species.

- Collection subject: Repair fuel upstream supply
- Flow property / unit: Mass / kg
- Amount rule: actual attributable fuel supply mass / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_supply`

#### Collection requirement: Completed bounded repair-support task services (`bounded_provider`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Use only when a genuine provider defines a completed bounded task in item, with actual result and upstream resource coverage. Possible roles include qualified engineering/NDT, isolation/purge or access. Price, person-hours, rental-days and the final repair itself are not this task unit; obtain their actual unit separately if used.

Range evidence need: Actual provider native task unit, completion and upstream scope; no generic service identity or arbitrary hours-to-count conversion.

- Collection subject: Completed bounded repair-support task services
- Flow property / unit: Count / item
- Amount rule: actual completed bounded task count / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_provider`

#### Collection requirement: Complete-life reusable repair equipment attribution (`shared_assets`)

Process / prospective direction / type: `composite_repair` / `inputs` / `product`.

Instantiate actual blast/compressor, measuring/NDT, access, compaction and other reusable asset identities. Fractional asset equivalents require a full lifecycle upstream scope covering manufacture, maintenance, replacements and end-of-life; rentals and provider equipment need the same scope ownership.

Range evidence need: Actual asset full-life burden scope, measured job and all-consumer denominator, remainder/replacement/EOL evidence and uncertainty; rental duration alone is insufficient.

- Collection subject: Complete-life reusable repair equipment attribution
- Flow property / unit: Count / item
- Amount rule: actual attributable complete-life asset equivalents / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_assets`

#### Collection requirement: Usable outward returns in mass (`usable_return_mass`)

Process / prospective direction / type: `composite_repair` / `outputs` / `product`.

Record actual usable supplies crossing outward by original SKU and compatible native unit, including unopened or usable roll portions/components and nonburned fuel where relevant. Closing carried stock is not outward return. Do not convert native length/area/count returns to mass merely to balance the account.

Range evidence need: Actual outward quantity, SKU, unit, condition, recipient and attribution view; no assumed recovery credit or mass conversion.

- Collection subject: Usable outward returns in mass
- Flow property / unit: Mass / kg
- Amount rule: actual usable outward returned native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_usable_return_mass`

#### Collection requirement: Usable outward returns in length (`usable_return_length`)

Process / prospective direction / type: `composite_repair` / `outputs` / `product`.

Record actual usable supplies crossing outward by original SKU and compatible native unit, including unopened or usable roll portions/components and nonburned fuel where relevant. Closing carried stock is not outward return. Do not convert native length/area/count returns to mass merely to balance the account.

Range evidence need: Actual outward quantity, SKU, unit, condition, recipient and attribution view; no assumed recovery credit or mass conversion.

- Collection subject: Usable outward returns in length
- Flow property / unit: Length / m
- Amount rule: actual usable outward returned native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_usable_return_length`

#### Collection requirement: Usable outward returns in area (`usable_return_area`)

Process / prospective direction / type: `composite_repair` / `outputs` / `product`.

Record actual usable supplies crossing outward by original SKU and compatible native unit, including unopened or usable roll portions/components and nonburned fuel where relevant. Closing carried stock is not outward return. Do not convert native length/area/count returns to mass merely to balance the account.

Range evidence need: Actual outward quantity, SKU, unit, condition, recipient and attribution view; no assumed recovery credit or mass conversion.

- Collection subject: Usable outward returns in area
- Flow property / unit: Area / m2
- Amount rule: actual usable outward returned native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_usable_return_area`

#### Collection requirement: Usable outward returns in count (`usable_return_count`)

Process / prospective direction / type: `composite_repair` / `outputs` / `product`.

Record actual usable supplies crossing outward by original SKU and compatible native unit, including unopened or usable roll portions/components and nonburned fuel where relevant. Closing carried stock is not outward return. Do not convert native length/area/count returns to mass merely to balance the account.

Range evidence need: Actual outward quantity, SKU, unit, condition, recipient and attribution view; no assumed recovery credit or mass conversion.

- Collection subject: Usable outward returns in count
- Flow property / unit: Count / item
- Amount rule: actual usable outward returned native quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_usable_return_count`

#### Collection requirement: Actual segregated repair wastes (`repair_wastes`)

Process / prospective direction / type: `composite_repair` / `outputs` / `waste`.

Instantiate removed coating/corrosion/blast residue, offcuts or rejected cured prepreg, unmixed and mixed filler/primer residues, spent consumables/packaging, contaminated wash/test water and medium, and nonreturned fuel waste by actual composition, state and treatment destination. Upstream supply burdens remain; waste sent to treatment is not an elementary release.

Range evidence need: Actual segregated composition/state, measured masses and treatment destination; no default waste fraction or invented waste identity.

- Collection subject: Actual segregated repair wastes
- Flow property / unit: Mass / kg
- Amount rule: actual outward waste mass / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_repair_wastes`

#### Collection requirement: Actual identified elementary species releases (`identified_releases`)

Process / prospective direction / type: `composite_repair` / `outputs` / `elementary`.

Instantiate only identified pollutant species and receiving medium from actual routine/incident, dust, combustion, cure/cleanup and repair-induced process-medium events. Whole gas/fluid balance is a nonadditive physical view. Capture/reinjection/stock/returns/collected waste are excluded once; a residual, SDS or No VOCs claim cannot identify an emission.

Range evidence need: Actual species, medium, measured release or valid matched factor/activity/composition/fate; unknown cannot be set to zero or inferred from stock residual.

- Collection subject: Actual identified elementary species releases
- Flow property / unit: Mass / kg
- Amount rule: actual identified species mass released to specified medium / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_identified_releases`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| composite_repair | Integrated engineered prepreg composite repair | required | Eligible retained exposed supported non-leaking external metal-loss defect and approved engineered system | Job/defect batch treatment; qualification/design, actual pressure-state controls, preparation, component dosing, activation/lay-up, full cure, inspection/testing, cleaning and repeat-work loop with declared waste/return/release exits | 1 item accepted_repair |

### Process: Integrated engineered prepreg composite repair (`composite_repair`)

Each event belongs to its job, defect, batch and date/period. Preparation and cure are embedded responsibilities with no fictitious intermediate purchase. Unqualified surface, incorrect wrap, incomplete cure and failed tests loop to this node for correction/removal/reapplication; rejected residues leave through actual waste, usable returns through native product outputs and species releases through identified events.

#### Inputs

##### Product flows

###### Factory glass/PU prepreg supplied in length (`prepreg_length`)

Activate only for a factory preimpregnated glass-fibre moisture-curing polyurethane SKU supplied in this native unit. Resin is already included. Choose exactly one purchase view per SKU; do not also purchase its constituent glass and resin.

Range evidence need: Actual SKU, supply unit, width/roll content, job lay-up and measured losses; no universal number of plies or brochure consumption.

- Selected flow: Factory glass/PU prepreg supplied in length
- Flow property / unit: Length / m
- Amount rule: actual attributable native prepreg quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepreg_length`

- Sources: `csnri-xt-ps-0625`

###### Factory glass/PU prepreg supplied in area (`prepreg_area`)

Activate only for a factory preimpregnated glass-fibre moisture-curing polyurethane SKU supplied in this native unit. Resin is already included. Choose exactly one purchase view per SKU; do not also purchase its constituent glass and resin.

Range evidence need: Actual SKU, supply unit, width/roll content, job lay-up and measured losses; no universal number of plies or brochure consumption.

- Selected flow: Factory glass/PU prepreg supplied in area
- Flow property / unit: Area / m2
- Amount rule: actual attributable native prepreg quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepreg_area`

- Sources: `csnri-xt-ps-0625`

###### Factory glass/PU prepreg supplied in count (`prepreg_count`)

Activate only for a factory preimpregnated glass-fibre moisture-curing polyurethane SKU supplied in this native unit. Resin is already included. Choose exactly one purchase view per SKU; do not also purchase its constituent glass and resin.

Range evidence need: Actual SKU, supply unit, width/roll content, job lay-up and measured losses; no universal number of plies or brochure consumption.

- Selected flow: Factory glass/PU prepreg supplied in count
- Flow property / unit: Count / item
- Amount rule: actual attributable native prepreg quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepreg_count`

- Sources: `csnri-xt-ps-0625`

###### Factory glass/PU prepreg supplied in mass (`prepreg_mass`)

Activate only for a factory preimpregnated glass-fibre moisture-curing polyurethane SKU supplied in this native unit. Resin is already included. Choose exactly one purchase view per SKU; do not also purchase its constituent glass and resin.

Range evidence need: Actual SKU, supply unit, width/roll content, job lay-up and measured losses; no universal number of plies or brochure consumption.

- Selected flow: Factory glass/PU prepreg supplied in mass
- Flow property / unit: Mass / kg
- Amount rule: actual attributable native prepreg quantity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepreg_mass`

- Sources: `csnri-xt-ps-0625`

###### Supplied preparation, activation and test water (`water_supply`)

Include actual cleaning, activation/moisture, test, flush and cleanup water. Ambient humidity is a condition rather than purchased water; record any evidenced environmental water uptake separately in the retained physical ledger.

Range evidence need: Actual water use, activation instruction, test media records, meter calibration and fate; no default water/roll ratio.

- Selected flow: Supplied preparation, activation and test water
- Flow property / unit: Mass / kg
- Amount rule: actual attributable supplied water mass / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_supply`


###### Direct repair electricity (`electricity`)

Record actual attributable preparation, compressor, lighting, cure-condition control, isolation and testing electricity only where not already included in a bounded provider or rental service. No heating/post-curing marketing does not imply zero electricity.

Range evidence need: Actual metered electricity and complete shared-use records; no generic electricity per repair.

- Selected flow: Direct repair electricity
- Flow property / unit: Energy / kWh
- Amount rule: actual attributable electricity / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`


###### Actual attributable freight service (`freight`)

Include actual delivery, outward return and waste legs where outside supplier/provider coverage. Packaging and payload mass, route, load allocation and empty positioning require actual evidence; no avoided freight credit.

Range evidence need: Actual payload, route, loading and coverage evidence; no fixed transport distance or payload.

- Selected flow: Actual attributable freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: actual attributable freight kg*km / N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freight`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted engineered external metal-loss composite wrap repair of retained long-distance steel pipeline (`accepted_repair`)

Count each distinct qualified defect ID only after engineered lay-up, full required moisture cure, applicable inspection/testing, defect closure and signed acceptance. Rework stays inside this node and never creates another accepted repair.

Range evidence need: Exact normalization only: 1 item per reference flow; this is not a yield or claim that different designs are equivalent.

- Selected flow: Accepted engineered external metal-loss composite wrap repair of retained long-distance steel pipeline
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_repair`

- Sources: `csnri-xt-ps-0625`; `csnri-transmission-corrosion-case`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sole_accepted_service | composite_repair | Attribute this bounded campaign to unique positive N accepted repairs with declared design/geometry/system qualifiers; no useful co-product is presumed. Material balances and used/dosed intermediate quantities are nonadditive. |  |
| stock_supply_view | all inventory rows | For each actual SKU/native unit, attributable supply = opening attributable stock + external net-tare gross receipts - closing carried stock. Upstream supply matches this amount. Internal issue is not a new receipt; closing stock carries its supply burden forward and is not outward return. Gross-with-outlets retains matched usable outward return; consumed-only excludes that return from supply once and never adds a duplicate return credit. Nonreturned waste/loss keeps upstream burden. |  |
| fuel_outlets | fuel_supply; identified_releases | Separately reconcile burned fuel, usable nonburned return, nonreturned waste, uncontained loss and closing stock. Burned fuel alone drives compatible combustion factors; it is not upstream supplied fuel. Total spill is audit-only; recovered spill in closing stock is not also loss. |  |
| repeat_job_burden | composite_repair | All setup, cleaning/changeover, failed attempts, removed rejected layers, repeat cure/tests and defect closure stay with the actual campaign and positive final accepted N. Failed/missing gates produce no accepted output; do not divide by attempts, plies or gross prepared defects. |  |
| asset_full_life | shared_assets | For each asset, attributable equivalents = job compatible measured driver / all-consumer complete-life driver. Scope includes manufacture, maintenance, replacements and EOL exactly once across all jobs/nodes/periods. Use complete observed life or observed history plus evidenced remainder, replacement/termination/EOL and uncertainty/sensitivity/update. Missing denominator or omitted consumers blocks finalization. |  |
| ownership_exclusivity | electricity; fuel_supply; freight; bounded_provider; shared_assets | Assign one owner to direct utilities, transport legs, provider/rental equipment, assets and spares. A genuinely bounded provider unit must match completed resources/results and declared upstream coverage; charge uncovered resources directly. Never also add resources already included upstream. Price or hours cannot establish Count. |  |
| medium_fate_exclusivity | process_medium; identified_releases; repair_wastes | Attribute actual consumed/lost process medium upstream once, reconciling capture/reinjection/stock/return/waste/release. Whole-medium physical and species/medium elementary views are nonadditive; no emission from an unexplained residual and no avoided-operation credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepreg_length | composite_repair | prepreg_length | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | Reconcile labelled rolls, issue/receipt/stock records and actual measured native quantity; retain width, roll contents and any independent conversion evidence. | m | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_prepreg_area | composite_repair | prepreg_area | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | Reconcile labelled rolls, issue/receipt/stock records and actual measured native quantity; retain width, roll contents and any independent conversion evidence. | m2 | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_prepreg_count | composite_repair | prepreg_count | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | Reconcile labelled rolls, issue/receipt/stock records and actual measured native quantity; retain width, roll contents and any independent conversion evidence. | item | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_prepreg_mass | composite_repair | prepreg_mass | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | Reconcile labelled rolls, issue/receipt/stock records and actual measured native quantity; retain width, roll contents and any independent conversion evidence. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_filler_components | composite_repair | filler_components | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; component; kit_id; supply_scope; opening; receipts; tare; closing; return; dosed; retained; unmixed_waste; mixed_waste; loss; ratio_instruction | Weigh each component and residue; reconcile receipts, stock, actual dosed masses, approved current ratio and cured-retained versus mixed/unmixed waste. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_primer_components | composite_repair | primer_components | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; component; kit_id; supply_scope; opening; receipts; tare; closing; return; dosed; retained; unmixed_waste; mixed_waste; loss; ratio_instruction | Weigh each component and residue; reconcile receipts, stock, actual dosed masses, approved current ratio and cured-retained versus mixed/unmixed waste. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_ancillary_mass | composite_repair | ancillary_mass | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | Measure and reconcile each required supply by native SKU and event; document genuine absence from adopted instruction and job records. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_ancillary_length | composite_repair | ancillary_length | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | Measure and reconcile each required supply by native SKU and event; document genuine absence from adopted instruction and job records. | m | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_ancillary_area | composite_repair | ancillary_area | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | Measure and reconcile each required supply by native SKU and event; document genuine absence from adopted instruction and job records. | m2 | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_ancillary_count | composite_repair | ancillary_count | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | Measure and reconcile each required supply by native SKU and event; document genuine absence from adopted instruction and job records. | item | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_water_supply | composite_repair | water_supply | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; water_source; event_id; meter; density_state; opening; supplied; closing; returned; retained; wastewater; released; actual_volume; volume_unit; actual_mass; mass_unit; density; density_unit; temperature; temperature_unit; conversion_source | Meter or weigh water by event; a volume-to-mass conversion needs actual compatible density/state evidence. Reconcile retained, returned, collected wastewater and actual release. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_process_medium | composite_repair | process_medium | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; medium; composition; event_id; pressure_state; opening; external_supply; closing; captured; reinjected; return; consumed; wastewater; vented; lost; density_state; actual_volume; volume_unit; actual_mass; mass_unit; density; density_unit; pressure; pressure_unit; temperature; temperature_unit; composition_basis; conversion_source; usable_outward_return; consumed_transformed; collected_waste; uncontained_loss | Use actual isolation/drain/depressurisation/purge/test/restoration plans and metered mass with composition and fate; convert volume only using compatible pressure-temperature-composition evidence. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_electricity | composite_repair | electricity | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; meter_id; event_id; start; end; electricity; shared_driver; provider_owner | Submeter or obtain primary equipment/event energy records with complete shared-use attribution; retain electricity unit and verify its actual support chain before final exchange creation. | kWh | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_fuel_supply | composite_repair | fuel_supply | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; fuel_grade; opening; receipts; closing; return; burned; waste; uncontained_loss; recovered_to_stock; total_spill; event_id; actual_volume; volume_unit; actual_mass; mass_unit; density; density_unit; temperature; temperature_unit; conversion_source | Reconcile weighed/metered stock and net-tare receipts with mutually exclusive burn, return, waste and loss outlets; total spill is audit-only, and recovered spill retained in closing stock is not an additional loss. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_freight | composite_repair | freight | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; leg_id; cargo; actual_payload; distance; load_share; empty_leg; service_scope; provider_owner | Reconcile actual transported kg and route km for each leg with load and empty-leg attribution and upstream coverage; do not force service purchase into fuel as well. | kg*km | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_bounded_provider | composite_repair | bounded_provider | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; provider; task_id; native_unit; completed_tasks; result; resources_covered; exclusions; event_id | Obtain provider primary scope, task-unit definition, completion results and resource/asset/energy/waste coverage; directly own every excluded resource. | item | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_shared_assets | composite_repair | shared_assets | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; asset_id; lifecycle_scope; consumer_id; job_driver; whole_life_driver; observed_history; evidenced_remainder; maintenance; replacement; termination; eol; uncertainty; driver_unit; remainder_source; sensitivity; update_date | Register every consumer/job/node/period across complete observed life, or observed history plus evidenced remainder, replacements, termination and EOL. Use a compatible measured driver; sensitivity/update evidence is mandatory for estimated remainder. Missing full coverage blocks finalization. | item | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_accepted_repair | composite_repair | accepted_repair | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; design_id; geometry; pressure_state; system; substrate_result; layup_record; cure_conditions; cure_result; test_result; rework_id; accepted; acceptance_date | Maintain a unique defect/design/acceptance register with actual geometry, pressure and material system and signed gate; reject missing, failed or unresolved gates. N is the unique positive final accepted count in the declared campaign. | item | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_usable_return_mass | composite_repair | usable_return_mass | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | Measure actual outward return and recipient acceptance; match to the same SKU/unit supply ledger and gross-with-outlets or consumed-only view exactly once. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_usable_return_length | composite_repair | usable_return_length | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | Measure actual outward return and recipient acceptance; match to the same SKU/unit supply ledger and gross-with-outlets or consumed-only view exactly once. | m | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_usable_return_area | composite_repair | usable_return_area | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | Measure actual outward return and recipient acceptance; match to the same SKU/unit supply ledger and gross-with-outlets or consumed-only view exactly once. | m2 | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_usable_return_count | composite_repair | usable_return_count | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | Measure actual outward return and recipient acceptance; match to the same SKU/unit supply ledger and gross-with-outlets or consumed-only view exactly once. | item | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_repair_wastes | composite_repair | repair_wastes | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; waste_id; producing_event; material; state; tare; net_mass; destination; treatment; return_exclusion; release_exclusion | Weigh segregated outward wastes with transfer/treatment evidence; reconcile residue and collected-liquid measurements and actual route, excluding usable return and releases. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |
| cp_identified_releases | composite_repair | identified_releases | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; event_id; event_owner; routine_or_incident; species; receiving_medium; activity; burned_fuel; composition; factor; factor_basis; capture; fate; measured_release; method; uncertainty; activity_unit; factor_unit; factor_source; composition_source; fate_source | Use direct species/medium measurement or valid actual activity-factor/composition-fate evidence; retain distinction between burned-fuel activity and upstream fuel supply and prevent incident/routine overlap. | kg | Each actual event and stock/acceptance reconciliation | Complete campaign including setup/cleaning/changeover/rework; complete asset life for shared_assets | Declared pipeline repair campaign and all attributable provider/asset consumers | per reference flow | Calibrated measurement; primary records; ownership and gate/fate reconciliation; actual role-specific Range evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_actual | prepreg_length; prepreg_area; prepreg_count; prepreg_mass; filler_components; primer_components; ancillary_mass; ancillary_length; ancillary_area; ancillary_count; water_supply; process_medium; electricity; fuel_supply; freight; bounded_provider; shared_assets; usable_return_mass; usable_return_length; usable_return_area; usable_return_count; repair_wastes; identified_releases | Normalized quantity = actual attributable native quantity / N; N = unique finally accepted defect IDs in declared campaign. Never divide by attempts, wraps, layers or unaccepted defects. | Actual primary quantities; N; linked cp for each row | Per 1 item reference repair quantities |  |
| stock_attribution | prepreg_length; prepreg_area; prepreg_count; prepreg_mass; filler_components; primer_components; ancillary_mass; ancillary_length; ancillary_area; ancillary_count; water_supply; process_medium; fuel_supply | Supply = opening attributable stock + external net-tare gross receipts - closing carried stock. Gross-with-outlets preserves matched usable return; consumed-only supply = supply - matched usable outward return, excluded once without return credit. Nonreturned waste/loss retains supply burden. | SKU; native_unit; opening; receipts; tare; closing; return; outlet state | Actual attributable supply by SKU and native unit |  |
| component_reconciliation | filler_components; primer_components | For each component, reconcile actual dosed mass to compatible mixed intermediate, cured-retained, mixed/unmixed waste and evidenced loss states; intermediates are nonadditive. Kit/component purchase views are exclusive; no guessed ratio. | Component masses; actual approved ratio; batch states; residues; supply scope | Component and mixed-state physical audit, not duplicate exchanges |  |
| burn_activity | fuel_supply; identified_releases | Burn activity = actual fuel burned; reconcile stock to burn + usable nonburned return + nonreturned waste + uncontained loss + closing stock with disjoint outlets. Upstream supply is not restricted to burn. Total spill is audit-only; closing recovered spill is not additional loss. | Actual fuel stock/receipt/outlets; fuel grade; actual compatible factor | Fuel supply and separate combustion activity |  |
| freight_work | freight | Freight work = sum of actual kg payload * actual km by owned leg with actual load/empty-leg allocation and coverage; avoid provider/supplier duplication. | leg_id; actual_payload; distance; load_share; empty_leg; coverage | kg*km before division by N |  |
| asset_attribution | shared_assets | Asset equivalents = job compatible measured driver / all-consumer complete-life driver; full-life scope includes manufacture + maintenance + replacements + EOL exactly once. Complete observed life or observed history + evidenced remainder/replacement/termination/EOL; retain uncertainty/sensitivity/update; missing coverage blocks finalization. | asset_id; full-life scope; all consumer/period drivers; observed history; evidenced remainder; replacements; EOL | Attributable full-life asset equivalents before division by N |  |
| medium_reconciliation | process_medium | Use disjoint whole-medium final outlets: opening + external_supply = closing + usable_outward_return + consumed_transformed + collected_waste + uncontained_loss. Closing includes all retained/recovered stock. Captured/reinjected and used/dosed quantities are intermediate audit views, not extra final outlets; vented is a subset of uncontained_loss, not an additional outlet. Never subtract capture plus reinjection/return/closing, or vented plus loss, twice. Job-attributed medium upstream supply and species/medium elementary releases remain separate nonadditive views. | opening; external_supply; closing; usable_outward_return; consumed_transformed; collected_waste; uncontained_loss; actual state/composition records | Disjoint whole-medium physical balance before normalization; intermediate audits are nonadditive |  |
| species_release | identified_releases | Species release = directly measured identified species mass to actual medium OR actual compatible activity * matched factor with composition/fate/capture treatment. Whole-medium physical views are nonadditive; do not infer species or release from residual/SDS/No VOCs. | Actual species/medium; measured release or compatible activity/factor/composition/fate; routine/incident owner | Identified species mass before division by N |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_gate | accepted_repair | Preserve defect survey, engineered design, technician qualification, approved instruction version, pressure/operating state, preparation/lay-up/full-cure/test evidence and signed acceptance. | cp_accepted_repair |
| complete_inventory | all inventory rows | Collect complete campaign from setup to final closure including failed work and all provider-paid resources; document absence, gaps and uncertainty rather than zero-filling. | Event and ownership register / 事件及责任方登记 |
| state_and_native | all inventory rows | Retain SKU native unit, calibration, net tare, batch/component states, return condition/destination and actual state-specific conversion evidence. | Supplier and meter records / 供应商及计量记录 |
| asset_complete_life | shared_assets | Retain all-consumer full-life driver, observed history plus any evidenced remainder and replacement/termination/EOL, uncertainty sensitivity and update date. No arbitrary lifespan. | cp_shared_assets |
| identity_and_factors | all inventory rows | Verify concrete flow/support identities at dataset production; identify exact factor source/version/activity/state/geography/species/medium where used and report support gaps separately. | Identity and factor evidence / 身份及因子证据 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| eligibility_and_gate | accepted_repair | Verify retained long-distance carbon-steel non-leaking external metal loss and approved design/instruction; block accepted output for ineligible defect, missing qualification, incomplete full cure, failed required test or unsigned acceptance. | csnri-xt-ps-0625 |
| count_denominator | all inventory rows | N must be positive, unique finally accepted defect IDs with the same declared campaign/qualifiers; compare all normalized quantities against N and prevent layer/roll/attempt duplication. |  |
| native_stock_reconcile | all inventory rows | Check SKU/unit-exclusive supply/return views, complete opening-receipt-closing-outlet reconciliation, prepreg resin inclusion, kit/component exclusivity, component dosing and installed/retained versus waste/release states; unresolved balance blocks finalization. |  |
| run_rework_linkage | composite_repair | Check batch/event/period links for setup, cleaning, changeover, failed material removal, reapplication, recure and retest; no rejected repair may enter N or leave without a declared path. |  |
| asset_period_coverage | shared_assets | Check every consumer and lifecycle phase/period including remainder/replacements/termination/EOL, compatible driver and complete denominator with sensitivity/update. Missing coverage or duplicate manufacture/maintenance/rental/provider scope blocks finalization. |  |
| species_fate | identified_releases | Check substance/species and receiving medium, routine/incident owner, actual measurement or matched activity-factor/composition-fate, fuel burn separation and captured/returned/waste exclusions. No VOCs/SDS/stock residual cannot establish zero or identity. |  |
| range_scope | all inventory rows | Require actual role-specific Range evidence before final quantity. Brochure temperatures, ply/hardness/cure times and mixed-technology case totals are not generic consumption/yield or acceptance defaults. Set time is not full cure. | csnri-xt-ps-0625 |
| exchange_readiness | all inventory rows | Every final exchange requires actual concrete verified identity, support property/unit and primary quantity/coverage evidence. Conditional actual absence may be documented; unknown is incomplete. Automated target checks alone do not verify identities or publication readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections of the accepted bounded service |
| allowed_use | Actual matching retained steel long-distance external non-leaking metal-loss prepreg repair with disclosed engineered qualifiers, complete job inventory and gate |
| excluded_use | Universal wrap recipe or repair lifespan; leaking/internal/crack/dent repair; clamp/sleeve; replacement/new pipeline or later transport; avoided replacement credit |
| required_metadata | Host and defect/design ID; location/date; system/instruction/SKUs; pressure/medium; geometry/lay-up; acceptance; N; stock/view and ownership; period/asset scope; conversions and source versions |
| required_quality_disclosure | Actual data coverage, calibration, Range evidence, lifecycle/provider completeness, uncertainty/sensitivity, exact flow/support and factor readiness, missing records and conditional absence |
| update_trigger | Changed defect/design/system/instruction or acceptance gate; actual new SKU/provider identity; stock/fate corrections; new asset history/remainder/replacement/termination/EOL or factors; changed representative job mix |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes (30 June 2025), code 54241; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; narrow category boundary is explicitly authored |
| csnri-xt-ps-0625 | literature | CSNRI SynthoGlass XT product sheet PS_0625, complete pp. 1–2; https://www.cs-nri.com/wp-content/uploads/2023/04/CSNRI_PS_SynthoGlass-XT_Web-1.pdf | Factory glass/PU prepreg, moisture cure, filler/primer/prepreg system roles and conditional technical data only. Set/cure table, ply thickness, hardness and marketing compliance are not universal job quantities or field acceptance. |
| csnri-xt-product-page | literature | CSNRI SynthoGlass XT current product page; https://www.cs-nri.com/product/syntho-glass-xt/ | Current product route/application context; does not establish actual design approval, recipe, quantity or reviewed full standards |
| csnri-transmission-corrosion-case | literature | CSNRI, Composites take on air-to-soil interface corrosion on gas; https://www.cs-nri.com/case_study/composites-take-on-air-to-soil-interface-corrosion-on-gas/ | Transmission context, designed repair/preparation and trained installation; mixed technologies and case totals are not XT-only ranges |

The stock, fuel, freight and asset algebra above are explicit foreground collection/accounting rules of this PCR. Manufacturer documents support only their stated product/route facts, not these original LCA accounting rules.
