---
pcr_id: pcr.construction-services.existing-commercial-office-space-category-a-base-building-services-and-finishes-integrated-refurbishment-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing Commercial Office Space Category A Base-Building Services and Finishes Integrated Refurbishment Services

## 1. Scope and Applicability

This PCR covers a completed integrated landlord Category A refurbishment within a surveyed retained commercial office space. Its product is an actual contract-defined base-building services and basic-finishes state ready for later tenant fit-out. The landlord acceptance gate coordinates retained conditions, physical installations and required testing; it is not an assertion that every typical Cat A component is present or that a tenant can occupy an operational Cat B workplace. [wdi-cat-a-b-fitout]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-commercial-office-space-category-a-base-building-services-and-finishes-integrated-refurbishment-services |
| classification_refs | cpc:3.0:54122 (narrower) |
| covered_products | Integrated retained-office Cat A landlord refurbishment under actual contract scope. |
| excluded_products | New buildings; extensions/new floor area; structural rebuilding; change of use; tenant Cat B; future operation. |
| representative_product | Accepted retained office-space base-building services and basic finishes at landlord handover. |
| production_route | Survey/isolate → selective stripout and substrate release → coordinated Cat A installation → testing/retesting and defect-closed landlord handover. |
| market_state | Completed construction/refurbishment service, not an at-plant material package or occupied tenant office. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Landlord-accepted integrated Cat A office refurbishment within the declared retained footprint. |
| How much | 1 m2 |
| How well | Actual contracted interface/system schedule and required tests, records and defect closure accepted by landlord. |
| How long or cycle | One actual intervention from prework survey through sectional/final acceptance, with phase/period IDs; no assumed service life. |
| reference_flow_link | `accepted_cat_a_office` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| product_flow | Completed landlord-accepted Cat A office refurbishment service |
| flow_property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| unit_group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| reference_unit | m2 |
| required_qualifiers | building_id; footprint_polygons; survey_convention; retained_replaced_schedule; occupancy_phasing; contract_cat_a_scope; base_services_interface_points; common_core_attribution; test_criteria; defect_closed_landlord_acceptance |

A is the unique accepted net internal office floor area. Keep associated common cores and external/shared system burdens causally attributed once; include their area in A only when the same declared survey convention explicitly includes it once. Never add floor, ceiling and trade areas. Multiple zones/buildings are not automatically comparable.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_area` | accepted_cat_a_office | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A>0 is unique surveyed accepted net internal office area under the declared convention; count accepted polygons once after coordinated gate closure. Associated cores/external systems enter causal burdens, not free exclusions or extra denominator area. |
| `native_units` | all inventory rows | Actual native property | actual native unit | Preserve supplied Area, Count, Length, Volume, Mass and service units. A separate needed mass view requires actual SKU density, state, moisture and temperature with units/source; it is nonadditive to the native ledger. Energy/Time and provider-native support require independent verification. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed retained office footprint with actual substrates, existing services/capacity, occupancy and approved scope. |
| starting_condition_role | Retained context and intervention starting state, not a purchased new building. |
| product_classification_scope | Commercial-office repair/alteration subset of CPC 54122. |
| recursive_input_rule | Treat same-category completed subcontract work as upstream only with distinct physical scope/native result and complete burden coverage; exclude duplicated direct resources and internal office-state transfers. |
| upstream_dataset_requirement | Actual SKU/provider/geography/technology/native-unit datasets with explicit supply, freight, asset and waste coverage; expand gaps before finalization. |
| disclosure | Retained/replaced conditions, common/core causal scope, occupancy/phases, contract interfaces, test gates, covered upstream resources and exclusions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `retained_start` | all nodes | Start from surveyed retained building, demised footprint, live occupancy/phasing, retained-capacity/fire/access survey and retained/replaced services schedule. Own actual selective stripout, hazard controls and substrate release. Existing historic assets are neither new purchases nor negative receipts. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `contract_cat_a` | integration; test_handover | The actual approved landlord contract defines Cat A components, interface points and test criteria. Floors/ceilings/basic finishes and coordinated base electrical/lighting, HVAC/wet/fire services are included when actually required. The label is not a universal specification or tenant occupation certificate. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `support_ownership` | site_support | Own direct, rental, provider, test, spare, transport and temporary utility resources once for all nodes. Attribute actual needed common cores and retained whole-system upgrades causally to the footprint and other beneficiaries; unresolved coverage blocks completed data. |  |
| `exclusions` | all nodes | Exclude new whole buildings, extensions/new floor space, structural rebuilding, use conversion, Cat B bespoke partitions/furniture/IT/equipment and future office operation. Riverside evidences phased interface work only; exclude its extension/new area/Cat B, webpage zero statistics, BREEAM grade and case dimensions as defaults. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Selective stripout and protection consumables (`stripout_consumables`)

Process / prospective direction / type: `stripout` / `inputs` / `product`.

Actual bags, barriers, protection, cutting and cleaning consumables used to release the retained substrate; split by actual product and hazard role. Historic fittings are retained context, not new material receipts. Actual removed fit-for-reuse historical equipment or fittings MUST be instantiated as separate historical Product outlets in actual Count/Area/Length/Volume/Mass units, recording origin, usable state, native quantity/unit, receiver, transfer and unique owner; never default these to waste, current-supply returns or negative new receipts.

- Collection subject: Selective stripout and protection consumables
- Flow property / unit: Mass / kg
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stripout_material`

Range evidence need: Record each protection/cutting/cleaning SKU stock and actual hazardous-use state, opening/receipt/closing/usable return and nonreturned loss; investigate variability by retained substrate, access and occupancy phase. No generic kg/m2 range is evidenced.

#### Collection requirement: Usable stripout consumables returned outward (`stripout_usable_return`)

Process / prospective direction / type: `stripout` / `outputs` / `product`.

Only usable current-project supplies returned beyond the foreground boundary with matching incoming SKU and lot. Closing stock is not an outward return; historical recovered fittings are not negative new purchases.

- Collection subject: Usable stripout consumables returned outward
- Flow property / unit: Mass / kg
- Amount rule: Matched weighed usable return divided by A; use gross-with-outlets or consumed-only netting once, without extra credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stripout_material`

Range evidence need: Retain each usable current-project SKU/lot, measured native mass, condition, boundary exit and matching receipt; distinguish closing stock and recovered historical fittings. No reusable-return fraction is evidenced.

#### Collection requirement: Contained removed fittings and stripout residues (`stripout_waste`)

Process / prospective direction / type: `stripout` / `outputs` / `waste`.

Separate actual hazardous and nonhazardous removed ceilings, floors, obsolete services, dust and contaminated consumables by composition and receiving treatment. Waste remains owned through evidenced treatment/transport; no assumed recycling credit.

- Collection subject: Contained removed fittings and stripout residues
- Flow property / unit: Mass / kg
- Amount rule: Tare-corrected measured consignments divided by A; reconcile origin and destination; retained historic mass carries no new-manufacture receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stripout_material`

Range evidence need: Collect actual removed fitting/material composition, original state, hazard survey, tare-corrected quantity and receiver/treatment evidence. Actual liquid Volume wastes MUST have separate native-volume Waste exchanges and receiving records; no assumed waste composition or recycling rate.

#### Collection requirement: Actual area-supplied floor, ceiling and basic finish components (`area_components`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Expand only actual raised-access-floor panels, ceiling boards/grids or area-supplied basic coverings. Record each independent material role and layer once; their supplied or installed m2 are not final office area.

- Collection subject: Actual area-supplied floor, ceiling and basic finish components
- Flow property / unit: Area / m2
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_material`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Collect actual floor/ceiling/covering SKU, layer, supplied area, installed area, offcuts, opening/closing state and matched native-area returns. Area across layers/trades is not final office area; no default wastage factor.

#### Collection requirement: Actual length-supplied cables, pipes and linear interfaces (`length_components`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Expand actual cables, pipework, ducts or containment when the supplier dataset and records use length; retain material, section, rating and delivered state. Count-supplied fittings belong in count_components.

- Collection subject: Actual length-supplied cables, pipes and linear interfaces
- Flow property / unit: Length / m
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_material`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Collect actual cable/pipe/containment SKU, section/rating, measured delivered lengths, cuts/offcuts, stock and matched usable metre returns; retain actual unit conversion. No default run length or length-to-mass factor.

#### Collection requirement: Actual mass-supplied fixings, finishes and jointing consumables (`mass_consumables`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Actual adhesives, basic paints, sealants, fixings and cleaning materials; retain product composition and application state. Do not invent coating recipes or translate a complete kit into duplicate individual purchases.

- Collection subject: Actual mass-supplied fixings, finishes and jointing consumables
- Flow property / unit: Mass / kg
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_material`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Collect actual fixing/finish/sealant/cleaner SKU and wet/dry/contained state, measured mass stock/receipts/returns and residues. Any needed conversion needs actual density/state/moisture/temperature evidence; no recipe or coverage default.

#### Collection requirement: Actual volume-supplied installed service and test fluids (`volume_fluids`)

Process / prospective direction / type: `integration` / `inputs` / `product`.

Expand actual purchased hydronic/test fluids or water supplied to this node when volume is the documented native unit. A mass-supplied refrigerant or chemical MUST be expanded as a separate mass input with verified support; do not invent a fluid or convert it to fit this card.

- Collection subject: Actual volume-supplied installed service and test fluids
- Flow property / unit: Volume / m3
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_material`

Range evidence need: Retain actual fluid SKU, supplier native volume, temperature/state, charge/test destination, opening/closing and recovered stocks. Mass-supplied fluids require separate mass inputs; no default charge, flush volume or leakage fraction.

#### Collection requirement: Actual usable integration supplies returned outward in native units (`integration_usable_returns`)

Process / prospective direction / type: `integration` / `outputs` / `product`.

Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Collection subject: Actual usable integration supplies returned outward in native units
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_material`

Range evidence need: For every actual return collect SKU/lot, usable condition, native Area/Count/Length/Mass/Volume quantity, receipt match and physical receiver. Do not pool units or infer returns from closing stock; no return ratio default.

#### Collection requirement: Contained installation offcuts, failed parts and residues (`integration_waste`)

Process / prospective direction / type: `integration` / `outputs` / `waste`.

Actual segregated packaging, offcuts, removed failed parts, cured residues and contained waste fluids. Subdivide by hazardous state and evidenced destination; collected dust is waste, escaped dust is an elementary release.

- Collection subject: Contained installation offcuts, failed parts and residues
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed net waste mass divided by A; use evidenced SKU/state density only where a separate nonadditive mass view is needed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_material`

Range evidence need: Collect actual offcut/failed-part/packaging/residue composition and measured receiving-treatment quantity. Actual liquid waste recorded by Volume MUST expand into separate native-volume Waste exchanges with volume unit/state and receiver; a density-based mass view is nonadditive.

#### Collection requirement: Actual commissioning and final-cleaning consumables (`test_consumables`)

Process / prospective direction / type: `test_handover` / `inputs` / `product`.

Record actual tracers, cleaning or test consumables and replacement test articles only if used. Durable test instruments and provider physical services belong to site_support.

- Collection subject: Actual commissioning and final-cleaning consumables
- Flow property / unit: Mass / kg
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_material`

Range evidence need: Collect actual test/cleaning SKU, attempt ID, measured receipts/stock/return/waste and actual repeated-cycle consumption. No assumed test count, cleaner recipe or kg/m2 intensity.

#### Collection requirement: Contained commissioning and final-cleaning waste (`test_waste`)

Process / prospective direction / type: `test_handover` / `outputs` / `waste`.

Actual spent test articles, collected cleaning residues and contained discharged test fluids classified by actual state/destination. Direct discharge to the environment MUST instead be expanded as measured medium-specific elementary exchanges.

- Collection subject: Contained commissioning and final-cleaning waste
- Flow property / unit: Mass / kg
- Amount rule: Tare-corrected actual waste consignments divided by A; document receiving treatment coverage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_material`

Range evidence need: Measure actual spent test/cleaning material state, quantity and receiver through initial/repeat cycles. Native-volume contained wastewater MUST be a separate Volume Waste exchange with receiver; direct environmental water has its own measured environmental exchange, not a species-mass surrogate.

#### Collection requirement: Actual supplied liquid fuel for temporary plant and provider activities (`supplied_fuel`)

Process / prospective direction / type: `site_support` / `inputs` / `product`.

Expand only actual supplied fuel grade and state. Upstream fuel supply and actual combustion are separate; the supply quantity is not itself an air emission or assumed burn.

Retain the actual ticket-native unit and conversion operands; the platform volume-group child unit is l, with 1 L = 1 l = 0.001 m3. Uppercase L is not a separately verified platform unit identifier; preserve ticket units and avoid repeated conversion.

- Collection subject: Actual supplied liquid fuel for temporary plant and provider activities
- Flow property / unit: Volume / l
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_fuel`

Range evidence need: Collect actual grade/state and receipt-native units, calibrated stock and measured burn OR complete disjoint fate records including returns/nonburned waste/uncontained loss/carry. Investigate unknown loss and uncertainty; no residual burn or fuel intensity default.

#### Collection requirement: Actual externally completed survey, access, installation-support and testing services (`provider_services`)

Process / prospective direction / type: `site_support` / `inputs` / `product`.

Expand provider physical completed results using the actual documented native unit and complete upstream coverage: surveys, hazard specialists, hired access, specialist interface works, balancing and independent tests where specified. Price or labour hours cannot be converted into Count; remove resources already embodied in an evidenced lifecycle-complete service dataset.

- Collection subject: Actual externally completed survey, access, installation-support and testing services
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Measured actual physical provider result in its native unit divided by A; require actual unit/property support and supplier scope before finalization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_provider`

Range evidence need: Obtain each actual provider physical completed result/native quantity, service unit and complete material/energy/asset/freight/waste scope. Missing native result or coverage blocks final data; neither fee nor hours is a Count proxy.

#### Collection requirement: Attributed complete-life temporary access, tools and test assets (`shared_assets`)

Process / prospective direction / type: `site_support` / `inputs` / `product`.

One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods.

- Collection subject: Attributed complete-life temporary access, tools and test assets
- Flow property / unit: Number of items / item
- Amount rule: Asset-equivalent quantity = (job_driver / full_life_driver) / A with compatible driver units and evidenced complete life; never combine with a per-driver service burden view.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_support_assets`

Range evidence need: Record each asset full-life manufacture/maintenance/replacement/EOL scope, all consumers/jobs/nodes/periods and compatible actual drivers; use observed life or history plus evidenced remainder/termination. Retain sources, uncertainty, sensitivity and update; no assumed life or utilization.

#### Collection requirement: Actual inbound, outbound and provider freight service (`freight_services`)

Process / prospective direction / type: `site_support` / `inputs` / `product`.

Own actual material, waste, return and equipment logistics not already covered by provider/supply datasets. Record actual load, route, vehicle and empty returns; passenger/provider travel requires a separate native physical service expansion when present.

- Collection subject: Actual inbound, outbound and provider freight service
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Sum actual load_kg * actual distance_km for covered legs divided by A, with actual empty-return service burden and coverage disclosed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_support_freight`

Range evidence need: Obtain actual consignment load and load unit, route distance and distance unit, vehicle/coverage and empty-return evidence. Retain real conversion to kg*km and separately covered empty-return burden; no default distance, payload or return factor.

#### Collection requirement: Actual usable liquid fuel returned outward (`fuel_usable_return`)

Process / prospective direction / type: `site_support` / `outputs` / `product`.

Record only documented usable fuel sent outside the foreground boundary with grade, state, lot and incoming match. Recovered spill retained at closing is closing stock.

Retain the actual ticket-native unit and conversion operands; the platform volume-group child unit is l, with 1 L = 1 l = 0.001 m3. Uppercase L is not a separately verified platform unit identifier; preserve ticket units and avoid repeated conversion.

- Collection subject: Actual usable liquid fuel returned outward
- Flow property / unit: Volume / l
- Amount rule: Actual matched native-volume outward return / A. Under gross-with-outlets retain this measured outlet; under consumed-only it is a nonadditive physical audit record, already deducted once from supplied_fuel. No extra credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_fuel`

Range evidence need: Record actual usable grade/lot/state, measured return in receipt-native units and physical receiver matched to incoming fuel; recovered closing remains closing. No return fraction or additional avoided-supply credit.

#### Collection requirement: Actual contained support waste and nonburned fuel waste (`support_waste`)

Process / prospective direction / type: `site_support` / `outputs` / `waste`.

Collected filters, temporary protection, contained fuel waste and water treatment residues go to actual receiving treatment. Recovered closing fuel and direct uncontrolled releases are separate mutually exclusive fates.

- Collection subject: Actual contained support waste and nonburned fuel waste
- Flow property / unit: Mass / kg
- Amount rule: Actual net weighed consignments divided by A; a volume-to-mass view needs actual fuel/SKU density and state and is nonadditive.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_waste`

Range evidence need: Measure actual contained waste composition/hazard/state and receiving treatment. Native-volume liquid wastes MUST expand as separate Volume Waste exchanges with measured volume/unit and receiver; fuel recovery/carry and direct release remain disjoint.

#### Collection requirement: Actual species-specific releases and direct environmental withdrawals (`actual_environmental_exchanges`)

Process / prospective direction / type: `site_support` / `inputs` (withdrawals) / `outputs` (releases) / `elementary`.

MUST expand every actual direct release by species and receiving air/water/soil medium in measured mass, and every actual direct environmental water withdrawal/discharge in its supported measured unit with source/receiving compartment. Apply to stripout dust, finish/cleaner emissions, installed-fluid leaks, fuel combustion/uncontained spill and test discharge owned by linked event IDs; do not invent any species, water or gas exchange when absent. A supplied product, contained waste and elementary release are different states.

- Collection subject: Actual species-specific releases and direct environmental withdrawals
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Use measured species mass OR matched activity times evidenced species factor OR actual whole-fluid release times evidenced composition and fate; do not multiply a complete species factor by composition/fate again. Water/gas roles require separate measured exchanges and CP operands before final data; divide actual attributed amount by A once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_support_environment`

Range evidence need: Determine actual species and receiving medium with measured mass or valid matched activity-factor/whole-fluid composition-fate evidence; independently meter actual environmental water Volume and gas native quantities with their compartments and conversion conditions. Water volume never uses a pollutant species formula; no invented species, SDS emission quantity or missing-as-zero.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stripout` | Survey, isolate and selectively strip out | required | Actual declared contract and footprint | Source is retained office fittings; independent removal responsibility releases substrate to integration and dispatches removed waste to receiving treatment. | per reference flow |
| `integration` | Integrate actual Cat A base services and basic finishes | required | Actual declared contract and footprint | Integrates actual surface/component/service roles into installed office state for testing; embedded finishes and flushing have no separate claimed handoff. | per reference flow |
| `test_handover` | Coordinate tests and landlord acceptance | required | Actual declared contract and footprint | Owns actual coordinated tests and record/defect closure; failures loop to integration; only closed accepted polygons enter A. | per reference flow |
| `site_support` | Own project support resources across all phases | required | Actual declared contract and footprint | Owns shared access/power/provider/test/freight/asset/emission ledgers for all nodes and periods once; event owning_node links preserve physical responsibility. | per reference flow |

### Process: Survey, isolate and selectively strip out (`stripout`)

#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### Retained office footprint released for Cat A integration (`released_office_state`)

Internal handoff after actual service isolation, selective removals and substrate/hazard clearance; survey polygons and release IDs connect to installation. This does not meet final Cat A acceptance.

- Selected flow: Retained office footprint released for Cat A integration
- Flow property / unit: Area / m2
- Amount rule: Measured released footprint area divided by A; internal activity only, no new purchase or final credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stripout_release`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Survey the actual released polygons and their service-isolation/substrate/hazard clearances; retain unreleased and partly cleared area separately. Investigate discrepancies with the installation transfer; no fixed release-area yield is evidenced.

##### Waste flows

### Process: Integrate actual Cat A base services and basic finishes (`integration`)

#### Inputs

##### Product flows

###### Retained office footprint released for Cat A integration (`released_office_feed`)

Accept the internal release from stripout by the same transfer and polygon IDs, without buying the retained building or multiplying quantities by trade count.

- Selected flow: Retained office footprint released for Cat A integration
- Flow property / unit: Area / m2
- Amount rule: Actual received released area divided by A; match released_office_state and disclose any unreleased or excluded polygons.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_state`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Match actual received released polygons/transfer IDs, unreleased interfaces and exclusions to stripout records; investigate mismatches rather than forcing the received area to accepted A.

###### Actual counted base-building service assemblies (`count_components`)

Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Actual counted base-building service assemblies
- Flow property / unit: Number of items / item
- Amount rule: S = opening + gross_receipts - tare - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_material`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Collect actual component SKU/model/configuration, counted receipts/stock/installed/replaced/usable returns and whether a kit includes its BOM. No assumed luminaire/terminal count per office m2.

#### Outputs

##### Product flows

###### Installed Cat A base-building office state awaiting coordinated tests (`installed_office_state`)

Internal installed-state handoff to test_handover with component schedule, test points and unresolved defects. The coordinated assembly includes actual floors, ceilings/basic finishes and electrical, HVAC, wet and fire interfaces required by the contract; absent typical features are documented rather than fabricated.

- Selected flow: Installed Cat A base-building office state awaiting coordinated tests
- Flow property / unit: Area / m2
- Amount rule: Actual uniquely installed footprint area divided by A; no acceptance or saleable output for unresolved failures.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_state`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Survey actual installed polygons and service interface/test-point schedule, with unfinished/unreleased and failed portions retained outside accepted A. Link to test_handover rather than assuming installed area is accepted output.

##### Waste flows

### Process: Coordinate tests and landlord acceptance (`test_handover`)

#### Inputs

##### Product flows

###### Installed Cat A base-building office state awaiting coordinated tests (`installed_office_feed`)

Receive the same installed polygons and interface IDs from integration; inspections and test attempts are activity records and do not create additional office area.

- Selected flow: Installed Cat A base-building office state awaiting coordinated tests
- Flow property / unit: Area / m2
- Amount rule: Measured received installed footprint area divided by A, matched to installed_office_state without a second purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Match actual installed polygons, interface state and defect IDs to integration; retain incomplete, excluded and failed sections and repeated test attempts without new purchased area.

#### Outputs

##### Product flows

###### Completed landlord-accepted Cat A office refurbishment service (`accepted_cat_a_office`)

Final service at defect-closed landlord signoff, with record drawings/O&M and the actual contract-required electrical, HVAC balancing/control, wet and fire/life-safety evidence. This provides a base for later tenant fit-out and does not certify tenant occupation readiness.

- Selected flow: Completed landlord-accepted Cat A office refurbishment service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: 1 m2 defines normalization only. Measure actual accepted nonoverlapping net internal polygons under the declared survey convention and verify the complete actual contract gate; retain incomplete/failed area separately. No empirical yield or service-life interval is asserted.

##### Waste flows

### Process: Own project support resources across all phases (`site_support`)

#### Inputs

##### Product flows

###### Actual supplied construction and commissioning electricity (`supplied_electricity`)

Own temporary lighting, access, tools, HVAC trials, occupied-site continuity and retests for all three production nodes. Retain supplier voltage/mix/geography and provider coverage; no future routine office operation.

- Selected flow: Actual supplied construction and commissioning electricity
- Flow property / unit: Energy / kWh
- Amount rule: Retain separate gross import, export and onsite-generation registers; attribute actual consumed supply, test/retest losses and compatible physical drivers once, divided by A. Actual export is a separate output without input netting or extra credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_energy`

Range evidence need: Retain actual gross meter supply, source/mix/voltage/geography, start/end readings, phase allocation and all actual tool/HVAC/test/retest cycles; reconcile provider coverage and nonproject loads. No default kWh/m2 or trial duration.

###### Actual purchased water for temporary facilities and tests (`support_water`)

Meter actual supplied water used for temporary welfare/protection, cleaning and tests owned here, excluding water already owned by volume_fluids. Environmental abstraction is a different role requiring expansion.

- Selected flow: Actual purchased water for temporary facilities and tests
- Flow property / unit: Volume / m3
- Amount rule: Actual supply meter or documented delivered volume attributable to this project divided by A.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_water`

Range evidence need: Read actual supplied-water meters/deliveries, source, test/cleaning cycles, retained charge and contained/environmental destinations; reconcile water already owned by integration. No generic flushing or commissioning water volume.

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_output` | final output | One intended output is accepted Cat A service area. Internal state transfers and tested trade surfaces are not co-products; exclude unresolved or failed polygons from A until defect closure. No avoided-burden credit for historic recovered material. |  |
| `stocks_returns` | materials and fuel | S = attributed opening stock + external net tare-corrected receipts - carried closing stock. Internal issues/installed activity are not new purchases. Choose gross-with-outlets OR consumed-only matched usable outward-return netting once; no extra credit. All nonreturned loss/waste retains upstream supply burden. |  |
| `shared_complete_life` | site_support | Identify each shared access/utility/tool/test asset, all consuming nodes stripout/integration/test_handover and all external jobs/nodes/periods over full life. Use compatible actual job_driver / full_life_driver with observed life OR observed history plus evidenced remainder, replacements, termination and end of life; retain sources, uncertainty, sensitivity and update. Asset-equivalent amount=(job_driver/full_life_driver)/A with complete manufacture/maintenance/replacement/EOL burden; alternatively a lifecycle-complete per-driver service quantity=job_driver/A in matching unit, never both. |  |
| `phases_rework` | all nodes | Index survey/isolation, stripout, installation, testing/retesting and signed sectional/final completion by actual phase and period. Failed tests return affected installed state to integration with defect IDs; discarded/replaced items exit via the owning waste row. Retain all failed attempt and replacement burdens with accepted A once, without a second sale, year or area denominator. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stripout_material` | `stripout` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; lot_id; hazard_state; historic_origin; reusable_state; reusable_quantity; reusable_native_unit; reusable_receiver; reusable_transfer_id; unique_owner; opening; gross_receipts; tare; closing; usable_outward_return; contained_waste_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; treatment_destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | Weigh and reconcile each actual material/waste lot and matched usable outward return with containment and receiving records. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_stripout_release` | `stripout` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; area; area_unit; retained_services; isolation_record; hazard_clearance; substrate_release; recipient_id | Survey nonoverlapping released polygons and witness isolation, hazard clearance and substrate acceptance before installation. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_integration_material` | `integration` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; component_role; layer; retained_replaced_state; lot_id; package_bom_view; opening; gross_receipts; tare; closing; installed_quantity; usable_outward_return; offcut; failed_part; contained_waste; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | Reconcile procurement, deliveries, stock, installed scope, returns and waste for every actual SKU/native unit and package/BOM ownership. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_integration_state` | `integration` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; area; area_unit; component_schedule; interface_id; installation_release; defect_id; recipient_id | Witness release and installed-state transfers using the same polygons, component schedule and unresolved defects. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_handover` | `test_handover` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; accepted_area; area_unit; contract_scope; system_test_id; test_criterion; criterion_source; test_result; retest_id; defect_id; closure_record; record_drawing; om_record; landlord_signature; acceptance_date | Measure accepted_area = A in m2 from surveyed records under one reference_gate_id; all other protocols take accepted_area_A and its unit from that same final gate, without extra A from trades or repeat tests. Attach actual contract criteria, witnessed tests/retests, defect closure and landlord signature; never infer success from the Cat A label. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_test_material` | `test_handover` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; lot_id; opening; gross_receipts; tare; closing; usable_outward_return; test_attempt; contained_waste_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | Reconcile each actual test/final-cleaning lot and waste across initial and repeat attempts with receiving records. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_energy` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; supplier_id; supply_source; retained_onsite_generation_source; meter_id; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_consumed; onsite_generation_resource_scope; test_cycle_id; retest_cycle_id; cycle_energy; distribution_loss; quantity_unit; nonproject_use; consuming_node; attribution_driver; attribution_driver_unit; coverage; provider_overlap | Read calibrated phase gross-import and gross-export registers separately with actual supply source and retained onsite generation; meter every actual test/retest cycle and loss with physical attribution_driver_unit. Own complete attributed onsite-generation fuel/assets/maintenance/emission scope and provider coverage once; actual exported energy MUST expand into a separate Product outlet, never net against input or claim avoided-supply credit. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_fuel` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; fuel_grade; lot_id; ticket_native_unit; ticket_quantity; volume_conversion_factor; volume_conversion_source; opening; gross_receipts; tare; closing; usable_outward_return; measured_burn; nonburned_waste; uncontained_loss; recovered_closing; total_spill_audit; fate_method; unknown_loss; uncertainty; quantity_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | Read actual fuel stock/meter records. Use measured burn or audit complete disjoint native fates with uncertainty and investigate unknown loss; never infer burn as a residual. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_water` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; supply_id; source_compartment; meter_id; start_reading; end_reading; delivered_volume; retained_volume; contained_wastewater; direct_discharge; receiving_compartment; quantity_unit; coverage; provider_overlap | Read actual delivered/supply meters and distinguish product supply, direct abstraction, retained charge, contained waste and environmental discharge by physical destination. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_provider` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; provider_id; completed_result; service_unit; service_quantity; native_unit; unit_property_id; unit_group_id; support_reference_unit; native_to_support_factor; support_source; physical_scope; included_materials; included_energy; included_freight; included_assets; included_waste; excluded_scope; uncovered_resources; acceptance_record | Obtain physical completed-result records and supplier complete upstream scope; expand every uncovered resource in its own native unit. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_assets` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; asset_id; consumer_id; all_consumers_jobs_nodes_periods; job_driver; full_life_driver; driver_unit; observed_history; evidenced_remainder; manufacture_burden; maintenance_burden; replacement_events; termination_event; eol_burden; attribution_view; service_burden_unit; life_source; uncertainty; sensitivity; observed_full_life_record; remainder_source; termination_source; eol_source; update_trigger; update_date | Build an asset register covering all consumers and complete lifecycle, observed life or history plus evidenced remainder, maintenance/replacements/termination/EOL; test uncertainty/sensitivity and update before reuse. | actual native unit | Every receipt/transfer/event and phase close | Full life across all consumers/jobs/nodes/periods, including observed history, evidenced remainder, replacements, termination and EOL; update when life/driver/scope evidence changes | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_freight` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; leg_id; provider_id; cargo_id; load; load_unit; distance; distance_unit; vehicle; empty_return; transport_factor; factor_unit; factor_source; dataset_coverage; provider_overlap | Obtain actual weighed loads, actual route distances, empty-return records and provider/supply scope; keep kg and km conversion operands. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_waste` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; waste_id; composition; hazard_state; gross; tare; net_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; mass_unit; container_id; receiving_treatment; transport_coverage; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | Weigh contained wastes by actual composition/hazard/destination with receiving treatment and transport chain. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_environment` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; owning_node; source_activity; species; flow_role; source_compartment; receiving_compartment; measurement_method; measured_mass; mass_unit; measured_water_volume; measured_gas_quantity; gas_quantity_unit; pressure; pressure_unit; temperature; temperature_unit; actual_burn; activity; activity_unit; whole_fluid_release; whole_fluid_unit; density; density_unit; density_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; species_factor; factor_unit; factor_basis; factor_source; uncertainty; release_event_id; provider_coverage | By linked actual event and owning node, measure each actual species/medium or use matched activity-factor or measured whole-fluid composition/fate; independently meter actual direct water/gas environmental roles. Document zero only with coverage evidence; no generic VOC, SDS or safety threshold surrogate. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |

### Calculation Rules

The algebra below defines foreground accounting protocols using actual raw records and unit definitions. WDI supports the Cat A practice boundary and phased handoff only; it supplies no stock, combustion, species or full-life mathematical factor.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | all inventory rows | Q_norm = Q_attributed / A; A is the unique accepted net internal office area, with A>0; normalize each attributed physical ledger once. | Q_attributed; A; cp_handover | Physical native-unit amount per reference flow |  |
| `stock_throughput` | stripout_consumables; area_components; count_components; length_components; mass_consumables; volume_fluids; test_consumables; supplied_fuel | S = opening + gross_receipts - tare - closing; choose gross-with-outlets OR consumed-only S - usable_outward_return once; retain nonreturned waste/loss upstream. | opening; gross_receipts; tare; closing; usable_outward_return | Declared native-unit supply throughput |  |
| `asset_share` | shared_assets | Asset_equivalent = (job_driver / full_life_driver) / A; use compatible drivers and complete-life burden, or lifecycle-complete per-driver service amount = job_driver / A, never both. | job_driver; full_life_driver; A; cp_support_assets | Nonadditive complete-life asset-equivalent or matched service quantity |  |
| `freight_activity` | freight_services | Freight = sum(load_kg * distance_km) / A; include actual empty-return coverage through its evidenced service burden, without inventing loaded mass. | load; load_unit; distance; distance_unit; empty_return; A; cp_support_freight | Actual kg*km per reference flow and disclosed empty-return coverage |  |
| `release_activity` | actual_environmental_exchanges | Release_mass = measured_mass OR activity * species_factor OR whole_fluid_release * composition * fate_fraction; applies only to actual species mass on one complete compatible basis. Direct environmental water uses Water_volume = measured_water_volume, and gas uses separate measured_gas_quantity with actual unit/state/compartment; water Volume never uses a species-mass formula. | measured_mass; measured_water_volume; measured_gas_quantity; activity; species_factor; whole_fluid_release; composition; fate_fraction; cp_support_environment | Actual species/medium release or direct water/gas quantity before one division by A |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `scope_trace` | all nodes | Keep actual building/job/footprint/process/phase/period/event/transfer IDs and reconcile retained/replaced and provider scope. | Survey, contract, stock and transfer records |
| `actual_factors` | all calculations | Retain raw operands, compatible units including temperature_unit, factor/composition/fate bases and sources. No guessed lives, dimensions, fuel burns, emission factors or numeric ranges. | Actual measurement/calibration and factor records |
| `complete_resources` | all nodes | All actual resources, shared/core scope, tests/retests and failures remain counted once. Missing provider/asset/elementary coverage blocks finalization, not zero. | Coverage matrix and uncertainty/sensitivity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_area` | reference and handover | Require surveyed convention/polygons and A>0, no overlaps or premature partial area, actual contract system schedule and all applicable electrical/HVAC balancing/control/wet/fire tests, retests, record drawings/O&M, defect closure and landlord signoff. Actual approval requirements remain project-specific; Cat A alone proves none. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `balance_native` | all inventory rows | Reconcile native supply, matched returns, contained wastes, installed stocks and direct releases by event/SKU. Reconcile opening, external receipts and closing balances; recovered fuel retained at the boundary is already included in closing, never an additional fate. Outward return, nonburned waste, uncontained loss and closing are disjoint destinations. Historic assets cannot offset new supply; no duplicate kit/BOM, provider/direct or freight coverage. |  |
| `fuel_species` | site_support | Actual burn uses measured burn OR an audited complete set of disjoint native-unit fates with uncertainty and unknown-loss investigation. Return, nonburned waste, uncontained loss and carry are mutually exclusive; no residual inferred burn. Total spill is audit only and recovered closing is already closing. Require actual species/medium and measured mass, matched activity-factor or measured whole-fluid composition/fate basis; whole-fluid and species views are nonadditive, SDS/no-VOC claims are not quantities. |  |
| `shared_rework` | all nodes | Check full-life consumers/periods, compatible drivers, replacements/termination/EOL and one burden view; unknown full-life coverage blocks finalization. Match transfer/defect IDs and waste destinations; no rejected state in accepted A. Required actual direct water/gas roles must be expanded with dedicated measured exchanges and CP operands before final data. |  |
| `identity_coverage` | all inventory rows | Expand every actual SKU/provider/waste/species umbrella into verified concrete exchanges with native property/unit support. Unresolved identities or omitted physical provider, temporary/test/spare/transport resources block final data; a candidate check is not publication or UUID verification. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one declared retained-office Cat A intervention and its process/lifecyclemodel projections. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Comparisons of matched retained conditions, actual Cat A contract scope, area convention, shared/core attribution and acceptance gates. |
| excluded_use | New building, extension or Cat B claims; tenant operating readiness, future office energy, generic legal compliance or case-performance defaults. |
| required_metadata | PCR id, actual building/footprint/periods, survey convention/A, retained/replaced systems, contract interfaces, tests/gate, common attribution and upstream coverage. |
| required_quality_disclosure | Measured/calculated status, concrete identity gaps, provider/native support gaps, coverage, uncertainty/sensitivity, source applicability and excluded adjacent work. |
| update_trigger | Scope/system/area/retained-condition change; new test/defect evidence; changed provider coverage or full-life asset attribution; verified identities and stronger measurements. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| wdi-cat-a-b-fitout | literature | https://www.willmottdixoninteriors.co.uk/difference-between-cat-a-and-cat-b-fit-outs/ | Contractor practice description: Cat A base-service/basic-finish purpose versus tenant Cat B. Typical feature list, not a universal legal standard, fixed BOM or numeric factor. |
| wdi-riverside-refurbishment | literature | https://www.willmottdixoninteriors.co.uk/case-studies/riverside-house/ | Existing-office phased live-site and common-service interface practice. Case includes excluded extension/new area/Cat B; zero webpage stats, dimensions and rating supply no defaults. |
