---
pcr_id: pcr.constructions-and-construction-services.construction-services.cast-in-place-building-concrete-placement-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Placement, finishing and curing of cast-in-place building concrete

## 1. Scope and Applicability

This PCR covers a narrowly declared building concrete placement package from receipt of fresh concrete at a prepared workface to accepted in-place work. It includes actual placing, compaction, ordinary finishing, curing, testing, routine rework and on-site cleanup. Formwork and reinforcement are inspected starting conditions owned by separate parent packages, whose burdens must remain in a whole-project model. It does not prescribe a concrete mixture, strength, cure duration, loss rate or building lifetime. The actual contract and acceptance specification determine these qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.cast-in-place-building-concrete-placement-services |
| classification_refs | CPC 3.0 54540; narrower placement-package scope, not the complete concrete-services leaf. |
| covered_products | Contractor placement, compaction, ordinary surface finishing, curing and acceptance of cast-in-place building elements. |
| excluded_products | Ready-mix manufacture; precast manufacture/erection; formwork fabrication/installation and reinforcement works; foundations engineering; roads, bridges, marine concrete; specialist coating systems; whole buildings. |
| representative_product | One declared building slab or wall pour, with specified mixture, geometry, finish and acceptance criteria. |
| production_route | Receive fresh concrete → place and compact → finish → protect and cure → inspect and accept. |
| market_state | Accepted installed construction service at contractor handover; no assumed lifetime service equivalence. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted cast-in-place building concrete placement service |
| How much | 1 m3 accepted net in-place volume |
| How well | Declared element, mixture/strength/exposure specification, geometry, finish, curing and acceptance evidence. |
| How long or cycle | One identified pour and its actual curing and acceptance period; no future repair cycles. |
| reference_flow_link | `accepted_concrete_placement_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted cast-in-place building concrete placement service |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Building element; site/date; mixture and strength at specified age; exposure class; accepted net geometry; finishing specification; pumping method; cure regime and duration; acceptance gate; formwork/rebar responsibilities; supplier and delivery boundary; return/waste destinations; shared assets and study capital policy. |

Declare every required qualifier in the data package. An accepted service volume does not make fresh-concrete input or an internal transfer equal to one cubic metre.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_volume | reference product | Volume | m3 | Use accepted net geometric volume; exclude voids and unaccepted/rejected work. Link acceptance record to cp_curing. Never substitute delivered fresh volume. |
| fresh_density | fresh_concrete; returned_fresh_concrete | Volume | m3 | When only mass is recorded, divide mass by measured density of the same fresh batch; preserve sampling and moisture/air-content state, without a universal density. |
| wet_waste | placement_wash_slurry; placement_concrete_waste; finishing_residues; curing_removed_materials | Mass | kg | Retain wet/dry basis and density or solids fraction for conversions; wet slurry and its separated solids must not overlap. |
| fuel_mass | placement_diesel | Mass | kg | Retain measured diesel mass; volume conversion requires supplier density at declared temperature and energy conversion requires the documented lower heating value. |
| energy_units | placement_electricity; finishing_electricity; curing_electricity | Energy | kWh | Retain fuel mass and electricity separately; convert kWh to MJ using 3.6 only when required, and fuel mass with documented lower heating value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accessible building workface; surveyed geometry and inspected, installed formwork/reinforcement/embedded items accepted by the responsible upstream package; delivered fresh concrete at site receipt. |
| starting_condition_role | Declared supplied state, not burden-free production; this PCR owns only placement, finishing and curing responsibilities. |
| product_classification_scope | Narrower than CPC 3.0 54540; construction service, not concrete product or construction asset. |
| recursive_input_rule | If a subcontractor supplies the same service category, choose either its upstream service dataset or disaggregated activity once; do not recurse indefinitely or count both. |
| upstream_dataset_requirement | Link fresh-concrete supplier manufacture and delivery datasets and responsible formwork/rebar parent packages. Link actual fuel, power, water, material, equipment and downstream waste services using matching gates. |
| disclosure | Disclose truncated tasks, ownership of delivery/washout, excluded formwork/rebar and capital policy. A whole-project model must include those packages elsewhere; this service is not a whole building result. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| service_gate | all processes | Include actual placement, compaction, finish, cure protection, inspection, routine corrections and cleanup until specified acceptance; later structural remediation requires separate scope. | ufgs-cast-in-place-2019 |
| reaction_boundary | curing | Hydration changes binder/water composition within finished concrete. Distinguish retained hardened material, unreacted constituents, evaporation, removed specimens and rejects; no assumed stoichiometric pathway, reaction yield or carbonation credit. | epa-concrete-washout-2012 |
| washout_gate | placement | Include on-site chute/pump/tool washing when contractually owned; segregate supplier off-site drum cleaning. Contain washwater; identify actual recycler/treatment handoff and any verified direct release. | epa-concrete-washout-2012 |
| shared_assets | all processes | Enumerate each pump, generator, meter, curing facility and washout container, all consuming nodes/runs and service dates; record equipment capital and mobilization policy separately from operating energy. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Attributable placement plant service (`placement_plant_service`)

Process / prospective direction / type: `placement` / `inputs` / `product`.

Conditional umbrella for pump, vibrator and washout infrastructure capital or hired services under the declared study policy, excluding separately recorded operating energy.

- Collection subject: Attributable placement plant service
- Flow property / unit: Time / h
- Amount rule: Collect attributable equipment service-hours; quantify actual freight separately in placement_mobilization_transport and expand actual equipment service exchanges before dataset production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Attributable equipment mobilization freight service (`placement_mobilization_transport`)

Process / prospective direction / type: `placement` / `inputs` / `product`.

Conditional freight exchange for actual off-site pump/tool/curing-equipment mobilization owned by this package; equipment hours are not tonne-kilometres.

- Collection subject: Attributable equipment mobilization freight service
- Flow property / unit: Transport service / t*km
- Amount rule: Calculate actual payload tonnes multiplied by route kilometres for each dispatch; attribute empty return and shared trips using carrier evidence, or use a fully documented vehicle-service model. Do not duplicate direct fuel or inclusive hire.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_placement`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: t*km
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Unused fresh concrete returned to supplier (`returned_fresh_concrete`)

Process / prospective direction / type: `placement` / `outputs` / `product`.

Never record the same returned load again as waste concrete; record purchaser credits without inventing an avoided-production credit.

- Collection subject: Unused fresh concrete returned to supplier
- Flow property / unit: Volume / m3
- Amount rule: Record actual returned volume and supplier acceptance or waste designation; product return applies only while usable and accepted by recipient.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Other measured placement combustion species to air (`placement_other_air_emissions`)

Process / prospective direction / type: `placement` / `outputs` / `elementary`.

Conditional umbrella includes actual CO, nitrogen oxide species, sulfur species or particles only when supported; never select a generic pollutant UUID as all species.

- Collection subject: Other measured placement combustion species to air
- Flow property / unit: Mass / kg
- Amount rule: Expand actual reported substances using equipment-specific emissions evidence; retain NOx reporting basis and particulate size. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual placement washout substances released to water or soil (`placement_washout_releases`)

Process / prospective direction / type: `placement` / `outputs` / `elementary`.

Conditional umbrella for verified direct releases from placement-owned chute, pump or tool washout. Establish each actual substance, dissolved/particulate reporting basis and receiving water or soil compartment from event evidence before selecting a concrete elementary flow. Collected slurry sent to a custodian remains placement_wash_slurry; total slurry, pH and a treatment transfer are not pollutant mass. No universal release or absence is assumed.

- Collection subject: Actual placement washout substances released to water or soil
- Flow property / unit: Mass / kg
- Amount rule: Calculate each released substance mass from measured release quantity and compatible substance concentration; keep containment, treatment and direct-release fractions mutually exclusive.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_placement`

- Unverified optional screening aid: Provisional broad screening estimate per actual substance; not evidence of a release, default quantity or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Specified finishing and repair consumables (`finishing_consumables`)

Process / prospective direction / type: `finishing` / `inputs` / `product`.

Conditional umbrella covers actual abrasives, mortar and hardener only when in the declared package; no assumed recipe or mandatory chemical hardener.

- Collection subject: Specified finishing and repair consumables
- Flow property / unit: Mass / kg
- Amount rule: Measure actual products used for routine finishing and accepted minor correction; expand product identities and formulation before projection to exchanges.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Finishing residues and rejected correction material (`finishing_residues`)

Process / prospective direction / type: `finishing` / `outputs` / `waste`.

Any uncontained sanding dust needs substance and size-specific elementary air records rather than being hidden in waste mass.

- Collection subject: Finishing residues and rejected correction material
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual collected residues and removed defects by composition, state and destination; assign them to the originating pour.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual finishing substance releases to air (`finishing_actual_air_releases`)

Process / prospective direction / type: `finishing` / `outputs` / `elementary`.

Conditional umbrella expands species from actual finishing consumables and operations. Sanding requires dust substance and size; evaporation requires actual chemical composition rather than a generic VOC identity.

- Collection subject: Actual finishing substance releases to air
- Flow property / unit: Mass / kg
- Amount rule: Expand actual finishing-event species and size using measurements or reviewed factors; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual curing protection materials (`curing_materials`)

Process / prospective direction / type: `curing` / `inputs` / `product`.

Conditional umbrella is not a fixed material: water-only or retained-form curing must not be assigned a fictitious compound.

- Collection subject: Actual curing protection materials
- Flow property / unit: Mass / kg
- Amount rule: Measure actual curing compound, sheet or wet-cover consumption; state chemistry, reuse cycles and retained or removed fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Removed curing materials and rejected cured concrete (`curing_removed_materials`)

Process / prospective direction / type: `curing` / `outputs` / `waste`.

Umbrella waste role requires distinct real material exchanges; no credit for claimed recycling without recipient evidence.

- Collection subject: Removed curing materials and rejected cured concrete
- Flow property / unit: Mass / kg
- Amount rule: Measure each removed covering, test specimen and rejected concrete separately by material and destination; retain rework attribution and do not count rejects as accepted service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual curing substance releases to the environment (`curing_actual_releases`)

Process / prospective direction / type: `curing` / `outputs` / `elementary`.

Conditional umbrella must be expanded by substance and air/water/soil medium. Washwater sent to treatment remains waste, not an automatic direct discharge.

- Collection subject: Actual curing substance releases to the environment
- Flow property / unit: Mass / kg
- Amount rule: Identify actual substance, receiving medium and measured or reviewed factor basis for evaporation, coating constituents or uncontained releases; record zero only with affirmative evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Unverified optional screening aid: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| placement | Place and compact fresh concrete | required | Declared normal route | Fresh flowable mixture to compacted design geometry; transfer to finishing; own pump cleanup and placement rejects. | per reference flow |
| finishing | Finish formed concrete surface | required | Declared normal route | Compacted parent material to specified surface; transfer to curing; link finishing corrections/residues. | per reference flow |
| curing | Hydrate, cure, test and accept | required | Declared normal route | Binder and water hydration within finished feed to hardened accepted state; preserve retained/unreacted constituents and loss exits. | per reference flow |

Production mode is identified site pours (batches) with linked finishing/curing periods. Record pour_id, delivery_id, event_id, transfer_id and asset_id. Startup, pumping, vibration, surface work, cure protection, testing and cleanup use the same lot ledger. In-place material handoffs are state accounts, not separately traded products; final output is the accepted service. Unaccepted or replaced geometry is never accepted output.

### Process: Place and compact fresh concrete (`placement`)

#### Inputs

##### Product flows

###### Delivered fresh concrete for placement (`fresh_concrete`)

Fresh mixture is the purchased upstream product; cementitious binder and mix water are already embodied. Never fix its quantity to 1 m3 of accepted service.

- Selected flow: Delivered fresh concrete for placement
- Flow property / unit: Volume / m3
- Amount rule: Measure fresh volume received from delivery tickets and density-supported yield; retain returns and losses separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel for placement plant (`placement_diesel`)

Include only directly consumed fuel; hired pumping with an inclusive energy inventory must not be counted again.

- Selected flow: Diesel fuel for placement plant `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable diesel consumed by pumps, mobile plant and generators; retain lower heating value if converting energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to placement equipment (`placement_electricity`)

Link electricity and fuel to equipment id and pour run.

- Selected flow: Electricity supplied to placement equipment
- Flow property / unit: Energy / kWh
- Amount rule: Meter grid electricity for pumps and vibrators; report generator electricity internally without a second upstream electricity purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for placement equipment washing (`placement_wash_water`)

Water supplied as a technosphere input is distinct from direct environmental abstraction.

- Selected flow: Supplied water for placement equipment washing
- Flow property / unit: Volume / m3
- Amount rule: Meter new water supplied for equipment and chute washing; segregate recycled washwater and rainfall.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Compacted in-place concrete before finishing (`placed_concrete_transfer`)

This is an internal material-state handoff, not the reference service or another purchased product.

- Selected flow: Compacted in-place concrete before finishing
- Flow property / unit: Volume / m3
- Amount rule: Measure physical in-place volume transferred to finishing; pair transfer_id with finishing feed and retain unaccepted volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Discarded concrete from placement (`placement_concrete_waste`)

Waste route starts at transfer to the declared waste custodian; transport and treatment burdens require linked downstream datasets.

- Selected flow: Discarded concrete from placement
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded spills, pump residuals and rejected loads by actual wet or hardened state and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contained concrete washwater and slurry (`placement_wash_slurry`)

Washout is a waste transfer unless verified direct discharge occurs; include containment and do not label wastewater as an elementary emission by default.

- Selected flow: Contained concrete washwater and slurry
- Flow property / unit: Mass / kg
- Amount rule: Weigh or measure volume and measured density of removed slurry; identify liquid/solid separation and exclude separately weighed solids.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Carbon dioxide, fossil, to air from placement fuel combustion (`placement_fossil_co2`)

Direct combustion air release is distinct from upstream fuel-production emissions.

- Selected flow: Carbon dioxide, fossil, to air from placement fuel combustion `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Determine fossil CO2 from attributable fuel carbon records or an identified reviewed combustion factor; do not assume complete oxidation without the selected method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Finish formed concrete surface (`finishing`)

#### Inputs

##### Product flows

###### Compacted in-place concrete before finishing (`finishing_concrete_feed`)

Parent material already has the required shape; finishing changes the surface condition.

- Selected flow: Compacted in-place concrete before finishing
- Flow property / unit: Volume / m3
- Amount rule: Receive measured placed_concrete_transfer with identical transfer_id, state and volume; no independent upstream burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to finishing equipment (`finishing_electricity`)

Manual finishing can have measured zero equipment electricity; absence of records does not prove zero.

- Selected flow: Electricity supplied to finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Meter attributable trowel and finishing-tool electricity; include shared generator fuel only in its owning node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished in-place concrete before curing acceptance (`finished_concrete_transfer`)

Finished surface is intermediate; the accepted service is declared only after curing and inspection.

- Selected flow: Finished in-place concrete before curing acceptance
- Flow property / unit: Volume / m3
- Amount rule: Measure finished volume handed to curing with transfer_id; retain rework and removed material before final acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Hydrate, cure, test and accept (`curing`)

#### Inputs

##### Product flows

###### Finished in-place concrete before curing acceptance (`curing_concrete_feed`)

Binder and mixing water within this feed continue hydration; aggregates are physical inclusions, not invented reactants.

- Selected flow: Finished in-place concrete before curing acceptance
- Flow property / unit: Volume / m3
- Amount rule: Receive measured finished_concrete_transfer with the same transfer_id and measured volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for concrete curing (`curing_water`)

Record actual wet-curing regime and duration; water contributes moisture conditions and may participate in continuing hydration without an assumed yield.

- Selected flow: Supplied water for concrete curing
- Flow property / unit: Volume / m3
- Amount rule: Meter additional external curing water separately from embedded mix water, returned water and captured rainfall.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied for curing and acceptance (`curing_electricity`)

Shared site supply is attributed using metered consumption or documented equipment-time with power and utilization evidence.

- Selected flow: Electricity supplied for curing and acceptance
- Flow property / unit: Energy / kWh
- Amount rule: Meter attributable heating, cooling and testing electricity over the declared cure period; record other actual fuels as additional concrete exchanges.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cast-in-place building concrete placement service (`accepted_concrete_placement_service`)

Service comprises placing, compaction, finishing, curing and acceptance of the declared element. Its denominator is accepted net in-place geometry; it is not a concrete manufacturing or building-asset product.

- Selected flow: Accepted cast-in-place building concrete placement service
- Flow property / unit: Volume / m3
- Amount rule: 1 m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing`

- Range: Reference normalization identity from accepted volume divided by the same accepted volume; not a yield factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retain_rework | all processes | Retain burdens from failed tests, rejected pours and routine rework in the originating accepted service lot; track placement→finishing or finishing→curing rework and return to placement for replacement with event ids. Count final accepted geometry once. |  |
| run_attribution | all processes | Use identified pours and curing periods as production batches; assign startup, changeover and cleanup by event-linked measured activity. Shared events have one owner and documented shares summing to one across all consumers. |  |
| shared_energy | all processes | Prefer submetering. If absent, estimate node shares from recorded operating time, rated/observed power and utilization, disclosing uncertainty; never charge grid electricity and generator fuel for the same generation twice. |  |
| no_automatic_credit | returned_fresh_concrete; waste outputs | Record product returns or waste exits by recipient acceptance and legal status. No automatic avoided concrete or recycling credit; any consequential credit requires a separate declared study method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_placement | placement | all inventory rows in this node | event ledger, measurements and acceptance | pour_id; delivery_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; fuel carbon fraction/method; fossil carbon mass fraction and denominator; carbon oxidized-to-CO2 fraction; chosen combustion factor value/unit/source and applicability; factor uncertainty; fuel density/temperature/lower heating value; received fresh volume; measured density; diesel; electricity; water; equipment hours; dispatch_id; carrier; payload tonnes; route kilometres; empty-return activity; mobilization ownership/share; return volume; waste/slurry mass; emissions species and medium; direct washout release event and destination compartment; released liquid volume or mass; measured substance concentration, sampling time and unit; containment/treatment split; inventory changes | Reconcile signed event records, calibrated meters, supplier tickets, measured geometry/density, testing and recipient receipts; distinguish measurements from estimates and absence evidence. | m3; kg; kWh; h; t; km; t*km | each event/shift; continuous curing log | complete pour through cure acceptance | declared single site and node | per reference flow | signed tickets; calibration; geometry/test and balance evidence |
| cp_finishing | finishing | all inventory rows in this node | event ledger, measurements and acceptance | pour_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; feed and finished volumes; surface specification; electricity; consumables; residues; actual emission substance/air compartment/particle size; rework events | Reconcile signed event records, calibrated meters, supplier tickets, measured geometry/density, testing and recipient receipts; distinguish measurements from estimates and absence evidence. | m3; kg; kWh; h; t; km; t*km | each event/shift; continuous curing log | complete pour through cure acceptance | declared single site and node | per reference flow | signed tickets; calibration; geometry/test and balance evidence |
| cp_curing | curing | all inventory rows in this node | event ledger, measurements and acceptance | pour_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; feed volume; accepted net volume; dimensions; voids; cure start/end; water; materials; electricity; tests; acceptance; rejects; actual substance/medium releases | Reconcile signed event records, calibrated meters, supplier tickets, measured geometry/density, testing and recipient receipts; distinguish measurements from estimates and absence evidence. | m3; kg; kWh; h; t; km; t*km | each event/shift; continuous curing log | complete pour through cure acceptance | declared single site and node | per reference flow | signed tickets; calibration; geometry/test and balance evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | all inventory rows | Divide each attributable event amount by accepted net in-place volume for the same pour set; report per reference flow. Preserve physical internal transfers before normalization. | attributable event amount; accepted net volume; cp_placement; cp_finishing; cp_curing | amount per reference flow |  |
| receipt_reconcile | fresh_concrete; returned_fresh_concrete; placement_concrete_waste | Reconcile received fresh volume with placed volume, supplier return, sampled volume, spills/pump residuals and stock change on compatible fresh-state bases; do not equate fresh volume with cured volume without evidence. | delivery tickets; measured density; transfer ledger; return/waste receipts; cp_placement | reconciliation and residual explanation |  |
| mobilization_activity | placement_mobilization_transport | For each loaded leg calculate payload tonnes × actual kilometres, apply its documented consumer share, and sum legs before normalize_service. Retain carrier evidence for empty-return coverage; never multiply an empty load by zero to erase its burden. If using a vehicle-service model, document its compatible t*km conversion and parameters; do not add return/fuel already included in the carrier or hire dataset. | cp_placement; dispatch_id; payload tonnes; route kilometres; consumer share; carrier empty-return coverage; model and unit-conversion evidence | attributable transport t*km per pour set before normalization |  |
| fossil_carbon_emission | placement_fossil_co2 | Choose one documented method: m_CO2 = m_fuel × w_fossil_C × f_oxidized_to_CO2 × 44/12, where w_fossil_C is kg fossil carbon per kg actual fuel and f is the fraction of that fossil carbon emitted as CO2; or multiply compatible fuel activity by a reviewed CO2 factor with explicit units. Retain measured fuel, blend composition, method/factor source, applicability and uncertainty; do not sum the alternative methods or default either fraction to 1. Apply normalize_service after calculating the pour-set total. | cp_placement; fuel mass or compatible energy activity; fossil-carbon fraction and basis; oxidation-to-CO2 fraction; factor value/unit/source; uncertainty | fossil CO2 kg per pour set before normalization |  |
| washout_release_mass | placement_washout_releases | For each verified direct-release event and substance, calculate released volume × concentration after converting both to compatible units (for example m3 × kg/m3), or released liquid mass × measured kg-substance/kg-liquid fraction. Preserve actual receiving compartment, sampling and dissolved/total basis. pH alone cannot determine substance mass. Reconcile captured/treatment/direct-release portions once, then apply normalize_service; missing composition is an explicit gap, not zero. | cp_placement; release event; volume or liquid mass; concentration and unit; substance and receiving compartment; sampling evidence; containment/treatment split | substance kg to actual water or soil compartment per pour set before normalization |  |
| shared_share | all inventory rows | For a measured shared event, attribute its quantity using the documented consumer share; shares across all consumers sum to 1 and event ownership is unique. | event_id; asset_id; consumer nodes/runs; measured activity; cp_placement; cp_finishing; cp_curing | attributed event quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| gate_traceability | reference product | Acceptance evidence must match element, pour, specification, cure regime and net volume; unaccepted quantity stays outside denominator. | signed acceptance; surveyed dimensions; test records |
| inventory_completeness | all inventory rows | Record conditional presence, absence evidence and missing-data flags separately. Expand umbrella cards into concrete exchanges and species before publishing a dataset. | purchase records; equipment logs; SDS; waste records |
| time_coverage | all processes | Cover full pours plus associated curing, testing, cleanup and rework, including idle or weather-protection burdens; document exclusions and meter calibration. | run ledger; cure diary; calibration certificates |
| provisional_ranges | all inventory rows | Provisional reasoned-estimate ranges are broad review prompts, never defaults or compliance limits. Replace with independent reviewed evidence; do not validate a batch with its own maximum. | independent reference data; uncertainty disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| final_acceptance | accepted_concrete_placement_service | Require 1 m3 reference definition, exact reference row link, actual accepted geometry and specified acceptance evidence; output remains a service. |  |
| transfer_pair | placed_concrete_transfer; finishing_concrete_feed; finished_concrete_transfer; curing_concrete_feed | Pair each internal handoff by transfer_id, state and measured amount; prohibit duplicate upstream products and fixed 1 m3 internal feeds. |  |
| loss_and_waste | all processes | Explain delivery/placement differences, retained water and stock changes; reconcile each return, residue, slurry and reject once with recipient/state and rework path. | epa-concrete-washout-2012 |
| shared_and_runs | all processes | Check pour/run/event ids, changeover ownership, all shared asset consumers and shares; totals must avoid duplicate energy, capital, mobilization and cleanup. |  |
| washout_release_route | placement_washout_releases; placement_wash_slurry | Require event-specific substance, receiving water/soil compartment and concentration/quantity evidence for each verified direct release. Keep it on placement and cp_placement, separate from custodian-bound slurry and curing releases. Reconcile pathways without double counting; unresolved composition or occurrence remains incomplete coverage rather than zero. | epa-concrete-washout-2012 |
| actual_identity | all inventory rows | Require verified concrete flow/property/unit identities for final dataset exchanges; unresolved semantic cards and generic species are not publishable exchanges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction-service data package with flow/process/lifecyclemodel projections. |
| downstream_use | secondary_dataset; background_dataset for declared building work-package models. |
| allowed_use | Matching element, specification, placement route and acceptance gate with linked upstream/downstream packages. |
| excluded_use | Ready-mix manufacture, complete building footprint, lifetime functional comparison, roads/bridges/marine concrete or wider concrete-services coverage without review. |
| required_metadata | Site/geography; dates and pours; accepted element geometry; mix/strength/age/exposure; finish; cure period; equipment; supplier gates; exclusion ownership; capital/transport/waste policy. |
| required_quality_disclosure | Measurement coverage, missing events, estimated shares, range provenance, identity gaps, wet/dry conversions and balance residuals. |
| update_trigger | Material change in mixture, equipment, cure/finish specification, acceptance criteria, supplier boundary, measurement evidence or identity verification. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ufgs-cast-in-place-2019 | standard | USACE/NAVFAC/AFCEC UFGS 03 30 00, February 2019, Change 10 August 2025; https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2003%2030%2000.pdf | Placement, finishing, curing and field acceptance responsibilities; actual project specification controls, not universal consumption factors. |
| epa-concrete-washout-2012 | official_guidance | US EPA, EPA 833-F-11-006, February 2012; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Hydration description and washout separation/containment and destination responsibility; no presumed recovery rate. |
| unsd-cpc21-concrete-services | official_guidance | UNSD CPC 2.1 54540 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/54540 | Supporting classification interpretation only; not a CPC 3.0 explanatory text or quantitative source. |
