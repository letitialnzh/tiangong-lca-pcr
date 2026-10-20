---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-single-storey-precast-concrete-industrial-building-roof-and-cladding-connection-seismic-retrofit-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing single-storey precast-concrete industrial-building roof and cladding connection seismic-retrofit services


## 1. Scope and Applicability

Applies to one completed coordinated roof and cladding connection seismic-retrofit intervention on a retained assessed single-storey precast reinforced-concrete factory or ordinary production/assembly workshop. The starting state is the surveyed existing foundations, columns, roof, cladding, geometry and use; the output is engineer/owner signed completion under the actual approved project scheme. Include temporary isolation/protection/support, access/drilling/preparation, roof-to-beam and panel-column/panel-beam restraint connections, necessary interface repair, associated removed/replaced materials, inspection/testing/retesting and defect closure. Neither an isolated connection task, purchased hardware nor cladding maintenance replaces this coordinated gate. `reluis-industrial-retrofit-2024`.

Exclude whole new buildings, complete rebuilding, generic warehouses, chemical/power/mining/specialized-manufacturing civil facilities, equipment restraint-only or cladding-only maintenance, future operation/maintenance and future earthquake consequences. Retained foundations/columns and the load path must be assessed; if comprehensive compliance requires additional strengthening, include the actual work and disclose it rather than asserting comprehensive compliance from connection work alone. Completion guarantees neither equivalence to a newly code-designed building nor a numerical future earthquake outcome. Investigational case load factors, bolt dimensions, years and failure probabilities are not default design values.

Historical 2012 Italian industrial-building technical guidance distinguishes local rapid measures from subsequent global seismic assessment and considers connection/main-structure interaction and foundations/columns. Use it here only for physical-route and gate context under the actual locally approved design; historical law, percentages, periods and dimensions are not defaults. `reluis-dpc-industrial-guidelines-2012`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-single-storey-precast-concrete-industrial-building-roof-and-cladding-connection-seismic-retrofit-services |
| classification_refs | CPC 3.0 54121; narrower; separate mapping review required |
| covered_products | completed coordinated roof/cladding connection retrofit service on a retained single-storey precast RC ordinary factory/workshop |
| excluded_products | new assets; rebuilding; generic warehouses; specialized plant facilities; isolated connection/maintenance; equipment restraint |
| representative_product | one surveyed factory building with connection retrofit completed under its own approved scheme and signed gate |
| production_route | assessment/scope approval; temporary protection/access; integrated roof/cladding connection installation; inspection/test/correction/retest; as-built acceptance |
| market_state | signed completed retrofit service on a retained building, with no new whole-building asset |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed coordinated roof and cladding connection seismic-retrofit intervention |
| How much | 1 item |
| How well | meets actual approved connection scheme, required tests, as-built verification and defect-closed signed completion |
| How long or cycle | one completed intervention spanning assessment/preparation, connection installation, correction/retest and signed acceptance phases; no assumed lifetime or future earthquake effect |
| reference_flow_link | `accepted_connection_retrofit` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed coordinated roof and cladding connection seismic-retrofit intervention |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | building_id; intervention_id; location; use; storeys; structural_geometry; retained_condition; roof_cladding_system; columns_foundations_assessment; load_path; connection_strategy; seismic_demand; design_level; approved_scope; test_convention; signed_gate; completion_date; exclusions |


N is the positive count of unique complete accepted building interventions. Panels, bolts, trades and retests on one building do not enlarge N. Different geometry, retained condition, connection strategy, seismic demand and design levels require explicit differentiation; Count alone does not establish equivalence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_completed | accepted_connection_retrofit | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N>0 unique complete signed building interventions; reference output is 1 item. |
| native_units | all inventory rows | actual native property | item; kg; m2; m; m3; kWh; kg*km | Preserve native supply and matched usable-return units; independently expand and verify support for other actual units; never force all rows to mass. |
| physical_conversion | all inventory rows | evidenced physical conversion | compatible actual units | Retain raw operands, temperature and unit, composition/density conditions and factor sources; extra mass views are nonadditive; calorific value does not replace electricity or Count. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed retained single-storey precast RC industrial building with existing damage, connections, foundations/columns, geometry, use and isolation conditions. |
| starting_condition_role | Starting state of intervention on a retained asset, not a newly purchased building. |
| product_classification_scope | Construction repair/alteration service for ordinary industrial factories/workshops; CPC is external mapping context. |
| recursive_input_rule | Record subcontract connection work as its actual intermediate service; count complete BOM and provider resources once; do not recursively purchase this complete PCR output. |
| upstream_dataset_requirement | Each new material, energy, test, rental and freight input requires matching native unit, state, provider gate and complete burden scope; gaps block final data. |
| disclosure | Disclose actual site, retained state, approved scope, phases, temporary resources, connection design, inspections/tests, shared coverage and exclusions. |


### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | integration | Own the entire assessed-to-signed-completion interval. Foundations/columns and load-path requirements cannot disappear from a claim of comprehensive compliance. Local preparation, removal/replacement and interface repair remain inside integration, without an independent treatment handover. | reluis-industrial-retrofit-2024 |
| boundary_resources | integration | Own direct site, subcontract, rental, freight, personnel travel, test/retest, spares, temporary utilities and waste once; never repurchase a complete provider/material BOM. |  |
| boundary_reject | integration | Correct and retest nonconforming connections within integration; rejected states do not enter N. Failed materials enter actual waste or verified usable returns while incurred burdens remain. |  |
| boundary_environment | integration | Expand dedicated measured elementary exchanges for actual direct water/gas withdrawals and actual releases to air/water/soil; product supply, contained waste and environmental releases are different states. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Project-designed cladding-to-column and cladding-to-beam connection assemblies (`cladding_connection_assemblies`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Record the distinct panel-column and panel-beam connection components required by the assessed scheme, including actual restraints and replacement parts. Do not impose poster bolt dimensions or a universal fastening recipe.

- Collection subject: Project-designed cladding-to-column and cladding-to-beam connection assemblies
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use the corresponding section calculation rule by actual SKU and configuration; installation, failed work and replacement attempts are activity records, not separate purchases of the same item.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources: `reluis-industrial-retrofit-2024`

Range evidence need: Require the actual approved connection schedule and SKU/BOM counts, roof/panel interface geometry, delivery/stock balances, failed-installation replacements and counting uncertainty; no generic bolts-per-building or poster dimensions are evidenced.

#### Collection requirement: Actual mass-supplied local interface repair and joining consumables (`repair_consumables`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Expand only actual project products such as interface repair, anchoring or protective consumables. Identify formulation, condition and supplier gate. New quantities include nonreturned site losses and failed-work consumables.

- Collection subject: Actual mass-supplied local interface repair and joining consumables
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the corresponding section calculation rule in kg for actual mass-supplied products; any independent mass view of a native item/area/length/volume input requires the corresponding section calculation rule and is nonadditive.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual product formulation/state, weighed receipts/tare, local interface repair dimensions, rejected-work consumption, closing stock and matched usable returns; no universal repair mass or density is evidenced.

#### Collection requirement: Actual area-supplied temporary protection and interface sheets (`temporary_sheet_supplies`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Conditional actual new sheet goods used for temporary segregation, protection or required interface work. Specify material, thickness, service coverage and retained reusable stock.

- Collection subject: Actual area-supplied temporary protection and interface sheets
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Use the corresponding section calculation rule in m2; repeated deployment of the same reusable sheet is not another purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual native area/length dimensions, thickness/specification, deployment and stock condition, reused versus new receipts, closing carry and accepted usable-return records; deployment count alone is not new supply.

#### Collection requirement: Actual length-supplied interface and temporary-work products (`temporary_linear_supplies`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Conditional actual linear sealing, fixing or temporary protection products retain product dimensions and supply state. Record genuine new receipts separately from reusable carried stock.

- Collection subject: Actual length-supplied interface and temporary-work products
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Use the corresponding section calculation rule in m by actual specification; do not use footprint area as a length substitute.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual native area/length dimensions, thickness/specification, deployment and stock condition, reused versus new receipts, closing carry and accepted usable-return records; deployment count alone is not new supply.

#### Collection requirement: Actual volume-supplied site fuel upstream supply (`site_fuel`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Conditional actual fuel is an upstream product input. Identify carrier, grade, volume state and temperature; upstream supply and combustion are different quantities. Other native fuel units MUST be expanded into dedicated exchanges rather than forced into volume.

- Collection subject: Actual volume-supplied site fuel upstream supply
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the corresponding section calculation rule for supply and the corresponding section calculation rule for actual burn; retain nonreturned waste/loss upstream, and never infer burn as an unexplained residual.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

Range evidence need: Require actual carrier/grade, native volume conditions, stock/receipt/return records, measured burn or complete disjoint fates, nonburned waste/loss uncertainty and unknown-loss investigation; no default burn share or calorific substitute is evidenced.

#### Collection requirement: Actual site electricity for access installation and testing (`site_electricity`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Conditional actual electricity covers drilling, access, local repair and all test/retest periods; meter provider-contained versus separately purchased energy without overlap. Record gross imports without netting exports, internal circulation or internal losses. Actual exported electricity MUST expand a separate measured product-output exchange with its own recipient gate and attribution. Actual onsite generation MUST expand its carrier, asset and release resources once with explicit provider scope; no implicit free generation. Actual electricity support identity must be verified independently in dataset production.

- Collection subject: Actual site electricity for access installation and testing
- Flow property / unit: Energy / kWh
- Amount rule: Meter attributable kWh and divide by N once using the corresponding section calculation rule; preserve supplied energy units and documented conversions, without NCV/GCV or Count substitution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources:

Range evidence need: Require actual gross meter readings, calibrated units, job shares, all installation/test/retest periods and provider-included versus separately supplied electricity coverage; no universal kWh per intervention is evidenced.

#### Collection requirement: Actual completed assessment connection-test and acceptance service results (`provider_test_services`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Expand actual completed discrete provider results only where the provider physically supplies an identified counted deliverable, such as a project test campaign or signed engineering verification. Price or labour hours do not establish item equivalence. Other native service units MUST be expanded with their own property and unit.

- Collection subject: Actual completed assessment connection-test and acceptance service results
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record accepted physical provider result quantity / N with matching lifecycle-complete upstream scope; separately capture excluded provider travel, test energy, spares, rentals and waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources:

Range evidence need: Require actual provider physical accepted result, native service property/unit, completion gate, upstream coverage and uncovered travel/energy/test/spare resources; invoices, price or hours alone do not establish item quantity.

#### Collection requirement: Lifecycle-attributed shared access support drilling and test assets (`shared_assets`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Conditional whole-asset equivalents for platforms, temporary supports, drills and test rigs require an actual identified asset and matching whole-asset lifecycle dataset. Enumerate all jobs, nodes and periods, including external consumers. Rental fees alone are insufficient.

- Collection subject: Lifecycle-attributed shared access support drilling and test assets
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use asset-equivalent quantity = (job_driver / life_driver) / N with compatible measured drivers and complete manufacture, maintenance, replacement and EOL scope. Do not also add a per-driver service view.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources:

Range evidence need: Require identified asset, compatible actual job and ALL-consumer full-life drivers, observed life/history and evidenced remainder, maintenance/replacements/termination/EOL, uncertainty/sensitivity and updates; no universal asset lifetime or job fraction is evidenced.

#### Collection requirement: Actual attributed freight work for materials temporary assets and wastes (`freight`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Conditional freight crossing the project boundary includes actual delivery, return and waste legs where not included in supplier/provider coverage; identify vehicle, load share, distance, empty returns and coverage.

- Collection subject: Actual attributed freight work for materials temporary assets and wastes
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Use the corresponding section calculation rule in kg*km from actual mass and distance units, divided by N once; include attributable empty return through compatible full-route dataset or explicit vehicle resources, without inventing freight mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freight`
- Sources:

Range evidence need: Require actual load mass and native unit, attributable share, route distance/unit, empty-return records and supplier/provider coverage with uncertainty; no generic trip length or full-load assumption is evidenced.

#### Collection requirement: Actual direct environmental water withdrawal (`direct_environmental_water`)

Process / prospective direction / type: `integration` / `inputs` / `elementary`.

Conditional actual surface/groundwater withdrawal is an elementary input separate from supplied product water. MUST identify actual source water body, location, abstraction permit, meter, volume convention and intake period; absent direct abstraction means no exchange.

- Collection subject: Actual direct environmental water withdrawal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable withdrawal volume / N; reconcile source-specific meters without equating withdrawal to supplied water or consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources:

Range evidence need: Require actual water source/quality, calibrated volume readings, withdrawal versus product-supply role, event/state and destination balances, uncertainty and any reuse/carry; no generic water-per-building or discharge ratio is evidenced.

#### Collection requirement: Usable counted products returned outward (`usable_count_returns`)

Process / prospective direction / type: `integration` / `outputs` / `product`.

Conditional verified usable outward returns match actual inbound SKU, quality, state, owner and native unit. Closing stock and historic removed components are not outward new-product returns.

- Collection subject: Usable counted products returned outward
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Apply declared gross-with-outlets or consumed-only accounting in the corresponding section calculation rule exactly once; record return quantity / N, with no additional avoided-production credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual outward transfer, receiving acceptance, usable quality/state and inbound-matched SKU/native unit, plus selected gross/consumed-only convention; closing stock and usable historic recovered components are different states.

#### Collection requirement: Usable mass-supplied products returned outward (`usable_mass_returns`)

Process / prospective direction / type: `integration` / `outputs` / `product`.

Conditional verified usable outward returns match actual inbound SKU, quality, state, owner and native unit. Closing stock and historic removed components are not outward new-product returns.

- Collection subject: Usable mass-supplied products returned outward
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply declared gross-with-outlets or consumed-only accounting in the corresponding section calculation rule exactly once; record return quantity / N, with no additional avoided-production credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual outward transfer, receiving acceptance, usable quality/state and inbound-matched SKU/native unit, plus selected gross/consumed-only convention; closing stock and usable historic recovered components are different states.

#### Collection requirement: Usable area-supplied sheets returned outward (`usable_area_returns`)

Process / prospective direction / type: `integration` / `outputs` / `product`.

Conditional verified usable outward returns match actual inbound SKU, quality, state, owner and native unit. Closing stock and historic removed components are not outward new-product returns.

- Collection subject: Usable area-supplied sheets returned outward
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Apply declared gross-with-outlets or consumed-only accounting in the corresponding section calculation rule exactly once; record return quantity / N, with no additional avoided-production credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual outward transfer, receiving acceptance, usable quality/state and inbound-matched SKU/native unit, plus selected gross/consumed-only convention; closing stock and usable historic recovered components are different states.

#### Collection requirement: Usable length-supplied products returned outward (`usable_length_returns`)

Process / prospective direction / type: `integration` / `outputs` / `product`.

Conditional verified usable outward returns match actual inbound SKU, quality, state, owner and native unit. Closing stock and historic removed components are not outward new-product returns.

- Collection subject: Usable length-supplied products returned outward
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Apply declared gross-with-outlets or consumed-only accounting in the corresponding section calculation rule exactly once; record return quantity / N, with no additional avoided-production credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual outward transfer, receiving acceptance, usable quality/state and inbound-matched SKU/native unit, plus selected gross/consumed-only convention; closing stock and usable historic recovered components are different states.

#### Collection requirement: Usable volume-supplied products returned outward (`usable_volume_returns`)

Process / prospective direction / type: `integration` / `outputs` / `product`.

Conditional verified usable outward returns match actual inbound SKU, quality, state, owner and native unit. Closing stock and historic removed components are not outward new-product returns.

- Collection subject: Usable volume-supplied products returned outward
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply declared gross-with-outlets or consumed-only accounting in the corresponding section calculation rule exactly once; record return quantity / N, with no additional avoided-production credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual outward transfer, receiving acceptance, usable quality/state and inbound-matched SKU/native unit, plus selected gross/consumed-only convention; closing stock and usable historic recovered components are different states.

#### Collection requirement: Actual contained removed-material and site-waste fractions (`removed_and_site_wastes`)

Process / prospective direction / type: `integration` / `outputs` / `waste`.

Expand actual removed historic connection/interface material, failed new assemblies, offcuts, dust captured in containers, packaging and contaminated residues by measured waste identity, classification and treatment destination. Historic assets are not negative new purchases. Onsite correction remains in integration; offsite exits keep transfer IDs. Actual usable historic recovered parts MUST be recorded in their own recovered-product state, not matched unused new-product returns. Actual contained wastewater supplied to treatment in native Volume MUST expand a dedicated Waste exchange in m3 with measured volume/state, receiver, treatment and freight coverage; never convert it to an elementary direct release.

- Collection subject: Actual contained removed-material and site-waste fractions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net waste mass / N; preserve waste treatment and transport coverage once, and all retained upstream new-material burdens; no presumed recovery yield or recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

Range evidence need: Require measured fraction/classification, historic versus new origin, wet/dry or moisture basis, net mass/tare, receiver and treatment/freight gate. Native-volume contained wastewater requires its own Waste exchange and volume/state records; no generic waste ratio is evidenced.

#### Collection requirement: Actual substance-specific releases to air (`actual_air_species`)

Process / prospective direction / type: `integration` / `outputs` / `elementary`.

Conditional actual combustion, drilling dust or chemical-use emissions MUST expand measured species/particle fraction and receiving medium into concrete elementary exchanges. Complete species EFs and partial composition models are separate methods; do not invent exhaust pollutants, VOC totals or safety-level emission quantities.

- Collection subject: Actual substance-specific releases to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the corresponding section calculation rule from measured mass, matching activity times species EF, or actual whole-fluid release times evidenced composition and fate; divide by N once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources:

Range evidence need: Require actual substance/particle fraction and receiving medium, measured released mass or compatible activity/species factor with units/source, or actual whole-fluid release and evidenced composition/fate. Retain capture/recovery and nonadditive views; no default species, SDS-based emission or repeated factor composition is evidenced.

#### Collection requirement: Actual whole-liquid release to a specified environment (`direct_liquid_release`)

Process / prospective direction / type: `integration` / `outputs` / `elementary`.

Only actual direct liquid release to a specified receiving environment is elementary output; contained wastewater sent for treatment is waste. MUST expand actual receiving-water identity and measured volume, and separately identify any actual pollutant species; whole-liquid and constituent views are nonadditive.

- Collection subject: Actual whole-liquid release to a specified environment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured actual direct liquid-release volume / N; retain state, temperature and documented volume basis; no assumed equal-to-water-input discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources:

Range evidence need: Require measured actual direct whole-liquid volume/state and receiving water/soil destination, distinct contained-treatment transfers, and separately evidenced constituent species; no equal-input discharge or additive whole-fluid/species burden is evidenced.

#### Collection requirement: Actual substance-specific releases to water or soil (`actual_water_soil_species`)

Process / prospective direction / type: `integration` / `outputs` / `elementary`.

Conditional actual spills/leaks or direct effluent MUST expand substance, receiving compartment and fate. Captured waste, recovered closing stock, outward usable returns and uncontained losses are mutually exclusive fates. Direct environmental gas abstraction or gas release in a native volumetric state MUST additionally expand dedicated measured exchanges with actual gas identity, pressure, temperature and their units.

- Collection subject: Actual substance-specific releases to water or soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the corresponding section calculation rule for actual released mass and receiving medium / N; never use total spill as both recovered material and emitted species or add whole-fluid mass twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources:

Range evidence need: Require actual substance/particle fraction and receiving medium, measured released mass or compatible activity/species factor with units/source, or actual whole-fluid release and evidenced composition/fate. Retain capture/recovery and nonadditive views; no default species, SDS-based emission or repeated factor composition is evidenced.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| integration | Retained-building connection integration and verification | required | all in-scope interventions | integrate roof/cladding connections through signed completion | 1 item |

Roof-to-beam and cladding-to-column/beam are distinct component roles integrated with the retained primary structure under the approved connection strategy. Record structural connection/restraint or dissipative components and actual interface repair materials. Failed connections loop within this node for correction/retest; failed-material boundary exits link to receivers by transfer IDs and do not form a second accepted output. Shared assets cover installation, access, repair and test phases plus other jobs, nodes and periods, as indexed in cp_assets.

### Process: Retained-building connection integration and verification (`integration`)

#### Inputs

##### Product flows

###### Project-designed roof-to-beam restraint assemblies (`roof_connection_assemblies`)

Count each actual identified connector, plate, fastener, restraint or dissipative assembly by SKU/configuration and installed interface. Complete bought assemblies include their BOM once; separately supplied pieces retain separate item identities. Existing roof and beam are retained starting state.

- Selected flow: Project-designed roof-to-beam restraint assemblies
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use stock reconciliation in the corresponding section calculation rule for each actual counted item; do not equate installed count with new purchases.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources: `reluis-industrial-retrofit-2024`

Range evidence need: Require the actual approved connection schedule and SKU/BOM counts, roof/panel interface geometry, delivery/stock balances, failed-installation replacements and counting uncertainty; no generic bolts-per-building or poster dimensions are evidenced.

###### Actual supplied product water for site preparation and tests (`product_water`)

Conditional purchased or utility-supplied water is a technosphere product input, distinct from direct environmental withdrawal. Identify source, quality, meter and actual preparation, cleaning or test duty.

- Selected flow: Actual supplied product water for site preparation and tests
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the corresponding section calculation rule and measured supply in m3; isolate returned reusable water and closing stock; do not infer discharge or consumption from supply alone.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`
- Sources:

Range evidence need: Require actual water source/quality, calibrated volume readings, withdrawal versus product-supply role, event/state and destination balances, uncertainty and any reuse/carry; no generic water-per-building or discharge ratio is evidenced.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed coordinated roof and cladding connection seismic-retrofit intervention (`accepted_connection_retrofit`)

One retained assessed single-storey precast RC factory/workshop intervention after project-designed installation, required inspections and tests, load-path/as-built verification, defect closure and engineer/owner signed completion. Count the building once, not roof panels, bolts, trades or test attempts.

- Selected flow: Completed coordinated roof and cladding connection seismic-retrofit intervention
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Sources: `reluis-industrial-retrofit-2024`

Range evidence need: Require unique building/intervention IDs, actual scope/geometry, required tests, defect closure and signed engineer/owner gate to establish N>0. Exactly 1 item is normalization, not an observed completion yield or risk reduction.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_stock | supplies and returns | Choose by SKU/unit either gross-with-outlets: S=opening_attributed+net_receipts-closing_carried, with usable_return as matched product output; or consumed-only: input S-usable_return and return as a nonadditive audit view. Declare one convention and deduct the return exactly once. Internal issue is not new purchase, closing stock is not outward return, and nonreturned waste/loss retains upstream burdens. |  |
| allocation_assets | shared_assets | Use cp_assets ALL-consumer/full-life driver records: whole-asset equivalents=(job_driver/life_driver)/N with complete manufacture, maintenance, replacement and EOL dataset. Alternatively, if actual dataset production explicitly adopts a lifecycle-complete per-driver service, service quantity=job_driver/N with matching per-unit burden; never combine views or normalize twice. Do not invent life; retain observed history, evidenced remainder, termination, replacements, sources, uncertainty, sensitivity and updates. |  |
| allocation_failures | integration | No default coproduct credit. Failed work, retests and losses burden completed interventions; rejected/incomplete work does not enter N. Separate actual usable recovered products from waste; any further functional product requires explicit review rather than default avoided burden. |  |
| allocation_phases | integration | Enumerate actual start/end periods for assessment/preparation, connection installation, correction/retest and final signed acceptance; link inputs, assets, outputs and events by event_id to phase_id/period_id and record period-specific attribution decisions. Retain full-life links to asset manufacture, maintenance, replacement, termination and EOL; interphase issue/carry is neither another purchase nor another completed output. Unresolved replacement/termination blocks final data. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | integration | accepted outcome | building acceptance register | building_id; intervention_id; site_id; job_id; event_id; phase_id; period_id; phase_start; phase_end; assessment_preparation_phase; installation_phase; correction_retest_phase; acceptance_phase; event_phase_link; attribution_decision; survey_date; building_use; storeys; structural_geometry; roof_type; cladding_type; retained_condition; columns_foundations_assessment; load_path; seismic_demand; design_level; approved_scheme; actual_installed_connections; inspection_records; anchor_test_records; as_built_verification; defect_status; engineer_signoff; owner_signoff; completion_date; unique_completed_count_N | Inspect approved surveys, installation and test/as-built records and signed defect-closed completion; accept only full in-scope building interventions. Aggregation details: N unique completed interventions; 1 item per reference flow | item | each intervention and final handover | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | signed gate; deduplicated IDs |
| cp_supply | integration | new supplies and usable returns | native stock and transfer ledger | site_id; job_id; intervention_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; supplier_id; sku; formulation; state; native_property; native_unit; opening_attributed; external_gross; tare; net_receipts; internal_issue; installed_quantity; closing_carried; usable_return; return_unit; return_transfer_id; return_quality; nonreturned_waste; loss; convention; dimension; thickness; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; mass_view_source; conversion_factor; conversion_unit; conversion_source; N | Reconcile receipts, supplier tickets, calibrated meters/scales and usable-return acceptance by actual SKU/native unit; separate historic removal from new stock. Aggregation details: calc_stock and calc_mass_view; normalize attributable amount / N once per reference flow | actual native item, kg, m2, m or m3 | each receipt, return and period closure | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | stock closure; no double return deduction |
| cp_fuel | integration | fuel supply and actual burn | fuel stock and disjoint fate records | site_id; job_id; intervention_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; carrier; grade; native_unit; volume_state; density; density_unit; density_state; density_source; temperature; temperature_unit; pressure; pressure_unit; opening_attributed; external_gross; tare; net_receipts; closing_carried; usable_return; measured_burn; burn_method; burn_meter; nonburned_waste; uncontained_loss; carry; total_spill_audit; recovered_closing; fate_uncertainty; unknown_loss_investigation; conversion_factor; conversion_unit; conversion_source; N | Use calibrated burn measurement or audited complete mutually exclusive native-unit fate records; investigate unknown losses rather than assign them to combustion. Aggregation details: calc_stock supply and calc_fuel_fates burn / N once per reference flow | m3 with state; other actual native units expanded | each fuel event and closure | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | calibration; complete fates; uncertainty |
| cp_power | integration | actual electricity | meter records | site_id; job_id; intervention_id; asset_id; event_id; phase_id; period_id; meter_id; meter_source; opening_reading; closing_reading; gross_import; gross_export; export_register; onsite_generation; generation_source; generation_resource_coverage; internal_circulation; internal_losses; supplied_unit; job_share; attribution_driver; driver_unit; provider_coverage; conversion_factor; conversion_unit; conversion_source; N | Read calibrated gross import and export registers and actual onsite-generation meters; reconcile source, provider scope and actual allocation driver/unit. Keep internal circulation/losses without net export deduction; expand actual export as separate output and onsite-generation resources once; isolate shared and retest use. Aggregation details: attributable metered electricity / N once per reference flow | kWh; actual supplied unit retained | each work and test phase | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | meter source and compatible upstream electricity |
| cp_provider | integration | completed provider results | physical service acceptance and coverage record | site_id; job_id; intervention_id; provider_id; service_id; event_id; phase_id; period_id; actual_completed_result; native_property; native_unit; accepted_quantity; coverage_manufacture; coverage_materials; coverage_travel; coverage_energy; coverage_water; coverage_spares; coverage_rental; coverage_waste; upstream_dataset; excluded_resources; N | Verify actual completed physical result and full upstream boundary; expand any other native-unit provider exchange instead of converting price or hours to items. Aggregation details: matching physical completed quantity / N once per reference flow; uncovered resources explicitly added once | item for actual counted result; others expanded | each service and acceptance | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | acceptance; coverage matrix; upstream gate |
| cp_assets | integration | shared asset lifecycle attribution | asset lifetime and use register | site_id; job_id; intervention_id; asset_id; consumer_job_id; consumer_node_id; event_id; phase_id; period_id; service_period; driver_name; driver_unit; job_driver; life_driver; observed_history; observed_life; evidenced_remainder; replacement_schedule; termination_condition; manufacture_scope; maintenance_scope; replacement_scope; end_of_life_scope; lifecycle_dataset; evidence_source; uncertainty; sensitivity; update_trigger; N | Enumerate ALL asset consumers/jobs/nodes/periods; use observed complete life or observed history plus evidenced remainder, replacements, termination and EOL. Identify missing life/coverage as a final-data blocker. Aggregation details: (job_driver / life_driver) / N whole-asset equivalents once per reference flow; do not add per-driver view | compatible actual driver and whole-asset item | each use and lifetime update | ALL-consumer complete life: manufacture, ALL jobs/nodes/periods, maintenance, replacement, termination and EOL; not limited to this survey-to-completion interval. | named site/intervention; shared assets enumerate all consumers | per reference flow | all consumers; complete lifecycle; sensitivity and update evidence |
| cp_freight | integration | transport boundary coverage | load-distance dispatch record | site_id; job_id; intervention_id; provider_id; vehicle_id; event_id; phase_id; period_id; transfer_id; cargo_identity; load_mass; mass_unit; distance; distance_unit; route; load_share; empty_return; upstream_coverage; vehicle_resources; conversion_factor; conversion_source; N | Reconcile dispatches and accepted returns/waste transfer tickets; retain actual load and route units, included empty returns and coverage exclusions. Aggregation details: calc_freight and division by N once per reference flow; no overlapping upstream legs | kg*km from actual units | each trip and route closure | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | tickets; route; return coverage |
| cp_waste | integration | contained waste and rejected work | waste transfer and defect route ledger | site_id; job_id; intervention_id; event_id; phase_id; period_id; transfer_id; origin; historic_or_new; waste_identity; hazard_class; gross_mass; tare; net_mass; mass_unit; measured_volume; volume_unit; volume_state; moisture; moisture_basis; dry_wet_basis; recovered_historic_state; rejected_connection_id; correction_loop; final_route; receiver; treatment_gate; transport_coverage; treatment_coverage; no_credit; N | Weigh separated actual waste, reconcile defective connection correction/retest and offsite receiver records; distinguish usable product return, recovered closing stock and waste. Aggregation details: attributable net waste mass / N once per reference flow; rejected state never counted in N | kg; other native waste units independently expanded | each defect/removal/transfer | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | weighing; receiver and defect closure evidence |
| cp_releases | integration | direct environmental withdrawals and releases | measured elementary flow and species record | site_id; job_id; intervention_id; asset_id; event_id; phase_id; period_id; substance; particle_fraction; receiving_medium; water_body; location; permit; direction; measured_mass; mass_unit; measured_volume; volume_unit; volume_state; temperature; temperature_unit; pressure; pressure_unit; matched_activity; activity_unit; species_factor; factor_unit; factor_basis; factor_source; whole_fluid_release; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; method_choice; complete_species_factor; captured_waste; recovered_closing; nonadditive_view; uncertainty; N | Measure actual species and medium or use compatible complete species EF / evidenced whole-fluid composition and fate. Record actual direct-water/gas roles and expand dedicated concrete exchanges; absence requires evidence, not a default zero. Aggregation details: calc_species or measured direct volume / N once per reference flow; whole-fluid and constituent views nonadditive | kg species; m3 actual water; actual native gas units expanded | each intake/release/test event | actual surveyed start through signed completion; relevant stock retains complete source scope | named site/intervention; shared assets enumerate all consumers | per reference flow | species/medium; factor compatibility; fate closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | q_normalized = attributable_quantity / N; attribute compatible site/job/phase/period records first, then divide by N once per reference flow. | attributable_quantity; N; cp_gate | native-unit amount per reference flow |  |
| calc_stock | roof_connection_assemblies; cladding_connection_assemblies; repair_consumables; temporary_sheet_supplies; temporary_linear_supplies; product_water; site_fuel; usable_count_returns; usable_mass_returns; usable_area_returns; usable_length_returns; usable_volume_returns | net_receipts = external_gross - tare; S = opening_attributed + net_receipts - closing_carried; under allocation_stock, gross-with-outlets records S input and matched usable_return output; consumed-only records S-usable_return input and nonadditive return audit. Divide by N once. | opening_attributed; external_gross; tare; closing_carried; usable_return; convention; N; cp_supply; cp_fuel | native inputs and matched outward returns without duplicate deduction |  |
| calc_mass_view | all inventory rows | An independent mass view requires actual SKU dimensions or volume, density, state, moisture, temperature/unit and sources. Use compatible dimensions and mark the view nonadditive to the native physical ledger; no unevidenced item/area-to-mass conversion. | sku; dimension; thickness; density; density_unit; moisture; temperature; temperature_unit; mass_view_source; cp_supply | evidenced nonadditive mass view |  |
| calc_fuel_fates | site_fuel; actual_air_species; actual_water_soil_species | Use actual measured_burn or audited complete disjoint native-unit fates. Return, nonburned waste, uncontained loss and carry are mutually exclusive. total_spill_audit is audit-only; recovered_closing is already in closing_carried. Investigate unknown loss; do not infer burn as residual. | measured_burn; burn_method; usable_return; nonburned_waste; uncontained_loss; carry; total_spill_audit; recovered_closing; fate_uncertainty; unknown_loss_investigation; cp_fuel | actual combustion activity and separate noncombustion fates |  |
| calc_freight | freight | freight_work = load_mass_kg * distance_km * load_share; retain original mass/distance units and conversions; apply coverage to empty returns and uncovered vehicle resources, then divide by N once. | load_mass; mass_unit; distance; distance_unit; load_share; empty_return; upstream_coverage; conversion_factor; conversion_source; N; cp_freight | kg*km per reference flow and uncovered resources |  |
| calc_species | actual_air_species; actual_water_soil_species | Choose the actual valid method: measured species mass, matched activity * complete species EF, or actual whole-fluid release * evidenced composition * fate. Never multiply a complete species EF by composition/fate again. Divide each species/medium amount by N once; whole-fluid and constituent views are nonadditive. | measured_mass; matched_activity; activity_unit; species_factor; factor_unit; factor_basis; factor_source; whole_fluid_release; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; method_choice; complete_species_factor; N; cp_releases | actual species/receiving-medium mass per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_gate | integration | Named building, actual approved scope and complete closed acceptance record; completion does not imply universal code, future risk or new-building equivalence. | reluis-industrial-retrofit-2024 |
| quality_complete | all inventory rows | Actual SKU, provider gate, native unit, coverage and environmental medium are required. Missing resources, lifecycle drivers or actual water/gas roles block final data; a candidate PCR check does not make them zero. | receipt/test/meter/provider-coverage/asset-life/environmental records |
| quality_trace | all inventory rows | Link by site_id, job_id, intervention_id and actual asset/event/phase/period; never add incompatible units/states. Retain raw operands, uncertainty, sensitivity and update triggers. | traceable raw records and quality audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_connection_retrofit | Verify N>0 unique complete interventions, reference name/output row, actual foundations/columns and load-path assessment, approved connection scheme, inspections/tests and signed defect closure; panels/bolts/retests cannot enlarge N. | reluis-industrial-retrofit-2024 |
| validate_stock | all supply and return rows | Match native units/states; check stock, gross/net convention, usable returns exactly once, no negative historic-asset purchase and retained loss burdens. |  |
| validate_shared | shared_assets; provider_test_services; freight | Require complete shared-asset consumers/nodes/periods and life evidence; choose one whole-asset or service view. Actual service results/units, rental/test/spares/temporary utilities/travel/freight/empty-return coverage must neither duplicate nor omit burdens; gaps block. |  |
| validate_rework | integration | Rejected connections remain in this node for correction/retest with actual waste and usable-return routes. Unresolved rejects never enter accepted output, and failure does not erase burdens. |  |
| validate_environment | all elementary rows | Expand actual species/medium and native water/gas withdrawal/releases with complete raw operands. Separate product/waste/elementary states, keep whole-fluid/species views nonadditive and avoid repeat composition/fate multiplication. |  |
| validate_phases | integration | Check period boundaries, links of events/inputs/assets/outputs, attribution decisions and replacement/termination records; avoid duplicate interphase/shared-lifecycle attribution, and block final data on unresolved replacement or termination. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package for a named retained-factory connection-retrofit service, supporting downstream process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | modelling completed industrial-building retrofit with compatible actual scope, starting state, connection strategy and signed gate |
| excluded_use | whole new building asset; generic safety certification; future earthquake performance guarantee; unreviewed substitution for other uses/technologies |
| required_metadata | building/intervention IDs; all reference qualifiers; N/count convention; periods, scope, technology, provider coverage, shared life, resources and environmental inventory |
| required_quality_disclosure | gaps/uncertainty; actual acceptance evidence; release/conversion sources; full-life attribution/sensitivity; numerical-range evidence limitations |
| update_trigger | approved-design/retained-state change; additional acceptance/stock; actual SKU/service/environmental evidence correction; shared-life/replacement/termination update |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| reluis-industrial-retrofit-2024 | literature | https://www.reluis.it/wp-content/uploads/2024/12/14_Poster_Penna_WP3_T2a.pdf | Industrial-building section only: existing single-storey precast RC cases, roof/cladding connection roles, traditional/dissipative retrofit and site-specific limitations; no universal numerical defaults or new-building equivalence. |
| unsd-cpc3-54121-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p. 283, subclass 54121. | Classification scope for ordinary industrial-building construction/repair and mining/power/chemical/specialized-manufacturing exclusions; not a route quantity source. |
| reluis-dpc-industrial-guidelines-2012 | official_guidance | https://www.reluis.it?wpdmdl=4968&ind=4101 | Historical 2012 industrial-building guidance, preface and sections 3.3–3.5: local/global phases, connection interaction, foundations/columns and actual assessment; not current global regulation or universal numerical defaults. |
