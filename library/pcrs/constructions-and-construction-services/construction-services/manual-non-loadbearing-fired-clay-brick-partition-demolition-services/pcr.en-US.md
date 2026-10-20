---
pcr_id: pcr.manual-non-loadbearing-fired-clay-brick-partition-demolition-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manual non-loadbearing fired-clay brick partition demolition services

## 1. Scope and Applicability

This PCR covers controlled hand-tool dismantling and clearance of a surveyed bare interior partition made of fired-clay bricks and cementitious mortar. The supplied function is completed removal, not the manufacture of replacement wall materials. The actual approved sequence, access, exclusion zone, floor loading, service isolation and hazard clearance govern each job. Structural or loadbearing walls, machine-led collapse, hazardous-material abatement, decorative finish stripping, replacement construction and off-site waste treatment are outside this category. Stop work when the survey or observed condition contradicts this scope; do not blend an incompatible job into the reference output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.manual-non-loadbearing-fired-clay-brick-partition-demolition-services |
| classification_refs | cpc:3.0:54310; narrower than Demolition services |
| covered_products | Completed manual dismantling and cleared-area handover for the specified nonloadbearing partition |
| excluded_products | Whole-building or structural demolition; mechanical collapse; hazardous abatement; wall construction; independent recovery processing |
| representative_product | One square metre of net brick-partition elevation removed and accepted after clearance |
| production_route | Approved ready-to-work interface; controlled hand-tool removal; contained transfer of debris; segregation by actual receiving route; cleanup; inspection and corrective work; signed handover |
| market_state | Site-delivered completed demolition service with documented material custody at the declared collection gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted removal of the declared interior partition |
| How much | 1 m2 of net wall elevation measured once |
| How well | Entire declared thickness removed; retained structure stable; collection area cleared; unresolved inspection defects excluded from accepted area |
| How long or cycle | One documented job through corrective-work closure and signed handover; no building-use lifetime |
| reference_flow_link | `accepted_demolition` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted net-area non-loadbearing brick partition demolition service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Location and reporting dates; wall geometry and thickness; brick and mortar identity; bare-surface condition; nonloadbearing survey; isolation and hazard clearance; approved hand-tool sequence; access and floor limits; actual dust control; accepted net removal area; material destinations; collection gate; transport/treatment burden owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_area` | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure removed elevation polygons in one wall plane, subtract unremoved openings and retained areas, and count neither the opposite face nor thickness as extra area. Record thickness independently. cp_area reconciles survey and signed completion; partial or rejected area is not accepted area. |
| `material_mass` | removed material and waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use tare-corrected measurements or traceable receiving weights with moisture/contamination basis. Area or volume cannot become mass through an assumed wall density. |
| `native_energy` | electricity | Energy | kWh | Keep metered or supplier energy in its native recorded unit; retain conversion evidence before changing units. Electricity property/support and supply identity must be verified for concrete exchanges. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing customer-owned bare brick/mortar partition surveyed as nonloadbearing, isolated and hazard-cleared; method and access approved |
| starting_condition_role | Physical stock and custody interface, not a new purchased brick input and not automatically an incoming waste exchange |
| product_classification_scope | The narrow completed partition-demolition service within cpc:3.0:54310 |
| recursive_input_rule | Subcontracted demolition of the same wall is an alternative service owner: partition responsibilities and quantities explicitly, with no parent-plus-subcontract double counting. |
| upstream_dataset_requirement | Link supplied consumables, water, electricity and bounded resource services to compatible upstream datasets. Historical wall manufacture/use is excluded at this removal interface and must be represented by its original owner when a whole-building model needs it. |
| disclosure | Declare stock ownership, prior survey/abatement boundary, job period, outgoing collection gate, tool/access/visit service coverage, capital exclusions, waste transport/treatment owner and any unmeasured inventory. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `ready_interface` | demolition | Require actual competent survey, method and isolation evidence before hand-tool work; use HSE planning guidance and OSHA masonry stability/loading principles as technical context, with applicable local requirements independently declared. No generic top-down instruction substitutes for the approved job sequence. | hse-demolition; osha-masonry-removal |
| `removal_gate` | demolition | The independent removal responsibility ends at stable retained structure, cleared accepted area and separately documented outgoing materials at the on-site collection gate. Screening and segregation here serve this gate; off-site crushing or recovery is not an embedded production node. |  |
| `stock_ledger` | demolition | Record the existing wall geometry/materials in a custody ledger. Reconcile removed mass, remaining stock, outgoing products/wastes and actual characterized releases; do not invent an exchange buying the existing wall or label it waste before the actual removal decision. |  |
| `resources` | demolition | Include attributable hand-tool/access/visit service, dust-control water/extraction power, consumed protection and cleanup materials, contained debris transfer, cleanup and corrective work when used. A bounded provider service owns its stated capital coverage; separately disclose any exclusion and never invent a tool lifetime. |  |
| `sharing` | demolition | Maintain shared asset/service ids with this demolition node and all other consuming jobs or reporting periods. Record service coverage, period totals, job use and attribution driver; meter local use first and allocate only a residual actually shared burden. |  |
| `exit_owner` | demolition | Record solid waste, wastewater and air releases at their actual distinct gates. Downstream transport/treatment is excluded from this on-site service inventory but its responsible dataset owner and transfer evidence are mandatory; no avoided virgin production or recovery credit is automatic. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual consumed protection and cleanup supplies (`consumed_supplies`)

Process / prospective direction / type: `demolition` / `inputs` / `product`.

Conditional umbrella for actual bags, protective sheeting, filters and cleanup substances consumed. Split by identified material/formulation in a concrete dataset. Range evidence need: document issued, returned, remaining and consumed quantities for each actual supply; no generic consumable coefficient.

- Collection subject: Actual consumed protection and cleanup supplies
- Flow property / unit: Mass / kg
- Amount rule: Measured consumed quantities by concrete material, accounting once for intact returns and closing stock
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

#### Collection requirement: Attributable bounded hand-tool access and site-resource services (`bounded_resource_service`)

Process / prospective direction / type: `demolition` / `inputs` / `product`.

Conditional umbrella for actually used provider services: hand tools, access equipment, containers and mobilization where applicable. Preserve provider native units and split concrete services; hours only describe timed use. Range evidence need: obtain actual service coverage, use logs, periods, shared consumers and driver evidence; no invented equipment lifetime.

- Collection subject: Attributable bounded hand-tool access and site-resource services
- Flow property / unit: Duration / h
- Amount rule: Recorded attributable native service quantity for each actual provider resource; timed service use in h where contracted on that basis
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

#### Collection requirement: Actually accepted reusable removed masonry (`reusable_removed_material`)

Process / prospective direction / type: `demolition` / `outputs` / `product`.

Conditional umbrella only for material accepted as a reusable product at the documented on-site collection/handover gate; later receiver acceptance supports product status and does not include transport or treatment without unmodelled recovery processing. Identify material, condition, custody and acceptance; intact appearance alone is insufficient. Range evidence need: weigh actual accepted lots and retain receiver quality evidence; no default reuse fraction or displacement credit.

- Collection subject: Actually accepted reusable removed masonry
- Flow property / unit: Mass / kg
- Amount rule: Actual tare-corrected accepted product mass by material and destination; rejected or undecided lots are not included
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

#### Collection requirement: Removed fired-clay brick and cementitious-mortar waste (`masonry_waste`)

Process / prospective direction / type: `demolition` / `outputs` / `waste`.

Record actual mixed masonry waste at the collection gate; split different regulated classes and contaminated lots from their evidence. Range evidence need: receiving weights and measured wall stock/remaining quantities establish job mass closure; do not use density, area or assumed recovery as a mass factor.

- Collection subject: Removed fired-clay brick and cementitious-mortar waste
- Flow property / unit: Mass / kg
- Amount rule: Measured outgoing masonry waste, separately from accepted reusable product, retained stock and captured or emitted particulate
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

#### Collection requirement: Actual spent supplies and captured dry residues (`supplies_waste`)

Process / prospective direction / type: `demolition` / `outputs` / `waste`.

Conditional umbrella for spent bags, sheeting, filters and captured dust at their waste gates. Usable containers/parts return to provider stock under custody records instead of this waste card. Range evidence need: weigh each identified stream, distinguish collected dust from uncollected air releases, and document stock carryover.

- Collection subject: Actual spent supplies and captured dry residues
- Flow property / unit: Mass / kg
- Amount rule: Actual tare-corrected waste mass by material and destination; no second deduction of usable returns
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

#### Collection requirement: Actual characterized substance or particle releases to air (`characterized_air_release`)

Process / prospective direction / type: `demolition` / `outputs` / `elementary`.

Conditional umbrella for actual reported species or particle-size classes and receiving air compartment; no generic dust UUID or guessed silica content. Range evidence need: obtain representative measurements or validated job-specific release estimates with control effectiveness and uncertainty. Exposure concentrations alone are not total emitted mass; no measured value is not zero.

- Collection subject: Actual characterized substance or particle releases to air
- Flow property / unit: Mass / kg
- Amount rule: Characterized emitted mass for each actual substance/particle class to the declared air medium, excluding captured waste
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| demolition | Manual partition removal and clearance | required | Applies only after the declared ready-to-work interface is proven | Independent removal; owns stock custody, debris clearance, local correction loop and outgoing collection gate | 1 m2 accepted net removal area |

The single node includes workfront checks, the actual engineer-approved hand-tool sequence, contained debris movement and signed clearance. Inspection failure loops back to this same node: retain all resources and repeat inspection; never count the area twice. Removed masonry not accepted for reuse exits as identified waste or remains segregated stock pending a documented destination. This map does not certify a safe method.

### Process: Manual partition removal and clearance (`demolition`)

#### Inputs

##### Product flows

###### Supplied dust-control or cleanup water (`dust_cleanup_water`)

Record only actual supplied water, with source and use; abstraction from nature would require a separate verified elementary input. Range evidence need: obtain job water measurements, control method and repeated-job dispersion; no universal wetting rate is supported.

- Selected flow: Supplied dust-control or cleanup water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable water delivered for dust control and cleanup; a documented nonuse is distinct from missing data
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`



###### Electricity for actual extraction and charging (`site_electricity`)

Include extraction and any attributable tool or service charging actually used; manual demolition does not imply zero electricity. Range evidence need: collect meter or verified provider energy records, operating duration and equipment state; no nameplate-to-consumption default.

- Selected flow: Electricity for actual extraction and charging
- Flow property / unit: Energy / kWh
- Amount rule: Metered or provider-recorded electricity attributable to this job, excluding energy already covered by a resource service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted net-area non-loadbearing brick partition demolition service (`accepted_demolition`)

The real reference output is completed removal and accepted clearance, including closed corrective work. Range decision: 1 m2 defines the normalization reference and is not a yield, recovery fraction or performance interval; retain actual accepted-area measurement uncertainty.

- Selected flow: Accepted net-area non-loadbearing brick partition demolition service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_area`



##### Waste flows

###### Actual collected cleanup wastewater (`cleanup_wastewater`)

Conditional collected waste-liquid exit; identify solids, destination and treatment owner. Direct discharges need separately characterized elementary exchanges rather than relabelling this waste. Range evidence need: measured water/solids balance and collection records; no assumption that supplied water all becomes wastewater or evaporates.

- Selected flow: Actual collected cleanup wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured collected wastewater mass on declared solids/moisture basis, separately from dry residues
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`



##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `service_owner` | accepted_demolition | Assign removal and corrective-work burdens to the accepted demolition service. Unresolved defects remain in the same local work loop; do not create another accepted output for repeated work or erase failed-attempt resources. |  |
| `material_exits` | removed materials | Declare ownership and legal/product status of each outgoing lot. Retain demolition burdens with the demolition service under this service-boundary model; report reusable material separately without avoided-production credit. A later system requiring co-product allocation must declare a reviewed boundary/method and cannot silently overwrite this rule. |  |
| `shared_resources` | bounded_resource_service; site_electricity | Identify each shared provider service, all consuming jobs/nodes and relevant service periods. Prefer direct activity records; allocate only the measured residual service total by recorded causal driver, preserving totals across consumers. State driver, coverage and uncertainty; do not allocate a service charge and its included electricity/capital twice. |  |
| `returns` | consumed_supplies; supplies_waste | Usable packaging, containers and unused supplies return under actual stock/custody records or remain closing stock. Record issued, consumed, returned and retained quantities once; the return is not simultaneously waste and cannot receive a second net subtraction. Spent contaminated items follow their actual waste route. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_area | demolition | accepted removal area and initial stock | survey and signed handover | job_id; wall_id; geometry; openings; retained_area; thickness; brick_mortar_identity; survey_release; method_id; isolation_clearance; hazard_clearance; accepted_area; rework_events; handover_date | Measure polygons in one declared elevation plane; deduct openings and retained portions, match physically removed thickness and signed accepted area. Record dimensions, instrument tolerance and corrective-work closure. Attribute all job quantities to the same accepted net area before recording per reference flow. | m2 | Each wall and final handover | Complete job including corrective visits | The declared wall and collection area | per reference flow | Survey/dimension record; approved method; signed inspection; tolerance and area reconciliation |
| cp_resources | demolition | electricity supplies and bounded resource services | meters issue/return records and provider logs | job_id; resource_id; material_identity; provider; service_coverage; period_id; other_consumers; issued; consumed; returned; closing_stock; meter_readings; native_unit; direct_use; shared_total; driver_total; job_driver | Use meter differences or verified supplier amounts; trace issue/consume/return/stock by material. For shared services enumerate every consumer and period, subtract directly attributed quantities from the shared pool, and distribute residual by documented causal use driver. Divide attributable job amount by cp_area accepted net area to record per reference flow. | kg; kWh; h or verified native service unit | Every resource event and service period close | Whole job and all contributing shared-service periods | Declared site; actual provider service boundary | per reference flow | Calibrated meters/scales; provider coverage; full consumer ledger; sum of assigned burdens equals pool; no overlap with included service energy |
| cp_water | demolition | supplied water and collected wastewater | water meter supply and collection records | job_id; source; supplied_mass; collected_wastewater_mass; suspended_solids; remaining_water; moisture_basis; meter_unit; conversion_evidence; receiver; transfer_id | Measure supplied water and collected waste liquid independently; retain native readings and validated conversion only where needed. Reconcile water retained with debris, discharged, evaporated or remaining without assuming a split. Divide attributable quantities by accepted net area. | kg | Each supply/collection event | Full job including final cleanup | Workfront through actual collection gate | per reference flow | Meter calibration; collection weights; moisture/solids basis; unexplained water balance and sampling uncertainty |
| cp_exits | demolition | removed masonry reuse waste and spent supplies | custody transfer and weighing | job_id; lot_id; transfer_id; material; status; tare; gross_mass; moisture; contamination; receiver; acceptance; retained_stock; transport_owner; treatment_owner; usable_return | Weigh or use traceable receiving weights, classify each lot once and retain acceptance/destination evidence. Link rejected reuse lots back to demolition stock then actual waste/retention route; prevent product/waste double classification. Divide actual outgoing mass by accepted net area. | kg | Each outgoing lot and closing stock count | From first removal to final collection-gate reconciliation | Declared on-site collection gate and documented receiver | per reference flow | Scale traceability; unique transfer ids; accepted product quality; waste classification; closing stock and mass reconciliation |
| cp_emissions | demolition | characterized air releases | measurement or validated estimation dossier | job_id; substance; particle_class; air_compartment; sampling_duration; control_state; emitted_mass; estimation_method; captured_mass; uncertainty; missing_coverage | Use representative emission measurements or a validated job-specific total-release method with actual control state. Preserve species/particle basis and medium; do not convert worker exposure concentration to total release without a defensible mass calculation. Exclude measured captured waste and normalize attributed emitted mass by accepted net area. | kg | Each representative operation/control state and full-job estimate | Removal and cleanup including corrective work | Actual workfront receiving air compartment | per reference flow | Method validation; monitoring coverage; measurement uncertainty; explicit uncovered species/stages |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | all inventory rows | Record attributable job exchange quantity per reference flow by dividing by the measured accepted net removal area in m2. Sum disjoint accepted wall polygons once; record uncertainty and reject a zero or unresolved denominator. No area-to-mass conversion is implied. | cp_area; node-specific quantity protocol | Exchange quantity per reference flow |  |
| `shared_attribution` | bounded_resource_service; site_electricity | Use direct job measurement first. Distribute only the residual shared pool by the documented job causal-use share of all consumers in that period; reconcile allocated totals to that residual. Apply area_normalization after attribution. | cp_resources; cp_area | Attributable resource quantity per reference flow |  |
| `custody_closure` | reusable_removed_material; masonry_waste; supplies_waste; cleanup_wastewater; characterized_air_release | Compare removed stock and added supplies/water with accepted reusable exits, waste exits, actual emissions and remaining stock on compatible mass/moisture bases. Keep uncertain or unmeasured terms visible; do not infer missing air release as a balance residual or force an artificial zero. | cp_area; cp_resources; cp_water; cp_exits; cp_emissions | Material/water closure and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | demolition | Prove nonloadbearing bare brick/mortar wall, isolation, hazard clearance and approved hand-tool method; stop on contradictory conditions. | Survey; engineering/method approval; local release record |
| dq_quantity | all inventory rows | Use the same accepted area denominator; disclose instrument error, stock carryover, moisture and incomplete measurements. Record nonuse separately from missing quantities. | cp_area and all linked protocols |
| dq_time | all inventory rows | Cover actual work and corrective visits with dated resource, transfer and completion events; disclose gaps instead of replacing them with zero. | Complete job/event ledger |
| dq_identity | all inventory rows | Resolve each actual exchange to a compatible concrete flow, property and unit with detail evidence. Conditional umbrella cards require actual foreground identities; support gaps remain explicit. | Identity dossier and actual material/provider/medium records |
| dq_ranges | all inventory rows | Replace missing Range evidence with observed job distributions or defensible technology-specific evidence when available. Retain the stated evidence need until resolved; no universal water, energy, dust, density or recovery coefficient is prescribed. | Per-card evidence needs; measurements with uncertainty |
| dq_gate | accepted_demolition; material exits | Keep inspection failure/rework and undecided material lots out of accepted service/product quantities. Close correction or disclose incomplete output. | Signed handover and custody acceptance records |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_release` | demolition | Verify scope and actual approved sequence/limits against ready-to-work evidence. A structural, hazardous or unresolved wall cannot pass this category gate. | hse-demolition; osha-masonry-removal |
| `area_once` | accepted_demolition | Require 1 m2 reference with verified Area support; reconcile net accepted elevation, openings, thickness, no second wall face and all corrective work. Missing/zero accepted area blocks normalization. |  |
| `rework_gate` | demolition | Reconcile initial work, failed inspection, repeat cleanup/removal and final acceptance in one node. Exclude unresolved/rejected area; retain failed-attempt burdens. |  |
| `exit_closure` | material exits | Verify unique material/transfer ids, product acceptance versus waste status, retained stock and characterized air/water split. Missing receiving status cannot become reusable product or recovery credit. |  |
| `shared_conservation` | bounded_resource_service; site_electricity | Verify actual shared consumers/periods, causal driver evidence, coverage and conservation of residual pool; reject overlap with energy/capital already inside a provider service. |  |
| `identity_coverage` | all inventory rows | Require verified concrete identity and property/unit before final dataset exchanges. Report unresolved umbrella/UUID/support identities and Range evidence gaps as coverage limits even when structural checks pass. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground data package for completed manual nonloadbearing brick-partition demolition |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Building renovation or demolition models matching the declared wall, method, site and collection gate; downstream process and lifecyclemodel projections |
| excluded_use | Structural demolition; hazardous abatement; new wall production; machinery collapse; universal demolition benchmark; automatic recycling or avoided-production credit |
| required_metadata | Wall dimensions/thickness/materials; once-only net area; survey/method releases; actual hand tools/control system; reporting dates; providers and shared consumers; stock and waste ownership; collection and treatment gates |
| required_quality_disclosure | Area/mass uncertainty; incomplete air/water coverage; identity and Energy/Duration support gaps; unresolved Range evidence; local correction burdens; upstream wall and capital-service exclusions |
| update_trigger | Changed wall composition or thickness; method/control/access change; new supplier/service coverage; survey/hazard change; altered material destination; revised measurement or accepted gate |


## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| hse-demolition | official_guidance | https://www.hse.gov.uk/construction/safetytopics/demolition.htm | Planning context for competent survey/method, structure/services/hazards and sequence-dependent stability/debris controls; not a universal national legal prescription |
| osha-masonry-removal | standard | OSHA 29 CFR 1926.854, Removal of walls, masonry sections, and chimneys; https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.854 | Technical context for masonry floor-load and remaining-wall stability constraints; apply actual local requirements and approved job limits |
| un-cpc3-notes-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, PDF p. 288; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Demolition services classification scope; no inventory factors |
