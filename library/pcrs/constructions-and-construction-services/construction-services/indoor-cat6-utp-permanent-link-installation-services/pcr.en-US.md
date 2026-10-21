---
pcr_id: pcr.constructions-and-construction-services.construction-services.indoor-cat6-utp-permanent-link-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Indoor Cat 6 UTP permanent-link installation services

## 1. Scope and Applicability

First installation of a fixed indoor four-pair Cat 6 UTP solid-copper permanent link from one existing patch-panel carrier port to one existing work-area outlet carrier. Dry manual cable placement uses an accepted prepared accessible pathway; both ends receive compatible tool-free insulation-displacement jack assemblies. The installer labels, tests the permanent link, corrects defects and hands over the accepted link with its actual configuration and test file. Leviton Atlas-X1 61UJK illustrates the jack interface, without making a brand a category requirement. [leviton-atlasx1-utp]

Exclude new trays, ducts, penetrations, racks, panel/outlet carriers and building works; old-link removal; shielded, fibre, coaxial, outdoor or inter-building routes; splices, consolidation points and plug-terminated MPTL; equipment/patch cords; active devices, network configuration, PoE load testing and operation. A separately purchased pathway or carrier construction service is an upstream interface, not a hidden installation input. Work needing chemical pulling aids, drilling or different termination technology requires a reviewed scope change.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.indoor-cat6-utp-permanent-link-installation-services |
| classification_refs | CPC 3.0 54619, Other electrical installation services; narrower |
| covered_products | First installation of a fixed indoor four-pair Cat 6 UTP solid-copper permanent link from one existing patch-panel carrier port to one existing work-area outlet carrier. Dry manual cable placement uses an accepted prepared accessible pathway; both ends receive compatible tool-free insulation-displacement jack assemblies. The installer labels, tests the permanent link, corrects defects and hands over the accepted link with its actual configuration and test file. Leviton Atlas-X1 61UJK illustrates the jack interface, without making a brand a category requirement. [leviton-atlasx1-utp] |
| excluded_products | Exclude new trays, ducts, penetrations, racks, panel/outlet carriers and building works; old-link removal; shielded, fibre, coaxial, outdoor or inter-building routes; splices, consolidation points and plug-terminated MPTL; equipment/patch cords; active devices, network configuration, PoE load testing and operation. A separately purchased pathway or carrier construction service is an upstream interface, not a hidden installation input. Work needing chemical pulling aids, drilling or different termination technology requires a reviewed scope change. |
| representative_product | A fixed Cat 6 UTP four-pair link with two compatible tool-free IDC jacks on prepared carriers |
| production_route | Receive matched cable, jacks and accessories; accept prepared pathway/carriers and disconnected interfaces; dry-place cable without exceeding its actual bend/tension limits; terminate both jacks with declared pair pattern; mount and label; certify using the selected Cat 6 permanent-link limits and suitable adapters; repair/retest; accept and issue the as-built/test record. |
| market_state | Accepted indoor Cat 6 UTP permanent link at installer handover |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted indoor Cat 6 UTP permanent link at installer handover |
| How much | One accepted complete same-configuration link; actual D independently established before normalization |
| How well | Selected Cat 6 permanent-link limits passed, original test evidence retained, defects closed and signed handover |
| How long or cycle | One receipt-to-acceptance job, including actual corrective work and retests; separately indexed resource-life and reporting periods |
| reference_flow_link | `accepted_link` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted indoor Cat 6 UTP permanent link at installer handover |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Link identifier and end ports; actual cable manufacturer/model, four-pair solid-copper construction, jacket/fire rating and installed physical length including retained slack; exact jack models and pair pattern; carrier/pathway readiness and ownership; installation date; test standard and edition, permanent-link limit set, cable velocity setting, certifier/adapter identities and calibration; complete original results, repairs, retests and signed acceptance. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_acceptance to count D actual unique accepted complete links of the same disclosed configuration. D must be positive. A cable metre, connector, test run or passed pair is not a link. The output amount is 1 item; there is no service-mass conversion. |
| material_mass | copper_data_cable, cat6_utp_jacks, permanent_accessories, incoming_packaging, usable_material_returns, installation_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_materials records input net mass; cp_releases records returned product and waste net mass. Use calibrated weighing or traceable exact-SKU count/length-to-net-mass evidence. Installed cable length includes retained slack and termination insertion; electrical test length is not automatically physical consumed length. Do not use gross shipping mass or sum unlike materials into one exchange. |
| electricity_basis | installation_electricity | Energy | kWh | Record actual external charger/test/tool electricity under cp_energy, including corrections and retests before acceptance. Preserve provider, voltage and meter boundary. Battery Ah, tester run-time and net calorific value are not electricity. A kWh unit-group row alone does not verify an Energy property. |
| resource_basis | owned_tools_and_certifier, contracted_support | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_resources distinguishes a lifecycle fraction of an exact owned asset from a real complete purchased service event. Genuine hourly hire requires compatible Duration support and a separately reviewed exchange; do not rename hours to item. Test adapters and reusable leads are tool assets, not installed patch cords. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted existing accessible path and carrier ports; communications interfaces disconnected; actual supplies received |
| starting_condition_role | Declared prerequisite outside foreground construction responsibility |
| product_classification_scope | Premises telecommunications wiring; narrower subset of CPC3.0 54619, excluding cableTV, alarms and utility network construction |
| recursive_input_rule | Declare prior state/gate of any same-category input; do not recount an already-installed link |
| upstream_dataset_requirement | Exact compatible supplied component and resource packets with manufacture, delivery, packaging and provider-capital inclusions declared |
| disclosure | Link identifier and end ports; actual cable manufacturer/model, four-pair solid-copper construction, jacket/fire rating and installed physical length including retained slack; exact jack models and pair pattern; carrier/pathway readiness and ownership; installation date; test standard and edition, permanent-link limit set, cable velocity setting, certifier/adapter identities and calibration; complete original results, repairs, retests and signed acceptance. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| prepared_interface | Begin with accepted existing pathway and carriers and disconnected communications interfaces, plus receipt of installer-responsible supplies. Record the actual interface owner and readiness evidence; readiness is neither a product exchange nor avoided construction credit. |  |
| supply_boundary | Use component upstream packages carrying manufacture and actual delivery with explicit packaging inclusion. Track incoming packaging physically even when its manufacture is embedded upstream; add a separate burden only for a documented exclusion. Supplied jack wire managers and bundled fixings are counted once. |  |
| same_category_input | A purchased already-installed permanent link is not raw cable. Declare its existing state, prior gate and all upstream work; do not recursively count the same installation as a new first-installed output. Refurbishment or inherited in-scope work requires separate scope review. |  |
| integration_and_rejects | install_certify owns cable placement, pair termination, mounting, labelling, permanent-link testing and signed handover. A failed wire map or performance test stays a rejected in-node state; keep its original issue, repair/replacement and retest event linked to this node. No accepted output until all required tests pass and defects close. |  |
| resource_and_periods | Identify each owned cutter, stripper, certifier, adapter and charger across acquisition, use/reporting periods, calibration/maintenance, replacement and retirement. Enumerate every benefiting job/node and period in its resource packet, including jobs outside this dataset. Purchased providers own their equipment lifecycle. Keep original resource and job periods even if receipt and acceptance occur in different reporting periods. Later networking, maintenance and operational electricity are excluded. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual permanent retention and identification accessories (`permanent_accessories`)

Process / prospective direction / type: `install_certify` / `inputs` / `product`.

Conditional: each actual tie, clip, identifier and separately supplied compatible fixing retained in the selected link; expand separate SKUs and materials. Existing carriers are excluded. Do not repeat jack-bundled items or assume a fixed accessory count.

Range evidence need: Actual retained SKU schedule and supply/return/waste counts with matching net masses.

- Collection subject: Actual permanent retention and identification accessories
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied permanent accessory net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

#### Collection requirement: Incoming packaging by actual material and supply event (`incoming_packaging`)

Process / prospective direction / type: `install_certify` / `inputs` / `product`.

Conditional: each actual reel, carton, bag or protective material. Record custody and whether its manufacture/delivery is already in the supplied upstream package. For returnable reusable reels record full actual physical receipt/return mass; a separate matched upstream resource-life packet supplies the burden share. Do not scale custody mass by that share or charge a whole new reel each job.

Range evidence need: Matching shipment material mass, reuse/custody history and upstream inclusion evidence.

- Collection subject: Incoming packaging by actual material and supply event
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable incoming packaging net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

#### Collection requirement: Attributed exact reusable tools and permanent-link certifier resources (`owned_tools_and_certifier`)

Process / prospective direction / type: `install_certify` / `inputs` / `product`.

Conditional: each actually owned stripper/cutter, certifier, permanent-link adapter, reusable test lead or charger. Expand exact asset models/serials and all consumers/periods. Attributed manufacture and maintenance come from the complete resource packet; do not treat reusable test leads as permanent installed components.

Range evidence need: Complete resource-life packet, causal use across all jobs/periods, replacements and remaining-use evidence; no generic lifespan.

- Collection subject: Attributed exact reusable tools and permanent-link certifier resources
- Flow property / unit: Number of items / item
- Amount rule: Actual attributed exact owned-asset lifecycle fraction / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resources`

#### Collection requirement: Actual external installation and test electricity (`installation_electricity`)

Process / prospective direction / type: `install_certify` / `inputs` / `product`.

Conditional: external electricity for tools, certifier charging and original/corrective tests before handover. Expand actual provider/voltage/technology supply identity and distinguish provider-embedded electricity. A battery is an asset/component, not electricity.

Range evidence need: Metered job and charger/test evidence, complete sharing denominator and exact supply; Energy support still needs verification.

- Collection subject: Actual external installation and test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable external electricity / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

#### Collection requirement: Actual complete purchased support service events (`contracted_support`)

Process / prospective direction / type: `install_certify` / `inputs` / `product`.

Conditional: each genuinely purchased complete test, access or other support event with a disclosed contractual configuration and reference. Provider owns its equipment lifecycle; check embedded delivery/energy and avoid duplicating internal test resources. Hours are not counted events.

Range evidence need: Original contract event reference, scope/inclusions, quantities and shared activity; hourly hire needs Duration support.

- Collection subject: Actual complete purchased support service events
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable complete purchased service events / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resources`

#### Collection requirement: Actual unchanged usable material returned beyond installer custody (`usable_material_returns`)

Process / prospective direction / type: `install_certify` / `outputs` / `product`.

Conditional: each actual usable unused cable/component or usable reusable reel/packaging returned with original SKU identity, condition and receiver. Reconcile unused stock first; no automatic avoided-production credit. Failed unusable material is waste, not this product output.

Range evidence need: Matching return tickets, original issue/stock linkage, retained usability and net mass.

- Collection subject: Actual unchanged usable material returned beyond installer custody
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable unchanged usable return net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

#### Collection requirement: Actual installation waste by material, state and receiver (`installation_waste`)

Process / prospective direction / type: `install_certify` / `outputs` / `waste`.

Conditional: separately expand actual trimmed insulated conductors, jacket/filler offcuts, rejected components, spent packs and other waste. Identify composite cable versus separated copper/polymer and actual hazardous status/authorised receiver. Do not presume recycling or call measured closure residual airborne dust.

Range evidence need: Original cut/defect/packaging events, material-state separation, actual tickets/net masses and treatment boundary.

- Collection subject: Actual installation waste by material, state and receiver
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable installation waste net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_certify | Install and certify permanent link | required | All in-scope first installations | Independent integration: cable, two jack assemblies and permanent accessories; actual dry manual placement, termination, labels, rejected-state correction and test/handover responsibility | One accepted complete same-configuration link; actual positive D |

### Process: Install and certify permanent link (`install_certify`)

Conditional cards require actual zero/one/multiple separate exchanges by SKU, state and receiver. Missing records never establish zero. Dry manual work includes no assumed drilling, chemicals, combustion or direct emissions; unexpected activities/releases require explicit scope/inventory review before completion, not silent omission. Failed terminations loop inside install_certify and may exit only through recorded usable return or actual waste.

#### Inputs

##### Product flows

###### Four-pair Cat 6 UTP solid-copper cable supplied for installation (`copper_data_cable`)

Use the actual cable SKU, conductor construction and jacket/fire rating. Trace the complete issued cable quantity, retained slack and stripped ends; preserve matching stock and upstream delivery boundary. CCA, screened cable and factory patch cords are different identities.

Range evidence need: Exact-SKU net mass per physical length, actual issued/installed/stock/waste lengths and like-configuration link lengths; no universal kg per link.

- Selected flow: Four-pair Cat 6 UTP solid-copper cable supplied for installation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied cable net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

###### Matched Cat 6 UTP tool-free jack assemblies (`cat6_utp_jacks`)

Record the actual compatible jack model at each end, including its supplied wire manager once. Pair ordering, preparation and closure follow delivered-model instructions. A jack product is not an installed tested link. [leviton-atlasx1-utp]

Range evidence need: Matching model assembly mass, actual issued/replaced/returned quantities and documented bundled parts; packaging mass is separate.

- Selected flow: Matched Cat 6 UTP tool-free jack assemblies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied jack assembly net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted indoor Cat 6 UTP permanent link at installer handover (`accepted_link`)

Complete labelled permanent link between the two declared jack interfaces, with accepted Cat 6 permanent-link test evidence, defects closed and signed installer handover. It excludes active devices and equipment cords. Count the link once, not its pairs, jacks or retests.

Range evidence need: Definition requires independently observed D and actual matched configuration/test acceptance; it is not an assumed yield or numerical quantity prior.

- Selected flow: Accepted indoor Cat 6 UTP permanent link at installer handover
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| failed_work | Retain failed tests, discarded ends and corrective labour/resources with the original link job; no burden transfer to a hypothetical good link, avoided-production credit or intended co-product from returns. Recovery or waste treatment starts at the declared actual receiver and must not be counted twice. |  |
| resource_share | For each resource r use recorded causal physical activity A_rj and a_rj = A_rj / sum_k(A_rk) across every benefiting job k in the same resource-life packet. Use one documented activity basis and positive total; shares sum to 1 across the complete packet. Attribute B_r * a_rj / D lifecycle burden and a_rj / D item of the exact owned asset. Missing lifetime, remaining use or other consumers is an evidence gap, not a default lifetime or equal link-count split. |  |
| period_closure | Index original manufacture/acquisition, each use period, calibration/repair, replacement and retirement separately. Link all input, output, asset and defect events to job and period. Document each period-specific decision and reconcile packet totals once; a replacement event is not an automatic new whole certifier per link. |  |
| purchased_service | Record actual purchased test/access/support events with their contractual reference and inclusion schedule. Reconcile provider-owned capital and embedded fuel, delivery and electricity before adding any separate foreground consumption. A provider test event and the same internally performed test cannot both own the same burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_certify | Accepted link and test evidence | installation acceptance record | job/link/end-port IDs; configuration and physical cable length; actual D; standard edition/limits; NVP; certifier/adapter serial/calibration; original pass/fail files; repairs/retests; acceptance date/signature | Independently count unique fully accepted links from signed records; reconcile each to original permanent-link test files, selected limits and complete defect closure. A simple continuity check or channel test is not the selected acceptance test. | item | Every link and every original/corrective test | Receipt through signed acceptance with original reporting dates | One declared indoor job and disclosed same-configuration group | per reference flow | Signed as-built/end-port map, complete native results including failed attempts, selected test setup and calibration evidence; Aggregation detail: Independent accepted D; per reference flow |
| cp_materials | install_certify | Supply and installation inputs | SKU custody and measurement record | shipment/job/SKU; manufacturer/model/material; net mass; delivered and used lengths/counts; exact-SKU conversion; installed slack; opening/closing stock; bundled parts; upstream delivery/packaging inclusion | Weigh separately by matching SKU or use traceable same-SKU net-mass-per-length/item evidence. Reconcile the actual cable reel and both terminations with installed length, retained ends, waste and stock; do not substitute electrical test length for measured consumption. | kg | Every shipment, issue and stock event | All materials attributable to receipt-to-acceptance job | Exact installation job and supplying records | per reference flow | Calibrated scale or matching conversion evidence; supplier inclusion schedule; event-level stock closure; Aggregation detail: Actual attributable supplied net mass; per reference flow |
| cp_energy | install_certify | External electricity | meter and charger record | meter start/end kWh; date; provider/voltage; exact charger/tester; activities for all shared users; embedded service energy; corrections/retests | Measure attributable electricity at declared external supply boundary, including charging for this job. Reconcile shared consumer activities and service inclusions; missing metering remains a gap, not zero or battery capacity. | kWh | Every relevant charging/test interval | Actual pre-acceptance intervals, retaining original dates | Declared job plus all sharing consumers | per reference flow | Meter trace/calibration and complete shared-use allocation/inclusion ledger; Aggregation detail: Actual attributable external electricity; per reference flow |
| cp_resources | install_certify | Owned resources and purchased support | resource-life and contract event ledger | asset/model/serial/owner; acquisition/use/maintenance/replacement/retirement dates; complete lifecycle packet B_r; every consuming job/node/period; physical activity A_rj; future-use gap; contract event/reference/inclusions | Link exact reusable tools, certifier, adapters and chargers to all actual consumers and lifecycle periods. Record causal activity and actual complete purchased service events separately; verify provider asset ownership and energy inclusions. Do not assume lifespan. | item | Every resource period and contract event | Full resource packet and original job periods; disclose unknown remaining use | All consuming jobs/nodes, including those outside the reported site | per reference flow | Ownership, serial, activity and inclusion records; complete consumer/period/share closure with gaps explicit; Aggregation detail: Attributable exact asset fraction or genuine whole service events; per reference flow |
| cp_releases | install_certify | Usable returns and waste | exit and receiver ticket | original job/issue/defect ID; material/SKU; actual mass and state; reusable versus waste classification; receiver and date; authorised treatment boundary; retained/captured/emitted distinction; closure residual | Weigh each actual unchanged usable return separately from each actual waste material/state/receiver stream. Link rejected terminations and cable ends to original in-node correction events. Investigate residual mass; do not label it an air emission or zero. | kg | Every return, rejection and disposal event | All original installation and corrective exits through handover | Declared job and each actual receiver | per reference flow | Traceable original-issue/defect link, weighing, custody and receiver evidence; Aggregation detail: Actual attributable usable-return or waste net mass; per reference flow |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_job | all inventory rows | q_i = attributable collected numerator_i / D; D is the independently accepted same-configuration link count from cp_acceptance. Keep every numerator measured independently, including failed work. | numerator_i; D; cp_acceptance | q_i |  |
| owned_resource_share | owned_tools_and_certifier | a_rj = A_rj / sum_k(A_rk); sum over all jobs k in the same complete resource-life packet. Attributed asset = a_rj / D item; burden = B_r * a_rj / D. Preserve each period-specific ownership decision. | A_rj; A_rk; B_r; D; cp_resources | attributed asset quantity and lifecycle burden |  |
| material_closure | copper_data_cable, cat6_utp_jacks, permanent_accessories, incoming_packaging, usable_material_returns, installation_waste | opening stock + receipts = retained installed material + closing stock + usable returns + actual waste + identified releases + unexplained residual, checked per matching material/SKU and job. Report measured tolerance and unresolved residual separately; unlike masses are diagnostics only. | cp_materials; cp_releases | SKU custody closure and residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| range_copper_data_cable | copper_data_cable | Range evidence need: Exact-SKU net mass per physical length, actual issued/installed/stock/waste lengths and like-configuration link lengths; no universal kg per link. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_cat6_utp_jacks | cat6_utp_jacks | Range evidence need: Matching model assembly mass, actual issued/replaced/returned quantities and documented bundled parts; packaging mass is separate. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_permanent_accessories | permanent_accessories | Range evidence need: Actual retained SKU schedule and supply/return/waste counts with matching net masses. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_incoming_packaging | incoming_packaging | Range evidence need: Matching shipment material mass, reuse/custody history and upstream inclusion evidence. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_owned_tools_and_certifier | owned_tools_and_certifier | Range evidence need: Complete resource-life packet, causal use across all jobs/periods, replacements and remaining-use evidence; no generic lifespan. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_installation_electricity | installation_electricity | Range evidence need: Metered job and charger/test evidence, complete sharing denominator and exact supply; Energy support still needs verification. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_contracted_support | contracted_support | Range evidence need: Original contract event reference, scope/inclusions, quantities and shared activity; hourly hire needs Duration support. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_usable_material_returns | usable_material_returns | Range evidence need: Matching return tickets, original issue/stock linkage, retained usability and net mass. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_installation_waste | installation_waste | Range evidence need: Original cut/defect/packaging events, material-state separation, actual tickets/net masses and treatment boundary. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_accepted_link | accepted_link | Range evidence need: Definition requires independently observed D and actual matched configuration/test acceptance; it is not an assumed yield or numerical quantity prior. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| configuration_group | all inventory rows | Keep job/site/time and physical length, cable/jack configuration and acceptance scope aligned; split materially unlike groups unless actual equivalence is demonstrated | As-built, matched BOM, original test and all raw numerator/D records |
| support_chain | all inventory rows | Keep Energy and actual hourly Duration support gaps distinct from verified Mass/kg and count/item; never use a near-match UUID | Concrete detail and exact property/unit reference chain |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| link_gate | Require declared endpoints/configuration, accessible existing pathway/carriers, correct matched cable/jacks and original permanent-link test result for every actual accepted link. Record selected standard edition/limit set, velocity setting, adapter and certifier calibration. Retain failures and retests; channel or continuity-only tests cannot establish this gate. | fluke-permanent-link-testing |
| reference_integrity | Final output, reference name and accepted_link association must denote the same complete service and Number of items / item basis. D is independently observed; incomplete or rejected links do not enter D. Group or split materially different lengths/configurations with explicit equivalence evidence; never equate all counted links by count alone. |  |
| custody_and_sources | Expand conditional cards into each actual SKU/material/state/receiver exchange, with its own verified concrete identity and net quantity. Check supplier delivery/packaging inclusions, stock/returns/waste and replacement events. Zero requires affirmative no-activity evidence; an unaccounted residual is a gap. A source about termination does not prove resource life, emission factor or waste range. |  |
| resource_closure | Reconcile every owned resource, purchased provider, consuming job/node, reporting/use period and replacement/retirement event. Require positive causal-activity totals, complete shares and no duplicate capital or energy. Unknown future use or Duration/Energy support blocks final exchange binding. |  |
| identity_and_range | Verify selected concrete flow detail and property-to-unit-group reference chain before downstream exchange creation. Preserve material/jacket, gate, direction and destination; no name-only or NCV substitution. Range evidence must match actual configuration and normalization denominator. Checker success verifies declared relationships, not physical values, UUID resolution or publication readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground installation data package |
| downstream_use | process and lifecyclemodel projections; secondary_dataset or background_dataset only with compatible boundary |
| allowed_use | Same disclosed fixed indoor Cat 6 UTP solid-copper, two-tool-free-jack permanent-link installation, physical length/configuration and acceptance gate |
| excluded_use | Exclude new trays, ducts, penetrations, racks, panel/outlet carriers and building works; old-link removal; shielded, fibre, coaxial, outdoor or inter-building routes; splices, consolidation points and plug-terminated MPTL; equipment/patch cords; active devices, network configuration, PoE load testing and operation. A separately purchased pathway or carrier construction service is an upstream interface, not a hidden installation input. Work needing chemical pulling aids, drilling or different termination technology requires a reviewed scope change. |
| required_metadata | Link identifier and end ports; actual cable manufacturer/model, four-pair solid-copper construction, jacket/fire rating and installed physical length including retained slack; exact jack models and pair pattern; carrier/pathway readiness and ownership; installation date; test standard and edition, permanent-link limit set, cable velocity setting, certifier/adapter identities and calibration; complete original results, repairs, retests and signed acceptance. |
| required_quality_disclosure | Actual numerator/D records; all method/source and matching-SKU conversion evidence; complete owned/provider resource and period packets; supply inclusion and custody closure; identity/support, quantity/Range and remaining-life gaps |
| update_trigger | Changed cable/jack configuration, path or interface responsibility, termination/test limit set, contract/service ownership, stronger quantity/resource or identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-54619 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 explanatory notes, PDF293–294: telecommunications wiring inclusion and adjacent exclusions; classification context only |
| leviton-atlasx1-utp | handbook | https://leviton.com/content/dam/leviton/network-solutions/product_documents/instruction_sheet/Leviton_IST_5EUJK_61UJK_6AUJK_AtlasX1_UTP_Jacks.pdf | PK-A3036-10-02-0D, PDF1–2: illustrative matched UTP jack, supplied wire manager, hand-tool termination and carrier interface; not quantity or asset-life evidence |
| fluke-permanent-link-testing | handbook | https://www.flukenetworks.com/blog/cabling-chronicles/top-10-cable-testing-mistakes | June5,2025, sections1,2,4,6: selected test setup and original results; permanent-link versus channel gate; no universal installed material/energy amounts |
