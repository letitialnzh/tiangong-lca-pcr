---
pcr_id: pcr.existing-unbound-gravel-road-regravelling-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing unbound gravel road regravelling services

## 1. Scope and Applicability

This PCR covers one bounded regravelling repair contract on an existing structurally suitable, non-elevated unbound natural-gravel road. Scarify and reshape the retained surface, eliminate relevant potholes/rutting/high shoulders, restore the specified crown and drainage, then supply, equalize and spread specified natural wearing-course aggregate. Include moisture conditioning and mechanical compaction when used by the actual approved method, finish and hand over the identified chainages. FHWA sections 3.18–3.21 explain this sequence; their illustrative quantities are not universal specifications.

Exclude new road formation, structural subgrade reconstruction, asphalt/concrete surfacing, chemical stabilization or dust binders, recycled-asphalt/contaminated aggregate routes, new bridges/tunnels/culverts, traffic operation and a recurring maintenance programme. Required local roadside drainage correction belongs to this repair or to a documented, non-overlapping owner. A structurally unsuitable host is outside this route, rather than concealed by new gravel.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-unbound-gravel-road-regravelling-services |
| classification_refs | cpc:3.0:54211; narrower repair subset; classification does not establish product identity |
| covered_products | Accepted natural-gravel wearing-layer repair of a qualified existing unbound road segment |
| excluded_products | New roads and structural rebuilding; bound or chemically treated surfacing; recycled-asphalt route; subsequent traffic/maintenance |
| representative_product | One specified chainage-bounded road segment repaired and accepted after substrate preparation and regravelling |
| production_route | Retained host qualification → scarification/reshaping and drainage preparation gate → gross natural aggregate delivery, windrow/equalize/spread → actual moisture/roller operations → geometry, material and compaction acceptance |
| market_state | Completed site-specific repair service at signed client handover; existing road remains in situ |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted existing unbound gravel-road regravelling repair service |
| How much | 1 item: one actual repair contract segment with declared chainages, width and treated area; different segment sizes are not equivalent items |
| How well | Host qualifies; prepared crown/drainage accepted; specified aggregate grading/plasticity/moisture, uniform layer and actual contract geometry/compaction criteria met, defects closed |
| How long or cycle | One bounded repair campaign from site qualification through signed handover; declare start/end dates, every reporting period, and preparation/placement/rework phases. No promised future traffic life |
| reference_flow_link | `accepted_regravelling` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted existing unbound gravel-road regravelling repair service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Road ID; exact chainages/width/area; initial structural and surface condition; specified crown/drainage; aggregate source, natural origin, grading/plasticity and received moisture; actual spread/finished layer geometry and density test basis; actual water/roller method; acceptance criteria source/tolerances/results; dates, weather and signed repair handover |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| counted_contract | reference product | Number of items | item | Use 1 item only for the declared accepted contract segment, never one kilometre or one tonne of gravel. Record actual area, length, thickness and acceptance under cp_accepted_regravelling; geometry intensities are derived disclosures. |
| aggregate_state | new_aggregate; aggregate_return; rejected_layer | Mass | kg | Keep received gross wet mass, installed material, actual return and closing stock separately; record moisture and any dry-mass conversion from the same lot. Loose volume is not finished volume; measure density/state before conversion. |
| native_service_units | prep_plant; finish_plant; aggregate_haul; finish_water_product; finish_water_abstraction; prep_electricity; finish_electricity | Actual native property | h; tkm; m3; kWh | Keep actual duration, freight, water-volume and electricity units; verify their support chains before dataset binding. Volume-to-mass requires measured lot water/material density with temperature and moisture basis; no count surrogate, universal shrinkage, fuel or emissions factor. |
| receipt_mass_basis | new_aggregate; host_surplus; prep_removed_waste; aggregate_return; rejected_layer | Mass | kg | For receipts/issues and outward dispatch, gross means total material before netting returns or other outward transfers, after removing vehicle/container tare. Where gross_kg and tare_kg record weighed vehicle/container and tare, subtract tare_kg from gross_kg to obtain material mass for the balance; never enter gross vehicle mass as material. Retain scale accuracy and matched moisture/state. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified existing unbound natural-gravel road, with recorded distress, crown/drainage and structural suitability; supplied new aggregate at its declared upstream gate |
| starting_condition_role | Retained host and its on-site stock, not newly procured aggregate or a newly constructed road output |
| product_classification_scope | Bounded repair subset of non-elevated road construction service; no automatic whole-road construction scope |
| recursive_input_rule | A prior road repair dataset may document retained condition but is not a new same-category purchase. Record actual subcontracted preparation at its real interface once, with an explicit owner and included/excluded burdens. |
| upstream_dataset_requirement | Actual aggregate supply, energy, logistics and plant/support data at matching gates and units, with coverage of production and relevant lifecycle burdens; missing coverage remains a data gap |
| disclosure | Declare repair chainages/periods, retained host boundary, drainage ownership, supplier haul coverage, actual rework/exits, stock carry-forward and plant lifecycle attribution; no avoided-replacement credit |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| bounded_host | prepare_host | Original host construction is outside this incremental repair. Include actual scarification, reshaping, relevant drainage correction and handling/removal; on-site retained material is not a free purchased input or negative waste. | fhwa-gravel-2015 |
| physical_gates | prepare_host; regravel_finish | Preparation hands off the same identified in-situ road only after crown/drainage and distress correction meet actual criteria. Placement finishes the new layer on that parent state. Records/receipts are evidence, not additional process outputs. | fhwa-gravel-2015 |
| supply_ownership | regravel_finish | Include upstream specified aggregate production and all actual inbound/return/waste and equipment/water logistics once under the whole-repair lead ledger. Do not repeat quarry processing or supplier-included haul as foreground operation. Receipts are gross; retain closing stock with carried-forward burden, separate true outward returns. | fhwa-gravel-2015 |
| asset_boundary | prep_plant; finish_plant | For each shared grader, roller, bowser and traffic-control tool identify both nodes and other jobs/reporting periods. Cover manufacture, mobilization, use/maintenance, replacement and end-of-life through actual provider scope or a complete-life asset ledger; disclose gaps instead of assigning an arbitrary lifetime. |  |
| water_release | regravel_finish | Separate purchased water from actual environmental abstraction and internal reuse. Record captured runoff/wastewater by actual custody; record only actual water/substances reaching their stated receiving medium as elementary releases. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual road-preparation plant and tool service (`prep_plant`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Record each actual grader, scarifier, drainage-handling machine and traffic-control/tool service separately, with provider, asset and scope. Embedded preparation operations remain here.

- Collection subject: Actual road-preparation plant and tool service
- Flow property / unit: Duration / h
- Amount rule: Actual attributable operating/standby/mobilization service time; expand by asset/provider; cp_prep_plant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_plant`

Range evidence need: Collect actual asset-hour interval and attribution uncertainty for this road condition, chainages and method; no generic productivity or lifespan.

#### Collection requirement: Actual preparation-machine fuel by supplied grade (`prep_fuel`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.


Actual upstream fuel supplied to this node, before usable outward exits. Apply fuel_supply_fate to retain the supply burden of nonreturned waste/loss and derive burned activity separately. Keep actual fuel grade, equipment duty, provider coverage, density/state and measurement uncertainty.

- Collection subject: Actual preparation-machine fuel by supplied grade
- Flow property / unit: Mass / kg
- Amount rule: Actual upstream supplied fuel mass G_fuel divided once by the independently measured positive accepted lot quantity D_fuel in the declared reference unit; retain all exclusive fuel outlets and derive actual burned B_fuel separately under section 8.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_fuel`

Range evidence need: Collect logged fuel-use interval by actual machine load/idle and repair lengths; volume requires actual density and temperature.

#### Collection requirement: Actual usable retained-host surplus transferred outward (`host_surplus`)

Process / prospective direction / type: `prepare_host` / `outputs` / `product`.

Only an actual outward usable-material lot with documented product custody is a product output. On-site retained material and closing stock are internal balances.

- Collection subject: Actual usable retained-host surplus transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Gross measured outward usable surplus by identity/destination; documented no-exit when absent; cp_host_surplus.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_host_surplus`

Range evidence need: Collect weighed outward lot interval/moisture and uncertainty; no assumed reusable fraction or substitution credit.

#### Collection requirement: Actual preparation dust released to air by particle fraction (`prep_dust`)

Process / prospective direction / type: `prepare_host` / `outputs` / `elementary`.

Only measured/model-supported mineral particulate release during scarification and reshaping; expand into the actual measured particle fractions and outdoor-air compartment.

- Collection subject: Actual preparation dust released to air by particle fraction
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual campaign species/fraction mass from measured rates and actual durations or documented applicable activity/factor method; distinguish this calculation from direct measurement; cp_prep_dust.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_dust`

Range evidence need: Collect substance/particle-size-specific monitored or documented method uncertainty with actual moisture/activity/control data; no generic PM identity or default factor.

#### Collection requirement: Actual preparation combustion exhaust species (`prep_exhaust`)

Process / prospective direction / type: `prepare_host` / `outputs` / `elementary`.

Record each actual species and receiving air compartment, only where combustion is foreground-owned. Fuel mass is not exhaust mass.

- Collection subject: Actual preparation combustion exhaust species
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual campaign species/fraction mass from measured rates and actual durations or documented applicable activity/factor method; distinguish this calculation from direct measurement; cp_prep_exhaust.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_exhaust`

Range evidence need: Collect actual fuel/engine/emission-control and species-specific factor uncertainty or measured interval; no generic exhaust exchange.

#### Collection requirement: Actual whole-repair logistics outside supplier coverage (`aggregate_haul`)

Process / prospective direction / type: `regravel_finish` / `inputs` / `product`.

One lead-node logistics ledger under regravel_finish owns each actual repair freight leg once: new aggregate, preparation usable surplus/waste, finishing returns/waste, water and equipment mobilization. Expand actual carrier/vehicle/cargo identities. Preparation material exits still belong to prepare_host; their transport burden is assigned through the leg ownership matrix, without another procurement node.

- Collection subject: Actual whole-repair logistics outside supplier coverage
- Flow property / unit: Transport service / tkm
- Amount rule: Actual cargo mass and route-distance service by actual leg, with declared load/empty-return allocation and supplier/provider coverage; cp_aggregate_haul.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aggregate_haul`

Range evidence need: Collect cargo/distance and loading/empty-run intervals for each owned actual repair leg, including preparation exits, water and equipment; no default distance/utilization.

#### Collection requirement: Actual placing and compaction plant and tool service (`finish_plant`)

Process / prospective direction / type: `regravel_finish` / `inputs` / `product`.

Record actual grader/equalizing equipment, water bowser, roller and traffic-control/tool providers separately. Roller/water inclusion follows actual approved operations.

- Collection subject: Actual placing and compaction plant and tool service
- Flow property / unit: Duration / h
- Amount rule: Actual attributable service hours by asset/provider including actual idle and mobilization attribution; cp_finish_plant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_plant`
- Sources: `fhwa-gravel-2015`

Range evidence need: Collect operating-time and complete-life attribution uncertainty for actual passes, layer state and asset conditions; no assumed roller count, lifespan or productivity.

#### Collection requirement: Actual environmental water abstracted for this repair (`finish_water_abstraction`)

Process / prospective direction / type: `regravel_finish` / `inputs` / `elementary`.

Only actual direct abstraction from the identified environmental source is elementary input; record any actual pumping/treatment here without duplication in purchased water.

- Collection subject: Actual environmental water abstracted for this repair
- Flow property / unit: Volume / m3
- Amount rule: Actual metered direct abstraction by water source; cp_finish_water_abstraction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_water_abstraction`

Range evidence need: Collect source-specific abstraction interval and meter/permit evidence, actual source state; no assumed consumption or water kg conversion.

#### Collection requirement: Actual usable new aggregate returned outward (`aggregate_return`)

Process / prospective direction / type: `regravel_finish` / `outputs` / `product`.

Only actual outward usable aggregate in product custody is a return. On-site excess/closing stock and rejected material in waste custody are different states.

- Collection subject: Actual usable new aggregate returned outward
- Flow property / unit: Mass / kg
- Amount rule: Gross actual outward usable return by lot/recipient, without prior netting from input; cp_aggregate_return.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aggregate_return`

Range evidence need: Collect weighed actual return interval, moisture and custody uncertainty; no default return rate or avoided-aggregate credit.

#### Collection requirement: Actual captured runoff or wastewater transferred for treatment (`captured_runoff`)

Process / prospective direction / type: `regravel_finish` / `outputs` / `waste`.

Only actual captured moisture-operation runoff/cleanout water leaving to a wastewater/treatment receiver is a waste exchange; identify suspended materials and actual liquid state.

- Collection subject: Actual captured runoff or wastewater transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual captured outward wastewater mass by stream/receiver, with volume-to-mass only using measured density; cp_captured_runoff.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_captured_runoff`

Range evidence need: Collect measured captured volume/mass interval, liquid density/solids and custody uncertainty; do not assume all added water becomes wastewater.

#### Collection requirement: Actual layer-placement dust released to air by particle fraction (`finish_dust`)

Process / prospective direction / type: `regravel_finish` / `outputs` / `elementary`.

Separate actual mineral dust species/fractions and receiving air compartment from aggregate losses, captured dust and later traffic emissions outside the repair campaign.

- Collection subject: Actual layer-placement dust released to air by particle fraction
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual campaign species/fraction mass from measured rates and actual durations or documented applicable activity/factor method; distinguish this calculation from direct measurement; cp_finish_dust.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_dust`

Range evidence need: Collect actual activity, moisture, control and fraction-specific emission uncertainty; no generic PM UUID or future traffic default.

#### Collection requirement: Actual layer-finishing combustion exhaust species (`finish_exhaust`)

Process / prospective direction / type: `regravel_finish` / `outputs` / `elementary`.

Expand actual fuel-combustion releases into each verified species/air compartment only for foreground-owned engine operation.

- Collection subject: Actual layer-finishing combustion exhaust species
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual campaign species/fraction mass from measured rates and actual durations or documented applicable activity/factor method; distinguish this calculation from direct measurement; cp_finish_exhaust.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_exhaust`

Range evidence need: Collect engine/fuel/control and species-specific measurement/factor uncertainty; do not equate fuel mass to emission mass.

#### Collection requirement: Actual water released from repair to its environmental medium (`finish_water_release`)

Process / prospective direction / type: `regravel_finish` / `outputs` / `elementary`.

Separate actual evaporation, infiltration or discharge only where measured or supported by a closed water balance and actual receiving medium. Dissolved/suspended pollutants require their own species and quantities.

- Collection subject: Actual water released from repair to its environmental medium
- Flow property / unit: Volume / m3
- Amount rule: Actual water volume released per identified pathway; cp_finish_water_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_water_release`

Range evidence need: Collect measured/pathway-supported volume intervals and water-balance uncertainty; added water is not automatically consumption or a pollutant release.

#### Collection requirement: Actual placing, water-bowser and roller fuel by grade (`finish_fuel`)

Process / prospective direction / type: `regravel_finish` / `inputs` / `product`.

Resolve each actual SKU, composition/state and custody into a separate atomic exchange. This requirement is not a generic pooled flow. A genuinely complete purchased assembly may use its own verified package boundary; its already included parts are not additional purchases.

Actual upstream fuel supplied to this node, before usable outward exits. Apply fuel_supply_fate to retain the supply burden of nonreturned waste/loss and derive burned activity separately. Keep actual fuel grade, equipment duty, provider coverage, density/state and measurement uncertainty.

- Collection subject: Actual placing, water-bowser and roller fuel by grade
- Flow property / unit: Mass / kg
- Amount rule: Actual upstream supplied fuel mass G_fuel divided once by the independently measured positive accepted lot quantity D_fuel in the declared reference unit; retain all exclusive fuel outlets and derive actual burned B_fuel separately under section 8.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_fuel`

Range evidence need: Collect actual consumption interval and allocation uncertainty, measured density/temperature for volume conversion; no default fuel per area.

#### Collection requirement: Actual preparation removals transferred as waste (`prep_removed_waste`)

Process / prospective direction / type: `prepare_host` / `outputs` / `waste`.

Resolve each actual SKU, composition/state and custody into a separate atomic exchange. This requirement is not a generic pooled flow. A genuinely complete purchased assembly may use its own verified package boundary; its already included parts are not additional purchases.

Separate each actual removed sediment/soil/gravel/debris waste stream by material, waste status and treatment destination; never aggregate heterogeneous removals into one exchange.

- Collection subject: Actual preparation removals transferred as waste
- Flow property / unit: Mass / kg
- Amount rule: Actual gross outward waste quantities by identified stream; cp_prep_removed_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_removed_waste`

Range evidence need: Collect stream-specific weighed quantity bounds and uncertainty, moisture/state and disposal evidence; no default removal fraction.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare_host | Scarify, reshape and prepare retained road | required | Qualified existing host requires documented preparation before new layer | Independent forming responsibility: distressed existing road geometry to accepted scarified/reshaped crown and drainage handoff | Same actual contract chainages and prepared area |
| regravel_finish | Place and finish new unbound wearing layer | required | After preparation gate; actual water/roller operations when method calls for them | Surface finishing on retained prepared parent: gross aggregate delivery, embedded equalizing/spreading, actual compaction and accepted repair | 1 item accepted chainage-bounded repair |

The retained host handoff is an internal in-situ state, not a new asset or a second final service. Internal preparation failure loops within prepare_host; rejected grading, layer geometry or compaction loops within regravel_finish (or returns to preparation only when physically required). Keep the producing node, repeated operations and true boundary exits in the event ledger. Equalizing is embedded finishing, not an independently marketed formulation. Preparation owns the independent road-geometry transformation; embedded scarification/conditioning is not a separate treatment node. Layer finishing owns its final geometry, without an additional fabricated or assembled product node.

### Process: Scarify, reshape and prepare the retained road (`prepare_host`)

#### Inputs

##### Product flows

###### Actual preparation electricity supply (`prep_electricity`)

Include actual metered purchased electricity for this node when used, separately by supply and without duplicating plant/provider coverage.

- Selected flow: Actual preparation electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered electricity; documented no-use when absent; cp_prep_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_electricity`

Range evidence need: Collect campaign electricity interval from meters/job records with meter accuracy and allocation; no assumed grid or consumption.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared existing road at regravelling handoff (`prepared_host`)

This internal in-situ host interface retains original road identity and material; it is not new road production, a purchased road or a second final repair.

- Selected flow: Prepared existing road at regravelling handoff
- Flow property / unit: Number of items / item
- Amount rule: Actual independently recorded approved host handoff count for the declared segment/state divided by the positive accepted contract-segment count N_host; pair the same transfer IDs and state at both nodes. A same-segment ratio of one requires actual gate evidence, never default assignment from final output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepared_host`
- Sources: `fhwa-gravel-2015`

Range evidence need: Obtain actual gate counts, segment geometry and survey/inspection uncertainty; an observed count ratio of one is not a generic intermediate-quantity bound.

##### Waste flows

##### Elementary flows

### Process: Place and finish the new unbound wearing layer (`regravel_finish`)

#### Inputs

##### Product flows

###### Prepared existing road received for new wearing layer (`host_to_finish`)

The same retained in-situ segment is received across the internal preparation gate; it carries actual preparation burdens once and no new whole-road construction charge.

- Selected flow: Prepared existing road received for new wearing layer
- Flow property / unit: Number of items / item
- Amount rule: Actual independently recorded approved host handoff count for the declared segment/state divided by the positive accepted contract-segment count N_host; pair the same transfer IDs and state at both nodes. A same-segment ratio of one requires actual gate evidence, never default assignment from final output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_host_to_finish`
- Sources: `fhwa-gravel-2015`

Range evidence need: Independently establish linked actual handoff count/state, transfer survey uncertainty and gate tolerances; never assume acceptance or a quantity equal to the final reference.

###### Actual specified natural wearing-course aggregate at supply gate (`new_aggregate`)

Each actual natural quarried/crushed or gravel aggregate lot must match its supplied grading/origin/moisture and wearing-course use; do not replace it with a quarry excavation or asphalt flow.

- Selected flow: Actual specified natural wearing-course aggregate at supply gate
- Flow property / unit: Mass / kg
- Amount rule: Gross actual received mass by supplier/lot, before returns; cp_new_aggregate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_new_aggregate`
- Sources: `fhwa-gravel-2015`

Range evidence need: Collect lot receipt/issue mass interval, moisture, loose/placed density and specified grading/plasticity limits; FHWA shrinkage/thickness examples are not defaults.

###### Actual purchased water for moisture conditioning (`finish_water_product`)

Only externally supplied water crosses as a product input; distinguish its source/treatment and any included supply transport from actual environmental abstraction and internal reuse.

- Selected flow: Actual purchased water for moisture conditioning
- Flow property / unit: Volume / m3
- Amount rule: Gross actual purchased water volume issued to this repair; cp_finish_water_product.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_water_product`
- Sources: `fhwa-gravel-2015`

Range evidence need: Collect metered purchased-volume interval, accuracy and actual distribution losses; any kg conversion requires actual density/temperature.

###### Actual layer-finishing electricity supply (`finish_electricity`)

Meter actual electricity used in finishing/testing when present, by supply and coverage; do not duplicate provider included electricity.

- Selected flow: Actual layer-finishing electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered electricity; documented non-use if absent; cp_finish_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_electricity`

Range evidence need: Collect measured kWh interval and allocation uncertainty; no assumed grid mix or area factor.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted existing unbound gravel-road regravelling repair service (`accepted_regravelling`)

The actual chainage-bounded repair is complete at signed handover on the retained host, with specified new natural wearing layer and closed defects. No new complete road or future traffic service is produced.

- Selected flow: Accepted existing unbound gravel-road regravelling repair service
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accepted_regravelling`
- Sources: `fhwa-gravel-2015`

Range evidence need: The one-accepted-segment definition is exact; collect geometry, density/moisture, material and acceptance-test intervals and specified tolerances. No universal layer thickness or road-life interval.

##### Waste flows

###### Actual rejected aggregate/layer material removed as waste (`rejected_layer`)

Record each actual rejected natural-aggregate stream removed outward in waste custody. Regraded or recompacted material remaining on site loops within this node and is not a waste export or accepted output.

- Selected flow: Actual rejected aggregate/layer material removed as waste
- Flow property / unit: Mass / kg
- Amount rule: Actual outward rejected-material mass by stream and destination; cp_rejected_layer.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_layer`

Range evidence need: Collect stream-specific rejection/removal mass and uncertainty from defects and waste tickets; no default reject percentage.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_repair | accepted_regravelling | One intended final repair service; rejected chainages are not accepted output. Retain all actual failed passes, rework, retests and their resources in the eventual accepted repair; no avoided-new-road or substitution credit. |  |
| asset_attribution | prep_plant; finish_plant | Use actual asset logs to enumerate consuming nodes, other jobs and reporting periods. Allocate complete-life manufacture, maintenance/replacement and end-of-life burdens using justified measured service/utilization over the documented service boundary; retain idle/mobilization attribution and termination assumptions. Event/asset IDs have one owner. Provider service coverage and separately modelled plant/fuel must not overlap. Completed asset lives use observed historical service. An in-service asset may use evidence-based prospective remaining service, replacement/termination and end-of-life scenarios: distinguish forecasts from observations, disclose the complete-life utilization denominator, source, uncertainty/sensitivity and update trigger. Do not invent a future retirement date or default lifespan; missing justified full coverage or denominator, rather than continued operation, is the data gap. |  |
| period_custody | all inventory rows | Link receipts/issues, host handoff, rework, returns, acceptance and asset replacements/termination to dated periods. Reconcile opening plus gross receipts with installation, outward returns/waste, measured losses and closing stock. Carry stock and its burden into later periods once; never net a return then record it again as outward flow. |  |
| outward_material | host_surplus; aggregate_return; prep_removed_waste; rejected_layer | Classify each actual outward lot by legal custody and destination: usable product return/surplus versus waste versus actual environmental release. Recovery or sale does not establish automatic coproduct credit; disclose any chosen allocation with evidence and keep burdens/transport ownership closed. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_plant | prepare_host | Actual road-preparation plant and tool service | Actual site/supplier record | asset_id; provider; task; event_id; start_time; end_time; service_hours_h; idle_hours_h; other_job_consumers; period; manufacture_maintenance_replacement_end_of_life_scope; utilization_denominator; attribution_share | Use meter/job logs and provider scope; enumerate this node, finishing and other contracts/periods, then attribute complete-life service consistently with asset_attribution. | h | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Retain full life phase evidence, replacement/termination decisions and single ownership of fuel/plant service; Duration support still requires confirmation. Completed asset lives use observed historical service. An in-service asset may use evidence-based prospective remaining service, replacement/termination and end-of-life scenarios: distinguish forecasts from observations, disclose the complete-life utilization denominator, source, uncertainty/sensitivity and update trigger. Do not invent a future retirement date or default lifespan; missing justified full coverage or denominator, rather than continued operation, is the data gap. |
| cp_prep_fuel | prepare_host | Actual preparation-machine fuel by supplied grade | Actual site/supplier record | fuel_grade; asset_id; period; opening_kg; gross_issues_kg; closing_kg; other_job_kg; density_kg_per_m3; temperature_C; fuel_service_owner; outward_return_kg; outward_transfer_kg; transfer_owner; spill_kg; spill_medium_or_waste_receiver; spill_treatment; actual_consumed_kg; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | Reconcile issues, tanks and job meter logs; attribute actual shared consumption to this node once, retaining calibration and conversion evidence. Close opening stock plus gross issues against actual consumption, closing stock, true outward return/transfer and spilled material. Link every actual return/transfer/spill to a separate real product/waste/elementary exchange as its actual custody requires; never include that mass in combustion. Supply and burn are separate under fuel_supply_fate; collect every exclusive outlet, actual denominator and its unit, keep nonreturned waste/loss supply burdens, and report missing fates. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Fuel receipts and measured density; no default consumption or combustion factor. No missing disposition treated as consumed fuel; record unresolved balance gap. |
| cp_prep_electricity | prepare_host | Actual preparation electricity supply | Actual site/supplier record | meter_id; supplier; event_id; start_kWh; end_kWh; period; other_job_kWh; attribution_share; service_scope | Read calibrated meters or traceable supplier submeter records and assign unique node/event ownership. | kWh | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Native kWh remains; exact Energy property support is a separately declared gap. |
| cp_prepared_host | prepare_host | Prepared existing road at regravelling handoff | Actual site/supplier record | road_id; segment_id; start_chainage_m; end_chainage_m; width_m; area_m2; crown_percent; crossfall_percent; longitudinal_grade_percent; distress; drainage_scope_owner; criterion_source; criterion_tolerance; inspection_result; gate_date; transfer_id | Survey actual chainages, widths and levels; inspect corrected distress and drainage against contract criteria and record the signed pre-spread gate paired with host_to_finish. | item | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Retain structural qualification, measured geometry/units and tolerances; failed preparation stays here and carries repeated burdens. |
| cp_host_surplus | prepare_host | Actual usable retained-host surplus transferred outward | Actual site/supplier record | lot_id; material_identity; gross_kg; tare_kg; moisture_percent; destination; product_custody; period; dispatch_id; transport_owner | Weigh actual dispatched usable surplus and retain recipient/product-custody evidence; do not also classify the same lot as waste. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Calibrated weighing, destination and treatment of retained burden; no negative virgin aggregate input. For receipts/issues and outward dispatch, gross means total material before netting returns or other outward transfers, after removing vehicle/container tare. Where gross_kg and tare_kg record weighed vehicle/container and tare, subtract tare_kg from gross_kg to obtain material mass for the balance; never enter gross vehicle mass as material. Retain scale accuracy and matched moisture/state. |
| cp_prep_removed_waste | prepare_host | Actual preparation removals transferred as waste | Actual site/supplier record | waste_id; substance_material; waste_status; gross_kg; tare_kg; moisture_percent; producing_task; period; carrier; receiving_facility; treatment; transport_owner | Use waste transfer/weighbridge records linked to actual preparation tasks and destinations; reconcile retained material and product exits independently. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Actual custody/type, receiver and haul ownership; all preparation/rework waste retained in repair burden. For receipts/issues and outward dispatch, gross means total material before netting returns or other outward transfers, after removing vehicle/container tare. Where gross_kg and tare_kg record weighed vehicle/container and tare, subtract tare_kg from gross_kg to obtain material mass for the balance; never enter gross vehicle mass as material. Retain scale accuracy and matched moisture/state. |
| cp_prep_dust | prepare_host | Actual preparation dust released to air by particle fraction | Actual site/supplier record | event_id; activity; material_identity; particle_fraction; medium; mass_kg; sampling_method; detection_limit; actual_moisture_percent; control_state; period; factor_source; uncertainty; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | Measure emissions or use a documented applicable method with actual activity; distinguish generated dust, captured dust and actual atmospheric release. Retain actual method/factor publication or primary test reference, its units, technology/fuel/material/moisture/control and geography applicability, actual activity inputs, sampling extrapolation and propagated uncertainty. A sampled or factor-derived campaign amount is calculated, not a directly measured total. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Fraction/medium and method suitability; never convert removed gravel mass automatically to airborne dust. |
| cp_prep_exhaust | prepare_host | Actual preparation combustion exhaust species | Actual site/supplier record | asset_id; fuel_grade; species; medium; emission_mass_kg; activity; engine_control; method_source; uncertainty; period; service_scope_owner; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | Use actual engine/fuel records and a documented applicable species method or measurement; retain exclusions already covered by provider. Retain actual method/factor publication or primary test reference, its units, technology/fuel/material/moisture/control and geography applicability, actual activity inputs, sampling extrapolation and propagated uncertainty. A sampled or factor-derived campaign amount is calculated, not a directly measured total. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Substance identity and receiving compartment; no unsourced oxidation/emission factors. |
| cp_host_to_finish | regravel_finish | Prepared existing road received for new wearing layer | Actual site/supplier record | transfer_id; road_id; segment_id; start_chainage_m; end_chainage_m; area_m2; preparation_gate_date; criterion_source; criterion_tolerance; receiving_inspection; period | Match transfer ID and actual surveyed segment to the preparation handoff; check physical condition before spreading. | item | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | No second procurement/upstream road charge; preserve preparation burdens and no duplicate reference output. |
| cp_new_aggregate | regravel_finish | Actual specified natural wearing-course aggregate at supply gate | Actual site/supplier record | lot_id; supplier; natural_origin; material_grade; grading_test; plasticity_test; gross_kg; tare_kg; moisture_percent; loose_density_kg_per_m3; placed_density_kg_per_m3; receipt_date; installed_kg; outward_return_kg; waste_kg; closing_stock_kg; source_gate; haul_coverage | Reconcile weighbridge gross receipts with tickets, actual spread/installed material, outward returns/rejections and closing stock; measure state-specific density before volume conversion. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Traceable lot quality and calibrated scales; no net-then-return duplication, retained stock carries burden. For receipts/issues and outward dispatch, gross means total material before netting returns or other outward transfers, after removing vehicle/container tare. Where gross_kg and tare_kg record weighed vehicle/container and tare, subtract tare_kg from gross_kg to obtain material mass for the balance; never enter gross vehicle mass as material. Retain scale accuracy and matched moisture/state. |
| cp_aggregate_haul | regravel_finish | Actual whole-repair logistics outside supplier coverage | Actual site/supplier record | leg_id; producing_node; leg_owner; cargo_lot_asset_id; carrier; vehicle; source; destination; cargo_t; distance_km; empty_distance_km; loading_basis; period; supplier_provider_scope | Use one repair-wide logistics ledger led by regravel_finish; reconcile actual dispatch/carrier records and producing_node/leg_owner matrix for preparation/finishing exits, supplies and equipment mobilization. Compute actual tonne-kilometre service with actual method for load/empty legs; exclude supplier/provider-included legs. | tkm | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Unique leg_id once, producing node and lead owner explicit; material exits retain own node, logistics amounts and burdens are not repeated there. Actual cargo/distance units; Transport support unverified. |
| cp_finish_water_product | regravel_finish | Actual purchased water for moisture conditioning | Actual site/supplier record | water_supplier; supply_state; meter_id; received_m3; issued_m3; closing_m3; return_m3; internal_reuse_m3; temperature_C; density_kg_per_m3; period; supply_transport_scope | Read calibrated receipt/issue meters or traceable bowser delivery records, reconcile tank stock and actual moisture operations; internal recirculation is not a new supply. | m3 | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Do not assume rainfall, purchased water or abstraction equivalent; actual zero-use requires method evidence. |
| cp_finish_water_abstraction | regravel_finish | Actual environmental water abstracted for this repair | Actual site/supplier record | source_id; environmental_compartment; permit; meter_id; abstracted_m3; period; reuse_m3; pump_energy_owner; temperature_C; density_kg_per_m3 | Read calibrated abstraction meters and source/permit records, distinguish environmental withdrawal from purchased supply and reuse. | m3 | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Actual source medium, water support and unit chain required; no use documented explicitly. |
| cp_finish_plant | regravel_finish | Actual placing and compaction plant and tool service | Actual site/supplier record | asset_id; provider; event_id; operation; start_time; end_time; service_hours_h; idle_hours_h; pass_count; other_node_job_consumers; period; lifecycle_scope; utilization_denominator; attribution_share | Use actual hour/task logs and provider coverage, paired with the shared asset ledger; cover manufacture, maintenance/replacement and end-of-life over all jobs/periods once. | h | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | No omitted capital phases or duplicate separately modelled fuel; actual replacement/termination and coverage gaps retained. Completed asset lives use observed historical service. An in-service asset may use evidence-based prospective remaining service, replacement/termination and end-of-life scenarios: distinguish forecasts from observations, disclose the complete-life utilization denominator, source, uncertainty/sensitivity and update trigger. Do not invent a future retirement date or default lifespan; missing justified full coverage or denominator, rather than continued operation, is the data gap. |
| cp_finish_fuel | regravel_finish | Actual placing, water-bowser and roller fuel by grade | Actual site/supplier record | fuel_grade; asset_id; event_id; period; opening_kg; issues_kg; closing_kg; other_job_kg; density_kg_per_m3; temperature_C; service_scope_owner; outward_return_kg; outward_transfer_kg; transfer_owner; spill_kg; spill_medium_or_waste_receiver; spill_treatment; actual_consumed_kg; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | Reconcile fuel issues, stock and machine activity; include repeated spread/compaction work and uniquely attribute shared consumption. Close opening stock plus gross issues against actual consumption, closing stock, true outward return/transfer and spilled material. Link every actual return/transfer/spill to a separate real product/waste/elementary exchange as its actual custody requires; never include that mass in combustion. Supply and burn are separate under fuel_supply_fate; collect every exclusive outlet, actual denominator and its unit, keep nonreturned waste/loss supply burdens, and report missing fates. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Calibrated measures and real lot density; no automatic exhaust equivalence. No missing disposition treated as consumed fuel; record unresolved balance gap. |
| cp_finish_electricity | regravel_finish | Actual layer-finishing electricity supply | Actual site/supplier record | meter_id; supplier; event_id; opening_kWh; closing_kWh; period; other_job_kWh; attribution_share; service_scope | Read actual calibrated meters/submeters and traceable job records; include rework and testing where owned. | kWh | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Native kWh retained; Energy support chain and supplier identity require confirmation. |
| cp_accepted_regravelling | regravel_finish | Accepted existing unbound gravel-road regravelling repair service | Actual site/supplier record | road_id; segment_id; start_chainage_m; end_chainage_m; width_m; treated_area_m2; layer_thickness_mm; crown_percent; longitudinal_grade_percent; moisture_percent; compacted_density_kg_per_m3; density_test_method; grading; plasticity; actual_water_roller_method; weather; criterion_source; criterion_tolerance; test_result; defect_id; rework_closeout; handover_date; reporting_period; client_signoff | Survey the actual finished segment and take prescribed material/geometry/moisture/compaction tests against current contract criteria; retain signed acceptance and all defect/retest closure. Record actual chainages/areas as qualifiers, not count-equivalent output. | item | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | No unaccepted chainage counted, no universal performance target; full preparation/repair/rework burden retained. |
| cp_aggregate_return | regravel_finish | Actual usable new aggregate returned outward | Actual site/supplier record | dispatch_id; lot_id; material_identity; gross_kg; tare_kg; moisture_percent; recipient; product_custody; transport_owner; period; input_receipt_id | Use weighed dispatch/recipient records, reconcile against gross new_aggregate receipts and closing stock; retain the actual burden/return treatment once. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Do not export retained stock or classify the same rejected lot twice. For receipts/issues and outward dispatch, gross means total material before netting returns or other outward transfers, after removing vehicle/container tare. Where gross_kg and tare_kg record weighed vehicle/container and tare, subtract tare_kg from gross_kg to obtain material mass for the balance; never enter gross vehicle mass as material. Retain scale accuracy and matched moisture/state. |
| cp_rejected_layer | regravel_finish | Actual rejected aggregate/layer material removed as waste | Actual site/supplier record | defect_id; originating_event; stream_id; material_identity; reason; rework_path; gross_kg; tare_kg; moisture_percent; waste_status; recipient; treatment; transport_owner; period | Link nonconforming grading/geometry/compaction to actual rework or removal records and weigh outward waste; include replacement aggregate and repeated operations in the repair. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Close every rejected path; no duplication with usable return, on-site retained stock or actual dust release. For receipts/issues and outward dispatch, gross means total material before netting returns or other outward transfers, after removing vehicle/container tare. Where gross_kg and tare_kg record weighed vehicle/container and tare, subtract tare_kg from gross_kg to obtain material mass for the balance; never enter gross vehicle mass as material. Retain scale accuracy and matched moisture/state. |
| cp_captured_runoff | regravel_finish | Actual captured runoff or wastewater transferred for treatment | Actual site/supplier record | stream_id; receiver; treatment; captured_m3; mass_kg; density_kg_per_m3; temperature_C; solids_test; waste_custody; period; transport_owner | Read actual tank/weighing and receiver records; reconcile added water, moisture retained, reuse and actual release with uncertainty. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Waste destination and density evidence; no double counting as elementary water/pollutant release. |
| cp_finish_dust | regravel_finish | Actual layer-placement dust released to air by particle fraction | Actual site/supplier record | event_id; operation; aggregate_lot; substance; particle_fraction; medium; mass_kg; activity; moisture_percent; controls; sampling_method; method_source; uncertainty; period; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | Use actual field sampling or justified method with actual operation inputs; include rework emissions and subtract only demonstrably captured material. Retain actual method/factor publication or primary test reference, its units, technology/fuel/material/moisture/control and geography applicability, actual activity inputs, sampling extrapolation and propagated uncertainty. A sampled or factor-derived campaign amount is calculated, not a directly measured total. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Actual fraction and receiving medium required; no bulk material-to-dust factor without evidence. |
| cp_finish_exhaust | regravel_finish | Actual layer-finishing combustion exhaust species | Actual site/supplier record | asset_id; fuel_grade; species; medium; mass_kg; fuel_activity; engine_control; method_source; uncertainty; event_id; period; coverage_owner; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | Use actual engine/fuel logs and applicable documented species method or measurement; prevent overlap with plant/provider service datasets. Retain actual method/factor publication or primary test reference, its units, technology/fuel/material/moisture/control and geography applicability, actual activity inputs, sampling extrapolation and propagated uncertainty. A sampled or factor-derived campaign amount is calculated, not a directly measured total. | kg | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | Retain chemical identity, medium and method validity; no generic exhaust exchange or default factor. |
| cp_finish_water_release | regravel_finish | Actual water released from repair to its environmental medium | Actual site/supplier record | pathway_id; source_water; medium; release_m3; moisture_retained_m3; reuse_m3; captured_outward_m3; measured_inflow_m3; storage_change_m3; density_kg_per_m3; temperature_C; method_source; uncertainty; period; new_aggregate_incoming_water_m3; retained_host_initial_water_m3; retained_host_final_water_m3; rainfall_m3; external_runon_m3; rainfall_runon_evidence; unmatched_gap_m3 | Reconcile measured supply/abstraction, stored/retained moisture, reuse and captured wastewater; substantiate each actual environmental pathway independently. Include measured initial/final moisture of new aggregate and retained host plus material water crossing the boundary and actual influential rainfall/external run-on only when supported by evidence. These are balance boundary terms, not additional purchased-water inputs or credits; missing quantities remain an explicit balance gap. | m3 | Every event/lot and all repeated operations | Complete bounded repair campaign, linked reporting dates | Actual declared chainages and responsible provider | per reference flow | No residual assigned to air/water/soil without evidence; actual species releases expand separately, Volume support requires confirmation. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| repair_normalization | all inventory rows | Sum unique node-owned physical events including rework for this accepted contract segment; express amounts per reference flow. The regravel_finish lead logistics ledger owns each leg once through its producing-node/leg-owner matrix. Internal host transfers are paired, not duplicated final output. | Node event IDs; contract acceptance; all node protocols | Exchange amounts for the one declared accepted repair |  |
| aggregate_reconcile | new_aggregate; aggregate_return; rejected_layer | Reconcile opening stock plus gross receipts with installed material, actual outward usable returns, outward waste, supported losses and closing stock at matched moisture/state. Derive loose/compacted volume only with actual density; FHWA examples are not conversion factors. | cp_new_aggregate; cp_aggregate_return; cp_rejected_layer; actual density/moisture tests | Lot-specific material balance and carried-forward stock burden | fhwa-gravel-2015 |
| service_attribution | prep_plant; finish_plant | Assign complete-life shared asset burdens to actual node/job/period service using measured utilization and justified idle/mobilization/termination treatment; retain one event owner and no overlap with separately modelled fuel/energy/haul. | cp_prep_plant; cp_finish_plant; full asset lifecycle ledger; all consumers/periods | Attributable plant service and coverage gaps |  |
| fuel_consumption | prep_fuel; finish_fuel | Actual burned fuel B_fuel is the balanced portion of opening stock plus gross issues after closing stock, true outward returns/transfers and actual spills. Model each real outward disposition by its custody and destination separately; consumption alone may drive combustion calculations. | cp_prep_fuel; cp_finish_fuel; return/transfer/spill disposition records | Actual grade-specific consumed exchange and separately owned exits |  |
| emission_calculation | prep_dust; prep_exhaust; finish_dust; finish_exhaust | Calculate species/fraction campaign mass from measured emission rate times actual activity duration, or actual applicable activity times a documented species/fraction-specific factor. Record method/factor source, units, applicability to actual machine/fuel/material/moisture/control and receiving medium, sampling/extrapolation and propagated uncertainty; derived totals are not direct measurement. | Actual rate/duration or activity/factor and method reference; all four emission protocols | Calculated actual campaign emissions with method/evidence gap disclosure |  |
| water_balance | finish_water_product; finish_water_abstraction; captured_runoff; finish_water_release | Reconcile purchased/abstracted water, stock changes, new aggregate incoming moisture, retained-host initial/final moisture and actual influential rainfall/external run-on with retained moisture, captured outflow and substantiated releases. Weather/material moisture are measured balance terms, not extra purchases/credits. Internal reuse is paired; any missing term is a gap, never automatic evaporation. Use actual density/temperature for kg conversion. | cp_finish_water_product; cp_finish_water_abstraction; cp_new_aggregate; cp_captured_runoff; cp_finish_water_release; host moisture and actual weather/run-on evidence | Pathway quantities with uncertainty and unmatched balance gaps |  |
| fuel_supply_fate | finish_fuel; prep_fuel | For each actual fuel identity and nonoverlapping node/event period, G_fuel = opening usable fuel + external receipts - closing usable fuel stock, including equipment tanks, with container tare excluded and same-boundary issues/transfers not added as new receipts. G_fuel is the gross physical product input before genuine usable outward U_fuel, outward transfer X_fuel, collected unburned fuel W_fuel and uncontained fuel P_fuel. Keep those exclusive outlets separate and resolve actual product, waste stream or substance/medium identities; a total spill is an incident diagnostic, never another deduction. W_fuel and P_fuel mean the contained fuel mass, not the total mass of contaminated absorbent or wastewater. B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel only with a complete supported fate ledger; unknown fate stays a gap and is not presumed burned. Only independently supported B_fuel drives combustion emissions. Retain upstream supply burdens of all nonreturned unburned fuel, waste and loss; only original unused-material burden may follow a documented usable exit, without a second net-input deduction or avoided-production credit. Carry opening/closing stock burden once. Normalize each physical quantity once by D_fuel, the independently measured positive accepted lot quantity in this PCR reference unit (accepted volume, area, axial length, steel mass or complete accepted count as defined in sections 3-4), never by a fuel quantity or an intermediate output. Existing actual_consumed/fuel-use fields are burn-activity records; they cannot replace G_fuel as the upstream input. Provider-included fuel and its emissions have one owner; do not add overlapping foreground supply or combustion. | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |
| actual_host_handoff | prepared_host; host_to_finish | Independently record N_host from signed accepted contract-segment IDs; count each complete accepted declared segment once, with different geometry kept distinct. At each actual preparation/receipt gate record approved handoff IDs, current state, time and measured geometry and derive its count from those records. Pair only the same physical state/transfer; distinct actual correction handoffs retain their activity and prior burden once. Documentary road identity is not a new purchased road or coproduct. Normalize each actual gate count by N_host; do not infer any intermediate count from the final reference one or count repeated preparation as another accepted segment. | cp_prepared_host; cp_host_to_finish; accepted segment IDs; actual handoff IDs/state/count; N_host | paired actual host gate quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| qualified_geometry | prepared_host; accepted_regravelling | Retain actual host qualification, pre-spread gate, final chainage/width/area/thickness/crown/drainage, material/moisture/density methods, units, criterion source and tolerances. | Survey/test/inspection and signed gate records |
| complete_events | all inventory rows | Cover every lot/operation/period, include rework/retests, dated physical IDs and actual no-use declarations; no missing equals zero. | Dated ledgers, leg ownership matrix and closed defects |
| honest_ranges | all inventory rows | Replace specific Range evidence needs with actual collection/calculation uncertainty before final dataset; exact counted definition does not establish material/energy/productivity range. | Measurement accuracy, actual sample ranges, method applicability |
| real_identities | all inventory rows | Resolve each actual distinct material/provider/waste/species/property/unit chain before binding; native units and actual scope, no heterogeneous sum or near-match UUID. | Supplier/receiver/substance and verified support evidence |
| full_asset_life | prep_plant; finish_plant | Complete manufacture, operation/maintenance/replacement and end-of-life/termination; all consumers/jobs/periods, measured utilization, actual provider coverage and gaps. | Complete-life provider/asset dossier |
| uncertainty_coverage | all inventory rows | Document raw measurement/sampling and calculation uncertainty, density/moisture, stock/return/transfer/spill custody, actual emissions methods and attribution sensitivity. Retain actual aggregate/host moisture and weather/run-on balance terms and unmatched gaps. | Calibrations, actual tests, primary records, method references and scenario disclosures |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| host_gate | prepare_host | Require initial suitability, actual scarification/shape/drainage correction and accepted pre-spread gate. Reject missing drainage ownership or structural unsuitability for this route. | fhwa-gravel-2015 |
| repair_gate | accepted_regravelling | Verify actual chainages, natural aggregate source/gradation/plasticity/moisture, uniform finished geometry, actual specified compaction/quality tests, weather and signed handover; no universal thickness, shrinkage or future-life assumption. | fhwa-gravel-2015 |
| balance_paths | all inventory rows | Check gross received/issued material and water balances with uncertainty, retained host treatment, internal reuse, real outward custody and closing stock; no duplicate stock/return or burden. Resolve every defect/retest/rework path before counting accepted output. |  |
| asset_periods | prep_plant; finish_plant | Check full shared-asset phase coverage, all consumers/reporting periods, utilization denominator, replacements/termination and single event ownership; missing lifecycle/support coverage blocks dataset finalization. |  |
| identity_range | all inventory rows | Expand conditional material/service/waste/substance requirements into actual distinct exchanges. Verify exact flow/property/unit identities and actual numerical uncertainty evidence for each; never equate generic dust with a particle fraction or fuel with exhaust. Missing data is explicit, not zero. |  |
| validate_fuel_supply_fate | finish_fuel; prep_fuel | Check G_fuel, B_fuel and all exclusive outlets against the actual fuel protocol, stock and provider coverage. Nonreturned unburned waste/loss keeps its upstream burden; unresolved fate, fuel constituent or positive D_fuel blocks a complete quantitative fuel inventory. Do not substitute burned activity for purchased fuel or deduct total spill plus its component outlets. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one accepted bounded regravelling repair, with process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset when gate/units and complete upstream scope match |
| allowed_use | Incremental repair modelling for the declared qualified natural-gravel road and actual contract |
| excluded_use | New complete roads, structural reconstruction, bound/recycled routes, future traffic operation, equivalent service life or avoided-replacement claims |
| required_metadata | Reference qualifiers; actual two-node gates; gross supply and exit custody; dates/periods; source and transport coverage; asset consumers and complete-life boundary |
| required_quality_disclosure | Measurement/uncertainty coverage; rejected/reworked chainages; missing identities/support and ranges; supplier coverage; lifecycle attribution and stock carry-forward |
| update_trigger | Change in host suitability, repair limits, aggregate/source, approved placement/acceptance method, actual plant/coverage, drainage ownership or evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fhwa-gravel-2015 | official_guidance | Federal Highway Administration, Gravel Roads Construction and Maintenance Guide, August 2015, sections 3.18–3.21, printed pp.71–74. https://www.fhwa.dot.gov/construction/pubs/ots15002.pdf | Preparation before fresh gravel; loose versus finished state; actual hauling/spread control; windrow/equalize/spread and actual water/roller operations. Illustrative quantities are not PCR defaults. |
