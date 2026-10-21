---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-in-shell-food-oysters
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Farmed live in-shell food oysters at first producer handover

## 1. Scope and Applicability

This rule covers food oysters alive in their own native shell within one declared producer operating unit, from actual seed entry through owned managed grow-out and independent harvest to first producer handover. Include only actual pre-gate producer-responsible conditioning, depuration, live holding and presentation, not a recipe inferred from classification. Each package declares actual species, site, cohorts, season and responsibility. Natural marine nutrition is not free hatchery algal feed; “no feed in farming” is not a rule for every controlled stage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-in-shell-food-oysters |
| classification_refs | CPC 3.0 04422; narrower |
| covered_products | Farmed whole live in-native-shell food oysters at first producer handover; cooled product must remain alive |
| excluded_products | Wild adults, final seed, dead fresh/chilled product, shucked meat, processed half-shell product, frozen/cooked product, pearls and shell-only products |
| representative_product | Farmed live in-shell food oysters at first producer handover |
| production_route | Actual wild spat collection, owned early-life production or stage-specific purchase, then managed grow-out, independent harvest, actual conditional conditioning and handover; technology deltas attach to declared parents |
| market_state | Living food oysters in native shell with actual grade and treatment status; not edible-meat mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Farmed live in-shell food oysters at first producer handover |
| How much | 1 kg |
| How well | Actual accepted food grade and live state; native shell, tissues and naturally retained body fluids only |
| How long or cycle | Declared complete cohort cycle to handover and actual reporting periods; opening/closing living stock and burden carried forward, assets traceable over service periods |
| reference_flow_link | `dispatch_food_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed live in-shell food oysters at first producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; actual site/waterbody; farmed origin and seed-purchase stage; cohort and dates/periods; live and native-shell state; actual market grade and food acceptance evidence; external-cultch exclusion method; actual treatment and responsibility; handover location/buyer; measurement and uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use a calibrated scale at handover for net oyster mass, subtract packaging, external substrate/fouling and free water/ice, retaining native shell/tissues/natural body fluids; use cp_dispatch_mass. Only accepted live oysters enter the reference, whose final row is 1 kg. |
| `stage_count_mass` | all seed and stock mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Counts, size and ploidy are separate records, not mass. Convert counts using representative weighed samples and error of matching species, stage, state and cohort; exclude external attached shell and use no adult meat yield or historical larval weight. |
| `water_mass` | water and water carriers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume with actual salinity, temperature and density evidence; distinguish recirculation, new abstraction, external supply, carriers, discharge and stock without a universal density. |
| `energy_units` | energy inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve actual carrier and supply state; verified unit group gives 1 kWh = 3.6 MJ; do not replace fuel mass by energy without corresponding actual calorific value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual owned wild-spat collection or early-life entry, or actual handover stage of purchased eggs/larvae/spat/seed carrying matching upstream burden |
| starting_condition_role | cohort-, stage- and responsibility-specific foreground entry, not a zero-burden assumption for absent stages |
| product_classification_scope | narrower live native-shell food first-handover subset of CPC 04422 |
| recursive_input_rule | Same-category oyster seed/broodstock inputs retain actual upstream stage and identity; stop recursive expansion without deleting existing burden. Internal returns carry the same cohort stock, not a new purchase or second production. |
| upstream_dataset_requirement | Upstream data matching supplier stage, species, location, transport carrier, substrate and responsibility; disclose gaps/substitutes/uncertainty, never default zero |
| disclosure | Cohort-specific actual stages/bypasses, parent technology deltas, one gate, periods/asset service, live net mass, purchase burdens, depuration responsibility and acceptance limitations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_entry` | applicable nodes and complete foreground package | Include actual owned stages from wild-spat collection or owned broodstock/egg/larval entry, or purchase at its documented stage, through managed grow-out, separate harvest and first producer handover. Purchased eyed larvae enter settlement; purchased settled spat enter actual nursery or directly grow-out; purchased grow-out-ready seed bypasses collection/hatchery/settlement/nursery that did not happen. No purchase is burden-free. | `farmed-oyster-foreground-method`; `fao-oyster-production` |
| `boundary_live` | applicable nodes and complete foreground package | Only the final living in-native-shell food oyster mass qualifies. External attached cultch, biofouling, sediments, free water, coolant and packaging are excluded; native shell, tissue and naturally retained body fluids stay included. Dead, shucked, frozen/cooked, pearl/shell-only, final seed and wild adult products are outside this category. | `farmed-oyster-foreground-method`; `un-cpc-3-oysters` |
| `boundary_route` | applicable nodes and complete foreground package | Managed biological parents are algal culture, hatchery/settlement/nursery and grow-out. Wild-spat and hatchery-origin cohorts are alternative entry routes, not two supplies for one animal. Bottom/off-bottom/suspended technology deltas belong to growout and actual collection/harvest techniques to their own parents. Record actual changes in equipment, energy, substrate, water, loss, monitoring and stock bookkeeping; technologies coexist only with disjoint sublots or explicit periods. | `farmed-oyster-foreground-method`; `fao-oyster-production` |
| `boundary_handoffs` | applicable nodes and complete foreground package | Connect harvest, conditioning, grading, depuration and live_holding in actual event order, not the table order. Each revisit has distinct event_id/pass_id/transfer_id; an intake receives only its immediately preceding actual transfer in the same cohort/state and measured amount. Preserve pending grade, accepted grade, pending treatment and actual release qualifiers. At least one actual grading event and first-gate acceptance must be completed; pending required treatment or unknown state cannot be final accepted food mass. Bypasses invent no resources and revisited nodes repeat neither historic burden nor the same event; record an actual new grading event if a later intervention requires reinspection. | `farmed-oyster-foreground-method` |
| `boundary_depuration` | applicable nodes and complete foreground package | Washing/desanding and sanitary depuration/relaying are different responsibilities. Include only actual producer-responsible pre-gate treatment and its applicable authorization, release evidence, water, energy, consumables, effluents and losses. Unknown treatment responsibility or acceptance is unresolved, not automatic bypass. If actual first gate precedes independent buyer treatment, exclude buyer treatment and disclose restrictions; the PCR does not certify safety or universal toxin removal. | `farmed-oyster-foreground-method`; `fda-nssp-context` |
| `boundary_inputs` | applicable nodes and complete foreground package | Purchased stage inputs need upstream datasets at matching species, stage, carrier/substrate, geography and burden boundary. Own algal production and supply are a paired internal chain, not purchased feed plus duplicate own burden. Open-water natural phytoplankton is an environmental biological contribution, not a fabricated purchased feed; hatchery/controlled nursery feed and fertilization remain actual inputs. | `farmed-oyster-foreground-method` |
| `boundary_secondary` | applicable nodes and complete foreground package | Recovered shell cultch is secondary material because it crosses from a prior shell-producing/recovery system. Declare origin and its recovery/cleaning/transport handoff, retained burdens versus explicitly justified cut-off, and count collection/preparation in exactly one system. Do not assume free shell or include external shell in live oyster reference mass. | `farmed-oyster-foreground-method` |
| `boundary_services` | applicable nodes and complete foreground package | Use one declared producer operating unit with batch/cohort and reporting-period indices. Include attributable boats, pumps, tanks, racks, depuration/holding and dispatch assets, cleaning/changeovers, repairs and retirement. For external service use its actual quantity/property and invoice scope; if its dataset includes fuel or equipment, do not repeat them as owned inventory. No federated multisite average or speculative universal service share. | `farmed-oyster-foreground-method` |
| `boundary_credits` | applicable nodes and complete foreground package | Record actual direct water discharge, biodeposition, lost gear, mortality and bottom-contact evidence with actual substance and receiving medium. No automatic carbon sequestration, shell-carbon, avoided waste, nutrient-removal or ecosystem-service negative credit. Any later impact claim requires separately governed complete method, counterfactual and measured evidence, outside this default inventory. | `farmed-oyster-foreground-method` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `spat_collection` | Owned wild spat collection | conditional | Only actual owned collection of wild spat before managed grow-out; purchased seed bypasses this node | foreground production and actual-state handover | per 1 kg reference flow |
| `algal_culture` | Owned algal feed culture | conditional | Only when feed cultures are produced under foreground responsibility for active hatchery, settlement or nursery consumers | foreground production and actual-state handover | per 1 kg reference flow |
| `hatchery` | Owned broodstock and larval hatchery | conditional | Only owned broodstock, fertilized-egg or larval stages actually performed; purchased eyed larvae bypass absent earlier hatchery stages | foreground production and actual-state handover | per 1 kg reference flow |
| `settlement` | Owned settlement or remote setting | conditional | Only when owned larvae are actually set; purchased settled spat or grow-out seed bypasses this node | foreground production and actual-state handover | per 1 kg reference flow |
| `nursery` | Owned oyster nursery | conditional | Only the actual owned nursery after collected, settled or purchased spat; seed suitable for grow-out goes directly there | foreground production and actual-state handover | per 1 kg reference flow |
| `growout` | Managed oyster grow-out | required | Every covered oyster undergoes an actual owned managed grow-out stage before harvest | foreground production and actual-state handover | per 1 kg reference flow |
| `harvest` | Independent harvest of managed oysters | required | Actual removal of managed live oysters from their declared grow-out context | foreground production and actual-state handover | per 1 kg reference flow |
| `conditioning` | Washing and desanding | conditional | Actual owned pre-gate washing/desanding in its recorded position; absence bypasses unchanged state to the next actual node | foreground production and actual-state handover | per 1 kg reference flow |
| `grading` | Destination and market grading | required | Every final lot receives actual live-state, market-acceptance and destination inspection; mechanical grading only if actually performed | foreground production and actual-state handover | per 1 kg reference flow |
| `depuration` | Actual pre-gate sanitary depuration or relaying | conditional | Only treatment actually under producer responsibility before first handover and supported by actual applicable authorization and release evidence; unknown is not inactive | foreground production and actual-state handover | per 1 kg reference flow |
| `live_holding` | Actual pre-gate live holding and cooling | conditional | Only actual producer-responsible live holding or cooling before first handover; direct dispatch bypasses the node | foreground production and actual-state handover | per 1 kg reference flow |
| `dispatch` | First producer presentation and handover | required | Every qualifying lot is weighed, labelled or documented at its actual first producer handover; packaging only if used | foreground production and actual-state handover | per 1 kg reference flow |

Index nodes by actual cohorts, culture batches, harvest events and dispatch lots; reporting-period aggregation retains opening/closing stock, cross-period growth and returns. Paired internal exchanges denote physical handover, not deletion of producing burdens at aggregation. Inactive conditional cards have no positive exchange; missing records are not zero. Semantic umbrella cards split into actual material/state/destination/property-specific exchanges; non-mass services cannot be forced into mass cards. Every nonfinal card uses the section 8 two-view procedure: retain unallocated physical quantities and normalize by matching accepted final live net kg; assign shared-resource service events once, and separately apply co-product LCA allocation once. Internal seed or harvested feed is never fixed to final 1 kg.

### Process: Owned wild spat collection (`spat_collection`)

This independent capture boundary ends at a weighed/count-and-sampled settled-spat transfer, not at edible adult harvest. Declare waterbody, species, collector deployment, collection effort and losses; collectors/cultch are not oyster body mass.

#### Inputs

##### Product flows

###### CN grid-average alternating current below 1 kV consumed by actual node (`spat_collection_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_spat_collection_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`spat_collection_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Wild oyster spat removed from declared waterbody (`spat_collection_wild_spat`)

Report actual species, resource compartment and collection amount; no identity inferred from market adult oysters.

- Selected flow: Wild oyster spat removed from declared waterbody
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Collected live settled oyster spat for owned nursery or grow-out (`spat_collection_spat_transfer`)

Transfer id pairs with nursery seed or grow-out seed input; measure oyster biomass separately from attached external cultch.

- Selected flow: Collected live settled oyster spat for owned nursery or grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`spat_collection_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`spat_collection_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`spat_collection_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`spat_collection_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_spat_collection_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Owned algal feed culture (`algal_culture`)

The parent is managed biological feed production, not unpurchased plankton in open-water grow-out. Index actual culture batches and every consuming node. Purchased algae instead enters the consumer with its supplier burden; do not model both supplies for the same feed.

#### Inputs

##### Product flows

###### CN grid-average alternating current below 1 kV consumed by actual node (`algal_culture_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_algal_culture_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_algal_culture_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`algal_culture_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_algal_culture_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Water actually transferred to another owned node (`algal_culture_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_algal_culture_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Failed algal cultures sent to declared treatment (`algal_culture_failed`)

Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event.

- Selected flow: Failed algal cultures sent to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_algal_culture_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual wastewater or saline effluent exported to declared treatment (`algal_culture_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_algal_culture_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`algal_culture_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_algal_culture_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`algal_culture_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_algal_culture_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Owned broodstock and larval hatchery (`hatchery`)

Managed parent: oyster early-life production. Declare broodstock/egg/larva entry stage and species/ploidy only when evidenced. Owned broodstock from grow-out is a paired internal transfer with retained burdens, not a second purchased animal. No universal spawning manipulation or larval survival assumption.

#### Inputs

##### Product flows

###### CN grid-average alternating current below 1 kV consumed by actual node (`hatchery_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_hatchery_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`hatchery_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live competent oyster larvae transferred to owned settlement (`hatchery_larvae`)

Pair with settlement larvae input; count, sample mass, cohort, species and competence condition remain explicit.

- Selected flow: Live competent oyster larvae transferred to owned settlement
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual surplus live larvae sold at independent hatchery gate (`hatchery_sold_larvae`)

Only actual separate sale with matched cohort and competence state; exclude from food-oyster denominator, retain attributable hatchery/algal burdens and do not also transfer the same larvae into owned settlement.

- Selected flow: Actual surplus live larvae sold at independent hatchery gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`hatchery_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`hatchery_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`hatchery_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`hatchery_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_hatchery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Owned settlement or remote setting (`settlement`)

Alternative biological implementation of early-life production: on-site larvae or purchased competent larvae enter owned setting. Actual substrate differs between single seed and spat-on-shell; no fixed equivalence or shell mass in oyster biomass.

#### Inputs

##### Product flows

###### Live oyster larvae received for owned setting (`settlement_larvae`)

Actual supplier purchase at this stage or paired hatchery transfer; missing owned hatchery is a bypass, not a zero-burden purchased larva.

- Selected flow: Live oyster larvae received for owned setting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`settlement_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_settlement_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`settlement_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live settled oyster spat transferred to nursery or grow-out (`settlement_spat`)

Record single or attached seed; separate external substrate and pair downstream seed input at exact state.

- Selected flow: Live settled oyster spat transferred to nursery or grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual surplus settled live spat sold at independent setting gate (`settlement_sold_spat`)

Actual separate sale only, with oyster biomass and cultch separately identified; not also an internal nursery/grow-out transfer or final food mass.

- Selected flow: Actual surplus settled live spat sold at independent setting gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`settlement_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`settlement_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`settlement_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`settlement_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_settlement_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Owned oyster nursery (`nursery`)

Managed nursery parent retains actual land/sea nursery and upwelling/containment delta: record pumping, feed source, containment and stock shifts when present. Ambient natural nutrition and deliberately supplied or cultivated feed remain different roles.

#### Inputs

##### Product flows

###### Live collected, settled or purchased spat at nursery entry (`nursery_spat`)

Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event.

- Selected flow: Live collected, settled or purchased spat at nursery entry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`nursery_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_nursery_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`nursery_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live oyster seed transferred to owned grow-out (`nursery_seed`)

Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event.

- Selected flow: Live oyster seed transferred to owned grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Live surplus seed sold at nursery gate (`nursery_surplus`)

Separate sold seed co-product from internal grow-out transfer; sale seed is excluded from the food-oyster denominator.

- Selected flow: Live surplus seed sold at nursery gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`nursery_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`nursery_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`nursery_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`nursery_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_nursery_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Managed oyster grow-out (`growout`)

Declare one producer/operating unit and cohort/lease boundary. Bottom, rack/bag off-bottom and suspended systems are evidenced alternatives of this managed parent: bottom preparation and contact, rack/bag servicing, ropes/floats/anchors and boat effort respectively require actual inventories, service periods and losses. They may coexist only for traceable sublots/periods; no generic technology yield. Harvest is a separate removal responsibility, not sale of stock still in water.

#### Inputs

##### Product flows

###### Live oyster seed from actual owned stage or purchased at grow-out entry (`growout_seed`)

Actual collected spat, set spat, nursery seed or purchased grow-out-ready seed; choose actual interface and record count plus representative stage-specific net body mass.

- Selected flow: Live oyster seed from actual owned stage or purchased at grow-out entry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`growout_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_growout_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`growout_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live oyster subcohort actually transferred from grow-out to harvest responsibility (`growout_stock`)

Record only the subcohort actually transferred to harvest responsibility, paired with harvest_stock using oyster-only net mass or matching sampled quantity. Whole-site standing-stock assessments and animals not transferred remain auxiliary stock records, not this output. Breakage, death or loss after that boundary is recorded separately in harvest, not by pairing unequal quantities.

- Selected flow: Live oyster subcohort actually transferred from grow-out to harvest responsibility
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`growout_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Collected dead oysters sent to treatment (`growout_collected_mortality`)

Only actual collected dead oysters leaving grow-out for documented treatment. Retain species, count, native shell/body wet mass, moisture, event and recipient; exclude removed biofouling, sediment, gear and separately removed liquid. Uncollected mortality is not collected waste. Establish this stream’s independent range or measurement-uncertainty evidence. A combined removed-waste total does not supply this amount; unknown separate mass or fate blocks completion, never a default or zero.

- Selected flow: Collected dead oysters sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Independently measure collected dead-oyster wet kg under cp_growout_mass, then divide its unallocated physical quantity by matching positive final accepted net oyster kg. Count actual loss and treatment ownership once; do not copy a combined quantity or range.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`

###### Removed grow-out biofouling sent to treatment (`growout_removed_biofouling`)

Only an actual separately identified removed-biofouling waste stream exported to documented treatment. Record material/organism composition, wet mass, moisture, removal event and recipient; distinct physical streams or treatment routes require independent cards and quantities. Exclude dead oysters, loose sediment, gear and separately removed liquid. No UUID, numerical Range or quantity is inherited from mortality. If combined-removal records cannot establish the separate amounts, retain the evidence gap and block completion rather than inventing a split.

- Selected flow: Removed grow-out biofouling sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Independently measure this removed-biofouling stream’s wet kg under cp_growout_mass, then divide its unallocated physical quantity by matching positive final accepted net oyster kg. Establish its own range or measurement-uncertainty evidence and reconcile actual treatment once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`

###### Actual wastewater or saline effluent exported to declared treatment (`growout_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Uncollected oyster mortality retained in declared aquatic compartment (`growout_uncollected_mortality`)

Distinguish species/state/receiving compartment and estimated mass uncertainty from collected waste; not a generic avoided disposal credit.

- Selected flow: Uncollected oyster mortality retained in declared aquatic compartment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`growout_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`growout_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_growout_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Independent harvest of managed oysters (`harvest`)

Record crop/cohort, site and date, hand/rake/dredge/lift technique and matching effort. Separate removal from biological growth and subsequent washing/desanding. Bottom-disturbance and incidental organisms require actual field evidence, not an assumed benign label.

#### Inputs

##### Product flows

###### Live harvest-ready oysters received from managed grow-out (`harvest_stock`)

Pair the actual transferred growout_stock subcohort at the same responsibility boundary, state and measured-quantity uncertainty. Never equate whole-site standing-stock estimates with transferred mass; untransferred animals remain grow-out stock and harvest-owned losses are separate.

- Selected flow: Live harvest-ready oysters received from managed grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`harvest_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_harvest_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`harvest_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected live in-shell oysters before conditioning or grading (`harvest_live`)

Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event.

- Selected flow: Collected live in-shell oysters before conditioning or grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`harvest_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`harvest_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`harvest_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`harvest_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_harvest_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Washing and desanding (`conditioning`)

Record raw live oysters, external sediment/fouling and resulting cleaned live state. Mechanical washing or seawater desanding does not establish sanitary depuration, pathogen removal or food safety. Own recirculation is not repeated purchased water; document freshwater/saline sources and discharge destination.

#### Inputs

##### Product flows

###### State-qualified live in-shell oysters entering actual washing or desanding (`conditioning_raw`)

Receive one paired transfer from the immediately preceding actual harvest_live, grading_accepted, depuration_released or live_holding_live event; retain pending grading/treatment qualifiers and measured quantity without silently promoting unaccepted state to food.

- Selected flow: State-qualified live in-shell oysters entering actual washing or desanding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`conditioning_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_conditioning_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`conditioning_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Washed or desanded live oysters transferred to the actual next responsibility (`conditioning_clean`)

Transfer in actual order to grading_live, depuration_accepted, live_holding_entry or gate-qualified dispatch_live_entry; retain cohort, cleaning, grading and treatment state. Washing does not establish sanitary release.

- Selected flow: Washed or desanded live oysters transferred to the actual next responsibility
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`conditioning_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`conditioning_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`conditioning_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`conditioning_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_conditioning_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Destination and market grading (`grading`)

Incoming harvest or cleaned/desanded live oysters are classified into accepted food grades, live undersize return to owned grow-out, independently sold alternate live product if actual, and dead/non-food/rejected waste. Declare every actual grade and handoff; absent destinations are documented not fabricated positive outputs. No uniform size, meat yield or shell/tissue conversion.

#### Inputs

##### Product flows

###### State-qualified live oysters received for actual grade and destination assessment (`grading_live`)

Receive the immediately preceding actual harvest_live, conditioning_clean, depuration_released or live_holding_live event by transfer id, retaining cohort, measured quantity, cleaning and treatment qualifiers. Reinspection must be a distinct actual event, not a second receipt of its predecessor.

- Selected flow: State-qualified live oysters received for actual grade and destination assessment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`grading_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_grading_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`grading_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Market-graded live in-shell oysters with explicit food and treatment acceptance state (`grading_accepted`)

Market size/grade acceptance is not sanitary release. Declare pending treatment versus released status and actual permitted use; transfer in recorded order to conditioning, depuration, holding or handover. Pending required treatment cannot be final accepted food mass. Only explicitly functionally equivalent grades with separate yield records may share the reference.

- Selected flow: Market-graded live in-shell oysters with explicit food and treatment acceptance state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Live undersize oysters returned to owned grow-out (`grading_undersize`)

Paired growout_returns internal loop; no sale or accepted reference amount and no reallocation of entire past crop each passage.

- Selected flow: Live undersize oysters returned to owned grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Independent live oyster product sold at alternate declared gate (`grading_other_live`)

Record actual seed, other-market products or evidenced independently supplied live products for external treatment, with identity, use, restrictions and independent sale gate. These are not released final food mass and do not enter the final reference denominator; the same animal cannot also be an internal transfer or final food output.

- Selected flow: Independent live oyster product sold at alternate declared gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`grading_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Dead or nonqualifying oysters actually sent to waste management (`grading_rejected`)

This waste card records only actual waste transfers and recipients; living retained stocks or batches awaiting further treatment are not automatically waste. An independently sold live product requiring external treatment instead uses grading_other_live with its actual product role and handoff restrictions, not this waste card as well.

- Selected flow: Dead or nonqualifying oysters actually sent to waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual wastewater or saline effluent exported to declared treatment (`grading_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`grading_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`grading_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_grading_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Actual pre-gate sanitary depuration or relaying (`depuration`)

Retain live product state. Declare whether controlled-tank depuration or relaying, actual waterbody/tank, duration, disinfection technology, monitoring, transfers and release criteria. This conditional preservation parent does not claim removal of all toxins or confer food-safety certification. If first gate occurs before independent buyer treatment, exclude that downstream treatment and disclose actual acceptance/use limitations. No mandated universal time, chemical dose or legal standard. Relaying is not assumed to be short tank depuration: identify real relocation transport, receiving waterbody, dates and producer responsibility. Continued growth belongs to growout with receiving-site stock, periods and actual biological inputs/losses, while only the evidenced sanitary-conditioning responsibility stays here. An independent buyer/site outside the declared operating unit is not silently included. Historical guidance alone cannot authorize release of contaminated or toxin-bearing oysters.

#### Inputs

##### Product flows

###### State-qualified live oysters entering actual producer-responsible depuration or relaying (`depuration_accepted`)

Receive one paired transfer from the immediately preceding actual harvest_live, conditioning_clean, grading_accepted or live_holding_live event. Market grading may still be pending; retain actual source, pretreatment state and applicable authorization. Intake does not imply prior food release.

- Selected flow: State-qualified live oysters entering actual producer-responsible depuration or relaying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`depuration_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_depuration_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`depuration_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live in-shell food oysters released after actual depuration or relaying (`depuration_released`)

Actual treatment records and applicable current jurisdiction evidence support this treatment release, not a universal pathogen-free claim. Transfer in recorded order to conditioning_raw, grading_live, live_holding_entry or fully gate-qualified dispatch_live_entry; pending grading cannot bypass to final food.

- Selected flow: Live in-shell food oysters released after actual depuration or relaying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`depuration_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`depuration_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`depuration_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`depuration_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_depuration_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Actual pre-gate live holding and cooling (`live_holding`)

The stabilized output remains live in native shell. Record actual tank/dry holding, residence time, temperature history, aeration/refrigeration, mortality, water and oxygen if used. Cooling is not a new dead fresh/chilled product route. Count pre-gate handling resources once, even during delay; never assume universal holding feed or oxygen.

#### Inputs

##### Product flows

###### Live oysters entering actual holding with explicit grading and treatment status (`live_holding_entry`)

Receive one paired transfer from the immediately preceding actual harvest_live, conditioning_clean, grading_accepted or depuration_released event, retaining pending grading, pending treatment or released state. Unknown viability is not a live intake; do not pool undisclosed sanitary states.

- Selected flow: Live oysters entering actual holding with explicit grading and treatment status
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual delivered oxygen by purity and delivery state (`live_holding_oxygen`)

Only actual oxygen addition; measured delivered mass, no unverified gas-volume conversion or industrial plant-state match.

- Selected flow: Actual delivered oxygen by purity and delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`live_holding_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_live_holding_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`live_holding_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live oysters after holding or cooling transferred to the next actual responsibility (`live_holding_live`)

Transfer in actual order to conditioning, grading, depuration or fully gate-qualified dispatch, retaining cohort, live, grade and treatment qualifiers. Pending required acceptance cannot be silently merged into final food reference mass.

- Selected flow: Live oysters after holding or cooling transferred to the next actual responsibility
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually transferred to another owned node (`live_holding_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Dead and rejected holding oysters to actual treatment (`live_holding_mortality`)

Mortality stays outside living reference mass; disclose actual non-food/waste handling and no assumed sale credit.

- Selected flow: Dead and rejected holding oysters to actual treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual wastewater or saline effluent exported to declared treatment (`live_holding_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`live_holding_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`live_holding_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_live_holding_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: First producer presentation and handover (`dispatch`)

Accepted living oysters enter from grading, actual depuration or live holding according to recorded bypasses. Record one physical handover, actual buyer acceptance and product/package separation. Packaging protects or presents living in-shell product; bulk unwrapped dispatch still receives a documented final gate. Beyond-gate transport, buyer purification, shucking, cooking and end use are excluded.

#### Inputs

##### Product flows

###### Accepted live oysters received at final producer handover preparation (`dispatch_live_entry`)

Receive one paired transfer from the immediately preceding actual harvest_live, conditioning_clean, grading_accepted, depuration_released or live_holding_live event. Whatever the last node name, actual grading, permitted food use and applicable treatment release must already be complete and remain valid at this gate; otherwise finalization is blocked, not an automatic bypass. Retain identical species, native shell, live and treatment qualifiers.

- Selected flow: Accepted live oysters received at final producer handover preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_dispatch_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### CN grid-average alternating current below 1 kV consumed by actual node (`dispatch_electricity_cn`)

Conditional exact geography/voltage/consumption-mix match only; other supply has its own unresolved electricity exchange. Exclude own generated power from purchased grid consumption.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average alternating current below 1 kV consumed by actual node `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_dispatch_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_dispatch_energy`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual externally supplied treated industrial process water (`dispatch_water_supply`)

Only an actually matching supplied treated process-water product; unsuitable to stand for untreated seawater abstraction, tank recirculation or food-grade quality certification.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual externally supplied treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_dispatch_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Farmed live in-shell food oysters at first producer handover (`dispatch_food_handover`)

One final qualifying whole live in-native-shell food product at actual first producer handover, excluding external substrate/fouling/free water/ice/packaging. Native shell, tissues and naturally retained body fluids remain included; measure this exact state.

- Selected flow: Farmed live in-shell food oysters at first producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: `cp_dispatch_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Reference normalization definition, not biological yield
  - Range role: qa_guardrail
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: method_formula
  - Sources: `farmed-oyster-foreground-method`

###### Water actually transferred to another owned node (`dispatch_internal_water_transfer`)

Record only actual cross-node water transfers, paired to the receiver other_water_supply with identical state, mass, event and transfer id. This is neither environmental release nor independent sale and adds no second abstraction burden. Carrier water already included in algal feed uses the matched material-composition ledger, not a duplicate water exchange here.

- Selected flow: Water actually transferred to another owned node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_dispatch_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual wastewater or saline effluent exported to declared treatment (`dispatch_wastewater`)

Split by treatment destination and contamination; directly returned/discharged water goes to elementary row instead, never both for one water stream.

- Selected flow: Actual wastewater or saline effluent exported to declared treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_dispatch_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Fossil carbon dioxide from actual direct combustion to unspecified air (`dispatch_fossil_co2`)

Only actual fossil combustion with matching unspecified-air compartment; use measured fuel/carbon/oxidation evidence, separate biogenic carbon and outsourced emissions, and do not treat UUID as an emission factor.

- Selected flow: Fossil carbon dioxide from actual direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: First calculate direct fossil CO2 from actual node fuel mass, fossil carbon fraction and independently evidenced oxidation/emission method in section 8. Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_dispatch_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Water actually evaporated to air (`dispatch_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or evidenced materially relevant evaporation mass, period and receiving air compartment, reconciling intake, supply, internal transfers, carriers and stocks. Never invent evaporation as a balancing plug or duplicate water vapour already recorded in another emission card.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_dispatch_mass`
- Sources: `farmed-oyster-foreground-method`
- Range: Provisional screening envelope, not default quantity or universal allowed limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output` | applicable nodes and complete foreground package | Enumerate actual intended final food grades, independent sold seed/broodstock or other live products with their own gate; distinguish internal seed, live undersize returns, stock, waste and environmental losses. Subdivide measured operations first. For unavoidable shared production choose a documented causal physical driver; if no defensible physical relationship exists, use matched-period economic value with actual comparable net prices and sensitivity. Do not simultaneously credit substitution or change methods between nodes to minimize the reference burden. | `farmed-oyster-foreground-method` |
| `allocation_period` | applicable nodes and complete foreground package | Link all cohorts from collection/early-life through harvest, plus opening/closing standing animals and accumulated burden, asset acquisition/replacement/retirement and cleaning events, across their actual periods. Allocate measured asset service by actual lifetime service units/usage, revising estimates with retirement evidence; carry unharvested/returned stock burden forward and reconcile opening plus additions with exported, lost and closing burden. No arbitrary universal lifetime or annual yield. | `farmed-oyster-foreground-method` |
| `allocation_shared` | applicable nodes and complete foreground package | For shared boats, pumps, water treatment, tanks, stores and crates list consuming nodes and periods with event/asset id. Assign measured operating hour, metered volume/energy, area-time or other causal service share once; shares over all consumers reconcile to one total. Keep each node own protocol but not duplicate common raw event. External services and owned operation are mutually exclusive for the same supplied scope. | `farmed-oyster-foreground-method` |
| `allocation_returns` | applicable nodes and complete foreground package | Live grading undersize returns remain cohort stock, paired to growout_returns; retained seed/broodstock similarly carry historic burden without a new sale, purchase or full crop reset. Add actual extra grow-out/rehandling resources and mortality on return, do not divide the same original burden into the loop twice. Dead/rejected material never counts toward final live mass; actual treatment burdens remain in the producing lot unless explicit coproduct subdivision evidence supports otherwise. | `farmed-oyster-foreground-method` |
| `allocation_secondary` | applicable nodes and complete foreground package | Apply the declared secondary-shell inheritance/cut-off at its actual recovery handoff consistently to purchased and own recovered material, disclose prior and current preparation burdens and test double counting. Shell attached to marketed oyster has no separate shell coproduct until actually separated and exported; native shell stays in whole product, so no fictitious shell sale or sequestration credit. | `farmed-oyster-foreground-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_spat_collection_mass` | `spat_collection` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned wild spat collection node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_spat_collection_energy` | `spat_collection` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned wild spat collection node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_algal_culture_mass` | `algal_culture` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned algal feed culture node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_algal_culture_energy` | `algal_culture` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned algal feed culture node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_hatchery_mass` | `hatchery` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned broodstock and larval hatchery node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_hatchery_energy` | `hatchery` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned broodstock and larval hatchery node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_settlement_mass` | `settlement` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned settlement or remote setting node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_settlement_energy` | `settlement` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned settlement or remote setting node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_nursery_mass` | `nursery` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned oyster nursery node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_nursery_energy` | `nursery` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Owned oyster nursery node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_growout_mass` | `growout` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps; separately measured dead-oyster wet mass/count and biofouling wet mass/composition/moisture; removal/treatment receipt ids; separation evidence and unresolved mixed-removal gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Managed oyster grow-out node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_growout_energy` | `growout` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Managed oyster grow-out node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_harvest_mass` | `harvest` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Independent harvest of managed oysters node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_harvest_energy` | `harvest` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Independent harvest of managed oysters node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_conditioning_mass` | `conditioning` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Washing and desanding node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_conditioning_energy` | `conditioning` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Washing and desanding node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_grading_mass` | `grading` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Destination and market grading node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_grading_energy` | `grading` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Destination and market grading node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_depuration_mass` | `depuration` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Actual pre-gate sanitary depuration or relaying node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_depuration_energy` | `depuration` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Actual pre-gate sanitary depuration or relaying node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_live_holding_mass` | `live_holding` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Actual pre-gate live holding and cooling node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_live_holding_energy` | `live_holding` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only Actual pre-gate live holding and cooling node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_dispatch_mass` | `dispatch` | node material, organism, water, stock and emission mass | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Node owner measures each actual event with calibrated scales or matched weighed sampling and stock ledger; water uses actual-state density, emissions actual measured or declared factor evidence; reconcile source/destination transfers, suppliers and treatment receipts without duplicating shared events. | kg | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only First producer presentation and handover node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |
| `cp_dispatch_energy` | `dispatch` | actual node energy input | raw records and measurements with matched supplier evidence | cohort/batch; dates/period; event/asset/transfer ids; predecessor/successor; actual live stage/species/state; material/substance and origin/destination; gross/tare/net mass and external-cultch exclusion; count and representative mass sample; water volume/density/salinity and tank stock; meters and energy carrier; opening/closing animal/fuel/equipment stock; attribution share; carbon/emission-factor basis; error and gaps | Read node submeters and actual energy invoices, attributing common meters with equipment run logs; retain actual supply geography/voltage, convert kWh to MJ by verified 3.6, no duplicate own generation and purchased electricity. | MJ | each event/transfer/batch; meters continuous or complete run period | complete declared cohort cycle and reporting periods, with traceable cross-period stock and asset service | only First producer presentation and handover node of declared operating unit, preserving actual waterbody/supply boundary | per 1 kg reference flow | scale/meter calibration, independent representative samples, batch routes/transfers, live acceptance and authorized release, stock/shared-event reconciliation, density/factor origin/error and gap disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `foreground_normalization` | all non-final inventory rows | Keep two explicitly labelled views. First reconcile unallocated physical receipts, transfers, products, losses and stocks for the complete declared cohort/trip/run; pair internal transfers in the same state and unit, retaining their measured mass. Assign shared resource/service events to actual consuming nodes and periods once using evidenced service shares, without shrinking product, biomass, water or waste partitions by a co-product share. Divide this physical inventory by the matching positive accepted final net kg. Separately derive a labelled single-output LCA burden/inventory projection using section 7 co-product allocation exactly once, retaining the unallocated inventory and allocation matrix. Never test allocated exchanges against an unallocated physical balance, apply output shares again downstream, or set an internal quantity to the final 1 kg. | node quantities/attribution ledger; cp_dispatch_mass accepted net mass; corresponding node protocol | actual exchanges per 1 kg reference flow | `farmed-oyster-foreground-method` |
| `stage_mass_conversion` | seed and stock counts | Stage net biomass = actual count × representative individual net mass of matching cohort/stage/state; exclude external cultch and propagate sampling error. Only measured stage samples support conversion, not meat yield. | actual counts, representative weighed samples, cultch tare and node protocol | stage net mass and uncertainty | `farmed-oyster-foreground-method` |
| `emission_accounting` | actual node fossil_co2 and other direct emission cards | Compute direct fossil carbon dioxide from actual fuel/carbon/oxidation evidence or declared factor matched to actual technology/fuel/period; separate biogenic carbon and other exact substances. Then apply node attribution and accepted final net-mass normalization; no universal default emission factor. | node fuel, fossil carbon, oxidation or actual factor source, receiving compartment and matching mass protocol | medium-specific direct emitted mass and uncertainty | `farmed-oyster-foreground-method` |
| `cohort_stock_reconciliation` | cohort and return stock | For each cohort reconcile opening live count + actual entries = harvested/exported + mortality/other losses + closing live count; biomass separately includes growth and actual inputs/outputs, without equal mass across growth. Independently reconcile accumulated burden opening + additions = exported attribution + loss attribution + closing carryover; internal loops create no purchase or reference sale. | node cohort counts/mass; opening/closing/return transfers; added and attributed burdens | auditable count, mass and burden carryover | `farmed-oyster-foreground-method` |
| `environmental_nutrition_model` | growout_natural_nutrition | Only with a declared site model and independent calibration evidence, calculate assimilated environmental biological matter as f(actual environmental observations, cohort live biomass, time). Retain actual algebra, parameter units/provenance, raw quantities, independent calibration/validation, species/stage and wet/dry basis and uncertainty, then apply the two-view normalization rule. Adult weight gain or gross filtration alone is not assimilated intake. Missing model or observations is an unresolved quantitative gap, not zero or a complete data package. | actual observations; independently calibrated model; parameters/units; cohort and period | assimilated environmental biological matter mass and uncertainty | `farmed-oyster-foreground-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_live_gate` | dispatch_food_handover | actual live acceptance, species, farmed origin, gate and net mass agree; explicit cultch exclusion/body-fluid retention method | calibrated weighing, independent samples, batch/buyer acceptance and applicable authorization |
| `dq_stage_coverage` | whole path | actual activation/bypass, source/destination and purchased-stage upstream burden complete by node; missing is not zero, age/size/ploidy cannot replace species/stage facts | cohort routes, purchases, node protocols and gap register |
| `dq_temporal_shared` | cross-period cohorts and shared assets | complete cycles, opening/closing living stock and accumulated burden, asset service and common meters reconcile over same events/periods; actual mortality/no-output periods retain burdens | asset service/retirement, stock, event shares and reconciliation |
| `dq_empirical_ranges` | all cards and ranges | provisional envelopes never replace amounts; empirical ranges require independent comparable batches with samples/applicability; all density, factor and mass conversions retain evidence/error | independent sampling, calibration, applicability and uncertainty report |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_spat_collection_collectors` | `spat_collection`; inputs; product | Identify and separately collect every actual exchange covered by “Collectors and secondary shell cultch deployed”; retain all following collection, quantity and normalization obligations: Declare each material, original shell-producing system, recovery/cleaning handoff and actual service share; external cultch never enters the reference denominator. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_other_energy` | `spat_collection`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_spat_collection_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_fuel` | `spat_collection`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_assets_services` | `spat_collection`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_other_water_supply` | `spat_collection`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_operating_consumables` | `spat_collection`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_raw_water` | `spat_collection`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_incidental_biomass` | `spat_collection`; inputs; elementary | Identify and separately collect every actual exchange covered by “Nontarget incidental biomass actually removed in this event”; retain all following collection, quantity and normalization obligations: Record only nontarget organisms actually removed from a named environment by this responsibility event, split by taxon, state and net mass to reconcile live return or collected dead waste. Never duplicate target wild spat, managed oyster stock or the same organism already included in an upstream transfer; mere presence in open water is not withdrawal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_dead_spat` | `spat_collection`; outputs; waste | Identify and separately collect every actual exchange covered by “Dead spat and fouling removed for declared treatment”; retain all following collection, quantity and normalization obligations: Separate mortality and collector fouling by actual treatment destination; environmental disposal requires a different resolved elementary exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_operating_waste` | `spat_collection`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_incidental` | `spat_collection`; outputs; elementary | Identify and separately collect every actual exchange covered by “Incidental organisms returned alive to source waterbody”; retain all following collection, quantity and normalization obligations: Record species and actual released state/destination; does not reverse capture burden or prove survival. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_discharge` | `spat_collection`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spat_collection_other_emissions` | `spat_collection`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_spat_collection_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_spat_collection_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_inoculum` | `algal_culture`; inputs; product | Identify and separately collect every actual exchange covered by “Identified algal inoculum or starter culture”; retain all following collection, quantity and normalization obligations: Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_nutrients` | `algal_culture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual algal culture nutrients and gas additions by formulation”; retain all following collection, quantity and normalization obligations: Split actual concrete formulations, nutrient mass basis and gas identity; a carbon dioxide supply is not atmospheric carbon removal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_other_energy` | `algal_culture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_algal_culture_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_fuel` | `algal_culture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_assets_services` | `algal_culture`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_other_water_supply` | `algal_culture`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_operating_consumables` | `algal_culture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_raw_water` | `algal_culture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_feed` | `algal_culture`; outputs; product | Identify and separately collect every actual exchange covered by “Cultured algal feed delivered to declared owned consumer”; retain all following collection, quantity and normalization obligations: Measure wet culture mass and dry biomass or concentration separately; pair transfer and receiving concentration, water carrier and stage. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_operating_waste` | `algal_culture`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_discharge` | `algal_culture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_algal_culture_other_emissions` | `algal_culture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_algal_culture_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_algal_culture_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_feed` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Algal feed supplied to actual broodstock or larval stage”; retain all following collection, quantity and normalization obligations: Own algal-culture output or purchased supplier flow, with actual wet/dry concentration; never substitute ambient plankton for cultured feed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_other_energy` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_hatchery_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_fuel` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_assets_services` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_other_water_supply` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_operating_consumables` | `hatchery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_raw_water` | `hatchery`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_mortality` | `hatchery`; outputs; waste | Identify and separately collect every actual exchange covered by “Hatchery mortalities, unviable eggs and larval residues to treatment”; retain all following collection, quantity and normalization obligations: Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_operating_waste` | `hatchery`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_discharge` | `hatchery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_other_emissions` | `hatchery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_feed` | `settlement`; inputs; product | Identify and separately collect every actual exchange covered by “Algal feed supplied during owned settlement”; retain all following collection, quantity and normalization obligations: Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_other_energy` | `settlement`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_settlement_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_fuel` | `settlement`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_assets_services` | `settlement`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_other_water_supply` | `settlement`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_operating_consumables` | `settlement`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_raw_water` | `settlement`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_failed` | `settlement`; outputs; waste | Identify and separately collect every actual exchange covered by “Unsettled or dead larvae and spent setting substrate to treatment”; retain all following collection, quantity and normalization obligations: Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_operating_waste` | `settlement`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_discharge` | `settlement`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_settlement_other_emissions` | `settlement`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_feed` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied feed or fertilization material for owned nursery”; retain all following collection, quantity and normalization obligations: Split feed from fertilizer/pond enrichment and account actual nutrient and discharge species; neither is universally required. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_other_energy` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_nursery_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_fuel` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_assets_services` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_other_water_supply` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_operating_consumables` | `nursery`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_raw_water` | `nursery`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_dead` | `nursery`; outputs; waste | Identify and separately collect every actual exchange covered by “Nursery mortality and removed fouling to treatment”; retain all following collection, quantity and normalization obligations: Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_operating_waste` | `nursery`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_discharge` | `nursery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_other_emissions` | `nursery`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_nursery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_nursery_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_gear` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Grow-out substrate, racks, bags, ropes, floats and anchors by actual material”; retain all following collection, quantity and normalization obligations: Actual bottom/off-bottom/suspended delta; depreciated embodied material service share, maintenance replacements and loss tracked by asset id, not full installation each harvest. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_other_energy` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_growout_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_fuel` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_assets_services` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_other_water_supply` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_operating_consumables` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_natural_nutrition` | `growout`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual assimilated environmental biological matter by declared aquatic source”; retain all following collection, quantity and normalization obligations: Distinguish actual environmental nutrition from supplied feed, characterize substance/biomass and receiving/source compartment; use measured site flux or a declared model calibrated with independent site observations and uncertainty, no purchased-feed exchange or automatic nutrient/carbon-removal credit. Missing material evidence is a disclosed data gap, never invented zero uptake. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_raw_water` | `growout`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_broodstock` | `growout`; outputs; product | Identify and separately collect every actual exchange covered by “Live oysters transferred to owned hatchery as broodstock”; retain all following collection, quantity and normalization obligations: Explicit alternate destination, never also harvest reference product; carry attributable stock burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_operating_waste` | `growout`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_biodeposition` | `growout`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual measured or model-supported biodeposited constituents to water or sediment”; retain all following collection, quantity and normalization obligations: Resolve each substance/species/basis and exact receiving medium from site evidence; no generic faeces UUID or zero from missing data, and never a negative nutrient-removal factor. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_gear_loss` | `growout`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual lost grow-out gear material to declared receiving environment”; retain all following collection, quantity and normalization obligations: Separate actual polymer/material and water/sediment compartment; recovery effort is an actual service, not proof that unrecovered loss is zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_discharge` | `growout`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_other_emissions` | `growout`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_other_energy` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_harvest_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_fuel` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_assets_services` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_other_water_supply` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_operating_consumables` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_raw_water` | `harvest`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_incidental_biomass` | `harvest`; inputs; elementary | Identify and separately collect every actual exchange covered by “Nontarget incidental biomass actually removed in this event”; retain all following collection, quantity and normalization obligations: Record only nontarget organisms actually removed from a named environment by this responsibility event, split by taxon, state and net mass to reconcile live return or collected dead waste. Never duplicate target wild spat, managed oyster stock or the same organism already included in an upstream transfer; mere presence in open water is not withdrawal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_breakage` | `harvest`; outputs; waste | Identify and separately collect every actual exchange covered by “Broken or dead harvest oysters and collected debris to treatment”; retain all following collection, quantity and normalization obligations: Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_operating_waste` | `harvest`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_incidental` | `harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Incidental organisms actually returned alive at harvest site”; retain all following collection, quantity and normalization obligations: Actual species and compartment; dead/disposed organisms are separate outputs, not assumed live. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_discharge` | `harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_other_emissions` | `harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_harvest_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_harvest_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_other_energy` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_conditioning_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_fuel` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_assets_services` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_other_water_supply` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_operating_consumables` | `conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_raw_water` | `conditioning`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_removed` | `conditioning`; outputs; waste | Identify and separately collect every actual exchange covered by “Removed sediment, biofouling and dead/broken oysters to treatment”; retain all following collection, quantity and normalization obligations: Split removed external material and dead oysters, retain distinct mass basis and treatment destination. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_operating_waste` | `conditioning`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_discharge` | `conditioning`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_other_emissions` | `conditioning`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_conditioning_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_conditioning_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_other_energy` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_grading_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_fuel` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_assets_services` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_other_water_supply` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_operating_consumables` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_raw_water` | `grading`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_operating_waste` | `grading`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_discharge` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_other_emissions` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_grading_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_treatment` | `depuration`; inputs; product | Identify and separately collect every actual exchange covered by “Actual depuration consumables, disinfection inputs and filters”; retain all following collection, quantity and normalization obligations: Declare each actual material, active concentration, equipment and mode; UV electricity is metered energy not a fabricated chemical exchange; spent material routed separately. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_other_energy` | `depuration`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_depuration_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_fuel` | `depuration`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_assets_services` | `depuration`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_other_water_supply` | `depuration`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_operating_consumables` | `depuration`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_raw_water` | `depuration`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_rejected` | `depuration`; outputs; waste | Identify and separately collect every actual exchange covered by “Dead or rejected depuration oysters and spent filters to treatment”; retain all following collection, quantity and normalization obligations: Split living rejected lot destination, mortality and material waste; release failures never join qualifying live reference output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_operating_waste` | `depuration`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_discharge` | `depuration`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_depuration_other_emissions` | `depuration`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_depuration_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_depuration_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_coolant` | `live_holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual externally supplied cooling medium by physical state”; retain all following collection, quantity and normalization obligations: Declare medium, contact/separation and source; farm ice cannot inherit a capture-fishery ice identity. Own refrigeration already belongs in energy and equipment. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_other_energy` | `live_holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_live_holding_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_fuel` | `live_holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_assets_services` | `live_holding`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_other_water_supply` | `live_holding`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_operating_consumables` | `live_holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_raw_water` | `live_holding`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_operating_waste` | `live_holding`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_discharge` | `live_holding`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_holding_other_emissions` | `live_holding`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_holding_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_live_holding_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_packaging` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual single-use and reusable transport/presentation packaging”; retain all following collection, quantity and normalization obligations: Measure actual material and reusable service share, cleaning and return ledger; exclude packaging from net oyster mass and do not count the same reusable crate fully at each trip. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_other_energy` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual other purchased electricity or thermal energy by supplier and delivered state”; retain all following collection, quantity and normalization obligations: Split each other geography/voltage/energy carrier; no overlap with CN electricity or own-fuel consumption. Supplier service inventory is not repeated as direct node fuel. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Collect actual node quantities with cp_dispatch_energy; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_energy` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_fuel` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel and lubricants for owned equipment or vessels by substance”; retain all following collection, quantity and normalization obligations: Meter purchases, opening/closing fuel stocks and operation by asset/event; freshwater-capture vessel diesel is not an oyster-farm fuel identity. Do not add fuel already included in outsourced services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_assets_services` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable embodied asset and maintenance material mass”; retain all following collection, quantity and normalization obligations: Record each actual embodied material mass/service fraction and consumer/period once; operational external services use separately resolved actual property and scope in foreground records, never cost as kg or duplicated owned fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_other_water_supply` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied or inter-node water, source and state declared”; retain all following collection, quantity and normalization obligations: Instantiate actual externally supplied seawater, potable or other water not matching the fixed industrial-water card, or an actual internal receipt, separately by source, salinity, treatment and use. An internal receipt pairs with the sender internal_water_transfer and carries upstream burden once, not another purchase or abstraction. Same-node recirculation is only an auxiliary flow log. Never duplicate water_supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_operating_consumables` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating hygiene, filtration and gas consumables by identity”; retain all following collection, quantity and normalization obligations: Record only actual cleaning/disinfection, filtration, water-conditioning or gas consumables, split by formulation, purity, delivered state and measured mass. Exclude the same quantity already in algal nutrients, feed, fuel/lubricants, gear, depuration-specific inputs or oxygen cards. Pumping ambient air is not purchased oxygen; missing amount is not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_raw_water` | `dispatch`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water abstracted from identified freshwater or saline environment”; retain all following collection, quantity and normalization obligations: Split source, compartment and salinity; record once-through abstraction separately from recirculation, returned water and naturally open-water exposure. Mass from volume requires actual density/state evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_packaging_handover` | `dispatch`; outputs; product | Identify and separately collect every actual exchange covered by “Actual packaging handed over with accepted oysters”; retain all following collection, quantity and normalization obligations: Record actual disposable material and ownership handed over with the lot, wholly outside oyster reference net mass. Returnable crates retain ownership/return and asset-service records; attributed manufacturing mass is not the physical mass handed over each trip. Packaging is not automatically an independently sold economically allocated co-product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_rejects` | `dispatch`; outputs; waste | Identify and separately collect every actual exchange covered by “Final inspection rejects, dead oysters and packaging waste by destination”; retain all following collection, quantity and normalization obligations: Record only actual node exchanges with identity, state, origin/destination and measurement evidence; pair transfers by actual cohort/event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_operating_waste` | `dispatch`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected spent operating and retired materials to actual recipients”; retain all following collection, quantity and normalization obligations: Measure spent filters, cleaning residues, containers and replaced/retired equipment materials separately with actual recipients; exclude material already in mortality, spent-setting-substrate, depuration-waste or packaging-reject cards. Usable stocks and handed-over products are not waste; direct environmental losses are separate elementary flows, with no default recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_discharge` | `dispatch`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct returned water and discharged substances to named receiving medium”; retain all following collection, quantity and normalization obligations: Separate bulk returned water from each measured pollutant species/concentration and receiving compartment; no total nitrogen-to-specific-nitrate or generic-organic UUID shortcut. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_other_emissions` | `dispatch`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct emitted substances by exact species and medium”; retain all following collection, quantity and normalization obligations: Actual combustion pollutants, refrigerant leakage or process emissions only; resolve chemical species, particle-size/basis and air/water/soil compartment separately, never a generic mixture UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_dispatch_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_dispatch_mass` Sources: `farmed-oyster-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_entry` | `hatchery`; inputs; product | Individually identify and independently measure the actual exchanges within “Broodstock, fertilized eggs or larvae entering actual owned hatchery stage”; all collection and conversion obligations apply: Choose actual entry state per cohort; record supplier upstream stage or grow-out internal transfer and do not invent missing upstream stages. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_hatchery_broodstock_exit` | `hatchery`; outputs; product | Individually identify and independently measure the actual exchanges within “Living broodstock returned to owned grow-out or sold at declared gate”; all collection and conversion obligations apply: Separate internal retained stock from independent sold co-product and record animal id/cohort and carried burden; these are never food reference output here. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_hatchery_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_hatchery_mass` Sources: `farmed-oyster-foreground-method` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_settlement_cultch` | `settlement`; inputs; product | Individually identify and independently measure the actual exchanges within “Virgin or recovered shell and other setting substrate”; all collection and conversion obligations apply: For secondary shells identify origin, recovery, transport and pre-setting preparation once, applying secondary-material burden rule. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_settlement_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_settlement_mass` Sources: `farmed-oyster-foreground-method` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_growout_returns` | `growout`; inputs; product | Individually identify and independently measure the actual exchanges within “Live undersize oysters or owned broodstock returned to grow-out”; all collection and conversion obligations apply: Pair grading undersize or hatchery broodstock transfer; retain historical cohort burdens and current stock once, never restart as new purchased seed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_growout_mass; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: calculated_value Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: calculated_from_collection Collection protocol: `cp_growout_mass` Sources: `farmed-oyster-foreground-method` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | applicable nodes and complete foreground package | Verify species, farmed origin, live state and native-shell net mass at the one actual producer gate. Missing actual acceptance or applicable legal evidence blocks a food-use claim; live status alone is insufficient. Final seed, wild adult, dead, shucked, cooked and frozen output are outside scope. | `farmed-oyster-foreground-method` |
| `validate_routes` | applicable nodes and complete foreground package | Reconstruct actual cohort entry stage and ordered node path, including every active optional intervention and bypass. Purchased larvae/spat/seed skip absent earlier stages but retain supplier burdens; no mandatory nursery or depuration from a classification label. Resolve unknown stage/treatment state before final data use. Check every claimed technology delta against actual equipment, input category, stock and monitoring evidence. | `farmed-oyster-foreground-method` |
| `validate_transfers` | applicable nodes and complete foreground package | Pair every internal output/input at the same actual state, measured quantity and uncertainty. Exclude external cultch and free carrier water identically only for oyster biological net-mass interfaces. For wet algal-culture feed and other supplied materials preserve the same actual wet mass, dry matter, concentration and carrier basis at both ends, retaining carrier water in composition subledgers without a duplicate water exchange. Actual losses, flows and stocks explain differences. Match undersize/broodstock loops without accepted-sales attribution; shell-bearing stock is not constant mass during growth. Normalize only to positive accepted final live net mass; no-output/dead-crop periods retain documented burdens, never divide by zero or omit failed production. | `farmed-oyster-foreground-method` |
| `validate_water` | applicable nodes and complete foreground package | Reconcile abstracted/supplied water, recirculation, carried feed/product water, evaporation, treatment exports, direct returns/discharges and tank stock changes by node. Record elemental nutrient/pollutant mass basis separately from bulk water, do not add both full wastewater and identical direct discharge or count each recirculation pass as new input. | `farmed-oyster-foreground-method` |
| `validate_resources` | applicable nodes and complete foreground package | Reconcile each utility meter, fuel stock, invoice and asset/event owner across all node consumers/periods. Purchased service includes no second identical own fuel; own generation includes fuel and direct emissions once and no duplicate grid purchase. Only exact actual CN low-voltage consumption uses that fixed flow; only actual supplied treated water uses its fixed identity. | `farmed-oyster-foreground-method` |
| `validate_ranges` | applicable nodes and complete foreground package | Review supplied Ranges as provisional reasoned screening envelopes, not measured yields, default inventories or universal limits. Cards without numerical Ranges retain their own independent range or measurement-uncertainty collection duty; never copy a removed mixed-stream range to children. Final exchange completion requires independently supported actual quantity and range/uncertainty evidence for each stream. Numerical QA needs independent comparable campaigns/samples and documented actual state, not the tested batch maximum. Preserve genuine outliers; final 1 kg is normalization only. | `farmed-oyster-foreground-method` |
| `validate_identities` | applicable nodes and complete foreground package | Resolve each concrete foreground exchange to its verified exact physical identity, property/unit and destination before downstream dataset publication; semantic umbrellas may generate zero/one/multiple actual exchanges, never one fabricated universal identity. Identity evidence never supplies emission factors, densities, shelf life or sanitation validity. | `farmed-oyster-foreground-method` |
| `validate_credits` | applicable nodes and complete foreground package | Require actual losses/discharges/gear and site impact evidence with uncertainty; do not cancel them against general qualitative ecosystem benefits. No automatic negative shell-carbon, nutrient, waste or habitat credits. Check node-local protocol ownership, bilingual machine fields and current deterministic projection. | `farmed-oyster-foreground-method` |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground live food-oyster production package of one declared operating unit, actual cohorts and responsibility boundary |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | foreground and downstream process/lifecycle-model projections with matching species, live native-shell net mass, production stages and gate semantics |
| excluded_use | automatic mismatched-state/geography proxy; meat mass, wild adults, final seed or processed oysters; default environmental credits; food safety certification or publication of unverified final exchanges |
| required_metadata | species, site/waterbody, cohort/dates, actual technology stages/bypasses, supplier entry, final gate, live grade/net mass, treatment responsibility/acceptance, asset periods and allocation methods |
| required_quality_disclosure | sampling/measurement uncertainty; purchased upstream completeness; unverified identities/gaps; provisional envelopes; cohort stock/returns/shared assets; environmental release and treatment limitations |
| update_trigger | material change in species/site, seed entry, technology/equipment, responsibility/gate, live state, depuration rules, asset service, emission evidence, supplier or measured parameters |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-oysters` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 04422 boundary, not production factors |
| `fao-oyster-production` | official_guidance | https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_pacificcuppedoyster.htm | Historical qualitative seed, culture, harvest and conditioning routes; no numeric defaults |
| `noaa-oyster-aquaculture` | official_guidance | https://www.fisheries.noaa.gov/species/eastern-oyster/aquaculture | General hatchery and culture interfaces only; page mixes species names, not species-specific or credit-factor evidence |
| `fda-nssp-context` | official_guidance | https://www.fda.gov/food/federal-state-local-tribal-and-territorial-cooperative-human-food-programs/national-shellfish-sanitation-program-nssp | US sanitation/traceability program context only; actual competent-authority rules and release evidence required separately |
| `farmed-oyster-foreground-method` | method_factor | Collection, attribution and calculation method explicitly defined in sections 4, 5, 7, 8 and 9 of this PCR; a foreground study must supply its actual records | Declared foreground method, normalization, same-state handoffs, stocks, balance and uncertainty checks; not an external measured dataset |
