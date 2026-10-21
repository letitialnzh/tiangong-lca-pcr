---
schema_version: 1
pcr_id: pcr.existing-water-supply-aqueduct-hand-applied-cementitious-concrete-patch-repair-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.en-US.md
---

# Existing water-supply aqueduct hand-applied cementitious concrete patch repair services

## 1. Scope and Applicability

This category covers one bounded restoration of localised spalled concrete on an existing reinforced-concrete aqueduct or open channel serving water supply, excluding pipelines. An actual approved one-part cementitious, polymer-modified repair mortar is mixed with clean water and compacted by hand against retained sound concrete and qualified retained reinforcement. The service includes the incremental isolation, access, preparation, curing and testing needed to deliver accepted installed patch geometry; purchase or ownership of those operations by another contractor does not remove them.

The category ends at the signed repair handover after complete required curing, geometry and bond checks, defect closure and owner-required water-contact and hygienic release. It does not include new aqueduct construction, irrigation, drainage, flood-control or navigation channels, water pipelines, transport tunnels, sprayed whole linings, moving-joint resealing, epoxy crack injection, major strengthening, reinforcement replacement, or subsequent water-supply operation. A potable-water product claim alone is insufficient approval for the actual site. Do not claim a universal repair lifetime, leakage reduction, strength result or curing duration. Sources: `sika-4100-protect-2025`; `sika-concrete-repair-handbook`; `un-cpc-3-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-water-supply-aqueduct-hand-applied-cementitious-concrete-patch-repair-services |
| classification_refs | CPC 3.0 54231; narrower methodology subset |
| covered_products | Finally accepted hand-applied one-part cementitious local spall repair service on retained non-pipeline water-supply concrete aqueduct/channel |
| excluded_products | New conduit; irrigation/flood/navigation works; pipelines; sprayed full lining; crack injection; joint sealant; new/replaced reinforcement or major structural strengthening |
| representative_product | Approved water-contact cementitious mortar patch compacted around qualified retained reinforcement on prepared sound host concrete |
| production_route | Qualify/isolate/access → local removal and cleaning → conditional approved rebar protection/primer → measured powder/water batches → hand scratch coat, compaction and profile → protected curing → inspection/rework and signed hygienic handover |
| market_state | Completed installed repair service at owner acceptance; neither dry mortar sale nor fresh mortar supply |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Accepted local concrete patch repair of retained water-supply aqueduct |
| how_much | 1 m3 of unique finally accepted installed geometric patch volume |
| how_well | Actual approved water-contact mortar/system; qualified retained sound substrate/rebar; completed required cure; accepted geometry/bond and owner hygienic gate |
| how_long_or_cycle | One bounded job including all attempts, preparation, cure, tests and defect closure until signed handover; link stock carry and shared-asset manufacture, operation/maintenance/replacement and termination/end-of-life phases across all relevant periods; no assumed service life |
| reference_flow_link | `accepted_patch_repair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted hand-applied cementitious concrete patch repair of retained water-supply aqueduct |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Unit of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Water-supply function and non-pipe host; job/patch IDs; retained host/rebar assessment; actual mortar SKU/version/approval; net patch area, depth distribution and V survey/uncertainty; substrate and exposure; batch/layer/environment/cure records; actual primer/protection; water-contact/hygienic requirements, bond/geometry results, defect closure and signed acceptance |

V > 0 is the sum of disjoint finally accepted installed patch volumes from actual before/after geometry. Count overlapping repair areas only once. Exclude voids, rejected material, removed failed attempts and unaccepted patches. Fresh-mortar yield, supplied mortar, whole channel length and water throughput are not V. Every required qualifier must be present in the foreground package; unknown gate or geometry prevents accepted output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_geometry` | `accepted_patch_repair` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Survey actual accepted patch geometry with disjoint patch IDs and measured depth distribution; determine V using cp_accepted_patch_repair; reject missing/nonpositive V and exclude unaccepted/overlapping/void volume. |
| `state_conversion` | `repair_powder`; `mix_water`; `material_waste`; `aqueous_waste` | Actual measured state-specific property | Actual compatible unit | Keep dry powder, metered water, total fresh mix and cured retained material separate. A mass/volume conversion requires measured matching formulation, moisture, temperature/state and traceable density evidence; fresh density never defines accepted cured geometry. |
| `native_units` | All inventory rows | Actual verified native property | Actual compatible native unit | Keep Count, Length, Area, Mass, Volume, Energy and transport units in independent compatible ledgers. Record actual SKU/component/provider and unit conversion support. No price/hours-to-Count or fuel calorific-property-to-electricity substitution. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed existing water-supply concrete aqueduct with local spalling, retained sound substrate and potentially exposed retained reinforcement; owner-authorised repair scope and actual operational/isolation state |
| starting_condition_role | Retained host state interface, not newly manufactured aqueduct or a purchased input exchange |
| product_classification_scope | Water-supply non-pipeline construction service subset of CPC 3.0 54231 |
| recursive_input_rule | Treat purchased same-category subservice as an explicitly bounded upstream service with exact scope/resources/results; do not recursively purchase the whole aqueduct or count the same repair output twice |
| upstream_dataset_requirement | Actual powder/formulation and other supplies, utilities, fuel, transport, providers and complete-life attributable tools/access assets need compatible upstream datasets and boundaries; mark missing coverage as incomplete |
| disclosure | Declare access, operational state, isolation/diversion/dewatering, contractor scope, retained host, actual materials, excluded adjacent construction and all conditional actual absence evidence |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `host_gate` | `patch_repair` | Map defects and remove only approved material without compromising structural integrity. Qualify stable clean roughened sound substrate and retained rebar; refer major bar damage or structural rebuilding outside this subset. Record actual instruction and approvals. | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `route_gate` | `patch_repair` | For adopted 4100 GB April 2025 v02.03, use 4.4–4.5 L water/25 kg powder, at least 3 minutes mixing and per-batch consistency check; 4–60 mm per-layer and +5 to +30 °C air/substrate limits apply to that product instruction only. Prewet and remove standing water, scratch coat and firmly compact without voids; do not add finishing water or feather-edge. Record actual approved layer strategy; if retained reinforcement is exposed under this adopted 4100 instruction, verify its Sa 2 (ISO 8501-1) preparation requirement against the actual approved method. | `sika-4100-protect-2025` |
| `conditional_coatings` | `patch_repair` | Bonding primer is generally unnecessary on well-prepared roughened substrate; own actual required compatible primer wet-on-wet and any actual retained-rebar protection, including every supplied component and full exposed circumference. Do not assume their absence or invent recipe ratios. | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `cure_and_handover` | `patch_repair` | Protect fresh repair immediately from premature drying with compatible actual method. Retain curing resources and weather records; resolve actual product/current-instruction/owner cure, geometry, bond and water-contact/hygienic conditions before signed acceptance. A brochure laboratory strength or elapsed timer is not site acceptance. | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `complete_job` | All inventory rows | Own actual incremental isolation, diversion, dewatering, access, cleaning, prewetting, containment, disinfection/test water, cure and defect closure including provider-paid resources. Capture oversupply, off-spec mix, tools washout, packaging, waste transport/treatment, utilities and releases. Unknown is not zero; documented actual absence is allowed. |  |
| `one_owner` | `providers`; `assets`; `freight`; `electricity`; `fuel` | Maintain event/resource IDs and exactly one burden owner across direct work, provider bundles, rentals and assets. Existing host manufacture and hypothetical avoided replacement or water-treatment credits are excluded. Factory dry premix is one purchase, not second cement/aggregate/polymer purchases; in-job mixed mortar is a nonadditive activity. |  |
| `period_phase_boundary` | All inventory rows | Enumerate actual job/reporting periods, opening/closing carried-stock phases and reusable-asset manufacture, operation, maintenance/replacement and termination/end-of-life phases. Link every input, asset, output and event to period/phase IDs and original burden owner; no arbitrary annualization or whole-asset repurchase each period. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual mass-based primer, protection and consumable supplies (`aux_mass`)

Process / prospective direction / type: `patch_repair` / `inputs` / `product`.

Expand only actual independent mass-based SKUs/components: required primer/rebar coating, cure compound, cleaning chemicals, abrasive and hygiene/test consumables. Own setup and cleaning inputs.

- Collection subject: Actual mass-based primer, protection and consumable supplies
- Flow property / unit: Mass / kg
- Amount rule: aux_mass_supply / V; actual native kg quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux_mass`
- Sources: `sika-4100-protect-2025`; `sika-concrete-repair-handbook`

Range evidence need: Actual approved SKU/role stock and observed loss distribution needed; no universal coating recipe or dose.

#### Collection requirement: Actual count-based disposable supplies (`aux_count`)

Process / prospective direction / type: `patch_repair` / `inputs` / `product`.

Keep actually count-supplied test items, disposable containers and consumables in compatible Count ledgers; do not duplicate mass purchases or reusable assets.

- Collection subject: Actual count-based disposable supplies
- Flow property / unit: Count / item
- Amount rule: aux_count_supply / V; actual native item quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux_count`

Range evidence need: Actual counted SKU and package-to-item evidence plus variability needed.

#### Collection requirement: Actual length-based consumable supplies (`aux_length`)

Process / prospective direction / type: `patch_repair` / `inputs` / `product`.

Record actual length-supplied temporary seals/tapes or other approved consumables only when needed; returned lengths retain the same unit.

- Collection subject: Actual length-based consumable supplies
- Flow property / unit: Length / m
- Amount rule: aux_length_supply / V; actual native m quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux_length`

Range evidence need: Actual native length, cutting residue and SKU evidence needed.

#### Collection requirement: Actual area-based curing and containment supplies (`aux_area`)

Process / prospective direction / type: `patch_repair` / `inputs` / `product`.

Record actual area-supplied polythene, geotextile or membrane used for curing/containment; shared reusable sheets use assets instead.

- Collection subject: Actual area-based curing and containment supplies
- Flow property / unit: Area / m2
- Amount rule: aux_area_supply / V; actual native m2 quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux_area`
- Sources: `sika-4100-protect-2025`; `sika-concrete-repair-handbook`

Range evidence need: Actual supplied area and cut/reuse/exit records needed; no fixed area-to-repair-volume ratio.

#### Collection requirement: Actual attributable fuel supply (`fuel`)

Process / prospective direction / type: `patch_repair` / `inputs` / `product`.

For actual combustion plant, attribute supplied fuel including nonreturned spills/waste, not only burned fuel. Measure stock, combustion and noncombustion outlets separately; providers must disclose coverage.

- Collection subject: Actual attributable fuel supply
- Flow property / unit: Mass / kg
- Amount rule: fuel_supply / V; actual native kg quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`

Range evidence need: Actual fuel-specific density/state if converted, stock, burn and fate evidence needed; no default fuel use per V.

#### Collection requirement: Actual bounded specialist services (`providers`)

Process / prospective direction / type: `patch_repair` / `inputs` / `product`.

Expand actual isolation/diversion/dewatering/access/preparation/inspection/hygiene or waste-treatment provider exchanges only with completed native-unit results and complete upstream resource coverage. Price or labour hours do not define Count.

- Collection subject: Actual bounded specialist services
- Flow property / unit: Actual verified native property / actual native unit
- Amount rule: provider_quantity / V; actual completed provider quantity in its verified compatible native unit divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_providers`

Range evidence need: Actual scope-matched provider quantity/unit and full resource boundary needed.

#### Collection requirement: Attributable complete-life reusable tools and access plant (`assets`)

Process / prospective direction / type: `patch_repair` / `inputs` / `product`.

Attribute actual mixer, hand/power tools, pumps, access/containment plant and reusable equipment by compatible measured service share across every job/node/period. Include manufacture, maintenance, replacements and end-of-life once.

- Collection subject: Attributable complete-life reusable tools and access plant
- Flow property / unit: Count / item
- Amount rule: asset_equivalents / V; actual native item quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`

Range evidence need: Actual full-life all-consumer denominator, replacement/end-of-life evidence and sensitivity needed; missing coverage blocks final dataset.

#### Collection requirement: Actual usable mass-based outward returns (`return_mass`)

Process / prospective direction / type: `patch_repair` / `outputs` / `product`.

Trace actual usable dry powder, mass-based consumables or unburned fuel leaving for another owner by original SKU and stock relation. Internal issue/closing stock is not outward return.

- Collection subject: Actual usable mass-based outward returns
- Flow property / unit: Mass / kg
- Amount rule: usable_mass_returns / V; actual native kg quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_return_mass`

Range evidence need: Actual usable native mass and matched attribution evidence needed; no arbitrary return credit.

#### Collection requirement: Actual usable counted outward returns (`return_count`)

Process / prospective direction / type: `patch_repair` / `outputs` / `product`.

Preserve actual counted SKU/packaging unit for outward usable returns; do not force them through a mass view.

- Collection subject: Actual usable counted outward returns
- Flow property / unit: Count / item
- Amount rule: usable_count_returns / V; actual native item quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_return_count`

Range evidence need: Actual matched counted return evidence needed.

#### Collection requirement: Actual usable length-based outward returns (`return_length`)

Process / prospective direction / type: `patch_repair` / `outputs` / `product`.

Preserve measured native lengths leaving the job as usable supply; match original supply once.

- Collection subject: Actual usable length-based outward returns
- Flow property / unit: Length / m
- Amount rule: usable_length_returns / V; actual native m quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_return_length`

Range evidence need: Actual compatible length-return evidence needed.

#### Collection requirement: Actual usable area-based outward returns (`return_area`)

Process / prospective direction / type: `patch_repair` / `outputs` / `product`.

Preserve measured native areas leaving as usable sheets or membranes, distinct from closing reusable asset stock and waste.

- Collection subject: Actual usable area-based outward returns
- Flow property / unit: Area / m2
- Amount rule: usable_area_returns / V; actual native m2 quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_return_area`

Range evidence need: Actual compatible area-return evidence needed.

#### Collection requirement: Actual usable volume-based outward returns (`return_volume`)

Process / prospective direction / type: `patch_repair` / `outputs` / `product`.

Record only actual usable supplied water or other volume-based supply transferred outward, retaining source and fate; host-water diversion is a separate physical state transfer.

- Collection subject: Actual usable volume-based outward returns
- Flow property / unit: Volume / m3
- Amount rule: usable_volume_returns / V; actual native m3 quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_return_volume`

Range evidence need: Actual source/state-compatible volume-return evidence needed.

#### Collection requirement: Actual solid and paste waste to treatment (`material_waste`)

Process / prospective direction / type: `patch_repair` / `outputs` / `waste`.

Record removed host concrete/rebar corrosion residue, rejected dry/wet/cured mortar, unused nonreturnable supplies and packaging by actual composition/state/destination. Retain purchased-material upstream burden; no generic recycling credit.

- Collection subject: Actual solid and paste waste to treatment
- Flow property / unit: Mass / kg
- Amount rule: waste_mass / V; actual native kg quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_waste`
- Sources: `sika-concrete-repair-handbook`

Range evidence need: Actual separated waste masses, moisture, treatment and recovery evidence needed.

#### Collection requirement: Actual substance-specific releases by receiving medium (`releases`)

Process / prospective direction / type: `patch_repair` / `outputs` / `elementary`.

Expand actual dust species/particle class, combustion species, uncaptured contaminated water substances or other demonstrated releases by real substance and receiving medium. Use measurement or valid activity-factor/composition-fate evidence; SDS or a balance residual alone is insufficient.

- Collection subject: Actual substance-specific releases by receiving medium
- Flow property / unit: Mass / kg
- Amount rule: species_release_mass / V; actual native kg quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

Range evidence need: Actual species/medium measurement or compatible activity-factor-fate uncertainty needed; unknown does not imply zero.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `patch_repair` | Integrated retained-aqueduct patch repair | required | Qualified bounded hand-applied water-supply repair; only final signed acceptance creates output | Damaged retained host → prepared host → measured hand-placed mortar → cured accepted patch; embedded removal/mixing/profile/cure have no independent product handoff | 1 m3 reference flow |

### Process: Integrated retained-aqueduct patch repair (`patch_repair`)

This is a batch-based repair service. Job, patch, batch, layer, event and attempt IDs link preparation, dry powder/water mixing, hand placement, cleaning, curing, tests and defect closure. Retained host/rebar and installed cured mortar are state interfaces, not extra purchases. Batch fresh mortar, applied mortar and retained cured mass are nonadditive reconciliation views. Rejected mix and defective patches loop back to preparation/mixing/placement in this same node or exit to identified waste treatment; retained failed-attempt burdens remain with the final unique V.

#### Inputs

##### Product flows

###### Approved one-part dry repair mortar (`repair_powder`)

Actual water-contact dry premix crosses as net dry powder; weigh batches and retain formulation/SKU and packaging tare. No second wet-mortar or constituent purchase.

- Selected flow: Approved one-part dry repair mortar
- Flow property / unit: Mass / kg
- Amount rule: powder_supply / V; actual native kg quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_repair_powder`
- Sources: `sika-4100-protect-2025`

Range evidence need: Actual job/SKU dry-powder supply and uncertainty needed; theoretical consumption is not an empirical yield.

###### Metered clean mixing water (`mix_water`)

Meter clean water entering each powder batch; separate mixed, discarded, retained and evaporated water. Do not add mixed water twice through a bought wet-mortar exchange.

- Selected flow: Metered clean mixing water
- Flow property / unit: Volume / m3
- Amount rule: mix_water_supply / V; actual native m3 quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mix_water`
- Sources: `sika-4100-protect-2025`

Range evidence need: Actual mixing-water supply per accepted V, batch dosing variability, density/state and meter uncertainty need foreground evidence. The adopted-product water/powder instruction is a conditional method requirement, not a per-output quantity range.

###### Actual preparation, cleaning, curing and test water (`aux_water`)

Own actual prewet/standing-water removal, tool wash, curing, disinfection/test and incremental isolation/dewatering water. Distinguish purchased water from retained host-water transfer and identify actual fate. Retained host-water diversion is a physical state transfer, not another purchased water input; own its actual incremental supplies, energy, provider and waste/release fates.

- Selected flow: Actual preparation, cleaning, curing and test water
- Flow property / unit: Volume / m3
- Amount rule: aux_water_supply / V; actual native m3 quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux_water`
- Sources: `sika-4100-protect-2025`; `sika-concrete-repair-handbook`

Range evidence need: Actual purpose-specific water volumes, origin/fate and meter uncertainty needed.

###### Actual direct electricity (`electricity`)

Record actual mixer, preparation, pumping, access, lighting, curing or testing electricity once, including off-spec work. Separate provider-included electricity; resolve actual Energy support before final dataset.

- Selected flow: Actual direct electricity
- Flow property / unit: Energy / kWh
- Amount rule: electricity_attributed / V; actual native kWh quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`

Range evidence need: Actual metered energy by job/period and allocation uncertainty needed.

###### Actual attributable freight transport (`freight`)

Track actual material, tools and waste movements with payload, distance, route and empty-leg allocation evidence; avoid bundled-delivery duplicates.

- Selected flow: Actual attributable freight transport
- Flow property / unit: mass*distance / kg*km
- Amount rule: freight_work / V; actual native kg*km quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`

Range evidence need: Actual route/payload and allocation records needed; no generic distance.

#### Outputs

##### Product flows

###### Accepted installed patch repair (`accepted_patch_repair`)

Output exists only after signed complete cure, geometry/bond and actual water-contact/hygienic gate. Measure V from actual accepted geometry, excluding overlaps, voids and rejected attempts.

- Selected flow: Accepted hand-applied cementitious concrete patch repair of retained water-supply aqueduct
- Flow property / unit: Volume / m3
- Amount rule: 1 m3
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_accepted_patch_repair`
- Sources: `sika-4100-protect-2025`; `sika-concrete-repair-handbook`

Range evidence need: Exact 1 m3 is normalization only; actual patch volume/uncertainty and gate evidence required, no empirical yield implied.

##### Waste flows

###### Actual collected wastewater to treatment (`aqueous_waste`)

Measure captured preparation, washout, cure/test and hygiene wastewater with sludge separation and treatment destination. Captured wastewater is not also an elementary release; inherited host water and supplied water stay distinguishable.

- Selected flow: Actual collected wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: wastewater_volume / V; actual native m3 quantity divided by accepted installed V in m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aqueous_waste`
- Sources: `sika-4100-protect-2025`

Range evidence need: Actual collected volume/composition and treatment uncertainty needed.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `supply_stock` | All supplied material/fuel rows and usable return rows | For each actual SKU and native unit, attributable gross supply = opening attributable stock + external net-tare gross receipts - closing carried stock; internal issue is not a purchase. Gross-with-outlets retains outward usable return exchanges; consumed-only removes matched usable returns from attributed supply once and omits a second return credit. Declare convention; never subtract nonreturned waste/loss. Closing stock is not outward return. |  |
| `single_repair_output` | `accepted_patch_repair`; `material_waste`; `aqueous_waste` | No intended coproduct is assumed. All preparation, setup/changeover/cleaning, failed batches, removals, repeat tests and repeat curing remain attributed to unique final positive V. Rejected mix/patch has a same-node rework loop or evidenced waste/recovery exit, never accepted output. Document actual recovery destination and burden treatment; no avoided-asset or hypothetical recycling credit. |  |
| `batch_attribution` | `patch_repair` | Index each batch and all consumers/patches with actual powder/water, applied fresh mix and residuals. Allocate shared preparation/cleaning/test resources by measured compatible causal driver, retain all consumers and sum shares to unity, assign each event once. Do not multiply V by batch/layer/attempt count or count intermediate mixed mortar as a second product. |  |
| `asset_life` | `assets` | For each asset, attributed equivalent = actual job compatible driver / whole-life all-consumer driver. Cover every job/node/period, full manufacture, maintenance, replacements and end-of-life. Use complete observed life or observed history plus evidenced remainder, replacements, termination and end-of-life scenario with uncertainty, sensitivity and update triggers. A short campaign denominator or rental hours alone cannot establish full-life coverage; missing denominator/coverage blocks final dataset. |  |
| `provider_exclusivity` | `providers`; `assets`; `freight`; `electricity`; `fuel` | Match genuine provider native unit to completed resource/result scope and disclosed full upstream coverage. One owner for each direct utility, supplied material, freight, rental, asset, spare and treatment burden. Exclude covered direct duplicates and include uncovered resources explicitly; price/hours are not invented service Count. |  |
| `phase_attribution` | All inventory rows | Assign actual period-specific resource use and stock burden carry to the receiving job once; retain original material burden with carried stock until attributed use/exit. Allocate manufacture and replacement/end-of-life asset burdens using the evidenced complete-life all-consumer driver, while actual period operation/maintenance has explicit coverage and one owner. Link phase shares and all consumers, prevent charging the whole asset or carried supply again in another period. Unknown replacement or termination assumptions block finalization. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_repair_powder` | `patch_repair` | `repair_powder` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; dry_mass; opening_stock; receipts_net_tare; closing_stock; batch_id; powder_dosed; returns; waste; loss; powder_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | kg | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_mix_water` | `patch_repair` | `mix_water` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; source; batch_id; water_meter_start; water_meter_end; water_volume; powder_dosed; discarded_water; retained_water; evaporated_water; water_mass_weighed; water_density; density_unit; water_state; water_temperature; density_source; mix_water_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m3 | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_aux_mass` | `patch_repair` | `aux_mass` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; role; component_id; opening_stock; receipts_net_tare; closing_stock; used; returns; waste; loss; aux_mass_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | kg | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_aux_count` | `patch_repair` | `aux_count` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; count_unit; opening_stock; receipts; closing_stock; used; returns; waste; aux_count_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | item | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_aux_length` | `patch_repair` | `aux_length` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; opening_stock; receipts; closing_stock; used_length; returned_length; waste_length; aux_length_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_aux_area` | `patch_repair` | `aux_area` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; opening_stock; receipts; closing_stock; used_area; returned_area; waste_area; aux_area_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m2 | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_aux_water` | `patch_repair` | `aux_water` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; source; purpose; supplied_water; host_water_transfer; recovered_water; discharge; retained_water; loss; aux_water_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m3 | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_fuel` | `patch_repair` | `fuel` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; fuel_sku; opening_stock; receipts_net_tare; closing_stock; burned; returned; waste; uncontained_loss; recovered_spill_in_closing; total_spill_audit; fuel_supply | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | kg | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_electricity` | `patch_repair` | `electricity` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; meter_id; opening_reading; closing_reading; electricity; provider_coverage; allocation_driver; electricity_attributed | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | kWh | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_freight` | `patch_repair` | `freight` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; trip_id; leg_id; loaded_or_empty; cargo_id; payload_kg; distance_km; route; attribution_driver; job_share; empty_leg_share; provider_coverage; provider_empty_leg_coverage; uncovered_empty_activity; uncovered_empty_unit; uncovered_empty_owner; freight_work | Reconcile actual loaded and empty legs, measured payload/distance and job attribution against the matched supplier coverage. Record any uncovered empty activity in its actual native unit and link its exclusive provider/resource owner; never convert empty movement to fictitious cargo work. Denominator V is unique finally accepted installed geometric volume in m3. | kg*km | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_providers` | `patch_repair` | `providers` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; provider_id; scope; result_id; native_property; native_unit; quantity; utility_asset_material_transport_coverage; exclusions; provider_quantity | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | actual native unit | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_assets` | `patch_repair` | `assets` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; asset_id; all_consumer_ids; period_ids; job_driver; whole_life_driver; manufacture; maintenance; replacements; end_of_life; observed_history; evidenced_remainder; termination; uncertainty; driver_unit; remainder_source; sensitivity; update_trigger; asset_equivalents | Read full-life asset registers and actual job driver; enumerate all consumers, history/remainder/replacement/termination/end-of-life evidence with uncertainty. Denominator V is unique finally accepted installed geometric volume in m3. | item | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_accepted_patch_repair` | `patch_repair` | `accepted_patch_repair` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; before_geometry; after_geometry; net_area; depth_distribution; V; survey_uncertainty; cure_evidence; bond_result; hygiene_approval; defects_closed; signed_acceptance | Survey disjoint before/after patch geometry and depth distribution with calibrated traceable methods; reconcile cure/bond/hygiene and signed defect-closed acceptance; reject void/overlap/unaccepted volume. Denominator V is unique finally accepted installed geometric volume in m3. | m3 | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_return_mass` | `patch_repair` | `return_mass` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; destination; transfer_id; returned_mass; original_supply_owner; accounting_convention; usable_mass_returns | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | kg | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_return_count` | `patch_repair` | `return_count` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; count_unit; returned_count; original_supply_owner; usable_count_returns | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | item | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_return_length` | `patch_repair` | `return_length` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; returned_length; original_supply_owner; usable_length_returns | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_return_area` | `patch_repair` | `return_area` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; returned_area; original_supply_owner; usable_area_returns | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m2 | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_return_volume` | `patch_repair` | `return_volume` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; returned_volume; original_supply_owner; source_state; usable_volume_returns | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m3 | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_material_waste` | `patch_repair` | `material_waste` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; waste_id; origin_event; composition; moisture_state; gross_mass; tare; destination; treatment_receipt; supply_link; waste_mass | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | kg | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_aqueous_waste` | `patch_repair` | `aqueous_waste` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; source_water; volume; solids_separated; contaminants; capture; destination; treatment_receipt; wastewater_volume | Collect traceable actual job/batch/event measurements, stock/receipt/fate or completed service records in native units; reconcile original SKU/provider and exclusive burden owner. Denominator V is unique finally accepted installed geometric volume in m3. | m3 | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |
| `cp_releases` | `patch_repair` | `releases` | Foreground measured records | job_id; patch_id; event_id; period_id; phase_id; routine_or_incident; substance; medium; particle_class; measurement; activity; factor; composition; fate; capture; stock; return; waste_exclusion; uncertainty; species_release_mass | Use actual event/species/medium measurements or compatible documented activity-factor/composition-fate model; separate capture, stock, returns and waste. Denominator V is unique finally accepted installed geometric volume in m3. | kg | Each batch/event/transfer and final reconciliation | Full job including preparation, all attempts, curing and signed handover | Actual repair site and all attributable provider/shared-resource records | per reference flow | Calibration/tare/source/SKU; event ownership; uncertainty; acceptance or treatment evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_repair_powder` | `repair_powder` | Amount = powder_supply / V; retain actual numerator unit kg per accepted installed m3. | `cp_repair_powder`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_mix_water` | `mix_water` | Amount = mix_water_supply / V; retain actual numerator unit m3 per accepted installed m3. | `cp_mix_water`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_aux_mass` | `aux_mass` | Amount = aux_mass_supply / V; retain actual numerator unit kg per accepted installed m3. | `cp_aux_mass`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_aux_count` | `aux_count` | Amount = aux_count_supply / V; retain actual numerator unit item per accepted installed m3. | `cp_aux_count`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_aux_length` | `aux_length` | Amount = aux_length_supply / V; retain actual numerator unit m per accepted installed m3. | `cp_aux_length`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_aux_area` | `aux_area` | Amount = aux_area_supply / V; retain actual numerator unit m2 per accepted installed m3. | `cp_aux_area`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_aux_water` | `aux_water` | Amount = aux_water_supply / V; retain actual numerator unit m3 per accepted installed m3. | `cp_aux_water`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_fuel` | `fuel` | Amount = fuel_supply / V; retain actual numerator unit kg per accepted installed m3. | `cp_fuel`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_electricity` | `electricity` | Amount = electricity_attributed / V; retain actual numerator unit kWh per accepted installed m3. | `cp_electricity`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_freight` | `freight` | Amount = freight_work / V; retain actual numerator unit kg*km per accepted installed m3. | `cp_freight`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_providers` | `providers` | Amount = provider_quantity / V; retain actual numerator unit actual native unit per accepted installed m3. | `cp_providers`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_assets` | `assets` | Amount = asset_equivalents / V; retain actual numerator unit item per accepted installed m3. | `cp_assets`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_accepted_patch_repair` | `accepted_patch_repair` | 1 m3 accepted reference output only when V > 0 and all required signed gates pass. | `cp_accepted_patch_repair`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_return_mass` | `return_mass` | Amount = usable_mass_returns / V; retain actual numerator unit kg per accepted installed m3. | `cp_return_mass`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_return_count` | `return_count` | Amount = usable_count_returns / V; retain actual numerator unit item per accepted installed m3. | `cp_return_count`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_return_length` | `return_length` | Amount = usable_length_returns / V; retain actual numerator unit m per accepted installed m3. | `cp_return_length`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_return_area` | `return_area` | Amount = usable_area_returns / V; retain actual numerator unit m2 per accepted installed m3. | `cp_return_area`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_return_volume` | `return_volume` | Amount = usable_volume_returns / V; retain actual numerator unit m3 per accepted installed m3. | `cp_return_volume`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_material_waste` | `material_waste` | Amount = waste_mass / V; retain actual numerator unit kg per accepted installed m3. | `cp_material_waste`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_aqueous_waste` | `aqueous_waste` | Amount = wastewater_volume / V; retain actual numerator unit m3 per accepted installed m3. | `cp_aqueous_waste`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_releases` | `releases` | Amount = species_release_mass / V; retain actual numerator unit kg per accepted installed m3. | `cp_releases`; V; actual job ledger | Native exchange per 1 m3 reference flow |  |
| `calc_supply` | `repair_powder`; `aux_mass`; `aux_count`; `aux_length`; `aux_area`; `aux_water`; `mix_water`; `fuel` | For each SKU/native unit: supply = opening attributable stock + external net-tare gross receipts - closing carried stock. Apply declared gross-with-outlets or consumed-only convention to usable outward returns once; retain all nonreturned waste/loss upstream burdens. | SKU stock/receipt/return ledger; convention | Attributed upstream supply |  |
| `calc_fuel_balance` | `fuel`; `return_mass`; `material_waste`; `releases` | Opening + receipts = closing + burned + usable outward return + nonburned waste + uncontained loss; final outlets disjoint. Retained recovered spill belongs in closing; total spill is audit-only and not a second final outlet. Burned activity alone feeds combustion factors; upstream supply includes nonreturned unburned waste/loss. | Fuel-native stock, burn, event and fate ledger | Supply/combustion separation |  |
| `calc_mortar_state` | `repair_powder`; `mix_water`; `material_waste`; `aqueous_waste`; `accepted_patch_repair`; `releases` | Dry powder + actual batch water = fresh batch mass by compatible measured water density where needed. Partition actual applied fresh mix, setup residue, off-spec mix and washout without duplicates. Cured retained material and retained water require actual hydration/evaporation/state evidence; no fresh-density inference of cured mass or accepted V. Actual geometry independently defines V. | Measured powder/water; batch/fate records; matching state evidence; geometry | Nonadditive dry/fresh/cured physical reconciliation |  |
| `calc_fluid_release` | `aux_water`; `mix_water`; `return_volume`; `aqueous_waste`; `releases` | Keep supplied/host/recovered fluid origins and final retained, returned, collected-waste and uncaptured fates disjoint. Whole-fluid balance and species/medium releases are nonadditive views. Species release uses measurement or valid activity-factor/composition-fate; exclude captured/stock/return/waste once. Routine and incident owners are separate; never turn unexplained residual into a pollutant. | Origin/fate and actual species/event evidence | Physical balance and elementary inventory distinction |  |
| `calc_shared_asset` | `assets` | asset_equivalents = actual compatible job driver / evidenced whole-life all-consumer driver; match full manufacture/maintenance/replacement/end-of-life coverage to this fraction once. | cp_assets; full life and all consumers | Attributable native asset equivalent |  |
| `calc_freight_work` | `freight` | freight_work = sum actual loaded payload_kg * actual loaded-leg distance_km * documented job attribution. This cargo work does not measure empty movement. If the matched kg*km supplier dataset includes empty legs, retain its actual coverage evidence and do not add those resources again. Otherwise collect actual attributed empty-leg vehicle activity in a compatible native-unit provider service, or its fuel/electricity/asset resources under the existing providers/fuel/electricity/assets roles, with one exclusive owner. Uncovered empty activity blocks data-package finalization; never invent payload mass to represent it. Exclude delivery already covered by another owner. | cp_freight; trip scope | kg*km freight work |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | All actual exchanges | Resolve each actual SKU/component/service/waste/substance and receiving medium to a verified concrete flow/property/unit before final TIDAS exchange; do not expand unknown umbrellas into guessed identities. | Detail and support identity confirmation; actual SKU and scope evidence |
| `dq_gate` | `accepted_patch_repair` | Require current owner/product instruction and actual retained-host qualification, before/after survey, full required cure, geometry/bond/hygienic results and signed defect closure; no acceptance from laboratory brochure values. | Actual approved instruction, calibrated survey and signed job evidence |
| `dq_range` | All inventory rows | Obtain actual job/SKU quantity variability and measurement uncertainty for rows without defensible numerical ranges. The adopted 4100 water ratio is a conditional recipe check only, not empirical amount per V or permission to borrow theoretical yield. | Foreground collection protocols; adopted source version; actual uncertainty |
| `dq_complete` | `patch_repair` | Reconcile full preparation/cleaning/cure/test/rework event register and all provider-paid resources. Actual absence must have evidence; missing inputs, fates, provider coverage or asset full-life denominator blocks final dataset. | Resource/event/contract/asset ledgers and bounded completeness assessment |
| `dq_coverage` | All records | Declare site, time, product version, measured versus modelled shares, units/state, uncertainty and source representativeness; update after changed method, material, acceptance or actual life evidence. | Traceable primary records, uncertainty and update log retained with dataset |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_scope` | `patch_repair` | Verify water-supply non-pipeline host and this hand-applied local spall route. Unqualified major structural/rebar repair, whole spray lining or adjacent category cannot silently pass this subset. | `un-cpc-3-2025`; `sika-4100-protect-2025` |
| `val_method` | `patch_repair` | Check actual substrate/rebar and optional primer/protection, approved batching/layers/environment and immediate compatible cure against adopted current instruction. Resolve conflicts by competent written approval; do not erase product-specific criteria or apply illustrative handbook numbers universally. | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `val_output` | `accepted_patch_repair` | Require unique positive V with all signed gates; exclude voids/overlap/rejected attempts and unknown states. Amount is 1 m3; every other amount uses actual compatible native numerator / V. Supplied fresh mortar or whole conduit length is not output denominator. |  |
| `val_reconciliation` | All inventory rows | Check dry/wet/cured and water/fuel stocks/fates, gross/consumed convention, nonreturned waste upstream burden, usable native returns and actual species/medium evidence. Intermediate activities and physical/species views cannot be additive purchases/releases. |  |
| `val_batch_rework` | `patch_repair` | Require linked batch/patch/event/attempt records and reject routes. Sum all shared-run shares to one, assign events once, keep failed work in final V attribution and exclude rejects from accepted output. |  |
| `val_asset_provider` | `assets`; `providers` | Require complete-life all-consumer asset driver and full burden coverage with remainder/end-of-life sensitivity; require actual bounded provider-native results and exclusive ownership of utilities/freight/materials/assets. Missing denominator or coverage is incomplete. |  |
| `val_readiness` | All inventory rows | Report performed/skipped checks and actual gaps. Structural checking does not verify concrete UUIDs, site measurements, acceptance or publication readiness; unresolved identities/supports and uncollected required evidence prevent a final dataset. |  |
| `val_period_phase` | All inventory rows | Check period/phase IDs for inputs, outputs, assets and events, opening/closing burden carry, replacement and termination/end-of-life coverage, period-specific shares and complete-life totals. Prevent repeated manufacture/stock burden and require resolution of replacement/termination gaps. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for accepted installed water-supply aqueduct patch repair service |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projection |
| allowed_use | Scope-matched accepted hand-applied local spall repair at declared material/version, state and gate with full job burdens |
| excluded_use | Whole aqueduct construction or operation, supplied wet mortar, irrigation/pipeline/tunnel repair, alternative spray/coating/crack/joint route, universal lifetime/strength/leakage or avoided replacement claim |
| required_metadata | PCR id/version; actual site/job/patch/batch/event; water-supply host; material/SKU/version; method/owner approval; disjoint V, area/depth/survey; substrate/rebar; cure and acceptance; resource/provider/asset boundaries; actual exchange identities and units |
| required_quality_disclosure | Coverage, unknowns and absence evidence; actual measured/modelled shares; state conversions; stock convention and fates; provider/exclusive ownership; complete-life asset basis; uncertainty and range limitations |
| update_trigger | Changed approved product/instruction, operational/substrate condition, gate, geometry, provider scope, allocation driver, recovery fate or actual asset-life evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `sika-4100-protect-2025` | literature | Sika MonoTop-4100 Protect Product Data Sheet, GB, April 2025 v02.03, pp. 1–5. https://gbr.sika.com/dam/dms/gb01/o/sika-monotop-4100protect.pdf | Actual one-part mortar identity, potable-water suitability claim, preparation, conditional primer/rebar protection, hand route, product-specific batching/layer/environment conditions, compatible cure and tool cleaning. Laboratory/theoretical quantities are not universal job yields. |
| `sika-concrete-repair-handbook` | handbook | Sika Concrete Repair Site Handbook, Hand Placed and Sprayed Applications, printed pp. 10–19 and 21. https://www.sika.com/dam/dms/corporate/2/glo-concrete-repair-site-handbook.pdf | Retained-host integrity, defect and reinforcement referral, hand placement/compaction, primer conditionality, curing protection, component mixing and cleaning/residue roles; illustrative numerical geometries are not universal repair defaults. |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, code 54231, printed p. 285. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Water-supply aqueduct/non-pipeline classification boundary and narrower mapping context; not source of original foreground stock, fuel, freight or asset algebra. |
