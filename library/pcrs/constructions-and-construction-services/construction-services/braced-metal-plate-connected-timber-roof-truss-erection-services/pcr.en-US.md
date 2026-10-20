---
pcr_id: pcr.braced-metal-plate-connected-timber-roof-truss-erection-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Braced metal-plate-connected timber roof-truss erection services

## 1. Scope and Applicability

This PCR covers first erection of a declared factory-made metal-plate-connected timber roof-truss set on accepted existing bearing structures. The output is the complete qualified erection-stage service: the specified trusses positioned and connected, required permanent individual-member restraints and bracing installed, and temporary system stability documented and retained where needed. It is neither one loose factory truss nor complete roof-building performance. CPC 3.0 54522 includes truss framing; this PCR covers a narrower timber-truss route, excluding stick framing and metal trusses (`un-cpc3-2025`).

The actual truss design drawings, placement documents, current jobsite package, accepted bearing interfaces and engineer-approved erection, temporary-stability and permanent-bracing plans are mandatory foreground evidence. SBCA's public 2023 article establishes the installation sequence; its numerical prescriptions are not universal design values. The current BCSI landing page identifies the revised 2025 edition; citing that page does not establish access to the full guide. Record the editions and applicability of instructions actually used (`sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages`).

Exclude factory manufacture; site cutting, notching or drilling of trusses; unapproved repairs; floor trusses; wall/bearing construction; roof sheathing, diaphragm construction, covering and waterproofing; MEP loading; building use and demolition. Suspect trusses are quarantined for manufacturer/engineer disposition. Authorized structural repair requires a separate reviewed boundary. Pre-sized specified braces and connectors are installed in this route; an independent site-fabrication operation requires boundary review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.braced-metal-plate-connected-timber-roof-truss-erection-services |
| classification_refs | CPC 3.0 54522 — Roof framing services; proposed narrower mapping |
| covered_products | First erection-stage service for the actual complete factory metal-plate-connected timber roof-truss set, including specified bearing connections and permanent individual-member restraints/braces, with documented temporary stability |
| excluded_products | Stick framing; steel or floor trusses; truss manufacture or modification; host construction; full roof/diaphragm or weatherproofing; building operation |
| representative_product | An identified roof-truss package delivered factory assembled, erected to its placement plan and handed over with all required braces and any necessary temporary restraint retained |
| production_route | Review actual current documents and host readiness; receive and inspect finished trusses; arrange lifting/access and temporary stability; place and anchor; install permanent restraints/braces; correct placement/fixings without truss modification; inspect and transfer responsibility |
| market_state | Site-specific completed erection-stage construction service; later diaphragm completion is separately declared and must not be assumed at this gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified first erection of the actual complete declared timber roof-truss set at the braced erection-stage handover |
| How much | 1 item; one complete set/package, with every specified truss ID and layout declared |
| How well | Accepted bearings; specified truss locations, connections and permanent member bracing complete; no unresolved damage or unapproved alteration; temporary system stability and custody documented; signed inspection and handover |
| How long or cycle | One erection work package from receipt through signed erection-stage handover. Record erection dates, retained-bracing continuation until the later stability gate, replacements and removal events; no building service-life claim |
| reference_flow_link | `erected_roof_truss_set` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Braced timber roof-truss set erection-stage service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Project/site and set/package ID; truss IDs/count and factory supply gate; timber species/grade/treatment and design geometry; actual span/pitch/spacing/layout; bearing types/locations/connections; design and placement document revisions; applicable current jobsite instructions; engineer-approved lifting/temporary/permanent bracing plans; permanent member-bracing schedule; retained temporary supports and later diaphragm dependency; erection and continuation periods; inspection/defect closure; custody, later removal owner and burden allocation; geographic/temporal resource supply |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `counted_set_reference` | reference product | Number of items | item | One accepted complete set is 1 item. Individual truss count is a qualifier and input quantity, never the reference set count; no conversion from roof area, timber mass or one truss is allowed without explicit set records. |
| `material_mass_evidence` | roof_trusses; permanent_bracing; bearing_connectors; transport_packaging; reusable_returns; erection_waste | Mass | kg | Retain actual counted pieces and material-specific measured/supplier net masses. Geometry does not supply timber density or moisture correction; any count-to-mass conversion needs actual configuration-specific records. Keep mixed materials and waste destinations separate. |
| `service_unit_evidence` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel | Actual service property | h; t*km; kWh; kg | Preserve the measured service/fuel/energy units and provider boundary. Hours cannot replace fuel or asset manufacture. Any conversion requires the actual factor, unit and measured basis; never infer fuel from lift count or nominal capacity. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-complete identified timber trusses and specified installation components at their declared supply gate, with existing bearings accepted for the actual package and lifting access available |
| starting_condition_role | Foreground erection boundary; host readiness is a documented interface, not a zero-burden substitute for construction in a whole-building model |
| product_classification_scope | Narrower timber-truss erection subset of CPC 3.0 54522; separate from roof coverings under 54530 |
| recursive_input_rule | Record factory trusses as component products, not as this erection service. If a previously erected set or subcontracted erection service enters the package, disclose its completed scope and prevent repeating the same erection or resource burden; a relocation is outside first erection. |
| upstream_dataset_requirement | Use actual supply-gate truss/component and resource datasets with declared packaging, freight, energy and temporary-asset coverage. Include upstream manufacture through these inputs; do not recreate factory production in the site node. |
| disclosure | Declare supplied-kit coverage, excluded host/diaphragm work, physical state and responsibilities at the erection gate, all shared consumers and periods, and temporary-support production/use/removal coverage and later owner. Unresolved stability or service coverage blocks a completed dataset. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `document_and_host_gate` | roof_truss_erection | Before erection, reconcile actual truss design/placement/jobsite documents, approved erection/bracing plans and accepted bearings; resolve conflicts through the responsible designer/manufacturer. Record project-specific applicability rather than importing public article dimensions or tolerances. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `erection_components` | roof_truss_erection | Own finished trusses, additional bearing fasteners/hangers, permanent brace/restraint members and their fixings, temporary-stability service, lifting/access, installation energy, freight, actual auxiliary consumption, packaging and correction losses. Identify which items are already in the supplied kit to avoid counting them twice. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `erection_gate` | erected_roof_truss_set | Handover requires every specified truss positioned, securely connected at its accepted bearings, required permanent individual-member restraints/bracing installed, closed inspection findings and signed responsibility transfer. This is an erection-stage gate; do not claim complete roof load, weather, fire or thermal performance. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `retained_temporary_stability` | temporary_stability_service | Where a later diaphragm is needed, retain required temporary restraint. Index erection, post-handover continuation, later stability confirmation and authorized removal/return; name custody and removal owner at each change. A bounded service must include or explicitly link asset production, installation, maintenance/use, replacement, removal, return transport and end-of-use treatment; it cannot erase these burdens. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `external_repair_boundary` | roof_truss_erection | Placement/connection corrections loop within this node with their full resource burdens. Damaged, unsuitable or altered trusses remain quarantined; return or characterize their waste exit. Cutting/notching/drilling trusses and structural repair are not admitted operations in this PCR. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `resource_and_release_boundary` | roof_truss_erection | For crane, access, temporary bracing and freight, identify full provider coverage and every actual consumer/period, including other work packages. If the provider includes operation fuel/emissions, do not add the same operation again. For directly controlled equipment collect fuel, energy and characterized direct releases separately; no unmeasured zero assumption. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Specified pre-sized permanent timber restraint and bracing members (`permanent_bracing`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.

Include the actual members and reinforcements installed at this erection gate. Separate components supplied in the truss kit from additional purchases; no site transformation of trusses is permitted.

- Collection subject: Specified pre-sized permanent timber restraint and bracing members
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual gross job receipts/issues attributable to this set by material/specification, including correction supply; measure the net material mass of those receipts/issues and record installed, usable-return and retained-stock states separately, without subtracting a separately modelled return again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`; `sbca-bcsi-current`

Range evidence need: Actual engineer-approved brace schedule, pieces and measured/supplier masses are needed; no generic brace spacing, timber density, loss fraction or force capacity is supplied.

#### Collection requirement: Specified bearing connectors and installation fasteners (`bearing_connectors`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.

Record actual hangers, bearing connections, brace fixings and fasteners not already included in the factory product or other service input. Split material and corrosion-protection identities using actual purchase and installation records.

- Collection subject: Specified bearing connectors and installation fasteners
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual gross job receipts/issues of connectors and fasteners by material/type attributable to this set, including correction supply; retain counted items and their net material mass, with installed, usable-return and retained-stock states recorded separately and no double net subtraction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`

Range evidence need: Obtain actual approved connection schedule and item-specific mass evidence; no standard nail count, anchor capacity or generic steel substitution is valid.

#### Collection requirement: Bounded temporary roof-truss restraint and bracing service (`temporary_stability_service`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.

This conditional umbrella identifies the actual temporary restraint/bracing system and service provider or owner. Disaggregate each actual system. Coverage includes capital materials/assets and installation, retention, maintenance, replacement, authorized removal and return/end-of-use burdens; the h unit only records the declared service interval.

- Collection subject: Bounded temporary roof-truss restraint and bracing service
- Flow property / unit: Duration / h
- Amount rule: Actual allocated service-hours and underlying system quantities/resources for the erection period and the separately indexed retained-support continuation; include linked future removal obligations and disclose unresolved provider coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `sbca-installation-2023`; `sbca-bcsi-current`

Range evidence need: Obtain actual approved temporary-bracing plan, member/asset inventory, dates, all consumers, ownership and removal/return records; neither a default duration nor zero asset burden can be inferred.

#### Collection requirement: Bounded crane, lifting and access equipment service (`lifting_access_service`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.

Identify actual crane/rigging, hoisting and access systems serving the erection. For each provider disclose included mobilization, equipment production/maintenance, operation and demobilization; separate direct-operation inputs only when absent from that service.

- Collection subject: Bounded crane, lifting and access equipment service
- Flow property / unit: Duration / h
- Amount rule: Actual service-specific operating/standby hours and allocated mobilization/demobilization events, retaining all other consuming jobs and the provider inventory basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `sbca-installation-2023`

Range evidence need: Obtain actual lift plan and equipment/service logs, provider coverage and whole-period consumer denominator; no fuel-per-lift or capacity/time defaults are specified.

#### Collection requirement: Actual component and residual freight service (`logistics`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.

Record actual transport legs for trusses, additional components, packaging and residual/return movements not included upstream or in a bounded service. Keep payloads, mode and provider boundaries distinct.

- Collection subject: Actual component and residual freight service
- Flow property / unit: Transport / t*km
- Amount rule: Actual consignment mass and loaded distance by leg, with allocated empty-return/mobilization coverage where applicable; exclude freight already covered by upstream/provider datasets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`

Range evidence need: Obtain actual payload, route, distance and vehicle/service records; no typical distance or load factor is justified for an unspecified site.

#### Collection requirement: Actual fuel supplied to directly controlled erection equipment (`direct_fuel`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.


Actual upstream fuel supplied to this node, before usable outward exits. Apply fuel_supply_fate to retain the supply burden of nonreturned waste/loss and derive burned activity separately. Keep actual fuel grade, equipment duty, provider coverage, density/state and measurement uncertainty.

- Collection subject: Actual fuel supplied to directly controlled erection equipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual upstream supplied fuel mass G_fuel divided once by the independently measured positive accepted lot quantity D_fuel in the declared reference unit; retain all exclusive fuel outlets and derive actual burned B_fuel separately under section 8.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Obtain actual equipment, fuel specification, consumed quantities and provider exclusions; fuel identity, density and consumption cannot be inferred from lifting requirements.

#### Collection requirement: Actual auxiliary installation consumables (`ancillary_materials`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.

Conditional umbrella for genuinely consumed supplementary materials such as equipment lubricants when attributable and absent from provider inputs. No coating, adhesive, truss repair chemical or water-consuming route is presumed.

- Collection subject: Actual auxiliary installation consumables
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual consumed net mass by substance/product identity and declared use, separating returned stock and waste; add any real water input with its property/unit from actual records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`

Range evidence need: Actual purchase/use/stock records and material identity are needed; a zero, one or multiple exchange outcome depends on the job and cannot use a generic chemical factor.

#### Collection requirement: Actual incoming transport packaging (`transport_packaging`)

Process / prospective direction / type: `roof_truss_erection` / `inputs` / `product`.

Identify actual wrapping, straps, dunnage and reusable packaging at the declared supply gate. Activate a separate burden-bearing input only for separately supplied packaging or the portion not covered by the upstream product dataset. Supplier-included packaging still requires physical custody/exit records, without a second upstream material-production burden. Reusable temporary-bracing assets remain in their service.

- Collection subject: Actual incoming transport packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual incoming packaging mass by material and coverage: only separately supplied or upstream-uncovered packaging becomes an additional burden-bearing input; retain all packaging in the custody ledger and reconcile stock, genuine return and waste without double counting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Obtain supplier packaging declarations and site counts/weighing with actual custody; no universal packaging intensity or return rate is established.

#### Collection requirement: Usable installation-material and packaging returns (`reusable_returns`)

Process / prospective direction / type: `roof_truss_erection` / `outputs` / `product`.

Conditional product-output umbrella for genuine unused connectors/braces and reusable packaging leaving to a named supplier or store. Record separate materials and destinations; retained site stock is a ledger state rather than an invented exit. Do not place rejected trusses here.

- Collection subject: Usable installation-material and packaging returns
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual dispatched usable return mass by identity, receiving custodian and transfer ID, reconciled to gross supply and retained stock without a second net subtraction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Obtain actual return acceptance, custody and mass records; no default reusable fraction or avoided-production credit is assumed.

#### Collection requirement: Quarantined roof trusses returned for disposition (`rejected_truss_returns`)

Process / prospective direction / type: `roof_truss_erection` / `outputs` / `product`.

Conditional product-output umbrella only when the receiving manufacturer or other identified custodian accepts the actual trusses for further use or authorized disposition as products. Include defect state and transfer record; waste-status trusses use the waste card instead.

- Collection subject: Quarantined roof trusses returned for disposition
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual returned count by truss ID with disposition, recipient and matching receipt; prevent those pieces from entering the accepted-set count or being counted again as waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`
- Sources: `sbca-installation-2023`

Range evidence need: Actual damage/inspection and manufacturer/engineer disposition plus return records determine quantities and product/waste classification; no reject fraction is established.

#### Collection requirement: Characterized erection and packaging waste (`erection_waste`)

Process / prospective direction / type: `roof_truss_erection` / `outputs` / `waste`.

Conditional waste-output umbrella for actual discarded connectors, braces, damaged trusses and packaging; segregate by material, hazardous status and receiving treatment. Retain failed-attempt and correction burdens. This route does not assume truss-cutting sawdust.

- Collection subject: Characterized erection and packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual weighed or traceably documented waste mass by material/status and destination with transfer IDs; keep captured residue distinct from releases and usable returns.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Obtain actual waste tickets, segregation and treatment evidence; no generic installation loss or recycling yield is imposed.

#### Collection requirement: Characterized direct erection releases to the environment (`direct_releases`)

Process / prospective direction / type: `roof_truss_erection` / `outputs` / `elementary`.

Conditional elementary-output umbrella for actual directly operated equipment combustion species and measured installation particles or other releases. Establish substance, receiving medium and particle class/basis before selecting each concrete flow; provider-included releases are not repeated.

- Collection subject: Characterized direct erection releases to the environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured or defensibly calculated substance-specific mass using recorded activity and applicable source-specific factors, with capture controls and receiving compartment; unknown releases remain data gaps.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Obtain actual equipment/fuel/emission-factor or sampling evidence and receiving medium; no generic VOC, particulate or exhaust quantity is fabricated.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `roof_truss_erection` | Roof-truss placement, anchoring and braced erection-stage handover | required | Actual first erection of the declared factory timber roof-truss set on accepted bearings | Integrate finished trusses, bearing connectors and permanent braces; install/retain temporary stability; own erection corrections and disposition exits | 1 item accepted complete erection-stage set |

One node owns receipt, handling, sequential lifting/placement, fastening/bracing, inspections and local placement/fixing corrections. These operations produce one independently handed-over service, not artificial intermediate products. The site operator does not fabricate trusses. Suspect components leave this node through `rejected_truss_returns` or `erection_waste`; genuine unused materials/packaging use `reusable_returns`. Temporary-asset returns already covered by their service stay inside that service boundary.


### Process: Roof-truss placement, anchoring and braced erection-stage handover (`roof_truss_erection`)

#### Inputs

##### Product flows

###### Factory metal-plate-connected timber roof trusses at supply gate (`roof_trusses`)

Record each finished truss design ID delivered for this set, including replacement pieces. Factory connector plates and factory timber belong to this finished-product input and must not be added again as raw materials.

- Selected flow: Factory metal-plate-connected timber roof trusses at supply gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual delivered truss counts by design ID, reconciled to installed, returned, discarded and retained-stock states; all attributable replacement supply remains included.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`

Range evidence need: Obtain the actual package schedule, dispatch/receipt and replacement records; no universal truss count, factory yield or mass-per-truss range is established.

###### Actual electricity supplied to erection equipment (`installation_energy`)

Record directly controlled fastening/drilling tools, compressor, charging and other installation electricity when used and not covered in a provider service. Exclude factory energy already in truss inputs.

- Selected flow: Actual electricity supplied to erection equipment
- Flow property / unit: Energy / kWh
- Amount rule: Metered or traceably allocated actual electricity by supply and equipment/period, including correction activity and shared compressor/charging use.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Obtain actual meter/charging/compressor records and shared-consumer allocation; an unspecified grid, compressor efficiency or energy-per-truss is not a numerical range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Braced timber roof-truss set erection-stage service (`erected_roof_truss_set`)

The sole reference output is the actual complete specified set accepted at the qualified braced erection-stage gate. Later diaphragm dependency, retained supports and responsibility transfer remain declared in this service identity.

- Selected flow: Braced timber roof-truss set erection-stage service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `sbca-installation-2023`

Range evidence need: The exact 1 item defines the complete accepted set; it is not a yield prior. Actual set completeness and inspection evidence are needed, and different geometries/packages are not automatically equivalent.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_accepted_service` | roof_truss_erection | There is one intended accepted erection service. Do not allocate to the existing bearing structure or later roof covering as a co-product. Rejected trusses, waste and returns are not accepted erection output; retain all attributable failed-attempt and replacement burdens. |  |
| `local_corrections_and_exits` | roof_truss_erection | Local repositioning/refastening repeats within this node. Link each correction to the original event and retain its extra materials, power and equipment. Link quarantine to product return or waste exit with actual receiver/status. Retained stock is reconciled separately; gross inputs, stock and returns must not be netted twice. No default recycling or biogenic-carbon credit is awarded. | `sbca-installation-2023` |
| `shared_resource_attribution` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel | Identify asset/service IDs, roof_truss_erection and every other consuming work package or reporting period. Prefer separately metered activity and directly attributable trips; split inseparable common burdens by a documented causal driver suited to the actual resource, retaining the whole consumer denominator, standby/mobilization treatment and sensitivity. Record rejected alternatives and inventory coverage; do not divide by this PCR output alone when other consumers exist. |  |
| `support_phase_attribution` | temporary_stability_service | Index P1 erection to signed gate, P2 retained support pending the separately owned diaphragm/stability gate, and P3 authorized removal/return/end-of-use. Attach each asset, replacement, maintenance, transport and removal event to its actual phase and consumer. Allocate production and termination burdens once across the documented service cycle; phase shares and receiving dataset responsibilities must reconcile to that whole cycle. Provider ownership does not remove burdens. Missing termination owner or service coverage blocks finalization. | `sbca-bcsi-current` |
| `provider_and_direct_operations` | lifting_access_service; temporary_stability_service; logistics; installation_energy; direct_fuel; direct_releases | For each actual provider boundary, choose service-inclusive inventory or underlying disaggregated operation. Explicitly mark which fuel, electricity, asset and release burdens are included and which require separate exchanges. Counting service duration alone is insufficient. Material returns already included inside a service must not appear again as separate return outputs. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_components` | `roof_truss_erection` | component receipts, use, replacements and stock | material ledger | set_id; truss/design_id; supplier_gate; kit_coverage; material/specification; piece_count; net_mass; moisture_basis; receipts; replacement; installed; returned; closing_stock; period; event_id | Reconcile supplier schedule and delivery tickets to installation count/BOM, calibrated weighing or actual item-specific mass records; keep species/grade/treatment/coating and material types distinct. Attribute receipts/use/stock to this set and correction events before normalizing to accepted complete sets. | item; kg | each receipt, issue, correction and stock closure | P1 erection plus actual replacement events | actual site, package and suppliers | per reference flow | Traceable schedule, weighing/calibration, receipts, stock reconciliation and approved connection/brace documents; no generic density. |
| `cp_services` | `roof_truss_erection` | temporary stability, lifting and access | service and asset ledger | set_id; asset/provider_id; approved_plan; component_inventory; coverage; all_consumers; P1/P2/P3; start/end; hours; operating/standby; mobilization; maintenance; replacement; custody; removal_owner; removal/return_event; driver; total_denominator; allocation_share | Reconcile crane/access logs and approved temporary-bracing records with provider inventory coverage. Record every consumer and phase, actual period-specific causal driver and full denominator, including later roof work. Obtain production/use/removal/transport/end-of-use coverage or explicit linked inventories; unresolved future events remain disclosed obligations and prevent a completed package. | h; underlying material/energy/service units | each service period, custody transfer and termination event | P1 erection, P2 retention, P3 authorized removal and return | actual site plus every shared consumer/provider | per reference flow | Plan acceptance, provider primary inventory, complete consumer denominator and phase ledger; shares sum to the bounded cycle, removals authorized only after documented later stability. |
| `cp_logistics` | `roof_truss_erection` | component, residual and return freight | consignment ledger | set_id; transfer_id; material; net_payload; origin/destination; mode; vehicle/provider; distance; empty_return; included_upstream; shared_consumers; period | Collect actual weigh/dispatch and route records for each leg. Calculate actual payload-distance activity, attribute inseparable shared legs with complete payload/consumer data, and reconcile provider/upstream coverage before normalizing to accepted sets. | t*km | each physical transport leg | P1 and attributable P2/P3 legs | actual source-site-receiver routes | per reference flow | Payload and route evidence, allocation records, matched transfer IDs and transport coverage without duplicated trips. |
| `cp_resources` | `roof_truss_erection` | direct electricity and fuel | meter and fuel ledger | set_id; equipment; provider_coverage; supply/fuel_identity; opening_stock; delivered; closing_stock; meter_start/end; charging; operating_period; all_consumers; allocation_driver; factor/unit; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | Use actual electricity meters/charging and consumed fuel stock reconciliation. Distinguish fuel and electricity, include compressor/tools and correction events, and allocate shared operation using measured consumption or documented causal use with complete denominator; record factors for any actual conversion. Supply and burn are separate under fuel_supply_fate; collect every exclusive outlet, actual denominator and its unit, keep nonreturned waste/loss supply burdens, and report missing fates. | kWh; kg; original measured units | each meter/refuelling period and stock closure | P1 and any directly owned P2/P3 operation | actual site equipment and supplies | per reference flow | Meter calibration, receipts, stocks, equipment logs, conversion evidence and confirmation that provider inputs omit these direct operations. |
| `cp_residuals` | `roof_truss_erection` | packaging, usable returns, rejected trusses, waste and stock | material disposition ledger | set_id; event_id; transfer_id; material/truss_id; count; net_mass; opening/closing_stock; received; installed; product/waste_status; defect; manufacturer_disposition; receiver; route; capture; phase | Track incoming packaging and each residual by material and state. Reconcile usable return dispatch to receiving custody; quarantine rejected trusses until written disposition; use waste tickets for discarded material. Keep retained stock and service-internal asset returns separate, with gross supply and stock/return adjustment made once. | kg; item | each receipt, rejection, return, waste transfer and stock closure | P1 with attributable continuation/removal residuals linked to P2/P3 | actual site, suppliers and named receivers | per reference flow | Weighing/counts, matched receiver evidence, status/defect decisions, waste treatment and material closure; no assumed recovery credit. |
| `cp_acceptance` | `roof_truss_erection` | complete accepted erection-stage set | documented acceptance record | set_id; truss_ids/count; span/pitch/spacing/layout; bearing_acceptance; design/placement_revision; instruction_edition; approved_lift/temporary/permanent_plans; connection/brace_completion; temporary_support_list; later_stability_dependency; P1/P2/P3; custody/removal_owner; inspection; defect_closure; accepted_complete_set_count | Compare actual installed truss IDs, bearing connections and permanent member bracing to approved documents. Inspect and close defects, record retained temporary stability and downstream responsibilities, then obtain signed erection-stage handover; count only complete qualified sets. The reference remains one declared set rather than individual trusses or area. | item | one complete set at signed gate and each change to retained-support obligations | P1 signed gate with explicit P2/P3 responsibility linkage | actual declared set at its site | per reference flow | Signed designer/installer/receiver documents as applicable, inspection and closure evidence; incomplete or unsafe sets are not accepted. |
| `cp_releases` | `roof_truss_erection` | direct characterized releases | measurement or activity-factor record | set_id; equipment/source; provider_coverage; substance; medium; particle_size/basis; activity; factor/source/date; control/capture; measurement; uncertainty; period; allocation | For directly controlled actual operation obtain calibrated sampling or a justified source-specific factor applied to measured activity. Record each substance and compartment separately and attributable phase/consumer; distinguish captured waste and provider-included emissions, and document uncertainty or unmeasured gaps. | kg | each measurement or equipment/activity period | actual direct P1 and attributable P2/P3 operation | actual site receiving compartment | per reference flow | Measurement QA or actual applicable factor reference with technology/fuel/controls and uncertainty; generic pollutant names cannot select concrete identities. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_complete_set` | all inventory rows | Aggregate actual attributable material, resource, residual and service quantities for the declared complete package; where one measured campaign covers several accepted sets, retain each configuration and allocate with its actual records before expressing quantities per reference flow. Do not divide individual truss counts into a new reference product. | actual records; accepted complete set ledger; allocation evidence | per reference flow inventory quantities |  |
| `component_closure` | roof_trusses; permanent_bracing; bearing_connectors; transport_packaging; reusable_returns; rejected_truss_returns; erection_waste | Reconcile opening stock plus receipts to installed/consumed quantities, genuine product returns, characterized waste and closing stock by actual material or truss ID. Record unresolved balance gaps and correction supply explicitly; do not use an output service count as a material mass. | cp_components; cp_residuals | material-specific count/mass reconciliation |  |
| `shared_cycle_closure` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel | For each event/resource, apply its evidenced allocation share to the full covered inventory, not just billed hours. Reconcile all consumer and P1/P2/P3 shares to the complete resource/service boundary, then retain each accepted set attribution once. | cp_services; cp_logistics; cp_resources; all-consumer and phase ledger | complete allocated underlying burden with service activity |  |
| `release_calculation` | direct_releases | Use measured released mass or actual measured activity with a source-specific documented factor, retaining unit conversion, capture assumptions and uncertainty. List the actual external factor reference in the constructed dataset; do not invent a factor in this PCR. | cp_releases; actual activity/factor or measurements | substance- and compartment-specific released mass |  |
| fuel_supply_fate | direct_fuel | For each actual fuel identity and nonoverlapping node/event period, G_fuel = opening usable fuel + external receipts - closing usable fuel stock, including equipment tanks, with container tare excluded and same-boundary issues/transfers not added as new receipts. G_fuel is the gross physical product input before genuine usable outward U_fuel, outward transfer X_fuel, collected unburned fuel W_fuel and uncontained fuel P_fuel. Keep those exclusive outlets separate and resolve actual product, waste stream or substance/medium identities; a total spill is an incident diagnostic, never another deduction. W_fuel and P_fuel mean the contained fuel mass, not the total mass of contaminated absorbent or wastewater. B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel only with a complete supported fate ledger; unknown fate stays a gap and is not presumed burned. Only independently supported B_fuel drives combustion emissions. Retain upstream supply burdens of all nonreturned unburned fuel, waste and loss; only original unused-material burden may follow a documented usable exit, without a second net-input deduction or avoided-production credit. Carry opening/closing stock burden once. Normalize each physical quantity once by D_fuel, the independently measured positive accepted lot quantity in this PCR reference unit (accepted volume, area, axial length, steel mass or complete accepted count as defined in sections 3-4), never by a fuel quantity or an intermediate output. Existing actual_consumed/fuel-use fields are burn-activity records; they cannot replace G_fuel as the upstream input. Provider-included fuel and its emissions have one owner; do not add overlapping foreground supply or combustion. | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `actual_design_and_gate` | reference product | Preserve actual set identity, design/placement revisions, accepted host interfaces, document applicability and signed gate. No unresolved defect may be hidden in accepted output. | cp_acceptance; actual project/manufacturer/engineer records |
| `supply_and_quantity_quality` | all component and residual cards | Retain material identity and state, actual gross/stock/return amounts, net mass/count evidence, moisture basis and uncertainty. Candidate numerical ranges require independently reviewed comparable evidence; a batch maximum cannot validate itself. | cp_components; cp_residuals |
| `phase_and_service_completeness` | temporary_stability_service; lifting_access_service | Declare P1/P2/P3 dates/owners and full service coverage; reconcile capital materials, maintenance/use, replacements and termination once across all consumers. Unconfirmed later removal is a gap rather than zero. | cp_services; provider inventory; responsibility transfer |
| `resource_release_quality` | installation_energy; direct_fuel; direct_releases; logistics | Use actual supply, fuel, technology/mode and receiving media; retain meter/stock/distance evidence and applicable factors. Disclose unmeasured resources/releases and provider exclusions. | cp_resources; cp_releases; cp_logistics |
| `identity_and_range_gaps` | all cards | Resolve each concrete exchange identity, support property/unit and actual-evidence Range needs before final TIDAS publication. A conditional umbrella becomes zero, one or several exchanges from foreground evidence; absence of evidence is not zero. | actual lookup/support verification and foreground collection package |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_completeness` | erected_roof_truss_set | Require 1 item, the real output link and identical complete-set meaning in both languages. Match each truss to the approved package and signed erection gate; exclude unresolved rejects from accepted output. | `un-cpc3-2025`; `sbca-installation-2023` |
| `structural_handover` | roof_truss_erection | Verify actual bearing acceptance, placement/connection records, permanent member restraints/bracing, retained temporary stability, construction-stage restrictions, inspection closure and named responsibility transfer; do not infer finished diaphragm/roof performance. | `sbca-installation-2023`; `sbca-bcsi-current` |
| `reject_path_and_balance` | all material and residual cards | Reconcile each material state and defect event to installed output, stock, genuine usable return, rejected product return or waste. Require receiver/status and transfer IDs; retain correction burdens and prevent double subtraction or rejected-set acceptance. |  |
| `shared_phase_coverage` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel; direct_releases | Require complete all-consumer and P1/P2/P3 ledgers, actual causal allocations and full service coverage. Verify replacement/termination owner, authorized support removal gate and matching receiving dataset responsibility; unresolved phase/asset/removal coverage blocks completion. Count provider-included and direct operation once. |  |
| `actual_identity_quantity` | all inventory rows | Require actual identity/property/unit compatibility and traceable linked node-specific protocols. Each Range evidence need must be closed by actual evidence or disclosed as unresolved; fixed reference quantity is a definition, not a yield range. Check every actual conditional material/waste/substance separately and reject fabricated default fuel, density, loss, fastener, emission or carbon-credit values. |  |
| validate_fuel_supply_fate | direct_fuel | Check G_fuel, B_fuel and all exclusive outlets against the actual fuel protocol, stock and provider coverage. Nonreturned unburned waste/loss keeps its upstream burden; unresolved fate, fuel constituent or positive D_fuel blocks a complete quantitative fuel inventory. Do not substitute burned activity for purchased fuel or deduct total spill plus its component outlets. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground site erection data package, with process and lifecyclemodel projections and actual component/resource background links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Model first erection of the declared matching timber roof-truss set at its qualified braced erection-stage gate, with disclosed later stability obligations |
| excluded_use | Generic roof area, one factory truss, complete building/roof structural or weather performance, floor/metal trusses, relocation, manufacturing or structural repair |
| required_metadata | All required reference qualifiers; node and set ID; supply-kit and provider boundaries; component/resource geography and dates; P1/P2/P3 owners/events; all-consumer allocation; receiver/stock/waste paths; actual source versions and exchange identities |
| required_quality_disclosure | Identity and support gaps; unresolved Range evidence; measurements and uncertainty; exclusions; shared/capital/service/termination coverage; actual later diaphragm dependency and support-removal responsibility |
| update_trigger | Changed design/package or host interface; current instruction applicability; truss/bracing/connection specification; damaged/altered components; service/provider allocation or phase owner; resource/factor identity; revised stability gate or removal plan |


## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, printed p. 291, 54522 and adjacent 54530. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope and narrower roof-truss route; roof-covering separation |
| `sbca-installation-2023` | extension_guidance | Structural Building Components Association, BCSI Guides Truss Installation Process, Pt 2, 8 August 2023. https://www.sbcacomponents.com/media/bcsi-guides-truss-installation-process-pt-2 | Qualitative pre-review, bearing/placement/anchoring, temporary stability, permanent member-bracing and inspection sequence; no universal numerical design values adopted |
| `sbca-bcsi-current` | extension_guidance | Structural Building Components Association, Building Component Safety Information Guide landing page, revised BCSI-2025, accessed 15 October 2026. https://www.sbcacomponents.com/bcsi | Current edition context and distinction of temporary/permanent restraint and bracing; full paid guide not claimed read |
| `sbca-jobsite-packages` | extension_guidance | Structural Building Components Association, Jobsite Packages, accessed 15 October 2026. https://www.sbcacomponents.com/jobsite-packages | Job-specific installation/safety package and truss design/project-document requirement; actual package applicability remains foreground evidence |
