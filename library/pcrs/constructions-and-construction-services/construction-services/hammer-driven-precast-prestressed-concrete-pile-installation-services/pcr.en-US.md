---
pcr_id: pcr.constructions-and-construction-services.construction-services.hammer-driven-precast-prestressed-concrete-pile-installation-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Hammer-driven precast prestressed concrete pile installation services

## 1. Scope and Applicability

This PCR governs data production for impact-hammer installation of factory precast prestressed concrete piles. It starts with actual received sections and released installation interfaces and ends with project acceptance, completed owned head preparation and mechanical connection duties, and demobilization. The actual episode retains setup, driving, restrike/testing, rework and failed work. It prescribes no universal design performance or productivity. Other pile types, welded splices/shoes, structural welding repairs or driving-aid routes require prior scope review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.hammer-driven-precast-prestressed-concrete-pile-installation-services |
| classification_refs | CPC 3.0 54511; proposed narrower correspondence, governed separately from methodology identity |
| covered_products | Impact-hammer installation of factory precast prestressed concrete piles, with actually owned mechanical shoes/splices, handling, required restrikes/tests and head preparation |
| excluded_products | Bored or cast-in-place shafts; steel/timber piles; vibratory, jetting or predrilling routes; welded splices/shoes and field structural welding; pile manufacture, pile caps, foundation excavation and independent site formation |
| representative_product | Project-accepted driven prestressed concrete pile below its actual cutoff plane |
| production_route | Receive sections; set up and handle; impact drive and mechanically fit actual specified parts; perform directed restrike/testing; prepare heads; accept and demobilize |
| market_state | Completed installation service at the project pile-acceptance gate, without pile-cap construction |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Installation service for accepted hammer-driven precast prestressed concrete piles |
| How much | 1 m of unique accepted axial pile length L, measured from actual toe to actual cutoff plane |
| How well | Project-specific design/driving criteria and required tests met; owned mechanical connections and head preparation complete; pile ID and acceptance evidence retained |
| How long or cycle | The complete owned episode: receiving/custody, setup/driving, directed restrike/testing, head preparation, acceptance/demobilization. Index all actual periods and events; count a production-accepted test pile once and retain failed/open work and its burden separately |
| reference_flow_link | `reference_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hammer-driven precast prestressed concrete pile installation service |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | project/site and reporting interval; pile IDs; precast/prestressing system; actual section/void geometry; delivered lengths and mass; toe/cutoff surveys and axial/batter method; driving-criteria revision; hammer/cushion; mechanical shoe/splice schedule; test/acceptance/head-preparation state; equipment ownership and provider scope |

Declare every required qualifier in data-package metadata, process notes or reference-flow comments. Missing acceptance state or actual route cannot be presumed conforming.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_length` | reference_service | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Measure L independently as the sum of unique accepted axial toe-to-cutoff lengths from the pile register and survey, with batter correction. L must be positive; use cp_pile_install_material. Repeated driving/test events do not add length. |
| `same_state_bridges` | precast_pile_sections; shoe_joint_components; pile_cushion_material; head_preparation_consumables; diesel_fuel; water_supplied; lubricants_other_operating_products; packaging_received; direct_freshwater_abstraction; usable_material_exits; returnable_packaging_exit; concrete_cutoff_waste; separated_reinforcement_waste; damaged_pile_waste; spent_cushion_waste; packaging_waste; oily_consumable_waste; collected_wastewater_slurry; fossil_co2_air; other_engine_species_air; physical_particulate_air; water_vapour_air; specific_direct_water_releases | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain each native material or substance measurement. Convert count, geometry or volume only with a same-SKU, same-state measured bridge, including solid/void and reinforcement content. Do not use cross-SKU averages or infer unknown species from residual mass. |
| `utility_service_units` | electricity; hired_equipment_services | Energy; Duration | kWh; h | Record electricity as measured actual electrical energy and equipment service as actual attributable equipment intervals. Use evidenced unit conversions; heating value is not a substitute for Energy, and labour or default shifts are not equipment Duration. Preserve each unresolved support identity explicitly. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Released project pile positions and design/driving criteria, observed ground/platform and access condition, and actual delivered precast prestressed pile sections |
| starting_condition_role | Observed installation interfaces, without invented site-formation or readiness exchanges |
| product_classification_scope | This mechanical impact-driven precast prestressed route is a narrower installation category within CPC 3.0 54511 |
| recursive_input_rule | If an independently supplied installation service of this same category crosses the boundary, identify its actual scope and provider dataset; do not recursively reconstruct or count its included work again. Within-node phases are not purchased service inputs |
| upstream_dataset_requirement | Link actual delivered pile/material and separately purchased services to compatible state/provider datasets; disclose missing production, transport, equipment-capital or treatment coverage. Identity alone does not prove dataset completeness |
| disclosure | Declare starting interfaces, actual route and excluded responsibilities, pile acceptance gate, reporting periods, provider boundaries, open stock and unresolved identities/quantity evidence |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_owned` | pile_install | Include received pile sections and actual permanent mechanical shoes/splices; separately retain cushion, head-work and operating consumables. The one accountable node owns actual handling, impact driving, fitting, necessary directed restrikes/tests, head preparation and incidental cleanup through pile acceptance. The output is the accepted installed pile service, never a pile cap. | `fhwa-gec15-2022`; `fhwa-pile-inspection` |
| `b_start` | starting interfaces | Treat released locations, design/driving criteria, ground/platform and access condition as observed starting facts. Existing-asset readiness, inspection steps and within-node stock changes do not themselves create product cards. Reconsider nodes only for an evidenced separately owned material-state handoff. | `pile-installation-attribution-method` |
| `b_route` | route changes | Stop for scope review if welded pile splices/shoe attachment, welded head buildup/structural repair, bored/steel/timber piles or vibration/jetting/predrilling are actually required. Retain the real responsibility; assess route materials, emissions, waste and acceptance rather than hiding welding as a material-free mechanical joint. Pile manufacture, pile caps, excavation and independent site formation are upstream/downstream interfaces outside this foreground. | `fhwa-gec15-2022`; `fhwa-pile-inspection` |
| `b_phases` | periods and ownership | Index receiving/custody, setup/driving, directed restrike/testing, head preparation and acceptance/demobilization with pile, event, equipment and reporting-period links. Track unaccepted/damaged/rejected/abandoned states and engineer-directed redriving, removal or replacement inside pile_install; real material exits retain receiver and state. | `fhwa-gec15-2022`; `pile-installation-attribution-method` |
| `b_assets` | equipment and meters | Identify actual hammer, crane, access/logistics and testing assets and all consuming piles/phases/periods, including owned idle and rework. Record provider fuel/capital/maintenance coverage and meter boundaries. Used asset return is an asset observation, not unused material return; self-owned manufacture attribution requires actual lifetime/service-capacity/use/damage evidence or a disclosed gap. | `pile-installation-attribution-method` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Permanent mechanical shoes and joints (`shoe_joint_components`)

Process / prospective direction / type: `pile_install` / `inputs` / `product`.

Include only actually specified, permanently fitted mechanical shoes and splice parts. Record each SKU, pile location and same-SKU count-to-mass evidence. An unspliced pile need not have a joint. Welding or welded repairs require scope review before data production. Range evidence need: the actual pile-ID component schedule and component masses; check retained and unused quantities against actual issue, never infer joints from length.

- Collection subject: Permanent mechanically fitted pile shoes and splice components
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

#### Collection requirement: Cushion consumables (`pile_cushion_material`)

Process / prospective direction / type: `pile_install` / `inputs` / `product`.

Identify cushion material, dimensions and hammer/pile duty for each issue and changeout. Reusable hardware belongs to the asset ledger. Range evidence need: actual material and changeout history under the specified driving duty; reconcile unused, retained and spent states without a default replacement rate.

- Collection subject: Actual sacrificial or replacement pile and hammer cushion material
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

#### Collection requirement: Head preparation and approved repair products (`head_preparation_consumables`)

Process / prospective direction / type: `pile_install` / `inputs` / `product`.

Record consumables by actual tool or repair-product SKU and state, tied to pile-head geometry and approved work. Exclude separately recorded lubricants, water, energy and packaging. Intrinsic water in an aqueous repair product remains its constituent; separately added water is a distinct input. Range evidence need: actual cut/drill/repair work, product state and measured consumption. Check product issue and constituents against the same work and outgoing residues; no universal head-treatment dose is supplied.

- Collection subject: Actual cutting/drilling consumables and approved incidental head-repair products
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

#### Collection requirement: Other operating and cleanup products (`lubricants_other_operating_products`)

Process / prospective direction / type: `pile_install` / `inputs` / `product`.

Separate each lubricant, operating fluid, cloth or absorber by SKU/current state and maintenance or spill event. Range evidence need: actual issue, density or measured mass and service/spill history. Compare like material and constituents with retained, return and oily-waste states; oily cloth mass is not pure oil mass.

- Collection subject: Actual lubricants, operating fluids and cleanup carrier products
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Separately supplied equipment services (`hired_equipment_services`)

Process / prospective direction / type: `pile_install` / `inputs` / `product`.

Identify equipment, provider, service scope and actual occupation/duty intervals. Record whether fuel, manufacture and maintenance are already included; never duplicate the same asset service. Range evidence need: evidenced service boundary, occupied/duty hours and independent L. Labour hours or assumed shifts are not equipment duration. Existing equipment mass is an observation, not consumptive material.

- Collection subject: Actual separately supplied lifting, access, hammer or logistics equipment service
- Flow property / unit: Duration / h
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_asset; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_asset`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Packaging received into episode custody (`packaging_received`)

Process / prospective direction / type: `pile_install` / `inputs` / `product`.

Record actual packaging material and state separately from its contents, including reusable packaging custody. Range evidence need: supplier packaging masses and unpacking/return records. Reconcile each packaging pool across return, reuse, retained stock and waste; do not apply a packaging percentage to pile mass.

- Collection subject: Actual accompanying packaging
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Direct environmental freshwater abstraction (`direct_freshwater_abstraction`)

Process / prospective direction / type: `pile_install` / `inputs` / `elementary`.

Record this elementary input only for actual directly abstracted freshwater with source medium and separate metering. Range evidence need: actual water source, abstraction readings and operation demand. Reconcile with the water-only ledger and exclude any physical volume already represented by supplied water; source identity is not inferred from location.

- Collection subject: Actual freshwater abstracted from the declared environmental source
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_release; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_release`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Usable returns and transfers (`usable_material_exits`)

Process / prospective direction / type: `pile_install` / `outputs` / `product`.

Separate unused return, used-but-usable transfer and downgraded product states with receiver evidence. Range evidence need: material/SKU/current-state availability, independent mass and dispatch records. Each exit must be supported by its own compatible pool; a heterogeneous total is QA only, never a concrete exchange or avoided-production credit.

- Collection subject: Actual usable material leaving custody
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Packaging returned from custody (`returnable_packaging_exit`)

Process / prospective direction / type: `pile_install` / `outputs` / `product`.

Identify the actual reusable package and condition at return, including damage or contamination. Range evidence need: matched packaging availability and custody/dispatch records. Prevent duplicate return, retained and waste assignment; used equipment return is not unused packaging return and no avoided-new-package credit is implicit.

- Collection subject: Actual returnable packaging leaving custody
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Composite concrete head cutoffs (`concrete_cutoff_waste`)

Process / prospective direction / type: `pile_install` / `outputs` / `waste`.

Measure cutoffs and captured dry fines with actual reinforcement content and physical state. Range evidence need: actual removed geometry, composite constituents, capture and receiver records. Do not count physically separated steel twice or add captured fines again as airborne particles; accepted length alone does not establish a cutoff fraction.

- Collection subject: Actual concrete-rich pile-head waste at its captured state and receiver
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Physically separated reinforcement scrap (`separated_reinforcement_waste`)

Process / prospective direction / type: `pile_install` / `outputs` / `waste`.

Require a real separation and waste dispatch event with cutting/release history. Range evidence need: steel actually present in the removed head pool and independent separated-metal weighing. Deduct that metal from composite-cutoff accounting; neither a default reinforcement ratio nor a designed steel schedule alone proves waste.

- Collection subject: Actual physically separated reinforcement or prestressing steel waste
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Discarded packaging (`packaging_waste`)

Process / prospective direction / type: `pile_install` / `outputs` / `waste`.

Record separately from reusable returns, including actual contamination. Range evidence need: matched packaging inputs/stock and exclusive return, reuse, retained and waste observations. Check compatible availability and any added contaminant; packaging balance residuals cannot become assumed waste.

- Collection subject: Actual discarded packaging by material, state and receiver
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Oily operating and cleaning waste (`oily_consumable_waste`)

Process / prospective direction / type: `pile_install` / `outputs` / `waste`.

Distinguish oil/fluid, cloth/absorber and moisture constituents in the actual collected waste. Range evidence need: measured waste-state mass, carrier issue and contamination records. Check all compatible constituent pools rather than bounding a mixed oily cloth by lubricant mass alone; treatment identity follows the real receiver.

- Collection subject: Actual oily consumable waste at dispatch state and receiver
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Other engine emission species (`other_engine_species_air`)

Process / prospective direction / type: `pile_install` / `outputs` / `elementary`.

Instantiate each actual emitted substance/species basis and air medium separately, supported by engine, fuel and duty records plus factor/model applicability. Range evidence need: exact substance or reported species basis, actual operating condition and uncertainty. A conceptual engine-emission umbrella has no meaningful numeric envelope; do not borrow the fossil-CO2 identity or force full fuel-mass closure.

- Collection subject: Actual substance-specific engine emissions to air
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_release; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_release`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Uncaptured physical particles (`physical_particulate_air`)

Process / prospective direction / type: `pile_install` / `outputs` / `elementary`.

Identify particle size/composition and originating concrete, cushion or other material pool; distinguish uncaptured release from collected dust. Range evidence need: actual source material and supported capture/emission quantity. Check compatible dry constituents without assigning all missing stock to air or prescribing a generic dust percentage.

- Collection subject: Actual uncaptured operation-derived particles to air
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_release; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_release`
- Sources: `pile-installation-attribution-method`

#### Collection requirement: Specific direct releases to water (`specific_direct_water_releases`)

Process / prospective direction / type: `pile_install` / `outputs` / `elementary`.

Separate each actual released substance and receiving water medium, including a water identity only if that physical water release is supported. Range evidence need: actual discharge quantity, concentration/species and medium. Exclude wastewater sent to treatment and avoid double counting its constituents; the conceptual discharge umbrella has no generic numerical range.

- Collection subject: Actual substance-specific direct releases to the declared water medium
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_release; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_release`
- Sources: `pile-installation-attribution-method`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pile_install` | Hammer-driven precast prestressed concrete pile installation | `required` | Actual reviewed mechanical impact route | One phase-indexed accountable node for handling, mechanical component fitting, driving, directed restrike/testing, head preparation and acceptance; rejected/open states and rework loops retain original pile links | `reference_service`; 1 m |

### Process: Hammer-driven precast prestressed concrete pile installation (`pile_install`)

The within-node event journal shall cover all actual phases, equipment and pile IDs. Permanent components comprise received sections and actual mechanical shoes/joints; an unspliced configuration invents no second component. Setup, restrikes and inspections are events in this responsibility, not separate products. Record engineer-directed redriving, removal and replacement and real return/downgrade/retained/waste/abandoned-in-place fates; unresolved fate remains a gap.

#### Inputs

##### Product flows

###### Delivered prestressed concrete pile sections (`precast_pile_sections`)

Record the whole delivered section, including its actual reinforcement, at receiving. Keep pile ID, prestressing system, solid/void section geometry, certified or measured section mass and delivery length. Record actual sections entering episode custody and allocated opening stock, with independent closing-stock and exit records. Returns recorded as outgoing exchanges must not also be subtracted from the same gross receipt; accepted length is not delivered length. Range evidence need: actual section geometry and same-section mass, cutoff, splice and removal records must establish kg/m. Check each compatible section pool against accepted retained material, cutoffs, rejected/abandoned stock and exits; do not assume a universal pile mass per metre.

- Selected flow: Shop-cured precast prestressed concrete pile sections
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

###### Diesel burned within the owned boundary (`diesel_fuel`)


Actual upstream fuel supplied to this node, before usable outward exits. Apply fuel_supply_fate to retain the supply burden of nonreturned waste/loss and derive burned activity separately. Keep actual fuel grade, equipment duty, provider coverage, density/state and measurement uncertainty. Range evidence need: actual equipment duty, calibrated meter/stock records and independent L; useful impact or lifting energy cannot substitute for fuel. Reconcile same-fuel stock and provider coverage before normalization. The identity supplies no density, fossil fraction or heating value.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Actual upstream supplied fuel mass G_fuel divided once by the independently measured positive accepted lot quantity D_fuel in the declared reference unit; retain all exclusive fuel outlets and derive actual burned B_fuel separately under section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_utility`
- Sources: `pile-installation-attribution-method`

###### Attributed electricity (`electricity`)

Identify source, voltage and meter topology; allocate full recorded intervals, including tests and idle where owned. Range evidence need: device duty, calibrated interval readings and independent L. Reconcile direct and shared consumption with the meter total. Energy/kWh expresses the required physical quantity; a calorific-value property cannot establish electricity Energy support.

- Selected flow: Actual electricity at its supply state
- Flow property / unit: Energy / kWh
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_utility; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_utility`
- Sources: `pile-installation-attribution-method`

###### Supplied process and cleanup water (`water_supplied`)

Record actual supply state and independently metered wet-operation or cleanup use, including circulation and returns. Do not repeat the same draw as direct environmental abstraction. Range evidence need: actual wet tasks, water draw and independently supported water-only fates. Compare water constituents rather than total slurry mass; no generic water demand is prescribed.

- Selected flow: Actual supplied water at its treatment and delivery state
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_utility; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_utility`
- Sources: `pile-installation-attribution-method`

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted pile installation service (`reference_service`)

Count only unique accepted piles after project driving/testing criteria, owned mechanical connections and head preparation are complete. Independently determine positive L as the sum of axial toe-to-actual-cutoff lengths, with surveyed elevations and batter correction. Ordered/delivered lengths, repeated driving passes, rejected piles and abandoned-in-place piles do not add L; their attributable burdens remain. Self-normalization L / L yields exactly 1 m. A test pile accepted as a production pile counts once.

- Selected flow: Hammer-driven precast prestressed concrete pile installation service
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`; `accepted-axial-length-identity`

- Range: Accepted-length self-normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m
  - Basis: per 1 m reference flow; L / L after independent positive L collection
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)
  - Sources: `accepted-axial-length-identity`

##### Waste flows

###### Removed rejected pile waste (`damaged_pile_waste`)

Require failure assessment, removal/replacement decision and actual waste receiver. Range evidence need: removed pile-ID masses and dispatch records. Preserve rejected, open and abandoned-in-place stock separately; an unaccepted buried pile is not a fabricated balancing waste exit and contributes no accepted L.

- Selected flow: Actual removed rejected concrete-pile material dispatched as waste
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

###### Discarded cushion material (`spent_cushion_waste`)

Link discarded cushion to issue/changeout and record retained hardware, moisture and contamination. Range evidence need: actual issued/retained cushion quantities and independently weighed waste state. Check only compatible cushion/constituent pools; no universal cushion-loss fraction is justified.

- Selected flow: Actual spent cushion waste
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

###### Collected wastewater and slurry (`collected_wastewater_slurry`)

Measure mixture mass and water/dry-solids/chemical constituents with collection/capture evidence and treatment destination. Range evidence need: actual water sources, entrained solids, concentration or separate constituent measurements and dispatch. Do not count slurry solids again in dry waste or aqueous direct releases; total mixture mass cannot close the water-only ledger.

- Selected flow: Actual collected wastewater or cutting/cleaning slurry for treatment
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_material; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_material`
- Sources: `pile-installation-attribution-method`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Determine actual fossil CO2 with an applicable fuel/duty measurement or documented factor/model and uncertainty. Retain the unspecified-air compartment of this identity; a more specific medium needs its own verified identity. Use independently determined fossil carbon actually burned for the carbon constraint, never total diesel kg as CO2 kg. No complete-oxidation assumption or invented oxygen exchange is authorized.

- Selected flow: Carbon dioxide (fossil), to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_release; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_release`
- Sources: `pile-installation-attribution-method`; `carbon-oxidation-identity`

- Range: Independent fossil-carbon constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 44/12
  - Unit: kg CO2/kg fossil carbon burned
  - Basis: per kg independently determined fossil carbon actually burned, before normalization by L
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `carbon-oxidation-identity`

###### Water evaporated to air (`water_vapour_air`)

Require actual wet work and independently supported evaporation measurement/model; zero requires evidence. Preserve the unspecified-air identity. Range evidence need: available water-only pools and a supported evaporation estimate with uncertainty. Compare water constituents and inventory change; a closure residual is not vapour.

- Selected flow: Water vapour, to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Each actual concrete exchange attributable amount / L; collect with cp_pile_install_release; never use a heterogeneous total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pile_install_release`
- Sources: `pile-installation-attribution-method`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_direct` | shared operating burden | Assign directly measured pile/phase use first. For shared hammer, crane, meter or test resources, list every consumer and period and attribute only the reconciled residual by documented actual duty or another evidenced causal share; shares must exhaust that residual once. Declare idle/setup/test ownership and period-cutoff treatment. | `pile-installation-attribution-method` |
| `a_provider` | provider and reusable assets | Count provider-included fuel, capital and maintenance once; exclude duplicate own diesel/equipment entries for those same included activities. Attribute self-owned manufacture only with actual service capacity/lifetime, episode use and damage evidence, disclosing an unresolved gap otherwise. Reusable equipment mass and its used return do not constitute full consumptive material input/output. | `pile-installation-attribution-method` |
| `a_rework` | rework and accepted length | Retain attributable failed driving, restrike, testing, removal and replacement burdens in the installing lot. Record original pile and event links and actual return/downgrade/retained/waste/abandoned fate. Rejected or open piles contribute no L; repeated passes and a production-accepted test pile cannot repeat L. Unresolved replacement/termination remains an open gap at the period cutoff. | `pile-installation-attribution-method` |
| `a_exits` | material exits and normalization | Record real usable returns and waste dispatch by identity/state/receiver; do not assume avoided production or recovery credit. Separate any evidenced co-product responsibility by subdivision or documented causal treatment. Divide each concrete attributable numerator by the independently measured L once; heterogeneous totals serve QA only. | `pile-installation-attribution-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All four protocols belong to pile_install and use common event/identity/phase keys; each concrete exchange retains its independent amount and conversion evidence. A protocol is not an umbrella flow identity.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pile_install_material` | `pile_install` | material components, consumables, stocks, exits and reference | pile register and identity/event ledger | event/lot/configuration; pile or asset ID; process/phase/time and reporting period; owner and role; actual identity/SKU/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence and uncertainty; actual occurrence yes/no/unresolved; pile prestressing system and section/void geometry; delivery/accepted/rejected state; toe/cutoff survey and batter; section mass; head/separation/capture; stock movement; criteria revision and head/test/acceptance records | Weigh or use traceable same-section mass certificates and calibrated native measures; survey actual toe and cutoff, correct for axial/batter geometry and reconcile unique accepted piles to inspection/test records. Track opening, receipts, issue, transfers, retained/rejected/abandoned stock and dispatch separately by concrete identity/state/receiver. Aggregation procedure: Determine independent positive accepted L; calculate each concrete attributable material numerator / L per 1 m reference flow; reference_service self-normalizes L / L; heterogeneous totals are QA only. | kg; m; native count/geometry; measured bridges | every receipt, issue, head/rework/separation, stock cutoff and acceptance/exit event | full episode and opening/closing stocks across all reporting periods | project pile lot and actual material custody boundary | per 1 m reference flow | calibration/certificates; surveys; pile and decision register; signed head/test/acceptance; dispatch receivers |
| `cp_pile_install_utility` | `pile_install` | diesel, electricity and supplied water | fuel/utility meter and stock ledger | event/lot/configuration; pile or asset ID; process/phase/time and reporting period; owner and role; actual identity/SKU/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence and uncertainty; actual occurrence yes/no/unresolved; meter topology and reading interval; density/temperature; utility source/voltage/treatment; equipment duty/idle/test/rework; provider coverage; direct assignment and residual consumer shares; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | Use calibrated readings or stock reconciliations for the full owned intervals. Convert only with actual same-fuel/state evidence; retain water circulation and shared-meter reconciliation. Distinguish useful equipment energy from purchased electricity or diesel and exclude provider-included duplicate consumption. Aggregation procedure: Assign direct use then evidenced reconciled shared residual once; each concrete attributed utility numerator / L per 1 m reference flow. Supply and burn are separate under fuel_supply_fate; collect every exclusive outlet, actual denominator and its unit, keep nonreturned waste/loss supply burdens, and report missing fates. | kg; kWh; native volume and meter units | each meter interval, fueling, stock change and wet task | complete owned setup/idle/driving/restrike/test/head/rework/demobilization intervals and period cutoffs | all actual equipment and meters serving the project lot, with other consumers identified | per 1 m reference flow | meter calibration, stock tickets, state-specific density, consumer reconciliation and provider boundary |
| `cp_pile_install_asset` | `pile_install` | owned and supplied equipment use and capital coverage | asset/service event and consumer ledger | event/lot/configuration; pile or asset ID; process/phase/time and reporting period; owner and role; actual identity/SKU/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence and uncertainty; actual occurrence yes/no/unresolved; provider scope and asset identity; occupation/duty intervals; all consumers/periods; manufacture/maintenance/fuel inclusion; service capacity/lifetime and damage; used return/stock condition | Reconcile actual asset logs, provider contracts and invoices with pile/phase events; measure actual equipment service duration. Observe reusable mass/current condition without treating it as consumed material. For self-owned capital collect actual lifetime/capacity/use/damage; retain a gap where evidence is absent. Aggregation procedure: Each separately purchased concrete service numerator / L per 1 m reference flow; allocate shared and self-owned burden once using evidenced coverage and capacity/use; do not invent lifetime. | h; native capacity/use and condition measures | each mobilization, duty/idle/rework interval, maintenance, damage and return event | complete service episode and relevant evidenced asset life/service periods | actual hammer/crane/access/logistics/test assets and every consumer | per 1 m reference flow | contracts, invoices, interval logs, consumer list and actual life/use/damage evidence or gap |
| `cp_pile_install_release` | `pile_install` | direct abstraction and substance/medium releases | substance/medium measurement and model ledger | event/lot/configuration; pile or asset ID; process/phase/time and reporting period; owner and role; actual identity/SKU/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence and uncertainty; actual occurrence yes/no/unresolved; exact substance/species/particle and medium; source constituent pool; fossil carbon burned; wet-work water-only input/stock/fate; capture/discharge; model/factor applicability and uncertainty | Use direct measurements or documented applicable emission/evaporation/discharge models with actual fuel, equipment, wet task and source-pool evidence. Retain native measurements and constituent concentrations; independently measure abstraction. Preserve actual medium and do not turn ledger residuals into releases. Aggregation procedure: Calculate each concrete substance-and-medium numerator / L per 1 m reference flow; compare compatible dry constituents, water-only and fossil-carbon pools separately; no residual exchange. | kg; native discharge volume/concentration and sampling units | each emission-relevant duty/wet/discharge event and representative measurement interval | all applicable phases and actual release/source intervals, including rework | actual equipment/material release points and receiving media for the project lot | per 1 m reference flow | sampling/meter calibration; model/factor scope; composition, capture/receiver and uncertainty evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_length` | reference_service | L = sum of unique accepted axial lengths from actual toe to actual cutoff plane; use surveyed geometry and batter correction, and exclude unaccepted/rejected/abandoned piles and duplicate driving or test passes. Reference amount = L / L = 1 m for positive L. | pile register; survey; criteria/test/head/acceptance; cp_pile_install_material | L; 1 m reference_service | `accepted-axial-length-identity`; `fhwa-gec15-2022`; `fhwa-driven-length-review` |
| `c_exchange` | all inventory rows | For each actual concrete identity/SKU/current-state/receiver or substance/medium, q_concrete_ref = attributable native amount converted with its own evidenced same-state bridge / L. Apply once; retain constituent amounts separately from whole-mixture mass and do not export heterogeneous sums as exchanges. | actual concrete event amounts; same-state bridge; L; cp_pile_install_material; cp_pile_install_utility; cp_pile_install_asset; cp_pile_install_release | individual normalized concrete exchanges | `pile-installation-attribution-method` |
| `c_shared` | all inventory rows | Separate directly assigned actual use from shared totals; remaining shared burden = reconciled total - direct assignments - explicitly excluded consumer coverage. Attribute that residual once to evidenced consumers/periods using actual duty or documented causal shares summing to one; retain uncertainty and provider coverage. | consumer/phase/period ledger; direct readings; reconciled totals; provider scope; cp_pile_install_utility; cp_pile_install_asset | nonduplicated attributable episode amounts | `pile-installation-attribution-method` |
| `c_pools` | all inventory rows | For each compatible material/current-state or constituent pool, compare opening stock + actual inflows with retained installed/usable stock + closing rejected/open/abandoned stock + independently observed exits/releases. Transformations require explicit measured constituent bridges. Keep water-only fates and fossil carbon independent; report residual and uncertainty without inventing a balancing exchange. | same-pool stock/inflows; measured transformations; actual fates; cp_pile_install_material; cp_pile_install_release | pool QA, disclosed residuals and gaps | `compatible-pool-balance-identity` |
| `c_carbon` | fossil_co2_air | m_CO2_fossil <= C_fossil_burned * 44 / 12; C_fossil_burned is independently determined fossil-carbon mass actually burned. The upper identity does not assert complete oxidation, estimate other species or equate fuel mass to CO2 mass. | actual fuel and fossil-carbon composition; duty; applicable model/measurement; cp_pile_install_release | fossil-carbon CO2 QA constraint | `carbon-oxidation-identity` |
| fuel_supply_fate | diesel_fuel | For each actual fuel identity and nonoverlapping node/event period, G_fuel = opening usable fuel + external receipts - closing usable fuel stock, including equipment tanks, with container tare excluded and same-boundary issues/transfers not added as new receipts. G_fuel is the gross physical product input before genuine usable outward U_fuel, outward transfer X_fuel, collected unburned fuel W_fuel and uncontained fuel P_fuel. Keep those exclusive outlets separate and resolve actual product, waste stream or substance/medium identities; a total spill is an incident diagnostic, never another deduction. W_fuel and P_fuel mean the contained fuel mass, not the total mass of contaminated absorbent or wastewater. B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel only with a complete supported fate ledger; unknown fate stays a gap and is not presumed burned. Only independently supported B_fuel drives combustion emissions. Retain upstream supply burdens of all nonreturned unburned fuel, waste and loss; only original unused-material burden may follow a documented usable exit, without a second net-input deduction or avoided-production credit. Carry opening/closing stock burden once. Normalize each physical quantity once by D_fuel, the independently measured positive accepted lot quantity in this PCR reference unit (accepted volume, area, axial length, steel mass or complete accepted count as defined in sections 3-4), never by a fuel quantity or an intermediate output. Existing actual_consumed/fuel-use fields are burn-activity records; they cannot replace G_fuel as the upstream input. Provider-included fuel and its emissions have one owner; do not add overlapping foreground supply or combustion. | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_gate` | reference_service | Retain pile ID, prestressing system, section/void geometry, delivered mass/length, actual toe/cutoff elevations and axial/batter method, driving-criteria revision, hammer/cushion and mechanical shoe/splice schedule. Match required test, head-preparation and acceptance records; no generic bearing capacity, blow count, energy or test-frequency threshold is prescribed. | survey, signed pile/test/head/acceptance register; fhwa-gec15-2022; fhwa-pile-inspection |
| `dq_occurrence` | all inventory rows | Record each conditional task/material/fate as yes, no or unresolved with evidence. Unknown is not inactive or zero. Instantiate every real SKU/state/receiver or substance/medium separately; verify its concrete identity and support before final exchange production. Preserve Energy and Duration support gaps rather than borrowing calorific value or composite time dimensions. | actual event/identity/phase ledger and concrete binding/support evidence |
| `dq_range` | all inventory rows | Resolve each card-specific range evidence need using actual supplier/project/receiver data and applicable reviewed observations before asserting an envelope. Preserve identity, state, denominator and uncertainty. Only reference self-normalization and the fossil-carbon 44/12 upper constraint are supplied here; no arbitrary broad or falsely narrow numbers may replace the other 24 evidence needs. | each card description; actual range observations and applicable uncertainty |
| `dq_reject` | pile_install | Track each failed/open/rejected/abandoned pile and original-to-restrike/removal/replacement links with actual engineer decisions and receiver/state. Keep burdens and period-cutoff stock; only accepted unique length enters L. Unresolved terminal fate or replacement is a disclosed gap and blocks dataset finalization. | pile decisions, event journal, stock/dispatch and period reconciliation |
| `dq_shared` | pile_install | Record every actual shared hammer/crane/test/meter consumer and period, direct assignments, residual attribution and provider inclusions. Self-owned life/capacity/use/damage evidence is required for manufacture attribution; do not silently omit capital or charge the full existing asset. | contracts, meters, asset condition/use and reconciled consumer shares |
| `dq_pools` | all inventory rows | Keep whole products and measured constituents distinct. Separate composite cutoff from physically separated steel, captured solids from airborne particles, collected slurry from direct discharges, and water-only from total wet mixtures. Fuel carbon is not fuel mass or total combustion mass; no invented O2 card or residual release is allowed. | constituent assays, same-state bridges, source pools and capture/receiver records |
| `dq_coverage` | pile_install | Cover receiving through demobilization, owned setup/idle/test/rework and all period boundaries with calibration, uncertainty and missing-record disclosure. Retain both native measurements and each concrete numerator/L calculation; identity resolution alone is not quantity evidence or complete upstream coverage. | four node-owned protocols, event journal and data-gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | pile_install | Verify the actual precast prestressed impact-hammer mechanical route, owned phases and acceptance handoff. A welded or other excluded route requires scope review before applying these rules; separate handoffs require boundary reconsideration. | `pile-installation-attribution-method` |
| `v_reference` | reference_service | Require independent positive L, actual toe/cutoff and axial/batter evidence, criteria revision, complete owned head/mechanical connection duties and required tests/acceptance. Reconcile each unique pile; reject duplicate restrike/test length and unaccepted/rejected/abandoned length. | `pile-installation-attribution-method` |
| `v_events` | periods and rework | Reconcile every input, asset, output and rework/reject event to pile_install, its actual phase and reporting period. Verify real return/downgrade/removal/waste/retained/abandoned fates and original pile links; unresolved termination/replacement blocks finalization while burdens remain. | `pile-installation-attribution-method` |
| `v_shared` | shared assets/services/meters | Enumerate all real hammer/crane/access/test/meter consumers and periods; reconcile direct assignments and residual shares, including owned setup/idle/rework. Reject duplicate fuel/capital/maintenance already included in the provider service. Require actual self-owned life/capacity/use/damage or report the gap. | `pile-installation-attribution-method` |
| `v_exchanges` | all inventory rows | Verify concrete identity/SKU/state/receiver or substance/medium, conditional occurrence evidence, actual native amount and its own same-state bridge and numerator/L. Reject a heterogeneous summed exchange, borrowed UUID, unresolved final binding, duplicate constituent or unsubstantiated zero. Check water-only and fossil-carbon separately without closure-generated exchanges. | `pile-installation-attribution-method` |
| `v_evidence` | data package completeness | Report checks performed/skipped, findings, completeness, unresolved support and card-specific range evidence. Candidate quantity warnings do not establish an active-ready methodology. A final dataset requires resolved applicable identity/quantity/ownership/terminal-fate gaps and supported uncertainty; checker pass alone proves neither external verification nor readiness. | `pile-installation-attribution-method` |
| validate_fuel_supply_fate | diesel_fuel | Check G_fuel, B_fuel and all exclusive outlets against the actual fuel protocol, stock and provider coverage. Nonreturned unburned waste/loss keeps its upstream burden; unresolved fate, fuel constituent or positive D_fuel blocks a complete quantitative fuel inventory. Do not substitute burned activity for purchased fuel or deduct total spill plus its component outlets. |  |
| validate_physical_slurry_stream | all collected wastewater/slurry | A wastewater/slurry card denotes one actual physically unseparated liquid/solid mixture at one receiver gate. Independently collected liquids, separated solids or different treatment destinations require distinct actual exchanges; do not recombine them to fit this card. Mixture mass and constituent water/solids are nonadditive views. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation data package for the declared pile lot |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections |
| allowed_use | The evidenced impact-driven precast prestressed mechanical route and declared accepted-length gate with complete ownership and coverage disclosure |
| excluded_use | Design or structural certification; universal performance comparisons; excluded pile types/driving aids/welding; pile manufacture or pile-cap construction; unresolved final exchanges |
| required_metadata | Required reference qualifiers; boundary and provider scopes; pile/phase/period event register; concrete flow identities/states/receivers; native records, bridges and independent L; upstream/treatment coverage |
| required_quality_disclosure | Calibration, uncertainty, occurrence yes/no/unresolved, unresolved identity/support/range/life/fate gaps, rework/failed-stock burdens, pool residuals and performed/skipped validation |
| update_trigger | Changed pile/section/prestressing or installation route, criteria/gate, equipment/provider coverage, source medium, concrete identity, material fate or improved quantitative/lifetime evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fhwa-gec15-2022` | `official_guidance` | FHWA-HIF-22-024 (2022), Acceptance Procedures for Deep Foundations, chapter 4, especially §§4.2–4.4, printed pp.4-6–4-9. https://www.fhwa.dot.gov/engineering/geotech/pubs/hif22024.pdf | Project-specific installation plan, driving criteria, cushions, restrikes/tests, damaged-pile assessment and head inspection; no universal material/fuel rate or adopted example acceptance threshold |
| `fhwa-pile-inspection` | `official_guidance` | FHWA, Construction Program Management and Inspection Guide, Appendix D, Driven Piling. https://www.fhwa.dot.gov/construction/cpmi04d2.cfm | Pile/hammer/cushion/shoe/splice records, handling, actual toe/cutoff and delivered/order/embedded-length distinctions; only relevant driven-pile passages used, without generic consumption priors |
| `fhwa-driven-length-review` | `official_guidance` | FHWA, Pile Driving Review, Measurement and Payment. https://www.fhwa.dot.gov/construction/reviews/revpile1.cfm | Limited to the distinction of accepted driven length below cutoff from ordered length and record reconciliation. Steel-pile/casing, coating, splice, hammer and concrete-placement numeric examples are not transferred to precast prestressed piles |
| `accepted-axial-length-identity` | `method_factor` | Author-defined normative method identity: unique accepted axial toe-to-actual-cutoff length, L > 0; L / L = 1 m reference service | Independent denominator, axial/batter measurement, unique-pile acceptance and self-normalization; this is a declared method, not an external observation |
| `pile-installation-attribution-method` | `method_factor` | Author-defined normative method identity: concrete event/identity/phase attribution and one normalization by independent accepted L | Owned one-node event/period accounting, causal shared residual, provider overlap prevention, actual asset-capacity/use evidence and concrete exchange normalization; not an empirical rate |
| `compatible-pool-balance-identity` | `method_factor` | Author-defined normative physical bookkeeping identity for compatible material/current-state/constituent pools with independently observed fates | Separate stock/exit QA, dry constituents and water-only pools; residual disclosure without invented exchanges or full combustion-mass closure |
| `carbon-oxidation-identity` | `method_factor` | Author-defined normative carbon stoichiometry identity: one mass unit of fossil carbon can form at most 44/12 mass units of fossil CO2 | Fossil-carbon-based CO2 upper QA constraint only, not a complete-oxidation or fuel-consumption factor |
