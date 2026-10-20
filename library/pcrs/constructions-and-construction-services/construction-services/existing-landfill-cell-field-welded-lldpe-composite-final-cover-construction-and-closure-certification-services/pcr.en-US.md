---
pcr_id: pcr.construction-services.existing-landfill-cell-field-welded-lldpe-composite-final-cover-construction-and-closure-certification-services
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Existing landfill cell field-welded LLDPE composite final cover construction and closure certification services

## 1. Scope and Applicability

This PCR covers completed construction and closure certification of a field-welded LLDPE composite final cover on an identified retained waste-filled landfill cell. An approved low-permeability soil or GCL component in composite contact with LLDPE is required by this scope; actual designed drainage, gas, protection and vegetative layers are separately identified. Start after acceptance of the existing filled-cell baseline, not a new landfill construction project. Actual permit, closure design and CQA requirements govern the work and responsible certification. Sources describe physical roles; historical Rose Hill RCRA/CERCLA case requirements are not universal MSWLF rules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-landfill-cell-field-welded-lldpe-composite-final-cover-construction-and-closure-certification-services |
| classification_refs | CPC 3.0 54290; narrower |
| covered_products | Certified composite final closure cover service on existing filled landfill cells |
| excluded_products | New landfill or bottom liner; waste operation/placement; daily/intermediate cover; soil-only ET cap; bare membrane supply; incinerator/nuclear works; later postclosure care |
| representative_product | Certified field-welded LLDPE composite final landfill closure cover service |
| production_route | Qualified prepared existing-cell subgrade → approved soil/GCL and field-welded LLDPE composite barrier with designed other layers/interfaces → inspected/repaired/tested complete cap → closure certification |
| market_state | Completed accepted construction service at signed closure certification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Certified field-welded LLDPE composite final landfill closure cover service |
| How much | 1 m2 |
| How well | Actual approved closure/CQA plan, material/interface/layer and test acceptance, as-builts, defect closure and signed certification |
| How long or cycle | One actual project campaign from preparation through closure certification; declare phase/period dates; later postclosure care separate, no assumed service life |
| reference_flow_link | `certified_final_cover` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| product_flow | Certified field-welded LLDPE composite final landfill closure cover service |
| flow_property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| unit_group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| reference_unit | m2 |
| required_qualifiers | cell_id; retained_waste_baseline; jurisdiction_and_approved_plan; climate_topography; LLDPE_grade_surface_thickness; soil_or_GCL_composite_contact; layer_sequence_and_interfaces; CQA_acceptance_and_certification; developed_surface_and_slope_convention; project_campaign_and_periods |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_area | certified_final_cover | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A is the actual positive unique net developed completed certified final cover surface in m2 under cp_cap_gate. State survey convention and include actual slopes once. Normalize attributed inventory to 1 m2. Do not sum layers, overlaps, repairs, roll areas or prepare handoff areas. |
| native_units | all inventory rows | Actual compatible verified property | actual native unit | Preserve each actual supplier and return SKU in native Area, Length, Count, Volume, Mass, Energy or provider service unit. Confirm matching support identities independently. Native_state governs nonadditive density/moisture conversions with actual state and temperature; energy, time and price cannot be forced into counted service or mass. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Named filled existing cell, waste/intermediate-cover survey and retained gas/leachate interfaces; actual approved closure and CQA plan |
| starting_condition_role | retained_asset_baseline |
| product_classification_scope | Specific final landfill closure-cover service within other civil engineering construction |
| recursive_input_rule | Internal subgrade and layer handoffs are activities, not rebought same-project outputs; bound any actual bought same-category service by its gate and covered resources |
| upstream_dataset_requirement | Complete actual product/service and capital lifecycle scope, geography/technology/state and native units; disclose missing coverage |
| disclosure | Actual design, retained baseline, attribution method, stock accounting, provider/asset ownership, phases and excluded later care |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | all processes | Own actual grading, subgrade conditioning/compaction, approved soil or GCL plus LLDPE composite barrier, separately designed gas/drainage/protection/erosion layers and all connections, field seaming, tests, repair and certification. The gate requires plan-conforming final layer survey, material traceability, actual required non-destructive/destructive seam tests, penetration/anchorage and drainage/gas inspections, erosion/vegetation establishment where required, defect closure, as-builts and signed responsible engineer/owner/authority acceptance. Criteria, layer thicknesses, soil moisture/compaction limits, test frequencies, climatic restrictions and certification roles come from the actual applicable approved plan; this PCR prescribes no construction engineering settings. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| baseline_increment | all processes | Declare retained waste, intermediate cover, existing gas and leachate equipment, background decomposition and baseline gas/water flows before work. No historical waste manufacture is purchased again. Own actual incremental grading/removal, disturbance releases, temporary capture/pumping/treatment, damage, contamination control and reinstatement during the job. Establish attribution by comparable baseline and job/event measurements with confounders and uncertainty; missing attribution is a material data gap, never an automatic zero or an assumed net reduction. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| owned_resources | all processes | Include actual direct and subcontracted resources, rental/provider assets, mobilization/demobilization, freight including required empty legs, temporary utilities, sampling, destructive coupons, retries, clean-up and stock exits once. Decompose upstream service coverage before adding physical purchases. A factory composite component includes its factory constituents. Landfill operating waste placement, new cell/bottom liner or whole landfill, daily/intermediate cover, soil-only evapotranspiration covers and later postclosure monitoring/maintenance are excluded. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| internal_handoffs | all processes | The prepare-to-cap subgrade handoff is an internal state transition linked by transfer_id, not another external purchase or final reference output. Record actual prepared and accepted footprints separately. A same-category bought closure-cover service is bounded by its actual certified gate and complete upstream scope; do not recursively buy this project again. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Approved grading and subgrade soil supplied (`prep_soil`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Record each imported soil grade in actual native Mass/kg or Volume/m3 as supplied and its delivered wet/dry, loose/compacted state; existing in-place waste and intermediate cover are baseline, not newly supplied soil. Internal redistribution is an activity record, not another purchase.

- Collection subject: Approved grading and subgrade soil supplied
- Flow property / unit: Actual verified soil property / actual native supply unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual Approved grading and subgrade soil supplied native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Actual subgrade conditioners and temporary protection consumables (`prep_conditioners`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Conditional actual approved products used to attain qualified subgrade or protect exposed interfaces; collect product composition and exclude factory ingredients already covered by supplied products.

- Collection subject: Actual subgrade conditioners and temporary protection consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_stock`
- Sources:

Range evidence need: Collect actual subgrade conditioners and temporary protection consumables native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Actual fuel supplied for prepare (`prepare_fuel`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Each actual fuel SKU retains its actual native supply property/unit (Mass/kg or Volume/l or m3, as actually supplied); separately reconcile fuel burn, usable return, nonburned contained waste, uncontained release and closing stock. A necessary mass view requires actual density, temperature and sources, and is nonadditive.

- Collection subject: Actual fuel supplied for prepare
- Flow property / unit: Actual verified fuel property / actual native supply unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_energy`
- Sources:

Range evidence need: Collect actual fuel-SKU receipts, opening/closing and directly measured burn or complete disjoint fates with meter/stock uncertainty; no transferable litre-per-m2 rate.

#### Collection requirement: Actual contracted construction testing and temporary management services for prepare (`prepare_services`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Expand actual provider results: qualified earthwork or welding/testing, temporary gas/leachate/stormwater control, laboratory and temporary utilities. Independently measured freight belongs to this node freight card; other services retain their own native physical unit. State completed physical result, native unit and exact covered resources. Collect missing subcontractor fuel, materials, waste and capital scope; price or hours are not equivalent to a counted complete service.

- Collection subject: Actual contracted construction testing and temporary management services for prepare
- Flow property / unit: Actual verified service property / actual native unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_service`
- Sources:

Range evidence need: Collect native physical completed service quantities and coverage by provider/event; freight requires actual payload/distance and empty legs. Obtain variability/uncertainty from these records, never price/hour equivalence.

#### Collection requirement: Attributed construction and CQA asset lifecycle services for prepare (`prepare_assets`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Include actual excavators, compactors, pumps, welding machines, test instruments, vehicles and temporary installations used by this node. Use one lifecycle-complete per-driver service or native asset-equivalent share under asset_share; never add both. Shared consumers include other jobs and periods.

- Collection subject: Attributed construction and CQA asset lifecycle services for prepare
- Flow property / unit: Actual verified asset or service property / actual native unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_service`
- Sources:

Range evidence need: Evidence actual job driver and full-life all-consumer denominator, observed history/remainder, replacements/termination/end-of-life and sensitivity; no assumed plant lifetime or asset-per-area ratio.

#### Collection requirement: Actual freight transport work for prepare (`prepare_freight`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Record actual inbound/outbound material, stock return, waste and plant mobilization freight load mass times loaded distance, compatible mode and actual required empty legs. Provider/native freight unit and complete covered fuel/vehicle scope are explicit. This independently measured role is not all construction/testing service activity, and overlapping freight already covered in supplier or waste-treatment scope is not added.

- Collection subject: Actual freight transport work for prepare
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_service`
- Sources:

Range evidence need: Collect actual leg-specific attributed payload mass and loaded distance, mode, route, shared-load allocation, necessary empty-return activity and provider coverage, with weighing/distance/allocation uncertainty. Keep empty legs in the evidenced transport service or separate vehicle activity; do not invent positive cargo for them. No default distance or kg*km per m2 is established.

#### Collection requirement: Actual freshwater abstraction for preparation (`prep_abstraction`)

Process / prospective direction / type: `prepare` / `inputs` / `elementary`.

Only actual directly abstracted source water crossing the environment boundary, with source compartment and permit evidence; do not duplicate supplied water.

- Collection subject: Actual freshwater abstraction for preparation
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_stock`
- Sources:

Range evidence need: Collect actual source-specific metered supply/abstraction, use and wastewater/discharge/soil-moisture/evaporation destination evidence with uncertainty; no assumed water rate or double purchase of delivered moisture.

#### Collection requirement: Matched usable outward returns from prepare (`prepare_returns`)

Process / prospective direction / type: `prepare` / `outputs` / `product`.

Expand each returned usable soil, roll, pipe, fitting, fuel or consumable SKU in the same unit/state as its matched receipt. Internal transfers and closing stock are not outward returns. Gross-with-outlets or consumed-only accounting is selected once. This physical return card is retained in both cases; under consumed-only it is audit-only and supplies no second subtraction or credit.

- Collection subject: Matched usable outward returns from prepare
- Flow property / unit: Actual returned product property / matching native unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_stock`
- Sources:

Range evidence need: Collect actual matched usable outward SKU quantity/state and return receipt uncertainty; no generic salvage percentage and closing is not return.

#### Collection requirement: Actual contained liquid wastes from prepare (`prepare_liquid_waste`)

Process / prospective direction / type: `prepare` / `outputs` / `waste`.

Record actual job-attributable removed leachate, pumped contaminated water, washwater and nonburned fuel/oils sent to treatment by distinct composition and destination. A contained wastewater transfer is waste, not an elementary discharge; native fuel litre records retain explicit conversion.

- Collection subject: Actual contained liquid wastes from prepare
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_waste`
- Sources:

Range evidence need: Collect incremental contained wastewater/leachate and nonburned liquid by stream, composition, metering/density state and actual treatment receipt; no assumed pump rate or blanket-zero disturbance.

#### Collection requirement: Actual species emissions to air from prepare (`prepare_air`)

Process / prospective direction / type: `prepare` / `outputs` / `elementary`.

Create actual substance and receiving-air-compartment exchanges for owned combustion, disturbed landfill gas, dust and material/whole-fluid release only where attributable. Use measured species mass or matched activity times species factor, or measured whole-fluid release times evidenced composition and fate. A complete species factor is not multiplied by composition or fate again. Baseline decomposition and existing collection flows are separately measured/disclosed; no invented gas factor, blanket zero or future methane-avoidance credit.

- Collection subject: Actual species emissions to air from prepare
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_emission`
- Sources:

Range evidence need: Collect actual event/species/medium mass or matched activity-factor operands and composition/fate evidence, comparable baseline and attribution uncertainty; no generic landfill-gas, dust or spill emission factor.

#### Collection requirement: Actual species releases to water or soil from prepare (`prepare_water_soil`)

Process / prospective direction / type: `prepare` / `outputs` / `elementary`.

Identify actual substance, receiving water/soil compartment and incremental job event for uncontained spills, discharge or disturbed contaminated material. Whole liquid volumes and contained waste masses are audit views, not additional species exchanges. Safety data sheet hazard levels and general low-VOC claims do not quantify releases.

- Collection subject: Actual species releases to water or soil from prepare
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_emission`
- Sources:

Range evidence need: Collect actual event/species/medium mass or matched activity-factor operands and composition/fate evidence, comparable baseline and attribution uncertainty; no generic landfill-gas, dust or spill emission factor.

#### Collection requirement: Actual construction water releases to environment from prepare (`prepare_water_release`)

Process / prospective direction / type: `prepare` / `outputs` / `elementary`.

Record attributable actual water returned/discharged or evaporated into its evidenced receiving compartment by event. Distinguish soil-moisture retention/closing water, contained wastewater treatment transfers and pre-existing baseline flows. Link the same water-event ID to separately quantified actual pollutant species without duplicating whole-fluid water quantity; no assumed evaporation or zero disturbance.

- Collection subject: Actual construction water releases to environment from prepare
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_emission`
- Sources:

Range evidence need: Collect actual source-specific metered supply/abstraction, use and wastewater/discharge/soil-moisture/evaporation destination evidence with uncertainty; no assumed water rate or double purchase of delivered moisture.

#### Collection requirement: Actual fuel supplied for cap (`cap_fuel`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Each actual fuel SKU retains its actual native supply property/unit (Mass/kg or Volume/l or m3, as actually supplied); separately reconcile fuel burn, usable return, nonburned contained waste, uncontained release and closing stock. A necessary mass view requires actual density, temperature and sources, and is nonadditive.

- Collection subject: Actual fuel supplied for cap
- Flow property / unit: Actual verified fuel property / actual native supply unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_energy`
- Sources:

Range evidence need: Collect actual fuel-SKU receipts, opening/closing and directly measured burn or complete disjoint fates with meter/stock uncertainty; no transferable litre-per-m2 rate.

#### Collection requirement: Actual contracted construction testing and temporary management services for cap (`cap_services`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Expand actual provider results: qualified earthwork or welding/testing, temporary gas/leachate/stormwater control, laboratory and temporary utilities. Independently measured freight belongs to this node freight card; other services retain their own native physical unit. State completed physical result, native unit and exact covered resources. Collect missing subcontractor fuel, materials, waste and capital scope; price or hours are not equivalent to a counted complete service.

- Collection subject: Actual contracted construction testing and temporary management services for cap
- Flow property / unit: Actual verified service property / actual native unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_service`
- Sources:

Range evidence need: Collect native physical completed service quantities and coverage by provider/event; freight requires actual payload/distance and empty legs. Obtain variability/uncertainty from these records, never price/hour equivalence.

#### Collection requirement: Attributed construction and CQA asset lifecycle services for cap (`cap_assets`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Include actual excavators, compactors, pumps, welding machines, test instruments, vehicles and temporary installations used by this node. Use one lifecycle-complete per-driver service or native asset-equivalent share under asset_share; never add both. Shared consumers include other jobs and periods.

- Collection subject: Attributed construction and CQA asset lifecycle services for cap
- Flow property / unit: Actual verified asset or service property / actual native unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_service`
- Sources:

Range evidence need: Evidence actual job driver and full-life all-consumer denominator, observed history/remainder, replacements/termination/end-of-life and sensitivity; no assumed plant lifetime or asset-per-area ratio.

#### Collection requirement: Separately supplied protection and filter geotextiles (`separate_geotextile`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Only independently purchased designed protection, cushion, separator or filter roles not already in GCL or drain composite; retain actual SKU/state and installed layer map.

- Collection subject: Separately supplied protection and filter geotextiles
- Flow property / unit: Area / m2
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual Separately supplied protection and filter geotextiles native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Actual drainage and gas connection pipe lengths (`pipes`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Each actual pipe material, diameter, pressure/perforation class and function uses native length; include actual ties to retained gas/leachate interfaces and stormwater outlet route. Retained existing pipes are baseline, replacements and actual temporary pipes are owned.

- Collection subject: Actual drainage and gas connection pipe lengths
- Flow property / unit: Length / m
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual drainage and gas connection pipe lengths native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Actual counted fittings anchors and penetration components (`fittings`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Record actual count by SKU for fittings, vents, boots, clamps and anchors where supplied by count; dimensional and compatibility qualifiers required. Count cannot replace separately supplied pipe length or roll area.

- Collection subject: Actual counted fittings anchors and penetration components
- Flow property / unit: Count / item
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual counted fittings anchors and penetration components native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Specified soil aggregate and vegetative cover media (`cap_soil`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Expand actual low-permeability soil barrier if used, gas/drain mineral layer, protection and vegetative media by layer and material. Preserve delivered loose volume or installed compacted volume as distinct nonadditive states, plus actual dry solids and moisture reconciliation. On-site reused soil is internal activity with origin and processing burdens, not new supply or a default zero.

- Collection subject: Specified soil aggregate and vegetative cover media
- Flow property / unit: Actual verified soil property / actual native supply unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual Specified soil aggregate and vegetative cover media native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Actual erosion control revegetation and soil amendment products (`erosion_vegetation`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Actual seeds, mulch, fertilizer, tackifier and soil amendments by mass SKU; preserve actual delivered composition/moisture and fate. Separately supplied area-based erosion mats belong to erosion_blanket. No universal application rate, vegetation yield or maintenance lifetime.

- Collection subject: Actual erosion control revegetation and soil amendment products
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual erosion control revegetation and soil amendment products native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Actual welding and installation consumables (`weld_consumables`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Actual extrusion rod, cleaning product, sealant, patch accessory and sacrificial test/repair supplies; record formulation and actual delivered basis, excluding material already included in membrane stock. No solvent content becomes an emission without release evidence.

- Collection subject: Actual welding and installation consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual welding and installation consumables native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Separately supplied erosion-control blanket or mat (`erosion_blanket`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Conditional actual independent mat SKU supplied by area, excluding textiles already incorporated in a factory composite. No conversion to mass without actual product areal density and evidence; that mass view is not an additional purchase.

- Collection subject: Separately supplied erosion-control blanket or mat
- Flow property / unit: Area / m2
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual Separately supplied erosion-control blanket or mat native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

#### Collection requirement: Actual freight transport work for cap (`cap_freight`)

Process / prospective direction / type: `cap` / `inputs` / `product`.

Record actual inbound/outbound material, stock return, waste and plant mobilization freight load mass times loaded distance, compatible mode and actual required empty legs. Provider/native freight unit and complete covered fuel/vehicle scope are explicit. This independently measured role is not all construction/testing service activity, and overlapping freight already covered in supplier or waste-treatment scope is not added.

- Collection subject: Actual freight transport work for cap
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_service`
- Sources:

Range evidence need: Collect actual leg-specific attributed payload mass and loaded distance, mode, route, shared-load allocation, necessary empty-return activity and provider coverage, with weighing/distance/allocation uncertainty. Keep empty legs in the evidenced transport service or separate vehicle activity; do not invent positive cargo for them. No default distance or kg*km per m2 is established.

#### Collection requirement: Actual freshwater abstraction for cap (`cap_abstraction`)

Process / prospective direction / type: `cap` / `inputs` / `elementary`.

Direct source-water abstraction only, separate from purchased supply and soil moisture, with actual source compartment and attribution.

- Collection subject: Actual freshwater abstraction for cap
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources:

Range evidence need: Collect actual source-specific metered supply/abstraction, use and wastewater/discharge/soil-moisture/evaporation destination evidence with uncertainty; no assumed water rate or double purchase of delivered moisture.

#### Collection requirement: Matched usable outward returns from cap (`cap_returns`)

Process / prospective direction / type: `cap` / `outputs` / `product`.

Expand each returned usable soil, roll, pipe, fitting, fuel or consumable SKU in the same unit/state as its matched receipt. Internal transfers and closing stock are not outward returns. Gross-with-outlets or consumed-only accounting is selected once. This physical return card is retained in both cases; under consumed-only it is audit-only and supplies no second subtraction or credit.

- Collection subject: Matched usable outward returns from cap
- Flow property / unit: Actual returned product property / matching native unit
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources:

Range evidence need: Collect actual matched usable outward SKU quantity/state and return receipt uncertainty; no generic salvage percentage and closing is not return.

#### Collection requirement: Actual contained liquid wastes from cap (`cap_liquid_waste`)

Process / prospective direction / type: `cap` / `outputs` / `waste`.

Record actual job-attributable removed leachate, pumped contaminated water, washwater and nonburned fuel/oils sent to treatment by distinct composition and destination. A contained wastewater transfer is waste, not an elementary discharge; native fuel litre records retain explicit conversion.

- Collection subject: Actual contained liquid wastes from cap
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_waste`
- Sources:

Range evidence need: Collect incremental contained wastewater/leachate and nonburned liquid by stream, composition, metering/density state and actual treatment receipt; no assumed pump rate or blanket-zero disturbance.

#### Collection requirement: Actual species emissions to air from cap (`cap_air`)

Process / prospective direction / type: `cap` / `outputs` / `elementary`.

Create actual substance and receiving-air-compartment exchanges for owned combustion, disturbed landfill gas, dust and material/whole-fluid release only where attributable. Use measured species mass or matched activity times species factor, or measured whole-fluid release times evidenced composition and fate. A complete species factor is not multiplied by composition or fate again. Baseline decomposition and existing collection flows are separately measured/disclosed; no invented gas factor, blanket zero or future methane-avoidance credit.

- Collection subject: Actual species emissions to air from cap
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_emission`
- Sources:

Range evidence need: Collect actual event/species/medium mass or matched activity-factor operands and composition/fate evidence, comparable baseline and attribution uncertainty; no generic landfill-gas, dust or spill emission factor.

#### Collection requirement: Actual species releases to water or soil from cap (`cap_water_soil`)

Process / prospective direction / type: `cap` / `outputs` / `elementary`.

Identify actual substance, receiving water/soil compartment and incremental job event for uncontained spills, discharge or disturbed contaminated material. Whole liquid volumes and contained waste masses are audit views, not additional species exchanges. Safety data sheet hazard levels and general low-VOC claims do not quantify releases.

- Collection subject: Actual species releases to water or soil from cap
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_emission`
- Sources:

Range evidence need: Collect actual event/species/medium mass or matched activity-factor operands and composition/fate evidence, comparable baseline and attribution uncertainty; no generic landfill-gas, dust or spill emission factor.

#### Collection requirement: Actual construction water releases to environment from cap (`cap_water_release`)

Process / prospective direction / type: `cap` / `outputs` / `elementary`.

Record attributable actual water returned/discharged or evaporated into its evidenced receiving compartment by event. Distinguish soil-moisture retention/closing water, contained wastewater treatment transfers and pre-existing baseline flows. Link the same water-event ID to separately quantified actual pollutant species without duplicating whole-fluid water quantity; no assumed evaporation or zero disturbance.

- Collection subject: Actual construction water releases to environment from cap
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_emission`
- Sources:

Range evidence need: Collect actual source-specific metered supply/abstraction, use and wastewater/discharge/soil-moisture/evaporation destination evidence with uncertainty; no assumed water rate or double purchase of delivered moisture.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | Existing cell subgrade preparation and qualification | required | Every covered project | Actual incoming soil/baseline conditioning to independently inspected qualified subgrade; recondition rejected zones before cap release | Measured prepared developed area, soil states and acceptance record; internal handoff |
| cap | Composite cap installation CQA and closure certification | required | After qualified prepare handoff | Integrate approved barrier and other designed layers, field weld/test/repair and certify final cover | Certified unique net developed final cover area A |

### Process: Subgrade preparation and qualification (`prepare`)

#### Inputs

##### Product flows

###### Construction water supplied for preparation (`prep_water`)

Separate purchased water from direct abstraction by source and use; moisture in delivered soil is not another water purchase.

- Selected flow: Construction water supplied for preparation
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_stock`
- Sources:

Range evidence need: Collect actual source-specific metered supply/abstraction, use and wastewater/discharge/soil-moisture/evaporation destination evidence with uncertainty; no assumed water rate or double purchase of delivered moisture.

###### Metered electricity supplied for prepare (`prepare_electricity`)

Record grid supply, temporary power and provider-metered demand with upstream scope. Fuel for a generator and its delivered electricity cannot both carry the same generation burden.

- Selected flow: Metered electricity supplied for prepare
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_energy`
- Sources:

Range evidence need: Collect phase-specific meter uncertainty, imports/exports, standby and provider-power scope; no default welding, pumping or compaction kWh-per-m2.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified prepared retained-cell subgrade handoff (`prepared_subgrade`)

Internal handoff to cap assembly after actual grading, moisture conditioning and compaction/inspection required by design. Record actual accepted subgrade developed area and condition; it is not a separately sold final cover or an additional purchase. Rejected zones remain in prepare until corrected.

- Selected flow: Qualified prepared retained-cell subgrade handoff
- Flow property / unit: Area / m2
- Amount rule: Actual qualified prepared developed subgrade area divided once by A; nonadditive internal handoff, not fixed to 1 m2.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_gate`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect qualified prepared footprint, rejected-zone area, incoming and compacted soil states and independent qualification-inspection uncertainty; it need not equal final A.

##### Waste flows

###### Actual segregated solid construction waste from prepare (`prepare_solid_waste`)

Identify each actual soil/debris, rejected material, offcut, destructive-test coupon, packaging and contaminated sorbent stream with wet/dry basis and actual permitted destination. Historic removed waste is not a negative new-material purchase. Retain upstream burden of nonreturned losses; no default recycling credit.

- Selected flow: Actual segregated solid construction waste from prepare
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_waste`
- Sources:

Range evidence need: Collect segregated actual debris/offcut/coupon/packaging waste masses, wet/dry state, weighing uncertainty and destination receipts; no default reject or recycling fraction.

##### Elementary flows

### Process: Composite cover installation and certification (`cap`)

#### Inputs

##### Product flows

###### Metered electricity supplied for cap (`cap_electricity`)

Record grid supply, temporary power and provider-metered demand with upstream scope. Fuel for a generator and its delivered electricity cannot both carry the same generation burden.

- Selected flow: Metered electricity supplied for cap
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_energy`
- Sources:

Range evidence need: Collect phase-specific meter uncertainty, imports/exports, standby and provider-power scope; no default welding, pumping or compaction kWh-per-m2.

###### Specified LLDPE geomembrane rolls and weld repair stock (`lldpe_geomembrane`)

Actual traceable LLDPE grade, surface texture, thickness and panel/roll IDs specified by the approved design; supplied roll area includes overlaps, anchor extensions, coupons and repairs. Field welds, penetrations and anchorages follow actual approved CQA acceptance. Purchased roll area is not A.

- Selected flow: Specified LLDPE geomembrane rolls and weld repair stock
- Flow property / unit: Area / m2
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual Specified LLDPE geomembrane rolls and weld repair stock native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

###### Specified geosynthetic clay liner barrier component (`gcl_barrier`)

Include actual approved GCL when used as the low-permeability component in intimate composite contact with the LLDPE. Keep bentonite/carrier already in purchased GCL within that supplied component. Where approved soil replaces GCL, document absence and use cap_soil; drainage composite cannot silently replace this barrier duty.

- Selected flow: Specified geosynthetic clay liner barrier component
- Flow property / unit: Area / m2
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual Specified geosynthetic clay liner barrier component native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

###### Specified composite drainage geosynthetic (`composite_drain`)

Actual approved drainage core and bonded filter geotextile SKU; layer location and drain outlets must match design. Do not repurchase factory bonded textile as separate geotextile. Drainage does not itself establish composite barrier qualification.

- Selected flow: Specified composite drainage geosynthetic
- Flow property / unit: Area / m2
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Collect actual Specified composite drainage geosynthetic native-SKU receipt, matched return, stock and installed-state records, supplier specification and measurement uncertainty. Layer design/overlaps, moisture/density or piece dimensions are actual project evidence, never a default rate.

###### Construction and establishment water supplied for cap (`cap_water`)

Record actual water for placement, dust control, cleaning, trials and vegetation establishment required before acceptance; separate source and provider scope. Later routine irrigation is postclosure care.

- Selected flow: Construction and establishment water supplied for cap
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_stock`
- Sources:

Range evidence need: Collect actual source-specific metered supply/abstraction, use and wastewater/discharge/soil-moisture/evaporation destination evidence with uncertainty; no assumed water rate or double purchase of delivered moisture.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Certified field-welded LLDPE composite final landfill closure cover service (`certified_final_cover`)

Only the unique completed net developed final cover surface certified against the actual closure and CQA plan. One surface is counted once across all layers and slopes; unresolved defects and interim protected areas are not accepted final output.

- Selected flow: Certified field-welded LLDPE composite final landfill closure cover service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_cap_gate`
- Sources: `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

Range evidence need: Final 1 m2 is normalization only. Establish actual A uncertainty from unique certified surface polygons, slope convention, survey accuracy and certification extent; no empirical yield range.

##### Waste flows

###### Actual segregated solid construction waste from cap (`cap_solid_waste`)

Identify each actual soil/debris, rejected material, offcut, destructive-test coupon, packaging and contaminated sorbent stream with wet/dry basis and actual permitted destination. Historic removed waste is not a negative new-material purchase. Retain upstream burden of nonreturned losses; no default recycling credit.

- Selected flow: Actual segregated solid construction waste from cap
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity divided once by A, recorded per reference flow from the linked node protocol, with compatible stock and physical-state reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_waste`
- Sources:

Range evidence need: Collect segregated actual debris/offcut/coupon/packaging waste masses, wet/dry state, weighing uncertainty and destination receipts; no default reject or recycling fraction.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| stock_account | all processes | For each native SKU/state, S = attributed_opening + external_net_tare_gross_receipts - carried_closing. Internal issue and installed activity are not receipts. Choose declared gross-with-outlets: input S and matched usable outward return separately, or consumed-only: input S minus matched usable outward return and no additional return burden subtraction or credit. In both views retain each independently measured physical outward-return record/card as an audit view; that physical record is not another modeled upstream subtraction or credit. The chosen supply and return burden views are nonadditive. Closing stock, recovered spill still held at close, contained waste, uncontained loss and usable external return are distinct disjoint fates. Nonreturned offcuts, rejects and losses retain their upstream burdens. Historic removed materials never reduce new purchases; no recycling or avoided-production credit is implied. |  |
| asset_share | all processes | For each shared plant/tool/test instrument and temporary installation, include manufacture, maintenance, replacements and end-of-life across ALL consumers, jobs, nodes and periods. Enumerate prepare/cap consumers and other jobs, calendar periods, setup/changeover/cleaning, replacements and termination. Choose one representation: native asset-equivalent quantity per reference flow = (job_driver / full_life_driver) / A with the full asset lifecycle burden in the matching native unit; OR lifecycle-complete per-driver service quantity per reference flow = job_driver / A with burden in the same driver unit. Do not combine them or divide twice. Full_life_driver requires observed life or observed history plus evidenced remaining use, future replacements, termination and end-of-life, source, uncertainty, sensitivity and update conditions. Job hours alone do not establish full-life service or a counted machine equivalent; missing life/coverage evidence blocks a completed dataset. |  |
| campaign_rework | all processes | Production is a project campaign indexed by cell, approved layer/zone, panel/weld or soil batch, event and period. Preparatory, placement, test/repair and final acceptance phases retain actual start/end dates. Attribute setup, changeover, idle/standby, cleaning and shared provider demand using evidenced causal physical drivers; retain failed/repeated work in this job numerator. Link failed soil tests to prepare reconditioning and failed seams/coupons/penetrations to cap repair/retest; identify retained repaired material, usable external return and actual waste exit at its producing node. Count final surface once only after defect closure. No default reject rate, annualization, postclosure life or credit for future avoided leachate/gas generation. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepare_stock | prepare | stock records owned by prepare | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; sku; lot_id; state; material_role; layer_id; transfer_id; attributed_opening; external_gross_receipts; tare; external_net_tare_gross_receipts; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt_link; return_condition; accounting_view; quantity; native_unit; wet_volume; wet_volume_unit; wet_density; wet_density_unit; wet_density_source; wet_mass; wet_mass_unit; dry_mass; dry_mass_unit; loose_volume; loose_volume_unit; compacted_volume; compacted_volume_unit; density; density_unit; density_state; density_method; density_source; wet_basis_water_fraction; dry_basis_water_ratio; moisture_method; moisture_source; loose_dry_density; loose_dry_density_unit; loose_dry_density_source; compacted_dry_density; compacted_dry_density_unit; compacted_dry_density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; water_source; water_event_id; supplied_water; directly_abstracted_water; incoming_moisture_water; soil_water_retained; water_closing; contained_wastewater; discharge_water; evaporated_water; water_destination; receiving_compartment; water_balance_uncertainty; uncertainty | Reconcile native SKU receipts, calibrated survey/weighing, issued/returned quantities and physical stocktake. Retain actual moisture/density states and sources; join soil/roll/pipe/layer records. Never sum native and converted views. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_prepare_energy | prepare | energy records owned by prepare | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; fuel_sku; native_unit; attributed_opening; external_net_tare_gross_receipts; carried_closing; burned; burn_measurement; usable_outward_return; contained_nonburned_waste; uncontained_loss; recovered_closing; total_spill_audit; fate_completeness; unknown_loss; metered_electricity_import; metered_electricity_export; electricity_unit; generator_owner; upstream_scope; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | Use calibrated meter/fuel issue and stock records, direct measured burn or audited complete disjoint fates with independent uncertainty; investigate unknown losses. Obtain provider power/generator ownership and gross imports/exports. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_prepare_service | prepare | service records owned by prepare | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; provider_id; completed_physical_result; result_gate; native_unit; service_quantity; upstream_scope; excluded_scope; resource_owner; asset_id; asset_native_unit; consuming_nodes; all_consumers; all_jobs; all_periods; job_driver; driver_unit; full_life_driver; observed_history; observed_life; evidenced_remainder; remainder_source; replacement_events; replacement_burdens; replacement_source; termination_basis; termination_source; end_of_life_basis; end_of_life_burden; end_of_life_source; manufacture_burden; maintenance_burden; representation; lifecycle_service_scope; uncertainty; sensitivity; update_trigger; update_record; observed_history_source; observed_life_source; route_id; mode; actual_load_mass_kg; actual_loaded_distance_km; empty_return_activity; load_state; transport_work_unit; conversion_factor; conversion_unit; conversion_source | Obtain physical completion records, provider resource coverage and full asset life evidence across all consumers. Attribute one actual driver consistently; reconstruct observed history plus evidenced remainder/replacement/termination/end-of-life if life is unfinished. Reconcile load-distance and empty legs to freight scope. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_prepare_waste | prepare | waste records owned by prepare | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; stream_id; source_sku; originating_node; defect_id; rework_id; waste_class; waste_state; waste_composition; measured_quantity; native_unit; wet_dry_basis; waste_destination; treatment_provider; transfer_id; destination_receipt; retained_repair; external_return; recovered_closing; contained_nonburned_waste; total_spill_audit; density; density_unit; density_state; density_source; moisture; moisture_basis; moisture_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | Weigh or meter segregated actual waste, record state/contamination, producing node and chain of custody, manifests and treatment receipts. Match every off-spec zone/panel to retained repair, usable return or actual discard. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_prepare_emission | prepare | emission records owned by prepare | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; species_id; substance_name; receiving_medium; compartment; source_event; baseline_period; baseline_activity; baseline_species_mass; job_activity; confounders; attribution_method; attributable_fraction; attribution_source; measured_species_mass; matched_activity; activity_unit; complete_species_factor; factor_numerator_unit; factor_denominator_unit; factor_basis; factor_source; factor_validity; measured_whole_fluid_release; release_unit; evidenced_species_fraction; composition_basis; composition_source; evidenced_release_fate; fate_basis; fate_source; release_basis; water_event_id; actual_water_release; water_release_unit; water_destination; receiving_compartment; baseline_water_flow; attributed_water_flow; soil_water_retained; contained_wastewater; evaporated_water; water_balance_uncertainty; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | Use actual species/medium event measurements or validated matched activity factors with raw operands; establish incremental attribution against comparable retained-cell baseline and disclose confounders. Record whole-fluid and species views distinctly. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_prepare_gate | prepare | gate records owned by prepare | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; approval_id; cqa_plan; permit_jurisdiction; layer_id; zone_id; panel_id; weld_id; transfer_id; incoming_condition; qualified_condition; material_traceability; material_test; moisture_test; compaction_test; subgrade_survey; qualification_inspection; contact_barrier_component; seam_ndt; seam_destructive_test; repair_id; retest_record; penetration_inspection; anchorage_inspection; drain_inspection; gas_interface_inspection; erosion_vegetation_gate; acceptance_id; certification_id; signed_engineer; owner_authority; certified_date; accepted_net_developed_area; area_unit; slope_convention; survey_polygons; duplicate_surface_check; prepared_area; rejected_area; defects_closed; asbuilt_id; exclusions; uncertainty | Use actual approved plan/CQA records, calibrated surveys, material/layer tests and signed inspections. In prepare retain actual soil incoming versus moisture-conditioned/compacted state and qualified subgrade handoff before cap can proceed. In cap join this prior release, layer contacts, panel/weld tests/repairs, drain/gas/erosion completion and signed certification to unique final developed surface polygons. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_cap_stock | cap | stock records owned by cap | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; sku; lot_id; state; material_role; layer_id; transfer_id; attributed_opening; external_gross_receipts; tare; external_net_tare_gross_receipts; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt_link; return_condition; accounting_view; quantity; native_unit; wet_volume; wet_volume_unit; wet_density; wet_density_unit; wet_density_source; wet_mass; wet_mass_unit; dry_mass; dry_mass_unit; loose_volume; loose_volume_unit; compacted_volume; compacted_volume_unit; density; density_unit; density_state; density_method; density_source; wet_basis_water_fraction; dry_basis_water_ratio; moisture_method; moisture_source; loose_dry_density; loose_dry_density_unit; loose_dry_density_source; compacted_dry_density; compacted_dry_density_unit; compacted_dry_density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; water_source; water_event_id; supplied_water; directly_abstracted_water; incoming_moisture_water; soil_water_retained; water_closing; contained_wastewater; discharge_water; evaporated_water; water_destination; receiving_compartment; water_balance_uncertainty; uncertainty | Reconcile native SKU receipts, calibrated survey/weighing, issued/returned quantities and physical stocktake. Retain actual moisture/density states and sources; join soil/roll/pipe/layer records. Never sum native and converted views. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_cap_energy | cap | energy records owned by cap | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; fuel_sku; native_unit; attributed_opening; external_net_tare_gross_receipts; carried_closing; burned; burn_measurement; usable_outward_return; contained_nonburned_waste; uncontained_loss; recovered_closing; total_spill_audit; fate_completeness; unknown_loss; metered_electricity_import; metered_electricity_export; electricity_unit; generator_owner; upstream_scope; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | Use calibrated meter/fuel issue and stock records, direct measured burn or audited complete disjoint fates with independent uncertainty; investigate unknown losses. Obtain provider power/generator ownership and gross imports/exports. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_cap_service | cap | service records owned by cap | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; provider_id; completed_physical_result; result_gate; native_unit; service_quantity; upstream_scope; excluded_scope; resource_owner; asset_id; asset_native_unit; consuming_nodes; all_consumers; all_jobs; all_periods; job_driver; driver_unit; full_life_driver; observed_history; observed_life; evidenced_remainder; remainder_source; replacement_events; replacement_burdens; replacement_source; termination_basis; termination_source; end_of_life_basis; end_of_life_burden; end_of_life_source; manufacture_burden; maintenance_burden; representation; lifecycle_service_scope; uncertainty; sensitivity; update_trigger; update_record; observed_history_source; observed_life_source; route_id; mode; actual_load_mass_kg; actual_loaded_distance_km; empty_return_activity; load_state; transport_work_unit; conversion_factor; conversion_unit; conversion_source | Obtain physical completion records, provider resource coverage and full asset life evidence across all consumers. Attribute one actual driver consistently; reconstruct observed history plus evidenced remainder/replacement/termination/end-of-life if life is unfinished. Reconcile load-distance and empty legs to freight scope. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_cap_waste | cap | waste records owned by cap | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; stream_id; source_sku; originating_node; defect_id; rework_id; waste_class; waste_state; waste_composition; measured_quantity; native_unit; wet_dry_basis; waste_destination; treatment_provider; transfer_id; destination_receipt; retained_repair; external_return; recovered_closing; contained_nonburned_waste; total_spill_audit; density; density_unit; density_state; density_source; moisture; moisture_basis; moisture_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | Weigh or meter segregated actual waste, record state/contamination, producing node and chain of custody, manifests and treatment receipts. Match every off-spec zone/panel to retained repair, usable return or actual discard. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_cap_emission | cap | emission records owned by cap | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; species_id; substance_name; receiving_medium; compartment; source_event; baseline_period; baseline_activity; baseline_species_mass; job_activity; confounders; attribution_method; attributable_fraction; attribution_source; measured_species_mass; matched_activity; activity_unit; complete_species_factor; factor_numerator_unit; factor_denominator_unit; factor_basis; factor_source; factor_validity; measured_whole_fluid_release; release_unit; evidenced_species_fraction; composition_basis; composition_source; evidenced_release_fate; fate_basis; fate_source; release_basis; water_event_id; actual_water_release; water_release_unit; water_destination; receiving_compartment; baseline_water_flow; attributed_water_flow; soil_water_retained; contained_wastewater; evaporated_water; water_balance_uncertainty; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | Use actual species/medium event measurements or validated matched activity factors with raw operands; establish incremental attribution against comparable retained-cell baseline and disclose confounders. Record whole-fluid and species views distinctly. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |
| cp_cap_gate | cap | gate records owned by cap | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; approval_id; cqa_plan; permit_jurisdiction; layer_id; zone_id; panel_id; weld_id; transfer_id; incoming_condition; qualified_condition; material_traceability; material_test; moisture_test; compaction_test; subgrade_survey; qualification_inspection; contact_barrier_component; seam_ndt; seam_destructive_test; repair_id; retest_record; penetration_inspection; anchorage_inspection; drain_inspection; gas_interface_inspection; erosion_vegetation_gate; acceptance_id; certification_id; signed_engineer; owner_authority; certified_date; accepted_net_developed_area; area_unit; slope_convention; survey_polygons; duplicate_surface_check; prepared_area; rejected_area; defects_closed; asbuilt_id; exclusions; uncertainty | Use actual approved plan/CQA records, calibrated surveys, material/layer tests and signed inspections. In prepare retain actual soil incoming versus moisture-conditioned/compacted state and qualified subgrade handoff before cap can proceed. In cap join this prior release, layer contacts, panel/weld tests/repairs, drain/gas/erosion completion and signed certification to unique final developed surface polygons. | actual compatible native units; area m2 | Every transaction/event and phase close; certify final output once | Entire project campaign; for assets ALL consumers across full observed life or observed history plus evidenced remaining use, maintenance/replacement/termination/end-of-life | Named cell/project and exact node; no shared event duplicate | per reference flow | Traceable calibrated records, sources, uncertainty, signed checks and reconciled coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_area | all inventory rows | quantity_per_reference = attributable_native_quantity / A; A is positive certified unique net developed final cover area in m2; final accepted reference output is 1 m2. | attributable_native_quantity; A; cp_cap_gate | Native quantity per 1 m2 certified final cover |  |
| native_state | prep_soil; cap_soil; prepare_fuel; cap_fuel; erosion_vegetation | Convert only compatible actual states: wet_mass = wet_volume * wet_density; dry_mass = wet_mass * (1 - wet_basis_water_fraction); loose_volume * loose_dry_density = compacted_volume * compacted_dry_density for the same retained dry solids after separately recorded additions and losses. Dry-basis moisture requires dry_mass = wet_mass / (1 + dry_basis_water_ratio). Retain actual units, temperature, density/moisture method, batch, sources and uncertainty. These are alternative nonadditive views; do not equate loose and compacted volumes or add water twice. | wet_volume; wet_density; wet_mass; wet_basis_water_fraction; dry_basis_water_ratio; loose_volume; loose_dry_density; compacted_volume; compacted_dry_density | Compatible reconciled native-state quantities |  |
| fuel_fates | prepare_fuel; cap_fuel | Supplied fuel upstream is distinct from measured burned fuel for emissions. Use directly measured burn OR audited complete disjoint native-unit fates: S = burned + usable_outward_return + contained_nonburned_waste + uncontained_loss, after closing stock already removed in S. Retain independent uncertainty and investigate unknown loss; never infer combustion from an incomplete residual. Total spill is audit-only; recovered spill retained in closing is already closing. | S; burned; usable_outward_return; contained_nonburned_waste; uncontained_loss; carried_closing; cp_prepare_energy; cp_cap_energy | Measured burn and disjoint reconciled fates |  |
| species_release | prepare_air; prepare_water_soil; cap_air; cap_water_soil | species_mass = measured_species_mass OR matched_activity * complete_species_factor OR measured_whole_fluid_release * evidenced_species_fraction * evidenced_release_fate. Choose one basis per event/species/medium; do not multiply a complete species factor by composition/fate again. Require actual factor numerator/denominator units, source, validity, composition/fate source and measured incremental attribution. Whole-fluid and total-spill views are nonadditive. | measured_species_mass; matched_activity; complete_species_factor; measured_whole_fluid_release; evidenced_species_fraction; evidenced_release_fate | Actual species mass by receiving medium |  |
| freight_work | prepare_freight; cap_freight | transport_work_kg_km = sum(actual_load_mass_kg * actual_loaded_distance_km); retain actual route, mode, load state, required empty-return activity and coverage. If native upstream t*km is used, 1 t*km = 1000 kg*km. Do not add fuel/vehicle burdens already inside a complete freight service. | actual_load_mass_kg; actual_loaded_distance_km; empty_return_activity; upstream_scope | Compatible actual mass-distance transport work |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceability | All processes | Retain approved plans, cell identity/baseline, suppliers/material lots, actual acceptance gate and period-linked raw physical records; no fabricated numbers or numeric ranges. | Signed approvals, surveys and source records |
| coverage | All exchanges and assets | Document provider and shared-asset upstream scope, all-consumer life denominator, native supply/return fates, emission attribution and missing coverage with uncertainty and sensitivity. Missing material data blocks final production; identity support is not quantity evidence. | Resource coverage matrix and reconciled physical ledgers |
| comparability | Reference service | Require matching cell waste/baseline, climate/topography, cap layer and barrier design, LLDPE specification, certification gate and slope area convention. Do not infer equivalence from equal m2 or future landfill performance. | Declared project qualifiers and quality disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| acceptance_area | all processes | Require A > 0, unique surveyed net developed surface polygons, declared slope measurement convention, exact certification extent and date, signed acceptance, defects closed and functional_unit.reference_flow_link = certified_final_cover. Overlaps, roll supplies, GCL/drain areas, prepared subgrade, coupons, repairs and repeated tests cannot increase A. Unfinished or interim protected zones cannot be accepted by default. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| layer_quality | all processes | Require actual approved LLDPE plus low-permeability GCL or soil composite contact design, layer traceability and sequence, qualified subgrade, actual plan-required soil/layer and seam/repair/penetration/anchorage/drainage/gas test records, erosion/vegetation gate, as-builts and responsible certification. No borrowed historical case thickness/frequency/acreage or universal technology performance. Soil-only ET cover, new bottom liner and bare roll supply fail this scope. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| ledger_completeness | all processes | Require native SKU supply/return/waste/stock closure, compatible soil moisture-density states, fuel fate closure, actual species-medium release basis and baseline-versus-incremental attribution. Own provider and shared asset upstream scope across all consumers/periods; one representation and normalization only. Unknown material activity, identity, factor, return, life denominator or subcontractor resource coverage blocks a completed dataset; record performed/skipped checks and uncertainty. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| rework_period | all processes | Join node, cell/job, batch/panel/weld, event, campaign and period IDs. Reconcile prepare reconditioning and cap repair/retest loops, retained repairs versus waste/returns, temporary gas/water management, shared setup/cleaning and replacements/termination. A late accepted phase does not erase earlier unsuccessful resources; postclosure care stays separately disclosed. Resolve each concrete exchange identity and support unit before final exchange export; candidate semantic guidance is not publication-ready exchange data. | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for completed certified final landfill closure-cover service |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Declared compatible completed final-cover construction service per m2 at certification |
| excluded_use | New landfill/bottom liner, daily/intermediate/soil-only ET covers, landfill operation, later care, verified long-term avoided gas/leachate or ecological benefit claims |
| required_metadata | Cell/site/job and phase dates, retained baseline, actual closure/CQA plan and jurisdiction, LLDPE and barrier/component layer design, survey/slope convention and A, signed gate, resource ownership, upstream service and asset scope |
| required_quality_disclosure | Performed/skipped checks, unresolved concrete identities/supports, source limitations, measured versus factor data, stock/fuel/state reconciliation, incremental attribution, life denominator, uncertainty and missing coverage |
| update_trigger | Changed closure design, material SKU, baseline/gas-water interface, CQA/certification gate, area convention, provider coverage, emission evidence or asset life/replacement/termination evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-mswlf-closure-requirements | official_guidance | https://www.epa.gov/landfills/requirements-municipal-solid-waste-landfills-mswlfs | Closure plan, completed closure certification and separate postclosure care; actual applicable jurisdiction only. |
| frtr-landfill-soil-capping | official_guidance | https://www.frtr.gov/matrix-2019/Landfill-and-Soil-Capping/ | Project-specific cap layers, barrier/drain/gas functions and installation concerns; no historical numeric design defaults. |
| rid-em-rosehill-cqa-2006 | official_guidance | https://semspub.epa.gov/work/01/293114.pdf | RIDEM/Louis Berger, Rose Hill Landfill Superfund Site Phase II Remedial Action CQA Plan, 2006, introduction and contents: site-specific LLDPE/GCL/composite-drain cap and certification route, not universal MSWLF criteria. |
