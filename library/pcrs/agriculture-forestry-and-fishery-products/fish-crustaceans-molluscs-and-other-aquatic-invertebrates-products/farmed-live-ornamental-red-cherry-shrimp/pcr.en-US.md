---
pcr_id: pcr.farmed-live-ornamental-red-cherry-shrimp
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---
# Farmed live ornamental red cherry shrimp

## 1. Scope and Applicability
This PCR governs foreground data production for captive-bred Neocaridina davidi, using the Buenos Aires source-context route of breeding, egg incubation, direct hatching and juvenile growout in dechlorinated freshwater plastic aquaria with actual aeration, heating, light, Java moss and formulated tropical-fish feed. It ends at the first physical ornamental recipient's receipt of whole live never-frozen animals. Sganga (2019) supports experimental captive production; it does not demonstrate a commercial dispatch. Each application must establish the actual live collection, condition/destination sorting, bounded holding or evidenced bypass, protective presentation and complete pre-receipt logistics through primary records.

Chapter 5 plastic-refuge/water-schedule/three-diet trials are outside the selected moss route. No planktonic larval-rearing phase is invented. Experimental zero-degree anesthesia, sacrifice, freezing and biochemical sampling are neither production harvest nor mandatory quality control for this live product. Exclude wild shrimp, ornamental fish, other species, food products, dead/frozen animals as reference output, and post-receipt breeding/use. A lower-grade live animal with an intended ornamental destination remains a product. No culture density, temperature, feed rate, age, breeding yield, survival factor, health threshold or safety, legality, welfare or disease-free claim is prescribed.

## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-ornamental-red-cherry-shrimp |
| classification_refs | cpc:3.0:04913; narrower |
| covered_products | Captive-bred whole live never-frozen Neocaridina davidi for ornamental use from the selected moss-based freshwater plastic-aquarium route, accepted at first physical recipient |
| excluded_products | Wild organisms; fish; other species; food or preserved products; laboratory sacrificed/frozen samples; chapter 5 alternative experimental variants; post-receipt use |
| representative_product | Live ornamental red cherry shrimp, Neocaridina davidi |
| production_route | Captive breeding/egg incubation/direct hatching/juvenile growout; independent live physical collection; condition/destination sorting; actual bounded holding or evidenced bypass; presentation; all pre-receipt logistics |
| market_state | Whole live ornamental, native body and appendages retained, never frozen; actual count/size/condition and acceptance state declared |

## 3. Reference Flow
### Functional Unit
| Field | Value |
| --- | --- |
| What | Accepted whole live ornamental Neocaridina davidi at first physical recipient |
| How much | 1 kg accepted net animal wet mass |
| How well | Whole live never-frozen animals with native appendages; actual condition, size/grade, count and ornamental destination recorded; carrier water/moss/packages/incidentals excluded |
| How long or cycle | Declared complete cohort and reporting periods, including broodstock service, egg incubation/direct hatching, growout, failed batches, open/closing stock, collection and all pre-receipt events; no fixed age or period length |
| reference_flow_link | `accepted_live_shrimp` |

### Reference Flow Object
| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live ornamental red cherry shrimp at first physical recipient |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Neocaridina davidi; captive-bred origin and supplier/ancestry boundary; Buenos Aires source-context moss-based dechlorinated freshwater plastic-aquarium route; actual site and production period/cohort; whole live never-frozen ornamental state; native appendages retained; actual count and size/grade/condition; animal net wet-mass method and carrier/free-water exclusion while retaining animal body water; actual live collection method; actual holding activation or evidenced bypass; all pre-receipt logistics; first physical recipient and receipt evidence; mortality/returns/open and closing stock; broodstock/shared-service attribution and sensitivity |

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | A is accepted net animal wet mass of the same received live lot in kg, using cp_delivery; exclude carrier/free water, plants, containers and incidental matter. Use calibrated tare-controlled direct weighing or a documented representative same-lot count-and-weighed-sample estimate with sampling uncertainty; do not infer species-average body mass. Record live state at receipt independently. |
| `native_units` | all inventory rows | Actual instance property | Native unit | Retain electricity as energy, transport as its service unit, gases/materials as their verified property and unit; never convert services or electricity into kg. Water is recorded in kg here; volume measurements require recorded same-condition density and conversion evidence. |
| `animal_count` | all animal rows | Mass and supplemental count | kg; individuals | Record animal mass and count independently at each handoff; sample-derived mass requires same-lot live-state and size/grade representation, tare/drain method, sample size and uncertainty. Retain commercial per-individual information; no count-to-mass constant is supplied. |
| `water_and_substance_basis` | carrier water, residues and emissions | Actual substance property | Native unit | Separate animal, water, feed, moss and incidentals. Internal managed water is not new environmental abstraction; supplied water is product, environmental abstraction is elementary. Emissions require individual substance, chemical or element basis, fossil/biogenic carbon provenance and receiving medium; water return is distinct from pollutants. |

## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Received broodstock and their supplied ancestry burden, attributable opening captive stock, supplied freshwater plus independently recorded actual dechlorination inputs/operations, feed/Java moss/materials and shared assets at the actual culture site |
| starting_condition_role | Disclosed foreground entry of managed breeding stock and inputs, not a zero-burden biological origin |
| product_classification_scope | Captive-bred live ornamental crustacean subset of cpc:3.0:04913 |
| recursive_input_rule | Same-category received/returned/retained animals retain cohort, quantity and inherited burden. Declare the upstream stopping boundary; never recurse indefinitely or reset broodstock/opening stock to zero. Internal stock transfers are not new purchases. |
| upstream_dataset_requirement | Require compatible supplied-stock, feed, water treatment, electricity, material, infrastructure and service datasets with boundary/quality disclosure; record unresolved upstream gaps instead of excluding burdens |
| disclosure | Site, supplier/ancestry and opening inventory, actual cohort/periods, all node activations, animal and water transfers, attribution drivers, assets/lifetimes/replacement/cleaning, pre-receipt service coverage, physical recipient gate, gaps and sensitivity |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_managed` | managed_biology | Breeding/incubation/direct hatching/growout are managed biological production, indexed by actual cohort and tank-period. Received stock, feed, moss as substrate/partial food, water conditioning and energy are management inputs with distinct roles. No unmeasured biofilm/moss consumption is invented as manufactured feed. | sganga-red-cherry-2019 |
| `sb_collection` | live_collection | Live physical removal from the culture context has its own operation/times/equipment and handoff T1, independently of growth. Record co-collected water/moss/incidentals entering sorting and every animal loss/return. Laboratory sacrifice is excluded. | sganga-red-cherry-2019 |
| `sb_sort` | live_sorting | Sorting receives unsorted live animals plus actual incidental matter; identify every accepted grade, alternate live destination, returned/retained animal and dead/waste output, with exact handoff and independent acceptance evidence. Do not classify lower grade or rejected-for-one-buyer animals as waste automatically. | |
| `sb_hold` | live_holding | Activate only an evidenced bounded live-maintenance intervention after sorting, with start/end, actual conditions/resources and outgoing live state T3. Otherwise document direct bypass T2B into presentation. Unknown holding state is an evidence gap, not bypass. No survival or duration guarantee follows. | |
| `sb_presentation` | live_presentation | Enclose/protect actual live animals using documented carrier freshwater and packaging/reusable containers; retain animal and carrier/package identities separately. T4 is the outgoing live presentation state. Distribution belongs to delivery, not presentation. | |
| `sb_delivery` | recipient_delivery | Include every actual movement, waiting/transfer and live-maintenance event before first physical ornamental recipient custody, whatever payer/operator/invoice boundary. End only at documented physical receipt; include pre-receipt mortality/returns/rejections and package/water disposition. | |
| `sb_events` | all_nodes | Include actual failed/no-output cohorts, cleaning, changeover, replacements, termination, usable alternate products, recovered materials and wastes. Assets/aeration/heating/light shared by nodes or periods have one owner and a disclosed service boundary. No universal lifetime or free reusable container is assumed. | |
| `sb_environment` | actual_exchanges | Apply collection obligations by adding one independent card per actual exchange only after observations. Separate treatment waste from direct environmental water return and individual pollutants; no unsupported environmental credit. Complete service datasets exclude duplicate component energy, assets, fuel and releases. | |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_biology | Captive breeding and juvenile growout | required | Selected moss-based route with actual cohort/tank-period records | Managed biological production | Live stock ready for collection T0 plus actual closing stock, remaining reproductive service carried to future cohorts and intended alternate products |
| live_collection | Independent live physical collection | required | Actual removal operation required for delivered lots | Harvest boundary | Unsorted live animals T1, actual co-collected matter and returns |
| live_sorting | Condition and destination sorting | required | Actual live-product route | Grading boundary | All declared grades/destinations including T2H or T2B |
| live_holding | Bounded live maintenance | conditional | Actual documented post-sort intervention before presentation; no automatic activation | Preservation boundary | Live held animals T3 and all alternative/loss states |
| live_presentation | Carrier-water and protective presentation | required | Actual enclosure/protection recorded | Presentation boundary | Whole live presented animals T4 with separate water/package handoffs |
| recipient_delivery | All logistics through physical receipt | required | Every actual leg including on-site physical movement, or evidenced recipient collection at site | Delivery boundary | Accepted net whole live reference animals plus other receipt destinations |

Production mode is cohort/batch breeding and growout with overlapping tank-periods where observed, not an assumed continuous yield. The records distinguish broodstock maintenance, incubation/hatching, growout, collection, any holding, presentation, delivery, cleaning/changeover and termination periods. Shared tanks/aeration/heating/lighting, facilities, equipment and containers require service/consumer ledgers.

Each card's ordinary quantity is the attributable actual exchange divided by accepted same-lot mass A, per 1 kg reference flow. This does not fix internal animals, water, energy or services at 1 kg. T0→T1→T2H→T3→T4 is the holding path; T0→T1→T2B→T4 is the evidenced bypass. Sender/receiver use identical transfer ids, live state, count and animal mass. CW1/CW2H/CW2B/CW3/CW4 carry managed freshwater separately; IM1 carries actual co-collected incidental matter. R-<node>-<instance> returns live stock to managed biology, with equal receiving records. RW-<node>-<instance> returns reusable carrier/moss/material to managed biology; other destinations need paired own-node instance records. Transfers never generate new burden or duplicate upstream abstractions.

An umbrella card requires individual instance identities/destinations/properties/native units and its own row-instance id. No unresolved umbrella acquires a fixed UUID. Optional absence requires evidence; missing observations are not zero. On every card, symbolic U_<row-instance> is an unestablished upper uncertainty bound to be independently supported from primary observations and sensitivity before final dataset use. The symbolic 0..U interval is reasoned uncertainty, neither an empirical range nor a universal cap. Actual amount evidence remains collected records. Each node's collection protocol governs all its card instances and paired handoffs.

### Process: Captive breeding and juvenile growout (`managed_biology`)

#### Inputs

##### Product flows

###### Received captive breeding animals (`received_broodstock`)
Record supplier receipt, ancestry boundary, animal count/state and attributable wet mass; retain upstream burden, reproductive service and replaced animals.

- Selected flow: Whole live captive Neocaridina davidi breeding stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual received_broodstock instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_received_broodstock_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Opening managed animal stock (`opening_stock`)
Carry cohort-specific opening broodstock/juvenile mass, counts and prior burden from the immediately preceding closing ledger; no new purchase or free origin.

- Selected flow: Opening captive Neocaridina davidi stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual opening_stock instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_opening_stock_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Returned live animals from downstream nodes (`returned_live_stock`)
Instantiate each R-<node>-<instance>, preserving sender live condition, animal mass/count, receiving custody and attached burden; quarantine or management services only if actually recorded, without prescribing health treatment.

- Selected flow: Returned whole live Neocaridina davidi stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual returned_live_stock instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_returned_live_stock_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied culture and conditioning freshwater (`culture_water`)
Measure supplied freshwater and actual dechlorination inputs separately from internal recycled water; identify supplier and upstream treatment. Do not merge direct environmental abstraction. This supplied generic freshwater enters before separately modelled own-node conditioning; the flow identity certifies neither dechlorination, safety nor provider.

- Selected flow: Fresh water `f919c997-a3fc-4274-b239-9cbcd07d52ad`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual culture_water instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_water_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied formulated feed (`culture_feed`)
Measure actual feed delivered/issued by batch and formulation; TetraColor is historical route evidence, not a verified generic upstream identity or universal prescription.

- Selected flow: Formulated tropical-fish feed supplied for captive shrimp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual culture_feed instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_feed_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied living moss (`culture_moss`)
Record actual purchased/introduced live moss wet mass, supplier and role; internal growth/biofilm is not an invented supplied-feed exchange.

- Selected flow: Java moss supplied as culture substrate and partial food
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual culture_moss instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_moss_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Culture aeration heating and lighting electricity (`culture_electricity`)
Meter or document power/runtime and attributable energy for actual aeration/heating/light, avoiding purchased complete-service components.

- Selected flow: Electricity supplied for culture equipment
- Flow property / unit: Energy / kWh
- Amount rule: Record attributable actual culture_electricity instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_electricity_instance
  - Unit: kWh
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Live animals available to collection (`culture_ready_animals`)
T0: actual live animals released from growout to physical collection; retain cohort/count/wet mass, not fixed to final A. Distinguish growth from removal.

- Selected flow: Live captive Neocaridina davidi ready for collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual culture_ready_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_ready_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retained broodstock juveniles and future production stock (`closing_stock`)
Record actual closing live cohorts/broodstock/juveniles with carried service burden and next-period link; future unhatched offspring are service allocation commitments, not fictional delivered animals.

- Selected flow: Closing retained captive Neocaridina davidi stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual closing_stock instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biology`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_closing_stock_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Independent live physical collection (`live_collection`)

#### Inputs

##### Product flows

###### Animals entering live collection (`collection_live_input`)
Receive T0 with same cohort/live state/count/wet mass as culture_ready_animals; record actual collection method and operation boundary.

- Selected flow: Live captive Neocaridina davidi ready for collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual collection_live_input instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_live_input_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Unsorted live collected animals (`collected_unsorted_animals`)
T1: actual live collected animals entering sorting, with cohort, count, net animal wet mass, condition and custody; harvesting is physical removal, not laboratory sacrifice.

- Selected flow: Unsorted whole live collected Neocaridina davidi
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual collected_unsorted_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collected_unsorted_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected managed carrier freshwater (`collection_carrier_to_sort`)
CW1: actual carrier freshwater sent to sorting, separate from animal and incidental mass; same quantity/state at sorting input.

- Selected flow: Managed freshwater co-collected to sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual collection_carrier_to_sort instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_carrier_to_sort_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collection live returns (`collection_returned_animals`)
R-live_collection-<instance>: actual uncollected/returned live animals handed back into managed stock; exact mass/count/state and burden match returned_live_stock.

- Selected flow: Whole live collection returns to culture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual collection_returned_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_returned_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Condition and destination sorting (`live_sorting`)

#### Inputs

##### Product flows

###### Unsorted animals at sorting (`sorting_animals`)
Receive T1 unchanged in transfer mass/count/live state, then observe actual size/condition/destination classes without prescribed market thresholds.

- Selected flow: Unsorted whole live collected Neocaridina davidi
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual sorting_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorting incoming managed carrier freshwater (`sorting_carrier`)
Receive CW1 same state/quantity as collection_carrier_to_sort, record any independently supplied top-up in collect_sorting_resources.

- Selected flow: Managed freshwater co-collected to sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual sorting_carrier instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_carrier_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Live grade outputs for actual holding (`sorted_to_holding`)
T2H: instantiate every actual grade sent to active holding, with same count/mass/state at holding input. Do not count T2B for those animals.

- Selected flow: Sorted whole live Neocaridina davidi for bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual sorted_to_holding instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorted_to_holding_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live grade outputs bypassing holding (`sorted_bypass`)
T2B: only evidenced bypass; instantiate every actual grade entering presentation directly. No inference of bypass from missing holding records.

- Selected flow: Sorted whole live Neocaridina davidi for direct presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual sorted_bypass instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorted_bypass_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorted managed carrier water onward (`sorting_carrier_onward`)
Split CW2H to active holding and CW2B to evidenced direct presentation with exact separate quantities; CW1 plus new supply reconciles reuse, recovery, waste and direct return.

- Selected flow: Managed freshwater from sorting to holding or presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual sorting_carrier_onward instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_carrier_onward_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Bounded live maintenance (`live_holding`)

#### Inputs

##### Product flows

###### Sorted animals entering actual holding (`holding_animals`)
Receive T2H grades at exact mass/count/live state; record intervention start/end, responsible operator and actual conditions. Absent activation is evidenced, not assumed.

- Selected flow: Sorted whole live Neocaridina davidi for bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual holding_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Managed water entering holding (`holding_carrier`)
Receive CW2H quantity/state separately from animals; do not count CW2B here or re-abstract managed freshwater.

- Selected flow: Managed freshwater from sorting to holding or presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual holding_carrier instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_carrier_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Additional supplied holding water (`holding_supplied_water`)
Measure actual additional supplied freshwater and upstream conditioning; reconcile water exchange/returned quantities, without prescribing salinity, temperature or schedule. This supplied generic freshwater enters before separately modelled own-node conditioning; the flow identity certifies neither dechlorination, safety nor provider.

- Selected flow: Fresh water `f919c997-a3fc-4274-b239-9cbcd07d52ad`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual holding_supplied_water instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_supplied_water_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Holding electricity (`holding_electricity`)
Record actual holding aeration/heating/light energy, occupancy/time and metering or power/runtime; no assumed continuous intervention.

- Selected flow: Electricity supplied for live holding
- Flow property / unit: Energy / kWh
- Amount rule: Record attributable actual holding_electricity instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_electricity_instance
  - Unit: kWh
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Live animals after bounded holding (`held_live_animals`)
T3: actual live state/count/mass by grade at presentation handoff, with interval and condition evidence; no guaranteed survival or reference-mass forcing.

- Selected flow: Whole live Neocaridina davidi after actual bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual held_live_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_live_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carrier freshwater after holding (`holding_carrier_onward`)
CW3: actual carrier water reaching presentation, distinct from new supply, recycled water, waste and environmental return.

- Selected flow: Managed freshwater from holding to presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual holding_carrier_onward instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_carrier_onward_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Carrier-water and protective presentation (`live_presentation`)

#### Inputs

##### Product flows

###### Held live animals for presentation (`presentation_animals_held`)
Receive T3 only when holding operated, same animal mass/count/state; do not duplicate T2B for the same lot.

- Selected flow: Whole live Neocaridina davidi after actual bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual presentation_animals_held instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_animals_held_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorted live animals for direct presentation (`presentation_animals_bypass`)
Receive T2B only with evidenced holding bypass and identical state/mass/count; unknown actual state blocks a complete foreground package.

- Selected flow: Sorted whole live Neocaridina davidi for direct presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual presentation_animals_bypass instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_animals_bypass_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Existing carrier freshwater entering presentation (`presentation_managed_water`)
Receive CW3 or CW2B separately, preserving outgoing sender quantities/state; record split/replacement water and no new abstraction.

- Selected flow: Managed carrier freshwater entering presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual presentation_managed_water instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_managed_water_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Additional presentation freshwater (`presentation_supplied_water`)
Measure actual new conditioned carrier freshwater, supplier and any treatment inputs; exclude animal/moss/package mass and keep internal carrier separate.

- Selected flow: Supplied freshwater for ornamental animal presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual presentation_supplied_water instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_supplied_water_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole live animals in protective presentation (`presented_live_animals`)
T4: live animals handed to delivery with actual grade/count/net animal wet mass and package id; water and package travel separately in accounting.

- Selected flow: Whole live presented ornamental Neocaridina davidi
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual presented_live_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_live_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carrier freshwater accompanying animals (`presentation_carrier_to_delivery`)
CW4: actual carrier freshwater handed to delivery, separate from T4 animal mass and packages, with same incoming receiver record.

- Selected flow: Managed presentation freshwater accompanying live animals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual presentation_carrier_to_delivery instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_carrier_to_delivery_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: All logistics through physical receipt (`recipient_delivery`)

#### Inputs

##### Product flows

###### Presented live animals entering delivery (`delivery_animals`)
Receive T4 exact count/live state/net wet mass at dispatch and every custody transfer, regardless service payer; record all legs and waiting intervals.

- Selected flow: Whole live presented ornamental Neocaridina davidi
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual delivery_animals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_animals_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carrier freshwater entering delivery (`delivery_carrier`)
Receive CW4 same state/quantity as presentation_carrier_to_delivery; record actual water maintenance/replacement on each leg.

- Selected flow: Managed presentation freshwater accompanying live animals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record attributable actual delivery_carrier instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Range: Unestablished per-instance uncertainty bound; independent primary evidence required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_carrier_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole live ornamental reference animals at first receipt (`accepted_live_shrimp`)
Determine A under cp_delivery, retain actual live count/grade and physical receipt, exclude all water/moss/package/incidentals. The same accepted lot gives A/A = 1 kg; this is not a production yield.

- Selected flow: Whole live ornamental red cherry shrimp at first physical recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `mass-balance-identity`
- Range: Same-lot accepted reference identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | all_nodes | Prefer separately measured cohorts, grades, operations and service instances. Each animal or material has one transfer identity and burden owner; output at an internal handoff is not also a final independently sold output. No substitution or environmental credit is supplied. | |
| `al_broodstock` | managed_biology | Attribute received breeding stock, ancestry/opening burdens and adult maintenance across their actual reproductive service and intended outputs. Preserve service already consumed by current offspring, remaining service carried to future cohorts, replacement/death/termination and closing stock. Use evidenced breeder occupancy/biomass-time and reproductive-service records with a documented causal rationale; if no defensible causal driver exists, disclose the gap and test alternative time, biomass and output-value drivers rather than claiming completed attribution. Do not charge all current offspring while also carrying the same burden forward. | |
| `al_cohorts` | managed_biology | Trace actual incubation/direct-hatch/growout cohorts and overlapping tanks/periods. Allocate shared operating burdens by measured equipment use, occupied tank-time or another documented causal service driver; separate directly attributable feed/water first. Include unsuccessful/no-output cohorts, mortality, replacements, cleaning and changeover in their responsible service pool, rather than dropping them or dividing a failed period by zero. Carry to linked viable outputs or disclose unresolved allocation. | |
| `al_outputs` | all_intended_outputs | Enumerate every reference grade, alternate ornamental grade, transferred breeding/juvenile product, usable incidental and actual return/closing stock. After subdivision, use demonstrated causal biological/service drivers when possible. Where joint output burdens cannot be causally separated, document economic shares from comparable nonnegative producer-gate net-sales values, including declared retained-stock values, with price period/source and a strictly positive denominator. Zero, negative or unavailable values require a justified alternative driver and sensitivity; do not use profit ratios. Test mass and service-driver alternatives. Count is supplementary and not an unqualified equivalent for animals of different size. No hierarchy shortcut makes downgraded products waste. | |
| `al_shared` | assets_and_services | Maintain one service ledger for culture tanks, aeration/heating/light equipment, facility, collection/sorting/holding equipment, containers and each actual shared service; enumerate consuming nodes/cohorts/periods. Attribute installed/replaced/maintained assets over evidenced service life and actual use/capacity, using observed runtime/occupancy or physically justified driver. Include idle/failure/cleanup/termination shares and sensitivity to utilization and life; unsupported standard lifetimes or free infrastructure are prohibited. Shares plus carried service must reconcile to one pool. | |
| `al_packaging` | presentation_and_delivery | Single-use materials receive actual attributable production and treatment burdens. Reusable containers require actual service turns, cleaning/repair/replacement, losses, return movements and end-of-use evidence with a consistent service denominator and sensitivity; no unlimited reuse or omitted return logistics. Presentation owns package introduction; downstream movements do not repurchase it. | |
| `al_delivery` | recipient_delivery | Attribute actual pre-receipt legs using documented shipment composition, carrier water/package gross load, distance, capacity, empty/return movements and relevant service driver. Retain animal net mass for reference normalization. Complete transport or holding services replace covered components explicitly; uncovered components remain. All failed shipments and other destinations retain burdens. No payer or invoice boundary truncates transport. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
All protocols retain raw/native quantities before normalization. Each actual card instance records row id, identity, native property/unit, operator/site, cohort/period, time, transfer/receipt id, destination, live state/count/animal mass or material quantity, conditional activation, complete-service coverage, attribution share and measurement uncertainty. Zero requires evidence of actual absence. For conditional resource/emission umbrellas, retain separate records for every individual exchange and unit. A metered/measured numerator is collected_record; a power multiplied by runtime estimate, allocated/normalized electricity value or calculated emission requires an explicit actual-instance formula, measured input components, applicable factor/source/unit/basis and uncertainty, value_mode calculated_value and evidence_kind calculated_from_collection. Override the common umbrella amount metadata on each calculated instance; never silently label a calculation as a direct measurement. Samples are tied to the same live lot/grade with calibrated tare, carrier-water exclusion and sampling uncertainty; measurements never require source-study sacrifice.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_biology | managed_biology | All biology cards and actual instances | Cohort stock ledger, meters, purchase and asset records | cohort; broodstock supplier/ancestry; opening/closing stock; count; animal wet mass; input quantities; hatching/growout events; feed/moss/water; energy; asset/runtime; returns; mortality; cleanup; service driver; uncertainty | Record actual captive cohorts/periods, calibrated stock/sample masses and counts, supplied feed/moss/water, energy metering or documented power/runtime, conditioned-water inputs, shared asset/service and waste/release evidence; reconcile opening plus arrivals and growth with departures/losses/closing stock, documenting biological mass changes | kg; individuals; kWh; each service/material native unit | Each input/stock/transfer/event and meter interval | Complete breeding/incubation/direct-hatch/growout and linked prior/future stock periods, including failed cohorts and termination | Actual culture site/tank and attributable suppliers | per 1 kg reference flow | Primary supplier and ancestry records; calibration/tare/sample logs; cohort balance; service-life/driver evidence; sensitivity and gap register |
| cp_collection | live_collection | All collection cards and actual instances | Operation and transfer record | collection id; culture cohort; start/end; method; CM0/T0/T1/CW1/IM1; live count/mass/state; incidental identity/mass; inputs; losses; returns; resources; uncertainty | Observe actual live physical removal; weigh/count animals independently of carrier water and incidentals, reconcile sender/receiver signed transfers and measured resource/service records; classify returned animals and recovered materials separately | kg; individuals; each actual instance native unit | Each operation and handoff | All collection operations feeding declared received lots, including failed operations | Actual culture-to-collection interface and operation | per 1 kg reference flow | Operation observations; paired transfer ledger; calibrated tare/sample records; losses and incidental destination evidence |
| cp_sorting | live_sorting | All sorting cards and actual instances | Grade and destination ledger | T1/CW1/IM1; grade criteria actually used; T2H/T2B; CW2H/CW2B; count/mass/state; incidental destination; returns/waste; resources; uncertainty | Observe each incoming live/incidentals stream and every actual destination; calibrated net mass/count with same-lot sample evidence where necessary; confirm holding activation or direct bypass from both interfaces | kg; individuals; each actual instance native unit | Each sorting lot, destination and resource event | All declared lots and sorting failures | Actual sorting site/operator | per 1 kg reference flow | Actual grade/acceptance records; paired transfers; measurements; evidenced holding/bypass; live-reject disposition |
| cp_holding | live_holding | All holding cards and actual instances | Intervention, meter and transfer record | activation; start/end; T2H/T3/CW2H/CW3; actual conditions; animal counts/masses/states; water; electricity; supplies/services; mortality; returns; uncertainty | Confirm bounded intervention from actual operator/time/resource records; observe live states at both interfaces and all grade/return/waste destinations, meter actual energy/water or document calibrated estimates; separately evidence bypass outside this node | kg; individuals; kWh; each actual instance native unit | Every actual holding interval/resource and handoff | All activated intervals including failed lots | Actual holding tanks/operator | per 1 kg reference flow | Time/condition logs; meter/runtime evidence; paired transfers; service exclusions; mortality and destination records |
| cp_presentation | live_presentation | All presentation cards and actual instances | Lot packaging and carrier-water record | T3/T2B; CW3/CW2B; new water; T4/CW4/PK4; animal count/mass/state; package id/material/reuse; inputs; rejects/returns; uncertainty | Reconcile actual held or evidenced bypass animals; weigh/count live animals separately from carrier freshwater and packages; record actual materials/services, reuse/service turns, cleanup, replacement and all outgoing destinations | kg; individuals; each actual instance native unit | Every actual lot/package, water addition and handoff | Complete presentation events for declared lots including failures | Actual presentation site/operator | per 1 kg reference flow | Paired handoffs; calibrated tare/sample records; material purchase/issue and reusable service ledger; wastewater/destination evidence |
| cp_delivery | recipient_delivery | All delivery cards and final reference | Shipment/custody, physical receipt and net-mass records | T4/CW4/PK4; all legs/operators/times/distance/load; actual resources; covered service components; recipient receipt; live count/state/grade; accepted net animal mass A; carrier/package/incidentals tare; sample count/mass/uncertainty; rejected/returned/dead quantities; destinations | Trace every movement/wait/maintenance through first physical recipient; confirm signed actual custody/receipt and live acceptance. Determine same-lot A with calibrated tare-controlled weighing excluding water/moss/package/incidentals or representative same-lot count-and-weighed-sample records with uncertainty; preserve commercial count. Reconcile all outcomes and document all pre-receipt services/own-operated activities | kg; individuals; kWh; tonne-kilometre or actual native service unit; each instance native unit | Every leg/custody event, maintenance input and physical receipt | Dispatch through first physical receipt, including failed shipments and actual returns/service periods | All actual pre-receipt sites/operators, including recipient pickup at culture site | per 1 kg reference flow | Calibrated tare/sample records; live physical receipt/custody evidence; route/load data; actual component coverage; waste/returns and failed-shipment reconciliation |

### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | Attributable actual instance quantity divided by A gives its native quantity per 1 kg reference flow; A is the accepted same-lot net animal wet mass in kg. Keep every transfer's actual numerator; no internal-feed normalization to 1 kg. | actual instance quantity; attribution share; A; cp_delivery | Native-unit quantity per 1 kg reference flow | mass-balance-identity |
| final_reference | accepted_live_shrimp | Accepted output normalization is A/A = 1 kg for the same accepted live lot with A greater than zero; the card's finite expression is 1 kg. This is a calculation from receipt records, not a fixed empirical yield. | A; cp_delivery | 1 kg accepted net live animal mass | mass-balance-identity |
| sample_mass | all animal rows | A recorded count multiplied by representative same-lot sampled mean net live animal mass estimates that lot's mass only; retain sampling design, weighed sample/count, live condition/grade representation, tare/drain method and propagated uncertainty. No species-wide conversion is supplied. | lot count; sample animal mass; sample count; sampling uncertainty; own-node protocol | Estimated same-lot animal mass with uncertainty | |
| stock_service | managed_biology | Reconcile carried opening burden plus new attributable breeding service against current offspring, intended alternate products, actual losses and carried closing/future service. Biological growth is not a purchase; future service is a ledger commitment rather than hypothetical animal output. | cohort/period stock and events; service pool; causal driver; sensitivity | Reconciled current and carried stock/service shares | |
| instance_range | all non-reference cards | Establish U_<row-instance> in the actual native unit from independently reviewed observations, limits and sensitivity. Until established, 0..U is symbolic reasoned uncertainty only; a missing bound or conditional state blocks a final inventory value, not a default zero. | actual instance unit; observations; uncertainty evidence; sensitivity | Supported per-instance uncertainty bounds | |

### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | reference lot | Demonstrate species, captive origin, selected moss route, whole live never-frozen ornamental acceptance and first physical recipient; experimental source cannot substitute for application delivery evidence | Supplier/cohort and physical receipt records |
| dq_transfers | all nodes | Paired animal/water/incidental/package and return transfers agree in id, owner, quantity, native unit/state; all intended outputs, waste and closing stock are complete | Sender/receiver ledgers and balances with uncertainty |
| dq_periods | all cohorts and assets | Include failed batches, opening/closing stocks, cleaning/changeover/replacement/termination, future breeding service and all shared consumers; justify life/use drivers and sensitivity | Period and service ledgers |
| dq_bounds | all cards | Symbolic bounds and unknown conditional states are unresolved data needs, never measured ranges, universal caps or default zeros; retain quantity/identity gaps | Primary records, supported uncertainty and gap register |
| dq_services | all services | Match complete-service coverage to actual energy/assets/materials/releases and retain only uncovered components; each power-times-runtime or emissions calculation declares actual-instance formula/factor, measured components and calculated_value/calculated_from_collection metadata | Service boundary and component ledger |
| dq_identity | all actual exchanges | Verify concrete flow/property/unit support for each final exchange; retain conditional umbrella until observed instances exist; reference identity gap precludes publication | Compatible identity detail evidence and dataset records |
| dq_emissions | water/waste/emissions | Distinguish supplied versus abstracted water, internal/recovered carrier, treatment versus direct return, individual substances/medium and carbon provenance; no generic pollutants or duplicated service releases | Measurements or explicit reviewed factor/source, destination and chemical/element basis |
| dq_translation | bilingual PCR | Preserve every row/protocol/rule id, quantity/range/native-unit, actual condition and source meaning across both renderings | Per-card/manual parity audit |
| `collect_biology_resources` | `managed_biology`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual culture material or service instance. Instantiate actual dechlorination material, equipment/tank/facility service, cleanup/changeover or maintenance inputs in native units and roles; record shared consumers, service life, replacement and complete-service exclusions. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_biology_resources instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biology` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_biology_resources_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_recovered_managed_material` | `managed_biology`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recovered managed material returned to culture. Receive each RW-<node>-<instance> exactly as its sender quantity/state/property/unit; carrier freshwater is kg, other actual materials keep native units. No new environmental abstraction or recovery credit. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_recovered_managed_material instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biology` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_recovered_managed_material_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_matter_for_collection` | `managed_biology`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Managed collection carrier and incidental matter. CM0: actual managed water/moss/substrate/other matter handed from culture to collect_collection_managed_matter, with identical instance quantity/state/property/unit; reconcile water and moss opening/addition/closing stock without duplicating new supply. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_culture_matter_for_collection instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biology` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_matter_for_collection_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_biology_other_products` | `managed_biology`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended live culture product instance. Instantiate any live broodstock/juvenile/other culture product actually transferred to an alternate recipient, with count/state/destination and burden; no invented co-product or waste reclassification. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_biology_other_products instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biology` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_biology_other_products_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_biology_waste` | `managed_biology`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual culture waste instance for treatment. Separate dead animals, uneaten feed/moss/sludge, spent materials and wastewater sent to treatment; identify each waste/destination and actual mass, retaining water contents. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_biology_waste instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biology` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_biology_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_biology_release` | `managed_biology`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual culture water-return or pollutant instance. If direct environmental transfer occurs, record returned water separately from each identified pollutant substance, chemical/carbon basis and medium; distinguish fossil/biogenic carbon and avoid treatment-service duplicates. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_biology_release instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_biology` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_biology_release_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_managed_matter` | `live_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Managed collection carrier and incidental matter. Receive CM0 actual managed water, moss and other collected matter separately at removal, identical sender quantity/state/property/unit; reconcile source culture tank ledger, not an additional freshwater purchase. Water/solids in kg; other instances retain native units. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_collection_managed_matter instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_managed_matter_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_resources` | `live_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual live collection resource instance. Record actual net/container/equipment service, water top-up, energy or other operation inputs; separate actual instances and avoid double-booked culture assets/services. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_collection_resources instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_resources_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_incidentals_to_sort` | `live_collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Co-collected moss substrate or other incidental matter. IM1: actual separately measured matter entering sorting with species/material and intended disposition pending observation; do not assume only shrimp were collected. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_collection_incidentals_to_sort instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_incidentals_to_sort_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_other_live` | `live_collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Alternate live collection product instance. Record every actual independently intended live destination or grade handed to another recipient, with count/mass/state and own transfer; not waste merely because outside the reference lot. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_collection_other_live instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_other_live_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_recovered_material` | `live_collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recovered collection material returned to culture. RW-live_collection-<instance>: separately return actual water/moss/reusable material to collect_recovered_managed_material with same native units/state/quantity; do not overlap CW1/IM1. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_collection_recovered_material instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_recovered_material_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_waste` | `live_collection`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual collection waste instance for treatment. Record dead animals, debris and other actual discarded material or wastewater sent to treatment by separate identity/destination; reconcile operation losses. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_collection_waste instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_release` | `live_collection`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual collection water-return or pollutant instance. Record only actual direct transfers to environment, distinguishing water return and individually identified pollutant/medium/carbon basis; not managed internal water or treatment waste. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_collection_release instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_collection` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_release_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_incidentals` | `live_sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Co-collected moss substrate or other incidental matter. Receive IM1 same material/mass as collect_collection_incidentals_to_sort; classify each observed incidental destination, including usable products/recovery/waste/direct release. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_sorting_incidentals instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_incidentals_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_resources` | `live_sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual live sorting material or service instance. Record actual containers, instruments, electricity, top-up water and shared service consumed at sorting with native units and complete-service exclusions. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_sorting_resources instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_resources_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_other_products` | `live_sorting`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual intended sorting product or live return instance. Instantiate each alternate ornamental grade/recipient, retained live return R-live_sorting-<instance> to returned_live_stock, and usable incidental product with own handoff/mass/count where applicable; distinguish buyer rejection from death or waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_sorting_other_products instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_other_products_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_recovered_material` | `live_sorting`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recovered sorting material returned to culture. RW-live_sorting-<instance>: actual reusable carrier/moss/material sent to collect_recovered_managed_material, matching quantity/native unit/state; no overlap onward carriers or incidental products. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_sorting_recovered_material instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_recovered_material_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_waste` | `live_sorting`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting waste instance for treatment. Record each dead animal/discarded incidental/spent material/wastewater treatment destination; lower-grade live products are not automatically waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_sorting_waste instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_release` | `live_sorting`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting water-return or pollutant instance. Record direct water return separately from independently identified pollutants and receiving medium, retaining substance/carbon basis; do not substitute this for waste-treatment output. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_sorting_release instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_release_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_resources` | `live_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual live holding material or service instance. Instantiate any actual feed, moss, gases, treatment materials, equipment/container or maintenance services with identity/native unit, role and single burden owner; no health dose or oxygen prescription. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_holding_resources instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_resources_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_other_products` | `live_holding`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate live holding product or return instance. Record all actual alternate live grades/recipients and R-live_holding-<instance> returns to returned_live_stock with state/count/mass/burden; live rejects are not automatically dead waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_holding_other_products instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_other_products_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_recovered_material` | `live_holding`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recovered holding material returned to culture. RW-live_holding-<instance>: return actual reusable water/moss/container/material to collect_recovered_managed_material; retain identical receiver state/quantity/native unit. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_holding_recovered_material instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_recovered_material_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_waste` | `live_holding`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual holding waste instance for treatment. Record actual dead animals, feed/moss residues, spent material and wastewater sent to treatment with exact destination; include failed holding lots. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_holding_waste instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_release` | `live_holding`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual holding water-return or pollutant instance. Record direct environmental water separately from each observed pollutant with substance/chemical or element basis, carbon provenance and receiving medium; no environmental credit. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_holding_release instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_release_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_resources` | `live_presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective presentation material or service instance. Instantiate actual bag/container/closure/label/protective material, reusable service, energy or gases in native units, with actual reuse turns, cleaning, replacements and end-of-use handoff; no presumed material or oxygen choice. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_presentation_resources instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_resources_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_package_to_delivery` | `live_presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Protective presentation package instance handed to delivery. PK4: individual actual package/container instance state and native quantity handed to delivery; own reuse/burden/end-of-use ledger and paired input, never included in animal mass. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_presentation_package_to_delivery instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_package_to_delivery_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_other_products` | `live_presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate live presentation product or return instance. Record actual alternate grade/recipient or R-live_presentation-<instance> live return to managed stock, with same receiving count/mass/state and carried burden. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_presentation_other_products instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_other_products_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_recovered_material` | `live_presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Recovered presentation material returned to culture. RW-live_presentation-<instance>: actual reusable water/moss/package/material returned to collect_recovered_managed_material with paired native units/state/quantity; exclude CW4/PK4 already sent onward. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_presentation_recovered_material instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_recovered_material_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_waste` | `live_presentation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation waste instance for treatment. Record dead animals, rejected/spent packaging, residues and wastewater treatment destinations separately; reusable package return is not waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_presentation_waste instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_release` | `live_presentation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation water-return or pollutant instance. Record actual direct environmental water and separate identified pollutant/medium/basis instances; no hypothetical gas emission merely because a gas was supplied. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_presentation_release instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_release_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_packages` | `recipient_delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Protective presentation package instance handed to delivery. Receive PK4 identical package ids/native quantities/state; carry reuse ownership and end-of-use obligation without repurchasing the same package. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_delivery_packages instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_packages_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_resources` | `recipient_delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pre-receipt logistics or maintenance instance. Instantiate complete transport service in its verified service unit, or documented own-operated fuel/energy/assets/releases by leg; include actual water/gases/energy and other maintenance during waiting and transfer. Never count both complete service and covered components. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_delivery_resources instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_resources_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_live` | `recipient_delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate live delivery product or return instance. Record every actual lower-grade/alternative live receipt product and R-recipient_delivery-<instance> return to returned_live_stock, with count/mass/state/physical recipient and carried burden. Buyer refusal does not establish waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_delivery_other_live instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_other_live_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_carrier_disposition` | `recipient_delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual managed carrier freshwater disposition instance. Record each actual carrier-water handoff to recipient with receipt id or RW-recipient_delivery-<instance> return to collect_recovered_managed_material. Not animal reference mass or environmental abstraction; waste/direct return uses its respective row. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_delivery_carrier_disposition instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_carrier_disposition_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_package_disposition` | `recipient_delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective package handoff or return instance. Record each actual recipient package handoff/end-of-use custody, reuse return or RW-recipient_delivery-<instance> to collect_recovered_managed_material, with same paired native unit/quantity. No default free reuse or duplicate product burden. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_delivery_package_disposition instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_package_disposition_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_waste` | `recipient_delivery`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pre-receipt delivery waste instance for treatment. Record dead animals, actual waste packaging/material and wastewater to treatment before receipt; include failed shipments and allocate their burdens, excluding dead animals from accepted A. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Record attributable actual collect_delivery_waste instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_release` | `recipient_delivery`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual delivery water-return or pollutant instance. Only independently model own-operated direct water return and individual exhaust/pollutant substance/medium/carbon basis outside covered complete-service components; preserve factor/source and avoid fossil/biogenic conflation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Record attributable actual collect_delivery_release instance quantity divided by accepted same-lot mass A; retain each native numerator unit and actual transfer quantity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Unestablished per-instance uncertainty bound; independent primary evidence required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_release_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; symbolic bound is not an empirical range or universal cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | accepted_live_shrimp | Verify same-lot positive A, live receipt and exact net wet-animal basis, reference name/link/support, separate water/moss/package/incidentals and actual counts/grades; final A/A gives 1 kg only for accepted live output. | mass-balance-identity |
| `vr_route` | all_nodes | Verify complete managed-biology/collection/sorting/presentation/delivery records and actual holding activation or evidenced bypass; no planktonic phase, sacrifice/freezing or chapter 5 alternative trial is substituted into this live route. | sganga-red-cherry-2019 |
| `vr_handoffs` | all_transfers | Require paired CM0/T0/T1/T2H/T2B/T3/T4, CW1/CW2H/CW2B/CW3/CW4, IM1/PK4 and every R/RW instance as applicable, with exact state/unit/quantity/custody and no double reference output or unrecorded destination. | |
| `vr_outputs` | all_intended_outputs | Enumerate every actual live grade/recipient, breeding/juvenile alternate, usable incidental, return and retained stock, separately from mortality/residue/waste; output rejection alone does not justify waste classification. | |
| `vr_attribution` | all_periods_and_consumers | Reconcile broodstock/opening/future service, overlapping cohorts, failed/no-output events, shared assets/services, cleanup/replacement/termination and reusable containers; causal/economic choices need evidence and sensitivity, one burden owner and no double carried/current allocation. | |
| `vr_delivery` | pre_receipt | Prove first physical receipt and include every preceding movement/wait/maintenance regardless payer, including failed shipments; service coverage excludes duplicate components but not uncovered activities. | |
| `vr_instances` | all_card_instances | Every instance needs observed activation/absence, independent native property/unit, own-node protocol, identity/destination and attributable amount/uncertainty. U_<row-instance> and unknown actual state remain evidence gaps; no service kg coercion or search-top-hit binding. | |
| `vr_environment` | actual_releases_and_wastes | Require individual pollutant chemical/carbon/medium basis, water-return separation, treatment destination and service exclusions; no unverified discharge, factor or environmental credit. | |
| `vr_integrity` | PCR_and_dataset | Require current schema-valid deterministic projection, bilingual parity and selected-target checks; state performed/skipped checks and unresolved identities/ranges distinctly. Checker pass does not prove external identity verification, commercial completeness or publication readiness. | |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | Foreground data package with process/lifecyclemodel projections; secondary_dataset or background_dataset only after completed evidence/identity/quality review |
| downstream_use | Foreground ornamental shrimp data package and subsequent process/lifecyclemodel projections through the declared first physical receipt gate |
| allowed_use | Matching captive-bred Neocaridina davidi moss-route whole-live ornamental supply, with actual site/period, compatible upstream boundary and quality disclosure |
| excluded_use | Wild collection; fish or other species; food/frozen/dead products; chapter 5 alternative experimental trials; laboratory sacrifice; post-receipt use; extrapolated commercial scale or health/safety/welfare/legal guarantees |
| required_metadata | Species/origin/supplier/ancestry; actual route/site/cohorts/periods; starting stock; full node activation and transfer/state/quantity records; receiver receipt; water/package exclusion and counts; upstream coverage; burden ownership and service/component boundary; allocation choices/sensitivity; identity and uncertainty |
| required_quality_disclosure | Evidence coverage and gaps; measured/sample-estimated net animal mass; unestablished ranges; failed/open/closing stock; breeding/future service; infrastructure life/utilization/reuse; complete-service exclusions; all pre-receipt logistics; unresolved identity/support and non-publication readiness where applicable |
| update_trigger | Changed species/origin/route/market state/receipt gate; changed water/feed/moss/equipment or holding/presentation/logistics; improved primary/identity/range evidence; changed service life/reuse/allocation; newly established actual intended outputs |

## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| sganga-red-cherry-2019 | literature | Daniela Eliana Sganga, 2019, Universidad de Buenos Aires, Modeladores de la calidad de progenie en un crustáceo de interés económico, el camarón ornamental red cherry Neocaridina davidi. https://bibliotecadigital.exactas.uba.ar/download/tesis/tesis_n6688_Sganga.pdf ; general methods printed pp.19–21; breeding/offspring printed pp.47–49 | Qualitative captive breeding/direct-hatching/juvenile growth route, dechlorinated water/plastic aquaria/aeration/heaters/light/Java moss/TetraColor evidence; experimental scope only, no inventory defaults or commercial receipt proof; chapter 5 variants and laboratory sampling excluded |
| un-cpc-3-2025 | official_guidance | United Nations, CPC Version 3.0 explanatory notes, 2025, printed pp.53–54. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 04913 farmed live ornamental aquatic plants/animals scope and exclusions; narrower crustacean mapping context |
| mass-balance-identity | method_factor | Same-lot accounting identity: accepted net animal mass A divided by that same accepted mass A equals 1; measured exchanges divided by A retain their native numerator unit per kg reference | Exact final reference normalization and transfer/quantity accounting; no empirical yield, environmental factor or default conversion |
