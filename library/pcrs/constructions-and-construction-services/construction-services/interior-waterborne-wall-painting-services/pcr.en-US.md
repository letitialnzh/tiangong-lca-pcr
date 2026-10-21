---
pcr_id: pcr.constructions-and-construction-services.construction-services.interior-waterborne-wall-painting-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Interior waterborne wall painting services

## 1. Scope and Applicability

This PCR covers brush or roller application of waterborne architectural coatings to installed gypsum-board or plaster interior walls handed over ready for normal minor preparation. It includes minor cleaning and patching, the specified primer if used, all actual finish coats, drying, touch-up, tool cleanup and acceptance in one contractor campaign. Substrate manufacture and installation, extensive replastering, hazardous coating removal, exterior work, spray application, solvent industrial coatings, waterproofing, road markings and future maintenance repainting are excluded. This service boundary is an authored modelling choice; UFGS supports the preparation/application distinction rather than a universal coat count.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.interior-waterborne-wall-painting-services |
| classification_refs | cpc:3.0:54730 |
| covered_products | Accepted interior brush/roller waterborne wall painting contractor service |
| excluded_products | Paint manufacture; wall manufacture or installation; excluded routes in section 1 |
| representative_product | One m2 accepted waterborne-coated gypsum-board interior wall |
| production_route | Campaign-indexed minor preparation then brush/roller coating, drying, cleanup and acceptance |
| market_state | Completed contractor service at client acceptance, with coating system and substrate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed interior waterborne wall painting service |
| How much | 1 m2 |
| How well | Accepted to the declared project coating specification: substrate condition, colour, finish, hiding and specified film/build requirements; defects closed |
| How long or cycle | One campaign through specified drying and client acceptance; no assumed service life or future repaint cycle |
| reference_flow_link | `accepted_painting_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted interior waterborne wall painting service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | country and site; campaign dates; gypsum/plaster substrate and starting state; coating and primer product identities; actual layer count and area by coat; brush/roller method; finish and acceptance specification; drying regime; net area survey and deductions; cleanup destination |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_area` | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure accepted net wall surface area from verified dimensions or survey; deduct unpainted openings and record reveals separately. Coat area and rework-pass area do not enlarge accepted net area. |
| `wet_supply_mass` | waterborne_finish; waterborne_primer; repair_compounds | Mass | kg | Keep wet supplied product mass distinct from dry film solids and VOC mass. Convert volume using product-specific measured or supplier density on the same formulation and temperature basis. |
| `emission_identity` | finish_air_species; prepare_air_particles | Mass | kg | Keep substance or particle-size identity and receiving medium with each emission; total VOC content and captured dust are supporting records, not automatically elementary emissions. |
| `transport_work` | contractor_transport | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | Use Units of mass*length `838aaa21-0117-11db-92e3-0800200c9a66`, reference t*km factor 1. Calculate from attributable tonnes and kilometres; kg*km converts to t*km by dividing by 1000. Retain actual vehicle/load/route and avoid duplicate mobilization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Installed gypsum/plaster interior wall accepted for minor preparation; substrate ownership and prior works remain outside the service inventory |
| starting_condition_role | Existing parent surface condition, not a free wall-material input or output |
| product_classification_scope | A narrower service subset of CPC 54730 Painting services |
| recursive_input_rule | Subcontracted same-category painting must be represented once as a purchased verified service or decomposed foreground work, never both; retain subcontract boundaries and area |
| upstream_dataset_requirement | Link coating, primer, repair, water, electricity, consumables and transport inputs to compatible upstream datasets; missing links remain explicit. Do not import wall production into the service reference |
| disclosure | Report starting wall condition, excluded prior works, supplier-dataset transport coverage, shared asset attribution, hazards and excluded future maintenance |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `service_gate` | all processes | Include campaign minor preparation through accepted coating, cleanup and defect closure. Installed substrate manufacture/installation stays outside; document deviations before reuse. | `ufgs-architectural-coatings-2026` |
| `actual_system` | finish | Record actual primer decision, layer count, coating identities, drying and application conditions; no fixed two-coat assumption. | `ufgs-architectural-coatings-2026` |
| `shared_assets` | prepare; finish | Identify shared task lighting, ventilation, electrical supply and reusable tools, list prepare and finish consumers and campaign periods, and record one owner for each shared event. Retain operating and replacement burdens where attributable; disclose capital-equipment treatment. |  |
| `waste_gate` | prepare; finish | Track residue and wash-water handover and treatment destinations separately from direct releases; cleaning and residual paint storage follow the declared site management plan. | `ufgs-architectural-coatings-2026` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Minor repair compounds (`repair_compounds`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Record each repair formulation and wet supplied mass; exclude plasterboard manufacture and major plastering.

- Collection subject: Gypsum or compatible spackling compounds actually used
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Surface protection and expendable tools (`protection_consumables`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Conditional umbrella: instantiate each actual material; reusable items use measured attributable replacement consumption, not full purchase per lot.

- Collection subject: Actual masking, protective sheeting and consumed preparation tools
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Contractor attributable transport services (`contractor_transport`)

Process / prospective direction / type: `prepare` / `inputs` / `product`.

Conditional umbrella for vehicle and load-specific services; own all campaign mobilization here once, including return trips where attributable; omit upstream supplier transport already included in a purchased dataset.

- Collection subject: Actual material and equipment transport services
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Calculate actual attributable t*km from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: t*km
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Collected preparation residues (`prepare_residue`)

Process / prospective direction / type: `prepare` / `outputs` / `waste`.

Split collected residues by composition and destination; distinguish dry solid wastes from air releases and wastewater.

- Collection subject: Actual sanding dust, repair debris and used protection wastes
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual preparation particle releases to air (`prepare_air_particles`)

Process / prospective direction / type: `prepare` / `outputs` / `elementary`.

Conditional umbrella: establish particle size, composition and indoor or outdoor air destination from measurements or justified release modelling before selecting concrete elementary exchanges; collected dust is not an air emission.

- Collection subject: Actual size-resolved particles released to air during minor sanding
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Waterborne finish coatings (`waterborne_finish`)

Process / prospective direction / type: `finish` / `inputs` / `product`.

Conditional umbrella: separate products and colours; record wet mass issued, opening and closing stock, returns, spill and coat count, retaining density if litres are converted.

- Collection subject: Actual waterborne interior architectural wall coatings
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.03
  - Upper: 3
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Specified waterborne primers (`waterborne_primer`)

Process / prospective direction / type: `finish` / `inputs` / `product`.

Conditional umbrella: record the specified primer and treated area separately; absence requires a documented coating-system decision, not an assumed universal zero.

- Collection subject: Actual compatible waterborne wall primer where specified
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Coating cleanup solid and liquid residues (`finish_solid_wastes`)

Process / prospective direction / type: `finish` / `outputs` / `waste`.

Conditional umbrella: split wet leftover paint, dry residues, packaging and tools by composition, hazard determination and treatment destination. Usable sealed paint returned to stock is a stock term, not waste or a coproduct.

- Collection subject: Actual coating residues, packaging and used tools at collection gate
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual coating volatile species releases to air (`finish_air_species`)

Process / prospective direction / type: `finish` / `outputs` / `elementary`.

Conditional umbrella: require substance or species identity, as-applied content basis, emitted fraction and receiving air compartment. A regulatory total VOC content is not a species flow or an automatic complete-release factor; retain unspeciated gaps explicitly in the dataset.

- Collection subject: Actual identified volatile substances released during application and drying
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Minor preparation and campaign mobilization | required | Every accepted campaign | Prepare installed parent surface; retain room/lot and shared-event ids | accepted_painting_service |
| `finish` | Brush/roller coating, drying, cleanup and acceptance | required | Every accepted campaign | Deliver accepted service; retain actual coats, rework loop and cleanup-event links | accepted_painting_service |

Production is a room/colour/coating-system campaign, not a continuous factory line. Each input, accepted area, waste, emission, cleanup and colour change carries a campaign and node id. Off-spec coating remains a finish-node rework loop until accepted; all repeated preparation and recoating burdens stay with that campaign. Cancelled or unaccepted areas are separately reported and never become accepted service output. Discarded material exits through the producing node waste card.

### Process: Minor preparation and mobilization (`prepare`)

#### Inputs

##### Product flows

###### Preparation water (`prepare_water`)

Meter or reconcile water delivered to preparation; retain supply source and any water already contained in repair products.

- Selected flow: Water supplied for minor cleaning
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`prepare_electricity`)

Record vacuum or other preparation equipment metering or power and operating time; identify voltage and grid geography.

- Selected flow: Electricity supply actually consumed by preparation equipment
- Flow property / unit: Energy / kWh
- Amount rule: Calculate actual attributable kWh from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected preparation wastewater (`prepare_wastewater`)

Conditional on wet cleaning: record collected volume, composition and treatment destination at the prepare node; direct releases require separately identified substances and medium.

- Selected flow: Actual minor-cleaning wastewater handed to treatment
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Coating, drying, cleanup and acceptance (`finish`)

#### Inputs

##### Product flows

###### Application and cleanup water (`finish_water`)

Separate approved thinning water from washing water; meter or reconcile purchased supply and avoid counting water contained in coating twice.

- Selected flow: Water supplied for approved thinning and tool cleanup
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Application drying and cleanup electricity (`finish_electricity`)

Record mixing, task lighting, ventilation or assisted drying only when actually used and attributable; natural drying has no invented energy exchange.

- Selected flow: Electricity actually consumed by attributable finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Calculate actual attributable kWh from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted interior waterborne wall painting service (`accepted_painting_service`)

Accepted net coated wall area after specified drying, cleanup and defect resolution. Output is contractor service, not paint mass or a newly manufactured wall. Count each physical area once regardless of coats or rework.

- Selected flow: Accepted interior waterborne wall painting service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Collected area normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Collected coating cleanup wastewater (`finish_wastewater`)

Record volume and contamination basis at treatment handover; distinguish sewer treatment input from direct environmental release and never assume disposal to a drain.

- Selected flow: Actual paint-contaminated wash water sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `campaign_attribution` | prepare; finish | Subdivide records by campaign, room and node first. Attribute shared electricity by metering or documented power-time; shared transport by measured load-distance and reusable consumables by documented usage and replacement. Reconcile consumer shares to one total per period; use area allocation only for homogeneous same-system campaigns with justified evidence. |  |
| `rework_retention` | finish | Retain failed-coat removal, extra coating, energy and cleanup with the producing campaign; count final accepted area once. Downgrade, recovery or discard requires an actual destination and no automatic avoided-product credit. |  |
| `no_coproduct` | all processes | The defined route has one service output. Returned usable paint is a stock correction. No paint-leftover, waste or existing-wall coproduct allocation is allowed. If a real independently marketed coproduct arises, document a separately reviewed method before reuse. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | `prepare` | Preparation cards; reference signed finish-node accepted area | Campaign ledger and acceptance survey | campaign; room; event; timestamp; preparation product and batch; stock issued returned opening closing; wet mass; water volume; energy meter or power-time; transport load and distance; cp_finish accepted net area survey reference; preparation/rework tasks; waste and wastewater quantity and destination; particle size/composition medium method and uncertainty; shared asset consumer shares | Reconcile preparation material, transport, electricity, cleaning-water, collected residue and particle records with invoices, stock and meters. Reference the signed cp_finish accepted-area survey as denominator without creating an accepted output at prepare. Assign each preparation or shared event once. | kg; m3; kWh; t*km; m2 | Each issue, coat, cleanup, shared event and acceptance | Full campaign including rework and final cleanup | Declared site and contractor; prepare node only | per reference flow | Calibrations; signed area survey; supplier densities; traceable stock/waste records; approved attribution; species evidence and uncertainty |
| `cp_finish` | `finish` | Finishing cards and accepted service output | Campaign ledger and acceptance survey | campaign; room; event; timestamp; coating and primer product/batch; stock issued returned opening closing; wet mass; volume and density; actual coat count and layer areas; thinning and cleanup water; energy meter or power-time; net area and deductions; accepted rejected reworked area; drying regime; acceptance and defect closure; waste quantity and destination; emission species medium composition method and uncertainty; shared asset consumer shares | Reconcile each primer/finish-coat issue and stock return with wet mass or traceable density, layer areas, thinning, cleanup, electricity and species evidence. Survey accepted net area after drying and defect closure and sign the acceptance record. Assign each finish or shared event once. | kg; m3; kWh; t*km; m2 | Each issue, coat, cleanup, shared event and acceptance | Full campaign including rework and final cleanup | Declared site and contractor; finish node only | per reference flow | Calibrations; signed area survey; supplier densities; traceable stock/waste records; approved attribution; species evidence and uncertainty |

Apply area_normalization and stock_reconciliation below to each lot; retain original quantities, units and the signed accepted-area record.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | all inventory rows | For accepted net area A_accepted > 0, calculate Q_i = Q_lot_i / A_accepted × 1 m2 for each actual node-attributable lot total, preserving the original numerator unit, original totals and node ownership. Zero accepted area cannot form an accepted-service dataset. The reference output uses its own cp_finish accepted-area record and normalizes to 1 m2. | cp_prepare; cp_finish; actual node lot totals; accepted net area | Amounts per reference flow |  |
| `stock_reconciliation` | waterborne_finish; waterborne_primer; repair_compounds; protection_consumables | Accounted use = opening stock + receipts - closing stock - usable returns transferred outside this lot accounting boundary and not already included in closing stock. A usable return already counted in closing stock must not be subtracted again. Reconcile accounted use to separately traced applied/consumed material, waste and other documented exits; invoices alone do not determine applied paint. Retain the ledger boundary, original units and return ownership before area_normalization. | cp_prepare; cp_finish; opening stock; receipts; closing stock; exclusive usable returns; applied/consumed and waste records | Reconciled actual lot use before normalization |  |
| `wet_mass_conversion` | waterborne_finish; waterborne_primer; repair_compounds | Multiply recorded supplied volume by product-specific density on a compatible basis; retain both original volume and converted wet mass. No generic paint density is permitted. | supplier density; recorded volume | Wet product kg |  |
| `species_emissions` | finish_air_species | Use measured species release or a documented species-specific material balance of actually applied products, retained coating, captured waste and emitted fractions. Record indoor release and any outdoor transfer consistently, avoiding duplicate releases. EPA describes activity/content-based estimation but provides no universal species split for this PCR. | cp_finish; product composition; release evidence | Species kg to declared air medium | `epa-eiip-architectural-coating-1995` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `coverage` | all processes | Cover all campaign inputs, stock corrections, rework, waste, shared burdens and area; disclose missing records and cut-offs without silent zeros. | Reconciled node ledgers and acceptance records |
| `representativeness` | all inventory rows | Report site, country, dates, coating formulation, wall starting state and application/drying technology; geographic electricity and transport choices must match actual supply. | Project and supplier records |
| `identity_resolution` | all inventory rows | Resolve each actual exchange of umbrella cards to a verified concrete UUID, property and unit before TIDAS exchange publication; retain gaps rather than selecting a broad convenient match. | Independent identity verification and support rows |
| `range_evidence` | all ranges | Provisional estimates are screens only, including zeros for conditional absence, and never substitute for measured totals. Investigate outliers against independent evidence; do not derive a guardrail from the same batch it validates. | Independent reviewed comparison and uncertainty disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_conformance` | accepted_painting_service | Require positive measured net area, matching service output/property/unit and a signed acceptance record; count no unresolved rejected area or duplicate coat area. |  |
| `campaign_completeness` | prepare; finish | Every material, cleaning, changeover, rework, residue and emission event links to one campaign and producing node. Confirm shared asset consumers and period shares sum to one owned event total. |  |
| `coating_quality` | finish | Verify declared project requirements, actual layer count, drying and closed defects against acceptance evidence; do not substitute a generic prescribed coat count. | `ufgs-architectural-coatings-2026` |
| `release_and_waste` | prepare_air_particles; finish_air_species; finish_wastewater | Require emission species/size and air medium and separate captured waste/wastewater destination; missing speciation is incomplete evidence, not zero VOC. Check material and water reconciliations and avoid emission/treatment double counting. | `epa-eiip-architectural-coating-1995` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground contractor painting-service data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible installed-wall interior brush/roller waterborne painting at the declared service gate |
| excluded_use | Paint product kg, wall production, full building life cycle, exterior/spray/specialty routes and future repainting without separate modelling |
| required_metadata | All reference qualifiers; campaign/node/event ids; accepted net area; material, energy, transport, shared-asset and waste boundaries |
| required_quality_disclosure | Measured versus modelled quantities; unresolved identities or species; provisional ranges; attribution; upstream gaps; capital-equipment treatment; excluded works and uncertainty |
| update_trigger | Coating formulation, wall starting state, specification, application route, grid, waste route or measured inventory changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ufgs-architectural-coatings-2026` | official_guidance | USACE/NAVFAC/AFCEC UFGS 09 90 00 Architectural Paints and Coatings, August 2026; sections 3.6.2, 3.8, 3.10 and 3.11. https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2009%2090%2000.pdf | Preparation/application/acceptance/waste-management evidence; no quantitative consumption range or fixed service normalization |
| `epa-eiip-architectural-coating-1995` | method_factor | US EPA EIIP Volume III Chapter 3, Architectural Surface Coating, 11/08/1995, sections 2 and 4. https://www.epa.gov/sites/default/files/2015-08/documents/archsfc.pdf | Application/drying release pathways and activity/content estimation approach; no universal species fractions |
