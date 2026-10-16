---
pcr_id: pcr.farmed-live-whole-raft-cage-common-octopus
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Farmed live whole raft-cage common octopus

## 1. Scope and Applicability

This PCR defines foreground data production for whole live, never-frozen, nonornamental *Octopus vulgaris* obtained as small wild creel-caught animals and subsequently grown under managed feeding in sex-separated cages with PVC dens suspended from a shared mussel raft. The route evidence is the Ría de Vigo, Galicia experiment reported by Chapela et al. (2006). An application must demonstrate this origin and managed ongrowth and document its own final nonreturn collection, grading, bounded holding or evidenced bypass, protective live presentation and all movements through the first physical recipient. A payer, invoice or change of ownership does not establish physical receipt.

The study's animals removed for SCUBA sample weighing were returned to their cages. Those events are management loops, not final harvests or sales. Its winter and summer cohorts, spawning, mortality and late failures constrain interpretation; the first 75-day analytical subset is not an inventory boundary. The paper's viability discussion establishes neither present commercial success nor current legal, welfare or safety eligibility. No animal handling technique, treatment, salinity threshold, feed ratio, cage dimension, animal size, cycle duration or yield in the source is a PCR operating default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-raft-cage-common-octopus |
| classification_refs | CPC 3.0 04472, Farmed octopus, live, fresh or chilled; narrower methodological scope |
| covered_products | Whole live never-frozen nonornamental Octopus vulgaris with wild-small-animal ancestry and evidenced managed raft-cage ongrowth, at first physical receipt |
| excluded_products | Direct wild final catch; closed hatchery-origin animals; other species or production systems; ornamental animals; dead fresh or chilled, frozen, killed, cooked, dried, salted, brined, eviscerated or mantle-only products; unknown origin, state or gate |
| representative_product | Whole live common octopus from the Ría de Vigo source-context raft-cage ongrowth route |
| production_route | Wild creel acquisition and live transport; managed sex-separated raft-cage ongrowth with purchased fresh/frozen fish, crab and mussel feed stored/thawed as actually practiced; independent nonreturn collection; grading; conditional bounded live holding; presentation; all prereceipt logistics |
| market_state | Whole live and never frozen at physical receipt; actual count, size, sex/cohort, condition and destination declared |

## 3. Reference Flow

### Functional Unit

| Field | Value |
| --- | --- |
| What | Accepted whole live never-frozen nonornamental farmed Octopus vulgaris at the first actual physical recipient |
| How much | 1 kg net whole-live animal wet mass |
| How well | Species, wild origin, managed ongrowth, whole-body integrity, live receipt and lot acceptance independently established; actual size/count and condition retained without a universal grade or safety claim |
| How long or cycle | Actual acquisition, transport, full sex/cohort/season ongrowth, failures, collection, sorting, holding if active, presentation, receipt and cleanup periods; opening/closing stocks and shared asset service periods reconciled |
| reference_flow_link | `live_octopus_received` |

### Reference Flow Object

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live raft-cage-ongrown Octopus vulgaris at first physical receipt |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Octopus vulgaris identity; wild creel-source origin and capture period; acquisition/capture/transport ancestry; managed raft-cage and PVC-den ongrowth evidence; location; sex/cohort/season; complete period boundaries; actual feed species/source/state; whole live never-frozen nonornamental state; actual count/size/condition; net wet animal mass method and tare/free-water exclusion; final nonreturn custody; grading destinations; holding active/bypass/unknown and bounded times; presentation/carrier-water/package roles; every prereceipt leg; physical recipient/time/acceptance; losses/stocks/returns; shared raft consumers and allocation; upstream and identity gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_wet_mass` | reference product | Mass | kg | A is the positive observed accepted net whole-live animal wet mass of the same receipt lot, measured under cp_receipt. Retain mantle, arms, organs and native animal body water. Exclude free/carrier water, tare, packaging and incidentals. Record the actual noninjurious measurement method; source sample manipulation is not prescribed. |
| `native_quantity` | all inventory rows | Native declared property | Native declared unit | Preserve each instance's physical property and unit before dividing its attributable quantity by A. Electricity exchanges retain actual kWh, fuel exchanges actual kg or m3 and heat exchanges actual MJ when those are the verified native units. Auxiliary energy accounting never replaces or duplicates a fuel exchange. Hours apply only to real timed equipment/use services; all other services retain provider-defined native property/unit without conversion to hours. Freight retains actual tonne-kilometres. Count, size and condition are independent metadata; count-to-mass estimates require representative weighed live same-lot samples, sampling design and uncertainty, never a species constant. |
| `internal_transfer` | internal handoffs | Mass | kg | Pair animal, carrier/free-water, material, stock, return and package transfers by transfer id, same state and native unit at sender and receiver; measure nonfinal quantities independently. Never force an internal feed to 1 kg or subtract rejected animals without carrying their inherited burden. |
| `water_release_basis` | water and release instances | Mass | kg | Record actual seawater abstraction separately from purchased water and internal circulation. Same water is not re-abstracted at each node. Pollutant mass is distinct from total water, with substance/basis/medium and measured inputs for any calculation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Small live wild creel-origin Octopus vulgaris acquired for raft-cage ongrowth, with source/capture and transport ancestry; actual arrival quantities, losses, water and reusable transport equipment recorded |
| starting_condition_role | Biological production input with retained upstream capture and transport burdens, not burden-free wild biomass or a farmed final reference |
| product_classification_scope | Narrow live whole raft-cage-ongrown Octopus vulgaris subset of CPC 3.0 04472 |
| recursive_input_rule | Declare any received or returned same-category animal lot, its origin, stage, remaining service and inherited burdens. Stop recursive tracing only at an explicit documented upstream dataset boundary; do not recreate prior growth or erase capture ancestry. |
| upstream_dataset_requirement | Capture, acquisition logistics, feeds, utilities, materials, services, infrastructure and waste treatment require boundary-compatible supplier/foreground evidence or explicitly qualified upstream datasets. Disclose missing upstream coverage rather than assuming zero. |
| disclosure | Site and raft; origin/capture method; sex/cohort/season and actual dates; live transport; actual feed/storage/thawing; complete failures and reproductive events; final custody/receipt; holding state; all intended outputs and losses; water/package/stock transfers; shared raft/service users; allocation and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_origin` | acquisition | Keep wild capture and source-to-raft live transport explicit, either measured here or inherited once from a verified upstream dataset. Separate initial wild animals from the later farmed output; do not claim closed hatchery ancestry. | `chapela-octopus-2006` |
| `boundary_growth` | raft_ongrowth | Include actual stocking, fresh/frozen feed purchase/storage/thawing, feeding, sex/cohort management, monitoring/sampling returns, fouling and dead-animal removal, food-remnant suction, cleaning, replacement and termination. Open-water ambient exposure is not an invented pumped-water input; actual pumps/abstraction are separately recorded. | `chapela-octopus-2006` |
| `boundary_final` | final_collection; grade_destination | Final nonreturn removal from managed cages is an independent custody change, followed by declared destination sorting. Source research returns do not prove this event. Incoming whole-live animals must reconcile to accepted live onward lots, actual alternative intended outputs, actual returns/retained stocks and actual rejects/waste with destinations. |`pcr-octopus-foreground-method` |
| `boundary_holding` | live_holding | A bounded preservation intervention after sorting is conditional on actual records with start/end, incoming usable live state, outgoing live state and its own supplies/services/losses. Evidenced bypass routes sorted animals directly to presentation. Unknown state or duration is a gap, not zero or bypass. |`pcr-octopus-foreground-method` |
| `boundary_gate` | live_presentation; prereceipt_logistics | Presentation protects the live state and keeps carrier water and reusable/single-use equipment separate from animal mass. Distribution belongs to prereceipt_logistics, including every movement before first physical receipt regardless of payer. The reference excludes later recipient operations, use and end of life; actual in-boundary waste destinations remain included. |`pcr-octopus-foreground-method` |
| `boundary_shared` | shared assets and periods | Identify the mussel raft/platform, cages, PVC dens, vessel/tanks, storage and presentation equipment, every real service consumer and service period, including other raft users. No mussel biomass input is invented solely because a raft has mussel users; its service is not free. | `chapela-octopus-2006` |
| `boundary_complete` | all nodes | Record actual active/bypass/unknown state for every conditional instance, all intended output instances, residues, mortality, escapes, water, material, packaging and elementary destinations. Reconcile periods and loops without double counting. Complete bundled services exclude covered energy/material/asset/releases from separately counted components. |`pcr-octopus-foreground-method` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `acquisition` | Wild-origin acquisition and live transport to raft | required | Actual source/capture/transport scope distinguished from inherited upstream coverage | Initial animal acquisition and transport, not farmed final output | Actual acquired whole-live mass |
| `raft_ongrowth` | Managed raft-cage ongrowth and cohort management | required | Evidenced managed ongrowth of acquired animals | Batch/cohort managed biological production; sex and season indexed | Actual standing/output/stock/return quantities |
| `final_collection` | Final nonreturn collection from cages | required | Actual application final removal and custody required | Independent harvest responsibility, excluding sampling returns | Actual whole-live collected mass |
| `grade_destination` | Grade and destination sorting | required | Actual lot grading/destination decision required | Reconcile accepted live, alternative products, returns/stocks and rejects | Actual measured destination quantities |
| `live_holding` | Bounded post-sort live holding | conditional | Documented intervention with start/end; otherwise evidenced bypass; unknown remains gap | Preserve sorted live state without extending ongrowth by assumption | Actual entering/exiting live mass and duration |
| `live_presentation` | Protective live presentation | required | Actual protective presentation and material roles documented | Product/package/carrier interface, excluding logistics | Actual presented whole-live animal mass |
| `prereceipt_logistics` | All prereceipt transport and physical receipt | required | Every post-presentation leg and any earlier unowned movement recorded once | Live delivery and first physical acceptance | Positive receipt mass A |

Production is cohort/batch based. Index actual stocking windows, sex-separated cages, seasons, feed lots, sampling loops, cleaning, changeovers, failures, spawning, partial removals, opening/closing stocks and termination. These are observed dimensions, not a universal cycle. The source's 99-day winter and 83/90-day summer trials illustrate why a 75-day analysis cannot remove later burdens.

Every applicable Section 8 collection obligation resolves into zero, one or multiple actual instances with its own material/substance, state, destination, native property/unit, identity and uncertainty. A zero requires evidence of absence; unknown does not. Material cards include actual carried water/package transfers only when named in the transfer ledger. Side-product cards preserve stock and return burdens; no avoided-production credit is automatic. Carrier-native properties/units mean the verified actual electricity, fuel or heat exchange, for example Energy/kWh, Mass/kg, Volume/m3 or Energy/MJ respectively, never an automatic common-MJ replacement. Service-native properties/units mean actual provider-defined exchanges; Duration/h applies only to evidenced timed service or equipment occupancy. Other services keep their native property/unit; neither money nor another service unit silently becomes hours. Conditional carrier/service Range units follow each concrete instance, not a mixed-unit total.

Every nonfinal Range is a provisional `0..U` uncertainty envelope, not a measured cap, default quantity, permitted emission or a source-derived interval. Establish each U independently using bounded equipment/route records or independent comparable observations and retain the derivation and coverage. A batch maximum cannot validate the same batch. Unknown U blocks a numerical claim; only the final A/A normalization is fixed at 1..1. Quantities always come from collection and calculation.

Named transfer pairings are actual-route examples, not a restriction on evidenced returns. Every internally returned animal from any downstream node/period pairs with growout_return_input when returned to managed cages; every actual material/water/package/stock return pairs with the receiving real node's material-input instance. Preserve the return state, native unit, mass/quantity, transfer id and inherited burden. An outside or next-period recipient is separately identified and receives the same carryover record; do not invent an internal return when none occurs.

### Process: Wild-origin acquisition and live transport to raft (`acquisition`)

Initial small live animals remain wild-origin inputs. Record actual capture service or inherited dataset coverage, creel effort and losses, individual protection, vessel tanks/circulating seawater, transport legs and live arrival. No study transit duration or tube dimension is a default.

#### Inputs

##### Product flows

###### Wild small common octopus entering acquisition (`wild_octopus_input`)

The starting biological input is a small whole-live wild animal, with captured origin and upstream burden retained.


- Selected flow: Small whole live wild creel-origin Octopus vulgaris for managed ongrowth
- Flow property / unit: Mass / kg
- Amount rule: Actual received small-animal wet mass and inherited capture burden, divided by A; cp_acquisition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acquisition`
- Range: Provisional acquisition-mass uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_wild_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Acquisition seawater abstraction (`acquisition_seawater`)

This resource input represents actual new seawater abstraction for acquisition tanks, not purchased or circulated water.


- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: Actual new abstraction mass divided by A; exclude ambient exposure and recirculated water; cp_acquisition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acquisition`
- Range: Provisional abstraction uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_acquisition_seawater
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Acquired live animals transferred to ongrowth (`acquired_octopus`)

Actual live arrival is the stocking handoff to managed ongrowth, with the same transfer and inherited burdens.


- Selected flow: Small whole live wild-origin Octopus vulgaris at raft stocking handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured actual live arrival mass divided by A; pair with growout_animals by transfer id/state/unit and inherited burden; cp_acquisition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acquisition`
- Range: Provisional arrival uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_acquired_octopus
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Managed raft-cage ongrowth and cohort management (`raft_ongrowth`)

The managed object is the acquired wild-origin octopus cohort, with actual sex-separated cages/PVC dens on a shared raft. Management roles include feed purchase/storage/thawing, monitoring, fouling/dead removal and food-remnant suction. Record each real supplier feed species and fresh/frozen/thawed state independently, including actual fish, crab and mussel instances; no feed composition or intake factor is prescribed. Spawning/eggs are actual biological outputs/losses whose intended use and fate must be declared, not proof of hatchery production. Returned research samples remain the same cohort and carry their burdens. Collection-ready animals are still standing production output until the separate final-collection event.

#### Inputs

##### Product flows

###### Animals stocked from acquisition (`growout_animals`)

The received wild-origin stocking animals enter managed production with their prior capture and transport burden.


- Selected flow: Small whole live wild-origin Octopus vulgaris at raft stocking handoff
- Flow property / unit: Mass / kg
- Amount rule: Actual incoming mass divided by A; pair acquired_octopus, same transfer/state/unit, inherited capture/transport burdens; cp_ongrowth
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ongrowth`
- Range: Provisional stocking uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Management samples and returned live animals (`growout_return_input`)

Returned live animals re-enter the same managed cohort with paired custody, state and inherited burdens.


- Selected flow: Actual same-cohort whole live Octopus vulgaris returned after monitoring or any evidenced downstream node/period
- Flow property / unit: Mass / kg
- Amount rule: Actual returned live mass divided by A; pair every actual source by loop id/state/unit, including growout_sample_output, sort_return_output and animal instances in collect_holding_other_products, collect_presentation_other_products or collect_delivery_other_products when internally returned, retaining prior burden; cp_ongrowth
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ongrowth`
- Range: Provisional return uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_returns
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual ongrowth seawater abstraction (`growout_seawater`)

This is new resource seawater only for an evidenced auxiliary operation; ambient cage water is excluded.


- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: Actual new abstraction divided by A; ambient cage water and internal circulation are not new abstraction; cp_ongrowth
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ongrowth`
- Range: Provisional abstraction uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_seawater
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Managed animals made available to final collection (`ongrown_octopus`)

Standing whole-live managed animals are handed to independent final collection, not yet to the final recipient.


- Selected flow: Whole live raft-cage-ongrown Octopus vulgaris at final-collection handoff
- Flow property / unit: Mass / kg
- Amount rule: Actual standing animal mass handed to collection divided by A; pair collection_animals and distinguish continuing stock; cp_ongrowth
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ongrowth`
- Range: Provisional ongrown-output uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_ongrown_octopus
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Temporary monitoring removal returned to cages (`growout_sample_output`)

Temporary monitoring removal must be paired with return and cannot become a final sale or extra yield.


- Selected flow: Actual same-cohort whole live Octopus vulgaris temporarily removed for monitoring
- Flow property / unit: Mass / kg
- Amount rule: Actual removed mass divided by A; pair growout_return_input with return evidence, never a final output or duplicate yield; cp_ongrowth
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ongrowth`
- Range: Provisional monitoring-loop uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_samples
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Final nonreturn collection from cages (`final_collection`)

This node removes actual whole-live ongrown animals from their managed cage context with a documented nonreturn custody change. It is independent of biological growth and subsequent sorting/preservation. Collection method is application-specific. Record actual incidental matter, retained animals, losses and destinations; never substitute the study's returned samples.

#### Inputs

##### Product flows

###### Ongrown live animals entering final collection (`collection_animals`)

Managed whole-live standing animals enter the separate final nonreturn collection responsibility.


- Selected flow: Whole live raft-cage-ongrown Octopus vulgaris at final-collection handoff
- Flow property / unit: Mass / kg
- Amount rule: Actual incoming mass divided by A; pair ongrown_octopus with transfer/state/unit and inherited burdens; cp_collection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collection`
- Range: Provisional collection-input uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Final-collected live animals for destination sorting (`collected_octopus`)

The actual nonreturn-collected live output passes to sorting with documented custody.


- Selected flow: Whole live raft-cage-ongrown Octopus vulgaris after final nonreturn cage collection
- Flow property / unit: Mass / kg
- Amount rule: Actual collected live mass divided by A; pair sort_animals with custody/transfer/state/unit, not fixed 1 kg; cp_collection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collection`
- Range: Provisional collected-output uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collected_octopus
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Grade and destination sorting (`grade_destination`)

Incoming animals are whole-live final-collected ongrown animals. Declare actual size/condition/recipient grades without importing source thresholds. Distinguish live accepted onward lots; actual alternative usable grades/destinations; actual live returns or retained stocks; dead or unusable rejected waste. Every output has a handoff; an absent destination needs evidence, not an invented co-product.

#### Inputs

##### Product flows

###### Collected whole-live animals entering sorting (`sort_animals`)

Final-collected whole-live animals enter actual grade and destination decisions.


- Selected flow: Whole live raft-cage-ongrown Octopus vulgaris after final nonreturn cage collection
- Flow property / unit: Mass / kg
- Amount rule: Actual incoming mass divided by A; pair collected_octopus and inherited burdens; cp_sort
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Provisional sort-input uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted live onward grade (`sorted_octopus`)

Accepted live onward animals enter holding only when active, otherwise evidenced direct presentation.


- Selected flow: Sorted whole live raft-cage-ongrown Octopus vulgaris accepted for onward live presentation
- Flow property / unit: Mass / kg
- Amount rule: Actual accepted onward mass divided by A; pair holding_animals if holding active or presentation_animals if evidenced bypass, retaining actual transfer/state/unit; cp_sort
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Provisional accepted-grade uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorted_octopus
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live return to managed ongrowth (`sort_return_output`)

Actual live return to managed cages keeps the same cohort, paired loop and prior burden.


- Selected flow: Actual same-cohort whole live Octopus vulgaris returned from sorting to managed cages
- Flow property / unit: Mass / kg
- Amount rule: Actual return mass divided by A; pair growout_return_input by loop id/state/unit with all inherited burdens and subsequent period, never negative final output; cp_sort
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Provisional live-return uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_returns
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Bounded post-sort live holding (`live_holding`)

When evidenced, this node preserves usable sorted live animals over observed start/end times until handoff to presentation. Declare actual system, water, oxygenation, energy, materials, equipment and staffing services; do not prescribe intervention, duration, salinity or temperature. A record-proven bypass creates no holding inputs or outputs. Unknown operation is not inactive. Actual alternative outcomes, live stocks and mortality retain their destinations and prior burdens.

#### Inputs

##### Product flows

###### Sorted whole-live animals entering holding (`holding_animals`)

The usable sorted live state enters only an evidenced bounded holding intervention.


- Selected flow: Sorted whole live raft-cage-ongrown Octopus vulgaris accepted for onward live presentation
- Flow property / unit: Mass / kg
- Amount rule: Actual active-holding entry mass divided by A; pair sorted_octopus by transfer/state/unit; cp_holding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Provisional holding-input uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Holding new seawater abstraction (`holding_seawater`)

Only actual newly abstracted natural seawater is a resource input; incoming/reused water is not re-abstracted.


- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: Actual new abstraction mass divided by A; incoming carried water and internal reuse are not abstracted again; cp_holding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Provisional holding-abstraction uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_seawater
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Held live animals transferred to presentation (`held_octopus`)

The actual post-intervention whole-live output is handed to presentation with its observed state.


- Selected flow: Sorted whole live raft-cage-ongrown Octopus vulgaris after bounded live holding
- Flow property / unit: Mass / kg
- Amount rule: Actual live exit mass divided by A; pair presentation_animals with observed holding state and transfer/state/unit; cp_holding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Provisional held-output uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_octopus
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Protective live presentation (`live_presentation`)

The incoming state is sorted whole live octopus, either after observed holding or directly after evidenced bypass. The output remains whole live animals, protected/presented for the next actual movement. Record actual carrier water, containers/tubes, protective components and labels; establish single use, reuse, return, damage, closing stock and end-of-use destination. No package type or treatment is prescribed. Animal, package and carrier-water masses remain separate. Transport is owned by prereceipt_logistics, not hidden in presentation.

#### Inputs

##### Product flows

###### Live animals entering presentation (`presentation_animals`)

Sorted whole-live animals enter presentation with the evidenced holding or bypass ancestry.


- Selected flow: Sorted whole live raft-cage-ongrown Octopus vulgaris at presentation entry, with actual holding state
- Flow property / unit: Mass / kg
- Amount rule: Actual incoming mass divided by A; pair held_octopus when holding active or sorted_octopus when evidenced bypass; preserve actual state, transfer/unit and prior burden; cp_presentation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_presentation`
- Range: Provisional presentation-input uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Presented live animals entering delivery (`presented_octopus`)

Presented whole-live animals pass to logistics while package and carrier-water masses stay separate.


- Selected flow: Whole live raft-cage-ongrown Octopus vulgaris in actual protective live presentation before receipt logistics
- Flow property / unit: Mass / kg
- Amount rule: Actual net presented animal mass divided by A; pair delivery_animals, same transfer/state/unit, excluding package/carrier water; cp_presentation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_presentation`
- Range: Provisional presented-output uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_octopus
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: All prereceipt transport and physical receipt (`prereceipt_logistics`)

Own each unowned prereceipt leg once, including any actual intermediate movement before presentation; retain the real node order and leg/lot identifiers. Carrier, payer, storage responsibility, live condition and first physical recipient are distinct fields. Arrival, rejected receipt, mortality, stock and ancillary-water/package handoffs are reconciled. This node does not silently supply post-receipt storage or package end of life.

#### Inputs

##### Product flows

###### Presented whole-live animals entering delivery (`delivery_animals`)

The presented whole-live consignment enters actual delivery with all inherited production burdens.


- Selected flow: Whole live raft-cage-ongrown Octopus vulgaris in actual protective live presentation before receipt logistics
- Flow property / unit: Mass / kg
- Amount rule: Actual incoming net live animal mass divided by A; pair presented_octopus by transfer/state/unit with all inherited burdens; cp_receipt
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Range: Provisional delivery-input uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted whole-live octopus at first physical receipt (`live_octopus_received`)

Calculate A/A from the positive observed accepted net whole-live wet mass of the same receipt lot under cp_receipt. This is normalization only, not a survival or yield assumption.

- Selected flow: Whole live raft-cage-ongrown Octopus vulgaris at first physical receipt
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Range: Same-lot reference normalization only, not survival or yield
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | all nodes and outputs | First subdivide independently measured activities and destinations. Enumerate all intended animal grades, alternate usable/reproductive outputs if actual, retained stocks and other raft-service users with handoffs; distinguish residues/waste and ordinary internal transfers. A transfer or monitoring return is not an extra sale. |`pcr-octopus-foreground-method` |
| `allocation_causal` | shared raft, assets and services | Attribute raft/cage/den/vessel/tank/storage/presentation service using actual causal capacity/use over the observed service period, such as evidenced occupied capacity-time. Enumerate every consuming node, cohort, season and other raft user. Document denominator, exclusions and uncertainty; no free platform or automatic mussel biomass input. Retain a single burden owner and service/component boundary. |`pcr-octopus-foreground-method` |
| `allocation_output` | inseparable intended co-products | After subdivision and an evidenced causal physical relationship, use that relationship. Only when neither is defensible use economic sensitivity fallback: comparable nonnegative producer-gate net SALES values of all intended outputs and retained stock, with a positive denominator and matched dates, currency, quality and handoff. Never use profit or net margin. Zero, negative or missing values require a justified alternative and sensitivity; do not silently assign zero or divide by an invalid denominator. |`pcr-octopus-foreground-method` |
| `allocation_period` | cohorts, stocks and assets | Include full acquisition-through-cleanup/termination periods, failures, mortality, spawning, actual feed stocks, opening/closing live stocks and later outputs. Carry prior burdens with stocks/returns; attribute asset manufacture/maintenance/replacement/end-of-service over evidenced service life and actual consuming periods. Do not erase later failure burdens by selecting an early successful interval or burden both stock and later sale twice. | `chapela-octopus-2006`; `pcr-octopus-foreground-method` |
| `allocation_losses` | mortality, residues and releases | Assign loss management and its inherited production burden to the originating cohort/output system before normalization. Recoverable intended output requires actual purpose/recipient evidence; waste receives no automatic avoided-production credit. Document actual external treatment boundaries and any separately justified scenario. |`pcr-octopus-foreground-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each protocol owns one real node. Raw records use actual native units; attribution and division by the independently observed positive receipt mass A produce the stated aggregate basis. Preserve actual transfer ids, states, recipient records and service ownership even when a collection obligation requires several concrete exchanges. In every protocol, native carrier records retain actual property/unit and original reading (electricity kWh, fuel kg/m3, heat MJ only when actually applicable); native service quantity/property/unit and provider scope are mandatory, with h only for timed use. Direct release measurements retain original mass/method/calibration separately from activity/factor estimates and their observed inputs/formula/factors/sources. These mandatory raw fields and evidence requirements apply to each concrete instance; none prescribes its occurrence. A qualitative route paper is not the amount source for future collected quantities.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acquisition` | `acquisition` | Wild animal/source/logistics and all node exchanges | Source, capture, supplier, transfer, meter and destination records | lot; species; capture origin/method/date/effort; upstream coverage; live count/size/condition; net wet mass; departure/arrival; vessel/tanks; water/materials; actual carrier/property/unit/readings; native service quantity/unit/users/scope; leg; losses/stocks/recipients; direct release mass/method or estimated release inputs/formula/factor/source; independent U evidence | Reconcile source/capture/service records with actual weighing, live-arrival custody, native carrier/service logs and all water/material/waste/environment destinations; preserve inherited burdens once | kg for mass; each actual carrier/service native unit; h only timed services | Every acquisition, trip, supply, loss and transfer | Actual capture/acquisition/transport and cleanup interval including failed trips | Actual fishery, vessel and raft arrival | per 1 kg reference flow | Source/custody and calibrated native measurement evidence; upstream boundary; transfer pairs; raw release evidence type; service scope; uncertainty |
| `cp_ongrowth` | `raft_ongrowth` | Managed cohort, feed, management, shared raft and all node exchanges | Cohort/cage, feed-stock, sampling-loop, asset, meter and destination ledgers | lot; sex/cohort/season/dates; opening/closing count/mass; feed species/source/state/purchase/storage/thawing/dispensing/remains; water/materials; actual carrier/property/unit/readings; native service quantity/unit/users/scope; raft consumers/use; all removal/return ids; spawning/eggs/fates; mortality/escapes; cleaning/replacement/termination; recipients; direct release mass/method or estimated release inputs/formula/factor/source; independent U evidence | Reconcile full cohort/feed ledgers, actual masses and same-lot samples if needed with daily/event logs, every paired return, native carrier/service records and all collected/direct destinations; no study sampling prescription | kg for mass; each actual carrier/service native unit; h only timed services; independent count/condition metadata | Every stocking/feed/transfer/loss/cleaning event and actual meter interval | Complete actual stocking to final removal, continuing stocks and cleanup/termination, all failed and reproductive periods | Actual raft/cages, feed storage and management locations | per 1 kg reference flow | Feed/source and calibrated native measurement evidence; full stock/loss ledger; all return custody; raw release evidence type; all raft users; asset life and service components |
| `cp_collection` | `final_collection` | Nonreturn collection and all node exchanges | Final-removal custody, weighing, service, meter and destination records | lot/cage; collection start/end/method; source/output count/mass/state; nonreturn custody; incidentals/stock; water/materials; actual carrier/property/unit/readings; native service quantity/unit/users/scope; losses/destinations; direct release mass/method or estimated release inputs/formula/factor/source; independent U evidence | Document actual final nonreturn removal; reconcile calibrated live mass/custody, native carrier/service records and all incidental/usable/waste/environment destinations; pair all ancillary transfers/returns | kg for mass; each actual carrier/service native unit; h only timed services | Every final collection and node exchange | Full actual collection, movement handoff and cleanup interval | Actual cage collection and handoff location | per 1 kg reference flow | Nonreturn custody; actual method; calibrated native records; transfer pairs; raw release evidence type; all destinations and service coverage |
| `cp_sort` | `grade_destination` | Actual grading/destinations and all node exchanges | Grade, condition, recipient, return/stock, meter and service ledgers | lot; incoming count/mass/state; actual grade/condition criteria; accepted/alternate/return/stock/reject outputs; holding active/bypass/unknown; recipients/transfer ids; water/materials; actual carrier/property/unit/readings; native service quantity/unit/users/scope; wastes; direct release mass/method or estimated release inputs/formula/factor/source; independent U evidence | Reconcile actual measured grades/live condition, independent destinations, holding decision and native carrier/service records; match every return and ancillary transfer; no invented grade thresholds | kg for mass; each actual carrier/service native unit; h only timed services | Every sorted lot, destination and exchange | Complete sorting and related cleanup/return interval | Actual sorting and recipient handoffs | per 1 kg reference flow | Grade/recipient and calibrated native records; live state; return/stock burden; holding/bypass evidence; raw release evidence type; complete destinations |
| `cp_holding` | `live_holding` | Bounded preservation and all active node exchanges | Actual operation/bypass, time, condition, meter and destination records | lot; active/bypass/unknown; start/end/system; live entry/exit count/mass/condition; purchased/carried/new/reused water; gases/materials; actual carrier/property/unit/readings; native service quantity/unit/users/scope; stock/alternate/return/waste destinations; direct release mass/method or estimated release inputs/formula/factor/source; independent U evidence | Establish bounded intervention or evidenced bypass; observe/calibrate entry/exit and native carrier/service records, pair all water/material/animal returns and transfers, record every destination; unknown is incomplete | kg for mass; each actual carrier/service native unit; h only timed services | Every active interval/exchange or documented bypass | Entire observed holding and cleanup interval | Actual holding system and handoff | per 1 kg reference flow | Timestamped operation/bypass and calibrated native evidence; live-state logs; same-state transfers/returns; raw release evidence type; service/component and uncertainty evidence |
| `cp_presentation` | `live_presentation` | Product/package/carrier interface and all node exchanges | Presentation, reuse/stock, weighing, meter and destination ledgers | lot/holding state; incoming/presented count/mass/state; carrier water; package/material identity/mass/tare; reusable opening/use/return/damage/closing/end-of-use; actual carrier/property/unit/readings; native service quantity/unit/users/scope; alternate/return/waste destinations; direct release mass/method or estimated release inputs/formula/factor/source; independent U evidence | Independently weigh net animals/materials/carrier water; reconcile presentation/reuse, outgoing custody, all returns/destinations and native carrier/service records; exclude logistics | kg for mass; each actual carrier/service native unit; h only timed services | Every presented lot, material use/return and exchange | Actual presentation, reuse attribution and cleanup periods | Actual presentation site and logistics handoff | per 1 kg reference flow | Calibrated mass/tare/native records; live condition; material/reuse evidence; paired water/package/animal transfers/returns; raw release evidence type; service scope |
| `cp_receipt` | `prereceipt_logistics` | Every unowned prereceipt leg, final receipt and all node exchanges | Leg/custody, calibrated receipt, carrier/package, meter and destination records | lot; real node order; leg/mode/provider/payer; distance; loaded tonnes/water/packages; shared/empty/return allocation; live departure/arrival/accepted count/size/condition; gross/tare/free-water exclusion; positive accepted net wet mass A; recipient/time/acceptance; actual carrier/property/unit/readings; freight; native service quantity/unit/users/scope; other outputs/stock/returns/waste; direct release mass/method or estimated release inputs/formula/factor/source; independent U evidence | Verify all legs and physical receipt independently of invoice; weigh accepted same-lot whole-live animals using calibrated equipment and documented noninjurious net-mass method excluding free/carrier water/tare, retaining native body water; reconcile all animals/water/packages/returns, native carrier/service quantities and destinations | kg for mass; actual carrier/service native units; tkm freight; h only timed services | Every leg, custody event, exchange and accepted receipt lot | All actual prereceipt movement through receipt and attributable cleanup, including failed/rejected loads | Actual transport route and first physical recipient | per 1 kg reference flow | Physical custody/acceptance and live state; calibrated net mass/tare/native records; source ancestry; all route/return/destination/service evidence; raw release evidence type |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_receipt` | all inventory rows | For each instance, divide the attributable actual native-unit quantity by positive observed same-lot receipt mass A. Only live_octopus_received uses A/A = 1 kg per 1 kg reference flow. Nonfinal animal, water, package, stock and return quantities remain independently measured. | Own-node protocol; actual quantity; attribution ledger; A; cp_receipt | Native-unit exchange per 1 kg reference flow and traceable calculation |`pcr-octopus-foreground-method` |
| `energy_instance` | energy rows | Retain each actual carrier exchange in its verified native property/unit: electricity kWh, fuel kg or m3, heat MJ when applicable; normalize that exchange by A. Optional auxiliary energy accounting may use 1 kWh = 3.6 MJ or measured fuel quantity times a documented carrier-specific energy factor, with formula, factor unit/source/version, observed inputs, coverage and uncertainty. Auxiliary MJ is not a replacement or additional exchange. Never infer carrier quantities from the route paper. | Node native meter/carrier quantities; actual property/unit; optional auxiliary formula/factor/source; node protocol; A | Native-carrier exchange per 1 kg reference flow and separately labelled auxiliary energy if used |`pcr-octopus-foreground-method` |
| `release_instance` | elementary release rows | Preserve raw evidence type for each substance/receiving-medium instance. Direct measured original mass retains its method, instrument/calibration and uncertainty; only attribution and division by A are calculated, with no invented emission factor. Activity/factor or concentration/volume estimates retain observed inputs, explicit formula, compatible mass/substance basis and every factor/source actually used. Reconcile upstream/service coverage and measured retained/collected destinations; normalize once. Qualitative route, feed disappearance or gross water alone is not pollutant mass. | Direct original measured mass/method or observed activity/concentration/water plus used formula/factor/source; substance and medium; node protocol; A | Normalized release in kg per 1 kg reference flow with raw evidence type and uncertainty |`pcr-octopus-foreground-method` |
| `freight_instance` | collect_delivery_freight | Attributable actual loaded tonnes × observed distance km for each real leg, with causal shared-load and empty/return-leg treatment documented; divide by A. Preserve actual carried water/package and animal loading records; never replace freight with animal mass alone. | Leg; loaded tonnes; distance km; actual attribution and service coverage; cp_receipt; A | tkm per 1 kg reference flow |`pcr-octopus-foreground-method` |
| `stock_and_transfer` | all animal, feed, water, package and material ledgers | Reconcile opening stock plus actual receipts/production to actual outputs, returns, closing stocks, losses and measured/calculated transformation terms by period and native state/unit. Biological growth and water exchange are explicit terms, not unexplained mass creation. Pair internal transfers once; retain inherited burden in stock/return ledgers. | Own-node source/stock/transfer/destination records; count/mass/state; actual transformation evidence | Reconciled lot/period balances and burden carryover |`pcr-octopus-foreground-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all actual exchanges | Verify each concrete flow identity/property/unit against actual species/material/substance, origin, state, role, destination and gate; collection scopes are not final TIDAS exchanges. | Concrete identity confirmation, upstream scope and native-unit records |
| `quality_mass` | reference and animal transfers | Require positive independent receipt mass A; preserve whole-live wet basis, native animal water, tare/free-water exclusion and actual count/size/condition; same-lot samples retain sampling design and uncertainty. | Calibrated noninjurious actual method; physical receipt and transfer records |
| `quality_complete` | all nodes/periods | Complete full cohorts including failures, reproductive events, mortality, cleanup, replacement/termination, opening/closing stocks and all outputs/consumers; unknown states, quantities or destinations remain explicit gaps. | Period/event ledger, all intended and waste/environment destinations, service-life/user records |
| `quality_ranges` | all provisional ranges | Treat symbolic U as unestablished provisional uncertainty; obtain independent bounds and report source, comparability and coverage before numerical use. Do not use a batch's own maximum as its guardrail. | Independent bound evidence and uncertainty derivation; no source-default quantities |
| `quality_calculations` | normalized carrier/releases/services | Retain original native exchange property/unit and each actual instance's raw evidence. Direct measured releases retain mass/method/calibration; activity/factor estimates retain observed inputs, formula and used factors/sources. Auxiliary MJ never replaces/duplicates carrier exchanges; service hours apply only to timed use. Retain attribution, uncertainty and component coverage; route literature is not future amount evidence. | Node-specific audit trail, raw evidence type and complete/partial service inventory boundary |
| `collect_acquisition_materials` | `acquisition`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual acquisition carrier water, protection materials and consumables, separate concrete instances. Record each actual water or protection-material supply and its stock/service coverage separately. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual supplied mass by instance divided by A; include incoming reusable-item stock and upstream burdens once; cp_acquisition <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_acquisition` <br> - Range: Provisional material uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_acquisition_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_acquisition_energy` | `acquisition`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual acquisition fuel or electricity, separately specified by energy carrier. Record only evidenced acquisition carrier exchanges in their actual native properties and units. <br> - Flow property / unit: Carrier-native property / carrier-native unit <br> - Amount rule: Actual native electricity, fuel or heat quantity divided by A with verified per-instance property/unit; retain fuel mass/volume exchange and exclude complete-service coverage; auxiliary MJ accounting is separate and not another exchange; cp_acquisition <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_acquisition` <br> - Range: Provisional energy uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_acquisition_energy <br> - Unit: carrier-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_acquisition_service` | `acquisition`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual capture, vessel/tank or handling service outside inherited coverage, separate native-unit instances. Resolve actual capture and live-transport services by their provider-defined scope and native quantity. <br> - Flow property / unit: Service-native property / service-native unit <br> - Amount rule: Actual attributable native service quantity divided by A; Duration/h only for evidenced timed use, other provider-defined units preserved; document complete/partial service components and shared users; cp_acquisition <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_acquisition` <br> - Range: Provisional service uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_acquisition_service <br> - Unit: service-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_acquisition_other_products` | `acquisition`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternative usable animal outputs, retained stock, carrier water and reusable material handoffs as separate instances. Separate actual usable side outputs, stocks and water/material handoffs by receiving destination. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual mass per destination divided by A; pair transferred water/material to collect_growout_materials when entering that node; external recipients/stocks separately identified; cp_acquisition <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_acquisition` <br> - Range: Provisional side-handoff uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_acquisition_other <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_acquisition_waste` | `acquisition`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual dead animals, discarded materials and water sent to identified treatment, separate waste instances. Collected dead animals and discarded material or water sent to treatment are waste, with actual destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual waste mass by state/destination divided by A; include treatment and inherited burdens without automatic credits; cp_acquisition <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_acquisition` <br> - Range: Provisional waste uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_acquisition_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_acquisition_releases` | `acquisition`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual returned water or specific substance released to its identified receiving medium, separate instances. Environmental releases retain their actual water or substance identity and receiving medium. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual release divided by A; preserve direct measured original mass and method separately from activity/factor estimates with measured inputs, formula and factor/source when used; exclude provider-covered releases; cp_acquisition <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_acquisition` <br> - Range: Provisional release uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_acquisition_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_feed` | `raft_ongrowth`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual fish, crab or mussel feeding material, separate species/source/state instances. Purchased feeding biomass is resolved by actual species, source and state, with full feed-stock reconciliation. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual consumed/dispensed feed ledger with opening/closing stock, purchase, storage, thawing and waste reconciliation divided by A; upstream feed burdens retained; cp_ongrowth <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_ongrowth` <br> - Range: Provisional feed uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_feed <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_materials` | `raft_ongrowth`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual purchased water, cleaning/management materials, cages/dens consumables and incoming carried materials, separate instances. Actual management materials and incoming or returned ancillary matter enter the real ongrowth node. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual attributable mass divided by A; pair actual incoming material/water/stock/return from any source node or period, including collect_acquisition_other_products, collect_sort_other_products, collect_holding_other_products, collect_presentation_other_products or collect_delivery_other_products where an internal return is evidenced; infrastructure stock/amortization separately evidenced; cp_ongrowth <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_ongrowth` <br> - Range: Provisional material uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_energy` | `raft_ongrowth`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual feed storage/thawing, suction, monitoring or management energy, separate carriers. Feed storage, thawing and other management use carrier exchanges only when observed outside service coverage. <br> - Flow property / unit: Carrier-native property / carrier-native unit <br> - Amount rule: Actual native electricity, fuel or heat quantity divided by A with verified per-instance property/unit; retain fuel mass/volume exchange, exclude covered service energy and never invent ambient-water pumping; auxiliary MJ accounting is separate; cp_ongrowth <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_ongrowth` <br> - Range: Provisional energy uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_energy <br> - Unit: carrier-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_service` | `raft_ongrowth`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual attributable shared raft/cage/den, storage, monitoring or management service, separate native-unit instances. Shared raft and management services retain all real consumers, service periods and component coverage. <br> - Flow property / unit: Service-native property / service-native unit <br> - Amount rule: Actual attributable native service quantity divided by A with all raft consumers, periods, observed use and asset/service coverage; Duration/h only for timed equipment/use and other service units preserved; complete services exclude covered components; cp_ongrowth <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_ongrowth` <br> - Range: Provisional shared-service uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_service <br> - Unit: service-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_other_products` | `raft_ongrowth`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternative intended animals or reproductive biomass, closing live/feed stock and transferred water/material, separate state/destination instances. Keep actual intended animal/reproductive outputs, closing stocks and ancillary transfers distinct by state and fate. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual destination mass divided by A, including actual egg biomass if intentionally recovered and separately measured; retain count metadata and stock burden; pair ancillary transfers to collect_collection_materials; cp_ongrowth <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_ongrowth` <br> - Range: Provisional side-output uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_other <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_waste` | `raft_ongrowth`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual collected dead octopus, prey hard parts/feed remains, fouling biomass, discarded materials or wastewater sent to treatment, separate instances. Collected mortality, feed hard parts and fouling have actual waste and treatment destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual collected waste mass by destination divided by A; distinguish biomass, hard parts, water and other materials; include actual cleanup/termination; cp_ongrowth <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_ongrowth` <br> - Range: Provisional waste uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_releases` | `raft_ongrowth`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual uncollected biological matter, escaped animals, water or specific pollutant substance reaching its identified medium, separate instances. Uncollected biomass, escape and specific dissolved/particulate releases need separate actual environmental identities. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual release divided by A; distinguish directly measured original mass/method from activity/factor estimates with measured inputs, formula and factor/source when used; retain substance/basis/medium and escaped biomass, spawning fate, dissolved/particulate identity without invented factors; cp_ongrowth <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_ongrowth` <br> - Range: Provisional release uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_materials` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual collection consumables, protective equipment materials and carried water, separate instances. Collection protection and carried water remain separate from the animal mass and from covered services. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual mass divided by A; pair collect_growout_other_products for incoming ancillary transfers, exclude components already covered by complete services; cp_collection <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_collection` <br> - Range: Provisional collection-material uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_energy` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual fuel or electricity for final collection, separate energy carriers. Actual collection carrier quantities retain their native units and exclude service-covered components. <br> - Flow property / unit: Carrier-native property / carrier-native unit <br> - Amount rule: Actual native electricity, fuel or heat quantity divided by A with verified per-instance property/unit; retain fuel mass/volume and exclude service-covered exchanges; auxiliary MJ accounting never substitutes the exchange; cp_collection <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_collection` <br> - Range: Provisional collection-energy uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_energy <br> - Unit: carrier-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_service` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual collection, vessel/equipment or handling service, separate native-unit instances. Actual collection services retain the observed provider, shared-use scope and native quantity. <br> - Flow property / unit: Service-native property / service-native unit <br> - Amount rule: Actual attributable native service quantity divided by A; Duration/h only for evidenced timed use, other provider-defined units preserved; service scope/shared consumers/components explicit, no duplicate energy/assets/releases; cp_collection <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_collection` <br> - Range: Provisional collection-service uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_service <br> - Unit: service-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_other_products` | `final_collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternative usable biomass, retained stock, carrier water and reusable material outputs, separate instances. Actual usable incidental biomass, stocks and ancillary transfers retain their independent destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual destination masses divided by A; distinguish incidental organisms and retained animals; pair onward water/material to collect_sort_materials and identify other recipients; cp_collection <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_collection` <br> - Range: Provisional collection-side-output uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_other <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_waste` | `final_collection`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual dead animals, rejected incidental matter/materials or water sent to treatment, separate waste instances. Unusable collection losses and discarded materials sent to treatment are recorded by actual waste state. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual destination waste masses divided by A; record losses and treatment, not automatic zero; cp_collection <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_collection` <br> - Range: Provisional collection-waste uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_releases` | `final_collection`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual uncollected biomass, returned water or specific substance released to an identified medium. Actual collection releases distinguish uncollected biomass, water and specific substances and media. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual release divided by A; retain direct measured original mass/method separately from activity/factor estimates with measured inputs, formula and factor/source when used; exclude provider-covered releases; cp_collection <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_collection` <br> - Range: Provisional collection-release uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_materials` | `grade_destination`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting consumables and incoming carrier water/protection materials, separate instances. Incoming carrier water and sorting materials retain ancillary transfer and supply identities. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual mass divided by A; pair collect_collection_other_products ancillary transfers and exclude covered components; cp_sort <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional sort-material uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_energy` | `grade_destination`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting fuel or electricity, separate carriers. Only actual sorting carrier exchanges outside complete service coverage are inventoried. <br> - Flow property / unit: Carrier-native property / carrier-native unit <br> - Amount rule: Actual native electricity, fuel or heat quantity divided by A with verified per-instance property/unit, fuel mass/volume preserved and service coverage excluded; auxiliary MJ accounting is separate; cp_sort <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional sort-energy uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_energy <br> - Unit: carrier-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_service` | `grade_destination`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting, weighing or shared handling-equipment service, separate native-unit instances. Actual grading and weighing services retain their native service units and shared coverage. <br> - Flow property / unit: Service-native property / service-native unit <br> - Amount rule: Actual attributable native service quantity divided by A; Duration/h only for timed equipment/use, all other units preserved; enumerate shared users and complete/partial scope without covered component duplication; cp_sort <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional sort-service uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_service <br> - Unit: service-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_other_products` | `grade_destination`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual usable alternative animal grades, retained stock or carrier water/reusable materials handed onward, separate instances. Usable alternative grades, stocks and ancillary matter are separate from rejected waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual destination mass divided by A; record grade/use/recipient and stock burden; pair ancillary inputs collect_holding_materials or collect_presentation_materials by actual branch, and collect_growout_materials for material returns; cp_sort <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional alternative-grade uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_other <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_waste` | `grade_destination`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual unusable/dead rejected animals, discarded materials or wastewater sent to identified treatment. Unusable or dead rejected animals and other managed wastes retain their treatment destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual waste mass by destination divided by A; usable downgraded animals are separate products, not waste by default; cp_sort <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional sort-waste uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_releases` | `grade_destination`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual uncollected biomass, returned water or specific substance released to its identified medium. Sorting environmental outputs retain actual substance, water or biomass identity and receiving medium. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual release divided by A; preserve direct measured original mass/method separately from activity/factor estimates with measured inputs, formula and factor/source when used; exclude service-covered releases; cp_sort <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional sort-release uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_materials` | `live_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual supplied water, gases, consumables and carried water/protection material entering holding, separate instances. Actual holding water, gases and materials retain supply and incoming-carrier roles separately. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual input mass by instance divided by A; pair collect_sort_other_products ancillary transfers, distinguish purchased water and new abstraction, exclude covered service components; cp_holding <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-material uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_energy` | `live_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual bounded holding electricity or fuel, separate energy carriers. Active holding carrier quantities are observed in native units without assuming a treatment or duration. <br> - Flow property / unit: Carrier-native property / carrier-native unit <br> - Amount rule: Actual native electricity, fuel or heat quantity divided by A with verified per-instance property/unit; retain fuel mass/volume and exclude complete-service energy; auxiliary MJ accounting is separate; cp_holding <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-energy uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_energy <br> - Unit: carrier-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_service` | `live_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual holding tank, equipment or attended preservation service, separate native-unit instances. Bounded holding services retain actual operation times, provider-native units and shared scope. <br> - Flow property / unit: Service-native property / service-native unit <br> - Amount rule: Actual attributable native service quantity divided by A; Duration/h only for observed timed use and other units preserved; actual shared consumers and complete/partial coverage declared; cp_holding <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-service uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_service <br> - Unit: service-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_other_products` | `live_holding`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternative usable animals, retained stocks, carrier water or reusable material outputs, separate destination instances. Alternative usable animals, stocks and ancillary outputs retain their actual onward or return destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual destination masses divided by A; pair onward water/material to collect_presentation_materials, actual internal live-animal return to growout_return_input and other material returns to the real receiving node; identify outside/next-period recipients with inherited burden; cp_holding <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-side-output uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_other <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_waste` | `live_holding`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual dead/rejected animals, discarded materials or wastewater sent to identified treatment. Actual mortality and rejected holding materials or water go to their documented waste destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual waste masses by state/destination divided by A; include handling/treatment and full observed interval; cp_holding <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-waste uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_releases` | `live_holding`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual returned water, uncollected biomass or specific pollutant released to its identified medium. Holding environmental releases keep original measured or activity-estimated evidence and specific media. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual release divided by A; preserve direct measured original mass/method separately from activity/factor estimates with measured inputs, formula and factor/source when used; exclude provider-covered releases; cp_holding <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-release uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `live_presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual carrier water, packaging/protection and presentation consumables, separate material instances. Carrier water and protection materials cross the product/package interface independently of animal mass. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual incoming masses divided by A; pair collect_holding_other_products or collect_sort_other_products ancillary transfers and declare new supplies, reusable opening stock and prior burden separately; cp_presentation <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-material uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_energy` | `live_presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation electricity or fuel, separate energy carriers. Actual presentation carrier exchanges remain native quantities outside provider service coverage. <br> - Flow property / unit: Carrier-native property / carrier-native unit <br> - Amount rule: Actual native electricity, fuel or heat quantity divided by A with verified per-instance property/unit; retain fuel mass/volume and exclude provider coverage; auxiliary MJ accounting is separate; cp_presentation <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-energy uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_energy <br> - Unit: carrier-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_service` | `live_presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual live presentation and shared equipment service, separate native-unit instances. Presentation services retain actual reuse periods, consumers, native service units and covered components. <br> - Flow property / unit: Service-native property / service-native unit <br> - Amount rule: Actual attributable native service quantity divided by A, Duration/h only for real timed use and other units preserved; reuse life, actual users and complete/partial coverage documented; covered component supplies/energy/releases excluded elsewhere; cp_presentation <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-service uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_service <br> - Unit: service-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_other_products` | `live_presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternative usable animal outputs, retained stock and onward carrier water/packages/reusable materials, separate instances. Actual alternative live outcomes, stocks, packages and water retain distinct recipient or return records. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual destination mass divided by A; pair carried water/package/material to collect_delivery_materials, actual internal live-animal return to growout_return_input and other material returns to the real receiving node; identify stock/external recipient and inherited burden; cp_presentation <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-side-output uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_other <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_waste` | `live_presentation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual dead/rejected animals, rejected packages/materials or wastewater sent to identified treatment. Dead animals, damaged/rejected packages and other managed waste retain actual treatment destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual waste mass by state/destination divided by A; distinguish reusable returns from waste and retain treatment burden; cp_presentation <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-waste uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_releases` | `live_presentation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual returned water, uncollected biomass or specific substance released to its identified medium. Actual presentation water, biomass and substance releases retain specific environmental destinations. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual release divided by A; retain direct measured original mass/method separately from activity/factor estimates with measured inputs, formula and factor/source when used; exclude complete-service releases; cp_presentation <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-release uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_materials` | `prereceipt_logistics`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual carried water, packages, reusable equipment and new delivery supplies, separate instances. Carried water, packages and delivery supplies retain actual incoming, reuse and stock identities. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual incoming mass divided by A; pair collect_presentation_other_products ancillary transfers, retain stocks/reuse and new supplies separately; cp_receipt <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional delivery-material uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_energy` | `prereceipt_logistics`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual prereceipt transport or live-protection fuel/electricity, separate carriers. Actual delivery fuel/electricity exchanges retain carrier-native quantities outside freight service coverage. <br> - Flow property / unit: Carrier-native property / carrier-native unit <br> - Amount rule: Actual native electricity, fuel or heat quantity divided by A with verified per-instance property/unit; retain fuel mass/volume, exclude freight-covered energy and keep auxiliary MJ accounting separate; cp_receipt <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional delivery-energy uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_energy <br> - Unit: carrier-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_freight` | `prereceipt_logistics`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mode/provider-specific prereceipt freight service by leg. Each actual freight leg has its mode, provider, load, distance and shared/return attribution evidence. <br> - Flow property / unit: Transport service / tkm <br> - Amount rule: Actual attributable transported mass in tonnes times observed distance in km divided by A; disclose carried water/packages, loading, empty/return leg allocation and full service coverage; cp_receipt <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional freight uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_freight <br> - Unit: tkm <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_service` | `prereceipt_logistics`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual receipt handling, live-protection or shared equipment service not covered by freight, separate native-unit instances. Receipt and live-protection services are separate native-unit instances not already covered by freight. <br> - Flow property / unit: Service-native property / service-native unit <br> - Amount rule: Actual attributable native service quantity divided by A; Duration/h only for real timed equipment/use and other service units preserved; complete/partial scope and shared users explicit; cp_receipt <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional receipt-service uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_service <br> - Unit: service-native unit per concrete instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_products` | `prereceipt_logistics`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternative usable live outputs, retained/returned stocks and carrier-water/package/reusable-material recipient handoffs, separate instances. Other usable receipt outcomes, stocks and ancillary handoffs retain actual recipients and burden carryover. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual mass by recipient/state divided by A; pair actual internal live-animal return to growout_return_input and material/water/package returns to the real receiving node, or identify outside/next-period recipient and burden; separate animal and ancillary mass; cp_receipt <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional other-receipt uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_other <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_waste` | `prereceipt_logistics`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual dead/unusable rejected animals, discarded packages/materials or wastewater sent to identified treatment before receipt gate. Dead or unusable rejected arrivals and other prereceipt waste cannot enter the live reference output. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual waste by state/destination divided by A with treatment and inherited burdens; do not count dead arrivals as live reference; cp_receipt <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional delivery-waste uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_releases` | `prereceipt_logistics`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual returned water, uncollected biomass or specific substance released to its identified receiving medium before receipt. Actual prereceipt water, biomass and specific pollutants retain their receiving medium and raw evidence. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual release divided by A; retain direct measured original mass/method separately from activity/factor estimates with measured inputs, formula and factor/source when used; retain substance/basis/medium and exclude freight/service-covered releases; cp_receipt <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional prereceipt-release uncertainty <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |
| `collect_feed_fish` | `raft_ongrowth`; major feed | Independently establish the actual fish-feed species, source, composition, fresh/frozen/thawed state and as-fed moisture. When used, add an independent atomic card with its own purchases/opening/closing/offered/uneaten/loss quantity, cp_ongrowth collection, attribution and normalization by A, independent Range/uncertainty evidence and verified UUID. Major feed cannot be omitted; never copy total feed, another prey quantity or a common cap. | chapela-octopus-2006; actual supply, feeding, stock and moisture records |
| `collect_feed_crab` | `raft_ongrowth`; major feed | Independently establish the actual crab-feed species, source, composition, fresh/frozen/thawed state and as-fed moisture. When used, add an independent atomic card with its own quantity, cp_ongrowth collection and stock/offered/uneaten fate, normalization by A, independent Range/uncertainty evidence and UUID. Never copy fish, mussel or total feed quantities/caps onto crab cards. | chapela-octopus-2006; actual crab supply and feeding records |
| `collect_feed_mussel` | `raft_ongrowth`; major feed | Independently establish the actual mussel-feed species, source, whole-shell/tissue and fresh/frozen/thawed state and as-fed moisture. When used, add an independent atomic card with its own quantity, cp_ongrowth collection, shell/uneaten fate, normalization by A, independent Range/uncertainty evidence and UUID. Measure consumed mussels separately from shared mussel-raft asset service; other raft users do not automatically supply this system with feed. | chapela-octopus-2006; actual mussel supply, feeding and residue records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | final reference | Require exactly one final output and reference link, species/origin/managed growth/whole-live never-frozen state and first physical receipt proof, positive observed A and A/A normalization only. Dead arrivals, invoice-only gates and mantle-only mass do not satisfy the reference. |`pcr-octopus-foreground-method` |
| `validate_transfers` | every internal handoff | Match sender/receiver ids, actual lot, same state, native property/unit, quantity, custody and inherited burdens for animals, water, matter, stock, returns and packages. Check the holding branch against observed active/bypass state; unknown blocks completion. Monitoring returns are not final harvest. |`pcr-octopus-foreground-method` |
| `validate_periods` | all cohorts and services | Reconcile complete sex/cohort/season intervals, failures, spawning/eggs/fates, mortality, feed stocks, live stocks, monitoring returns, cleaning/changeovers, replacement and termination. Reject truncation at a study analytical window or duplicated stock/return burdens. | `chapela-octopus-2006`; `pcr-octopus-foreground-method` |
| `validate_destinations` | each real node | Account for every intended product/grade and actual alternative output, reject, stock, loss, waste-treatment and environment destination. Resolve zero/one/multiple conditional instances with actual records; unknown is not absence. No automatic waste credit or free shared raft. |`pcr-octopus-foreground-method` |
| `validate_allocation` | shared and inseparable outputs | Check precedence of subdivision, evidenced causal physical allocation and justified economic fallback. Include all real raft/service consumers and retained-stock values; require comparable nonnegative net sales and positive denominator, with alternatives/sensitivity for zero/negative/missing values; never profit. |`pcr-octopus-foreground-method` |
| `validate_native` | all quantities and ranges | Keep each actual carrier/service native property/unit, own-node protocol and per 1 kg reference flow basis; h only timed use, auxiliary MJ no replacement/duplicate fuel exchange. Distinguish direct measured original release mass/method from activity/factor estimates and their observed inputs/formula/used factors/sources. Provisional U is not an amount or measured cap. Complete services exclude covered components/releases. |`pcr-octopus-foreground-method` |
| `validate_readiness` | dataset handoff | A candidate methodology, structural check or literature route alone proves neither current regulatory/welfare/safety eligibility nor commercial receipt or a verified final UUID. Concrete identities, primary records, upstream coverage, qualified gaps and methodological review are required before downstream use. |`pcr-octopus-foreground-method` |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package first, with process and lifecyclemodel projections only after methodological review and verification of actual concrete exchanges |
| downstream_use | A completed reviewed data package may be described as secondary_dataset or background_dataset only within its documented species, wild-origin acquisition, managed raft-cage route, whole-live state, geographic/temporal scope and first physical receipt boundary |
| allowed_use | Modelling the evidenced whole-live Octopus vulgaris raft-cage ongrowth supply through first physical receipt, with complete upstream capture/transport/feeding/shared-service burdens and disclosed uncertainty |
| excluded_use | Generic octopus or all CPC 04472; direct wild final catch; closed hatchery production; other species/routes; ornamental, dead/frozen/processed/eviscerated products; unsupported current safety/legal/welfare/commercial-success claims; automatic consequential credits |
| required_metadata | PCR id/version; actual species/origin/capture ancestry and dates; raft/site; sex/cohort/season and complete periods; feed sources/states; managed growth evidence; all final custody/grade/holding/presentation/leg/receipt records; net wet mass basis; outputs/stocks/returns; shared consumers/assets/service life; allocation; native units; verified concrete exchanges and upstream coverage |
| required_quality_disclosure | Primary record coverage, mass/count/live-state uncertainty, independent provisional bounds, conditional active/bypass/unknown states, failures/reproductive effects, release/energy formula-factor evidence, service/component scope, upstream gaps and unresolved identities, reviewed methodological applicability |
| update_trigger | Species/source/route/site/feed/stock/service user changes; changed live state or gate; holding/presentation/logistics change; asset replacement or termination; improved primary/independent bound evidence; corrected identity, upstream dataset, factor or allocation; new legal/safety/welfare context affecting applicability |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pcr-octopus-foreground-method` | method_factor | This PCR, sections 4–9: declared foreground accounting method for farmed live whole raft-cage common octopus. | This PCR's methodological conventions for native measurement, receipt normalization, transfer/stock/period balances, conditional-state evidence, allocation precedence, shared-service/component scope, instance-specific calculation and collection/quality/validation rules. This is a declared PCR method, not an external quotation, empirical observation, route-paper quantity or temporary audit record. Provisional reasoned Range envelopes are not source-derived intervals. |
| `chapela-octopus-2006` | literature | Chapela A., González A.F., Dawe E.G., Rocha F.J. and Guerra Á. (2006). Growth of common octopus (Octopus vulgaris) in cages suspended from rafts. Scientia Marina 70(1):121–129. https://doi.org/10.3989/scimar.2006.70n1121 | Actual Ría de Vigo wild creel-origin acquisition/live transport, sex-separated galvanized raft cages/PVC dens, purchased fresh/frozen fish/crab/mussel feed stored/thawed, monitoring returns, fouling/dead removal and food-remnant suction; seasonal/spawning/late mortality and analytical-window limitations. No future quantity default, final commercial delivery, current legal/welfare/safety guarantee or complete hatchery origin. |
