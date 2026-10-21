---
pcr_id: pcr.construction-services.existing-harbour-quay-super-cone-rubber-fender-element-replacement-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing harbour quay super-cone rubber fender element replacement services

## 1. Scope and Applicability

This PCR covers the completed replacement of a damaged standard-mount SCN-type super-cone rubber fender element at an existing concrete harbour quay. The qualified compatible frontal steel frame, UHMWPE facing, chains and anchors remain in service. The contractor owns safe access and support, controlled removal, interface qualification and cleaning, installation of the approved new cone, reconnection and adjustment, actual specified checks and signed replacement release. Source manuals describe the component interfaces and possible replacement after damage; they do not establish a universal LCA quantity or guarantee present project suitability.

Exclude a new quay or complete new fender system; SCK, arch, foam, pneumatic, reverse-mount and parallel-motion arrangements; ship fenders; new anchors, structural reconstruction or replacement frontal frame; cold/hot vulcanisation repair; later berthing, port operation and scheduled maintenance. If retained interfaces fail qualification, block this route and define a different repair scope. Sources: `un-cpc3-2025`; `trelleborg-scn-sck-2018`; `trelleborg-fender-systems-2019`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-harbour-quay-super-cone-rubber-fender-element-replacement-services |
| classification_refs | CPC 3.0 54232; narrower repair subset, subject to individual semantic mapping review |
| covered_products | Accepted replacement of one approved complete SCN cone rubber element in a qualified retained standard-mount harbour quay fender position |
| excluded_products | New fender systems, new quay/anchors/frame, other fender technologies and mountings, vulcanisation repair and operational berthing service |
| representative_product | One site-specific cone-element replacement at a uniquely identified berth position after all bounded gates close |
| production_route | Authorise and support retained frame; remove damaged cone; qualify/clean retained interfaces; install approved cone and required matching hardware; adjust chains/alignment; complete specified checks and release |
| market_state | Completed contractor repair service at signed owner handover; rubber grade and fender size remain declared configuration attributes, not equivalence factors |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One fully accepted standard-mount SCN cone-element replacement at one existing harbour quay position |
| How much | 1 item; N is the positive count of unique final accepted element-replacement IDs, never attempts, bolts, frames or whole quays |
| How well | Qualified compatible retained frame/facing, chains and anchors; approved actual cone configuration; safe support, seating/fasteners, alignment/chain setting and all project-required torque, retorque or tests complete with signed bounded release |
| How long or cycle | One bounded repair campaign from authorised preparation through required follow-up acceptance; record all actual dates/periods and repeated work. No future lifetime or service interval is assigned |
| reference_flow_link | `accepted_element_replacement` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted standard-mount super-cone rubber fender element replacement service at existing harbour quay |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | berth and element ID; standard mounting; actual SCN size/grade/compound and embedded hardware; factory certificate; retained frame/facing/chain/anchor qualification; approved drawing and lifting plan; local environment/load context; acceptance criteria/results/signature; campaign periods; excluded larger defects |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count only uniquely identified completed replacements whose entire stated gate is signed. N must be positive; repeated removal, failed lifts, rejected cones and unresolved positions never increase N. One count conveys no mass, life or energy-absorption equivalence. |
| native_quantity | all inventory rows | Actual verified exchange property | Actual native unit | Keep each SKU/material/service in its native measured unit; categorical grades, torque results and operating hours are qualifiers or activities until a matching service reference is verified. Different units cannot be added. |
| physical_conversion | material and fluid rows | Mass or actual native property | kg or actual native unit | Count-to-mass needs actual matching SKU net unit mass; volume-to-mass needs actual volume/unit, density, state, temperature and source for that material. Mixed contaminated waste mass cannot infer discarded Count. |
| stock_basis | material/fuel inputs and outward returns | Actual native property | Same unit within each ledger | Gross receipt is net of tare before returns. Choose consumed-only or gross-with-outlets once per linked supply scope; do not use net purchase input together with gross returns. Link opening/closing stock and their carried upstream burdens. |
| species_basis | routine_substance_release;incident_substance_release | Mass | kg | Identify actual substance/species or particle-size class and receiving medium. Whole-fluid physical-loss and partial-species views are nonadditive; mass-balance residual, SDS percentage or low-VOC label alone is not an emission amount. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing concrete quay with damaged SCN cone and retained compatible frame/facing, chains and anchors assessed fit for this bounded replacement; actual hazards/access and damage records declared |
| starting_condition_role | Retained productive asset state and installation interfaces, recorded by position/condition; no new manufacture exchange or avoided-replacement credit |
| product_classification_scope | Harbour quay repair subset; classification describes service context and does not define component identity or methodology |
| recursive_input_rule | If a separately completed same-category replacement service is purchased, keep its accepted position IDs, service scope and upstream dataset explicit; exclude its already covered resources from the local job. An internal work stage is never another accepted repair product |
| upstream_dataset_requirement | Every new element, separately purchased hardware/consumable, direct utility, transport and bounded provider/shared-asset contribution needs compatible identity, quantity and upstream coverage before final dataset completion |
| disclosure | Declare host qualification, supplied/retained components, gross-versus-consumed ledger choice, failed/rework burden, all periods/providers, stock carry, destination records, shared complete-life scope and remaining uncertainty |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| qualified_host | Do not accept a replacement with incompatible or defective retained frame/facing, chains, sockets, threads, anchors or quay. Identify and remedy job-caused damage within the agreed small-repair scope; major defects stop this route. | trelleborg-fender-systems-2019;trelleborg-scn-sck-2018 |
| integration_boundary | One integrated contractor responsibility covers removal through reconnection and release. Removal has no independently accepted intermediate-product handoff. Retained interface and new moulded rubber body are distinct assembly roles; separately supplied hardware is not counted again if embedded/bundled in the cone. | trelleborg-fender-systems-2019 |
| support_gate | Capture actual engineered access/isolation, protected storage/handling, certified lifting/support and actual weight/centre-of-gravity basis. Support the frame until required components are secure; apply actual approved tightening sequence, seating and chain/alignment criteria. A catalogue value is not a universal job setting. | trelleborg-fender-systems-2019 |
| incremental_scope | Include preparation, containment, cleaning water/cleaner, tools/protection, actual coating remedy, all installation/testing/rework resources, mobilisation/demobilisation and destinations, including provider-paid resources. Document actual absence; unknown is not zero. |  |
| period_shared_scope | Index job preparation, execution, follow-up and closure events to actual periods. For shared crane, rigging, access plant, temporary support and tools, cover manufacture, maintenance/replacement and end-of-life across all consumers/periods; separate direct operation and genuine provider coverage. Do not impose a generic asset life. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Separately supplied compatible fender fastening components (`separate_fasteners`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Expand this conditional role by actual bolt/nut/washer or other separately supplied SKU and interface. Retained inspected fasteners have no new supply quantity. Confirm thread/material compatibility and actual replacement need. Do not count hardware included in the supplied cone or provider package again.

- Collection subject: Separately supplied compatible fender fastening components
- Flow property / unit: Count / item
- Amount rule: q_scope / N; cp_separate_fasteners; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_separate_fasteners`
- Sources: `trelleborg-fender-systems-2019`

Range evidence need: Actual itemised quantities, discarded counts, installed/retained counts and authentic SKU mass if converting are needed; tightening tables do not prescribe universal hardware demand.

#### Collection requirement: Actual cleaning and fastening-maintenance formulations (`maintenance_formulations`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Expand by actual approved cleaner, rust inhibitor, grease or other formulation used on this job, with composition and packaging boundaries. Use only actual compatible products; exclude vulcanisation compounds and hypothetical mandatory chemical use. Formulation mass is not active substance mass or an emission.

- Collection subject: Actual cleaning and fastening-maintenance formulations
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_maintenance_formulations; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance_formulations`
- Sources: `trelleborg-scn-sck-2018`

Range evidence need: Actual formulation identity, consumed/gross method, stocks, returns, destinations and composition needed. No general dose or VOC fraction is an emission factor.

#### Collection requirement: Actual job-caused coating-remedy materials (`coating_remedy`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Include compatible primer/paint/thinner only when required to remedy damage caused by handling or this replacement. Record affected retained surfaces, actual approved system and consumable ownership. Major frame reconstruction or replacement is outside the product.

- Collection subject: Actual job-caused coating-remedy materials
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_coating_remedy; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating_remedy`
- Sources: `trelleborg-fender-systems-2019`

Range evidence need: Actual paint system, gross/consumed supply, film/cure acceptance as required, losses and destinations are needed. No default repair area, solids yield, drying time or VOC release is specified.

#### Collection requirement: Actual temporary protection and containment consumables (`protection_consumables`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Expand actual nonreusable protection, absorbents, cleaning cloths, masking or containment items by material. Allocate reusable mats, supports and rigging through shared_asset_service instead; record actual incremental wear/replacements once. Include preparation, tests and all repeated handling.

- Collection subject: Actual temporary protection and containment consumables
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_protection_consumables; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protection_consumables`
- Sources: `trelleborg-fender-systems-2019`

Range evidence need: Job-specific receipts, stocks, usage and destinations required. No default number or mass of slings, absorbents or barriers is assumed.

#### Collection requirement: Actually metered direct electricity or other supplied energy (`direct_energy`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Expand actual electric crane, tools, lighting, cleaning/test equipment or temporary facilities by energy carrier and meter boundary. Exclude the same operation if included in a verified completed provider service. Operating time alone is not energy; do not substitute fuel calorific property for electricity.

- Collection subject: Actually metered direct electricity or other supplied energy
- Flow property / unit: Actual verified energy property / Actual native energy unit
- Amount rule: q_scope / N; cp_direct_energy; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_direct_energy`

Range evidence need: Actual carrier/property/unit, meter readings or documented equipment/load/time model including idle/rework, calibration and overlap scope are needed; no universal crane energy intensity exists here.

#### Collection requirement: Actual fuel supplied for directly modelled plant and vehicles (`direct_fuel`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Expand by actual fuel identity and engine/vehicle scope, including idle, mobilisation and rework only where locally owned. Choose stock-adjusted supply with actual outward exits, or exclude matched outward returned usable supply once in the consumed-only view. All nonreturned fuel waste and uncontained losses retain their upstream supply burden; burned quantity is a separate combustion activity. Nonburned spill recovery and retained stocks are physical ledgers, not generic pollutant flows.

- Collection subject: Actual fuel supplied for directly modelled plant and vehicles
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_direct_fuel; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_direct_fuel`

Range evidence need: Actual same-scope opening/gross/closing and mutually exclusive nonburned return/waste/uncontained quantities needed, with density/state/temperature if converting volume. Total spilled is audit-only; recovered spill is assigned once to final destination.

#### Collection requirement: Actual separately purchased transport and mobilisation services (`transport_service`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Expand completed transport legs for cones, supplies, removed waste or plant mobilisation/demobilisation by mode/provider/load/route. Verify the service reference unit and coverage; direct vehicle fuel/energy/asset use replaces the corresponding covered service, never supplements it.

- Collection subject: Actual separately purchased transport and mobilisation services
- Flow property / unit: Actual verified transport property / Actual native transport unit
- Amount rule: q_scope / N; cp_transport_service; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport_service`

Range evidence need: Actual payload, distance, loads/empty legs, mode, provider and reference unit needed; if mass-distance is selected, actual kg and km must support it. No universal distance or allocation by invoice price.

#### Collection requirement: Genuine bounded purchased lifting access or testing service (`provider_service`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Instantiate only a real independently bounded completed provider service with actual resources/results and declared upstream coverage. A crane hour price, torque report or rented asset alone is not a complete replacement-service Count. Local uncovered preparation/consumables/direct utilities remain owned here.

- Collection subject: Genuine bounded purchased lifting access or testing service
- Flow property / unit: Actual verified service property / Actual native service unit
- Amount rule: q_scope / N; cp_provider_service; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_provider_service`

Range evidence need: Actual contract, completed scope/results, reference property/unit and excluded resources needed. Service hours never silently become item; quantity and upstream coverage gaps block final dataset.

#### Collection requirement: Attributed complete-life service of shared lifting and support assets (`shared_asset_service`)

Process / prospective direction / type: `element_replacement` / `inputs` / `product`.

Expand actual crane, access plant, rigging, tools and temporary support shared by jobs or periods. The contribution covers manufacture, maintenance/replacement and end-of-life under one consistent service basis; direct operation and separately inventoried spares or purchased provider coverage are excluded from that contribution.

- Collection subject: Attributed complete-life service of shared lifting and support assets
- Flow property / unit: Actual verified asset-service property / Actual native service unit
- Amount rule: q_scope / N; cp_shared_asset_service; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_shared_asset_service`

Range evidence need: All consumers/periods, compatible driver numerator/whole-life denominator and complete burden scope required. Completed observed life or observed history plus justified remaining service/replacement/termination/EOL with uncertainty, sensitivity and update plan required; missing coverage cannot be annualised away.

#### Collection requirement: Actual unused or rejected count-native components returned outward (`counted_returns`)

Process / prospective direction / type: `element_replacement` / `outputs` / `product`.

Expand cones and matching separately supplied fasteners by SKU and destination when they physically leave this foreground custody as usable supplier returns/recovery products. Closing stock is not an outward return; damaged discarded pieces belong waste. Each return retains its upstream burden/accounting treatment, without an automatic credit.

- Collection subject: Actual unused or rejected count-native components returned outward
- Flow property / unit: Count / item
- Amount rule: q_scope / N; cp_counted_returns; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_counted_returns`

Range evidence need: Actual signed return count, SKU/condition, custody, destination and transaction coverage needed. Match to receipt and discarded/installed count ledgers; mixed-waste mass cannot determine returned count.

#### Collection requirement: Actual unused mass-native materials returned outward (`mass_returns`)

Process / prospective direction / type: `element_replacement` / `outputs` / `product`.

Expand clean usable formulation, fuel, water or other mass-native supplies by actual identity and outward custody. Distinguish supplier return from contaminated waste, retained recovered spill and closing stock. Match the gross/consumed input choice; do not export a fictitious negative supply or avoided burden.

- Collection subject: Actual unused mass-native materials returned outward
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_mass_returns; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass_returns`

Range evidence need: Actual weighed net return, identity/composition, condition and destination required. If measured volumetrically, actual density/state/temperature/source supports conversion; no assumed clean fraction.

#### Collection requirement: Removed old rubber fender element and rejected rubber sent to waste (`removed_rubber`)

Process / prospective direction / type: `element_replacement` / `outputs` / `waste`.

Record the removed old cone and any newly supplied cone rejected to disposal/recovery as distinguishable origins, including embedded hardware where inseparable. Identify contamination, condition, actual custody and waste destination. The host old element is not a newly manufactured input to this repair; its incremental removal and treatment remain included.

- Collection subject: Removed old rubber fender element and rejected rubber sent to waste
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_removed_rubber; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_removed_rubber`
- Sources: `trelleborg-scn-sck-2018`

Range evidence need: Actual net weights, removed/rejected element counts, embedded metal boundary and destination manifests needed; no generic mass from cone dimensions and no automatic rubber recycling credit.

#### Collection requirement: Removed separate fastening metal and metal debris sent to waste (`removed_metal`)

Process / prospective direction / type: `element_replacement` / `outputs` / `waste`.

Include actually discarded retained or new fasteners and separately removed metal debris; maintain source SKU/count and condition. Do not count embedded plates here when included in the removed-rubber gross waste mass. Frame replacement is outside scope.

- Collection subject: Removed separate fastening metal and metal debris sent to waste
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_removed_metal; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_removed_metal`
- Sources: `trelleborg-fender-systems-2019`

Range evidence need: Actual discarded counts by SKU, net metal weights, embedded/separate boundary and destinations required. Contaminated mixed-waste kg is not a fastener-count conversion.

#### Collection requirement: Actual solid cleaning coating and containment residues (`solid_cleanup_waste`)

Process / prospective direction / type: `element_replacement` / `outputs` / `waste`.

Expand removed marine growth/foreign matter, coating debris, contaminated absorbents/cloths and spent protection by composition and destination. Separate dry carrier and captured contaminant views where needed without summing them twice. Job-caused coating remedy and incident cleanup remain within the node.

- Collection subject: Actual solid cleaning coating and containment residues
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_solid_cleanup_waste; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_solid_cleanup_waste`

Range evidence need: Actual weighed gross/tare/net mass, moisture/contamination basis, source event and manifest needed. Do not turn unmeasured cleaning residual into a species emission.

#### Collection requirement: Actual captured wash liquid and contaminated fluids sent to treatment (`liquid_cleanup_waste`)

Process / prospective direction / type: `element_replacement` / `outputs` / `waste`.

Record actual captured wash water/cleaner, unusable formulation/fuel and spill-recovery liquid leaving to waste treatment by composition and custody. Whole-liquid waste mass includes its constituents; partial pollutant analyses are descriptive or nonadditive substocks. Returned usable fluids and retained recovered stocks have other destinations.

- Collection subject: Actual captured wash liquid and contaminated fluids sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_liquid_cleanup_waste; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_liquid_cleanup_waste`

Range evidence need: Actual mass/volume-density evidence, composition, collection route and treatment destination needed. Sea discharge is never assumed from cleaning at a quay; uncontained liquid requires actual receiving-medium/species evidence.

#### Collection requirement: Actual discarded supply packaging (`packaging_waste`)

Process / prospective direction / type: `element_replacement` / `outputs` / `waste`.

Expand actual cone/hardware/formulation packaging by material, including transport protection when discarded in the foreground. Reusable packaging belongs an actual return or shared-service ledger; upstream packaging already covered remains disclosed and is not added twice.

- Collection subject: Actual discarded supply packaging
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_packaging_waste; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_waste`

Range evidence need: Actual material, net weights/tare, custody, upstream coverage and destinations needed; no fixed packaging ratio by cone count.

#### Collection requirement: Actual identified routine substance release to declared receiving medium (`routine_substance_release`)

Process / prospective direction / type: `element_replacement` / `outputs` / `elementary`.

Create zero, one or multiple actual elementary exchanges only after identifying substance/species or particle size and medium for directly owned combustion, coating/cleaning or other routine activities. Use measured results or a valid activity/composition/fate/factor calculation with units and source; exclude emissions already owned by upstream providers.

- Collection subject: Actual identified routine substance release to declared receiving medium
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_routine_substance_release; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_routine_substance_release`

Range evidence need: Actual species, medium, activity, applicable measured concentration/flow or valid factor/fate evidence required. Broad VOC/NOx/oil mixture, SDS composition and unexplained mass-balance residual do not justify a fixed UUID or release quantity.

#### Collection requirement: Actual identified incident substance release to declared receiving medium (`incident_substance_release`)

Process / prospective direction / type: `element_replacement` / `outputs` / `elementary`.

Instantiate only actual event-specific uncontained releases to air, water or soil after tracking recovered material to its final return, waste or closing-stock destination. Whole-fluid loss is physical audit; constituent species are the elementary view and cannot be added to the whole mixture. Keep incident ownership distinct from routine release.

- Collection subject: Actual identified incident substance release to declared receiving medium
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_incident_substance_release; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_incident_substance_release`

Range evidence need: Actual event, fluid identity/composition, recovered/uncontained quantities, receiving medium and valid species/fate calculation needed; total spill is audit-only. Neither no incident record nor low-VOC certification proves zero.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| element_replacement | Integrated standard-mount cone element replacement | required | Actual bounded replacement job with qualified retained interfaces | Authorised removal, qualification/cleaning, new cone/hardware integration, chain/alignment adjustment, specified follow-up checks, defects closed and signed release | accepted_element_replacement |

The same node owns every rework loop and physical exit: a mismatched or damaged replacement cone goes to documented supplier return, repair/recovery outside this scope or waste; a failed seating/alignment/check stays in the node for correction. Neither case is an accepted output. Inspection, crane use and torque checking are supporting activities, not separate manufacturing nodes. Retained quay/frame/facing/chains/anchors are state interfaces in cp_accepted_element_replacement rather than newly produced inputs. Sources: `trelleborg-fender-systems-2019`; `trelleborg-scn-sck-2018`.

### Process: Integrated standard-mount cone element replacement (`element_replacement`)

#### Inputs

##### Product flows

###### Approved complete moulded SCN super-cone rubber fender element supplied (`replacement_cone`)

Record the actual standard-mount cone SKU, dimensions/grade/compound, embedded plates and factory certificate. Its supplied state excludes separately invoiced hardware. Retain every damaged, rejected or repeated cone supply in the campaign ledger. Installation demand is not automatically one purchased cone.

- Selected flow: Approved complete moulded SCN super-cone rubber fender element supplied
- Flow property / unit: Count / item
- Amount rule: q_scope / N; cp_replacement_cone; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_replacement_cone`
- Sources: `trelleborg-scn-sck-2018`; `trelleborg-fender-systems-2019`

Range evidence need: Actual SKU receipts, opening/closing stock, accepted installations, rejected counts, supplier returns and net unit mass are required. Catalogue dimensions do not yield a universal cone mass or replacement yield.

###### Actually supplied interface and rubber-cleaning water (`cleaning_water`)

Record supplied water used for actual sea growth/foreign matter and interface cleaning when performed, including rework and containment cleanup. Distinguish purchased water from actual direct water abstraction; substitute an actual elementary resource card only when evidence establishes that boundary.

- Selected flow: Actually supplied interface and rubber-cleaning water
- Flow property / unit: Mass / kg
- Amount rule: q_scope / N; cp_cleaning_water; traced campaign quantity in the actual native unit per reference flow, with the exact-row calculation rule in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cleaning_water`
- Sources: `trelleborg-scn-sck-2018`

Range evidence need: Meter or weigh actual supply, stock, clean return and captured liquid; any volume conversion needs actual density/state/temperature/source. No universal wash-water quantity follows from cleaning guidance.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted standard-mount super-cone rubber fender element replacement service at existing harbour quay (`accepted_element_replacement`)

This final output is one uniquely identified element replacement after qualified retained interfaces, actual approved new cone/hardware, protected lifting/support, seating/tightening, chains/alignment and every specified follow-up/retorque/test are complete with signed bounded release. N counts final accepted IDs only; its reference expression is N/N = 1, not an empirical supply yield. All failed/repeated resources remain divided by actual N.

- Selected flow: Accepted standard-mount super-cone rubber fender element replacement service at existing harbour quay
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accepted_element_replacement`
- Sources: `trelleborg-fender-systems-2019`; `trelleborg-scn-sck-2018`

Range evidence need: Exact reference normalization only. Actual final accepted IDs, configuration, criteria, results, signature, dates and all defect closures needed; no mass, torque, universal retorque interval or lifetime is inferred.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| accepted_denominator | Use actual positive N unique finally accepted position-replacement IDs for the bounded campaign. Assign all attributable attempts, rejects, failed handling, repeat checks, follow-up and rework to those IDs; do not discard burdens or count repeated attempts as additional products. |  |
| ledger_method | For each component/formulation/fuel scope, choose consumed-only input or gross-with-outlets once. Gross means net of tare before return netting. Carry opening-stock upstream burden; closing stock stays in custody with its burden, not an outward flow. Internal issue/recovery does not create a second external receipt. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive. Consumed-only fuel supply excludes only matched outward returned usable supply; nonburned waste and uncontained loss remain upstream-burden-bearing. The burned-fuel balance separately determines combustion activity. |  |
| components_balance | Count ledgers reconcile opening + gross receipt = closing + final installed + returned + actual discarded + other documented count destinations, all mutually exclusive. Final installed excludes waste/release/returns; use recorded discarded counts, never infer them from mixed-waste mass. Mass ledgers reconcile material-specific final destinations in the same way; intermediary used/dosed activity is nonadditive. |  |
| fuel_balance | Burned fuel = opening + gross receipt - closing - outward usable return - final nonburned waste - final uncontained whole-fluid loss - other documented nonburned exits, within one unit/scope. Recovered spill is allocated once to return/waste/closing stock; total spill is audit-only. Retained recovered spill is already in closing stock and is not subtracted again. |  |
| reject_paths | A damaged or incompatible new cone/fastener remains in this node for actual correction only where approved, or exits by recorded usable return, external recovery or waste. Old removed element and rejects are never accepted replacement service outputs. No vulcanisation repair loop is covered. | trelleborg-scn-sck-2018 |
| shared_full_life | For each shared asset/service identify all consuming jobs/nodes/periods, compatible measured driver and complete-life denominator; job share = job driver / all-consumer complete-life driver. Trace manufacture, maintenance, replacement and end-of-life. Use observed complete life or history plus justified remaining-life events with source, uncertainty, sensitivity and update plan. Missing denominator/coverage blocks final dataset, with no default life. Exclude direct-operation/spares/provider overlaps. |  |
| period_events | Enumerate preparation, removal/install, repeated work, follow-up and release periods, and shared-asset acquisition, maintenance/replacement and termination/EOL phases. Link every input/event/output by ID and period; carry stocks once between periods. Attribute each event once to actual consumers, without assigning a generic future fender life. |  |
| provider_and_cooutput | Do not allocate by price alone. A genuine bounded provider service uses its verified native reference unit and completed coverage; each direct resource has one owner. Waste and supplier returns are physical exits with declared upstream/treatment handling, not automatic coproduct credits. Any actual sale/recovery requiring another method is disclosed and reviewed before final dataset. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_replacement_cone | element_replacement | Approved complete moulded SCN super-cone rubber fender element supplied | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;cone_size;grade;compound;embedded_hardware;factory_certificate;opening_count;gross_receipt_count;closing_count;installed_count;returned_count;discarded_count;other_count_destination;net_unit_mass_kg;unit_mass_source | Reconcile actual cone SKU count ledger and factory/custody records; in consumed-only mode transfer burden of installed and lost supplies once, in gross mode retain actual outward exits. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive.  q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | item | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_separate_fasteners | element_replacement | Separately supplied compatible fender fastening components | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;interface;thread;material;bundled_scope;opening_count;gross_receipt_count;closing_count;installed_count;returned_count;discarded_count;other_count_destination;net_unit_mass_kg;unit_mass_source | Count each separately supplied compatible hardware SKU, reconcile discarded counts and retained/installed state; exclude bundled/retained duplicate receipts. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive.  q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | item | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_cleaning_water | element_replacement | Actually supplied interface and rubber-cleaning water | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;water_identity;supply_boundary;opening_kg;gross_receipt_kg;closing_kg;returned_kg;captured_waste_kg;uncontained_whole_fluid_kg;other_final_destination_kg;volume;volume_unit;density;density_unit;state;temperature;density_source | Meter/weigh actual supplied water including preparation/rework; derive same-unit balance and captured/uncontained final destinations without adding used activity again. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive.  q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_maintenance_formulations | element_replacement | Actual cleaning and fastening-maintenance formulations | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;formulation_id;composition;sds;opening_kg;gross_receipt_kg;closing_kg;retained_final_kg;returned_kg;waste_kg;uncontained_whole_fluid_kg;other_final_destination_kg;dosed_activity_kg;volume;volume_unit;density;density_unit;state;temperature;density_source | Weigh each actual formulation net of tare and reconcile nonoverlapping final destinations; dosed activity is audit-only alongside destination balance. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive.  q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_coating_remedy | element_replacement | Actual job-caused coating-remedy materials | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;surface_id;damage_event;coating_system;formulation_id;composition;opening_kg;gross_receipt_kg;closing_kg;installed_dry_kg;returned_kg;waste_kg;released_species_kg;other_final_destination_kg;volume;volume_unit;density;density_unit;state;temperature;density_source;acceptance_result | Trace actual job-caused damage remedy, net supplies, approved coating and actual cure/check gate; composition and installed film do not independently prove evaporation. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive.  q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_protection_consumables | element_replacement | Actual temporary protection and containment consumables | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;reusable_flag;opening_kg;gross_receipt_kg;closing_kg;returned_kg;discarded_kg;other_final_destination_kg;upstream_scope | Weigh incremental nonreusable protection/containment supplies and trace usage through all attempts; reusable assets have a separate complete-life boundary. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive.  q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_direct_energy | element_replacement | Actually metered direct electricity or other supplied energy | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;carrier;property_id;unit_group_id;meter_id;reading_start;reading_end;native_unit;equipment_id;activity_hours;load_value;load_unit;load_source;idle_energy;rework_energy;coverage_overlap | Use calibrated metered readings or transparent equipment/load/time evidence with consistent units, including idle/rework; validate actual energy support and provider exclusions. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | Actual native energy unit | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_direct_fuel | element_replacement | Actual fuel supplied for directly modelled plant and vehicles | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;fuel_id;composition;opening_kg;gross_receipt_kg;closing_kg;outward_return_kg;final_nonburned_waste_kg;final_uncontained_whole_fluid_kg;other_nonburned_exit_kg;total_spilled_audit_kg;recovered_to_return_kg;recovered_to_waste_kg;recovered_to_closing_kg;volume;volume_unit;density;density_unit;state;temperature;density_source | Same-scope fuel balance derives burned fuel using fuel_balance; recovered destinations are subsets of final outlets/closing stock, never extra subtractions. Gross-with-outlets and consumed-only remain exclusive. Supply attribution explicitly starts from opening carried stock + new external gross receipts - closing carried stock, in the same SKU/unit with the corresponding upstream burden carried. Gross-with-outlets retains actual outward exits; consumed-only excludes the corresponding outward returned supply once. Installed/retained final destinations, discarded quantities, outward returns and closing stock are disjoint; intermediary used/dosed activity is nonadditive. Consumed-only fuel supply excludes only matched outward returned usable supply; nonburned waste and uncontained loss remain upstream-burden-bearing. The burned-fuel balance separately determines combustion activity. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_transport_service | element_replacement | Actual separately purchased transport and mobilisation services | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;leg_id;mode;provider;origin;destination;payload_kg;distance_km;empty_leg;native_quantity;native_unit;reference_property;completed_scope;overlap_exclusions | Collect actual leg/manifest and completed-service quantity in its verified unit; mass-distance only from actual compatible payload and distance; count one owner per leg. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | Actual native transport unit | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_provider_service | element_replacement | Genuine bounded purchased lifting access or testing service | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;provider;contract_id;completed_scope;result_id;native_quantity;native_unit;reference_property;upstream_coverage;excluded_resources;overlap_exclusions | Read completed bounded provider scope/results and matching reference quantity; local uncovered resources remain explicit. Invoice hours or price alone do not establish Count identity. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | Actual native service unit | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_shared_asset_service | element_replacement | Attributed complete-life service of shared lifting and support assets | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;asset_id;service_unit;job_driver;driver_unit;all_consumer_driver;all_consumer_ids;all_period_ids;manufacture_scope;maintenance_scope;replacement_events;termination_event;eol_scope;observed_history;remaining_service_projection;projection_source;uncertainty;sensitivity;update_trigger;overlap_exclusions | Trace complete-life burdens and compatible all-consumer denominator; job share uses measured driver with complete observed or justified prospective remaining life. Exclude direct operation, separate spares and provider-covered burden. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | Actual native service unit | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_accepted_element_replacement | element_replacement | Accepted standard-mount super-cone rubber fender element replacement service at existing harbour quay | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;accepted_id;position_id;actual_cone_sku;size;grade;compound;factory_certificate;retained_frame_facing_condition;retained_chain_condition;retained_anchor_quay_condition;approved_drawing;lifting_plan;actual_weight_cg;fastener_compatibility;seating_result;torque_criterion;torque_result;retorque_required;retorque_result;alignment_chain_result;test_criterion;test_result;defect_closure;release_signature;release_date;periods | Count unique signed accepted IDs only after all applicable actual project criteria and follow-up close; manufacturer contact determines damage suitability, not a generic cracking rule. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | item | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_counted_returns | element_replacement | Actual unused or rejected count-native components returned outward | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;origin_receipt;condition;returned_count;destination;custody_receipt;stock_flag;upstream_burden_treatment | Count actual usable component outward returns by SKU; close receipt/install/discard/stock ledgers; no implied credit. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | item | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_mass_returns | element_replacement | Actual unused mass-native materials returned outward | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;composition;origin_receipt;returned_kg;gross_kg;tare_kg;destination;custody_receipt;stock_flag;volume;volume_unit;density;density_unit;state;temperature;density_source | Weigh actual usable outward returns net of tare; retain composition/custody and native-unit conversion evidence; closing stock is not a return. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_removed_rubber | element_replacement | Removed old rubber fender element and rejected rubber sent to waste | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;origin_old_or_new;cone_id;removed_count;rejected_count;discarded_count;embedded_metal_scope;gross_kg;tare_kg;net_kg;contamination;destination;manifest_id | Weigh removed/rejected cone waste and record actual counts/origin and embedded-hardware boundary; trace actual treatment custody. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_removed_metal | element_replacement | Removed separate fastening metal and metal debris sent to waste | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;origin_old_or_new;discarded_count;embedded_metal_excluded;gross_kg;tare_kg;net_kg;composition;destination;manifest_id | Weigh/count actually discarded separate fastening metal; reject overlapping embedded metal and frame replacement. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_solid_cleanup_waste | element_replacement | Actual solid cleaning coating and containment residues | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;source_event;gross_kg;tare_kg;net_kg;moisture_basis;contaminant_composition;captured_species_subset;destination;manifest_id | Weigh separate actual solids/absorbents/debris and track captured-contaminant nonadditive views plus destinations. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_liquid_cleanup_waste | element_replacement | Actual captured wash liquid and contaminated fluids sent to treatment | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;fluid_id;source_event;composition;gross_kg;tare_kg;net_kg;volume;volume_unit;density;density_unit;state;temperature;density_source;constituent_subset;destination;manifest_id | Weigh or validly convert captured liquid waste; treatment/custody record establishes destination, partial composition is not additional whole-fluid mass. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_packaging_waste | element_replacement | Actual discarded supply packaging | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;gross_kg;tare_kg;net_kg;reusable_flag;upstream_scope;destination;manifest_id | Weigh material-specific discarded packaging and prove foreground custody/upstream scope; reusable return is separate. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_routine_substance_release | element_replacement | Actual identified routine substance release to declared receiving medium | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;source_activity;substance_id;species_or_particle_class;receiving_medium;activity_amount;activity_unit;concentration;concentration_unit;flow_amount;flow_unit;factor;factor_unit;factor_source;composition;fate_fraction;method_source;coverage_exclusions;species_mass_kg | Use actual measured release or valid dimensional activity/factor or concentration/flow and composition/fate evidence; identify each actual substance and medium before identity binding. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |
| cp_incident_substance_release | element_replacement | Actual identified incident substance release to declared receiving medium | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;incident_id;fluid_id;composition;total_spilled_audit_kg;recovered_to_return_kg;recovered_to_waste_kg;recovered_to_closing_kg;uncontained_whole_fluid_kg;substance_id;species_or_particle_class;receiving_medium;fate_fraction;method_source;species_mass_kg | Reconcile incident fluid final destinations, then derive valid species-medium release once. Whole-fluid audit and constituent elementary views are nonadditive; routine and incident scopes do not overlap. q_scope is the traced attributable campaign quantity after the declared ledger and ownership reconciliation; q_scope and N are numeric, IDs/criteria are categorical. N reconciles cp_accepted_element_replacement. | kg | Each actual receipt/activity/exit and final reconciliation | Complete preparation through required follow-up and signed release, including failed/repeated work | Declared berth/job and contributing providers/assets/consumers | per reference flow | Calibrated instruments or traceable source records, custody/acceptance evidence, ledger reconciliation, uncertainty and documented actual absence; unknowns block final dataset. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_replacement_cone | replacement_cone | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_replacement_cone | Quantity per reference flow in item |  |
| calc_separate_fasteners | separate_fasteners | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_separate_fasteners | Quantity per reference flow in item |  |
| calc_cleaning_water | cleaning_water | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_cleaning_water | Quantity per reference flow in kg |  |
| calc_maintenance_formulations | maintenance_formulations | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_maintenance_formulations | Quantity per reference flow in kg |  |
| calc_coating_remedy | coating_remedy | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_coating_remedy | Quantity per reference flow in kg |  |
| calc_protection_consumables | protection_consumables | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_protection_consumables | Quantity per reference flow in kg |  |
| calc_direct_energy | direct_energy | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_direct_energy | Quantity per reference flow in Actual native energy unit |  |
| calc_direct_fuel | direct_fuel | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_direct_fuel | Quantity per reference flow in kg |  |
| calc_transport_service | transport_service | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_transport_service | Quantity per reference flow in Actual native transport unit |  |
| calc_provider_service | provider_service | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_provider_service | Quantity per reference flow in Actual native service unit |  |
| calc_shared_asset_service | shared_asset_service | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_shared_asset_service | Quantity per reference flow in Actual native service unit |  |
| calc_accepted_element_replacement | accepted_element_replacement | reference_count = N / N = 1 item; N is positive unique final accepted IDs after the entire gate. | q_scope;N;cp_accepted_element_replacement | Quantity per reference flow in item |  |
| calc_counted_returns | counted_returns | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_counted_returns | Quantity per reference flow in item |  |
| calc_mass_returns | mass_returns | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_mass_returns | Quantity per reference flow in kg |  |
| calc_removed_rubber | removed_rubber | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_removed_rubber | Quantity per reference flow in kg |  |
| calc_removed_metal | removed_metal | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_removed_metal | Quantity per reference flow in kg |  |
| calc_solid_cleanup_waste | solid_cleanup_waste | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_solid_cleanup_waste | Quantity per reference flow in kg |  |
| calc_liquid_cleanup_waste | liquid_cleanup_waste | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_liquid_cleanup_waste | Quantity per reference flow in kg |  |
| calc_packaging_waste | packaging_waste | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_packaging_waste | Quantity per reference flow in kg |  |
| calc_routine_substance_release | routine_substance_release | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_routine_substance_release | Quantity per reference flow in kg |  |
| calc_incident_substance_release | incident_substance_release | normalized_quantity = q_scope / N; q_scope is the reconciled attributable campaign quantity in the card native unit; N is unique final accepted element-replacement IDs. | q_scope;N;cp_incident_substance_release | Quantity per reference flow in kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_scope | all inventory rows | Resolve each actual concrete exchange and support property/group/unit before final TIDAS projection; semantic umbrellas do not imply search or verification. | Exact detail/support evidence and actual foreground identities |
| acceptance_completeness | accepted_element_replacement | Every counted ID has applicable retained-interface, element, lifting/installation, tightening/alignment/chain, follow-up/test and signed closure evidence; no inferred universal life or performance. | Actual project approved instructions, factory certificate and signed repair dossier |
| ledger_complete | all inventory rows | All periods, attempts, stocks, supplies, final destinations, native-unit count discard/return and upstream carries reconcile with one owner. | Receipt/stock/activity/custody ledgers and quantitative checks |
| asset_complete | shared_asset_service;provider_service;transport_service | Complete relevant life and consumer denominator or genuine bounded completed provider coverage; uncertain future phase has source/sensitivity/update; no resource overlap. | Asset history/projection, provider coverage and ownership matrix |
| release_evidence | routine_substance_release;incident_substance_release | Actual species/particle class and medium with valid quantity evidence; whole-fluid/subspecies views nonadditive and no residual-as-emission. | Measurement or valid factor/composition/fate method and event ledger |
| temporal_quality | all inventory rows | Cover actual preparation through follow-up release and asset phases; disclose geography, technology, dates, uncertainty, missing records and update triggers. | Dated complete source records and actual absence evidence |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| scope_gate | Reject outside technology/mounting or new quay/anchor/frame construction; retained defects or missing approved repair decision block this product. | trelleborg-scn-sck-2018;trelleborg-fender-systems-2019 |
| installation_gate | Check actual cone factory/configuration and retained compatibility, engineered support/handling, actual fastener/seating/sequence/torque results, symmetric orientation and chain adjustment, and all actually required retorque/test results before signed bounded release. Reverse-mount follow-up and future temperate-climate inspection intervals are not universal current gates. | trelleborg-fender-systems-2019;trelleborg-scn-sck-2018 |
| accepted_only | N must be positive unique final accepted IDs, each counted once. Unresolved rejects/rework states remain unaccepted; retain all associated burdens and actual exit/loop records. |  |
| stocks_native | Check gross/consumed choice, tare, opening/closing carry, native SKU count installed/returned/discarded fields and actual material/fluid destinations; no duplicate used activity, spill recovery subtraction or inferred count from mixed waste kg. |  |
| shared_periods | Require every consumer/period and complete shared manufacture/maintenance/replacement/EOL denominator or genuine provider scope. Missing termination/remaining-life evidence or overlaps block final dataset; do not silently annualise. |  |
| actual_exchanges | Before final dataset construction verify each concrete flow UUID and exact support/unit; keep unknown identities explicit. Check species/medium/quantity evidence and whole-fluid nonadditivity. Automated target pass does not verify a concrete exchange or establish publication readiness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground-data production methodology for a bounded completed element-replacement repair service |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Actual declared standard-mount SCN element replacement with qualified retained interfaces and complete job evidence; compare only declared compatible configurations/boundaries |
| excluded_use | Whole harbour or full fender system, new frames/anchors, other technology/mounting, vulcanisation repair, future berthing performance or lifetime/outage avoidance claims |
| required_metadata | PCR/version; berth/position and accepted IDs; actual cone/configuration and retained interfaces; provider/resource boundaries; periods; measurement/ledger methods; upstream datasets; actual acceptance gate/results; destinations and shared-asset life/consumers |
| required_quality_disclosure | All missing evidence/identities, uncertainty, representativeness, stocks/rework, conversion and species methods, complete-life prospective assumptions/sensitivity and overlap controls |
| update_trigger | Changed approved cone/interface/route/gate, material/provider/unit, destination, shared denominator/life evidence, source applicability or resolved identity gap |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations, CPC Version 3.0 explanatory notes, 30 June 2025, printed p285; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 54232 harbour/quay repair context only; does not create canonical product identity |
| trelleborg-scn-sck-2018 | handbook | Trelleborg, Super Cone (SCN) and Cell (SCK) fender handling/storage/installation/maintenance manual, footer MN-I&M-RUB-SCN&SCK-v1.0-EN2018, printed pp9–10,18–21; https://www.trelleborg.com/marine-and-infrastructure/-/media/marine-systems/resources/guides-and-design-manual/downloads/scn-sck_hsim.pdf?rev=f45ab129397b4f5bb202d0a78dea029d | Protected handling, interconnected interfaces, actual damage assessment, cleaning and potential full rubber-element replacement; SCK/vulcanisation and future interval tables excluded |
| trelleborg-fender-systems-2019 | handbook | Trelleborg, Fender Systems handling/storage/installation/maintenance manual, 2019, printed pp14–22; https://www.trelleborg.com/marine-and-infrastructure/-/media/marine-systems/resources/guides-and-design-manual/downloads/fender_systems_hsim_2019.pdf?rev=152f8df1a47a4a3eb360ba42e548e3d7 | Standard-mount handling/support, actual weights/CG, component/anchor interfaces, fastening/sequence, chain/alignment and job-caused coating remedy; actual current approved project criteria control |
