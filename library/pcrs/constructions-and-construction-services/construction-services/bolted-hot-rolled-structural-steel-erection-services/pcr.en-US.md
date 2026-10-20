---
pcr_id: pcr.constructions-and-construction-services.construction-services.bolted-hot-rolled-structural-steel-erection-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bolted hot-rolled structural steel erection services

## 1. Scope and Applicability

This rule covers site erection of shop-fabricated hot-rolled steel columns, beams and bracing joined by permanent field bolting. Actual owned steel shims, base completion/grout, incidental preparation and touch-up, temporary-support control and cleanup belong to the complete episode. Use actual work and acceptance records, without a presumed consumption rate, design performance or standard duration.

Shop fabrication, structural field welding, cold-formed framing, independent full coating/fireproofing, new foundation/anchor manufacture and whole-building construction are excluded. Such work or a real independent handoff requires scope review. The FHWA inspection guide identifies lifting, field connections, bearing alignment and field coating responsibilities; OSHA material supports identifying the starting interface and stability duties, rather than universal acceptance thresholds or LCA consumption data.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.bolted-hot-rolled-structural-steel-erection-services |
| classification_refs | CPC 3.0 54550; narrower |
| covered_products | Site erection service for shop-fabricated hot-rolled columns, beams and bracing with permanent field bolting |
| excluded_products | Shop fabrication; structural field welding; cold-formed framing; independent full coating/fireproofing; new foundation/anchor manufacture; whole-building construction |
| representative_product | Erection service for an aligned, stable and accepted permanently bolted steel assembly |
| production_route | Receiving/staging → lifting and initial connection → alignment and permanent bolting → owned base/repair completion → temporary-support release and acceptance |
| market_state | Completed erection service measured by actual accepted net permanent steel; distinct from manufacture of the delivered steel |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Erection service for an accepted permanently bolted hot-rolled structural steel assembly |
| How much | 1 kg of accepted net permanent steel S; count each retained steel constituent once per episode |
| How well | Actual project alignment and permanent-connection inspection, stability, owned base/incidental repair completion and controlled support release accepted |
| How long or cycle | One actual complete erection episode spanning receiving/staging, lifting/initial connection, alignment/permanent bolting, owned base/repair completion and support release/acceptance with actual intervals/reporting periods; no default days or building lifetime |
| reference_flow_link | `reference_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bolted hot-rolled structural steel erection service |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Project/site; piece marks and steel grade; fabrication/factory-coating state; permanent connection/shim schedule; whole-product/steel bridges; foundation/anchor interface release; actual phases/reporting periods; equipment/service coverage; project inspection/acceptance gate; grout/touch-up ownership; temporary-support release; stock/reject fates |

Preserve every required qualifier in data-package metadata, the reference-flow description or equivalent fields. An assembly short of the gate does not produce this reference output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_steel_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | S is actual net steel mass of uniquely accepted permanent members, connections and steel shims, independently measured using cp_steel_erect_material; derive_accepted_steel and normalize_concrete_exchange produce per 1 kg reference flow without substituting whole incoming coated-product mass for S. |
| same_state_bridges | fabricated_steel_members; permanent_connection_steel; base_completion_products; incidental_surface_repair_products; tool_temporary_replacement_products; diesel_fuel; water_supplied; lubricants_other_operating_products; packaging_received; direct_freshwater_abstraction; reference_service; usable_material_exits; returnable_packaging_exit; steel_scrap_waste; coating_grout_residue_waste; captured_preparation_solids; packaging_waste; oily_consumable_waste; collected_wastewater_slurry; fossil_co2_air; other_engine_species_air; physical_particulate_air; volatile_species_air; water_vapour_air; specific_direct_water_releases | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured same-state weighing or traceable mass records and supplier constituent bridges for count, volume, steel and coating conversions; length, area and design geometry alone do not establish mass. Keep wet waste, water-only and dry constituent masses distinct. |
| utility_service_units | electricity; hired_equipment_services | Energy; Duration | kWh; h | Preserve electricity in kWh and service in actual hours, without substituting calorific value, labour hours or composite area-time properties. Verify each concrete exchange support identity and conversion; disclose gaps. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

Mass rows use the Mass and Units of mass chain above, with kg as reference unit. Where actual auxiliary length or area observations require identity references, use Length `838aaa23-0117-11db-92e3-0800200c9a66` / Units of length `838aaa22-0117-11db-92e3-0800200c9a66` and Area `93a60a56-a3c8-19da-a746-0800200c9a66` / Units of area `93a60a57-a3c8-18da-a746-0800200c9a66`, respectively; these observations do not create additional products.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Released foundation/anchor interface, existing geometry/load path and access, plus delivered members with piece marks and connection schedules |
| starting_condition_role | Observed interface condition; existing assets are not products newly manufactured by this erection service |
| product_classification_scope | Classification is mapping context; this service is limited to hot-rolled member erection with permanent field bolting |
| recursive_input_rule | Record any same-category prior erection service by actual provider, state, ownership boundary and transfer; do not recursively rebuild existing supports or duplicate accepted steel output; review any real cross-owner handoff |
| upstream_dataset_requirement | Provide supply-chain datasets/boundaries for actual fabricated-state members, connection products, materials, utilities and equipment services; count provider-included burdens once and disclose unknown coverage |
| disclosure | Disclose starting release evidence, work periods, ownership, equipment coverage, actual acceptance/release, WIP/reject states and unresolved data |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_start | steel_erect | Begin at the released foundation/anchor and access interface with identified delivered members. Record existing support geometry, load path and interface release as starting-condition observations; do not fabricate product cards for design approval, geometry or readiness. | osha-steel-site |
| boundary_assembly | steel_erect | Own lifting, initial connection, alignment, permanent field bolting and actual owned steel shims, nonsteel base completion, incidental preparation/touch-up and cleanup. Component roles are fabricated columns/beams/bracing and permanent bolts/nuts/washers/plates/shims. Initial connection or crane release is not final acceptance; use the actual project connection inspection and stability gate. | fhwa-inspection-steel; osha-steel-stability |
| boundary_gate | reference_service | End at one documented aligned, permanently bolted and stable accepted assembly after all actual owned grout/base and surface-repair obligations and controlled temporary-support release are complete. Record inapplicable duties with evidence; unresolved duties prevent declaring this gate. Do not include the later building use or demolition. | steel-erection-accounting-method; osha-steel-stability |
| boundary_phases | steel_erect | Index receiving/staging, lifting/initial connection, alignment/permanent bolting, owned base/repair completion and support release/acceptance by actual dates and reporting periods. Link every material, equipment, utility, output, rework and replacement event to its phase and owner. Preserve open stocks and uncompleted periods rather than advancing them to acceptance. | steel-erection-accounting-method |
| boundary_node | steel_erect | One accountable node owns the complete erection episode and its internal fitting/rebolting/touch-up loops. Phase records, stock movements and changed existing-asset condition are observations, not independent products. A genuinely separately owned material-state transfer requires a transfer identifier and explicit node/boundary review; never erase that handoff. | steel-erection-accounting-method |
| boundary_scope_review | steel_erect | Shop fabrication, planned or required structural field welding, cold-formed framing, independent full coating/fireproofing, new foundation/anchor manufacture and whole-building construction are outside this category. Contrary actual work triggers scope review and a documented handoff before completion; incidental fitting is not permission to expand the fabrication route. | steel-erection-accounting-method |
| boundary_assets | steel_erect | Identify cranes, access/logistics equipment, temporary braces and shared meters with all actual consumers and use periods. Reusable asset mass and custody are observed; manufacture, maintenance and operation follow the actual provider/owned boundary and evidenced attribution, with no assumed lifetime or full-asset charge. | steel-erection-accounting-method |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Permanent steel connection items and shims (`permanent_connection_steel`)

Process / prospective direction / type: `steel_erect` / `inputs` / `product`.

Record actual bolts, nuts, washers, plates and steel shims from the permanent connection schedule; occurrence must be evidenced, and an unknown schedule remains a gap. Keep separate concrete SKU/state quantities and whole-product versus steel-constituent masses. A range needs the actual accepted connection and shim schedule and measured masses; no universal bolt-to-member fraction applies. Only uniquely retained steel enters S.

- Collection subject: Permanent steel connection items and shims
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Owned nonsteel base-completion products (`base_completion_products`)

Process / prospective direction / type: `steel_erect` / `inputs` / `product`.

Include actual nonsteel grout or other base-completion products only where the erector owns this work; document yes, no or unresolved occurrence. Record supplied formulation mass, actual base geometry, mixed state and placement. A range needs grout formulation, filled volume and measured same-state conversions. Separately purchased mixing water belongs to water_supplied, while formulation water stays in this product; grout never enters S.

- Collection subject: Owned nonsteel base-completion products
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Incidental surface-preparation and touch-up products (`incidental_surface_repair_products`)

Process / prospective direction / type: `steel_erect` / `inputs` / `product`.

Include actual approved incidental preparation chemicals, abrasives and touch-up coatings under erection ownership; independent full coating requires scope review. Record exact product/state and application or cleanup event once. A range needs repair area, film system, solids or coverage and application/cleanup records. Distinguish added products from factory coating and separately added water, lubricants and solid tool replacements; formulation mass is not emitted species mass.

- Collection subject: Incidental surface-preparation and touch-up products
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Consumed fitting tools and temporary-support replacements (`tool_temporary_replacement_products`)

Process / prospective direction / type: `steel_erect` / `inputs` / `product`.

Record actual solid cutting/drilling consumables and consumptive temporary-support replacement materials, with yes/no/unresolved event status. A range needs actual tool/fitting and replacement issue/use records and current-state mass. Reusable support assets are observations in the asset ledger; permanent connection steel, surface-repair abrasives, fluids, water and packaging have other exclusive roles. Do not charge the full reusable asset mass as a consumed replacement.

- Collection subject: Consumed fitting tools and temporary-support replacements
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Other operating lubricants and fluids (`lubricants_other_operating_products`)

Process / prospective direction / type: `steel_erect` / `inputs` / `product`.

Identify actual operating oils/fluids and separately purchased spill or cleaning carriers, each with its own SKU/state and issue, maintenance or spill event. A range needs those events and measured mass or density bridges. This role excludes grout, coating/preparation products, solid tool replacements, fuel, water and packaging. Provider-covered maintenance products are not additional owned inputs; oil availability alone cannot quantify contaminated cloth waste.

- Collection subject: Other operating lubricants and fluids
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Separately supplied erection equipment services (`hired_equipment_services`)

Process / prospective direction / type: `steel_erect` / `inputs` / `product`.

For actual crane, access or logistics equipment services, identify the provider, equipment and included fuel, maintenance and capital coverage. A range needs real occupation/duty intervals and independent S; labour time and assumed shifts are invalid substitutes. Resolve each service separately and verify its Duration/hour support chain. The physical kit mass is an asset observation, not another consumed service or unused return.

- Collection subject: Separately supplied erection equipment services
- Flow property / unit: Duration / h
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_asset`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Packaging received for the erection episode (`packaging_received`)

Process / prospective direction / type: `steel_erect` / `inputs` / `product`.

When packaging accompanies goods or is separately issued, identify actual material, current state and custody. A range needs supplier/unpacking records, measured packaging mass and return/reuse coverage. Packaging is excluded from whole member product mass where the latter is specified net of packaging; otherwise provide the measured separation bridge. Track reusable packaging stocks without repeatedly charging their entire manufacture or treating them as steel S.

- Collection subject: Packaging received for the erection episode
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Direct freshwater abstraction (`direct_freshwater_abstraction`)

Process / prospective direction / type: `steel_erect` / `inputs` / `elementary`.

Only actual direct environmental abstraction is an elementary input; identify the freshwater source and medium. A range needs a separate abstraction meter, actual operation demand and independent water-only balance. Do not represent supplier water again as environmental withdrawal. Unknown abstraction status remains a gap, and a water-demand residual cannot create an abstraction exchange.

- Collection subject: Direct freshwater abstraction
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_release`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Usable material returns and transfers (`usable_material_exits`)

Process / prospective direction / type: `steel_erect` / `outputs` / `product`.

Record actual usable unused materials or separately evidenced transfers by concrete SKU/state and receiver. Used reusable equipment return belongs to asset custody, not this unused-material role. A range needs matching availability, measured dispatch and receiver confirmation; no heterogeneous return percentage defines a flow. Retained WIP is a stock observation. Recovery or downgrade needs its actual destination and cannot be assumed from a missing piece.

- Collection subject: Usable material returns and transfers
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Returnable packaging leaving custody (`returnable_packaging_exit`)

Process / prospective direction / type: `steel_erect` / `outputs` / `product`.

Record actual reusable packaging return or transfer by identity, state and receiver. A range needs corresponding available packaging and custody/dispatch records. Return, retained reuse and discarded packaging are mutually exclusive fates for each item/event. Return does not justify an automatic avoided-new-packaging credit; any changed ownership or burden boundary must be disclosed.

- Collection subject: Returnable packaging leaving custody
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Field steel scrap and rejected steel waste (`steel_scrap_waste`)

Process / prospective direction / type: `steel_erect` / `outputs` / `waste`.

Record actual fitting offcuts or steel rejected for waste dispatch, with piece/state, measured mass and receiver. A range needs field fitting/rejection events and independently available steel stock; shop-fabrication scrap averages cannot set site losses. Rejects that remain for rework or WIP are not dispatched waste and do not enter accepted S. Do not count coating removed with scrap again as a separate whole residue.

- Collection subject: Field steel scrap and rejected steel waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Discarded coating or grout residues (`coating_grout_residue_waste`)

Process / prospective direction / type: `steel_erect` / `outputs` / `waste`.

Actual coating/grout residues require separate concrete waste states and treatment receivers; this umbrella is not one mixed fixed identity. A range needs factory-coating, added-product and water constituent pools plus application/removal records. Wet residue includes its evidenced water fraction; steel S is not an available coating pool. Assign residue exclusively against captured solids, oily waste and slurry.

- Collection subject: Discarded coating or grout residues
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Discarded packaging (`packaging_waste`)

Process / prospective direction / type: `steel_erect` / `outputs` / `waste`.

Record each actual discarded packaging material/state and treatment receiver. A range needs matching packaging availability, measured waste and independently observed contamination. Reconcile return, reuse, retained stock and waste exclusively; contamination does not come from packaging mass alone. Do not simultaneously report the same item as a usable packaging exit.

- Collection subject: Discarded packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Oily operating and cleaning consumable waste (`oily_consumable_waste`)

Process / prospective direction / type: `steel_erect` / `outputs` / `waste`.

For actual oily consumables, resolve the oil/fluid, carrier/cloth/absorber, moisture state and receiver. A range needs independently available constituent pools and measured waste-state mass. Oil alone cannot bound a wet cloth or absorber mixture. Separate provider-maintenance coverage and exclude the same oil, carrier or water portion from other waste routes; unknown spill status is not zero.

- Collection subject: Oily operating and cleaning consumable waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Other actual engine-emission substances (`other_engine_species_air`)

Process / prospective direction / type: `steel_erect` / `outputs` / `elementary`.

Expand only actual evidenced engine substances into separately identified air exchanges, retaining reported species or aggregate basis and applicable compartment. A numerical range needs exact substance/basis, engine, fuel, duty and applicable factor/model uncertainty; this conceptual role has no useful generic bound. Do not use a generic NOx/SOx or pollutant UUID for unresolved species. Unknown species coverage remains incomplete.

- Collection subject: Other actual engine-emission substances
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_release`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Uncaptured operation-derived particles to air (`physical_particulate_air`)

Process / prospective direction / type: `steel_erect` / `outputs` / `elementary`.

For actual particle releases, identify size/composition, source material and air compartment. A range needs source-pool availability and independently supported generation/capture or measured release. Do not assume a dust percentage or turn missing captured solids into airborne particles. Exclude portions already in captured solids, scrap or slurry; distinguish material dust from combustion species.

- Collection subject: Uncaptured operation-derived particles to air
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_release`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Actual volatile chemical species to air (`volatile_species_air`)

Process / prospective direction / type: `steel_erect` / `outputs` / `elementary`.

For actual volatile releases, resolve each chemical constituent and receiving air compartment. A range requires formulation and exact constituent mass in factory coating or added cleaner/coating, application/removal and supported fate data. Product mass is not emitted VOC mass. Retained film, collected residues and uncaptured release must use exclusive constituent fractions; unknown removal or volatilization remains a gap.

- Collection subject: Actual volatile chemical species to air
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_release`
- Sources: `steel-erection-accounting-method`

#### Collection requirement: Substance-specific direct releases to water (`specific_direct_water_releases`)

Process / prospective direction / type: `steel_erect` / `outputs` / `elementary`.

For actual direct environmental discharge, identify each substance, source-water/pollutant basis and receiving water medium. A range needs measured discharge volume, concentration or direct mass and the actual receiver; no numerical bound is useful for this umbrella. Collected wastewater sent for treatment is not the same elementary release. Keep water-only accounting separate from pollutant masses and retain unknown fate as unresolved.

- Collection subject: Substance-specific direct releases to water
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_release`
- Sources: `steel-erection-accounting-method`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| steel_erect | Complete bolted steel erection episode | required | Every actual episode within this rule | Owned five-phase erection, rework loops and accepted handover | per 1 kg reference flow; S is unique accepted net permanent steel |

Rework states for member, connection and coating defects stay linked to the originating steel_erect event, with approved fitting/rebolting/touch-up, usable return, waste dispatch or retained unresolved WIP distinguished. Stock, readiness inspections and phase changes do not add nodes; a real independent handoff triggers boundary/node review. Register actual equipment, temporary supports and meters across all consuming phases/periods.

### Process: Complete bolted steel erection episode (`steel_erect`)

#### Inputs

##### Product flows

###### Delivered fabricated hot-rolled steel members (`fabricated_steel_members`)

Required columns, beams and bracing cross the site-erection boundary in their actual fabricated and coated state. Identify each piece mark, grade and coating system. Record whole delivered-state product mass separately from evidenced steel, factory-coating and other constituents. A quantitative range requires actual piece masses, constituent bridges, accepted steel and return, scrap and WIP observations; coated product mass divided by S is not necessarily one. Reconcile only matching piece and constituent pools.

- Selected flow: Delivered fabricated hot-rolled steel members
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

###### Diesel fuel (`diesel_fuel`)

Record diesel actually burned by owned or separately metered equipment, including attributable idle, tests and rework, where occurrence is established. The fixed identity is generic diesel with no asserted grade, refinery or fossil fraction. A range requires calibrated stocks/meters, actual equipment and complete duty intervals with independent S. Delivered fuel, burnt fuel and stock change must be reconciled; useful lifting work is not fuel mass, and provider-included fuel is not charged again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_utility`
- Sources: `steel-erection-accounting-method`

###### Attributed electricity supply (`electricity`)

When actually consumed, resolve the source, voltage and provider and preserve metered Energy in kWh. A range needs meter topology, complete intervals, device duty and independent S. Direct assignments precede residual shared-meter attribution; totals across consumers cannot exceed observed supply. Energy support identity still requires verification for the concrete exchange; a calorific-value property is not a substitute.

- Selected flow: Attributed electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_utility`
- Sources: `steel-erection-accounting-method`

###### Supplied process and cleanup water (`water_supplied`)

Record actual purchased or supplied water for wet operations and cleanup; require occurrence evidence rather than assuming use. A range needs measured draw, recirculation/return and independently supported water-only fates. Volume-to-mass conversion needs actual same-state density. Exclude water already intrinsic to a purchased formulation and any identical quantity recorded as direct abstraction. Internal circulation is not a new external input.

- Selected flow: Supplied process and cleanup water
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_utility`
- Sources: `steel-erection-accounting-method`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bolted hot-rolled structural steel erection service (`reference_service`)

This is the accepted erection service measured by net permanent steel S, not another sale of its component inputs. Count only uniquely accepted retained members, permanent connection items and steel shims after alignment, permanent-bolt inspection, stability, all actual owned base/repair completion and controlled temporary-support release are evidenced. Independently derive positive S from piece/connection records and steel-constituent bridges. Exclude temporary items, nonsteel grout/coatings, returns, scrap and unresolved WIP. The reference quantity alone is S/S = 1 kg.

- Selected flow: Bolted hot-rolled structural steel erection service
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

- Range: Accepted-steel self-normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`
  - Sources: `steel-erection-accounting-method`

##### Waste flows

###### Captured surface-preparation solids (`captured_preparation_solids`)

When preparation occurs, record captured solids with actual parent steel/coating constituents, added abrasives, capture method and receiver. A range needs those available pools and independently measured collected state. Captured solids and uncaptured airborne particles are exclusive fates of the same source portion. Embedded moisture and mixed coating constituents require measured bridges; the closure residual is not collected dust.

- Selected flow: Captured surface-preparation solids
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

###### Collected wastewater and cleaning slurry (`collected_wastewater_slurry`)

Only actual collected wastewater or cutting/cleaning slurry sent to treatment is waste output. Identify receiver, wet state, water-only mass and entrained dry solids/chemicals independently. A range needs actual water supply, collection/capture and constituent records. Entrained solids cannot also be counted as dry dispatched waste; uncollected discharge and evaporation require their own evidence and are not inferred from a missing balance.

- Selected flow: Collected wastewater and cleaning slurry
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_material`
- Sources: `steel-erection-accounting-method`

##### Elementary flows

###### Carbon dioxide (fossil), to air unspecified (`fossil_co2_air`)

For evidenced combustion, quantify fossil CO2 from measured fuel-carbon/species data or a documented compatible model. This fixed identity is specifically unspecified air and must not be relabelled as another compartment. Identified CO2 carbon cannot exceed independently measured fossil carbon burned; the upper 44/12 conversion is a carbon-mass constraint, not a diesel-mass emission factor or an assertion of complete oxidation. Do not invent oxygen inputs or other species to close fuel mass.

- Selected flow: Carbon dioxide (fossil), to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_release`
- Sources: `steel-erection-accounting-method`; `carbon-oxidation-identity`

- Range: Independent burned fossil-carbon constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3.6666666666666665
  - Unit: kg CO2/kg fossil carbon burned
  - Basis: per kg independently measured fossil carbon burned; upper is 44/12
  - Basis kind: `fuel_inventory`
  - Evidence kind: `method_formula`
  - Sources: `carbon-oxidation-identity`

###### Water vapour, to air unspecified (`water_vapour_air`)

Use this H2O-to-unspecified-air identity only for independently supported actual evaporation from a wet operation. A range needs separately measured available water-only pools and an applicable evaporation measurement/model. Separate water in formulations, supplied water and other evidenced sources from dry constituents; account for retained water, wastewater and actual discharge. A residual is not vapour, and absence of evaporation needs evidence; a different compartment needs its own identity.

- Selected flow: Water vapour, to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Independently measured and attributed quantity of each actual concrete exchange divided once by S.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_erect_release`
- Sources: `steel-erection-accounting-method`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | Assign directly measured piece, connection and phase activity first. For genuinely shared crane/access/meter use, list every consuming episode/node and period, retain owned idle/tests/rework, then allocate only the unassigned residual using documented causal use or occupation evidence. Record period-specific shares and uncertainty; shares must be nonoverlapping and reconcile to observed coverage. | steel-erection-accounting-method |
| allocation_provider | hired_equipment_services; diesel_fuel; electricity; lubricants_other_operating_products | Read each service boundary before adding owned fuel, electricity, maintenance or capital burdens. Count provider-included burdens once. For a self-owned reusable crane, tool or temporary brace, use evidenced actual service capacity/lifetime, use and damage/replacement records for manufacture attribution; unknown life or coverage remains a gap, never a default reuse count. | steel-erection-accounting-method |
| allocation_rework | steel_erect; reference_service | Keep failed member/connection inspection, damaged coating and unaccepted assemblies linked to their original piece, node and period. Approved fitting, rebolting or touch-up retains its burdens within steel_erect. Record actual return, downgrade, recovery, waste or retained WIP destinations separately. Acceptance counts each permanent steel constituent once after successful rework; neither repeated installation nor unresolved reject mass enlarges S. | steel-erection-accounting-method |
| allocation_exits | usable_material_exits; returnable_packaging_exit; steel_scrap_waste | An actual usable return is not an accepted erection service or an automatic avoided-product credit. Keep dispatch identity, state, ownership and receiver. Report waste treatment responsibilities and any separately reviewed recovery allocation explicitly; do not net heterogeneous returns or scrap against the reference mass. Used equipment returns are custody events rather than unused material exits. | steel-erection-accounting-method |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_erect_material | steel_erect | materials, products, waste and accepted S | weighing, piece/connection and fate register | event_id; lot/configuration; process_id; phase; timestamp/period; owner; role; actual_identity/current_state; native_amount/unit; measured_same_state_bridge; receiver/medium; evidence; uncertainty | Use calibrated weighing or traceable same-state supplier mass records; reconcile piece marks, connection schedule, whole/constituent bridges and acceptance/fate documents. Observe actual foundation/anchor release, geometry, inspections and stock as contextual records. Measure S from unique accepted permanent steel constituents, not from a balancing residual. | kg; native count/volume with measured bridge | Each receipt, issue, rework, acceptance, return or dispatch; stock at period boundaries | Starting interface release through completed acceptance; all phases and actual reporting periods, including open periods and stock boundaries | Actual erection site and declared equipment/service ownership boundary | per 1 kg reference flow | Calibrations, supplier constituent data, permanent accepted schedule, inspection/release signatures, custody and waste tickets |
| cp_steel_erect_utility | steel_erect | fuel, electricity and supplied water | meter, stock and equipment-duty journal | event_id; lot/configuration; process_id; phase; timestamp/period; owner; role; actual_identity/current_state; native_amount/unit; measured_same_state_bridge; receiver/medium; evidence; uncertainty | Read calibrated meters and opening/closing stocks with delivery, source/state and equipment duty. Include owned idle, tests and rework. Mark provider coverage and direct assignments before residual attribution. Convert liquid volume only using evidenced actual state density; preserve native kWh. | kg; kWh; native meter units with bridge | Every meter/stock interval and duty event, including interruptions | Starting interface release through completed acceptance; all phases and actual reporting periods, including open periods and stock boundaries | Actual erection site and declared equipment/service ownership boundary | per 1 kg reference flow | Meter topology/calibration, receipts, density evidence, full duty log and provider coverage |
| cp_steel_erect_asset | steel_erect | hired services and reusable asset observations | service, custody, shared-use and replacement journal | event_id; lot/configuration; process_id; phase; timestamp/period; owner; role; actual_identity/current_state; native_amount/unit; measured_same_state_bridge; receiver/medium; evidence; uncertainty | Link each actual crane/access/logistics/temporary-support asset to provider/owned coverage, custody and use/occupation intervals, all consumers and periods. Observe mass without treating it as consumption. Obtain actual manufacture capacity/life, use, damage and replacement evidence if self-owned; otherwise retain the gap. | h; kg asset observation; native service units | Each hire, custody transfer, use interval, damage, replacement and release | Starting interface release through completed acceptance; all phases and actual reporting periods, including open periods and stock boundaries | Actual erection site and declared equipment/service ownership boundary | per 1 kg reference flow | Contracts, equipment IDs, duty/occupation and all-consumer logs, actual life/use/damage documents |
| cp_steel_erect_release | steel_erect | direct resource intake and substance-specific releases | source, medium, sampling and model journal | event_id; lot/configuration; process_id; phase; timestamp/period; owner; role; actual_identity/current_state; native_amount/unit; measured_same_state_bridge; receiver/medium; evidence; uncertainty | For actual abstraction/emission/discharge record exact substance or reported basis, environmental medium, source pool and phase. Use calibrated direct measurements or a documented compatible species/fate model with measured inputs and uncertainty. Keep fossil carbon and water-only pools separate; record capture and treatment links without deriving emissions from closure. | kg substance; native sampling units with measured bridge | Each actual release/abstraction event or evidenced model interval | Starting interface release through completed acceptance; all phases and actual reporting periods, including open periods and stock boundaries | Actual erection site and declared equipment/service ownership boundary | per 1 kg reference flow | Occurrence evidence, samples/calibrations, actual fuel-carbon/formulation data, model/factor applicability and receiver |

Protocol aggregation declares the final basis only. Before aggregation, obtain the native quantity, same-state bridge and owned share separately for each concrete identity/state/receiver or substance/medium, then divide by independent S. The reference alone is S/S. Heterogeneous ledger totals serve QA only; service quantities stay separate from observed asset mass, shared meters use direct assignment before residual reconciliation, and water-only and fossil-carbon checks remain separate.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| derive_accepted_steel | reference_service | S = sum of unique actual net steel masses permanently retained in accepted members, permanent connections and steel shims; derive each steel constituent from its measured whole-state item and documented constituent bridge. Require S > 0 and complete gate evidence; exclude temporary items, nonsteel grout/coatings, returns, scrap and WIP. | cp_steel_erect_material; accepted piece/connection schedule; measured whole-state/steel bridges | S in kg | steel-erection-accounting-method |
| normalize_concrete_exchange | all inventory rows | For each independently identified concrete exchange, convert its native event quantity to its required unit using an evidenced same-state bridge, assign its owned share, then divide its episode numerator once by S. Keep different SKU/state/receiver or substance/medium numerators separate. Only reference_service uses S/S = 1 kg; a mixed ledger sum is QA, not an exchange. | cp_steel_erect_material; cp_steel_erect_utility; cp_steel_erect_asset; cp_steel_erect_release; S | concrete unit per 1 kg reference flow | steel-erection-accounting-method |
| compatible_pool_check | all inventory rows | Within one compatible identity/state or evidenced constituent pool, compare opening stock plus actual inputs with independently observed retained incorporation, closing stock and exclusive actual exits/releases. Record differences and uncertainty as findings; do not solve for an unmeasured exchange. Separate factory coating, added coating/grout, dry constituents and water-only fates. | cp_steel_erect_material; cp_steel_erect_utility; cp_steel_erect_release; compatible identity/constituent bridge | pool-specific QA residual and uncertainty | steel-erection-accounting-method |
| fossil_carbon_check | fossil_co2_air | Identified fossil CO2 mass <= independently measured fossil carbon burned * 44/12. Obtain fossil carbon from actual burned fuel and evidenced carbon/fossil fractions; do not assume generic diesel fossil fraction or complete oxidation. This constrains CO2 carbon only and is not a total combustion mass balance. | cp_steel_erect_utility; cp_steel_erect_release; actual fossil carbon burned | fossil-carbon QA constraint | carbon-oxidation-identity |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_concrete_identity | all inventory rows | Record actual occurrence as yes/no/unresolved, with evidence for nonoccurrence and zero. Expand conditional roles to each concrete SKU/state/receiver or substance/medium and verify flow and support identities before final exchange use; no conceptual umbrella or unsupported support substitution. | Occurrence register; identity/state/receiver evidence |
| quality_denominator | reference_service; fabricated_steel_members; permanent_connection_steel | Reconcile accepted piece marks and permanent connection/shim schedule, whole delivered-state masses and independently evidenced steel/factory-coating constituents. Require a positive steel-only S and the full project gate. Design geometry or invoice mass cannot silently stand in for accepted constituent mass. | Calibrated same-state mass/bridge records; signed acceptance |
| quality_range_needs | all inventory rows | The reference normalization and fossil-carbon identity are the only numeric ranges specified here. For every other row, obtain its card-specific quantitative evidence need before claiming a numerical prior: actual masses/constituents, grout geometry/formulation, repair area/film, tool events, duty/meters, water-only fates, service intervals, packaging custody, waste state/receiver or exact emission substance/model as applicable. Preserve each unresolved range need and physical QA; no arbitrary upper limit or residual-derived exchange. | Per-card range evidence register; source applicability and uncertainty |
| quality_exclusive_roles | all inventory rows | Assign each event/material portion once among base/grout, incidental surface-repair, solid tool/temporary replacement, operating fluids, fuel/electricity, separately supplied water and packaging. Track intrinsic formulation water within its purchased product. Use exclusive retained, returned, captured, waste and environmental fates for each evidenced constituent. | Event-to-role ledger and compatible constituent bridges |
| quality_period_ownership | steel_erect | Cover all actual phases/periods, receipts and stocks, owned idle/tests/rework, asset use, replacements, returns and termination. Pair genuine cross-owner transfers and list all shared consumers. Require attribution coverage, provider exclusions and actual life/use evidence for self-owned capital; retain missing intervals or unknown fates as gaps. | Full phase/event journal; contracts; all-consumer allocation reconciliation |
| quality_release_pools | direct_freshwater_abstraction; fossil_co2_air; other_engine_species_air; physical_particulate_air; volatile_species_air; water_vapour_air; specific_direct_water_releases | Water-only availability and fates, fuel fossil-carbon/species constraints and dry material pools are independently evidenced QA. Do not mix whole wet waste mass with water mass, fuel with CO2, captured solids with uncaptured particles, or treatment-bound waste with direct environmental releases. Record methods, source-state compatibility, detection limits and model uncertainty. | Separate compatible-pool, water-only and carbon/species checks |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | reference_service | Require positive independently measured S and piece/connection acceptance, actual alignment and bolting inspection, stability, owned completion and controlled support release. Receipt weight or initial connection alone cannot pass. Exclude returns, scrap, temporary items and unaccepted WIP. | steel-erection-accounting-method |
| validate_identity | all inventory rows | Resolve each concrete material/SKU/state, service and receiver or elementary substance/medium before final exchange production. Fixed generic diesel, fossil CO2 to unspecified air and H2O to unspecified air retain their actual identity limits. Verify flow-property/unit-group chains independently; no unresolved umbrella is a concrete UUID. | steel-erection-accounting-method |
| validate_measurement | all inventory rows | Check native numerator, same-state conversion, protocol ownership, unique event and one division by S. Reference alone self-normalizes to one. Whole coated-product input mass cannot be replaced by retained net steel. Range gaps and unknown occurrence remain explicit; no arbitrary numeric bounds prove completeness. | steel-erection-accounting-method |
| validate_phases | steel_erect | Check actual five-phase and reporting-period journal, all piece/asset/utility/output links and attribution decisions. Rework, replacement and termination require resolved state and destination. Open periods or missing release obligations prevent episode finalization and cannot be silently carried into accepted output. | steel-erection-accounting-method |
| validate_shared | hired_equipment_services; diesel_fuel; electricity | Reconcile shared assets/services, all consumers/periods, direct assignments and residual shares. Test provider fuel/capital/maintenance against owned rows for duplicate coverage. Missing self-owned lifetime/use evidence remains a disclosed gap rather than full asset manufacture or zero burden. | steel-erection-accounting-method |
| validate_fates | all inventory rows | Close only compatible material/state or evidenced constituent pools, including opening/closing stock. Keep water-only and fossil-carbon checks separate. Distinguish captured/uncaptured, wet/dry and product/waste/environment destinations. A residual is a finding and never a fabricated exchange; do not equate fuel kg with CO2 kg or invent oxygen. | steel-erection-accounting-method; carbon-oxidation-identity |
| validate_scope | steel_erect | Review any separately owned handoff, structural field welding or independent fabrication/full coating before applying this category. Record actual local/project acceptance requirements; safety guidance examples supply no default final-bolt criterion, design tolerance or inventory rate. | fhwa-inspection-steel; osha-steel-site; osha-steel-stability |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for an actual bolted hot-rolled structural steel erection episode |
| downstream_use | LCA process or lifecyclemodel projection and actual supply-chain linking once identity and quality conditions are met |
| allowed_use | Constructing or comparing actual erection data with matched boundary, acceptance gate, net permanent steel basis and disclosures |
| excluded_use | Proxy for steel fabrication or whole-building lifecycle; universal construction performance or regulatory compliance proof; final exchanges with unresolved identities |
| required_metadata | All reference qualifiers, full phase/period journal, S and constituent bridges, actual substances/media, equipment/service coverage, shared attribution and fate ownership |
| required_quality_disclosure | Identity/support gaps; unresolved occurrence and range evidence; measurement/model uncertainty; data periods/coverage; open WIP/rejects; capital-life and supplier-boundary gaps; performed/skipped checks and completeness |
| update_trigger | Material changes to member/coating/connection state, ownership boundary, permanent joining route, equipment/service coverage, acceptance requirements, measurement bridges, release methods or new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fhwa-inspection-steel | official_guidance | FHWA, Construction Program Management and Inspection Guide, Appendix D, Structural Steel (updated 2017-06-27), https://www.fhwa.dot.gov/construction/cpmi04d2.cfm | Identifies lifting, field-connection inspection, bearing alignment and field cleaning/coating responsibilities; supplies no universal consumption rates or acceptance tolerances |
| osha-steel-site | official_guidance | OSHA eTools, Steel Erection, Site Preparation, https://www.osha.gov/etools/steel-erection/site-preparation | Starting foundation/anchor interface, staging, lifting planning and responsibility identification; US safety context, not inventory quantities or universal thresholds |
| osha-steel-stability | official_guidance | OSHA eTools, Steel Erection, Structural Stability, https://www.osha.gov/etools/steel-erection/structural-stability | Temporary stability, support and controlled-release responsibilities; initial-connection provisions do not replace actual final permanent-connection acceptance |
| steel-erection-accounting-method | method_factor | Normative method defined in this PCR, sections 3–9: accepted net permanent steel, concrete-event normalization and exclusive compatible-pool accounting | PCR-defined accepted-steel, event normalization, actual ownership and exclusive material/period accounting method; no claim of external measured consumption rates |
| carbon-oxidation-identity | method_factor | Normative carbon-mass identity: one CO2 molecule contains one C atom; CO2/C mass ratio 44/12 on the declared conventional atomic-mass basis | Constrains CO2 carbon from independently measured burned fossil carbon only; supplies no diesel carbon fraction, complete-oxidation assumption or emission factor |
