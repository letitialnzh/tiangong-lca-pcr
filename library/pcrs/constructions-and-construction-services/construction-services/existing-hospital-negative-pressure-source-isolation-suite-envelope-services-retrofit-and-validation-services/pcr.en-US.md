---
pcr_id: pcr.existing-hospital-negative-pressure-source-isolation-suite-envelope-services-retrofit-and-validation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing hospital negative-pressure source-isolation suite envelope, services retrofit and validation services


## 1. Scope and Applicability

This PCR covers the completed envelope and building-services retrofit of one source-negative isolation suite in a retained hospital: patient bedroom, entry lobby and en-suite form one coordinated accepted intervention. Survey actual adjacent clinical use, retained capacities, constraints and approved multidisciplinary scope. NHS HBN 04-01 Supplement 1 (July 2025 posting, internally 2024 revision) supports route and test logic in England; actual local standards and approved deviations govern elsewhere and on each project. It provides no category-wide default ACH, Pa, service life, test consumption or kill rate.

Whole new-building methodology starts at a different condition and does not own contaminated retained-system release, hidden-envelope first-fix testing or the negative-source suite validation chain. Fan installation, sealing and cleaning are constituent tasks, not equivalent accepted suite services. Protective-positive and neutral-bedroom PPVL designs, whole wards, portable HEPA-only arrangements and later clinical use are outside this category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-hospital-negative-pressure-source-isolation-suite-envelope-services-retrofit-and-validation-services |
| classification_refs | CPC 3.0 54129 (narrower) |
| covered_products | Retained hospital source-negative bedroom+lobby+en-suite envelope/services retrofit with validation |
| excluded_products | New hospital; whole ward; protective-positive; PPVL; portable HEPA-only; clinical treatment; routine operation/annual verification |
| representative_product | Accepted existing-hospital negative-pressure source-isolation suite retrofit service |
| production_route | Release/removal → envelope/services and first-fix leakage → cleanable finish → final commissioning/validation → signed acceptance |
| market_state | Completed approved site intervention on retained hospital suite |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete accepted source-negative suite retrofit service |
| How much | 1 item |
| How well | Approved actual design, closed defects and signed clinical/IPC/estates/ventilation validation gate |
| How long or cycle | Actual clearance through final acceptance, including rework/retests and reporting phases; no assumed operating life |
| reference_flow_link | `accepted_suite` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| product_flow | Accepted existing-hospital negative-pressure source-isolation suite retrofit service |
| flow_property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | suite_id; retained_hospital_location; source_negative_mode; bedroom_lobby_ensuite_layout; suite_volume; retained_services; adjacent_occupancy; actual_design_standards; authorised_deviations; first_fix_test; final_test_convention; validation_independence; acceptance_scope; phase_period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| suite_count | accepted_suite | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N>0 unique fully accepted suites; record once per suite, never rooms, beds, patient-days, tests or fans. Output is 1 item per reference flow. |
| native_state | all inventory rows | Actual native property | actual native unit | Preserve native supply/return units. Independent mass conversion needs actual SKU density/state/moisture/temperature and units plus source and uncertainty; do not add converted mass to native purchase. Gas volume needs actual pressure/temperature reference conditions. Energy and time need their own support, not Count or calorific-value substitutes. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Named retained hospital suite, surveyed condition and safe clinical/service release |
| starting_condition_role | Existing asset context; actual retrofit resources attributed |
| product_classification_scope | CPC 3.0 54129 narrower |
| recursive_input_rule | A same-category subcontract is a completed physical service with complete scope; expand missing activities, do not also purchase its internal materials or repeat its acceptance output. |
| upstream_dataset_requirement | Actual concrete input/provider identity and full supply/transport/asset coverage or explicit gap blocking final data |
| disclosure | Retained/replaced schedule, clinical containment, actual design/deviations, scope ownership, phases, tests and validator signoff |


### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| actual_state_exits | all processes | Before final data MUST instantiate usable historic removed fabric as a separate Product output in its actual native unit, with historical_receiver, historical_transfer and quality acceptance; do not merge it with unused new-supply returns or credit new purchases. Instantiate volume-measured contained effluent as a separate Waste exchange with volume unit and receiver. Instantiate actual direct water abstraction/environmental discharge as separate Elementary input/output with actual source/receiving medium, volume state and destination; do not hide these in Mass cards. Mass waste/species cards cover only their corresponding mass ledgers; whole-fluid and species views remain nonadditive. |  |
| power_boundary | clearance_electricity; envelope_services_electricity; finishing_electricity; validation_electricity | Record gross imported and gross exported electricity, actual source/retained on-site generation, construction/test circulation and losses separately under one event owner. Never net exports or future operating savings against imports. MUST instantiate any actual export as a separate measured Product output and receiver; actual generation needs its fuel/asset/releases and complete provider coverage once. |  |
| scope_start | all processes | Start with surveyed retained hospital suite, adjoining occupied clinical zones and retained-system condition; clinical/IPC teams own decanting, decontamination/release and containment approval; estates own isolation and safe old gas/water/electrical/ventilation handoff. Attribute all actual temporary clinical-continuity/containment resources. No new purchase or negative credit for the historic building. | nhs-isolation-hbn0401-supp1-2025 |
| sequence_gate | envelope_services; finishing; validation | Permanent slab-to-slab, facade, penetration, door/window and service sealing is checked at first-fix before concealment by ceilings, finishes or covers; repair and repeat the test before release to finishing. Final leakage and commissioning/validation follow finished installation; air sealers do not validate their own leakage work under the adopted NHS protocol. | nhs-isolation-hbn0401-supp1-2025 |
| negative_gate | validation | Use only the approved source-negative design: bedroom negative to lobby/corridor and en-suite negative to bedroom, with actual lobby strategy, airflow directions, stabiliser steady response, fan fault signals, gauges, pressure monitoring/alarms and actual water/fire/interface checks. Record actual adopted jurisdictional design criteria and authorised deviations. NHS England recommendations, example ACH/Pa and fire ratings are not universal defaults. | nhs-isolation-hbn0401-supp1-2025 |
| complete_resources | all processes | Own actual direct and provider/rental labour-support materials, temporary utility connections, travel/freight, tests, cleaning, spare parts, repeat works and shared asset lifecycle burdens once. A provider row needs an actual completed physical result, native quantity and full upstream coverage. Missing coverage blocks a final dataset, including undisclosed offsite work. |  |
| expand_actual | all processes | MUST expand umbrellas to concrete SKU/provider/species exchanges before final data. Preserve native Count/Area/Length/Volume/Mass supply and matched usable returns. Fuel, direct water abstraction and actual direct water/gas emissions require dedicated measured exchanges with their state and medium; do not hide them in service or waste cards. No assumed pathogen kg, VOC fraction, refrigerant loss, gas venting or wastewater fate. |  |
| scope_end | all processes | End at signed complete intervention after defect closure and project-required independent competent validation, with actual VSG/Authorising Engineer and hospital clinical/IPC/estates responsibilities documented. Exclude new whole hospital, whole ward, protective-positive/PPVL, portable HEPA-only provision, clinical treatment/equipment and later routine care, maintenance or annual verification. This is no promise of infection prevention or patient outcome. | nhs-isolation-hbn0401-supp1-2025 |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual task consumables and replacement materials (`clearance_consumables`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Expand actual SKU-specific consumables, PPE, bags, seals, test materials and spares used in this node; capture separate native exchanges where not supplied by mass.

- Collection subject: Actual task consumables and replacement materials
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual node-specific consumable/PPE/seal/test/spare SKU, native supplied quantity, tare/opening/closing/matched usable returns, rejected-work consumption and measurement uncertainty; no default material use per suite.

#### Collection requirement: Actual provider services and shared temporary assets (`clearance_provider_assets`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Expand completed provider physical results and temporary clinical continuity, containment/access, test and rental assets actually used. Match each native quantity to complete upstream scope; money or labour hours cannot become a counted completed service.

- Collection subject: Actual provider services and shared temporary assets
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: For each actual completed provider result record native service quantity/gate and upstream coverage; for shared assets record the chosen whole-asset or complete-life service view, compatible job/all-consumer full-life drivers, observed history/remainder/replacement/termination/EOL sources and uncertainty/sensitivity/update. No price/hour-to-Count or assumed life.

#### Collection requirement: Actual attributed freight service (`clearance_freight`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Record actual load and route for supplies, removals and equipment movements owned by this node; include empty returns through a stated complete carrier scope and avoid duplicate packaged freight.

- Collection subject: Actual attributed freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Collect actual leg payload mass/unit, loaded route distance/unit, causal shared-load attribution, empty-return activity and carrier/upstream coverage with weighing/distance uncertainty. Empty legs need evidenced service or vehicle activity, not invented positive cargo; no default route length.

#### Collection requirement: Actual usable surplus returned outward (`clearance_usable_returns`)

Process / prospective direction / type: `clearance` / `outputs` / `product`.

Only actual usable outward returns matched by SKU, state and original receipt enter; retain the same native unit as supply. Closing carried stock is not an outward return.

- Collection subject: Actual usable surplus returned outward
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual outward transfer quantity, receiving acceptance and usable condition in the matching supplied SKU/native unit; disclose gross-with-outlets or consumed-only accounting. Closing stock and usable historically removed fabric are different records; no generic return rate or credit.

#### Collection requirement: Actual contained waste delivered to treatment (`clearance_contained_waste`)

Process / prospective direction / type: `clearance` / `outputs` / `waste`.

Expand measured waste by material, contamination/hazard status and actual receiving treatment; packaging, retained old fabric removed and used filters/PPE are distinguished from new-material losses. Contained effluent uses its actual native volume where measured.

- Collection subject: Actual contained waste delivered to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Measure actual segregated material/contamination/state, tare-corrected waste quantity and receiver/treatment/transport coverage, keeping old versus new origins. Independently measure native-Volume effluent Waste; no default waste ratio, recovery yield or forced mass conversion.

#### Collection requirement: Actual substance releases to specified receiving media (`clearance_actual_releases`)

Process / prospective direction / type: `clearance` / `outputs` / `elementary`.

Expand only actual measured substances and receiving media, or valid matched activity/species factors. Include actual combustion, coating/cleaning, refrigerant or medical-gas releases if present. An infection risk is not a measured pathogen emission; sealed waste is not an elementary release.

- Collection subject: Actual substance releases to specified receiving media
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Require actual event/substance/particle fraction/receiving medium and measured species mass, or matched activity with valid factor units/source, or measured whole-fluid release with evidenced composition/fate and uncertainty. Captured waste and whole-fluid/species audit views are separate; no pathogen quantity from infection risk or default leakage/emission factor.

#### Collection requirement: Actual task consumables and replacement materials (`envelope_services_consumables`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Expand actual SKU-specific consumables, PPE, bags, seals, test materials and spares used in this node; capture separate native exchanges where not supplied by mass.

- Collection subject: Actual task consumables and replacement materials
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual node-specific consumable/PPE/seal/test/spare SKU, native supplied quantity, tare/opening/closing/matched usable returns, rejected-work consumption and measurement uncertainty; no default material use per suite.

#### Collection requirement: Actual electricity for works and tests (`envelope_services_electricity`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Meter this node including temporary containment, tools and repeated tests; provider electricity is included once under the declared package coverage.

- Collection subject: Actual electricity for works and tests
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record source-specific gross import/export meters, actual node test/retest and temporary-containment loads, on-site generation and provider coverage, attribution driver/unit and meter uncertainty; no net-bill proxy or default kWh per suite.

#### Collection requirement: Actual supplied cleaning or test water (`envelope_services_water`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Record metered supplied water including flushing and retests. This is a product supply; direct abstraction requires a separate actual source/medium elementary input.

- Collection subject: Actual supplied cleaning or test water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual supplied water source/quality, calibrated node/event volumes, retained/circulated contents, contained-treatment versus direct-environmental destinations and water-balance uncertainty; supply does not establish discharge.

#### Collection requirement: Actual provider services and shared temporary assets (`envelope_services_provider_assets`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Expand completed provider physical results and temporary clinical continuity, containment/access, test and rental assets actually used. Match each native quantity to complete upstream scope; money or labour hours cannot become a counted completed service.

- Collection subject: Actual provider services and shared temporary assets
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: For each actual completed provider result record native service quantity/gate and upstream coverage; for shared assets record the chosen whole-asset or complete-life service view, compatible job/all-consumer full-life drivers, observed history/remainder/replacement/termination/EOL sources and uncertainty/sensitivity/update. No price/hour-to-Count or assumed life.

#### Collection requirement: Actual attributed freight service (`envelope_services_freight`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Record actual load and route for supplies, removals and equipment movements owned by this node; include empty returns through a stated complete carrier scope and avoid duplicate packaged freight.

- Collection subject: Actual attributed freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Collect actual leg payload mass/unit, loaded route distance/unit, causal shared-load attribution, empty-return activity and carrier/upstream coverage with weighing/distance uncertainty. Empty legs need evidenced service or vehicle activity, not invented positive cargo; no default route length.

#### Collection requirement: Actual discrete doors, fans, controls and interface assemblies (`component_count`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Record actual installed assembly SKU quantities and all upstream manufacture; a factory-complete package is not purchased again as its internal BOM.

- Collection subject: Actual discrete doors, fans, controls and interface assemblies
- Flow property / unit: Count / item
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Use the actual suite component schedule and complete-package BOM boundary for door/fan/control/interface SKU counts, native receipts/returns, damaged replacements and counting uncertainty; room count or equipment capacity does not determine component quantity.

#### Collection requirement: Actual area-supplied enclosure and duct panels (`component_area`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Use measured external supplied net area and matched usable returns, not installed area as a second purchase.

- Collection subject: Actual area-supplied enclosure and duct panels
- Flow property / unit: Area / m2
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Measure actual separately supplied enclosure/duct-panel SKU area and state, dimensions, cutting/overlap convention, stock/returns/waste and uncertainty; installed surface area is a separate activity view and not a second purchase or suite count.

#### Collection requirement: Actual length-supplied ducts, pipes, cables and seals (`component_length`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Record actual SKU cross-section/specification and supplied length; conversion mass is an independent nonadditive view.

- Collection subject: Actual length-supplied ducts, pipes, cables and seals
- Flow property / unit: Length / m
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual cable/duct/pipe/seal SKU section/rating, native receipt/return length, cut-offs, installed routing and measurement uncertainty; any required mass view needs actual compatible density/dimensions and is nonadditive.

#### Collection requirement: Actual medical gas supplied for installation and commissioning (`commissioning_medical_gas`)

Process / prospective direction / type: `envelope_services` / `inputs` / `product`.

Only if included in the actual works: record species/purity, supplied quantity and pressure/temperature reference state; measured vented quantities enter species releases separately, and retained old gas is not newly bought.

- Collection subject: Actual medical gas supplied for installation and commissioning
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Only for actual included work, record gas species/purity, new supply versus retained charge, calibrated quantity and reference pressure/temperature with units, actual retained/returned/vented fates and uncertainty. No assumed purge volume, purity, gas law conversion or all-supply venting.

#### Collection requirement: Actual usable surplus returned outward (`envelope_services_usable_returns`)

Process / prospective direction / type: `envelope_services` / `outputs` / `product`.

Only actual usable outward returns matched by SKU, state and original receipt enter; retain the same native unit as supply. Closing carried stock is not an outward return.

- Collection subject: Actual usable surplus returned outward
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual outward transfer quantity, receiving acceptance and usable condition in the matching supplied SKU/native unit; disclose gross-with-outlets or consumed-only accounting. Closing stock and usable historically removed fabric are different records; no generic return rate or credit.

#### Collection requirement: Actual contained waste delivered to treatment (`envelope_services_contained_waste`)

Process / prospective direction / type: `envelope_services` / `outputs` / `waste`.

Expand measured waste by material, contamination/hazard status and actual receiving treatment; packaging, retained old fabric removed and used filters/PPE are distinguished from new-material losses. Contained effluent uses its actual native volume where measured.

- Collection subject: Actual contained waste delivered to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Measure actual segregated material/contamination/state, tare-corrected waste quantity and receiver/treatment/transport coverage, keeping old versus new origins. Independently measure native-Volume effluent Waste; no default waste ratio, recovery yield or forced mass conversion.

#### Collection requirement: Actual substance releases to specified receiving media (`envelope_services_actual_releases`)

Process / prospective direction / type: `envelope_services` / `outputs` / `elementary`.

Expand only actual measured substances and receiving media, or valid matched activity/species factors. Include actual combustion, coating/cleaning, refrigerant or medical-gas releases if present. An infection risk is not a measured pathogen emission; sealed waste is not an elementary release.

- Collection subject: Actual substance releases to specified receiving media
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_envelope_services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope_services`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Require actual event/substance/particle fraction/receiving medium and measured species mass, or matched activity with valid factor units/source, or measured whole-fluid release with evidenced composition/fate and uncertainty. Captured waste and whole-fluid/species audit views are separate; no pathogen quantity from infection risk or default leakage/emission factor.

#### Collection requirement: Actual task consumables and replacement materials (`finishing_consumables`)

Process / prospective direction / type: `finishing` / `inputs` / `product`.

Expand actual SKU-specific consumables, PPE, bags, seals, test materials and spares used in this node; capture separate native exchanges where not supplied by mass.

- Collection subject: Actual task consumables and replacement materials
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual node-specific consumable/PPE/seal/test/spare SKU, native supplied quantity, tare/opening/closing/matched usable returns, rejected-work consumption and measurement uncertainty; no default material use per suite.

#### Collection requirement: Actual provider services and shared temporary assets (`finishing_provider_assets`)

Process / prospective direction / type: `finishing` / `inputs` / `product`.

Expand completed provider physical results and temporary clinical continuity, containment/access, test and rental assets actually used. Match each native quantity to complete upstream scope; money or labour hours cannot become a counted completed service.

- Collection subject: Actual provider services and shared temporary assets
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: For each actual completed provider result record native service quantity/gate and upstream coverage; for shared assets record the chosen whole-asset or complete-life service view, compatible job/all-consumer full-life drivers, observed history/remainder/replacement/termination/EOL sources and uncertainty/sensitivity/update. No price/hour-to-Count or assumed life.

#### Collection requirement: Actual attributed freight service (`finishing_freight`)

Process / prospective direction / type: `finishing` / `inputs` / `product`.

Record actual load and route for supplies, removals and equipment movements owned by this node; include empty returns through a stated complete carrier scope and avoid duplicate packaged freight.

- Collection subject: Actual attributed freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Collect actual leg payload mass/unit, loaded route distance/unit, causal shared-load attribution, empty-return activity and carrier/upstream coverage with weighing/distance uncertainty. Empty legs need evidenced service or vehicle activity, not invented positive cargo; no default route length.

#### Collection requirement: Actual usable surplus returned outward (`finishing_usable_returns`)

Process / prospective direction / type: `finishing` / `outputs` / `product`.

Only actual usable outward returns matched by SKU, state and original receipt enter; retain the same native unit as supply. Closing carried stock is not an outward return.

- Collection subject: Actual usable surplus returned outward
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual outward transfer quantity, receiving acceptance and usable condition in the matching supplied SKU/native unit; disclose gross-with-outlets or consumed-only accounting. Closing stock and usable historically removed fabric are different records; no generic return rate or credit.

#### Collection requirement: Actual contained waste delivered to treatment (`finishing_contained_waste`)

Process / prospective direction / type: `finishing` / `outputs` / `waste`.

Expand measured waste by material, contamination/hazard status and actual receiving treatment; packaging, retained old fabric removed and used filters/PPE are distinguished from new-material losses. Contained effluent uses its actual native volume where measured.

- Collection subject: Actual contained waste delivered to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Measure actual segregated material/contamination/state, tare-corrected waste quantity and receiver/treatment/transport coverage, keeping old versus new origins. Independently measure native-Volume effluent Waste; no default waste ratio, recovery yield or forced mass conversion.

#### Collection requirement: Actual substance releases to specified receiving media (`finishing_actual_releases`)

Process / prospective direction / type: `finishing` / `outputs` / `elementary`.

Expand only actual measured substances and receiving media, or valid matched activity/species factors. Include actual combustion, coating/cleaning, refrigerant or medical-gas releases if present. An infection risk is not a measured pathogen emission; sealed waste is not an elementary release.

- Collection subject: Actual substance releases to specified receiving media
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Require actual event/substance/particle fraction/receiving medium and measured species mass, or matched activity with valid factor units/source, or measured whole-fluid release with evidenced composition/fate and uncertainty. Captured waste and whole-fluid/species audit views are separate; no pathogen quantity from infection risk or default leakage/emission factor.

#### Collection requirement: Actual task consumables and replacement materials (`validation_consumables`)

Process / prospective direction / type: `validation` / `inputs` / `product`.

Expand actual SKU-specific consumables, PPE, bags, seals, test materials and spares used in this node; capture separate native exchanges where not supplied by mass.

- Collection subject: Actual task consumables and replacement materials
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual node-specific consumable/PPE/seal/test/spare SKU, native supplied quantity, tare/opening/closing/matched usable returns, rejected-work consumption and measurement uncertainty; no default material use per suite.

#### Collection requirement: Actual provider services and shared temporary assets (`validation_provider_assets`)

Process / prospective direction / type: `validation` / `inputs` / `product`.

Expand completed provider physical results and temporary clinical continuity, containment/access, test and rental assets actually used. Match each native quantity to complete upstream scope; money or labour hours cannot become a counted completed service.

- Collection subject: Actual provider services and shared temporary assets
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: For each actual completed provider result record native service quantity/gate and upstream coverage; for shared assets record the chosen whole-asset or complete-life service view, compatible job/all-consumer full-life drivers, observed history/remainder/replacement/termination/EOL sources and uncertainty/sensitivity/update. No price/hour-to-Count or assumed life.

#### Collection requirement: Actual attributed freight service (`validation_freight`)

Process / prospective direction / type: `validation` / `inputs` / `product`.

Record actual load and route for supplies, removals and equipment movements owned by this node; include empty returns through a stated complete carrier scope and avoid duplicate packaged freight.

- Collection subject: Actual attributed freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Collect actual leg payload mass/unit, loaded route distance/unit, causal shared-load attribution, empty-return activity and carrier/upstream coverage with weighing/distance uncertainty. Empty legs need evidenced service or vehicle activity, not invented positive cargo; no default route length.

#### Collection requirement: Actual usable surplus returned outward (`validation_usable_returns`)

Process / prospective direction / type: `validation` / `outputs` / `product`.

Only actual usable outward returns matched by SKU, state and original receipt enter; retain the same native unit as supply. Closing carried stock is not an outward return.

- Collection subject: Actual usable surplus returned outward
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual outward transfer quantity, receiving acceptance and usable condition in the matching supplied SKU/native unit; disclose gross-with-outlets or consumed-only accounting. Closing stock and usable historically removed fabric are different records; no generic return rate or credit.

#### Collection requirement: Actual contained waste delivered to treatment (`validation_contained_waste`)

Process / prospective direction / type: `validation` / `outputs` / `waste`.

Expand measured waste by material, contamination/hazard status and actual receiving treatment; packaging, retained old fabric removed and used filters/PPE are distinguished from new-material losses. Contained effluent uses its actual native volume where measured.

- Collection subject: Actual contained waste delivered to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Measure actual segregated material/contamination/state, tare-corrected waste quantity and receiver/treatment/transport coverage, keeping old versus new origins. Independently measure native-Volume effluent Waste; no default waste ratio, recovery yield or forced mass conversion.

#### Collection requirement: Actual substance releases to specified receiving media (`validation_actual_releases`)

Process / prospective direction / type: `validation` / `outputs` / `elementary`.

Expand only actual measured substances and receiving media, or valid matched activity/species factors. Include actual combustion, coating/cleaning, refrigerant or medical-gas releases if present. An infection risk is not a measured pathogen emission; sealed waste is not an elementary release.

- Collection subject: Actual substance releases to specified receiving media
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Require actual event/substance/particle fraction/receiving medium and measured species mass, or matched activity with valid factor units/source, or measured whole-fluid release with evidenced composition/fate and uncertainty. Captured waste and whole-fluid/species audit views are separate; no pathogen quantity from infection risk or default leakage/emission factor.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| clearance | Clinical release, containment and selective removal | required | Actual complete intervention | Signed existing-suite clinical/IPC release, isolated old water/gas/electrical/ventilation systems and declared removed-material destinations; not a new purchase of retained fabric. | per reference flow |
| envelope_services | Envelope sealing and building-services integration | required | Actual complete intervention | Slab-to-slab walls, joints, penetrations, doors/windows, supply/extract ducts and fans, pressure stabilisers, monitors/alarms/controls and actual wet/electrical/medical-gas/fire interfaces; first-fix test before concealment. | per reference flow |
| finishing | Cleanable finishes and final cleaning | required | Actual complete intervention | First-fix envelope released before ceilings, wall/floor finishes and service covers; installed cleanable finishes and cleaning passed to final tests. | per reference flow |
| validation | Commissioning, independent validation and suite acceptance | required | Actual complete intervention | Final leakage and, with all doors closed, actual negative-source airflow/pressure chain, stabiliser response, fan fault, gauges/monitor/alarm and water/fire/interface tests; defect closure and signed acceptance. | per reference flow |

### Process: Clinical release, containment and selective removal (`clearance`)

Signed existing-suite clinical/IPC release, isolated old water/gas/electrical/ventilation systems and declared removed-material destinations; not a new purchase of retained fabric.

#### Inputs

##### Product flows

###### Actual electricity for works and tests (`clearance_electricity`)

Meter this node including temporary containment, tools and repeated tests; provider electricity is included once under the declared package coverage.

- Selected flow: Actual electricity for works and tests
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record source-specific gross import/export meters, actual node test/retest and temporary-containment loads, on-site generation and provider coverage, attribution driver/unit and meter uncertainty; no net-bill proxy or default kWh per suite.

###### Actual supplied cleaning or test water (`clearance_water`)

Record metered supplied water including flushing and retests. This is a product supply; direct abstraction requires a separate actual source/medium elementary input.

- Selected flow: Actual supplied cleaning or test water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_clearance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clearance`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual supplied water source/quality, calibrated node/event volumes, retained/circulated contents, contained-treatment versus direct-environmental destinations and water-balance uncertainty; supply does not establish discharge.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Envelope sealing and building-services integration (`envelope_services`)

Slab-to-slab walls, joints, penetrations, doors/windows, supply/extract ducts and fans, pressure stabilisers, monitors/alarms/controls and actual wet/electrical/medical-gas/fire interfaces; first-fix test before concealment.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Cleanable finishes and final cleaning (`finishing`)

The independent finishing contractor accepts the signed leak-tested first-fix parent state before covers conceal joints. Record suite/transfer ID, inspected substrate/envelope condition, released first-fix report/date, actual finish area by system, finish installation/cleanability inspection and rejection/repair records. The finished cleanable state is signed over to the commissioning/validation team; this internal handoff is activity evidence, not a second purchased suite or accepted final output. If the actual project embeds finishing inside another responsibility, retain one owner and disclose that boundary; do not create duplicate finishing service purchases.

First-fix envelope released before ceilings, wall/floor finishes and service covers; installed cleanable finishes and cleaning passed to final tests.

#### Inputs

##### Product flows

###### Actual electricity for works and tests (`finishing_electricity`)

Meter this node including temporary containment, tools and repeated tests; provider electricity is included once under the declared package coverage.

- Selected flow: Actual electricity for works and tests
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record source-specific gross import/export meters, actual node test/retest and temporary-containment loads, on-site generation and provider coverage, attribution driver/unit and meter uncertainty; no net-bill proxy or default kWh per suite.

###### Actual supplied cleaning or test water (`finishing_water`)

Record metered supplied water including flushing and retests. This is a product supply; direct abstraction requires a separate actual source/medium elementary input.

- Selected flow: Actual supplied cleaning or test water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual supplied water source/quality, calibrated node/event volumes, retained/circulated contents, contained-treatment versus direct-environmental destinations and water-balance uncertainty; supply does not establish discharge.

###### Actual area-supplied cleanable finish systems (`finish_area`)

Record actual cleanable wall/floor/ceiling systems and their adhesive/coating packages; no universal disinfectant efficacy or coating emission factor.

- Selected flow: Actual area-supplied cleanable finish systems
- Flow property / unit: Area / m2
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual cleanable-finish SKU/system, native supplied versus installed surface area, substrate/first-fix release, cutting/overlap, matched returns, repairs/rejects, finish inspection and area uncertainty; no default finish thickness, biocidal efficacy or area-per-suite.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Commissioning, independent validation and suite acceptance (`validation`)

Final leakage and, with all doors closed, actual negative-source airflow/pressure chain, stabiliser response, fan fault, gauges/monitor/alarm and water/fire/interface tests; defect closure and signed acceptance.

#### Inputs

##### Product flows

###### Actual electricity for works and tests (`validation_electricity`)

Meter this node including temporary containment, tools and repeated tests; provider electricity is included once under the declared package coverage.

- Selected flow: Actual electricity for works and tests
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record source-specific gross import/export meters, actual node test/retest and temporary-containment loads, on-site generation and provider coverage, attribution driver/unit and meter uncertainty; no net-bill proxy or default kWh per suite.

###### Actual supplied cleaning or test water (`validation_water`)

Record metered supplied water including flushing and retests. This is a product supply; direct abstraction requires a separate actual source/medium elementary input.

- Selected flow: Actual supplied cleaning or test water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed quantity / N; retain raw operands in cp_validation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Record actual supplied water source/quality, calibrated node/event volumes, retained/circulated contents, contained-treatment versus direct-environmental destinations and water-balance uncertainty; supply does not establish discharge.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted existing-hospital negative-pressure source-isolation suite retrofit service (`accepted_suite`)

One complete uniquely identified bedroom+lobby+en-suite retrofit passes the actual multidisciplinary acceptance gate. Failures remain in rework, not accepted output.

- Selected flow: Accepted existing-hospital negative-pressure source-isolation suite retrofit service
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_validation`
- Sources: `nhs-isolation-hbn0401-supp1-2025`

Range evidence need: Exactly 1 item is reference normalization only. Establish actual N>0 from unique complete bedroom+lobby+en-suite IDs, first-fix/final test records, defect closure and signed project-specific validation/acceptance; repeated tests and separate rooms never add output.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| single_suite | N is positive count of unique complete accepted suite IDs. One bedroom+lobby+en-suite is one intervention, regardless of trades, rooms, beds, attempts or time. Failures, removed rejects, rework/retests and all losses retain burden; no accepted output until closed. Recoverable fabric exits by documented destination without speculative substitution credits. |  |
| stock_ownership | S = attributed opening stock + external net-of-tare receipts - carried closing stock. Internal issues or installed activity are not new receipts. Choose gross supply with matched outward usable returns OR consumed-only with the return deducted once; disclose choice. Nonreturned waste/loss stays upstream; closing stock is not a return. Historic removed fabric has no new supply credit. |  |
| shared_lifecycle | Identify temporary containment, access, testing and rented assets, all consumers across clearance/envelope_services/finishing/validation and ALL other jobs/nodes/periods. Allocate full manufacture, maintenance, replacements and end-of-life with compatible actual job_driver / full_life_driver. Full life uses observed completed life or observed history plus evidenced remainder/replacement/termination/end-of-life, with sources, uncertainty, sensitivity and updates. Choose asset-equivalent quantity (job_driver/full_life_driver)/N OR lifecycle-complete service quantity job_driver/N with matching per-driver burden. Do not combine views or normalize twice; no invented lifespan. |  |
| periods | Index clearance, first-fix before concealment, finishing, commissioning, rework and final validation/acceptance by actual phase/period/event. Attribute each shared receipt, test and replacement once across reporting boundaries; reconcile transfers/opening/closing stock before aggregation. Unresolved termination or replacement coverage blocks finalization; do not annualize construction to a service life. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_clearance | clearance | clearance_consumables; clearance_electricity; clearance_water; clearance_provider_assets; clearance_freight; clearance_usable_returns; clearance_contained_waste; clearance_actual_releases | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; door_closed_state; first_fix_report; first_fix_release_date; concealed_work_date; finish_area; finish_area_unit; finish_inspection; finish_handoff; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; clinical_release_record; ipc_approval; decant_scope; decontamination_method; decontamination_quantity; decontamination_release; containment_design; temporary_clinical_continuity_scope; isolated_service_id; isolation_method; safe_service_release; old_water_clearance; old_gas_clearance; historical_removed_id; historical_state; historical_native_quantity; historical_native_unit; historical_receiver; historical_transfer; historical_quality_acceptance; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | Collect calibrated meters/weighing and reconciled native delivery/return/stock logs, provider physical completion and full asset coverage; match clinical release, transfer, waste destination and signed node tests. Record every actual quantity including retests, and evidence for absence. Sum this node’s actual attributed quantities then divide by N once; preserve native ledgers and disjoint fates. | actual native unit per row | Every receipt/event/test and phase closure | Actual node works including rework; shared assets additionally cover ALL-consumer full manufacture/maintenance/replacement/end-of-life with observed history and evidenced remainder | Named hospital suite and attributable provider/offsite resources; assets across ALL consumer nodes, jobs and periods | per reference flow | Calibration, records, coverage matrix, competent signatures, uncertainty and reconciliation |
| cp_envelope_services | envelope_services | envelope_services_consumables; envelope_services_electricity; envelope_services_water; envelope_services_provider_assets; envelope_services_freight; envelope_services_usable_returns; envelope_services_contained_waste; envelope_services_actual_releases; component_count; component_area; component_length; commissioning_medical_gas | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; adopted_standard; authorised_deviation; approved_source_negative_mode; envelope_geometry; room_volume; volume_unit; first_fix_condition; first_fix_test_pressure; first_fix_pressure_unit; first_fix_measured_leakage; first_fix_leakage_unit; first_fix_criterion; first_fix_method; first_fix_calibration; permitted_temporary_seals; first_fix_timestamp; concealment_timestamp; first_fix_defect; first_fix_retest; first_fix_signatory; first_fix_release; actual_component_schedule; fire_damper_interface; water_interface; electrical_interface; medical_gas_species; medical_gas_purity; supplied_gas_volume; gas_volume_unit; gas_reference_temperature; gas_temperature_unit; gas_reference_pressure; gas_pressure_unit; vented_gas_quantity; vented_gas_unit; retained_gas_quantity; gas_return_quantity; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | Collect calibrated meters/weighing and reconciled native delivery/return/stock logs, provider physical completion and full asset coverage; match clinical release, transfer, waste destination and signed node tests. Record every actual quantity including retests, and evidence for absence. Sum this node’s actual attributed quantities then divide by N once; preserve native ledgers and disjoint fates. | actual native unit per row | Every receipt/event/test and phase closure | Actual node works including rework; shared assets additionally cover ALL-consumer full manufacture/maintenance/replacement/end-of-life with observed history and evidenced remainder | Named hospital suite and attributable provider/offsite resources; assets across ALL consumer nodes, jobs and periods | per reference flow | Calibration, records, coverage matrix, competent signatures, uncertainty and reconciliation |
| cp_finishing | finishing | finishing_consumables; finishing_electricity; finishing_water; finishing_provider_assets; finishing_freight; finishing_usable_returns; finishing_contained_waste; finishing_actual_releases; finish_area | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; parent_transfer_id; parent_first_fix_release; parent_inspected_condition; finishing_responsible_party; actual_finish_system; supplied_finish_area; actual_installed_finish_area; finish_area_unit; cleanability_requirement; finish_inspection; finish_reject; finish_repair; finish_acceptance; finish_handoff_id; finish_handoff_date; receiver; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | Collect calibrated meters/weighing and reconciled native delivery/return/stock logs, provider physical completion and full asset coverage; match clinical release, transfer, waste destination and signed node tests. Record every actual quantity including retests, and evidence for absence. Sum this node’s actual attributed quantities then divide by N once; preserve native ledgers and disjoint fates. | actual native unit per row | Every receipt/event/test and phase closure | Actual node works including rework; shared assets additionally cover ALL-consumer full manufacture/maintenance/replacement/end-of-life with observed history and evidenced remainder | Named hospital suite and attributable provider/offsite resources; assets across ALL consumer nodes, jobs and periods | per reference flow | Calibration, records, coverage matrix, competent signatures, uncertainty and reconciliation |
| cp_validation | validation | validation_consumables; validation_electricity; validation_water; validation_provider_assets; validation_freight; validation_usable_returns; validation_contained_waste; validation_actual_releases; accepted_suite | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; suite_type; adopted_standard; approved_design_airflow; airflow_unit; measured_supply_airflow; measured_extract_airflow; actual_room_volume; volume_unit; airflow_direction; door_closed_state; bedroom_lobby_pressure; bedroom_corridor_pressure; ensuite_bedroom_pressure; lobby_corridor_pressure; final_leakage; leakage_unit; final_test_pressure; test_pressure_unit; final_leakage_criterion; final_leakage_test_method; stabiliser_response; stabiliser_steady_state; fan_failure_test; nurse_station_fault_signal; estates_fault_signal; gauge_calibration; monitor_test; alarm_test; fire_interface_test; actual_water_test; actual_water_temperature; water_temperature_unit; water_test_location; actual_medical_gas_interface_test; validation_timestamp; validator_identity; validator_competence; validator_independence; validation_scope; defect_register; defect_closure; ae_approval; vsg_approval; clinical_ipc_signoff; estates_signoff; signed_acceptance; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | Collect calibrated meters/weighing and reconciled native delivery/return/stock logs, provider physical completion and full asset coverage; match clinical release, transfer, waste destination and signed node tests. Record every actual quantity including retests, and evidence for absence. Sum this node’s actual attributed quantities then divide by N once; preserve native ledgers and disjoint fates. | actual native unit per row | Every receipt/event/test and phase closure | Actual node works including rework; shared assets additionally cover ALL-consumer full manufacture/maintenance/replacement/end-of-life with observed history and evidenced remainder | Named hospital suite and attributable provider/offsite resources; assets across ALL consumer nodes, jobs and periods | per reference flow | Calibration, records, coverage matrix, competent signatures, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_native | all inventory rows | For each actual concrete exchange, divide attributed job quantity by N once; final suite output is 1 item. Keep raw numerator and N. | native_quantity; N; cp_clearance; cp_envelope_services; cp_finishing; cp_validation | Native exchange per reference flow |  |
| stock_balance | all inventory rows | S = attributed opening stock + external net-of-tare receipts - carried closing stock. Internal issues or installed activity are not new receipts. Choose gross supply with matched outward usable returns OR consumed-only with the return deducted once; disclose choice. Nonreturned waste/loss stays upstream; closing stock is not a return. Historic removed fabric has no new supply credit. | opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return | Reconciled supply and matched return ledger |  |
| fuel_fates | all inventory rows | If fuel is actually used, supply upstream and burned fuel are distinct. Obtain measured burn OR an audited complete disjoint native-unit fate balance with uncertainty and unknown-loss investigation. Returned fuel, nonburned waste, uncontained loss and carried closing are mutually exclusive; total spill is audit only and recovered closing is already closing. Never infer burn as an unexplained residual. | measured_burn; external_receipts; opening_stock; usable_outward_return; nonburned_waste; uncontained_loss; carried_closing_stock; total_spill_audit; recovered_closing_stock | Evidence-based actual burn and other disjoint fates |  |
| species_release | clearance_actual_releases; envelope_services_actual_releases; finishing_actual_releases; validation_actual_releases | Use measured species mass OR actual matched activity times species factor OR actual whole-fluid release times evidenced composition and receiving-medium fate. Do not multiply a complete species factor by composition/fate again. Whole-fluid view is nonadditive to species; SDS, safety limits and no-VOC claims are not emission quantities. | native_quantity; activity; species_factor; composition; fate; receiving_medium; factor_source; composition_source; fate_source | Actual species mass by medium per reference flow |  |
| freight_work | clearance_freight; envelope_services_freight; finishing_freight; validation_freight | Sum actual load_mass in kg times distance in km for each leg / N; disclose carrier empty-return and upstream coverage and avoid adding fuel already covered in freight. | load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; N | Freight in kg*km per reference flow |  |
| shared_asset | clearance_provider_assets; envelope_services_provider_assets; finishing_provider_assets; validation_provider_assets | Identify temporary containment, access, testing and rented assets, all consumers across clearance/envelope_services/finishing/validation and ALL other jobs/nodes/periods. Allocate full manufacture, maintenance, replacements and end-of-life with compatible actual job_driver / full_life_driver. Full life uses observed completed life or observed history plus evidenced remainder/replacement/termination/end-of-life, with sources, uncertainty, sensitivity and updates. Choose asset-equivalent quantity (job_driver/full_life_driver)/N OR lifecycle-complete service quantity job_driver/N with matching per-driver burden. Do not combine views or normalize twice; no invented lifespan. | job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; N | One lifecycle-complete attributable asset or service view |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify concrete SKU/provider/substance, type/direction/state/gate/property/unit and support rows before final exchange; actual umbrellas are not fixed identities. | Detail rows and actual specifications |
| completeness | all inventory rows | Cover all actual phases, providers, temporary clinical continuity and shared life; record zero with evidence, unknown with blocker, and measurement uncertainty. | Coverage matrix, native records, asset life and scope reconciliation |
| gate | accepted_suite | Keep first-fix before-concealment and final independent test evidence distinct; actual hospital signatories own their responsibilities and no clinical-outcome extrapolation is allowed. | Dated tests and signed gate record |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| acceptance | Reject premature acceptance, missing suite components, unknown mode, omitted first-fix evidence, self-validation where independence is required, unapproved deviations or open defects. Retain calibrated raw airflow/pressure/leakage, test conditions, first-fix/final timestamps, stabiliser and fan-fault/monitor/alarm/gauge results, water/fire/interfaces, actual independent validator scope and signed multidisciplinary release. | nhs-isolation-hbn0401-supp1-2025 |
| inventory_complete | Reconcile native receipts, stock, returns, installation and waste; separate historic removed fabric, packaging and new-material rejects. Every actual zero requires evidence, every unknown remains a gap. Verify concrete identities/property/unit upstream coverage and provider assets; expand direct water/gas/species exchanges. Check fuel fates, species factors, freight units and all shared-life consumers; no double counting or unsupported credits. |  |
| comparability | Compare only disclosed actual suite layout/volume, adjoining occupancy, retained capacities, adopted standards, mode, test convention, phasing and scope; normalize once by N. Quantities, thresholds, durations and species are project evidence, not defaults from guidance. Missing native-property support or data coverage prevents final data even if a candidate structural check passes. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground retrofit-service data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual compatible completed source-negative retained-hospital suite retrofit; downstream process/lifecyclemodel projection |
| excluded_use | Whole new hospital, PPVL/protective-positive, infection outcomes, patient-days and later operation |
| required_metadata | All reference qualifiers; geography/date; retained/replaced inventory; N; node/phase/provider ownership; native units and upstream scope; actual adopted standards/deviations; first-fix and final tests; validators and signoff |
| required_quality_disclosure | Identity/support and quantity gaps; exclusions; uncertainty; allocation and shared-life evidence; source geographic limits; validation scope and missing coverage |
| update_trigger | Changed suite mode/layout, retained services, adopted standard/deviation, provider coverage, measured activity, test gate or asset-life evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| nhs-isolation-hbn0401-supp1-2025 | official_guidance | https://www.england.nhs.uk/wp-content/uploads/2009/12/health-building-note-04-01-supplement-1-july-2025.pdf | NHS England HBN 04-01 Supplement 1, July 2025 posting / 2024 revision: scope, planning, source-negative envelope/services and Appendices A/B sequence/validation; recommendations and jurisdiction limited, no universal numerical inventory defaults. |
| unsd-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 explanatory notes printed283, 54129 hospital construction/repair/alteration context; not PCR identity or quantity evidence. |
