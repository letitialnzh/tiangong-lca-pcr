---
pcr_id: pcr.constructions-and-construction-services.construction-services.friction-fit-stone-wool-frame-insulation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Friction-fit stone wool frame insulation services

## 1. Scope and Applicability

This PCR governs site installation of unfaced semi-rigid mineral stone wool slabs into accepted, dry, stable, open wall frames. The installer measures the clear cavity apertures, cuts the slabs, friction-fits the pieces, inspects the installed insulation and cleans the work area. The handover is accepted insulation before lining or other enclosure conceals it. The covered service is narrower than general thermal insulation services.

Exclude construction or repair of the frame, manufacture of insulation, membranes, lining, plastering, exterior insulation/render systems, blown or sprayed insulation, glass wool, foams, removal of existing insulation and all asbestos work. Stone wool means 岩棉; asbestos is 石棉 and outside this category. A product-specific guide informs the installation sequence but its cutting allowance, stud spacing, dimensions and named product properties are not universal PCR defaults. Actual selected-system instructions govern execution (`rockwool-thermal-frame-slab-installation-2025`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.friction-fit-stone-wool-frame-insulation-services |
| classification_refs | cpc:3.0:54652 — Thermal insulation services; proposed narrower relation |
| covered_products | Site friction-fitting of declared unfaced semi-rigid stone wool slabs into accepted open wall-frame cavities, including aperture survey, cutting, inspection and local cleanup |
| excluded_products | Frame construction, lining and membranes; insulation manufacture; external/render insulation; foam, glass-wool and blown routes; demolition; asbestos and hazardous-material removal |
| representative_product | Accepted stone wool insulated cavity surface before enclosure |
| production_route | Work-lot aperture survey → slab cutting → friction fitting → inspection, rework where necessary and cleanup → accepted open-cavity insulation handover |
| market_state | Completed installation service at the pre-enclosure acceptance gate; not a manufactured slab or complete wall |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted friction-fit stone wool frame insulation service in open wall-frame cavities |
| How much | 1 m2 net accepted insulated cavity area |
| How well | Declared stone wool grade, unfaced semi-rigid form, nominal/design thickness, density or documented product density basis, declared conductivity and applicable resistance basis; correct fit without visible gaps or unintended compression; accepted before enclosure |
| How long or cycle | One defined installation work lot and its acceptance event; no building service life or whole-wall thermal performance is implied |
| reference_flow_link | `accepted_insulation_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted friction-fit stone wool frame insulation service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | site and work lot; wall/frame and cavity geometry; net aperture-area method; slab manufacturer and grade; stone wool identity; unfaced semi-rigid form; thickness; density basis; conductivity and test/declaration basis; resistance if claimed; installation instruction edition; acceptance gate and date; reject/rework status; custody and waste routes |

Declare every qualifier in the foreground data package. Slab conductivity is a material property; it does not demonstrate whole-wall U-value, thermal bridging, airtightness, fire performance or long-term building performance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A is positive net accepted insulated cavity area measured from actual clear apertures using cp_fit_area; exclude frame members, openings, voids, rejected and unaccepted work. Do not use gross wall elevation or purchased slab area. |
| material_mass | delivered_stone_wool; cut_slabs_transfer; cut_wool_feed; cut_reusable_exit; fit_reusable_exit; cut_wool_waste; fit_wool_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use traceable actual mass records. If converted from pieces or slab volume, retain same-grade dimensions, density evidence and uncertainty; never treat area as mass without these conversion inputs. |
| transfer_pairing | prepared_frame_interface; ready_frame_feed; cut_slabs_transfer; cut_wool_feed | Area or Mass appropriate to the card | m2 or kg appropriate to the card | Paired handoffs retain matching transfer id, lot, state, unit and quantity. Record actual feed and transfer amounts; neither intermediate area nor slab mass is fixed to the final 1 m2 reference. |
| thermal_qualifiers | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Thickness, density and declared conductivity qualify the service; preserve their units and declaration conditions. Material resistance calculations require consistent thickness and conductivity and cannot substitute for a whole-wall calculation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | An accepted stable dry open wall frame with accessible cavities, and supplied unfaced semi-rigid stone wool slabs of declared grade; frame defects and hazardous materials have been resolved outside this service |
| starting_condition_role | Existing-frame component interface plus separately supplied insulation material input; the frame is not manufactured in the foreground |
| product_classification_scope | Only the stated narrower installation service within cpc:3.0:54652 |
| recursive_input_rule | A purchased installation service in the same category is an externally supplied service with supplier scope and quantities disclosed; use its upstream dataset and avoid reproducing its surveyed, cut or fitted activities in this foreground package |
| upstream_dataset_requirement | Link actual supplied slabs, electricity and actual accessories to compatible upstream datasets; frame construction remains with the incoming frame owner. Preserve transport and offsite waste-treatment links and disclose their model ownership. No automatic burden-free input or avoided-product credit is implied. |
| disclosure | Site, work-lot boundary, accepted starting state, excluded corrective work, material specification, tool and shared-meter ownership, transport/treatment responsibility, actual retention condition, internal transfers and acceptance gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| starting_frame | aperture_survey | Accept the existing frame condition and measure clear apertures; substantial repairs or construction are separate supplied activities. Record their owner before beginning the covered service. | `rockwool-thermal-frame-slab-installation-2025` |
| cut_and_fit | slab_cutting; fit_acceptance | Include measuring, cutting, friction fitting, gap inspection and local cleanup. Follow actual selected-system instructions; no universal cutting allowance, framing centres or fixing quantity is prescribed. | `rockwool-thermal-frame-slab-installation-2025` |
| component_integration | fit_acceptance | Integrate cut stone wool with the measured existing-frame component interface. The frame transfer carries geometric and acceptance state only; frame manufacture stays upstream. Joining is friction fitting; retention accessories are conditional on actual system requirements. Do not invent mixing, chemical reaction or a single-component assembly. | `rockwool-thermal-frame-slab-installation-2025` |
| waste_and_release | slab_cutting; fit_acceptance | Keep collected offcuts and vacuum dust as waste under custody, with named receiver and treatment link. Report direct airborne release only from independent composition/size/medium evidence; do not turn collected waste into an elementary emission. | `rockwool-thermal-frame-slab-installation-2025` |
| shared_services | all processes | Attribute actual shared electricity for survey lighting, cutting, fitting or vacuuming using meter/event and consumer records for the same period. Every meter or shared service has one accounting owner. Include actual shared access-platform, scaffold or rented-equipment availability services with named asset, all consuming nodes and contract periods; use actual h records and documented beneficiary shares. Declare equipment/access capital treatment and supplier-service inclusions. | |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Accepted dry open frame cavity interface (`supplied_frame_interface`)

Process / prospective direction / type: `aperture_survey` / `inputs` / `product`.

Existing component interface; upstream frame burden remains with supplier. State: Structurally sound dry open frame accepted before insulation. Destination: aperture_survey. Condition: Always for the declared route.

- Collection subject: Accepted dry open frame cavity interface
- Flow property / unit: Area / m2
- Amount rule: survey_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_area`
- Unverified optional screening aid: Provisional reasoned screening interval. Area ratios screen unexpectedly large rejected or unaccepted work and mismatched handoff records; values outside this broad provisional screen require explanation rather than exclusion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Shared access and rented equipment service (`survey_shared_access_service`)

Process / prospective direction / type: `aperture_survey` / `inputs` / `product`.

Conditional supplied shared equipment/access service, actual asset and service contract resolved from foreground records. Only when an actual rented or externally supplied access/equipment service is used by this node; actual service type and included energy/capital responsibilities must be declared. The time basis is contracted availability, not assumed active tool time. Resolve each actual service and supplier dataset before final exchanges; no universal platform/scaffold identity is asserted.

- Collection subject: Actual shared access platform, scaffold or rented equipment availability service
- Flow property / unit: Duration / h
- Amount rule: survey_shared_hours / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_shared_service`
- Unverified optional screening aid: Provisional reasoned service-time screen. A wide provisional reasoned time screen accommodates absent rental, irregular access and long availability periods; it is not a recommended use time, cost proxy, empirical bound or default. Investigate outliers against contract and consumer records.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Measured ready open frame cavity interface (`prepared_frame_interface`)

Process / prospective direction / type: `aperture_survey` / `outputs` / `product`.

Measured existing-frame component handoff; not manufactured frame output. State: Accepted frame with measured clear apertures; no insulation yet. Destination: fit_acceptance via transfer frame_transfer. Condition: Always for the declared route.

- Collection subject: Measured ready open frame cavity interface
- Flow property / unit: Area / m2
- Amount rule: ready_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_area`
- Unverified optional screening aid: Provisional reasoned screening interval. Area ratios screen unexpectedly large rejected or unaccepted work and mismatched handoff records; values outside this broad provisional screen require explanation rather than exclusion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Shared access and rented equipment service (`cut_shared_access_service`)

Process / prospective direction / type: `slab_cutting` / `inputs` / `product`.

Conditional supplied shared equipment/access service, actual asset and service contract resolved from foreground records. Only when an actual rented or externally supplied access/equipment service is used by this node; actual service type and included energy/capital responsibilities must be declared. The time basis is contracted availability, not assumed active tool time. Resolve each actual service and supplier dataset before final exchanges; no universal platform/scaffold identity is asserted.

- Collection subject: Actual shared access platform, scaffold or rented equipment availability service
- Flow property / unit: Duration / h
- Amount rule: cut_shared_hours / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_shared_service`
- Unverified optional screening aid: Provisional reasoned service-time screen. A wide provisional reasoned time screen accommodates absent rental, irregular access and long availability periods; it is not a recommended use time, cost proxy, empirical bound or default. Investigate outliers against contract and consumer records.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Reusable stone wool leaving cutting custody (`cut_reusable_exit`)

Process / prospective direction / type: `slab_cutting` / `outputs` / `product`.

Intact returns or separately recorded usable third-party handover. State: Uninstalled reusable stone wool; destination and grade retained. Destination: Supplier return or external reuse recipient; mutually exclusive event tags. Condition: Only if reusable material actually leaves custody; closing stock is not an exit.

- Collection subject: Reusable stone wool leaving cutting custody
- Flow property / unit: Mass / kg
- Amount rule: cut_reusable_exit_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Unverified optional screening aid: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Separated slab packaging waste by actual material (`cut_packaging_waste`)

Process / prospective direction / type: `slab_cutting` / `outputs` / `waste`.

Conditional material-resolved packaging waste umbrella. State: Actual film, board or other packaging separated without wool double counting. Destination: Actual waste receiver by material and treatment route. Condition: Only actual discarded packaging; retained returnable packaging remains stock.

- Collection subject: Separated slab packaging waste by actual material
- Flow property / unit: Mass / kg
- Amount rule: cut_packaging_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Unverified optional screening aid: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Reported stone wool airborne particles by substance and size (`cut_airborne_particles`)

Process / prospective direction / type: `slab_cutting` / `outputs` / `elementary`.

Conditional direct release umbrella. State: Measured species or mineral composition, particle-size basis and air receiving medium. Destination: Air compartment actually reported. Condition: Only independently quantified direct releases with substance or mineral composition, particle size and receiving medium evidence.

- Collection subject: Reported stone wool airborne particles by substance and size
- Flow property / unit: Mass / kg
- Amount rule: cut_air_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_air`
- Unverified optional screening aid: Provisional reasoned screening interval. This broad provisional screen flags unusual release estimates; it is not a measured emission factor or a health limit. Captured dust is custodial waste and excluded here.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Measured ready open frame cavity interface (`ready_frame_feed`)

Process / prospective direction / type: `fit_acceptance` / `inputs` / `product`.

Existing frame component input paired to frame_transfer. State: Same surveyed accepted open cavity; no manufacture or duplicate upstream frame burden. Destination: fit_acceptance. Condition: Always for the declared route.

- Collection subject: Measured ready open frame cavity interface
- Flow property / unit: Area / m2
- Amount rule: frame_feed_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Unverified optional screening aid: Provisional reasoned screening interval. Area ratios screen unexpectedly large rejected or unaccepted work and mismatched handoff records; values outside this broad provisional screen require explanation rather than exclusion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual manufacturer-required insulation retention accessories (`retention_accessories`)

Process / prospective direction / type: `fit_acceptance` / `inputs` / `product`.

Conditional actual material-resolved accessory umbrella. State: Actual accessory chemistry, form and fastening role recorded. Destination: Retained insulation assembly. Condition: Only when the selected slab/system instructions and actual installation require retention; never presumed for ordinary friction fitting.

- Collection subject: Actual manufacturer-required insulation retention accessories
- Flow property / unit: Mass / kg
- Amount rule: accessory_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Unverified optional screening aid: Provisional reasoned screening interval. Zero is usual where friction fit needs no fixings; the broad provisional screen permits evidenced special retention requirements without prescribing a material or dose.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Shared access and rented equipment service (`fit_shared_access_service`)

Process / prospective direction / type: `fit_acceptance` / `inputs` / `product`.

Conditional supplied shared equipment/access service, actual asset and service contract resolved from foreground records. Only when an actual rented or externally supplied access/equipment service is used by this node; actual service type and included energy/capital responsibilities must be declared. The time basis is contracted availability, not assumed active tool time. Resolve each actual service and supplier dataset before final exchanges; no universal platform/scaffold identity is asserted.

- Collection subject: Actual shared access platform, scaffold or rented equipment availability service
- Flow property / unit: Duration / h
- Amount rule: fit_shared_hours / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_shared_service`
- Unverified optional screening aid: Provisional reasoned service-time screen. A wide provisional reasoned time screen accommodates absent rental, irregular access and long availability periods; it is not a recommended use time, cost proxy, empirical bound or default. Investigate outliers against contract and consumer records.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Reusable stone wool leaving fitting custody (`fit_reusable_exit`)

Process / prospective direction / type: `fit_acceptance` / `outputs` / `product`.

Conditional reusable material boundary exit. State: Uninstalled or removed clean reusable pieces with grade and recipient record. Destination: Supplier or external reuse recipient; no internal transfer represented as exit. Condition: Only actual external exit; same-lot re-fitting remains an internal loop.

- Collection subject: Reusable stone wool leaving fitting custody
- Flow property / unit: Mass / kg
- Amount rule: fit_reusable_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Unverified optional screening aid: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Conditional retention-accessory and accessory-packaging waste by material (`fit_accessory_packaging_waste`)

Process / prospective direction / type: `fit_acceptance` / `outputs` / `waste`.

Only when actual retention accessories or their packaging produce discarded material. Separate each actual accessory composition and packaging material with mass, custodian and destination; reusable returns and closing stock are excluded. This conditional umbrella excludes wool waste and direct environmental release. Actual accessory and packaging composition/state remain unknown; expand material-resolved exchanges before publication.

- Collection subject: Conditional retention-accessory and accessory-packaging waste by material
- Flow property / unit: Mass / kg
- Amount rule: accessory_waste_total_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Unverified optional screening aid: Provisional reasoned screening interval. The wide provisional mass screen permits conditional retention/packaging differences and absence; it is not an expected loss rate, default or factual upper limit. Investigate actual records and replace with independent reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Reported fitting airborne particles by substance and size (`fit_airborne_particles`)

Process / prospective direction / type: `fit_acceptance` / `outputs` / `elementary`.

Conditional direct release umbrella. State: Measured species or mineral composition, particle-size basis and air receiving medium. Destination: Air compartment actually reported. Condition: Only independently quantified direct releases with substance or mineral composition, particle size and receiving medium evidence.

- Collection subject: Reported fitting airborne particles by substance and size
- Flow property / unit: Mass / kg
- Amount rule: fit_air_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_air`
- Unverified optional screening aid: Provisional reasoned screening interval. This broad provisional screen flags unusual release estimates; it is not an emission factor or health limit. Vacuum-collected particles belong to fit_wool_waste.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 6. Process Inventory Structure

The production mode is a site work lot, partitioned by room/wall, slab grade and acceptance date as necessary. Every delivery, transfer, cutting event, rejection, rework, cleaning and shared-meter interval belongs to a lot and node. Cutting changes the geometry of the supplied slab; fitting integrates the cut pieces with the existing frame interface. Off-spec fit remains work in progress until corrected or removed; it is never accepted area.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `aperture_survey` | Starting-frame checks and clear-aperture survey | required | Every covered work lot | Declare supplied frame interface and hand measured ready cavities to fitting | Actual measured ready cavity area linked to frame_transfer |
| `slab_cutting` | Slab draw, cutting and cutting-owned cleanup | required | Every covered work lot | Transform delivered slabs to aperture-specific pieces; own cutting waste and reusable exits | Actual cut mass handed over via wool_transfer |
| `fit_acceptance` | Friction fitting, rework, acceptance and final cleanup | required | Every covered work lot | Integrate frame and cut-piece components; inspect and hand over accepted insulation | A m2 net accepted insulated cavity area |

### Process: Starting-frame checks and survey (`aperture_survey`)

#### Inputs

##### Product flows

###### Electricity supplied to survey lighting (`survey_electricity`)

Conditional actual site electricity. State: Actual voltage and supply mix at point of use. Destination: survey lighting. Condition: Only where survey lighting actually consumes electricity.

- Selected flow: Electricity supplied to survey lighting
- Flow property / unit: Energy / kWh
- Amount rule: survey_energy / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_energy`
- Range: Provisional reasoned screening interval. Manual tools may use zero electricity, while measured lighting and vacuum use vary with access and work duration; this wide provisional interval screens record or attribution errors and supplies no default.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

### Process: Slab cutting (`slab_cutting`)

#### Inputs

##### Product flows

###### Unfaced semi-rigid stone wool slabs delivered for frame insulation (`delivered_stone_wool`)

Gross physical slab draw into cutting node. State: Declared grade, thickness, density and conductivity; intact delivered slabs. Destination: slab_cutting. Condition: Always for the declared route.

- Selected flow: Unfaced semi-rigid stone wool slabs delivered for frame insulation
- Flow property / unit: Mass / kg
- Amount rule: gross_slab_draw / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Range: Provisional reasoned screening interval. The wide mass interval permits substantial variation in declared thickness, density and cutting geometry; it is a provisional error screen, not a slab specification, recommended dose or empirical limit.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to slab cutting and local cleanup (`cutting_electricity`)

Conditional actual power including cutting-owned vacuuming. State: Actual voltage and supply mix at point of use. Destination: cutting tools, lighting and vacuum. Condition: Only for actual powered tools, lighting or cutting-node vacuuming.

- Selected flow: Electricity supplied to slab cutting and local cleanup
- Flow property / unit: Energy / kWh
- Amount rule: cut_energy / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_energy`
- Range: Provisional reasoned screening interval. Manual tools may use zero electricity, while measured lighting and vacuum use vary with access and work duration; this wide provisional interval screens record or attribution errors and supplies no default.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Cut stone wool pieces ready for friction fitting (`cut_slabs_transfer`)

Internal material handoff. State: Aperture-specific unfaced stone wool pieces not yet installed. Destination: fit_acceptance via transfer wool_transfer. Condition: Always for the declared route.

- Selected flow: Cut stone wool pieces ready for friction fitting
- Flow property / unit: Mass / kg
- Amount rule: cut_transfer_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Range: Provisional reasoned screening interval. The wide mass interval permits substantial variation in declared thickness, density and cutting geometry; it is a provisional error screen, not a slab specification, recommended dose or empirical limit.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collected unusable stone wool cutting residue (`cut_wool_waste`)

Custodial waste exit. State: Offcuts, rejects and vacuum-collected stone wool under cutting ownership. Destination: Named licensed waste receiver; actual route disclosed. Condition: Always for the declared route.

- Selected flow: Collected unusable stone wool cutting residue
- Flow property / unit: Mass / kg
- Amount rule: cut_waste_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_material`
- Range: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Fitting and acceptance (`fit_acceptance`)

#### Inputs

##### Product flows

###### Cut stone wool pieces ready for friction fitting (`cut_wool_feed`)

Actual internal material feed paired to wool_transfer. State: Same aperture-specific pieces transferred from cutting. Destination: fit_acceptance. Condition: Always for the declared route.

- Selected flow: Cut stone wool pieces ready for friction fitting
- Flow property / unit: Mass / kg
- Amount rule: fit_feed_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Range: Provisional reasoned screening interval. The wide mass interval permits substantial variation in declared thickness, density and cutting geometry; it is a provisional error screen, not a slab specification, recommended dose or empirical limit.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to fitting inspection and final cleanup (`fitting_electricity`)

Conditional actual power excluding cutting-owned cleanup. State: Actual voltage and supply mix at point of use. Destination: Fitting-node lighting or vacuum. Condition: Only actual powered equipment, lighting or fitting-owned vacuuming.

- Selected flow: Electricity supplied to fitting inspection and final cleanup
- Flow property / unit: Energy / kWh
- Amount rule: fit_energy / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_energy`
- Range: Provisional reasoned screening interval. Manual tools may use zero electricity, while measured lighting and vacuum use vary with access and work duration; this wide provisional interval screens record or attribution errors and supplies no default.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted friction-fit stone wool frame insulation service (`accepted_insulation_service`)

Actual final service reference output. State: Net accepted insulated cavity area before enclosure; declared slab system, no visible gaps and no unintended compression. Destination: Client or next enclosure trade. Condition: Always for the declared route.

- Selected flow: Accepted friction-fit stone wool frame insulation service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_area`
- Range: Reference-unit normalization identity. Normalization identity: one reference service unit is exactly 1 m2. This is not a provisional screen or a physical yield estimate.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Collected stone wool fitting rejects and cleanup residue (`fit_wool_waste`)

Custodial fitting waste exit including removed unusable slabs. State: Damaged, unsuitable or contaminated wool and captured cleanup residue under fitting ownership. Destination: Actual waste receiver with material and route disclosure. Condition: Always for the declared route.

- Selected flow: Collected stone wool fitting rejects and cleanup residue
- Flow property / unit: Mass / kg
- Amount rule: fit_waste_mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fit_material`
- Range: Provisional reasoned screening interval. The interval is deliberately broad because geometry, reusable offcuts and contamination differ by lot; investigate outliers and replace this provisional screen with independently reviewed evidence.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| lot_subdivision | work-lot burdens | Prefer direct node and lot records. Divide each attributable node numerator by the same positive accepted A. Rejected work, failed fitting attempts and their cleanup remain burdens of the producing lot; do not divide them by rejected area or count them as another final product. | |
| reusable_exits | cut_reusable_exit; fit_reusable_exit | Record reusable exits as physical product outputs with recipient and state; they are not insulation services or waste. Gross physical slab input retains these exits. Net-use diagnostics subtract them once; never subtract the same return again from gross input because it is already an output. Only the actual unused material's inherited upstream burden may follow that material on exit; survey, cutting, fitting and rework service burdens remain with this service lot. Declare the material-burden transfer method and sensitivity; no automatic avoided-production credit. | |
| rework_ownership | slab_cutting; fit_acceptance | A usable offcut reused within cutting or a removed piece refitted within the lot is an internal loop with event ids. Carry its inherited burdens once and add actual new cutting/fitting/cleanup burdens at the responsible node. Material leaving the node is classified as reusable product or custodial waste, never both. | `rockwool-thermal-frame-slab-installation-2025` |
| shared_meter | all electricity and shared access/equipment service cards | For a meter interval, E_total = end reading - start reading after unit and multiplier correction. Identify all consumers, including outside-scope users. Prefer submeter totals; otherwise use documented observed runtime-and-power/activity weights. Shares across all consumers sum to one; assign each share once to one consuming node and lot before normalization. Do not add a site's full bill to each node. For actual rented access or equipment, use shared_service_calc and the node-specific shared-service protocol; enumerate every beneficiary in the same contract period and separately resolve availability versus active-use basis. | |
| changeover_cleanup | work lots | Assign material-grade changeover and local cleaning to the originating lot where identifiable; document the common event and actual beneficiary shares otherwise. One cleanup event belongs to cutting or fitting ownership, with each physical waste or energy quantity counted once. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_survey_area` | aperture_survey | supplied and measured frame interfaces | aperture survey and supplier acceptance record | site; lot; room/wall; aperture_id; clear_width; clear_height; irregular_geometry_dimensions; noninsulatable_area; starting_acceptance; ready_state; frame_transfer_id; timestamp | Measure actual clear apertures with checked tape or laser; calculate geometry from recorded dimensions; retain drawings and starting-frame acceptance Aggregation algorithm: Sum actual surveyed and ready cavity areas separately; divide each by A from cp_fit_area; retain failed/held cavity records outside ready area | m; m2 | Each aperture and any corrected survey | Same work lot before cutting and fitting | Named wall/frame cavities only | per 1 m2 reference flow | Instrument check; signed aperture sheet; photographs; transfer reconciliation |
| `cp_survey_energy` | aperture_survey | conditional survey lighting | node meter or shared-event record | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; billed_service_inclusions | Read node meter or link shared interval to actual survey lighting; retain full consumer ledger before computing allocation Aggregation algorithm: Correct end-minus-start; multiply by survey share once; sum survey-attributable kWh; divide by A | kWh | Each metered interval or shared event | Survey period for same lot | Survey consumers plus every other consumer of that shared meter | per 1 m2 reference flow | Meter calibration or bill; activity log; shares reconcile to one; no duplicate interval |
| `cp_cut_material` | slab_cutting | slab draw, cut transfer, reusable exits, wool and packaging waste | stock, scale, transfer and waste event records | site; lot; grade; slab_dimensions; piece_dimensions; piece_count; pack_mass; thickness; density_evidence; documented_density_kg_per_m3; opening_stock; receipts; closing_stock; opening_cut_wip; closing_cut_wip; supplier_returns; external_handover; event_id; exit_class; wool_transfer_id; cut_piece_mass; usable_internal_recut; wool_waste_mass; packaging_material; packaging_mass; vacuum_event; destination; timestamp | Weigh by material with checked scales or use traceable grade-specific pack/piece mass conversion; record opening and closing stock and every mutually exclusive exit; separate packaging from wool Aggregation algorithm: Compute gross slab draw and diagnostic net use; sum transfer/reusable/waste/packaging separately; divide each numerator by A; closing stock excludes material already recorded as external exit | kg | Each receipt, transfer, return and waste event; stock at lot boundaries | Entire cutting lot including recutting and cutting-owned cleanup | Cutting custody and named downstream recipients | per 1 m2 reference flow | Scale check; supplier mass/density documentation; stock ledger; signed transfer and waste receipt; event uniqueness |
| `cp_cut_energy` | slab_cutting | conditional powered cutting, lighting and local vacuum | node meter or shared-event record | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cleanup_event_id; billed_service_inclusions | Meter actual powered equipment or link common interval to cutting-owned consumption; do not estimate powered saw use when a hand knife was used Aggregation algorithm: Correct interval energy; apply documented cutting shares once; sum numerator before division by A | kWh | Each metered interval or shared event | Full cutting period including actual recutting and cleanup | Cutting consumers and all other shared-meter consumers | per 1 m2 reference flow | Meter/bill evidence; activity and vacuum ownership; full shares reconciliation |
| `cp_cut_air` | slab_cutting | conditional direct airborne release | measured release or supported site-specific emission calculation | site; lot; cutting_event; substance_or_composition; particle_size_basis; receiving_air_medium; measured_concentration; sampled_air_volume; capture_efficiency_evidence; release_algorithm; factor_records; method; uncertainty; release_duration; collected_waste_exclusion; measurement_scope; source_boundary; background_corrected_concentration_mg_m3; actual_source_flow_m3_s; interval_duration_s; gas_state_basis; source_coverage_evidence; measured_total_release_kg; total_release_method; control_factor_basis; measured_source_concentration_mg_m3; measured_background_concentration_mg_m3; background_correction_method; source_flow_measurement_evidence | Quantify the whole event release across the actual environmental boundary, not the mass caught by a sampler. For a representative measured source stream, retain background-corrected concentration, the full source flow and matching duration on the same temperature/pressure and dry/wet basis. Sampling-pump volume and worker/room exposure concentration alone cannot establish an event total. For diffuse releases use a validated site-specific total-flux method or supported activity-factor model, with actual event coverage and uncertainty; unknown coverage remains a gap. Exclude captured waste. A downstream release measurement or already controlled release factor receives no second capture deduction. Sum each actual species/size/medium event once and divide by A once. Retain original measured_source_concentration_mg_m3 and measured_background_concentration_mg_m3, the validated background_correction_method and source_flow_measurement_evidence; raw observations and method must support background_corrected_concentration_mg_m3 and the actual flow. | mg/m3; m3; m3/s; s; kg | Each assessed cutting release event | Same cutting lot and actual release period | Cutting environmental boundary only | per 1 m2 reference flow | Sampling report; method/factor provenance; uncertainty; custody/release separation |
| `cp_fit_material` | fit_acceptance | paired frame and wool feed; accessories; reusable and waste exits; conditional actual accessory and packaging waste | transfer, scale, accessory and rework records | site; lot; frame_transfer_id; frame_feed_area; wool_transfer_id; feed_mass; opening_wool_wip; closing_wool_wip; installed_wool_mass; installed_piece_geometry; installed_density_evidence; documented_density_kg_per_m3; accessory_identity; accessory_instruction; accessory_opening; accessory_receipts; accessory_closing; accessory_returns; accessory_external_handover; removal_event; removed_mass; reuse_or_discard; fit_reusable_mass; fit_waste_mass; vacuum_event; recipient; timestamp; aperture_id; final_acceptance_record; installed_acceptance_status; accessory_waste_mass; accessory_packaging_waste_mass; accessory_waste_event; accessory_waste_material; accessory_waste_custodian; accessory_waste_destination | Reconcile actual incoming frame and cut-piece transfers; weigh actual material exits and accessory records; tag removal as same-lot rework, external reusable exit or waste; actual accessory instructions establish activation Aggregation algorithm: Sum actual paired feed; compute accessory net issue; sum reusable/waste exits once; retain WIP and refitting loops; divide each numerator by A Record installed wool only by final acceptance membership; unaccepted installed wool belongs to mutually exclusive closing WIP. Weigh actual accessory waste and packaging separately by material/event/custodian; reusable returns and closing stocks are not waste. | m2; kg | Each transfer, accessory issue, removal and cleanup event; WIP at lot limits | Whole fitting lot through acceptance and final cleanup | Fitting custody and named recipients | per 1 m2 reference flow | Transfer signatures; checked scale; accessory product evidence; removal-route log; receiver receipt |
| `cp_fit_energy` | fit_acceptance | conditional fitting, inspection lighting and final vacuum | node meter or shared-event record | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cleanup_event_id; billed_service_inclusions | Meter actual fitting-node consumers or allocate a common interval using documented consumer data and one ownership record Aggregation algorithm: Correct interval energy; apply fitting shares once; sum numerator before division by A | kWh | Each metered interval or shared event | Fitting, inspection, rework and final cleanup period | Fitting consumers and all other shared-meter consumers | per 1 m2 reference flow | Meter/bill evidence; final-cleanup ownership; full shares reconciliation |
| `cp_fit_area` | fit_acceptance | actual accepted reference service | signed acceptance and aperture measurement record | site; lot; aperture_id; accepted_clear_dimensions; noninsulated_deductions; slab_grade; thickness; density_basis; conductivity_basis; visible_gap_check; compression_check; rejection_area; rework_status; enclosure_status; acceptance_date; approver | Reconcile installed aperture geometry to survey and inspect fit before enclosure; acceptance signoff identifies actual conforming apertures; retain rejected work until corrected and reaccepted Aggregation algorithm: A = sum net finally accepted aperture areas; count each aperture once after final disposition; A/A = 1 m2 reference service | m; m2 | Every accepted aperture and each subsequent rejection/reacceptance | One complete lot ending at acceptance | Actual inspected cavity faces; frame members excluded | per 1 m2 reference flow | Signed pre-enclosure checklist; dimensions; photos; grade delivery record; rejected-work log |
| `cp_fit_air` | fit_acceptance | conditional fitting direct airborne release | measured release or supported site-specific emission calculation | site; lot; fitting_or_cleanup_event; substance_or_composition; particle_size_basis; receiving_air_medium; measured_concentration; sampled_air_volume; capture_efficiency_evidence; release_algorithm; factor_records; method; uncertainty; release_duration; collected_waste_exclusion; measurement_scope; source_boundary; background_corrected_concentration_mg_m3; actual_source_flow_m3_s; interval_duration_s; gas_state_basis; source_coverage_evidence; measured_total_release_kg; total_release_method; control_factor_basis; measured_source_concentration_mg_m3; measured_background_concentration_mg_m3; background_correction_method; source_flow_measurement_evidence | Quantify the whole event release across the actual environmental boundary, not the mass caught by a sampler. For a representative measured source stream, retain background-corrected concentration, the full source flow and matching duration on the same temperature/pressure and dry/wet basis. Sampling-pump volume and worker/room exposure concentration alone cannot establish an event total. For diffuse releases use a validated site-specific total-flux method or supported activity-factor model, with actual event coverage and uncertainty; unknown coverage remains a gap. Exclude captured waste. A downstream release measurement or already controlled release factor receives no second capture deduction. Sum each actual species/size/medium event once and divide by A once. Retain original measured_source_concentration_mg_m3 and measured_background_concentration_mg_m3, the validated background_correction_method and source_flow_measurement_evidence; raw observations and method must support background_corrected_concentration_mg_m3 and the actual flow. | mg/m3; m3; m3/s; s; kg | Each assessed fitting release event | Same fitting lot and actual release period | Fitting environmental boundary only | per 1 m2 reference flow | Sampling report; raw data and factor provenance; uncertainty; no overlap with fitting waste |
| `cp_survey_shared_service` | aperture_survey | conditional shared access/equipment availability service | rental contract, asset event and complete consumer ledger | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp | Record the actual supplied availability period and contract units; reconcile observed consumer activity and every beneficiary for the same asset period; preserve evidence distinguishing availability from active operation; collect this node's own actual records before allocation Aggregation algorithm: Convert documented availability quantity to h; multiply by this node's beneficiary share once; sum attributable service hours and divide by A; do not add invoice-wide service repeatedly or separately add burdens already included by supplier | h | Each asset/service period and change of consumers | Complete aperture_survey participation within the contracted availability period | This node plus all other asset consumers, including outside-scope users | per 1 m2 reference flow | Supplier contract/invoice; asset logs; exact unit conversion; all-consumer shares sum to one; inclusion/exclusion reconciliation |
| `cp_cut_shared_service` | slab_cutting | conditional shared access/equipment availability service | rental contract, asset event and complete consumer ledger | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp | Record the actual supplied availability period and contract units; reconcile observed consumer activity and every beneficiary for the same asset period; preserve evidence distinguishing availability from active operation; collect this node's own actual records before allocation Aggregation algorithm: Convert documented availability quantity to h; multiply by this node's beneficiary share once; sum attributable service hours and divide by A; do not add invoice-wide service repeatedly or separately add burdens already included by supplier | h | Each asset/service period and change of consumers | Complete slab_cutting participation within the contracted availability period | This node plus all other asset consumers, including outside-scope users | per 1 m2 reference flow | Supplier contract/invoice; asset logs; exact unit conversion; all-consumer shares sum to one; inclusion/exclusion reconciliation |
| `cp_fit_shared_service` | fit_acceptance | conditional shared access/equipment availability service | rental contract, asset event and complete consumer ledger | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp | Record the actual supplied availability period and contract units; reconcile observed consumer activity and every beneficiary for the same asset period; preserve evidence distinguishing availability from active operation; collect this node's own actual records before allocation Aggregation algorithm: Convert documented availability quantity to h; multiply by this node's beneficiary share once; sum attributable service hours and divide by A; do not add invoice-wide service repeatedly or separately add burdens already included by supplier | h | Each asset/service period and change of consumers | Complete fit_acceptance participation within the contracted availability period | This node plus all other asset consumers, including outside-scope users | per 1 m2 reference flow | Supplier contract/invoice; asset logs; exact unit conversion; all-consumer shares sum to one; inclusion/exclusion reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area_calc | accepted_insulation_service | For each finally accepted aperture, net_area = measured geometric area - recorded noninsulated deductions; A = sum(net_area); reference amount = A / A = 1 m2; A must be positive. | accepted_clear_dimensions; noninsulated_deductions; visible_gap_check; compression_check; rejection_area; rework_status; acceptance_date; approver; cp_fit_area | A; accepted_insulation_service | |
| survey_area_calc | supplied_frame_interface; prepared_frame_interface | survey_area = sum surveyed net cavity areas; ready_area = sum surveyed net cavity areas with accepted ready state; normalize each by A. | clear_width; clear_height; irregular_geometry_dimensions; noninsulatable_area; ready_state; cp_survey_area; A | survey_area / A; ready_area / A | |
| cut_stock_calc | delivered_stone_wool; cut_reusable_exit | gross_slab_draw = opening_stock + receipts - closing_stock; cut_reusable_exit_mass = supplier_returns + external_handover; diagnostic_net_use = opening_stock + receipts - closing_stock - supplier_returns - external_handover. Returns and external handovers are mutually exclusive and excluded from closing stock. Physical gross input is not reduced again when reusable exits are output cards. Normalize gross_slab_draw and cut_reusable_exit_mass separately by A. | opening_stock; receipts; closing_stock; supplier_returns; external_handover; cp_cut_material; A | gross_slab_draw / A; cut_reusable_exit_mass / A; diagnostic_net_use | |
| cut_mass_calc | cut_slabs_transfer; cut_wool_waste; cut_packaging_waste | Sum cut_piece_mass for wool_transfer_id into cut_transfer_mass; separately sum unusable wool plus cutting-owned captured dust into cut_waste_mass; separately sum discarded packaging by actual material into cut_packaging_mass. Normalize each sum by A; usable internal recuts are not new external input/output. | cut_piece_mass; wool_waste_mass; packaging_mass; wool_transfer_id; event_id; cp_cut_material; A | cut_transfer_mass / A; cut_waste_mass / A; cut_packaging_mass / A | |
| fit_feed_calc | ready_frame_feed; cut_wool_feed | frame_feed_area = sum actual frame transfers; fit_feed_mass = sum actual cut-piece transfers; normalize each separately by A and reconcile each to the paired source card without fixing either to 1. | frame_feed_area; feed_mass; frame_transfer_id; wool_transfer_id; cp_fit_material; A | frame_feed_area / A; fit_feed_mass / A | |
| fit_exit_calc | retention_accessories; fit_reusable_exit; fit_wool_waste | accessory_mass = accessory_opening + accessory_receipts - accessory_closing - accessory_returns - accessory_external_handover, after actual instruction activation; fit_reusable_mass = sum external reusable exits; fit_waste_mass = sum unusable removals and fitting-owned captured cleanup residue. Normalize each by A; refitting within the lot is an internal loop and each removed portion has one disposition. accessory_returns and accessory_external_handover are mutually exclusive and neither includes accessory_closing; accessory_mass includes actual discarded accessory losses, recorded once through fit_accessory_packaging_waste rather than subtracted again. | accessory_opening; accessory_receipts; accessory_closing; accessory_returns; accessory_external_handover; accessory_identity; accessory_instruction; removal_event; reuse_or_discard; fit_reusable_mass; fit_waste_mass; cp_fit_material; A | accessory_mass / A; fit_reusable_mass / A; fit_waste_mass / A | |
| electricity_calc | survey_electricity; cutting_electricity; fitting_electricity | For each interval, meter_to_kWh_factor = 1 for kWh, 1/1000 for Wh and 1/3.6 for MJ; any other meter unit needs a documented conversion factor and conversion_evidence. corrected_energy = (meter_end - meter_start) * multiplier * meter_to_kWh_factor; derive allocation_share = this consumer weight / sum(all consumer weights) from consumer_weights and actual_runtime/observed_power or retain the documented direct submeter assignment. Under the weight method, sum(all consumer weights) must be positive; zero or unknown total weights or missing consumers require a data gap or another reviewed attribution basis, never 0/0 or automatic share 1. Direct submeters may use an explicit independent node assignment without undefined weight division. consumer_energy = corrected_energy * allocation_share; sum consumer_energy for the respective node into survey_energy, cut_energy or fit_energy and divide its numerator by A. All consumer shares, including outside-scope consumers, sum to one. Use direct submeter readings where available; measured runtime/power weights are fallback evidence, not additional energy. | meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cp_survey_energy; cp_cut_energy; cp_fit_energy; A | survey_energy / A; cut_energy / A; fit_energy / A | |
| release_calc | cut_airborne_particles; fit_airborne_particles | For each independently identified direct air release, mass_kg = sum(background_corrected_concentration_mg_m3 * actual_source_flow_m3_s * interval_duration_s) / 1000000 only for representative actual source-boundary intervals with compatible gas_state_basis and source_coverage_evidence. actual_source_flow_m3_s is the full environmental source stream, never sampling-pump flow; sampled_air_volume is sample-analysis evidence only. Concentration times sampler volume gives sample mass, not the whole event release. Alternatively use measured_total_release_kg from a validated total_release_method, or a fully supported source-specific release_algorithm with actual activity and factor_records. Diffuse/room or worker-exposure samples require an independently validated source-flux bridge before they can establish total released mass. Retain measurement_scope, source_boundary, method, uncertainty and control_factor_basis; do not apply capture correction again to a downstream release measurement or factor that already contains it. Unknown source coverage remains a gap, not zero. Sum actual event masses by substance_or_composition, particle_size_basis and receiving_air_medium into cut_air_mass or fit_air_mass; divide by A once. Captured waste is excluded. Retain original source and background concentration observations, validated background_correction_method and source_flow_measurement_evidence; the correction and actual source flow must be independently supported. | measurement_scope; source_boundary; background_corrected_concentration_mg_m3; actual_source_flow_m3_s; interval_duration_s; gas_state_basis; source_coverage_evidence; measured_total_release_kg; total_release_method; control_factor_basis; sampled_air_volume; method; uncertainty; release_algorithm; factor_records; substance_or_composition; particle_size_basis; receiving_air_medium; cp_cut_air; cp_fit_air; A; measured_source_concentration_mg_m3; measured_background_concentration_mg_m3; background_correction_method; source_flow_measurement_evidence | cut_air_mass / A; fit_air_mass / A | epa-eiip-sample-source-flow |
| mass_conversion_calc | delivered_stone_wool; cut_slabs_transfer; cut_wool_feed | Where actual weighing is unavailable, mass_kg = sum(actual piece volume derived in m3 from measured piece_dimensions or installed_piece_geometry * documented_density_kg_per_m3); retain dimensional records, offcut geometry, density source and uncertainty. Supplier pack mass is usable only for the actual declared grade and count. | piece_dimensions; installed_piece_geometry; grade; density_evidence; installed_density_evidence; documented_density_kg_per_m3; pack_mass; piece_count; cp_cut_material; cp_fit_material | material_mass_kg | |
| cut_balance_calc | delivered_stone_wool; cut_slabs_transfer; cut_reusable_exit; cut_wool_waste; cut_airborne_particles | Check gross_slab_draw + opening_cut_wip = cut_transfer_mass + cut_reusable_exit_mass + cut_waste_mass + cut_air_mass + closing_cut_wip + unexplained_difference. Opening/closing intact-slab stock is distinct from cut-piece WIP. Where direct release evidence is absent, retain unknown release/difference as a data gap rather than zero or exact closure. Resolve material differences against measurement uncertainty; internal recutting is not an additional external feed or exit. | gross_slab_draw; opening_cut_wip; cut_transfer_mass; cut_reusable_exit_mass; cut_waste_mass; cut_air_mass; closing_cut_wip; cp_cut_material; cp_cut_air | cutting_mass_balance; unexplained_difference | |
| fit_balance_calc | cut_wool_feed; fit_reusable_exit; fit_wool_waste; fit_airborne_particles | Check fit_feed_mass + opening_wool_wip = installed_wool_mass + fit_reusable_mass + fit_waste_mass + fit_air_mass + closing_wool_wip + unexplained_difference. installed_wool_mass includes only wool in finally accepted apertures, obtained by traceable actual weighing or installed piece geometry times documented same-grade density for that accepted portion; exclude accessories. closing_wool_wip includes installed wool in unaccepted or rejected apertures that has not yet been removed, plus other end-of-period wool awaiting work, and excludes installed_wool_mass and all already recorded exits; assign each physical portion to one mutually exclusive pool. Refitting loops do not add new feed. Where release evidence is absent, retain unknown release/difference as a gap rather than claiming exact closure or zero. | fit_feed_mass; opening_wool_wip; installed_wool_mass; installed_piece_geometry; installed_density_evidence; fit_reusable_mass; fit_waste_mass; fit_air_mass; closing_wool_wip; cp_fit_material; cp_fit_air; aperture_id; final_acceptance_record; installed_acceptance_status | fitting_mass_balance; unexplained_difference | |
| shared_service_calc | survey_shared_access_service; cut_shared_access_service; fit_shared_access_service | For each actual asset contract period, availability_hours = documented billed quantity times its traceable h conversion, or elapsed contracted seconds / 3600; never assume a working day equals 8 h. Compute each beneficiary weight from recorded actual use/activity on a declared basis; allocation_share = beneficiary weight / sum(all beneficiary weights). If all weights are zero or beneficiaries unknown, document another reviewed attribution basis or retain a data gap. Include outside-scope beneficiaries and assign unused availability burden explicitly. Node shared_hours = sum(availability_hours * allocation_share); normalize each node numerator by A. Supplier-included energy, setup/removal, maintenance or capital burden must not be added twice. | actual_equipment_identity; supplier_contract; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; cp_survey_shared_service; cp_cut_shared_service; cp_fit_shared_service; A | survey_shared_hours / A; cut_shared_hours / A; fit_shared_hours / A | |

| accessory_waste_calc | fit_accessory_packaging_waste | accessory_waste_total_mass = sum(accessory_waste_mass) + sum(accessory_packaging_waste_mass) by mutually exclusive actual material/event; exclude all wool waste, reusable exits and closing stocks; divide each resolved material numerator by positive same-lot A. | accessory_waste_mass; accessory_packaging_waste_mass; accessory_waste_event; accessory_waste_material; accessory_waste_custodian; accessory_waste_destination; cp_fit_material; A | accessory_waste_total_mass / A | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_fit | all product and waste rows | Verify actual material/state/destination identities before final dataset exchanges; a generic wool, asbestos-labelled translation or manufactured slab flow cannot represent the installation service. Material umbrellas require actual resolved exchanges. | Product delivery sheets; selected-system instructions; actual identity verification |
| geometry_quality | accepted area and transfers | Same lot and cavity ids connect surveyed ready geometry, actual frame handoff and final accepted area; no frame member, duplicate face, rejected work or purchased slab area in A. | cp_survey_area; cp_fit_material; cp_fit_area |
| material_reconciliation | slab cutting and fitting | Reconcile gross slab draw to cut transfers, reusable exits, wool waste and supported direct release, with WIP and measurement uncertainty; fitting feed reconciles to incorporated wool, WIP, reusable exits, waste and releases. Installed mass is an actual weighing or declared dimension-density diagnostic, not an added service output. | Stock and transfer ledger; piece geometry/density records; receiver receipts |
| complete_period | all nodes | Cover the entire named lot from starting survey to final cleanup, including failed cuts, fitting rework, changeovers and all relevant receipts/stock changes. Disclose missing events, imputed quantities and uncertainty. | Timestamped node records and acceptance chronology |
| shared_ownership | shared electricity and cleanup | Retain interval start/end, all consumers, weights, shares, ownership and bill inclusion. Record each physical event once even when multiple nodes reference its evidence. | Node meters; shared-event ledger; full consumer reconciliation |
| provisional_range_use | all screening ranges | Provisional reasoned screens are neither default inventory values nor factual bounds, performance thresholds or automatic acceptance/rejection criteria. Investigate outliers against raw records; establish empirical guardrails from independent reviewed lots. | Explicit range metadata; external or independently reviewed future reference sample |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| service_gate | reference product | Check positive net A, actual pre-enclosure acceptance and declared slab/system qualifiers; output only accepted insulated cavity area. A manufactured insulation material flow is incompatible with this service gate. | `rockwool-thermal-frame-slab-installation-2025` |
| aperture_and_fit | aperture_survey; fit_acceptance | Check actual clear-aperture measurements, gap/compression inspection and final disposition of every rejected aperture. Rework adds real burdens and cannot inflate A. | `rockwool-thermal-frame-slab-installation-2025` |
| transfer_and_stock | slab_cutting; fit_acceptance | Reconcile paired frame_transfer and wool_transfer ids, units, quantities and states. Check stock terms, exclusive returns/external handovers, WIP and mass balance. Do not subtract returned mass twice across gross physical and diagnostic net accounts. | |
| condition_validation | retention_accessories; all conditional rows | Require actual activation evidence; documented absence permits zero, missing evidence is a data gap. Resolve actual accessory/packaging material and direct-release identities before final exchange creation. | `rockwool-thermal-frame-slab-installation-2025` |
| node_ownership | all nodes | Check production-lot and period coverage, cut/fit rejection paths, cleanup ownership and shared-meter shares across all consumers. Reconcile shares to one and prevent repeated whole-site or supplier-included burdens. | |
| thermal_claims | reference qualifiers | Check thickness, density and conductivity declaration conditions. A slab lambda or its thickness/lambda ratio cannot alone justify whole-wall thermal performance or building-life claims. | |
| range_validation | all flow cards | Verify quantities against original records and declared algorithms. Explain provisional-screen outliers; do not replace missing records with a range midpoint or label these reasoned intervals observed data. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for the declared installation service; downstream process and lifecyclemodel projections retain the same boundary and accepted-area reference |
| downstream_use | secondary_dataset; background_dataset, only when the supplied service scope and quality match the receiving study |
| allowed_use | Site/period-specific friction-fit unfaced semi-rigid stone wool installation into equivalent accepted open wall-frame cavities with disclosed upstream inputs and downstream treatment ownership |
| excluded_use | Generic all-insulation average; manufactured wool inventory; complete wall/building thermal performance; asbestos, glass-wool/foam/blown systems; frame construction, enclosure or exterior render |
| required_metadata | PCR id/version; geography/site/lot/period; net-area and acceptance records; incoming frame condition; slab identity and grade; thickness/density/conductivity bases; manufacturer instruction edition; equipment/electricity mix; conditional accessories; stock and transfer ledger; waste receivers/routes; upstream and downstream dataset ownership |
| required_quality_disclosure | Verified and unresolved identities; measured versus calculated records; coverage and data gaps; conversion uncertainty; provisional screening status; rework and rejected work; shared allocations; excluded transport/treatment/capital responsibilities; suitability limits |
| update_trigger | Changed slab system, frame interface, installation/retention route, handover gate, source instructions, electricity or waste route, evidence quality or accepted identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `rockwool-thermal-frame-slab-installation-2025` | handbook | ROCKWOOL, Thermal Frame Slab 32 installation guide, issue 23.10.2025, version 2.00, pages 1–3. https://www.rockwool.com/syssiteassets/rw-uk/downloads/installation-guides/thermal-frame-slab-32-installation-guide.pdf | Current route evidence: frame checks, actual aperture measurement, cutting and friction fitting, gap inspection and vacuum cleanup; named-product dimensions and allowances remain product-specific, not universal quantity defaults |
| `epa-eiip-sample-source-flow` | official_guidance | US EPA, EIIP Volume II Chapter 2, Preferred and Alternative Methods for Estimating Air Emissions from Boilers, printed p. 2.4-13 dated 8 January 2001, equation 2.4-12; https://19january2021snapshot.epa.gov/sites/static/files/2015-08/documents/ii02.pdf | Supports only the distinction between sampler gas volume and full source flow when deriving emitted mass from concentration. Boiler/stack methods, factors and example values are not adopted for installation dust or diffuse releases; actual source-specific method and event coverage remain required. |
